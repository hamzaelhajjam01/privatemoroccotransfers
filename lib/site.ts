/** Site-wide settings. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (digits only, with country code). */
export const SITE_NAME = "Private Morocco Transfers";
export const SITE_URL = "https://www.privatemoroccotransfers.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212760426269";
export const SUPPORT_EMAIL = "contact@privatemoroccotransfers.com";

/** Google Business Profile (Maps) — the real profile, used for schema sameAs and the review CTA. */
export const GBP_URL = "https://maps.google.com/?cid=4065053668334298253";
export const GBP_REVIEW_URL = "https://g.page/r/CY3k9hXG-Gk4EBI/review";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596579149028";
/** Public social/profile links for JSON-LD sameAs: tells Google these profiles are the same business. */
export const SOCIAL_LINKS: string[] = [GBP_URL, FACEBOOK_URL];

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

// Per-language route meta description: a lead clause always, plus a tail clause
// only when the whole thing still fits under Google's ~160-char display cap.
const META_LEAD: Record<string, (f: string, t: string, p: number) => string> = {
  en: (f, t, p) => `Private transfer ${f} to ${t}: fixed €${p} per vehicle`,
  fr: (f, t, p) => `Transfert privé ${f} vers ${t} : prix fixe €${p} par véhicule`,
  es: (f, t, p) => `Traslado privado ${f} a ${t}: precio fijo €${p} por vehículo`,
  it: (f, t, p) => `Transfer privato ${f} a ${t}: prezzo fisso €${p} a veicolo`,
  de: (f, t, p) => `Privater Transfer ${f} nach ${t}: Festpreis €${p} pro Fahrzeug`,
  ar: (f, t, p) => `توصيل خاص ${f} ← ${t}: سعر ثابت €${p} للسيارة`,
  pt: (f, t, p) => `Transfer privado ${f} para ${t}: preço fixo €${p} por veículo`,
  nl: (f, t, p) => `Privétransfer ${f} naar ${t}: vaste prijs €${p} per voertuig`,
};

const META_TAIL: Record<string, string> = {
  en: "Licensed driver, fuel & tolls included. Book on WhatsApp.",
  fr: "Chauffeur pro, carburant et péages inclus. Réservation WhatsApp.",
  es: "Conductor profesional, combustible y peajes incluidos. Reserva por WhatsApp.",
  it: "Autista professionale, carburante e pedaggi inclusi. Prenota su WhatsApp.",
  de: "Lizenzierter Fahrer, Kraftstoff und Maut inklusive. Buchung per WhatsApp.",
  ar: "سائق محترف، الوقود ورسوم الطريق مشمولة. الحجز عبر واتساب.",
  pt: "Motorista profissional, combustível e portagens incluídos. Reserve no WhatsApp.",
  nl: "Ervaren chauffeur, brandstof en tol inbegrepen. Boek via WhatsApp.",
};

/** Route meta description kept under 160 characters, in the page's own language. */
export function buildRouteMetaDescription(from: string, to: string, priceEur: number, lang: string = "en"): string {
  const lead = (META_LEAD[lang] || META_LEAD.en)(compactPlace(from), compactPlace(to), priceEur);
  const tail = META_TAIL[lang] || META_TAIL.en;
  const full = `${lead}. ${tail}`;
  return full.length <= 160 ? full : `${lead}.`;
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

/** Event the booking popup (components/BookingModal.tsx) listens for. */
export const BOOKING_EVENT = "pmt:book";
export type BookingRequest = { message: string; details?: LeadDetails };

/**
 * Opens the "How would you like to book?" popup (WhatsApp / email / phone).
 * Pass { direct: true } to skip the popup and go straight to WhatsApp.
 */
export function openWhatsApp(message: string, details?: LeadDetails, opts?: { direct?: boolean }) {
  const w = window as unknown as { __pmtBookingReady?: boolean };
  if (!opts?.direct && w.__pmtBookingReady) {
    window.dispatchEvent(new CustomEvent<BookingRequest>(BOOKING_EVENT, { detail: { message, details } }));
    return;
  }
  trackWhatsAppLead({
    label: message.slice(0, 60),
    ...details,
  });
  window.open(whatsappUrl(message), "_blank", "noopener");
}

/** Phone number for tel: links (same line as WhatsApp). */
export const PHONE_E164 = `+${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ${WHATSAPP_NUMBER.slice(6, 9)} ${WHATSAPP_NUMBER.slice(9)}`.trim();
