import { GBP_URL } from "@/lib/site";

/**
 * Homepage reviews — real Google reviews from the business profile (pulled 2026-11-18).
 * Each review keeps its original text; other languages show a translation plus a
 * "Translated from …" note, so a translation is never presented as the reviewer's own words.
 * To add a review: add an entry to SOURCE with the original text and a translation per language.
 */
export type Lang = "en" | "fr" | "de" | "es" | "it" | "pt" | "nl" | "ar";

export type Review = {
  name: string;
  country?: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  route?: string;
  photo?: string;
  source?: "Google" | "TripAdvisor";
  url?: string;
  /** Shown under the text when `text` is a translation, e.g. "Translated from Polish". */
  translatedFrom?: string;
};

type Source = {
  name: string;
  rating: Review["rating"];
  photo: string;
  lang: Lang | "pl";
  route?: Partial<Record<Lang, string>>;
  text: Partial<Record<Lang | "pl", string>>;
};

const SOURCE: Source[] = [
  {
    name: "Loraine Hutchinson",
    rating: 5,
    photo: "/img/reviewers/loraine.webp",
    lang: "pl",
    route: {
      en: "Marrakech airport → Agadir",
      fr: "Aéroport de Marrakech → Agadir",
      de: "Flughafen Marrakesch → Agadir",
      es: "Aeropuerto de Marrakech → Agadir",
      it: "Aeroporto di Marrakech → Agadir",
      pt: "Aeroporto de Marraquexe → Agadir",
      nl: "Luchthaven Marrakech → Agadir",
      ar: "مطار مراكش ← أكادير",
    },
    text: {
      pl: "Świetna obsługa! Korzystaliśmy z prywatnego transferu z lotniska w Marrakeszu do Agadiru w 5 osób z bagażami i wszystko przebiegło perfekcyjnie. Mimo nocnego przylotu kierowca czekał na nas punktualnie z tabliczką, a bus był bardzo czysty, wygodny i klimatyzowany. Szybki i bezproblemowy kontakt przez WhatsApp. Zdecydowanie polecam!",
      en: "Great service! We booked a private transfer from Marrakech airport to Agadir for 5 people with luggage, and everything went perfectly. Even though we landed at night, the driver was waiting for us on time with a sign, and the van was very clean, comfortable and air-conditioned. Quick, easy contact over WhatsApp. Highly recommended!",
      fr: "Super service ! Nous avons réservé un transfert privé de l'aéroport de Marrakech à Agadir pour 5 personnes avec bagages, et tout s'est parfaitement déroulé. Malgré notre arrivée de nuit, le chauffeur nous attendait à l'heure avec une pancarte, et le van était très propre, confortable et climatisé. Contact rapide et facile via WhatsApp. Je recommande vivement !",
      de: "Toller Service! Wir hatten einen privaten Transfer vom Flughafen Marrakesch nach Agadir für 5 Personen mit Gepäck, und alles lief perfekt. Trotz nächtlicher Ankunft wartete der Fahrer pünktlich mit einem Schild auf uns, und der Bus war sehr sauber, bequem und klimatisiert. Schneller, unkomplizierter Kontakt über WhatsApp. Absolut empfehlenswert!",
      es: "¡Un servicio estupendo! Contratamos un traslado privado del aeropuerto de Marrakech a Agadir para 5 personas con equipaje y todo salió perfecto. Aunque llegamos de noche, el conductor nos esperaba puntual con un cartel, y la furgoneta estaba muy limpia, cómoda y con aire acondicionado. Contacto rápido y sencillo por WhatsApp. ¡Totalmente recomendable!",
      it: "Servizio ottimo! Abbiamo prenotato un transfer privato dall'aeroporto di Marrakech ad Agadir per 5 persone con bagagli e tutto è andato alla perfezione. Nonostante l'arrivo di notte, l'autista ci aspettava puntuale con un cartello, e il van era pulitissimo, comodo e climatizzato. Contatto rapido e semplice su WhatsApp. Consigliatissimo!",
      pt: "Serviço excelente! Fizemos um transfer privado do aeroporto de Marraquexe para Agadir para 5 pessoas com bagagem e correu tudo na perfeição. Apesar de chegarmos à noite, o motorista esperava-nos pontualmente com uma placa, e a carrinha estava muito limpa, confortável e com ar condicionado. Contacto rápido e fácil por WhatsApp. Recomendo vivamente!",
      nl: "Geweldige service! We boekten een privétransfer van de luchthaven van Marrakech naar Agadir voor 5 personen met bagage, en alles verliep perfect. Ondanks onze aankomst 's nachts stond de chauffeur stipt op ons te wachten met een bordje, en het busje was heel schoon, comfortabel en had airco. Snel en makkelijk contact via WhatsApp. Echt een aanrader!",
      ar: "خدمة رائعة! حجزنا نقلاً خاصاً من مطار مراكش إلى أكادير لخمسة أشخاص مع الأمتعة، وسار كل شيء على أكمل وجه. ورغم وصولنا ليلاً، كان السائق في انتظارنا في الموعد حاملاً لافتة، وكانت الحافلة نظيفة جداً ومريحة ومكيّفة. تواصل سريع وسهل عبر واتساب. أنصح بها بشدة!",
    },
  },
  {
    name: "Max Baumüller",
    rating: 5,
    photo: "/img/reviewers/max.webp",
    lang: "de",
    text: {
      de: "Super Service! Pünktliche Abholung, sehr netter Fahrer und ein bequemes, sauberes Fahrzeug. Hat alles perfekt geklappt – gerne wieder bei unserer nächsten Marokko-Reise!",
      en: "Super service! Punctual pick-up, a very friendly driver and a comfortable, clean vehicle. Everything worked out perfectly – we'll gladly book again on our next trip to Morocco!",
      fr: "Super service ! Prise en charge ponctuelle, chauffeur très sympathique et véhicule confortable et propre. Tout s'est parfaitement passé – avec plaisir pour notre prochain voyage au Maroc !",
      es: "¡Servicio genial! Recogida puntual, un conductor muy amable y un vehículo cómodo y limpio. Todo salió perfecto: ¡repetiremos encantados en nuestro próximo viaje a Marruecos!",
      it: "Servizio super! Ritiro puntuale, autista molto gentile e veicolo comodo e pulito. Tutto è andato alla perfezione: lo rifaremo volentieri nel nostro prossimo viaggio in Marocco!",
      pt: "Serviço top! Recolha pontual, motorista muito simpático e um veículo confortável e limpo. Correu tudo na perfeição – voltaremos a reservar com gosto na nossa próxima viagem a Marrocos!",
      nl: "Super service! Stipt opgehaald, een heel vriendelijke chauffeur en een comfortabel, schoon voertuig. Alles verliep perfect – bij onze volgende reis naar Marokko graag weer!",
      ar: "خدمة ممتازة! استقبال في الموعد، وسائق لطيف جداً، وسيارة مريحة ونظيفة. سار كل شيء على أكمل وجه – سنحجز معكم بكل سرور في رحلتنا القادمة إلى المغرب!",
    },
  },
  {
    name: "Infinitydrea Drea",
    rating: 5,
    photo: "/img/reviewers/drea.webp",
    lang: "en",
    text: {
      en: "Great experience and excellent service ! Fully recommended!!",
      fr: "Super expérience et excellent service ! Je recommande vivement !",
      de: "Tolles Erlebnis und ausgezeichneter Service! Absolut empfehlenswert!",
      es: "¡Una gran experiencia y un servicio excelente! ¡Totalmente recomendable!",
      it: "Bellissima esperienza e servizio eccellente! Consigliatissimo!",
      pt: "Ótima experiência e excelente serviço! Recomendo totalmente!",
      nl: "Geweldige ervaring en uitstekende service! Echt een aanrader!",
      ar: "تجربة رائعة وخدمة ممتازة! أنصح بها بشدة!",
    },
  },
];

/** "Translated from <original language>", written in the page language. */
const TRANSLATED_FROM: Record<Lang, Partial<Record<Lang | "pl", string>>> = {
  en: { pl: "Translated from Polish", de: "Translated from German" },
  fr: { pl: "Traduit du polonais", de: "Traduit de l'allemand", en: "Traduit de l'anglais" },
  de: { pl: "Übersetzt aus dem Polnischen", en: "Übersetzt aus dem Englischen" },
  es: { pl: "Traducido del polaco", de: "Traducido del alemán", en: "Traducido del inglés" },
  it: { pl: "Tradotto dal polacco", de: "Tradotto dal tedesco", en: "Tradotto dall'inglese" },
  pt: { pl: "Traduzido do polaco", de: "Traduzido do alemão", en: "Traduzido do inglês" },
  nl: { pl: "Vertaald uit het Pools", de: "Vertaald uit het Duits", en: "Vertaald uit het Engels" },
  ar: { pl: "مترجم من البولندية", de: "مترجم من الألمانية", en: "مترجم من الإنجليزية" },
};

export function getReviews(lang: Lang): Review[] {
  return SOURCE.map((s) => ({
    name: s.name,
    rating: s.rating,
    photo: s.photo,
    source: "Google",
    url: GBP_URL,
    route: s.route?.[lang],
    text: s.text[lang] ?? s.text[s.lang]!,
    translatedFrom: s.lang === lang ? undefined : TRANSLATED_FROM[lang][s.lang],
  }));
}

export const REVIEWS: Review[] = getReviews("en");
