"use client";

/**
 * "How would you like to book?" popup.
 * Opened by every booking CTA on the site (WhatsApp links, [data-wa] buttons and
 * openWhatsApp() calls) through the BOOKING_EVENT window event.
 *
 *  - Optional trip details (date, time, passengers, pickup) are written into the
 *    WhatsApp message, the QR code and the email request as the visitor types.
 *  - WhatsApp: opens the chat with the trip already written (+ WhatsApp Web on desktop).
 *  - Email: short form → /api/leads → Resend (name/email/phone remembered on this device).
 *  - Phone: tap to call on phones, copy the number on computers.
 *  - QR code on desktop to continue on a phone.
 *  - Closes with Esc, the close button, a click outside, or the phone's Back button.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import qrcode from "qrcode-generator";
import {
  BOOKING_EVENT,
  type BookingRequest,
  GBP_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_NUMBER,
  trackWhatsAppLead,
  whatsappUrl,
} from "@/lib/site";
import { BOOKING_T } from "./booking-i18n";
import Icon from "./Icon";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const CONTACT_KEY = "pmt_contact";
const HISTORY_FLAG = "pmtBooking";

/** Pulls "A → B" and a € price out of the prefilled WhatsApp text for the popup header. */
function summarize(req: BookingRequest): { route: string; price?: number } {
  const msg = req.message || "";
  let route = "";
  if (req.details?.route && /→|->/.test(req.details.route)) route = req.details.route;
  if (!route) {
    const arrow = msg.match(/([A-Za-zÀ-ÿ؀-ۿ'().& -]{2,40}?)\s*(?:→|->)\s*([A-Za-zÀ-ÿ؀-ۿ'().& -]{2,40})/);
    if (arrow) route = `${arrow[1].trim()} → ${arrow[2].trim()}`;
  }
  if (!route) {
    const ft = msg.match(
      /\b(?:from|de|desde|da|von|van|du|des)\s+([A-ZÀ-Ý](?:[^,.!?\n()]|\([A-Z]{3}\)){1,44}?)\s+(?:to|à|a|vers|nach|naar|para|al|au|aux)\s+([A-ZÀ-Ý](?:[^,.!?\n()]|\([A-Z]{3}\)){1,44}?)(?=\s*[,.!?\n(:]|\s+(?:on|for|with|le|el|il|am|op|em|en|pour|per|für|voor)\b|$)/
    );
    if (ft) route = `${ft[1].trim()} → ${ft[2].replace(/\s+(?:buchen|reservieren|boeken|reserveren)$/i, "").trim()}`;
  }
  if (!route) {
    const ar = msg.match(/من\s+(.{2,30}?)\s+إلى\s+(.{2,30}?)(?=\s*[(،,.!؟\n]|$)/);
    if (ar) route = `${ar[1].trim()} ← ${ar[2].trim()}`;
  }
  let price = typeof req.details?.value === "number" && req.details.value > 0 ? req.details.value : undefined;
  if (price === undefined) {
    const p = msg.match(/€\s?(\d{2,5})|(\d{2,5})\s?(?:€|EUR\b)/);
    if (p) price = Number(p[1] || p[2]);
  }
  return { route, price };
}

/** Labels the site's own booking widgets use, in all 8 languages ("Date:", "• Travellers :", …). */
const FIELD_LABELS: Record<keyof Details, string> = {
  date: "date|datum|fecha|data|when|quand|cuándo|cuando|quando|wann|wanneer|التاريخ|متى",
  time: "time|heure|hora|ora|uhrzeit|tijd|الساعة",
  pax: "passengers|passagers|pasajeros|passeggeri|passagiere|personen|passagiers|passageiros|travellers|travelers|voyageurs|viajeros|viaggiatori|reisende|reizigers|viajantes|الركاب|عدد الركاب|المسافرون",
  pickup: "pickup|pick-up|prise en charge|recogida|partenza|abholung|ophalen|recolha|drop-off|dépose|afzetten|hotel|hôtel|riad|مكان الانطلاق|مكان الوصول",
  flight: "flight|flight no|vol|vuelo|volo|flug|flugnummer|vlucht|voo|رقم الرحلة|الرحلة الجوية",
};
const EMPTY_VALUE = /^(?:tbd|tba|—|-|–|n\/a|à définir|por definir|da definire|offen|nader te bepalen|a definir|غير محدد)?$/i;

type Known = Partial<Record<keyof Details, string>>;
/** Which trip details the CTA's message already carries (value) or carries as a "TBD" placeholder (""). */
function readKnown(msg: string): Known {
  const known: Known = {};
  for (const key of Object.keys(FIELD_LABELS) as (keyof Details)[]) {
    const re = new RegExp(`^[\\s•*\\-]*(?:${FIELD_LABELS[key]})\\s*:\\s*(.*)$`, "imu");
    const m = msg.match(re);
    if (m) known[key] = EMPTY_VALUE.test(m[1].trim()) ? "" : m[1].trim();
  }
  // "Date: 2026-12-20 14:30" also answers the time question.
  if (known.date && known.time === undefined && /\b\d{1,2}[:h]\d{2}\b/.test(known.date)) known.time = known.date;
  return known;
}
/** Replaces the value of an existing "Label: TBD" line; returns null if there is no such line. */
function fillLine(msg: string, key: keyof Details, value: string): string | null {
  const re = new RegExp(`^([\\s•*\\-]*(?:${FIELD_LABELS[key]})\\s*:\\s*)(.*)$`, "imu");
  const m = msg.match(re);
  if (!m || !EMPTY_VALUE.test(m[2].trim())) return null;
  return msg.replace(re, `$1${value}`);
}

/** "2026-12-20" → "Sun 20 Dec" in the page language; other formats are left as they are. */
function prettyDate(v: string, lang: string): string {
  const m = v.match(/^(\d{4}-\d{2}-\d{2})(.*)$/);
  if (!m) return v;
  try {
    return new Date(`${m[1]}T12:00:00`).toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short" }) + m[2];
  } catch {
    return v;
  }
}

const AIRPORT = /airport|a[ée]roport|aeropuerto|aeroporto|flughafen|luchthaven|مطار|\b(?:RAK|CMN|AGA|FEZ|TNG|RBA|ESU|OZZ|NDR|TTU)\b/i;
/** "arrival" = trip starts at an airport, "departure" = ends at one, null = no airport involved. */
function airportLeg(route: string, msg: string): "arrival" | "departure" | null {
  if (route) {
    const [a, b] = route.split(/→|←|->/);
    if (a && AIRPORT.test(a)) return "arrival";
    if (b && AIRPORT.test(b)) return "departure";
    return null;
  }
  return AIRPORT.test(msg) ? "arrival" : null;
}

function readContact(): { name: string; email: string; phone: string } {
  try {
    const raw = window.localStorage.getItem(CONTACT_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      return { name: String(c.name || ""), email: String(c.email || ""), phone: String(c.phone || "") };
    }
  } catch {}
  return { name: "", email: "", phone: "" };
}
function saveContact(c: { name: string; email: string; phone: string }) {
  try {
    window.localStorage.setItem(CONTACT_KEY, JSON.stringify(c));
  } catch {}
}

function QrCode({ text }: { text: string }) {
  const svg = useMemo(() => {
    try {
      const qr = qrcode(0, "M");
      qr.addData(unescape(encodeURIComponent(text)), "Byte");
      qr.make();
      return qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
    } catch {
      return "";
    }
  }, [text]);
  if (!svg) return null;
  return <div className="bk-qr-img" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);
const Check = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

type View = "choose" | "email" | "sent";
type Details = { date: string; time: string; pax: string; pickup: string; flight: string };
const NO_DETAILS: Details = { date: "", time: "", pax: "", pickup: "", flight: "" };

export default function BookingModal() {
  const [req, setReq] = useState<BookingRequest | null>(null);
  const [view, setView] = useState<View>("choose");
  const [lang, setLang] = useState("en");
  const [touch, setTouch] = useState(false);
  const [details, setDetails] = useState<Details>(NO_DETAILS);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", trip: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [quick, setQuick] = useState("");
  const [quickState, setQuickState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const pushedHistory = useRef(false);

  /** Closes the popup. `fromHistory` = the Back button already popped our history entry. */
  const close = useCallback((fromHistory = false) => {
    setReq(null);
    document.documentElement.classList.remove("bk-lock");
    if (pushedHistory.current && !fromHistory) {
      pushedHistory.current = false;
      if ((window.history.state as Record<string, unknown> | null)?.[HISTORY_FLAG]) window.history.back();
    }
    pushedHistory.current = false;
    lastFocus.current?.focus?.();
  }, []);

  // Listen for booking requests from any CTA.
  useEffect(() => {
    const w = window as unknown as { __pmtBookingReady?: boolean };
    w.__pmtBookingReady = true;
    const onBook = (e: Event) => {
      const detail = (e as CustomEvent<BookingRequest>).detail;
      if (!detail) return;
      lastFocus.current = document.activeElement as HTMLElement | null;
      setLang((document.documentElement.lang || "en").slice(0, 2));
      setTouch(window.matchMedia("(pointer: coarse)").matches);
      setReq(detail);
      setView("choose");
      setStatus("idle");
      setFormError("");
      setQuickState("idle");
      setCopied(false);
      setDetails(NO_DETAILS);
      setDetailsOpen(false);
      const c = readContact();
      setForm({ ...c, trip: detail.message });
      setQuick(c.email);
      document.documentElement.classList.add("bk-lock");
      if (!pushedHistory.current) {
        try {
          window.history.pushState({ ...(window.history.state || {}), [HISTORY_FLAG]: true }, "");
          pushedHistory.current = true;
        } catch {}
      }
    };
    const onPop = () => {
      if (pushedHistory.current) {
        pushedHistory.current = false;
        close(true);
      }
    };
    window.addEventListener(BOOKING_EVENT, onBook);
    window.addEventListener("popstate", onPop);
    return () => {
      w.__pmtBookingReady = false;
      window.removeEventListener(BOOKING_EVENT, onBook);
      window.removeEventListener("popstate", onPop);
    };
  }, [close]);

  // Esc to close, focus first control, keep Tab inside the dialog.
  useEffect(() => {
    if (!req) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const els = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.offsetParent !== null);
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus({ preventScroll: true }), 40);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [req, view, close]);

  const s = BOOKING_T[lang] || BOOKING_T.en;

  /** The WhatsApp/QR/email message: the CTA's text plus any trip details the visitor added. */
  const message = useMemo(() => {
    if (!req) return "";
    let base = req.message;
    const lines: string[] = [];
    const add = (key: keyof Details, label: string, value: string) => {
      if (!value) return;
      const filled = fillLine(base, key, value);
      if (filled !== null) base = filled;
      else lines.push(`${label}: ${value}`);
    };
    if (details.date) {
      let d = details.date;
      try {
        d = new Date(`${details.date}T12:00:00`).toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
      } catch {}
      add("date", s.mDate, d);
    }
    add("time", s.mTime, details.time);
    add("pax", s.mPax, details.pax);
    const legNow = airportLeg(summarize(req).route, req.message);
    if (legNow === "arrival") {
      add("flight", s.mFlight, details.flight.trim());
      add("pickup", s.mDropoff, details.pickup.trim());
    } else {
      add("pickup", s.mPickup, details.pickup.trim());
      if (legNow) add("flight", s.mFlight, details.flight.trim());
    }
    if (!lines.length) return base;
    // Put new lines right after the message's own "Label: value" lines (before "Thank you!"), else at the end.
    const rows = base.split("\n");
    let last = -1;
    rows.forEach((r, i) => {
      if (/^[\s•*\-]*[^:\n]{2,30}\s*:\s*\S/.test(r)) last = i;
    });
    if (last >= 0) {
      const bullet = rows[last].match(/^[\s•*\-]*/)?.[0] || "";
      rows.splice(last + 1, 0, ...lines.map((l) => bullet + l));
      return rows.join("\n");
    }
    return `${base}\n\n${lines.join("\n")}`;
  }, [req, details, lang, s]);

  if (!req) return null;

  const { route, price } = summarize(req);
  const known = readKnown(req.message);
  const leg = airportLeg(route, req.message);
  const missing = {
    date: !known.date,
    time: !known.time,
    pax: !known.pax,
    pickup: !known.pickup,
    flight: leg !== null && !known.flight,
  };
  const anyMissing = missing.date || missing.time || missing.pax || missing.pickup || missing.flight;
  const knownChips = [
    known.date ? prettyDate(known.date, lang) : "",
    known.time && known.time !== known.date ? known.time : "",
    known.pax ? `${s.mPax}: ${known.pax}` : "",
    known.flight ? `${s.mFlight}: ${known.flight}` : "",
    known.pickup || "",
  ].filter(Boolean);
  const waHref = whatsappUrl(message);
  const waWebHref = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  const detailCount = [details.date, details.time, details.pax, details.pickup.trim(), leg ? details.flight.trim() : ""].filter(Boolean).length;
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  const track = (label: string) =>
    trackWhatsAppLead({ ...req.details, label, route: route || req.details?.route, value: price });

  const quote = {
    route: route || undefined,
    priceEUR: price,
    trip: message,
    when: [details.date, details.time].filter(Boolean).join(" ") || undefined,
    travellers: details.pax ? Number(details.pax) : undefined,
  };

  async function postLead(body: Record<string, unknown>) {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ createdAt: new Date().toISOString(), marketingConsent: false, quote, ...body }),
    });
    if (!res.ok) throw new Error(String(res.status));
  }

  function openEmail() {
    setForm((f) => ({ ...f, trip: message }));
    setFormError("");
    setStatus("idle");
    setView("email");
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!isEmail(form.email)) {
      setFormError(s.invalidEmail);
      dialogRef.current?.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
      return;
    }
    setFormError("");
    setStatus("sending");
    try {
      await postLead({ name: form.name, email: form.email, phone: form.phone, message: form.trip, source: "booking_popup_email" });
      saveContact({ name: form.name, email: form.email, phone: form.phone });
      track("Booking popup: email request");
      setView("sent");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  async function submitQuick(e: React.FormEvent) {
    e.preventDefault();
    if (!isEmail(quick)) {
      setQuickState("error");
      return;
    }
    setQuickState("sending");
    try {
      await postLead({ email: quick, name: form.name, message, source: "booking_popup_quote" });
      saveContact({ name: form.name, email: quick, phone: form.phone });
      track("Booking popup: email me this quote");
      setQuickState("done");
    } catch {
      setQuickState("error");
    }
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE_E164);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PHONE_E164;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      ta.remove();
    }
    track("Booking popup: copy phone");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const onWhatsApp = (label: string) => {
    track(label);
    window.setTimeout(() => close(), 350);
  };

  const flightField = (
    <label className="bk-mini bk-mini-wide">
      <span>{s.flight}</span>
      <input
        type="text"
        dir="ltr"
        autoCapitalize="characters"
        autoComplete="off"
        spellCheck={false}
        placeholder={s.flightPh}
        maxLength={12}
        value={details.flight}
        onChange={(e) => setDetails({ ...details, flight: e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, "") })}
      />
    </label>
  );

  return (
    <div className="bk-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        className={`bk-dialog${view === "choose" ? " bk-wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bk-title"
        dir={lang === "ar" ? "rtl" : "ltr"}
        ref={dialogRef}
      >
        {view === "choose" && (
          <>
            <div className="bk-main">
              <div className="bk-head">
                <div className="bk-head-txt">
                  <h2 id="bk-title" className="bk-title">{s.title}</h2>
                  {(route || price) && (
                    <p className="bk-trip">
                      {route && <span className="bk-trip-route">{route}</span>}
                      {price ? <span className="bk-trip-price">€{price}</span> : null}
                    </p>
                  )}
                  {knownChips.length > 0 && (
                    <p className="bk-known">
                      {knownChips.map((c) => (
                        <span key={c} className="bk-known-chip"><Check size={11} /> {c}</span>
                      ))}
                    </p>
                  )}
                </div>
                <button type="button" className="bk-x" aria-label={s.close} onClick={() => close()}>
                  <CloseIcon />
                </button>
              </div>

              {anyMissing && (
              <div className={`bk-details${detailsOpen ? " open" : ""}`}>
                <button
                  type="button"
                  className="bk-details-toggle"
                  aria-expanded={detailsOpen}
                  aria-controls="bk-details-body"
                  onClick={() => setDetailsOpen((o) => !o)}
                >
                  <span className="bk-details-ico" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M16 2.5v4M8 2.5v4M3 10h18" /></svg>
                  </span>
                  <span className="bk-details-txt">
                    <span className="bk-details-title">{missing.date ? s.detailsToggle : s.detailsToggleMore}</span>
                    <span className="bk-details-hint">{s.detailsHint}</span>
                  </span>
                  {detailCount > 0 && <span className="bk-details-count"><Check size={12} /> {detailCount}</span>}
                  <span className="bk-caret" aria-hidden="true" />
                </button>
                {detailsOpen && (
                  <div className="bk-details-body" id="bk-details-body">
                    {missing.date && (
                      <label className="bk-mini">
                        <span>{s.date}</span>
                        <input type="date" min={today} value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} />
                      </label>
                    )}
                    {missing.time && (
                      <label className="bk-mini">
                        <span>{s.time}</span>
                        <input type="time" step={900} value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} />
                      </label>
                    )}
                    {missing.pax && (
                      <label className="bk-mini">
                        <span>{s.pax}</span>
                        <select value={details.pax} onChange={(e) => setDetails({ ...details, pax: e.target.value })}>
                          <option value="">—</option>
                          {Array.from({ length: 17 }, (_, i) => (
                            <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                          ))}
                        </select>
                      </label>
                    )}
                    {missing.flight && leg === "arrival" && flightField}
                    {missing.pickup && (
                      <label className="bk-mini bk-mini-wide">
                        <span>{leg === "arrival" ? s.dropoff : s.pickup}</span>
                        <input
                          type="text"
                          placeholder={leg === "arrival" ? s.dropoffPh : s.pickupPh}
                          maxLength={120}
                          value={details.pickup}
                          onChange={(e) => setDetails({ ...details, pickup: e.target.value })}
                        />
                      </label>
                    )}
                    {missing.flight && leg === "departure" && flightField}
                  </div>
                )}
              </div>
              )}

              <div className="bk-opt-wrap">
                <a
                  className="bk-opt bk-opt-wa"
                  href={waHref}
                  target="_blank"
                  rel="noopener"
                  data-wa-direct=""
                  data-autofocus=""
                  onClick={() => onWhatsApp("Booking popup: WhatsApp")}
                >
                  <span className="bk-ico bk-ico-wa"><Icon name="whatsapp" size={22} /></span>
                  <span className="bk-txt">
                    <span className="bk-opt-title">{s.waTitle} <span className="bk-badge">{s.waBadge}</span></span>
                    <span className="bk-opt-sub">{s.waSub}</span>
                  </span>
                  <span className="bk-chev" aria-hidden="true">›</span>
                </a>
                {!touch && (
                  <a
                    className="bk-sublink"
                    href={waWebHref}
                    target="_blank"
                    rel="noopener"
                    data-wa-direct=""
                    onClick={() => onWhatsApp("Booking popup: WhatsApp Web")}
                  >
                    {s.waWeb} ↗
                  </a>
                )}
              </div>

              <button type="button" className="bk-opt" onClick={openEmail}>
                <span className="bk-ico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </span>
                <span className="bk-txt">
                  <span className="bk-opt-title">{s.emailTitle}</span>
                  <span className="bk-opt-sub">{s.emailSub}</span>
                </span>
                <span className="bk-chev" aria-hidden="true">›</span>
              </button>

              <div className="bk-opt bk-opt-phone">
                <a className="bk-phone-link" href={`tel:${PHONE_E164}`} onClick={() => track("Booking popup: phone call")}>
                  <span className="bk-ico">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
                  </span>
                  <span className="bk-txt">
                    <span className="bk-opt-title">{s.phoneTitle}</span>
                    <span className="bk-opt-sub"><span dir="ltr" className="bk-num">{PHONE_DISPLAY}</span> · {s.phoneSub}</span>
                  </span>
                  {touch && <span className="bk-chev" aria-hidden="true">›</span>}
                </a>
                {!touch && (
                  <button type="button" className={`bk-copy${copied ? " done" : ""}`} onClick={copyPhone} aria-live="polite">
                    {copied ? <><Check /> {s.copied}</> : s.copy}
                  </button>
                )}
              </div>

              <ul className="bk-trust">
                <li><Check /> {s.trustDeposit}</li>
                <li><Check /> {s.trustCancel}</li>
                <li><Check /> {s.trustFixed}</li>
              </ul>

              <form className="bk-quick" onSubmit={submitQuick} noValidate>
                <label htmlFor="bk-quick-email" className="bk-quick-label">{s.quickLabel}</label>
                {quickState === "done" ? (
                  <p className="bk-quick-done"><Check /> {s.quickDone}</p>
                ) : (
                  <div className="bk-quick-row">
                    <input
                      id="bk-quick-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder={s.quickPlaceholder}
                      value={quick}
                      aria-invalid={quickState === "error"}
                      onChange={(e) => {
                        setQuick(e.target.value);
                        if (quickState === "error") setQuickState("idle");
                      }}
                    />
                    <button type="submit" disabled={quickState === "sending"}>
                      {quickState === "sending" ? <span className="bk-spin" aria-hidden="true" /> : s.quickSend}
                    </button>
                  </div>
                )}
                {quickState === "error" && <p className="bk-err">{isEmail(quick) ? s.error : s.invalidEmail}</p>}
              </form>
            </div>

            <aside className="bk-qr">
              <p className="bk-qr-title">{s.qrTitle}</p>
              <QrCode text={waHref} />
              <p className="bk-qr-sub">{s.qrSub}</p>
              <a className="bk-reviews" href={GBP_URL} target="_blank" rel="noopener">
                <Icon name="google" size={16} /> {s.reviews} ↗
              </a>
            </aside>
          </>
        )}

        {view === "email" && (
          <form className="bk-main bk-form" onSubmit={submitEmail} noValidate>
            <div className="bk-head">
              <div className="bk-head-txt">
                <h2 id="bk-title" className="bk-title">{s.formTitle}</h2>
                <p className="bk-sub">{s.formSub}</p>
              </div>
              <button type="button" className="bk-x" aria-label={s.close} onClick={() => close()}>
                <CloseIcon />
              </button>
            </div>
            <div className="bk-row2">
              <label className="bk-field">
                <span>{s.name}</span>
                <input autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} {...(!form.name ? { "data-autofocus": "" } : {})} />
              </label>
              <label className="bk-field">
                <span>{s.phone}</span>
                <input type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </label>
            </div>
            <label className="bk-field">
              <span>{s.email} <b aria-hidden="true">*</b></span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={form.email}
                aria-invalid={!!formError}
                aria-describedby={formError ? "bk-form-err" : undefined}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (formError) setFormError("");
                }}
                onBlur={() => form.email && !isEmail(form.email) && setFormError(s.invalidEmail)}
                {...(form.name && !form.email ? { "data-autofocus": "" } : {})}
              />
            </label>
            {formError && <p className="bk-err" id="bk-form-err">{formError}</p>}
            <label className="bk-field">
              <span>{s.trip}</span>
              <textarea rows={5} value={form.trip} onChange={(e) => setForm({ ...form, trip: e.target.value })} {...(form.name && form.email ? { "data-autofocus": "" } : {})} />
            </label>
            {status === "error" && <p className="bk-err">{s.error}</p>}
            <div className="bk-actions">
              <button type="button" className="bk-btn-ghost" onClick={() => setView("choose")}>{s.back}</button>
              <button type="submit" className="bk-btn" disabled={status === "sending"}>
                {status === "sending" ? <><span className="bk-spin" aria-hidden="true" /> {s.sending}</> : s.send}
              </button>
            </div>
          </form>
        )}

        {view === "sent" && (
          <div className="bk-main bk-sent" role="status">
            <button type="button" className="bk-x bk-x-corner" aria-label={s.close} onClick={() => close()}>
              <CloseIcon />
            </button>
            <div className="bk-sent-ico" aria-hidden="true"><Check size={28} /></div>
            <h2 id="bk-title" className="bk-title">{s.successTitle}</h2>
            <p className="bk-sub">{s.successText}</p>
            <div className="bk-sent-wa">
              <p>{s.successWa}</p>
              <a
                className="bk-btn bk-btn-wa"
                href={whatsappUrl(form.trip || message)}
                target="_blank"
                rel="noopener"
                data-wa-direct=""
                data-autofocus=""
                onClick={() => onWhatsApp("Booking popup: WhatsApp after email")}
              >
                <Icon name="whatsapp" size={20} /> {s.successWaBtn}
              </a>
            </div>
            <button type="button" className="bk-btn-ghost bk-full" onClick={() => close()}>{s.close}</button>
          </div>
        )}
      </div>
    </div>
  );
}
