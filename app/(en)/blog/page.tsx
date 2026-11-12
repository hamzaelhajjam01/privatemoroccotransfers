import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Morocco Travel Blog & Driver Guides | Private Morocco Transfers" },
  description: "Expert travel guides for Morocco. Private driver tips, route guides, airport advice and Morocco travel planning from local experts.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              {"Blog"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"Travel Guides · Driver Tips · Morocco"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Morocco"}
            <br />
            {"Travel Blog"}
          </h1>
          <p className="hero-sub">
            {"Expert guides to traveling in Morocco with a private driver. Routes, prices, tips and local knowledge from our team."}
          </p>
        </div>
      </div>
      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <button className="filter-btn active" data-filter="all">
              {"All Articles"}
            </button>
            <button className="filter-btn" data-filter="route">
              {"Route Guides"}
            </button>
            <button className="filter-btn" data-filter="faq">
              {"Driver FAQ"}
            </button>
            <button className="filter-btn" data-filter="tips">
              {"Morocco Tips"}
            </button>
            <button className="filter-btn" data-filter="airport">
              {"Airport Guides"}
            </button>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            <div className="blog-card" data-category="tips">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/getting-around-morocco.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Transport · 2026 Guide"}
                </div>
              </div>
              <span className="blog-tag">
                {"Morocco Tips"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/getting-around-morocco">
                  {"Getting Around Morocco in 2026: Train, Bus, Grand Taxi or Private Driver?"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"High-speed Al Boraq trains, CTM coaches, grand taxis, or a dedicated chauffeur. Full breakdown of costs, comfort, and luggage space."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-11-06"}
                </span>
                <span>
                  {"9 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="tips">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/fes-tanneries-guide.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Fes · Culture"}
                </div>
              </div>
              <span className="blog-tag">
                {"Morocco Tips"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/fes-tanneries-guide">
                  {"Visiting the Fes Chouara Tanneries: 2026 Guide, Scams to Avoid & Day Trips"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"The mint leaf ritual, rooftop terraces, treading vats, avoiding faux guides, and booking day trips to Volubilis, Meknes, and Chefchaouen."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-11-06"}
                </span>
                <span>
                  {"8 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="tips">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/grand-taxi-vs-private-driver.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Transport · Morocco"}
                </div>
              </div>
              <span className="blog-tag">
                {"Morocco Tips"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/grand-taxi-vs-private-driver">
                  {"Grand Taxi vs Private Driver in Morocco: The 2026 Honest Comparison"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"Luggage limits, shared seating, air conditioning, and price breakdowns. Everything you need to decide between a grand taxi and a private chauffeur."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-11-06"}
                </span>
                <span>
                  {"7 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="route">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/marrakech-essaouira.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Marrakech · Essaouira"}
                </div>
              </div>
              <span className="blog-tag">
                {"Route Guides"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/marrakech-essaouira">
                  {"Marrakech to Essaouira by Private Driver: Complete 2026 Guide"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"The most scenic route in Morocco. Everything you need to know — distance, duration, price, and what to see along the way."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-11-01"}
                </span>
                <span>
                  {"5 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="faq">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/driver-cost.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Pricing · Morocco"}
                </div>
              </div>
              <span className="blog-tag">
                {"Driver FAQ"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/driver-cost">
                  {"How Much Does a Private Driver Cost in Morocco? Full 2026 Price Guide"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"A transparent breakdown of private driver costs across Morocco — per km, per day and per route."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-10-28"}
                </span>
                <span>
                  {"6 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="tips">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/day-trips.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Day Trips · Marrakech"}
                </div>
              </div>
              <span className="blog-tag">
                {"Morocco Tips"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/day-trips">
                  {"Top 7 Day Trips from Marrakech with a Private Driver"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"Atlas Mountains, Essaouira, Ourika Valley and more — the best day excursions from Marrakech with your own driver."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-10-20"}
                </span>
                <span>
                  {"7 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="route">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/sahara-merzouga.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Sahara · Merzouga"}
                </div>
              </div>
              <span className="blog-tag">
                {"Route Guides"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/sahara-merzouga">
                  {"Marrakech to Merzouga Sahara: Private Driver Complete Guide"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"Everything you need to plan the legendary desert route from Marrakech to Merzouga, including price, duration and highlights."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-10-15"}
                </span>
                <span>
                  {"8 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="airport">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/airport-transfer.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Airport · Marrakech"}
                </div>
              </div>
              <span className="blog-tag">
                {"Airport Guides"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog/airport-transfer">
                  {"Marrakech Airport Transfer: What to Expect When You Land"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"First time at Marrakech Menara Airport? Here's exactly what to do from the moment you land — including transfer options and prices."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-10-10"}
                </span>
                <span>
                  {"5 min read"}
                </span>
              </div>
            </div>
            <div className="blog-card" data-category="tips">
              <div className="blog-img" style={{ backgroundImage: "url(/img/blog/getting-around.webp)" }}>
                <div className="blog-img-label" style={{ display: "none" }}>
                  {"Morocco · Travel Tips"}
                </div>
              </div>
              <span className="blog-tag">
                {"Morocco Tips"}
              </span>
              <h3 className="blog-title">
                <Link href="/blog">
                  {"Getting Around Morocco: Trains, Buses, Taxis or Private Driver?"}
                </Link>
              </h3>
              <p className="blog-excerpt">
                {"A practical comparison of transport options in Morocco to help you choose the right way to travel between cities."}
              </p>
              <div className="blog-meta">
                <span>
                  {"2026-10-05"}
                </span>
                <span>
                  {"6 min read"}
                </span>
              </div>
            </div>
          </div>
          <div className="pagination">
            <div className="page-btn active">
              {"1"}
            </div>
            <div className="page-btn">
              {"2"}
            </div>
            <div className="page-btn">
              {"→"}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--sand)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Questions"}
              </span>
              <h2 className="heading-lg">
                {"Frequently asked"}
              </h2>
            </div>
          </div>
          <div className="faq-list" style={{ maxWidth: "800px" }}>
            <div className="faq-item">
              <div className="faq-question">
                {"Should I hire a private driver or rent a car in Morocco?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"A private driver is ideal for long inter-city routes, mountain roads, desert tracks and anyone who prefers not to navigate Moroccan traffic. Self-drive works well for coastal routes and shorter stays where you want full flexibility."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"How much does a private driver cost per day in Morocco?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Day rates for a licensed private driver in Morocco typically range from €90 to €160 (approx. 1,000 to 1,750 MAD) for city chauffeur service and short excursions, and €140 to €220 per day for multi-day touring circuits all-inclusive (driver fee, fuel, tolls, and insurance)."}
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                {"Is it safe to travel by private driver in Morocco?"}
                <span className="faq-icon">
                  {"+"}
                </span>
              </div>
              <div className="faq-answer">
                {"Yes. All our drivers are licensed, professional and experienced. Traveling by private driver is one of the safest and most comfortable ways to get around Morocco."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
