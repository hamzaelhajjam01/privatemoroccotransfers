import type { LanguageCode } from "@/lib/i18n";
import type { TripFinderI18n } from "./i18n";

export type TripFinderOptions = {
  whatsappNumber?: string;
  assetBase?: string;
  leadEndpoint?: string;
  lang?: LanguageCode;
  t?: TripFinderI18n;
  rtl?: boolean;
};

/** Mounts the trip finder inside `root`. Returns a cleanup function. */
export function initTripFinder(root: HTMLElement, options?: TripFinderOptions): () => void;
