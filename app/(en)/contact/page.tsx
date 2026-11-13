import type { Metadata } from "next";
import Link from "next/link";
import { buildMultilingualAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact & Booking | Private Morocco Transfers" },
  description: "Book a private driver in Morocco. Send your route and dates and get a fixed price on WhatsApp within 2 hours. No payment needed to book.",
  alternates: buildMultilingualAlternates("/contact", "en"),
};

export default function ContactPage() {
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
              {"Contact"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"We Reply in Under 2 Hours"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Book Your"}
            <br />
            {"Private Driver"}
          </h1>
          <p className="hero-sub">
            {"Fill in the form below and we'll confirm your fixed price on WhatsApp within 2 hours. No payment needed to make a booking."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="form-step-indicator">
                <div className="step-indicator-item active">
                  {"01 · Trip Details"}
                </div>
                <div className="step-indicator-item">
                  {"02 · Your Info"}
                </div>
                <div className="step-indicator-item">
                  {"03 · Confirm"}
                </div>
              </div>
              <form id="contactForm">
                <div id="step-1" className="form-step active">
                  <h2 className="heading-sm mb-24">
                    {"Where are you going?"}
                  </h2>
                  <label className="field-label" htmlFor="cf-from">
                    {"From"}
                  </label>
                  <input className="field-input" id="cf-from" type="text" placeholder="e.g. Marrakech Airport (RAK)" />
                  <label className="field-label" htmlFor="cf-to">
                    {"To"}
                  </label>
                  <input className="field-input" id="cf-to" type="text" placeholder="e.g. Medina, Marrakech" />
                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="cf-date">
                        {"Date"}
                      </label>
                      <input className="field-input" id="cf-date" type="date" />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="cf-time">
                        {"Time"}
                      </label>
                      <input className="field-input" id="cf-time" type="time" />
                    </div>
                  </div>
                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="cf-vehicle">
                        {"Vehicle Type"}
                      </label>
                      <select className="field-input calc-select" id="cf-vehicle">
                        <option>
                          {"Sedan (1–3 pax)"}
                        </option>
                        <option>
                          {"SUV (1–5 pax)"}
                        </option>
                        <option>
                          {"Minivan (1–8 pax)"}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="field-label" htmlFor="cf-pax">
                        {"Passengers"}
                      </label>
                      <select className="field-input calc-select" id="cf-pax">
                        <option>
                          {"1"}
                        </option>
                        <option>
                          {"2"}
                        </option>
                        <option>
                          {"3"}
                        </option>
                        <option>
                          {"4"}
                        </option>
                        <option>
                          {"5"}
                        </option>
                        <option>
                          {"6"}
                        </option>
                        <option>
                          {"7"}
                        </option>
                        <option>
                          {"8"}
                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="button" className="btn btn-black btn-lg" style={{ width: "100%", justifyContent: "center" }} data-step-cur="1" data-step-next="2">
                    {"Next — Your Details →"}
                  </button>
                </div>
                <div id="step-2" className="form-step">
                  <h2 className="heading-sm mb-24">
                    {"Your contact details"}
                  </h2>
                  <label className="field-label" htmlFor="cf-name">
                    {"Full Name"}
                  </label>
                  <input className="field-input" id="cf-name" type="text" placeholder="Your name" />
                  <label className="field-label" htmlFor="cf-email">
                    {"Email"}
                  </label>
                  <input className="field-input" id="cf-email" type="email" placeholder="your@email.com" />
                  <label className="field-label" htmlFor="cf-phone">
                    {"Phone / WhatsApp"}
                  </label>
                  <input className="field-input" id="cf-phone" type="tel" placeholder="+1 234 567 890" />
                  <label className="field-label" htmlFor="cf-flight">
                    {"Flight Number (if airport pickup)"}
                  </label>
                  <input className="field-input" id="cf-flight" type="text" placeholder="e.g. AT 123" />
                  <label className="field-label" htmlFor="cf-notes">
                    {"Special Requests"}
                  </label>
                  <textarea className="field-input" id="cf-notes" rows={3} style={{ resize: "vertical" }} placeholder="Child seat, extra luggage, specific stops..."></textarea>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button type="button" className="btn btn-outline" data-step-cur="2" data-step-back="1">
                      {"← Back"}
                    </button>
                    <button type="button" className="btn btn-black btn-lg" style={{ flex: "1", justifyContent: "center" }} data-step-cur="2" data-step-next="3">
                      {"Review Booking →"}
                    </button>
                  </div>
                </div>
                <div id="step-3" className="form-step">
                  <h2 className="heading-sm mb-24">
                    {"Confirm your booking"}
                  </h2>
                  <div className="form-confirm-card">
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"From"}
                      </span>
                      <span className="confirm-value" id="conf-cf-from">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"To"}
                      </span>
                      <span className="confirm-value" id="conf-cf-to">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"Date"}
                      </span>
                      <span className="confirm-value" id="conf-cf-date">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"Vehicle"}
                      </span>
                      <span className="confirm-value" id="conf-cf-vehicle">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"Passengers"}
                      </span>
                      <span className="confirm-value" id="conf-cf-pax">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"Name"}
                      </span>
                      <span className="confirm-value" id="conf-cf-name">
                        {"—"}
                      </span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-label">
                        {"Phone"}
                      </span>
                      <span className="confirm-value" id="conf-cf-phone">
                        {"—"}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--grey-500)", marginBottom: "20px" }}>
                    {"By confirming, we'll open WhatsApp with your booking details pre-filled. No payment needed — we'll confirm your fixed price on WhatsApp."}
                  </p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button type="button" className="btn btn-outline" data-step-cur="3" data-step-back="2">
                      {"← Edit"}
                    </button>
                    <button type="button" id="submitBooking" className="btn btn-whatsapp" style={{ flex: "1", justifyContent: "center" }}>
                      {"Confirm on WhatsApp"}
                    </button>
                  </div>
                </div>
                <div id="step-success" className="form-step" style={{ textAlign: "center", padding: "40px 0" }}>
                  <h3 className="heading-md">
                    {"Booking request sent!"}
                  </h3>
                  <p style={{ color: "var(--grey-700)", marginTop: "12px" }}>
                    {"We'll confirm your fixed price on WhatsApp within 2 hours."}
                  </p>
                  <Link href="/" className="btn btn-gold mt-40" style={{ display: "inline-flex" }}>
                    {"Back to Home"}
                  </Link>
                </div>
              </form>
            </div>
            <div>
              <h2 className="heading-sm mb-24">
                {"Get in touch"}
              </h2>
              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px", marginBottom: "32px" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey-500)", marginBottom: "8px" }}>
                  {"WhatsApp"}
                </p>
                <button className="btn btn-whatsapp" style={{ width: "auto", padding: "14px 28px" }} data-wa="Hello, I'd like to book a private driver in Morocco.">
                  {"Chat on WhatsApp"}
                </button>
                <p style={{ fontSize: "0.8rem", color: "var(--grey-500)", marginTop: "8px" }}>
                  {"Fastest way to get a quote"}
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px", marginBottom: "32px" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey-500)", marginBottom: "8px" }}>
                  {"Email"}
                </p>
                <p style={{ fontSize: "1rem" }}>
                  {"contact@privatemoroccotransfers.com"}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--grey-500)" }}>
                  {"We reply within 2 hours"}
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px", marginBottom: "32px" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey-500)", marginBottom: "8px" }}>
                  {"Base"}
                </p>
                <p style={{ fontSize: "1rem" }}>
                  {"Marrakech, Morocco"}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--grey-500)" }}>
                  {"Operating across all of Morocco"}
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grey-500)", marginBottom: "12px" }}>
                  {"Languages"}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span className="feature-tag">
                    {"English"}
                  </span>
                  <span className="feature-tag">
                    {"Français"}
                  </span>
                  <span className="feature-tag">
                    {"العربية"}
                  </span>
                  <span className="feature-tag">
                    {"Español"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
