import { writeFileSync } from "node:fs";
import { routes1_5 } from "./routes1_5.mjs";
import { routes6_10 } from "./routes6_10.mjs";
import { routes11_15 } from "./routes11_15.mjs";
import { routes16_20 } from "./routes16_20.mjs";

const PRIORITY_ROUTES = [
  "marrakech-airport-to-marrakech",
  "marrakech-to-essaouira",
  "casablanca-airport-to-marrakech",
  "casablanca-to-marrakech",
  "marrakech-to-fes",
  "fes-to-marrakech",
  "marrakech-to-agadir",
  "marrakech-to-merzouga",
  "fes-to-merzouga",
  "marrakech-to-chefchaouen",
  "tangier-to-chefchaouen",
  "fes-to-chefchaouen",
  "agadir-airport-to-taghazout",
  "agadir-airport-to-agadir",
  "marrakech-airport-to-essaouira",
  "marrakech-to-agafay-desert",
  "marrakech-to-ourika-valley",
  "marrakech-to-imlil",
  "marrakech-to-ouzoud-waterfalls",
  "marrakech-to-ait-ben-haddou",
];

const allRoutes = {
  ...routes1_5,
  ...routes6_10,
  ...routes11_15,
  ...routes16_20,
};

function countWords(str) {
  if (!str) return 0;
  const words = str.trim().match(/[\p{L}\p{N}]+/gu);
  return words ? words.length : 0;
}

function countRouteWords(route) {
  let total = 0;
  total += countWords(route.h1);
  total += countWords(route.heroSub);
  total += countWords(route.routeOverviewTitle);
  if (Array.isArray(route.routeOverview)) {
    for (const p of route.routeOverview) total += countWords(p);
  }
  total += countWords(route.highlightsTitle);
  if (Array.isArray(route.highlights)) {
    for (const h of route.highlights) total += countWords(h);
  }
  total += countWords(route.whatToSeeTitle);
  total += countWords(route.whatToSeeIntro);
  if (Array.isArray(route.whatToSeeItems)) {
    for (const item of route.whatToSeeItems) {
      total += countWords(item.title);
      total += countWords(item.description);
    }
  }
  total += countWords(route.faqsTitle);
  if (Array.isArray(route.faqs)) {
    for (const faq of route.faqs) {
      total += countWords(faq.q);
      total += countWords(faq.a);
    }
  }
  return total;
}

console.log("Checking all 20 routes for German (de)...");
let failed = false;

for (const slug of PRIORITY_ROUTES) {
  const r = allRoutes[slug];
  if (!r) {
    console.error(`MISSING ROUTE: ${slug}`);
    failed = true;
    continue;
  }
  const words = countRouteWords(r);
  const ok = words >= 900;
  console.log(`[${ok ? "OK" : "FAIL"}] ${slug}: ${words} words`);
  if (!ok) failed = true;

  // Check required placeholders
  const text = JSON.stringify(r);
  const requiredPlaceholders = [
    "{price_sedan}",
    "{price_sedan_mad}",
    "{price_van}",
    "{price_van_mad}",
    "{price_minibus}",
    "{price_minibus_mad}",
  ];
  for (const ph of requiredPlaceholders) {
    if (!text.includes(ph)) {
      console.error(`  MISSING PLACEHOLDER in ${slug}: ${ph}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error("BUILD ABORTED due to issues above.");
  process.exit(1);
}

const outputPath = "./content/route-i18n/de.json";
writeFileSync(outputPath, JSON.stringify(allRoutes, null, 2), "utf8");
console.log(`Successfully wrote complete German routes to ${outputPath}`);
