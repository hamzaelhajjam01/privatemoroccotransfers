/**
 * Pickup / drop-off places for the hero booking widget (components/LocationFields.tsx).
 * `routes` = the names used in content/routes.json, so a pair can be priced.
 * `names` = display name per language (English is the fallback).
 * `terms` = extra search words (airport codes, local names).
 */
export type LocGroup = "airports" | "cities" | "mountains" | "desert" | "coast";
export type Loc = {
  key: string;
  group: LocGroup;
  routes: string[];
  /** Map position, used to estimate a price when two places have no fixed route. */
  at: [number, number];
  names: Partial<Record<"en" | "fr" | "es" | "it" | "de" | "ar" | "pt" | "nl", string>> & { en: string };
  terms?: string;
};

export const LOCATIONS: Loc[] = [
  // Airports & port
  { key: "RAK", at: [31.6069, -8.0363], group: "airports", routes: ["Marrakech Airport"], terms: "RAK Menara",
    names: { en: "Marrakech Airport (RAK)", fr: "Aéroport de Marrakech (RAK)", es: "Aeropuerto de Marrakech (RAK)", it: "Aeroporto di Marrakech (RAK)", de: "Flughafen Marrakesch (RAK)", ar: "مطار مراكش المنارة (RAK)", pt: "Aeroporto de Marraquexe (RAK)", nl: "Luchthaven Marrakech (RAK)" } },
  { key: "CMN", at: [33.3675, -7.5899], group: "airports", routes: ["Casablanca Airport", "Casablanca Airport (CMN)"], terms: "CMN Mohammed V",
    names: { en: "Casablanca Airport (CMN)", fr: "Aéroport de Casablanca (CMN)", es: "Aeropuerto de Casablanca (CMN)", it: "Aeroporto di Casablanca (CMN)", de: "Flughafen Casablanca (CMN)", ar: "مطار محمد الخامس الدار البيضاء (CMN)", pt: "Aeroporto de Casablanca (CMN)", nl: "Luchthaven Casablanca (CMN)" } },
  { key: "AGA", at: [30.325, -9.4131], group: "airports", routes: ["Agadir Airport"], terms: "AGA Al Massira",
    names: { en: "Agadir Airport (AGA)", fr: "Aéroport d'Agadir (AGA)", es: "Aeropuerto de Agadir (AGA)", it: "Aeroporto di Agadir (AGA)", de: "Flughafen Agadir (AGA)", ar: "مطار أكادير المسيرة (AGA)", pt: "Aeroporto de Agadir (AGA)", nl: "Luchthaven Agadir (AGA)" } },
  { key: "FEZ", at: [33.9273, -4.978], group: "airports", routes: ["Fes Airport (FEZ)"], terms: "FEZ Saiss Fès",
    names: { en: "Fes Airport (FEZ)", fr: "Aéroport de Fès (FEZ)", es: "Aeropuerto de Fez (FEZ)", it: "Aeroporto di Fès (FEZ)", de: "Flughafen Fès (FEZ)", ar: "مطار فاس سايس (FEZ)", pt: "Aeroporto de Fez (FEZ)", nl: "Luchthaven Fez (FEZ)" } },
  { key: "TNG", at: [35.7269, -5.9169], group: "airports", routes: ["Tangier Airport (TNG)"], terms: "TNG Ibn Battouta Tanger",
    names: { en: "Tangier Airport (TNG)", fr: "Aéroport de Tanger (TNG)", es: "Aeropuerto de Tánger (TNG)", it: "Aeroporto di Tangeri (TNG)", de: "Flughafen Tanger (TNG)", ar: "مطار طنجة ابن بطوطة (TNG)", pt: "Aeroporto de Tânger (TNG)", nl: "Luchthaven Tanger (TNG)" } },
  { key: "RBA", at: [34.0515, -6.7515], group: "airports", routes: ["Rabat Airport (RBA)"], terms: "RBA Sale Salé",
    names: { en: "Rabat Airport (RBA)", fr: "Aéroport de Rabat (RBA)", es: "Aeropuerto de Rabat (RBA)", it: "Aeroporto di Rabat (RBA)", de: "Flughafen Rabat (RBA)", ar: "مطار الرباط سلا (RBA)", pt: "Aeroporto de Rabat (RBA)", nl: "Luchthaven Rabat (RBA)" } },
  { key: "ESU", at: [31.3975, -9.6817], group: "airports", routes: ["Essaouira Airport (ESU)"], terms: "ESU Mogador",
    names: { en: "Essaouira Airport (ESU)", fr: "Aéroport d'Essaouira (ESU)", es: "Aeropuerto de Esauira (ESU)", it: "Aeroporto di Essaouira (ESU)", de: "Flughafen Essaouira (ESU)", ar: "مطار الصويرة موكادور (ESU)", pt: "Aeroporto de Essaouira (ESU)", nl: "Luchthaven Essaouira (ESU)" } },
  { key: "TMED", at: [35.8833, -5.5], group: "airports", routes: ["Tangier Med Port"], terms: "port ferry Tanger Med",
    names: { en: "Tangier Med Port", fr: "Port Tanger Med", es: "Puerto Tánger Med", it: "Porto Tanger Med", de: "Hafen Tanger Med", ar: "ميناء طنجة المتوسط", pt: "Porto Tânger Med", nl: "Haven Tanger Med" } },

  // Cities
  { key: "marrakech", at: [31.6295, -7.9811], group: "cities", routes: ["Marrakech"], terms: "medina riad Marrakesh",
    names: { en: "Marrakech", de: "Marrakesch", ar: "مراكش", pt: "Marraquexe" } },
  { key: "palmeraie", at: [31.67, -7.97], group: "cities", routes: ["Palmeraie (Marrakech)"], terms: "palm grove",
    names: { en: "Palmeraie (Marrakech)", es: "Palmeral (Marrakech)", de: "Palmeraie (Marrakesch)", ar: "النخيل (مراكش)", pt: "Palmeiral (Marraquexe)" } },
  { key: "casablanca", at: [33.5731, -7.5898], group: "cities", routes: ["Casablanca"], terms: "Casa",
    names: { en: "Casablanca", ar: "الدار البيضاء" } },
  { key: "essaouira", at: [31.5085, -9.7595], group: "cities", routes: ["Essaouira"], terms: "Mogador",
    names: { en: "Essaouira", es: "Esauira", ar: "الصويرة" } },
  { key: "agadir", at: [30.4278, -9.5981], group: "cities", routes: ["Agadir"],
    names: { en: "Agadir", ar: "أكادير" } },
  { key: "fes", at: [34.0181, -5.0078], group: "cities", routes: ["Fes"], terms: "Fès Fez",
    names: { en: "Fes", fr: "Fès", es: "Fez", it: "Fès", de: "Fès", ar: "فاس", pt: "Fez", nl: "Fez" } },
  { key: "tangier", at: [35.7595, -5.834], group: "cities", routes: ["Tangier"], terms: "Tanger Tangeri",
    names: { en: "Tangier", fr: "Tanger", es: "Tánger", it: "Tangeri", de: "Tanger", ar: "طنجة", pt: "Tânger", nl: "Tanger" } },
  { key: "rabat", at: [34.0209, -6.8416], group: "cities", routes: ["Rabat"],
    names: { en: "Rabat", ar: "الرباط" } },
  { key: "chefchaouen", at: [35.1688, -5.2636], group: "cities", routes: ["Chefchaouen"], terms: "blue city Chaouen",
    names: { en: "Chefchaouen", ar: "شفشاون" } },
  { key: "ouarzazate", at: [30.9189, -6.8934], group: "cities", routes: ["Ouarzazate"],
    names: { en: "Ouarzazate", es: "Uarzazat", ar: "ورزازات" } },
  { key: "meknes", at: [33.8935, -5.5473], group: "cities", routes: ["Meknes & Volubilis"], terms: "Meknès Volubilis",
    names: { en: "Meknes & Volubilis", fr: "Meknès et Volubilis", es: "Mequinez y Volubilis", it: "Meknès e Volubilis", de: "Meknès & Volubilis", ar: "مكناس ووليلي", pt: "Meknès e Volubilis" } },

  // Mountains & valleys
  { key: "imlil", at: [31.1372, -7.9196], group: "mountains", routes: ["Imlil"], terms: "Toubkal High Atlas",
    names: { en: "Imlil (High Atlas)", fr: "Imlil (Haut Atlas)", es: "Imlil (Alto Atlas)", it: "Imlil (Alto Atlante)", de: "Imlil (Hoher Atlas)", ar: "إمليل (الأطلس الكبير)", pt: "Imlil (Alto Atlas)", nl: "Imlil (Hoge Atlas)" } },
  { key: "ourika", at: [31.33, -7.78], group: "mountains", routes: ["Ourika Valley"],
    names: { en: "Ourika Valley", fr: "Vallée de l'Ourika", es: "Valle del Ourika", it: "Valle dell'Ourika", de: "Ourika-Tal", ar: "وادي أوريكا", pt: "Vale de Ourika", nl: "Ourika-vallei" } },
  { key: "settifatma", at: [31.225, -7.68], group: "mountains", routes: ["Setti Fatma"],
    names: { en: "Setti Fatma", ar: "ستي فاطمة" } },
  { key: "oukaimeden", at: [31.2056, -7.8636], group: "mountains", routes: ["Oukaimeden (ski resort)"], terms: "ski Oukaïmeden",
    names: { en: "Oukaimeden (ski resort)", fr: "Oukaïmeden (station de ski)", es: "Oukaimeden (estación de esquí)", it: "Oukaimeden (stazione sciistica)", de: "Oukaimeden (Skigebiet)", ar: "أوكايمدن", pt: "Oukaimeden (estância de esqui)", nl: "Oukaimeden (skigebied)" } },
  { key: "ouzoud", at: [32.0157, -6.7189], group: "mountains", routes: ["Ouzoud Waterfalls"], terms: "cascades waterfalls",
    names: { en: "Ouzoud Waterfalls", fr: "Cascades d'Ouzoud", es: "Cascadas de Ouzoud", it: "Cascate di Ouzoud", de: "Ouzoud-Wasserfälle", ar: "شلالات أوزود", pt: "Cascatas de Ouzoud", nl: "Ouzoud-watervallen" } },
  { key: "aitbenhaddou", at: [31.0472, -7.1318], group: "mountains", routes: ["Ait Ben Haddou"], terms: "Aït kasbah",
    names: { en: "Ait Ben Haddou", fr: "Aït Ben Haddou", ar: "آيت بن حدو" } },
  { key: "paradise", at: [30.57, -9.48], group: "mountains", routes: ["Paradise Valley"],
    names: { en: "Paradise Valley", es: "Valle del Paraíso", it: "Valle del Paradiso", ar: "وادي الجنة", pt: "Vale do Paraíso" } },

  // Desert
  { key: "agafay", at: [31.45, -8.25], group: "desert", routes: ["Agafay Desert"],
    names: { en: "Agafay Desert", fr: "Désert d'Agafay", es: "Desierto de Agafay", it: "Deserto di Agafay", de: "Agafay-Wüste", ar: "صحراء أكفاي", pt: "Deserto de Agafay", nl: "Agafay-woestijn" } },
  { key: "merzouga", at: [31.0802, -4.0133], group: "desert", routes: ["Merzouga (Sahara)"], terms: "Erg Chebbi Sahara dunes",
    names: { en: "Merzouga (Sahara)", es: "Merzouga (Sáhara)", ar: "مرزوكة (الصحراء)", pt: "Merzouga (Saara)" } },

  // Coast
  { key: "taghazout", at: [30.5447, -9.709], group: "coast", routes: ["Taghazout"], terms: "surf",
    names: { en: "Taghazout", ar: "تغازوت" } },
  { key: "imsouane", at: [30.8406, -9.8225], group: "coast", routes: ["Imsouane"], terms: "surf",
    names: { en: "Imsouane", ar: "إمسوان" } },
  { key: "sidikaouki", at: [31.355, -9.795], group: "coast", routes: ["Sidi Kaouki"], terms: "surf",
    names: { en: "Sidi Kaouki", ar: "سيدي كاوكي" } },
  { key: "oualidia", at: [32.7333, -9.0333], group: "coast", routes: ["Oualidia"], terms: "lagoon oysters",
    names: { en: "Oualidia", ar: "الوليدية" } },
  { key: "moulaybouzerktoune", at: [31.65, -9.67], group: "coast", routes: ["Moulay Bouzerktoune"], terms: "kitesurf",
    names: { en: "Moulay Bouzerktoune", ar: "مولاي بوزرقطون" } },
];

type Copy = {
  groups: Record<LocGroup, string>;
  use: (text: string) => string;
  noMatch: string;
  from: string;
  fixed: string;
  est: string;
  estNote: string;
  perVehicle: string;
  vehicles: [string, string, string, string];
};

export const LOC_COPY: Record<string, Copy> = {
  en: { groups: { airports: "Airports & port", cities: "Cities", mountains: "Mountains & valleys", desert: "Desert", coast: "Coast" },
    use: (t) => `Use “${t}”`, noMatch: "Not in the list? Type your hotel or address.", from: "from", fixed: "Fixed price", est: "Estimated price", estNote: "we confirm the exact price on WhatsApp", perVehicle: "per vehicle", vehicles: ["sedan", "SUV", "van", "minibus"] },
  fr: { groups: { airports: "Aéroports et port", cities: "Villes", mountains: "Montagnes et vallées", desert: "Désert", coast: "Côte" },
    use: (t) => `Utiliser « ${t} »`, noMatch: "Pas dans la liste ? Tapez votre hôtel ou adresse.", from: "dès", fixed: "Prix fixe", est: "Prix estimé", estNote: "nous confirmons le prix exact sur WhatsApp", perVehicle: "par véhicule", vehicles: ["berline", "SUV", "van", "minibus"] },
  es: { groups: { airports: "Aeropuertos y puerto", cities: "Ciudades", mountains: "Montañas y valles", desert: "Desierto", coast: "Costa" },
    use: (t) => `Usar «${t}»`, noMatch: "¿No está en la lista? Escriba su hotel o dirección.", from: "desde", fixed: "Precio fijo", est: "Precio estimado", estNote: "confirmamos el precio exacto por WhatsApp", perVehicle: "por vehículo", vehicles: ["sedán", "SUV", "van", "minibús"] },
  it: { groups: { airports: "Aeroporti e porto", cities: "Città", mountains: "Montagne e valli", desert: "Deserto", coast: "Costa" },
    use: (t) => `Usa «${t}»`, noMatch: "Non in elenco? Scrivete hotel o indirizzo.", from: "da", fixed: "Prezzo fisso", est: "Prezzo stimato", estNote: "confermiamo il prezzo esatto su WhatsApp", perVehicle: "per veicolo", vehicles: ["berlina", "SUV", "van", "minibus"] },
  de: { groups: { airports: "Flughäfen & Hafen", cities: "Städte", mountains: "Berge & Täler", desert: "Wüste", coast: "Küste" },
    use: (t) => `„${t}“ verwenden`, noMatch: "Nicht in der Liste? Hotel oder Adresse eingeben.", from: "ab", fixed: "Festpreis", est: "Geschätzter Preis", estNote: "wir bestätigen den genauen Preis auf WhatsApp", perVehicle: "pro Fahrzeug", vehicles: ["Limousine", "SUV", "Van", "Minibus"] },
  ar: { groups: { airports: "المطارات والميناء", cities: "المدن", mountains: "الجبال والوديان", desert: "الصحراء", coast: "الساحل" },
    use: (t) => `استخدم «${t}»`, noMatch: "غير موجود في القائمة؟ اكتب اسم الفندق أو العنوان.", from: "من", fixed: "سعر ثابت", est: "السعر التقديري", estNote: "نؤكد السعر النهائي عبر واتساب", perVehicle: "للسيارة", vehicles: ["سيدان", "SUV", "فان", "ميني باص"] },
  pt: { groups: { airports: "Aeroportos e porto", cities: "Cidades", mountains: "Montanhas e vales", desert: "Deserto", coast: "Costa" },
    use: (t) => `Usar «${t}»`, noMatch: "Não está na lista? Escreva o hotel ou morada.", from: "desde", fixed: "Preço fixo", est: "Preço estimado", estNote: "confirmamos o preço exato no WhatsApp", perVehicle: "por viatura", vehicles: ["sedan", "SUV", "carrinha", "minibus"] },
  nl: { groups: { airports: "Luchthavens & haven", cities: "Steden", mountains: "Bergen & dalen", desert: "Woestijn", coast: "Kust" },
    use: (t) => `„${t}” gebruiken`, noMatch: "Niet in de lijst? Typ uw hotel of adres.", from: "vanaf", fixed: "Vaste prijs", est: "Geschatte prijs", estNote: "we bevestigen de exacte prijs via WhatsApp", perVehicle: "per voertuig", vehicles: ["sedan", "SUV", "van", "minibus"] },
};

/** Groups offered in the From list for each widget tab (the To list always shows everything). */
export const FROM_GROUPS: Record<"airport" | "city" | "day", LocGroup[]> = {
  airport: ["airports"],
  city: ["cities", "coast"],
  day: ["cities", "coast"],
};
