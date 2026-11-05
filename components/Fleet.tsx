import fs from "node:fs";
import path from "node:path";
import FleetByCity from "./FleetByCity";
import type { ComponentProps } from "react";

/** Server wrapper: tells the cards which car photos exist in public/img/fleet. */
export default function Fleet(props: Omit<ComponentProps<typeof FleetByCity>, "photos">) {
  const dir = path.join(process.cwd(), "public", "img", "fleet");
  const photos = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".jpg")).map((f) => f.replace(/\.jpg$/, ""))
    : [];
  return <FleetByCity {...props} photos={photos} />;
}
