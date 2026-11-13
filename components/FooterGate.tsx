"use client";

import { usePathname } from "next/navigation";

/** Hides the (server-rendered) footer on the full-screen Trip Finder page. */
export default function FooterGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (/^\/(?:[a-z]{2}\/)?trip-finder\/?$/.test(pathname || "")) return null;
  return <>{children}</>;
}
