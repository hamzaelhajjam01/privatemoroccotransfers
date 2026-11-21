import { writeFileSync } from "node:fs";
import { itRoutesPart1 } from "./data/it-part1.mjs";
import { itRoutesPart2 } from "./data/it-part2.mjs";
import { itRoutesPart3 } from "./data/it-part3.mjs";
import { itRoutesPart4 } from "./data/it-part4.mjs";

const allIt = {
  ...itRoutesPart1,
  ...itRoutesPart2,
  ...itRoutesPart3,
  ...itRoutesPart4,
};

writeFileSync("./content/route-i18n/it.json", JSON.stringify(allIt, null, 2) + "\n");
console.log(`Wrote it.json with ${Object.keys(allIt).length} routes`);
