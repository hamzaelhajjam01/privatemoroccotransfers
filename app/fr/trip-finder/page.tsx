import type { Metadata } from "next";
import TripFinder from "@/components/trip-finder";
import TripFinderSeoBlock from "@/components/trip-finder/TripFinderSeoBlock";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { MOROCCO_GEO_META } from "@/lib/trip-finder-seo";

export const metadata: Metadata = {
  title: { absolute: "Simulateur 3D · Trouver un Trajet au Maroc | Private Morocco Transfers" },
  description:
    "Trouvez votre trajet sur mesure, votre véhicule et votre chauffeur privé au Maroc grâce à notre simulateur 3D interactif. Prix fixe garanti et réservation instantanée sur WhatsApp.",
  other: MOROCCO_GEO_META,
  alternates: {
    canonical: `${SITE_URL}/fr/trip-finder`,
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
    title: "Simulateur 3D · Trouver un Trajet au Maroc | Private Morocco Transfers",
    description:
      "Trouvez votre trajet sur mesure, votre véhicule et votre chauffeur privé au Maroc grâce à notre simulateur 3D interactif. Prix fixe garanti.",
    url: `${SITE_URL}/fr/trip-finder`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function FrenchTripFinderPage() {
  return (
    <>
      <TripFinderSeoBlock lang="fr" />
      <TripFinder lang="fr" />
    </>
  );
}
