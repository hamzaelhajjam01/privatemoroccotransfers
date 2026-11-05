import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Support & Help Center | Private Morocco Transfers" },
  description: "Help with bookings, prices, cancellations, airport transfers and vehicles. Contact our team on WhatsApp.",
};

export default function SupportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Support &"}
            <br />
            {"Help Center"}
          </h1>
          <p className="hero-sub">
            {"Find answers to common questions, or contact us directly on WhatsApp."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Browse by Topic"}
              </span>
              <h2 className="heading-lg">
                {"How can we help?"}
              </h2>
            </div>
          </div>
          <div className="grid-3" style={{ marginBottom: "60px" }}>
            <Link href="/faq" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Booking"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"How to make a booking, lead times, modifications"}
              </p>
            </Link>
            <Link href="/faq" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Pricing"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"Fixed prices, what's included, payment methods"}
              </p>
            </Link>
            <Link href="/cancellation" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Cancellations"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"Free cancellation policy, refunds, changes"}
              </p>
            </Link>
            <Link href="/faq" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Airport Transfers"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"Flight tracking, waiting time, meeting point"}
              </p>
            </Link>
            <Link href="/fleet" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Vehicles"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"Fleet types, capacity, child seats, luggage"}
              </p>
            </Link>
            <Link href="/contact" style={{ display: "block", border: "1px solid var(--rule)", padding: "32px", textAlign: "center", transition: "border-color 0.2s" }} className="topic-card">
              <h3 className="heading-sm">
                {"Contact Us"}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginTop: "8px" }}>
                {"WhatsApp, email, response times"}
              </p>
            </Link>
          </div>
          <div style={{ background: "var(--black)", padding: "48px", textAlign: "center" }}>
            <h2 className="heading-md" style={{ color: "var(--white)" }}>
              {"Can't find your answer?"}
            </h2>
            <p style={{ color: "var(--grey-500)", marginTop: "12px" }}>
              {"Our team responds on WhatsApp within 2 hours — usually much faster."}
            </p>
            <button className="btn btn-gold btn-lg mt-24" data-wa="Hello, I need support with my booking.">
              {"Message Us on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
