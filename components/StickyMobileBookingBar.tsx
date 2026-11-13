"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { trackWhatsAppLead } from "@/lib/site";
import { convertPrice, type Currency } from "@/lib/currency";

type Props = {
  from: string;
  to: string;
  priceSedan: number;
  waUrl: string;
  isFr?: boolean;
};

export default function StickyMobileBookingBar({
  from,
  to,
  priceSedan,
  waUrl,
  isFr = false,
}: Props) {
  const [visible, setVisible] = useState(false);
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

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Show after scrolling past hero (350px)
        setVisible(y > 350);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const converted = convertPrice(priceSedan, currency);

  const handleClick = () => {
    trackWhatsAppLead({
      route: `${from} → ${to}`,
      label: "Sticky Mobile Booking Bar",
      value: converted.amount,
      currency: currency,
    });
  };

  return (
    <aside
      className="sticky-booking-bar"
      aria-label={isFr ? "Réservation rapide" : "Quick booking"}
    >
      <div className="sticky-booking-inner">
        <div className="sticky-booking-meta">
          <span className="sticky-booking-route">
            {from} → {to}
          </span>
          <span className="sticky-booking-price">
            <span className="sticky-booking-from">{isFr ? "Dès" : "From"}</span>
            <strong>{converted.formatted}</strong>
            {currency !== "MAD" && (
              <small className="sticky-booking-mad">
                ≈ {Math.round(priceSedan * 11)} MAD
              </small>
            )}
          </span>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener"
          onClick={handleClick}
          className="btn btn-gold btn-sm no-ring sticky-booking-btn"
        >
          <Icon name="whatsapp" size={16} />
          <span>{isFr ? "Réserver" : "Book"}</span>
        </a>
      </div>
    </aside>
  );
}
