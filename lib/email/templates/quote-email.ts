import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, whatsappUrl } from "@/lib/site";
import { EUR_RATE } from "@/lib/pricing";

export type QuoteLeadData = {
  name: string;
  email: string;
  marketingConsent: boolean;
  consentText: string | null;
  createdAt: string;
  quote?: {
    trip?: string;
    route?: string;
    km?: number;
    travellers?: number;
    vehicle?: string;
    comfort?: string;
    when?: string;
    priceEUR?: number;
  } | null;
  source?: string;
};

export function generateQuoteEmailHtml(lead: QuoteLeadData): string {
  const name = lead.name ? lead.name.trim() : "Traveler";
  const q = lead.quote || {};
  const priceEur = q.priceEUR || 0;
  const priceMad = Math.round(priceEur * (EUR_RATE || 11));
  const route = q.route || "Morocco Private Transfer";
  const vehicle = q.vehicle || "Comfort Private Vehicle";
  const tripType = q.trip || "Private Transfer";
  const pax = q.travellers ? `${q.travellers} passenger${q.travellers > 1 ? "s" : ""}` : "Private party";
  const km = q.km ? `${q.km} km` : "";
  const when = q.when || "Flexible / In planning";

  // Pre-fill WhatsApp message
  const waMsg = `Hello Private Morocco Transfers! 👋
I received my quote #${route} for €${priceEur} (${vehicle}, ${pax}).
I would like to confirm availability and finalize my booking.`;
  const confirmLink = whatsappUrl(waMsg);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Your Quote: ${route}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #0b0b0b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #ffffff;">

  <!-- Outer Canvas -->
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #0b0b0b; width: 100%; margin: 0; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container (Max 600px) -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #141414; border: 1px solid #28241f; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.7);">
          
          <!-- Brand Header -->
          <tr>
            <td bgcolor="#141414" style="padding: 32px 36px 24px; text-align: center; border-bottom: 1px solid #2a241c; background-color: #141414;">
              <span style="font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #d6b67e !important; -webkit-text-fill-color: #d6b67e !important; font-weight: 600; display: block; margin-bottom: 8px;">
                MOROCCO PRIVATE CHAUFFEUR SERVICE
              </span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.01em; color: #d6b67e !important; -webkit-text-fill-color: #d6b67e !important; line-height: 1.25;">
                <span style="color: #d6b67e !important; -webkit-text-fill-color: #d6b67e !important; display: inline-block;">Private Morocco Transfers</span>
              </h1>
            </td>
          </tr>

          <!-- Intro Greeting -->
          <tr>
            <td style="padding: 32px 36px 16px;">
              <p style="margin: 0 0 12px; font-size: 16px; line-height: 1.5; color: #e5e5e5;">
                Hello <strong style="color: #ffffff;">${name}</strong>,
              </p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #a5a5a5;">
                Here is your requested fixed-price transfer quote for your journey in Morocco. Our rates are strictly guaranteed, with all fuel, highway tolls, and professional driver fees included.
              </p>
            </td>
          </tr>

          <!-- Quote Card Box -->
          <tr>
            <td style="padding: 12px 36px 28px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border: 1px solid #332d24; border-radius: 10px; overflow: hidden;">
                <!-- Card Header -->
                <tr>
                  <td style="padding: 18px 24px; background-color: #211c16; border-bottom: 1px solid #332d24;">
                    <span style="display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #d6b67e; margin-bottom: 4px;">
                      ${tripType}
                    </span>
                    <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #d6b67e; line-height: 1.3;">
                      <span style="color: #d6b67e;">${route}</span>
                    </h2>
                  </td>
                </tr>

                <!-- Route Metrics -->
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 1px solid #26221c;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="33%" style="vertical-align: top; padding-bottom: 12px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; display: block;">Vehicle</span>
                          <span style="font-size: 14px; color: #ffffff; font-weight: 500; margin-top: 4px; display: block;">${vehicle}</span>
                        </td>
                        <td width="33%" style="vertical-align: top; padding-bottom: 12px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; display: block;">Passengers</span>
                          <span style="font-size: 14px; color: #ffffff; font-weight: 500; margin-top: 4px; display: block;">${pax}</span>
                        </td>
                        <td width="33%" style="vertical-align: top; padding-bottom: 12px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; display: block;">Distance</span>
                          <span style="font-size: 14px; color: #ffffff; font-weight: 500; margin-top: 4px; display: block;">${km || "Door-to-door"}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" style="padding-top: 6px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #888888; display: block;">Date / Travel Window</span>
                          <span style="font-size: 14px; color: #ffffff; font-weight: 500; margin-top: 4px; display: block;">${when}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Price Row -->
                <tr>
                  <td style="padding: 24px; text-align: center; background: radial-gradient(circle at center, #262016 0%, #1a1a1a 100%);">
                    <span style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #d6b67e; display: block; margin-bottom: 6px; font-weight: 600;">
                      Guaranteed Fixed Price
                    </span>
                    <div style="font-size: 42px; font-weight: 700; color: #d6b67e; letter-spacing: -0.02em; line-height: 1;">
                      €${priceEur}
                    </div>
                    <span style="font-size: 13px; color: #c4b091; display: block; margin-top: 6px;">
                      ≈ ${priceMad.toLocaleString()} MAD per private vehicle (not per person)
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- VIP Guarantees -->
          <tr>
            <td style="padding: 0 36px 28px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #171512; border-radius: 8px; border: 1px solid #24201a; padding: 16px;">
                <tr>
                  <td>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding: 8px 10px; vertical-align: top;">
                          <strong style="color: #d6b67e; font-size: 13px; display: block;">✓ 0% Deposit under €300</strong>
                          <span style="font-size: 12px; color: #9c9c9c; line-height: 1.4; display: block; margin-top: 2px;">Pay directly in cash (EUR/MAD) or card upon arrival.</span>
                        </td>
                        <td width="50%" style="padding: 8px 10px; vertical-align: top;">
                          <strong style="color: #d6b67e; font-size: 13px; display: block;">✓ 45-Min Free Airport Wait</strong>
                          <span style="font-size: 12px; color: #9c9c9c; line-height: 1.4; display: block; margin-top: 2px;">Real-time flight tracking with personalized name board.</span>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" style="padding: 8px 10px; vertical-align: top;">
                          <strong style="color: #d6b67e; font-size: 13px; display: block;">✓ All-Inclusive Flat Rate</strong>
                          <span style="font-size: 12px; color: #9c9c9c; line-height: 1.4; display: block; margin-top: 2px;">Fuel, highway tolls & luggage included. No hidden surcharges.</span>
                        </td>
                        <td width="50%" style="padding: 8px 10px; vertical-align: top;">
                          <strong style="color: #d6b67e; font-size: 13px; display: block;">✓ Free Cancellation (48h)</strong>
                          <span style="font-size: 12px; color: #9c9c9c; line-height: 1.4; display: block; margin-top: 2px;">Total flexibility should your travel itinerary change.</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary CTA Button -->
          <tr>
            <td style="padding: 0 36px 36px; text-align: center;">
              <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto; width: 100%;">
                <tr>
                  <td align="center">
                    <a href="${confirmLink}" target="_blank" style="display: block; width: 100%; max-width: 440px; box-sizing: border-box; background-color: #d6b67e; color: #000000; padding: 18px 24px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; text-decoration: none; border-radius: 8px; text-align: center; box-shadow: 0 4px 16px rgba(214,182,126,0.35);">
                      Confirm This Trip on WhatsApp →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 14px 0 0; font-size: 13px; color: #888888; text-align: center;">
                Fastest confirmation • Replies in minutes • 24/7 Dispatch
              </p>
              <p style="margin: 8px 0 0; font-size: 12px; color: #666666; text-align: center;">
                Prefer email? Simply reply directly to this message with your flight or hotel details.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #0e0e0e; border-top: 1px solid #1f1f1f; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #737373;">
                ${SITE_NAME} · Licensed Tourist Transport Chauffeur Services Morocco
              </p>
              <p style="margin: 0 0 12px; font-size: 11px; color: #525252;">
                WhatsApp: +${WHATSAPP_NUMBER} · Web: <a href="${SITE_URL}" style="color: #8c8c8c; text-decoration: underline;">privatemoroccotransfers.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #404040; line-height: 1.4;">
                You received this email because you requested a quote on our website.<br>
                ${lead.marketingConsent ? "You also opted in to receive travel updates and tips from Morocco Private Transfers." : ""}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
