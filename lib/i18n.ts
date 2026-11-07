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

export const LOCALIZED_PLACES: Record<string, Partial<Record<LanguageCode, string>>> = {
  "Agadir": { en: "Agadir", fr: "Agadir", es: "Agadir", it: "Agadir", de: "Agadir", ar: "أكادير", pt: "Agadir", nl: "Agadir" },
  "Agadir Airport": { en: "Agadir Airport (AGA)", fr: "Aéroport d'Agadir (AGA)", es: "Aeropuerto de Agadir (AGA)", it: "Aeroporto di Agadir (AGA)", de: "Flughafen Agadir (AGA)", ar: "مطار أكادير المسيرة (AGA)", pt: "Aeroporto de Agadir (AGA)", nl: "Luchthaven Agadir (AGA)" },
  "Agafay Desert": { en: "Agafay Desert", fr: "Désert d'Agafay", es: "Desierto de Agafay", it: "Deserto di Agafay", de: "Agafay-Wüste", ar: "صحراء أكافاي", pt: "Deserto de Agafay", nl: "Agafay-woestijn" },
  "Ait Ben Haddou": { en: "Ait Ben Haddou", fr: "Aït Ben Haddou", es: "Aït Ben Haddou", it: "Aït Ben Haddou", de: "Aït Ben Haddou", ar: "آيت بن حدو", pt: "Aït Ben Haddou", nl: "Aït Ben Haddou" },
  "Casablanca": { en: "Casablanca", fr: "Casablanca", es: "Casablanca", it: "Casablanca", de: "Casablanca", ar: "الدار البيضاء", pt: "Casablanca", nl: "Casablanca" },
  "Casablanca Airport": { en: "Casablanca Airport (CMN)", fr: "Aéroport de Casablanca (CMN)", es: "Aeropuerto de Casablanca (CMN)", it: "Aeroporto di Casablanca (CMN)", de: "Flughafen Casablanca (CMN)", ar: "مطار محمد الخامس (CMN)", pt: "Aeroporto de Casablanca (CMN)", nl: "Luchthaven Casablanca (CMN)" },
  "Casablanca Airport (CMN)": { en: "Casablanca Airport (CMN)", fr: "Aéroport de Casablanca (CMN)", es: "Aeropuerto de Casablanca (CMN)", it: "Aeroporto di Casablanca (CMN)", de: "Flughafen Casablanca (CMN)", ar: "مطار محمد الخامس (CMN)", pt: "Aeroporto de Casablanca (CMN)", nl: "Luchthaven Casablanca (CMN)" },
  "Chefchaouen": { en: "Chefchaouen", fr: "Chefchaouen", es: "Chefchaouen", it: "Chefchaouen", de: "Chefchaouen", ar: "شفشاون", pt: "Chefchaouen", nl: "Chefchaouen" },
  "Essaouira": { en: "Essaouira", fr: "Essaouira", es: "Essaouira", it: "Essaouira", de: "Essaouira", ar: "الصويرة", pt: "Essaouira", nl: "Essaouira" },
  "Essaouira Airport (ESU)": { en: "Essaouira Airport (ESU)", fr: "Aéroport d'Essaouira (ESU)", es: "Aeropuerto de Essaouira (ESU)", it: "Aeroporto di Essaouira (ESU)", de: "Flughafen Essaouira (ESU)", ar: "مطار الصويرة (ESU)", pt: "Aeroporto de Essaouira (ESU)", nl: "Luchthaven Essaouira (ESU)" },
  "Fes": { en: "Fes", fr: "Fès", es: "Fez", it: "Fes", de: "Fès", ar: "فاس", pt: "Fez", nl: "Fes" },
  "Fes Airport (FEZ)": { en: "Fes Airport (FEZ)", fr: "Aéroport de Fès (FEZ)", es: "Aeropuerto de Fez (FEZ)", it: "Aeroporto di Fes (FEZ)", de: "Flughafen Fès (FEZ)", ar: "مطار فاس سايس (FEZ)", pt: "Aeroporto de Fez (FEZ)", nl: "Luchthaven Fes (FEZ)" },
  "Imlil": { en: "Imlil (Atlas)", fr: "Imlil (Mont Toubkal)", es: "Imlil (Atlas)", it: "Imlil (Alto Atlante)", de: "Imlil (Atlasgebirge)", ar: "إمليل (جبل توبقال)", pt: "Imlil (Atlas)", nl: "Imlil (Atlasgebergte)" },
  "Imsouane": { en: "Imsouane", fr: "Imsouane", es: "Imsouane", it: "Imsouane", de: "Imsouane", ar: "إمسوان", pt: "Imsouane", nl: "Imsouane" },
  "Marrakech": { en: "Marrakech", fr: "Marrakech", es: "Marrakech", it: "Marrakech", de: "Marrakesch", ar: "مراكش", pt: "Marraquexe", nl: "Marrakech" },
  "Marrakech Airport": { en: "Marrakech Airport (RAK)", fr: "Aéroport de Marrakech (RAK)", es: "Aeropuerto de Marrakech (RAK)", it: "Aeroporto di Marrakech (RAK)", de: "Flughafen Marrakesch (RAK)", ar: "مطار مراكش المنارة (RAK)", pt: "Aeroporto de Marraquexe (RAK)", nl: "Luchthaven Marrakech (RAK)" },
  "Meknes & Volubilis": { en: "Meknes & Volubilis", fr: "Meknès & Volubilis", es: "Meknes y Volubilis", it: "Meknes e Volubilis", de: "Meknès & Volubilis", ar: "مكناس ووليلي", pt: "Meknes e Volubilis", nl: "Meknes & Volubilis" },
  "Merzouga (Sahara)": { en: "Merzouga (Sahara)", fr: "Merzouga (Désert du Sahara)", es: "Merzouga (Desierto del Sahara)", it: "Merzouga (Deserto del Sahara)", de: "Merzouga (Sahara-Wüste)", ar: "صحراء مرزوكة", pt: "Merzouga (Deserto do Saara)", nl: "Merzouga (Sahara-woestijn)" },
  "Ouarzazate": { en: "Ouarzazate", fr: "Ouarzazate", es: "Ouarzazate", it: "Ouarzazate", de: "Ouarzazate", ar: "ورزازات", pt: "Ouarzazate", nl: "Ouarzazate" },
  "Ourika Valley": { en: "Ourika Valley", fr: "Vallée de l'Ourika", es: "Valle de Ourika", it: "Valle dell'Ourika", de: "Ourika-Tal", ar: "وادي أوريكا", pt: "Vale de Ourika", nl: "Ourika-vallei" },
  "Ouzoud Waterfalls": { en: "Ouzoud Waterfalls", fr: "Cascades d'Ouzoud", es: "Cascadas de Ouzoud", it: "Cascate di Ouzoud", de: "Ouzoud-Wasserfälle", ar: "شلالات أوزود", pt: "Cascatas de Ouzoud", nl: "Ouzoud-watervallen" },
  "Rabat": { en: "Rabat", fr: "Rabat", es: "Rabat", it: "Rabat", de: "Rabat", ar: "الرباط", pt: "Rabat", nl: "Rabat" },
  "Rabat Airport (RBA)": { en: "Rabat Airport (RBA)", fr: "Aéroport de Rabat (RBA)", es: "Aeropuerto de Rabat (RBA)", it: "Aeroporto di Rabat (RBA)", de: "Flughafen Rabat (RBA)", ar: "مطار الرباط سلا (RBA)", pt: "Aeroporto de Rabat (RBA)", nl: "Luchthaven Rabat (RBA)" },
  "Taghazout": { en: "Taghazout", fr: "Taghazout", es: "Taghazout", it: "Taghazout", de: "Taghazout", ar: "تغازوت", pt: "Taghazout", nl: "Taghazout" },
  "Tangier": { en: "Tangier", fr: "Tanger", es: "Tánger", it: "Tangeri", de: "Tanger", ar: "طنجة", pt: "Tânger", nl: "Tanger" },
  "Tangier Airport (TNG)": { en: "Tangier Airport (TNG)", fr: "Aéroport de Tanger (TNG)", es: "Aeropuerto de Tánger (TNG)", it: "Aeroporto di Tangeri (TNG)", de: "Flughafen Tanger (TNG)", ar: "مطار طنجة (TNG)", pt: "Aeroporto de Tânger (TNG)", nl: "Luchthaven Tanger (TNG)" },
  "Tangier Med Port": { en: "Tangier Med Port", fr: "Port Tanger Med", es: "Puerto de Tánger Med", it: "Porto di Tangeri Med", de: "Hafen Tanger Med", ar: "ميناء طنجة المتوسط", pt: "Porto de Tânger Med", nl: "Haven Tanger Med" },
};

export function getLocalizedPlace(name: string, lang: LanguageCode): string {
  return LOCALIZED_PLACES[name]?.[lang] || LOCALIZED_PLACES[name]?.en || name;
}

export const TRANSLATIONS = {
  en: {
    nav: { transfers: "Transfers", airports: "Airports", city_to_city: "City-to-City", day_trips: "Day Trips", prices: "Prices", trip_finder: "Trip Finder", journal: "Journal", book: "Book" },
    hero: { tagline: "Private Chauffeurs & Transfers in Morocco", title: "Fixed Price Chauffeur Services", subtitle: "Door-to-door private transfers, airport pickups & day trips across Morocco. Guaranteed fixed rates, English-speaking professional drivers, 24/7 WhatsApp booking.", fromPlaceholder: "From (e.g. Marrakech Airport, Riad...)", toPlaceholder: "To (e.g. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Date & Time", passengersPlaceholder: "Passengers", submit: "Get Instant Fixed Quote" },
    badges: { fixedPrice: "Guaranteed Flat Rate", bilingual: "Licensed English Chauffeurs", zeroDeposit: "0% Deposit Under €300", flightTracking: "Real-Time Flight Tracking" },
    waMsg: (from: string, to: string) => `Salam! I would like to book a private transfer from ${from} to ${to}. Can you confirm fixed price and availability?`,
  },
  fr: {
    nav: { transfers: "Transferts", airports: "Aéroports", city_to_city: "Intervilles", day_trips: "Excursions", prices: "Tarifs", trip_finder: "Trouver un Trajet", journal: "Journal", book: "Réserver" },
    hero: { tagline: "Chauffeur Privé & Transferts au Maroc", title: "Transferts Privés à Prix Fixes Garantis", subtitle: "Service de chauffeur privé porte-à-porte, transferts aéroport et excursions à travers le Maroc. Prix fermes tout compris, chauffeurs professionnels bilingues, réservation immédiate sur WhatsApp.", fromPlaceholder: "Départ (ex. Aéroport Marrakech, Riad...)", toPlaceholder: "Arrivée (ex. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Date & Heure", passengersPlaceholder: "Passagers", submit: "Obtenir mon tarif fixe" },
    badges: { fixedPrice: "Tarifs Fixes Garantis", bilingual: "Chauffeurs Professionnels Bilingues", zeroDeposit: "0% d'Acompte < 300 €", flightTracking: "Suivi de Vol en Temps Réel" },
    waMsg: (from: string, to: string) => `Bonjour! Je souhaite réserver un transfert privé de ${from} à ${to}. Pouvez-vous me confirmer la disponibilité et le tarif fixe?`,
  },
  es: {
    nav: { transfers: "Traslados", airports: "Aeropuertos", city_to_city: "Interurbanos", day_trips: "Excursiones", prices: "Tarifas", trip_finder: "Buscador de Viaje", journal: "Blog", book: "Reservar" },
    hero: { tagline: "Chófer Privado y Traslados en Marruecos", title: "Traslados Privados a Precio Fijo Garantizado", subtitle: "Servicio de chófer privado puerta a puerta, recogidas en aeropuerto y excursiones por todo Marruecos. Precios cerrados con todo incluido, conductores profesionales, reserva instantánea en WhatsApp.", fromPlaceholder: "Origen (ej. Aeropuerto Marrakech, Riad...)", toPlaceholder: "Destino (ej. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Fecha y hora", passengersPlaceholder: "Pasajeros", submit: "Consultar Precio Fijo" },
    badges: { fixedPrice: "Tarifa Fija Garantizada", bilingual: "Conductores Profesionales", zeroDeposit: "0% Anticipo < 300 €", flightTracking: "Seguimiento de Vuelos en Tiempo Real" },
    waMsg: (from: string, to: string) => `¡Hola! Me gustaría reservar un traslado privado desde ${from} hasta ${to}. ¿Podrían confirmarme el precio fijo y la disponibilidad?`,
  },
  it: {
    nav: { transfers: "Trasferimenti", airports: "Aeroporti", city_to_city: "Interurbani", day_trips: "Escursioni", prices: "Tariffe", trip_finder: "Trova Viaggio", journal: "Blog", book: "Prenota" },
    hero: { tagline: "Autista Privato e Trasferimenti in Marocco", title: "Trasferimenti Privati a Prezzo Fisso Garantito", subtitle: "Servizio autista porta a porta, transfer aeroportuali ed escursioni in tutto il Marocco. Tariffe fisse tutto incluso, autisti professionali con esperienza, conferma immediata su WhatsApp.", fromPlaceholder: "Partenza (es. Aeroporto Marrakech, Riad...)", toPlaceholder: "Destinazione (es. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Data e ora", passengersPlaceholder: "Passeggeri", submit: "Richiedi Prezzo Fisso" },
    badges: { fixedPrice: "Tariffa Fissa Garantita", bilingual: "Autisti Professionali", zeroDeposit: "Zero Anticipo < 300 €", flightTracking: "Monitoraggio Voli in Tempo Reale" },
    waMsg: (from: string, to: string) => `Buongiorno! Vorrei prenotare un trasferimento privato da ${from} a ${to}. Potete confermare la disponibilità e la tariffa fissa?`,
  },
  de: {
    nav: { transfers: "Transfers", airports: "Flughäfen", city_to_city: "Fernstrecken", day_trips: "Tagesausflüge", prices: "Preise", trip_finder: "Reise-Finder", journal: "Magazin", book: "Buchen" },
    hero: { tagline: "Privatchauffeur & Transfers in Marokko", title: "Private Transfers zum Garantierten Festpreis", subtitle: "Zuverlässiger Tür-zu-Tür Chauffeurservice, Flughafen-Pickups und Rundreisen in ganz Marokko. Feste Pauschalpreise, lizenzierte Fahrer, sofortige Buchung über WhatsApp.", fromPlaceholder: "Abfahrtsort (z.B. Flughafen Marrakesch, Riad...)", toPlaceholder: "Zielort (z.B. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Datum & Uhrzeit", passengersPlaceholder: "Passagiere", submit: "Festpreis Anfragen" },
    badges: { fixedPrice: "Garantierter Festpreis", bilingual: "Lizenzierte Chauffeure", zeroDeposit: "0% Anzahlung unter 300 €", flightTracking: "Flugverfolgung in Echtzeit" },
    waMsg: (from: string, to: string) => `Guten Tag! Ich möchte einen privaten Transfer von ${from} nach ${to} buchen. Können Sie mir die Verfügbarkeit und den Festpreis bestätigen?`,
  },
  ar: {
    nav: { transfers: "التوصيل والتنقلات", airports: "المطارات", city_to_city: "بين المدن", day_trips: "رحلات يومية", prices: "الأسعار", trip_finder: "مخطط الرحلات", journal: "المجلة", book: "احجز الآن" },
    hero: { tagline: "سائق خاص وتوصيل VIP في المغرب", title: "خدمات التوصيل الخاص بأسعار ثابتة ومضمونة", subtitle: "خدمة سائق خاص من الباب إلى الباب، استقبال في المطارات، وجولات سياحية راقية في جميع مدن المغرب. سيارات مرسيدس وسيارات عائلية فخمة، حجز فوري عبر واتساب.", fromPlaceholder: "نقطة الانطلاق (مثال: مطار مراكش، الفندق...)", toPlaceholder: "الوجهة (مثال: الصويرة، الدار البيضاء، أكادير...)", datePlaceholder: "التاريخ والوقت", passengersPlaceholder: "عدد الركاب", submit: "احصل على سعر فوري ثابت" },
    badges: { fixedPrice: "أسعار ثابتة شاملة", bilingual: "سائقون محترفون ومرخصون", zeroDeposit: "بدون عربون مسبق لأقل من 300€", flightTracking: "متابعة مباشرة لمواعيد الطيران" },
    waMsg: (from: string, to: string) => `السلام عليكم! أود حجز خدمة سائق خاص وتوصيل من ${from} إلى ${to}. هل يمكنكم تأكيد السعر الثابت والتوافر؟`,
  },
  pt: {
    nav: { transfers: "Transfers", airports: "Aeroportos", city_to_city: "Entre Cidades", day_trips: "Passeios de um Dia", prices: "Preços", trip_finder: "Planeador de Viagem", journal: "Blog", book: "Reservar" },
    hero: { tagline: "Motorista Privado e Transfers em Marrocos", title: "Transfers Privados com Preço Fixo Garantido", subtitle: "Serviço porta a porta com motorista particular, transferências de aeroporto e passeios por todo Marrocos. Preços fixos com tudo incluído, condutores experientes, reserva direta no WhatsApp.", fromPlaceholder: "Partida (ex: Aeroporto de Marraquexe, Riad...)", toPlaceholder: "Destino (ex: Essaouira, Casablanca, Agadir...)", datePlaceholder: "Data e hora", passengersPlaceholder: "Passageiros", submit: "Obter Preço Fixo" },
    badges: { fixedPrice: "Preço Fixo Garantido", bilingual: "Motoristas Profissionais", zeroDeposit: "0% Entrada para < 300 €", flightTracking: "Monitorização de Voos em Tempo Real" },
    waMsg: (from: string, to: string) => `Olá! Gostaria de reservar um transfer privado de ${from} para ${to}. Poderiam confirmar a disponibilidade e o preço fixo?`,
  },
  nl: {
    nav: { transfers: "Transfers", airports: "Luchthavens", city_to_city: "Stad naar Stad", day_trips: "Dagtochten", prices: "Tarieven", trip_finder: "Reisplanner", journal: "Blog", book: "Boeken" },
    hero: { tagline: "Privé Chauffeur & Transfers in Marokko", title: "Privé Transfers tegen Gegarandeerde Vaste Prijzen", subtitle: "Betrouwbare deur-tot-deur transfers, luchthavenvervoer en excursies door heel Marokko. All-inclusive vaste tarieven, ervaren chauffeurs, directe boeking via WhatsApp.", fromPlaceholder: "Vertrek (bijv. Luchthaven Marrakech, Riad...)", toPlaceholder: "Bestemming (bijv. Essaouira, Casablanca, Agadir...)", datePlaceholder: "Datum & tijd", passengersPlaceholder: "Passagiers", submit: "Vaste Prijs Aanvragen" },
    badges: { fixedPrice: "Gegarandeerde Vaste Prijs", bilingual: "Ervaren Chauffeurs", zeroDeposit: "0% Aanbetaling onder €300", flightTracking: "Realtime Vluchtmonitoring" },
    waMsg: (from: string, to: string) => `Hallo! Ik wil graag een privé transfer boeken van ${from} naar ${to}. Kunt u de beschikbaarheid en vaste prijs bevestigen?`,
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
