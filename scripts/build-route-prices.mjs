// Writes content/route-prices.json: only the fields the price calculator needs
// (no descriptions, FAQs or highlights), so browser bundles stay small.
// Runs automatically before every build (package.json "prebuild").
import { readFileSync, writeFileSync } from "node:fs";

const FIELDS = ["slug", "from", "to", "fromRaw", "toRaw", "distance", "duration", "price_sedan", "price_van", "price_minibus", "popular"];
const routes = JSON.parse(readFileSync(new URL("../content/routes.json", import.meta.url), "utf8"));
const slim = routes.map((r) => Object.fromEntries(FIELDS.filter((k) => r[k] !== undefined).map((k) => [k, r[k]])));
writeFileSync(new URL("../content/route-prices.json", import.meta.url), JSON.stringify(slim) + "\n");
console.log(`route-prices.json: ${slim.length} routes`);
