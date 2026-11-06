"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { FLEET_CITIES, listingFor, vehiclesIn, type FleetCity, type Vehicle } from "@/lib/fleet";
import { EUR_RATE } from "@/lib/pricing";
import { openWhatsApp } from "@/lib/site";
import { getLangFromPathname, getLocalizedPlace, LanguageCode } from "@/lib/i18n";

type Props = {
  /** Lock the list to one city (city pages). Omit to show city tabs. */
  city?: FleetCity;
  heading?: string;
  intro?: string;
  /** Slugs that have a photo in public/img/fleet */
  photos?: string[];
};

const FLEET_I18N: Record<
  LanguageCode,
  {
    kicker: (where: string) => string;
    passengers: string;
    bags: string;
    ac: string;
    fixedPrice: string;
    cancellation: string;
    from: string;
    trip: string;
    book: string;
    allCities: string;
    defaultHeading: string;
    defaultIntro: string;
    morocco: string;
    waMsg: (model: string, where: string) => string;
  }
> = {
  en: {
    kicker: (w) => `Private driver · ${w}`,
    passengers: "passengers",
    bags: "bags",
    ac: "A/C",
    fixedPrice: "Fixed price",
    cancellation: "Free cancellation up to 48h",
    from: "From",
    trip: "/ trip",
    book: "Book",
    allCities: "All cities",
    defaultHeading: "Private drivers by city",
    defaultIntro: "Choose your city and vehicle. Every price is fixed per vehicle and includes the driver, fuel, tolls and air conditioning.",
    morocco: "Morocco",
    waMsg: (m, w) => `Hello, I'd like to book a private driver with a ${m} in ${w}. Can you send me a fixed price?`,
  },
  fr: {
    kicker: (w) => `Chauffeur privé · ${w}`,
    passengers: "passagers",
    bags: "valises",
    ac: "Clim",
    fixedPrice: "Prix fixe",
    cancellation: "Annulation gratuite jusqu'à 48h",
    from: "À partir de",
    trip: "/ trajet",
    book: "Réserver",
    allCities: "Toutes les villes",
    defaultHeading: "Chauffeurs privés par ville",
    defaultIntro: "Choisissez votre ville et votre véhicule. Chaque tarif est fixe par véhicule et inclut le chauffeur, le carburant, les péages et la climatisation.",
    morocco: "Maroc",
    waMsg: (m, w) => `Bonjour, je souhaite réserver un chauffeur privé avec un(e) ${m} à ${w}. Pouvez-vous me confirmer le tarif fixe?`,
  },
  es: {
    kicker: (w) => `Chófer privado · ${w}`,
    passengers: "pasajeros",
    bags: "maletas",
    ac: "A/A",
    fixedPrice: "Precio fijo",
    cancellation: "Cancelación gratuita hasta 48h",
    from: "Desde",
    trip: "/ trayecto",
    book: "Reservar",
    allCities: "Todas las ciudades",
    defaultHeading: "Chófer privado por ciudad",
    defaultIntro: "Elija su ciudad y vehículo. Cada tarifa es fija por vehículo e incluye conductor, combustible, peajes y aire acondicionado.",
    morocco: "Marruecos",
    waMsg: (m, w) => `¡Hola! Me gustaría reservar un chófer privado con un ${m} en ${w}. ¿Podrían confirmarme el precio fijo y la disponibilidad?`,
  },
  it: {
    kicker: (w) => `Autista privato · ${w}`,
    passengers: "passeggeri",
    bags: "bagagli",
    ac: "Clima",
    fixedPrice: "Prezzo fisso",
    cancellation: "Cancellazione gratuita fino a 48h",
    from: "Da",
    trip: "/ tratta",
    book: "Prenota",
    allCities: "Tutte le città",
    defaultHeading: "Autisti privati per città",
    defaultIntro: "Scegliete la vostra città e il veicolo. Ogni tariffa è fissa per auto e include autista, carburante, pedaggi e aria condizionata.",
    morocco: "Marocco",
    waMsg: (m, w) => `Buongiorno! Vorrei prenotare un autista privato con un ${m} a ${w}. Potete confermarmi la tariffa fissa?`,
  },
  de: {
    kicker: (w) => `Privatchauffeur · ${w}`,
    passengers: "Passagiere",
    bags: "Gepäckstücke",
    ac: "Klima",
    fixedPrice: "Festpreis",
    cancellation: "Kostenlose Stornierung bis 48 Std.",
    from: "Ab",
    trip: "/ Fahrt",
    book: "Buchen",
    allCities: "Alle Städte",
    defaultHeading: "Privatchauffeur nach Stadt",
    defaultIntro: "Wählen Sie Ihre Stadt und Ihr Wunschfahrzeug. Jeder Preis ist fix pro Fahrzeug inklusive Fahrer, Treibstoff, Maut und Klimaanlage.",
    morocco: "Marokko",
    waMsg: (m, w) => `Guten Tag! Ich möchte einen Privatchauffeur mit einem ${m} in ${w} buchen. Können Sie mir den Festpreis und die Verfügbarkeit bestätigen?`,
  },
  ar: {
    kicker: (w) => `سائق خاص · ${w}`,
    passengers: "ركاب",
    bags: "حقائب",
    ac: "تكييف",
    fixedPrice: "سعر ثابت",
    cancellation: "إلغاء مجاني حتى 48 ساعة",
    from: "ابتداءً من",
    trip: "/ رحلة",
    book: "احجز",
    allCities: "جميع المدن",
    defaultHeading: "خدمة سائق خاص حسب المدينة",
    defaultIntro: "اختر مدينتك وسيارتك المفضلة. جميع الأسعار ثابتة لكل سيارة وتشمل السائق، الوقود، رسوم الطرق السريعة والتكييف.",
    morocco: "المغرب",
    waMsg: (m, w) => `السلام عليكم، أود حجز خدمة سائق خاص بسيارة ${m} في ${w}. هل يمكنكم تأكيد السعر الثابت والتوافر؟`,
  },
  pt: {
    kicker: (w) => `Motorista particular · ${w}`,
    passengers: "passageiros",
    bags: "malas",
    ac: "A/C",
    fixedPrice: "Preço fixo",
    cancellation: "Cancelamento gratuito até 48h",
    from: "A partir de",
    trip: "/ viagem",
    book: "Reservar",
    allCities: "Todas as cidades",
    defaultHeading: "Motoristas particulares por cidade",
    defaultIntro: "Escolha a sua cidade e veículo. Todos os preços são fixos por veículo e incluem motorista, combustível, portagens e ar condicionado.",
    morocco: "Marrocos",
    waMsg: (m, w) => `Olá! Gostaria de reservar um motorista privado com um ${m} em ${w}. Poderiam confirmar a disponibilidade e o preço fixo?`,
  },
  nl: {
    kicker: (w) => `Privé chauffeur · ${w}`,
    passengers: "passagiers",
    bags: "koffers",
    ac: "Airco",
    fixedPrice: "Vaste prijs",
    cancellation: "Gratis annulering tot 48 uur",
    from: "Vanaf",
    trip: "/ rit",
    book: "Boeken",
    allCities: "Alle steden",
    defaultHeading: "Privé chauffeurs per stad",
    defaultIntro: "Kies uw stad en gewenst voertuig. Elke prijs is vast per voertuig inclusief chauffeur, brandstof, tolgelden en airconditioning.",
    morocco: "Marokko",
    waMsg: (m, w) => `Hallo! Ik wil graag een privé chauffeur boeken met een ${m} in ${w}. Kunt u de beschikbaarheid en vaste prijs bevestigen?`,
  },
};

function VehicleCard({
  v,
  city,
  hasPhoto,
  lang,
}: {
  v: Vehicle;
  city: FleetCity | "all";
  hasPhoto: boolean;
  lang: LanguageCode;
}) {
  const t = FLEET_I18N[lang] || FLEET_I18N.en;
  const rawWhere = city === "all" ? t.morocco : city;
  const where = city === "all" ? t.morocco : getLocalizedPlace(rawWhere, lang);
  const photo = v.scene ?? v.image ?? (hasPhoto ? `/img/fleet/${v.slug}.jpg` : undefined);
  const detail = listingFor(v, city);
  const fleetHubUrl = lang === "en" ? "/fleet" : `/${lang}/fleet`;

  return (
    <article className="vehicle-card">
      <Link
        href={detail ? `/fr/details/${detail}` : fleetHubUrl}
        className={`vehicle-img${v.scene ? " scene" : photo ? " has-photo" : " no-photo"}`}
        style={photo ? { backgroundImage: `url(${photo})` } : undefined}
        aria-label={`${v.model} — details`}
      >
        {!photo && <span className="vehicle-ph">{v.model}</span>}
        <span className="vehicle-cat">{v.category}</span>
        <span className="vehicle-fixed">{t.fixedPrice}</span>
      </Link>
      <div className="vehicle-body">
        <p className="vehicle-kicker">{t.kicker(where)}</p>
        <h3 className="vehicle-model">
          {detail ? <Link href={`/fr/details/${detail}`}>{v.model}</Link> : v.model}
        </h3>
        <ul className="vehicle-specs">
          <li>
            <Icon name="users" size={14} />
            {v.passengers} {t.passengers}
          </li>
          <li>
            <Icon name="luggage" size={14} />
            {v.bags} {t.bags}
          </li>
          <li>
            <Icon name="snowflake" size={14} />
            {t.ac}
          </li>
          <li>{v.category}</li>
        </ul>
        <p className="vehicle-cancel">
          <Icon name="shield-check" size={16} />
          {t.cancellation}
        </p>
        <div className="vehicle-foot">
          <div>
            <span className="vehicle-from">{t.from}</span>
            <span className="vehicle-price">€{v.fromEur}</span>
            <span className="vehicle-eur">
              ≈ {Math.round(v.fromEur * EUR_RATE)} MAD {t.trip}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => openWhatsApp(t.waMsg(v.model, where))}
          >
            {t.book}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FleetByCity({
  city,
  heading,
  intro,
  photos = [],
}: Props) {
  const pathname = usePathname();
  const lang = getLangFromPathname(pathname);
  const t = FLEET_I18N[lang] || FLEET_I18N.en;

  const [active, setActive] = useState<FleetCity | "all">(city ?? "all");
  const list = vehiclesIn(active);

  const displayHeading = heading || t.defaultHeading;
  const displayIntro = intro || t.defaultIntro;

  return (
    <div className="fleet-by-city">
      <div className="head">
        <h2 className="huge">{displayHeading}</h2>
        <p className="statement">{displayIntro}</p>
      </div>
      {!city && (
        <div className="city-tabs" role="tablist">
          {(["all", ...FLEET_CITIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`city-tab${active === c ? " active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c === "all" ? t.allCities : getLocalizedPlace(c, lang)}
            </button>
          ))}
        </div>
      )}
      <div className="vehicle-grid">
        {list.map((v) => (
          <VehicleCard
            key={v.slug}
            v={v}
            city={active}
            hasPhoto={photos.includes(v.slug)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
