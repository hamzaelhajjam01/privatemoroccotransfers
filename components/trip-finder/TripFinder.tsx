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
          <img src={`${assetBase}world.png`} alt="Global departures to Morocco private driver map" />
        </div>
        <div className="topbar">
          <div className="tb-l">
            <button className="back" id="back" disabled>{t.back}</button>
          </div>
          <a className="logo" href={effectiveHome} aria-label="Private Morocco Transfers home">
            <svg viewBox="10 4 1230 204" aria-hidden="true" style={{ direction: "ltr" }}>
              <g fill="#c9803f">
                <path d="M27 169 113 39h27l29 49 78-49h32l-58 91h-24l29-47-66 44-31-52-58 76z M252 129l29-46h64q13 0 19-12t-10-11h-64l13-21h75q36 0 20 31-14 34-59 34h-40l-16 25z M418 39h100l-13 22h-36l-43 70h-28l43-70h-36z M13 206q143-97 445-64-243-12-364 64z M164 198l43-22 29 1-37 21z M250 168l42-10 22 2-42 13z M329 154l43-5 21 2-43 7z" />
                <path d="M548 20h7v158h-7z" />
              </g>
              <g fill="#f3efe8" fontFamily="var(--tf-jost), Jost, Futura, sans-serif" fontWeight={500}>
                <text x="590" y="92" fontSize="76" letterSpacing="1" textAnchor="start">MOROCCO</text>
                <text x="590" y="166" fontSize="48" letterSpacing="2" textAnchor="start">PRIVATE TRANSFERS</text>
              </g>
            </svg>
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
