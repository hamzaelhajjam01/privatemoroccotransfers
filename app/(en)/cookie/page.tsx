import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | Private Morocco Transfers" },
  description: "How Private Morocco Transfers uses cookies on this website.",
  alternates: {
    canonical: `${SITE_URL}/cookie`,
  },
};

export default function CookiePage() {
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
              {"Cookie Policy"}
            </span>
          </div>
          <h1 className="heading-xl mt-24" style={{ color: "var(--white)" }}>
            {"Cookie Policy"}
          </h1>
          <p className="hero-sub">
            {"How we use cookies on this website."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <h2>
              {"What Are Cookies"}
            </h2>
            <p>
              {"Cookies are small text files stored in your browser when you visit a website. They help the site remember your preferences and improve your experience."}
            </p>
            <h2>
              {"Cookies We Use"}
            </h2>
            <p>
              {"We use a single preference cookie to remember whether you've accepted our cookie banner. We do not use tracking, advertising or analytics cookies."}
            </p>
            <h2>
              {"Managing Cookies"}
            </h2>
            <p>
              {"You can disable cookies in your browser settings at any time. Note that disabling cookies may affect some site functionality."}
            </p>
            <h2>
              {"Changes to This Policy"}
            </h2>
            <p>
              {"We may update this cookie policy from time to time. The current version is always available on this page."}
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
