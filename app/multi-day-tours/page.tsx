import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Multi-Day Private Tours Morocco | Private Morocco Transfers" },
  description: "3, 5 and 7-day private tours across Morocco with a dedicated driver. Sahara, imperial cities, Atlantic coast.",
  alternates: {
    canonical: "https://www.privatemoroccotransfers.com/multi-day-tours",
  },
};

export default function MultiDayToursPage() {
  return (
    <>
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
              {"Multi-Day Private Tours"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Multi-Day Private Tours"}
          </h1>
          <p className="hero-sub">
            {"Discover Morocco over several days with your own dedicated driver and vehicle. Fixed price, your itinerary, your pace."}
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
            <Link href="/calculator" className="btn btn-outline">
              {"Price Calculator"}
            </Link>
          </div>
          <div className="listing-grid">
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-tours.jpg)" }}>
                <span className="listing-badge">
                  {"3 days"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Marrakech · Sahara · Marrakech"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"Ait Benhaddou"}
                  </span>
                  <span className="feature-tag">
                    {"Dades"}
                  </span>
                  <span className="feature-tag">
                    {"Merzouga"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Same driver throughout"}
                  </li>
                  <li>
                    {"Driver accommodation included"}
                  </li>
                  <li>
                    {"Fuel and tolls"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€480 (5,280 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I am interested in the 3-day Sahara tour.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/zellige.jpg)" }}>
                <span className="listing-badge">
                  {"5 days"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Imperial Cities"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"Casablanca"}
                  </span>
                  <span className="feature-tag">
                    {"Rabat"}
                  </span>
                  <span className="feature-tag">
                    {"Meknes"}
                  </span>
                  <span className="feature-tag">
                    {"Fes"}
                  </span>
                  <span className="feature-tag">
                    {"Marrakech"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Same driver throughout"}
                  </li>
                  <li>
                    {"Driver accommodation included"}
                  </li>
                  <li>
                    {"Fuel and tolls"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€800 (8,800 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I am interested in the 5-day imperial cities tour.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-tours.jpg)" }}>
                <span className="listing-badge">
                  {"7 days"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"The Grand Morocco Circuit"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"Marrakech"}
                  </span>
                  <span className="feature-tag">
                    {"Sahara"}
                  </span>
                  <span className="feature-tag">
                    {"Fes"}
                  </span>
                  <span className="feature-tag">
                    {"Chefchaouen"}
                  </span>
                  <span className="feature-tag">
                    {"Casablanca"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Same driver throughout"}
                  </li>
                  <li>
                    {"Driver accommodation included"}
                  </li>
                  <li>
                    {"Fuel and tolls"}
                  </li>
                </ul>
                <div className="listing-footer">
                  <div>
                    <div className="listing-price-from">
                      {"From"}
                    </div>
                    <div className="listing-price-amount">
                      {"€1,120 (12,320 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I am interested in the 7-day Morocco circuit.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--grey-500)" }}>
              {"Don't see your route? "}
              <Link href="/calculator" style={{ color: "var(--gold)", fontWeight: "500" }}>
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
