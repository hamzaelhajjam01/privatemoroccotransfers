import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import routesData from "@/content/routes.json";
import {
  SITE_NAME,
  SITE_URL,
  whatsappUrl,
  buildMultilingualAlternates,
  buildRouteMetaTitle,
  buildRouteMetaDescription,
} from "@/lib/site";
import { buildDirectionalRouteCopy } from "@/lib/route-copy";
import { EUR_RATE } from "@/lib/pricing";
import Icon from "@/components/Icon";
import VehiclePriceTag from "@/components/VehiclePriceTag";
import StickyMobileBookingBar from "@/components/StickyMobileBookingBar";
import { LanguageCode, getLocalizedPlace } from "@/lib/i18n";

export type RouteItem = {
  slug: string;
  from: string;
  to: string;
  fromRaw?: string;
  toRaw?: string;
  distance: string;
  duration: string;
  price_sedan: number;
  price_van: number;
  price_minibus: number;
  highway?: string;
  highlights?: string[];
  faqs?: { q: string; a: string }[];
  popular?: boolean;
};

const ALL_ROUTES = routesData as RouteItem[];
const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  const popularRoutes = ALL_ROUTES.filter((r) => r.popular);
  for (const lang of SUPPORTED_LANGS) {
    for (const r of popularRoutes) {
      params.push({ lang, slug: r.slug });
    }
  }
  return params;
}

const UI = {
  es: {
    heroTag: "Traslado Privado a Precio Fijo · Conductor Profesional",
    h1: (from: string, to: string) => `Traslado Privado de ${from} a ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `Servicio puerta a puerta de ${from} a ${to} (~${dur}, ${dist}). Tarifa fija garantizada de €${price} por vehículo. Conductores profesionales, combustible y peajes incluidos.`,
    distBadge: "Distancia",
    durBadge: "Tiempo estimado",
    priceBadge: "Tarifa fija",
    vehicleLabel: "Elija su vehículo",
    ratesTitle: "Tarifas fijas",
    perVehicle: "por vehículo",
    sedan: "Berlina Confort",
    sedanPax: "1–4 Pasajeros",
    sedanDesc: "Skoda Octavia, Toyota Corolla o berlina moderna. Ideal para parejas, viajeros solos y equipaje estándar.",
    van: "Monovolumen / Van",
    vanPax: "5–7 Pasajeros",
    vanDesc: "Mercedes-Benz Vito, Clase V o Hyundai H1. Mayor espacio para piernas y gran maletero para familias.",
    minibus: "Minibús Privado",
    minibusPax: "8–14 Pasajeros",
    minibusDesc: "Mercedes Sprinter VIP o Ford Transit. Ideal para grupos grandes, golfistas y delegaciones.",
    bookSedan: "Reservar Berlina",
    bookVan: "Reservar Van",
    bookMinibus: "Reservar Minibús",
    guarantees: [
      { title: "Precio Fijo Todo Incluido", desc: "Incluye chófer profesional, todos los peajes de autopista y combustible. Sin sorpresas." },
      { title: "Pago a la Llegada", desc: "0% de anticipo para viajes de menos de 300 €. Paga en efectivo directamente a su conductor." },
      { title: "Recibimiento con Cartel", desc: "Recogida puerta a puerta en su hotel, riad o sala de llegadas del aeropuerto con 45 min de espera gratis." },
      { title: "Paradas Panorámicas", desc: "Paradas libres y flexibles para fotos panorámicas, café o descansos a lo largo de la ruta." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `¡Hola! Deseo reservar un traslado privado de ${from} a ${to} (${veh} - €${price}). ¿Podrían confirmar disponibilidad?`,
    faqTitle: "Preguntas Frecuentes",
    ctaTitle: "¿Listo para reservar su traslado?",
    ctaSub: "Sin anticipo bajo 300 €. Envíenos su fecha y punto de recogida en WhatsApp para confirmación instantánea.",
    ctaBtn: "Reservar por WhatsApp",
    ctaAll: "Ver Todas las Rutas",
  },
  it: {
    heroTag: "Transfer Privato a Prezzo Fisso · Autista Professionale",
    h1: (from: string, to: string) => `Transfer Privato da ${from} a ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `Servizio porta a porta da ${from} a ${to} (~${dur}, ${dist}). Tariffa fissa garantita di €${price} per auto. Autisti esperti, carburante e pedaggi inclusi.`,
    distBadge: "Distanza",
    durBadge: "Tempo stimato",
    priceBadge: "Tariffa fissa",
    vehicleLabel: "Scegli il veicolo",
    ratesTitle: "Tariffe fisse",
    perVehicle: "per veicolo",
    sedan: "Berlina Comfort",
    sedanPax: "1–4 Passeggeri",
    sedanDesc: "Skoda Octavia, Toyota Corolla o berlina moderna. Ideale per coppie e viaggiatori singoli con bagaglio standard.",
    van: "Van Spazioso",
    vanPax: "5–7 Passeggeri",
    vanDesc: "Mercedes-Benz Vito, Classe V o Hyundai H1. Ampio spazio e capacità bagagli ottimale per famiglie.",
    minibus: "Minibus Privato",
    minibusPax: "8–14 Passeggeri",
    minibusDesc: "Mercedes Sprinter VIP o Ford Transit. Per gruppi di amici, golfisti e vacanze condivise.",
    bookSedan: "Prenota Berlina",
    bookVan: "Prenota Van",
    bookMinibus: "Prenota Minibus",
    guarantees: [
      { title: "Tariffa Fissa All-Inclusive", desc: "Include autista privato con licenza, tutti i pedaggi autostradali e benzina. Nessun costo nascosto." },
      { title: "Pagamento all'Arrivo", desc: "Zero anticipo per corse sotto i 300 €. Si paga in contanti all'arrivo direttamente all'autista." },
      { title: "Accoglienza Personalizzata", desc: "Pick-up porta a porta al vostro hotel, riad o aeroporto con 45 min di attesa gratuita." },
      { title: "Soste Panoramiche Libere", desc: "Possibilità di fermarsi liberamente per fotografie, caffè o pause durante il tragitto." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `Buongiorno! Vorrei prenotare un trasferimento privato da ${from} a ${to} (${veh} - €${price}). Potete confermare la disponibilità?`,
    faqTitle: "Domande Frequenti",
    ctaTitle: "Pronti a prenotare il vostro transfer?",
    ctaSub: "Nessun anticipo sotto i 300 €. Inviateci data e luogo di partenza su WhatsApp per conferma immediata.",
    ctaBtn: "Prenota su WhatsApp",
    ctaAll: "Visualizza Tutte le Tratte",
  },
  de: {
    heroTag: "Privattransfer zum Festpreis · Lizenzierter Chauffeur",
    h1: (from: string, to: string) => `Privattransfer von ${from} nach ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `Tür-zu-Tür Chauffeurservice von ${from} nach ${to} (~${dur}, ${dist}). Garantierter Festpreis von €${price} pro Fahrzeug. Fahrer, Sprit und Maut inklusive.`,
    distBadge: "Distanz",
    durBadge: "Fahrzeit ca.",
    priceBadge: "Festpreis",
    vehicleLabel: "Fahrzeug wählen",
    ratesTitle: "Festpreise",
    perVehicle: "pro Fahrzeug",
    sedan: "Komfort-Limousine",
    sedanPax: "1–4 Passagiere",
    sedanDesc: "Skoda Octavia, Toyota Corolla oder gleichwertige moderne Limousine. Ideal für Alleinreisende und Paare.",
    van: "Geräumiger Van",
    vanPax: "5–7 Passagiere",
    vanDesc: "Mercedes-Benz Vito, V-Klasse oder Hyundai H1. Viel Beinfreiheit und großzügiger Kofferraum für Familien.",
    minibus: "Privater Minibus",
    minibusPax: "8–14 Passagiere",
    minibusDesc: "Mercedes Sprinter VIP oder Ford Transit. Für größere Reisegruppen, Hochzeiten und Golfausflüge.",
    bookSedan: "Limousine Buchen",
    bookVan: "Van Buchen",
    bookMinibus: "Minibus Buchen",
    guarantees: [
      { title: "Garantierter Festpreis", desc: "Beinhaltet lizenzierten Fahrer, alle Autobahn-Mautgebühren und Treibstoff. Keine bösen Überraschungen." },
      { title: "Zahlung bei Ankunft", desc: "0% Anzahlung für Fahrten unter 300 €. Zahlen Sie bei Ankunft bar direkt beim Fahrer." },
      { title: "Abholung mit Namensschild", desc: "Tür-zu-Tür Abholung an Ihrem Hotel, Riad oder Flughafenterminal mit 45 Min. kostenloser Wartezeit." },
      { title: "Flexible Fotostopps", desc: "Jederzeit spontane Stopps für Fotos, Kaffeepausen und Aussichtspunkte entlang der Strecke." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `Guten Tag! Ich möchte einen privaten Transfer von ${from} nach ${to} buchen (${veh} - €${price}). Können Sie mir die Verfügbarkeit bestätigen?`,
    faqTitle: "Häufig Gestellte Fragen",
    ctaTitle: "Bereit für Ihren entspannten Transfer?",
    ctaSub: "Keine Vorauszahlung unter 300 €. Senden Sie uns Ihr Reisedatum einfach über WhatsApp für die sofortige Bestätigung.",
    ctaBtn: "Über WhatsApp Buchen",
    ctaAll: "Alle Routen Erkunden",
  },
  ar: {
    heroTag: "خدمة توصيل وسائق خاص بسعر ثابت ومضمون",
    h1: (from: string, to: string) => `توصيل خاص من ${from} إلى ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `خدمة تنقل مريحة من الباب إلى الباب من ${from} إلى ${to} (~${dur}، ${dist}). سعر ثابت ومؤكد قدره €${price} للمركبة بالكامل. سائق مرخص، الوقود ورسوم الطرق مشمولة.`,
    distBadge: "المسافة",
    durBadge: "الوقت المقدر",
    priceBadge: "سعر ثابت",
    vehicleLabel: "اختر سيارتك",
    ratesTitle: "أسعار ثابتة",
    perVehicle: "للسيارة بالكامل",
    sedan: "سيارة صالون مريحة",
    sedanPax: "1–4 ركاب",
    sedanDesc: "سكودا أوكتافيا، تويوتا كورولا أو ما يعادلها. ممتازة للأفراد والعائلات الصغيرة مع حقائب السفر.",
    van: "فان عائلي واسع (VIP)",
    vanPax: "5–7 ركاب",
    vanDesc: "مرسيدس فيتو، فئة V أو هيونداي H1. مقاعد مريحة ومساحة واسعة للحقائب ومثالية للعائلات.",
    minibus: "ميني باص خاص",
    minibusPax: "8–14 راكب",
    minibusDesc: "مرسيدس سبرينتر VIP لنقل الوفود والمجموعات العائلية الكبيرة بكل فخامة وسلاسة.",
    bookSedan: "حجز سيارة صالون",
    bookVan: "حجز فان مرسيدس",
    bookMinibus: "حجز ميني باص",
    guarantees: [
      { title: "سعر ثابت شامل بالكامل", desc: "يشمل السائق الخاص، ورسوم الطرق السريعة والبنزين دون أي مصاريف خفية." },
      { title: "الدفع نقداً عند الوصول", desc: "بدون أي عربون مسبق للرحلات التي تقل عن 300 يورو. تدفع لسائقك مباشرة." },
      { title: "استقبال بالاسم في المطار", desc: "استقبال من الباب للباب مع لوحة باسمكم في المطار أو الفندق مع 45 دقيقة انتظار مجاني." },
      { title: "وقفات استراحة وتصوير", desc: "حرية التوقف لالتقاط الصور التذكارية وشرب القهوة في أجمل الإطلالات الجبلية." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `السلام عليكم! أود حجز خدمة توصيل خاص من ${from} إلى ${to} (${veh} - €${price}). هل يمكنكم تأكيد السعر والتوافر؟`,
    faqTitle: "الأسئلة الشائعة",
    ctaTitle: "جاهز لتأكيد حجز تنقلك في المغرب؟",
    ctaSub: "لا يلزم دفع أي عربون تحت 300 يورو. أرسل لنا تاريخ رحلتك وموقعك عبر واتساب لتأكيد الحجز فوراً.",
    ctaBtn: "احجز عبر واتساب",
    ctaAll: "عرض كافة المسارات",
  },
  pt: {
    heroTag: "Transfer Privado com Preço Fixo · Motorista Profissional",
    h1: (from: string, to: string) => `Transfer Privado de ${from} para ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `Serviço porta a porta de ${from} para ${to} (~${dur}, ${dist}). Preço fixo garantido de €${price} por viatura. Motorista, combustível e portagens incluídos.`,
    distBadge: "Distância",
    durBadge: "Duração estimada",
    priceBadge: "Preço fixo",
    vehicleLabel: "Escolha o veículo",
    ratesTitle: "Preços fixos",
    perVehicle: "por viatura",
    sedan: "Sedan Conforto",
    sedanPax: "1–4 Passageiros",
    sedanDesc: "Skoda Octavia, Toyota Corolla ou sedan moderno equivalente. Perfeito para casais e viajantes individuais.",
    van: "Carrinha / Van Familiar",
    vanPax: "5–7 Passageiros",
    vanDesc: "Mercedes-Benz Vito, Classe V ou Hyundai H1. Amplo espaço para pernas e bagageira generosa.",
    minibus: "Minibus Privado",
    minibusPax: "8–14 Passageiros",
    minibusDesc: "Mercedes Sprinter VIP ou Ford Transit. Para grupos maiores, eventos e retiros.",
    bookSedan: "Reservar Sedan",
    bookVan: "Reservar Van",
    bookMinibus: "Reservar Minibus",
    guarantees: [
      { title: "Preço Fixo com Tudo Incluído", desc: "Inclui motorista licenciado, combustível e todas as portagens de autoestrada. Sem taxas extra." },
      { title: "Pagamento à Chegada", desc: "0% de sinal para viagens sob 300 €. Pague diretamente em dinheiro ao motorista." },
      { title: "Receção com Placa", desc: "Recolha porta a porta no seu hotel, riad ou sala de chegadas do aeroporto com 45 min de espera grátis." },
      { title: "Paragens para Fotografias", desc: "Liberdade para parar para fotos panorâmicas, café ou descanso sempre que desejar." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `Olá! Gostaria de reservar um transfer privado de ${from} para ${to} (${veh} - €${price}). Poderiam confirmar a disponibilidade?`,
    faqTitle: "Perguntas Frequentes",
    ctaTitle: "Pronto para reservar a sua viagem?",
    ctaSub: "Sem adiantamentos sob 300 €. Envie-nos a sua data e local de recolha pelo WhatsApp para confirmação rápida.",
    ctaBtn: "Reservar no WhatsApp",
    ctaAll: "Ver Todas as Rotas",
  },
  nl: {
    heroTag: "Privé Transfer tegen Vaste Prijs · Ervaren Chauffeur",
    h1: (from: string, to: string) => `Privé Transfer van ${from} naar ${to}`,
    sub: (from: string, to: string, dur: string, dist: string, price: number) =>
      `Deur-tot-deur service van ${from} naar ${to} (~${dur}, ${dist}). Gegarandeerde vaste prijs van €${price} per auto. Chauffeur, tolwegen en brandstof inbegrepen.`,
    distBadge: "Afstand",
    durBadge: "Geschatte reistijd",
    priceBadge: "Vaste prijs",
    vehicleLabel: "Kies uw voertuig",
    ratesTitle: "Vaste prijzen",
    perVehicle: "per voertuig",
    sedan: "Comfort Sedan",
    sedanPax: "1–4 Passagiers",
    sedanDesc: "Skoda Octavia, Toyota Corolla of vergelijkbare moderne sedan. Ideaal voor stellen en soloreizigers.",
    van: "Ruime Van / Minibus",
    vanPax: "5–7 Passagiers",
    vanDesc: "Mercedes-Benz Vito, V-Klasse of Hyundai H1. Extra beenruimte en grote kofferbak voor gezinnen.",
    minibus: "Privé Minibus",
    minibusPax: "8–14 Passagiers",
    minibusDesc: "Mercedes Sprinter VIP of Ford Transit. Voor grotere gezelschappen, golfgroepen en vrienden.",
    bookSedan: "Boek Sedan",
    bookVan: "Boek Van",
    bookMinibus: "Boek Minibus",
    guarantees: [
      { title: "Gegarandeerde Vaste Prijs", desc: "Inclusief professionele chauffeur, tolwegen en brandstof. Geen verrassingen achteraf." },
      { title: "Betalen bij Aankomst", desc: "0% aanbetaling voor ritten onder €300. U betaalt bij aankomst direct contant aan de chauffeur." },
      { title: "Ontvangst met Naambord", desc: "Deur-tot-deur ophaalservice bij uw hotel, riad of luchthaventerminal inclusief 45 min. gratis wachttijd." },
      { title: "Flexibele Fotostops", desc: "Onderweg vrijblijvend stoppen voor prachtige foto's, uitzichtpunten of een kopje koffie." },
    ],
    waMsg: (from: string, to: string, veh: string, price: number) =>
      `Hallo! Ik wil graag een privé transfer boeken van ${from} naar ${to} (${veh} - €${price}). Kunt u de beschikbaarheid bevestigen?`,
    faqTitle: "Veelgestelde Vragen",
    ctaTitle: "Klaar om uw transfer te reserveren?",
    ctaSub: "Geen aanbetaling onder €300. Stuur ons uw datum en ophaallocatie via WhatsApp voor directe bevestiging.",
    ctaBtn: "Boeken via WhatsApp",
    ctaAll: "Bekijk Alle Routes",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const route = ALL_ROUTES.find((r) => r.slug === slug);
  if (!route) return {};

  const u = UI[lang as keyof typeof UI] || UI.es;
  const fromName = getLocalizedPlace(route.from, lang as LanguageCode);
  const toName = getLocalizedPlace(route.to, lang as LanguageCode);

  const title = buildRouteMetaTitle(fromName, toName, route.price_sedan, lang);
  const description = buildRouteMetaDescription(fromName, toName, route.price_sedan, lang);
  const canonicalUrl = `${SITE_URL}/${lang}/transfers/${route.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: buildMultilingualAlternates(`/transfers/${route.slug}`, lang as LanguageCode),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: "/img/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${fromName} → ${toName} Transfer`,
        },
      ],
    },
  };
}

export default async function LocalizedRoutePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const route = ALL_ROUTES.find((r) => r.slug === slug);
  if (!route) notFound();

  const u = UI[lang as keyof typeof UI] || UI.es;
  const isRtl = lang === "ar";
  const fromName = getLocalizedPlace(route.from, lang as LanguageCode);
  const toName = getLocalizedPlace(route.to, lang as LanguageCode);
  const dCopy = buildDirectionalRouteCopy({
    lang: lang as LanguageCode,
    fromLocal: fromName,
    toLocal: toName,
    fromEn: route.from,
    toEn: route.to,
    distance: route.distance,
    duration: route.duration,
    highway: route.highway,
    priceSedan: route.price_sedan,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: dCopy.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${lang}` },
          { "@type": "ListItem", position: 2, name: "Transfers", item: `${SITE_URL}/${lang}/transfers` },
          { "@type": "ListItem", position: 3, name: `${fromName} → ${toName}`, item: `${SITE_URL}/${lang}/transfers/${route.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: u.h1(fromName, toName),
        image: `${SITE_URL}/cars/mercedes-vito.webp`,
        url: `${SITE_URL}/${lang}/transfers/${route.slug}`,
        provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
      },
        offers: {
          "@type": "Offer",
          price: route.price_sedan,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/${lang}/transfers/${route.slug}`,
        },
      },
      {
        "@type": "TaxiService",
        name: u.h1(fromName, toName),
        provider: {
          "@type": "LocalBusiness",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "Morocco",
        },
      },
    ],
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={`/${lang}`}>Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href={`/${lang}/transfers`}>Transfers</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{fromName} → {toName}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {u.heroTag}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {u.h1(fromName, toName)}
          </h1>
          <p className="hero-sub">
            {u.sub(fromName, toName, route.duration, route.distance, route.price_sedan)}
          </p>

          <div className="hero-route-badges">
            <div className="route-badge">
              <span className="route-badge-label">{u.durBadge}</span>
              <span className="route-badge-value">~{route.duration}</span>
            </div>
            <div className="route-badge">
              <span className="route-badge-label">{u.distBadge}</span>
              <span className="route-badge-value">{route.distance}</span>
            </div>
            <div className="route-badge">
              <span className="route-badge-label">{u.priceBadge}</span>
              <span className="route-badge-value">€{route.price_sedan}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">{u.vehicleLabel}</span>
              <h2 className="heading-lg">
                {u.ratesTitle}: {fromName} → {toName}
              </h2>
            </div>
          </div>
          <div className="vehicle-cards-grid">
            {/* Sedan */}
            <article className="vehicle-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/skoda-octavia.webp)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Sedan</span>
                <span className="vehicle-fixed">{u.priceBadge}</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">{u.sedanPax}</p>
                <h3 className="vehicle-model">{u.sedan}</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  {u.sedanDesc}
                </p>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">{u.priceBadge}</span>
                    <VehiclePriceTag priceEur={route.price_sedan} />
                  </div>
                  <a
                    href={whatsappUrl(u.waMsg(fromName, toName, u.sedan, route.price_sedan))}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    {u.bookSedan}
                  </a>
                </div>
              </div>
            </article>

            {/* Van */}
            <article
              className="vehicle-card"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid var(--ink)",
                position: "relative",
              }}
            >
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/mercedes-vito.webp)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Van</span>
                <span className="vehicle-fixed">{u.priceBadge}</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">{u.vanPax}</p>
                <h3 className="vehicle-model">{u.van}</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  {u.vanDesc}
                </p>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">{u.priceBadge}</span>
                    <VehiclePriceTag priceEur={route.price_van} />
                  </div>
                  <a
                    href={whatsappUrl(u.waMsg(fromName, toName, u.van, route.price_van))}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    {u.bookVan}
                  </a>
                </div>
              </div>
            </article>

            {/* Minibus */}
            <article className="vehicle-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/mercedes-sprinter.webp)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Minibus</span>
                <span className="vehicle-fixed">{u.priceBadge}</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">{u.minibusPax}</p>
                <h3 className="vehicle-model">{u.minibus}</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  {u.minibusDesc}
                </p>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">{u.priceBadge}</span>
                    <VehiclePriceTag priceEur={route.price_minibus} />
                  </div>
                  <a
                    href={whatsappUrl(u.waMsg(fromName, toName, u.minibus, route.price_minibus))}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    {u.bookMinibus}
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Guarantees */}
          <div
            style={{
              padding: "32px 36px",
              background: "var(--sand)",
              border: "1px solid var(--rule)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "28px",
              marginTop: "40px",
            }}
          >
            {u.guarantees.map((g) => (
              <div key={g.title}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Icon name="check" size={16} />
                  <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, margin: 0 }}>
                    {g.title}
                  </h4>
                </div>
                <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directional Pickup & Route Logistics */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ maxWidth: "820px", marginBottom: "28px" }}>
            <span className="section-label">{dCopy.sectionLabel}</span>
            <h2 className="heading-lg mt-12">{dCopy.heading}</h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.65, marginTop: "14px" }}>
              {dCopy.introParagraph}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {dCopy.logisticsBullets.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "22px",
                  background: "var(--sand)",
                  border: "1px solid var(--rule)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--gold-ink)", flexShrink: 0, marginTop: "2px" }}>
                  0{idx + 1}
                </span>
                <p style={{ fontSize: "15px", color: "var(--ink)", margin: 0, lineHeight: 1.55 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized FAQ Section */}
      {dCopy.faqs.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-header" style={{ display: "block", paddingBottom: "24px", marginBottom: "32px" }}>
              <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
                FAQ
              </span>
              <h2 className="heading-lg">{u.faqTitle}: {fromName} → {toName}</h2>
            </div>
            <div className="faq-list">
              {dCopy.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </div>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{u.ctaTitle}</h2>
          <p>{u.ctaSub}</p>
          <div className="cta-buttons">
            <a
              href={whatsappUrl(u.waMsg(fromName, toName, u.sedan, route.price_sedan))}
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              <Icon name="whatsapp" size={18} /> {u.ctaBtn}
            </a>
            <Link href={`/${lang}/transfers`} className="btn btn-outline-white btn-lg">
              {u.ctaAll}
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileBookingBar
        from={fromName}
        to={toName}
        priceSedan={route.price_sedan}
        waUrl={whatsappUrl(u.waMsg(fromName, toName, u.sedan, route.price_sedan))}
      />
    </div>
  );
}
