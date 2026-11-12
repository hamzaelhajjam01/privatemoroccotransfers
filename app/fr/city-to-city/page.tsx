import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, buildMultilingualAlternates } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_FR } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Transferts Intervilles Maroc — Prix Fixes Garantis" },
  description: "Transferts intervilles privés à prix fixes entre toutes les villes du Maroc. Marrakech à Essaouira, Casablanca à Marrakech, Fès à Chefchaouen. Péages, carburant et arrêts photos inclus.",
  alternates: buildMultilingualAlternates("/city-to-city", "fr"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/fr` },
        { "@type": "ListItem", position: 2, name: "Transferts Intervilles", item: `${SITE_URL}/fr/city-to-city` },
      ],
    },
    {
      "@type": "Product",
      name: "Transferts Intervilles au Maroc",
      description: "Liaisons privées directes de ville à ville au Maroc avec chauffeurs professionnels agréés, carburant et péages inclus.",
      image: `${SITE_URL}/cars/mercedes-vito.webp`,
      url: `${SITE_URL}/fr/city-to-city`,
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "75",
        highPrice: "380",
        offerCount: "35",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/fr/city-to-city`,
      },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_FR,
    },
    {
      "@type": "TaxiService",
      name: "Service Intervilles Chauffeur Privé Maroc",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      areaServed: "Morocco",
      description: "Liaisons privées directes de ville à ville au Maroc avec chauffeurs professionnels agréés.",
    },
  ],
};

const CITY_LISTINGS = [
  {
    category: "marrakech",
    title: "Marrakech → Essaouira",
    slug: "marrakech-to-essaouira",
    distance: "180 km",
    duration: "2h30",
    priceEur: 90,
    priceMad: 980,
    desc: "Autoroute et route côtière. Arrêt photo possible auprès des chèvres sur les arganiers.",
    bg: "/img/routes/marrakech-essaouira.jpg",
  },
  {
    category: "marrakech",
    title: "Marrakech → Agadir / Taghazout",
    slug: "marrakech-to-agadir",
    distance: "240 km",
    duration: "3h00",
    priceEur: 135,
    priceMad: 1480,
    desc: "Autoroute moderne A3 traversant le Haut Atlas. Dépose directe à votre surf camp ou resort.",
    bg: "/img/routes/marrakech-agadir.jpg",
  },
  {
    category: "casablanca",
    title: "Casablanca → Marrakech",
    slug: "casablanca-to-marrakech",
    distance: "240 km",
    duration: "2h45",
    priceEur: 150,
    priceMad: 1650,
    desc: "Liaison autoroutière A7 de centre-ville à centre-ville ou vers votre riad dans la médina.",
    bg: "/img/routes/marrakech-casablanca.jpg",
  },
  {
    category: "fes",
    title: "Fès → Chefchaouen (La Ville Bleue)",
    slug: "fes-to-chefchaouen",
    distance: "200 km",
    duration: "3h30",
    priceEur: 140,
    priceMad: 1540,
    desc: "Route panoramique à travers les montagnes du Rif. Chauffeur expérimenté et climatisé.",
    bg: "/img/routes/marrakech-chefchaouen.jpg",
  },
  {
    category: "marrakech",
    title: "Marrakech → Fès",
    slug: "marrakech-to-fes",
    distance: "530 km",
    duration: "6h00",
    priceEur: 240,
    priceMad: 2640,
    desc: "Grande liaison autoroutière via Casablanca/Rabat ou via Beni Mellal avec arrêts déjeuner.",
    bg: "/img/routes/marrakech-fes.jpg",
  },
  {
    category: "marrakech",
    title: "Marrakech → Ouarzazate / Aït Ben Haddou",
    slug: "marrakech-to-ouarzazate",
    distance: "200 km",
    duration: "4h00",
    priceEur: 120,
    priceMad: 1320,
    desc: "Franchissement mythique du col du Tizi n'Tichka (2 260 m). Arrêts panoramiques garantis.",
    bg: "/img/routes/marrakech-merzouga.jpg",
  },
  {
    category: "tangier",
    title: "Tanger → Chefchaouen",
    slug: "tangier-to-chefchaouen",
    distance: "115 km",
    duration: "2h00",
    priceEur: 90,
    priceMad: 980,
    desc: "Liaison directe depuis le port de Tanger ville ou l'aéroport TNG jusqu'à votre hôtel bleu.",
    bg: "/img/routes/marrakech-tangier.jpg",
  },
  {
    category: "casablanca",
    title: "Casablanca → Rabat",
    slug: "casablanca-to-rabat",
    distance: "85 km",
    duration: "1h00",
    priceEur: 65,
    priceMad: 710,
    desc: "Transfert d'affaires ou de tourisme entre la capitale économique et la capitale administrative.",
    bg: "/img/routes/marrakech-rabat.jpg",
  },
];

export default function FrenchCityToCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Transferts Intervilles</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            Service Porte-à-Porte · Péages &amp; Carburant Inclus
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            Transferts Intervilles
            <br />
            au Maroc
          </h1>
          <p className="hero-sub">
            Voyagez entre toutes les villes du Maroc en toute quiétude. Véhicules confortables et climatisés, chauffeurs expérimentés, arrêts panoramiques flexibles et tarifs fermes par véhicule.
          </p>
        </div>
      </div>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <button className="filter-btn active" data-filter="all">Tous les Trajets</button>
            <button className="filter-btn" data-filter="marrakech">Depuis Marrakech</button>
            <button className="filter-btn" data-filter="casablanca">Depuis Casablanca</button>
            <button className="filter-btn" data-filter="fes">Depuis Fès</button>
            <button className="filter-btn" data-filter="tangier">Depuis Tanger</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="section-label">Liaisons Nationales</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>Trajets Intervilles les Plus Demandés</h2>
            </div>
            <Link href="/fr/transfers" className="btn btn-outline">
              Annuaire Complet 150+ Liaisons ↗
            </Link>
          </div>

          <div className="listing-grid">
            {CITY_LISTINGS.map((item) => (
              <div key={item.slug} className="listing-card" data-category={item.category}>
                <div className="listing-img" style={{ backgroundImage: `url(${item.bg})` }}>
                  <span className="listing-badge">Interville</span>
                  <span className="listing-fixed-badge">Prix Fixe</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">
                    <Link href={`/fr/transfers/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <div className="listing-features">
                    <span className="feature-tag">{item.distance}</span>
                    <span className="feature-tag">~{item.duration}</span>
                    <span className="feature-tag">Berline / Van</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: "12px 0", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                  <ul className="listing-includes">
                    <li>Chauffeur professionnel bilingue</li>
                    <li>Service porte-à-porte &amp; tous péages inclus</li>
                    <li>Paiement à l'arrivée (0% acompte &lt; 300 €)</li>
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">Dès</div>
                      <div className="listing-price-amount">
                        €{item.priceEur} ({item.priceMad} MAD)
                      </div>
                      <div className="listing-price-unit">par voiture</div>
                    </div>
                    <Link href={`/fr/transfers/${item.slug}`} className="btn btn-gold" style={{ padding: "10px 20px" }}>
                      Tarifs &amp; Détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Votre trajet n'est pas dans la liste ?</h2>
          <p>
            Nous couvrons l'intégralité du réseau routier marocain. Envoyez-nous simplement vos villes de départ et d'arrivée sur WhatsApp pour un devis fixe immédiat.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Bonjour!%20Je%20cherche%20un%20transfert%20interville%20au%20Maroc.%20Pouvez-vous%20me%20proposer%20un%20tarif%20fixe%20?"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              Demander un devis sur WhatsApp
            </a>
            <Link href="/fr/calculator" className="btn btn-outline-white btn-lg">
              Calculateur de Prix en Ligne
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
