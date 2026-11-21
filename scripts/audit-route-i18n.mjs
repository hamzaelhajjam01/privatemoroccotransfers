import { readFileSync, existsSync } from "node:fs";

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

const LANGS = ["fr", "es", "it", "de", "pt", "nl", "ar"];

function countWords(str) {
  if (!str) return 0;
  // Match words across Latin, Arabic, and other scripts
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

console.log("=== ROUTE I18N CONTENT AUDIT ===");
let hasErrors = false;

for (const lang of LANGS) {
  const filePath = `./content/route-i18n/${lang}.json`;
  if (!existsSync(filePath)) {
    console.log(`[${lang}] MISSING FILE: ${filePath}`);
    hasErrors = true;
    continue;
  }
  const data = JSON.parse(readFileSync(filePath, "utf8"));
  console.log(`\n--- Language: ${lang.toUpperCase()} ---`);
  let below900 = 0;
  let missing = 0;

  for (const slug of PRIORITY_ROUTES) {
    const route = data[slug];
    if (!route) {
      console.log(`  [MISSING] ${slug}`);
      missing++;
      hasErrors = true;
      continue;
    }
    const words = countRouteWords(route);
    if (words < 900) {
      console.log(`  [BELOW 900w] ${slug}: ${words} words`);
      below900++;
      hasErrors = true;
    } else {
      console.log(`  [OK] ${slug}: ${words} words (Overview: ${(route.routeOverview || []).length}p, Highlights: ${(route.highlights || []).length}, Stops: ${(route.whatToSeeItems || []).length}, FAQs: ${(route.faqs || []).length})`);
    }
  }
  console.log(`Summary for ${lang}: Missing: ${missing}, Below 900w: ${below900}, Total Routes: ${Object.keys(data).length}`);
}

if (hasErrors) {
  console.log("\nAudit finished with warnings/errors (see above).");
} else {
  console.log("\nALL 20 ROUTES IN ALL 7 LANGUAGES MEET OR EXCEED 900 WORDS!");
}
