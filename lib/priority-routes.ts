/**
 * 20 top-priority, most-searched transfer corridors across Morocco.
 * Shared by both the sitemap generator and the route i18n content engine.
 */
export const PRIORITY_ROUTE_SLUGS = [
  "marrakech-airport-to-marrakech",
  "marrakech-to-essaouira",
  "casablanca-airport-to-marrakech",
  "casablanca-to-marrakech",
  "marrakech-to-fes",
  "fes-to-marrakech",
  "marrakech-to-agadir",
  "marrakech-to-merzouga",
  "fes-to-merzouga",
  "marrakech-to-chefchaouen",
  "tangier-to-chefchaouen",
  "fes-to-chefchaouen",
  "agadir-airport-to-taghazout",
  "agadir-airport-to-agadir",
  "marrakech-airport-to-essaouira",
  "marrakech-to-agafay-desert",
  "marrakech-to-ourika-valley",
  "marrakech-to-imlil",
  "marrakech-to-ouzoud-waterfalls",
  "marrakech-to-ait-ben-haddou",
] as const;

export type PriorityRouteSlug = (typeof PRIORITY_ROUTE_SLUGS)[number];

export function isPriorityRoute(slug: string): slug is PriorityRouteSlug {
  return (PRIORITY_ROUTE_SLUGS as readonly string[]).includes(slug);
}
