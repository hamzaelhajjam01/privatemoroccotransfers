import Fleet from "@/components/Fleet";
import Link from "next/link";

export const title = "Private Driver in Rabat, Morocco | Private Morocco Transfers";
export const description = "Professional private driver in Rabat, Morocco. Fixed prices for airport transfers, city-to-city and day trips. The Capital.";

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
              {"Private Driver in Rabat"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"The Capital"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Private Driver"}
            <br />
            {"in Rabat"}
          </h1>
          <p className="hero-sub">
            {"Morocco's administrative capital is a refined, European-influenced city of wide boulevards, the medieval Chellah ruins and the Kasbah of the Udayas. Our Rabat drivers cover the capital and all intercity routes."}
          </p>
          <div className="booking-widget" style={{ marginTop: "48px" }}>
            <h2 className="widget-question">
              {"Get your fixed price"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label" htmlFor="bw-from">
                {"From"}
              </label>
              <input id="bw-from" className="field-input" name="from" type="text" placeholder="e.g. Rabat Airport (RBA)" />
              <label className="field-label" htmlFor="bw-to">
                {"To"}
              </label>
              <input id="bw-to" className="field-input" name="to" type="text" placeholder="e.g. Your Hotel in Rabat" />
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
                {"Transfers from Rabat"}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/transfers" className="btn btn-gold">{"View All Transfers"}</Link>
              <Link href="/calculator" className="btn btn-outline">{"Calculator"}</Link>
            </div>
          </div>
          <div className="routes-grid">
            <Link href="/transfers/rabat-to-casablanca" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Rabat → Casablanca"}</h3>
              <div className="route-meta"><span>{"90 km"}</span></div>
              <div className="route-price">{"€70 (770 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/rabat-to-casablanca-airport" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Rabat → Casablanca Airport"}</h3>
              <div className="route-meta"><span>{"90 km"}</span></div>
              <div className="route-price">{"€80 (880 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/rabat-to-marrakech" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Rabat → Marrakech"}</h3>
              <div className="route-meta"><span>{"320 km"}</span></div>
              <div className="route-price">{"€195 (2,145 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/rabat-airport-to-rabat" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Rabat Airport → City Center"}</h3>
              <div className="route-meta"><span>{"12 km"}</span></div>
              <div className="route-price">{"€30 (330 MAD) "}<span>{"/ vehicle"}</span></div>
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
                {"About Rabat"}
              </h2>
            </div>
          </div>
          <div className="grid-2" style={{ gap: "60px", alignItems: "start" }}>
            <div>
              <p className="body-lg">
                {"Morocco's administrative capital is a refined, European-influenced city of wide boulevards, the medieval Chellah ruins and the Kasbah of the Udayas. Our Rabat drivers cover the capital and all intercity routes."}
              </p>
              <p className="mt-16" style={{ color: "var(--grey-700)" }}>
                {"Our local drivers know Rabat and the surrounding region intimately. Whether you need an airport pickup, a city tour, or a long-distance transfer, we provide a professional fixed-price service."}
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn btn-black" data-wa="Hello, I need a private driver in Rabat.">
                  {"Book in Rabat"}
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
                    {"How much does a private driver cost in Rabat?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Airport transfers in Rabat start from €30 (330 MAD) for a comfort sedan. City-to-city transfers are priced by route — use our calculator or ask us on WhatsApp."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Do you cover Rabat Airport (RBA)?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We provide professional meet-and-greet airport transfers from Rabat Airport (RBA) to any hotel, riad or address in the city and surrounding region."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I book a day trip from Rabat?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We offer day trips and excursions from Rabat to surrounding destinations. Contact us on WhatsApp for availability and pricing."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section fleet-section">
        <div className="wrap">
          <Fleet city="Rabat" heading="Vehicles in Rabat" />
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Book a driver in Rabat"}
          </h2>
          <p>
            {"Fixed price confirmed on WhatsApp within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need a private driver in Rabat.">
              {"Book on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
