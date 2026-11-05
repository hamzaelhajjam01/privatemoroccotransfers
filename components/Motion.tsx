"use client";

/**
 * Site-wide motion layer.
 * - Scroll reveals (fade-up, staggered), word-by-word heading reveals, image unveils
 * - Number count-ups, hero parallax (desktop), Lenis smooth scroll (desktop, mouse only)
 * Only transform/opacity/clip-path are animated. Everything is off with prefers-reduced-motion.
 * The "hidden until revealed" CSS lives in globals.css under `html.motion`.
 */
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Keep these lists in sync with the "MOTION" block in globals.css
const REVEAL = [
  ".statement", ".svc-row", ".svc-carousel", ".post-row", ".route-tr", ".faq-item", ".listing-card", ".vehicle-card",
  ".blog-card", ".route-card", ".fleet-card", ".city-card", ".step-item", ".value-item", ".stat-item",
  ".quote-grid > div", ".driver-card", ".footer-col", ".brief", ".calc-card", ".route-cards .card",
  ".cta-buttons", ".city-tabs", ".quote-by", ".svc-meta", ".pagination", ".section-label", ".label",
  ".cta-band p", ".post-body h2", ".post-body p", ".post-body li", ".section-header",
].join(",");
const WORDS = [".huge", ".heading-lg", ".heading-xl", ".quote-main", ".cta-band h2", ".footer-col h4"].join(",");
const IMAGES = [".ph", ".listing-img", ".blog-img", ".vehicle-img", ".fleet-img"].join(",");
const SKIP = ".hero, .page-hero, .post-hero, .booking-widget, .mobile-nav, .site-header";

function splitWords(el: HTMLElement) {
  if (el.dataset.split) return;
  el.dataset.split = "1";
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  while (walker.nextNode()) texts.push(walker.currentNode as Text);
  let i = 0;
  for (const t of texts) {
    const parts = (t.textContent ?? "").split(/(\s+)/);
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); continue; }
      const outer = document.createElement("span");
      outer.className = "w";
      const inner = document.createElement("span");
      inner.className = "wi";
      inner.style.transitionDelay = `${Math.min(i, 14) * 45}ms`;
      inner.textContent = part;
      outer.appendChild(inner);
      frag.appendChild(outer);
      i++;
    }
    t.replaceWith(frag);
  }
}

function countUp(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const m = (el.textContent ?? "").match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = parseFloat(num.replace(",", "."));
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${pre}${Math.round(target * eased)}${post}`;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Motion() {
  const pathname = usePathname();

  // Smooth scroll on desktop (mouse/trackpad) only — touch keeps native scrolling
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1025px)").matches;
    if (reduce || !fine) return;
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  // Reveals, word splits, counters, parallax — re-run on every page
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (window as unknown as { __lenis?: Lenis }).__lenis?.scrollTo(0, { immediate: true });
    if (reduce) { root.classList.remove("motion"); return; }
    root.classList.add("motion", "motion-ready");

    const pick = (sel: string) =>
      Array.from(document.querySelectorAll<HTMLElement>(sel)).filter((el) => !el.closest(SKIP) && !el.classList.contains("in"));

    const words = pick(WORDS);
    const reveals = pick(REVEAL).filter((el) => !el.matches(WORDS));
    const images = pick(IMAGES).filter((el) => !el.classList.contains("hero-media"));
    // Only elements tagged here start hidden, so content rendered later (e.g. city tabs) is never stuck invisible
    words.forEach((el) => { splitWords(el); el.classList.add("rv-w"); });
    reveals.forEach((el) => el.classList.add("rv"));
    images.forEach((el) => el.classList.add("rv-img"));

    // A fully clipped image never "intersects", so each image is triggered by its container instead
    const proxyFor = new Map<Element, HTMLElement[]>();
    images.forEach((img) => {
      const host = img.parentElement ?? img;
      proxyFor.set(host, [...(proxyFor.get(host) ?? []), img]);
    });

    const io = new IntersectionObserver(
      (entries) => {
        const visible: HTMLElement[] = [];
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const t = e.target as HTMLElement;
          // the target itself (if it animates) plus any images it hosts
          if (t.classList.contains("rv") || t.classList.contains("rv-w")) visible.push(t);
          visible.push(...(proxyFor.get(t) ?? []));
          io.unobserve(t);
        });
        visible.forEach((el, i) => {
          // stagger items that appear together (cards in a row, list items…)
          if (!el.matches(WORDS)) el.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>(".stat-num").forEach(countUp);
          if (el.matches(".stat-num")) countUp(el);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    [...reveals, ...words, ...proxyFor.keys()].forEach((el) => io.observe(el));

    // Hero parallax — desktop only
    const hero = document.querySelector<HTMLElement>(".hero .hero-media");
    const desktop = window.matchMedia("(min-width: 1025px)").matches;
    let ticking = false;
    const onScroll = () => {
      if (ticking || !hero) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) hero.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(1.06)`;
        ticking = false;
      });
    };
    if (hero && desktop) { onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
