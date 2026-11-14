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
  names: Partial<Record<"en" | "fr" | "es" | "it" | "de" | "ar" | "pt" | "nl", string>> & { en: string };
  terms?: string;
};

export const LOCATIONS: Loc[] = [
  // Airports & port
  { key: "RAK", group: "airports", routes: ["Marrakech Airport"], terms: "RAK Menara",
    names: { en: "Marrakech Airport (RAK)", fr: "Aéroport de Marrakech (RAK)", es: "Aeropuerto de Marrakech (RAK)", it: "Aeroporto di Marrakech (RAK)", de: "Flughafen Marrakesch (RAK)", ar: "مطار مراكش المنارة (RAK)", pt: "Aeroporto de Marraquexe (RAK)", nl: "Luchthaven Marrakech (RAK)" } },
  { key: "CMN", group: "airports", routes: ["Casablanca Airport", "Casablanca Airport (CMN)"], terms: "CMN Mohammed V",
    names: { en: "Casablanca Airport (CMN)", fr: "Aéroport de Casablanca (CMN)", es: "Aeropuerto de Casablanca (CMN)", it: "Aeroporto di Casablanca (CMN)", de: "Flughafen Casablanca (CMN)", ar: "مطار محمد الخامس الدار البيضاء (CMN)", pt: "Aeroporto de Casablanca (CMN)", nl: "Luchthaven Casablanca (CMN)" } },
  { key: "AGA", group: "airports", routes: ["Agadir Airport"], terms: "AGA Al Massira",
    names: { en: "Agadir Airport (AGA)", fr: "Aéroport d'Agadir (AGA)", es: "Aeropuerto de Agadir (AGA)", it: "Aeroporto di Agadir (AGA)", de: "Flughafen Agadir (AGA)", ar: "مطار أكادير المسيرة (AGA)", pt: "Aeroporto de Agadir (AGA)", nl: "Luchthaven Agadir (AGA)" } },
  { key: "FEZ", group: "airports", routes: ["Fes Airport (FEZ)"], terms: "FEZ Saiss Fès",
    names: { en: "Fes Airport (FEZ)", fr: "Aéroport de Fès (FEZ)", es: "Aeropuerto de Fez (FEZ)", it: "Aeroporto di Fès (FEZ)", de: "Flughafen Fès (FEZ)", ar: "مطار فاس سايس (FEZ)", pt: "Aeroporto de Fez (FEZ)", nl: "Luchthaven Fez (FEZ)" } },
  { key: "TNG", group: "airports", routes: ["Tangier Airport (TNG)"], terms: "TNG Ibn Battouta Tanger",
    names: { en: "Tangier Airport (TNG)", fr: "Aéroport de Tanger (TNG)", es: "Aeropuerto de Tánger (TNG)", it: "Aeroporto di Tangeri (TNG)", de: "Flughafen Tanger (TNG)", ar: "مطار طنجة ابن بطوطة (TNG)", pt: "Aeroporto de Tânger (TNG)", nl: "Luchthaven Tanger (TNG)" } },
  { key: "RBA", group: "airports", routes: ["Rabat Airport (RBA)"], terms: "RBA Sale Salé",
    names: { en: "Rabat Airport (RBA)", fr: "Aéroport de Rabat (RBA)", es: "Aeropuerto de Rabat (RBA)", it: "Aeroporto di Rabat (RBA)", de: "Flughafen Rabat (RBA)", ar: "مطار الرباط سلا (RBA)", pt: "Aeroporto de Rabat (RBA)", nl: "Luchthaven Rabat (RBA)" } },
  { key: "ESU", group: "airports", routes: ["Essaouira Airport (ESU)"], terms: "ESU Mogador",
    names: { en: "Essaouira Airport (ESU)", fr: "Aéroport d'Essaouira (ESU)", es: "Aeropuerto de Esauira (ESU)", it: "Aeroporto di Essaouira (ESU)", de: "Flughafen Essaouira (ESU)", ar: "مطار الصويرة موكادور (ESU)", pt: "Aeroporto de Essaouira (ESU)", nl: "Luchthaven Essaouira (ESU)" } },
  { key: "TMED", group: "airports", routes: ["Tangier Med Port"], terms: "port ferry Tanger Med",
    names: { en: "Tangier Med Port", fr: "Port Tanger Med", es: "Puerto Tánger Med", it: "Porto Tanger Med", de: "Hafen Tanger Med", ar: "ميناء طنجة المتوسط", pt: "Porto Tânger Med", nl: "Haven Tanger Med" } },

  // Cities
  { key: "marrakech", group: "cities", routes: ["Marrakech"], terms: "medina riad Marrakesh",
    names: { en: "Marrakech", de: "Marrakesch", ar: "مراكش", pt: "Marraquexe" } },
  { key: "palmeraie", group: "cities", routes: ["Palmeraie (Marrakech)"], terms: "palm grove",
    names: { en: "Palmeraie (Marrakech)", es: "Palmeral (Marrakech)", de: "Palmeraie (Marrakesch)", ar: "النخيل (مراكش)", pt: "Palmeiral (Marraquexe)" } },
  { key: "casablanca", group: "cities", routes: ["Casablanca"], terms: "Casa",
    names: { en: "Casablanca", ar: "الدار البيضاء" } },
  { key: "essaouira", group: "cities", routes: ["Essaouira"], terms: "Mogador",
    names: { en: "Essaouira", es: "Esauira", ar: "الصويرة" } },
  { key: "agadir", group: "cities", routes: ["Agadir"],
    names: { en: "Agadir", ar: "أكادير" } },
  { key: "fes", group: "cities", routes: ["Fes"], terms: "Fès Fez",
    names: { en: "Fes", fr: "Fès", es: "Fez", it: "Fès", de: "Fès", ar: "فاس", pt: "Fez", nl: "Fez" } },
  { key: "tangier", group: "cities", routes: ["Tangier"], terms: "Tanger Tangeri",
    names: { en: "Tangier", fr: "Tanger", es: "Tánger", it: "Tangeri", de: "Tanger", ar: "طنجة", pt: "Tânger", nl: "Tanger" } },
  { key: "rabat", group: "cities", routes: ["Rabat"],
    names: { en: "Rabat", ar: "الرباط" } },
  { key: "chefchaouen", group: "cities", routes: ["Chefchaouen"], terms: "blue city Chaouen",
    names: { en: "Chefchaouen", ar: "شفشاون" } },
  { key: "ouarzazate", group: "cities", routes: ["Ouarzazate"],
    names: { en: "Ouarzazate", es: "Uarzazat", ar: "ورزازات" } },
  { key: "meknes", group: "cities", routes: ["Meknes & Volubilis"], terms: "Meknès Volubilis",
    names: { en: "Meknes & Volubilis", fr: "Meknès et Volubilis", es: "Mequinez y Volubilis", it: "Meknès e Volubilis", de: "Meknès & Volubilis", ar: "مكناس ووليلي", pt: "Meknès e Volubilis" } },

  // Mountains & valleys
  { key: "imlil", group: "mountains", routes: ["Imlil"], terms: "Toubkal High Atlas",
    names: { en: "Imlil (High Atlas)", fr: "Imlil (Haut Atlas)", es: "Imlil (Alto Atlas)", it: "Imlil (Alto Atlante)", de: "Imlil (Hoher Atlas)", ar: "إمليل (الأطلس الكبير)", pt: "Imlil (Alto Atlas)", nl: "Imlil (Hoge Atlas)" } },
  { key: "ourika", group: "mountains", routes: ["Ourika Valley"],
    names: { en: "Ourika Valley", fr: "Vallée de l'Ourika", es: "Valle del Ourika", it: "Valle dell'Ourika", de: "Ourika-Tal", ar: "وادي أوريكا", pt: "Vale de Ourika", nl: "Ourika-vallei" } },
  { key: "settifatma", group: "mountains", routes: ["Setti Fatma"],
    names: { en: "Setti Fatma", ar: "ستي فاطمة" } },
  { key: "oukaimeden", group: "mountains", routes: ["Oukaimeden (ski resort)"], terms: "ski Oukaïmeden",
    names: { en: "Oukaimeden (ski resort)", fr: "Oukaïmeden (station de ski)", es: "Oukaimeden (estación de esquí)", it: "Oukaimeden (stazione sciistica)", de: "Oukaimeden (Skigebiet)", ar: "أوكايمدن", pt: "Oukaimeden (estância de esqui)", nl: "Oukaimeden (skigebied)" } },
  { key: "ouzoud", group: "mountains", routes: ["Ouzoud Waterfalls"], terms: "cascades waterfalls",
    names: { en: "Ouzoud Waterfalls", fr: "Cascades d'Ouzoud", es: "Cascadas de Ouzoud", it: "Cascate di Ouzoud", de: "Ouzoud-Wasserfälle", ar: "شلالات أوزود", pt: "Cascatas de Ouzoud", nl: "Ouzoud-watervallen" } },
  { key: "aitbenhaddou", group: "mountains", routes: ["Ait Ben Haddou"], terms: "Aït kasbah",
    names: { en: "Ait Ben Haddou", fr: "Aït Ben Haddou", ar: "آيت بن حدو" } },
  { key: "paradise", group: "mountains", routes: ["Paradise Valley"],
    names: { en: "Paradise Valley", es: "Valle del Paraíso", it: "Valle del Paradiso", ar: "وادي الجنة", pt: "Vale do Paraíso" } },

  // Desert
  { key: "agafay", group: "desert", routes: ["Agafay Desert"],
    names: { en: "Agafay Desert", fr: "Désert d'Agafay", es: "Desierto de Agafay", it: "Deserto di Agafay", de: "Agafay-Wüste", ar: "صحراء أكفاي", pt: "Deserto de Agafay", nl: "Agafay-woestijn" } },
  { key: "merzouga", group: "desert", routes: ["Merzouga (Sahara)"], terms: "Erg Chebbi Sahara dunes",
    names: { en: "Merzouga (Sahara)", es: "Merzouga (Sáhara)", ar: "مرزوكة (الصحراء)", pt: "Merzouga (Saara)" } },

  // Coast
  { key: "taghazout", group: "coast", routes: ["Taghazout"], terms: "surf",
    names: { en: "Taghazout", ar: "تغازوت" } },
  { key: "imsouane", group: "coast", routes: ["Imsouane"], terms: "surf",
    names: { en: "Imsouane", ar: "إمسوان" } },
  { key: "sidikaouki", group: "coast", routes: ["Sidi Kaouki"], terms: "surf",
    names: { en: "Sidi Kaouki", ar: "سيدي كاوكي" } },
  { key: "oualidia", group: "coast", routes: ["Oualidia"], terms: "lagoon oysters",
    names: { en: "Oualidia", ar: "الوليدية" } },
  { key: "moulaybouzerktoune", group: "coast", routes: ["Moulay Bouzerktoune"], terms: "kitesurf",
    names: { en: "Moulay Bouzerktoune", ar: "مولاي بوزرقطون" } },
];

type Copy = {
  groups: Record<LocGroup, string>;
  use: (text: string) => string;
  noMatch: string;
  from: string;
  fixed: string;
  perVehicle: string;
  vehicles: [string, string, string, string];
};

export const LOC_COPY: Record<string, Copy> = {
  en: { groups: { airports: "Airports & port", cities: "Cities", mountains: "Mountains & valleys", desert: "Desert", coast: "Coast" },
    use: (t) => `Use “${t}”`, noMatch: "Not in the list? Type your hotel or address.", from: "from", fixed: "Fixed price", perVehicle: "per vehicle", vehicles: ["sedan", "SUV", "van", "minibus"] },
  fr: { groups: { airports: "Aéroports et port", cities: "Villes", mountains: "Montagnes et vallées", desert: "Désert", coast: "Côte" },
    use: (t) => `Utiliser « ${t} »`, noMatch: "Pas dans la liste ? Tapez votre hôtel ou adresse.", from: "dès", fixed: "Prix fixe", perVehicle: "par véhicule", vehicles: ["berline", "SUV", "van", "minibus"] },
  es: { groups: { airports: "Aeropuertos y puerto", cities: "Ciudades", mountains: "Montañas y valles", desert: "Desierto", coast: "Costa" },
    use: (t) => `Usar «${t}»`, noMatch: "¿No está en la lista? Escriba su hotel o dirección.", from: "desde", fixed: "Precio fijo", perVehicle: "por vehículo", vehicles: ["sedán", "SUV", "van", "minibús"] },
  it: { groups: { airports: "Aeroporti e porto", cities: "Città", mountains: "Montagne e valli", desert: "Deserto", coast: "Costa" },
    use: (t) => `Usa «${t}»`, noMatch: "Non in elenco? Scrivete hotel o indirizzo.", from: "da", fixed: "Prezzo fisso", perVehicle: "per veicolo", vehicles: ["berlina", "SUV", "van", "minibus"] },
  de: { groups: { airports: "Flughäfen & Hafen", cities: "Städte", mountains: "Berge & Täler", desert: "Wüste", coast: "Küste" },
    use: (t) => `„${t}“ verwenden`, noMatch: "Nicht in der Liste? Hotel oder Adresse eingeben.", from: "ab", fixed: "Festpreis", perVehicle: "pro Fahrzeug", vehicles: ["Limousine", "SUV", "Van", "Minibus"] },
  ar: { groups: { airports: "المطارات والميناء", cities: "المدن", mountains: "الجبال والوديان", desert: "الصحراء", coast: "الساحل" },
    use: (t) => `استخدم «${t}»`, noMatch: "غير موجود في القائمة؟ اكتب اسم الفندق أو العنوان.", from: "من", fixed: "سعر ثابت", perVehicle: "للسيارة", vehicles: ["سيدان", "SUV", "فان", "ميني باص"] },
  pt: { groups: { airports: "Aeroportos e porto", cities: "Cidades", mountains: "Montanhas e vales", desert: "Deserto", coast: "Costa" },
    use: (t) => `Usar «${t}»`, noMatch: "Não está na lista? Escreva o hotel ou morada.", from: "desde", fixed: "Preço fixo", perVehicle: "por viatura", vehicles: ["sedan", "SUV", "carrinha", "minibus"] },
  nl: { groups: { airports: "Luchthavens & haven", cities: "Steden", mountains: "Bergen & dalen", desert: "Woestijn", coast: "Kust" },
    use: (t) => `„${t}” gebruiken`, noMatch: "Niet in de lijst? Typ uw hotel of adres.", from: "vanaf", fixed: "Vaste prijs", perVehicle: "per voertuig", vehicles: ["sedan", "SUV", "van", "minibus"] },
};
