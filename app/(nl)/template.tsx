import PageEnter from "@/components/PageEnter";

/** Re-mounts on every navigation; PageEnter fades in pages after the first. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageEnter>{children}</PageEnter>;
}
