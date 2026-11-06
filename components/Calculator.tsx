"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CITIES, VEHICLES, quote, type VehicleKey } from "@/lib/pricing";
import { openWhatsApp } from "@/lib/site";
import { getLangFromPathname, getLocalizedPlace, LanguageCode } from "@/lib/i18n";

type Result = NonNullable<ReturnType<typeof quote>> & { from: string; to: string; roundTrip: boolean };

const CALC_I18N: Record<
  LanguageCode,
  {
    heading: string;
    sub: string;
    lblFrom: string;
    lblTo: string;
    selectCity: string;
    lblVehicle: string;
    lblTrip: string;
    oneWay: string;
    roundTrip: string;
    btnCalc: string;
    errBoth: string;
    errDistinct: string;
    errUnavailable: string;
    roundTag: string;
    drive: string;
    currencyEur: string;
    currencyMad: string;
    allInclusive: string;
    includes: string[];
    btnBook: string;
    waMsg: (from: string, to: string, roundTrip: boolean, vehicle: string, eur: number, mad: number) => string;
  }
> = {
  en: {
    heading: "Calculate your route",
    sub: "Fixed price — per vehicle, not per person.",
    lblFrom: "From",
    lblTo: "To",
    selectCity: "Select city...",
    lblVehicle: "Vehicle Type",
    lblTrip: "Trip Type",
    oneWay: "One Way",
    roundTrip: "Round Trip (10% off)",
    btnCalc: "Calculate fixed price",
    errBoth: "Please choose both cities.",
    errDistinct: "Please choose two different cities.",
    errUnavailable: "We don't have this route in the calculator yet — message us on WhatsApp for a custom price.",
    roundTag: " (Round Trip)",
    drive: "drive",
    currencyEur: "Euro",
    currencyMad: "Moroccan Dirham",
    allInclusive: "Flat rate per vehicle (all-inclusive: driver, fuel, highway tolls & luggage). 1 EUR ≈ 11 MAD.",
    includes: ["Driver", "Fuel", "Tolls", "A/C", "45-min free wait"],
    btnBook: "Book this route on WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `Hello! I used your website price calculator:\n\n• Route: ${f} → ${t}${r ? " (Round Trip)" : ""}\n• Vehicle: ${v}\n• Fixed Price: €${eur} (${mad.toLocaleString("en-US")} MAD)\n\nCan you confirm availability and arrange this booking?`,
  },
  fr: {
    heading: "Calculateur de Tarif",
    sub: "Tarif fixe garanti — par véhicule, et non par personne.",
    lblFrom: "Lieu de départ",
    lblTo: "Destination",
    selectCity: "Sélectionner la ville...",
    lblVehicle: "Type de véhicule",
    lblTrip: "Type de trajet",
    oneWay: "Aller simple",
    roundTrip: "Aller-retour (-10%)",
    btnCalc: "Calculer mon tarif fixe",
    errBoth: "Veuillez choisir les deux villes.",
    errDistinct: "Veuillez choisir deux villes distinctes.",
    errUnavailable: "Ce trajet personnalisé n'est pas encore automatisé — contactez-nous sur WhatsApp pour un tarif fixe immédiat.",
    roundTag: " (Aller-Retour)",
    drive: "de trajet",
    currencyEur: "Euro",
    currencyMad: "Dirham Marocain",
    allInclusive: "Tarif fixe tout compris par véhicule (chauffeur, carburant, péages d'autoroute & bagages). 1 EUR ≈ 11 MAD.",
    includes: ["Chauffeur", "Carburant", "Péages", "Clim", "45 min attente"],
    btnBook: "Réserver ce trajet sur WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `Bonjour! J'ai utilisé votre calculateur de tarif en ligne:\n\n• Trajet: ${f} → ${t}${r ? " (Aller-Retour)" : ""}\n• Véhicule: ${v}\n• Tarif Fixe: €${eur} (${mad.toLocaleString("fr-FR")} MAD)\n\nPouvez-vous me confirmer la disponibilité et planifier cette réservation?`,
  },
  es: {
    heading: "Calculadora de Tarifas",
    sub: "Precio fijo garantizado — por vehículo completo, no por persona.",
    lblFrom: "Origen",
    lblTo: "Destino",
    selectCity: "Seleccionar ciudad...",
    lblVehicle: "Tipo de vehículo",
    lblTrip: "Tipo de trayecto",
    oneWay: "Solo ida",
    roundTrip: "Ida y vuelta (10% dto.)",
    btnCalc: "Calcular precio fijo",
    errBoth: "Por favor elija ambas ciudades.",
    errDistinct: "Por favor elija dos ciudades distintas.",
    errUnavailable: "Esta ruta no está automatizada en la calculadora — contáctenos por WhatsApp para cotización inmediata.",
    roundTag: " (Ida y Vuelta)",
    drive: "de trayecto",
    currencyEur: "Euro",
    currencyMad: "Dirham Marroquí",
    allInclusive: "Tarifa fija por vehículo completo (chófer, combustible, peajes de autopista y maletas). 1 EUR ≈ 11 MAD.",
    includes: ["Chófer", "Combustible", "Peajes", "A/A", "45 min espera"],
    btnBook: "Reservar este trayecto por WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `¡Hola! He calculado una ruta en su web:\n\n• Ruta: ${f} → ${t}${r ? " (Ida y Vuelta)" : ""}\n• Vehículo: ${v}\n• Precio Fijo: €${eur} (${mad.toLocaleString("es-ES")} MAD)\n\n¿Podrían confirmarme disponibilidad para esta reserva?`,
  },
  it: {
    heading: "Calcolatore Tariffe",
    sub: "Tariffa fissa garantita — per veicolo, non a persona.",
    lblFrom: "Partenza",
    lblTo: "Destinazione",
    selectCity: "Seleziona città...",
    lblVehicle: "Tipo di veicolo",
    lblTrip: "Tipo di viaggio",
    oneWay: "Solo andata",
    roundTrip: "Andata e ritorno (-10%)",
    btnCalc: "Calcola tariffa fissa",
    errBoth: "Si prega di selezionare entrambe le città.",
    errDistinct: "Si prega di selezionare due città diverse.",
    errUnavailable: "Questa tratta non è ancora nel calcolatore — scriveteci su WhatsApp per un preventivo personalizzato.",
    roundTag: " (Andata e Ritorno)",
    drive: "di tragitto",
    currencyEur: "Euro",
    currencyMad: "Dirham Marocchino",
    allInclusive: "Tariffa fissa per auto (autista, carburante, pedaggi e bagagli inclusi). 1 EUR ≈ 11 MAD.",
    includes: ["Autista", "Carburante", "Pedaggi", "Clima", "45 min attesa"],
    btnBook: "Prenota questa tratta su WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `Buongiorno! Ho calcolato un tragitto sul vostro sito:\n\n• Tragitto: ${f} → ${t}${r ? " (Andata e Ritorno)" : ""}\n• Veicolo: ${v}\n• Tariffa Fissa: €${eur} (${mad.toLocaleString("it-IT")} MAD)\n\nPotete confermarmi la disponibilità per questa prenotazione?`,
  },
  de: {
    heading: "Tarifrechner",
    sub: "Garantierter Festpreis — pro Fahrzeug, nicht pro Person.",
    lblFrom: "Abfahrtsort",
    lblTo: "Zielort",
    selectCity: "Stadt auswählen...",
    lblVehicle: "Fahrzeugtyp",
    lblTrip: "Fahrtart",
    oneWay: "Einfache Fahrt",
    roundTrip: "Hin- und Rückfahrt (-10%)",
    btnCalc: "Festpreis berechnen",
    errBoth: "Bitte wählen Sie beide Städte aus.",
    errDistinct: "Bitte wählen Sie zwei verschiedene Städte aus.",
    errUnavailable: "Diese Strecke ist noch nicht im Rechner hinterlegt — schreiben Sie uns auf WhatsApp für ein schnelles Angebot.",
    roundTag: " (Hin- & Rückfahrt)",
    drive: "Fahrzeit",
    currencyEur: "Euro",
    currencyMad: "Marokkanischer Dirham",
    allInclusive: "Pauschalpreis pro Fahrzeug (inkl. Chauffeur, Treibstoff, Mautgebühren und Gepäck). 1 EUR ≈ 11 MAD.",
    includes: ["Fahrer", "Treibstoff", "Maut", "Klima", "45 Min. Wartezeit"],
    btnBook: "Diese Fahrt auf WhatsApp buchen",
    waMsg: (f, t, r, v, eur, mad) =>
      `Guten Tag! Ich habe den Tarifrechner auf Ihrer Website genutzt:\n\n• Strecke: ${f} → ${t}${r ? " (Hin- & Rückfahrt)" : ""}\n• Fahrzeug: ${v}\n• Festpreis: €${eur} (${mad.toLocaleString("de-DE")} MAD)\n\nKönnen Sie die Verfügbarkeit bestätigen und die Buchung aufnehmen?`,
  },
  ar: {
    heading: "حاسبة الأسعار الصافية",
    sub: "سعر ثابت ومؤكد — لكل سيارة بالكامل، وليس للشخص.",
    lblFrom: "نقطة الانطلاق",
    lblTo: "الوجهة",
    selectCity: "اختر المدينة...",
    lblVehicle: "نوع السيارة",
    lblTrip: "نوع الرحلة",
    oneWay: "ذهاب فقط",
    roundTrip: "ذهاب وعودة (خصم 10%)",
    btnCalc: "احسب السعر الثابت",
    errBoth: "يرجى اختيار المدينتين.",
    errDistinct: "يرجى اختيار مدينتين مختلفتين.",
    errUnavailable: "هذا الخط غير متاح حالياً بالحاسبة — تواصل معنا عبر واتساب للحصول على سعر فوري.",
    roundTag: " (ذهاب وعودة)",
    drive: "مدة الرحلة",
    currencyEur: "يورو",
    currencyMad: "درهم مغربي",
    allInclusive: "سعر ثابت شامل لكل سيارة (السائق، الوقود، رسوم الطرق السريعة والحقائب). 1 يورو ≈ 11 درهم.",
    includes: ["سائق خاص", "وقود", "رسوم الطرق", "تكييف", "45 دقيقة انتظار"],
    btnBook: "حجز هذه الرحلة عبر واتساب",
    waMsg: (f, t, r, v, eur, mad) =>
      `السلام عليكم! قمت بحساب تكلفة الرحلة عبر موقعكم:\n\n• المسار: ${f} ← ${t}${r ? " (ذهاب وعودة)" : ""}\n• السيارة: ${v}\n• السعر الثابت: €${eur} (${mad.toLocaleString("ar-MA")} درهم)\n\nهل يمكنكم تأكيد التوافر وترتيب الحجز؟`,
  },
  pt: {
    heading: "Calculadora de Preços",
    sub: "Preço fixo garantido — por viatura completa, não por pessoa.",
    lblFrom: "Partida",
    lblTo: "Destino",
    selectCity: "Selecionar cidade...",
    lblVehicle: "Tipo de Veículo",
    lblTrip: "Tipo de Viagem",
    oneWay: "Só ida",
    roundTrip: "Ida e volta (10% desc.)",
    btnCalc: "Calcular preço fixo",
    errBoth: "Por favor escolha as duas cidades.",
    errDistinct: "Por favor escolha duas cidades diferentes.",
    errUnavailable: "Este percurso ainda não está automatizado — contacte-nos no WhatsApp para preço personalizado.",
    roundTag: " (Ida e Volta)",
    drive: "de viagem",
    currencyEur: "Euro",
    currencyMad: "Dirham Marroquino",
    allInclusive: "Tarifa fixa por viatura (motorista, combustível, portagens e bagagem). 1 EUR ≈ 11 MAD.",
    includes: ["Motorista", "Combustível", "Portagens", "A/C", "45 min espera"],
    btnBook: "Reservar esta rota no WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `Olá! Calculei uma rota no vosso website:\n\n• Rota: ${f} → ${t}${r ? " (Ida e Volta)" : ""}\n• Viatura: ${v}\n• Preço Fixo: €${eur} (${mad.toLocaleString("pt-PT")} MAD)\n\nPoderiam confirmar a disponibilidade para esta reserva?`,
  },
  nl: {
    heading: "Tarieven Calculator",
    sub: "Vaste all-in prijs — per voertuig, niet per persoon.",
    lblFrom: "Vertrek",
    lblTo: "Bestemming",
    selectCity: "Kies stad...",
    lblVehicle: "Type voertuig",
    lblTrip: "Type rit",
    oneWay: "Enkele reis",
    roundTrip: "Retour (10% korting)",
    btnCalc: "Bereken vaste prijs",
    errBoth: "Kies alstublieft beide steden.",
    errDistinct: "Kies alstublieft twee verschillende steden.",
    errUnavailable: "Deze route staat nog niet in de calculator — stuur ons een WhatsApp bericht voor een prijs op maat.",
    roundTag: " (Retour)",
    drive: "reistijd",
    currencyEur: "Euro",
    currencyMad: "Marokkaanse Dirham",
    allInclusive: "Vast tarief per voertuig (all-in: chauffeur, brandstof, tolwegen en bagage). 1 EUR ≈ 11 MAD.",
    includes: ["Chauffeur", "Brandstof", "Tolwegen", "Airco", "45 min wachttijd"],
    btnBook: "Boek deze route via WhatsApp",
    waMsg: (f, t, r, v, eur, mad) =>
      `Hallo! Ik heb een rit berekend via uw website:\n\n• Route: ${f} → ${t}${r ? " (Retour)" : ""}\n• Voertuig: ${v}\n• Vaste Prijs: €${eur} (${mad.toLocaleString("nl-NL")} MAD)\n\nKunt u de beschikbaarheid bevestigen en deze reservering inplannen?`,
  },
};

export default function Calculator({ isFr = false }: { isFr?: boolean }) {
  const pathname = usePathname();
  const pathLang = getLangFromPathname(pathname);
  const lang: LanguageCode = pathLang !== "en" ? pathLang : isFr ? "fr" : "en";
  const t = CALC_I18N[lang] || CALC_I18N.en;

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [vehicle, setVehicle] = useState<VehicleKey>("sedan");
  const [roundTrip, setRoundTrip] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    if (!from || !to) {
      return setError(t.errBoth);
    }
    if (from === to) {
      return setError(t.errDistinct);
    }
    const q = quote(from, to, vehicle, roundTrip);
    if (!q) {
      return setError(t.errUnavailable);
    }
    setError("");
    setResult({ ...q, from, to, roundTrip });
  }

  function book() {
    if (!result) return;
    const msg = t.waMsg(result.from, result.to, result.roundTrip, result.vehicle, result.eur, result.mad);

    openWhatsApp(msg, {
      route: `${result.from} → ${result.to}${result.roundTrip ? t.roundTag : ""}`,
      label: `Calculator Quote: ${result.vehicle}`,
      value: result.eur,
      currency: "EUR",
    });
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <h2 className="heading-md">{t.heading}</h2>
        <p style={{ marginTop: 8, fontSize: "0.88rem" }}>{t.sub}</p>
      </div>
      <div className="calc-body">
        <form onSubmit={calculate}>
          <div className="field-row">
            <div>
              <label className="field-label" htmlFor="calc-from">
                {t.lblFrom}
              </label>
              <select id="calc-from" className="calc-select" value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="">{t.selectCity}</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {getLocalizedPlace(c, lang)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="calc-to">
                {t.lblTo}
              </label>
              <select id="calc-to" className="calc-select" value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="">{t.selectCity}</option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {getLocalizedPlace(c, lang)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="field-row">
            <div>
              <label className="field-label" htmlFor="calc-vehicle">
                {t.lblVehicle}
              </label>
              <select id="calc-vehicle" className="calc-select" value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleKey)}>
                {(Object.keys(VEHICLES) as VehicleKey[]).map((k) => (
                  <option key={k} value={k}>
                    {VEHICLES[k].option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="calc-trip">
                {t.lblTrip}
              </label>
              <select id="calc-trip" className="calc-select" value={roundTrip ? "round" : "one"} onChange={(e) => setRoundTrip(e.target.value === "round")}>
                <option value="one">{t.oneWay}</option>
                <option value="round">{t.roundTrip}</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-black btn-lg">
            {t.btnCalc}
          </button>
          {error && <p className="field-note" role="alert">{error}</p>}
        </form>

        {result && (
          <div className="calc-result show">
            <div className="calc-result-header">
              <span className="calc-result-route">
                {getLocalizedPlace(result.from, lang)} → {getLocalizedPlace(result.to, lang)}
                {result.roundTrip ? t.roundTag : ""}
              </span>
              <span style={{ fontSize: "0.78rem" }}>{result.vehicle}</span>
            </div>
            <div className="calc-result-body">
              <div style={{ display: "flex", gap: 16, fontSize: "0.82rem", color: "var(--muted)", marginBottom: 20 }}>
                <span>{result.km} km</span>
                <span>~{result.hours}h {t.drive}</span>
              </div>
              <div className="calc-price-row">
                <div className="calc-price-item">
                  <div className="calc-price-currency">{t.currencyEur}</div>
                  <div className="calc-price-value">€{result.eur.toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}</div>
                </div>
                <div className="calc-price-item">
                  <div className="calc-price-currency">{t.currencyMad}</div>
                  <div className="calc-price-value">{result.mad.toLocaleString(lang === "fr" ? "fr-FR" : "en-US")} MAD</div>
                </div>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: 16 }}>{t.allInclusive}</p>
              <div className="calc-includes">
                {t.includes.map((tag) => (
                  <span key={tag} className="calc-include-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button type="button" className="btn btn-whatsapp" onClick={book}>
                {t.btnBook}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
