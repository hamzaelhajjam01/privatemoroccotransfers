import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Privatchauffeur & Transfers in Marokko — Garantierte Festpreise | Private Morocco Transfers" },
  description: "Zuverlässiger Chauffeurservice und Transfers in Marokko zum garantierten Festpreis. Flughafen-Abholung, Fernstrecken und Wüstentouren mit lizenzierten Fahrern. 24/7 WhatsApp Buchung.",
  alternates: {
    canonical: `${SITE_URL}/de`,
    languages: {
      "de": `${SITE_URL}/de`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "es": `${SITE_URL}/es`,
      "it": `${SITE_URL}/it`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Privatchauffeur & Transfers in Marokko — Feste Pauschalpreise",
    description: "Premium Tür-zu-Tür Transfers in ganz Marokko. Flughäfen, Fernstrecken und Atlas-Touren.",
    url: `${SITE_URL}/de`,
    siteName: SITE_NAME,
    locale: "de_DE",
    type: "website",
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sind die Preise wirklich verbindliche Festpreise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Der vor der Fahrt über WhatsApp vereinbarte Preis ist endgültig und beinhaltet Chauffeur, Kraftstoff, alle Autobahngebühren und Klimaanlage. Keine versteckten Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert bei Flugverspätung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir verfolgen Ihren Flug live anhand der Flugnummer. Die Abholzeit wird automatisch angepasst und bis zu 45 Minuten Wartezeit nach der Landung sind kostenlos inklusive.",
      },
    },
    {
      "@type": "Question",
      name: "Wie erfolgt die Bezahlung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Fahrten unter 300 € ist keine Anzahlung erforderlich. Sie bezahlen bei Ankunft direkt in bar beim Fahrer (in Euro oder marokkanischen Dirham).",
      },
    },
  ],
};

const GERMAN_SERVICES = [
  {
    title: "Flughafentransfer",
    text: "Persönlicher Empfang mit Namensschild in der Ankunftshalle aller marokkanischen Flughäfen. Live-Flugverfolgung und 45 Minuten kostenlose Wartezeit.",
    meta: ["Ab 30 €", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.jpg",
    href: "/airport-transfers",
    cta: "Flughafentransfers ansehen",
  },
  {
    title: "Fernstrecken & Stadt-zu-Stadt",
    text: "Marrakesch nach Essaouira, Casablanca nach Fès, Agadir nach Marrakesch. Tür-zu-Tür-Service in modernen Fahrzeugen mit Fotostopps nach Wunsch.",
    meta: ["Festpreis pro Auto", "Ganz Marokko"],
    image: "/img/routes/marrakech-merzouga.jpg",
    href: "/city-to-city",
    cta: "Strecken ansehen",
  },
  {
    title: "Tagesausflüge",
    text: "Ourika-Tal, Ouzoud-Wasserfälle, Essaouira oder die Agafay-Steinwüste: ein ganzer Tag mit eigenem Fahrer, Rückkehr zum Hotel am Abend.",
    meta: ["Ab Marrakesch, Fès, Agadir", "Ganztägig"],
    image: "/img/blog/day-trips.jpg",
    href: "/day-trips",
    cta: "Ausflüge entdecken",
  },
  {
    title: "Mehrtägige Rundreisen",
    text: "3, 5 oder 7 Tage quer durch Marokko mit demselben Fahrer und Fahrzeug: Sahara-Wüste, Königsstädte und Hoher Atlas.",
    meta: ["3 · 5 · 7 Tage", "Individuell"],
    image: "/img/fleet-scenes/toyota-prado.jpg",
    href: "/transfers",
    cta: "Rundreisen erkunden",
  },
];

const GERMAN_REVIEWS: Review[] = [
  {
    name: "Anna & Stefan K.",
    country: "Deutschland",
    rating: 5,
    route: "Marrakesch Flughafen → Altstadt Riad",
    text: "Pünktlich, professionell und absolut zuverlässig. Der Fahrer wartete pünktlich am Ausgang und brachte unser Gepäck sicher bis vor das Riad.",
  },
  {
    name: "Markus W.",
    country: "Schweiz",
    rating: 5,
    route: "Marrakesch → Essaouira",
    text: "Sehr angenehme Fahrt, moderner Mercedes-Van und ein netter Stopp bei den Arganbäumen. Sehr zu empfehlen für entspanntes Reisen in Marokko.",
  },
];

export default function GermanHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="wrap hero-wrap">
          <div className="hero-head">
            <HeroLines />
            <p className="hero-sub">
              {"Flughafentransfers, Fernstrecken und privater Chauffeurservice in Marokko. Feste Pauschalpreise, lizenzierte Fahrer und 0% Anzahlung unter 300 €."}
            </p>
          </div>
          <div className="hero-booking">
            <form id="heroBookingForm" className="booking-card">
              <div className="booking-fields">
                <div className="booking-field">
                  <label htmlFor="bk-from">{"Abfahrtsort"}</label>
                  <input
                    id="bk-from"
                    name="from"
                    type="text"
                    required
                    placeholder="Z.B. Flughafen Marrakesch, Hotel..."
                    autoComplete="off"
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-to">{"Zielort"}</label>
                  <input
                    id="bk-to"
                    name="to"
                    type="text"
                    required
                    placeholder="Z.B. Essaouira, Casablanca, Agadir..."
                    autoComplete="off"
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-date">{"Datum"}</label>
                  <input id="bk-date" name="date" type="date" />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-passengers">{"Passagiere"}</label>
                  <select id="bk-passengers" name="passengers" defaultValue="2">
                    <option value="1">{"1 Passagier"}</option>
                    <option value="2">{"2 Passagiere"}</option>
                    <option value="3">{"3 Passagiere"}</option>
                    <option value="4">{"4 Passagiere"}</option>
                    <option value="5-7">{"5 bis 7 Passagiere (Van)"}</option>
                    <option value="8+">{"8+ Passagiere (Minibus)"}</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-gold btn-lg no-ring"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {"Verbindlichen Festpreis anfragen"}
              </button>
            </form>
          </div>
          <div className="hero-stats">
            <div>
              <b>{"150+"}</b>
              <span>{"Strecken & Städte in Marokko"}</span>
            </div>
            <div>
              <b>{"100%"}</b>
              <span>{"Garantierte Festpreise"}</span>
            </div>
            <div>
              <b>{"0%"}</b>
              <span>{"Anzahlung unter 300 €"}</span>
            </div>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakesch<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fès<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakesch<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fès<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">{"Wir fahren Marokko mit Verlässlichkeit und Komfort"}</h2>
              <Link href="/transfers" className="btn btn-white">
                {"Transfer-Katalog"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Transferfahrzeug in Marokko"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Ein gelungener Transfer zeichnet sich dadurch aus, dass Sie sich um nichts sorgen müssen: Der Fahrer wartet bereits pünktlich, das Auto ist klimatisiert und gepflegt, und der Preis entspricht exakt dem Angebot."}
            </p>
            <p className="statement muted">
              {"Unsere Fahrer besitzen die offizielle marokkanische Lizenz für Touristentransport, sind umfassend versichert und sprechen fließend Englisch und Französisch."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Beliebte Routen"}</h2>
            <p className="statement">
              {"Feste Pauschalpreise pro Limousine (bis zu 3 Personen). Großraumlimousinen und Vans auf Anfrage."}
            </p>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Flughafen Marrakesch → Altstadt"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 Min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakesch → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 Std"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakesch → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 Std"}</span>
              <span>{"€135 (1.480 MAD)"}</span>
              <Link href="/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/casablanca-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Flughafen Casablanca (CMN) → Marrakesch"}
                </Link>
              </span>
              <span className="muted">{"220 km"}</span>
              <span className="muted">{"2.5 Std"}</span>
              <span>{"€150 (1.650 MAD)"}</span>
              <Link href="/transfers/casablanca-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Unsere Transportservices"}</h2>
            <p className="statement">
              {"Individuelle Fahrlösungen für Ihre Reise durch Marokko."}
            </p>
          </div>
          <ServicesCarousel items={GERMAN_SERVICES} />
        </div>
      </section>

      <Fleet />

      <Reviews items={GERMAN_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Buchen Sie Ihren privaten Chauffeur in Marokko"}</h2>
          <p>{"Sofortige Bestätigung über WhatsApp. 0% Anzahlung für Fahrten unter 300 €."}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Guten%20Tag!%20Ich%20m%C3%B6chte%20einen%20privaten%20Transfer%20in%20Marokko%20buchen.%20K%C3%B6nnen%20Sie%20die%20Verf%C3%BCgbarkeit%20best%C3%A4tigen%3F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Über WhatsApp buchen"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"Alle Strecken anzeigen"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
