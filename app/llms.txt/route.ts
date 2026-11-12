import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

// Served through Next.js (not /public) so the host keeps the UTF-8 charset.
const body = readFileSync(join(process.cwd(), "content", "llms.txt"), "utf8");

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
