import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Privé Chauffeur & Transfers in Marokko — Vaste Prijzen | Private Morocco Transfers" },
  description: "Betrouwbare transfers en privéchauffeur service in Marokko tegen gegarandeerde vaste prijzen. Vliegveldtransfers, stedenritten en woestijntrips met ervaren chauffeurs. WhatsApp 24/7.",
  alternates: {
    canonical: `${SITE_URL}/nl`,
    languages: {
      "nl": `${SITE_URL}/nl`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "es": `${SITE_URL}/es`,
      "it": `${SITE_URL}/it`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "pt": `${SITE_URL}/pt`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Privé Chauffeur & Transfers in Marokko — Gegarandeerde Vaste Tarieven",
    description: "Deur-tot-deur transfers met privéchauffeur in Marokko. Vliegvelden, stedenverbindingen en dagtochten.",
    url: `${SITE_URL}/nl`,
    siteName: SITE_NAME,
    locale: "nl_NL",
    type: "website",
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zijn de prijzen echt vast en inclusief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. De prijs die vooraf via WhatsApp wordt afgesproken is definitief inclusief privéchauffeur, brandstof, alle tolwegen en airconditioning. Geen verrassingen achteraf.",
      },
    },
    {
      "@type": "Question",
      name: "Wat als mijn vlucht vertraging heeft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij volgen uw vlucht live via het vluchtnummer. De ophaaltijd wordt automatisch aangepast en tot 45 minuten wachttijd na landing is gratis inbegrepen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe werkt de betaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voor transfers en dagtochten onder €300 is geen aanbetaling nodig. U betaalt bij aankomst direct contant aan de chauffeur (in euro's of Marokkaanse dirham).",
      },
    },
  ],
};

const DUTCH_SERVICES = [
  {
    title: "Luchthaven Transfers",
    text: "Persoonlijk welkom met naambord in de aankomsthal op alle Marokkaanse luchthavens. Live vluchtmonitoring en 45 minuten gratis wachttijd.",
    meta: ["Vanaf €30", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.jpg",
    href: "/nl/airport-transfers",
    cta: "Luchthaventransfers bekijken",
  },
  {
    title: "Stad naar Stad",
    text: "Van Marrakech naar Essaouira, Casablanca naar Fes, Agadir naar Marrakech. Deur-tot-deur in comfortabele auto's met fotostops naar keuze.",
    meta: ["Vaste prijs per voertuig", "Heel Marokko"],
    image: "/img/routes/marrakech-merzouga.jpg",
    href: "/nl/city-to-city",
    cta: "Routes bekijken",
  },
  {
    title: "Dagtochten & Excursies",
    text: "Ourika-vallei, Ouzoud-watervallen, Essaouira of de Agafay-woestijn: een volledige dag met uw eigen privéchauffeur, 's avonds weer terug in uw riad.",
    meta: ["Vanaf Marrakech, Fes, Agadir", "Hele dag"],
    image: "/img/blog/day-trips.jpg",
    href: "/nl/day-trips",
    cta: "Dagtochten ontdekken",
  },
  {
    title: "Meerdaagse Rondreizen",
    text: "Rondreizen van 3, 5 of 7 dagen door Marokko met dezelfde chauffeur en wagen: Sahara woestijn, koningssteden en Hoge Atlas.",
    meta: ["3 · 5 · 7 dagen", "Op maat"],
    image: "/img/fleet-scenes/toyota-prado.jpg",
    href: "/nl/transfers",
    cta: "Rondreizen ontdekken",
  },
];

const DUTCH_REVIEWS: Review[] = [
  {
    name: "Sander & Lisa",
    country: "Nederland",
    rating: 5,
    route: "Luchthaven Marrakech → Riad",
    text: "Fantastische service. De chauffeur stond keurig klaar met ons naambordje. Nette wagen, goede airco en exact de afgesproken prijs betaald.",
  },
  {
    name: "Daan V.",
    country: "België",
    rating: 5,
    route: "Marrakech → Essaouira",
    text: "Heel ontspannen rit met een vriendelijke chauffeur. Onderweg gestopt voor foto's bij de arganbomen. Aanrader voor iedereen!",
  },
];

export default function DutchHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <h1 className="visually-hidden">{"Privé Chauffeur & Transfers in Marokko — Gegarandeerde Vaste Prijzen"}</h1>
            <HeroLines />
            <p>
              {"Private Morocco Transfers is dé toonaangevende privéchauffeur service voor reizigers in Marokko — gegarandeerde vaste prijzen, ervaren chauffeurs en comfortabele deur-tot-deur ritten van het vliegveld tot de Sahara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/nl/transfers" className="btn btn-gold">
                {"Alle routes bekijken"}
              </Link>
              <div className="cta-tooltip-wrapper">
                <Link
                  href="/nl/trip-finder"
                  className="btn btn-white"
                  title="Reisplanner — Bereken uw route, voertuig en gegarandeerde vaste prijs in 30 seconden"
                >
                  {"Reisplanner"}
                </Link>
                <div className="cta-tooltip" role="tooltip">
                  <span className="cta-tooltip-badge">{"Directe Prijs"}</span>
                  <span>{"Vind uw route, voertuig & vaste prijs"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Luchthaventransfer"}
              </div>
              <div className="booking-tab">
                {"Stad naar Stad"}
              </div>
              <div className="booking-tab">
                {"Dagtocht"}
              </div>
              <Link className="booking-tab" href="/nl/calculator">
                {"Tarieven"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"Waar kunnen we u ophalen?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"Vertreklocatie"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="bijv. Luchthaven Marrakech (RAK)" />
              <label className="field-label">
                {"Bestemming"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="bijv. Medina van Marrakech, Hotel, Riad..." />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Datum"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passagiers"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>{"1–3 (sedan)"}</option>
                    <option>{"4–5 (SUV)"}</option>
                    <option>{"6–8 (minibus)"}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Vaste prijs aanvragen via WhatsApp"}
              </button>
              <p className="field-note">
                {"Opent WhatsApp met uw reisgegevens. Geen aanbetaling nodig voor een offerte."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">{"Zorgeloos reizen door Marokko met uw eigen chauffeur"}</h2>
              <Link href="/transfers" className="btn btn-white">
                {"Alle transfers"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Transfervoertuig in Marokko"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Een goede transfer is er een waar u zich geen zorgen over hoeft te maken: de chauffeur staat al klaar, de auto is fris en gekoeld, en de prijs klopt precies met de afspraak."}
            </p>
            <p className="statement muted">
              {"Al onze chauffeurs beschikken over de officiële toeristische transportvergunning, zijn volledig verzekerd en spreken vloeiend Engels en Frans."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Populaire routes"}</h2>
            <p className="statement">
              {"Vaste prijzen per sedan (tot 3 personen). Ruime busjes en minibusjes op aanvraag."}
            </p>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Luchthaven Marrakech → Medina"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 uur"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 uur"}</span>
              <span>{"€135 (1.480 MAD)"}</span>
              <Link href="/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Details"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Onze diensten"}</h2>
            <p className="statement">
              {"Vervoersoplossingen op maat voor uw reis door Marokko."}
            </p>
          </div>
          <ServicesCarousel items={DUTCH_SERVICES} />
        </div>
      </section>

      <Fleet lang="nl" />

      <Reviews items={DUTCH_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Boek uw privé transfer in Marokko"}</h2>
          <p>{"Directe bevestiging via WhatsApp. Geen aanbetaling voor ritten onder €300."}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Hallo!%20Ik%20wil%20graag%20een%20priv%C3%A9%20transfer%20boeken%20in%20Marokko.%20Kunt%20u%20de%20beschikbaarheid%20bevestigen%3F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Boek via WhatsApp"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"Bekijk alle routes"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
