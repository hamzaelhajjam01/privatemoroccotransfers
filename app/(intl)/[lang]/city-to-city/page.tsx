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
    duration: "~2.5h",
    priceEur: 90,
    priceMad: 990,
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
    duration: "~3h",
    priceEur: 135,
    priceMad: 1485,
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
    duration: "~2.5h",
    priceEur: 150,
    priceMad: 1650,
    bg: "/img/hero-city-to-city.jpg",
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
    duration: "~3.5h",
    priceEur: 120,
    priceMad: 1320,
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
    duration: "~9h",
    priceEur: 360,
    priceMad: 3960,
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
    duration: "~2h",
    priceEur: 80,
    priceMad: 880,
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
    sectionTag: string;
    sectionH2: string;
    btnDirectory: string;
    badgeCity: string;
    badgeFixed: string;
    vehicleType: string;
    incDriver: string;
    incTolls: string;
    incCancel: string;
    from: string;
    perVehicle: string;
    viewTransfer: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    waText: string;
  }
> = {
  es: {
    title: `Traslados Entre Ciudades en Marruecos — Precio Fijo`,
    desc: "Traslados privados puerta a puerta entre todas las ciudades de Marruecos. Marrakech a Essaouira, Casablanca a Marrakech, Fez a Chefchaouen. Precios fijos por coche.",
    home: "Inicio",
    breadcrumb: "Rutas Entre Ciudades",
    tag: "Servicio Puerta a Puerta · Precios Cerrados Garantizados",
    h1: "Traslados Entre Ciudades",
    h1Sub: "en Todo Marruecos",
    sub: "Viaje con total comodidad entre ciudades marroquíes en vehículos modernos con conductores profesionales bilingües. Combustible, peajes y paradas panorámicas incluidos.",
    sectionTag: "Principales Rutas",
    sectionH2: "Rutas entre ciudades disponibles",
    btnDirectory: "Ver catálogo de más de 150 rutas ↗",
    badgeCity: "Interurbano",
    badgeFixed: "Precio Fijo",
    vehicleType: "Berlina / SUV",
    incDriver: "Chófer y gasolina incluidos",
    incTolls: "Peajes y aire acondicionado incluidos",
    incCancel: "Cancelación gratuita hasta 48h",
    from: "Desde",
    perVehicle: "por vehículo",
    viewTransfer: "Ver Tarifas",
    ctaH2: "¿Necesita un trayecto personalizado?",
    ctaP: "Conectamos cualquier riad, aeropuerto, hotel o campamento en Marruecos. Pida presupuesto fijo en WhatsApp.",
    ctaWa: "Pedir tarifa en WhatsApp",
    waText: "¡Hola! Me gustaría cotizar un traslado entre ciudades en Marruecos",
  },
  it: {
    title: `Trasferimenti Tra Città in Marocco — Prezzi Fissi Garantiti`,
    desc: "Transfer privati porta a porta tra tutte le città del Marocco. Da Marrakech a Essaouira, Casablanca a Marrakech, Fes a Chefchaouen. Prezzi fissi per auto.",
    home: "Home",
    breadcrumb: "Tratte Tra Città",
    tag: "Servizio Porta a Porta · Tariffe Fisse Garantite",
    h1: "Collegamenti Tra Città",
    h1Sub: "in Marocco",
    sub: "Viaggiate comodamente tra tutte le città marocchine su veicoli moderni e climatizzati. Autisti professionisti, carburante, pedaggi e soste foto inclusi.",
    sectionTag: "Tratte Principali",
    sectionH2: "Collegamenti interurbani disponibili",
    btnDirectory: "Visualizza tutte le 150+ tratte ↗",
    badgeCity: "Interurbano",
    badgeFixed: "Prezzo Fisso",
    vehicleType: "Berlina / SUV",
    incDriver: "Autista e carburante inclusi",
    incTolls: "Pedaggi e aria condizionata inclusi",
    incCancel: "Cancellazione gratuita fino a 48h",
    from: "Da",
    perVehicle: "per veicolo",
    viewTransfer: "Vedi Tariffe",
    ctaH2: "Avete in programma un itinerario speciale?",
    ctaP: "Colleghiamo qualsiasi riad, hotel, aeroporto o accampamento nel Sahara. Richiedete il prezzo su WhatsApp.",
    ctaWa: "Richiedi tariffa su WhatsApp",
    waText: "Buongiorno! Vorrei prenotare un collegamento tra città in Marocco",
  },
  de: {
    title: `Fernstrecken & Stadt-zu-Stadt Transfers Marokko`,
    desc: "Private Fernstrecken-Transfers von Tür zu Tür zwischen allen Städten Marokkos. Marrakesch nach Essaouira, Casablanca nach Marrakesch, Fès nach Chefchaouen.",
    home: "Startseite",
    breadcrumb: "Fernstrecken",
    tag: "Tür-zu-Tür Service · Garantierte Pauschalpreise",
    h1: "Stadt-zu-Stadt Transfers",
    h1Sub: "in Marokko",
    sub: "Reisen Sie entspannt und sicher zwischen allen marokkanischen Reisezielen. Inklusive Treibstoff, Autobahnmaut und Fotostopps nach Ihren Wünschen.",
    sectionTag: "Wichtigste Strecken",
    sectionH2: "Verfügbare Fernstrecken",
    btnDirectory: "Alle 150+ Strecken ansehen ↗",
    badgeCity: "Fernstrecke",
    badgeFixed: "Festpreis",
    vehicleType: "Limousine / SUV",
    incDriver: "Chauffeur & Treibstoff inklusive",
    incTolls: "Mautgebühren & Klimaanlage inklusive",
    incCancel: "Kostenlose Stornierung bis 48 Std.",
    from: "Ab",
    perVehicle: "pro Fahrzeug",
    viewTransfer: "Tarife ansehen",
    ctaH2: "Benötigen Sie eine individuelle Reiseroute?",
    ctaP: "Wir verbinden jedes Hotel, jeden Flughafen und jedes Wüstencamp in ganz Marokko. Direkte Preisauskunft auf WhatsApp.",
    ctaWa: "Festpreis per WhatsApp anfragen",
    waText: "Guten Tag! Ich interessiere mich für einen Stadt-zu-Stadt Transfer in Marokko",
  },
  ar: {
    title: `خدمات التنقل الخاص والتوصيل بين المدن بالمغرب`,
    desc: "تنقلات خاصة ومريحة من الباب إلى الباب بين كافة المدن المغربية. مراكش إلى الصويرة، كازا إلى مراكش، فاس إلى شفشاون. أسعار ثابتة شاملة للسيارة.",
    home: "الرئيسية",
    breadcrumb: "التنقل بين المدن",
    tag: "من الباب إلى الباب · أسعار ثابتة ومؤكدة",
    h1: "خدمات التوصيل الخاص",
    h1Sub: "بين كافة المدن المغربية",
    sub: "سافر بأعلى درجات الراحة والأمان بين مختلف مدن المملكة في سيارات حديثة ومكيفة، مع سائقين مرخصين ووقفات استراحة حسب طلبكم.",
    sectionTag: "أهم خطوط السير",
    sectionH2: "رحلات الربط المتاحة بين المدن",
    btnDirectory: "عرض دليل كافة الرحلات (أكثر من 150 خط) ↗",
    badgeCity: "بين المدن",
    badgeFixed: "سعر ثابت",
    vehicleType: "صالون / SUV",
    incDriver: "السائق والوقود مشمولان",
    incTolls: "رسوم الطرق والتكييف مشمولة",
    incCancel: "إلغاء مجاني حتى 48 ساعة",
    from: "ابتداءً من",
    perVehicle: "لكل سيارة",
    viewTransfer: "عرض الأسعار",
    ctaH2: "هل لديك خط سير مخصص أو رحلة خاصة؟",
    ctaP: "نوفر التنقل بين أي فندق أو مطار أو مخيم صحراوي بالمغرب. احصل على عرض سعر ثابت وفوري عبر واتساب.",
    ctaWa: "طلب سعر عبر واتساب",
    waText: "السلام عليكم، أود الاستفسار عن رحلة وتوصيل بين المدن في المغرب",
  },
  pt: {
    title: `Viagens Entre Cidades em Marrocos — Preços Fixos`,
    desc: "Transfers privados de porta a porta entre todas as cidades de Marrocos. Marraquexe a Essaouira, Casablanca a Marraquexe, Fez a Chefchaouen.",
    home: "Início",
    breadcrumb: "Viagens Entre Cidades",
    tag: "Serviço Porta a Porta · Preço Fixo Garantido",
    h1: "Transfers Entre Cidades",
    h1Sub: "em Todo o Marrocos",
    sub: "Viaje com total tranquilidade e conforto por Marrocos em viaturas modernas com motoristas experientes. Portagens, combustível e paragens incluídos.",
    sectionTag: "Principais Rotas",
    sectionH2: "Viagens entre cidades disponíveis",
    btnDirectory: "Ver catálogo de mais de 150 rotas ↗",
    badgeCity: "Entre Cidades",
    badgeFixed: "Preço Fixo",
    vehicleType: "Berlina / SUV",
    incDriver: "Motorista e combustível incluídos",
    incTolls: "Portagens e ar condicionado incluídos",
    incCancel: "Cancelamento gratuito até 48h",
    from: "A partir de",
    perVehicle: "por veículo",
    viewTransfer: "Ver Tarifas",
    ctaH2: "Precisa de um percurso personalizado?",
    ctaP: "Fazemos ligações entre qualquer riad, aeroporto, hotel ou acampamento no Saara. Fale connosco no WhatsApp.",
    ctaWa: "Pedir cotação no WhatsApp",
    waText: "Olá! Gostaria de consultar o preço para uma viagem entre cidades em Marrocos",
  },
  nl: {
    title: `Stad naar Stad Transfers Marokko — Vaste All-In Tarieven`,
    desc: "Deur-tot-deur privévervoer tussen alle steden in Marokko. Marrakech naar Essaouira, Casablanca naar Marrakech, Fes naar Chefchaouen. Vaste prijzen per auto.",
    home: "Home",
    breadcrumb: "Stad naar Stad ritten",
    tag: "Deur-tot-Deur · Gegarandeerde Vaste Prijzen",
    h1: "Stad naar Stad Vervoer",
    h1Sub: "in Heel Marokko",
    sub: "Reis comfortabel en zorgeloos tussen Marokkaanse steden in moderne wagens met airco. Inclusief brandstof, tolwegen en fotostops onderweg.",
    sectionTag: "Populaire Routes",
    sectionH2: "Beschikbare ritten tussen steden",
    btnDirectory: "Bekijk alle 150+ routes ↗",
    badgeCity: "Stad naar Stad",
    badgeFixed: "Vaste Prijs",
    vehicleType: "Sedan / SUV",
    incDriver: "Chauffeur & brandstof inbegrepen",
    incTolls: "Tolwegen & airconditioning inbegrepen",
    incCancel: "Gratis annuleren tot 48 uur",
    from: "Vanaf",
    perVehicle: "per voertuig",
    viewTransfer: "Tarieven Bekijken",
    ctaH2: "Heeft u een specifieke route in gedachten?",
    ctaP: "Wij verzorgen transfers tussen ieder hotel, vliegveld of woestijnkamp in Marokko. Vraag nu uw vaste prijs aan via WhatsApp.",
    ctaWa: "Vaste prijs via WhatsApp aanvragen",
    waText: "Hallo! Ik wil graag een transfer tussen steden boeken in Marokko",
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span className="section-label">{c.sectionTag}</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>
                {c.sectionH2}
              </h2>
            </div>
            <Link href={`/${lang}/transfers`} className="btn btn-outline">
              {c.btnDirectory}
            </Link>
          </div>

          <div className="listing-grid">
            {CITY_ROUTES.map((item) => {
              const localizedTitle =
                item.title[lang as keyof typeof item.title] || item.title.es;
              const routeUrl = `/${lang}/transfers/${item.slug}`;

              return (
                <div key={item.slug} className="listing-card">
                  <div
                    className="listing-img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="listing-badge">{c.badgeCity}</span>
                    <span className="listing-fixed-badge">{c.badgeFixed}</span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">
                      <Link href={routeUrl}>{localizedTitle}</Link>
                    </h3>
                    <div className="listing-features">
                      <span className="feature-tag">{item.distance}</span>
                      <span className="feature-tag">{item.duration}</span>
                      <span className="feature-tag">{c.vehicleType}</span>
                    </div>
                    <ul className="listing-includes">
                      <li>{c.incDriver}</li>
                      <li>{c.incTolls}</li>
                      <li>{c.incCancel}</li>
                    </ul>
                    <div className="listing-footer">
                      <div>
                        <div className="listing-price-from">{c.from}</div>
                        <div className="listing-price-amount">
                          €{item.priceEur} ({item.priceMad} MAD)
                        </div>
                        <div className="listing-price-unit">{c.perVehicle}</div>
                      </div>
                      <Link
                        href={routeUrl}
                        className="btn btn-gold"
                        style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}
                      >
                        {c.viewTransfer}
                      </Link>
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
              {c.viewTransfer}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
