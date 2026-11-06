import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const CALC_CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    breadcrumb: string;
    tag: string;
    h1: string;
    sub: string;
  }
> = {
  es: {
    title: `Calculadora de Precios — Chófer Privado en Marruecos | ${SITE_NAME}`,
    desc: "Calcule el precio fijo garantizado de su traslado privado en Marruecos. Tarifas instantáneas entre Marrakech, Casablanca, Agadir, Fez, Tánger y aeropuertos.",
    home: "Inicio",
    breadcrumb: "Calculadora de Precios",
    tag: "Presupuesto Instantáneo · Sin Costes Ocultos",
    h1: "Calculadora de Tarifas",
    sub: "Seleccione sus ciudades de origen y destino para calcular el precio exacto cerrado de su traslado con chófer privado en Marruecos.",
  },
  it: {
    title: `Calcolatore di Prezzi — Autista Privato in Marocco | ${SITE_NAME}`,
    desc: "Calcolate la tariffa fissa garantita per il vostro transfer privato in Marocco. Prezzi immediati tra Marrakech, Casablanca, Agadir, Fes, Tangeri e aeroporti.",
    home: "Home",
    breadcrumb: "Calcolatore Tariffe",
    tag: "Preventivo Immediato · Zero Sorprese",
    h1: "Calcolatore Tariffe Fisse",
    sub: "Selezionate la città di partenza e la destinazione per ottenere il preventivo esatto e all-inclusive per il vostro viaggio.",
  },
  de: {
    title: `Tarifrechner — Privatchauffeur & Transfers Marokko | ${SITE_NAME}`,
    desc: "Berechnen Sie den garantierten Festpreis für Ihren privaten Transfer in Marokko. Sofortige Preisauskunft zwischen Marrakesch, Casablanca, Fès, Agadir und Tanger.",
    home: "Startseite",
    breadcrumb: "Tarifrechner",
    tag: "Sofortiger Festpreis · Keine Versteckten Kosten",
    h1: "Transfer-Tarifrechner",
    sub: "Wählen Sie Abfahrts- und Zielort, um sofort den verbindlichen Festpreis für Ihren privaten Chauffeur in Marokko zu berechnen.",
  },
  ar: {
    title: `حاسبة أسعار التوصيل والسائق الخاص في المغرب | ${SITE_NAME}`,
    desc: "احسب السعر الثابت والمؤكد لرحلتك الخاصة في المغرب. أسعار فورية وشاملة بين مراكش، الدار البيضاء، فاس، طنجة، أكادير والمطارات.",
    home: "الرئيسية",
    breadcrumb: "حاسبة الأسعار",
    tag: "تسعيرة فورية · أسعار ثابتة ومؤكدة",
    h1: "حاسبة أسعار الرحلات والتوصيل",
    sub: "اختر نقطة الانطلاق والوجهة لحساب السعر الصافي لسيارتك الخاصة مع سائق محترف في المغرب.",
  },
  pt: {
    title: `Calculadora de Preços — Transfers Privados em Marrocos | ${SITE_NAME}`,
    desc: "Calcule a tarifa fixa garantida do seu transfer privado em Marrocos. Preços imediatos entre Marraquexe, Casablanca, Agadir, Fez, Tânger e aeroportos.",
    home: "Início",
    breadcrumb: "Calculadora de Preços",
    tag: "Cotação Imediata · Sem Taxas Ocultas",
    h1: "Calculadora de Tarifas",
    sub: "Escolha as cidades de partida e destino para ver o custo exato do seu transfer particular com tudo incluído.",
  },
  nl: {
    title: `Tarieven Calculator — Privé Chauffeur Marokko | ${SITE_NAME}`,
    desc: "Bereken het gegarandeerde vaste all-in tarief voor uw privé transfer in Marokko. Directe prijsopgave voor Marrakech, Casablanca, Agadir, Fes en vliegvelden.",
    home: "Home",
    breadcrumb: "Tarieven Calculator",
    tag: "Directe Vaste Prijs · Geen Verborgen Kosten",
    h1: "Ritprijs Calculator",
    sub: "Selecteer uw vertrek- en bestemmingsplaats om direct de vaste prijs voor uw privéchauffeur in Marokko te berekenen.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = CALC_CONTENT[lang] || CALC_CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/calculator`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/calculator`,
        fr: `${SITE_URL}/fr/calculator`,
        es: `${SITE_URL}/es/calculator`,
        it: `${SITE_URL}/it/calculator`,
        de: `${SITE_URL}/de/calculator`,
        ar: `${SITE_URL}/ar/calculator`,
        pt: `${SITE_URL}/pt/calculator`,
        nl: `${SITE_URL}/nl/calculator`,
        "x-default": `${SITE_URL}/calculator`,
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

export default async function LocalizedCalculatorPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = CALC_CONTENT[lang] || CALC_CONTENT.es;
  const homeUrl = `/${lang}`;
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={homeUrl}>{c.home}</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{c.breadcrumb}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {c.tag}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {c.h1}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Calculator />
        </div>
      </section>
    </div>
  );
}
