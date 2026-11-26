import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

type RoutePrice = { slug: string; from: string; to: string; distance: string; duration: string; price_sedan: number; price_van: number; price_minibus: number };
const routes = routeData as RoutePrice[];
const find = (slug: string) => routes.find((r) => r.slug === slug);
const airport = find("marrakech-airport-to-marrakech");
const airportSedan = airport?.price_sedan ?? 40;
const airportVan = airport?.price_van ?? 50;
const airportMinibus = airport?.price_minibus ?? 65;

/** Example routes shown in the price table, with fallbacks if a slug is missing. */
const EXAMPLES: { slug: string; label: string; km: string; time: string; sedan: number; van: number; minibus: number }[] = [
  { slug: "marrakech-airport-to-marrakech", label: "Marrakech airport to medina", km: "6 km", time: "15 min", sedan: 40, van: 50, minibus: 65 },
  { slug: "marrakech-to-essaouira", label: "Marrakech to Essaouira", km: "180 km", time: "2h30", sedan: 170, van: 200, minibus: 270 },
  { slug: "marrakech-to-agadir", label: "Marrakech to Agadir", km: "240 km", time: "3h", sedan: 170, van: 200, minibus: 270 },
  { slug: "casablanca-airport-to-marrakech", label: "Casablanca airport to Marrakech", km: "220 km", time: "2h45", sedan: 175, van: 205, minibus: 267 },
  { slug: "marrakech-to-fes", label: "Marrakech to Fes", km: "530 km", time: "6h30", sedan: 300, van: 345, minibus: 511 },
  { slug: "marrakech-to-merzouga", label: "Marrakech to Merzouga (Sahara)", km: "560 km", time: "8h30", sedan: 405, van: 470, minibus: 660 },
].map((e) => {
  const r = find(e.slug);
  return r ? { ...e, km: r.distance, time: r.duration, sedan: r.price_sedan, van: r.price_van, minibus: r.price_minibus } : e;
});

export const title = "How Much Does a Private Driver Cost in Morocco? 2026 Prices | Private Morocco Transfers";
export const description = `Private driver prices in Morocco for 2026: airport transfers from €${airportSedan}, city-to-city routes, day rates from €150, and what is included. Per vehicle.`;

export const faqs: GuideFaq[] = [
  {
    q: "How much does a private driver cost per day in Morocco?",
    a: "Roughly €150 to €220 per day for a sedan, €185 to €240 for an SUV, €190 to €240 for a van and €260 to €300 for a minibus. The exact price depends on the distance you cover that day. Fuel, tolls and the driver are included.",
  },
  {
    q: "How much is a private transfer from Marrakech airport?",
    a: `A fixed €${airportSedan} per sedan (1 to 4 passengers), €${airportVan} for a van (5 to 7) and €${airportMinibus} for a minibus (8 to 14) to the medina or a city hotel, including meet and greet in arrivals and 45 minutes of free waiting.`,
  },
  {
    q: "Is a private driver priced per person or per vehicle?",
    a: "Per vehicle. Two, three or four people in a sedan pay the same price as one, so the cost per person drops quickly for couples, families and groups.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "No deposit is needed for transfers and day trips under €300; you pay the driver in cash, in euros or dirhams. Multi-day trips over €300 need a 30% deposit to confirm, with the rest paid in Morocco.",
  },
  {
    q: "Should I tip my driver in Morocco?",
    a: "Tips are not included and are never required, but they are appreciated. As a guide, travellers often give around 5 to 10% of the trip price, or about 100 to 200 MAD per day on multi-day trips, if they were happy with the service.",
  },
  {
    q: "Is a private driver cheaper than renting a car in Morocco?",
    a: "Renting is usually cheaper on paper, but once you add fuel, tolls, parking, insurance excess and the stress of driving in medinas and mountain roads, the gap narrows. For one-way trips a driver also saves the one-way rental fee.",
  },
];

const cell = { padding: "12px 8px" } as const;

export default function Content() {
  return (
    <GuidePost
      category="Driver FAQ"
      h1="How Much Does a Private Driver Cost in Morocco? 2026 Prices"
      date="2026-10-28"
      readTime="7 min read"
      image="/img/blog/driver-cost.webp"
      imageAlt="Chauffeur in a dark suit holding open the door of a black Mercedes sedan outside a riad in Marrakech"
      faqs={faqs}
      cta={{
        title: "Want an exact price for your route?",
        sub: "Fixed prices per vehicle for 150+ routes, with fuel, tolls and the driver included.",
        routeHref: "/calculator",
        routeLabel: "Open Price Calculator",
        wa: "Hello! I read your private driver cost guide and would like a price for my trip.",
      }}
      related={[
        { href: "/blog/grand-taxi-vs-private-driver", img: "/img/blog/grand-taxi-vs-private-driver-card.webp", tag: "Morocco Tips", title: "Grand Taxi vs Private Driver in Morocco", excerpt: "Price, comfort and safety compared.", date: "2026-11-06" },
        { href: "/blog/getting-around-morocco", img: "/img/blog/getting-around-morocco-card.webp", tag: "Morocco Tips", title: "Transportation in Morocco: How to Get Around", excerpt: "Trains, buses, grand taxis and private drivers compared.", date: "2026-11-06" },
        { href: "/blog/airport-transfer", img: "/img/blog/airport-transfer-card.webp", tag: "Airport Guides", title: "Marrakech Airport Transfer: Taxi, Bus or Private Driver?", excerpt: "Every way from RAK to your riad.", date: "2026-10-10" },
      ]}
    >
      <p>
        {"\"How much does a private driver cost?\" is the first question most travellers ask when planning Morocco. The answer depends on the route, the vehicle and whether you book a single transfer or a driver for several days. Here are real 2026 prices, what they include and how to keep the cost down."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {`a private airport transfer in Marrakech costs from €${airportSedan} per vehicle, city-to-city transfers from about €100 to €400 depending on distance, and a driver for a full day about €150 to €220 in a sedan. Prices are per vehicle, not per person, and include fuel, tolls and the driver.`}
      </p>

      <h2>{"How private driver pricing works in Morocco"}</h2>
      <p>
        {"Private drivers are priced per vehicle for a fixed route or a full day, not per person and not by meter. A couple, a family of four or a group of friends in the same car pays the same price. That is why a driver is often cheaper per person than it first looks, especially for groups."}
      </p>
      <p>{"There are three common ways to book:"}</p>
      <ul>
        <li>{"One-way transfer: from A to B at a fixed price, for example the airport to your riad, or Marrakech to Essaouira."}</li>
        <li>{"Day trip: the driver takes you out and back in one day and waits while you visit, for example the Ourika Valley or Aït Benhaddou."}</li>
        <li>{"Driver per day or multi-day trip: the same driver and car for several days, for example a desert circuit or a tour of the imperial cities."}</li>
      </ul>

      <h2>{"Prices by vehicle type"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={cell}>{"Vehicle"}</th>
              <th style={cell}>{"Passengers"}</th>
              <th style={cell}>{"Marrakech airport transfer"}</th>
              <th style={cell}>{"Per day"}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={cell}>{"Comfort sedan"}</td>
              <td style={cell}>{"1–4"}</td>
              <td style={cell}>{`€${airportSedan}`}</td>
              <td style={cell}>{"€150–220"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={cell}>{"SUV / 4x4"}</td>
              <td style={cell}>{"1–4"}</td>
              <td style={cell}>{"on request"}</td>
              <td style={cell}>{"€185–240"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={cell}>{"Van (e.g. Mercedes Vito)"}</td>
              <td style={cell}>{"5–7"}</td>
              <td style={cell}>{`€${airportVan}`}</td>
              <td style={cell}>{"€190–240"}</td>
            </tr>
            <tr>
              <td style={cell}>{"Minibus (e.g. Mercedes Sprinter)"}</td>
              <td style={cell}>{"8–14"}</td>
              <td style={cell}>{`€${airportMinibus}`}</td>
              <td style={cell}>{"€260–300"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>{"Day rates vary with the distance you drive that day: a relaxed day around Marrakech sits at the lower end, a long mountain or desert stage at the upper end."}</p>

      <h2>{"Example route prices"}</h2>
      <p>{"Fixed one-way prices per vehicle for some of our most booked routes:"}</p>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={cell}>{"Route"}</th>
              <th style={cell}>{"Distance"}</th>
              <th style={cell}>{"Sedan"}</th>
              <th style={cell}>{"Van"}</th>
              <th style={cell}>{"Minibus"}</th>
            </tr>
          </thead>
          <tbody>
            {EXAMPLES.map((e, i) => (
              <tr key={e.slug} style={i < EXAMPLES.length - 1 ? { borderBottom: "1px solid var(--rule)" } : undefined}>
                <td style={cell}><Link href={`/transfers/${e.slug}`}>{e.label}</Link></td>
                <td style={cell}>{`${e.km} · ${e.time}`}</td>
                <td style={cell}>{`€${e.sedan}`}</td>
                <td style={cell}>{`€${e.van}`}</td>
                <td style={cell}>{`€${e.minibus}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        {"Find your exact route in the "}
        <Link href="/transfers">{"full list of transfer prices"}</Link>
        {" or use the "}
        <Link href="/calculator">{"price calculator"}</Link>
        {"."}
      </p>

      <h2>{"What is included in the price"}</h2>
      <ul>
        <li>{"A licensed, experienced driver and an air-conditioned vehicle."}</li>
        <li>{"Fuel, motorway tolls and parking."}</li>
        <li>{"For airport pickups: meet and greet in arrivals with a name sign, flight tracking and 45 minutes of free waiting."}</li>
        <li>{"Stops on the way for photos, coffee or lunch on city-to-city transfers."}</li>
      </ul>
      <p>{"Not included: entrance fees, guides at monuments, meals and tips. There are no fuel surcharges or extra fees added at the end."}</p>

      <h2>{"What makes the price go up or down"}</h2>
      <ul>
        <li>{"Distance: the main factor. Long routes like Marrakech to Merzouga cost more than short city transfers."}</li>
        <li>{"Vehicle size: a van or minibus costs more than a sedan, but less per person."}</li>
        <li>{"Return trips: booking the return at the same time gets a 10% discount."}</li>
        <li>{"Waiting time: day trips include the driver waiting while you visit; extra hours on a transfer are agreed in advance."}</li>      </ul>

      <h2>{"How to pay"}</h2>
      <p>
        {"Transfers and day trips under €300 need no deposit: you pay the driver in cash at the end, in euros or dirhams. Multi-day trips over €300 need a 30% deposit to secure the car and driver, and the remaining 70% is paid in Morocco."}
      </p>

      <h2>{"Is a private driver worth it?"}</h2>
      <p>
        {"For a solo traveller on a route with a good train or coach, public transport is cheaper. But for two or more people, for airport arrivals with luggage, or for routes with poor public connections like the Atlas, the desert and the Ouzoud waterfalls, a private driver is often the most practical option and close in price per person. Compare all options in "}
        <Link href="/blog/grand-taxi-vs-private-driver">{"grand taxi vs private driver"}</Link>
        {" and "}
        <Link href="/blog/getting-around-morocco">{"how to get around Morocco"}</Link>
        {"."}
      </p>

      <h2>{"How to book"}</h2>
      <p>
        {"Send us a WhatsApp message with your route or itinerary, dates, number of passengers and luggage. We reply with a fixed price per vehicle, and for longer trips we can "}
        <Link href="/private-driver">{"assign one private driver"}</Link>
        {" for your whole stay."}
      </p>
    </GuidePost>
  );
}
