import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Fleet from "@/components/Fleet";
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

const FLEET_CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    fleetBreadcrumb: string;
    h1: string;
    sub: string;
    fleetHeading: string;
    fleetIntro: string;
    ctaH2: string;
    ctaP: string;
    ctaWa: string;
    ctaCalc: string;
    calcUrl: string;
    waText: string;
  }
> = {
  fr: {
    title: `Notre Flotte de Véhicules — Berline, SUV & Van Privé`,
    desc: "Découvrez notre flotte de véhicules avec chauffeur privé au Maroc. Berlines tout confort, vans spacieux et minibus modernes pour tous vos trajets.",
    home: "Accueil",
    fleetBreadcrumb: "Notre Flotte",
    h1: "Notre Flotte de Véhicules",
    sub: "Véhicules récents, climatisés et impeccablement entretenus pour tous vos transferts et circuits au Maroc. Chauffeurs professionnels agréés.",
    fleetHeading: "La flotte disponible",
    fleetIntro: "De la berline prestige au minibus 16 places. Choisissez votre ville pour voir la disponibilité — tarif fixe par véhicule.",
    ctaH2: "Obtenez votre tarif fixe dès maintenant",
    ctaP: "Sans engagement ni acompte pour les trajets sous 300 €. Réponse rapide sur WhatsApp.",
    ctaWa: "Discuter sur WhatsApp",
    ctaCalc: "Calculateur de prix",
    calcUrl: "/fr/calculator",
    waText: "Bonjour! Je souhaite réserver un chauffeur privé avec un véhicule au Maroc. Pouvez-vous me confirmer vos tarifs fixes?",
  },
  es: {
    title: `Nuestra Flota — Sedán, SUV y Monovolumen con Chófer`,
    desc: "Conozca nuestra flota de vehículos privados con chófer en Marruecos. Sedanes ejecutivos, amplios monovolúmenes y minibuses con tarifas fijas.",
    home: "Inicio",
    fleetBreadcrumb: "Nuestra Flota",
    h1: "Nuestra Flota de Vehículos",
    sub: "Vehículos modernos, limpios y con aire acondicionado para parejas, familias y grupos. Conductores profesionales con amplia experiencia.",
    fleetHeading: "Vehículos disponibles",
    fleetIntro: "Desde elegantes berlinas hasta minibuses de hasta 16 plazas. Precios fijos por vehículo con todo incluido.",
    ctaH2: "Consulte su precio fijo garantizado",
    ctaP: "Sin compromiso y sin anticipo bajo 300 €. Respuesta inmediata en WhatsApp.",
    ctaWa: "Escríbanos por WhatsApp",
    ctaCalc: "Calculadora de tarifas",
    calcUrl: "/es/calculator",
    waText: "¡Hola! Quisiera información y precio para un vehículo con chófer privado en Marruecos. ¿Podrían confirmarme disponibilidad?",
  },
  it: {
    title: `La Nostra Flotta — Berline, SUV e Van con Autista in Marocco`,
    desc: "Scoprite i veicoli del nostro servizio NCC in Marocco. Berline comfort, spaziosi van Mercedes e minibus con aria condizionata e prezzi fissi.",
    home: "Home",
    fleetBreadcrumb: "La Nostra Flotta",
    h1: "La Nostra Flotta di Veicoli",
    sub: "Auto moderne, climatizzate e igienizzate per viaggiatori singoli, coppie e famiglie. Autisti professionisti con licenza turistica.",
    fleetHeading: "I nostri veicoli",
    fleetIntro: "Dalle berline executive ai minibus fino a 16 posti. Prezzi chiari per veicolo senza sorprese.",
    ctaH2: "Richiedete subito la vostra tariffa fissa",
    ctaP: "Senza impegno e senza anticipo per viaggi sotto 300 €. Risposta veloce su WhatsApp.",
    ctaWa: "Contattaci su WhatsApp",
    ctaCalc: "Calcolatore tariffe",
    calcUrl: "/it/calculator",
    waText: "Buongiorno! Vorrei prenotare un veicolo con autista privato in Marocco. Potete confermarmi le disponibilità e i prezzi fissi?",
  },
  de: {
    title: `Unsere Fahrzeugflotte — Limousinen, SUVs & Vans in Marokko`,
    desc: "Übersicht unserer modernen Chauffeurfahrzeuge in Marokko. Komfort-Limousinen, geräumige Vans und Minibusse zum garantierten Festpreis.",
    home: "Startseite",
    fleetBreadcrumb: "Fahrzeugflotte",
    h1: "Unsere Fahrzeugflotte",
    sub: "Gepflegte, voll klimatisierte Fahrzeuge für jede Gruppengröße — gefahren von lizenzierten, ortskundigen Berufsfahrern.",
    fleetHeading: "Verfügbare Fahrzeuge",
    fleetIntro: "Von der eleganten Business-Limousine bis zum 16-Sitzer Minibus. Jeder Preis ist fest pro Fahrzeug inklusive Treibstoff und Maut.",
    ctaH2: "Erhalten Sie jetzt Ihren Festpreis",
    ctaP: "Unverbindlich, kostenlos und ohne Anzahlung unter 300 €. Direkte Antwort auf WhatsApp.",
    ctaWa: "Nachricht auf WhatsApp",
    ctaCalc: "Tarifrechner",
    calcUrl: "/de/calculator",
    waText: "Guten Tag! Ich interessiere mich für ein Chauffeurfahrzeug in Marokko. Können Sie mir die Verfügbarkeit und Festpreise mitteilen?",
  },
  ar: {
    title: `أسطول سياراتنا الفاخرة — سيدان، دفع رباعي وفانات VIP`,
    desc: "تعرف على أسطول سيارات النقل السياحي والسائق الخاص في المغرب. سيارات مرسيدس وفانات عائلية مكيفة بأحدث المواصفات وأسعار ثابتة.",
    home: "الرئيسية",
    fleetBreadcrumb: "أسطول السيارات",
    h1: "أسطول سياراتنا الفاخرة",
    sub: "مركبات حديثة، مكيفة ومريحة تناسب العائلات، رجال الأعمال والمجموعات السياحية، مع سائقين محترفين ومرخصين.",
    fleetHeading: "السيارات المتاحة",
    fleetIntro: "من سيارات الصالون الفاخرة إلى حافلات الميني باص حتى 16 راكباً. الأسعار ثابتة للمركبة بالكامل شاملة السائق والوقود.",
    ctaH2: "احصل على سعر فوري ثابت لرحلتك",
    ctaP: "بدون أي عربون مسبق للرحلات دون 300 يورو. تواصل مباشر وفوري عبر واتساب.",
    ctaWa: "تواصل عبر واتساب",
    ctaCalc: "حاسبة الأسعار",
    calcUrl: "/ar/calculator",
    waText: "السلام عليكم، أود الاستفسار عن حجز سيارة مع سائق خاص في المغرب. هل يمكنكم تزويدي بالأسعار والتوافر؟",
  },
  pt: {
    title: `A Nossa Frota — Berlinas, SUVs e Minivans em Marrocos`,
    desc: "Conheça a nossa frota de veículos com motorista privado em Marrocos. Viaturas modernas, confortáveis e climatizadas com preços fixos garantidos.",
    home: "Início",
    fleetBreadcrumb: "A Nossa Frota",
    h1: "A Nossa Frota de Veículos",
    sub: "Carros recentes, higienizados e equipados com ar condicionado para o máximo conforto de casais, famílias e grupos.",
    fleetHeading: "Veículos disponíveis",
    fleetIntro: "De confortáveis berlinas a minivans espaçosas até 16 lugares. Preço fixo por veículo com portagens e combustível.",
    ctaH2: "Peça o seu orçamento com preço fixo",
    ctaP: "Sem compromisso e sem necessidade de sinal sob 300 €. Confirmação rápida no WhatsApp.",
    ctaWa: "Mensagem no WhatsApp",
    ctaCalc: "Calculadora de preços",
    calcUrl: "/pt/calculator",
    waText: "Olá! Gostaria de reservar uma viatura com motorista privado em Marrocos. Poderiam confirmar a disponibilidade e os preços fixos?",
  },
  nl: {
    title: `Onze Voertuigen — Sedans, SUVs en Minibusjes in Marokko`,
    desc: "Bekijk onze moderne vloot met privéchauffeur in Marokko. Luxe sedans, comfortabele familiebusjes en touring minivans voor vaste all-inclusive tarieven.",
    home: "Home",
    fleetBreadcrumb: "Onze Vloot",
    h1: "Onze Voertuigen",
    sub: "Nieuwe, goed onderhouden auto's met airconditioning voor alle reisgezelschappen. Bestuurd door ervaren, professionele chauffeurs.",
    fleetHeading: "Beschikbare voertuigen",
    fleetIntro: "Van comfortabele sedans tot 16-persoons minibussen. Vaste prijzen per voertuig inclusief brandstof en tolwegen.",
    ctaH2: "Vraag direct uw vaste ritprijs aan",
    ctaP: "Geheel vrijblijvend en 0% aanbetaling onder €300. Snelle reactie via WhatsApp.",
    ctaWa: "Stuur een WhatsApp bericht",
    ctaCalc: "Prijsberekening",
    calcUrl: "/nl/calculator",
    waText: "Hallo! Ik wil graag een auto met privéchauffeur boeken in Marokko. Kunt u de beschikbaarheid en vaste prijzen bevestigen?",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = FLEET_CONTENT[lang] || FLEET_CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/fleet`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/fleet`,
        fr: `${SITE_URL}/fr/fleet`,
        es: `${SITE_URL}/es/fleet`,
        it: `${SITE_URL}/it/fleet`,
        de: `${SITE_URL}/de/fleet`,
        ar: `${SITE_URL}/ar/fleet`,
        pt: `${SITE_URL}/pt/fleet`,
        nl: `${SITE_URL}/nl/fleet`,
        "x-default": `${SITE_URL}/fleet`,
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

export default async function LocalizedFleetPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = FLEET_CONTENT[lang] || FLEET_CONTENT.es;
  const homeUrl = `/${lang}`;
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={homeUrl}>{c.home}</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{c.fleetBreadcrumb}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <h1 className="heading-xl" style={{ color: "var(--white)" }}>
            {c.h1}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section fleet-section">
        <div className="wrap">
          <Fleet heading={c.fleetHeading} intro={c.fleetIntro} lang={lang as LanguageCode} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{c.ctaH2}</h2>
          <p>{c.ctaP}</p>
          <div className="cta-buttons">
            <button className="btn btn-gold btn-lg" data-wa={c.waText}>
              {c.ctaWa}
            </button>
            <Link href={c.calcUrl} className="btn btn-outline-white btn-lg">
              {c.ctaCalc}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
