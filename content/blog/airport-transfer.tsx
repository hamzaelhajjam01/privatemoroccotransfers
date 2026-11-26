import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

type RoutePrice = { slug: string; price_sedan: number; price_van: number; price_minibus: number };
const routes = routeData as RoutePrice[];
const price = (slug: string) => routes.find((r) => r.slug === slug);
const city = price("marrakech-airport-to-marrakech");
const sedan = city?.price_sedan ?? 40;
const van = city?.price_van ?? 50;
const minibus = city?.price_minibus ?? 65;
const palmeraie = price("marrakech-airport-to-palmeraie-marrakech")?.price_sedan ?? 50;
const essaouira = price("marrakech-airport-to-essaouira")?.price_sedan ?? 105;
const agadir = price("marrakech-airport-to-agadir")?.price_sedan ?? 150;

export const title = "Marrakech Airport Transfer: Taxi, Bus or Private Driver? | Private Morocco Transfers";
export const description = `Marrakech Menara Airport (RAK) to the medina or your hotel: private transfer from €${sedan}, petit taxi or the airport bus, plus what to expect when you land.`;

export const faqs: GuideFaq[] = [
  {
    q: "How far is Marrakech airport from the medina?",
    a: "Marrakech Menara Airport (RAK) is only about 6 km from the medina and Jemaa el-Fna square. The drive usually takes 15 to 20 minutes, a little longer at rush hour.",
  },
  {
    q: "How much is a private transfer from Marrakech airport to the medina?",
    a: `A fixed €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). The price is per vehicle, not per person, and includes meeting you in arrivals, flight tracking and up to 45 minutes of waiting.`,
  },
  {
    q: "Is there a bus from Marrakech airport to the city?",
    a: "Yes. The airport bus (line L19) runs between the airport, Jemaa el-Fna and Gueliz. It is the cheapest option, but it leaves you at a stop, not at your riad, and you carry your own bags from there. Check the current timetable and fare when you land.",
  },
  {
    q: "Can a taxi or car drive to my riad in the medina?",
    a: "Usually not. Most riads are down alleys too narrow for cars. Your driver stops at the nearest access point and helps with your luggage, and many riads send someone to meet you and walk you the last few minutes.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "We track your flight, so your driver adjusts to the real landing time. Up to 45 minutes of waiting after landing is included at no extra cost, which covers most passport and baggage queues.",
  },
  {
    q: "Can I go straight from Marrakech airport to Essaouira or Agadir?",
    a: `Yes. A private transfer from the airport goes directly to Essaouira (from €${essaouira}) or Agadir (from €${agadir}) without going into Marrakech first.`,
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Airport Guides"
      h1="Marrakech Airport Transfer: Taxi, Bus or Private Driver?"
      date="2026-10-10"
      readTime="7 min read"
      image="/img/blog/airport-transfer.webp"
      imageAlt="A driver holding a name sign outside Marrakech Menara Airport at night, with a black sedan waiting"
      faqs={faqs}
      cta={{
        title: "Landing at Marrakech airport?",
        sub: `Fixed price from €${sedan} per vehicle: name sign in arrivals, flight tracking and 45 minutes of free waiting.`,
        routeHref: "/transfers/marrakech-airport-to-marrakech",
        routeLabel: "View Airport Transfer",
        wa: "Hello! I read your Marrakech airport guide and would like to book an airport transfer.",
      }}
      related={[
        { href: "/blog/casablanca-to-marrakech", img: "/img/blog/casablanca-to-marrakech-card.webp", tag: "Route Guides", title: "Casablanca to Marrakech: Train, Bus or Private Driver?", excerpt: "Landing in Casablanca instead? Every option compared.", date: "2026-11-26" },
        { href: "/blog/getting-around-morocco", img: "/img/blog/getting-around-morocco-card.webp", tag: "Morocco Tips", title: "Transportation in Morocco: How to Get Around", excerpt: "Trains, buses, grand taxis and private drivers compared.", date: "2026-11-06" },
        { href: "/blog/day-trips", img: "/img/blog/day-trips-card.webp", tag: "Day Trips", title: "Top 7 Day Trips from Marrakech", excerpt: "Essaouira, Ourika, Agafay and more with a private driver.", date: "2026-10-20" },
      ]}
    >
      <p>
        {"Marrakech Menara Airport (RAK) is small and close to the city, which makes arriving here easier than at most airports. But after a long flight, the last 6 km to your riad can still be the most stressful part of the trip: unofficial drivers approach you outside customs, taxi prices are negotiated, and cars cannot reach most riads in the medina."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {`the airport is about 15 to 20 minutes from the medina. You can take the airport bus (cheapest), a petit taxi (agree the price first), or a pre-booked private transfer from €${sedan} per vehicle, where a driver waits in arrivals with your name and takes you to the nearest point to your riad or hotel.`}
      </p>

      <h2>{"What happens when you land"}</h2>
      <ul>
        <li>{"Passport control: allow about 15 to 40 minutes, depending on how many flights land at the same time."}</li>
        <li>{"Baggage reclaim, then customs, then the arrivals hall."}</li>
        <li>{"In arrivals you will find cash machines, currency exchange and mobile phone shops selling local SIM cards."}</li>
        <li>{"If you pre-booked a transfer, your driver is waiting here with a sign showing your name."}</li>
      </ul>
      <p>
        {"Tip: take some dirhams from a cash machine before you leave the airport. Small notes are useful for tips, porters and your first coffee in the medina."}
      </p>

      <h2>{"Option 1: A pre-booked private transfer"}</h2>
      <p>
        {"Your driver meets you in the arrivals hall with a name sign, helps with your luggage and drives you directly to your hotel, or to the closest access point to your riad. You receive your driver's name and phone number on WhatsApp before you fly, and we track your flight so the driver adjusts to the real landing time. Up to 45 minutes of waiting after landing is included."}
      </p>
      <p>
        {"A fixed-price "}
        <Link href="/transfers/marrakech-airport-to-marrakech">{"Marrakech airport to medina transfer"}</Link>
        {` costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). To the Palmeraie it is from €${palmeraie}. Prices are per vehicle, not per person, and there is nothing to negotiate when you land.`}
      </p>
      <p><strong>{"Best for: "}</strong>{"first visits, late-night arrivals, families, groups and anyone with several suitcases."}</p>

      <h2>{"Option 2: A petit taxi"}</h2>
      <p>
        {"The beige petit taxis wait outside the terminal. They are the normal way to get around the city, but from the airport drivers rarely use the meter, so agree the price before you get in and make sure you both mean the same thing (per car, in dirhams). Petit taxis take a maximum of three passengers and have limited space for luggage, and night fares are higher. You will also be approached by unofficial drivers as you walk out; politely decline and go to the official rank instead."}
      </p>
      <p>
        {"To understand how Moroccan taxis work, see our "}
        <Link href="/blog/grand-taxi-vs-private-driver">{"guide to grand taxis vs private drivers"}</Link>
        {"."}
      </p>

      <h2>{"Option 3: The airport bus (L19)"}</h2>
      <p>
        {"The airport bus links the terminal with Jemaa el-Fna and Gueliz. It is by far the cheapest option and works well if you travel light and arrive in the daytime. The catch: it stops at set points, so you still walk with your bags to your riad, or take a taxi from the stop. Check the current timetable and fare at the airport, as they change."}
      </p>

      <h2>{"Quick comparison"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={{ padding: "12px 8px" }}>{"Option"}</th>
              <th style={{ padding: "12px 8px" }}>{"Price"}</th>
              <th style={{ padding: "12px 8px" }}>{"Where it drops you"}</th>
              <th style={{ padding: "12px 8px" }}>{"Luggage"}</th>
              <th style={{ padding: "12px 8px" }}>{"Late at night"}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}><Link href="/transfers/marrakech-airport-to-marrakech">{"Private transfer"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{`€${sedan} per vehicle, fixed`}</td>
              <td style={{ padding: "12px 8px" }}>{"Your hotel, or the nearest point to your riad"}</td>
              <td style={{ padding: "12px 8px" }}>{"Carried for you"}</td>
              <td style={{ padding: "12px 8px" }}>{"Driver waits for your flight"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}>{"Petit taxi"}</td>
              <td style={{ padding: "12px 8px" }}>{"Negotiated, higher at night"}</td>
              <td style={{ padding: "12px 8px" }}>{"Nearest street to your address"}</td>
              <td style={{ padding: "12px 8px" }}>{"Limited, max 3 passengers"}</td>
              <td style={{ padding: "12px 8px" }}>{"Available, price varies"}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 8px" }}>{"Airport bus (L19)"}</td>
              <td style={{ padding: "12px 8px" }}>{"Cheapest, per person"}</td>
              <td style={{ padding: "12px 8px" }}>{"Jemaa el-Fna or Gueliz stops"}</td>
              <td style={{ padding: "12px 8px" }}>{"You carry it"}</td>
              <td style={{ padding: "12px 8px" }}>{"Limited timetable"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{"Arriving at a riad in the medina"}</h2>
      <p>
        {"Most riads are inside the old medina, down alleys that are too narrow for cars. Whichever transport you choose, you will be dropped at the nearest street, square or gate, and walk the last part. With a private transfer your driver helps with your bags and coordinates with your riad, many of which send someone to meet you. Porters with handcarts also work at the main access points; agree a small fee before they start."}
      </p>
      <p>
        {"Hotels outside the medina, in Gueliz, Hivernage, the Palmeraie or on the Route de l'Ourika, are reached door to door."}
      </p>

      <h2>{"Going straight to Essaouira, Agadir or elsewhere"}</h2>
      <p>
        {"You do not need to stay in Marrakech first. A private transfer can take you directly from the airport to "}
        <Link href="/transfers/marrakech-airport-to-essaouira">{`Essaouira (from €${essaouira})`}</Link>
        {", "}
        <Link href="/transfers/marrakech-airport-to-agadir">{`Agadir (from €${agadir})`}</Link>
        {" or any other city. See all our "}
        <Link href="/airport-transfers">{"airport transfers"}</Link>
        {", including pickups at Casablanca, Agadir, Fes and Tangier airports."}
      </p>

      <h2>{"How to book your airport transfer"}</h2>
      <p>
        {"Send us a WhatsApp message, ideally at least 24 hours before you fly, with your flight number, arrival time, number of passengers and bags, and your hotel or riad address. We confirm a fixed price and send your driver's details before you land. No deposit is needed for trips under €300, and you can cancel free of charge up to 48 hours before pickup."}
      </p>
    </GuidePost>
  );
}
