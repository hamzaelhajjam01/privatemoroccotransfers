import SiteShell, { siteMetadata } from "@/components/SiteShell";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="fr">{children}</SiteShell>;
}
