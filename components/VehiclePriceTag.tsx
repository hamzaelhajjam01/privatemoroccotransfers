"use client";

import { useEffect, useState } from "react";
import { convertPrice, type Currency, EUR_RATE } from "@/lib/currency";

type Props = {
  priceEur: number;
};

export default function VehiclePriceTag({ priceEur }: Props) {
  const [currency, setCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pmt_currency") as Currency;
      if (saved) setCurrency(saved);
    } catch {
      // ignore
    }

    const onCurrencyChange = (e: Event) => {
      const ce = e as CustomEvent<Currency>;
      if (ce.detail) setCurrency(ce.detail);
    };

    window.addEventListener("pmt_currency_changed", onCurrencyChange);
    return () => window.removeEventListener("pmt_currency_changed", onCurrencyChange);
  }, []);

  const converted = convertPrice(priceEur, currency);
  const madAmount = Math.round(priceEur * EUR_RATE);

  return (
    <>
      <span className="vehicle-price">{converted.formatted}</span>
      {currency !== "MAD" ? (
        <span className="vehicle-eur">≈ {madAmount.toLocaleString()} MAD</span>
      ) : (
        <span className="vehicle-eur">≈ €{priceEur} EUR</span>
      )}
    </>
  );
}
