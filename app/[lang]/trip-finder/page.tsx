import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TripFinder from "@/components/trip-finder";
import TripFinderSeoBlock from "@/components/trip-finder/TripFinderSeoBlock";
import { LanguageCode } from "@/lib/i18n";
import { getTripFinderMetadata } from "@/lib/trip-finder-seo";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  return getTripFinderMetadata(lang as LanguageCode);
}

export default async function LocalizedTripFinderPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) {
    notFound();
  }

  return (
    <>
      <TripFinderSeoBlock lang={lang as LanguageCode} />
      <TripFinder lang={lang as LanguageCode} />
    </>
  );
}
