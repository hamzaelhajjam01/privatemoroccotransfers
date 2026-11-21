import { writeFileSync } from "node:fs";
import { frRoutesPart1 } from "./data/fr-part1.mjs";
import { frRoutesPart2 } from "./data/fr-part2.mjs";

const allFr = { ...frRoutesPart1, ...frRoutesPart2 };
writeFileSync("./content/route-i18n/fr.json", JSON.stringify(allFr, null, 2) + "\n");
console.log(`Wrote fr.json with ${Object.keys(allFr).length} routes`);
