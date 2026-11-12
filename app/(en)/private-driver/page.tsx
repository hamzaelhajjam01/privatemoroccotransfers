import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, buildMultilingualAlternates } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_EN } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Private Driver in Morocco — Hire a Chauffeur, Fixed Prices" },
  description:
    "Hire a private driver in Morocco for airport pickups, city-to-city trips and full multi-day tours. Your own car and English-speaking chauffeur, fixed price per vehicle, no shared rides.",
  alternates: buildMultilingualAlternates("/private-driver", "en"),
};

const FAQ = [
  {
    q: "How much does a private driver in Morocco cost?",
    a: "Prices are fixed per vehicle, not per person. A Marrakech airport pickup starts at €30, Marrakech to Essaouira at €90, and a full day with a driver from around €120. Multi-day tours start at €480 for a 3-day private Sahara trip. Fuel, tolls and the driver are always included.",
  },
  {
    q: "Can I hire a private driver for several days or a whole trip?",
    a: "Yes. The same driver and vehicle stay with you for the whole journey. The driver's accommodation and meals are included on multi-day trips, so you only pay the fixed vehicle price agreed before you travel.",
  },
  {
    q: "Do your drivers speak English?",
    a: "Yes. Our drivers are licensed professionals who speak English and French, and several also speak Spanish or Arabic. Let us know your language when you book.",
  },
  {
    q: "Is a private driver better than renting a car in Morocco?",
    a: "For most visitors, yes. You skip Moroccan traffic, mountain roads and parking, and your driver knows the routes, viewpoints and stops. You pay a fixed price with no fuel, insurance or navigation to worry about.",
  },
  {
    q: "How do I book a private driver?",
    a: "Message us on WhatsApp with your route and dates. We reply within about 2 hours with a fixed price. No deposit is needed for trips under €300 — you pay your driver on arrival in EUR, MAD, USD or GBP.",
  },
];

const USE_CASES = [
  {
    href: "/airport-transfers",
    title: "Airport pickups",
    desc: "Meet & greet with a name sign, free flight tracking and 45 minutes of waiting at every Moroccan airport.",
    img: "/img/blog/airport-transfer.webp",
  },
  {
    href: "/city-to-city",
    title: "City-to-city journeys",
    desc: "Direct private transfers between Marrakech, Casablanca, Fes, Chefchaouen, Essaouira and every city, with photo stops on the way.",
    img: "/img/routes/marrakech-essaouira.webp",
  },
  {
    href: "/day-trips",
    title: "Day trips with a driver",
    desc: "A driver for the whole day — Ourika Valley, Ouzoud Waterfalls, Agafay Desert or Aït Ben Haddou — back to your hotel by evening.",
    img: "/img/blog/day-trips.webp",
  },
  {
    href: "/multi-day-tours",
    title: "Multi-day private tours",
    desc: "The same driver for 3 to 10 days across the Sahara, the imperial cities and the Atlas, at a fixed price per vehicle.",
    img: "/img/routes/marrakech-merzouga.webp",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Private Driver in Morocco", item: `${SITE_URL}/private-driver` },
      ],
    },
    {
      "@type": "Service",
      name: "Private Driver in Morocco",
      serviceType: "Private chauffeur hire",
      description:
        "Hire a private driver and vehicle in Morocco for airport transfers, city-to-city trips, day trips and multi-day tours. Fixed price per vehicle, licensed English-speaking chauffeurs.",
      url: `${SITE_URL}/private-driver`,
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      areaServed: { "@type": "Country", name: "Morocco" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "30",
        highPrice: "1280",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/private-driver`,
      },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_EN,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function PrivateDriverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{"Home"}</Link>
            <span className="breadcrumb-sep">{"/"}</span>
            <span>{"Private Driver in Morocco"}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Private Driver in Morocco"}
          </h1>
          <p className="hero-sub">
            {"Your own car and professional chauffeur for a transfer, a day, or your whole trip. Fixed price per vehicle, licensed English-speaking drivers, no shared rides."}
          </p>
          <div className="cta-buttons" style={{ marginTop: "24px" }}>
            <button className="btn btn-gold btn-lg" data-wa="Hello, I'd like to hire a private driver in Morocco. Can you give me a fixed price?">
              {"Get a Fixed Price on WhatsApp"}
            </button>
            <Link href="/calculator" className="btn btn-outline-white btn-lg">
              {"Price Calculator"}
            </Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <span className="section-label">{"Hire a Driver"}</span>
          <h2 className="heading-lg">{"One driver, your whole journey"}</h2>
          <p className="statement" style={{ marginBottom: "20px" }}>
            {"Hiring a private driver in Morocco means a dedicated chauffeur who collects you door-to-door and stays with you for as long as you need — an airport run, a day in the Atlas, or a two-week loop of the country. You travel in a modern, air-conditioned vehicle, never a shared shuttle, and the price is agreed before you set off."}
          </p>
          <p className="statement" style={{ marginBottom: "20px" }}>
            {"Every price is per vehicle and includes the driver, fuel and all highway tolls. There is no deposit for trips under €300: you pay your driver directly on arrival in euros, dirhams, dollars or pounds. Your driver knows the roads, the viewpoints and the best stops, so you see more and worry about nothing."}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">{"Ways to Travel"}</span>
              <h2 className="heading-lg">{"What your driver can do"}</h2>
            </div>
            <Link href="/transfers" className="btn btn-outline">
              {"All 150+ Routes & Rates"}
            </Link>
          </div>
          <div className="listing-grid">
            {USE_CASES.map((u) => (
              <div className="listing-card" key={u.href}>
                <div className="listing-img" style={{ backgroundImage: `url(${u.img})` }}>
                  <span className="listing-fixed-badge">{"Fixed Price"}</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">
                    <Link href={u.href}>{u.title}</Link>
                  </h3>
                  <p style={{ color: "var(--grey-500)", fontSize: "0.9rem", marginBottom: "16px" }}>{u.desc}</p>
                  <Link href={u.href} className="btn btn-black" style={{ padding: "10px 18px", fontSize: "0.72rem", minWidth: "0" }}>
                    {"Learn more"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">{"Common Questions"}</span>
              <h2 className="heading-lg">{"Hiring a private driver — FAQ"}</h2>
            </div>
          </div>
          <div className="faq-list" style={{ maxWidth: "800px" }}>
            {FAQ.map((f) => (
              <div className="faq-item" key={f.q}>
                <div className="faq-question">
                  {f.q}
                  <span className="faq-icon">{"+"}</span>
                </div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Get your fixed price now"}</h2>
          <p>{"No obligation, no payment needed. We reply within 2 hours."}</p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I'd like to hire a private driver in Morocco. Can you give me a fixed price?">
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
