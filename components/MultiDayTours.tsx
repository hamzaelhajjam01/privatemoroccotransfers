import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { getLocalizedPlace, type LanguageCode } from "@/lib/i18n";
import { MULTI_DAY_COPY, MULTI_DAY_LANGS, MULTI_DAY_TOURS, multiDayPath } from "@/lib/multi-day-tours";

export function multiDayMetadata(lang: LanguageCode): Metadata {
  const c = MULTI_DAY_COPY[lang];
  const url = `${SITE_URL}${multiDayPath(lang)}`;
  const languages: Record<string, string> = {};
  for (const l of MULTI_DAY_LANGS) languages[l] = `${SITE_URL}${multiDayPath(l)}`;
  languages["x-default"] = `${SITE_URL}${multiDayPath("en")}`;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDesc,
    alternates: { canonical: url, languages },
    openGraph: { title: c.metaTitle, description: c.metaDesc, url, siteName: SITE_NAME, type: "website" },
  };
}

const NUM: Record<LanguageCode, string> = {
  en: "en-GB", fr: "fr-FR", es: "es-ES", it: "it-IT", de: "de-DE", ar: "en-GB", pt: "pt-PT", nl: "nl-NL",
};

export default function MultiDayTours({ lang }: { lang: LanguageCode }) {
  const c = MULTI_DAY_COPY[lang];
  const prefix = lang === "en" ? "" : `/${lang}`;
  const homeUrl = prefix || "/";
  const calcUrl = `${prefix}/calculator`;
  const pageUrl = `${SITE_URL}${multiDayPath(lang)}`;
  const fmt = (n: number) => n.toLocaleString(NUM[lang]);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.home, item: `${SITE_URL}${homeUrl === "/" ? "" : homeUrl}` },
      { "@type": "ListItem", position: 2, name: c.breadcrumb, item: pageUrl },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.schemaName,
    description: c.schemaDesc,
    url: pageUrl,
    inLanguage: lang,
    provider: { "@type": "LocalBusiness", name: SITE_NAME, telephone: `+${WHATSAPP_NUMBER}`, url: SITE_URL },
    areaServed: { "@type": "Country", name: "Morocco" },
    offers: {
      "@type": "Offer",
      price: Math.min(...MULTI_DAY_TOURS.map((t) => t.priceEur)),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  return (
    <div dir={lang === "ar" ? "rtl" : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={homeUrl}>{c.home}</Link>
            <span className="breadcrumb-sep">{"/"}</span>
            <span>{c.breadcrumb}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {c.h1}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">{c.sectionTag}</span>
              <h2 className="heading-lg">{c.sectionH2}</h2>
            </div>
            <Link href={calcUrl} className="btn btn-outline">
              {c.calc}
            </Link>
          </div>
          <div className="listing-grid">
            {MULTI_DAY_TOURS.map((t) => (
              <div className="listing-card" key={t.title.en}>
                <div className="listing-img" style={{ backgroundImage: `url(${t.img})` }}>
                  <span className="listing-badge">{t.days[lang]}</span>
                  <span className="listing-fixed-badge">{c.fixed}</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">{t.title[lang]}</h3>
                  <div className="listing-features">
                    {t.places.map((p) => (
                      <span className="feature-tag" key={p}>
                        {getLocalizedPlace(p, lang)}
                      </span>
                    ))}
                  </div>
                  <ul className="listing-includes">
                    {t.includes[lang].map((inc) => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">{c.from}</div>
                      <div className="listing-price-amount">
                        {`€${fmt(t.priceEur)} (${fmt(t.priceMad)} MAD)`}
                      </div>
                      <div className="listing-price-unit">{c.perVehicle}</div>
                    </div>
                    <button className="btn btn-black" data-wa={t.wa[lang]}>
                      {c.book}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--grey-500)" }}>
              {c.notSee}
              <Link href={calcUrl} style={{ color: "var(--gold-deep)", fontWeight: "500" }}>
                {c.calcLink}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{c.ctaH2}</h2>
          <p>{c.ctaP}</p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa={c.ctaWaText}>
              {c.ctaWa}
            </button>
            <Link href={calcUrl} className="btn btn-outline-white btn-lg">
              {c.calc}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
