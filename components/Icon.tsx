import { ICONS, type IconDef, type IconName } from "@/lib/icons";

type Props = { name: IconName; size?: number; className?: string; title?: string };

/** Inline brand icon. Colour follows the text colour (use .ic-gold for gold). */
export default function Icon({ name, size = 18, className, title }: Props) {
  const d = ICONS[name] as IconDef | undefined;
  if (!d) return null;
  const paint = d.fill
    ? { fill: "currentColor", stroke: "none" }
    : { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={["ic", className].filter(Boolean).join(" ")}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
      {...paint}
      dangerouslySetInnerHTML={{ __html: d.body }}
    />
  );
}
