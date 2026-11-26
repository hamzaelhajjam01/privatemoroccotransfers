import { readFileSync } from "node:fs";
import { join } from "node:path";
import routes from "@/content/route-prices.json";

export const dynamic = "force-static";

type Route = { slug: string; fromRaw: string; toRaw: string; distance: string; duration: string; price_sedan: number };

/** Routes listed under "Popular Routes"; prices always come from content/routes.json. */
const POPULAR = [
  "marrakech-airport-to-marrakech",
  "marrakech-to-essaouira",
  "casablanca-airport-to-marrakech",
  "casablanca-to-marrakech",
  "marrakech-to-agafay-desert",
  "marrakech-to-agadir",
  "marrakech-to-taghazout",
  "tangier-to-chefchaouen",
  "fes-to-chefchaouen",
  "casablanca-airport-to-casablanca",
];

const lines = POPULAR.map((s) => (routes as Route[]).find((r) => r.slug === s))
  .filter((r): r is Route => Boolean(r))
  .map((r) => `- **${r.fromRaw} to ${r.toRaw}:** €${r.price_sedan} (~${(r.price_sedan * 11).toLocaleString("en-US")} MAD) | ${r.duration} | ${r.distance}`);

// Served through Next.js (not /public) so the host keeps the UTF-8 charset.
const file = readFileSync(join(process.cwd(), "content", "llms.txt"), "utf8");
const body = file.replace(
  /(## Popular Routes & Starting Rates \(Comfort Sedan\)\r?\n)[\s\S]*?(\r?\n\r?\n## )/,
  (_m, head: string, tail: string) => `${head}${lines.join("\n")}${tail}`,
);

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
