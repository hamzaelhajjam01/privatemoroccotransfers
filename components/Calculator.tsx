"use client";

import { useState } from "react";
import { CITIES, VEHICLES, quote, type VehicleKey } from "@/lib/pricing";
import { openWhatsApp } from "@/lib/site";

type Result = NonNullable<ReturnType<typeof quote>> & { from: string; to: string; roundTrip: boolean };

export default function Calculator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [vehicle, setVehicle] = useState<VehicleKey>("sedan");
  const [roundTrip, setRoundTrip] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    if (!from || !to) return setError("Please choose both cities.");
    if (from === to) return setError("Please choose two different cities.");
    const q = quote(from, to, vehicle, roundTrip);
    if (!q) return setError("We don't have this route in the calculator yet — message us on WhatsApp for a custom price.");
    setError("");
    setResult({ ...q, from, to, roundTrip });
  }

  function book() {
    if (!result) return;
    openWhatsApp(
      `Hello! I used your website price calculator:\n\n• Route: ${result.from} → ${result.to}${result.roundTrip ? " (Round Trip)" : ""}\n• Vehicle: ${result.vehicle}\n• Fixed Price: €${result.eur} (${result.mad.toLocaleString("en-US")} MAD)\n\nCan you confirm availability and arrange this booking?`
    );
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <h2 className="heading-md">Calculate your route</h2>
        <p style={{ marginTop: 8, fontSize: "0.88rem" }}>Fixed price — per vehicle, not per person.</p>
      </div>
      <div className="calc-body">
        <form onSubmit={calculate}>
          <div className="field-row">
            <div>
              <label className="field-label" htmlFor="calc-from">From</label>
              <select id="calc-from" className="calc-select" value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="">Select city...</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="calc-to">To</label>
              <select id="calc-to" className="calc-select" value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="">Select city...</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="field-row">
            <div>
              <label className="field-label" htmlFor="calc-vehicle">Vehicle Type</label>
              <select id="calc-vehicle" className="calc-select" value={vehicle} onChange={(e) => setVehicle(e.target.value as VehicleKey)}>
                {(Object.keys(VEHICLES) as VehicleKey[]).map((k) => <option key={k} value={k}>{VEHICLES[k].option}</option>)}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="calc-trip">Trip Type</label>
              <select id="calc-trip" className="calc-select" value={roundTrip ? "round" : "one"} onChange={(e) => setRoundTrip(e.target.value === "round")}>
                <option value="one">One Way</option>
                <option value="round">Round Trip (10% off)</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-black btn-lg">Calculate fixed price</button>
          {error && <p className="field-note" role="alert">{error}</p>}
        </form>

        {result && (
          <div className="calc-result show">
            <div className="calc-result-header">
              <span className="calc-result-route">{result.from} → {result.to}{result.roundTrip ? " (Round Trip)" : ""}</span>
              <span style={{ fontSize: "0.78rem" }}>{result.vehicle}</span>
            </div>
            <div className="calc-result-body">
              <div style={{ display: "flex", gap: 16, fontSize: "0.82rem", color: "var(--muted)", marginBottom: 20 }}>
                <span>{result.km} km</span>
                <span>~{result.hours}h drive</span>
              </div>
              <div className="calc-price-row">
                <div className="calc-price-item">
                  <div className="calc-price-currency">Euro</div>
                  <div className="calc-price-value">€{result.eur.toLocaleString("en-US")}</div>
                </div>
                <div className="calc-price-item">
                  <div className="calc-price-currency">Moroccan Dirham</div>
                  <div className="calc-price-value">{result.mad.toLocaleString("en-US")} MAD</div>
                </div>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: 16 }}>Flat rate per vehicle (all-inclusive: driver, fuel, highway tolls & luggage). 1 EUR ≈ 11 MAD.</p>
              <div className="calc-includes">
                {["Driver", "Fuel", "Tolls", "A/C", "45-min free wait"].map((t) => <span key={t} className="calc-include-tag">{t}</span>)}
              </div>
              <button type="button" className="btn btn-whatsapp" onClick={book}>Book this route on WhatsApp</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
