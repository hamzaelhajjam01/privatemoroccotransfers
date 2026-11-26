import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";

/** Full-day return prices per vehicle (sedan), as listed on /day-trips. */
const DAY = { essaouira: 215, ourika: 140, imlil: 150, benhaddou: 285, ouzoud: 195, agafay: 140 };

export const title = "7 Best Day Trips from Marrakech with a Private Driver (2026) | Private Morocco Transfers";
export const description = `The 7 best day trips from Marrakech: Essaouira, Ourika, Imlil, Aït Benhaddou, Ouzoud, Agafay and Ouarzazate. Drive times, what to see and prices from €${DAY.ourika}.`;

export const faqs: GuideFaq[] = [
  {
    q: "What is the best day trip from Marrakech?",
    a: "Essaouira is the most popular for its sea air, port and medina. For mountains and villages, the Ourika Valley or Imlil are closest; for scenery and history, Aït Benhaddou; for something different, the Ouzoud waterfalls or a sunset in the Agafay Desert.",
  },
  {
    q: "How much does a day trip from Marrakech with a private driver cost?",
    a: `Full-day return trips with the driver waiting cost from €${DAY.ourika} per vehicle for the Ourika Valley or Agafay, €${DAY.imlil} for Imlil, €${DAY.ouzoud} for Ouzoud, €${DAY.essaouira} for Essaouira and €${DAY.benhaddou} for Aït Benhaddou and Ouarzazate. Prices are per vehicle, not per person.`,
  },
  {
    q: "Which day trips from Marrakech are closest?",
    a: "The Agafay Desert (about 30 km, 45 minutes), the Ourika Valley (about 45 km, 1 hour) and Imlil in the High Atlas (about 65 km, 1.5 hours). They make good half-day or relaxed full-day trips.",
  },
  {
    q: "Can I go to the Sahara on a day trip from Marrakech?",
    a: "Not to the sand dunes: Merzouga is about 560 km away and needs at least two days. For a desert experience in one day, go to the rocky Agafay Desert, 45 minutes from Marrakech.",
  },
  {
    q: "Is a private driver better than a group tour for day trips?",
    a: "Group tours are cheaper per person for solo travellers, but they run on a fixed schedule with fixed shopping stops. A private driver leaves when you want, stops where you want and is often similar in price per person for couples, families and groups.",
  },
  {
    q: "What time do day trips from Marrakech leave?",
    a: "Usually between 8 and 9 am, so you arrive before the midday heat and the crowds. Long trips like Aït Benhaddou or Essaouira start earlier; Agafay is often an afternoon trip timed for sunset.",
  },
];

const trips: { id: string; name: string; km: string; time: string; price: number; route: string }[] = [
  { id: "essaouira", name: "Essaouira", km: "180 km", time: "2h30", price: DAY.essaouira, route: "/transfers/marrakech-to-essaouira" },
  { id: "ourika", name: "Ourika Valley", km: "45 km", time: "1h", price: DAY.ourika, route: "/transfers/marrakech-to-ourika-valley" },
  { id: "imlil", name: "Imlil & the High Atlas", km: "65 km", time: "1h30", price: DAY.imlil, route: "/transfers/marrakech-to-imlil" },
  { id: "benhaddou", name: "Aït Benhaddou & Ouarzazate", km: "200 km", time: "4h", price: DAY.benhaddou, route: "/transfers/marrakech-to-ait-ben-haddou" },
  { id: "ouzoud", name: "Ouzoud Waterfalls", km: "155 km", time: "2h30", price: DAY.ouzoud, route: "/transfers/marrakech-to-ouzoud-waterfalls" },
  { id: "agafay", name: "Agafay Desert", km: "30 km", time: "45 min", price: DAY.agafay, route: "/transfers/marrakech-to-agafay-desert" },
];

const cell = { padding: "12px 8px" } as const;

export default function Content() {
  return (
    <GuidePost
      category="Day Trips"
      h1="7 Best Day Trips from Marrakech with a Private Driver"
      date="2026-10-20"
      readTime="8 min read"
      image="/img/blog/day-trips.webp"
      imageAlt="Two travellers looking over a Berber village in a green High Atlas valley next to a black SUV"
      faqs={faqs}
      cta={{
        title: "Planning a day trip from Marrakech?",
        sub: `Full-day trips from €${DAY.ourika} per vehicle, with the driver waiting while you explore.`,
        routeHref: "/day-trips",
        routeLabel: "Browse Day Trips",
        wa: "Hello! I read your day trips guide and would like to book a day trip from Marrakech.",
      }}
      related={[
        { href: "/blog/marrakech-essaouira", img: "/img/blog/marrakech-essaouira-card.webp", tag: "Route Guides", title: "Marrakech to Essaouira: Bus, Day Trip or Private Driver?", excerpt: "Everything you need for the trip to the coast.", date: "2026-11-01" },
        { href: "/blog/ourika-valley", img: "/img/blog/ourika-valley-card.webp", tag: "Day Trips", title: "Ourika Valley Day Trip Guide", excerpt: "Setti Fatma waterfalls and Berber villages.", date: "2026-11-06" },
        { href: "/blog/agafay-desert", img: "/img/blog/agafay-desert-card.webp", tag: "Day Trips", title: "Agafay Desert Guide", excerpt: "A desert sunset 45 minutes from Marrakech.", date: "2026-11-06" },
      ]}
    >
      <p>
        {"Marrakech is the perfect base for day trips. Within a few hours you can reach the Atlantic coast, the High Atlas mountains, a UNESCO kasbah, Morocco's biggest waterfalls or a stone desert, and be back at your riad for dinner. With a private driver you leave when you want and stop wherever you like."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {`the best day trips from Marrakech are Essaouira, the Ourika Valley, Imlil, Aït Benhaddou with Ouarzazate, the Ouzoud waterfalls and the Agafay Desert. Full-day private trips cost from €${DAY.ourika} to €${DAY.benhaddou} per vehicle, depending on distance.`}
      </p>

      <h2>{"Day trips at a glance"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={cell}>{"Destination"}</th>
              <th style={cell}>{"Distance"}</th>
              <th style={cell}>{"Drive one way"}</th>
              <th style={cell}>{"Full-day price"}</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((t, i) => (
              <tr key={t.id} style={i < trips.length - 1 ? { borderBottom: "1px solid var(--rule)" } : undefined}>
                <td style={cell}><Link href={t.route}>{t.name}</Link></td>
                <td style={cell}>{t.km}</td>
                <td style={cell}>{t.time}</td>
                <td style={cell}>{`€${t.price} per vehicle`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{"Prices are for a sedan (1 to 4 passengers) with the driver waiting all day, fuel and tolls included. Vans and minibuses are available for bigger groups."}</p>

      <h2>{"1. Essaouira: the Atlantic coast"}</h2>
      <p>
        {"The most popular day trip from Marrakech. Essaouira is a breezy, walled port town with a UNESCO-listed medina, blue fishing boats and fresh fish grilled at the harbour. On the way you pass through argan country, where goats sometimes climb the trees, and can stop at a women's argan oil cooperative."}
      </p>
      <p>
        {`About 180 km, 2.5 hours each way, leaving 5 to 6 hours in town. Full day €${DAY.essaouira} per vehicle. Read our `}
        <Link href="/blog/marrakech-essaouira">{"Marrakech to Essaouira guide"}</Link>
        {" for tips."}
      </p>

      <h2>{"2. Ourika Valley: waterfalls and Berber villages"}</h2>
      <p>
        {"The closest mountain escape, just an hour south. The road follows the Ourika river past riverside cafés and Berber villages to Setti Fatma, where a short, rocky hike leads to a series of waterfalls. Easy to combine with lunch by the river and a visit to a traditional house."}
      </p>
      <p>
        {`About 45 km, 1 hour each way. Full day €${DAY.ourika} per vehicle. See our `}
        <Link href="/blog/ourika-valley">{"Ourika Valley day trip guide"}</Link>
        {"."}
      </p>

      <h2>{"3. Imlil and the High Atlas"}</h2>
      <p>
        {"Imlil is the mountain village at the foot of Jebel Toubkal, North Africa's highest peak. Even without trekking, the drive through Asni and up the valley is beautiful, and you can walk to the village of Aroumd or have lunch on a kasbah terrace with views of the peaks. Asni has a busy weekly market on Saturdays."}
      </p>
      <p>{`About 65 km, 1.5 hours each way. Full day €${DAY.imlil} per vehicle.`}</p>

      <h2>{"4. Aït Benhaddou and Ouarzazate"}</h2>
      <p>
        {"The longest day trip and one of the most spectacular. The road crosses the High Atlas over the Tizi n'Tichka pass to Aït Benhaddou, a UNESCO-listed fortified village of earth and straw used as a set in many famous films. Continue to Ouarzazate for the Taourirt Kasbah or the film studios."}
      </p>
      <p>
        {`About 200 km, around 4 hours each way, so start early. Full day €${DAY.benhaddou} per vehicle. Heading further? See our `}
        <Link href="/blog/sahara-merzouga">{"Marrakech to Merzouga guide"}</Link>
        {"."}
      </p>

      <h2>{"5. Ouzoud Waterfalls"}</h2>
      <p>
        {"Morocco's most impressive waterfalls drop about 110 m in several tiers into a green gorge. Walk down to the base past olive groves, take a small boat close to the falls, and look out for the Barbary macaques that live around the trails."}
      </p>
      <p>{`About 155 km, 2.5 hours each way. Full day €${DAY.ouzoud} per vehicle.`}</p>

      <h2>{"6. Agafay Desert"}</h2>
      <p>
        {"The nearest desert to Marrakech: a rocky landscape of hills and stone plains with views of the Atlas on clear days. It has no sand dunes, but camel rides, quad bikes and camp dinners under the stars make it the easiest desert experience from the city. Most visitors go in the afternoon for the sunset."}
      </p>
      <p>
        {`About 30 km, 45 minutes each way. Full day €${DAY.agafay} per vehicle. Everything you need is in our `}
        <Link href="/blog/agafay-desert">{"Agafay Desert guide"}</Link>
        {"."}
      </p>

      <h2>{"7. Ouarzazate on its own"}</h2>
      <p>
        {"If films and kasbahs are your thing, spend more time in Ouarzazate itself: tour the Atlas or CLA film studios, visit the Taourirt Kasbah and see the Fint oasis just outside town. It also works as the first night of a trip to the Sahara instead of a return day trip; a "}
        <Link href="/transfers/marrakech-to-ouarzazate">{"one-way transfer to Ouarzazate"}</Link>
        {" is cheaper than a full-day return."}
      </p>

      <h2>{"Private driver or group tour?"}</h2>
      <p>
        {"Group tours from Marrakech are cheap per seat, but they follow a fixed schedule, collect other passengers first and often include shopping stops. A private driver picks you up at your riad when you are ready, waits while you explore and changes the plan if you want to stay longer somewhere. For two or more people, the price per person is often close. Compare costs in our "}
        <Link href="/blog/driver-cost">{"private driver price guide"}</Link>
        {"."}
      </p>

      <h2>{"Tips for day trips from Marrakech"}</h2>
      <ul>
        <li>{"Start early, around 8 am, to avoid the midday heat and the tour buses."}</li>
        <li>{"Bring cash in dirhams for lunch, entrance fees and local guides."}</li>
        <li>{"Wear good shoes for Ouzoud, Ourika and Imlil, where paths can be steep and wet."}</li>
        <li>{"Bring a warm layer for the mountains and Agafay evenings, even in spring."}</li>
      </ul>

      <h2>{"How to book a day trip"}</h2>
      <p>
        {"Send us a WhatsApp message with the destination, your date, your riad or hotel address and the number of passengers. We confirm a fixed price per vehicle, and no deposit is needed for trips under €300. See all options on our "}
        <Link href="/day-trips">{"day trips page"}</Link>
        {", or "}
        <Link href="/private-driver">{"hire a private driver"}</Link>
        {" for several days."}
      </p>
    </GuidePost>
  );
}
