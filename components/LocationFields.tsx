"use client";

/**
 * From / To fields of the hero booking widget, as searchable dropdowns.
 * - Click or focus: grouped list (airports, cities, mountains, desert, coast).
 * - Typing filters the list (any language, airport codes, local names).
 * - Anything not in the list can still be used ("Use “Hotel X”").
 * - Once From is chosen, each destination shows its fixed price, and the
 *   widget shows the price for the selected passenger count before booking.
 * The inputs keep name="from" / name="to", so the widget's submit code is unchanged.
 */
import { useEffect, useId, useMemo, useRef, useState } from "react";
import routeData from "@/content/route-prices.json";
import { FROM_GROUPS, LOCATIONS, LOC_COPY, type Loc, type LocGroup } from "./widget-locations";

type Route = { from: string; to: string; price_sedan: number; price_van: number; price_minibus: number };
const ROUTE_INDEX = new Map<string, Route>();
for (const r of routeData as Route[]) ROUTE_INDEX.set(`${r.from}|${r.to}`, r);

const GROUP_ORDER: LocGroup[] = ["airports", "cities", "mountains", "desert", "coast"];

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'`]/g, "").replace(/\s+/g, " ").trim();

function routeBetween(a: Loc, b: Loc): Route | undefined {
  for (const x of a.routes) for (const y of b.routes) {
    const r = ROUTE_INDEX.get(`${x}|${y}`) || ROUTE_INDEX.get(`${y}|${x}`);
    if (r) return r;
  }
  return undefined;
}
/** Price for the passenger tier chosen in the widget: 0 sedan, 1 SUV, 2 van, 3 minibus. */
function tierPrice(r: Route, tier: number): number {
  if (tier === 1) return Math.max(Math.round(r.price_sedan * 1.25), r.price_van);
  if (tier === 2) return r.price_van;
  if (tier >= 3) return r.price_minibus;
  return r.price_sedan;
}

/* ── Estimates for pairs without a fixed route ──
   Start from the nearest real route (both ends closest) and scale it by distance.
   Checked against the real price list: typically within ~5%. Shown with "≈". */
const ROUTE_LIST = routeData as Route[];
const COORD = new Map<string, [number, number]>();
for (const l of LOCATIONS) for (const r of l.routes) COORD.set(r, l.at);
function km(a: [number, number], b: [number, number]) {
  const rad = Math.PI / 180;
  const dLa = (b[0] - a[0]) * rad, dLo = (b[1] - a[1]) * rad;
  const h = Math.sin(dLa / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLo / 2) ** 2;
  return Math.max(2 * 6371 * Math.asin(Math.sqrt(h)), 3);
}
const EST_CACHE = new Map<string, number>();
function estimate(a: Loc, b: Loc, tier: number): number {
  const key = `${a.key}|${b.key}|${tier}`;
  const hit = EST_CACHE.get(key);
  if (hit !== undefined) return hit;
  let best: { cost: number; r: Route; x: [number, number]; y: [number, number] } | null = null;
  for (const r of ROUTE_LIST) {
    const p = COORD.get(r.from), q = COORD.get(r.to);
    if (!p || !q) continue;
    for (const [x, y] of [[p, q], [q, p]] as [[number, number], [number, number]][]) {
      const cost = km(a.at, x) + km(b.at, y);
      if (!best || cost < best.cost) best = { cost, r, x, y };
    }
  }
  let price = 0;
  if (best) {
    const base = tierPrice(best.r, tier);
    price = 30 + Math.max(base - 30, 5) * Math.pow(km(a.at, b.at) / km(best.x, best.y), 0.85);
  }
  price = Math.max(35, Math.round(price / 5) * 5);
  EST_CACHE.set(key, price);
  return price;
}
type PriceInfo = { price: number; fixed: boolean };
function priceBetween(a: Loc, b: Loc, tier: number): PriceInfo {
  const r = routeBetween(a, b);
  return r ? { price: tierPrice(r, tier), fixed: true } : { price: estimate(a, b, tier), fixed: false };
}

const nameOf = (loc: Loc, lang: string) => (loc.names as Record<string, string>)[lang] || loc.names.en;

function GroupIcon({ group }: { group: LocGroup }) {
  const p = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (group === "airports") return <svg {...p}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>;
  if (group === "cities") return <svg {...p}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01" /></svg>;
  if (group === "mountains") return <svg {...p}><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>;
  if (group === "desert") return <svg {...p}><circle cx="17" cy="7" r="3" /><path d="M2 20c3-4 6-5 9-3s6 1 11-3" /></svg>;
  return <svg {...p}><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></svg>;
}

type ComboProps = {
  id: string;
  name: string;
  placeholder: string;
  lang: string;
  exclude?: string;
  priceFor?: (loc: Loc) => PriceInfo | undefined;
  groups?: LocGroup[];
  onPick: (loc: Loc | null, text: string) => void;
  nextFocusId?: string;
};

function Combo({ id, name, placeholder, lang, exclude, priceFor, groups, onPick, nextFocusId }: ComboProps) {
  const c = LOC_COPY[lang] || LOC_COPY.en;
  const [text, setText] = useState("");
  const [picked, setPicked] = useState<Loc | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [fromList, setFromList] = useState(false); // true right after picking from the list
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  // When the visitor has picked a place, opening the list again shows everything.
  const query = fromList && picked && text === nameOf(picked, lang) ? "" : text;

  const items = useMemo(() => {
    const q = norm(query);
    const words = q ? q.split(" ") : [];
    const matches = LOCATIONS.filter((l) => l.key !== exclude && (!groups || groups.includes(l.group))).filter((l) => {
      if (!words.length) return true;
      const hay = norm([...Object.values(l.names), l.terms || "", l.key].join(" "));
      return words.every((w) => hay.includes(w));
    });
    const out: ({ type: "loc"; loc: Loc } | { type: "group"; group: LocGroup } | { type: "custom"; text: string })[] = [];
    for (const g of GROUP_ORDER) {
      const inGroup = matches.filter((l) => l.group === g);
      if (!inGroup.length) continue;
      out.push({ type: "group", group: g });
      inGroup.forEach((loc) => out.push({ type: "loc", loc }));
    }
    const exact = matches.some((l) => norm(nameOf(l, lang)) === q);
    if (q && !exact) out.push({ type: "custom", text: text.trim() });
    return out;
  }, [query, text, exclude, lang, groups]);

  const selectable = items.map((it, i) => (it.type === "group" ? -1 : i)).filter((i) => i >= 0);

  /** Best match for what was typed: exact name, then name starting with it, then a word starting with it. */
  const best = useMemo(() => {
    const q = norm(query);
    if (!q) return selectable[0] ?? 0;
    let bestI = selectable[0] ?? 0;
    let bestScore = 99;
    items.forEach((it, i) => {
      if (it.type !== "loc") return;
      const names = [nameOf(it.loc, lang), ...Object.values(it.loc.names)].map(norm);
      const score = names.some((n) => n === q) ? 0
        : names.some((n) => n.startsWith(q)) ? 1 + (it.loc.group === "airports" ? 0.5 : 0)
        : names.some((n) => n.split(/[ (\-]/).some((w) => w.startsWith(q))) ? 2
        : 3;
      if (score < bestScore) { bestScore = score; bestI = i; }
    });
    return bestI;
  }, [items, query, lang, selectable]);

  useEffect(() => {
    setActive(best);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  // Switching widget tab: drop a pick that this tab's list no longer offers.
  useEffect(() => {
    if (picked && groups && !groups.includes(picked.group)) {
      setPicked(null);
      setText("");
      onPick(null, "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  // If the excluded place (the other field) is now this one, clear it.
  useEffect(() => {
    if (picked && exclude === picked.key) {
      setPicked(null);
      setText("");
      onPick(null, "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exclude]);

  function clearFieldError() {
    const el = inputRef.current;
    if (!el?.classList.contains("is-invalid")) return;
    el.classList.remove("is-invalid");
    el.removeAttribute("aria-invalid");
    el.closest(".lc")?.querySelector(".field-error")?.remove();
  }

  function choose(i: number) {
    const it = items[i];
    if (!it || it.type === "group") return;
    if (it.type === "loc") {
      const label = nameOf(it.loc, lang);
      setText(label);
      setPicked(it.loc);
      setFromList(true);
      onPick(it.loc, label);
    } else {
      setText(it.text);
      setPicked(null);
      onPick(null, it.text);
    }
    setOpen(false);
    clearFieldError();
    if (nextFocusId) {
      const next = document.getElementById(nextFocusId) as HTMLInputElement | null;
      if (next && !next.value) window.setTimeout(() => next.focus(), 0);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return setOpen(true);
      const pos = selectable.indexOf(active);
      const next = e.key === "ArrowDown" ? Math.min(pos + 1, selectable.length - 1) : Math.max(pos - 1, 0);
      setActive(selectable[next] ?? active);
    } else if (e.key === "Enter") {
      if (open && selectable.length) {
        e.preventDefault(); // pick, don't submit the form
        choose(active);
      }
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(false);
      }
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div className={`lc${open ? " open" : ""}`}>
      <input
        ref={inputRef}
        id={id}
        name={name}
        className="field-input lc-input"
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && items[active] ? `${listId}-${active}` : undefined}
        autoComplete="off"
        spellCheck={false}
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          const v = e.target.value;
          setText(v);
          setFromList(false);
          const exact = LOCATIONS.find((l) => l.key !== exclude && norm(nameOf(l, lang)) === norm(v));
          setPicked(exact || null);
          onPick(exact || null, v);
          setOpen(true);
        }}
        onFocus={() => {
          setOpen(true);
          // On phones, bring the field to the top so the list has room below it.
          if (window.innerWidth < 768 && inputRef.current) {
            const top = inputRef.current.getBoundingClientRect().top + window.scrollY - 90;
            window.setTimeout(() => window.scrollTo({ top, behavior: "smooth" }), 60);
          }
        }}
        onClick={() => setOpen(true)}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
      />
      <span className="lc-caret" aria-hidden="true" />
      {open && (
        <ul className="lc-list" id={listId} role="listbox" ref={listRef} onMouseDown={(e) => e.preventDefault()}>
          {items.map((it, i) =>
            it.type === "group" ? (
              <li key={`g-${it.group}`} className="lc-group" role="presentation">{c.groups[it.group]}</li>
            ) : it.type === "loc" ? (
              <li
                key={it.loc.key}
                id={`${listId}-${i}`}
                data-i={i}
                role="option"
                aria-selected={picked?.key === it.loc.key}
                className={`lc-opt${i === active ? " active" : ""}${picked?.key === it.loc.key ? " picked" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
              >
                <span className="lc-ico"><GroupIcon group={it.loc.group} /></span>
                <span className="lc-name">{nameOf(it.loc, lang)}</span>
                {(() => {
                  const pi = priceFor?.(it.loc);
                  if (!pi) return null;
                  return pi.fixed
                    ? <span className="lc-price-tag">{c.from} €{pi.price}</span>
                    : <span className="lc-price-tag est" title={c.est}>≈ €{pi.price}</span>;
                })()}
              </li>
            ) : (
              <li
                key="custom"
                id={`${listId}-${i}`}
                data-i={i}
                role="option"
                aria-selected={false}
                className={`lc-opt lc-custom${i === active ? " active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
              >
                <span className="lc-ico" aria-hidden="true">+</span>
                <span className="lc-name">{c.use(it.text)}</span>
              </li>
            )
          )}
          {!selectable.length && <li className="lc-empty" role="presentation">{c.noMatch}</li>}
        </ul>
      )}
    </div>
  );
}

export default function LocationFields({
  lang,
  fromLabel,
  toLabel,
  fromPlaceholder,
  toPlaceholder,
}: {
  lang: string;
  fromLabel: string;
  toLabel: string;
  fromPlaceholder: string;
  toPlaceholder: string;
}) {
  const c = LOC_COPY[lang] || LOC_COPY.en;
  const [from, setFrom] = useState<Loc | null>(null);
  const [to, setTo] = useState<Loc | null>(null);
  const [tier, setTier] = useState(0);
  const [service, setService] = useState<"airport" | "city" | "day">("airport");

  // The widget's Airport / City-to-City / Day Trip tabs (components/SiteScripts.tsx).
  useEffect(() => {
    const onService = (e: Event) => {
      const s = (e as CustomEvent<string>).detail;
      if (s === "airport" || s === "city" || s === "day") setService(s);
    };
    window.addEventListener("pmt:widget-service", onService);
    return () => window.removeEventListener("pmt:widget-service", onService);
  }, []);
  const priceRef = useRef<HTMLParagraphElement>(null);

  // Follow the widget's Passengers select (1–3 car / 4–5 SUV / 6–8 van …).
  useEffect(() => {
    const sel = document.getElementById("bw-passengers") as HTMLSelectElement | null;
    if (!sel) return;
    const update = () => setTier(sel.selectedIndex);
    update();
    sel.addEventListener("change", update);
    return () => sel.removeEventListener("change", update);
  }, []);

  const info = from && to ? priceBetween(from, to, tier) : undefined;
  const price = info?.price;

  // Let the widget's submit code put the price in the WhatsApp message.
  useEffect(() => {
    const form = (document.getElementById("bw-from") as HTMLInputElement | null)?.form;
    if (!form) return;
    if (info) {
      form.dataset.price = String(info.price);
      form.dataset.priceLine = `${info.fixed ? c.fixed : c.est}: ${info.fixed ? "" : "≈"}€${info.price} (${c.vehicles[Math.min(tier, 3)]})`;
    } else {
      delete form.dataset.price;
      delete form.dataset.priceLine;
    }
  }, [info?.price, info?.fixed, tier, c]);

  const priceFor = from ? (loc: Loc) => priceBetween(from, loc, tier) : undefined;

  return (
    <>
      <label className="field-label" htmlFor="bw-from">{fromLabel}</label>
      <Combo id="bw-from" name="from" placeholder={fromPlaceholder} lang={lang} exclude={to?.key} groups={FROM_GROUPS[service]} onPick={(l) => setFrom(l)} nextFocusId="bw-to" />
      <label className="field-label" htmlFor="bw-to">{toLabel}</label>
      <Combo id="bw-to" name="to" placeholder={toPlaceholder} lang={lang} exclude={from?.key} priceFor={priceFor} onPick={(l) => setTo(l)} />
      <p className={`lc-quote${info ? " show" : ""}${info && !info.fixed ? " est" : ""}`} ref={priceRef} aria-live="polite">
        {info ? (
          <>
            <span className="lc-quote-label">{info.fixed ? c.fixed : c.est}</span>
            <strong>{info.fixed ? "" : "≈ "}€{price}</strong>
            <span className="lc-quote-sub">
              {c.perVehicle} · {c.vehicles[Math.min(tier, 3)]}
              {!info.fixed && <> · {c.estNote}</>}
            </span>
          </>
        ) : null}
      </p>
    </>
  );
}
