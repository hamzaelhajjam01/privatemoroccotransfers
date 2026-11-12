import type { Metadata } from "next";
import { notFound } from "next/navigation";
import routesData from "@/content/routes.json";
import { buildMultilingualAlternates } from "@/lib/site";
import TransferDirectory from "@/components/TransferDirectory";
import type { RouteItem } from "@/app/(en)/transfers/[slug]/page";
import { LanguageCode } from "@/lib/i18n";

const ALL_ROUTES = routesData as RouteItem[];
const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const TITLES: Record<string, { title: string; desc: string; h1: string; sub: string; badge: string }> = {
  es: {
    title: "Catálogo Traslados Privados Marruecos — 150+ Rutas Fijas",
    desc: "Descubra más de 150 rutas de traslados privados en Marruecos. Precios fijos por vehículo, sin costes ocultos. Chóferes profesionales bilingües. Reserva instantánea en WhatsApp.",
    h1: "Todos los Traslados Privados en Marruecos",
    sub: "Consulte nuestras tarifas fijas garantizadas para traslados de aeropuerto y rutas interurbanas.",
    badge: "150+ Rutas · Tarifas Fijas",
  },
  it: {
    title: "Catalogo Transfer Privati Marocco — 150+ Tratte Fisse",
    desc: "Oltre 150 tratte di transfer privati in Marocco. Prezzi fissi per veicolo, nessun anticipo sotto i 300 €. Autisti professionisti con licenza. WhatsApp 24/7.",
    h1: "Tutti i Trasferimenti Privati in Marocco",
    sub: "Tariffe fisse garantite per transfer aeroportuali e collegamenti tra tutte le città del Marocco.",
    badge: "150+ Tratte · Prezzi Fissi",
  },
  de: {
    title: "Privattransfer-Katalog Marokko — 150+ Festpreise",
    desc: "Über 150 private Transferrouten in Marokko. Feste Pauschalpreise pro Fahrzeug, lizenzierte Chauffeure, 0% Anzahlung unter 300 €. Buchung über WhatsApp.",
    h1: "Alle Privattransfers in Marokko",
    sub: "Garantierte Pauschalpreise für Flughafen-Pickups und Fernstrecken zwischen allen Städten.",
    badge: "150+ Routen · Festpreise",
  },
  ar: {
    title: "دليل التنقلات الخاصة بالمغرب — 150+ مساراً بأسعار ثابتة",
    desc: "اكتشف أكثر من 150 خط سير وتوصيل خاص في المغرب. أسعار ثابتة لكل سيارة شاملة الوقود ورسوم الطرق مع سائقين مرخصين. حجز فوري عبر واتساب.",
    h1: "دليل خدمات التوصيل والسائق الخاص بالمغرب",
    sub: "أسعار ثابتة مؤكدة لجميع التنقلات بين المطارات والمدن المغربية.",
    badge: "أكثر من 150 مساراً · أسعار ثابتة",
  },
  pt: {
    title: "Catálogo Transfers Privados Marrocos — 150+ Rotas Fixas",
    desc: "Mais de 150 rotas de transfer privado em Marrocos. Preços fixos por viatura, sem sinal para reservas sob 300 €. Motoristas licenciados. WhatsApp 24/7.",
    h1: "Todos os Transfers Privados em Marrocos",
    sub: "Consulte os nossos preços fixos garantidos para aeroportos e viagens entre cidades.",
    badge: "150+ Rotas · Preços Fixos",
  },
  nl: {
    title: "Privé Transfers Marokko — 150+ Vaste Tarieven",
    desc: "Ruim 150 privé transferroutes in Marokko. Vaste prijzen per voertuig, geen aanbetaling onder €300. Ervaren chauffeurs en 24/7 WhatsApp service.",
    h1: "Alle Privé Transfers in Marokko",
    sub: "Gegarandeerde vaste tarieven voor vliegveldvervoer en ritten tussen alle Marokkaanse steden.",
    badge: "150+ Routes · Vaste Prijzen",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = TITLES[lang] || TITLES.es;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: buildMultilingualAlternates("/transfers", lang as LanguageCode),
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
            {info.badge}
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
