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
                <path fillRule="evenodd" d="M 498.8 135.9 L 502.5 138.3 L 514.8 141.1 L 508.7 138.3 Z M 229.3 137.8 L 213.8 130.2 L 211.9 130.2 L 177.0 139.7 L 147.7 150.1 L 189.2 150.1 L 205.3 144.4 Z M 469.0 128.8 L 473.3 132.1 L 487.0 134.5 L 489.3 135.4 L 484.6 132.1 Z M 436.5 123.2 L 441.7 127.4 L 461.0 130.2 L 454.9 126.0 Z M 399.2 118.9 L 404.4 123.6 L 427.0 125.5 L 423.3 122.2 L 420.0 120.8 Z M 292.1 126.5 L 280.8 118.9 L 257.2 121.7 L 235.9 125.5 L 250.1 133.1 L 269.0 129.3 Z M 354.8 116.6 L 361.5 122.2 L 389.3 122.7 L 382.7 117.5 Z M 344.9 122.7 L 336.9 116.1 L 314.3 116.6 L 301.5 117.5 L 311.4 124.6 L 326.1 123.2 Z M 484.1 125.5 L 451.1 114.7 L 422.3 107.1 L 397.8 101.9 L 366.6 96.7 L 339.3 93.4 L 300.6 90.6 L 257.6 90.1 L 233.6 91.1 L 194.4 94.4 L 167.0 98.1 L 138.7 103.3 L 106.6 110.9 L 83.5 117.5 L 52.4 128.3 L 26.4 139.2 L 4.7 150.1 L 94.4 150.1 L 108.5 143.4 L 131.7 134.5 L 156.7 126.5 L 184.0 119.4 L 209.5 114.2 L 237.4 109.9 L 259.1 107.6 L 286.9 105.7 L 337.4 105.2 L 365.7 106.6 L 392.6 109.0 L 439.3 115.6 L 465.7 120.8 Z M 397.3 93.4 L 420.4 98.1 L 426.6 100.0 L 428.0 99.6 L 452.5 34.0 L 444.0 27.8 L 495.0 27.4 L 503.5 4.7 L 391.7 4.7 L 383.6 27.4 L 421.4 27.8 Z M 195.4 85.9 L 229.3 83.0 L 243.0 45.3 L 245.4 40.6 L 264.2 81.6 L 265.2 82.1 L 277.0 81.6 L 289.7 82.1 L 336.0 40.6 L 336.0 42.9 L 320.9 83.5 L 348.2 86.4 L 350.1 85.9 L 379.9 4.7 L 344.0 4.7 L 285.0 54.7 L 280.8 47.2 L 260.9 5.2 L 214.7 4.7 L 222.3 14.2 Z M 45.3 122.2 L 59.9 116.6 L 83.5 109.0 L 95.8 76.4 L 153.8 76.4 L 158.5 76.0 L 169.9 73.1 L 177.0 69.8 L 181.2 67.0 L 187.8 60.9 L 193.0 53.8 L 196.3 47.2 L 200.1 37.3 L 203.4 25.0 L 202.9 17.9 L 200.1 12.3 L 196.3 9.0 L 192.5 7.1 L 188.3 5.7 L 182.1 4.7 L 78.3 4.7 L 84.9 12.3 L 85.4 14.6 L 84.9 17.0 Z M 104.8 53.8 L 105.2 51.0 L 111.8 33.5 L 103.3 27.8 L 162.3 27.4 L 165.2 28.8 L 167.0 31.1 L 167.0 36.3 L 163.3 45.3 L 158.1 51.0 L 155.7 52.4 L 151.0 53.8 L 138.3 54.3 Z" />
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
