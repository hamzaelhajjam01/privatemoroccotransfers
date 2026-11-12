"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

/** flip: mirror the photo so the car sits on the left, clear of the booking form */
export const HERO_SLIDES = [
  { src: "/img/hero-city-to-city.jpg", flip: true, alt: "Black Mercedes E-Class on the road from Marrakech toward the snow-capped Atlas at golden hour" },
  { src: "/img/routes/marrakech-essaouira.jpg", flip: true, alt: "Black Mercedes Vito with its chauffeur above the Atlantic coast near Essaouira" },
  { src: "/img/hero-day-trips.jpg", flip: true, alt: "Black Hyundai Tucson on a High Atlas valley road at sunrise" },
  { src: "/img/blog/sahara-merzouga.jpg", flip: false, pos: "100% center", alt: "Black Toyota Prado driving toward the Erg Chebbi dunes at sunset" },
];

const INTERVAL = 6000; // ms per slide

type Ctx = { index: number; count: number; go: (i: number) => void; playing: boolean };
const HeroCtx = createContext<Ctx>({ index: 0, count: HERO_SLIDES.length, go: () => {}, playing: false });

/** Hero section with a crossfading photo carousel behind the content. */
export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [cycle, setCycle] = useState(0); // restarts the timer and progress bar after a manual jump
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlaying(!reduce);
    const onVis = () => setPlaying(!reduce && document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, playing, cycle]);

  const go = useCallback((i: number) => { setIndex(i); setCycle((c) => c + 1); }, []);

  return (
    <HeroCtx.Provider value={{ index, count: HERO_SLIDES.length, go, playing }}>
      <section className="hero" aria-roledescription="carousel" aria-label="Private Morocco Transfers">
        <div className="hero-media">
          {HERO_SLIDES.map((s, i) => {
            // Defer off-screen slides until after mount so mobile LCP fetches only the active hero photo first.
            const shouldLoadBg = i === 0 || (mounted && (i === index || i === (index + 1) % HERO_SLIDES.length));
            return (
              <div
                key={s.src}
                className={`hero-slide${i === index ? " active" : ""}${s.flip ? " flip" : ""}`}
                style={{
                  backgroundImage: shouldLoadBg ? `url(${s.src})` : undefined,
                  backgroundPosition: "pos" in s ? s.pos : undefined,
                }}
                role="img"
                aria-label={s.alt}
                aria-hidden={i !== index}
              />
            );
          })}
        </div>
        {children}
      </section>
    </HeroCtx.Provider>
  );
}

/** The slide indicators — place anywhere inside <HeroCarousel>. */
export function HeroLines() {
  const { index, count, go, playing } = useContext(HeroCtx);
  return (
    <div className="hero-lines" role="tablist" aria-label="Choose slide">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={`Slide ${i + 1} of ${count}`}
          className={i === index ? "active" : undefined}
          onClick={() => go(i)}
        >
          <span
            key={i === index ? `on-${index}` : "off"}
            className={i === index && playing ? "fill run" : i === index ? "fill full" : "fill"}
            style={{ animationDuration: `${INTERVAL}ms` }}
          />
        </button>
      ))}
    </div>
  );
}
