import type { Metadata } from "next";
import { LanguageCode } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const MOROCCO_GEO_META = {
  "geo.region": "MA",
  "geo.placename": "Morocco",
  "geo.position": "31.7917;-7.0926",
  "ICBM": "31.7917, -7.0926",
};

export const CITIES_SERVED = [
  "Marrakech",
  "Casablanca",
  "Agadir",
  "Fes",
  "Tangier",
  "Rabat",
  "Essaouira",
  "Merzouga",
  "Chefchaouen",
  "Ouarzazate",
];

type SeoContent = {
  ogLocale: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  h1: string;
  desc: string;
  appTitle: string;
  appDesc: string;
  noscriptPrompt: string;
  faqs: Array<{ q: string; a: string }>;
};

const LANGUAGE_ALTERNATES = {
  en: `${SITE_URL}/trip-finder`,
  fr: `${SITE_URL}/fr/trip-finder`,
  es: `${SITE_URL}/es/trip-finder`,
  it: `${SITE_URL}/it/trip-finder`,
  de: `${SITE_URL}/de/trip-finder`,
  ar: `${SITE_URL}/ar/trip-finder`,
  pt: `${SITE_URL}/pt/trip-finder`,
  nl: `${SITE_URL}/nl/trip-finder`,
  "x-default": `${SITE_URL}/trip-finder`,
};

export const TRIP_FINDER_SEO_DATA: Record<LanguageCode, SeoContent> = {
  en: {
    ogLocale: "en_US",
    metaTitle: `Morocco Private Driver & Fixed-Price Transfer Quote | ${SITE_NAME}`,
    metaDesc:
      "Get an instant fixed-price quote for a private driver in Morocco. Book airport transfers (RAK, CMN, AGA, FEZ, TNG), Marrakech to Essaouira or Fes city-to-city rides, Atlas day trips & Sahara tours — fuel and tolls included.",
    keywords: [
      "private driver Morocco",
      "Morocco private transfers",
      "Morocco transfer quote",
      "Morocco trip planner",
      "Marrakech airport transfer",
      "Casablanca airport transfer",
      "Marrakech to Essaouira private transfer",
      "Casablanca to Marrakech private driver",
      "Morocco chauffeur service",
      "Morocco private desert tour",
    ],
    h1: "Morocco Private Driver, Airport Transfer & Chauffeur Quote Finder",
    desc: "Plan your custom route across Morocco, match the ideal sedan, SUV, Mercedes Vito van or minibus, and get a guaranteed fixed-price chauffeur quote for airport transfers, city-to-city routes, Atlas Mountains day trips and Sahara desert tours.",
    appTitle: "Morocco Private Transfer Quote & Route Calculator",
    appDesc: "Calculate guaranteed flat rates for door-to-door private airport transfers, intercity rides, and custom desert tours across Morocco with instant WhatsApp and email delivery.",
    noscriptPrompt:
      "Please enable JavaScript to use the Morocco Private Transfer Quote Finder, or message us directly on WhatsApp at +212 760-426269 for an instant fixed-price chauffeur quote.",
    faqs: [
      {
        q: "How does the Morocco Trip Finder calculate transfer prices?",
        a: "Prices are calculated based on our fixed door-to-door rates per vehicle (sedan, SUV, van, minibus). All quotes include fuel, highway tolls, vehicle A/C, and a professional licensed chauffeur with zero hidden fees.",
      },
      {
        q: "Can I book an airport transfer or city-to-city trip in Morocco directly on WhatsApp?",
        a: "Yes. Once you select your route and vehicle, your customized itinerary and guaranteed flat price are pre-written into a WhatsApp message for instant 24/7 confirmation with our team.",
      },
      {
        q: "Which destinations in Morocco are covered?",
        a: "We cover all major destinations including Marrakech, Casablanca (CMN Airport), Agadir, Fes, Tangier, Rabat, Essaouira, the High Atlas (Ourika, Imlil), and Merzouga Sahara Desert.",
      },
    ],
  },
  fr: {
    ogLocale: "fr_FR",
    metaTitle: `Chauffeur Privé Maroc & Devis Transfert Tarif Fixe | ${SITE_NAME}`,
    metaDesc:
      "Calculez votre devis à tarif fixe pour un chauffeur privé au Maroc : transferts aéroport Marrakech, Casablanca, Agadir, Fès, trajets intervilles, excursions Atlas et circuits désert Merzouga carburant et péages inclus.",
    keywords: [
      "chauffeur privé Maroc",
      "transfert privé Maroc",
      "devis transfert Maroc",
      "transfert aéroport Marrakech",
      "transfert Casablanca Marrakech",
      "VTC Maroc tarif fixe",
      "location voiture avec chauffeur Maroc",
      "circuit désert Merzouga chauffeur privé",
    ],
    h1: "Planificateur de Trajet & Devis Chauffeur Privé au Maroc",
    desc: "Sélectionnez votre itinéraire au Maroc, choisissez votre véhicule (berline, SUV 4x4, van Mercedes Vito ou minibus) et obtenez un tarif fixe garanti pour vos transferts aéroport, liaisons intervilles et circuits privés.",
    appTitle: "Calculateur de Devis & Planificateur de Transfert Privé au Maroc",
    appDesc: "Estimez instantanément le tarif fixe tout compris de votre transfert aéroport, trajet intervilles ou circuit privé au Maroc avec confirmation directe sur WhatsApp ou par e-mail.",
    noscriptPrompt:
      "Veuillez activer JavaScript pour utiliser le planificateur de transfert au Maroc, ou contactez-nous sur WhatsApp au +212 760-426269 pour recevoir un devis à tarif fixe.",
    faqs: [
      {
        q: "Comment le simulateur de trajet calcule-t-il les tarifs au Maroc ?",
        a: "Les prix sont calculés selon nos forfaits fermes par véhicule (berline, SUV 4x4, minivan, minibus). Tous les tarifs incluent le carburant, les péages d'autoroute, la climatisation et un chauffeur professionnel sans frais cachés.",
      },
      {
        q: "Puis-je réserver mon transfert directement sur WhatsApp ?",
        a: "Oui. Dès que vous choisissez votre trajet et votre niveau de confort, votre message de réservation est pré-rédigé pour une confirmation immédiate sur WhatsApp 24h/24.",
      },
      {
        q: "Quelles destinations et aéroports du Maroc sont desservis ?",
        a: "Nous assurons la prise en charge à Marrakech, Casablanca (Aéroport CMN), Agadir, Fès, Tanger, Rabat, Essaouira, l'Atlas (Ourika, Imlil) et le désert de Merzouga.",
      },
    ],
  },
  es: {
    ogLocale: "es_ES",
    metaTitle: `Chófer Privado Marruecos · Presupuesto Traslados Fijos | ${SITE_NAME}`,
    metaDesc:
      "Calcula al instante el precio cerrado de tu chófer privado en Marruecos: traslados aeropuertos de Marrakech, Casablanca, Agadir y Fez, rutas entre ciudades, excursiones al Atlas y tours al desierto todo incluido.",
    keywords: [
      "chófer privado Marruecos",
      "traslados privados Marruecos",
      "traslado aeropuerto Marrakech",
      "presupuesto traslado Marruecos",
      "Casablanca a Marrakech traslado privado",
      "conductor privado Marruecos",
      "tour desierto Merzouga privado",
    ],
    h1: "Planificador de Rutas y Presupuesto de Chófer Privado en Marruecos",
    desc: "Planifica tu ruta por Marruecos, elige sedán, SUV, van Mercedes Vito o minibús y obtén un precio cerrado garantizado todo incluido para aeropuertos, viajes entre ciudades, excursiones y circuitos privados.",
    appTitle: "Calculadora de Presupuestos y Rutas de Traslados en Marruecos",
    appDesc: "Calcula traslados puerta a puerta, recogidas en aeropuertos y excursiones por Marruecos con precios cerrados todo incluido y confirmación rápida por WhatsApp o correo.",
    noscriptPrompt:
      "Activa JavaScript para utilizar el calculador de rutas y traslados en Marruecos, o escríbenos por WhatsApp al +212 760-426269 para obtener precio cerrado al instante.",
    faqs: [
      {
        q: "¿Cómo calcula las tarifas el buscador de traslados en Marruecos?",
        a: "Los precios se calculan según nuestras tarifas fijas oficiales por vehículo (sedán, SUV 4x4, van, minibús). Incluyen combustible, peajes, aire acondicionado y chófer profesional sin costes ocultos.",
      },
      {
        q: "¿Puedo reservar directamente por WhatsApp?",
        a: "Sí. Al completar la selección de ruta y vehículo, su mensaje se genera automáticamente con el precio cerrado para confirmación inmediata por WhatsApp las 24 horas.",
      },
      {
        q: "¿Qué ciudades y aeropuertos cubre el servicio?",
        a: "Cubrimos las principales ciudades y aeropuertos: Marrakech, Casablanca (CMN), Agadir, Fez, Tánger, Rabat, Essaouira, el Alto Atlas y el desierto de Merzouga.",
      },
    ],
  },
  it: {
    ogLocale: "it_IT",
    metaTitle: `Autista Privato Marocco · Preventivo Transfer Prezzo Fisso | ${SITE_NAME}`,
    metaDesc:
      "Calcola subito il preventivo a prezzo fisso per autista privato in Marocco: transfer aeroporti Marrakech, Casablanca, Agadir e Fes, tratte interurbane, escursioni Atlante e tour nel deserto tutto incluso.",
    keywords: [
      "autista privato Marocco",
      "transfer privati Marocco",
      "transfer aeroporto Marrakech",
      "preventivo transfer Marocco",
      "Casablanca Marrakech transfer privato",
      "noleggio con conducente Marocco",
      "tour deserto Merzouga privato",
    ],
    h1: "Pianificatore Itinerari e Preventivo Autista Privato in Marocco",
    desc: "Pianifica il tuo itinerario in Marocco, scegli berlina, SUV, van Mercedes Vito o minibus e ottieni un preventivo a prezzo fisso garantito per transfer aeroportuali, tratte interurbane e tour privati.",
    appTitle: "Calcolatore Preventivi e Itinerari Transfer Privati Marocco",
    appDesc: "Calcolate transfer aeroportuali, tratte tra città e tour su misura in Marocco a prezzo fisso garantito tutto incluso con conferma su WhatsApp o email.",
    noscriptPrompt:
      "Abilita JavaScript per utilizzare il calcolatore transfer in Marocco oppure contattaci su WhatsApp al +212 760-426269 per un preventivo a prezzo fisso.",
    faqs: [
      {
        q: "Come vengono calcolati i prezzi dei transfer in Marocco?",
        a: "Le tariffe sono fisse per veicolo (berlina, SUV, van, minibus) e includono carburante, pedaggi autostradali, climatizzazione e autista professionale senza supplementi.",
      },
      {
        q: "È possibile confermare la prenotazione direttamente su WhatsApp?",
        a: "Sì. Al termine del quiz il messaggio è già compilato con i dettagli e il prezzo fisso per una conferma immediata su WhatsApp.",
      },
      {
        q: "Quali città e aeroporti sono coperti?",
        a: "Copriamo tutto il Marocco: Marrakech, Casablanca (aeroporto CMN), Agadir, Fes, Tangeri, Rabat, Essaouira, Monti dell'Atlante e deserto di Merzouga.",
      },
    ],
  },
  de: {
    ogLocale: "de_DE",
    metaTitle: `Privatchauffeur Marokko · Transfer-Rechner Festpreis | ${SITE_NAME}`,
    metaDesc:
      "Berechnen Sie sofort Ihren garantierten Festpreis für Privatchauffeur und Flughafentransfer in Marokko: Marrakesch, Casablanca, Agadir, Fès, Überlandtransfers, Atlas-Ausflüge & Wüstentouren inklusive Kraftstoff und Maut.",
    keywords: [
      "Privatchauffeur Marokko",
      "Flughafentransfer Marrakesch",
      "Privattransfer Marokko Festpreis",
      "Casablanca nach Marrakesch Transfer",
      "Privater Fahrer Marokko",
      "Marokko Rundreise mit Fahrer",
      "Wüstentour Merzouga Privattransfer",
    ],
    h1: "Reiseplaner & Festpreis-Rechner für Privatchauffeur in Marokko",
    desc: "Planen Sie Ihre Wunschroute durch Marokko, wählen Sie Limousine, SUV, Mercedes Vito Van oder Minibus und erhalten Sie sofort ein verbindliches Festpreisangebot für Flughafentransfers, Fernstrecken und Wüstentouren.",
    appTitle: "Marokko Transfer-Festpreisrechner & Privatchauffeur-Planer",
    appDesc: "Berechnen Sie private Flughafentransfers, Städteverbindungen und Wüstentouren in Marokko zum garantierten All-inclusive-Festpreis per WhatsApp oder E-Mail.",
    noscriptPrompt:
      "Bitte aktivieren Sie JavaScript für den Marokko Transfer-Planer oder schreiben Sie uns direkt per WhatsApp an +212 760-426269 für ein sofortiges Festpreisangebot.",
    faqs: [
      {
        q: "Wie berechnet der Reise-Finder die Transferpreise?",
        a: "Die Preise basieren auf verbindlichen Pauschalpreisen pro Fahrzeug (Limousine, SUV, Van, Minibus) inklusive Treibstoff, Maut, Klimaanlage und Privatchauffeur ohne versteckte Kosten.",
      },
      {
        q: "Kann ich die Fahrt direkt über WhatsApp buchen?",
        a: "Ja. Nach der Auswahl von Route und Fahrzeug wird Ihre Anfrage mit Festpreis vorformuliert und kann mit einem Klick auf WhatsApp bestätigt werden.",
      },
      {
        q: "Welche Regionen und Flughäfen in Marokko werden bedient?",
        a: "Wir bedienen Marrakesch, Casablanca (Flughafen CMN), Agadir, Fès, Tanger, Rabat, Essaouira, das Atlasgebirge und die Sahara bei Merzouga.",
      },
    ],
  },
  ar: {
    ogLocale: "ar_MA",
    metaTitle: `سائق خاص في المغرب · حاسبة أسعار التوصيل والرحلات | ${SITE_NAME}`,
    metaDesc:
      "احسب السعر الثابت الشامل لخدمة سائق خاص في المغرب: توصيل مطار مراكش والدار البيضاء وأكادير وفاس، التنقل بين المدن، رحلات جبال الأطلس والصحراء شاملة الوقود ورسوم الطرق السريعة.",
    keywords: [
      "سائق خاص في المغرب",
      "توصيل مطار مراكش",
      "توصيل مطار الدار البيضاء",
      "سيارة مع سائق في المغرب",
      "سعر توصيل مراكش الدار البيضاء",
      "رحلات خاصة المغرب",
      "جولات الصحراء مرزوكة سائق خاص",
    ],
    h1: "مخطط الرحلات وحاسبة أسعار السائق الخاص والتوصيل في المغرب",
    desc: "خطط لمسارك في المغرب، اختر السيارة المناسبة (سيدان، دفع رباعي، فان مرسيدس فيتو أو ميني باص) واحصل فوراً على سعر ثابت ومضمون لتوصيل المطارات والتنقل بين المدن والجولات السياحية الخاصة.",
    appTitle: "حاسبة أسعار السائق الخاص ومخطط الرحلات في المغرب",
    appDesc: "خطط لرحلاتك وتوصيل المطارات والتنقل بين المدن المغربية بأسعار ثابتة وشاملة للوقود والرسوم مع تأكيد فوري عبر واتساب أو البريد الإلكتروني.",
    noscriptPrompt:
      "يرجى تفعيل جافاسكربت لاستخدام حاسبة رحلات المغرب، أو تواصل معنا مباشرة عبر واتساب على +212 760-426269 للحصول على سعر ثابت فوري.",
    faqs: [
      {
        q: "كيف تحسب أسعار الرحلات والتوصيل الخاص في المغرب؟",
        a: "تحسب الأسعار بناءً على تعرفة ثابتة شاملة لكل سيارة (سيدان، دفع رباعي، فان عائلي، ميني باص)، وتشمل الوقود، رسوم الطرق السريعة، والتكييف بدون أي مصاريف خفية.",
      },
      {
        q: "هل يمكنني تأكيد الحجز فوراً عبر واتساب؟",
        a: "نعم، بمجرد اختيار المسار وفئة السيارة، تتجهز رسالتك بالسعر المعتمد للتأكيد الفوري عبر واتساب مع فريقنا على مدار الساعة.",
      },
      {
        q: "ما هي المدن والمطارات المغطاة في المغرب؟",
        a: "نغطي كافة أرجاء المغرب بما فيها مراكش، الدار البيضاء (مطار محمد الخامس)، أكادير، فاس، طنجة، الرباط، الصويرة، جبال الأطلس وصحراء مرزوكة.",
      },
    ],
  },
  pt: {
    ogLocale: "pt_PT",
    metaTitle: `Motorista Privado Marrocos · Orçamento Transfer Preço Fixo | ${SITE_NAME}`,
    metaDesc:
      "Calcule de imediato o preço fixo garantido para motorista privado em Marrocos: transfers de aeroporto Marraquexe, Casablanca, Agadir e Fez, rotas interurbanas, Atlas e circuitos no deserto tudo incluído.",
    keywords: [
      "motorista privado Marrocos",
      "transfer privado Marrocos",
      "transfer aeroporto Marraquexe",
      "orçamento transfer Marrocos",
      "Casablanca para Marraquexe transfer",
      "motorista particular Marrocos",
      "passeio deserto Merzouga privado",
    ],
    h1: "Planeador de Viagens e Orçamento de Motorista Privado em Marrocos",
    desc: "Planeie o seu itinerário em Marrocos, escolha sedan, SUV, carrinha Mercedes Vito ou miniautocarro e garanta um preço fixo tudo incluído para transfers de aeroporto, ligações entre cidades e tours privados.",
    appTitle: "Simulador de Preços e Rotas para Transfers Privados em Marrocos",
    appDesc: "Calcule transfers de aeroporto, viagens interurbanas e circuitos no deserto em Marrocos com preço fixo garantido via WhatsApp ou email.",
    noscriptPrompt:
      "Ative o JavaScript para utilizar o calculador de transfers em Marrocos ou contacte-nos diretamente no WhatsApp +212 760-426269 para orçamento imediato.",
    faqs: [
      {
        q: "Como são calculados os preços dos transfers em Marrocos?",
        a: "Os valores são fixos por veículo (sedan, SUV, monovolume, miniautocarro) e incluem combustível, portagens, ar condicionado e motorista profissional.",
      },
      {
        q: "Posso reservar diretamente pelo WhatsApp?",
        a: "Sim. Ao concluir a escolha do itinerário e veículo, a mensagem fica pré-preenchida com o preço fixo para confirmação no WhatsApp.",
      },
      {
        q: "Quais são as cidades e aeroportos abrangidos?",
        a: "Operamos em todo o país: Marraquexe, Casablanca (aeroporto CMN), Agadir, Fez, Tânger, Rabat, Essaouira, Montanhas do Atlas e Deserto de Merzouga.",
      },
    ],
  },
  nl: {
    ogLocale: "nl_NL",
    metaTitle: `Privéchauffeur Marokko · Transfer Calculator Vaste Prijs | ${SITE_NAME}`,
    metaDesc:
      "Bereken direct uw gegarandeerde vaste all-in prijs voor een privéchauffeur in Marokko: luchthaventransfers Marrakech, Casablanca, Agadir & Fes, intercity ritten, Atlas dagtrips en woestijntours inclusief brandstof en tol.",
    keywords: [
      "privéchauffeur Marokko",
      "luchthaventransfer Marrakech",
      "privé transfer Marokko vaste prijs",
      "Casablanca naar Marrakech transfer",
      "auto met chauffeur Marokko",
      "dagtrip Atlasgebergte chauffeur",
      "woestijntour Merzouga privé",
    ],
    h1: "Reisplanner & Vaste Prijs Calculator voor Privéchauffeur Marokko",
    desc: "Plan uw route door Marokko, kies een sedan, SUV, Mercedes Vito minibus of touringcar en ontvang direct een vaste all-in offerte voor luchthaventransfers, intercity ritten en woestijntours.",
    appTitle: "Marokko Transfer Prijscalculator & Privéchauffeur Reisplanner",
    appDesc: "Plan luchthaventransfers, intercity ritten en woestijntours in Marokko tegen gegarandeerde vaste tarieven met snelle WhatsApp- of e-mailofferte.",
    noscriptPrompt:
      "Schakel JavaScript in om de Marokko Transfer Calculator te gebruiken of stuur ons direct een WhatsApp-bericht op +212 760-426269 voor een vaste prijsopgave.",
    faqs: [
      {
        q: "Hoe worden de ritprijzen berekend?",
        a: "Prijzen zijn gebaseerd op vaste tarieven per voertuig (sedan, SUV, minivan, minibus) inclusief brandstof, tolwegen, airco en een gecertificeerde privéchauffeur zonder verborgen kosten.",
      },
      {
        q: "Kan ik direct via WhatsApp boeken?",
        a: "Ja. Na het kiezen van uw route en gewenste voertuig staat uw WhatsApp-bericht met vaste prijs klaar voor directe 24/7 bevestiging.",
      },
      {
        q: "Welke steden en vliegvelden in Marokko worden gedekt?",
        a: "Wij dekken Marrakech, Casablanca (CMN Airport), Agadir, Fes, Tanger, Rabat, Essaouira, het Atlasgebergte en de Merzouga Sahara.",
      },
    ],
  },
};

export function getTripFinderMetadata(lang: LanguageCode): Metadata {
  const data = TRIP_FINDER_SEO_DATA[lang] || TRIP_FINDER_SEO_DATA.en;
  const canonicalUrl = lang === "en" ? `${SITE_URL}/trip-finder` : `${SITE_URL}/${lang}/trip-finder`;

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDesc,
    keywords: data.keywords,
    other: MOROCCO_GEO_META,
    alternates: {
      canonical: canonicalUrl,
      languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: data.ogLocale,
      type: "website",
      images: [
        {
          url: "/img/og-image.jpg",
          width: 1200,
          height: 630,
          alt: data.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDesc,
      images: ["/img/og-image.jpg"],
    },
  };
}

export function getTripFinderJsonLd(lang: LanguageCode) {
  const data = TRIP_FINDER_SEO_DATA[lang] || TRIP_FINDER_SEO_DATA.en;
  const canonicalUrl = lang === "en" ? `${SITE_URL}/trip-finder` : `${SITE_URL}/${lang}/trip-finder`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#app`,
        url: canonicalUrl,
        name: data.appTitle,
        applicationCategory: "TravelApplication",
        operatingSystem: "All",
        description: data.appDesc,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "30",
          highPrice: "950",
          offerCount: "150",
        },
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: data.h1,
        serviceType: "Private Chauffeur & Airport Transfer Service",
        description: data.desc,
        provider: {
          "@type": "TravelAgency",
          name: SITE_NAME,
          url: SITE_URL,
          telephone: "+212760426269",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            addressCountry: "MA",
            addressLocality: "Marrakech",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 31.6295,
            longitude: -7.9811,
          },
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Morocco",
          },
          ...CITIES_SERVED.map((city) => ({
            "@type": "City",
            name: city,
          })),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Morocco Private Driver & Transfer Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Morocco Airport Transfers (Meet & Greet)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "City-to-City Door-to-Door Private Transfers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "High Atlas Mountains & Desert Day Trips",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Multi-Day Private Desert Tours",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };
}
