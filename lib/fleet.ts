/**
 * Private-driver fleet (client-safe, small). Generated from content/fleet.json.
 * Prices are in EUR per vehicle. Full listing pages live in lib/listings.ts (server only).
 */
import fleetData from "@/content/fleet.json";
import { quote, type VehicleKey } from "./pricing";

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

const AIRPORT: Record<FleetCity, string> = {
  Marrakech: "Marrakech Airport (RAK)", Casablanca: "Casablanca Airport (CMN)", Agadir: "Agadir Airport (AGA)",
  Fes: "Fes Airport (FEZ)", Tangier: "Tangier Airport (TNG)", Rabat: "Rabat Airport (RBA)", Essaouira: "Essaouira Airport (ESU)",
};
const VEHICLE: Record<Category, VehicleKey> = { Sedan: "sedan", Business: "suv", SUV: "suv", Van: "minivan", Minibus: "minibus" };

/** "From" price = cheapest airport transfer for this vehicle type in its cities, from the live price list. */
export const FLEET = (fleetData as Vehicle[]).map((v) => {
  const live = v.cities.map((c) => quote(AIRPORT[c], c, VEHICLE[v.category] ?? "sedan")?.eur ?? 0).filter((n) => n > 0);
  return live.length ? { ...v, fromEur: Math.min(...live) } : v;
});

export const vehiclesIn = (city: FleetCity | "all") =>
  city === "all" ? FLEET : FLEET.filter((v) => v.cities.includes(city));

/** Detail-page slug for a model in a city (falls back to Marrakech, then any city). */
export function listingFor(v: Vehicle, city: FleetCity | "all"): string | undefined {
  return (city !== "all" && v.listingSlugs[city]) || v.listingSlugs.Marrakech || Object.values(v.listingSlugs)[0];
}
