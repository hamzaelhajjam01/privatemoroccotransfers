import MultiDayTours, { multiDayMetadata } from "@/components/MultiDayTours";

export const metadata = multiDayMetadata("fr");

export default function FrMultiDayToursPage() {
  return <MultiDayTours lang="fr" />;
}
