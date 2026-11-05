import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Private Morocco Transfers" },
  description: "How Private Morocco Transfers collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
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
              {"Privacy Policy"}
            </span>
          </div>
          <h1 className="heading-xl mt-24" style={{ color: "var(--white)" }}>
            {"Privacy Policy"}
          </h1>
          <p className="hero-sub">
            {"How we handle your personal data."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <h2>
              {"1. Data We Collect"}
            </h2>
            <p>
              {"When you make a booking, we collect your name, phone number, email address and travel details. This information is used solely to fulfill your booking."}
            </p>
            <h2>
              {"2. How We Use Your Data"}
            </h2>
            <p>
              {"Your data is used to confirm your booking, communicate with you about your journey, and improve our service. We do not sell your data to third parties."}
            </p>
            <h2>
              {"3. WhatsApp Communications"}
            </h2>
            <p>
              {"Our primary communication channel is WhatsApp. By contacting us on WhatsApp, you agree that we may store our conversation for service purposes."}
            </p>
            <h2>
              {"4. Data Retention"}
            </h2>
            <p>
              {"We retain booking records for 12 months. You may request deletion of your data at any time by contacting us."}
            </p>
            <h2>
              {"5. Your Rights"}
            </h2>
            <p>
              {"You have the right to access, correct or delete your personal data. Contact us at contact@privatemoroccotransfers.com to exercise these rights."}
            </p>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Questions?"}
          </h2>
          <p>
            {"Contact us on WhatsApp — we reply within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I have a question about your policies.">
              {"Ask on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
