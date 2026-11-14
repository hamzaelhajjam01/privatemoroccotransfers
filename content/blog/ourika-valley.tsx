import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

const oneWay = (routeData as { slug: string; price_sedan: number }[]).find((r) => r.slug === "marrakech-to-ourika-valley")?.price_sedan ?? 85;

export const title = "Ourika Valley Day Trip from Marrakech: Waterfalls & Tips | Private Morocco Transfers";
export const description = `Ourika Valley guide: how far it is from Marrakech, the Setti Fatma waterfall hike, where to stop, the best season, and private driver prices from €${oneWay}.`;

export const faqs: GuideFaq[] = [
  {
    q: "How far is the Ourika Valley from Marrakech?",
    a: "The valley starts about 45 km south of Marrakech, roughly an hour's drive. Setti Fatma, the village at the end of the paved road where the waterfall walks begin, is about 65 km away, so allow around an hour and a half each way with no stops.",
  },
  {
    q: "How long is the hike to the Ourika waterfalls?",
    a: "From Setti Fatma, the first waterfall is about a 20 to 30 minute walk with some scrambling over rocks. Continuing to the higher falls takes longer and needs good shoes and steady footing. Local guides wait at the start of the path and are worth hiring if you want to go beyond the first falls.",
  },
  {
    q: "Is the Ourika Valley worth it?",
    a: "Yes, as an easy escape from the heat and bustle of Marrakech: green terraces, a river to eat beside, Berber villages and mountain views, all within an hour or so. It is busy on weekends and in summer, so go early on a weekday for a quieter visit.",
  },
  {
    q: "Can you visit the Ourika Valley in half a day?",
    a: "Yes. A half day covers the drive, a short walk to the first waterfall and a riverside drink. A full day lets you add the Anima garden, a cooperative or village visit, lunch by the river and a longer walk at a relaxed pace.",
  },
  {
    q: "How much is a private driver to the Ourika Valley?",
    a: `With Private Morocco Transfers, a one-way transfer from Marrakech is €${oneWay} per vehicle, and a half or full day trip with the driver waiting starts at €140 per vehicle, return. Prices are fixed per car, not per person, and include fuel.`,
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Day Trips"
      h1="Ourika Valley Day Trip from Marrakech: Waterfalls, Villages & Tips"
      date="2026-11-14"
      readTime="7 min read"
      image="/img/blog/ourika-valley.webp"
      imageAlt="Riverside café tables and cushions along the Ourika river, with willow trees and a footbridge"
      imageCredit={{ name: "Matthew Fainman", url: "https://unsplash.com/photos/a-group-of-people-sitting-at-a-table-next-to-a-river-3yonP2JaGTU" }}
      faqs={faqs}
      cta={{
        title: "Planning a day in the Ourika Valley?",
        sub: "Your own driver from €140 per vehicle for a return day trip, or a one-way transfer.",
        routeHref: "/transfers/marrakech-to-ourika-valley",
        routeLabel: "View Ourika Transfer",
        wa: "Hello! I read your Ourika Valley guide and would like a private day trip to the Ourika Valley.",
      }}
      related={[
        { href: "/blog/agafay-desert", img: "/img/blog/agafay-desert-card.webp", tag: "Day Trips", title: "Agafay Desert from Marrakech", excerpt: "A stone desert, camel rides and sunset dinners 45 minutes from the city.", date: "2026-11-14" },
        { href: "/blog/day-trips", img: "/img/blog/day-trips-card.webp", tag: "Morocco Tips", title: "Top 7 Day Trips from Marrakech with a Private Driver", excerpt: "The best day excursions from Marrakech.", date: "2026-10-20" },
        { href: "/blog/getting-around-morocco", img: "/img/blog/getting-around-morocco-card.webp", tag: "Morocco Tips", title: "Getting Around Morocco in 2026", excerpt: "Train, bus, grand taxi or private driver: costs and comfort compared.", date: "2026-11-06" },
      ]}
    >
      <p>
        {"The Ourika Valley is where Marrakech goes to cool off. An hour south of the city, the road leaves the dry plain and follows the Ourika river into the High Atlas, past red-earth villages, walnut and poplar trees and terraced fields, to the waterfalls above Setti Fatma. Here is how to plan the day: what to see on the way, the waterfall walk, when to go, and the easiest way there and back."}
      </p>

      <h2>{"Where is the Ourika Valley?"}</h2>
      <p>
        {"The valley begins about 45 km south of Marrakech and runs up into the mountains for another 20 km or so, ending at the village of Setti Fatma, where the paved road stops. Expect around an hour to reach the valley and about an hour and a half to Setti Fatma, more if you stop along the way, which you should."}
      </p>

      <h2>{"Stops on the way up"}</h2>
      <ul>
        <li>{"Anima garden: a sculpture and botanical garden created by the Austrian artist André Heller, on the road out of Marrakech with the Atlas in view."}</li>
        <li>{"Tnine Ourika: the market town at the mouth of the valley. Its weekly souk is on Monday, when villagers come down to trade produce and livestock."}</li>
        <li>{"Cooperatives: women's cooperatives along the road sell argan oil, herbs and cosmetics and often show how argan is pressed."}</li>
        <li>{"A traditional Berber house: some families open their homes for mint tea and a look at mountain village life."}</li>
        <li>{"Riverside restaurants: higher up, cafés put tables and cushions right beside, and sometimes in, the shallow river."}</li>
      </ul>

      <h2>{"The Setti Fatma waterfalls"}</h2>
      <p>
        {"Setti Fatma is the end of the road and the start of the valley's best-known walk, up a side gorge to a series of waterfalls. The first falls take about 20 to 30 minutes on foot, with rocky sections where you use your hands. The higher falls take longer and the path gets rougher."}
      </p>
      <p>
        {"Guides wait where the path starts; agree the price before you set off. Wear shoes with grip rather than sandals, and skip the higher falls if you are not comfortable on wet rock."}
      </p>

      <h2>{"Best time to visit"}</h2>
      <ul>
        <li>{"Spring (February to April): fruit trees in blossom, green terraces and snow still on the peaks. The prettiest season."}</li>
        <li>{"Summer (June to September): noticeably cooler than Marrakech, but busy with local families, especially on weekends."}</li>
        <li>{"Autumn and winter: quiet and clear, with chilly mornings. Bring a warm layer."}</li>
      </ul>
      <p>
        {"One safety note: the Ourika river can rise very fast after heavy rain or a mountain storm, and the valley has a history of sudden floods. If rain is forecast, stay off the riverbed, follow local advice and let your driver adjust the plan."}
      </p>

      <h2>{"Half day or full day?"}</h2>
      <p>
        {"A half day covers the drive, the first waterfall and a drink by the river. A full day lets you go at a gentle pace: the Anima garden in the morning, a cooperative or village visit, lunch by the water and a longer walk above Setti Fatma, back in Marrakech by late afternoon."}
      </p>

      <h2>{"How to get to the Ourika Valley"}</h2>
      <h3>{"Group tour"}</h3>
      <p>{"Shared minibus tours are cheap but follow a fixed schedule, often with long shopping stops, and you share the day with strangers."}</p>
      <h3>{"Shared grand taxi"}</h3>
      <p>{"Shared taxis run from Marrakech to the valley for very little, but you wait for the car to fill, sit six to a car, and have to find a ride back."}</p>
      <h3>{"Private driver"}</h3>
      <p>
        {`Your own driver picks you up at your riad or hotel, stops wherever you like and waits while you walk and eat. A return day trip starts at €140 per vehicle, and a one-way transfer is €${oneWay}. The price is for the whole car, not per person. See the `}
        <Link href="/transfers/marrakech-to-ourika-valley">{"Marrakech to Ourika transfer"}</Link>
        {" or our "}
        <Link href="/day-trips">{"day trips"}</Link>
        {" page. Short on time? Pair the valley with a sunset in the "}
        <Link href="/blog/agafay-desert">{"Agafay Desert"}</Link>
        {" on another day."}
      </p>

      <h2>{"Tips before you go"}</h2>
      <ul>
        <li>{"Bring cash in dirhams: card machines and ATMs are scarce in the upper valley."}</li>
        <li>{"Wear shoes with grip for the waterfalls and pack a layer; it is cooler up the valley."}</li>
        <li>{"Go early on a weekday to avoid weekend crowds at Setti Fatma."}</li>
        <li>{"Agree prices for guides, lunch and cooperative visits before you start."}</li>
      </ul>
    </GuidePost>
  );
}
