/**
 * Which journal guides to link from each route page. Route pages are the most
 * linked-to pages on the site, so a contextual link from each one passes
 * authority to the guides (and keeps readers on the site). Each route gets its
 * most specific guide first, then the general "grand taxi vs private driver"
 * guide, which matches the "taxi" searches the route pages also target.
 */
export type RouteGuide = { href: string; img: string; tag: string; title: string; excerpt: string };

const G: Record<string, RouteGuide> = {
  agafay: {
    href: "/blog/agafay-desert",
    img: "/img/blog/agafay-desert-card.webp",
    tag: "Day Trips",
    title: "Agafay Desert guide: things to do, camps and sunset",
    excerpt: "What Agafay is, the best time to go, day trip or overnight, and how to get there.",
  },
  ourika: {
    href: "/blog/ourika-valley",
    img: "/img/blog/ourika-valley-card.webp",
    tag: "Day Trips",
    title: "Ourika Valley day trip: waterfalls, villages and tips",
    excerpt: "The Setti Fatma waterfall walk, stops on the way up and the best season to visit.",
  },
  essaouira: {
    href: "/blog/marrakech-essaouira",
    img: "/img/blog/marrakech-essaouira-card.webp",
    tag: "Route Guides",
    title: "Marrakech to Essaouira by private driver: complete guide",
    excerpt: "Distance, drive time, what to see on the way and what it costs.",
  },
  sahara: {
    href: "/blog/sahara-merzouga",
    img: "/img/blog/sahara-merzouga-card.webp",
    tag: "Route Guides",
    title: "Marrakech to Merzouga: the Sahara road trip guide",
    excerpt: "The route over the Atlas to the Erg Chebbi dunes, and how to split the drive.",
  },
  fes: {
    href: "/blog/fes-tanneries-guide",
    img: "/img/blog/fes-tanneries-guide-card.webp",
    tag: "Morocco Tips",
    title: "Visiting the Fes tanneries without stress",
    excerpt: "Chouara vs Sidi Moussa, how tanning works and tips for your visit.",
  },
  airport: {
    href: "/blog/airport-transfer",
    img: "/img/blog/airport-transfer-card.webp",
    tag: "Airport Guides",
    title: "Marrakech airport transfer guide: arrival, meeting your driver, prices",
    excerpt: "What happens after landing at RAK and how to avoid airport taxi hassle.",
  },
  dayTrips: {
    href: "/blog/day-trips",
    img: "/img/blog/day-trips-card.webp",
    tag: "Day Trips",
    title: "Seven day trips from Marrakech with a private driver",
    excerpt: "Essaouira, Ourika, Ait Benhaddou, Imlil, Ouzoud, Agafay and Ouarzazate.",
  },
  casablanca: {
    href: "/blog/casablanca-to-marrakech",
    img: "/img/blog/casablanca-to-marrakech-card.webp",
    tag: "Route Guides",
    title: "Casablanca to Marrakech: train, bus or private driver?",
    excerpt: "Times, costs and the easiest way from Casablanca city or airport to Marrakech.",
  },
  gettingAround: {
    href: "/blog/getting-around-morocco",
    img: "/img/blog/getting-around-morocco-card.webp",
    tag: "Morocco Tips",
    title: "Getting around Morocco: train, bus, grand taxi or private driver?",
    excerpt: "Costs, comfort and luggage space for every way of travelling between cities.",
  },
  taxi: {
    href: "/blog/grand-taxi-vs-private-driver",
    img: "/img/blog/grand-taxi-vs-private-driver-card.webp",
    tag: "Morocco Tips",
    title: "Grand taxi vs private driver in Morocco: which to choose?",
    excerpt: "How shared grand taxis work, what they really cost and when a private driver is worth it.",
  },
};

export function guidesForRoute(slug: string): RouteGuide[] {
  const s = slug.toLowerCase();
  const first =
    /agafay/.test(s) ? G.agafay
    : /ourika|setti-fatma/.test(s) ? G.ourika
    : /merzouga|zagora|sahara|erg-/.test(s) ? G.sahara
    : /essaouira/.test(s) && /marrakech/.test(s) ? G.essaouira
    : /imlil|ouzoud|ouarzazate|ait-ben|oukaimeden|lalla-takerkoust/.test(s) ? G.dayTrips
    : /(^|-)fes(-|$)/.test(s) && !/airport/.test(s) ? G.fes
    : /casablanca/.test(s) && /marrakech/.test(s) ? G.casablanca
    : /marrakech-airport/.test(s) ? G.airport
    : G.gettingAround;
  return first === G.taxi ? [G.taxi] : [first, G.taxi];
}
