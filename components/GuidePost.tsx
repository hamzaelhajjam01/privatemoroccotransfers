import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared layout for destination and route guides in the journal.
 * Matches the markup of the older hand-written posts (post-hero, post-body,
 * post-cta-inline, related cards) so the guides look the same, while each
 * guide file only holds its words. FAQs are rendered on the page and exported
 * separately so the blog route can add FAQPage structured data.
 */
export type GuideFaq = { q: string; a: string };
export type GuideRelated = { href: string; img: string; tag: string; title: string; excerpt: string; date: string };
export type GuideProps = {
  category: string;
  h1: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCredit?: { name: string; url: string };
  children: ReactNode;
  faqs: GuideFaq[];
  cta: { title: string; sub: string; routeHref: string; routeLabel: string; wa: string };
  related: GuideRelated[];
};

export default function GuidePost({ category, h1, date, readTime, image, imageAlt, imageCredit, children, faqs, cta, related }: GuideProps) {
  return (
    <>
      <div className="post-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{"Home"}</Link>
            <span className="breadcrumb-sep">{"/"}</span>
            <Link href="/blog">{"Blog"}</Link>
            <span className="breadcrumb-sep">{"/"}</span>
            <span>{category}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>{category}</span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)", maxWidth: "900px" }}>{h1}</h1>
          <div className="post-meta">
            <span>{date}</span>
            <span>{readTime}</span>
            <div className="share-row">
              <button className="share-btn" data-share="whatsapp">{"Share on WhatsApp"}</button>
              <button className="share-btn" data-share="copy">{"Copy Link"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="ph post-feature" role="img" aria-label={imageAlt} style={{ backgroundImage: `url(${image})` }}></div>
        {imageCredit && (
          <p style={{ margin: "8px 0 0", fontSize: "13px", color: "var(--muted)" }}>
            {"Photo: "}
            <a href={imageCredit.url} rel="noopener" target="_blank" style={{ color: "inherit" }}>{imageCredit.name}</a>
            {" on Unsplash"}
          </p>
        )}
      </div>
      <div className="post-body">
        <div className="container-sm">
          {children}
          {faqs.length > 0 && (
            <>
              <h2>{"Quick answers"}</h2>
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="post-cta-inline" style={{ maxWidth: "800px", margin: "0 auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p style={{ margin: 0, fontWeight: 500 }}>{cta.title}</p>
          <span style={{ fontSize: "14px", color: "var(--muted)" }}>{cta.sub}</span>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href={cta.routeHref} className="btn btn-white" style={{ minWidth: "0", padding: "12px 20px" }}>{cta.routeLabel}</Link>
          <button className="btn btn-gold" style={{ minWidth: "0", padding: "12px 20px" }} data-wa={cta.wa}>{"Book on WhatsApp"}</button>
        </div>
      </div>
      <section className="section" style={{ background: "var(--grey-100)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">{"Keep Reading"}</span>
              <h2 className="heading-lg">{"Related articles"}</h2>
            </div>
          </div>
          <div className="blog-grid">
            {related.map((r) => (
              <div className="blog-card" key={r.href}>
                <div className="blog-img" style={{ backgroundImage: `url(${r.img})` }}></div>
                <span className="blog-tag">{r.tag}</span>
                <h3 className="blog-title"><Link href={r.href}>{r.title}</Link></h3>
                <p className="blog-excerpt">{r.excerpt}</p>
                <div className="blog-meta"><span>{r.date}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
