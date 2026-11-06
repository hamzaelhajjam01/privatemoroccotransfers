import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { SCHEMA_AGGREGATE_RATING, SCHEMA_REVIEWS_FR } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Excursions d'une Journée au Maroc avec Chauffeur Privé | Private Morocco Transfers" },
  description: "Réservez un chauffeur privé pour vos excursions à la journée au Maroc : Haut Atlas, Vallée de l'Ourika, Cascades d'Ouzoud, Essaouira, Désert d'Agafay. Tarifs fixes par véhicule.",
  alternates: {
    canonical: `${SITE_URL}/fr/day-trips`,
    languages: {
      "fr": `${SITE_URL}/fr/day-trips`,
      "en": `${SITE_URL}/day-trips`,
      "x-default": `${SITE_URL}/day-trips`,
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
        { "@type": "ListItem", position: 2, name: "Excursions d'une Journée", item: `${SITE_URL}/fr/day-trips` },
      ],
    },
    {
      "@type": "TouristInformationCenter",
      name: "Excursions Privées d'une Journée au Maroc",
      provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
      aggregateRating: SCHEMA_AGGREGATE_RATING,
      review: SCHEMA_REVIEWS_FR,
      areaServed: "Morocco",
      description: "Excursions privées d'une journée avec chauffeur dédié, prise en charge à l'hôtel et retour le soir.",
    },
  ],
};

const DAY_TRIPS = [
  {
    category: "nature",
    title: "Vallée de l'Ourika & Cascades de Setti Fatma",
    duration: "Journée entière (8h)",
    pax: "1–4 passagers",
    priceEur: 75,
    priceMad: 825,
    desc: "Villages berbères suspendus, coopératives d'huile d'argan et balade rafraîchissante le long de la rivière de montagne.",
    bg: "/img/hero-day-trips.jpg",
  },
  {
    category: "nature",
    title: "Cascades d'Ouzoud (110 mètres)",
    duration: "Journée entière (9h)",
    pax: "1–4 passagers",
    priceEur: 120,
    priceMad: 1320,
    desc: "Les plus hautes chutes d'eau d'Afrique du Nord, avec singes magots en liberté et traversée en barque traditionnelle.",
    bg: "/img/blog/day-trips.jpg",
  },
  {
    category: "coastal",
    title: "Essaouira Mogador (Aller-Retour)",
    duration: "Journée entière (10h)",
    pax: "1–4 passagers",
    priceEur: 160,
    priceMad: 1760,
    desc: "Remparts maritimes portugais, port de pêche animé, médina UNESCO et dégustation de poissons frais face à l'océan.",
    bg: "/img/routes/marrakech-essaouira.jpg",
  },
  {
    category: "desert",
    title: "Désert d'Agafay & Coucher de Soleil",
    duration: "Après-midi & Soirée (5h)",
    pax: "1–4 passagers",
    priceEur: 80,
    priceMad: 880,
    desc: "Désert de pierres et de collines arides à 45 minutes de Marrakech. Coucher de soleil magique et dîner sous tente nomade en option.",
    bg: "/img/blog/sahara-merzouga.jpg",
  },
  {
    category: "mountain",
    title: "Imlil, Asni & Massif du Toubkal",
    duration: "Journée entière (8h)",
    pax: "1–4 passagers",
    priceEur: 85,
    priceMad: 935,
    desc: "Au cœur du parc national du Toubkal. Paysages alpins, terrasses agricoles et authenticité de la vie montagnarde berbère.",
    bg: "/img/hero-city-to-city.jpg",
  },
  {
    category: "heritage",
    title: "Ksar d'Aït Ben Haddou & Kasbah de Taourirt",
    duration: "Journée complète (11h)",
    pax: "1–4 passagers",
    priceEur: 190,
    priceMad: 2090,
    desc: "Passage spectaculaire du col du Tizi n'Tichka et visite du ksar fortifié classé UNESCO où ont été tournés Gladiator et Game of Thrones.",
    bg: "/img/fleet-scenes/toyota-prado.jpg",
  },
];

export default function FrenchDayTripsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Excursions d'une Journée</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            100% Privé · Chauffeur Dédié Toute la Journée
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            Excursions d'une Journée
            <br />
            au Maroc
          </h1>
          <p className="hero-sub">
            Partez explorer les trésors du Maroc à votre propre rythme. Votre chauffeur privé vient vous chercher à votre hôtel le matin et reste à votre disposition exclusive toute la journée.
          </p>
        </div>
      </div>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <button className="filter-btn active" data-filter="all">Toutes les Excursions</button>
            <button className="filter-btn" data-filter="nature">Nature &amp; Vallées</button>
            <button className="filter-btn" data-filter="mountain">Montagnes de l'Atlas</button>
            <button className="filter-btn" data-filter="coastal">Côte Atlantique</button>
            <button className="filter-btn" data-filter="desert">Désert d'Agafay</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="section-label">Évasion au Départ de Marrakech</span>
              <h2 className="heading-lg" style={{ margin: 0 }}>Excursions Privées Phares</h2>
            </div>
            <Link href="/fr/transfers" className="btn btn-outline">
              Catalogue Tous Transferts ↗
            </Link>
          </div>

          <div className="listing-grid">
            {DAY_TRIPS.map((item) => (
              <div key={item.title} className="listing-card" data-category={item.category}>
                <div className="listing-img" style={{ backgroundImage: `url(${item.bg})` }}>
                  <span className="listing-badge">Excursion Privée</span>
                  <span className="listing-fixed-badge">Prix Fixe</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">{item.title}</h3>
                  <div className="listing-features">
                    <span className="feature-tag">{item.duration}</span>
                    <span className="feature-tag">{item.pax}</span>
                    <span className="feature-tag">Berline / Van</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: "12px 0", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                  <ul className="listing-includes">
                    <li>Prise en charge et retour à votre riad/hôtel</li>
                    <li>Véhicule privé climatisé &amp; carburant inclus</li>
                    <li>Arrêts libres pour photos et déjeuner</li>
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">Forfait journée</div>
                      <div className="listing-price-amount">
                        €{item.priceEur} ({item.priceMad} MAD)
                      </div>
                      <div className="listing-price-unit">par voiture (non par personne)</div>
                    </div>
                    <a
                      href={`https://wa.me/212760426269?text=${encodeURIComponent(`Bonjour! Je souhaite réserver l'excursion privée : ${item.title} (€${item.priceEur}).`)}`}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-gold"
                      style={{ padding: "10px 20px" }}
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Envie d'une excursion sur mesure ?</h2>
          <p>
            Parcours de golf, randonnée dans les villages berbères ou halte gastronomique : indiquez-nous vos envies sur WhatsApp pour un programme personnalisé au meilleur prix.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Bonjour!%20Je%20souhaite%20organiser%20une%20excursion%20sur%20mesure%20au%20Maroc.%20Pouvez-vous%20m'aider%20?"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              Organiser sur WhatsApp
            </a>
            <Link href="/fr" className="btn btn-outline-white btn-lg">
              Retour à l'Accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
