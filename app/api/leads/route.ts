import { NextResponse } from "next/server";

/**
 * Receives the "Email me this quote" form from the trip finder.
 *
 * Body: { name, email, marketingConsent, consentText, createdAt, quote: {...}, source }
 *
 * Right now it validates the lead, logs it, and (if LEADS_WEBHOOK_URL is set) forwards it as JSON.
 * Swap the forwarding part for your email tool (Brevo, Mailchimp, Resend...) or database.
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

  const lead = {
    name: String(body.name ?? "").slice(0, 120),
    email: String(body.email).trim().toLowerCase(),
    marketingConsent: body.marketingConsent === true,
    // keep the exact wording the person agreed to, and when (needed for GDPR proof of consent)
    consentText: body.marketingConsent === true ? String(body.consentText ?? "") : null,
    consentAt: body.marketingConsent === true ? String(body.createdAt ?? new Date().toISOString()) : null,
    quote: body.quote ?? null,
    source: String(body.source ?? "trip_finder"),
    receivedAt: new Date().toISOString(),
  };

  const hook = process.env.LEADS_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    if (!res.ok) return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  } else {
    console.log("[trip-finder lead]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
