"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export const SERVICES = [
  {
    title: "Airport Transfers",
    text: "Meet and greet in the arrivals hall at every Moroccan airport. We follow your flight and wait 45 minutes free of charge.",
    meta: ["From €35", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.webp",
    href: "/airport-transfers",
    cta: "Explore transfers",
  },
  {
    title: "City-to-City",
    text: "Marrakech to Essaouira, Casablanca to Fes, Agadir to Marrakech. Door to door between any two cities, with stops wherever you like.",
    meta: ["Fixed price per vehicle", "Any route in Morocco"],
    image: "/img/routes/marrakech-merzouga.webp",
    href: "/city-to-city",
    cta: "Explore routes",
  },
  {
    title: "Day Trips",
    text: "The Atlas Mountains, the Ourika Valley, Ait Benhaddou or the coast — a full day out with your own driver, back at your riad by evening.",
    meta: ["From Marrakech, Agadir, Fes", "Full or half day"],
    image: "/img/blog/day-trips.webp",
    href: "/day-trips",
    cta: "Explore day trips",
  },
  {
    title: "Private Tours",
    text: "Three, five or seven days across Morocco with the same driver and vehicle — the Sahara, the imperial cities and the Atlantic coast.",
    meta: ["3 · 5 · 7 days", "Fully customised"],
    image: "/img/fleet-scenes/toyota-prado.webp",
    href: "/multi-day-tours",
    cta: "Explore tours",
  },
];

type Props = {
  items?: Array<{
    title: string;
    text: string;
    meta: string[];
    image: string;
    href: string;
    cta: string;
  }>;
};

export default function ServicesCarousel({ items = SERVICES }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const cards = () => Array.from(track.current?.children ?? []) as HTMLElement[];

  const onScroll = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setProgress(max > 0 ? t.scrollLeft / max : 0);
    const cs = cards();
    let best = 0;
    cs.forEach((c, i) => { if (Math.abs(c.offsetLeft - t.offsetLeft - t.scrollLeft) < Math.abs(cs[best].offsetLeft - t.offsetLeft - t.scrollLeft)) best = i; });
    setIndex(max > 0 && t.scrollLeft >= max - 4 ? cs.length - 1 : best);
  }, []);

  useEffect(() => { onScroll(); }, [onScroll]);

  const go = (i: number) => {
    const t = track.current;
    const c = cards()[Math.max(0, Math.min(SERVICES.length - 1, i))];
    if (t && c) t.scrollTo({ left: c.offsetLeft - t.offsetLeft, behavior: "smooth" });
  };

  // mouse drag (touch uses native swipe)
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
    track.current.classList.add("dragging");
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || !track.current) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    track.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    const t = track.current;
    if (!drag.current || !t) return;
    t.classList.remove("dragging");
    const moved = drag.current.moved;
    drag.current = null;
    if (moved) {
      t.dataset.justDragged = "1";
      setTimeout(() => { delete t.dataset.justDragged; }, 50);
      onScroll();
      go(index);
    }
  };
  const onClickCapture = (e: React.MouseEvent) => { if (track.current?.dataset.justDragged) e.preventDefault(); };

  return (
    <div className="svc-carousel">
      <div className="svc-controls">
        <span className="svc-count"><b>{String(index + 1).padStart(2, "0")}</b> / {String(items.length).padStart(2, "0")}</span>
        <div className="svc-progress" aria-hidden="true"><i style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} /></div>
        <div className="svc-arrows">
          <button type="button" aria-label="Previous service" onClick={() => go(index - 1)} disabled={index === 0}>
            <Icon name="arrow-right" size={20} className="flip-x" />
          </button>
          <button type="button" aria-label="Next service" onClick={() => go(index + 1)} disabled={index === items.length - 1}>
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>
      <div
        className="svc-track"
        ref={track}
        onScroll={onScroll}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onClickCapture={onClickCapture}
        data-lenis-prevent-wheel=""
        role="region"
        aria-roledescription="carousel"
        aria-label="Our services"
      >
        {items.map((s, i) => (
          <article key={s.title} className={`svc-card${i === index ? " is-active" : ""}`} aria-label={`${i + 1} of ${items.length}: ${s.title}`}>
            <div className="svc-card-img" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="svc-card-body">
              <span className="svc-card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="svc-card-title">{s.title}</h3>
              <p className="svc-card-text">{s.text}</p>
              <div className="svc-card-meta">{s.meta.map((m) => <span key={m}>{m}</span>)}</div>
              <Link href={s.href} className="btn btn-gold" draggable={false}>{s.cta}</Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
