"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { EUR_RATE } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";
import type { RouteItem } from "@/app/transfers/[slug]/page";

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

export default function TransferDirectory({
  routes,
  lang = "en",
}: {
  routes: RouteItem[];
  lang?: string;
}) {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const isFr = lang === "fr";
  const linkPrefix = lang === "en" ? "/transfers/" : `/${lang}/transfers/`;

  const filteredRoutes = useMemo(() => {
    return routes.filter((route) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        route.from.toLowerCase().includes(q) ||
        route.to.toLowerCase().includes(q) ||
        route.slug.toLowerCase().includes(q);

      const matchesCity =
        selectedCity === "All" ||
        route.from.toLowerCase().includes(selectedCity.toLowerCase()) ||
        route.to.toLowerCase().includes(selectedCity.toLowerCase());

      return matchesSearch && matchesCity;
    });
  }, [routes, selectedCity, searchQuery]);

  return (
    <div>
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
            Search routes by departure or destination
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="route-search"
              type="text"
              placeholder="Type city or airport (e.g. Marrakech, Essaouira, Casablanca Airport, Chefchaouen)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px",
                paddingLeft: "48px",
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
                left: "16px",
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
                  right: "16px",
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
                {city} ({count})
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
          Showing <strong style={{ color: "var(--ink)" }}>{filteredRoutes.length}</strong> private transfer routes
          {selectedCity !== "All" && ` for ${selectedCity}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
        <span style={{ fontSize: "13px", fontFamily: "var(--mono)", color: "var(--ink)" }}>
          Flat rate per vehicle · Tolls &amp; luggage included
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
            No listed routes found matching your criteria.
          </p>
          <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "24px" }}>
            We serve all cities, riads, and airports across Morocco on demand.
          </p>
          <a
            href={whatsappUrl(
              `Salam! I am looking for a custom private transfer that is not in the directory. Can you give me a fixed quote?`
            )}
            target="_blank"
            rel="noopener"
            className="btn btn-black"
          >
            Request Custom Route on WhatsApp
          </a>
        </div>
      ) : (
        <div className="listing-grid">
          {filteredRoutes.map((route) => {
            const mad = Math.round(route.price_sedan * EUR_RATE);
            return (
              <div key={route.slug} className="listing-card">
                <div
                  className="listing-img"
                  style={{
                    backgroundImage: route.slug.includes("essaouira")
                      ? "url(/img/routes/marrakech-essaouira.jpg)"
                      : route.slug.includes("agadir")
                      ? "url(/img/routes/marrakech-agadir.jpg)"
                      : route.slug.includes("merzouga")
                      ? "url(/img/routes/marrakech-merzouga.jpg)"
                      : "url(/img/hero-city-to-city.jpg)",
                  }}
                >
                  <span className="listing-badge">{isFr ? "Transfert Privé" : "Private Transfer"}</span>
                  <span className="listing-fixed-badge">{isFr ? "Prix Fixe" : "Fixed Rate"}</span>
                </div>
                <div className="listing-body">
                  <h3 className="listing-title">
                    <Link href={`${linkPrefix}${route.slug}`}>
                      {route.from} → {route.to}
                    </Link>
                  </h3>
                  <div className="listing-features">
                    <span className="feature-tag">{route.distance}</span>
                    <span className="feature-tag">~{route.duration}</span>
                    <span className="feature-tag">{isFr ? "1–14 Pax" : "1–14 Pax"}</span>
                  </div>
                  <ul className="listing-includes">
                    <li>{isFr ? "Chauffeur professionnel bilingue" : "Licensed professional English-speaking driver"}</li>
                    <li>{isFr ? "Service porte-à-porte (riad, hôtel ou aéroport)" : "Door-to-door (hotel, riad, or airport terminal)"}</li>
                    <li>{isFr ? "0% d'acompte < 300 € — Paiement à l'arrivée" : "Zero deposit under €300 — Pay cash on arrival"}</li>
                  </ul>
                  <div className="listing-footer">
                    <div>
                      <div className="listing-price-from">{isFr ? "À partir de (Berline)" : "From (Sedan)"}</div>
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
                        {isFr ? "Tarifs & Infos" : "Rates & Info"}
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
