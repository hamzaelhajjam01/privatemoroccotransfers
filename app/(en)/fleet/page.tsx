import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Link from "next/link";
import { SITE_NAME, SITE_URL, buildMultilingualAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Our Fleet — Sedan, SUV & Minivan | Private Morocco Transfers" },
  description: "View our private driver fleet in Morocco. Economy sedan, comfort SUV and premium minivan for all group sizes.",
  alternates: buildMultilingualAlternates("/fleet", "en"),
  openGraph: {
    title: "Our Fleet — Chauffeur Vehicles in Morocco | Private Morocco Transfers",
    description: "Modern, air-conditioned sedans, SUVs, and minivans with licensed English-speaking drivers across Morocco.",
    url: `${SITE_URL}/fleet`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const fleetJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Private Morocco Transfers Fleet",
  description: "Chauffeur-driven vehicles available across Morocco.",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Comfort Sedan (1–4 pax)",
      description: "Modern air-conditioned sedan suitable for up to 4 passengers with luggage. Ideal for couples and small families.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "35",
        highPrice: "270",
      },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Spacious Van (5–7 pax)",
      description: "Comfortable passenger minivan with generous luggage capacity and elevated seating. Ideal for families and small groups.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "45",
        highPrice: "330",
      },
    },
    {
      "@type": "Product",
      position: 3,
      name: "Private Minibus (8–14 pax)",
      description: "High-roof touring minibus equipped with dual air conditioning, reclining seats, and massive luggage trunk for group expeditions.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "70",
        highPrice: "450",
      },
    },
  ],
};

export default function FleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetJsonLd) }}
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
              {"Our Fleet"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Our Fleet"}
          </h1>
          <p className="hero-sub">
            {"Clean, air-conditioned vehicles for every group size. Economy, comfort and premium — all driven by licensed professionals."}
          </p>
        </div>
      </div>
      <section className="section fleet-section">
        <div className="wrap">
          <Fleet heading="The fleet" intro="Nine vehicles, from executive sedans to 16-seat minibuses. Pick a city to see what is available there — every price is fixed per vehicle." />
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
