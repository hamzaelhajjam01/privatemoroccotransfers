import routesData from "@/content/routes.json";

export interface RouteRecord {
  slug: string;
  from: string;
  to: string;
  fromRaw?: string;
  toRaw?: string;
  distance: string;
  duration: string;
  price_sedan: number;
  price_van: number;
  price_minibus: number;
  popular?: boolean;
}

export const ROUTES: RouteRecord[] = routesData as RouteRecord[];

export const CITIES = [
  "Marrakech",
  "Marrakech Airport (RAK)",
  "Palmeraie (Marrakech)",
  "Casablanca",
  "Casablanca Airport (CMN)",
  "Essaouira",
  "Essaouira Airport (ESU)",
  "Agadir",
  "Agadir Airport (AGA)",
  "Taghazout",
  "Agafay Desert",
  "Ourika Valley",
  "Imlil (High Atlas)",
  "Ouzoud Waterfalls",
  "Ouarzazate",
  "Ait Ben Haddou",
  "Fes",
  "Fes Airport (FEZ)",
  "Meknes & Volubilis",
  "Tangier",
  "Tangier Airport (TNG)",
  "Tangier Med Port",
  "Rabat",
  "Rabat Airport (RBA)",
  "Chefchaouen",
  "Merzouga (Sahara)",
  "Oualidia",
  "Imsouane",
  "Sidi Kaouki",
  "Paradise Valley",
] as const;

export type CityName = (typeof CITIES)[number];

export const VEHICLES = {
  sedan: { label: "Sedan", option: "Comfort Sedan (1–4 pax)" },
  suv: { label: "SUV / 4WD", option: "Executive SUV / 4WD (1–4 pax)" },
  minivan: { label: "Van", option: "Spacious Van (5–7 pax)" },
  minibus: { label: "Minibus", option: "Private Minibus (8–14 pax)" },
} as const;

export type VehicleKey = keyof typeof VEHICLES;

export const EUR_RATE = 11.0; // MAD per EUR (standard Moroccan tourism exchange rate)

export const CURRENCIES = {
  EUR: { code: "EUR", symbol: "€", rate: 1.0, label: "EUR (€)" },
  USD: { code: "USD", symbol: "$", rate: 1.08, label: "USD ($)" },
  GBP: { code: "GBP", symbol: "£", rate: 0.85, label: "GBP (£)" },
  MAD: { code: "MAD", symbol: "MAD", rate: 11.0, label: "MAD (DH)" },
} as const;

export type Currency = keyof typeof CURRENCIES;

export function convertPrice(eur: number, currency: Currency = "EUR"): { amount: number; formatted: string } {
  const c = CURRENCIES[currency] || CURRENCIES.EUR;
  const converted = Math.round(eur * c.rate);
  if (currency === "MAD") {
    return { amount: converted, formatted: `${converted.toLocaleString()} MAD` };
  }
  return { amount: converted, formatted: `${c.symbol}${converted}` };
}

function cleanCity(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "") // remove (RAK), (CMN), etc.
    .replace(/airport/g, "airport")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

/** Parses distance string like "180 km" into number */
function parseKm(distStr: string): number {
  const m = distStr.match(/(\d+[\d,.]*)/);
  if (!m) return 50;
  return parseFloat(m[1].replace(",", ""));
}

/** Parses duration string like "2h30", "15 min", "3h" into hours */
function parseHours(durStr: string): number {
  const hMatch = durStr.match(/(\d+)\s*h(?:our)?s?(?:\s*(\d+))?/i);
  if (hMatch) {
    const h = parseInt(hMatch[1], 10);
    const min = hMatch[2] ? parseInt(hMatch[2], 10) / 60 : 0;
    return Math.round((h + min) * 10) / 10;
  }
  const minMatch = durStr.match(/(\d+)\s*min/i);
  if (minMatch) {
    return Math.round((parseInt(minMatch[1], 10) / 60) * 10) / 10;
  }
  return 1;
}

/** Distance matrix fallback for city pairs when not directly in standard routes list */
const DISTANCE_MATRIX: Record<string, number> = {
  "marrakech-essaouira": 180,
  "marrakech-agadir": 240,
  "marrakech-casablanca": 240,
  "marrakech-fes": 540,
  "marrakech-tangier": 580,
  "marrakech-rabat": 320,
  "marrakech-ouarzazate": 200,
  "marrakech-merzouga": 560,
  "marrakech-chefchaouen": 580,
  "marrakech-agafaydesert": 35,
  "marrakech-ourikavalley": 45,
  "marrakech-imlil": 65,
  "marrakech-taghazout": 260,
  "casablanca-rabat": 90,
  "casablanca-fes": 290,
  "casablanca-tangier": 340,
  "casablanca-agadir": 460,
  "casablanca-essaouira": 370,
  "agadir-essaouira": 175,
  "agadir-taghazout": 25,
  "fes-chefchaouen": 200,
  "tangier-chefchaouen": 115,
  "fes-merzouga": 460,
  "rabat-tangier": 250,
  "rabat-fes": 200,
};

export function getRouteRecord(from: string, to: string): RouteRecord | null {
  const fromC = cleanCity(from);
  const toC = cleanCity(to);

  for (const r of ROUTES) {
    const rFrom = cleanCity(r.from);
    const rTo = cleanCity(r.to);

    if (
      (rFrom === fromC && rTo === toC) ||
      (rFrom === toC && rTo === fromC)
    ) {
      return r;
    }
  }

  // Secondary fuzzy match (e.g. matching "marrakech" to "marrakechairport" if airport wasn't specified)
  for (const r of ROUTES) {
    const rFrom = cleanCity(r.from);
    const rTo = cleanCity(r.to);

    const matchForward =
      (rFrom.includes(fromC) || fromC.includes(rFrom)) &&
      (rTo.includes(toC) || toC.includes(rTo));
    const matchBackward =
      (rFrom.includes(toC) || toC.includes(rFrom)) &&
      (rTo.includes(fromC) || fromC.includes(rTo));

    if (matchForward || matchBackward) {
      return r;
    }
  }

  return null;
}

export function quote(
  from: string,
  to: string,
  vehicle: VehicleKey = "sedan",
  roundTrip: boolean = false
) {
  if (!from || !to || from === to) return null;

  const found = getRouteRecord(from, to);

  let km: number;
  let hours: number;
  let baseEur: number;

  if (found) {
    km = parseKm(found.distance);
    hours = parseHours(found.duration);

    switch (vehicle) {
      case "sedan":
        baseEur = found.price_sedan;
        break;
      case "suv":
        // Executive 4x4 Prado rate: between sedan and van or 25% premium for 4WD
        baseEur = Math.round(Math.max(found.price_sedan * 1.25, found.price_van));
        break;
      case "minivan":
        baseEur = found.price_van;
        break;
      case "minibus":
        baseEur = found.price_minibus;
        break;
    }
  } else {
    // Dynamic fallback calibrated to market rates
    const fromC = cleanCity(from);
    const toC = cleanCity(to);
    const pairKey1 = `${fromC}-${toC}`;
    const pairKey2 = `${toC}-${fromC}`;
    km = DISTANCE_MATRIX[pairKey1] ?? DISTANCE_MATRIX[pairKey2] ?? 120;
    hours = Math.round((km / 80) * 10) / 10;

    switch (vehicle) {
      case "sedan":
        baseEur = Math.max(30, Math.round(km * 0.65));
        break;
      case "suv":
        baseEur = Math.max(45, Math.round(km * 0.8));
        break;
      case "minivan":
        baseEur = Math.max(40, Math.round(km * 0.85));
        break;
      case "minibus":
        baseEur = Math.max(60, Math.round(km * 1.25));
        break;
    }
  }

  // Round trip gives 10% discount on return leg (1.9x base)
  const finalEur = roundTrip ? Math.round(baseEur * 1.9) : baseEur;
  const finalMad = Math.round(finalEur * EUR_RATE);

  const vehicleObj = VEHICLES[vehicle] || VEHICLES.sedan;

  return {
    km,
    hours,
    eur: finalEur,
    mad: finalMad,
    vehicle: vehicleObj.label,
  };
}
