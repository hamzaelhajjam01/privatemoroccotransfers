import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | Private Morocco Transfers" },
  description: "Terms and conditions for booking a private driver with Private Morocco Transfers.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
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
              {"Terms & Conditions"}
            </span>
          </div>
          <h1 className="heading-xl mt-24" style={{ color: "var(--white)" }}>
            {"Terms & Conditions"}
          </h1>
          <p className="hero-sub">
            {"Our terms and conditions of service."}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <h2>
              {"1. Introduction"}
            </h2>
            <p>
              {"These terms and conditions govern the use of Private Morocco Transfers services. By booking a transfer or tour with us, you agree to these terms."}
            </p>
            <h2>
              {"2. Bookings"}
            </h2>
            <p>
              {"Bookings are confirmed upon receipt of a booking confirmation via WhatsApp. Fixed prices quoted are valid for 48 hours from the time of quotation."}
            </p>
            <h2>
              {"3. Pricing"}
            </h2>
            <p>
              {"All prices are fixed and agreed before the journey begins. Prices include driver, vehicle, fuel, tolls and A/C unless otherwise stated."}
            </p>
            <h2>
              {"4. Payment"}
            </h2>
            <p>
              {"Transfers and day trips under €300 require zero deposit and are paid directly to the driver at the end of the journey in Moroccan Dirhams (MAD) or Euros. Bookings exceeding €300 require a 30% confirmation deposit."}
            </p>
            <h2>
              {"5. Cancellation"}
            </h2>
            <p>
              {"See our "}
              <Link href="/cancellation" style={{ color: "var(--gold-deep)" }}>
                {"Cancellation Policy"}
              </Link>
              {" for full details."}
            </p>
            <h2>
              {"6. Liability"}
            </h2>
            <p>
              {"Private Morocco Transfers operates as a booking platform connecting travelers with independent professional drivers. Our liability is limited to the value of the booking."}
            </p>
            <h2>
              {"7. Contact"}
            </h2>
            <p>
              {"For any questions regarding these terms, contact us at contact@privatemoroccotransfers.com."}
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
