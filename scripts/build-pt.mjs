import { writeFileSync } from "node:fs";
import { ptRoutesPart1 } from "./data/pt-part1.mjs";
import { ptRoutesPart2 } from "./data/pt-part2.mjs";
import { ptRoutesPart3 } from "./data/pt-part3.mjs";
import { ptRoutesPart4 } from "./data/pt-part4.mjs";

const allPt = {
  ...ptRoutesPart1,
  ...ptRoutesPart2,
  ...ptRoutesPart3,
  ...ptRoutesPart4,
};

writeFileSync("./content/route-i18n/pt.json", JSON.stringify(allPt, null, 2) + "\n");
console.log(`Wrote pt.json with ${Object.keys(allPt).length} routes`);
