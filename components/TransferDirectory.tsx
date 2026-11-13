"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { EUR_RATE } from "@/lib/currency";
import { whatsappUrl } from "@/lib/site";
import { getLocalizedPlace, type LanguageCode } from "@/lib/i18n";
import type { RouteItem } from "@/app/(en)/transfers/[slug]/page";

const CITIES = [
  "All",
  "Marrakech",
  "Casablanca",
  "Tangier",
  "Fes",
  "Agadir",
  "Rabat",
  "Essaouira",
  "Chefchaouen",
] as const;

type DirCopy = {
  allLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  showing: string;
  routesLabel: string;
  forCity: string;
  matching: string;
  flatRateNote: string;
  emptyTitle: string;
  emptySub: string;
  emptyCta: string;
  waCustomPrompt: string;
  badgePrivate: string;
  badgeFixed: string;
  paxLabel: string;
  bDriver: string;
  bDoor: string;
  bDeposit: string;
  fromSedan: string;
  ctaLabel: string;
};

const DIR_UI: Record<LanguageCode, DirCopy> = {
  en: {
    allLabel: "All",
    searchLabel: "Search routes by departure or destination",
    searchPlaceholder: "Type city or airport (e.g. Marrakech, Essaouira, Casablanca Airport, Chefchaouen)...",
    showing: "Showing",
    routesLabel: "private transfer routes",
    forCity: "for",
    matching: "matching",
    flatRateNote: "Flat rate per vehicle · Tolls & luggage included",
    emptyTitle: "No listed routes found matching your criteria.",
    emptySub: "We serve all cities, riads, and airports across Morocco on demand.",
    emptyCta: "Request Custom Route on WhatsApp",
    waCustomPrompt: "Salam! I am looking for a custom private transfer that is not in the directory. Can you give me a fixed quote?",
    badgePrivate: "Private Transfer",
    badgeFixed: "Fixed Rate",
    paxLabel: "1–14 Pax",
    bDriver: "Licensed professional English-speaking driver",
    bDoor: "Door-to-door (hotel, riad, or airport terminal)",
    bDeposit: "Zero deposit under €300 — Pay cash on arrival",
    fromSedan: "From (Sedan)",
    ctaLabel: "Rates & Info",
  },
  fr: {
    allLabel: "Toutes",
    searchLabel: "Rechercher un itinéraire par ville ou aéroport",
    searchPlaceholder: "Ville ou aéroport (ex. Marrakech, Essaouira, Casablanca CMN, Chefchaouen)...",
    showing: "Affichage de",
    routesLabel: "trajets de transfert privé",
    forCity: "pour",
    matching: "correspondant à",
    flatRateNote: "Tarif fixe par véhicule · Péages et bagages inclus",
    emptyTitle: "Aucun trajet listé ne correspond à votre recherche.",
    emptySub: "Nous desservons toutes les villes, riads et aéroports du Maroc sur demande.",
    emptyCta: "Demander un devis sur WhatsApp",
    waCustomPrompt: "Salam ! Je recherche un transfert privé sur mesure qui ne figure pas dans le catalogue. Pouvez-vous me faire un devis fixe ?",
    badgePrivate: "Transfert Privé",
    badgeFixed: "Prix Fixe",
    paxLabel: "1–14 Pax",
    bDriver: "Chauffeur professionnel bilingue agréé",
    bDoor: "Service porte-à-porte (riad, hôtel ou aéroport)",
    bDeposit: "0% d'acompte < 300 € — Paiement à l'arrivée",
    fromSedan: "À partir de (Berline)",
    ctaLabel: "Tarifs & Infos",
  },
  es: {
    allLabel: "Todas",
    searchLabel: "Buscar ruta por ciudad o aeropuerto",
    searchPlaceholder: "Escriba ciudad o aeropuerto (ej. Marrakech, Essaouira, Aeropuerto Casablanca)...",
    showing: "Mostrando",
    routesLabel: "rutas de traslado privado",
    forCity: "para",
    matching: "que coinciden con",
    flatRateNote: "Tarifa fija por vehículo · Peajes y equipaje incluidos",
    emptyTitle: "No se encontraron rutas con esos filtros.",
    emptySub: "Cubrimos todas las ciudades, riads y aeropuertos de Marruecos bajo pedido.",
    emptyCta: "Solicitar ruta a medida por WhatsApp",
    waCustomPrompt: "¡Salam! Busco un traslado privado a medida que no aparece en el catálogo. ¿Pueden enviarme un presupuesto fijo?",
    badgePrivate: "Traslado Privado",
    badgeFixed: "Tarifa Fija",
    paxLabel: "1–14 Pax",
    bDriver: "Chófer profesional bilingüe con licencia",
    bDoor: "Puerta a puerta (hotel, riad o terminal)",
    bDeposit: "0% depósito < 300 € — Pago al llegar",
    fromSedan: "Desde (Sedán)",
    ctaLabel: "Tarifas e Info",
  },
  it: {
    allLabel: "Tutte",
    searchLabel: "Cerca tratta per città o aeroporto",
    searchPlaceholder: "Digita città o aeroporto (es. Marrakech, Essaouira, Aeroporto Casablanca)...",
    showing: "Visualizzazione di",
    routesLabel: "tratte di transfer privato",
    forCity: "per",
    matching: "corrispondenti a",
    flatRateNote: "Tariffa fissa per veicolo · Pedaggi e bagagli inclusi",
    emptyTitle: "Nessuna tratta trovata con questi criteri.",
    emptySub: "Operiamo in tutte le città, riad e aeroporti del Marocco su richiesta.",
    emptyCta: "Richiedi tratta su misura su WhatsApp",
    waCustomPrompt: "Salam! Cerco un transfer privato personalizzato non presente in elenco. Potete fornirmi una tariffa fissa?",
    badgePrivate: "Transfer Privato",
    badgeFixed: "Tariffa Fissa",
    paxLabel: "1–14 Pax",
    bDriver: "Autista professionista con licenza",
    bDoor: "Porta a porta (hotel, riad o terminal)",
    bDeposit: "0% anticipo < 300 € — Paga all'arrivo",
    fromSedan: "Da (Berlina)",
    ctaLabel: "Tariffe e Info",
  },
  de: {
    allLabel: "Alle",
    searchLabel: "Route nach Start- oder Zielort suchen",
    searchPlaceholder: "Stadt oder Flughafen eingeben (z. B. Marrakesch, Essaouira, Flughafen Casablanca)...",
    showing: "Angezeigt:",
    routesLabel: "private Transferrouten",
    forCity: "für",
    matching: "passend zu",
    flatRateNote: "Festpreis pro Fahrzeug · Maut & Gepäck inklusive",
    emptyTitle: "Keine passenden Routen in der Übersicht gefunden.",
    emptySub: "Wir fahren auf Anfrage jede Stadt, jedes Riad und jeden Flughafen in Marokko an.",
    emptyCta: "Wunschroute per WhatsApp anfragen",
    waCustomPrompt: "Salam! Ich suche einen individuellen Privattransfer außerhalb der Liste. Können Sie mir einen Festpreis nennen?",
    badgePrivate: "Privattransfer",
    badgeFixed: "Festpreis",
    paxLabel: "1–14 Pers.",
    bDriver: "Lizenzierter Profi-Chauffeur",
    bDoor: "Tür-zu-Tür-Service (Riad, Hotel oder Terminal)",
    bDeposit: "0% Anzahlung < 300 € — Zahlung vor Ort",
    fromSedan: "Ab (Limousine)",
    ctaLabel: "Preise & Infos",
  },
  ar: {
    allLabel: "الكل",
    searchLabel: "ابحث عن المسار حسب مدينة الانطلاق أو الوجهة",
    searchPlaceholder: "اكتب اسم المدينة أو المطار (مثال: مراكش، الصويرة، مطار الدار البيضاء)...",
    showing: "عرض",
    routesLabel: "مسار توصيل خاص",
    forCity: "لـ",
    matching: "المطابقة لـ",
    flatRateNote: "سعر ثابت للسيارة بالكامل · يشمل الوقود والرسوم والأمتعة",
    emptyTitle: "لم يتم العثور على مسارات مطابقة لبحثك.",
    emptySub: "نوفر خدمات النقل الخاص بين جميع المدن والرياضات والمطارات في المغرب عند الطلب.",
    emptyCta: "اطلب مساراً خاصاً عبر واتساب",
    waCustomPrompt: "السلام عليكم! أبحث عن توصيل خاص لمسار غير مدرج في القائمة. هل يمكنكم تزويدي بسعر ثابت؟",
    badgePrivate: "توصيل خاص",
    badgeFixed: "سعر ثابت",
    paxLabel: "1–14 راكباً",
    bDriver: "سائق محترف مرخص متحدث بالعربية والإنجليزية",
    bDoor: "من الباب إلى الباب (الفندق، الرياض أو المطار)",
    bDeposit: "دون دفع مسبق أقل من 300€ — الدفع عند الوصول",
    fromSedan: "ابتداءً من (سيدان)",
    ctaLabel: "الأسعار والتفاصيل",
  },
  pt: {
    allLabel: "Todas",
    searchLabel: "Pesquisar rota por partida ou destino",
    searchPlaceholder: "Escreva cidade ou aeroporto (ex. Marraquexe, Essaouira, Aeroporto Casablanca)...",
    showing: "A mostrar",
    routesLabel: "rotas de transfer privado",
    forCity: "para",
    matching: "com",
    flatRateNote: "Preço fixo por viatura · Portagens e bagagem incluídas",
    emptyTitle: "Nenhuma rota encontrada com esses filtros.",
    emptySub: "Servimos todas as cidades, riads e aeroportos de Marrocos mediante pedido.",
    emptyCta: "Pedir rota personalizada no WhatsApp",
    waCustomPrompt: "Salam! Procuro um transfer privado personalizado que não está no catálogo. Podem enviar um orçamento fixo?",
    badgePrivate: "Transfer Privado",
    badgeFixed: "Preço Fixo",
    paxLabel: "1–14 Pax",
    bDriver: "Motorista profissional licenciado",
    bDoor: "Porta-a-porta (hotel, riad ou aeroporto)",
    bDeposit: "0% sinal < 300 € — Pague à chegada",
    fromSedan: "Desde (Sedan)",
    ctaLabel: "Tarifas e Info",
  },
  nl: {
    allLabel: "Alle",
    searchLabel: "Zoek route op vertrek of bestemming",
    searchPlaceholder: "Typ stad of luchthaven (bijv. Marrakech, Essaouira, Luchthaven Casablanca)...",
    showing: "Toont",
    routesLabel: "privé transferroutes",
    forCity: "voor",
    matching: "voor",
    flatRateNote: "Vast tarief per voertuig · Tol & bagage inbegrepen",
    emptyTitle: "Geen routes gevonden die aan uw zoekopdracht voldoen.",
    emptySub: "Wij rijden op aanvraag tussen alle steden, riads en luchthavens in Marokko.",
    emptyCta: "Vraag een offerte op maat via WhatsApp",
    waCustomPrompt: "Salam! Ik zoek een privé transfer op maat die niet in de lijst staat. Kunt u een vast tarief geven?",
    badgePrivate: "Privé Transfer",
    badgeFixed: "Vaste Prijs",
    paxLabel: "1–14 Pers.",
    bDriver: "Ervaren gediplomeerde chauffeur",
    bDoor: "Deur-tot-deur service (hotel, riad of luchthaven)",
    bDeposit: "0% aanbetaling < €300 — Betaal bij aankomst",
    fromSedan: "Vanaf (Sedan)",
    ctaLabel: "Tarieven & Info",
  },
};

export default function TransferDirectory({
  routes,
  lang = "en",
}: {
  routes: RouteItem[];
  lang?: string;
}) {
  const safeLang: LanguageCode = lang in DIR_UI ? (lang as LanguageCode) : "en";
  const ui = DIR_UI[safeLang];
  const isRtl = safeLang === "ar";

  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const linkPrefix = safeLang === "en" ? "/transfers/" : `/${safeLang}/transfers/`;

  const filteredRoutes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return routes.filter((route) => {
      const fromLocal = getLocalizedPlace(route.from, safeLang).toLowerCase();
      const toLocal = getLocalizedPlace(route.to, safeLang).toLowerCase();
      const matchesSearch =
        !q ||
        route.from.toLowerCase().includes(q) ||
        route.to.toLowerCase().includes(q) ||
        fromLocal.includes(q) ||
        toLocal.includes(q) ||
        route.slug.toLowerCase().includes(q);

      const matchesCity =
        selectedCity === "All" ||
        route.from.toLowerCase().includes(selectedCity.toLowerCase()) ||
        route.to.toLowerCase().includes(selectedCity.toLowerCase());

      return matchesSearch && matchesCity;
    });
  }, [routes, selectedCity, searchQuery, safeLang]);

  const selectedCityLabel =
    selectedCity === "All" ? ui.allLabel : getLocalizedPlace(selectedCity, safeLang);

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* Search & City Filter Bar */}
      <div
        style={{
          background: "var(--sand)",
          border: "1px solid var(--rule)",
          padding: "32px",
          marginBottom: "40px",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="route-search"
            style={{
              display: "block",
              fontSize: "12px",
              fontFamily: "var(--mono)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--muted)",
              marginBottom: "10px",
            }}
          >
            {ui.searchLabel}
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="route-search"
              type="text"
              placeholder={ui.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px",
                paddingLeft: isRtl ? "20px" : "48px",
                paddingRight: isRtl ? "48px" : "20px",
                background: "var(--paper)",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: isRtl ? "auto" : "16px",
                right: isRtl ? "16px" : "auto",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon name="search" size={20} />
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: isRtl ? "auto" : "16px",
                  left: isRtl ? "16px" : "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* City Filter Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {CITIES.map((city) => {
            const count =
              city === "All"
                ? routes.length
                : routes.filter(
                    (r) =>
                      r.from.toLowerCase().includes(city.toLowerCase()) ||
                      r.to.toLowerCase().includes(city.toLowerCase())
                  ).length;

            const isActive = selectedCity === city;
            const cityLabel =
              city === "All" ? ui.allLabel : getLocalizedPlace(city, safeLang);

            return (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                style={{
                  padding: "10px 18px",
                  fontSize: "13px",
                  fontFamily: "var(--mono)",
                  letterSpacing: "0.04em",
                  border: isActive ? "1px solid var(--ink)" : "1px solid var(--rule)",
                  background: isActive ? "var(--ink)" : "var(--paper)",
                  color: isActive ? "var(--paper)" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cityLabel} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "16px", color: "var(--muted)", margin: 0 }}>
          {ui.showing} <strong style={{ color: "var(--ink)" }}>{filteredRoutes.length}</strong>{" "}
          {ui.routesLabel}
          {selectedCity !== "All" && ` ${ui.forCity} ${selectedCityLabel}`}
          {searchQuery && ` ${ui.matching} "${searchQuery}"`}
        </p>
        <span style={{ fontSize: "13px", fontFamily: "var(--mono)", color: "var(--ink)" }}>
          {ui.flatRateNote}
        </span>
      </div>

      {/* Grid of Route Cards */}
      {filteredRoutes.length === 0 ? (
        <div
          style={{
            padding: "56px 24px",
            textAlign: "center",
            background: "var(--sand)",
            border: "1px solid var(--rule)",
          }}
        >
          <p style={{ fontSize: "20px", color: "var(--ink)", marginBottom: "12px" }}>
            {ui.emptyTitle}
          </p>
          <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "24px" }}>
            {ui.emptySub}
          </p>
          <a
            href={whatsappUrl(ui.waCustomPrompt)}
            target="_blank"
            rel="noopener"
            className="btn btn-black"
          >
            {ui.emptyCta}
          </a>
        </div>
      ) : (
        <div className="listing-grid">
          {filteredRoutes.map((route) => {
            const mad = Math.round(route.price_sedan * EUR_RATE);
            const fromName = getLocalizedPlace(route.from, safeLang);
            const toName = getLocalizedPlace(route.to, safeLang);

            return (
              <div key={route.slug} className="listing-card">
                <div
                  className="listing-img"
                  style={{
                    backgroundImage: route.slug.includes("essaouira")
                      ? "url(/img/routes/marrakech-essaouira.webp)"
                      : route.slug.includes("agadir")
                      ? "url(/img/routes/marrakech-agadir.webp)"
                      : route.slug.includes("merzouga")
                      ? "url(/img/routes/marrakech-merzouga.webp)"
                      : "url(/img/hero-city-to-city.webp)",
                  }}
                >
                  <span className="listing-badge">{ui.badgePrivate}</span>
                  <span className="listing-fixed-badge">{ui.badgeFixed}</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">
                    <Link href={`${linkPrefix}${route.slug}`}>
                      {fromName} {isRtl ? "←" : "→"} {toName}
                    </Link>
                  </h3>
                  <div className="listing-features">
                    <span className="feature-tag">{route.distance}</span>
                    <span className="feature-tag">~{route.duration}</span>
                    <span className="feature-tag">{ui.paxLabel}</span>
                  </div>
                  <ul className="listing-includes">
                    <li>{ui.bDriver}</li>
                    <li>{ui.bDoor}</li>
                    <li>{ui.bDeposit}</li>
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">{ui.fromSedan}</div>
                      <div className="listing-price-amount">
                        €{route.price_sedan}{" "}
                        <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                          ({mad.toLocaleString()} MAD)
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Link
                        href={`${linkPrefix}${route.slug}`}
                        className="btn btn-black"
                        style={{ padding: "10px 18px", fontSize: "14px", minWidth: "0" }}
                      >
                        {ui.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
