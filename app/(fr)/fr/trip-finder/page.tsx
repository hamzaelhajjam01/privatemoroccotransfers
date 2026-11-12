import type { Metadata } from "next";
import TripFinder from "@/components/trip-finder";
import TripFinderSeoBlock from "@/components/trip-finder/TripFinderSeoBlock";
import { getTripFinderMetadata } from "@/lib/trip-finder-seo";

export const metadata: Metadata = getTripFinderMetadata("fr");

export default function FrenchTripFinderPage() {
  return (
    <>
      <TripFinderSeoBlock lang="fr" />
      <TripFinder lang="fr" />
    </>
  );
}
