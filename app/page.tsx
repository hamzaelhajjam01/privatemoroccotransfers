import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Private Driver in Morocco & Airport Transfers — Fixed Prices | Private Morocco Transfers" },
  description: "Reliable private driver and transfers across Morocco at guaranteed fixed prices. Airport pickups, intercity routes, and day trips. Licensed English-speaking drivers, 24/7 WhatsApp booking.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "fr": `${SITE_URL}/fr`,
      "es": `${SITE_URL}/es`,
      "it": `${SITE_URL}/it`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "pt": `${SITE_URL}/pt`,
      "nl": `${SITE_URL}/nl`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Private Driver in Morocco & Airport Transfers — Fixed Prices",
    description: "Reliable private driver and transfers across Morocco at guaranteed fixed prices. Airport pickups, intercity routes, and day trips. Licensed English-speaking drivers, 24/7 WhatsApp booking.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Private Morocco Transfers Chauffeur Service",
      },
    ],
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are the prices fixed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The price is agreed on WhatsApp before your trip and includes the driver, fuel, tolls and air conditioning. Nothing is added at the end.",
      },
    },
    {
      "@type": "Question",
      name: "What if my flight is delayed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow your flight in real time and adjust pickup automatically. Up to 45 minutes of waiting after landing is included free.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfers and day trips under €300 require zero deposit (pay cash in EUR or MAD directly to your driver upon arrival). For multi-day itineraries exceeding €300, a transparent 30% deposit secures your vehicle.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free cancellation up to 48 hours before pickup.",
      },
    },
    {
      "@type": "Question",
      name: "Do the drivers speak English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — English and French, and many also speak Spanish.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <h1 className="visually-hidden">{"Private Driver in Morocco & Fixed-Price Airport Transfers"}</h1>
            <HeroLines />
            <p>
              {"Private Morocco Transfers is a premier private chauffeur service for travelers who want Morocco to feel effortless — guaranteed fixed prices, licensed drivers and calm, comfortable door-to-door journeys from the airport to the Sahara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/transfers" className="btn btn-gold">
                {"Browse All Routes"}
              </Link>
              <Link href="/city-to-city" className="btn btn-white">
                {"City-to-City"}
              </Link>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Airport Transfer"}
              </div>
              <div className="booking-tab">
                {"City-to-City"}
              </div>
              <div className="booking-tab">
                {"Day Trip"}
              </div>
              <Link className="booking-tab" href="/calculator">
                {"Price Calculator"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"Where are we picking you up?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"From"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="e.g. Marrakech Airport (RAK)" />
              <label className="field-label">
                {"To"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="e.g. Marrakech Medina" />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Date"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passengers"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>
                      {"1–3 (car)"}
                    </option>
                    <option>
                      {"4–5 (SUV)"}
                    </option>
                    <option>
                      {"6–8 (van)"}
                    </option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Get my fixed price on WhatsApp"}
              </button>
              <p className="field-note">
                {"Opens WhatsApp with your trip details. No payment needed to get a price."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>
      <section className="section dark intro">
        <div className="wrap split">
          <span className="label">
            {"(01) The service"}
          </span>
          <div>
            <p className="statement">
              {"We believe travel in Morocco should feel calm and certain. One driver, one vehicle, one price agreed before you leave — nothing added at the end of the road."}
            </p>
            <p className="statement muted">
              {"Every journey is planned around your flight, your hotel and your pace. Our drivers know the medinas, the mountain passes and the desert tracks, so you can simply look out of the window."}
            </p>
          </div>
        </div>
        <div className="wrap img-row">
          <div className="ph" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.jpg)" }}></div>
          <div className="ph" style={{ backgroundImage: "url(/img/textures/zellige.jpg)" }}></div>
          <div className="ph" style={{ backgroundImage: "url(/img/textures/brass-lantern.jpg)" }}></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">
              {"Our services"}
            </h2>
            <p className="statement">
              {"Four ways to travel with us — every one with a fixed price per vehicle, fuel, tolls and air conditioning included."}
            </p>
          </div>
          <ServicesCarousel />
        </div>
      </section>
      <section className="section fleet-section">
        <div className="wrap">
          <Fleet />
        </div>
      </section>
      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tangier<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tangier<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>
      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">
                {"We drive Morocco with intention"}
              </h2>
              <Link href="/about" className="btn btn-white">
                {"About us"}
              </Link>
            </div>
            <div className="ph purpose-photo" role="img" aria-label="Black Ford Tourneo on the Atlantic coast road near Agadir at sunset" style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}></div>
          </div>
          <div className="split">
            <p className="statement">
              {"A good transfer is one you barely notice: the driver is already waiting, the car is cool and clean, and the price is exactly what you were told."}
            </p>
            <p className="statement muted">
              {"Our drivers are licensed, insured and based in the cities they serve. They speak English and French, and they know which road is quickest — and which one is worth the detour."}
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">
              {"Popular routes"}
            </h2>
            <p className="statement">
              {"Fixed prices per vehicle for a sedan, up to three passengers. Larger vehicles are priced in the calculator."}
            </p>
          </div>
          <div className="route-cards">
            <Link className="card" href="/blog/marrakech-essaouira">
              <div className="ph light" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.jpg)" }}></div>
              <div className="card-bar">
                <span>
                  {"Marrakech → Essaouira"}
                </span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Explore Route"}
                </span>
              </div>
            </Link>
            <Link className="card" href="/blog/sahara-merzouga">
              <div className="ph light" style={{ backgroundImage: "url(/img/hero-tours.jpg)" }}></div>
              <div className="card-bar">
                <span>
                  {"Marrakech → Merzouga"}
                </span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Explore Route"}
                </span>
              </div>
            </Link>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech Airport → Medina"}
                </Link>
              </span>
              <span className="muted">
                {"6 km"}
              </span>
              <span className="muted">
                {"15 min"}
              </span>
              <span>
                {"€30 (330 MAD)"}
              </span>
              <Link href="/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Essaouira"}
                </Link>
              </span>
              <span className="muted">
                {"180 km"}
              </span>
              <span className="muted">
                {"2.5 h"}
              </span>
              <span>
                {"€90 (980 MAD)"}
              </span>
              <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Agadir"}
                </Link>
              </span>
              <span className="muted">
                {"240 km"}
              </span>
              <span className="muted">
                {"3 h"}
              </span>
              <span>
                {"€135 (1,480 MAD)"}
              </span>
              <Link href="/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/casablanca-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Casablanca → Marrakech"}
                </Link>
              </span>
              <span className="muted">
                {"240 km"}
              </span>
              <span className="muted">
                {"3 h"}
              </span>
              <span>
                {"€150 (1,650 MAD)"}
              </span>
              <Link href="/transfers/casablanca-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-fes" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Fes"}
                </Link>
              </span>
              <span className="muted">
                {"540 km"}
              </span>
              <span className="muted">
                {"6 h"}
              </span>
              <span>
                {"€240 (2,640 MAD)"}
              </span>
              <Link href="/transfers/marrakech-to-fes" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-merzouga" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Merzouga (Sahara)"}
                </Link>
              </span>
              <span className="muted">
                {"560 km"}
              </span>
              <span className="muted">
                {"7 h"}
              </span>
              <span>
                {"€360 (3,960 MAD)"}
              </span>
              <Link href="/transfers/marrakech-to-merzouga" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "36px" }}>
            <Link href="/transfers" className="btn btn-gold">
              {"Browse All 150+ Route Prices"}
            </Link>
            <Link href="/calculator" className="btn btn-outline">
              {"Open Price Calculator"}
            </Link>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">
              {"Notes from the road"}
            </h2>
            <div>
              <p className="statement">
                {"Route guides, prices and practical advice for travelling Morocco with a private driver."}
              </p>
              <Link href="/blog" className="btn btn-black mt-24">
                {"View posts"}
              </Link>
            </div>
          </div>
          <Link className="post-row" href="/blog/marrakech-essaouira">
            <div className="ph light" style={{ backgroundImage: "url(/img/blog/marrakech-essaouira.jpg)" }}></div>
            <div className="post-right">
              <div>
                <span className="label">
                  {"Route Guides · 2026-11-01"}
                </span>
                <h3 className="mt-16">
                  {"Marrakech to Essaouira by private driver: the complete 2026 guide"}
                </h3>
              </div>
              <div className="read">
                <span>
                  {"Read post"}
                </span>
                <span>
                  {"→"}
                </span>
              </div>
            </div>
          </Link>
          <Link className="post-row" href="/blog/driver-cost">
            <div className="ph light" style={{ backgroundImage: "url(/img/blog/driver-cost.jpg)" }}></div>
            <div className="post-right">
              <div>
                <span className="label">
                  {"Prices · 2026-10-28"}
                </span>
                <h3 className="mt-16">
                  {"How much does a private driver cost in Morocco?"}
                </h3>
              </div>
              <div className="read">
                <span>
                  {"Read post"}
                </span>
                <span>
                  {"→"}
                </span>
              </div>
            </div>
          </Link>
          <Link className="post-row" href="/blog/day-trips">
            <div className="ph light" style={{ backgroundImage: "url(/img/blog/day-trips.jpg)" }}></div>
            <div className="post-right">
              <div>
                <span className="label">
                  {"Day Trips · 2026-10-20"}
                </span>
                <h3 className="mt-16">
                  {"Seven day trips from Marrakech with a private driver"}
                </h3>
              </div>
              <div className="read">
                <span>
                  {"Read post"}
                </span>
                <span>
                  {"→"}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="wrap split">
          <h2 className="heading-lg">
            {"Questions"}
          </h2>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">
                {"Are the prices fixed?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Yes. The price is agreed on WhatsApp before your trip and includes the driver, fuel, tolls and air conditioning. Nothing is added at the end."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"What if my flight is delayed?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"We follow your flight and adjust. Up to 45 minutes of waiting after landing is included free."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"How do I pay?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Transfers and day trips under €300 require zero deposit (pay cash in EUR or MAD directly to your driver upon arrival). For multi-day itineraries exceeding €300, a transparent 30% deposit secures your vehicle."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"Can I cancel?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Free cancellation up to 48 hours before pickup."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"Do the drivers speak English?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Yes — English and French, and many also speak Spanish."}
              </div>
            </div>
            <Link href="/faq" className="link-arrow mt-24">
              {"All questions →"}
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="head" style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px" }}>
            <h2 className="huge">
              {"Start a conversation about your journey."}
            </h2>
            <p className="statement">
              {"Whether you land tomorrow or are planning a week across Morocco, tell us the route and we'll reply on WhatsApp with a fixed price."}
            </p>
          </div>
          <div className="split">
            <div className="ph light" style={{ backgroundImage: "url(/img/textures/tadelakt.jpg)", minHeight: "420px" }}></div>
            <form className="brief" id="briefForm">
              <div className="brief-head">
                <span>
                  {"TRIP BRIEF"}
                </span>
                <span>
                  {"Morocco Private Drivers"}
                </span>
              </div>
              <label className="brief-field">
                <span>
                  {"01)"}
                </span>
                <input name="name" placeholder="Name" required />
              </label>
              <label className="brief-field">
                <span>
                  {"02)"}
                </span>
                <input name="email" type="email" placeholder="Email" />
              </label>
              <label className="brief-field">
                <span>
                  {"03)"}
                </span>
                <select name="service">
                  <option>
                    {"Airport transfer"}
                  </option>
                  <option>
                    {"City-to-city"}
                  </option>
                  <option>
                    {"Day trip"}
                  </option>
                  <option>
                    {"Private tour"}
                  </option>
                </select>
              </label>
              <label className="brief-field">
                <span>
                  {"04)"}
                </span>
                <input name="route" placeholder="Route — from / to" required />
              </label>
              <label className="brief-field">
                <span>
                  {"05)"}
                </span>
                <input name="date" placeholder="Date and passengers" />
              </label>
              <label className="brief-field">
                <span>
                  {"06)"}
                </span>
                <textarea name="notes" placeholder="Tell us more"></textarea>
              </label>
              <button type="submit" className="btn btn-black btn-lg">
                {"Submit on WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
