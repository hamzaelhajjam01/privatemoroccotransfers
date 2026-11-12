import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MultiDayTours, { multiDayMetadata } from "@/components/MultiDayTours";
import type { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};
  return multiDayMetadata(lang as LanguageCode);
}

export default async function LocalizedMultiDayToursPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();
  return <MultiDayTours lang={lang as LanguageCode} />;
}
