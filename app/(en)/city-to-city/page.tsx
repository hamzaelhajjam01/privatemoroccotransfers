import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, buildMultilingualAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "City-to-City Transfers Morocco — Fixed Rates per Vehicle" },
  description: "Fixed-price intercity transfers between all major Moroccan cities. Marrakech to Essaouira, Casablanca to Marrakech, Fes to Chefchaouen. Flat rates per car, tolls and fuel included.",
  alternates: buildMultilingualAlternates("/city-to-city", "en"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "City-to-City Transfers", item: `${SITE_URL}/city-to-city` },
      ],
    },
    {
      "@type": "Service",
      name: "Morocco Intercity Private Transfers",
      description: "Door-to-door private intercity highway transfers between all Moroccan cities with licensed drivers, fuel and tolls included.",
      image: `${SITE_URL}/cars/mercedes-vito.webp`,
      url: `${SITE_URL}/city-to-city`,
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "75",
        highPrice: "380",
        offerCount: "35",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/city-to-city`,
      },
    },
    {
      "@type": "TaxiService",
      name: "Morocco Intercity Chauffeur Service",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      areaServed: "Morocco",
      description: "Door-to-door highway transfers between all Moroccan cities with licensed drivers.",
    },
  ],
};

export default function CityToCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              {"City-to-City Transfers"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"City-to-City Transfers"}
          </h1>
          <p className="hero-sub">
            {"Fixed price transfers between any two cities in Morocco. Per vehicle, not per person — all tolls and fuel included."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Browse All Options"}
              </span>
              <h2 className="heading-lg">
                {"Available transfers"}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/transfers" className="btn btn-gold">
                {"All 150+ Routes & Rates"}
              </Link>
              <Link href="/calculator" className="btn btn-outline">
                {"Price Calculator"}
              </Link>
            </div>
          </div>
          <div className="listing-grid">
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-to-essaouira">{"Marrakech → Essaouira"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"176 km"}
                  </span>
                  <span className="feature-tag">
                    {"~2.5h"}
                  </span>
                  <span className="feature-tag">
                    {"Sedan / SUV"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€97 (1,070 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-agadir.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-to-agadir">{"Marrakech → Agadir"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"257 km"}
                  </span>
                  <span className="feature-tag">
                    {"~3h"}
                  </span>
                  <span className="feature-tag">
                    {"Sedan / SUV"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€137 (1,510 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/marrakech-to-agadir" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-merzouga.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-to-fes">{"Marrakech → Fes"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"540 km"}
                  </span>
                  <span className="feature-tag">
                    {"~6h"}
                  </span>
                  <span className="feature-tag">
                    {"Sedan / SUV"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€274 (3,010 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/marrakech-to-fes" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-casablanca.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-to-casablanca">{"Marrakech → Casablanca"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"238 km"}
                  </span>
                  <span className="feature-tag">
                    {"~2.5h"}
                  </span>
                  <span className="feature-tag">
                    {"Sedan / SUV"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€157 (1,730 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/marrakech-to-casablanca" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-tours.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-to-merzouga">{"Marrakech → Merzouga"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"560 km"}
                  </span>
                  <span className="feature-tag">
                    {"~7h"}
                  </span>
                  <span className="feature-tag">
                    {"SUV recommended"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€370 (4,070 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/marrakech-to-merzouga" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-rabat.webp)" }}>
                <span className="listing-badge">
                  {"City-to-City Transfers"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/casablanca-to-rabat">{"Casablanca → Rabat"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"91 km"}
                  </span>
                  <span className="feature-tag">
                    {"~1h"}
                  </span>
                  <span className="feature-tag">
                    {"Sedan"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Tolls & A/C included"}
                  </li>
                  <li>
                    {"Free cancellation 48h"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€75 (820 MAD)"}
                    </div>
                  </div>
                  <Link href="/transfers/casablanca-to-rabat" className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>{"View Rates"}</Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--grey-500)" }}>
              {"Don't see your route? "}
              <Link href="/calculator" style={{ color: "var(--gold-deep)", fontWeight: "500" }}>
                {"Use our Price Calculator →"}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Get a fixed price now"}
          </h2>
          <p>
            {"No obligation, no payment needed. We reply within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need a private driver in Morocco.">
              {"Message Us on WhatsApp"}
            </button>
            <Link href="/calculator" className="btn btn-outline-white btn-lg">
              {"Price Calculator"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
