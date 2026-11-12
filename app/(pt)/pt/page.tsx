import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "Motorista Privado e Transfers em Marrocos — Preços Fixos" },
  description: "Serviço de motorista privado e transfers em Marrocos com preços fixos garantidos. Recolha em aeroportos, viagens entre cidades e passeios no deserto. Confirmação rápida por WhatsApp 24/7.",
  alternates: {
    canonical: `${SITE_URL}/pt`,
    languages: {
      "pt": `${SITE_URL}/pt`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "es": `${SITE_URL}/es`,
      "it": `${SITE_URL}/it`,
      "de": `${SITE_URL}/de`,
      "ar": `${SITE_URL}/ar`,
      "nl": `${SITE_URL}/nl`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Motorista Privado e Transfers em Marrocos — Preços Fixos",
    description: "Serviço porta a porta com condutor profissional em Marrocos. Aeroportos, viagens entre cidades e passeios privados.",
    url: `${SITE_URL}/pt`,
    siteName: SITE_NAME,
    locale: "pt_PT",
    type: "website",
  },
};

const homeFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Os preços são verdadeiramente fixos e finais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O preço confirmado pelo WhatsApp antes da viagem é definitivo e inclui motorista, combustível, todas as portagens de autoestrada e ar condicionado. Sem custos ocultos.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece se o meu voo atrasar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monitorizamos o seu voo em tempo real. A hora de recolha é ajustada automaticamente e incluímos 45 minutos de espera gratuita após a aterragem.",
      },
    },
    {
      "@type": "Question",
      name: "Como é feito o pagamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para viagens e passeios inferiores a 300 €, não é necessário sinal. Paga diretamente em dinheiro ao seu motorista à chegada (em Euros ou Dirhams marroquinos).",
      },
    },
  ],
};

const PORTUGUESE_SERVICES = [
  {
    title: "Transfers de Aeroporto",
    text: "Receção com placa com o seu nome na área de chegadas de todos os aeroportos marroquinos. Rastreio de voos em direto e 45 minutos de espera grátis.",
    meta: ["A partir de 30 €", "RAK · CMN · AGA · FEZ · TNG · RBA"],
    image: "/img/blog/airport-transfer.webp",
    href: "/pt/airport-transfers",
    cta: "Ver transfers de aeroporto",
  },
  {
    title: "Viagens Entre Cidades",
    text: "De Marraquexe a Essaouira, de Casablanca a Fez, de Tânger a Chefchaouen. Serviço porta a porta em veículos confortáveis com paragens panorâmicas à escolha.",
    meta: ["Preço fixo por veículo", "Todo o Marrocos"],
    image: "/img/routes/marrakech-merzouga.webp",
    href: "/pt/city-to-city",
    cta: "Ver rotas interurbanas",
  },
  {
    title: "Passeios de um Dia",
    text: "Vale de Ourika, cascatas de Ouzoud, Essaouira ou o deserto de Agafay: um dia completo com o seu próprio motorista dedicado, regressando ao riad ao fim do dia.",
    meta: ["De Marraquexe, Fez, Agadir", "Dia inteiro"],
    image: "/img/blog/day-trips.webp",
    href: "/pt/day-trips",
    cta: "Descobrir passeios",
  },
  {
    title: "Circuitos Privados no Deserto",
    text: "Roteiros de 3, 5 ou 7 dias por Marrocos com o mesmo motorista: deserto de Merzouga, cidades imperiais e o Alto Atlas.",
    meta: ["3 · 5 · 7 dias", "Personalizado"],
    image: "/img/fleet-scenes/toyota-prado.webp",
    href: "/pt/transfers",
    cta: "Explorar circuitos",
  },
];

const PORTUGUESE_REVIEWS: Review[] = [
  {
    name: "Rodrigo S.",
    country: "Portugal",
    rating: 5,
    route: "Aeroporto de Marraquexe → Riad",
    text: "Excelente serviço! O motorista estava à nossa espera à saída das chegadas. Carro muito confortável, ar condicionado impecável e preço justo sem surpresas.",
  },
  {
    name: "Mariana & Tiago",
    country: "Brasil",
    rating: 5,
    route: "Marraquexe → Essaouira",
    text: "Viagem muito tranquila e segura. O motorista foi muito gentil e fez paradas ótimas para fotos. Recomendo a todos os brasileiros que visitam o Marrocos.",
  },
];

export default function PortugueseHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqLd) }}
      />
      <HeroCarousel>
        <div className="hero-bottom">
          <div className="hero-statement">
            <h1 className="visually-hidden">{"Motorista Privado e Transfers em Marrocos — Preços Fixos Garantidos"}</h1>
            <HeroLines />
            <p>
              {"Private Morocco Transfers é o serviço de motorista privado de referência para viajar por Marrocos com total tranquilidade — preços fixos garantidos, condutores experientes e viagens confortáveis porta a porta do aeroporto ao Saara."}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Link href="/pt/transfers" className="btn btn-gold">
                {"Ver todos os trajetos"}
              </Link>
              <div className="cta-tooltip-wrapper">
                <Link
                  href="/pt/trip-finder"
                  className="btn btn-white"
                  title="Planeador de Viagem — Calcule o seu trajeto, veículo e preço fixo garantido em 30 segundos"
                >
                  {"Planeador de Viagem"}
                </Link>
                <div className="cta-tooltip" role="tooltip">
                  <span className="cta-tooltip-badge">{"Preço Direto"}</span>
                  <span>{"Encontre o seu trajeto, veículo & preço fixo"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-widget">
            <div className="booking-widget-tabs">
              <div className="booking-tab active">
                {"Transfer Aeroporto"}
              </div>
              <div className="booking-tab">
                {"Entre Cidades"}
              </div>
              <div className="booking-tab">
                {"Passeio"}
              </div>
              <Link className="booking-tab" href="/pt/calculator">
                {"Calculadora"}
              </Link>
            </div>
            <h2 className="widget-question">
              {"Onde vamos buscá-lo?"}
            </h2>
            <form id="bookingWidget">
              <label className="field-label">
                {"Local de partida"}
              </label>
              <input className="field-input" name="from" type="text" placeholder="ex: Aeroporto de Marraquexe (RAK)" />
              <label className="field-label">
                {"Destino"}
              </label>
              <input className="field-input" name="to" type="text" placeholder="ex: Medina de Marraquexe, Hotel, Riad..." />
              <div className="field-row">
                <div>
                  <label className="field-label">
                    {"Data"}
                  </label>
                  <input className="field-input" name="date" type="date" />
                </div>
                <div>
                  <label className="field-label">
                    {"Passageiros"}
                  </label>
                  <select className="calc-select" name="passengers">
                    <option>{"1–3 (berlina)"}</option>
                    <option>{"4–5 (SUV)"}</option>
                    <option>{"6–8 (carrinha)"}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-whatsapp">
                {"Pedir preço fixo no WhatsApp"}
              </button>
              <p className="field-note">
                {"Abre o WhatsApp com os dados da sua viagem. Sem pagamento antecipado para cotação."}
              </p>
            </form>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Marraquexe<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fez<i>—</i></span><span>Tânger<i>—</i></span><span>Merzouga<i>—</i></span><span>Marraquexe<i>—</i></span><span>Essaouira<i>—</i></span><span>Agadir<i>—</i></span><span>Casablanca<i>—</i></span><span>Rabat<i>—</i></span><span>Fez<i>—</i></span><span>Tânger<i>—</i></span><span>Merzouga<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">{"Viajamos por Marrocos com total conforto e tranquilidade"}</h2>
              <Link href="/transfers" className="btn btn-white">
                {"Catálogo de transfers"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="Viatura de transfer privado em Marrocos"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.webp)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"Uma viagem de excelência é aquela em que tudo corre sem preocupações: o motorista já está à sua espera, o carro está fresco e limpo, e o preço é exatamente o acordado."}
            </p>
            <p className="statement muted">
              {"Todos os nossos motoristas possuem licença oficial de Transporte Turístico, seguro comercial de passageiros e falam inglês, francês e espanhol."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Rotas populares"}</h2>
            <p className="statement">
              {"Preços fixos por veículo sedan (até 3 pessoas). Vans e carrinhas disponíveis para grupos e famílias."}
            </p>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/pt/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Aeroporto Marraquexe → Medina"}
                </Link>
              </span>
              <span className="muted">{"6 km"}</span>
              <span className="muted">{"15 min"}</span>
              <span>{"€30 (330 MAD)"}</span>
              <Link href="/pt/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalhes"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/pt/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marraquexe → Essaouira"}
                </Link>
              </span>
              <span className="muted">{"180 km"}</span>
              <span className="muted">{"2.5 h"}</span>
              <span>{"€90 (980 MAD)"}</span>
              <Link href="/pt/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalhes"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/pt/transfers/marrakech-to-agadir" style={{ color: "inherit", textDecoration: "none" }}>
                  {"Marraquexe → Agadir"}
                </Link>
              </span>
              <span className="muted">{"240 km"}</span>
              <span className="muted">{"3 h"}</span>
              <span>{"€135 (1.480 MAD)"}</span>
              <Link href="/pt/transfers/marrakech-to-agadir" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"Detalhes"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"Os nossos serviços"}</h2>
            <p className="statement">
              {"Soluções de transporte sob medida para as suas viagens em Marrocos."}
            </p>
          </div>
          <ServicesCarousel items={PORTUGUESE_SERVICES} />
        </div>
      </section>

      <Fleet lang="pt" />

      <Reviews items={PORTUGUESE_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"Reserve o seu transfer privado em Marrocos"}</h2>
          <p>{"Confirmação rápida por WhatsApp. Sem entrada para reservas sob 300 €."}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20um%20transfer%20privado%20em%20Marrocos.%20Poderiam%20confirmar%20a%20disponibilidade%3F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"Reservar por WhatsApp"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"Ver todas as rotas"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
