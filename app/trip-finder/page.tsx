import type { Metadata } from "next";
import TripFinder from "@/components/trip-finder";
import TripFinderSeoBlock from "@/components/trip-finder/TripFinderSeoBlock";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { MOROCCO_GEO_META } from "@/lib/trip-finder-seo";

export const metadata: Metadata = {
  title: { absolute: "Trip Finder · 3D Interactive Quote | Private Morocco Transfers" },
  description:
    "Find your custom Morocco trip, route, and vehicle with our interactive 3D trip finder. Instant guaranteed fixed price and direct WhatsApp booking.",
  other: MOROCCO_GEO_META,
  alternates: {
    canonical: `${SITE_URL}/trip-finder`,
    languages: {
      en: `${SITE_URL}/trip-finder`,
      fr: `${SITE_URL}/fr/trip-finder`,
      es: `${SITE_URL}/es/trip-finder`,
      it: `${SITE_URL}/it/trip-finder`,
      de: `${SITE_URL}/de/trip-finder`,
      ar: `${SITE_URL}/ar/trip-finder`,
      pt: `${SITE_URL}/pt/trip-finder`,
      nl: `${SITE_URL}/nl/trip-finder`,
      "x-default": `${SITE_URL}/trip-finder`,
    },
  },
  openGraph: {
    title: "Trip Finder · 3D Interactive Quote | Private Morocco Transfers",
    description:
      "Find your custom Morocco trip, route, and vehicle with our interactive 3D trip finder. Instant guaranteed fixed price.",
    url: `${SITE_URL}/trip-finder`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function TripFinderPage() {
  return (
    <>
      <TripFinderSeoBlock lang="en" />
      <TripFinder lang="en" />
    </>
  );
}
