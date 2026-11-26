import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

type RoutePrice = { slug: string; price_sedan: number; price_van: number; price_minibus: number };
const r = (routeData as RoutePrice[]).find((x) => x.slug === "marrakech-to-essaouira");
const sedan = r?.price_sedan ?? 105;
const van = r?.price_van ?? 142;
const minibus = r?.price_minibus ?? 211;
/** Full-day return excursion price, as listed on /day-trips. */
const DAY_TRIP = 215;

export const title = "Marrakech to Essaouira: Bus, Day Trip or Private Driver? | Private Morocco Transfers";
export const description = `Marrakech to Essaouira: 180 km, about 2.5 hours. Bus vs private driver compared, argan stops on the way, day trip or overnight, and fixed prices from €${sedan}.`;

export const faqs: GuideFaq[] = [
  {
    q: "How far is Essaouira from Marrakech?",
    a: "About 180 km west of Marrakech. By car or private driver the drive takes around 2.5 hours on a good road through the Haouz plain and argan country; the coach takes about 3 to 3.5 hours.",
  },
  {
    q: "Is Essaouira worth a day trip from Marrakech?",
    a: "Yes, it is the most popular day trip from Marrakech. With about 5 hours of driving in total you still get 5 to 6 hours in Essaouira, enough for the medina, the port and the ramparts. Staying one night is more relaxed if you have time.",
  },
  {
    q: "How much is a private driver from Marrakech to Essaouira?",
    a: `A one-way private transfer costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). A full-day return excursion with the driver waiting is €${DAY_TRIP}. Prices are per vehicle and include fuel and tolls.`,
  },
  {
    q: "Is there a bus from Marrakech to Essaouira?",
    a: "Yes. CTM and Supratours run daily coaches between the two cities. They are the cheapest option per person but leave from bus stations at fixed times, so you need a taxi at each end and cannot stop on the way.",
  },
  {
    q: "What is there to see on the way to Essaouira?",
    a: "Argan forests, with goats sometimes climbing the trees, and women's argan oil cooperatives where you can see the oil being made. With a private driver you can stop for photos, coffee or a cooperative visit whenever you like.",
  },
  {
    q: "Is it windy in Essaouira?",
    a: "Often, yes, especially in spring and summer, which is why it is a famous kitesurfing spot. It is also usually several degrees cooler than Marrakech, so bring a light jacket even in summer.",
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Route Guides"
      h1="Marrakech to Essaouira: Bus, Day Trip or Private Driver?"
      date="2026-11-01"
      readTime="7 min read"
      image="/img/blog/marrakech-essaouira.webp"
      imageAlt="Private transfer van on the coast road to Essaouira at sunset, with goats in an argan tree"
      faqs={faqs}
      cta={{
        title: "Ready to travel from Marrakech to Essaouira?",
        sub: `Fixed price from €${sedan} per vehicle one way, or €${DAY_TRIP} for a full-day return trip.`,
        routeHref: "/transfers/marrakech-to-essaouira",
        routeLabel: "View Route Details",
        wa: "Hello! I read your Marrakech to Essaouira guide and would like to book a private transfer to Essaouira.",
      }}
      related={[
        { href: "/blog/day-trips", img: "/img/blog/day-trips-card.webp", tag: "Day Trips", title: "Top 7 Day Trips from Marrakech", excerpt: "Essaouira, Ourika, Agafay and more with a private driver.", date: "2026-10-20" },
        { href: "/blog/getting-around-morocco", img: "/img/blog/getting-around-morocco-card.webp", tag: "Morocco Tips", title: "Transportation in Morocco: How to Get Around", excerpt: "Trains, buses, grand taxis and private drivers compared.", date: "2026-11-06" },
        { href: "/blog/driver-cost", img: "/img/blog/driver-cost-card.webp", tag: "Driver FAQ", title: "How Much Does a Private Driver Cost in Morocco?", excerpt: "Prices per route, per day and per vehicle.", date: "2026-10-28" },
      ]}
    >
      <p>
        {"Essaouira is the perfect contrast to Marrakech: a breezy, walled port town on the Atlantic with a relaxed medina, blue fishing boats and fresh fish grilled on the harbour. It is close enough for a day trip and lovely enough for a few nights, and the drive itself, through argan country, is part of the experience."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {`Essaouira is about 180 km and 2.5 hours from Marrakech. The coach is cheapest for one person; a private driver from €${sedan} per vehicle goes door to door and stops wherever you like; and a full-day return trip with the same driver costs €${DAY_TRIP}.`}
      </p>

      <h2>{"Distance and travel time"}</h2>
      <p>
        {"The road heads west from Marrakech across the flat Haouz plain, passes through the market town of Chichaoua and then rolls through argan forest down to the coast. It is a good, mostly straight road."}
      </p>
      <ul>
        <li>{"Private driver or car: about 2.5 hours without stops, 3 to 3.5 hours with a photo stop and a cooperative visit."}</li>
        <li>{"Coach (CTM or Supratours): about 3 to 3.5 hours, plus getting to and from the bus stations."}</li>
        <li>{"From Marrakech airport: the same time; you can go straight to Essaouira without entering Marrakech."}</li>
      </ul>

      <h2>{"Option 1: The coach"}</h2>
      <p>
        {"CTM and Supratours both run daily air-conditioned coaches with assigned seats and a luggage hold. They are the cheapest way for a solo traveller. The downsides: fixed departure times, departures from bus stations rather than your riad, no stops on the way, and a walk or taxi to your accommodation in Essaouira. Check timetables and fares on the companies' websites, as they change."}
      </p>

      <h2>{"Option 2: A private driver"}</h2>
      <p>
        {"Your driver collects you at your riad or hotel, or at Marrakech airport, and drops you at the nearest point to your accommodation in Essaouira, whose medina is car-free. You choose the departure time and can stop for photos, coffee or an argan cooperative."}
      </p>
      <p>
        {"A fixed-price "}
        <Link href="/transfers/marrakech-to-essaouira">{"Marrakech to Essaouira private transfer"}</Link>
        {` costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). Prices are per vehicle, not per person, and include fuel and tolls. Arriving by plane? The `}
        <Link href="/transfers/marrakech-airport-to-essaouira">{"Marrakech airport to Essaouira transfer"}</Link>
        {" is the same price."}
      </p>

      <h2>{"Day trip or overnight?"}</h2>
      <p>
        {`As a day trip, you leave Marrakech around 8 or 9 am, arrive late morning, have 5 to 6 hours in Essaouira and are back for dinner. A full-day return excursion with the same driver waiting for you costs €${DAY_TRIP} per vehicle; see all our `}
        <Link href="/day-trips">{"day trips from Marrakech"}</Link>
        {"."}
      </p>
      <p>
        {"If you can, stay at least one night. Evenings in Essaouira are calm after the day visitors leave, the sunset over the ramparts is beautiful, and you avoid five hours of driving in one day. Many travellers also continue down the coast to Agadir instead of returning to Marrakech."}
      </p>

      <h2>{"What to see on the way"}</h2>
      <ul>
        <li>{"Argan forests: the spiny argan tree only grows in this part of Morocco. In some spots goats climb into the branches to eat the fruit; ask your driver for a genuine roadside stop rather than a staged one."}</li>
        <li>{"Argan oil cooperatives: run by local women, they show how the nuts are cracked and pressed, and sell cosmetic and culinary oil."}</li>
        <li>{"Chichaoua: a small market town about halfway, handy for a coffee or fresh orange juice."}</li>
        <li>{"The first view of the Atlantic as you approach Essaouira."}</li>
      </ul>

      <h2>{"What to do in Essaouira"}</h2>
      <p>
        {"Essaouira's medina is a UNESCO World Heritage site: an 18th-century fortified port town whose layout blends Moroccan and European military design. Walk the Skala de la Ville ramparts with their old cannons, explore the woodworkers' and art workshops, and watch the fishing fleet come in at the port."}
      </p>
      <ul>
        <li>{"Lunch at the port grills: choose your fish from the morning catch and have it cooked in front of you."}</li>
        <li>{"The beach: long and windy, popular with kitesurfers and windsurfers."}</li>
        <li>{"Sunset from the Skala de la Port with the gulls over the boats."}</li>
      </ul>
      <p>{"Bring a light jacket: Essaouira is usually cooler and windier than Marrakech, even in summer."}</p>

      <h2>{"Quick comparison"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={{ padding: "12px 8px" }}>{"Option"}</th>
              <th style={{ padding: "12px 8px" }}>{"Time"}</th>
              <th style={{ padding: "12px 8px" }}>{"Price"}</th>
              <th style={{ padding: "12px 8px" }}>{"Stops on the way"}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}>{"Coach"}</td>
              <td style={{ padding: "12px 8px" }}>{"about 3–3.5h"}</td>
              <td style={{ padding: "12px 8px" }}>{"Lowest, per person"}</td>
              <td style={{ padding: "12px 8px" }}>{"No"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}><Link href="/transfers/marrakech-to-essaouira">{"Private transfer"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"about 2.5h"}</td>
              <td style={{ padding: "12px 8px" }}>{`€${sedan} per vehicle`}</td>
              <td style={{ padding: "12px 8px" }}>{"Whenever you like"}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 8px" }}><Link href="/day-trips">{"Full-day return trip"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"5–6h in Essaouira"}</td>
              <td style={{ padding: "12px 8px" }}>{`€${DAY_TRIP} per vehicle`}</td>
              <td style={{ padding: "12px 8px" }}>{"Yes, both ways"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{"How to book"}</h2>
      <p>
        {"Send us a WhatsApp message with your pickup address in Marrakech (or your flight number), your preferred departure time, the number of passengers and whether you want one way, a return trip or a day trip. We confirm a fixed price on WhatsApp. No deposit is needed for trips under €300."}
      </p>
    </GuidePost>
  );
}
