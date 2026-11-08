import { QuoteLeadData } from "./quote-email";

export function generateAdminAlertHtml(lead: QuoteLeadData): string {
  const name = lead.name || "Anonymous Traveler";
  const email = lead.email;
  const q = lead.quote || {};
  const priceEur = q.priceEUR || 0;
  const route = q.route || "Unspecified Route";
  const vehicle = q.vehicle || "Standard";
  const travellers = q.travellers || 1;
  const when = q.when || "Not specified";
  const consent = lead.marketingConsent ? "YES (Opted in to newsletter)" : "NO (Quote only)";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Quote Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: #f4f4f5; margin: 0; padding: 24px; color: #18181b;">
  <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 10px; border: 1px solid #e4e4e7; overflow: hidden;">
    <div style="background: #18181b; padding: 20px 24px; color: #ffffff;">
      <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #d6b67e; font-weight: 600;">NEW WEBSITE LEAD</span>
      <h2 style="margin: 4px 0 0; font-size: 18px; color: #d6b67e; font-weight: 700;">Trip Quote: ${route} (€${priceEur})</h2>
    </div>

    <div style="padding: 24px;">
      <h3 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a;">Customer Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; width: 120px;">Name:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Email:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Marketing Consent:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${consent}</td>
        </tr>
      </table>

      <h3 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a;">Quote Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; width: 120px;">Route:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">${route}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Fixed Price:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; color: #b45309; font-weight: 700; font-size: 18px;">€${priceEur}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Vehicle:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${vehicle}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Travellers:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${travellers}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">When:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${when}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600;">Source:</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f4f4f5;">${lead.source || "trip_finder"}</td>
        </tr>
      </table>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${email}?subject=Your Private Transfer in Morocco - ${encodeURIComponent(route)}" style="display: inline-block; background: #18181b; color: #ffffff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
          Reply to Customer Directly
        </a>
      </div>
    </div>

    <div style="background: #fafafa; padding: 12px 24px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #71717a; text-align: center;">
      Private Morocco Transfers Dispatch System
    </div>
  </div>
</body>
</html>`;
}
