import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found | Private Morocco Transfers",
  robots: { index: false },
};

/** 404 for URLs that match no route (the site has one root layout per language). */
export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <div className="page-hero">
        <div className="container">
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {"Page not found"}
          </h1>
          <p className="hero-sub">{"This page doesn't exist or has moved. Try one of these instead."}</p>
          <div className="cta-buttons" style={{ marginTop: "24px" }}>
            <Link href="/" className="btn btn-gold">
              {"Home"}
            </Link>
            <Link href="/transfers" className="btn btn-outline-white">
              {"All transfers"}
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
