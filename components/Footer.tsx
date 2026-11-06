"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

export default function Footer() {
  const pathname = usePathname();
  const isFr = pathname?.startsWith("/fr");

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Column 1: Core Services */}
        <div className="footer-col">
          <h4>{isFr ? "Services" : "Services"}</h4>
          <ul>
            <li>
              <Link href={isFr ? "/fr/airport-transfers" : "/airport-transfers"}>
                {isFr ? "Transferts Aéroport" : "Airport Transfers"}
              </Link>
            </li>
            <li>
              <Link href={isFr ? "/fr/city-to-city" : "/city-to-city"}>
                {isFr ? "Liaisons Ville à Ville" : "City-to-City Transfers"}
              </Link>
            </li>
            <li>
              <Link href={isFr ? "/fr/day-trips" : "/day-trips"}>
                {isFr ? "Excursions d'une Journée" : "Day Trips & Excursions"}
              </Link>
            </li>
            <li>
              <Link href="/multi-day-tours">
                {isFr ? "Circuits Privés & Désert" : "Multi-Day Private Tours"}
              </Link>
            </li>
            <li>
              <Link href={isFr ? "/fr/transfers" : "/transfers"}>
                {isFr ? "Toutes les Liaisons & Tarifs" : "All Routes & Fixed Rates"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Company & Tools */}
        <div className="footer-col">
          <h4>{isFr ? "Entreprise" : "Company"}</h4>
          <ul>
            <li>
              <Link href="/fleet">
                {isFr ? "Notre Flotte" : "Fleet & Vehicles"}
              </Link>
            </li>
            <li>
              <Link href={isFr ? "/fr/calculator" : "/calculator"}>
                {isFr ? "Calculateur de Tarif" : "Price Calculator"}
              </Link>
            </li>
            <li>
              <Link href="/blog">
                {isFr ? "Journal de Voyage" : "Travel Journal"}
              </Link>
            </li>
            <li>
              <Link href="/about">
                {isFr ? "À Propos de Nous" : "About Us"}
              </Link>
            </li>
            <li>
              <Link href="/become-a-driver">
                {isFr ? "Devenir Chauffeur Partenaire" : "Become a Driver"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Major Cities */}
        <div className="footer-col">
          <h4>{isFr ? "Villes" : "Cities"}</h4>
          <ul>
            <li>
              <Link href="/cities/marrakech">Marrakech</Link>
            </li>
            <li>
              <Link href="/cities/casablanca">Casablanca</Link>
            </li>
            <li>
              <Link href="/cities/agadir">Agadir</Link>
            </li>
            <li>
              <Link href="/cities/fes">{isFr ? "Fès" : "Fes"}</Link>
            </li>
            <li>
              <Link href="/cities/tangier">{isFr ? "Tanger" : "Tangier"}</Link>
            </li>
            <li>
              <Link href="/cities/rabat">Rabat</Link>
            </li>
            <li>
              <Link href="/cities/essaouira">Essaouira</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Partner */}
        <div className="footer-col">
          <h4>{isFr ? "Contact" : "Get in Touch"}</h4>
          <ul>
            <li>
              <a
                href={
                  isFr
                    ? "https://wa.me/212760426269?text=Bonjour%20Private%20Morocco%20Transfers!"
                    : "https://wa.me/212760426269?text=Hello%20Private%20Morocco%20Transfers!"
                }
                target="_blank"
                rel="noopener"
              >
                <Icon name="whatsapp" size={16} />
                {"WhatsApp +212 760 426 269"}
              </a>
            </li>
            <li>
              <a href="mailto:contact@privatemoroccotransfers.com">
                <Icon name="mail" size={16} />
                {"contact@privatemoroccotransfers.com"}
              </a>
            </li>
            <li>
              <Link href={isFr ? "/fr/contact" : "/contact"}>
                <Icon name="map-pin" size={16} />
                {"Marrakech & Casablanca, Morocco"}
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <Icon name="shield-check" size={16} />
                {isFr ? "Questions Fréquentes (FAQ)" : "FAQ & Help Center"}
              </Link>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href="https://roammorocco.tours"
              target="_blank"
              rel="noopener"
              title="Desert Tours Partner"
            >
              {isFr ? "Partenaire : Roam Morocco Tours ↗" : "Partner: Roam Morocco Tours ↗"}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-wordmark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-gold.svg"
          alt="Private Morocco Transfers"
          width={1128}
          height={204}
        />
      </div>

      <div className="footer-bottom">
        <span>
          {isFr
            ? "© 2026 Private Morocco Transfers · Chauffeurs Agréés · Prix Fixes Garantis"
            : "© 2026 Private Morocco Transfers · Licensed Chauffeurs · Guaranteed Flat Rates"}
        </span>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/terms">{isFr ? "Conditions" : "Terms"}</Link>
          <Link href="/privacy">{isFr ? "Confidentialité" : "Privacy"}</Link>
          <Link href="/cookie">{isFr ? "Cookies" : "Cookies"}</Link>
          <Link href="/cancellation">{isFr ? "Annulation" : "Cancellation"}</Link>
          <Link href="/support">{isFr ? "Support" : "Support"}</Link>
        </div>
      </div>
    </footer>
  );
}
