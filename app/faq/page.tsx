import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "FAQ — Frequently Asked Questions | Private Morocco Transfers" },
  alternates: {
    canonical: "https://www.privatemoroccotransfers.com/faq",
  },
  description: "Answers about booking a private driver in Morocco: fixed prices, payment, cancellation, airport pickups, drivers and vehicles.",
};


const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    "name": "How do I get a price?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Fill in the booking widget on our homepage or send us a WhatsApp message with your route, date, and number of passengers. We reply with a fixed all-inclusive price within 2 hours."
    }
  },
  {
    "@type": "Question",
    "name": "How far in advance should I book?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We recommend booking at least 24 hours ahead. Same-day bookings are possible subject to availability — contact us on WhatsApp and we'll confirm immediately."
    }
  },
  {
    "@type": "Question",
    "name": "Do I need to pay a deposit?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Transfers and day trips under €300 require zero deposit (pay cash in EUR or MAD directly to your driver upon arrival). For multi-day itineraries or services exceeding €300, a transparent 30% deposit secures your vehicle."
    }
  },
  {
    "@type": "Question",
    "name": "Can I book a round trip?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Round-trip bookings are available with a 10% discount on the total price. The return trip can be same-day or on a different date."
    }
  },
  {
    "@type": "Question",
    "name": "Is there free cancellation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Cancel free of charge up to 48 hours before your scheduled pickup. Cancellations within 48 hours may be subject to a fee."
    }
  },
  {
    "@type": "Question",
    "name": "Are prices fixed or metered?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All prices are completely fixed and agreed in advance. There is no meter running and no unexpected charges at the end of your journey."
    }
  },
  {
    "@type": "Question",
    "name": "What is included in the price?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Every price includes the driver, the vehicle, fuel, all motorway tolls, and air conditioning. For airport transfers, 45 minutes of free waiting is included."
    }
  },
  {
    "@type": "Question",
    "name": "Can I pay in Euros?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. We accept Moroccan Dirhams (MAD) and Euros. Our calculator shows prices in both currencies."
    }
  },
  {
    "@type": "Question",
    "name": "Do drivers speak English?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. All our drivers speak English and French. Most also speak Spanish. Arabic and Darija are available too."
    }
  },
  {
    "@type": "Question",
    "name": "Are drivers licensed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. All drivers on our platform are fully licensed, professionally insured and have been vetted for quality and reliability."
    }
  },
  {
    "@type": "Question",
    "name": "What vehicles do you use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We operate sedans for 1–3 passengers, SUVs for 1–5 passengers, and minivans for 1–8 passengers. All vehicles are air-conditioned, clean and well-maintained."
    }
  },
  {
    "@type": "Question",
    "name": "Can I request a specific vehicle?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Specify your vehicle preference when requesting a quote and we'll confirm availability and price."
    }
  },
  {
    "@type": "Question",
    "name": "What happens if my flight is delayed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We monitor your flight in real time. If your flight is delayed, your driver adjusts. Up to 45 minutes of waiting is included free of charge."
    }
  },
  {
    "@type": "Question",
    "name": "Where will my driver meet me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your driver will be in the arrivals hall with a sign showing your name. You also receive your driver's phone number in advance."
    }
  },
  {
    "@type": "Question",
    "name": "Which airports do you cover?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All major Moroccan airports: Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fes (FEZ), Tangier (TNG), Rabat (RBA) and Essaouira (ESU)."
    }
  }
]
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
              {"FAQ"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Frequently Asked"}
            <br />
            {"Questions"}
          </h1>
          <p className="hero-sub">
            {"Everything you need to know about booking a private driver in Morocco."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "80px", alignItems: "start" }}>
            <div>
              <span className="section-label">
                {"Booking"}
              </span>
              <div className="faq-list mt-24">
                <div className="faq-item">
                  <div className="faq-question">
                    {"How do I get a price?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Fill in the booking widget on our homepage or send us a WhatsApp message with your route, date, and number of passengers. We reply with a fixed all-inclusive price within 2 hours."}
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
                    {"We recommend booking at least 24 hours ahead. Same-day bookings are possible subject to availability — contact us on WhatsApp and we'll confirm immediately."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Do I need to pay a deposit?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Transfers and day trips under €300 require zero deposit (pay cash in EUR or MAD directly to your driver upon arrival). For multi-day itineraries or services exceeding €300, a transparent 30% deposit secures your vehicle."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I book a round trip?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. Round-trip bookings are available with a 10% discount on the total price. The return trip can be same-day or on a different date."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Is there free cancellation?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. Cancel free of charge up to 48 hours before your scheduled pickup. Cancellations within 48 hours may be subject to a fee."}
                  </div>
                </div>
              </div>
              <span className="section-label mt-40" style={{ display: "block" }}>
                {"Pricing"}
              </span>
              <div className="faq-list mt-24">
                <div className="faq-item">
                  <div className="faq-question">
                    {"Are prices fixed or metered?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"All prices are completely fixed and agreed in advance. There is no meter running and no unexpected charges at the end of your journey."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"What is included in the price?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Every price includes the driver, the vehicle, fuel, all motorway tolls, and air conditioning. For airport transfers, 45 minutes of free waiting is included."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I pay in Euros?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We accept Moroccan Dirhams (MAD) and Euros. Our calculator shows prices in both currencies."}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="section-label">
                {"Drivers & Vehicles"}
              </span>
              <div className="faq-list mt-24">
                <div className="faq-item">
                  <div className="faq-question">
                    {"Do drivers speak English?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. All our drivers speak English and French. Most also speak Spanish. Arabic and Darija are available too."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Are drivers licensed?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. All drivers on our platform are fully licensed, professionally insured and have been vetted for quality and reliability."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"What vehicles do you use?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"We operate sedans for 1–3 passengers, SUVs for 1–5 passengers, and minivans for 1–8 passengers. All vehicles are air-conditioned, clean and well-maintained."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I request a specific vehicle?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. Specify your vehicle preference when requesting a quote and we'll confirm availability and price."}
                  </div>
                </div>
              </div>
              <span className="section-label mt-40" style={{ display: "block" }}>
                {"Airport Transfers"}
              </span>
              <div className="faq-list mt-24">
                <div className="faq-item">
                  <div className="faq-question">
                    {"What happens if my flight is delayed?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"We monitor your flight in real time. If your flight is delayed, your driver adjusts. Up to 45 minutes of waiting is included free of charge."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Where will my driver meet me?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Your driver will be in the arrivals hall with a sign showing your name. You also receive your driver's phone number in advance."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Which airports do you cover?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"All major Moroccan airports: Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fes (FEZ), Tangier (TNG), Rabat (RBA) and Essaouira (ESU)."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Still have a question?"}
          </h2>
          <p>
            {"Message us on WhatsApp — we respond within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I have a question about booking a private driver in Morocco.">
              {"Ask on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
