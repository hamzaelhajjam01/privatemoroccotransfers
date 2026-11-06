import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Chauffeur Privé & Transferts au Maroc — Prix Fixes Garantis | Private Morocco Transfers" },
  description: "Service de chauffeur privé et transferts au Maroc à prix fixes garantis. Accueil aéroport personnalisé, liaisons intervilles et excursions. Chauffeurs professionnels bilingues, réservation WhatsApp 24/7.",
  alternates: {
    canonical: `${SITE_URL}/fr`,
    languages: {
      "fr": `${SITE_URL}/fr`,
      "en": `${SITE_URL}/`,
      "es": `${SITE_URL}/es`,
      "it": `${SITE_URL}/it`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "pt": `${SITE_URL}/pt`,
      "nl": `${SITE_URL}/nl`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Chauffeur Privé & Transferts au Maroc — Tarifs Fixes Garantis",
    description: "Service de chauffeur privé et transferts au Maroc à prix fixes garantis. Accueil aéroport, liaisons intervilles et excursions avec chauffeurs agréés.",
    url: `${SITE_URL}/fr`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Service de Chauffeur Privé au Maroc",
      },
    ],
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Les tarifs sont-ils réellement fixes et garantis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le tarif est validé sur WhatsApp avant votre trajet et inclut le chauffeur privé, le carburant, tous les péages autoroutiers et la climatisation. Aucun supplément ne vous sera demandé à l'arrivée.",
      },
    },
    {
      "@type": "Question",
      name: "Que se passe-t-il si mon vol a du retard ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous suivons votre vol en temps réel grâce à son numéro. L'heure de prise en charge est ajustée automatiquement et jusqu'à 45 minutes d'attente offerte après l'atterrissage sont incluses sans frais.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les modalités de paiement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour tous les transferts et excursions de moins de 300 €, aucun acompte n'est requis à la réservation. Vous réglez directement votre chauffeur en espèces (Euros ou Dirhams marocains) à l'arrivée.",
      },
    },
    {
      "@type": "Question",
      name: "Quel type de véhicule me sera attribué ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons des berlines modernes pour 1 à 3 passagers (Skoda Octavia, Toyota Corolla), des monospaces et vans premium pour 4 à 7 personnes (Mercedes Vito, Classe V), et des minibus spacieux pour les groupes jusqu'à 14 passagers.",
      },
    },
  ],
};

const FRENCH_SERVICES = [
  {
    title: "Transferts Aéroport",
    text: "Accueil personnalisé avec pancarte à votre nom dans le hall des arrivées de tous les aéroports marocains. Suivi de vol en temps réel et 45 min d'attente offerte.",
    meta: ["Dès 30 €", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.jpg",
    href: "/fr/airport-transfers",
    cta: "Découvrir les aéroports",
  },
  {
    title: "Liaisons Intervilles",
    text: "Marrakech vers Essaouira, Casablanca vers Fès, Agadir vers Marrakech. Service porte-à-porte direct et sécurisé entre toutes les villes avec arrêts panoramiques au choix.",
    meta: ["Prix fixe par véhicule", "Tout le Maroc"],
    image: "/img/routes/marrakech-merzouga.jpg",
    href: "/fr/city-to-city",
    cta: "Voir les trajets intervilles",
  },
  {
    title: "Excursions d'une Journée",
    text: "La vallée de l'Ourika, les cascades d'Ouzoud, le désert d'Agafay ou la côte atlantique : une journée complète avec votre chauffeur dédié, retour à votre hôtel le soir.",
    meta: ["Au départ de Marrakech, Fès, Agadir", "Journée complète"],
    image: "/img/blog/day-trips.jpg",
    href: "/fr/day-trips",
    cta: "Découvrir les excursions",
  },
  {
    title: "Circuits & Séjours Privés",
    text: "Trois, cinq ou sept jours d'évasion à travers le Maroc avec le même chauffeur et véhicule : désert de Merzouga, villes impériales et routes de l'Atlas.",
    meta: ["3 · 5 · 7 jours", "Itinéraires sur mesure"],
    image: "/img/fleet-scenes/toyota-prado.jpg",
    href: "/fr/transfers",
    cta: "Explorer les circuits",
  },
];

const FRENCH_REVIEWS: Review[] = [
  {
    name: "Thomas B.",
    country: "France",
    rating: 5,
    route: "Aéroport de Marrakech → Médina",
    text: "Notre chauffeur nous attendait avec une pancarte dès la sortie des douanes. Véhicule impeccable, climatisation parfaite et tarif rigoureusement conforme au devis.",
  },
  {
    name: "Élodie & Marc",
    country: "Belgique",
    rating: 5,
    route: "Marrakech → Essaouira",
    text: "Ponctuel, extrêmement professionnel et discret. Arrêt photo très apprécié sur la route des arganiers. Aucune surprise à l'arrivée.",
  },
  {
    name: "Claire D.",
    country: "Suisse",
    rating: 5,
    route: "Circuit 5 jours Haut Atlas & Merzouga",
    text: "Cinq jours inoubliables avec un chauffeur attentif et rassurant sur les routes de montagne. Connaît les meilleurs points de vue et restaurants locaux.",
  },
  {
    name: "Karim L.",
    country: "Canada",
    rating: 5,
    route: "Aéroport Casablanca → Marrakech",
    text: "Notre vol avait plus de 2 heures de retard. Le chauffeur a suivi le statut du vol et nous attendait sans aucun supplément. Un service haut de gamme.",
  },
];

export default function FrenchHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <HeroLines />
            <p>
              {"Private Morocco Transfers est votre service de chauffeur privé de référence au Maroc — prix fixes garantis, chauffeurs agréés et voyages sereins de l'aéroport jusqu'au désert du Sahara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/fr/transfers" className="btn btn-gold">
                {"Toutes les liaisons"}
              </Link>
              <Link href="/fr/city-to-city" className="btn btn-white">
                {"Intervilles"}
              </Link>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Transfert Aéroport"}
              </div>
              <div className="booking-tab">
                {"Intervilles"}
              </div>
              <div className="booking-tab">
                {"Excursion"}
              </div>
              <Link className="booking-tab" href="/fr/calculator">
                {"Calculateur"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"Où devons-nous venir vous chercher ?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"Lieu de départ"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="ex. Aéroport Marrakech (RAK)" />
              <label className="field-label">
                {"Destination"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="ex. Médina de Marrakech, Hôtel, Riad..." />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Date"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passagers"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>{"1–3 (berline)"}</option>
                    <option>{"4–5 (SUV)"}</option>
                    <option>{"6–8 (van)"}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Obtenir mon tarif fixe sur WhatsApp"}
              </button>
              <p className="field-note">
                {"Ouvre WhatsApp avec les détails de votre trajet. Aucun paiement d'avance pour le devis."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fès<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fès<i>—</i></span><span>Tanger<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">
                {"Nous sillonnons le Maroc avec exigence et sérénité"}
              </h2>
              <Link href="/fr/transfers" className="btn btn-white">
                {"Catalogue des transferts"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Van de transfert privé sur la côte atlantique"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Un transfert réussi est celui où tout se déroule sans la moindre friction : le chauffeur vous attend déjà avec le sourire, le véhicule est frais et confortable, et le tarif réglé correspond au centime près à celui convenu."}
            </p>
            <p className="statement muted">
              {"Tous nos chauffeurs sont agréés par le Ministère du Transport Touristique, assurés et parfaitement bilingues. Ils connaissent les routes les plus rapides comme les détours les plus spectaculaires."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">
              {"Liaisons populaires"}
            </h2>
            <p className="statement">
              {"Tarifs fixes par véhicule pour une berline confortable (jusqu'à 3 personnes). Véhicules spacieux et vans disponibles sur demande."}
            </p>
          </div>
          <div className="route-cards">
            <Link className="card" href="/fr/transfers/marrakech-to-essaouira">
              <div className="ph light" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.jpg)" }}></div>
              <div className="card-bar">
                <span>{"Marrakech → Essaouira"}</span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Voir le trajet"}
                </span>
              </div>
            </Link>
            <Link className="card" href="/fr/transfers/marrakech-to-merzouga">
              <div className="ph light" style={{ backgroundImage: "url(/img/hero-tours.jpg)" }}></div>
              <div className="card-bar">
                <span>{"Marrakech → Merzouga"}</span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Voir le trajet"}
                </span>
              </div>
            </Link>
          </div>

          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/fr/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aéroport Marrakech → Médina"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/fr/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Détails"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/fr/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/fr/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Détails"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/fr/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 h"}</span>
              <span>{"€135 (1 480 MAD)"}</span>
              <Link href="/fr/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Détails"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/fr/transfers/casablanca-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aéroport Casablanca (CMN) → Marrakech"}
                </Link>
              </span>
              <span className="muted">{"220 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€150 (1 650 MAD)"}</span>
              <Link href="/fr/transfers/casablanca-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Détails"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/fr/transfers/marrakech-to-fes" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Fès"}
                </Link>
              </span>
              <span className="muted">{"540 km"}</span>
              <span className="muted">{"6 h"}</span>
              <span>{"€240 (2 640 MAD)"}</span>
              <Link href="/fr/transfers/marrakech-to-fes" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Détails"}
              </Link>
            </div>
          </div>
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link href="/fr/transfers" className="btn btn-black btn-lg">
              {"Consulter le catalogue des 150+ transferts"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Nos services de transport"}</h2>
            <p className="statement">
              {"Une solution adaptée à chacun de vos déplacements au Maroc, de la simple navette aéroport aux grands circuits touristiques."}
            </p>
          </div>
          <ServicesCarousel items={FRENCH_SERVICES} />
        </div>
      </section>

      <Fleet />

      <Reviews items={FRENCH_REVIEWS} />

      {/* Partner Banner */}
      <section className="section" style={{ background: "#0a0a0a", borderTop: "1px solid var(--rule-dark)", borderBottom: "1px solid var(--rule-dark)" }}>
        <div className="wrap">
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 0" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>
              {"Partenaire Voyage Maroc · Expéditions Sahara"}
            </span>
            <h2 className="huge" style={{ color: "var(--white)", marginTop: "16px", marginBottom: "20px" }}>
              {"Vous préparez un circuit dans le désert ou un voyage itinérant ?"}
            </h2>
            <p className="statement muted" style={{ marginBottom: "28px" }}>
              {"Pour les séjours de 3 à 10 jours combinant le Haut Atlas, les gorges du Dadès, Aït Ben Haddou et le bivouac de luxe dans les dunes de Merzouga, notre agence sœur "}
              <strong style={{ color: "var(--white)" }}>Roam Morocco Tours</strong>
              {" conçoit des itinéraires privés entièrement personnalisés."}
            </p>
            <div>
              <a
                href="https://roammorocco.tours"
                target="_blank"
                rel="noopener"
                className="btn btn-white no-ring"
                style={{ padding: "14px 28px", fontSize: "15px" }}
              >
                {"Découvrir Roam Morocco Tours"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Questions fréquentes"}</h2>
            <p className="statement">{"Tout ce que vous devez savoir pour voyager l'esprit tranquille."}</p>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question">
                <span>{"Les tarifs sont-ils réellement fermes et sans supplément ?"}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{"Absolument. Le tarif annoncé sur WhatsApp avant votre trajet est définitif. Il comprend la rémunération du chauffeur privé agréé, le carburant, tous les péages d'autoroute et la climatisation. Aucun pourboire forcé ni frais caché."}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{"Comment mon chauffeur me retrouve-t-il à l'aéroport ?"}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{"Votre chauffeur vous attend directement dans le hall des arrivées, juste après le contrôle des douanes, avec une pancarte à votre nom. Nous suivons votre vol en direct et accordons 45 minutes d'attente gratuite après l'atterrissage."}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{"Comment s'effectue le règlement de la course ?"}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{"Pour tous les trajets inférieurs à 300 €, aucun paiement en amont n'est demandé. Vous réglez directement votre chauffeur à l'arrivée en espèces (en Euros ou en Dirhams marocains au choix)."}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>{"Puis-je demander des arrêts photo ou café durant le trajet ?"}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{"C'est tout l'avantage d'un transfert 100% privé ! Votre chauffeur s'arrête avec plaisir pour une pause café, des toilettes propres ou pour admirer un panorama exceptionnel."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Réservez votre transfert privé au Maroc"}</h2>
          <p>
            {"Confirmation immédiate sur WhatsApp. Aucun paiement préalable pour les trajets de moins de 300 €."}
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Bonjour!%20Je%20souhaite%20r%C3%A9server%20un%20transfert%20priv%C3%A9%20au%20Maroc.%20Pouvez-vous%20m'indiquer%20vos%20disponibilit%C3%A9s%20?"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Réserver sur WhatsApp"}
            </a>
            <Link href="/fr/transfers" className="btn btn-outline-white btn-lg">
              {"Consulter le catalogue des tarifs"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
