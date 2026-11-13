"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "mpd_cookie";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try { setShow(!localStorage.getItem(KEY)); } catch { setShow(true); }
  }, []);

  function choose(value: "accepted" | "declined") {
    try { localStorage.setItem(KEY, value); } catch { /* storage blocked: just hide */ }
    setShow(false);
  }

  if (!show) return null;
  return (
    <div className="cookie-banner" style={{ display: "flex" }}>
      <p>We use one cookie to remember your choice. <Link prefetch={false} href="/cookie">Learn more</Link></p>
      <div className="cookie-btns">
        <button type="button" className="btn btn-outline" onClick={() => choose("declined")}>Decline</button>
        <button type="button" className="btn btn-white" onClick={() => choose("accepted")}>Accept</button>
      </div>
    </div>
  );
}
