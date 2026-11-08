import { Resend } from "resend";
import { generateQuoteEmailHtml, QuoteLeadData } from "./templates/quote-email";
import { generateAdminAlertHtml } from "./templates/admin-alert";
import { SUPPORT_EMAIL } from "@/lib/site";

export type { QuoteLeadData };

export async function processLead(lead: QuoteLeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not configured. Mocking lead submission for:", lead.email);
    return { ok: true, mocked: true };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Private Morocco Transfers <quotes@privatemoroccotransfers.com>";
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || SUPPORT_EMAIL;
  const audienceId = process.env.RESEND_AUDIENCE_ID || "4f0518d3-45e0-4331-ace2-70ea14e82457";

  const results: Record<string, unknown> = {};

  // 1. Send Luxury HTML Quote to Customer
  try {
    const routeName = lead.quote?.route || "Morocco Private Transfer";
    const priceText = lead.quote?.priceEUR ? ` (€${lead.quote.priceEUR})` : "";
    const customerRes = await resend.emails.send({
      from: fromEmail,
      to: [lead.email],
      replyTo: adminEmail,
      subject: `Your Quote: ${routeName}${priceText} — Private Morocco Transfers`,
      html: generateQuoteEmailHtml(lead),
    });
    results.customerEmail = customerRes;
  } catch (err: unknown) {
    console.error("[email] Failed to send customer quote email:", err);
    results.customerEmailError = (err as Error)?.message || String(err);
  }

  // 2. Send Lead Alert to Admin
  try {
    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: lead.email,
      subject: `🔔 New Quote Lead: ${lead.name || "Traveler"} — ${lead.quote?.route || "Transfer"} (€${lead.quote?.priceEUR || 0})`,
      html: generateAdminAlertHtml(lead),
    });
    results.adminEmail = adminRes;
  } catch (err: unknown) {
    console.error("[email] Failed to send admin alert email:", err);
    results.adminEmailError = (err as Error)?.message || String(err);
  }

  // 3. Add to Resend Audience if marketing consent was granted
  if (lead.marketingConsent && audienceId) {
    try {
      const nameParts = (lead.name || "").trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const contactRes = await resend.contacts.create({
        audienceId,
        email: lead.email,
        firstName,
        lastName,
        unsubscribed: false,
      });
      results.audienceContact = contactRes;
    } catch (err: unknown) {
      // In Resend, if contact already exists it throws or returns error - log gracefully without failing the request
      console.warn("[email] Resend contact creation note:", (err as Error)?.message || err);
      results.audienceNote = (err as Error)?.message || String(err);
    }
  }

  return { ok: true, results };
}
