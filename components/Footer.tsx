import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>
            {"Site index"}
          </h4>
          <ul>
            <li>
              <Link href="/">
                {"Home"}
              </Link>
            </li>
            <li>
              <Link href="/transfers">
                {"All Transfers & Rates"}
              </Link>
            </li>
            <li>
              <Link href="/airport-transfers">
                {"Airport Transfers"}
              </Link>
            </li>
            <li>
              <Link href="/city-to-city">
                {"City-to-City"}
              </Link>
            </li>
            <li>
              <Link href="/day-trips">
                {"Day Trips"}
              </Link>
            </li>
            <li>
              <Link href="/multi-day-tours">
                {"Private Tours"}
              </Link>
            </li>
            <li>
              <Link href="/fleet">
                {"Fleet"}
              </Link>
            </li>
            <li>
              <Link href="/calculator">
                {"Price Calculator"}
              </Link>
            </li>
            <li>
              <Link href="/blog">
                {"Journal"}
              </Link>
            </li>
            <li>
              <Link href="/about">
                {"About"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>
            {"Cities"}
          </h4>
          <ul>
            <li>
              <Link href="/cities/marrakech">
                {"Marrakech"}
              </Link>
            </li>
            <li>
              <Link href="/cities/casablanca">
                {"Casablanca"}
              </Link>
            </li>
            <li>
              <Link href="/cities/agadir">
                {"Agadir"}
              </Link>
            </li>
            <li>
              <Link href="/cities/fes">
                {"Fes"}
              </Link>
            </li>
            <li>
              <Link href="/cities/tangier">
                {"Tangier"}
              </Link>
            </li>
            <li>
              <Link href="/cities/rabat">
                {"Rabat"}
              </Link>
            </li>
            <li>
              <Link href="/cities/essaouira">
                {"Essaouira"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>
            {"Legal"}
          </h4>
          <ul>
            <li>
              <Link href="/terms">
                {"Terms & conditions"}
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                {"Privacy policy"}
              </Link>
            </li>
            <li>
              <Link href="/cookie">
                {"Cookie policy"}
              </Link>
            </li>
            <li>
              <Link href="/cancellation">
                {"Cancellation policy"}
              </Link>
            </li>
            <li>
              <Link href="/faq">
                {"FAQ"}
              </Link>
            </li>
            <li>
              <Link href="/support">
                {"Support"}
              </Link>
            </li>
            <li>
              <Link href="/become-a-driver">
                {"Become a driver"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>
            {"Get in touch"}
          </h4>
          <ul>
            <li>
              <a href="https://wa.me/212760426269?text=Hello%20Private%20Morocco%20Transfers!" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={16} />{"WhatsApp +212 760 426 269"}
              </a>
            </li>
            <li>
              <a href="mailto:contact@privatemoroccotransfers.com">
                <Icon name="mail" size={16} />{"contact@privatemoroccotransfers.com"}
              </a>
            </li>
            <li>
              <Link href="/contact">
                <Icon name="map-pin" size={16} />{"Marrakech & Casablanca, Morocco"}
              </Link>
            </li>
          </ul>
          <div className="footer-social">
            <a href="https://roammorocco.tours" target="_blank" rel="noopener" title="Desert Tours Partner">
              {"Roam Morocco Tours ↗"}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-gold.svg" alt="Private Morocco Transfers" width={1128} height={204} />
      </div>
      <div className="footer-bottom">
        <span>
          {"© 2026 Private Morocco Transfers"}
        </span>
        <span>
          {"Fixed prices · Licensed drivers · All of Morocco"}
        </span>
      </div>
    </footer>
  );
}
