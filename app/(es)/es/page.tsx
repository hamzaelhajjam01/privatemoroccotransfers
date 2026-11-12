import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Chófer Privado y Traslados en Marruecos — Precios Fijos" },
  description: "Servicio de chófer privado y traslados en Marruecos a precios fijos garantizados. Recogidas en aeropuerto, traslados interurbanos y excursiones con conductores profesionales. WhatsApp 24/7.",
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      "es": `${SITE_URL}/es`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "it": `${SITE_URL}/it`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "pt": `${SITE_URL}/pt`,
      "nl": `${SITE_URL}/nl`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Chófer Privado y Traslados en Marruecos — Precios Fijos Garantizados",
    description: "Servicio prémium de traslados privados en Marruecos. Aeropuertos, rutas entre ciudades y tours por el desierto.",
    url: `${SITE_URL}/es`,
    siteName: SITE_NAME,
    locale: "es_ES",
    type: "website",
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Los precios son realmente fijos y cerrados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El precio acordado por WhatsApp antes de su viaje es definitivo e incluye conductor privado profesional, combustible, todos los peajes de autopista y aire acondicionado. Sin sorpresas ni costes ocultos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ocurre si mi vuelo se retrasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rastreio su vuelo en tiempo real mediante su número de vuelo. La hora de recogida se ajusta automáticamente e incluimos 45 minutos de espera gratuita tras el aterrizaje.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se realiza el pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para traslados y excursiones de menos de 300 €, no requerimos anticipo. Paga en efectivo directamente a su conductor a la llegada (en Euros o Dírhams marroquíes).",
      },
    },
  ],
};

const SPANISH_SERVICES = [
  {
    title: "Traslados de Aeropuerto",
    text: "Recibimiento con cartel con su nombre en la sala de llegadas de todos los aeropuertos marroquíes. Rastreio de vuelo en directo y 45 minutos de espera gratuita.",
    meta: ["Desde 30 €", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.webp",
    href: "/es/airport-transfers",
    cta: "Ver traslados de aeropuerto",
  },
  {
    title: "Rutas Entre Ciudades",
    text: "De Marrakech a Essaouira, de Casablanca a Fez, de Tánger a Chefchaouen. Servicio puerta a puerta en vehículos modernos con paradas panorámicas incluidas.",
    meta: ["Precio fijo por coche", "Todo Marruecos"],
    image: "/img/routes/marrakech-merzouga.webp",
    href: "/es/city-to-city",
    cta: "Ver rutas interurbanas",
  },
  {
    title: "Excursiones de un Día",
    text: "Valle de Ourika, cascadas de Ouzoud, Essaouira o el desierto de Agafay: una jornada completa con su propio conductor privado, regresando a su hotel por la tarde.",
    meta: ["Desde Marrakech, Fez, Agadir", "Día completo"],
    image: "/img/blog/day-trips.webp",
    href: "/es/day-trips",
    cta: "Descubrir excursiones",
  },
  {
    title: "Rutas y Circuitos Privados",
    text: "Circuitos de 3, 5 o 7 días por Marruecos con el mismo chófer y vehículo: desierto del Sahara de Merzouga, ciudades imperiales y cordillera del Atlas.",
    meta: ["3 · 5 · 7 días", "A medida"],
    image: "/img/fleet-scenes/toyota-prado.webp",
    href: "/transfers",
    cta: "Explorar circuitos",
  },
];

const SPANISH_REVIEWS: Review[] = [
  {
    name: "Carlos M.",
    country: "España",
    rating: 5,
    route: "Aeropuerto de Marrakech → Riad Médina",
    text: "Puntualidad absoluta. El chófer nos esperaba con un cartel a la salida del aeropuerto. Coche comodísimo, aire acondicionado impecable y precio exactamente el acordado.",
  },
  {
    name: "Elena G.",
    country: "España",
    rating: 5,
    route: "Marrakech → Essaouira",
    text: "Excelente servicio para viajar en familia. El conductor fue amabilísimo e hizo paradas para fotos. Muy recomendable frente a las complicaciones del taxi tradicional.",
  },
  {
    name: "Javier R.",
    country: "México",
    rating: 5,
    route: "Tour 4 días Fez & Merzouga",
    text: "Cuatro días increíbles cruzando el Atlas y el desierto. Conductor seguro, prudente y con gran conocimiento del país. Sin duda repetiríamos.",
  },
];

export default function SpanishHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <h1 className="visually-hidden">{"Chófer Privado y Traslados en Marruecos — Tarifas Fijas Garantizadas"}</h1>
            <HeroLines />
            <p>
              {"Private Morocco Transfers es el servicio de chófer privado de referencia para viajar por Marruecos con total tranquilidad — precios fijos garantizados, conductores profesionales y traslados cómodos puerta a puerta desde el aeropuerto hasta el Sahara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/es/transfers" className="btn btn-gold">
                {"Ver todos los trayectos"}
              </Link>
              <div className="cta-tooltip-wrapper">
                <Link
                  href="/es/trip-finder"
                  className="btn btn-white"
                  title="Buscador de Viaje — Calcule su ruta, vehículo y precio fijo garantizado en 30 segundos"
                >
                  {"Buscador de Viaje"}
                </Link>
                <div className="cta-tooltip" role="tooltip">
                  <span className="cta-tooltip-badge">{"Precio Directo"}</span>
                  <span>{"Encuentre su ruta, vehículo y precio fijo"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Traslado Aeropuerto"}
              </div>
              <div className="booking-tab">
                {"Interurbano"}
              </div>
              <div className="booking-tab">
                {"Excursión"}
              </div>
              <Link className="booking-tab" href="/es/calculator">
                {"Calculadora Tarifas"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"¿Dónde le recogemos?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"Origen"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="ej. Aeropuerto Marrakech (RAK)" />
              <label className="field-label">
                {"Destino"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="ej. Medina de Marrakech, Riad..." />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Fecha"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Pasajeros"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>{"1–3 (berlina)"}</option>
                    <option>{"4–5 (SUV)"}</option>
                    <option>{"6–8 (furgoneta)"}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Consultar precio fijo en WhatsApp"}
              </button>
              <p className="field-note">
                {"Abre WhatsApp con los datos de su viaje. Sin pagos previos para recibir presupuesto."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fez<i>—</i></span><span>Tánger<i>—</i></span><span>Merzouga<i>—</i></span><span>Marrakech<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fez<i>—</i></span><span>Tánger<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">
                {"Recorremos Marruecos con profesionalidad y tranquilidad"}
              </h2>
              <Link href="/transfers" className="btn btn-white">
                {"Catálogo de traslados"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Vehículo de traslado en la costa marroquí"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.webp)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Un viaje perfecto es aquel en el que todo fluye sin estrés: su chófer ya le espera puntualmente, el coche está climatizado y limpio, y el precio final coincide con exactitud con lo acordado."}
            </p>
            <p className="statement muted">
              {"Nuestros conductores cuentan con licencia oficial de Transporte Turístico, seguro comercial de viajeros y dominan el español, inglés y francés. Conocen las mejores carreteras y miradores."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Rutas populares"}</h2>
            <p className="statement">
              {"Tarifas fijas por coche sedán (hasta 3 personas). Monovolúmenes y minibuses disponibles para familias y grupos."}
            </p>
          </div>
          <div className="route-cards">
            <Link className="card" href="/es/transfers/marrakech-to-essaouira">
              <div className="ph light" style={{ backgroundImage: "url(/img/routes/marrakech-essaouira.webp)" }}></div>
              <div className="card-bar">
                <span>{"Marrakech → Essaouira"}</span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Ver ruta"}
                </span>
              </div>
            </Link>
            <Link className="card" href="/es/transfers/marrakech-to-merzouga">
              <div className="ph light" style={{ backgroundImage: "url(/img/hero-tours.webp)" }}></div>
              <div className="card-bar">
                <span>{"Marrakech → Merzouga"}</span>
                <span className="btn btn-black no-ring" style={{ minWidth: "0", padding: "8px 12px", fontSize: "15px" }}>
                  {"Ver ruta"}
                </span>
              </div>
            </Link>
          </div>

          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/es/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aeropuerto Marrakech → Médina"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/es/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalles"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/es/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/es/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalles"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/es/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marrakech → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 h"}</span>
              <span>{"€135 (1.480 MAD)"}</span>
              <Link href="/es/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalles"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/es/transfers/casablanca-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aeropuerto Casablanca (CMN) → Marrakech"}
                </Link>
              </span>
              <span className="muted">{"220 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€150 (1.650 MAD)"}</span>
              <Link href="/es/transfers/casablanca-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalles"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Nuestros servicios de transporte"}</h2>
            <p className="statement">
              {"Soluciones cómodas y fiables para todos sus desplazamientos por Marruecos."}
            </p>
          </div>
          <ServicesCarousel items={SPANISH_SERVICES} />
        </div>
      </section>

      <Fleet lang="es" />

      <Reviews items={SPANISH_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Reserve su traslado privado en Marruecos"}</h2>
          <p>
            {"Confirmación inmediata en WhatsApp. 0% de anticipo para viajes de menos de 300 €."}
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=%C2%A1Hola!%20Deseo%20reservar%20un%20traslado%20privado%20en%20Marruecos.%20%C2%BFPodr%C3%ADan%20indicarme%20la%20disponibilidad%3F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Reservar por WhatsApp"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"Ver todas las rutas"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
