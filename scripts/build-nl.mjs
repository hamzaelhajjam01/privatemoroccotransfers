import { writeFileSync } from "node:fs";
import { nlRoutesPart1 } from "./data/nl-part1.mjs";
import { nlRoutesPart2 } from "./data/nl-part2.mjs";

const allNl = { ...nlRoutesPart1, ...nlRoutesPart2 };
writeFileSync("./content/route-i18n/nl.json", JSON.stringify(allNl, null, 2) + "\n");
console.log(`Wrote nl.json with ${Object.keys(allNl).length} routes`);
