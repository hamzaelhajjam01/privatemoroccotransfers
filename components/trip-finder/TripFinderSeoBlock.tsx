import { LanguageCode } from "@/lib/i18n";
import {
  TRIP_FINDER_SEO_DATA,
  getTripFinderJsonLd,
  CITIES_SERVED,
} from "@/lib/trip-finder-seo";

export default function TripFinderSeoBlock({ lang }: { lang: LanguageCode }) {
  const data = TRIP_FINDER_SEO_DATA[lang] || TRIP_FINDER_SEO_DATA.en;
  const jsonLd = getTripFinderJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="sr-only" aria-hidden="false">
        <h1>{data.h1}</h1>
        <p>{data.desc}</p>
        <h2>{data.appTitle}</h2>
        <p>{data.appDesc}</p>
        <h3>Private Chauffeur Destinations in Morocco</h3>
        <ul>
          {CITIES_SERVED.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <h3>Frequently Asked Questions</h3>
        <dl>
          {data.faqs.map((f, i) => (
            <div key={i}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <noscript>
        <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", color: "#f3efe8" }}>
          <h2>{data.h1}</h2>
          <p>{data.desc}</p>
          <p>{data.noscriptPrompt}</p>
        </div>
      </noscript>
    </>
  );
}
