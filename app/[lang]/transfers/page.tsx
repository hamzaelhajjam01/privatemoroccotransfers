import type { Metadata } from "next";
import { notFound } from "next/navigation";
import routesData from "@/content/routes.json";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import TransferDirectory from "@/components/TransferDirectory";
import type { RouteItem } from "@/app/transfers/[slug]/page";
import { LanguageCode, getLocalizedPlace } from "@/lib/i18n";

const ALL_ROUTES = routesData as RouteItem[];
const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const TITLES: Record<string, { title: string; desc: string; h1: string; sub: string }> = {
  es: {
    title: `Catálogo de Traslados Privados en Marruecos — Tarifas Fijas 2026 | ${SITE_NAME}`,
    desc: "Descubra más de 150 rutas de traslados privados en Marruecos. Precios fijos por vehículo, sin costes ocultos. Chóferes profesionales bilingües. Reserva instantánea en WhatsApp.",
    h1: "Todos los Traslados Privados en Marruecos",
    sub: "Consulte nuestras tarifas fijas garantizadas para traslados de aeropuerto y rutas interurbanas.",
  },
  it: {
    title: `Catalogo Trasferimenti Privati in Marocco — Tariffe Fisse 2026 | ${SITE_NAME}`,
    desc: "Oltre 150 tratte di transfer privati in Marocco. Prezzi fissi per veicolo, nessun anticipo sotto i 300 €. Autisti professionisti con licenza. WhatsApp 24/7.",
    h1: "Tutti i Trasferimenti Privati in Marocco",
    sub: "Tariffe fisse garantite per transfer aeroportuali e collegamenti tra tutte le città del Marocco.",
  },
  de: {
    title: `Privattransfer-Katalog Marokko — Feste Pauschalpreise 2026 | ${SITE_NAME}`,
    desc: "Über 150 private Transferrouten in Marokko. Feste Pauschalpreise pro Fahrzeug, lizenzierte Chauffeure, 0% Anzahlung unter 300 €. Buchung über WhatsApp.",
    h1: "Alle Privattransfers in Marokko",
    sub: "Garantierte Pauschalpreise für Flughafen-Pickups und Fernstrecken zwischen allen Städten.",
  },
  ar: {
    title: `دليل التنقلات والرحلات الخاصة في المغرب — أسعار ثابتة 2026 | ${SITE_NAME}`,
    desc: "اكتشف أكثر من 150 خط سير وتوصيل خاص في المغرب. أسعار ثابتة لكل سيارة شاملة الوقود ورسوم الطرق مع سائقين مرخصين. حجز فوري عبر واتساب.",
    h1: "دليل خدمات التوصيل والسائق الخاص بالمغرب",
    sub: "أسعار ثابتة مؤكدة لجميع التنقلات بين المطارات والمدن المغربية.",
  },
  pt: {
    title: `Catálogo de Transfers Privados em Marrocos — Preços Fixos 2026 | ${SITE_NAME}`,
    desc: "Mais de 150 rotas de transfer privado em Marrocos. Preços fixos por viatura, sem sinal para reservas sob 300 €. Motoristas licenciados. WhatsApp 24/7.",
    h1: "Todos os Transfers Privados em Marrocos",
    sub: "Consulte os nossos preços fixos garantidos para aeroportos e viagens entre cidades.",
  },
  nl: {
    title: `Alle Privé Transfers in Marokko — Vaste Tarieven 2026 | ${SITE_NAME}`,
    desc: "Ruim 150 privé transferroutes in Marokko. Vaste prijzen per voertuig, geen aanbetaling onder €300. Ervaren chauffeurs en 24/7 WhatsApp service.",
    h1: "Alle Privé Transfers in Marokko",
    sub: "Gegarandeerde vaste tarieven voor vliegveldvervoer en ritten tussen alle Marokkaanse steden.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = TITLES[lang] || TITLES.es;
  const canonicalUrl = `${SITE_URL}/${lang}/transfers`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/transfers`,
        fr: `${SITE_URL}/fr/transfers`,
        es: `${SITE_URL}/es/transfers`,
        it: `${SITE_URL}/it/transfers`,
        de: `${SITE_URL}/de/transfers`,
        ar: `${SITE_URL}/ar/transfers`,
        pt: `${SITE_URL}/pt/transfers`,
        nl: `${SITE_URL}/nl/transfers`,
        "x-default": `${SITE_URL}/transfers`,
      },
    },
  };
}

export default async function LocalizedTransfersPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const info = TITLES[lang] || TITLES.es;
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: "var(--gold)" }}>
            150+ {isRtl ? "مسار بري مباشر" : "Routes"} · Fixed Flat Rates
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {info.h1}
          </h1>
          <p className="hero-sub">{info.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <TransferDirectory routes={ALL_ROUTES} lang={lang} />
        </div>
      </section>
    </div>
  );
}
