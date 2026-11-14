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

      const tab = t.closest(".booking-tab");
      if (tab && tab.tagName !== "A") {
        tab.parentElement?.querySelectorAll(".booking-tab").forEach((b) => b.classList.remove("active"));
        tab.classList.add("active");
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
          const alertMsg = isFr ? "Veuillez renseigner le départ et l'arrivée."
            : isEs ? "Por favor complete el origen y el destino."
            : isIt ? "Si prega di indicare partenza e destinazione."
            : isDe ? "Bitte geben Sie Abfahrtsort und Zielort an."
            : isAr ? "يرجى تحديد مكان الانطلاق والوجهة."
            : isPt ? "Por favor preencha o local de partida e de destino."
            : isNl ? "Vul alstublieft vertrek en bestemming in."
            : "Please fill in From and To.";
          alert(alertMsg);
          return;
        }

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

        openWhatsApp(text, { route: `${from} → ${to}`, label: "Hero Booking Widget" });
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

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
