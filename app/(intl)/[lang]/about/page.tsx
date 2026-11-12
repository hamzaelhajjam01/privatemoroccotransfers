import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["fr", "es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    breadcrumb: string;
    tag: string;
    h1: string;
    h1Sub: string;
    sub: string;
    storyTag: string;
    storyH2: string;
    storyP1: string;
    storyP2: string;
    valuesTag: string;
    valuesH2: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
  }
> = {
  fr: {
    title: `À Propos de Nous — Chauffeur Privé au Maroc`,
    desc: "Service de chauffeurs privés basé à Marrakech avec prix fixes garantis, chauffeurs agréés et voyages sereins à travers tout le Maroc.",
    home: "Accueil",
    breadcrumb: "À Propos de Nous",
    tag: "Équipe Locale · Basée à Marrakech",
    h1: "À Propos de",
    h1Sub: "Private Morocco Transfers",
    sub: "Un service de chauffeur privé haut de gamme conçu pour les voyageurs internationaux exigeants. Prix fixes, chauffeurs agréés, zéro mauvaise surprise.",
    storyTag: "Notre Histoire",
    storyH2: "Fondé sur la transparence et le respect",
    storyP1: "Nous avons créé Private Morocco Transfers pour mettre fin aux négociations de taxis, aux tarifs opaques et aux suppléments imprévus lors des voyages au Maroc.",
    storyP2: "Notre engagement est clair : un devis ferme et définitif sur WhatsApp, un accueil personnalisé et des chauffeurs professionnels ponctuels et bienveillants.",
    valuesTag: "Nos Engagements",
    valuesH2: "Ce qui nous distingue",
    val1Title: "100% Prix Fixe Garanti",
    val1Desc: "Carburant, péages d'autoroute et arrêts photos inclus sans aucun supplément à l'arrivée.",
    val2Title: "Chauffeurs Agréés et Bilingues",
    val2Desc: "Tous nos chauffeurs détiennent les cartes professionnelles de transport touristique et parlent français et anglais.",
    val3Title: "Zéro Acompte sous 300 €",
    val3Desc: "Réservez en toute confiance sans sortir votre carte bancaire. Vous réglez directement le jour de la prise en charge.",
  },
  es: {
    title: `Sobre Nosotros — Chófer Privado en Marruecos`,
    desc: "Servicio de chófer privado con sede en Marrakech. Precios fijos, conductores autorizados y viajes tranquilos por todo Marruecos.",
    home: "Inicio",
    breadcrumb: "Sobre Nosotros",
    tag: "Equipo Local · Con Sede en Marrakech",
    h1: "Sobre Nosotros",
    h1Sub: "Private Morocco Transfers",
    sub: "Servicio de chófer privado pensado para viajeros internacionales. Precios fijos garantizados, conductores profesionales y total tranquilidad.",
    storyTag: "Nuestra Historia",
    storyH2: "Creados bajo el principio de transparencia",
    storyP1: "Creamos este servicio para terminar con la incertidumbre en los taxis y los precios variables. El transporte en Marruecos debe ser transparente y profesional.",
    storyP2: "Nuestro modelo es directo: usted nos indica la ruta, le damos un precio cerrado en WhatsApp y su conductor llega puntual. Sin regateos ni cargos sorpresa.",
    valuesTag: "Nuestros Valores",
    valuesH2: "Nuestra garantía de calidad",
    val1Title: "Precio Fijo con Todo Incluido",
    val1Desc: "Peajes, gasolina y esperas en aeropuerto incluidas. El precio pactado es el precio final.",
    val2Title: "Conductores Profesionales Licenciados",
    val2Desc: "Chóferes seleccionados con amplia experiencia en carreteras marroquíes y trato amable.",
    val3Title: "0% Anticipo en Rutas Cortas",
    val3Desc: "Reserve sin tarjeta bancaria para viajes menores de 300 €. Pague tranquilamente el día de su viaje.",
  },
  it: {
    title: `Chi Siamo — Servizio Autista Privato in Marocco`,
    desc: "Servizio di noleggio con conducente con sede a Marrakech. Tariffe fisse garantite, autisti abilitati e trasferimenti sereni in tutto il Marocco.",
    home: "Home",
    breadcrumb: "Chi Siamo",
    tag: "Team Locale · Con Sede a Marrakech",
    h1: "Chi Siamo",
    h1Sub: "Private Morocco Transfers",
    sub: "Un servizio di transfer privato d'eccellenza per viaggiatori da tutto il mondo. Prezzi fissi, autisti affidabili e zero contrattazioni.",
    storyTag: "La Nostra Storia",
    storyH2: "Nati all'insegna della massima trasparenza",
    storyP1: "Abbiamo fondato Private Morocco Transfers per offrire un'alternativa sicura e affidabile ai taxi e alle tariffe non dichiarate.",
    storyP2: "Il nostro principio è semplice: comunicateci il vostro tragitto, vi diamo una tariffa fissa su WhatsApp e il vostro autista sarà puntuale ad attendervi.",
    valuesTag: "I Nostri Valori",
    valuesH2: "Perché scegliere noi",
    val1Title: "Tariffa Fissa Senza Sorprese",
    val1Desc: "Pedaggi, benzina e monitoraggio voli inclusi nel prezzo confermato prima della partenza.",
    val2Title: "Autisti Professionisti Abilitati",
    val2Desc: "Solo conducenti qualificati con patente turistica e conoscenza approfondita delle strade marocchine.",
    val3Title: "Zero Anticipo sotto 300 €",
    val3Desc: "Confermate la vostra prenotazione senza carta di credito. Pagate direttamente all'autista.",
  },
  de: {
    title: `Über Uns — Privatchauffeur & Transfers Marokko`,
    desc: "Ihr privater Chauffeurservice mit Sitz in Marrakesch. Feste Pauschalpreise, lizenzierte Fahrer und erstklassiger Reiseservice in ganz Marokko.",
    home: "Startseite",
    breadcrumb: "Über Uns",
    tag: "Lokales Team · Sitz in Marrakesch",
    h1: "Über Uns",
    h1Sub: "Private Morocco Transfers",
    sub: "Ein erstklassiger privater Chauffeurservice für internationale Reisende. Feste Preise, lizenzierte Fahrer, keine bösen Überraschungen.",
    storyTag: "Unsere Geschichte",
    storyH2: "Aufgebaut auf absoluter Transparenz",
    storyP1: "Wir haben Private Morocco Transfers gegründet, um Reisenden eine zuverlässige, entspannte Alternative zu Taxi-Verhandlungen und unklaren Tarifen zu bieten.",
    storyP2: "Unser Versprechen: Sie nennen uns Ihre Wunschstrecke, wir senden Ihnen einen verbindlichen Festpreis auf WhatsApp, Ihr Chauffeur wartet pünktlich auf Sie.",
    valuesTag: "Unsere Werte",
    valuesH2: "Was uns auszeichnet",
    val1Title: "100% Festpreisgarantie",
    val1Desc: "Treibstoff, Autobahngebühren und Wartezeiten sind komplett im vorab vereinbarten Preis enthalten.",
    val2Title: "Lizenzierte Berufschauffeure",
    val2Desc: "Erfahrene, geprüfte Fahrer mit offiziellem Touristentransport-Ausweis und gepflegten Fahrzeugen.",
    val3Title: "0% Anzahlung unter 300 €",
    val3Desc: "Buchen Sie ohne Kreditkarte und ohne Risiko. Die Bezahlung erfolgt bequem vor Ort.",
  },
  ar: {
    title: `من نحن — خدمات السائق الخاص بالمغرب`,
    desc: "فريق محلي متخصص في خدمات السائق الخاص والسياحة الفاخرة بالمغرب. أسعار ثابتة وسيارات حديثة وسائقون مرخصون.",
    home: "الرئيسية",
    breadcrumb: "من نحن",
    tag: "فريق محلي متخصص · مقرنا في مراكش",
    h1: "من نحن",
    h1Sub: "برايفت مورو ترانسفيرز",
    sub: "خدمة سائق خاص راقية مصممة لتلبية احتياجات المسافرين والعائلات بأعلى معايير الأمان والشفافية في كافة أنحاء المغرب.",
    storyTag: "قصتنا",
    storyH2: "الالتزام التام بالشفافية والراحة",
    storyP1: "انطلقنا لتقديم تجربة نقل سياحي راقية ومريحة تضمن للزائر تجنب المفاوضات العشوائية والتكاليف غير المعلنة.",
    storyP2: "نموذجنا واضح: تحدد مسارك، نؤكد لك سعراً ثابتاً شاملاً على واتساب، ويلتقي بك سائقك في الموعد المحدد بكل دقة.",
    valuesTag: "قيمنا",
    valuesH2: "ما يميز خدماتنا",
    val1Title: "أسعار ثابتة شاملة 100%",
    val1Desc: "الوقود، رسوم الطرق السريعة ووقفات التصوير كلها مشمولة في السعر المتفق عليه مسبقاً.",
    val2Title: "سائقون مرخصون ومحترفون",
    val2Desc: "سائقون ذوو كفاءة عالية وخبرة بطرق المملكة مع رخص نقل سياحي معتمدة.",
    val3Title: "بدون أي عربون مسبق تحت 300€",
    val3Desc: "احجز رحلتك بثقة كاملة بدون دفع إلكتروني مسبق، وادفع عند وصولك للسائق.",
  },
  pt: {
    title: `Sobre Nós — Motorista Privado em Marrocos`,
    desc: "Serviço de motorista privado sediado em Marraquexe com preços fixos, condutores experientes e viagens seguras por todo o Marrocos.",
    home: "Início",
    breadcrumb: "Sobre Nós",
    tag: "Equipa Local · Sediada em Marraquexe",
    h1: "Sobre Nós",
    h1Sub: "Private Morocco Transfers",
    sub: "Serviço de motorista privado pensado para viajantes que exigem pontualidade, segurança e preços claros sem surpresas.",
    storyTag: "A Nossa História",
    storyH2: "Criados com base na total transparência",
    storyP1: "Criámos a Private Morocco Transfers para oferecer uma alternativa confortável e profissional aos táxis convencionais.",
    storyP2: "O nosso lema é simples: diz-nos o percurso, recebe uma tarifa fixa no WhatsApp e o motorista estará pontualmente à sua espera.",
    valuesTag: "Os Nossos Valores",
    valuesH2: "O que garantimos",
    val1Title: "Tarifa Fixa com Tudo Incluído",
    val1Desc: "Portagens, combustível e espera no aeroporto já estão incluídos no preço acordado.",
    val2Title: "Motoristas Licenciados e Experientes",
    val2Desc: "Profissionais experientes com certificação de transporte turístico e viaturas confortáveis.",
    val3Title: "Sem Sinal para Viagens sob 300 €",
    val3Desc: "Reserve com comodidade e sem cartão de crédito. Paga diretamente ao motorista no dia do serviço.",
  },
  nl: {
    title: `Over Ons — Privé Chauffeur Marokko`,
    desc: "Professionele privéchauffeur service gevestigd in Marrakech. Vaste tarieven, gediplomeerde chauffeurs en comfortabel vervoer door heel Marokko.",
    home: "Home",
    breadcrumb: "Over Ons",
    tag: "Lokaal Team · Gevestigd in Marrakech",
    h1: "Over Ons",
    h1Sub: "Private Morocco Transfers",
    sub: "Een hoogwaardige privéchauffeur service afgestemd op internationale reizigers. Vaste all-in tarieven, ervaren chauffeurs en nul verrassingen.",
    storyTag: "Ons Verhaal",
    storyH2: "Gebouwd op betrouwbaarheid en transparantie",
    storyP1: "Wij zijn gestart om een betrouwbaar en ontspannen alternatief te bieden voor taxionderhandelingen en onduidelijke toeslagen.",
    storyP2: "Onze belofte: u geeft uw route door, wij bevestigen direct de vaste ritprijs op WhatsApp, en uw chauffeur staat stipt voor u klaar.",
    valuesTag: "Onze Waarden",
    valuesH2: "Waarom reizigers voor ons kiezen",
    val1Title: "100% Vaste Prijs Garantie",
    val1Desc: "Brandstof, tolwegen en luchthavenophaalservice zijn allemaal inbegrepen in het vaste tarief.",
    val2Title: "Gediplomeerde Beroepschauffeurs",
    val2Desc: "Ervaren chauffeurs met officiële toeristenvergunning en uitstekende voertuigen.",
    val3Title: "0% Aanbetaling onder €300",
    val3Desc: "Boek zonder creditcard of financieel risico. U rekent eenvoudig af op de dag van de rit.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = CONTENT[lang] || CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/about`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/about`,
        fr: `${SITE_URL}/fr/about`,
        es: `${SITE_URL}/es/about`,
        it: `${SITE_URL}/it/about`,
        de: `${SITE_URL}/de/about`,
        ar: `${SITE_URL}/ar/about`,
        pt: `${SITE_URL}/pt/about`,
        nl: `${SITE_URL}/nl/about`,
        "x-default": `${SITE_URL}/about`,
      },
    },
    openGraph: {
      title: info.title,
      description: info.desc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function LocalizedAboutPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = CONTENT[lang] || CONTENT.es;
  const homeUrl = `/${lang}`;
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={homeUrl}>{c.home}</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{c.breadcrumb}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {c.tag}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {c.h1}
            <br />
            {c.h1Sub}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
            <div>
              <span className="section-label">{c.storyTag}</span>
              <h2 className="heading-lg mt-16">{c.storyH2}</h2>
              <p className="body-lg mt-24" style={{ lineHeight: 1.6 }}>
                {c.storyP1}
              </p>
              <p className="mt-16" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {c.storyP2}
              </p>
            </div>
            <div>
              <div
                style={{
                  background: "var(--surface)",
                  padding: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--rule)",
                }}
              >
                <span className="section-label">{c.valuesTag}</span>
                <h3 className="heading-md mt-16">{c.valuesH2}</h3>
                <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "var(--gold)" }}>{c.val1Title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "4px" }}>{c.val1Desc}</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "var(--gold)" }}>{c.val2Title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "4px" }}>{c.val2Desc}</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "var(--gold)" }}>{c.val3Title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "4px" }}>{c.val3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
