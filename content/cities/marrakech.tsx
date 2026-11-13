import Fleet from "@/components/Fleet";
import Link from "next/link";

export const title = "Private Driver in Marrakech, Morocco | Private Morocco Transfers";
export const description = "Professional private driver in Marrakech, Morocco. Fixed prices for airport transfers, city-to-city and day trips. The Red City.";

export default function Content() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              {"Home"}
            </Link>
            <span className="breadcrumb-sep">
              {"/"}
            </span>
            <span>
              {"Private Driver in Marrakech"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"The Red City"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Private Driver"}
            <br />
            {"in Marrakech"}
          </h1>
          <p className="hero-sub">
            {"Home to over 15 million visitors a year, Marrakech is Morocco's most visited destination. The ancient medina, the Djemaa el-Fna square, the Majorelle Garden and the souks make it an endlessly fascinating city. Our drivers are based here and know every corner."}
          </p>
          <div className="booking-widget" style={{ marginTop: "48px" }}>
            <h2 className="widget-question">
              {"Get your fixed price"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label" htmlFor="bw-from">
                {"From"}
              </label>
              <input id="bw-from" className="field-input" name="from" type="text" placeholder="e.g. Marrakech Airport (RAK)" />
              <label className="field-label" htmlFor="bw-to">
                {"To"}
              </label>
              <input id="bw-to" className="field-input" name="to" type="text" placeholder="e.g. Your Hotel in Marrakech" />
              <div className="field-row">
                <div>
                  <label className="field-label" htmlFor="bw-date">
                    {"Date"}
                  </label>
                  <input id="bw-date" className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label" htmlFor="bw-passengers">
                    {"Passengers"}
                  </label>
                  <select id="bw-passengers" className="field-input calc-select" name="passengers">
                    <option>
                      {"1–3 (Sedan)"}
                    </option>
                    <option>
                      {"1–5 (SUV)"}
                    </option>
                    <option>
                      {"1–8 (Minivan)"}
                    </option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Get My Fixed Price on WhatsApp"}
              </button>
              <p className="field-note">
                {"Opens WhatsApp with your trip details."}
              </p>
            </form>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Popular Routes"}
              </span>
              <h2 className="heading-lg">
                {"Transfers from Marrakech"}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/transfers" className="btn btn-gold">{"View All Transfers"}</Link>
              <Link href="/calculator" className="btn btn-outline">{"Calculator"}</Link>
            </div>
          </div>
          <div className="routes-grid">
            <Link href="/transfers/marrakech-airport-to-marrakech" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Marrakech Airport → Medina"}</h3>
              <div className="route-meta"><span>{"6 km"}</span></div>
              <div className="route-price">{"€30 (330 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/marrakech-to-essaouira" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Marrakech → Essaouira"}</h3>
              <div className="route-meta"><span>{"180 km"}</span></div>
              <div className="route-price">{"€90 (990 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/marrakech-to-casablanca" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Marrakech → Casablanca"}</h3>
              <div className="route-meta"><span>{"240 km"}</span></div>
              <div className="route-price">{"€150 (1,650 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/marrakech-to-agafay-desert" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Marrakech → Agafay Desert"}</h3>
              <div className="route-meta"><span>{"35 km"}</span></div>
              <div className="route-price">{"€40 (440 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--sand)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">
                {"Local Knowledge"}
              </span>
              <h2 className="heading-lg">
                {"About Marrakech"}
              </h2>
            </div>
          </div>
          <div className="grid-2" style={{ gap: "60px", alignItems: "start" }}>
            <div>
              <p className="body-lg">
                {"Home to over 15 million visitors a year, Marrakech is Morocco's most visited destination. The ancient medina, the Djemaa el-Fna square, the Majorelle Garden and the souks make it an endlessly fascinating city. Our drivers are based here and know every corner."}
              </p>
              <p className="mt-16" style={{ color: "var(--grey-700)" }}>
                {"Our local drivers know Marrakech and the surrounding region intimately. Whether you need an airport pickup, a city tour, or a long-distance transfer, we provide a professional fixed-price service."}
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn btn-black" data-wa="Hello, I need a private driver in Marrakech.">
                  {"Book in Marrakech"}
                </button>
                <Link href="/calculator" className="btn btn-outline">
                  {"Calculate Price"}
                </Link>
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "24px" }}>
              <div className="faq-list">
                <div className="faq-item">
                  <div className="faq-question">
                    {"How much does a private driver cost in Marrakech?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Airport transfers in Marrakech start from €30 (330 MAD) for a comfort sedan. City-to-city transfers are priced by route — use our calculator or ask us on WhatsApp."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Do you cover Marrakech Airport (RAK)?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We provide professional meet-and-greet airport transfers from Marrakech Airport (RAK) to any hotel, riad or address in the city and surrounding region."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I book a day trip from Marrakech?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We offer day trips and excursions from Marrakech to surrounding destinations. Contact us on WhatsApp for availability and pricing."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section fleet-section">
        <div className="wrap">
          <Fleet city="Marrakech" heading="Vehicles in Marrakech" />
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Book a driver in Marrakech"}
          </h2>
          <p>
            {"Fixed price confirmed on WhatsApp within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need a private driver in Marrakech.">
              {"Book on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
