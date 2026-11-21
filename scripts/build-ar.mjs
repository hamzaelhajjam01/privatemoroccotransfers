import { writeFileSync } from "node:fs";
import { arRoutesPart1 } from "./data/ar-part1.mjs";
import { arRoutesPart2 } from "./data/ar-part2.mjs";
import { arRoutesPart3 } from "./data/ar-part3.mjs";
import { arRoutesPart4 } from "./data/ar-part4.mjs";

const allAr = {
  ...arRoutesPart1,
  ...arRoutesPart2,
  ...arRoutesPart3,
  ...arRoutesPart4,
};

writeFileSync("./content/route-i18n/ar.json", JSON.stringify(allAr, null, 2) + "\n");
console.log(`Successfully wrote ar.json with ${Object.keys(allAr).length} routes`);
