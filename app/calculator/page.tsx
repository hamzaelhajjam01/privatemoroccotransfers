import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Price Calculator — Private Morocco Transfers" },
  description: "Calculate the exact fixed price for your private driver in Morocco. Instant price for any route — Marrakech, Casablanca, Agadir, Fes and more.",
  alternates: {
    canonical: `${SITE_URL}/calculator`,
  },
  openGraph: {
    title: "Morocco Private Transfer Price Calculator | Instant Fixed Rates",
    description: "Calculate guaranteed fixed prices for private airport pickups, city-to-city transfers, and desert tours in Morocco.",
    url: `${SITE_URL}/calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const calcJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Morocco Private Transfer Price Calculator",
  applicationCategory: "TravelApplication",
  operatingSystem: "All",
  url: `${SITE_URL}/calculator`,
  description: "Instant fixed-price calculation tool for private transfers and chauffeurs in Morocco.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcJsonLd) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              {"Home"}
            </Link>
            <span className="breadcrumb-sep">
              {"/"}
            </span>
            <span>
              {"Price Calculator"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"Instant Price · No Commitment"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Price Calculator"}
          </h1>
          <p className="hero-sub">
            {"Calculate your exact fixed price for any route in Morocco. All prices include driver, fuel, tolls and A/C."}
          </p>
        </div>
      </div>
      <section className="section calc-section">
        <div className="container">
          <Calculator />
          <div style={{ marginTop: "60px" }}>
            <div className="section-header">
              <div>
                <span className="section-label">
                  {"Reference"}
                </span>
                <h2 className="heading-lg">
                  {"Popular route prices"}
                </h2>
              </div>
            </div>
            <div className="routes-grid">
              <div className="route-card">
                <p className="route-from-to">
                  {"Transfer"}
                </p>
                <h3 className="route-name">
                  {"Marrakech → Essaouira"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"176 km · ~2.5h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€90 (980 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
              <div className="route-card">
                <p className="route-from-to">
                  {"Transfer"}
                </p>
                <h3 className="route-name">
                  {"Marrakech → Agadir"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"240 km · ~3h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€135 (1,480 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
              <div className="route-card">
                <p className="route-from-to">
                  {"Transfer"}
                </p>
                <h3 className="route-name">
                  {"Marrakech → Casablanca"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"240 km · ~3h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€150 (1,650 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
              <div className="route-card">
                <p className="route-from-to">
                  {"Transfer"}
                </p>
                <h3 className="route-name">
                  {"Marrakech → Fes"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"540 km · ~6h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€240 (2,640 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
              <div className="route-card">
                <p className="route-from-to">
                  {"Desert"}
                </p>
                <h3 className="route-name">
                  {"Marrakech → Merzouga"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"560 km · ~7h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€360 (3,960 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
              <div className="route-card">
                <p className="route-from-to">
                  {"Transfer"}
                </p>
                <h3 className="route-name">
                  {"Casablanca → Rabat"}
                </h3>
                <div className="route-meta">
                  <span>
                    {"90 km · ~1h"}
                  </span>
                </div>
                <div className="route-price">
                  {"€65 (710 MAD) "}
                  <span>
                    {"sedan / vehicle"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Need a custom quote?"}
          </h2>
          <p>
            {"Our route not listed? Message us on WhatsApp and we'll price any route in Morocco."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need a custom price quote for a route in Morocco.">
              {"Message Us on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
