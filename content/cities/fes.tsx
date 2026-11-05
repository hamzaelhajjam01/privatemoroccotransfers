import Fleet from "@/components/Fleet";
import Link from "next/link";

export const title = "Private Driver in Fes, Morocco | Private Morocco Transfers";
export const description = "Professional private driver in Fes, Morocco. Fixed prices for airport transfers, city-to-city and day trips. The Ancient Medina.";

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
              {"Private Driver in Fes"}
            </span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {"The Ancient Medina"}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {"Private Driver"}
            <br />
            {"in Fes"}
          </h1>
          <p className="hero-sub">
            {"Fes el-Bali is the world's oldest living medieval city — a UNESCO World Heritage medina of tangled alleys, ancient madrasas and the famous leather tanneries. Our Fes-based drivers know the city intimately."}
          </p>
          <div className="booking-widget" style={{ marginTop: "48px" }}>
            <h3 className="widget-question">
              {"Get your fixed price"}
            </h3>
            <form id="bookingWidget">
              <label className="field-label">
                {"From"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="e.g. Fes Airport (FEZ)" />
              <label className="field-label">
                {"To"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="e.g. Your Hotel in Fes" />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Date"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passengers"}
                  </label>
                  <select className="field-input calc-select" name="passengers">
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
                {"Transfers from Fes"}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/transfers" className="btn btn-gold">{"View All Transfers"}</Link>
              <Link href="/calculator" className="btn btn-outline">{"Calculator"}</Link>
            </div>
          </div>
          <div className="routes-grid">
            <Link href="/transfers/fes-to-chefchaouen" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Fes → Chefchaouen"}</h3>
              <div className="route-meta"><span>{"200 km"}</span></div>
              <div className="route-price">{"€195 (2,145 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/fes-to-casablanca-airport" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Fes → Casablanca Airport"}</h3>
              <div className="route-meta"><span>{"290 km"}</span></div>
              <div className="route-price">{"€185 (2,035 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/fes-to-marrakech" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Fes → Marrakech"}</h3>
              <div className="route-meta"><span>{"530 km"}</span></div>
              <div className="route-price">{"€264 (2,904 MAD) "}<span>{"/ vehicle"}</span></div>
            </Link>
            <Link href="/transfers/fes-airport-to-fes" className="route-card" style={{ display: "block", textDecoration: "none" }}>
              <p className="route-from-to">{"Direct Private Transfer"}</p>
              <h3 className="route-name">{"Fes Airport → Medina"}</h3>
              <div className="route-meta"><span>{"15 km"}</span></div>
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
                {"About Fes"}
              </h2>
            </div>
          </div>
          <div className="grid-2" style={{ gap: "60px", alignItems: "start" }}>
            <div>
              <p className="body-lg">
                {"Fes el-Bali is the world's oldest living medieval city — a UNESCO World Heritage medina of tangled alleys, ancient madrasas and the famous leather tanneries. Our Fes-based drivers know the city intimately."}
              </p>
              <p className="mt-16" style={{ color: "var(--grey-700)" }}>
                {"Our local drivers know Fes and the surrounding region intimately. Whether you need an airport pickup, a city tour, or a long-distance transfer, we provide a professional fixed-price service."}
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn btn-black" data-wa="Hello, I need a private driver in Fes.">
                  {"Book in Fes"}
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
                    {"How much does a private driver cost in Fes?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Airport transfers in Fes start from €30 (330 MAD) for a comfort sedan. City-to-city transfers are priced by route — use our calculator or ask us on WhatsApp."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Do you cover Fes Airport (FEZ)?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We provide professional meet-and-greet airport transfers from Fes Airport (FEZ) to any hotel, riad or address in the city and surrounding region."}
                  </div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">
                    {"Can I book a day trip from Fes?"}
                    <span className="faq-icon">
                      {"+"}
                    </span>
                  </div>
                  <div className="faq-answer">
                    {"Yes. We offer day trips and excursions from Fes to surrounding destinations. Contact us on WhatsApp for availability and pricing."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section fleet-section">
        <div className="wrap">
          <Fleet city="Fes" heading="Vehicles in Fes" />
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Book a driver in Fes"}
          </h2>
          <p>
            {"Fixed price confirmed on WhatsApp within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I need a private driver in Fes.">
              {"Book on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
