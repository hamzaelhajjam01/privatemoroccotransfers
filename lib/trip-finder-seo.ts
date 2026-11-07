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
  h1: string;
  desc: string;
  appTitle: string;
  appDesc: string;
  faqs: Array<{ q: string; a: string }>;
};

export const TRIP_FINDER_SEO_DATA: Record<LanguageCode, SeoContent> = {
  en: {
    h1: "Morocco Private Transfer & Chauffeur Trip Finder",
    desc: "Interactive 3D route planning, vehicle matching and guaranteed fixed-price chauffeur quotes across Morocco. Direct WhatsApp booking with professional English-speaking drivers.",
    appTitle: "Morocco 3D Trip Finder & Transfer Price Calculator",
    appDesc: "Plan custom door-to-door private transfers, airport pickups, and desert tours across Morocco with guaranteed flat rates and vehicle selection.",
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
    h1: "Simulateur 3D de Transfert Privé et Chauffeur au Maroc",
    desc: "Planificateur d'itinéraire 3D interactif, sélection de véhicule et calcul de tarif fixe garanti pour tout transfert privé au Maroc. Réservation directe sur WhatsApp avec chauffeurs professionnels bilingues.",
    appTitle: "Simulateur 3D et Calculateur de Transfert Privé au Maroc",
    appDesc: "Planifiez vos transferts aéroport, liaisons intervilles et circuits privés au Maroc avec des tarifs fixes garantis tout compris.",
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
    h1: "Buscador 3D de Traslados Privados y Chófer en Marruecos",
    desc: "Planificador de rutas 3D interactivo, selección de vehículos y tarifas fijas garantizadas en todo Marruecos. Reserva directa en WhatsApp con conductores profesionales.",
    appTitle: "Buscador 3D y Calculadora de Traslados en Marruecos",
    appDesc: "Calcule traslados puerta a puerta, recogidas en aeropuertos y excursiones por Marruecos con precios cerrados todo incluido.",
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
    h1: "Simulatore 3D di Transfer Privati e Autista in Marocco",
    desc: "Pianificazione itinerario 3D interattivo, scelta veicolo e calcolo tariffa fissa garantita per transfer in tutto il Marocco. Prenotazione immediata su WhatsApp.",
    appTitle: "Simulatore 3D e Calcolatore Transfer Privati Marocco",
    appDesc: "Pianificate i vostri transfer aeroportuali e viaggi interurbani in Marocco a prezzo fisso garantito tutto incluso.",
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
    h1: "3D Reise-Finder & Privatchauffeur-Rechner Marokko",
    desc: "Interaktive 3D-Routenplanung, Fahrzeugauswahl und garantierte Festpreise für private Transfers in ganz Marokko. Direkte WhatsApp-Buchung.",
    appTitle: "3D Reise-Finder & Transfer-Festpreisrechner Marokko",
    appDesc: "Planen Sie private Flughafentransfers, Fernstrecken und Wüstentouren in Marokko zum garantierten Festpreis.",
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
    h1: "مخطط الرحلات 3D التفاعلي وحاسبة أسعار السائق الخاص في المغرب",
    desc: "تخطيط مسارات الرحلات ثلاثي الأبعاد، اختيار فئة السيارة، والحصول على سعر ثابت مضمون للتوصيل الخاص في المغرب. حجز مباشر وفوري عبر واتساب مع سائقين مرخصين ومحترفين.",
    appTitle: "مخطط الرحلات التفاعلي 3D في المغرب",
    appDesc: "خطط لرحلاتك وتوصيل المطار والتنقل بين المدن المغربية بأسعار ثابتة ومضمونة بالكامل.",
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
    h1: "Planeador 3D de Viagens e Transfers Privados em Marrocos",
    desc: "Planeamento interativo 3D de rotas, escolha de viatura e cálculo de preços fixos garantidos para transfers em Marrocos. Reserva direta no WhatsApp.",
    appTitle: "Planeador 3D e Simulador de Transfers em Marrocos",
    appDesc: "Calcule transfers de aeroporto e viagens interurbanas em Marrocos com preços fixos garantidos e tudo incluído.",
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
    h1: "3D Reisplanner & Privéchauffeur Calculator Marokko",
    desc: "Interactieve 3D routeplanning, voertuigselectie en gegarandeerde vaste all-in prijzen voor transfers in heel Marokko. Directe WhatsApp boeking.",
    appTitle: "3D Reisplanner & Vaste Prijs Calculator Marokko",
    appDesc: "Plan luchthaventransfers, intercity ritten en woestijntours in Marokko tegen gegarandeerde vaste tarieven.",
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
