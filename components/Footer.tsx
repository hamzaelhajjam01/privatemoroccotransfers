"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { getLangFromPathname, LanguageCode } from "@/lib/i18n";
import { WHATSAPP_NUMBER } from "@/lib/site";

const FOOTER_I18N: Record<
  LanguageCode,
  {
    colServices: string;
    colCompany: string;
    colCities: string;
    colContact: string;
    airportTransfers: string;
    cityToCity: string;
    dayTrips: string;
    privateTours: string;
    allRoutes: string;
    fleet: string;
    calculator: string;
    journal: string;
    about: string;
    becomeDriver: string;
    faq: string;
    rights: string;
    waText: string;
    terms: string;
    privacy: string;
    cookies: string;
    cancellation: string;
    support: string;
  }
> = {
  en: {
    colServices: "Services",
    colCompany: "Company",
    colCities: "Cities",
    colContact: "Get in Touch",
    airportTransfers: "Airport Transfers",
    cityToCity: "City-to-City Transfers",
    dayTrips: "Day Trips & Excursions",
    privateTours: "Multi-Day Private Tours",
    allRoutes: "All Routes & Fixed Rates",
    fleet: "Fleet & Vehicles",
    calculator: "Price Calculator",
    journal: "Travel Journal",
    about: "About Us",
    becomeDriver: "Become a Driver",
    faq: "FAQ & Help Center",
    rights: "© 2026 Private Morocco Transfers · Licensed Chauffeurs · Guaranteed Flat Rates",
    waText: "Hello Private Morocco Transfers!",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    cancellation: "Cancellation",
    support: "Support",
  },
  fr: {
    colServices: "Services",
    colCompany: "Entreprise",
    colCities: "Villes",
    colContact: "Contact",
    airportTransfers: "Transferts Aéroport",
    cityToCity: "Liaisons Ville à Ville",
    dayTrips: "Excursions d'une Journée",
    privateTours: "Circuits Privés & Désert",
    allRoutes: "Toutes les Liaisons & Tarifs",
    fleet: "Notre Flotte",
    calculator: "Calculateur de Tarif",
    journal: "Journal de Voyage",
    about: "À Propos de Nous",
    becomeDriver: "Devenir Chauffeur Partenaire",
    faq: "Questions Fréquentes (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Chauffeurs Agréés · Prix Fixes Garantis",
    waText: "Bonjour Private Morocco Transfers!",
    terms: "Conditions",
    privacy: "Confidentialité",
    cookies: "Cookies",
    cancellation: "Annulation",
    support: "Support",
  },
  es: {
    colServices: "Servicios",
    colCompany: "Empresa",
    colCities: "Ciudades",
    colContact: "Contacto",
    airportTransfers: "Traslados de Aeropuerto",
    cityToCity: "Rutas Entre Ciudades",
    dayTrips: "Excursiones de un Día",
    privateTours: "Circuitos y Tours Privados",
    allRoutes: "Todas las Rutas y Tarifas",
    fleet: "Nuestra Flota",
    calculator: "Calculadora de Tarifas",
    journal: "Blog de Viajes",
    about: "Sobre Nosotros",
    becomeDriver: "Ser Conductor Asociado",
    faq: "Preguntas Frecuentes (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Chóferes Profesionales · Tarifas Fijas Garantizadas",
    waText: "¡Hola Private Morocco Transfers!",
    terms: "Términos",
    privacy: "Privacidad",
    cookies: "Cookies",
    cancellation: "Cancelación",
    support: "Soporte",
  },
  it: {
    colServices: "Servizi",
    colCompany: "Azienda",
    colCities: "Città",
    colContact: "Contatto",
    airportTransfers: "Transfer Aeroporto",
    cityToCity: "Collegamenti Tra Città",
    dayTrips: "Escursioni Giornaliere",
    privateTours: "Tour Privati e Deserto",
    allRoutes: "Tutte le Tratte e Tariffe",
    fleet: "La Nostra Flotta",
    calculator: "Calcolatore Tariffe",
    journal: "Blog di Viaggio",
    about: "Chi Siamo",
    becomeDriver: "Diventa Autista Partner",
    faq: "Domande Frequenti (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Autisti Professionisti · Tariffe Fisse Garantite",
    waText: "Buongiorno Private Morocco Transfers!",
    terms: "Termini",
    privacy: "Privacy",
    cookies: "Cookie",
    cancellation: "Cancellazione",
    support: "Assistenza",
  },
  de: {
    colServices: "Leistungen",
    colCompany: "Unternehmen",
    colCities: "Städte",
    colContact: "Kontakt",
    airportTransfers: "Flughafentransfers",
    cityToCity: "Fernstrecken & Stadtfahrten",
    dayTrips: "Tagesausflüge & Touren",
    privateTours: "Mehrtägige Rundreisen",
    allRoutes: "Alle Strecken & Festpreise",
    fleet: "Unsere Fahrzeugflotte",
    calculator: "Tarifrechner",
    journal: "Reisemagazin",
    about: "Über Uns",
    becomeDriver: "Chauffeur-Partner Werden",
    faq: "Häufige Fragen (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Lizenzierte Chauffeure · Feste Pauschalpreise",
    waText: "Guten Tag Private Morocco Transfers!",
    terms: "AGB",
    privacy: "Datenschutz",
    cookies: "Cookies",
    cancellation: "Stornierung",
    support: "Hilfe",
  },
  ar: {
    colServices: "الخدمات",
    colCompany: "عن الشركة",
    colCities: "المدن",
    colContact: "تواصل معنا",
    airportTransfers: "استقبال وتوصيل المطارات",
    cityToCity: "التنقل بين المدن",
    dayTrips: "رحلات وجولات يومية",
    privateTours: "جولات سياحية وصحراوية",
    allRoutes: "كافة خطوط السير والأسعار",
    fleet: "أسطول السيارات",
    calculator: "حاسبة الأسعار",
    journal: "مجلة السفر",
    about: "من نحن",
    becomeDriver: "انضم كشريك سائق",
    faq: "الأسئلة الشائعة",
    rights: "© 2026 Private Morocco Transfers · سائقون محترفون ومرخصون · أسعار ثابتة ومضمونة",
    waText: "السلام عليكم Private Morocco Transfers!",
    terms: "الشروط",
    privacy: "الخصوصية",
    cookies: "ملفات تعريف الارتباط",
    cancellation: "سياسة الإلغاء",
    support: "الدعم الفني",
  },
  pt: {
    colServices: "Serviços",
    colCompany: "Empresa",
    colCities: "Cidades",
    colContact: "Contacto",
    airportTransfers: "Transfers de Aeroporto",
    cityToCity: "Viagens Entre Cidades",
    dayTrips: "Passeios de um Dia",
    privateTours: "Circuitos Privados e Deserto",
    allRoutes: "Todas as Rotas e Preços",
    fleet: "A Nossa Frota",
    calculator: "Calculadora de Preços",
    journal: "Blog de Viagens",
    about: "Sobre Nós",
    becomeDriver: "Seja um Motorista Parceiro",
    faq: "Perguntas Frequentes (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Motoristas Licenciados · Tarifas Fixas Garantidas",
    waText: "Olá Private Morocco Transfers!",
    terms: "Termos",
    privacy: "Privacidade",
    cookies: "Cookies",
    cancellation: "Cancelamento",
    support: "Apoio ao Cliente",
  },
  nl: {
    colServices: "Diensten",
    colCompany: "Bedrijf",
    colCities: "Steden",
    colContact: "Contact",
    airportTransfers: "Luchthaventransfers",
    cityToCity: "Stad naar Stad Vervoer",
    dayTrips: "Dagtochten & Excursies",
    privateTours: "Meerdaagse Rondreizen",
    allRoutes: "Alle Routes & Vaste Prijzen",
    fleet: "Onze Voertuigen",
    calculator: "Tarieven Calculator",
    journal: "Reisblog",
    about: "Over Ons",
    becomeDriver: "Word Partner Chauffeur",
    faq: "Veelgestelde Vragen (FAQ)",
    rights: "© 2026 Private Morocco Transfers · Gediplomeerde Chauffeurs · Gegarandeerde Vaste Tarieven",
    waText: "Hallo Private Morocco Transfers!",
    terms: "Voorwaarden",
    privacy: "Privacy",
    cookies: "Cookies",
    cancellation: "Annuleren",
    support: "Klantenservice",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const currentLang = getLangFromPathname(pathname);
  const t = FOOTER_I18N[currentLang] || FOOTER_I18N.en;

  const getUrl = (path: string) => {
    if (currentLang === "en") return path;
    return `/${currentLang}${path}`;
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Column 1: Core Services */}
        <div className="footer-col">
          <h4>{t.colServices}</h4>
          <ul>
            <li>
              <Link href={getUrl("/airport-transfers")}>{t.airportTransfers}</Link>
            </li>
            <li>
              <Link href={getUrl("/city-to-city")}>{t.cityToCity}</Link>
            </li>
            <li>
              <Link href={getUrl("/day-trips")}>{t.dayTrips}</Link>
            </li>
            <li>
              <Link href="/multi-day-tours">{t.privateTours}</Link>
            </li>
            <li>
              <Link href={getUrl("/transfers")}>{t.allRoutes}</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Company & Tools */}
        <div className="footer-col">
          <h4>{t.colCompany}</h4>
          <ul>
            <li>
              <Link href={getUrl("/fleet")}>{t.fleet}</Link>
            </li>
            <li>
              <Link href={getUrl("/calculator")}>{t.calculator}</Link>
            </li>
            <li>
              <Link href="/blog">{t.journal}</Link>
            </li>
            <li>
              <Link href={getUrl("/about")}>{t.about}</Link>
            </li>
            <li>
              <Link href="/become-a-driver">{t.becomeDriver}</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Major Cities */}
        <div className="footer-col">
          <h4>{t.colCities}</h4>
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
              <Link href="/cities/fes">Fes</Link>
            </li>
            <li>
              <Link href="/cities/tangier">Tangier</Link>
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
          <h4>{t.colContact}</h4>
          <ul>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waText)}`}
                target="_blank"
                rel="noopener"
              >
                <Icon name="whatsapp" size={16} />
                {`WhatsApp +${WHATSAPP_NUMBER}`}
              </a>
            </li>
            <li>
              <a href="mailto:contact@privatemoroccotransfers.com">
                <Icon name="mail" size={16} />
                {"contact@privatemoroccotransfers.com"}
              </a>
            </li>
            <li>
              <Link href={getUrl("/contact")}>
                <Icon name="map-pin" size={16} />
                {"Marrakech & Casablanca, Morocco"}
              </Link>
            </li>
            <li>
              <Link href={getUrl("/faq")}>
                <Icon name="shield-check" size={16} />
                {t.faq}
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
              {"Partner: Roam Morocco Tours ↗"}
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
        <span>{t.rights}</span>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/terms">{t.terms}</Link>
          <Link href="/privacy">{t.privacy}</Link>
          <Link href="/cookie">{t.cookies}</Link>
          <Link href="/cancellation">{t.cancellation}</Link>
          <Link href="/support">{t.support}</Link>
        </div>
      </div>
    </footer>
  );
}
