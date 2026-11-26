import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

type RoutePrice = { slug: string; price_sedan: number; price_van: number; price_minibus: number };
const routes = routeData as RoutePrice[];
const airport = routes.find((r) => r.slug === "casablanca-airport-to-marrakech");
const city = routes.find((r) => r.slug === "casablanca-to-marrakech");
const sedan = airport?.price_sedan ?? 175;
const van = airport?.price_van ?? 205;
const minibus = airport?.price_minibus ?? 267;
const citySedan = city?.price_sedan ?? sedan;

export const title = "Casablanca to Marrakech: Train, Bus or Private Driver? (2026) | Private Morocco Transfers";
export const description = `Casablanca to Marrakech: train, bus, grand taxi or private driver compared. Times, real costs, airport tips and fixed private transfers from €${sedan}.`;

export const faqs: GuideFaq[] = [
  {
    q: "How far is Marrakech from Casablanca?",
    a: "About 240 km from Casablanca city centre and about 220 km from Casablanca Mohammed V Airport (CMN), almost all of it on the A7 toll motorway. By car or private driver the trip takes roughly 2 hours 45 minutes to 3 hours.",
  },
  {
    q: "Is there a direct train from Casablanca airport to Marrakech?",
    a: "No. From the airport you take the airport train to a Casablanca station such as Casa-Voyageurs and change there for a Marrakech train. With connections and waiting time, expect about 4 to 5 hours from landing to Marrakech.",
  },
  {
    q: "What is the cheapest way from Casablanca to Marrakech?",
    a: "The coach (CTM or Supratours) or a second-class ONCF train, both at a small fraction of a private transfer for one person. They run on fixed timetables from stations, so add a taxi at each end.",
  },
  {
    q: "How much is a private driver from Casablanca airport to Marrakech?",
    a: `With Private Morocco Transfers it is a fixed €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). The price is per vehicle, not per person, and includes fuel, tolls and waiting for delayed flights.`,
  },
  {
    q: "Can I stop on the way from Casablanca to Marrakech?",
    a: "Yes, with a private driver you can stop at motorway service areas for coffee or a meal, or ask for a short detour. Trains and coaches only stop at their scheduled stations.",
  },
  {
    q: "Can the car drive into the Marrakech medina?",
    a: "Cars cannot reach most riads inside the medina because the alleys are too narrow. Your driver stops at the closest access point and helps with your luggage; many riads also send someone to meet you there.",
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Route Guides"
      h1="Casablanca to Marrakech: Train, Bus or Private Driver?"
      date="2026-11-26"
      readTime="7 min read"
      image="/img/blog/casablanca-to-marrakech.webp"
      imageAlt="A black passenger van on a motorway crossing golden plains towards distant hills in late afternoon light"
      faqs={faqs}
      cta={{
        title: "Landing in Casablanca, heading to Marrakech?",
        sub: `Fixed price from €${sedan} per vehicle, door to door, fuel and tolls included.`,
        routeHref: "/transfers/casablanca-airport-to-marrakech",
        routeLabel: "View Airport Transfer",
        wa: "Hello! I read your Casablanca to Marrakech guide and would like a private transfer to Marrakech.",
      }}
      related={[
        { href: "/blog/getting-around-morocco", img: "/img/blog/getting-around-morocco-card.webp", tag: "Morocco Tips", title: "Transportation in Morocco: How to Get Around", excerpt: "Trains, buses, grand taxis and private drivers compared.", date: "2026-11-06" },
        { href: "/blog/grand-taxi-vs-private-driver", img: "/img/blog/grand-taxi-vs-private-driver-card.webp", tag: "Morocco Tips", title: "Grand Taxi vs Private Driver in Morocco", excerpt: "How shared grand taxis work and when a private driver is worth it.", date: "2026-11-06" },
        { href: "/blog/airport-transfer", img: "/img/blog/airport-transfer-card.webp", tag: "Airport Guides", title: "Marrakech Airport Transfer Guide", excerpt: "What happens when you land and how to reach your riad.", date: "2026-10-10" },
      ]}
    >
      <p>
        {"Many long-haul flights to Morocco land in Casablanca, not Marrakech, so the Casablanca to Marrakech trip is one of the first decisions travellers make. The good news: the two cities are linked by a fast toll motorway and a regular train line, and you have four realistic options. Here is how they compare, honestly, so you can pick the one that fits your budget, your luggage and your arrival time."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {"the train or the coach is the cheapest for a solo traveller with light luggage. A private driver is the easiest when you land at Casablanca airport, travel as a family or group, carry heavy bags, or arrive late, because it goes door to door with no connections."}
      </p>

      <h2>{"Distance and travel time"}</h2>
      <p>
        {"Marrakech is about 240 km from Casablanca city centre and about 220 km from Mohammed V International Airport (CMN), which lies south of the city, roughly on the way. Almost the whole journey is on the A7 toll motorway, a straight and well-kept road through the plains around Settat and Benguerir."}
      </p>
      <ul>
        <li>{"By private driver or car: about 2 hours 45 minutes to 3 hours, depending on traffic leaving Casablanca."}</li>
        <li>{"By train from Casa-Voyageurs: usually around 2 hours 40 minutes to 3 hours of travel, plus getting to the station."}</li>
        <li>{"By coach: usually around 3.5 to 4 hours."}</li>
        <li>{"From the airport by public transport: allow about 4 to 5 hours in total, because you change in Casablanca."}</li>
      </ul>

      <h2>{"Option 1: The train (ONCF)"}</h2>
      <p>
        {"Morocco's national railway, ONCF, runs regular trains between Casablanca (Casa-Voyageurs station) and Marrakech throughout the day. The trains are comfortable and cheap; first class gives you a reserved seat and more space. Tickets can be bought at the station or on the ONCF website and app. Check the current timetable and fares there, as they change."}
      </p>
      <p>
        {"From the airport there is no direct train to Marrakech. You take the airport shuttle train into Casablanca, change at Casa-Voyageurs, and wait for a Marrakech train. With heavy luggage, a late landing or tired children, that connection is where most of the hassle is. At the other end, Marrakech station is outside the medina, so you still need a taxi to your riad."}
      </p>
      <p><strong>{"Best for: "}</strong>{"solo travellers and couples on a budget with light luggage, travelling in the daytime."}</p>

      <h2>{"Option 2: The coach (CTM or Supratours)"}</h2>
      <p>
        {"CTM and Supratours run comfortable air-conditioned coaches between Casablanca and Marrakech several times a day, with assigned seats and a luggage hold. They take a little longer than the train and leave from their own bus stations, so plan a taxi to and from each one."}
      </p>
      <p><strong>{"Best for: "}</strong>{"the lowest price per person, when the timetable suits you."}</p>

      <h2>{"Option 3: Grand taxi or rental car"}</h2>
      <p>
        {"Shared grand taxis also run between the two cities. They leave when full, often with six passengers squeezed in, and luggage space is limited; you can pay for all the seats to have the car to yourself. See our "}
        <Link href="/blog/grand-taxi-vs-private-driver">{"grand taxi vs private driver comparison"}</Link>
        {" for how they really work."}
      </p>
      <p>
        {"Renting a car at Casablanca airport is easy and the A7 motorway is simple to drive. The harder parts are Casablanca's traffic, parking in Marrakech, and returning the car; you also cannot drive into the Marrakech medina."}
      </p>

      <h2>{"Option 4: A private driver"}</h2>
      <p>
        {"With a private transfer, your driver meets you in the arrivals hall at Casablanca airport (or at your hotel in Casablanca), carries your luggage and drives you straight to your hotel or the closest access point to your riad in Marrakech. You leave when you want, stop when you want, and there are no connections."}
      </p>
      <p>
        {`A fixed-price `}
        <Link href="/transfers/casablanca-airport-to-marrakech">{"Casablanca airport to Marrakech transfer"}</Link>
        {` costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). From Casablanca city, the `}
        <Link href="/transfers/casablanca-to-marrakech">{"Casablanca to Marrakech transfer"}</Link>
        {` is from €${citySedan}. Prices are per vehicle, not per person, and include fuel, motorway tolls and waiting if your flight is late.`}
      </p>
      <p><strong>{"Best for: "}</strong>{"airport arrivals, families and groups, heavy luggage, late-night landings, and anyone who wants to start their trip without stress."}</p>

      <h2>{"Quick comparison"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={{ padding: "12px 8px" }}>{"Option"}</th>
              <th style={{ padding: "12px 8px" }}>{"Travel time"}</th>
              <th style={{ padding: "12px 8px" }}>{"Cost"}</th>
              <th style={{ padding: "12px 8px" }}>{"From the airport"}</th>
              <th style={{ padding: "12px 8px" }}>{"Luggage"}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}>{"Train (ONCF)"}</td>
              <td style={{ padding: "12px 8px" }}>{"about 2h40–3h"}</td>
              <td style={{ padding: "12px 8px" }}>{"Low, per person"}</td>
              <td style={{ padding: "12px 8px" }}>{"Change in Casablanca"}</td>
              <td style={{ padding: "12px 8px" }}>{"You carry it"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}>{"Coach (CTM / Supratours)"}</td>
              <td style={{ padding: "12px 8px" }}>{"about 3.5–4h"}</td>
              <td style={{ padding: "12px 8px" }}>{"Lowest, per person"}</td>
              <td style={{ padding: "12px 8px" }}>{"Taxi to the bus station"}</td>
              <td style={{ padding: "12px 8px" }}>{"Luggage hold"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}>{"Grand taxi"}</td>
              <td style={{ padding: "12px 8px" }}>{"about 3h"}</td>
              <td style={{ padding: "12px 8px" }}>{"Low per seat, negotiated"}</td>
              <td style={{ padding: "12px 8px" }}>{"Not convenient"}</td>
              <td style={{ padding: "12px 8px" }}>{"Very limited"}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 8px" }}><Link href="/transfers/casablanca-airport-to-marrakech">{"Private driver"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"about 2h45–3h"}</td>
              <td style={{ padding: "12px 8px" }}>{`€${sedan} per vehicle`}</td>
              <td style={{ padding: "12px 8px" }}>{"Met in arrivals"}</td>
              <td style={{ padding: "12px 8px" }}>{"Handled for you"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{"Which should you choose?"}</h2>
      <ul>
        <li>{"Travelling alone with a backpack, in daytime: take the train or the coach."}</li>
        <li>{"Two people with suitcases: compare the train plus two taxis with a private transfer; the gap is smaller than it looks."}</li>
        <li>{"A family, a group or heavy luggage: a private driver is usually the simplest, and the price per person drops as the group grows."}</li>
        <li>{"Landing late at night or after a long-haul flight: a private driver avoids the station change and a late taxi hunt."}</li>
      </ul>

      <h2>{"Arriving in Marrakech"}</h2>
      <p>
        {"If you are staying in a riad inside the medina, remember that cars cannot reach most of them. Your driver stops at the nearest access point, such as a square or gate, and helps with your bags; many riads send someone to walk you the last few minutes. Hotels outside the medina, in Gueliz, Hivernage or the Palmeraie, are reached door to door."}
      </p>
      <p>
        {"Heading further after Marrakech? Our "}
        <Link href="/city-to-city">{"city-to-city transfers"}</Link>
        {" cover Essaouira, Agadir, Fes and the Sahara, and our guide to "}
        <Link href="/blog/getting-around-morocco">{"transportation in Morocco"}</Link>
        {" compares every option for the rest of your trip."}
      </p>

      <h2>{"How to book a private transfer"}</h2>
      <p>
        {"Send us your flight number (or hotel address in Casablanca), your arrival time, the number of passengers and bags, and your address in Marrakech. We confirm a fixed price on WhatsApp, and your driver tracks your flight and waits in arrivals with a name sign. No deposit is needed for trips under €300."}
      </p>
    </GuidePost>
  );
}
