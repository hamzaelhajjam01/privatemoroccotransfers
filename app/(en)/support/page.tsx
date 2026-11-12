import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Support & Help Center | Private Morocco Transfers" },
  description: "Help with bookings, prices, cancellations, airport transfers and vehicles. Contact our team on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/support`,
  },
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
          <div style={{ marginBottom: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ border: "1px solid var(--rule)", padding: "28px", background: "var(--sand)" }}>
              <span className="section-label">Airport &amp; Hotel Pickups</span>
              <h3 className="heading-sm mt-12">Flight Delay &amp; 45-Min Grace Period</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6, marginTop: "10px" }}>
                Share your flight number when booking your airport transfer in Marrakech, Casablanca, Agadir, Fes, or Tangier. Our dispatch monitors live arrival times so your driver waits outside customs with a printed name sign at no extra charge, even if your plane is delayed.
              </p>
            </div>
            <div style={{ border: "1px solid var(--rule)", padding: "28px", background: "var(--sand)" }}>
              <span className="section-label">Changes &amp; Cancellations</span>
              <h3 className="heading-sm mt-12">Free Modifications Up to 24 Hours Prior</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6, marginTop: "10px" }}>
                Plans evolve. Message us on WhatsApp at least 24 hours before pickup to shift departure times, swap your riad or hotel address, or add child booster seats for free. Bookings under €300 (3,300 MAD) carry zero advance deposit and are paid in cash on arrival.
              </p>
            </div>
            <div style={{ border: "1px solid var(--rule)", padding: "28px", background: "var(--sand)" }}>
              <span className="section-label">On-the-Road Support</span>
              <h3 className="heading-sm mt-12">24/7 Direct Dispatch Assistance</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6, marginTop: "10px" }}>
                Every chauffeur coordinates directly with our English, French, and Arabic-speaking dispatch desk in Marrakech. Need an impromptu pharmacy stop, SIM card stop, or luggage porter assistance at a pedestrian medina gate? Our team resolves requests immediately via WhatsApp or email at support@privatemoroccotransfers.com.
              </p>
            </div>
          </div>
          <div style={{ border: "1px solid var(--rule)", padding: "32px", marginBottom: "48px" }}>
            <span className="section-label">Driver Standards &amp; Guarantee</span>
            <h2 className="heading-md mt-12" style={{ marginBottom: "14px" }}>
              Fixed All-Inclusive Pricing &amp; Peace-of-Mind Support
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "12px" }}>
              Every route quoted by Private Morocco Transfers is locked in advance per vehicle—never per passenger—and includes motorway tolls, fuel, air conditioning, airport parking, and door-to-door luggage assistance. Whether you book a late-night arrival at Marrakech Menara (RAK) or Casablanca Mohammed V (CMN), a cross-country ride to Fes, Tangier, or Chefchaouen, or a multi-day Sahara expedition, our team sends your driver&apos;s name, WhatsApp contact, and vehicle plate ahead of pickup.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              If your travel plans shift after landing or your group requires a larger Mercedes Vito van or certified infant seat, contact dispatch anytime on WhatsApp for priority itinerary adjustments without hidden surcharges.
            </p>
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
