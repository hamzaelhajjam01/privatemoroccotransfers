"use client";

/**
 * Homepage "Popular routes" price table.
 * - One Way / Round Trip tabs (round trip = 1.9× one way, i.e. 10% off the return).
 * - Sedan / van / minibus prices from content/route-prices.json (always current).
 * - Follows the header currency switcher (pmt_currency).
 * - "Book" (or tapping a price) opens the booking popup with route, vehicle, trip type and price.
 * - Shows the first rows; "Show all routes" expands the rest.
 */
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import routeData from "@/content/route-prices.json";
import { convertPrice, type Currency } from "@/lib/currency";
import { openWhatsApp } from "@/lib/site";
import { LOCATIONS } from "./widget-locations";

type Route = {
  slug: string; from: string; to: string; distance: string; duration: string;
  price_sedan: number; price_van: number; price_minibus: number;
};
const BY_SLUG = new Map((routeData as Route[]).map((r) => [r.slug, r]));

/** Order shown on the homepage; the first VISIBLE rows are open, the rest behind "Show all". */
const SLUGS = [
  "marrakech-airport-to-marrakech",
  "marrakech-airport-to-palmeraie-marrakech",
  "marrakech-to-essaouira",
  "marrakech-airport-to-essaouira",
  "marrakech-to-agadir",
  "casablanca-airport-to-marrakech",
  "marrakech-to-agafay-desert",
  "marrakech-to-imlil",
  "marrakech-to-ourika-valley",
  "marrakech-to-casablanca",
  "marrakech-to-fes",
  "marrakech-to-merzouga",
  "marrakech-to-ouarzazate",
  "marrakech-to-ait-ben-haddou",
  "marrakech-to-ouzoud-waterfalls",
  "marrakech-to-taghazout",
  "marrakech-to-rabat",
  "marrakech-to-oualidia",
  "marrakech-to-imsouane",
  "marrakech-to-oukaimeden-ski-resort",
  "agadir-airport-to-agadir",
  "agadir-airport-to-taghazout",
  "essaouira-airport-esu-to-essaouira",
  "essaouira-to-agadir",
  "casablanca-airport-to-casablanca",
  "casablanca-to-rabat",
  "casablanca-airport-to-essaouira",
  "fes-airport-to-fes",
  "fes-to-chefchaouen",
  "fes-to-meknes-volubilis",
  "fes-to-merzouga",
  "tangier-airport-to-tangier",
  "tangier-to-chefchaouen",
  "tangier-to-casablanca",
  "rabat-airport-to-rabat",
];
const VISIBLE = 8;

type Copy = {
  oneWay: string; roundTrip: string; returnOff: string;
  route: string; duration: string; pax: [string, string, string]; veh: [string, string, string];
  from: string; book: string; tip: string; more: (n: number) => string; less: string; roundNote: string;
  msg: (p: { from: string; to: string; veh: string; trip: string; price: string }) => string;
};
const T: Record<string, Copy> = {
  en: { oneWay: "One way", roundTrip: "Round trip", returnOff: "−10% return", route: "Route", duration: "Duration",
    pax: ["1–4 passengers", "5–7 passengers", "8–14 passengers"], veh: ["sedan", "van", "minibus"],
    from: "from", book: "Book", tip: "Tap a price to book", more: (n) => `Show all ${n} routes`, less: "Show fewer routes", roundNote: "Return journey included, 10% off the way back.",
    msg: (p) => `Hello! I'd like to book a private transfer from ${p.from} to ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
  fr: { oneWay: "Aller simple", roundTrip: "Aller-retour", returnOff: "−10 % au retour", route: "Trajet", duration: "Durée",
    pax: ["1–4 passagers", "5–7 passagers", "8–14 passagers"], veh: ["berline", "van", "minibus"],
    from: "depuis", book: "Réserver", tip: "Touchez un prix pour réserver", more: (n) => `Voir les ${n} trajets`, less: "Voir moins de trajets", roundNote: "Retour inclus, −10 % sur le trajet retour.",
    msg: (p) => `Bonjour ! Je souhaite réserver un transfert privé de ${p.from} à ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
  es: { oneWay: "Solo ida", roundTrip: "Ida y vuelta", returnOff: "−10 % vuelta", route: "Ruta", duration: "Duración",
    pax: ["1–4 pasajeros", "5–7 pasajeros", "8–14 pasajeros"], veh: ["sedán", "van", "minibús"],
    from: "desde", book: "Reservar", tip: "Toque un precio para reservar", more: (n) => `Ver las ${n} rutas`, less: "Ver menos rutas", roundNote: "Vuelta incluida, 10 % de descuento en el regreso.",
    msg: (p) => `¡Hola! Quiero reservar un traslado privado desde ${p.from} a ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
  it: { oneWay: "Solo andata", roundTrip: "Andata e ritorno", returnOff: "−10% ritorno", route: "Tratta", duration: "Durata",
    pax: ["1–4 passeggeri", "5–7 passeggeri", "8–14 passeggeri"], veh: ["berlina", "van", "minibus"],
    from: "da", book: "Prenota", tip: "Toccate un prezzo per prenotare", more: (n) => `Mostra tutte le ${n} tratte`, less: "Mostra meno tratte", roundNote: "Ritorno incluso, 10% di sconto sul ritorno.",
    msg: (p) => `Buongiorno! Vorrei prenotare un transfer privato da ${p.from} a ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
  de: { oneWay: "Einfach", roundTrip: "Hin & zurück", returnOff: "−10 % Rückfahrt", route: "Strecke", duration: "Dauer",
    pax: ["1–4 Personen", "5–7 Personen", "8–14 Personen"], veh: ["Limousine", "Van", "Minibus"],
    from: "ab", book: "Buchen", tip: "Preis antippen zum Buchen", more: (n) => `Alle ${n} Strecken anzeigen`, less: "Weniger Strecken anzeigen", roundNote: "Rückfahrt inklusive, 10 % Rabatt auf die Rückfahrt.",
    msg: (p) => `Guten Tag! Ich möchte einen privaten Transfer von ${p.from} nach ${p.to} buchen (${p.veh}, ${p.trip}) – ${p.price}.` },
  ar: { oneWay: "ذهاب فقط", roundTrip: "ذهاب وعودة", returnOff: "خصم 10% على العودة", route: "المسار", duration: "المدة",
    pax: ["1–4 ركاب", "5–7 ركاب", "8–14 راكباً"], veh: ["سيدان", "فان", "ميني باص"],
    from: "من", book: "احجز", tip: "اضغط على السعر للحجز", more: (n) => `عرض جميع المسارات (${n})`, less: "عرض مسارات أقل", roundNote: "العودة مشمولة، مع خصم 10% على طريق العودة.",
    msg: (p) => `السلام عليكم! أود حجز توصيل خاص من ${p.from} إلى ${p.to} (${p.veh}، ${p.trip}) – ${p.price}.` },
  pt: { oneWay: "Só ida", roundTrip: "Ida e volta", returnOff: "−10% regresso", route: "Rota", duration: "Duração",
    pax: ["1–4 passageiros", "5–7 passageiros", "8–14 passageiros"], veh: ["sedan", "carrinha", "minibus"],
    from: "desde", book: "Reservar", tip: "Toque num preço para reservar", more: (n) => `Ver as ${n} rotas`, less: "Ver menos rotas", roundNote: "Regresso incluído, 10% de desconto na volta.",
    msg: (p) => `Olá! Gostaria de reservar um transfer privado de ${p.from} para ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
  nl: { oneWay: "Enkele reis", roundTrip: "Retour", returnOff: "−10% terugreis", route: "Route", duration: "Reistijd",
    pax: ["1–4 passagiers", "5–7 passagiers", "8–14 passagiers"], veh: ["sedan", "van", "minibus"],
    from: "vanaf", book: "Boeken", tip: "Tik op een prijs om te boeken", more: (n) => `Toon alle ${n} routes`, less: "Toon minder routes", roundNote: "Terugreis inbegrepen, 10% korting op de terugweg.",
    msg: (p) => `Hallo! Ik wil graag een privétransfer boeken van ${p.from} naar ${p.to} (${p.veh}, ${p.trip}) – ${p.price}.` },
};

/** Route name in the page language (falls back to the English name from routes.json). */
const NAME = new Map<string, Record<string, string>>();
for (const l of LOCATIONS) for (const r of l.routes) NAME.set(r, l.names as Record<string, string>);
const placeName = (raw: string, lang: string) => {
  const n = NAME.get(raw);
  return (n && (n[lang] || n.en)) || raw;
};

export default function RoutePriceTable({ lang = "en" }: { lang?: string }) {
  const c = T[lang] || T.en;
  const [round, setRound] = useState(false);
  const [all, setAll] = useState(false);
  const [currency, setCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pmt_currency") as Currency | null;
      if (saved) setCurrency(saved);
    } catch {}
    const onChange = (e: Event) => setCurrency(((e as CustomEvent<string>).detail as Currency) || "EUR");
    window.addEventListener("pmt_currency_changed", onChange);
    return () => window.removeEventListener("pmt_currency_changed", onChange);
  }, []);

  const rows = useMemo(() => SLUGS.map((s) => BY_SLUG.get(s)).filter((r): r is Route => !!r), []);
  const shown = all ? rows : rows.slice(0, VISIBLE);
  const prefix = lang === "en" ? "" : `/${lang}`;
  const eur = (v: number) => (round ? Math.round(v * 1.9) : v);
  const fmt = (v: number) => convertPrice(eur(v), currency).formatted;

  function book(r: Route, tier: 0 | 1 | 2) {
    const price = [r.price_sedan, r.price_van, r.price_minibus][tier];
    const from = placeName(r.from, lang);
    const to = placeName(r.to, lang);
    openWhatsApp(
      c.msg({ from, to, veh: c.veh[tier], trip: round ? c.roundTrip.toLowerCase() : c.oneWay.toLowerCase(), price: `€${eur(price)}` }),
      { route: `${from} → ${to}`, value: eur(price), label: `Homepage price table (${round ? "round" : "one way"}, ${c.veh[tier]})` }
    );
  }

  return (
    <div className="rpt">
      <div className="rpt-switch" role="tablist" aria-label={`${c.oneWay} / ${c.roundTrip}`}>
        <button type="button" role="tab" aria-selected={!round} className={!round ? "on" : ""} onClick={() => setRound(false)}>
          {c.oneWay}
        </button>
        <button type="button" role="tab" aria-selected={round} className={round ? "on" : ""} onClick={() => setRound(true)}>
          {c.roundTrip} <span className="rpt-off">{c.returnOff}</span>
        </button>
      </div>
      {round && <p className="rpt-note">{c.roundNote}</p>}
      <p className="rpt-tip">{c.tip}</p>

      <div className="rpt-table" role="table">
        <div className="rpt-row rpt-head" role="row">
          <span role="columnheader">{c.route}</span>
          <span role="columnheader">{c.duration}</span>
          {c.pax.map((p, i) => (
            <span role="columnheader" key={p} className="rpt-num">
              {p}
              <small>({c.veh[i]})</small>
            </span>
          ))}
          <span role="columnheader" aria-hidden="true" />
        </div>

        {shown.map((r) => {
          const from = placeName(r.from, lang);
          const to = placeName(r.to, lang);
          return (
            <div className="rpt-row" role="row" key={r.slug}>
              <span role="cell" className="rpt-route">
                <Link href={`${prefix}/transfers/${r.slug}`} className="rpt-to">{to}</Link>
                <span className="rpt-from">{c.from} {from} · {r.distance}</span>
              </span>
              <span role="cell" className="rpt-dur">{r.duration}</span>
              {([0, 1, 2] as const).map((tier) => (
                <span role="cell" key={tier} className={`rpt-num rpt-p${tier}`}>
                  <button type="button" className="rpt-price" onClick={() => book(r, tier)} aria-label={`${c.book}: ${from} → ${to}, ${c.veh[tier]}, ${fmt([r.price_sedan, r.price_van, r.price_minibus][tier])}`}>
                    <span className="rpt-veh">{c.veh[tier]}</span>
                    {fmt([r.price_sedan, r.price_van, r.price_minibus][tier])}
                  </button>
                </span>
              ))}
              <span role="cell" className="rpt-act">
                <button type="button" className="btn btn-black rpt-book" onClick={() => book(r, 0)}>
                  {c.book}
                </button>
              </span>
            </div>
          );
        })}
      </div>

      {rows.length > VISIBLE && (
        <button type="button" className="rpt-more" aria-expanded={all} onClick={() => setAll((a) => !a)}>
          {all ? c.less : c.more(rows.length)}
          <span className={`rpt-more-caret${all ? " up" : ""}`} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
