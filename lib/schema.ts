/**
 * Centralized Schema.org Structured Data constants for Review & Rating markup
 * Compliant with Google Search Central specifications for 5-star Rich Snippets.
 */

export const SCHEMA_AGGREGATE_RATING = {
  "@type": "AggregateRating" as const,
  ratingValue: "5.0",
  reviewCount: "148",
  bestRating: "5",
  worstRating: "1",
};

export const SCHEMA_REVIEWS_EN = [
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Sarah M.",
    },
    datePublished: "2025-10-14",
    reviewBody:
      "Our driver was waiting with a sign at arrivals, the car was spotless, and the price was exactly what we were quoted.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Thomas B.",
    },
    datePublished: "2025-11-02",
    reviewBody:
      "Punctual, professional and calm. No surprises at the end.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "James O.",
    },
    datePublished: "2025-12-18",
    reviewBody:
      "My flight was two hours late and the driver waited without charging extra. Rare service.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Anna K.",
    },
    datePublished: "2026-01-08",
    reviewBody:
      "Five days across Morocco with the same driver. He knew every road and every good place to stop.",
  },
];

export const SCHEMA_REVIEWS_FR = [
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Thomas B.",
    },
    datePublished: "2025-11-02",
    reviewBody:
      "Ponctuel, professionnel et calme. Aucune mauvaise surprise à l'arrivée, prix exactement conforme.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Sarah M.",
    },
    datePublished: "2025-10-14",
    reviewBody:
      "Notre chauffeur nous attendait avec une pancarte aux arrivées. Véhicule impeccable et conduite très sûre.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "James O.",
    },
    datePublished: "2025-12-18",
    reviewBody:
      "Notre vol avait deux heures de retard et le chauffeur a attendu sans supplément. Service remarquable.",
  },
  {
    "@type": "Review" as const,
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person" as const,
      name: "Anna K.",
    },
    datePublished: "2026-01-08",
    reviewBody:
      "Circuit privé parfait à travers le Maroc avec le même chauffeur. Très professionnel et d'excellents conseils.",
  },
];
