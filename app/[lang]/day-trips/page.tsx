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
      es: "Valle de Ourika y Cascadas de Setti Fatma",
      it: "Valle dell'Ourika e Cascate di Setti Fatma",
      de: "Ourika-Tal & Setti Fatma Wasserfälle",
      ar: "وادي أوريكا وشلالات ستي فاطمة",
      pt: "Vale de Ourika e Cascatas de Setti Fatma",
      nl: "Ourika-vallei & Setti Fatma Watervallen",
    },
    duration: "8h",
    pax: "1–4",
    priceEur: 75,
    priceMad: 825,
    desc: {
      es: "Aldeas bereberes tradicionales, cooperativas de argán y caminata junto al río del Alto Atlas.",
      it: "Villaggi berberi tipici, cooperative di argan e passeggiata rilassante lungo il fiume dell'Alto Atlante.",
      de: "Traditionelle Berberdörfer, Arganöl-Kooperativen und erfrischender Spaziergang am Gebirgsfluss.",
      ar: "قرى أمازيغية أصيلة، تعاونيات زيت الأركان، وجولات منعشة بمحاذاة وادي الأطلس الكبير.",
      pt: "Aldeias berberes tradicionais, cooperativas de argão e passeio refrescante ao longo do rio.",
      nl: "Traditionele Berberdorpen, argan-coöperaties en wandeling langs de bergrivier van de Hoge Atlas.",
    },
    bg: "/img/textures/tadelakt-warm.jpg",
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
    duration: "9h",
    pax: "1–4",
    priceEur: 120,
    priceMad: 1320,
    desc: {
      es: "Las cascadas más altas del norte de África, macacos en libertad y paseo en barca tradicional.",
      it: "Le cascate più spettacolari del Nord Africa, scimmie macaco in libertà e giro in barca tipica.",
      de: "Die höchsten Wasserfälle Nordafrikas mit freilebenden Berberaffen und traditioneller Bootsfahrt.",
      ar: "أعلى شلالات في شمال إفريقيا مع قرود المكاك البرية وجولات بالقوارب التقليدية.",
      pt: "As maiores quedas de água do Norte de África, macacos em liberdade e passeio de barco típico.",
      nl: "De hoogste watervallen van Noord-Afrika met wilde berberapen en traditioneel boottochtje.",
    },
    bg: "/img/textures/zelige-geometric.jpg",
  },
  {
    title: {
      es: "Essaouira Mogador (Excursión Día Completo)",
      it: "Essaouira Mogador (Giornata Intera)",
      de: "Essaouira Mogador (Ganztagesausflug)",
      ar: "مدينة الصويرة موكادور (يوم كامل)",
      pt: "Essaouira Mogador (Passeio de Dia Inteiro)",
      nl: "Essaouira Mogador (Dagtocht)",
    },
    duration: "10h",
    pax: "1–4",
    priceEur: 160,
    priceMad: 1760,
    desc: {
      es: "Murallas marítimas históricas, puerto pesquero, medina protegida por la UNESCO y pescado fresco.",
      it: "Bastioni sul mare, vivace porto peschereccio, medina patrimonio UNESCO e pesce freschissimo.",
      de: "Historische Festungsmauern am Meer, Fischerhafen, UNESCO-Altstadt und frischer Atlantikfisch.",
      ar: "أسوار تاريخية تواجه المحيط، ميناء صيد حيوي، وسوق السمك الطازج بالمدينة العتيقة.",
      pt: "Muralhas marítimas históricas, porto de pesca tradicional e peixe fresco à beira do oceano.",
      nl: "Historische stadsmuren aan zee, vissershaven, UNESCO-werelderfgoed medina en verse vis.",
    },
    bg: "/img/routes/marrakech-essaouira.jpg",
  },
  {
    title: {
      es: "Desierto de Agafay (Puesta de Sol y Cena)",
      it: "Deserto di Agafay (Tramonto e Cena)",
      de: "Agafay-Wüste (Sonnenuntergang & Dinner)",
      ar: "صحراء أكافاي (غروب الشمس وعشاء فاخر)",
      pt: "Deserto de Agafay (Pôr do Sol e Jantar)",
      nl: "Agafay Woestijn (Zonsondergang & Diner)",
    },
    duration: "5h",
    pax: "1–4",
    priceEur: 70,
    priceMad: 770,
    desc: {
      es: "Paisaje lunar a solo 45 min de Marrakech, paseo en dromedario opcional y cena bajo las estrellas.",
      it: "Paesaggio desertico a soli 45 minuti da Marrakech, dromedari facoltativi e cena sotto le stelle.",
      de: "Faszinierende Steinwüste nur 45 Min. von Marrakesch entfernt, Dromedar-Ritt und Dinner unterm Sternenhimmel.",
      ar: "طبيعة صحراوية ساحرة تبعد 45 دقيقة فقط عن مراكش مع إمكانية ركوب الجمال وعشاء في الخيام.",
      pt: "Paisagem desértica a apenas 45 min de Marraquexe, dromedários opcionais e jantar sob as estrelas.",
      nl: "Steenwoestijn op slechts 45 min van Marrakech, optionele dromedarisrit en diner onder de sterren.",
    },
    bg: "/img/textures/carved-plaster.jpg",
  },
  {
    title: {
      es: "Aït Ben Haddou y Ouarzazate (La Ruta de las Kasbahs)",
      it: "Aït Ben Haddou e Ouarzazate (La Via delle Kasbah)",
      de: "Aït Ben Haddou & Ouarzazate (Kasbah-Route)",
      ar: "آيت بن حدو وورزازات (طريق القصبات التاريخية)",
      pt: "Aït Ben Haddou e Ouarzazate (A Rota das Kasbahs)",
      nl: "Aït Ben Haddou & Ouarzazate (Kasbah Route)",
    },
    duration: "11h",
    pax: "1–4",
    priceEur: 180,
    priceMad: 1980,
    desc: {
      es: "Paso del Atlas Tizi n'Tichka, kasbah fortaleza de Gladiador y Juego de Tronos, y estudios de cine.",
      it: "Traversata dell'Alto Atlante, ksar millenario set de Il Gladiatore e famosi studi cinematografici.",
      de: "Über den Tizi n'Tichka Pass, weltberühmte Filmkulisse aus Gladiator und Filmstudios von Ouarzazate.",
      ar: "عبور جبال الأطلس، زيارة قصبة آيت بن حدو الشهيرة عالمياً واستوديوهات السينما بورزازات.",
      pt: "Passagem pelo Alto Atlas, kasbah histórica cenário de Gladiador e estúdios de cinema.",
      nl: "Over de Hoge Atlas naar het filmdecor van Gladiator en de beroemde filmstudio's in Ouarzazate.",
    },
    bg: "/img/textures/brass-lantern.jpg",
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
    bookTrip: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    waText: string;
  }
> = {
  es: {
    title: `Excursiones de un Día en Marruecos con Chófer Privado | ${SITE_NAME}`,
    desc: "Excursiones privadas de un día en Marruecos: Valle de Ourika, Cascadas de Ouzoud, Essaouira, Desierto de Agafay, Aït Ben Haddou. Precios cerrados por vehículo.",
    home: "Inicio",
    breadcrumb: "Excursiones de un Día",
    tag: "Chófer Exclusivo Todo el Día · Recogida en Riad",
    h1: "Excursiones Privadas",
    h1Sub: "de un Día en Marruecos",
    sub: "Descubra los parajes más impresionantes de Marruecos con su propio conductor privado. Salida desde su hotel y regreso por la tarde con total flexibilidad.",
    bookTrip: "Consultar excursión",
    ctaH2: "¿Desea un día a su propio ritmo?",
    ctaP: "Personalizamos los horarios, paradas y restaurantes según sus preferencias. Escríbanos por WhatsApp.",
    ctaWa: "Reservar excursión en WhatsApp",
    waText: "¡Hola! Quisiera información y reservar una excursión privada de un día en Marruecos. ¿Podrían informarme de las opciones y tarifas?",
  },
  it: {
    title: `Escursioni Giornaliere in Marocco con Autista Privato | ${SITE_NAME}`,
    desc: "Escursioni giornaliere private in Marocco: Valle dell'Ourika, Cascate di Ouzoud, Essaouira, Deserto di Agafay, Aït Ben Haddou. Tariffe fisse per auto.",
    home: "Home",
    breadcrumb: "Escursioni Giornaliere",
    tag: "Autista Dedicato per Tutta la Giornata · Presa in Riad",
    h1: "Escursioni Private",
    h1Sub: "in Giornata in Marocco",
    sub: "Esplorate la natura e i borghi più autentici del Marocco con il vostro autista privato dedicato. Partenza dall'alloggio e rientro in serata.",
    bookTrip: "Prenota escursione",
    ctaH2: "Volete organizzare una giornata personalizzata?",
    ctaP: "Concordiamo orari, soste e itinerari su misura per voi e la vostra famiglia. Risposta immediata su WhatsApp.",
    ctaWa: "Prenota su WhatsApp",
    waText: "Buongiorno! Vorrei prenotare un'escursione giornaliera privata in Marocco. Potete indicarmi tariffe e dettagli?",
  },
  de: {
    title: `Tagesausflüge in Marokko mit Privatchauffeur | ${SITE_NAME}`,
    desc: "Private Ganztagesausflüge in Marokko: Ourika-Tal, Ouzoud-Wasserfälle, Essaouira, Agafay-Wüste, Aït Ben Haddou. Feste Pauschalpreise pro Fahrzeug.",
    home: "Startseite",
    breadcrumb: "Tagesausflüge",
    tag: "Ganztägiger Chauffeurservice · Abholung am Riad",
    h1: "Private Tagesausflüge",
    h1Sub: "in Marokko",
    sub: "Erleben Sie spektakuläre Natur und Weltkulturerbestätten mit Ihrem persönlichen Chauffeur. Entspannte Abholung am Hotel und Rückkehr am Abend.",
    bookTrip: "Ausflug anfragen",
    ctaH2: "Möchten Sie Ihren eigenen Tag gestalten?",
    ctaP: "Wir passen Zeiten, Route und Fotostopps komplett an Ihre Reisewünsche an. Schreiben Sie uns einfach auf WhatsApp.",
    ctaWa: "Ausflug auf WhatsApp buchen",
    waText: "Guten Tag! Ich interessiere mich für einen privaten Tagesausflug in Marokko. Können Sie mir die Optionen und Festpreise senden?",
  },
  ar: {
    title: `رحلات وجولات يومية خاصة في المغرب مع سائق خاص | ${SITE_NAME}`,
    desc: "جولات سياحية يومية خاصة بالمغرب: وادي أوريكا، شلالات أوزود، الصويرة، صحراء أكافاي، قصر آيت بن حدو. أسعار ثابتة ومؤكدة للمركبة.",
    home: "الرئيسية",
    breadcrumb: "رحلات يومية خاصة",
    tag: "سائق خاص طوال اليوم · انطلاق وعودة للفندق",
    h1: "رحلات سياحية خاصة",
    h1Sub: "ليوم كامل في المغرب",
    sub: "استكشف أروع معالم المغرب الطبيعية والتاريخية مع سائق خاص مخصص لك ولعائلتك طوال اليوم، مع مرونة تامة في أوقات التوقف والعودة.",
    bookTrip: "حجز الرحلة",
    ctaH2: "هل ترغب في تنظيم برنامج يومي خاص بكم؟",
    ctaP: "نقوم بتخصيص المسارات ومواعيد الانطلاق حسب راحتكم تماماً. تواصل فوري ومباشر عبر واتساب.",
    ctaWa: "حجز عبر واتساب",
    waText: "السلام عليكم، أود حجز رحلة يومية خاصة مع سائق في المغرب. هل يمكنكم تزويدي بالأسعار والخيارات المتاحة؟",
  },
  pt: {
    title: `Passeios de um Dia em Marrocos com Motorista Privado | ${SITE_NAME}`,
    desc: "Passeios particulares de um dia em Marrocos: Vale de Ourika, Cascatas de Ouzoud, Essaouira, Deserto de Agafay, Aït Ben Haddou. Preços fixos por viatura.",
    home: "Início",
    breadcrumb: "Passeios de um Dia",
    tag: "Motorista Dedicado Todo o Dia · Recolha no Riad",
    h1: "Passeios Privados",
    h1Sub: "de um Dia em Marrocos",
    sub: "Descubra as mais belas paisagens de Marrocos com o seu próprio motorista. Partida do hotel pela manhã e regresso ao fim da tarde.",
    bookTrip: "Ver passeio",
    ctaH2: "Deseja um roteiro à sua medida?",
    ctaP: "Ajustamos horários, paragens e restaurantes de acordo com a sua preferência. Fale connosco no WhatsApp.",
    ctaWa: "Reservar no WhatsApp",
    waText: "Olá! Gostaria de fazer um passeio privado de um dia em Marrocos. Poderiam enviar-me as opções e preços fixos?",
  },
  nl: {
    title: `Dagtochten in Marokko met Privéchauffeur | ${SITE_NAME}`,
    desc: "Volledig verzorgde dagtrips in Marokko: Ourika-vallei, Ouzoud-watervallen, Essaouira, Agafay-woestijn, Aït Ben Haddou. Vaste prijzen per voertuig.",
    home: "Home",
    breadcrumb: "Dagtochten",
    tag: "Chauffeur de Hele Dag Beschikbaar · Ophalen bij Riad",
    h1: "Exclusieve Dagtochten",
    h1Sub: "in Marokko",
    sub: "Ontdek adembenemende berglandschappen, watervallen en kuststeden met uw eigen privéchauffeur. Ophalen bij uw riad en 's avonds ontspannen terug.",
    bookTrip: "Dagtocht aanvragen",
    ctaH2: "Wilt u uw eigen dagindeling bepalen?",
    ctaP: "Wij stemmen vertrektijden, stops en bezienswaardigheden geheel af op uw wensen. Chat direct met ons op WhatsApp.",
    ctaWa: "Dagtocht via WhatsApp boeken",
    waText: "Hallo! Ik wil graag een privédagtocht boeken in Marokko. Kunt u mij de mogelijkheden en vaste tarieven laten weten?",
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
            {DAY_TRIPS.map((item, idx) => {
              const localizedTitle =
                item.title[lang as keyof typeof item.title] || item.title.es;
              const localizedDesc =
                item.desc[lang as keyof typeof item.desc] || item.desc.es;

              return (
                <article key={idx} className="listing-card">
                  <div
                    className="listing-img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="listing-badge">
                      {item.duration} · {item.pax} pax
                    </span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">{localizedTitle}</h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        marginBottom: "16px",
                      }}
                    >
                      {localizedDesc}
                    </p>
                    <div className="listing-footer">
                      <div>
                        <span className="listing-from">From</span>
                        <span className="listing-price">€{item.priceEur}</span>
                        <span className="listing-mad">≈ {item.priceMad} MAD</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-gold btn-sm"
                        data-wa={`${c.waText} (${localizedTitle})`}
                      >
                        {c.bookTrip}
                      </button>
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
              {c.bookTrip}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
