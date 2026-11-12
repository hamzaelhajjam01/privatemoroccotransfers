import type { Metadata } from "next";
import Link from "next/link";
import routesData from "@/content/routes.json";
import {
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
  whatsappUrl,
  buildMultilingualAlternates,
} from "@/lib/site";
import TransferDirectory from "@/components/TransferDirectory";
import type { RouteItem } from "@/app/transfers/[slug]/page";
import Icon from "@/components/Icon";

const ALL_ROUTES = routesData as RouteItem[];

export const metadata: Metadata = {
  title: {
    absolute: `Private Transfers in Morocco — 150+ Fixed-Price Routes`,
  },
  description:
    "Explore 150+ private transfer routes across Morocco. Guaranteed fixed rates per vehicle between Marrakech, Casablanca, Tangier, Fes, Agadir, Chefchaouen, and all international airports. 24/7 WhatsApp booking.",
  alternates: buildMultilingualAlternates("/transfers", "en"),
  openGraph: {
    title: "Private Transfers & Private Drivers in Morocco — 150+ Fixed-Price Routes",
    description:
      "Door-to-door private chauffeur transfers across Morocco. Flat rates per car, licensed drivers, zero upfront deposit under €300.",
    url: `${SITE_URL}/transfers`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Private Morocco Transfers Directory",
      },
    ],
  },
};

const DIRECTORY_FAQS = [
  {
    q: "How does booking a private transfer with Private Morocco Transfers work?",
    a: "Booking is frictionless via WhatsApp. Simply pick your route or tell us your departure and destination. We confirm your driver and all-inclusive fixed price instantly. There are no registration forms and no upfront deposit required for bookings of €300 (3,300 MAD) or less.",
  },
  {
    q: "Is the price per person or per vehicle?",
    a: "All prices are 100% fixed flat rates per vehicle, not per person. Whether you travel solo, as a couple, or with family up to the vehicle's capacity, the price remains identical.",
  },
  {
    q: "What is included in the quoted transfer rate?",
    a: "Our rates are all-inclusive: dedicated licensed chauffeur, modern air-conditioned vehicle, all highway toll tickets, fuel, door-to-door luggage handling, and complimentary bottled water. For airport pickups, flight delay monitoring and 45 minutes of terminal wait time are included free.",
  },
  {
    q: "How do I pay for my transfer?",
    a: "You pay in cash directly to your driver upon reaching your destination. We accept Moroccan Dirhams (MAD), Euros (EUR), US Dollars (USD), and British Pounds (GBP). For bookings over €300, a modest 30% confirmation deposit applies.",
  },
  {
    q: "Can I book a transfer that is not listed in the directory?",
    a: "Yes! We operate nationwide throughout Morocco. If you need a custom route to remote desert villages, boutique Kasbahs, or golf resorts, message us on WhatsApp with your itinerary and we will provide an instant fixed quote.",
  },
];

export default function TransfersDirectoryPage() {
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
        name: "Transfers Directory",
        item: `${SITE_URL}/transfers`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DIRECTORY_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>All Transfers</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label label-gold" style={{ marginBottom: "16px", display: "inline-block" }}>
            150+ Intercity &amp; Airport Routes · Door-to-Door Across Morocco
          </span>
          <h1 className="heading-xl" style={{ color: "var(--white)", maxWidth: "980px" }}>
            Private Transfers in Morocco: Fixed-Price Directory
          </h1>
          <p className="hero-sub" style={{ maxWidth: "750px", marginTop: "18px" }}>
            Browse guaranteed fixed rates for private transfers with your own private driver across Morocco. Comfort sedans, spacious vans,
            and private minibuses driven by licensed English and French-speaking professionals.
          </p>

          {/* Trust Highlights */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px 32px",
              marginTop: "28px",
              paddingTop: "24px",
              borderTop: "1px solid var(--rule-dark)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="check" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>Flat Rate per Vehicle</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="shield-check" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>Pay on Arrival (0% Deposit &lt; €300)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="clock" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>Free Flight Delay Monitoring</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="refresh" size={16} />
              <span style={{ fontSize: "15px", color: "var(--white)" }}>10% Round-Trip Discount</span>
            </div>
          </div>
        </div>
      </div>

      {/* Directory & Filter Component */}
      <section className="section">
        <div className="container">
          <TransferDirectory routes={ALL_ROUTES} />
        </div>
      </section>

      {/* Multi-Day Desert & Imperial Cities Tours Section */}
      <section className="section dark" style={{ borderTop: "1px solid var(--rule-dark)" }}>
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <span className="section-label" style={{ color: "var(--muted)", marginBottom: "16px", display: "inline-block" }}>
              Sahara Desert Expeditions · Custom Circuits
            </span>
            <h2 className="heading-lg" style={{ color: "var(--white)", marginBottom: "20px" }}>
              Looking for multi-day desert tours across Morocco?
            </h2>
            <p className="statement muted" style={{ fontSize: "18px", lineHeight: 1.45, marginBottom: "28px" }}>
              Need more than point-to-point transfers? Discover curated 3-to-10 day private road trips through the High Atlas,
              Ait Benhaddou, Todra Gorge, and luxury desert glamping in Erg Chebbi with our dedicated private chauffeur team.
            </p>
            <div>
              <Link
                href="/multi-day-tours"
                className="btn btn-white"
                style={{ minWidth: "240px" }}
              >
                Explore Multi-Day Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Transfer FAQs (Native Accordion Classes) */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ display: "block", paddingBottom: "24px", marginBottom: "32px" }}>
            <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
              Common Questions
            </span>
            <h2 className="heading-lg">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {DIRECTORY_FAQS.map((faq, idx) => (
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

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Have a special transfer route in mind?</h2>
          <p>
            Message us anytime on WhatsApp for a custom fixed price. We reply in under 2 hours.
          </p>
          <div className="cta-buttons">
            <a
              href={whatsappUrl(
                "Salam! I would like to check prices for a private transfer in Morocco."
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
            <Link href="/calculator" className="btn btn-outline-white btn-lg">
              Open Price Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
