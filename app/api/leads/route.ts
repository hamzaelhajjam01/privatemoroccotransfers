import { NextResponse } from "next/server";
import { processLead, QuoteLeadData } from "@/lib/email";

/**
 * Receives the "Email me this quote" forms (booking popup and Trip Finder).
 *
 * Body: { name, email, phone?, message?, marketingConsent, consentText, createdAt, quote: {...}, source }
 *
 * Dispatches:
 * 1. Branded HTML quote email to the customer.
 * 2. Lead notification to admin/dispatch.
 * 3. Sync to Resend Audience/Marketing contacts if consent was given.
 * 4. Webhook forwarding if LEADS_WEBHOOK_URL is set.
 *
 * Abuse protection: this endpoint sends email from our domain to an address the visitor types,
 * so it only accepts requests from our own pages, rate-limits per visitor and per recipient,
 * drops bot submissions (honeypot), and cleans every field (length caps, no links, no markup).
 */
const isEmail = (v: unknown) => typeof v === "string" && v.length <= 254 && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(v);

const ALLOWED_ORIGINS = new Set(["https://www.privatemoroccotransfers.com", "https://privatemoroccotransfers.com"]);
const isDev = process.env.NODE_ENV !== "production";

function fromOurSite(req: Request): boolean {
  const origin = req.headers.get("origin") || "";
  const referer = req.headers.get("referer") || "";
  const ok = (u: string) => {
    if (!u) return false;
    try {
      const o = new URL(u).origin;
      return ALLOWED_ORIGINS.has(o) || (isDev && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o));
    } catch {
      return false;
    }
  };
  return ok(origin) || (!origin && ok(referer));
}

/** Simple in-memory sliding-window limiter (per server process; resets on restart). */
const hits = new Map<string, number[]>();
function limited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < 24 * 3600_000)) hits.delete(k);
  return false;
}

/** Plain text only: no links, no angle brackets, trimmed and capped. */
const clean = (v: unknown, max: number): string =>
  String(v ?? "")
    .replace(/https?:\/\/\S+|www\.\S+/gi, "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const cleanMultiline = (v: unknown, max: number): string =>
  String(v ?? "")
    .replace(/https?:\/\/\S+|www\.\S+/gi, "")
    .replace(/[<>]/g, "")
    .replace(/[ \t]+/g, " ")
    .trim()
    .slice(0, max);

const bounded = (v: unknown, max: number): number | undefined => {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) && n >= 0 && n <= max ? n : undefined;
};

export async function POST(req: Request) {
  if (!fromOurSite(req)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }
  const email = String(body.email).trim().toLowerCase();

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  if (
    limited(`ip:${ip}`, 5, 15 * 60_000) || // 5 requests per visitor per 15 min
    limited(`to:${email}`, 3, 24 * 3600_000) || // 3 emails to the same address per day
    limited("all", 100, 3600_000) // 100 per hour site-wide
  ) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const rawQuote = typeof body.quote === "object" && body.quote !== null ? (body.quote as Record<string, unknown>) : null;
  const quote: QuoteLeadData["quote"] = rawQuote
    ? {
        trip: clean(rawQuote.trip, 60) || undefined,
        route: clean(rawQuote.route, 120) || undefined,
        km: bounded(rawQuote.km, 5000),
        travellers: bounded(rawQuote.travellers, 60),
        vehicle: clean(rawQuote.vehicle, 60) || undefined,
        comfort: clean(rawQuote.comfort, 40) || undefined,
        when: clean(rawQuote.when, 60) || undefined,
        priceEUR: bounded(rawQuote.priceEUR, 20000),
      }
    : null;

  const source = String(body.source ?? "trip_finder");
  const lead: QuoteLeadData = {
    name: clean(body.name, 80),
    email,
    marketingConsent: body.marketingConsent === true,
    consentText: body.marketingConsent === true ? clean(body.consentText, 300) : null,
    createdAt: new Date().toISOString(),
    quote,
    source: /^[a-z0-9_]{1,40}$/i.test(source) ? source : "unknown",
    phone: typeof body.phone === "string" ? body.phone.replace(/[^\d+()\s-]/g, "").slice(0, 30) || undefined : undefined,
    message: typeof body.message === "string" ? cleanMultiline(body.message, 1500) || undefined : undefined,
  };

  // 1. Process email delivery and marketing audience sync via Resend
  const emailResult = await processLead(lead);

  // 2. Forward to external webhook if configured (Zapier, Make, Google Sheets)
  const hook = process.env.LEADS_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("[leads webhook] Failed to forward:", err);
    }
  }

  // The forms treat any non-2xx as a failure and point the visitor to WhatsApp instead.
  if (!emailResult.ok) {
    return NextResponse.json({ ok: false, error: "email_not_sent" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
