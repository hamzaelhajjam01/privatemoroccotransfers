import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Cancellation Policy | Private Morocco Transfers" },
  description: "Free cancellation up to 48 hours before pickup. Full cancellation policy for private driver bookings in Morocco.",
};

export default function CancellationPage() {
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
              {"Cancellation Policy"}
            </span>
          </div>
          <h1 className="heading-xl mt-24" style={{ color: "var(--white)" }}>
            {"Cancellation Policy"}
          </h1>
          <p className="hero-sub">
            {"Our free cancellation policy for private driver bookings."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <h2>
              {"Free Cancellation"}
            </h2>
            <p>
              {"Cancellations made more than 48 hours before the scheduled pickup time are free of charge. No cancellation fee applies."}
            </p>
            <h2>
              {"Late Cancellations"}
            </h2>
            <p>
              {"Cancellations made within 48 hours of the scheduled pickup time may be subject to a cancellation fee of up to 50% of the booking value."}
            </p>
            <h2>
              {"Same-Day Cancellations"}
            </h2>
            <p>
              {"Cancellations made on the day of travel or less than 4 hours before pickup are subject to a 100% cancellation fee."}
            </p>
            <h2>
              {"How to Cancel"}
            </h2>
            <p>
              {"To cancel a booking, contact us via WhatsApp or email at contact@privatemoroccotransfers.com with your booking reference and name."}
            </p>
            <h2>
              {"Refunds"}
            </h2>
            <p>
              {"As payment is made directly to the driver at the end of the journey, no refunds are processed. Cancellation fees, where applicable, are invoiced separately."}
            </p>
            <h2>
              {"Flight Delays & Force Majeure"}
            </h2>
            <p>
              {"In case of flight delays, we adjust your pickup time at no extra cost. In case of force majeure events, we will work with you to reschedule or refund where possible."}
            </p>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">
            {"Questions?"}
          </h2>
          <p>
            {"Contact us on WhatsApp — we reply within 2 hours."}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa="Hello, I have a question about your policies.">
              {"Ask on WhatsApp"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
