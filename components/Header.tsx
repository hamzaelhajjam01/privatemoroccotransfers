"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currency, setCurrency] = useState<string>("EUR");

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);
        // hide when scrolling down past the first screen, show again when scrolling up
        if (Math.abs(y - last) > 6) setHidden(y > last && y > 400);
        last = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pmt_currency");
      if (saved) setCurrency(saved);
    } catch {
      // ignore
    }
  }, []);

  const handleCurrencyChange = (c: string) => {
    setCurrency(c);
    try {
      localStorage.setItem("pmt_currency", c);
      window.dispatchEvent(new CustomEvent("pmt_currency_changed", { detail: c }));
    } catch {
      // ignore
    }
  };

  const isFr = pathname.startsWith("/fr");
  const enUrl = isFr ? pathname.replace(/^\/fr/, "") || "/" : pathname;
  const frUrl = isFr ? pathname : pathname.startsWith("/transfers") ? `/fr${pathname}` : "/fr/transfers";

  const cls = ["site-header", isHome && "overlay", scrolled && "scrolled", hidden && !open && "hide"].filter(Boolean).join(" ");

  return (
    <>
      <header className={cls}>
        <nav className="nav-inner">
          <Link href="/" className="logo" aria-label="Private Morocco Transfers — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-white.svg" alt="Private Morocco Transfers" width={209} height={40} />
          </Link>
          <div className="nav-links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={pathname.startsWith(n.href) ? "active" : undefined}>{n.label}</Link>
            ))}
          </div>
          <div className="nav-right">
            <div className="currency-toggle">
              <select
                value={currency}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                aria-label="Select Currency"
                className="currency-select"
              >
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
                <option value="GBP">GBP (£)</option>
                <option value="MAD">MAD (DH)</option>
              </select>
            </div>
            <div className="lang-toggle">
              {isFr ? (
                <>
                  <Link href={enUrl} style={{ color: "inherit", textDecoration: "none" }}>EN</Link> / <span style={{ fontWeight: 600 }}>FR</span>
                </>
              ) : (
                <>
                  <span style={{ fontWeight: 600 }}>EN</span> / <Link href={frUrl} style={{ color: "inherit", textDecoration: "none" }}>FR</Link>
                </>
              )}
            </div>
            <Link href="/contact" className="btn">Book</Link>
            <button type="button" className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)} />
          </div>
        </nav>
      </header>

      <div className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open}>
        <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        <Link href="/">Home</Link>
        {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        <Link href="/contact">Book</Link>
        <div style={{ marginTop: "24px", display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "14px", color: "var(--muted)" }}>Currency:</span>
          <select
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="currency-select"
            style={{ fontSize: "14px", padding: "6px 10px" }}
          >
            <option value="EUR">EUR (€)</option>
            <option value="USD">USD ($)</option>
            <option value="GBP">GBP (£)</option>
            <option value="MAD">MAD (DH)</option>
          </select>
        </div>
      </div>
    </>
  );
}
