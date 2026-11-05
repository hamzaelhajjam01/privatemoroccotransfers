import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "About Us | Private Morocco Transfers" },
  description: "A Marrakech-based private driver service with fixed prices, licensed drivers and calm, comfortable journeys across Morocco.",
  alternates: {
    canonical: "https://www.privatemoroccotransfers.com/about",
  },
};

export default function AboutPage() {
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
              {"About Us"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"Local Team · Based in Marrakech"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"About Morocco"}
            <br />
            {"Private Driver"}
          </h1>
          <p className="hero-sub">
            {"A Marrakech-based private driver service built for international travelers. Fixed prices, professional drivers, no surprises."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "80px" }}>
            <div>
              <span className="section-label">
                {"Our Story"}
              </span>
              <h2 className="heading-lg mt-16">
                {"Built on transparency"}
              </h2>
              <p className="body-lg mt-24">
                {"We started Private Morocco Transfers because we were frustrated with how unclear and inconsistent transport prices were for international visitors. Taxi negotiations, unmarked rates, unexpected fees — none of it should exist in a professional service."}
              </p>
              <p className="mt-16" style={{ color: "var(--grey-700)" }}>
                {"Our model is simple: you tell us your route, we give you a fixed all-inclusive price on WhatsApp, your driver arrives on time. No meters. No surprises. No negotiating."}
              </p>
              <p className="mt-16" style={{ color: "var(--grey-700)" }}>
                {"We are based in Marrakech and operate across all of Morocco. Every driver on our platform is licensed, vetted and professional."}
              </p>
            </div>
            <div style={{ background: "var(--sand)", padding: "48px", borderLeft: "3px solid var(--gold)" }}>
              <span className="section-label">
                {"Our Commitment"}
              </span>
              <p className="heading-sm mt-16">
                {"\"Every traveler deserves to know exactly what they'll pay before they step into the car.\""}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--black)", padding: "0" }}>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-num">
              {"500+"}
            </div>
            <div className="stat-label">
              {"Routes Covered"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              {"10k+"}
            </div>
            <div className="stat-label">
              {"Happy Travelers"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              {"7"}
            </div>
            <div className="stat-label">
              {"Cities Covered"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              {"4"}
            </div>
            <div className="stat-label">
              {"Languages Spoken"}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"What We Stand For"}
              </span>
              <h2 className="heading-lg">
                {"Our values"}
              </h2>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-num">
                {"01"}
              </div>
              <h3 className="value-title">
                {"Transparency"}
              </h3>
              <p className="value-desc">
                {"Fixed prices agreed before the journey. No hidden fees, no meter, no negotiation at the end of your trip."}
              </p>
            </div>
            <div className="value-item">
              <div className="value-num">
                {"02"}
              </div>
              <h3 className="value-title">
                {"Punctuality"}
              </h3>
              <p className="value-desc">
                {"We track your flight and your schedule. Your driver is there when you need them — not 10 minutes late."}
              </p>
            </div>
            <div className="value-item">
              <div className="value-num">
                {"03"}
              </div>
              <h3 className="value-title">
                {"Safety"}
              </h3>
              <p className="value-desc">
                {"All drivers are licensed, insured and vetted. Our vehicles are regularly maintained and meet safety standards."}
              </p>
            </div>
            <div className="value-item">
              <div className="value-num">
                {"04"}
              </div>
              <h3 className="value-title">
                {"Local Knowledge"}
              </h3>
              <p className="value-desc">
                {"Our drivers know Morocco. The routes, the shortcuts, the best places to stop — real local expertise."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--sand)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Our Team"}
              </span>
              <h2 className="heading-lg">
                {"Meet the drivers"}
              </h2>
            </div>
          </div>
          <div className="drivers-grid">
            <div className="driver-card">
              <div className="driver-avatar">
                {"A"}
              </div>
              <h3 className="driver-name">
                {"Ahmed"}
              </h3>
              <p className="driver-city">
                {"Marrakech · Based"}
              </p>
              <p className="driver-langs">
                {"English · French · Arabic · Darija"}
              </p>
              <p className="driver-rating">
                {"★★★★★ 4.9 / 5"}
              </p>
            </div>
            <div className="driver-card">
              <div className="driver-avatar">
                {"Y"}
              </div>
              <h3 className="driver-name">
                {"Youssef"}
              </h3>
              <p className="driver-city">
                {"Casablanca · Based"}
              </p>
              <p className="driver-langs">
                {"English · French · Spanish"}
              </p>
              <p className="driver-rating">
                {"★★★★★ 4.8 / 5"}
              </p>
            </div>
            <div className="driver-card">
              <div className="driver-avatar">
                {"M"}
              </div>
              <h3 className="driver-name">
                {"Mohammed"}
              </h3>
              <p className="driver-city">
                {"Agadir · Based"}
              </p>
              <p className="driver-langs">
                {"English · French · Arabic"}
              </p>
              <p className="driver-rating">
                {"★★★★★ 4.9 / 5"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Ready to travel with us?"}
          </h2>
          <p>
            {"Get your fixed price on WhatsApp — no obligation, no payment needed."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I'd like to book a private driver in Morocco.">
              {"Book on WhatsApp"}
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
