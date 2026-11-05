/** Server-only access to the 64 French vehicle × city pages (content/listings.json). */
import listingData from "@/content/listings.json";
import type { Category, FleetCity } from "./fleet";

export type PriceRow = {
  cityFr: string; city: string;
  airportOne: number; airportRound: number; intercityOne: number; intercityRound: number;
};

export type Listing = {
  slug: string; modelKey: string; model: string; modelEn: string; category: Category;
  citySlug: string; city: FleetCity; cityFr: string; title: string; description: string;
  passengers: number; bags: number; languages: string[]; fromEur: number;
  prices: PriceRow[]; images: string[]; bodyHtml: string;
};

export const LISTINGS = listingData as Listing[];
export const getListing = (slug: string) => LISTINGS.find((l) => l.slug === slug);
export const listingsInCity = (city: string) => LISTINGS.filter((l) => l.city === city);
