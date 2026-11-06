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

const CITY_ROUTES = [
  {
    title: {
      es: "Marrakech → Essaouira",
      it: "Marrakech → Essaouira",
      de: "Marrakesch → Essaouira",
      ar: "مراكش ← الصويرة",
      pt: "Marraquexe → Essaouira",
      nl: "Marrakech → Essaouira",
    },
    slug: "marrakech-to-essaouira",
    distance: "180 km",
    duration: "2h30",
    priceEur: 90,
    priceMad: 990,
    desc: {
      es: "Ruta directa por autopista y costa. Posibilidad de parada para fotografiar cabras en los argán.",
      it: "Autostrada e costa atlantica. Possibilità di sosta fotografica per le capre sugli arganier.",
      de: "Moderne Autobahn & Küstenstraße. Fotostopp bei den Ziegen auf den Arganbäumen möglich.",
      ar: "طريق سريع وساحلي حديث. وقفات تصوير مميزة عند شجر الأركان والماعز.",
      pt: "Autoestrada moderna e costa atlântica. Paragem fotográfica junto aos argãos com cabras.",
      nl: "Snelweg en kustroute. Fotostop mogelijk bij de geiten in de arganbomen.",
    },
    bg: "/img/routes/marrakech-essaouira.jpg",
  },
  {
    title: {
      es: "Marrakech → Agadir / Taghazout",
      it: "Marrakech → Agadir / Taghazout",
      de: "Marrakesch → Agadir / Taghazout",
      ar: "مراكش ← أكادير / تغازوت",
      pt: "Marraquexe → Agadir / Taghazout",
      nl: "Marrakech → Agadir / Taghazout",
    },
    slug: "marrakech-to-agadir",
    distance: "240 km",
    duration: "3h00",
    priceEur: 135,
    priceMad: 1485,
    desc: {
      es: "Autopista A3 cruzando el Alto Atlas. Llegada directa a su hotel, resort o surf camp.",
      it: "Autostrada A3 attraverso l'Alto Atlante. Raggiungete direttamente il vostro hotel o surf camp.",
      de: "Moderne A3 Autobahn über den Hohen Atlas. Direkter Transfer zu Ihrem Resort oder Surfcamp.",
      ar: "الطريق السيار A3 عبر جبال الأطلس الكبير. توصيل مباشر إلى فندقكم أو مخيم ركوب الأمواج.",
      pt: "Autoestrada moderna A3 através do Alto Atlas. Deixamos à porta do resort ou surf camp.",
      nl: "Moderne A3 snelweg door de Hoge Atlas. Directe afzetting bij uw resort of surf camp.",
    },
    bg: "/img/routes/marrakech-agadir.jpg",
  },
  {
    title: {
      es: "Casablanca → Marrakech",
      it: "Casablanca → Marrakech",
      de: "Casablanca → Marrakesch",
      ar: "الدار البيضاء ← مراكش",
      pt: "Casablanca → Marraquexe",
      nl: "Casablanca → Marrakech",
    },
    slug: "casablanca-to-marrakech",
    distance: "240 km",
    duration: "2h45",
    priceEur: 150,
    priceMad: 1650,
    desc: {
      es: "La ruta interurbana más solicitada. Servicio puerta a puerta entre centro o aeropuerto y riad.",
      it: "Il tragitto più richiesto del Marocco. Porta a porta da aeroporto o hotel al vostro riad.",
      de: "Marokkos gefragteste Fernstrecke. Tür-zu-Tür-Service ab Flughafen oder Hotel bis zum Riad.",
      ar: "الخط الأكثر طلباً في المغرب. توصيل من الباب إلى الباب من الفندق أو المطار إلى الرياض.",
      pt: "O percurso mais procurado em Marrocos. Serviço porta a porta do aeroporto ou hotel ao riad.",
      nl: "De populairste intercity route van Marokko. Deur-tot-deur vanaf luchthaven of hotel naar riad.",
    },
    bg: "/img/routes/casablanca-marrakech.jpg",
  },
  {
    title: {
      es: "Fez → Chefchaouen (La Ciudad Azul)",
      it: "Fes → Chefchaouen (La Città Blu)",
      de: "Fès → Chefchaouen (Die Blaue Stadt)",
      ar: "فاس ← شفشاون (المدينة الزرقاء)",
      pt: "Fez → Chefchaouen (A Cidade Azul)",
      nl: "Fes → Chefchaouen (De Blauwe Stad)",
    },
    slug: "fes-to-chefchaouen",
    distance: "200 km",
    duration: "3h45",
    priceEur: 120,
    priceMad: 1320,
    desc: {
      es: "Paso escénico por las montañas del Rif. Paradas para café y fotos panorámicas incluidas.",
      it: "Panoramica traversata delle montagne del Rif. Soste per foto e caffè a piacere.",
      de: "Malerische Route durch das Rif-Gebirge. Stopps für Fotos und Erfrischungen inklusive.",
      ar: "مسار جبلي ساحر عبر جبال الريف الشامخة مع وقفات لالتقاط الصور والاستراحة.",
      pt: "Travessia panorâmica pelas montanhas do Rife. Paragens para fotos e café incluídas.",
      nl: "Schilderachtige tocht door het Rifgebergte met stops voor foto's en ontspanning.",
    },
    bg: "/img/blog/chefchaouen.jpg",
  },
  {
    title: {
      es: "Marrakech → Desierto de Merzouga (Sahara)",
      it: "Marrakech → Deserto di Merzouga (Sahara)",
      de: "Marrakesch → Merzouga-Wüste (Sahara)",
      ar: "مراكش ← صحراء مرزوكة (عرق الشبي)",
      pt: "Marraquexe → Deserto de Merzouga (Saara)",
      nl: "Marrakech → Merzouga Woestijn (Sahara)",
    },
    slug: "marrakech-to-merzouga",
    distance: "560 km",
    duration: "9h00",
    priceEur: 330,
    priceMad: 3630,
    desc: {
      es: "Cruzando el Tizi n'Tichka (2.260 m), Valle del Dades y Gargantas del Todra hacia las dunas.",
      it: "Passo del Tizi n'Tichka (2.260 m), Valle del Dades e Gole del Todra verso l'Erg Chebbi.",
      de: "Über den Tizi n'Tichka Pass (2.260 m), Dades-Tal und Todra-Schluchten zu den Riesendünen.",
      ar: "عبور ممر تيزي نتيشكا (2260م) ووادي دادس ومضايق تودغى وصولاً لكثبان الرمال الذهبية.",
      pt: "Passagem pelo Tizi n'Tichka (2.260 m), Vale do Dades e Gargantas do Todra até ao deserto.",
      nl: "Over de Tizi n'Tichka pas (2.260 m), Dades-vallei en Todrakloof naar de Sahara zandduinen.",
    },
    bg: "/img/routes/marrakech-merzouga.jpg",
  },
  {
    title: {
      es: "Tánger → Chefchaouen",
      it: "Tangeri → Chefchaouen",
      de: "Tanger → Chefchaouen",
      ar: "طنجة ← شفشاون",
      pt: "Tânger → Chefchaouen",
      nl: "Tanger → Chefchaouen",
    },
    slug: "tangier-to-chefchaouen",
    distance: "115 km",
    duration: "2h00",
    priceEur: 80,
    priceMad: 880,
    desc: {
      es: "Conexión directa desde el puerto, estación del AVE o aeropuerto hacia la Perla Azul.",
      it: "Collegamento diretto da porto, stazione TGV o aeroporto verso la Perla Blu del Rif.",
      de: "Direkter Transfer ab Hafen, TGV-Bahnhof oder Flughafen zur Blauen Perle Marokkos.",
      ar: "توصيل مباشر من ميناء طنجة أو محطة قطار البراق أو المطار إلى الجوهرة الزرقاء.",
      pt: "Ligação direta do porto, estação TGV ou aeroporto até à Pérola Azul de Marrocos.",
      nl: "Directe rit vanaf haven, TGV-station of vliegveld naar de Blauwe Parel van Marokko.",
    },
    bg: "/img/blog/tangier-medina.jpg",
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
    viewTransfer: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    waText: string;
  }
> = {
  es: {
    title: `Traslados Entre Ciudades en Marruecos — Precio Fijo | ${SITE_NAME}`,
    desc: "Traslados privados puerta a puerta entre todas las ciudades de Marruecos. Marrakech a Essaouira, Casablanca a Marrakech, Fez a Chefchaouen. Precios fijos por coche.",
    home: "Inicio",
    breadcrumb: "Rutas Entre Ciudades",
    tag: "Servicio Puerta a Puerta · Precios Cerrados Garantizados",
    h1: "Traslados Entre Ciudades",
    h1Sub: "en Todo Marruecos",
    sub: "Viaje con total comodidad entre ciudades marroquíes en vehículos modernos con conductores profesionales bilingües. Combustible, peajes y paradas panorámicas incluidos.",
    viewTransfer: "Ver ruta y tarifas",
    ctaH2: "¿Necesita un trayecto personalizado?",
    ctaP: "Conectamos cualquier riad, aeropuerto, hotel o campamento en Marruecos. Pida presupuesto fijo en WhatsApp.",
    ctaWa: "Pedir tarifa en WhatsApp",
    waText: "¡Hola! Me gustaría cotizar un traslado entre ciudades en Marruecos. ¿Podrían informarme del precio fijo?",
  },
  it: {
    title: `Trasferimenti Tra Città in Marocco — Prezzi Fissi Garantiti | ${SITE_NAME}`,
    desc: "Transfer privati porta a porta tra tutte le città del Marocco. Da Marrakech a Essaouira, Casablanca a Marrakech, Fes a Chefchaouen. Prezzi fissi per auto.",
    home: "Home",
    breadcrumb: "Tratte Tra Città",
    tag: "Servizio Porta a Porta · Tariffe Fisse Garantite",
    h1: "Collegamenti Tra Città",
    h1Sub: "in Marocco",
    sub: "Viaggiate comodamente tra tutte le città marocchine su veicoli moderni e climatizzati. Autisti professionisti, carburante, pedaggi e soste foto inclusi.",
    viewTransfer: "Vedi dettagli tratta",
    ctaH2: "Avete in programma un itinerario speciale?",
    ctaP: "Colleghiamo qualsiasi riad, hotel, aeroporto o accampamento nel Sahara. Richiedete il prezzo su WhatsApp.",
    ctaWa: "Richiedi tariffa su WhatsApp",
    waText: "Buongiorno! Vorrei prenotare un collegamento tra città in Marocco. Potete confermarmi tariffa e disponibilità?",
  },
  de: {
    title: `Fernstrecken & Stadt-zu-Stadt Transfers Marokko | ${SITE_NAME}`,
    desc: "Private Fernstrecken-Transfers von Tür zu Tür zwischen allen Städten Marokkos. Marrakesch nach Essaouira, Casablanca nach Marrakesch, Fès nach Chefchaouen.",
    home: "Startseite",
    breadcrumb: "Fernstrecken",
    tag: "Tür-zu-Tür Service · Garantierte Pauschalpreise",
    h1: "Stadt-zu-Stadt Transfers",
    h1Sub: "in Marokko",
    sub: "Reisen Sie entspannt und sicher zwischen allen marokkanischen Reisezielen. Inklusive Treibstoff, Autobahnmaut und Fotostopps nach Ihren Wünschen.",
    viewTransfer: "Details & Festpreise",
    ctaH2: "Benötigen Sie eine individuelle Reiseroute?",
    ctaP: "Wir verbinden jedes Hotel, jeden Flughafen und jedes Wüstencamp in ganz Marokko. Direkte Preisauskunft auf WhatsApp.",
    ctaWa: "Festpreis per WhatsApp anfragen",
    waText: "Guten Tag! Ich interessiere mich für einen Stadt-zu-Stadt Transfer in Marokko. Können Sie mir ein Festpreisangebot zusenden?",
  },
  ar: {
    title: `خدمات التنقل الخاص والتوصيل بين المدن بالمغرب | ${SITE_NAME}`,
    desc: "تنقلات خاصة ومريحة من الباب إلى الباب بين كافة المدن المغربية. مراكش إلى الصويرة، كازا إلى مراكش، فاس إلى شفشاون. أسعار ثابتة شاملة للسيارة.",
    home: "الرئيسية",
    breadcrumb: "التنقل بين المدن",
    tag: "من الباب إلى الباب · أسعار ثابتة ومؤكدة",
    h1: "خدمات التوصيل الخاص",
    h1Sub: "بين كافة المدن المغربية",
    sub: "سافر بأعلى درجات الراحة والأمان بين مختلف مدن المملكة في سيارات حديثة ومكيفة، مع سائقين مرخصين ووقفات استراحة حسب طلبكم.",
    viewTransfer: "تفاصيل المسار والأسعار",
    ctaH2: "هل لديك خط سير مخصص أو رحلة خاصة؟",
    ctaP: "نوفر التنقل بين أي فندق أو مطار أو مخيم صحراوي بالمغرب. احصل على عرض سعر ثابت وفوري عبر واتساب.",
    ctaWa: "طلب سعر عبر واتساب",
    waText: "السلام عليكم، أود الاستفسار عن رحلة وتوصيل بين المدن في المغرب. هل يمكنكم تأكيد السعر الثابت والتوافر؟",
  },
  pt: {
    title: `Viagens Entre Cidades em Marrocos — Preços Fixos | ${SITE_NAME}`,
    desc: "Transfers privados de porta a porta entre todas as cidades de Marrocos. Marraquexe a Essaouira, Casablanca a Marraquexe, Fez a Chefchaouen.",
    home: "Início",
    breadcrumb: "Viagens Entre Cidades",
    tag: "Serviço Porta a Porta · Preço Fixo Garantido",
    h1: "Transfers Entre Cidades",
    h1Sub: "em Todo o Marrocos",
    sub: "Viaje com total tranquilidade e conforto por Marrocos em viaturas modernas com motoristas experientes. Portagens, combustível e paragens incluídos.",
    viewTransfer: "Ver rota e preço",
    ctaH2: "Precisa de um percurso personalizado?",
    ctaP: "Fazemos ligações entre qualquer riad, aeroporto, hotel ou acampamento no Saara. Fale connosco no WhatsApp.",
    ctaWa: "Pedir cotação no WhatsApp",
    waText: "Olá! Gostaria de consultar o preço para uma viagem entre cidades em Marrocos. Poderiam confirmar a tarifa?",
  },
  nl: {
    title: `Stad naar Stad Transfers Marokko — Vaste All-In Tarieven | ${SITE_NAME}`,
    desc: "Deur-tot-deur privévervoer tussen alle steden in Marokko. Marrakech naar Essaouira, Casablanca naar Marrakech, Fes naar Chefchaouen. Vaste prijzen per auto.",
    home: "Home",
    breadcrumb: "Stad naar Stad ritten",
    tag: "Deur-tot-Deur · Gegarandeerde Vaste Prijzen",
    h1: "Stad naar Stad Vervoer",
    h1Sub: "in Heel Marokko",
    sub: "Reis comfortabel en zorgeloos tussen Marokkaanse steden in moderne wagens met airco. Inclusief brandstof, tolwegen en fotostops onderweg.",
    viewTransfer: "Route bekijken & tarieven",
    ctaH2: "Heeft u een specifieke route in gedachten?",
    ctaP: "Wij verzorgen transfers tussen ieder hotel, vliegveld of woestijnkamp in Marokko. Vraag nu uw vaste prijs aan via WhatsApp.",
    ctaWa: "Vaste prijs via WhatsApp aanvragen",
    waText: "Hallo! Ik wil graag een transfer tussen steden boeken in Marokko. Kunt u mij de vaste prijs en beschikbaarheid doorgeven?",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = CONTENT[lang] || CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/city-to-city`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/city-to-city`,
        fr: `${SITE_URL}/fr/city-to-city`,
        es: `${SITE_URL}/es/city-to-city`,
        it: `${SITE_URL}/it/city-to-city`,
        de: `${SITE_URL}/de/city-to-city`,
        ar: `${SITE_URL}/ar/city-to-city`,
        pt: `${SITE_URL}/pt/city-to-city`,
        nl: `${SITE_URL}/nl/city-to-city`,
        "x-default": `${SITE_URL}/city-to-city`,
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

export default async function LocalizedCityToCityPage({ params }: Props) {
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
            {CITY_ROUTES.map((item) => {
              const localizedTitle =
                item.title[lang as keyof typeof item.title] || item.title.es;
              const localizedDesc =
                item.desc[lang as keyof typeof item.desc] || item.desc.es;
              const routeUrl = `/${lang}/transfers/${item.slug}`;

              return (
                <article key={item.slug} className="listing-card">
                  <div
                    className="listing-img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="listing-badge">
                      {item.distance} · {item.duration}
                    </span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">
                      <Link href={routeUrl}>{localizedTitle}</Link>
                    </h3>
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
