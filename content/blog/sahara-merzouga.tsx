import Link from "next/link";
import GuidePost, { type GuideFaq } from "@/components/GuidePost";
import routeData from "@/content/route-prices.json";

type RoutePrice = { slug: string; price_sedan: number; price_van: number; price_minibus: number };
const routes = routeData as RoutePrice[];
const price = (slug: string) => routes.find((r) => r.slug === slug);
const m = price("marrakech-to-merzouga");
const sedan = m?.price_sedan ?? 405;
const van = m?.price_van ?? 470;
const minibus = m?.price_minibus ?? 660;
const fes = price("fes-to-merzouga")?.price_sedan ?? 295;
const ouarzazate = price("marrakech-to-ouarzazate")?.price_sedan ?? 155;

export const title = "Marrakech to Merzouga: Route, Stops and Private Driver Prices | Private Morocco Transfers";
export const description = `Marrakech to Merzouga: 560 km, 8 to 9 hours via the Atlas, Dades and Todra gorges. One day or two, the best stops, and private driver prices from €${sedan}.`;

export const faqs: GuideFaq[] = [
  {
    q: "How long is the drive from Marrakech to Merzouga?",
    a: "About 560 km, which is 8.5 to 9 hours of driving without long stops. With photo stops, lunch and a visit to Aït Benhaddou it becomes a 10 to 11 hour day, which is why most travellers split it over two days.",
  },
  {
    q: "Can you do Marrakech to Merzouga in one day?",
    a: "Yes, with an early start (around 7 am) you reach Merzouga before sunset. It is a long day in the car, though. Splitting it with a night in the Dades Valley or Ouarzazate area is far more comfortable and lets you see the gorges and kasbahs in daylight.",
  },
  {
    q: "How much is a private driver from Marrakech to Merzouga?",
    a: `A one-way private transfer costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). Prices are per vehicle and include fuel and tolls. Multi-day desert tours with the same driver are quoted on request.`,
  },
  {
    q: "Is it better to go to Merzouga from Marrakech or from Fes?",
    a: `Fes is closer: about 460 km and 7 hours, from €${fes} per sedan, through the Middle Atlas cedar forests and the Ziz Valley. Many travellers enter the desert from one city and leave towards the other, for example Marrakech to Merzouga to Fes.`,
  },
  {
    q: "Do I need a 4x4 to reach Merzouga?",
    a: "No. The road to Merzouga is paved all the way. A 4x4 is only needed to drive into the dunes themselves, and desert camps usually include the camel ride or 4x4 transfer from the edge of the dunes to the camp.",
  },
  {
    q: "What is the best time to visit the Sahara in Morocco?",
    a: "March to May and late September to November, when days are warm and nights are cool. Summer days are very hot (often above 40°C) and winter nights in the desert can drop close to freezing, so bring warm layers from November to February.",
  },
];

export default function Content() {
  return (
    <GuidePost
      category="Route Guides"
      h1="Marrakech to Merzouga: Route, Stops and Private Driver Prices"
      date="2026-10-15"
      readTime="8 min read"
      image="/img/blog/sahara-merzouga.webp"
      imageAlt="Black 4x4 on a desert track below the orange dunes of Erg Chebbi near Merzouga at sunset"
      faqs={faqs}
      cta={{
        title: "Ready for the Sahara?",
        sub: `Fixed price from €${sedan} per vehicle from Marrakech, or ask us for a multi-day desert trip with the same driver.`,
        routeHref: "/transfers/marrakech-to-merzouga",
        routeLabel: "View Route Details",
        wa: "Hello! I read your Marrakech to Merzouga guide and would like a price for a trip to the Sahara.",
      }}
      related={[
        { href: "/blog/day-trips", img: "/img/blog/day-trips-card.webp", tag: "Day Trips", title: "Top 7 Day Trips from Marrakech", excerpt: "Agafay, Aït Benhaddou, Ouzoud and more with a private driver.", date: "2026-10-20" },
        { href: "/blog/driver-cost", img: "/img/blog/driver-cost-card.webp", tag: "Driver FAQ", title: "How Much Does a Private Driver Cost in Morocco?", excerpt: "Prices per route, per day and per vehicle.", date: "2026-10-28" },
        { href: "/blog/fes-tanneries-guide", img: "/img/blog/fes-tanneries-guide-card.webp", tag: "Morocco Tips", title: "Fes Tanneries Guide", excerpt: "Visiting Chouara and the best day trips from Fes.", date: "2026-11-06" },
      ]}
    >
      <p>
        {"Seeing the dunes of Erg Chebbi glow orange at sunset is the moment many travellers come to Morocco for. Getting there from Marrakech is a real road trip: over the High Atlas, past kasbahs and palm oases, through two dramatic gorges and out to the edge of the Sahara near the Algerian border."}
      </p>
      <p>
        <strong>{"In short: "}</strong>
        {`Merzouga is about 560 km and 8.5 to 9 hours of driving from Marrakech, via the Tizi n'Tichka pass, Ouarzazate, the Dades Valley, Tinghir and Erfoud. You can do it in one long day, but two days is better. A private transfer costs from €${sedan} per vehicle; from Fes it is shorter, from €${fes}.`}
      </p>

      <h2>{"The route from Marrakech to Merzouga"}</h2>
      <p>{"The classic route follows the N9 and then the N10 east, roughly in these stages:"}</p>
      <ul>
        <li>{"Marrakech to the Tizi n'Tichka pass (2,260 m): about 2 hours of winding mountain road through Berber villages."}</li>
        <li>{"Down to Aït Benhaddou and Ouarzazate: about 1.5 to 2 hours. Aït Benhaddou is a short detour off the main road."}</li>
        <li>{"Ouarzazate to the Dades Valley (Boumalne Dades): about 2 hours along the Valley of Roses, past Skoura's palm grove and Kalaat M'Gouna."}</li>
        <li>{"Tinghir and the Todra Gorge: 1 hour further, with a 15 km detour into the gorge."}</li>
        <li>{"Tinghir to Erfoud and Merzouga: about 3 hours across open pre-Saharan plains."}</li>
      </ul>
      <p>
        {"From "}
        <Link href="/transfers/fes-to-merzouga">{"Fes to Merzouga"}</Link>
        {` (about 460 km, 7 hours, from €${fes}) the road crosses the Middle Atlas via Ifrane and Midelt and follows the Ziz Valley's palm gorges to Erfoud.`}
      </p>

      <h2>{"One day or two?"}</h2>
      <p>
        {"In one day you leave Marrakech around 7 am, keep stops short and arrive in time for the sunset camel ride. It works if you are short on time, but you will spend most of the day in the car and see the gorges only from the window."}
      </p>
      <p>
        {"Over two days, the first night is usually in the Dades Valley or near Ouarzazate. Day one covers the Atlas, Aït Benhaddou and the Valley of Roses; day two the Todra Gorge and the drive to Merzouga, arriving relaxed in the afternoon. This is the version we recommend."}
      </p>

      <h2>{"What to see on the way"}</h2>
      <ul>
        <li>{"Tizi n'Tichka pass: the highest road pass in Morocco, with sweeping views back over the High Atlas."}</li>
        <li>
          {"Aït Benhaddou: a UNESCO-listed fortified village of earth and straw, used in many films. Allow 1 to 2 hours. See the "}
          <Link href="/transfers/marrakech-to-ait-ben-haddou">{"Marrakech to Aït Benhaddou transfer"}</Link>
          {" if you only want to go this far."}
        </li>
        <li>
          {"Ouarzazate: the film-studio town and the Taourirt Kasbah. A "}
          <Link href="/transfers/marrakech-to-ouarzazate">{`Marrakech to Ouarzazate transfer`}</Link>
          {` costs from €${ouarzazate}.`}
        </li>
        <li>{"Skoura and the Valley of Roses: palm groves, ruined kasbahs and, in May, the rose harvest."}</li>
        <li>{"Dades Gorges: rock formations nicknamed the \"monkey fingers\" and the famous hairpin road at Tissadrine."}</li>
        <li>{"Todra Gorge: canyon walls up to 300 m high and only about 10 m apart at the narrowest point."}</li>
        <li>{"Erfoud and Rissani: fossil workshops and the old caravan town before the final run to the dunes."}</li>
      </ul>

      <h2>{"Private driver prices"}</h2>
      <p>
        {"A fixed-price "}
        <Link href="/transfers/marrakech-to-merzouga">{"Marrakech to Merzouga private transfer"}</Link>
        {` costs €${sedan} per sedan (1 to 4 passengers), €${van} for a van (5 to 7) and €${minibus} for a minibus (8 to 14). Prices are per vehicle, not per person, and include the driver, fuel and tolls. Stops on the way are up to you.`}
      </p>
      <p>
        {"For a two- or three-day trip with the same driver, including the return to Marrakech or onward to Fes, see our "}
        <Link href="/multi-day-tours">{"multi-day tours"}</Link>
        {" or send us your dates for a fixed quote. Multi-day trips over €300 need a 30% deposit; the rest is paid in Morocco."}
      </p>

      <h2>{"What to do in Merzouga"}</h2>
      <ul>
        <li>{"Camel ride at sunset into the Erg Chebbi dunes, which rise to about 150 m."}</li>
        <li>{"A night in a desert camp, from simple Berber tents to luxury camps with private bathrooms."}</li>
        <li>{"Sunrise from the top of a dune: worth the early alarm."}</li>
        <li>{"Sandboarding, 4x4 or quad excursions around the dunes."}</li>
        <li>{"Gnawa music in the village of Khamlia and a visit to the seasonal lake of Dayet Srji."}</li>
      </ul>
      <p>{"Camps are booked separately or through your accommodation; we can recommend trusted ones and drop you where the camp's camels or 4x4 collect you."}</p>

      <h2>{"Short on time? Try Agafay"}</h2>
      <p>
        {"If a two-day trip does not fit, the rocky "}
        <Link href="/blog/agafay-desert">{"Agafay Desert"}</Link>
        {", 45 minutes from Marrakech, gives you a desert sunset and a camp dinner in one afternoon. It has no sand dunes, but it is an easy taste of the desert."}
      </p>

      <h2>{"Quick comparison"}</h2>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--gold)", textAlign: "left" }}>
              <th style={{ padding: "12px 8px" }}>{"Option"}</th>
              <th style={{ padding: "12px 8px" }}>{"Driving time"}</th>
              <th style={{ padding: "12px 8px" }}>{"Price per vehicle"}</th>
              <th style={{ padding: "12px 8px" }}>{"Sand dunes"}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}><Link href="/transfers/marrakech-to-merzouga">{"Marrakech to Merzouga"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"8.5–9h"}</td>
              <td style={{ padding: "12px 8px" }}>{`from €${sedan}`}</td>
              <td style={{ padding: "12px 8px" }}>{"Yes, Erg Chebbi"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 8px" }}><Link href="/transfers/fes-to-merzouga">{"Fes to Merzouga"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"about 7h"}</td>
              <td style={{ padding: "12px 8px" }}>{`from €${fes}`}</td>
              <td style={{ padding: "12px 8px" }}>{"Yes, Erg Chebbi"}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 8px" }}><Link href="/blog/agafay-desert">{"Agafay Desert"}</Link></td>
              <td style={{ padding: "12px 8px" }}>{"45 min"}</td>
              <td style={{ padding: "12px 8px" }}>{"€140 full-day return"}</td>
              <td style={{ padding: "12px 8px" }}>{"No, rocky desert"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{"How to book"}</h2>
      <p>
        {"Send us a WhatsApp message with your travel dates, pickup city (Marrakech or Fes), the number of passengers, and whether you want a one-way transfer, a return or a multi-day trip. We reply with a fixed price for your group and help you plan the overnight stop."}
      </p>
    </GuidePost>
  );
}
