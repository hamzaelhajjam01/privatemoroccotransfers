import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import routesData from "@/content/routes.json";
import {
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
  whatsappUrl,
  buildMultilingualAlternates,
  buildRouteMetaTitle,
} from "@/lib/site";
import { buildDirectionalRouteCopy } from "@/lib/route-copy";
import { EUR_RATE } from "@/lib/pricing";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_FR } from "@/lib/schema";
import Icon from "@/components/Icon";
import VehiclePriceTag from "@/components/VehiclePriceTag";
import StickyMobileBookingBar from "@/components/StickyMobileBookingBar";

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
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  popular?: boolean;
};

const ALL_ROUTES = routesData as RouteItem[];

const PLACE_FR: Record<string, string> = {
  "Agadir": "Agadir",
  "Agadir Airport": "Aéroport d'Agadir (AGA)",
  "Agafay Desert": "Désert d'Agafay",
  "Ait Ben Haddou": "Aït Ben Haddou",
  "Casablanca": "Casablanca",
  "Casablanca Airport": "Aéroport de Casablanca (CMN)",
  "Casablanca Airport (CMN)": "Aéroport de Casablanca (CMN)",
  "Chefchaouen": "Chefchaouen",
  "Essaouira": "Essaouira",
  "Essaouira Airport (ESU)": "Aéroport d'Essaouira (ESU)",
  "Fes": "Fès",
  "Fes Airport (FEZ)": "Aéroport de Fès (FEZ)",
  "Imlil": "Imlil (Mont Toubkal)",
  "Imsouane": "Imsouane",
  "Marrakech": "Marrakech",
  "Marrakech Airport": "Aéroport de Marrakech (RAK)",
  "Meknes & Volubilis": "Meknès & Volubilis",
  "Merzouga (Sahara)": "Merzouga (Désert du Sahara)",
  "Moulay Bouzerktoune": "Moulay Bouzerktoune",
  "Oualidia": "Oualidia",
  "Ouarzazate": "Ouarzazate",
  "Oukaimeden (ski resort)": "Oukaïmeden (Station de ski)",
  "Ourika Valley": "Vallée de l'Ourika",
  "Ouzoud Waterfalls": "Cascades d'Ouzoud",
  "Palmeraie (Marrakech)": "La Palmeraie de Marrakech",
  "Paradise Valley": "Vallée du Paradis",
  "Rabat": "Rabat",
  "Rabat Airport (RBA)": "Aéroport de Rabat (RBA)",
  "Setti Fatma": "Setti Fatma",
  "Sidi Kaouki": "Sidi Kaouki",
  "Taghazout": "Taghazout",
  "Tangier": "Tanger",
  "Tangier Airport (TNG)": "Aéroport de Tanger (TNG)",
  "Tangier Med Port": "Port Tanger Med",
};

function getFrPlace(name: string): string {
  return PLACE_FR[name] || name;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_ROUTES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = ALL_ROUTES.find((r) => r.slug === slug);
  if (!route) return {};

  const fromFr = getFrPlace(route.from);
  const toFr = getFrPlace(route.to);

  const title = buildRouteMetaTitle(fromFr, toFr, route.price_sedan, "fr");
  const description = `Réservez votre transfert privé de ${fromFr} à ${toFr} avec ${SITE_NAME}. Tarif fixe garanti €${route.price_sedan}, chauffeur professionnel bilingue, accueil aéroport ou hôtel, péages et carburant inclus, 0% d'acompte. WhatsApp 24/7.`;
  const canonicalUrl = `${SITE_URL}/fr/transfers/${route.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: buildMultilingualAlternates(`/transfers/${route.slug}`, "fr"),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/img/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Transfert Privé ${fromFr} à ${toFr}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/og-image.jpg"],
    },
  };
}

export default async function FrenchTransferRoutePage({ params }: Props) {
  const { slug } = await params;
  const route = ALL_ROUTES.find((r) => r.slug === slug);
  if (!route) notFound();

  const fromFr = getFrPlace(route.from);
  const toFr = getFrPlace(route.to);

  const relatedRoutes = ALL_ROUTES.filter(
    (r) =>
      r.slug !== route.slug &&
      (r.from.toLowerCase() === route.from.toLowerCase() ||
        r.to.toLowerCase() === route.to.toLowerCase())
  ).slice(0, 4);

  const fallbackRoutes =
    relatedRoutes.length < 4
      ? [
          ...relatedRoutes,
          ...ALL_ROUTES.filter(
            (r) =>
              r.popular &&
              r.slug !== route.slug &&
              !relatedRoutes.some((rel) => rel.slug === r.slug)
          ),
        ].slice(0, 4)
      : relatedRoutes;

  const madSedan = Math.round(route.price_sedan * EUR_RATE);
  const madVan = Math.round(route.price_van * EUR_RATE);
  const madMinibus = Math.round(route.price_minibus * EUR_RATE);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Transferts",
        item: `${SITE_URL}/transfers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${fromFr} à ${toFr}`,
        item: `${SITE_URL}/fr/transfers/${route.slug}`,
      },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Transfert Privé de ${fromFr} à ${toFr}`,
    inLanguage: "fr",
    description: `Service de transfert privé avec chauffeur professionnel entre ${fromFr} et ${toFr}. Tarif garanti tout compris.`,
    image: `${SITE_URL}/cars/mercedes-vito.webp`,
    url: `${SITE_URL}/fr/transfers/${route.slug}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    aggregateRating: SCHEMA_AGGREGATE_RATING,
    review: SCHEMA_REVIEWS_FR,
    offers: [
      {
        "@type": "Offer",
        name: `Berline Confort (1–4 passagers) — ${fromFr} à ${toFr}`,
        price: route.price_sedan,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/fr/transfers/${route.slug}`,
      },
      {
        "@type": "Offer",
        name: `Monospace Spacieux / Van (5–7 passagers) — ${fromFr} à ${toFr}`,
        price: route.price_van,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/fr/transfers/${route.slug}`,
      },
      {
        "@type": "Offer",
        name: `Minibus Privé (8–14 passagers) — ${fromFr} à ${toFr}`,
        price: route.price_minibus,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/fr/transfers/${route.slug}`,
      },
    ],
  };

  const taxiServiceLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `Service Chauffeur Privé ${fromFr} à ${toFr}`,
    inLanguage: "fr",
    description: `Service de transfert privé avec chauffeur professionnel entre ${fromFr} et ${toFr}.`,
    url: `${SITE_URL}/fr/transfers/${route.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: `+${WHATSAPP_NUMBER}`,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  const dCopy = buildDirectionalRouteCopy({
    lang: "fr",
    fromLocal: fromFr,
    toLocal: toFr,
    fromEn: route.from,
    toEn: route.to,
    distance: route.distance,
    duration: route.duration,
    highway: route.highway,
    priceSedan: route.price_sedan,
  });

  const frFaqs = [
    ...dCopy.faqs,
    {
      q: `Où le chauffeur m'accueille-t-il pour le trajet ${fromFr} - ${toFr} ?`,
      a: `Pour une prise en charge à l'aéroport, votre chauffeur vous attend à l'intérieur du hall des arrivées avec une pancarte personnalisée à votre nom. Pour un hôtel ou un riad, le rendez-vous est fixé à la réception ou au point accessible le plus proche.`
    },
    {
      q: `Que se passe-t-il si mon vol a du retard ?`,
      a: `Nous suivons votre vol en temps réel à l'aide de votre numéro de vol. L'heure de prise en charge est ajustée automatiquement sans surcoût, incluant 45 minutes d'attente gratuite après l'atterrissage.`
    },
    {
      q: `Le tarif de €${route.price_sedan} est-il par personne ou par véhicule ?`,
      a: `Tous nos tarifs sont des prix fixes par véhicule privé, et non par personne. Une berline confort accueille jusqu'à 4 passagers et leurs bagages pour ce même prix garanti.`
    },
    {
      q: `Comment et quand s'effectue le paiement ?`,
      a: `Pour tous les trajets inférieurs à 300 € (3 300 MAD), aucun acompte n'est exigé à la réservation. Vous réglez directement votre chauffeur à l'arrivée en espèces (Euros ou Dirhams marocains) ou par carte bancaire sur demande.`
    },
    {
      q: `Proposez-vous des sièges bébés ou rehausseurs ?`,
      a: `Oui, des sièges bébés et rehausseurs homologués sont mis à disposition gratuitement sur simple demande lors de votre réservation WhatsApp.`
    }
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: frFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header (Dark Storey Architecture Header) */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/transfers">Transferts</Link>
            <span className="breadcrumb-sep">/</span>
            <span>
              {fromFr} → {toFr}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label label-gold" style={{ marginBottom: "16px", display: "inline-block" }}>
            Prix Fixe Garanti · 100% Chauffeur Privé Porte-à-Porte
          </span>
          <h1 className="heading-xl" style={{ color: "var(--white)", maxWidth: "980px" }}>
            Transfert Privé de {fromFr} à {toFr}
          </h1>
          <p className="hero-sub" style={{ maxWidth: "750px", marginTop: "18px" }}>
            Transfert direct sans escale avec chauffeur privé certifié bilingue (français/anglais). Prise en charge à votre porte, péages autoroutiers, carburant, assistance bagages et suivi des vols inclus.
          </p>

          {/* Quick Route Facts Strip */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px 32px",
              marginTop: "32px",
              padding: "18px 24px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--rule-dark)",
              maxWidth: "850px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="clock" size={16} />
              <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                Durée : <strong style={{ color: "var(--white)" }}>~{route.duration}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="map-pin" size={16} />
              <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                Distance : <strong style={{ color: "var(--white)" }}>{route.distance}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="car" size={16} />
              <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                Itinéraire : <strong style={{ color: "var(--white)" }}>{route.highway || "Réseau Autoroutier Marocain"}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="shield-check" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>
                Chauffeur Professionnel Agréé &amp; Assuré
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pricing & Booking Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Sélectionnez Votre Véhicule</span>
              <h2 className="heading-lg">Tarifs fixes pour {fromFr} → {toFr}</h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="mono muted">Prix forfaitaire par véhicule (pas par personne)</span>
              <br />
              <span className="mono" style={{ color: "var(--ink)" }}>-10% sur le trajet retour</span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
              marginBottom: "48px",
            }}
          >
            {/* Card 1: Sedan */}
            <article className="vehicle-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/skoda-octavia.jpg)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Berline</span>
                <span className="vehicle-fixed">Prix fixe</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">1–4 Passagers</p>
                <h3 className="vehicle-model">Berline Confort</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Skoda Octavia, Toyota Corolla ou berline moderne équivalente. Idéale pour couples, voyageurs seuls et bagages légers.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 1–4 passagers</li>
                  <li><Icon name="luggage" size={14} /> 3 valises</li>
                  <li><Icon name="snowflake" size={14} /> Climatisation &amp; Eau minérale</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Prix fixe total</span>
                    <VehiclePriceTag priceEur={route.price_sedan} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Bonjour! Je souhaite réserver un transfert privé de ${fromFr} à ${toFr} (Berline Confort - €${route.price_sedan}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Réserver Berline
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Van (Featured) */}
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
                style={{
                  position: "absolute",
                  top: "-14px",
                  right: "24px",
                  background: "var(--ink)",
                  color: "var(--paper)",
                  fontFamily: "var(--mono)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  zIndex: 2,
                }}
              >
                Le Plus Populaire / Familles
              </div>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/mercedes-vito.jpg)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Monospace</span>
                <span className="vehicle-fixed">Prix fixe</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">5–7 Passagers</p>
                <h3 className="vehicle-model">Monospace Spacieux / Van</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Mercedes-Benz Vito, Classe V ou Hyundai H1. Habitacle surélevé, grand confort et capacité bagages optimale.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 5–7 passagers</li>
                  <li><Icon name="luggage" size={14} /> 6 grands bagages</li>
                  <li><Icon name="snowflake" size={14} /> Climatisation bi-zone &amp; USB</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Prix fixe total</span>
                    <VehiclePriceTag priceEur={route.price_van} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Bonjour! Je souhaite réserver un transfert privé de ${fromFr} à ${toFr} (Monospace Spacieux - €${route.price_van}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Réserver Van
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3: Minibus */}
            <article className="vehicle-card" style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/mercedes-sprinter.jpg)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Minibus</span>
                <span className="vehicle-fixed">Prix fixe</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">8–14 Passagers</p>
                <h3 className="vehicle-model">Minibus Privé</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Mercedes Sprinter VIP ou Ford Transit. Conçu pour les groupes d'amis, retraites, mariages ou séjours golfiques.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 8–14 passagers</li>
                  <li><Icon name="luggage" size={14} /> 14 valises</li>
                  <li><Icon name="snowflake" size={14} /> Climatisation renforcée &amp; Sièges inclinables</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Prix fixe total</span>
                    <VehiclePriceTag priceEur={route.price_minibus} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Bonjour! Je souhaite réserver un transfert privé de ${fromFr} à ${toFr} (Minibus Privé - €${route.price_minibus}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Réserver Minibus
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Guarantee & Transparent Terms Strip */}
          <div
            style={{
              padding: "32px 36px",
              background: "var(--sand)",
              border: "1px solid var(--rule)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "28px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="check" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Tarif Forfaitaire Tout Compris
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Chauffeur privé attitré, tickets de péage autoroutier, carburant et prise en charge des bagages inclus. Zéro frais cachés.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="shield-check" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Paiement à l'Arrivée
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Aucun acompte requis pour les trajets inférieurs à 300 € (3 300 MAD). Réglez en espèces directement à votre chauffeur.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="clock" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Accueil Personnalisé
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Prise en charge à votre porte (riad, hôtel ou hall des arrivées de l'aéroport) avec 45 minutes d'attente offerte en cas de retard.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="refresh" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Arrêts Flexibles
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Arrêtez-vous à tout moment pour des photos, un café ou une pause sur les aires d'autoroute sans frais supplémentaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directional Logistics & What to Expect */}
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
              gap: "24px",
            }}
          >
            {dCopy.logisticsBullets.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  padding: "24px",
                  background: "var(--sand)",
                  border: "1px solid var(--rule)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "14px",
                    color: "var(--muted)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  0{idx + 1}
                </span>
                <p style={{ fontSize: "15px", color: "var(--ink)", margin: 0, lineHeight: 1.5 }}>
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works: 3 Simple Steps */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Réservation Fluide</span>
              <h2 className="heading-lg">Comment se déroule votre transfert</h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "28px", color: "var(--ink)", display: "block", marginBottom: "16px" }}>
                01
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", color: "var(--ink)" }}>
                Demande sur WhatsApp
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                Indiquez votre date de voyage, votre lieu de prise en charge à {fromFr} et le nombre de passagers. Aucun paiement ni acompte requis sous 300 €.
              </p>
            </div>

            <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "28px", color: "var(--ink)", display: "block", marginBottom: "16px" }}>
                02
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", color: "var(--ink)" }}>
                Confirmation Immédiate
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                Nous vous confirmons en moins de 15 minutes le modèle de votre véhicule et votre tarif forfaitaire garanti. Les retards de vol sont suivis en direct.
              </p>
            </div>

            <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "28px", color: "var(--ink)", display: "block", marginBottom: "16px" }}>
                03
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", color: "var(--ink)" }}>
                Porte-à-Porte &amp; Règlement à l'Arrivée
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                Votre chauffeur vous accueille au hall des arrivées ou devant votre riad. Voyagez détendu jusqu'à {toFr} et réglez en espèces à l'arrivée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Comparison Matrix */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Comparatif des Transports</span>
              <h2 className="heading-lg">Rejoindre {toFr} depuis {fromFr}</h2>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "var(--ink)", color: "var(--paper)" }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500 }}>
                    Critère
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500, background: "var(--gold)", color: "var(--white)" }}>
                    Private Morocco Transfers
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500 }}>
                    Autocar Public (CTM / Supratours)
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500 }}>
                    Grand Taxi Collectif
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Prise en charge &amp; Dépose</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>100% Porte-à-Porte (Riad / Hôtel / Aéroport)</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Gare routière uniquement</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Station de taxis à station</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Temps de Trajet</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Direct sans arrêt (~{route.duration})</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Arrêts multiples (+1 à 2 h)</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Attente du remplissage des 6 places</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Structure Tarifaire</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Prix fixe forfaitaire par véhicule</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Ticket par personne + taxis gare</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Négociation en espèces par place</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Confort &amp; Bagages</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Climatisation, coffre spacieux, sièges bébé offerts</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Supplément bagage en soute</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>6 passagers serrés, bagages sur le toit</td>
                </tr>
                <tr>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Arrêts Personnalisés</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Pauses photos &amp; café sur simple demande</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Aucun arrêt à la demande</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Arrêts imposés par le chauffeur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sister Agency Partner Block (Storey Architecture Dark Section) */}
      <section className="section dark" style={{ borderTop: "1px solid var(--rule-dark)" }}>
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <span className="section-label" style={{ color: "var(--muted)", marginBottom: "16px", display: "inline-block" }}>
              Partenaire Voyages Maroc · Expéditions Désert
            </span>
            <h2 className="heading-lg" style={{ color: "var(--white)", marginBottom: "20px" }}>
              Vous prévoyez un circuit dans le désert ou un itinéraire sur mesure ?
            </h2>
            <p className="statement muted" style={{ fontSize: "18px", lineHeight: 1.45, marginBottom: "28px" }}>
              Au-delà des transferts ponctuels, notre agence sœur <strong style={{ color: "var(--white)" }}>Roam Morocco Tours</strong> conçoit des road-trips privés de 3 à 10 jours à travers le Haut Atlas, Aït Ben Haddou et les dunes de Merzouga avec bivouac de luxe.
            </p>
            <div>
              <a
                href="https://roammorocco.tours"
                target="_blank"
                rel="noopener"
                className="btn btn-white"
                style={{ minWidth: "240px" }}
              >
                Découvrir Roam Morocco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ display: "block", paddingBottom: "24px", marginBottom: "32px" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
              Questions Fréquentes
            </span>
            <h2 className="heading-lg">Tout savoir sur le trajet {fromFr} à {toFr}</h2>
          </div>
          <div className="faq-list">
            {frFaqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Transfers Silo */}
      {fallbackRoutes.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Liaisons Fréquentes</span>
                <h2 className="heading-lg">Autres transferts depuis {fromFr}</h2>
              </div>
              <Link href="/transfers" className="btn btn-outline">
                Voir les 150+ liaisons
              </Link>
            </div>
            <div className="listing-grid">
              {fallbackRoutes.map((rel) => {
                const relFromFr = getFrPlace(rel.from);
                const relToFr = getFrPlace(rel.to);
                return (
                  <div key={rel.slug} className="listing-card">
                    <div
                      className="listing-img"
                      style={{
                        backgroundImage: rel.slug.includes("essaouira")
                          ? "url(/img/routes/marrakech-essaouira.jpg)"
                          : rel.slug.includes("agadir")
                          ? "url(/img/routes/marrakech-agadir.jpg)"
                          : "url(/img/hero-city-to-city.jpg)",
                      }}
                    >
                      <span className="listing-badge">Transfert Privé</span>
                      <span className="listing-fixed-badge">Prix Fixe</span>
                    </div>
                    <div className="listing-body">
                      <h3 className="listing-title">
                        <Link href={`/fr/transfers/${rel.slug}`}>
                          {relFromFr} → {relToFr}
                        </Link>
                      </h3>
                      <div className="listing-features">
                        <span className="feature-tag">{rel.distance}</span>
                        <span className="feature-tag">~{rel.duration}</span>
                        <span className="feature-tag">Berline / Van</span>
                      </div>
                      <ul className="listing-includes">
                        <li>Chauffeur professionnel bilingue</li>
                        <li>Service porte-à-porte &amp; péages inclus</li>
                        <li>Paiement à l'arrivée (0% acompte &lt; 300 €)</li>
                      </ul>
                      <div className="listing-footer">
                        <div>
                          <div className="listing-price-from">À partir de</div>
                          <div className="listing-price-amount">
                            €{rel.price_sedan} ({Math.round(rel.price_sedan * EUR_RATE)} MAD)
                          </div>
                        </div>
                        <Link
                          href={`/fr/transfers/${rel.slug}`}
                          className="btn btn-gold"
                          style={{ padding: "10px 18px", fontSize: "0.72rem" }}
                        >
                          Tarifs &amp; Détails
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Bottom Call-to-Action Bar */}
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Prêt à réserver votre transfert ?</h2>
          <p>
            Aucun paiement en avance pour les trajets de moins de 300 €. Envoyez-nous simplement votre date et votre lieu de prise en charge sur WhatsApp pour une confirmation instantanée.
          </p>
          <div className="cta-buttons">
            <a
              href={whatsappUrl(
                `Bonjour! Je souhaite réserver un transfert privé de ${fromFr} à ${toFr}. Avez-vous de la disponibilité ?`
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              <Icon name="whatsapp" size={18} /> Réserver sur WhatsApp
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              Consulter Toutes les Liaisons
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileBookingBar
        from={fromFr}
        to={toFr}
        priceSedan={route.price_sedan}
        waUrl={whatsappUrl(
          `Bonjour! Je souhaite réserver un transfert privé de ${fromFr} à ${toFr} (Berline Confort - €${route.price_sedan}).`
        )}
        isFr={true}
      />
    </div>
  );
}
