import { NextResponse } from "next/server";
import { processLead, QuoteLeadData } from "@/lib/email";

/**
 * Receives the "Email me this quote" form from the Trip Finder.
 *
 * Body: { name, email, marketingConsent, consentText, createdAt, quote: {...}, source }
 *
 * Dispatches:
 * 1. Branded luxury HTML quote email to the customer.
 * 2. Instant lead notification to admin/dispatch.
 * 3. Sync to Resend Audience/Marketing contacts if consent was given.
 * 4. Webhook forwarding if LEADS_WEBHOOK_URL is set.
 */
const isEmail = (v: unknown) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isEmail(body.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const quote = typeof body.quote === "object" && body.quote !== null ? (body.quote as QuoteLeadData["quote"]) : null;

  const lead: QuoteLeadData = {
    name: String(body.name ?? "").slice(0, 120),
    email: String(body.email).trim().toLowerCase(),
    marketingConsent: body.marketingConsent === true,
    consentText: body.marketingConsent === true ? String(body.consentText ?? "") : null,
    createdAt: String(body.createdAt ?? new Date().toISOString()),
    quote,
    source: String(body.source ?? "trip_finder"),
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

  return NextResponse.json({ ok: true, email: emailResult });
}
