import { readFileSync } from "node:fs";
import { join } from "node:path";
import routes from "@/content/route-prices.json";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

type Route = { slug: string; fromRaw: string; toRaw: string; distance: string; duration: string; price_sedan: number; price_van: number; price_minibus: number };

const eur = (n: number) => `€${n} (${n * 11} MAD)`;

// The intro text lives in content/llms-full.txt; the price table is always built
// from content/routes.json so AI assistants never read outdated prices.
const file = readFileSync(join(process.cwd(), "content", "llms-full.txt"), "utf8");
const intro = file.split(/\r?\n\| Departure \|/)[0].trimEnd();
const rows = (routes as Route[]).map(
  (r) => `| ${r.fromRaw} | ${r.toRaw} | ${r.distance} | ${r.duration} | ${eur(r.price_sedan)} | ${eur(r.price_van)} | ${eur(r.price_minibus)} | ${SITE_URL}/transfers/${r.slug} |`,
);
const body = [
  intro,
  "",
  "| Departure | Destination | Distance | Duration | Sedan (1–4 pax) | Van (5–7 pax) | Minibus (8–14 pax) | Direct URL |",
  "|---|---|---|---|---|---|---|---|",
  ...rows,
  "",
].join("\n");

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
