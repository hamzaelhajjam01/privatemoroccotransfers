import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

const DAY_TRIPS = [
  {
    title: {
      es: "Essaouira Mogador desde Marrakech",
      it: "Essaouira da Marrakech",
      de: "Essaouira ab Marrakesch",
      ar: "مدينة الصويرة انطلاقاً من مراكش",
      pt: "Essaouira a partir de Marraquexe",
      nl: "Essaouira vanuit Marrakech",
    },
    distance: "176 km",
    duration: "10h",
    priceEur: 120,
    priceMad: 1320,
    bg: "/img/routes/marrakech-essaouira.webp",
  },
  {
    title: {
      es: "Valle de Ourika y Cascadas",
      it: "Valle dell'Ourika e Cascate",
      de: "Ourika-Tal & Wasserfälle",
      ar: "وادي أوريكا وشلالات ستي فاطمة",
      pt: "Vale de Ourika e Cascatas",
      nl: "Ourika-vallei & Watervallen",
    },
    distance: "60 km",
    duration: "8h",
    priceEur: 75,
    priceMad: 825,
    bg: "/img/hero-day-trips.webp",
  },
  {
    title: {
      es: "Montañas del Atlas y Valle de Imlil",
      it: "Montagne dell'Atlante e Imlil",
      de: "Atlasgebirge & Imlil-Tal",
      ar: "جبال الأطلس الكبير ومنطقة إمليل",
      pt: "Montanhas do Atlas e Imlil",
      nl: "Atlasgebergte & Imlil-vallei",
    },
    distance: "65 km",
    duration: "8h",
    priceEur: 85,
    priceMad: 935,
    bg: "/img/hero-city-to-city.webp",
  },
  {
    title: {
      es: "Aït Ben Haddou y Ouarzazate",
      it: "Aït Ben Haddou e Ouarzazate",
      de: "Aït Ben Haddou & Ouarzazate",
      ar: "قصر آيت بن حدو ومدينة ورزازات",
      pt: "Aït Ben Haddou e Ouarzazate",
      nl: "Aït Ben Haddou & Ouarzazate",
    },
    distance: "200 km",
    duration: "11h",
    priceEur: 180,
    priceMad: 1980,
    bg: "/img/fleet-scenes/toyota-prado.webp",
  },
  {
    title: {
      es: "Cascadas de Ouzoud (110 metros)",
      it: "Cascate di Ouzoud (110 metri)",
      de: "Ouzoud-Wasserfälle (110 Meter)",
      ar: "شلالات أوزود الشامخة (110 أمتار)",
      pt: "Cascatas de Ouzoud (110 metros)",
      nl: "Ouzoud Watervallen (110 meter)",
    },
    distance: "150 km",
    duration: "9h",
    priceEur: 120,
    priceMad: 1320,
    bg: "/img/blog/day-trips.webp",
  },
  {
    title: {
      es: "Desierto de Agafay, Puesta de Sol y Cena",
      it: "Deserto di Agafay, Tramonto e Cena",
      de: "Agafay-Wüste, Sonnenuntergang & Dinner",
      ar: "صحراء أكافاي، غروب الشمس وعشاء فاخر",
      pt: "Deserto de Agafay, Pôr do Sol e Jantar",
      nl: "Agafay Woestijn, Zonsondergang & Diner",
    },
    distance: "40 km",
    duration: "5h",
    priceEur: 70,
    priceMad: 770,
    bg: "/img/blog/sahara-merzouga.webp",
  },
];

const CONTENT: Record<
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
    sectionTag: string;
    sectionH2: string;
    btnCalc: string;
    badgeDayTrip: string;
    badgeFixed: string;
    incDriver: string;
    incAc: string;
    incCancel: string;
    from: string;
    perVehicleReturn: string;
    bookTrip: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    waText: string;
  }
> = {
  es: {
    title: `Excursiones de un Día en Marruecos con Chófer Privado`,
    desc: "Excursiones privadas de un día en Marruecos: Valle de Ourika, Cascadas de Ouzoud, Essaouira, Desierto de Agafay, Aït Ben Haddou. Precios cerrados por vehículo.",
    home: "Inicio",
    breadcrumb: "Excursiones de un Día",
    tag: "Chófer Exclusivo Todo el Día · Recogida en Riad",
    h1: "Excursiones Privadas",
    h1Sub: "de un Día en Marruecos",
    sub: "Descubra los parajes más impresionantes de Marruecos con su propio conductor privado. Salida desde su hotel y regreso por la tarde con total flexibilidad.",
    sectionTag: "Todas las Opciones",
    sectionH2: "Excursiones disponibles",
    btnCalc: "Calculadora de Precios",
    badgeDayTrip: "Excursión",
    badgeFixed: "Precio Fijo",
    incDriver: "Chófer, gasolina y peajes incluidos",
    incAc: "Vehículo con aire acondicionado",
    incCancel: "Cancelación gratuita hasta 48h",
    from: "Desde",
    perVehicleReturn: "por vehículo, ida y vuelta",
    bookTrip: "Reservar",
    ctaH2: "¿Desea un día a su propio ritmo?",
    ctaP: "Personalizamos los horarios, paradas y restaurantes según sus preferencias. Escríbanos por WhatsApp.",
    ctaWa: "Reservar excursión en WhatsApp",
    waText: "¡Hola! Quisiera reservar una excursión de un día en Marruecos",
  },
  it: {
    title: `Escursioni Giornaliere in Marocco con Autista Privato`,
    desc: "Escursioni giornaliere private in Marocco: Valle dell'Ourika, Cascate di Ouzoud, Essaouira, Deserto di Agafay, Aït Ben Haddou. Tariffe fisse per auto.",
    home: "Home",
    breadcrumb: "Escursioni Giornaliere",
    tag: "Autista Dedicato per Tutta la Giornata · Presa in Riad",
    h1: "Escursioni Private",
    h1Sub: "in Giornata in Marocco",
    sub: "Esplorate la natura e i borghi più autentici del Marocco con il vostro autista privato dedicato. Partenza dall'alloggio e rientro in serata.",
    sectionTag: "Tutte le Opzioni",
    sectionH2: "Escursioni disponibili",
    btnCalc: "Calcolatore Tariffe",
    badgeDayTrip: "Escursione",
    badgeFixed: "Prezzo Fisso",
    incDriver: "Autista, carburante e pedaggi inclusi",
    incAc: "Aria condizionata",
    incCancel: "Cancellazione gratuita fino a 48h",
    from: "Da",
    perVehicleReturn: "per veicolo, andata e ritorno",
    bookTrip: "Prenota",
    ctaH2: "Volete organizzare una giornata personalizzata?",
    ctaP: "Concordiamo orari, soste e itinerari su misura per voi e la vostra famiglia. Risposta immediata su WhatsApp.",
    ctaWa: "Prenota su WhatsApp",
    waText: "Buongiorno! Vorrei prenotare un'escursione in Marocco",
  },
  de: {
    title: `Tagesausflüge in Marokko mit Privatchauffeur`,
    desc: "Private Ganztagesausflüge in Marokko: Ourika-Tal, Ouzoud-Wasserfälle, Essaouira, Agafay-Wüste, Aït Ben Haddou. Feste Pauschalpreise pro Fahrzeug.",
    home: "Startseite",
    breadcrumb: "Tagesausflüge",
    tag: "Ganztägiger Chauffeurservice · Abholung am Riad",
    h1: "Private Tagesausflüge",
    h1Sub: "in Marokko",
    sub: "Erleben Sie spektakuläre Natur und Weltkulturerbestätten mit Ihrem persönlichen Chauffeur. Entspannte Abholung am Hotel und Rückkehr am Abend.",
    sectionTag: "Alle Optionen",
    sectionH2: "Verfügbare Ausflüge",
    btnCalc: "Tarifrechner",
    badgeDayTrip: "Tagesausflug",
    badgeFixed: "Festpreis",
    incDriver: "Chauffeur, Treibstoff und Maut inklusive",
    incAc: "Klimatisiertes Fahrzeug",
    incCancel: "Kostenlose Stornierung bis 48 Std.",
    from: "Ab",
    perVehicleReturn: "pro Fahrzeug, Hin & Rückfahrt",
    bookTrip: "Buchen",
    ctaH2: "Möchten Sie Ihren eigenen Tag gestalten?",
    ctaP: "Wir passen Zeiten, Route und Fotostopps komplett an Ihre Reisewünsche an. Schreiben Sie uns einfach auf WhatsApp.",
    ctaWa: "Ausflug auf WhatsApp buchen",
    waText: "Guten Tag! Ich möchte einen Tagesausflug in Marokko buchen",
  },
  ar: {
    title: `رحلات وجولات يومية خاصة في المغرب مع سائق خاص`,
    desc: "جولات سياحية يومية خاصة بالمغرب: وادي أوريكا، شلالات أوزود، الصويرة، صحراء أكافاي، قصر آيت بن حدو. أسعار ثابتة ومؤكدة للمركبة.",
    home: "الرئيسية",
    breadcrumb: "رحلات يومية خاصة",
    tag: "سائق خاص طوال اليوم · انطلاق وعودة للفندق",
    h1: "رحلات سياحية خاصة",
    h1Sub: "ليوم كامل في المغرب",
    sub: "استكشف أروع معالم المغرب الطبيعية والتاريخية مع سائق خاص مخصص لك ولعائلتك طوال اليوم، مع مرونة تامة في أوقات التوقف والعودة.",
    sectionTag: "كافة الخيارات",
    sectionH2: "الرحلات اليومية المتاحة",
    btnCalc: "حاسبة الأسعار",
    badgeDayTrip: "جولة يومية",
    badgeFixed: "سعر ثابت",
    incDriver: "السائق والوقود ورسوم الطرق مشمولة",
    incAc: "سيارة حديثة ومكيفة بالكامل",
    incCancel: "إلغاء مجاني حتى 48 ساعة",
    from: "ابتداءً من",
    perVehicleReturn: "لكل سيارة بالكامل (ذهاب وعودة)",
    bookTrip: "احجز الآن",
    ctaH2: "هل ترغب في تنظيم برنامج يومي خاص بكم؟",
    ctaP: "نقوم بتخصيص المسارات ومواعيد الانطلاق حسب راحتكم تماماً. تواصل فوري ومباشر عبر واتساب.",
    ctaWa: "حجز عبر واتساب",
    waText: "السلام عليكم، أود حجز رحلة يومية خاصة في المغرب",
  },
  pt: {
    title: `Passeios de um Dia em Marrocos com Motorista Privado`,
    desc: "Passeios particulares de um dia em Marrocos: Vale de Ourika, Cascatas de Ouzoud, Essaouira, Deserto de Agafay, Aït Ben Haddou. Preços fixos por viatura.",
    home: "Início",
    breadcrumb: "Passeios de um Dia",
    tag: "Motorista Dedicado Todo o Dia · Recolha no Riad",
    h1: "Passeios Privados",
    h1Sub: "de um Dia em Marrocos",
    sub: "Descubra as mais belas paisagens de Marrocos com o seu próprio motorista. Partida do hotel pela manhã e regresso ao fim da tarde.",
    sectionTag: "Todas as Opções",
    sectionH2: "Passeios disponíveis",
    btnCalc: "Calculadora de Preços",
    badgeDayTrip: "Passeio de um dia",
    badgeFixed: "Preço Fixo",
    incDriver: "Motorista, combustível e portagens",
    incAc: "Ar condicionado",
    incCancel: "Cancelamento gratuito até 48h",
    from: "A partir de",
    perVehicleReturn: "por veículo, ida e volta",
    bookTrip: "Reservar",
    ctaH2: "Deseja um roteiro à sua medida?",
    ctaP: "Ajustamos horários, paragens e restaurantes de acordo com a sua preferência. Fale connosco no WhatsApp.",
    ctaWa: "Reservar no WhatsApp",
    waText: "Olá! Gostaria de reservar um passeio privado de um dia em Marrocos",
  },
  nl: {
    title: `Dagtochten in Marokko met Privéchauffeur`,
    desc: "Volledig verzorgde dagtrips in Marokko: Ourika-vallei, Ouzoud-watervallen, Essaouira, Agafay-woestijn, Aït Ben Haddou. Vaste prijzen per voertuig.",
    home: "Home",
    breadcrumb: "Dagtochten",
    tag: "Chauffeur de Hele Dag Beschikbaar · Ophalen bij Riad",
    h1: "Exclusieve Dagtochten",
    h1Sub: "in Marokko",
    sub: "Ontdek adembenemende berglandschappen, watervallen en kuststeden met uw eigen privéchauffeur. Ophalen bij uw riad en 's avonds ontspannen terug.",
    sectionTag: "Alle Opties",
    sectionH2: "Beschikbare dagtochten",
    btnCalc: "Tarieven Calculator",
    badgeDayTrip: "Dagtocht",
    badgeFixed: "Vaste Prijs",
    incDriver: "Chauffeur, brandstof en tolwegen",
    incAc: "Airconditioning inbegrepen",
    incCancel: "Gratis annuleren tot 48 uur",
    from: "Vanaf",
    perVehicleReturn: "per voertuig, heen en terug",
    bookTrip: "Boeken",
    ctaH2: "Wilt u uw eigen dagindeling bepalen?",
    ctaP: "Wij stemmen vertrektijden, stops en bezienswaardigheden geheel af op uw wensen. Chat direct met ons op WhatsApp.",
    ctaWa: "Dagtocht via WhatsApp boeken",
    waText: "Hallo! Ik wil graag een privédagtocht boeken in Marokko",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = CONTENT[lang] || CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/day-trips`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/day-trips`,
        fr: `${SITE_URL}/fr/day-trips`,
        es: `${SITE_URL}/es/day-trips`,
        it: `${SITE_URL}/it/day-trips`,
        de: `${SITE_URL}/de/day-trips`,
        ar: `${SITE_URL}/ar/day-trips`,
        pt: `${SITE_URL}/pt/day-trips`,
        nl: `${SITE_URL}/nl/day-trips`,
        "x-default": `${SITE_URL}/day-trips`,
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

export default async function LocalizedDayTripsPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = CONTENT[lang] || CONTENT.es;
  const homeUrl = `/${lang}`;
  const calcUrl = `/${lang}/calculator`;
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
          <div className="section-header">
            <div>
              <span className="section-label">{c.sectionTag}</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>
                {c.sectionH2}
              </h2>
            </div>
            <Link href={calcUrl} className="btn btn-outline">
              {c.btnCalc}
            </Link>
          </div>

          <div className="listing-grid">
            {DAY_TRIPS.map((item, idx) => {
              const localizedTitle =
                item.title[lang as keyof typeof item.title] || item.title.es;

              return (
                <div key={idx} className="listing-card">
                  <div
                    className="listing-img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="listing-badge">{c.badgeDayTrip}</span>
                    <span className="listing-fixed-badge">{c.badgeFixed}</span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">{localizedTitle}</h3>
                    <div className="listing-features">
                      <span className="feature-tag">{item.distance}</span>
                      <span className="feature-tag">{item.duration}</span>
                    </div>
                    <ul className="listing-includes">
                      <li>{c.incDriver}</li>
                      <li>{c.incAc}</li>
                      <li>{c.incCancel}</li>
                    </ul>
                    <div className="listing-footer">
                      <div>
                        <div className="listing-price-from">{c.from}</div>
                        <div className="listing-price-amount">
                          €{item.priceEur} ({item.priceMad} MAD)
                        </div>
                        <div className="listing-price-unit">{c.perVehicleReturn}</div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-black"
                        data-wa={`${c.waText}: ${localizedTitle} (€${item.priceEur})`}
                      >
                        {c.bookTrip}
                      </button>
                    </div>
                  </div>
                </div>
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
              {c.sectionH2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
