/** Server-only access to the 64 French vehicle × city pages (content/listings.json). */
import listingData from "@/content/listings.json";
import type { Category, FleetCity } from "./fleet";
import { quote, type VehicleKey } from "./pricing";

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

/** Airport names as used in the price list (lib/pricing.ts CITIES). */
const AIRPORT: Record<string, string> = {
  Marrakech: "Marrakech Airport (RAK)",
  Casablanca: "Casablanca Airport (CMN)",
  Agadir: "Agadir Airport (AGA)",
  Fes: "Fes Airport (FEZ)",
  Tangier: "Tangier Airport (TNG)",
  Rabat: "Rabat Airport (RBA)",
  Essaouira: "Essaouira Airport (ESU)",
};

const VEHICLE: Record<Category, VehicleKey> = {
  Sedan: "sedan",
  Business: "suv",
  SUV: "suv",
  Van: "minivan",
  Minibus: "minibus",
};

const price = (from: string, to: string, v: VehicleKey, round = false) => quote(from, to, v, round)?.eur ?? 0;

/**
 * Prices are always recalculated from the live price list (content/routes.json, with the
 * calculator's per-km fallback), so these pages never show outdated amounts.
 */
function withLivePrices(l: Listing): Listing {
  const v = VEHICLE[l.category] ?? "sedan";
  const airport = AIRPORT[l.city] ?? l.city;
  const prices: PriceRow[] = l.prices.map((p) => {
    if (p.city === l.city) {
      return { ...p, airportOne: price(airport, l.city, v), airportRound: price(airport, l.city, v, true), intercityOne: 0, intercityRound: 0 };
    }
    return {
      ...p,
      airportOne: price(airport, p.city, v),
      airportRound: price(airport, p.city, v, true),
      intercityOne: price(l.city, p.city, v),
      intercityRound: price(l.city, p.city, v, true),
    };
  });
  const local = prices.find((p) => p.city === l.city);
  const fromEur = local?.airportOne || l.fromEur;
  const cell = (n: number) => `<td>${n > 0 ? n : "—"}</td>`;
  const rows = [...prices]
    .sort((a, b) => a.cityFr.localeCompare(b.cityFr, "fr"))
    .map((p) => `<tr><td>${p.cityFr}</td>${cell(p.airportOne)}${cell(p.airportRound)}${cell(p.intercityOne)}${cell(p.intercityRound)}</tr>`)
    .join("");
  const bodyHtml = l.bodyHtml.replace(/(Tarifs de trajet[\s\S]*?<tbody>)[\s\S]*?(<\/tbody>)/, `$1${rows}$2`);
  return { ...l, prices, fromEur, bodyHtml };
}

export const LISTINGS = (listingData as Listing[]).map(withLivePrices);
export const getListing = (slug: string) => LISTINGS.find((l) => l.slug === slug);
export const listingsInCity = (city: string) => LISTINGS.filter((l) => l.city === city);
