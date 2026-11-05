// Writes every icon to public/brand/icons/<name>.svg (gold), <name>-black.svg and <name>-white.svg
// Run: npx tsx scripts/export-icons.mjs  (or node --experimental-strip-types)
import fs from "node:fs";
const src = fs.readFileSync(new URL("../lib/icons.ts", import.meta.url), "utf8");
const icons = {};
for (const m of src.matchAll(/^\s+"?([a-z-]+)"?: \{ (fill: true, )?body: '(.*?)'(, fill: true)? \},?$/gm)) icons[m[1]] = { body: m[3], fill: !!(m[2] || m[4]) };
const out = new URL("../public/brand/icons/", import.meta.url);
fs.mkdirSync(out, { recursive: true });
const svg = (d, c) => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ${d.fill ? `fill="${c}" stroke="none"` : `fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`}>${d.body}</svg>\n`;
for (const [n, d] of Object.entries(icons)) {
  fs.writeFileSync(new URL(`${n}.svg`, out), svg(d, "#B8955A"));
  fs.writeFileSync(new URL(`${n}-black.svg`, out), svg(d, "#000000"));
  fs.writeFileSync(new URL(`${n}-white.svg`, out), svg(d, "#FFFFFF"));
}
console.log(Object.keys(icons).length, "icons exported");
