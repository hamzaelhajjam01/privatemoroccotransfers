import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Autista Privato e Trasferimenti in Marocco — Prezzi Fissi | Private Morocco Transfers" },
  description: "Servizio di autista privato e transfer in Marocco a prezzi fissi garantiti. Accoglienza in aeroporto, tratte tra città ed escursioni con autisti esperti. Prenotazione WhatsApp 24/7.",
  alternates: {
    canonical: `${SITE_URL}/it`,
    languages: {
      "it": `${SITE_URL}/it`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "es": `${SITE_URL}/es`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "pt": `${SITE_URL}/pt`,
      "nl": `${SITE_URL}/nl`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Autista Privato e Trasferimenti in Marocco — Tariffe Fisse Garantite",
    description: "Servizio di noleggio con conducente privato in Marocco. Pick-up aeroporti, collegamenti interurbani e tour nel deserto.",
    url: `${SITE_URL}/it`,
    siteName: SITE_NAME,
    locale: "it_IT",
    type: "website",
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I prezzi sono davvero fissi e all-inclusive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Il prezzo concordato su WhatsApp prima del viaggio è definitivo e comprende autista dedicato, carburante, tutti i pedaggi autostradali e aria condizionata. Nessun costo nascosto all'arrivo.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa succede se il mio volo è in ritardo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monitoriamo il vostro volo in tempo reale. L'autista adatta l'orario di arrivo e include fino a 45 minuti di attesa gratuita dopo l'atterraggio.",
      },
    },
    {
      "@type": "Question",
      name: "Come si effettua il pagamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per trasferimenti ed escursioni sotto i 300 €, nessun anticipo è richiesto. Si paga comodamente in contanti direttamente all'autista all'arrivo (in Euro o Dirham marocchini).",
      },
    },
  ],
};

const ITALIAN_SERVICES = [
  {
    title: "Transfer Aeroporto",
    text: "Accoglienza con cartello personalizzato nella hall arrivi di tutti gli aeroporti marocchini. Monitoraggio voli in tempo reale e 45 minuti di attesa inclusi.",
    meta: ["Da 30 €", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.jpg",
    href: "/it/airport-transfers",
    cta: "Scopri i transfer aeroporto",
  },
  {
    title: "Collegamenti Tra Città",
    text: "Da Marrakech a Essaouira, da Casablanca a Fes, da Agadir a Marrakech. Servizio porta a porta su veicoli moderni con soste panoramiche incluse.",
    meta: ["Prezzo fisso per auto", "In tutto il Marocco"],
    image: "/img/routes/marrakech-merzouga.jpg",
    href: "/it/city-to-city",
    cta: "Visualizza i tragitti",
  },
  {
    title: "Escursioni Giornaliere",
    text: "Valle dell'Ourika, cascate di Ouzoud, Essaouira o il deserto di Agafay: una giornata completa con il vostro autista privato dedicato, rientrando in riad in serata.",
    meta: ["Da Marrakech, Fes, Agadir", "Giornata intera"],
    image: "/img/blog/day-trips.jpg",
    href: "/it/day-trips",
    cta: "Esplora le escursioni",
  },
  {
    title: "Tour e Circuiti Privati",
    text: "Viaggi itineranti di 3, 5 o 7 giorni attraverso il Marocco con lo stesso autista e veicolo: Sahara di Merzouga, città imperiali e valli dell'Alto Atlante.",
    meta: ["3 · 5 · 7 giorni", "Su misura"],
    image: "/img/fleet-scenes/toyota-prado.jpg",
    href: "/it/transfers",
    cta: "Scopri i tour privati",
  },
];

const ITALIAN_REVIEWS: Review[] = [
  {
    name: "Marco V.",
    country: "Italia",
    rating: 5,
    route: "Aeroporto di Marrakech → Médina",
    text: "Puntualissimo! Ci aspettava con un cartello fuori dagli arrivi. Auto pulitissima, aria condizionata ottima e prezzo esattamente quello pattuito su WhatsApp.",
  },
  {
    name: "Francesca & Matteo",
    country: "Italia",
    rating: 5,
    route: "Marrakech → Essaouira",
    text: "Autista gentile e discreto, guida sicura e sosta piacevole per fotografare le capre sugli arganier. Esperienza impeccabile per chi viaggia in coppia.",
  },
];

export default function ItalianHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <h1 className="visually-hidden">{"Autista Privato e Trasferimenti in Marocco — Tariffe Fisse Garantite"}</h1>
            <HeroLines />
            <p>
              {"Private Morocco Transfers è il servizio di autista privato ideale per vivere il Marocco in totale relax — prezzi fissi garantiti, autisti professionisti con licenza e viaggi sereni porta a porta dall'aeroporto al Sahara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/it/transfers" className="btn btn-gold">
                {"Tutti i tragitti"}
              </Link>
              <Link href="/it/city-to-city" className="btn btn-white">
                {"Interurbani"}
              </Link>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Transfer Aeroporto"}
              </div>
              <div className="booking-tab">
                {"Tra Città"}
              </div>
              <div className="booking-tab">
                {"Escursione"}
              </div>
              <Link className="booking-tab" href="/it/calculator">
                {"Calcolatore Tariffe"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"Dove vi veniamo a prendere?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"Partenza"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="es. Aeroporto Marrakech (RAK)" />
              <label className="field-label">
                {"Destinazione"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="es. Medina di Marrakech, Riad..." />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Data"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passeggeri"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>{"1–3 (berlina)"}</option>
                    <option>{"4–5 (SUV)"}</option>
                    <option>{"6–8 (van)"}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Richiedi prezzo fisso su WhatsApp"}
              </button>
              <p className="field-note">
                {"Apre WhatsApp con i dettagli del viaggio. Nessun anticipo per confermare la tariffa."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tangeri<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fes<i>—</i></span><span>Tangeri<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">{"Viaggiamo in Marocco con rigore e serenità"}</h2>
              <Link href="/transfers" className="btn btn-white">
                {"Catalogo transfer"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Veicolo di trasferimento privato in Marocco"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Un viaggio perfetto è quello in cui non ci sono imprevisti: l'autista è già sul posto ad attendervi, il veicolo è fresco e pulito, e la tariffa corrisponde esattamente a quella preventivata."}
            </p>
            <p className="statement muted">
              {"Tutti i nostri autisti sono muniti di licenza ministeriale di Trasporto Turistico, assicurazione commerciale e parlano fluentemente italiano, francese o inglese."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Tratte popolari"}</h2>
            <p className="statement">
              {"Tariffe fisse per auto berlina (fino a 3 persone). Van spaziosi per famiglie e gruppi."}
            </p>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aeroporto Marrakech → Médina"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Dettagli"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Dettagli"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 h"}</span>
              <span>{"€135 (1.480 MAD)"}</span>
              <Link href="/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Dettagli"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/casablanca-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aeroporto Casablanca (CMN) → Marrakech"}
                </Link>
              </span>
              <span className="muted">{"220 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€150 (1.650 MAD)"}</span>
              <Link href="/transfers/casablanca-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Dettagli"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"I nostri servizi"}</h2>
            <p className="statement">
              {"Soluzioni su misura per ogni esigenza di spostamento in Marocco."}
            </p>
          </div>
          <ServicesCarousel items={ITALIAN_SERVICES} />
        </div>
      </section>

      <Fleet lang="it" />

      <Reviews items={ITALIAN_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Prenotate il vostro transfer privato in Marocco"}</h2>
          <p>{"Conferma immediata su WhatsApp. Nessun anticipo sotto i 300 €."}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Buongiorno!%20Vorrei%20prenotare%20un%20trasferimento%20privato%20in%20Marocco.%20Potete%20indicarmi%20la%20disponibilit%C3%A0%20%3F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Prenota su WhatsApp"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"Tutti i collegamenti"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
