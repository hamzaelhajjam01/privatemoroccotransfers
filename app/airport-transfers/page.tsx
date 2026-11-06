import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_EN } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Airport Transfers Morocco — Fixed Price | Private Morocco Transfers" },
  description: "Reliable airport transfers across Morocco with guaranteed fixed prices. Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fes (FEZ), Tangier (TNG). 45-min free wait time and flight tracking included.",
  alternates: {
    canonical: `${SITE_URL}/airport-transfers`,
    languages: {
      "en": `${SITE_URL}/airport-transfers`,
      "fr": `${SITE_URL}/fr/airport-transfers`,
      "x-default": `${SITE_URL}/airport-transfers`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Airport Transfers", item: `${SITE_URL}/airport-transfers` },
      ],
    },
    {
      "@type": "TaxiService",
      name: "Morocco Airport Transfers",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_EN,
      areaServed: "Morocco",
      description: "Fixed-price private airport transfers with flight tracking and 45-min free wait.",
    },
  ],
};

export default function AirportTransfersPage() {
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
              {"Airport Transfers"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"Fixed Price · Meet & Greet Included"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Airport Transfers"}
            <br />
            {"in Morocco"}
          </h1>
          <p className="hero-sub">
            {"Professional pickup and drop-off at all Moroccan airports. Your driver meets you at arrivals with a name sign. 45 minutes free waiting included."}
          </p>
        </div>
      </div>
      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <button className="filter-btn active" data-filter="all">
              {"All Airports"}
            </button>
            <button className="filter-btn" data-filter="marrakech">
              {"Marrakech"}
            </button>
            <button className="filter-btn" data-filter="casablanca">
              {"Casablanca"}
            </button>
            <button className="filter-btn" data-filter="agadir">
              {"Agadir"}
            </button>
            <button className="filter-btn" data-filter="fes">
              {"Fes"}
            </button>
            <button className="filter-btn" data-filter="tangier">
              {"Tangier"}
            </button>
            <button className="filter-btn" data-filter="rabat">
              {"Rabat"}
            </button>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="section-label">{"Airport Corridors"}</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>{"Available Airport Pickups"}</h2>
            </div>
            <Link href="/transfers" className="btn btn-outline">
              {"View All 150+ Transfers Directory ↗"}
            </Link>
          </div>
          <div className="listing-grid">
            <div className="listing-card" data-category="marrakech">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/brass-lantern.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/marrakech-airport-to-marrakech">{"Marrakech Airport → Medina"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"RAK Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–3 pax"}
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
                    {"Meet & greet at arrivals"}
                  </li>
                  <li>
                    {"45 min free waiting"}
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
                      {"€30 (330 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an airport transfer: Marrakech Airport to Medina. Can you give me a fixed price?">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card" data-category="marrakech">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/tadelakt.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Marrakech Airport → Any Hotel (SUV)"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"RAK Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–5 pax"}
                  </span>
                  <span className="feature-tag">
                    {"SUV"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver & fuel included"}
                  </li>
                  <li>
                    {"Meet & greet at arrivals"}
                  </li>
                  <li>
                    {"45 min free waiting"}
                  </li>
                  <li>
                    {"More luggage space"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€45 (500 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an SUV airport transfer in Marrakech.">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card" data-category="casablanca">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/zellige.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/casablanca-airport-to-casablanca">{"Casablanca Airport → City Center"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"CMN Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–3 pax"}
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
                    {"Meet & greet at arrivals"}
                  </li>
                  <li>
                    {"45 min free waiting"}
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
                      {"€40 (440 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an airport transfer from Casablanca Airport.">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card" data-category="agadir">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/agadir-airport-to-agadir">{"Agadir Airport → City / Hotel"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"AGA Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–3 pax"}
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
                    {"Meet & greet"}
                  </li>
                  <li>
                    {"45 min free waiting"}
                  </li>
                  <li>
                    {"Free cancellation"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€30 (330 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an airport transfer from Agadir Airport.">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card" data-category="fes">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/zellige.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/fes-airport-to-fes">{"Fes Airport → Medina / Hotel"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"FEZ Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–3 pax"}
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
                    {"Meet & greet"}
                  </li>
                  <li>
                    {"45 min free waiting"}
                  </li>
                  <li>
                    {"Free cancellation"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€30 (330 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an airport transfer from Fes Airport.">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card" data-category="tangier">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/brass-lantern.jpg)" }}>
                <span className="listing-badge">
                  {"Airport Transfer"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed Price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title"><Link href="/transfers/tangier-airport-to-tangier">{"Tangier Airport → City Center"}</Link></h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"TNG Airport"}
                  </span>
                  <span className="feature-tag">
                    {"1–3 pax"}
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
                    {"Meet & greet"}
                  </li>
                  <li>
                    {"45 min free waiting"}
                  </li>
                  <li>
                    {"Free cancellation"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€30 (330 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-gold" style={{ padding: "10px 20px", fontSize: "0.72rem" }} data-wa="Hello, I need an airport transfer from Tangier Airport.">
                    {"Book Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--sand)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"What's Included"}
              </span>
              <h2 className="heading-lg">
                {"Every airport transfer includes"}
              </h2>
            </div>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-num">
                {"01"}
              </div>
              <h3 className="step-title">
                {"Meet & Greet"}
              </h3>
              <p className="step-body">
                {"Your driver waits at the arrivals hall with a sign bearing your name. No searching, no stress."}
              </p>
            </div>
            <div className="step-item">
              <div className="step-num">
                {"02"}
              </div>
              <h3 className="step-title">
                {"45-min Free Wait"}
              </h3>
              <p className="step-body">
                {"Delayed flight? No problem. We track your flight and your driver waits 45 minutes for free."}
              </p>
            </div>
            <div className="step-item">
              <div className="step-num">
                {"03"}
              </div>
              <h3 className="step-title">
                {"All-Inclusive Price"}
              </h3>
              <p className="step-body">
                {"Driver, fuel, tolls and A/C are all included. The price you see is the price you pay."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Common Questions"}
              </span>
              <h2 className="heading-lg">
                {"Airport transfer FAQ"}
              </h2>
            </div>
          </div>
          <div className="faq-list" style={{ maxWidth: "800px" }}>
            <div className="faq-item">
              <div className="faq-question">
                {"What happens if my flight is delayed?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"We monitor your flight in real time. If your flight is delayed, your driver adjusts. Up to 45 minutes of free waiting is included."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"How will I recognise my driver?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Your driver will be in the arrivals hall holding a sign with your name. You'll also receive your driver's phone number in advance."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"Can I pay in cash?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Yes. Airport transfers require zero deposit (pay cash in EUR or MAD directly to your driver upon arrival). Flat rate per vehicle including luggage, meet & greet and flight delay monitoring."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"How far in advance should I book?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"We recommend booking at least 24 hours ahead, though we can often accommodate same-day bookings subject to availability."}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Book your airport transfer"}
          </h2>
          <p>
            {"Fixed price confirmed on WhatsApp — no payment needed upfront."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need an airport transfer in Morocco. Can you give me a fixed price?">
              {"Get a Fixed Price on WhatsApp"}
            </button>
            <Link href="/calculator" className="btn btn-outline-white btn-lg">
              {"Try the Calculator"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
