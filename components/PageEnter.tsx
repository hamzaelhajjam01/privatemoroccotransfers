"use client";

import { useEffect, useState } from "react";

// True once the first page has mounted. Module state survives client-side
// navigations, so only later pages get the fade (the first paint stays visible,
// which keeps Largest Contentful Paint fast).
let hasMounted = false;

/** Fades each page in on client-side navigation, but not on the initial load. */
export default function PageEnter({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasMounted);
  useEffect(() => {
    hasMounted = true;
  }, []);
  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
