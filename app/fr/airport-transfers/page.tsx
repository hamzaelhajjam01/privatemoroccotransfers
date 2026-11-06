import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_FR } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Transferts Aéroport au Maroc — Prix Fixes Garantis | Private Morocco Transfers" },
  description: "Transferts aéroport fiables à prix fixes au Maroc. Marrakech (RAK), Casablanca (CMN), Agadir (AGA), Fès (FEZ), Tanger (TNG), Rabat (RBA). Suivi de vol en direct et 45 min d'attente offerte.",
  alternates: {
    canonical: `${SITE_URL}/fr/airport-transfers`,
    languages: {
      "fr": `${SITE_URL}/fr/airport-transfers`,
      "en": `${SITE_URL}/airport-transfers`,
      "x-default": `${SITE_URL}/airport-transfers`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/fr` },
        { "@type": "ListItem", position: 2, name: "Transferts Aéroport", item: `${SITE_URL}/fr/airport-transfers` },
      ],
    },
    {
      "@type": "TaxiService",
      name: "Transferts Aéroport au Maroc",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_FR,
      areaServed: "Morocco",
      description: "Transferts privés aéroport à prix fixes avec suivi de vol et 45 min d'attente gratuite.",
    },
  ],
};

const AIRPORT_LISTINGS = [
  {
    category: "marrakech",
    title: "Aéroport de Marrakech (RAK) → Médina / Guéliz",
    slug: "marrakech-airport-to-marrakech",
    tag: "Aéroport RAK",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/blog/airport-transfer.jpg",
  },
  {
    category: "marrakech",
    title: "Aéroport de Marrakech (RAK) → Palmeraie",
    slug: "marrakech-airport-to-palmeraie",
    tag: "Aéroport RAK",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 35,
    priceMad: 385,
    bg: "/img/fleet-scenes/mercedes-e-class.jpg",
  },
  {
    category: "casablanca",
    title: "Aéroport Casablanca (CMN) → Centre-Ville",
    slug: "casablanca-airport-to-casablanca",
    tag: "Aéroport CMN",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 40,
    priceMad: 440,
    bg: "/img/fleet-scenes/bmw-5-series.jpg",
  },
  {
    category: "casablanca",
    title: "Aéroport Casablanca (CMN) → Marrakech",
    slug: "casablanca-airport-to-marrakech",
    tag: "Aéroport CMN",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 150,
    priceMad: 1650,
    bg: "/img/hero-city-to-city.jpg",
  },
  {
    category: "agadir",
    title: "Aéroport Agadir (AGA) → Taghazout / Baie",
    slug: "agadir-airport-to-taghazout",
    tag: "Aéroport AGA",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 45,
    priceMad: 500,
    bg: "/img/routes/marrakech-agadir.jpg",
  },
  {
    category: "fes",
    title: "Aéroport Fès-Saïss (FEZ) → Médina",
    slug: "fes-airport-to-fes",
    tag: "Aéroport FEZ",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/fleet-scenes/skoda-octavia.jpg",
  },
  {
    category: "tangier",
    title: "Aéroport Tanger (TNG) → Centre / Port",
    slug: "tangier-airport-to-tangier",
    tag: "Aéroport TNG",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/fleet-scenes/mercedes-vito.jpg",
  },
  {
    category: "rabat",
    title: "Aéroport Rabat-Salé (RBA) → Centre-Ville",
    slug: "rabat-airport-to-rabat",
    tag: "Aéroport RBA",
    pax: "1–3 passagers",
    type: "Berline Confort",
    priceEur: 30,
    priceMad: 330,
    bg: "/img/fleet-scenes/mercedes-sprinter.jpg",
  },
];

export default function FrenchAirportTransfersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Transferts Aéroport</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            Prix Fixes · Accueil Personnalisé Inclus
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            Transferts Aéroport
            <br />
            au Maroc
          </h1>
          <p className="hero-sub">
            Prise en charge et dépose professionnelles dans tous les aéroports marocains. Votre chauffeur vous attend dans le hall des arrivées avec une pancarte nominative. 45 minutes d'attente gratuite incluses.
          </p>
        </div>
      </div>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <button className="filter-btn active" data-filter="all">Tous les Aéroports</button>
            <button className="filter-btn" data-filter="marrakech">Marrakech (RAK)</button>
            <button className="filter-btn" data-filter="casablanca">Casablanca (CMN)</button>
            <button className="filter-btn" data-filter="agadir">Agadir (AGA)</button>
            <button className="filter-btn" data-filter="fes">Fès (FEZ)</button>
            <button className="filter-btn" data-filter="tangier">Tanger (TNG)</button>
            <button className="filter-btn" data-filter="rabat">Rabat (RBA)</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="section-label">Liaisons Aéroportuaires</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>Navettes et Transferts Disponibles</h2>
            </div>
            <Link href="/fr/transfers" className="btn btn-outline">
              Catalogue Complet 150+ Trajets ↗
            </Link>
          </div>

          <div className="listing-grid">
            {AIRPORT_LISTINGS.map((item) => (
              <div key={item.slug} className="listing-card" data-category={item.category}>
                <div className="listing-img" style={{ backgroundImage: `url(${item.bg})` }}>
                  <span className="listing-badge">Transfert Aéroport</span>
                  <span className="listing-fixed-badge">Prix Fixe</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">
                    <Link href={`/fr/transfers/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <div className="listing-features">
                    <span className="feature-tag">{item.tag}</span>
                    <span className="feature-tag">{item.pax}</span>
                    <span className="feature-tag">{item.type}</span>
                  </div>
                  <ul className="listing-includes">
                    <li>Chauffeur professionnel &amp; carburant inclus</li>
                    <li>Accueil avec pancarte aux arrivées</li>
                    <li>45 minutes d'attente offerte après atterrissage</li>
                    <li>Annulation gratuite jusqu'à 48h</li>
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">Dès</div>
                      <div className="listing-price-amount">
                        €{item.priceEur} ({item.priceMad} MAD)
                      </div>
                      <div className="listing-price-unit">par véhicule</div>
                    </div>
                    <Link href={`/fr/transfers/${item.slug}`} className="btn btn-gold" style={{ padding: "10px 20px" }}>
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Strip */}
      <section className="section dark">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Arrivée Sereine</span>
              <h2 className="heading-lg">Comment se déroule votre accueil à l'aéroport ?</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            <div style={{ padding: "28px", background: "#111", border: "1px solid #222" }}>
              <span style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "12px" }}>01 / SUIVI DE VOL</span>
              <h3 style={{ fontSize: "18px", margin: "12px 0 8px" }}>Suivi en direct</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Indiquez simplement votre numéro de vol. Nous suivons l'heure réelle d'atterrissage et ajustons l'arrivée du chauffeur en conséquence.
              </p>
            </div>
            <div style={{ padding: "28px", background: "#111", border: "1px solid #222" }}>
              <span style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "12px" }}>02 / ACCUEIL PERSONNALISÉ</span>
              <h3 style={{ fontSize: "18px", margin: "12px 0 8px" }}>Pancarte à votre nom</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Votre chauffeur vous attend dès la sortie de la zone sous douane, pancarte nominative en main, pour vous aider avec vos bagages.
              </p>
            </div>
            <div style={{ padding: "28px", background: "#111", border: "1px solid #222" }}>
              <span style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "12px" }}>03 / DÉPOSE DIRECTE</span>
              <h3 style={{ fontSize: "18px", margin: "12px 0 8px" }}>Porte-à-porte jusqu'au Riad</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                Nous vous déposons à l'entrée de votre hôtel ou coordonnons avec les porteurs de votre riad dans la médina piétonne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Besoin d'un transfert aéroport personnalisé ?</h2>
          <p>
            Réservez en 1 minute sur WhatsApp. 0% d'acompte sous 300 €, règlement en espèces à votre chauffeur à l'arrivée.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Bonjour!%20Je%20souhaite%20r%C3%A9server%20un%20transfert%20a%C3%A9roport%20au%20Maroc.%20Pouvez-vous%20me%20confirmer%20le%20tarif%20et%20la%20disponibilit%C3%A9%20?"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              Réserver sur WhatsApp
            </a>
            <Link href="/fr/transfers" className="btn btn-outline-white btn-lg">
              Catalogue Complet des Liaisons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
