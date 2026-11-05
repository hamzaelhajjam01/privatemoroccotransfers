/**
 * Private-driver fleet (client-safe, small). Generated from content/fleet.json.
 * Prices are in EUR per vehicle. Full listing pages live in lib/listings.ts (server only).
 */
import fleetData from "@/content/fleet.json";

export const FLEET_CITIES = ["Marrakech", "Casablanca", "Agadir", "Fes", "Tangier", "Rabat", "Essaouira"] as const;
export type FleetCity = (typeof FLEET_CITIES)[number];
export type Category = "Sedan" | "Business" | "SUV" | "Van" | "Minibus";

export type Vehicle = {
  slug: string;
  model: string;
  category: Category;
  passengers: number;
  bags: number;
  fromEur: number;
  cities: FleetCity[];
  image?: string;
  /** lifestyle photo of the car in Morocco (public/img/fleet-scenes) */
  scene?: string;
  listingSlugs: Partial<Record<FleetCity, string>>;
};

export const FLEET = fleetData as Vehicle[];

export const vehiclesIn = (city: FleetCity | "all") =>
  city === "all" ? FLEET : FLEET.filter((v) => v.cities.includes(city));

/** Detail-page slug for a model in a city (falls back to Marrakech, then any city). */
export function listingFor(v: Vehicle, city: FleetCity | "all"): string | undefined {
  return (city !== "all" && v.listingSlugs[city]) || v.listingSlugs.Marrakech || Object.values(v.listingSlugs)[0];
}
