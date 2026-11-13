"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getLangFromPathname,
  getLocalizedPath,
  LANGUAGES,
  LANGUAGE_CODES,
  TRANSLATIONS,
  LanguageCode,
} from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || LANGUAGE_CODES.some((l) => pathname === `/${l}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currency, setCurrency] = useState<string>("EUR");

  const currentLang = getLangFromPathname(pathname);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const navLinks = [
    {
      href: currentLang === "en" ? "/transfers" : `/${currentLang}/transfers`,
      label: t.nav.transfers,
    },
    {
      href: currentLang === "en" ? "/airport-transfers" : `/${currentLang}/airport-transfers`,
      label: t.nav.airports,
    },
    {
      href: currentLang === "en" ? "/city-to-city" : `/${currentLang}/city-to-city`,
      label: t.nav.city_to_city,
    },
    {
      href: currentLang === "en" ? "/day-trips" : `/${currentLang}/day-trips`,
      label: t.nav.day_trips,
    },
    {
      href: currentLang === "en" ? "/calculator" : `/${currentLang}/calculator`,
      label: t.nav.prices,
    },
    {
      href: currentLang === "en" ? "/trip-finder" : `/${currentLang}/trip-finder`,
      label: (t.nav as Record<string, string>).trip_finder || "Trip Finder",
    },
    {
      href: "/blog",
      label: t.nav.journal,
    },
  ];

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);
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

  const handleLanguageChange = (targetLang: LanguageCode) => {
    const targetUrl = getLocalizedPath(pathname, targetLang);
    router.push(targetUrl);
  };

  const homeUrl = currentLang === "en" ? "/" : `/${currentLang}`;
  const contactUrl = currentLang === "en" ? "/contact" : `/${currentLang}/contact`;

  if (/^\/(?:[a-z]{2}\/)?trip-finder\/?$/.test(pathname || "")) {
    return null;
  }

  const cls = [
    "site-header",
    isHome && "overlay",
    scrolled && "scrolled",
    hidden && !open && "hide",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <nav className="nav-inner">
          <Link prefetch={false} href={homeUrl} className="logo" aria-label="Private Morocco Transfers — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-white.svg" alt="Private Morocco Transfers" width={209} height={40} />
          </Link>
          <div className="nav-links">
            {navLinks.map((n) => (
              <Link prefetch={false}
                key={n.href}
                href={n.href}
                className={pathname.startsWith(n.href) ? "active" : undefined}
              >
                {n.label}
              </Link>
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
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
                aria-label="Select Language"
                className="currency-select"
              >
                {LANGUAGE_CODES.map((code) => (
                  <option key={code} value={code}>
                    {LANGUAGES[code].flag} {code.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <Link prefetch={false} href={contactUrl} className="btn">
              {t.nav.book}
            </Link>
            <button
              type="button"
              className="hamburger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            />
          </div>
        </nav>
      </header>

      <div className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <Link prefetch={false} href={homeUrl}>Home</Link>
        {navLinks.map((n) => (
          <Link prefetch={false} key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
        <Link prefetch={false} href={contactUrl}>{t.nav.book}</Link>
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontSize: "14px", color: "var(--muted)" }}>Language:</span>
            <select
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
              className="currency-select"
              style={{ fontSize: "14px", padding: "6px 10px" }}
            >
              {LANGUAGE_CODES.map((code) => (
                <option key={code} value={code}>
                  {LANGUAGES[code].flag} {LANGUAGES[code].nativeName} ({code.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
      </div>
    </>
  );
}
