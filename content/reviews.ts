/**
 * Homepage reviews.
 * ⚠ These four are PLACEHOLDERS written for the layout. Replace them with real reviews
 * (copy the text exactly from Google / TripAdvisor) before launch.
 * - photo: the reviewer's own public profile photo URL if you have it; otherwise an initial avatar is shown.
 * - source + url: set only for a real review, so the Google badge links to it.
 */
export type Review = {
  name: string;
  country: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  route?: string;
  photo?: string;
  source?: "Google" | "TripAdvisor";
  url?: string;
};

export const REVIEWS: Review[] = [
  { name: "Sarah M.", country: "United Kingdom", rating: 5, route: "Marrakech airport → Medina",
    text: "Our driver was waiting with a sign at arrivals, the car was spotless, and the price was exactly what we were quoted." },
  { name: "Thomas B.", country: "France", rating: 5, route: "Marrakech → Essaouira",
    text: "Punctual, professional and calm. No surprises at the end." },
  { name: "Anna K.", country: "Germany", rating: 5, route: "5-day private tour",
    text: "Five days across Morocco with the same driver. He knew every road and every good place to stop." },
  { name: "James O.", country: "United States", rating: 5, route: "Casablanca airport",
    text: "My flight was two hours late and the driver waited without charging extra. Rare service." },
];
