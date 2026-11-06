export type LanguageCode = "en" | "fr" | "es" | "it" | "de" | "ar" | "pt" | "nl";

export type LanguageInfo = {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
};

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  en: { code: "en", label: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  fr: { code: "fr", label: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  es: { code: "es", label: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  it: { code: "it", label: "Italian", nativeName: "Italiano", flag: "🇮🇹", dir: "ltr" },
  de: { code: "de", label: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  ar: { code: "ar", label: "Arabic", nativeName: "العربية", flag: "🇲🇦", dir: "rtl" },
  pt: { code: "pt", label: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr" },
  nl: { code: "nl", label: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", dir: "ltr" },
};

export const LANGUAGE_CODES = Object.keys(LANGUAGES) as LanguageCode[];

export const TRANSLATIONS = {
  en: {
    nav: {
      transfers: "Transfers",
      airports: "Airports",
      city_to_city: "City-to-City",
      day_trips: "Day Trips",
      prices: "Prices",
      journal: "Journal",
      book: "Book",
    },
    hero: {
      tagline: "Private Chauffeurs & Transfers in Morocco",
      title: "Fixed Price Chauffeur Services",
      subtitle: "Door-to-door private transfers, airport pickups & day trips across Morocco. Guaranteed fixed rates, English-speaking professional drivers, 24/7 WhatsApp booking.",
      fromPlaceholder: "From (e.g. Marrakech Airport, Riad...)",
      toPlaceholder: "To (e.g. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Date & Time",
      passengersPlaceholder: "Passengers",
      submit: "Get Instant Fixed Quote",
    },
    badges: {
      fixedPrice: "Guaranteed Flat Rate",
      bilingual: "Licensed English Chauffeurs",
      zeroDeposit: "0% Deposit Under €300",
      flightTracking: "Real-Time Flight Tracking",
    },
    waMsg: (from: string, to: string) =>
      `Salam! I would like to book a private transfer from ${from} to ${to}. Can you confirm fixed price and availability?`,
  },
  fr: {
    nav: {
      transfers: "Transferts",
      airports: "Aéroports",
      city_to_city: "Intervilles",
      day_trips: "Excursions",
      prices: "Tarifs",
      journal: "Journal",
      book: "Réserver",
    },
    hero: {
      tagline: "Chauffeur Privé & Transferts au Maroc",
      title: "Transferts Privés à Prix Fixes Garantis",
      subtitle: "Service de chauffeur privé porte-à-porte, transferts aéroport et excursions à travers le Maroc. Prix fermes tout compris, chauffeurs professionnels bilingues, réservation immédiate sur WhatsApp.",
      fromPlaceholder: "Départ (ex. Aéroport Marrakech, Riad...)",
      toPlaceholder: "Arrivée (ex. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Date & Heure",
      passengersPlaceholder: "Passagers",
      submit: "Obtenir mon tarif fixe",
    },
    badges: {
      fixedPrice: "Tarifs Fixes Garantis",
      bilingual: "Chauffeurs Professionnels Bilingues",
      zeroDeposit: "0% d'Acompte < 300 €",
      flightTracking: "Suivi de Vol en Temps Réel",
    },
    waMsg: (from: string, to: string) =>
      `Bonjour! Je souhaite réserver un transfert privé de ${from} à ${to}. Pouvez-vous me confirmer la disponibilité et le tarif fixe?`,
  },
  es: {
    nav: {
      transfers: "Traslados",
      airports: "Aeropuertos",
      city_to_city: "Interurbanos",
      day_trips: "Excursiones",
      prices: "Tarifas",
      journal: "Blog",
      book: "Reservar",
    },
    hero: {
      tagline: "Chófer Privado y Traslados en Marruecos",
      title: "Traslados Privados a Precio Fijo Garantizado",
      subtitle: "Servicio de chófer privado puerta a puerta, recogidas en aeropuerto y excursiones por todo Marruecos. Precios cerrados con todo incluido, conductores profesionales, reserva instantánea en WhatsApp.",
      fromPlaceholder: "Origen (ej. Aeropuerto Marrakech, Riad...)",
      toPlaceholder: "Destino (ej. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Fecha y hora",
      passengersPlaceholder: "Pasajeros",
      submit: "Consultar Precio Fijo",
    },
    badges: {
      fixedPrice: "Tarifa Fija Garantizada",
      bilingual: "Conductores Profesionales",
      zeroDeposit: "0% Anticipo < 300 €",
      flightTracking: "Seguimiento de Vuelos en Tiempo Real",
    },
    waMsg: (from: string, to: string) =>
      `¡Hola! Me gustaría reservar un traslado privado desde ${from} hasta ${to}. ¿Podrían confirmarme el precio fijo y la disponibilidad?`,
  },
  it: {
    nav: {
      transfers: "Trasferimenti",
      airports: "Aeroporti",
      city_to_city: "Interurbani",
      day_trips: "Escursioni",
      prices: "Tariffe",
      journal: "Blog",
      book: "Prenota",
    },
    hero: {
      tagline: "Autista Privato e Trasferimenti in Marocco",
      title: "Trasferimenti Privati a Prezzo Fisso Garantito",
      subtitle: "Servizio autista porta a porta, transfer aeroportuali ed escursioni in tutto il Marocco. Tariffe fisse tutto incluso, autisti professionali con esperienza, conferma immediata su WhatsApp.",
      fromPlaceholder: "Partenza (es. Aeroporto Marrakech, Riad...)",
      toPlaceholder: "Destinazione (es. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Data e ora",
      passengersPlaceholder: "Passeggeri",
      submit: "Richiedi Prezzo Fisso",
    },
    badges: {
      fixedPrice: "Tariffa Fissa Garantita",
      bilingual: "Autisti Professionali",
      zeroDeposit: "Zero Anticipo < 300 €",
      flightTracking: "Monitoraggio Voli in Tempo Reale",
    },
    waMsg: (from: string, to: string) =>
      `Buongiorno! Vorrei prenotare un trasferimento privato da ${from} a ${to}. Potete confermare la disponibilità e la tariffa fissa?`,
  },
  de: {
    nav: {
      transfers: "Transfers",
      airports: "Flughäfen",
      city_to_city: "Fernstrecken",
      day_trips: "Tagesausflüge",
      prices: "Preise",
      journal: "Magazin",
      book: "Buchen",
    },
    hero: {
      tagline: "Privatchauffeur & Transfers in Marokko",
      title: "Private Transfers zum Garantierten Festpreis",
      subtitle: "Zuverlässiger Tür-zu-Tür Chauffeurservice, Flughafen-Pickups und Rundreisen in ganz Marokko. Feste Pauschalpreise, lizenzierte Fahrer, sofortige Buchung über WhatsApp.",
      fromPlaceholder: "Abfahrtsort (z.B. Flughafen Marrakesch, Riad...)",
      toPlaceholder: "Zielort (z.B. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Datum & Uhrzeit",
      passengersPlaceholder: "Passagiere",
      submit: "Festpreis Anfragen",
    },
    badges: {
      fixedPrice: "Garantierter Festpreis",
      bilingual: "Lizenzierte Chauffeure",
      zeroDeposit: "0% Anzahlung unter 300 €",
      flightTracking: "Flugverfolgung in Echtzeit",
    },
    waMsg: (from: string, to: string) =>
      `Guten Tag! Ich möchte einen privaten Transfer von ${from} nach ${to} buchen. Können Sie mir die Verfügbarkeit und den Festpreis bestätigen?`,
  },
  ar: {
    nav: {
      transfers: "التوصيل والتنقلات",
      airports: "المطارات",
      city_to_city: "بين المدن",
      day_trips: "رحلات يومية",
      prices: "الأسعار",
      journal: "المجلة",
      book: "احجز الآن",
    },
    hero: {
      tagline: "سائق خاص وتوصيل VIP في المغرب",
      title: "خدمات التوصيل الخاص بأسعار ثابتة ومضمونة",
      subtitle: "خدمة سائق خاص من الباب إلى الباب، استقبال في المطارات، وجولات سياحية راقية في جميع مدن المغرب. سيارات مرسيدس وسيارات عائلية فخمة، حجز فوري عبر واتساب.",
      fromPlaceholder: "نقطة الانطلاق (مثال: مطار مراكش، الفندق...)",
      toPlaceholder: "الوجهة (مثال: الصويرة، الدار البيضاء، أكادير...)",
      datePlaceholder: "التاريخ والوقت",
      passengersPlaceholder: "عدد الركاب",
      submit: "احصل على سعر فوري ثابت",
    },
    badges: {
      fixedPrice: "أسعار ثابتة شاملة",
      bilingual: "سائقون محترفون ومرخصون",
      zeroDeposit: "بدون عربون مسبق لأقل من 300€",
      flightTracking: "متابعة مباشرة لمواعيد الطيران",
    },
    waMsg: (from: string, to: string) =>
      `السلام عليكم! أود حجز خدمة سائق خاص وتوصيل من ${from} إلى ${to}. هل يمكنكم تأكيد السعر الثابت والتوافر؟`,
  },
  pt: {
    nav: {
      transfers: "Transfers",
      airports: "Aeroportos",
      city_to_city: "Entre Cidades",
      day_trips: "Passeios de um Dia",
      prices: "Preços",
      journal: "Blog",
      book: "Reservar",
    },
    hero: {
      tagline: "Motorista Privado e Transfers em Marrocos",
      title: "Transfers Privados com Preço Fixo Garantido",
      subtitle: "Serviço porta a porta com motorista particular, transferências de aeroporto e passeios por todo Marrocos. Preços fixos com tudo incluído, condutores experientes, reserva direta no WhatsApp.",
      fromPlaceholder: "Partida (ex: Aeroporto de Marraquexe, Riad...)",
      toPlaceholder: "Destino (ex: Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Data e hora",
      passengersPlaceholder: "Passageiros",
      submit: "Obter Preço Fixo",
    },
    badges: {
      fixedPrice: "Preço Fixo Garantido",
      bilingual: "Motoristas Profissionais",
      zeroDeposit: "0% Entrada para < 300 €",
      flightTracking: "Monitorização de Voos em Tempo Real",
    },
    waMsg: (from: string, to: string) =>
      `Olá! Gostaria de reservar um transfer privado de ${from} para ${to}. Poderiam confirmar a disponibilidade e o preço fixo?`,
  },
  nl: {
    nav: {
      transfers: "Transfers",
      airports: "Luchthavens",
      city_to_city: "Stad naar Stad",
      day_trips: "Dagtochten",
      prices: "Tarieven",
      journal: "Blog",
      book: "Boeken",
    },
    hero: {
      tagline: "Privé Chauffeur & Transfers in Marokko",
      title: "Privé Transfers tegen Gegarandeerde Vaste Prijzen",
      subtitle: "Betrouwbare deur-tot-deur transfers, luchthavenvervoer en excursies door heel Marokko. All-inclusive vaste tarieven, ervaren chauffeurs, directe boeking via WhatsApp.",
      fromPlaceholder: "Vertrek (bijv. Luchthaven Marrakech, Riad...)",
      toPlaceholder: "Bestemming (bijv. Essaouira, Casablanca, Agadir...)",
      datePlaceholder: "Datum & tijd",
      passengersPlaceholder: "Passagiers",
      submit: "Vaste Prijs Aanvragen",
    },
    badges: {
      fixedPrice: "Gegarandeerde Vaste Prijs",
      bilingual: "Ervaren Chauffeurs",
      zeroDeposit: "0% Aanbetaling onder €300",
      flightTracking: "Realtime Vluchtmonitoring",
    },
    waMsg: (from: string, to: string) =>
      `Hallo! Ik wil graag een privé transfer boeken van ${from} naar ${to}. Kunt u de beschikbaarheid en vaste prijs bevestigen?`,
  },
};

/** Extracts active language code from current pathname */
export function getLangFromPathname(pathname: string): LanguageCode {
  const seg = pathname.split("/")[1]?.toLowerCase();
  if (seg && (LANGUAGE_CODES as string[]).includes(seg) && seg !== "en") {
    return seg as LanguageCode;
  }
  return "en";
}

/** Converts a path to another language target */
export function getLocalizedPath(pathname: string, targetLang: LanguageCode): string {
  const currentLang = getLangFromPathname(pathname);
  let cleanPath = pathname;

  if (currentLang !== "en") {
    cleanPath = pathname.replace(new RegExp(`^/${currentLang}`), "") || "/";
  }

  if (targetLang === "en") {
    return cleanPath;
  }

  return cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
}
