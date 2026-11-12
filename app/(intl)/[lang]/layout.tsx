import SiteShell, { siteMetadata } from "@/components/SiteShell";
import { LANGUAGE_CODES, type LanguageCode } from "@/lib/i18n";

export const metadata = siteMetadata;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const code = (LANGUAGE_CODES as string[]).includes(lang) ? (lang as LanguageCode) : "en";
  return <SiteShell lang={code}>{children}</SiteShell>;
}
