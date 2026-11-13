"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { openWhatsApp } from "@/lib/site";
import Icon from "./Icon";

const OPTIONS = [
  { label: "Airport transfer", msg: "Hello, I need an airport transfer in Morocco." },
  { label: "City-to-city", msg: "Hello, I need a city-to-city transfer in Morocco." },
  { label: "Day trip", msg: "Hello, I'd like to book a day trip." },
  { label: "Private tour", msg: "Hello, I'm interested in a private tour of Morocco." },
];

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  if (/^\/(?:[a-z]{2}\/)?trip-finder\/?$/.test(pathname || "")) {
    return null;
  }

  return (
    <div className="wa-float" ref={ref}>
      <button type="button" className="wa-float-btn" aria-label="Chat with us on WhatsApp" aria-expanded={open} onClick={() => setOpen((o) => !o)}><Icon name="whatsapp" size={18} /><span>WhatsApp</span></button>
      <div className={`wa-popup${open ? " open" : ""}`}>
        <div className="wa-popup-title">Select a service</div>
        {OPTIONS.map((o) => (
          <div
            key={o.label}
            className="wa-popup-link"
            role="button"
            tabIndex={0}
            onClick={() =>
              openWhatsApp(o.msg, {
                label: `WhatsApp Float: ${o.label}`,
                route: typeof window !== "undefined" ? window.location.pathname : "/",
              })
            }
          >
            <span>{o.label}</span>
            <span className="wa-badge">Fast reply</span>
          </div>
        ))}
      </div>
    </div>
  );
}
