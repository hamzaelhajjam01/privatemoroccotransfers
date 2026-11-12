/** Site-wide settings. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (digits only, with country code). */
export const SITE_NAME = "Private Morocco Transfers";
export const SITE_URL = "https://www.privatemoroccotransfers.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212760426269";
export const SUPPORT_EMAIL = "contact@privatemoroccotransfers.com";

export const SEO_LANGS = ["fr", "es", "it", "de", "ar", "pt", "nl"] as const;
export type SeoLang = "en" | (typeof SEO_LANGS)[number];

/** Builds symmetric 8-locale canonical + hreflang alternates for a route path (e.g. "/faq" or "/transfers/slug"). */
export function buildMultilingualAlternates(enPath: string, currentLang: SeoLang = "en") {
  const clean = enPath.startsWith("/") ? enPath : `/${enPath}`;
  const isRoot = clean === "/";
  const suffix = isRoot ? "" : clean;
  const enUrl = isRoot ? SITE_URL : `${SITE_URL}${clean}`;
  const languages: Record<string, string> = {
    en: enUrl,
    "x-default": enUrl,
  };
  for (const l of SEO_LANGS) {
    languages[l] = `${SITE_URL}/${l}${suffix}`;
  }
  const canonical = currentLang === "en" ? enUrl : `${SITE_URL}/${currentLang}${suffix}`;
  return { canonical, languages };
}

const TITLE_PREFIX: Record<string, string> = {
  en: "Transfer",
  fr: "Transfert",
  es: "Traslado",
  it: "Transfer",
  de: "Transfer",
  ar: "توصيل",
  pt: "Transfer",
  nl: "Transfer",
};

// Per-language "to" connector. Keeps each language's route titles in its own
// words (no English "to" in a German title) and makes titles distinct across
// languages, so the same route no longer shares one title in 5 languages.
const TITLE_CONNECTOR: Record<string, string> = {
  en: "to",
  fr: "vers",
  es: "a",
  it: "a",
  de: "nach",
  pt: "para",
  nl: "naar",
  ar: "←",
};

function compactPlace(name: string): string {
  return name.replace(/\s*\([^)]*\)/g, "").trim();
}

/**
 * Route meta title: "{prefix} {from} {connector} {to} €{price}".
 * No brand suffix on route pages — the route and rate are the keywords, and the
 * 28-char brand suffix pushed most titles past Google's ~60-char display cap.
 */
export function buildRouteMetaTitle(from: string, to: string, priceEur: number, lang: string = "en"): string {
  const prefix = TITLE_PREFIX[lang] || "Transfer";
  const conn = TITLE_CONNECTOR[lang] || "to";
  const full = `${prefix} ${from} ${conn} ${to} €${priceEur}`;
  if (full.length <= 60) return full;

  return `${prefix} ${compactPlace(from)} ${conn} ${compactPlace(to)} €${priceEur}`;
}

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
