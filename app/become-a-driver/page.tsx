import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Become a Partner Driver | Private Morocco Transfers" },
  description: "Professional driver in Morocco? Join our partner network and receive international bookings for airport transfers, day trips and tours.",
  alternates: {
    canonical: `${SITE_URL}/become-a-driver`,
  },
};

export default function BecomeADriverPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"We're Growing · Join Our Network"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Become a"}
            <br />
            {"Partner Driver"}
          </h1>
          <p className="hero-sub">
            {"Are you a professional driver based in Morocco? Join our network and receive a steady stream of international bookings."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "80px", alignItems: "start" }}>
            <div>
              <span className="section-label">
                {"Why Join"}
              </span>
              <div className="steps-grid" style={{ marginTop: "24px" }}>
                <div className="step-item">
                  <div className="step-num">
                    {"01"}
                  </div>
                  <h3 className="step-title">
                    {"International Clients"}
                  </h3>
                  <p className="step-body">
                    {"We handle marketing to international travelers so you can focus on driving. English-speaking clients, clear expectations, fixed prices agreed in advance."}
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-num">
                    {"02"}
                  </div>
                  <h3 className="step-title">
                    {"Consistent Work"}
                  </h3>
                  <p className="step-body">
                    {"Receive bookings from our platform. Build a regular client base with airport transfers, day trips and multi-day tours across Morocco."}
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-num">
                    {"03"}
                  </div>
                  <h3 className="step-title">
                    {"Simple Process"}
                  </h3>
                  <p className="step-body">
                    {"Everything is managed via WhatsApp. No complicated systems to learn. Accept a booking, show up on time, deliver excellent service."}
                  </p>
                </div>
              </div>
              <span className="section-label mt-40" style={{ display: "block" }}>
                {"Requirements"}
              </span>
              <ul style={{ marginTop: "16px", listStyle: "none", borderTop: "1px solid var(--rule)" }}>
                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", fontSize: "0.9rem", display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--gold)" }}>
                    {"✓"}
                  </span>
                  {"Valid Moroccan driver's license (minimum 3 years)"}
                </li>
                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", fontSize: "0.9rem", display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--gold)" }}>
                    {"✓"}
                  </span>
                  {"Vehicle less than 8 years old, well-maintained"}
                </li>
                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", fontSize: "0.9rem", display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--gold)" }}>
                    {"✓"}
                  </span>
                  {"Conversational English or French"}
                </li>
                <li style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", fontSize: "0.9rem", display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--gold)" }}>
                    {"✓"}
                  </span>
                  {"Professional appearance and attitude"}
                </li>
                <li style={{ padding: "12px 0", fontSize: "0.9rem", display: "flex", gap: "12px" }}>
                  <span style={{ color: "var(--gold)" }}>
                    {"✓"}
                  </span>
                  {"WhatsApp on your phone for communication"}
                </li>
              </ul>
            </div>
            <div>
              <span className="section-label">
                {"Apply to Join"}
              </span>
              <p style={{ color: "var(--grey-700)", margin: "16px 0 24px", fontSize: "0.9rem" }}>
                {"Send your application via WhatsApp and we'll be in touch within 48 hours."}
              </p>
              <button className="btn btn-whatsapp" style={{ width: "100%", justifyContent: "center" }} data-wa="Hello, I'd like to apply to become a partner driver with Private Morocco Transfers. My name is [name], I'm based in [city], I have a [vehicle] and [X] years of experience.">
                {"Apply on WhatsApp"}
              </button>
              <p style={{ fontSize: "0.8rem", color: "var(--grey-500)", marginTop: "12px", textAlign: "center" }}>
                {"Include your city, vehicle and years of experience"}
              </p>
              <div style={{ border: "1px solid var(--rule)", padding: "28px", marginTop: "32px" }}>
                <h3 className="heading-sm mb-16">
                  {"What happens next?"}
                </h3>
                <div className="faq-list">
                  <div className="faq-item">
                    <div className="faq-question">
                      {"1. WhatsApp introduction"}
                      <span className="faq-icon">
                        {"+"}
                      </span>
                    </div>
                    <div className="faq-answer">
                      {"Send us your application message. We'll introduce ourselves and ask a few questions about your vehicle and experience."}
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      {"2. Brief review"}
                      <span className="faq-icon">
                        {"+"}
                      </span>
                    </div>
                    <div className="faq-answer">
                      {"We review your application and vehicle. If everything looks good, we schedule a brief call."}
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      {"3. First booking"}
                      <span className="faq-icon">
                        {"+"}
                      </span>
                    </div>
                    <div className="faq-answer">
                      {"Once approved, you start receiving bookings. We handle everything else — the marketing, the pricing, the client communication."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
