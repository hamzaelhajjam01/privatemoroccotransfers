import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import routesData from "@/content/routes.json";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, whatsappUrl } from "@/lib/site";
import { EUR_RATE } from "@/lib/pricing";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_EN } from "@/lib/schema";
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

  const title =
    route.seoTitle ||
    `${route.h1 || `Private Transfer from ${route.from} to ${route.to}`} | Fixed Price €${route.price_sedan} | ${SITE_NAME}`;
  const description =
    route.seoDescription ||
    `Private transfer from ${route.from} to ${route.to} at guaranteed fixed price €${route.price_sedan}. Door-to-door, licensed English-speaking chauffeur, all tolls and fuel included. Instant WhatsApp booking.`;
  const canonicalUrl = `${SITE_URL}/transfers/${route.slug}`;
  const frUrl = `${SITE_URL}/fr/transfers/${route.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": canonicalUrl,
        "fr": frUrl,
        "x-default": canonicalUrl,
      },
    },
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
          alt: `${route.from} to ${route.to} Private Transfer`,
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

export default async function TransferRoutePage({ params }: Props) {
  const { slug } = await params;
  const route = ALL_ROUTES.find((r) => r.slug === slug);
  if (!route) notFound();

  // Related transfers originating from the same city or destination
  const relatedRoutes = ALL_ROUTES.filter(
    (r) =>
      r.slug !== route.slug &&
      (r.from.toLowerCase() === route.from.toLowerCase() ||
        r.to.toLowerCase() === route.to.toLowerCase())
  ).slice(0, 4);

  // If fewer than 4 related routes, fill with popular routes
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
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Transfers",
        item: `${SITE_URL}/transfers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.from} to ${route.to}`,
        item: `${SITE_URL}/transfers/${route.slug}`,
      },
    ],
  };

  const taxiServiceLd = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "TouristInformationCenter"],
    name: route.h1 || `Private Transfer from ${route.from} to ${route.to}`,
    description: route.seoDescription,
    url: `${SITE_URL}/transfers/${route.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: `+${WHATSAPP_NUMBER}`,
      url: SITE_URL,
    },
    aggregateRating: SCHEMA_AGGREGATE_RATING,
    review: SCHEMA_REVIEWS_EN,
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    offers: [
      {
        "@type": "Offer",
        name: `Comfort Sedan (1–4 pax) — ${route.from} to ${route.to}`,
        price: route.price_sedan,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: `Spacious Van (5–7 pax) — ${route.from} to ${route.to}`,
        price: route.price_van,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: `Private Minibus (8–14 pax) — ${route.from} to ${route.to}`,
        price: route.price_minibus,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  const faqLd =
    route.faqs && route.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: route.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* Hero Header (Dark Storey Architecture Header) */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/transfers">Transfers</Link>
            <span className="breadcrumb-sep">/</span>
            <span>
              {route.from} → {route.to}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label label-gold" style={{ marginBottom: "16px", display: "inline-block" }}>
            Guaranteed Fixed Price · 100% Private Door-to-Door
          </span>
          <h1 className="heading-xl" style={{ color: "var(--white)", maxWidth: "980px" }}>
            {route.h1 || `Private Transfer from ${route.from} to ${route.to}`}
          </h1>
          <p className="hero-sub" style={{ maxWidth: "750px", marginTop: "18px" }}>
            Direct private transfer with a licensed English and French-speaking chauffeur. Door-to-door pickup,
            highway tolls, fuel, airport delay tracking, and luggage assistance included.
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
                Duration: <strong style={{ color: "var(--white)" }}>~{route.duration}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="map-pin" size={16} />
              <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                Distance: <strong style={{ color: "var(--white)" }}>{route.distance}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="car" size={16} />
              <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                Route: <strong style={{ color: "var(--white)" }}>{route.highway || "Moroccan Expressway"}</strong>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="shield-check" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>
                Licensed Chauffeur &amp; Insured
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
              <span className="section-label">Select Your Vehicle</span>
              <h2 className="heading-lg">Fixed rates for {route.from} → {route.to}</h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="mono muted">Flat rate per vehicle (not per person)</span>
              <br />
              <span className="mono" style={{ color: "var(--ink)" }}>10% discount on return trip</span>
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
                <span className="vehicle-cat">Sedan</span>
                <span className="vehicle-fixed">Fixed price</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">1–4 Passengers</p>
                <h3 className="vehicle-model">Comfort Sedan</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Skoda Octavia, Toyota Corolla or equivalent modern sedan. Ideal for couples, solo travelers, and light luggage.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 1–4 passengers</li>
                  <li><Icon name="luggage" size={14} /> 3 suitcases</li>
                  <li><Icon name="snowflake" size={14} /> A/C &amp; Bottled Water</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Total fixed rate</span>
                    <VehiclePriceTag priceEur={route.price_sedan} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Salam! I would like to book a private transfer from ${route.from} to ${route.to} (Comfort Sedan - €${route.price_sedan}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Book Sedan
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
                Most Popular / Families
              </div>
              <div
                className="vehicle-img has-photo"
                style={{ backgroundImage: "url(/img/fleet-scenes/mercedes-vito.jpg)", minHeight: "200px" }}
              >
                <span className="vehicle-cat">Spacious Van</span>
                <span className="vehicle-fixed">Fixed price</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">5–7 Passengers</p>
                <h3 className="vehicle-model">Spacious Van / SUV</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Mercedes-Benz Vito, V-Class or Hyundai H1. High roof, spacious legroom, and generous luggage capacity.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 5–7 passengers</li>
                  <li><Icon name="luggage" size={14} /> 6 large bags</li>
                  <li><Icon name="snowflake" size={14} /> Dual-zone A/C &amp; USB</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Total fixed rate</span>
                    <VehiclePriceTag priceEur={route.price_van} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Salam! I would like to book a private transfer from ${route.from} to ${route.to} (Spacious Van - €${route.price_van}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Book Van
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
                <span className="vehicle-fixed">Fixed price</span>
              </div>
              <div className="vehicle-body" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="vehicle-kicker">8–14 Passengers</p>
                <h3 className="vehicle-model">Private Minibus</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "18px" }}>
                  Mercedes Sprinter VIP or Ford Transit. Tailored for larger travel parties, wedding groups, golf clubs, and retreats.
                </p>
                <ul className="vehicle-specs" style={{ marginBottom: "24px" }}>
                  <li><Icon name="users" size={14} /> 8–14 passengers</li>
                  <li><Icon name="luggage" size={14} /> 14 suitcases</li>
                  <li><Icon name="snowflake" size={14} /> Climate Control &amp; Reclining</li>
                </ul>
                <div className="vehicle-foot" style={{ marginTop: "auto" }}>
                  <div>
                    <span className="vehicle-from">Total fixed rate</span>
                    <VehiclePriceTag priceEur={route.price_minibus} />
                  </div>
                  <a
                    href={whatsappUrl(
                      `Salam! I would like to book a private transfer from ${route.from} to ${route.to} (Private Minibus - €${route.price_minibus}).`
                    )}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-black"
                  >
                    Book Minibus
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
                  All-Inclusive Flat Rate
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Includes licensed private driver, highway toll tickets, fuel, and luggage care. No surprise extras.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="shield-check" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Pay on Arrival
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Zero deposit required under €300 (3,300 MAD). Pay in cash directly to your chauffeur upon reaching your destination.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="clock" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Meet &amp; Greet Included
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Door-to-door pickup at your hotel, riad, or airport arrival terminal with 45 minutes free delay waiting.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Icon name="refresh" size={16} />
                <h4 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: "var(--ink)", margin: 0 }}>
                  Flexible Stops
                </h4>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                Pause for photos, fresh orange juice, or clean highway rest stops anytime during your private journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & What to Expect */}
      {route.highlights && route.highlights.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Route Highlights</span>
                <h2 className="heading-lg">Journey Details &amp; Stopovers</h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {route.highlights.map((highlight, idx) => (
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
      )}

      {/* How It Works: 3 Simple Steps */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Frictionless Process</span>
              <h2 className="heading-lg">How your transfer works</h2>
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
                WhatsApp Request
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                Send your travel date, pickup location in {route.from}, and passenger count. No payment forms or deposits required under €300.
              </p>
            </div>

            <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "28px", color: "var(--ink)", display: "block", marginBottom: "16px" }}>
                02
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", color: "var(--ink)" }}>
                Instant Confirmation
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                We confirm your driver, vehicle model, and fixed all-inclusive rate within 15 minutes. Flight delays are tracked automatically.
              </p>
            </div>

            <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "28px", color: "var(--ink)", display: "block", marginBottom: "16px" }}>
                03
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "12px", color: "var(--ink)" }}>
                Door-to-Door &amp; Pay on Arrival
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                Your chauffeur meets you at arrivals or your hotel lobby. Enjoy a calm, air-conditioned ride to {route.to} and pay cash on arrival.
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
              <span className="section-label">Travel Comparison</span>
              <h2 className="heading-lg">Getting from {route.from} to {route.to}</h2>
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
                    Feature
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500, background: "var(--gold)", color: "var(--white)" }}>
                    Private Morocco Transfers
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500 }}>
                    Public Bus (CTM / Supratours)
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontFamily: "var(--mono)", fontWeight: 500 }}>
                    Shared Grand Taxi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Pickup &amp; Drop-off</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>100% Door-to-Door (Riad / Hotel / Airport)</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Bus station to bus station only</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Taxi rank to taxi rank</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Travel Time</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Direct (~{route.duration})</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Fixed stops (often 1–2 hrs longer)</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Wait until 6 seats fill</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Pricing Structure</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Guaranteed fixed rate per vehicle</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Per person ticket + station taxis</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Cash haggling per seat</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Comfort &amp; Luggage</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Clean modern A/C car, free child seats</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Luggage fee per bag</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>6 passengers squeezed, roof luggage</td>
                </tr>
                <tr>
                  <td style={{ padding: "16px 20px", fontWeight: 500 }}>Custom Stops</td>
                  <td style={{ padding: "16px 20px", background: "rgba(184, 150, 92, 0.08)", fontWeight: 500 }}>Scenic photo stops &amp; cafe breaks anytime</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>No personal stops</td>
                  <td style={{ padding: "16px 20px", color: "var(--muted)" }}>Driver decides stops</td>
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
              Morocco Travel Partner · Desert Expeditions
            </span>
            <h2 className="heading-lg" style={{ color: "var(--white)", marginBottom: "20px" }}>
              Planning a Sahara desert tour or multi-day itinerary?
            </h2>
            <p className="statement muted" style={{ fontSize: "18px", lineHeight: 1.45, marginBottom: "28px" }}>
              Looking beyond single transfer legs? Our sister agency <strong style={{ color: "var(--white)" }}>Roam Morocco Tours</strong> organizes immersive 3-to-10 day private road trips through the High Atlas, Ait Benhaddou, and luxury desert glamping in the golden dunes of Merzouga.
            </p>
            <div>
              <a
                href="https://roammorocco.tours"
                target="_blank"
                rel="noopener"
                className="btn btn-white"
                style={{ minWidth: "240px" }}
              >
                Explore Roam Morocco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Using Site's Native Accordion Classes) */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-header" style={{ display: "block", paddingBottom: "24px", marginBottom: "32px" }}>
              <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
                Frequently Asked Questions
              </span>
              <h2 className="heading-lg">FAQs for {route.from} to {route.to}</h2>
            </div>
            <div className="faq-list">
              {route.faqs.map((faq, idx) => (
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
      )}

      {/* Related Transfers Silo */}
      {fallbackRoutes.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Popular Routes</span>
                <h2 className="heading-lg">Other transfers from {route.from}</h2>
              </div>
              <Link href="/transfers" className="btn btn-outline">
                View All 150+ Transfers
              </Link>
            </div>
            <div className="listing-grid">
              {fallbackRoutes.map((rel) => (
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
                    <span className="listing-badge">Private Transfer</span>
                    <span className="listing-fixed-badge">Fixed Price</span>
                  </div>
                  <div className="listing-body">
                    <h3 className="listing-title">
                      <Link href={`/transfers/${rel.slug}`}>
                        {rel.from} → {rel.to}
                      </Link>
                    </h3>
                    <div className="listing-features">
                      <span className="feature-tag">{rel.distance}</span>
                      <span className="feature-tag">~{rel.duration}</span>
                      <span className="feature-tag">Sedan / Van</span>
                    </div>
                    <ul className="listing-includes">
                      <li>Professional English-speaking driver</li>
                      <li>Door-to-door &amp; tolls included</li>
                      <li>Pay on arrival (Zero deposit &lt; €300)</li>
                    </ul>
                    <div className="listing-footer">
                      <div>
                        <div className="listing-price-from">From</div>
                        <div className="listing-price-amount">
                          €{rel.price_sedan} ({Math.round(rel.price_sedan * EUR_RATE)} MAD)
                        </div>
                      </div>
                      <Link
                        href={`/transfers/${rel.slug}`}
                        className="btn btn-gold"
                        style={{ padding: "10px 18px", fontSize: "0.72rem" }}
                      >
                        Details &amp; Rates
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Bottom Call-to-Action Bar */}
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Ready to reserve your transfer?</h2>
          <p>
            No prepayment required under €300. Send us your travel date and pickup location on WhatsApp for instant confirmation.
          </p>
          <div className="cta-buttons">
            <a
              href={whatsappUrl(
                `Salam! I would like to book a private transfer from ${route.from} to ${route.to}. Can you confirm availability?`
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              <Icon name="whatsapp" size={18} /> Book on WhatsApp
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              Explore All Routes
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileBookingBar
        from={route.from}
        to={route.to}
        priceSedan={route.price_sedan}
        waUrl={whatsappUrl(
          `Salam! I would like to book a private transfer from ${route.from} to ${route.to} (Comfort Sedan - €${route.price_sedan}).`
        )}
      />
    </>
  );
}
