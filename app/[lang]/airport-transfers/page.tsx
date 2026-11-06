import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING } from "@/lib/schema";
import { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const AIRPORT_LISTINGS = [
  {
    category: "marrakech",
    title: {
      es: "Aeropuerto de Marrakech (RAK) → Médina / Guéliz",
      it: "Aeroporto di Marrakech (RAK) → Médina / Guéliz",
      de: "Flughafen Marrakesch (RAK) → Medina / Guéliz",
      ar: "مطار مراكش المنارة (RAK) ← المدينة العتيقة / كليز",
      pt: "Aeroporto de Marraquexe (RAK) → Medina / Guéliz",
      nl: "Luchthaven Marrakech (RAK) → Medina / Guéliz",
    },
    slug: "marrakech-airport-to-marrakech",
    tag: "RAK Airport",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/textures/brass-lantern.jpg",
  },
  {
    category: "marrakech",
    title: {
      es: "Aeropuerto de Marrakech (RAK) → Palmeraie",
      it: "Aeroporto di Marrakech (RAK) → Palmeraie",
      de: "Flughafen Marrakesch (RAK) → Palmeraie",
      ar: "مطار مراكش (RAK) ← النخيل (Palmeraie)",
      pt: "Aeroporto de Marraquexe (RAK) → Palmeraie",
      nl: "Luchthaven Marrakech (RAK) → Palmeraie",
    },
    slug: "marrakech-airport-to-palmeraie",
    tag: "RAK Airport",
    priceEur: 35,
    priceMad: 385,
    bg: "/img/textures/carved-plaster.jpg",
  },
  {
    category: "casablanca",
    title: {
      es: "Aeropuerto de Casablanca (CMN) → Centro Ciudad",
      it: "Aeroporto di Casablanca (CMN) → Centro Città",
      de: "Flughafen Casablanca (CMN) → Stadtzentrum",
      ar: "مطار محمد الخامس (CMN) ← وسط الدار البيضاء",
      pt: "Aeroporto de Casablanca (CMN) → Centro da Cidade",
      nl: "Luchthaven Casablanca (CMN) → Stadscentrum",
    },
    slug: "casablanca-airport-to-casablanca",
    tag: "CMN Airport",
    priceEur: 40,
    priceMad: 440,
    bg: "/img/textures/tadelakt-warm.jpg",
  },
  {
    category: "casablanca",
    title: {
      es: "Aeropuerto de Casablanca (CMN) → Marrakech",
      it: "Aeroporto di Casablanca (CMN) → Marrakech",
      de: "Flughafen Casablanca (CMN) → Marrakesch",
      ar: "مطار محمد الخامس (CMN) ← مراكش مباشرة",
      pt: "Aeroporto de Casablanca (CMN) → Marraquexe",
      nl: "Luchthaven Casablanca (CMN) → Marrakech",
    },
    slug: "casablanca-airport-to-marrakech",
    tag: "CMN Airport",
    priceEur: 145,
    priceMad: 1595,
    bg: "/img/textures/zelige-geometric.jpg",
  },
  {
    category: "agadir",
    title: {
      es: "Aeropuerto de Agadir (AGA) → Agadir Playa / Taghazout",
      it: "Aeroporto di Agadir (AGA) → Agadir Mare / Taghazout",
      de: "Flughafen Agadir (AGA) → Agadir Strand / Taghazout",
      ar: "مطار أكادير المسيرة (AGA) ← شاطئ أكادير / تغازوت",
      pt: "Aeroporto de Agadir (AGA) → Praia de Agadir / Taghazout",
      nl: "Luchthaven Agadir (AGA) → Agadir Strand / Taghazout",
    },
    slug: "agadir-airport-to-agadir",
    tag: "AGA Airport",
    priceEur: 35,
    priceMad: 385,
    bg: "/img/textures/brass-lantern.jpg",
  },
  {
    category: "fes",
    title: {
      es: "Aeropuerto de Fez (FEZ) → Médina de Fez",
      it: "Aeroporto di Fes (FEZ) → Médina di Fes",
      de: "Flughafen Fès (FEZ) → Fès Medina",
      ar: "مطار فاس سايس (FEZ) ← المدينة القديمة بفاس",
      pt: "Aeroporto de Fez (FEZ) → Medina de Fez",
      nl: "Luchthaven Fes (FEZ) → Medina van Fes",
    },
    slug: "fes-airport-to-fes",
    tag: "FEZ Airport",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/textures/carved-plaster.jpg",
  },
  {
    category: "tangier",
    title: {
      es: "Aeropuerto de Tánger (TNG) → Centro Ciudad / Puerto",
      it: "Aeroporto di Tangeri (TNG) → Centro / Porto",
      de: "Flughafen Tanger (TNG) → Stadt / Hafen",
      ar: "مطار طنجة ابن بطوطة (TNG) ← وسط المدينة / الميناء",
      pt: "Aeroporto de Tânger (TNG) → Centro / Porto",
      nl: "Luchthaven Tanger (TNG) → Stad / Haven",
    },
    slug: "tangier-airport-to-tangier",
    tag: "TNG Airport",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/textures/tadelakt-warm.jpg",
  },
  {
    category: "rabat",
    title: {
      es: "Aeropuerto de Rabat (RBA) → Rabat Centro / Agdal",
      it: "Aeroporto di Rabat (RBA) → Rabat Centro / Agdal",
      de: "Flughafen Rabat (RBA) → Rabat Zentrum",
      ar: "مطار الرباط سلا (RBA) ← وسط الرباط / أكدال",
      pt: "Aeroporto de Rabat (RBA) → Centro de Rabat",
      nl: "Luchthaven Rabat (RBA) → Rabat Centrum",
    },
    slug: "rabat-airport-to-rabat",
    tag: "RBA Airport",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/textures/zelige-geometric.jpg",
  },
];

const AIRPORT_CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    breadcrumb: string;
    tag: string;
    h1: string;
    h1Sub: string;
    sub: string;
    filterAll: string;
    viewTransfer: string;
    pax: string;
    vehicleType: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    waText: string;
  }
> = {
  es: {
    title: `Traslados de Aeropuerto en Marruecos — Precio Fijo Garantizado | ${SITE_NAME}`,
    desc: "Traslados fiables en todos los aeropuertos de Marruecos. Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fez (FEZ), Tánger (TNG). Seguimiento de vuelos y 45 min de espera gratis.",
    home: "Inicio",
    breadcrumb: "Traslados de Aeropuerto",
    tag: "Precio Fijo · Bienvenida con Cartel Incluida",
    h1: "Traslados de Aeropuerto",
    h1Sub: "en Marruecos",
    sub: "Servicio profesional de recogida y traslado en todos los aeropuertos marroquíes. Su chófer le espera en llegadas con un cartel con su nombre. 45 minutos de espera gratuita.",
    filterAll: "Todos los Aeropuertos",
    viewTransfer: "Ver ruta y reservar",
    pax: "1–3 pasajeros",
    vehicleType: "Berlina Confort",
    ctaH2: "¿Su vuelo llega pronto a Marruecos?",
    ctaP: "Envíenos su número de vuelo y hotel en WhatsApp para confirmar su recogida al mejor precio garantizado.",
    ctaWa: "Reservar recogida en WhatsApp",
    waText: "¡Hola! Quisiera reservar un traslado de aeropuerto en Marruecos con chófer privado. ¿Podrían confirmarme tarifa?",
  },
  it: {
    title: `Transfer Aeroporto in Marocco — Prezzi Fissi Garantiti | ${SITE_NAME}`,
    desc: "Transfer aeroportuali puntuali in Marocco. Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fes (FEZ), Tangeri (TNG). Monitoraggio voli e 45 min di attesa gratuita.",
    home: "Home",
    breadcrumb: "Transfer Aeroporto",
    tag: "Tariffa Fissa · Accoglienza con Cartello Inclusa",
    h1: "Transfer Aeroportuali",
    h1Sub: "in Marocco",
    sub: "Accoglienza personalizzata in arrivo in tutti gli aeroporti del Marocco. Il vostro autista vi aspetta con un cartello con il vostro nome. 45 minuti di attesa inclusi.",
    filterAll: "Tutti gli Aeroporti",
    viewTransfer: "Dettagli tratta e prenotazione",
    pax: "1–3 passeggeri",
    vehicleType: "Berlina Comfort",
    ctaH2: "Arrivate a breve in Marocco?",
    ctaP: "Inviateci il vostro numero di volo e la destinazione su WhatsApp per confermare il vostro transfer in pochi minuti.",
    ctaWa: "Prenota transfer su WhatsApp",
    waText: "Buongiorno! Vorrei prenotare un transfer aeroporto in Marocco. Potete confermarmi disponibilità e tariffa?",
  },
  de: {
    title: `Flughafentransfer Marokko — Garantierter Festpreis | ${SITE_NAME}`,
    desc: "Zuverlässige Flughafentransfers in ganz Marokko. Marrakesch (RAK), Casablanca (CMN), Agadir (AGA), Fès (FEZ), Tanger (TNG). Live-Flugverfolgung und 45 Min. Wartezeit inklusive.",
    home: "Startseite",
    breadcrumb: "Flughafentransfers",
    tag: "Festpreis · Persönlicher Empfang Inklusive",
    h1: "Flughafentransfers",
    h1Sub: "in Marokko",
    sub: "Professioneller Chauffeur-Abholservice an allen marokkanischen Flughäfen. Ihr Fahrer erwartet Sie mit Namensschild in der Ankunftshalle. 45 Minuten kostenfreie Wartezeit.",
    filterAll: "Alle Flughäfen",
    viewTransfer: "Streckendetails & Buchen",
    pax: "1–3 Passagiere",
    vehicleType: "Komfort-Limousine",
    ctaH2: "Landen Sie demnächst in Marokko?",
    ctaP: "Senden Sie uns Flugnummer und Zielort einfach per WhatsApp für eine sofortige Festpreisbestätigung.",
    ctaWa: "Transfer per WhatsApp buchen",
    waText: "Guten Tag! Ich möchte einen Flughafentransfer in Marokko buchen. Können Sie mir den Festpreis bestätigen?",
  },
  ar: {
    title: `خدمات استقبال وتوصيل المطارات في المغرب — أسعار ثابتة | ${SITE_NAME}`,
    desc: "استقبال وتوصيل فاخر في جميع مطارات المغرب. مراكش (RAK)، الدار البيضاء (CMN)، أكادير (AGA)، فاس (FEZ)، طنجة (TNG). متابعة الرحلات و45 دقيقة انتظار مجاني.",
    home: "الرئيسية",
    breadcrumb: "استقبال وتوصيل المطارات",
    tag: "أسعار ثابتة · استقبال بلافتة اسمية",
    h1: "خدمات التوصيل",
    h1Sub: "من وإلى مطارات المغرب",
    sub: "استقبال راقٍ واحترافي في جميع صالات الوصول بالمغرب. ينتظرك السائق بلافتة تحمل اسمك، مع تتبع دقيق لموعد هبوط طائرتك و45 دقيقة انتظار مجاناً.",
    filterAll: "جميع المطارات",
    viewTransfer: "تفاصيل المسار والحجز",
    pax: "1–3 ركاب",
    vehicleType: "صالون مريحة",
    ctaH2: "هل تصل قريباً إلى المغرب؟",
    ctaP: "أرسل لنا رقم رحلتك الجوية واسم الفندق عبر واتساب لتأكيد الاستقبال بأفضل سعر مضمون.",
    ctaWa: "حجز التوصيل عبر واتساب",
    waText: "السلام عليكم، أود حجز استقبال وتوصيل من المطار في المغرب. هل يمكنكم تأكيد السعر الثابت والتوافر؟",
  },
  pt: {
    title: `Transfers de Aeroporto em Marrocos — Preço Fixo Garantido | ${SITE_NAME}`,
    desc: "Transfers pontuais em todos os aeroportos de Marrocos. Marraquexe (RAK), Casablanca (CMN), Agadir (AGA), Fez (FEZ), Tânger (TNG). Rastreio de voos e 45 min de espera grátis.",
    home: "Início",
    breadcrumb: "Transfers de Aeroporto",
    tag: "Preço Fixo · Receção com Placa Incluída",
    h1: "Transfers de Aeroporto",
    h1Sub: "em Marrocos",
    sub: "Serviço de motorista profissional em todos os aeroportos marroquinos. O seu condutor espera por si nas chegadas com o seu nome. 45 minutos de espera incluídos.",
    filterAll: "Todos os Aeroportos",
    viewTransfer: "Ver rota e reservar",
    pax: "1–3 passageiros",
    vehicleType: "Berlina Conforto",
    ctaH2: "Vai aterrar em breve em Marrocos?",
    ctaP: "Envie-nos o número do voo e o destino no WhatsApp para garantir o seu transfer com tarifa fechada.",
    ctaWa: "Reservar transfer no WhatsApp",
    waText: "Olá! Gostaria de reservar um transfer de aeroporto em Marrocos. Poderiam confirmar a disponibilidade e o preço fixo?",
  },
  nl: {
    title: `Luchthaven Transfers Marokko — Gegarandeerde Vaste Prijzen | ${SITE_NAME}`,
    desc: "Betrouwbaar vliegveldvervoer in heel Marokko. Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fes (FEZ), Tanger (TNG). Vluchtmonitoring en 45 min gratis wachttijd.",
    home: "Home",
    breadcrumb: "Luchthaven Transfers",
    tag: "Vaste Prijs · Persoonlijk Ontvangst Inbegrepen",
    h1: "Luchthaven Transfers",
    h1Sub: "in Marokko",
    sub: "Professionele ophaalservice op alle Marokkaanse luchthavens. Uw privéchauffeur staat voor u klaar in de aankomsthal met een naambordje. Inclusief 45 minuten wachttijd.",
    filterAll: "Alle Luchthavens",
    viewTransfer: "Route bekijken & boeken",
    pax: "1–3 passagiers",
    vehicleType: "Comfort Sedan",
    ctaH2: "Landt u binnenkort in Marokko?",
    ctaP: "Deel uw vluchtnummer en hotel via WhatsApp voor een directe ritbevestiging tegen de vaste prijs.",
    ctaWa: "Boek transfer via WhatsApp",
    waText: "Hallo! Ik wil graag een vliegveldtransfer boeken in Marokko. Kunt u de vaste prijs en beschikbaarheid bevestigen?",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = AIRPORT_CONTENT[lang] || AIRPORT_CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/airport-transfers`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/airport-transfers`,
        fr: `${SITE_URL}/fr/airport-transfers`,
        es: `${SITE_URL}/es/airport-transfers`,
        it: `${SITE_URL}/it/airport-transfers`,
        de: `${SITE_URL}/de/airport-transfers`,
        ar: `${SITE_URL}/ar/airport-transfers`,
        pt: `${SITE_URL}/pt/airport-transfers`,
        nl: `${SITE_URL}/nl/airport-transfers`,
        "x-default": `${SITE_URL}/airport-transfers`,
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

export default async function LocalizedAirportTransfersPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = AIRPORT_CONTENT[lang] || AIRPORT_CONTENT.es;
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
            <br />
            {c.h1Sub}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="listings-grid">
            {AIRPORT_LISTINGS.map((item) => {
              const localizedTitle =
                item.title[lang as keyof typeof item.title] || item.title.es;
              const routeUrl = `/${lang}/transfers/${item.slug}`;

              return (
                <article key={item.slug} className="listing-card">
                  <div
                    className="listing-img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="listing-badge">{item.tag}</span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">
                      <Link href={routeUrl}>{localizedTitle}</Link>
                    </h3>
                    <div className="listing-specs">
                      <span>{c.pax}</span>
                      <span>·</span>
                      <span>{c.vehicleType}</span>
                    </div>
                    <div className="listing-footer">
                      <div>
                        <span className="listing-from">From</span>
                        <span className="listing-price">€{item.priceEur}</span>
                        <span className="listing-mad">≈ {item.priceMad} MAD</span>
                      </div>
                      <Link href={routeUrl} className="btn btn-gold btn-sm">
                        {c.viewTransfer}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{c.ctaH2}</h2>
          <p>{c.ctaP}</p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa={c.waText}>
              {c.ctaWa}
            </button>
            <Link href={`/${lang}/transfers`} className="btn btn-outline-white btn-lg">
              {c.viewTransfer}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
