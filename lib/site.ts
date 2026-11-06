/** Site-wide settings. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (digits only, with country code). */
export const SITE_NAME = "Private Morocco Transfers";
export const SITE_URL = "https://www.privatemoroccotransfers.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212760426269";
export const SUPPORT_EMAIL = "contact@privatemoroccotransfers.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type LeadDetails = {
  route?: string;
  label?: string;
  value?: number;
  currency?: string;
};

/** Fires conversion events to GA4 (gtag) and GTM (dataLayer) */
export function trackWhatsAppLead(details?: LeadDetails) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  const payload = {
    event_category: "lead",
    event_label: details?.label || "WhatsApp Booking Inquiry",
    page_location: window.location.href,
    page_path: window.location.pathname,
    route_name: details?.route || window.location.pathname,
    currency: details?.currency || "EUR",
    value: details?.value,
  };

  // 1. Google Analytics 4 standard conversion event
  if (typeof w.gtag === "function") {
    w.gtag("event", "generate_lead", payload);
    w.gtag("event", "whatsapp_click", payload);
  }

  // 2. Google Tag Manager custom event
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({
      event: "whatsapp_lead_generated",
      ...payload,
    });
  }
}

export function openWhatsApp(message: string, details?: LeadDetails) {
  trackWhatsAppLead({
    label: message.slice(0, 60),
    ...details,
  });
  window.open(whatsappUrl(message), "_blank", "noopener");
}
