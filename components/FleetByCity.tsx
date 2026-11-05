"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { FLEET_CITIES, listingFor, vehiclesIn, type FleetCity, type Vehicle } from "@/lib/fleet";
import { EUR_RATE } from "@/lib/pricing";
import { openWhatsApp } from "@/lib/site";

type Props = {
  /** Lock the list to one city (city pages). Omit to show city tabs. */
  city?: FleetCity;
  heading?: string;
  intro?: string;
  /** Slugs that have a photo in public/img/fleet */
  photos?: string[];
};

function VehicleCard({ v, city, hasPhoto }: { v: Vehicle; city: FleetCity | "all"; hasPhoto: boolean }) {
  const where = city === "all" ? "Morocco" : city;
  const photo = v.scene ?? v.image ?? (hasPhoto ? `/img/fleet/${v.slug}.jpg` : undefined);
  const detail = listingFor(v, city);
  return (
    <article className="vehicle-card">
      <Link href={detail ? `/fr/details/${detail}` : "/fleet"} className={`vehicle-img${v.scene ? " scene" : photo ? " has-photo" : " no-photo"}`} style={photo ? { backgroundImage: `url(${photo})` } : undefined} aria-label={`${v.model} — details`}>
        {!photo && <span className="vehicle-ph">{v.model}</span>}
        <span className="vehicle-cat">{v.category}</span>
        <span className="vehicle-fixed">Fixed price</span>
      </Link>
      <div className="vehicle-body">
        <p className="vehicle-kicker">Private driver · {where}</p>
        <h3 className="vehicle-model">{detail ? <Link href={`/fr/details/${detail}`}>{v.model}</Link> : v.model}</h3>
        <ul className="vehicle-specs">
          <li><Icon name="users" size={14} />{v.passengers} passengers</li>
          <li><Icon name="luggage" size={14} />{v.bags} bags</li>
          <li><Icon name="snowflake" size={14} />A/C</li>
          <li>{v.category}</li>
        </ul>
        <p className="vehicle-cancel"><Icon name="shield-check" size={16} />Free cancellation up to 48h</p>
        <div className="vehicle-foot">
          <div>
            <span className="vehicle-from">From</span>
            <span className="vehicle-price">€{v.fromEur}</span>
            <span className="vehicle-eur">≈ {Math.round(v.fromEur * EUR_RATE)} MAD / trip</span>
          </div>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => openWhatsApp(`Hello, I'd like to book a private driver with a ${v.model} in ${where}. Can you send me a fixed price?`)}
          >
            Book
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FleetByCity({ city, heading = "Private drivers by city", intro, photos = [] }: Props) {
  const [active, setActive] = useState<FleetCity | "all">(city ?? "all");
  const list = vehiclesIn(active);

  return (
    <div className="fleet-by-city">
      <div className="head">
        <h2 className="huge">{heading}</h2>
        <p className="statement">
          {intro ?? "Choose your city and vehicle. Every price is fixed per vehicle and includes the driver, fuel, tolls and air conditioning."}
        </p>
      </div>
      {!city && (
        <div className="city-tabs" role="tablist">
          {(["all", ...FLEET_CITIES] as const).map((c) => (
            <button key={c} type="button" role="tab" aria-selected={active === c}
              className={`city-tab${active === c ? " active" : ""}`} onClick={() => setActive(c)}>
              {c === "all" ? "All cities" : c}
            </button>
          ))}
        </div>
      )}
      <div className="vehicle-grid">
        {list.map((v) => <VehicleCard key={v.slug} v={v} city={active} hasPhoto={photos.includes(v.slug)} />)}
      </div>
    </div>
  );
}
