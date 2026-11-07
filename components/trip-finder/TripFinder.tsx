"use client";

/**
 * Trip Finder — 5-question quiz that ends on a pre-written WhatsApp message (+ optional email quote).
 * The interactive part (3D map, card deck, quiz steps) lives in ./engine.js and is mounted on the
 * markup below once the component is in the browser. Fully localized into all site languages.
 */
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Jost } from "next/font/google";
import { initTripFinder } from "./engine";
import { TRIP_FINDER_TRANSLATIONS, TripFinderI18n } from "./i18n";
import { LanguageCode, getLangFromPathname } from "@/lib/i18n";
import "./trip-finder.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--tf-jost",
  display: "swap",
});

export type TripFinderProps = {
  /** Language code: en, fr, es, it, de, ar, pt, nl. */
  lang?: LanguageCode;
  /** WhatsApp number in international format, digits only. */
  whatsappNumber?: string;
  /** Where the map, card photos and textures are served from (files in /public/trip-finder). */
  assetBase?: string;
  /** API route that receives the "email me this quote" form. */
  leadEndpoint?: string;
  /** Where the centred logo links to. */
  homeHref?: string;
};

export default function TripFinder({
  lang: propLang,
  whatsappNumber = "212760426269",
  assetBase = "/trip-finder/",
  leadEndpoint = "/api/leads",
  homeHref,
}: TripFinderProps) {
  const pathname = usePathname();
  const currentLang: LanguageCode = propLang || (pathname ? getLangFromPathname(pathname) : "en");
  const t: TripFinderI18n = TRIP_FINDER_TRANSLATIONS[currentLang] || TRIP_FINDER_TRANSLATIONS.en;
  const isRTL = t.dir === "rtl";
  const defaultHome = currentLang === "en" ? "/" : `/${currentLang}`;
  const effectiveHome = homeHref || defaultHome;

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const destroy = initTripFinder(rootRef.current, {
      whatsappNumber,
      assetBase,
      leadEndpoint,
      lang: currentLang,
      t,
      rtl: isRTL,
    });
    return destroy;
  }, [whatsappNumber, assetBase, leadEndpoint, currentLang, isRTL, t]);

  return (
    <div ref={rootRef} className={`tf ${jost.variable}`} dir={t.dir} data-lenis-prevent="true">
      <main className="app" id="brief" aria-live="polite" data-lenis-prevent="true">
        <div className="gl" id="gl">
          <div className="deck" id="deck">
            <i className="dk-amb" />
            <i className="dk-amb" />
            <i className="dk-veil" />
            <div className="dk-stack">
              <i className="dk-back b1" />
              <i className="dk-back b2" />
            </div>
          </div>
          <div className="labels" id="labels" />
          <div className="wipe" id="wipe" />
        </div>
        <div className="shade" />
        <div className="proj" id="proj" aria-live="polite">
          <div className="plane" id="plane" />
        </div>
        <div className="inset" id="inset">
          <div style={{ textAlign: isRTL ? "left" : "right" }}>
            <span className="cap" id="capL">{t.inset.country}</span>
            <b id="capT">{t.inset.tagline}</b>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${assetBase}world.png`} alt="" />
        </div>
        <div className="topbar">
          <div className="tb-l">
            <button className="back" id="back" disabled>{t.back}</button>
          </div>
          <a className="logo" href={effectiveHome} aria-label="Private Morocco Transfers home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-gold.svg"
              alt="Private Morocco Transfers"
              width={180}
              height={35}
              style={{ height: "30px", width: "auto" }}
            />
          </a>
          <div className="tb-r">
            <div className="ring" aria-label="Progress">
              <span id="count">0 %</span>
              <svg viewBox="0 0 38 38">
                <circle className="tr" cx="19" cy="19" r="17" />
                <circle className="vl" id="ringV" cx="19" cy="19" r="17" />
              </svg>
            </div>
          </div>
        </div>
        <div className="stage" id="stage" data-lenis-prevent="true" />
      </main>
    </div>
  );
}
