import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_EN } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Day Trips from Marrakech & Morocco | Private Morocco Transfers" },
  description: "Book a private driver for full-day excursions across Morocco: Atlas Mountains, Ourika Valley, Essaouira, Agafay Desert, Ouzoud Waterfalls. Fixed prices per vehicle.",
  alternates: {
    canonical: `${SITE_URL}/day-trips`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Day Trips", item: `${SITE_URL}/day-trips` },
      ],
    },
    {
      "@type": "TouristInformationCenter",
      name: "Morocco Private Day Trips",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_EN,
      areaServed: "Morocco",
      description: "Full-day private driver excursions with door-to-door hotel pickup and scenic stops.",
    },
  ],
};

export default function DayTripsPage() {
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
              {"Day Trips with"}
              <br />
              {"a Private Driver"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Day Trips with"}
            <br />
            {"a Private Driver"}
          </h1>
          <p className="hero-sub">
            {"Spend a full day exploring Morocco's most spectacular destinations, departing from Marrakech or your city."}
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
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Essaouira from Marrakech"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"176 km each way"}
                  </span>
                  <span className="feature-tag">
                    {"Full day"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€120 (1,320 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a day trip to Essaouira from Marrakech.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-day-trips.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Ourika Valley"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"60 km"}
                  </span>
                  <span className="feature-tag">
                    {"Half or full day"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€75 (825 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a day trip to the Ourika Valley.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-city-to-city.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Atlas Mountains & Imlil"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"65 km"}
                  </span>
                  <span className="feature-tag">
                    {"Full day"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€85 (935 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a day trip to Imlil and the Atlas Mountains.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/routes/marrakech-merzouga.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Ait Benhaddou & Ouarzazate"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"200 km"}
                  </span>
                  <span className="feature-tag">
                    {"Full day, Tizi n'Tichka pass"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€160 (1,760 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a day trip to Ait Benhaddou.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/textures/tadelakt.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Ouzoud Waterfalls"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"155 km"}
                  </span>
                  <span className="feature-tag">
                    {"Full day"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€110 (1,210 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a day trip to the Ouzoud waterfalls.">
                    {"Book"}
                  </button>
                </div>
              </div>
            </div>
            <div className="listing-card">
              <div className="listing-img" style={{ backgroundImage: "url(/img/hero-tours.jpg)" }}>
                <span className="listing-badge">
                  {"Day trip"}
                </span>
                <span className="listing-fixed-badge">
                  {"Fixed price"}
                </span>
              </div>
              <div className="listing-body">
                <h3 className="listing-title">
                  {"Agafay Desert"}
                </h3>
                <div className="listing-features">
                  <span className="feature-tag">
                    {"40 km"}
                  </span>
                  <span className="feature-tag">
                    {"Afternoon to sunset"}
                  </span>
                </div>
                <ul className="listing-includes">
                  <li>
                    {"Driver, fuel and tolls"}
                  </li>
                  <li>
                    {"Air conditioning"}
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
                      {"€80 (880 MAD)"}
                    </div>
                    <div className="listing-price-unit">
                      {"per vehicle, return"}
                    </div>
                  </div>
                  <button className="btn btn-black" data-wa="Hello, I would like a trip to the Agafay desert.">
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
