/** Exchange rates and price formatting. Tiny and data-free, so it is safe to use in browser components. */
export const EUR_RATE = 11.0; // MAD per EUR (standard Moroccan tourism exchange rate)

export const CURRENCIES = {
  EUR: { code: "EUR", symbol: "€", rate: 1.0, label: "EUR (€)" },
  USD: { code: "USD", symbol: "$", rate: 1.08, label: "USD ($)" },
  GBP: { code: "GBP", symbol: "£", rate: 0.85, label: "GBP (£)" },
  MAD: { code: "MAD", symbol: "MAD", rate: 11.0, label: "MAD (DH)" },
} as const;

export type Currency = keyof typeof CURRENCIES;

export function convertPrice(eur: number, currency: Currency = "EUR"): { amount: number; formatted: string } {
  const c = CURRENCIES[currency] || CURRENCIES.EUR;
  const converted = Math.round(eur * c.rate);
  if (currency === "MAD") {
    return { amount: converted, formatted: `${converted.toLocaleString()} MAD` };
  }
  return { amount: converted, formatted: `${c.symbol}${converted}` };
}
