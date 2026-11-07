import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TripFinder from "@/components/trip-finder";
import TripFinderSeoBlock from "@/components/trip-finder/TripFinderSeoBlock";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LanguageCode } from "@/lib/i18n";
import { MOROCCO_GEO_META } from "@/lib/trip-finder-seo";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const META_CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
  }
> = {
  es: {
    title: `Buscador de Viaje 3D · Chófer Privado en Marruecos | ${SITE_NAME}`,
    desc: "Encuentra tu ruta personalizada, vehículo y chófer privado en Marruecos con nuestro buscador 3D interactivo. Precio cerrado garantizado y reserva directa en WhatsApp.",
  },
  it: {
    title: `Trova Viaggio 3D · Autista Privato in Marocco | ${SITE_NAME}`,
    desc: "Trova il tuo itinerario su misura, il veicolo ideale e il tuo autista privato in Marocco con il simulatore 3D interattivo. Prezzo fisso garantito.",
  },
  de: {
    title: `Reise-Finder 3D · Privatchauffeur in Marokko | ${SITE_NAME}`,
    desc: "Planen Sie Ihre Reiseroute, passendes Fahrzeug und Privatchauffeur in Marokko mit unserem interaktiven 3D-Reiseplaner. Garantierter Festpreis.",
  },
  ar: {
    title: `مخطط الرحلات التفاعلي 3D · سائق خاص في المغرب | ${SITE_NAME}`,
    desc: "خطط لرحلتك في المغرب واختر سيارتك وسائقك الخاص عبر خريطتنا التفاعلية ثلاثية الأبعاد. أسعار ثابتة ومضمونة وحجز فوري عبر واتساب.",
  },
  pt: {
    title: `Planeador de Viagem 3D · Motorista Privado em Marrocos | ${SITE_NAME}`,
    desc: "Encontre o seu percurso personalizado, veículo e motorista particular em Marrocos com o nosso planeador 3D interativo. Preço fixo garantido.",
  },
  nl: {
    title: `Reisplanner 3D · Privé Chauffeur Marokko | ${SITE_NAME}`,
    desc: "Vind uw route op maat, ideaal voertuig en privéchauffeur in Marokko via onze interactieve 3D-reisplanner. Gegarandeerde vaste all-in prijs.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = META_CONTENT[lang] || META_CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/trip-finder`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    other: MOROCCO_GEO_META,
    alternates: {
      canonical: canonicalUrl,
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
      title: info.title,
      description: info.desc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function LocalizedTripFinderPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) {
    notFound();
  }

  return (
    <>
      <TripFinderSeoBlock lang={lang as LanguageCode} />
      <TripFinder lang={lang as LanguageCode} />
    </>
  );
}
