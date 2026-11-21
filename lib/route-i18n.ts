import frCatalog from "@/content/route-i18n/fr.json";
import esCatalog from "@/content/route-i18n/es.json";
import itCatalog from "@/content/route-i18n/it.json";
import deCatalog from "@/content/route-i18n/de.json";
import ptCatalog from "@/content/route-i18n/pt.json";
import nlCatalog from "@/content/route-i18n/nl.json";
import arCatalog from "@/content/route-i18n/ar.json";
import { EUR_RATE } from "@/lib/pricing";

export type LocalizedWhatToSee = {
  title: string;
  description: string;
};

export type LocalizedRouteFaq = {
  q: string;
  a: string;
};

export type LocalizedRouteContent = {
  h1: string;
  heroSub: string;
  routeOverviewTitle: string;
  routeOverview: string[];
  highlightsTitle: string;
  highlights: string[];
  whatToSeeTitle: string;
  whatToSeeIntro: string;
  whatToSeeItems: LocalizedWhatToSee[];
  faqsTitle: string;
  faqs: LocalizedRouteFaq[];
};

export type RoutePricingContext = {
  price_sedan: number;
  price_van: number;
  price_minibus: number;
};

const I18N_CATALOGS: Record<string, Record<string, LocalizedRouteContent>> = {
  fr: frCatalog as Record<string, LocalizedRouteContent>,
  es: esCatalog as Record<string, LocalizedRouteContent>,
  it: itCatalog as Record<string, LocalizedRouteContent>,
  de: deCatalog as Record<string, LocalizedRouteContent>,
  pt: ptCatalog as Record<string, LocalizedRouteContent>,
  nl: nlCatalog as Record<string, LocalizedRouteContent>,
  ar: arCatalog as Record<string, LocalizedRouteContent>,
};

/**
 * Replaces dynamic price placeholders with route prices so prices are never hardcoded or out of sync.
 */
export function interpolateRouteI18n(text: string, pricing: RoutePricingContext): string {
  const madSedan = Math.round(pricing.price_sedan * EUR_RATE);
  const madVan = Math.round(pricing.price_van * EUR_RATE);
  const madMinibus = Math.round(pricing.price_minibus * EUR_RATE);

  return text
    .replace(/{price_sedan}/g, `€${pricing.price_sedan}`)
    .replace(/{price_van}/g, `€${pricing.price_van}`)
    .replace(/{price_minibus}/g, `€${pricing.price_minibus}`)
    .replace(/{price_sedan_mad}/g, `${madSedan} MAD`)
    .replace(/{price_van_mad}/g, `${madVan} MAD`)
    .replace(/{price_minibus_mad}/g, `${madMinibus} MAD`);
}

/**
 * Retrieves the enriched, fully-translated route content for top corridors.
 * Returns null if no localized content is found, allowing graceful fallback to generic copy.
 */
export function getLocalizedRouteContent(
  lang: string,
  slug: string,
  pricing: RoutePricingContext
): LocalizedRouteContent | null {
  const catalog = I18N_CATALOGS[lang];
  if (!catalog) return null;

  const raw = catalog[slug];
  if (!raw) return null;

  return {
    h1: interpolateRouteI18n(raw.h1, pricing),
    heroSub: interpolateRouteI18n(raw.heroSub, pricing),
    routeOverviewTitle: interpolateRouteI18n(raw.routeOverviewTitle, pricing),
    routeOverview: raw.routeOverview.map((p) => interpolateRouteI18n(p, pricing)),
    highlightsTitle: interpolateRouteI18n(raw.highlightsTitle, pricing),
    highlights: raw.highlights.map((h) => interpolateRouteI18n(h, pricing)),
    whatToSeeTitle: interpolateRouteI18n(raw.whatToSeeTitle, pricing),
    whatToSeeIntro: interpolateRouteI18n(raw.whatToSeeIntro, pricing),
    whatToSeeItems: raw.whatToSeeItems.map((item) => ({
      title: interpolateRouteI18n(item.title, pricing),
      description: interpolateRouteI18n(item.description, pricing),
    })),
    faqsTitle: interpolateRouteI18n(raw.faqsTitle, pricing),
    faqs: raw.faqs.map((f) => ({
      q: interpolateRouteI18n(f.q, pricing),
      a: interpolateRouteI18n(f.a, pricing),
    })),
  };
}
