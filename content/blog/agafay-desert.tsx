import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

const oneWay = (routeData as { slug: string; price_sedan: number }[]).find((r) => r.slug === "marrakech-to-agafay-desert")?.price_sedan ?? 85;

export const title = "Agafay Desert from Marrakech: Day Trip, Camps & How to Get There | Private Morocco Transfers";
export const description = `Agafay Desert guide: a stone desert 45 minutes from Marrakech. What to do, sunset and overnight camps, how to get there, and private driver prices from €${oneWay}.`;

export const faqs: GuideFaq[] = [
  {
    q: "How far is the Agafay Desert from Marrakech?",
    a: "About 30 to 40 km south-west of the city, which is roughly 45 minutes to an hour by car depending on where your camp is. It is the closest desert landscape to Marrakech, so it fits easily into an afternoon.",
  },
  {
    q: "Is the Agafay Desert worth it?",
    a: "Yes, if you have limited time and want open space, silence and a sunset over the Atlas Mountains without a long drive. Go knowing it is a stone desert of bare hills, not sand dunes. If golden dunes are the goal, plan two or three days for Merzouga instead.",
  },
  {
    q: "Is Agafay the Sahara?",
    a: "No. Agafay is a rocky plateau near Marrakech. The Sahara's big sand dunes, Erg Chebbi near Merzouga and Erg Chigaga near M'Hamid, are roughly 7 to 10 hours' drive away on the other side of the High Atlas.",
  },
  {
    q: "Can I stay overnight in the Agafay Desert?",
    a: "Yes. Dozens of camps range from simple tents to luxury lodges with pools, and most serve dinner with music around a fire. Book the camp first, then a one-way transfer each way so you are not tied to the camp's shuttle times.",
  },
  {
    q: "Can you drive to the Agafay Desert yourself?",
    a: "You can, but the last part to many camps is an unmarked, unlit track, and finding it after dark is the hard part. Most visitors take the camp's shuttle or a private driver who knows the camps, especially for a sunset dinner that ends late.",
  },
  {
    q: "How much is a taxi to the Agafay Desert?",
    a: `With Private Morocco Transfers, a private one-way transfer from Marrakech is €${oneWay} per vehicle (1 to 4 passengers), and a return trip with the driver waiting from the afternoon until after sunset starts at €140 per vehicle. Prices are fixed, with no meter and no haggling.`,
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Day Trips"
      h1="Agafay Desert from Marrakech: Day Trip, Camps & How to Get There"
      date="2026-11-14"
      readTime="7 min read"
      image="/img/blog/agafay-desert.webp"
      imageAlt="Bare, rolling stone hills of the Agafay Desert with a dirt track and the High Atlas Mountains behind"
      imageCredit={{ name: "Chloé Lefleur", url: "https://unsplash.com/photos/a-view-of-a-desert-landscape-with-mountains-in-the-distance-jMb3w4jsorA" }}
      faqs={faqs}
      cta={{
        title: "Heading to the Agafay Desert?",
        sub: `Fixed price from €${oneWay} one way per vehicle, or €140 for a return trip with the driver waiting.`,
        routeHref: "/transfers/marrakech-to-agafay-desert",
        routeLabel: "View Agafay Transfer",
        wa: "Hello! I read your Agafay Desert guide and would like a private driver to Agafay.",
      }}
      related={[
        { href: "/blog/ourika-valley", img: "/img/blog/ourika-valley.webp", tag: "Day Trips", title: "Ourika Valley Day Trip from Marrakech", excerpt: "Waterfalls, riverside lunch and Berber villages, an hour from the city.", date: "2026-11-14" },
        { href: "/blog/sahara-merzouga", img: "/img/blog/sahara-merzouga.webp", tag: "Route Guides", title: "Marrakech to Merzouga: Private Driver Guide", excerpt: "For real Sahara dunes: the route to Erg Chebbi.", date: "2026-10-15" },
        { href: "/blog/day-trips", img: "/img/blog/day-trips.webp", tag: "Morocco Tips", title: "Top 7 Day Trips from Marrakech with a Private Driver", excerpt: "The best day excursions from Marrakech.", date: "2026-10-20" },
      ]}
    >
      <p>
        {"The Agafay Desert is the quickest way out of Marrakech's noise and into open country. In under an hour you swap the souks for bare, rolling hills, wide skies and, on a clear day, the snow-capped High Atlas on the horizon. This guide covers what Agafay actually is, what to do there, the best time to go, and how to get there and back without depending on a camp shuttle."}
      </p>

      <h2>{"What is the Agafay Desert?"}</h2>
      <p>
        {"Agafay is a stone desert: a rocky plateau of beige and pinkish hills south-west of Marrakech, close to the Lalla Takerkoust lake. There are no towering sand dunes here. What you get instead is a lunar, almost silent landscape that glows at sunset, with the Atlas Mountains as a backdrop for most of the year."}
      </p>
      <p>
        {"That difference matters when you plan. If your heart is set on sleeping among golden dunes, Agafay is not that trip; the Sahara is a two- or three-day journey (see our "}
        <Link href="/blog/sahara-merzouga">{"Marrakech to Merzouga guide"}</Link>
        {"). If you want a desert evening without losing two days on the road, Agafay is the answer."}
      </p>

      <h2>{"How far is Agafay from Marrakech?"}</h2>
      <p>
        {"Agafay lies about 30 to 40 km from the city, which takes roughly 45 minutes to an hour by car. Most of the drive is on paved road past olive groves and villages; the final stretch to many camps is an unpaved track. Pickup from the Medina, Guéliz, the Palmeraie or Marrakech Airport all work."}
      </p>

      <h2>{"Things to do in the Agafay Desert"}</h2>
      <ul>
        <li>{"Camel ride at golden hour: usually 30 to 60 minutes across the hills, timed for the light before sunset."}</li>
        <li>{"Quad bike or buggy: the hard, rocky ground suits motorised tours. Book with a licensed operator and ask what safety gear is included."}</li>
        <li>{"Sunset dinner: most camps serve a set Moroccan dinner (tagine, salads, mint tea) with live music and a fire."}</li>
        <li>{"Pool and lunch day pass: several lodges sell daytime access to their pool with lunch, a good option in warm months."}</li>
        <li>{"Stargazing: away from city lights, the night sky is far brighter than in Marrakech."}</li>
        <li>{"Lalla Takerkoust lake: a short detour on the way for a lakeside view or a drink with the Atlas behind the water."}</li>
      </ul>

      <h2>{"Best time to visit"}</h2>
      <p>
        {"October to April brings comfortable days and clear skies, though desert nights get cold: bring a warm layer even if Marrakech felt hot at lunchtime. From June to August the middle of the day is very hot, so go in the late afternoon and stay for sunset and dinner. Whatever the month, the light is best in the last hour before sunset."}
      </p>

      <h2>{"A simple afternoon plan"}</h2>
      <ul>
        <li>{"Around 3:00 pm: pickup at your riad or hotel in Marrakech."}</li>
        <li>{"Short stop at Lalla Takerkoust lake for photos."}</li>
        <li>{"Late afternoon: arrive at your camp, mint tea, then a camel or quad ride before sunset."}</li>
        <li>{"Sunset and dinner at the camp."}</li>
        <li>{"After dinner: your driver brings you back to your door in Marrakech."}</li>
      </ul>
      <p>{"Shift everything about an hour earlier in winter, when the sun sets sooner."}</p>

      <h2>{"Day trip or overnight?"}</h2>
      <p>
        {"An afternoon to after-dinner trip is enough to see Agafay at its best. Staying the night adds the stars and a quiet sunrise, and camps range from simple tents to lodges with private bathrooms and pools. If you stay over, book a one-way transfer out and another back the next day, so you leave when you want rather than when the camp's shuttle does."}
      </p>

      <h2>{"How to get to Agafay"}</h2>
      <h3>{"Camp shuttle"}</h3>
      <p>{"Many camps sell a package with a shared minibus from a meeting point in Marrakech. It is convenient but runs on the camp's timetable, and the shuttle often collects guests from several hotels."}</p>
      <h3>{"Drive yourself"}</h3>
      <p>{"Possible with a rental car, but the tracks to camps are poorly signed and unlit, and finding them after dark is the tricky part."}</p>
      <h3>{"Private driver"}</h3>
      <p>
        {`A private transfer from Marrakech to Agafay costs €${oneWay} per vehicle one way (1 to 4 passengers), or from €140 for a return trip with the driver waiting while you ride, eat and watch the sunset. You choose the departure time, can stop at the lake, and are driven back to your door. Prices are fixed and include fuel and tolls. See the `}
        <Link href="/transfers/marrakech-to-agafay-desert">{"Marrakech to Agafay transfer"}</Link>
        {" or our "}
        <Link href="/day-trips">{"day trips"}</Link>
        {" page."}
      </p>

      <h2>{"Tips before you go"}</h2>
      <ul>
        <li>{"Bring a warm layer for the evening, sunglasses and closed shoes for rocky ground."}</li>
        <li>{"Carry some cash in dirhams for tips and extras; card machines are not guaranteed at camps."}</li>
        <li>{"Confirm with your camp whether activities, dinner and drinks are included in the price."}</li>
        <li>{"Agree on your return time with your driver before dinner starts."}</li>
      </ul>
    </GuidePost>
  );
}
