"use client";

/**
 * Small, page-agnostic behaviours for the server-rendered markup:
 * FAQ accordions, tabs, listing filters, WhatsApp links/forms, the
 * multi-step booking form and share buttons. Uses event delegation,
 * so it works on every route without per-page wiring.
 */
import { useEffect } from "react";
import { openWhatsApp, trackWhatsAppLead } from "@/lib/site";

const val = (root: ParentNode, sel: string) =>
  ((root.querySelector(sel) as HTMLInputElement | null)?.value ?? "").trim();

function showStep(next: string) {
  document.querySelectorAll<HTMLElement>(".form-step").forEach((s) => s.classList.toggle("active", s.id === `step-${next}`));
  const n = Number(next);
  document.querySelectorAll(".step-indicator-item").forEach((el, i) => {
    el.classList.toggle("active", i + 1 === n);
    el.classList.toggle("done", i + 1 < n);
  });
  if (next === "3") {
    ["cf-from", "cf-to", "cf-date", "cf-vehicle", "cf-pax", "cf-name", "cf-phone"].forEach((id) => {
      const target = document.getElementById(`conf-${id}`);
      if (target) target.textContent = val(document, `#${id}`) || "—";
    });
  }
}


/* ── Hero booking widget: service tabs + inline validation ── */
type WidgetService = "airport" | "city" | "day";
const WIDGET_SERVICES: WidgetService[] = ["airport", "city", "day"];
type WidgetCopy = { q: string; from: string; to: string };
const WIDGET_COPY: Record<string, Partial<Record<WidgetService, WidgetCopy>> & { service: string; missing: string; price: string }> = {
  en: { price: "Fixed price", service: "Service", missing: "Please fill in where from and where to.",
    city: { q: "Where are you travelling?", from: "e.g. Marrakech", to: "e.g. Essaouira" },
    day: { q: "Where would you like to go?", from: "e.g. Your hotel in Marrakech", to: "e.g. Ourika Valley" } },
  fr: { price: "Prix fixe", service: "Service", missing: "Veuillez renseigner le départ et l'arrivée.",
    city: { q: "Où allez-vous ?", from: "ex. Marrakech", to: "ex. Essaouira" },
    day: { q: "Où souhaitez-vous aller ?", from: "ex. Votre hôtel à Marrakech", to: "ex. Vallée de l'Ourika" } },
  es: { price: "Precio fijo", service: "Servicio", missing: "Por favor complete el origen y el destino.",
    city: { q: "¿Adónde viaja?", from: "p. ej. Marrakech", to: "p. ej. Esauira" },
    day: { q: "¿Adónde le gustaría ir?", from: "p. ej. Su hotel en Marrakech", to: "p. ej. Valle del Ourika" } },
  it: { price: "Prezzo fisso", service: "Servizio", missing: "Si prega di indicare partenza e destinazione.",
    city: { q: "Dove siete diretti?", from: "es. Marrakech", to: "es. Essaouira" },
    day: { q: "Dove vorreste andare?", from: "es. Il vostro hotel a Marrakech", to: "es. Valle dell'Ourika" } },
  de: { price: "Festpreis", service: "Leistung", missing: "Bitte geben Sie Abfahrtsort und Zielort an.",
    city: { q: "Wohin geht die Reise?", from: "z. B. Marrakesch", to: "z. B. Essaouira" },
    day: { q: "Wohin möchten Sie fahren?", from: "z. B. Ihr Hotel in Marrakesch", to: "z. B. Ourika-Tal" } },
  ar: { price: "السعر الثابت", service: "الخدمة", missing: "يرجى تحديد مكان الانطلاق والوجهة.",
    city: { q: "إلى أين تسافر؟", from: "مثال: مراكش", to: "مثال: الصويرة" },
    day: { q: "إلى أين تود الذهاب؟", from: "مثال: فندقك في مراكش", to: "مثال: وادي أوريكا" } },
  pt: { price: "Preço fixo", service: "Serviço", missing: "Por favor preencha o local de partida e de destino.",
    city: { q: "Para onde vai viajar?", from: "ex. Marraquexe", to: "ex. Essaouira" },
    day: { q: "Para onde gostaria de ir?", from: "ex. O seu hotel em Marraquexe", to: "ex. Vale de Ourika" } },
  nl: { price: "Vaste prijs", service: "Dienst", missing: "Vul alstublieft vertrek en bestemming in.",
    city: { q: "Waar reist u naartoe?", from: "bijv. Marrakech", to: "bijv. Essaouira" },
    day: { q: "Waar wilt u naartoe?", from: "bijv. Uw hotel in Marrakech", to: "bijv. Ourika-vallei" } },
};
const widgetLang = () => {
  const l = (document.documentElement.lang || "en").slice(0, 2);
  return WIDGET_COPY[l] ? l : "en";
};

/** Switches the hero widget to the clicked service tab: heading, placeholders and the WhatsApp message follow. */
function selectWidgetTab(tab: HTMLElement) {
  const tabs = Array.from(tab.parentElement?.querySelectorAll<HTMLElement>(".booking-tab:not(a)") || []);
  tabs.forEach((b) => {
    const on = b === tab;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  const widget = tab.closest<HTMLElement>(".booking-widget");
  const form = widget?.querySelector<HTMLFormElement>("form");
  if (!widget || !form) return;
  const service = WIDGET_SERVICES[tabs.indexOf(tab)] || "airport";
  const q = widget.querySelector<HTMLElement>(".widget-question");
  const from = form.querySelector<HTMLInputElement>("[name=from]");
  const to = form.querySelector<HTMLInputElement>("[name=to]");
  // Remember the page's own (airport) wording the first time.
  if (q && !q.dataset.airport) q.dataset.airport = q.textContent || "";
  if (from && !from.dataset.airport) from.dataset.airport = from.placeholder;
  if (to && !to.dataset.airport) to.dataset.airport = to.placeholder;
  const copy = WIDGET_COPY[widgetLang()][service];
  if (q) q.textContent = copy ? copy.q : q.dataset.airport || "";
  if (from) from.placeholder = copy ? copy.from : from.dataset.airport || "";
  if (to) to.placeholder = copy ? copy.to : to.dataset.airport || "";
  form.dataset.service = service;
  form.dataset.serviceLabel = tab.textContent?.trim() || "";
  // Tell the From/To dropdowns (components/LocationFields.tsx) which places to offer.
  window.dispatchEvent(new CustomEvent("pmt:widget-service", { detail: service }));
  clearWidgetErrors(form);
}

function clearWidgetErrors(form: HTMLFormElement) {
  form.querySelectorAll(".field-input.is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
    el.removeAttribute("aria-invalid");
  });
  form.querySelectorAll(".field-error").forEach((el) => el.remove());
}

/** Inline error under the empty fields (replaces the old alert(), which some in-app browsers block). */
function showWidgetErrors(form: HTMLFormElement, fields: HTMLInputElement[], message: string) {
  clearWidgetErrors(form);
  fields.forEach((input) => {
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
  });
  const first = fields[0];
  const p = document.createElement("p");
  p.className = "field-error";
  p.setAttribute("role", "alert");
  p.id = `${first.id || "bw"}-error`;
  p.textContent = message;
  first.setAttribute("aria-describedby", p.id);
  first.insertAdjacentElement("afterend", p);
  first.focus();
}

export default function SiteScripts() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const t = e.target as HTMLElement;

      const wa = t.closest<HTMLElement>("[data-wa]");
      if (wa) {
        e.preventDefault();
        openWhatsApp(
          wa.dataset.wa || "Hello, I would like a quote for a private driver in Morocco.",
          { label: wa.textContent?.trim() || "Button WhatsApp Click", route: window.location.pathname }
        );
        return;
      }

      const waLink = t.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      // Every WhatsApp link on the site opens the booking popup (WhatsApp / email / phone),
      // except links marked data-wa-direct and ctrl/cmd-clicks (open in new tab as usual).
      if (waLink && !waLink.closest("[data-wa-direct]") && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        let text = "";
        try {
          text = new URL(waLink.href).searchParams.get("text") || "";
        } catch {}
        openWhatsApp(text || "Hello, I would like a quote for a private driver in Morocco.", {
          label: waLink.textContent?.trim() || "WhatsApp Link Click",
          route: window.location.pathname,
        });
        return;
      }
      if (waLink) {
        trackWhatsAppLead({
          label: waLink.textContent?.trim() || "WhatsApp Link Click",
          route: window.location.pathname,
        });
      }

      const q = t.closest(".faq-question");
      if (q) {
        const item = q.closest(".faq-item");
        const wasOpen = item?.classList.contains("open");
        item?.parentElement?.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!wasOpen) item?.classList.add("open");
        return;
      }

      const tab = t.closest<HTMLElement>(".booking-tab");
      if (tab && tab.tagName !== "A") {
        if (tab.closest(".booking-widget")) selectWidgetTab(tab);
        else {
          tab.parentElement?.querySelectorAll(".booking-tab").forEach((b) => b.classList.remove("active"));
          tab.classList.add("active");
        }
        return;
      }

      const filter = t.closest<HTMLElement>(".filter-btn");
      if (filter) {
        filter.parentElement?.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        filter.classList.add("active");
        const f = filter.dataset.filter || "all";
        document.querySelectorAll<HTMLElement>("[data-category]").forEach((card) => {
          card.style.display = f === "all" || card.dataset.category === f ? "" : "none";
        });
        return;
      }

      const step = t.closest<HTMLElement>("[data-step-next],[data-step-back]");
      if (step) {
        showStep(step.dataset.stepNext || step.dataset.stepBack || "1");
        return;
      }

      if (t.closest("#submitBooking")) {
        const v = (id: string) => val(document, `#${id}`);
        const msg = `New booking request:\n\nName: ${v("cf-name")}\nPhone: ${v("cf-phone")}\nRoute: ${v("cf-from")} → ${v("cf-to")}\nDate: ${v("cf-date")} ${v("cf-time")}\nVehicle: ${v("cf-vehicle")}\nPassengers: ${v("cf-pax")}` +
          (v("cf-flight") ? `\nFlight: ${v("cf-flight")}` : "") + (v("cf-notes") ? `\nNotes: ${v("cf-notes")}` : "");
        openWhatsApp(msg);
        document.querySelectorAll(".form-step").forEach((s) => s.classList.toggle("active", s.id === "step-success"));
        return;
      }

      const share = t.closest<HTMLElement>("[data-share]");
      if (share) {
        if (share.dataset.share === "copy") navigator.clipboard?.writeText(location.href);
        else window.open(`https://wa.me/?text=${encodeURIComponent(`${document.title} ${location.href}`)}`, "_blank", "noopener");
      }
    }

    function onSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement;
      if (form.id === "bookingWidget" || form.id === "heroBookingForm") {
        e.preventDefault();
        const from = val(form, "[name=from]"), to = val(form, "[name=to]");
        const isFr = location.pathname.startsWith("/fr");
        const isEs = location.pathname.startsWith("/es");
        const isIt = location.pathname.startsWith("/it");
        const isDe = location.pathname.startsWith("/de");
        const isAr = location.pathname.startsWith("/ar");
        const isPt = location.pathname.startsWith("/pt");
        const isNl = location.pathname.startsWith("/nl");

        if (!from || !to) {
          const empty = (["from", "to"] as const)
            .map((n) => form.querySelector<HTMLInputElement>(`[name=${n}]`))
            .filter((el): el is HTMLInputElement => !!el && !el.value.trim());
          if (empty.length) showWidgetErrors(form, empty, WIDGET_COPY[widgetLang()].missing);
          return;
        }
        clearWidgetErrors(form);

        const date = val(form, "[name=date]") || "TBD";
        const pass = val(form, "[name=passengers]") || "1–3";

        let text = `Hello, I'd like a fixed price quote:\n\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nPassengers: ${pass}\n\nThank you!`;
        if (isFr) text = `Bonjour! Je souhaite obtenir un devis à tarif fixe:\n\nDépart: ${from}\nArrivée: ${to}\nDate: ${date}\nPassagers: ${pass}\n\nMerci!`;
        else if (isEs) text = `¡Hola! Me gustaría consultar un precio fijo:\n\nOrigen: ${from}\nDestino: ${to}\nFecha: ${date}\nPasajeros: ${pass}\n\n¡Gracias!`;
        else if (isIt) text = `Buongiorno! Vorrei un preventivo a prezzo fisso:\n\nPartenza: ${from}\nDestinazione: ${to}\nData: ${date}\nPasseggeri: ${pass}\n\nGrazie!`;
        else if (isDe) text = `Guten Tag! Ich möchte ein Festpreisangebot anfragen:\n\nAbfahrtsort: ${from}\nZielort: ${to}\nDatum: ${date}\nPassagiere: ${pass}\n\nVielen Dank!`;
        else if (isAr) text = `السلام عليكم! أود الاستفسار عن سعر ثابت لرحلة:\n\nالانطلاق: ${from}\nالوجهة: ${to}\nالتاريخ: ${date}\nالركاب: ${pass}\n\nشكراً لكم!`;
        else if (isPt) text = `Olá! Gostaria de um orçamento com preço fixo:\n\nPartida: ${from}\nDestino: ${to}\nData: ${date}\nPassageiros: ${pass}\n\nObrigado!`;
        else if (isNl) text = `Hallo! Ik wil graag een offerte voor een vaste prijs:\n\nVertrek: ${from}\nBestemming: ${to}\nDatum: ${date}\nPassagiers: ${pass}\n\nBedankt!`;

        // Fixed price shown by the From/To dropdowns (components/LocationFields.tsx).
        if (form.dataset.price) {
          const cut = text.lastIndexOf("\n\n");
          const line = form.dataset.priceLine || `${WIDGET_COPY[widgetLang()].price}: €${form.dataset.price}`;
          text = cut > 0 ? `${text.slice(0, cut)}\n${line}${text.slice(cut)}` : `${text}\n${line}`;
        }
        const serviceLabel = form.dataset.serviceLabel;
        if (serviceLabel && form.dataset.service && form.dataset.service !== "airport") {
          // e.g. "Service: City-to-City" right before the From line.
          text = text.replace(/\n\n/, `\n\n${WIDGET_COPY[widgetLang()].service}: ${serviceLabel}\n`);
        }
        openWhatsApp(text, { route: `${from} → ${to}`, label: `Hero Booking Widget (${form.dataset.service || "airport"})` });
      } else if (form.id === "briefForm") {
        e.preventDefault();
        const v = (n: string) => val(form, `[name=${n}]`);
        openWhatsApp(
          `Hello, I'd like a fixed price:\n\nName: ${v("name")}\nEmail: ${v("email") || "—"}\nService: ${v("service")}\nRoute: ${v("route")}\nDate / passengers: ${v("date") || "TBD"}\nNotes: ${v("notes") || "—"}`,
          { route: v("route") || "Trip Brief", label: "Trip Brief Form" }
        );
      } else if (form.id === "contactForm") {
        e.preventDefault();
      }
    }

    function onInput(e: Event) {
      const el = e.target as HTMLElement;
      if (el.classList?.contains("is-invalid")) {
        el.classList.remove("is-invalid");
        el.removeAttribute("aria-invalid");
        el.nextElementSibling?.classList.contains("field-error") && el.nextElementSibling.remove();
      }
    }
    function onKey(e: KeyboardEvent) {
      const tab = (e.target as HTMLElement).closest?.<HTMLElement>(".booking-widget .booking-tab:not(a)");
      if (tab && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        selectWidgetTab(tab);
      }
    }
    // Make the service tabs keyboard- and screen-reader-friendly.
    document.querySelectorAll<HTMLElement>(".booking-widget .booking-tab:not(a)").forEach((tab) => {
      // Toggle buttons rather than ARIA tabs: the row also holds a plain link
      // (price calculator), and a role="tablist" may only contain tabs.
      tab.setAttribute("role", "button");
      tab.setAttribute("tabindex", "0");
      tab.setAttribute("aria-pressed", String(tab.classList.contains("active")));
    });

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    document.addEventListener("input", onInput);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      document.removeEventListener("input", onInput);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
