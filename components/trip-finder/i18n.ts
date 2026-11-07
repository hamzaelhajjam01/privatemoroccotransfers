import { LanguageCode } from "@/lib/i18n";

export type TripFinderI18n = {
  lang: LanguageCode;
  dir: "ltr" | "rtl";
  cities: Record<string, string>;
  airports: Record<string, string>;
  places: Record<string, string>;
  countries: Record<string, string>;
  map: {
    t1: string;
    t2: string;
    t3: string;
  };
  inset: {
    country: string;
    tagline: string;
  };
  types: Record<"airport" | "city" | "day" | "tour", { n: string; d: string; e: string }>;
  day: Record<"ourika" | "atlas" | "agafay" | "benhaddou" | "essaouira", { n: string }>;
  eachWayBack: string;
  tours: {
    startCity: string;
    length: string;
    d3: string;
    d5: string;
    d7: string;
    loop: (days: number) => string;
    sameDriver: (days: number) => string;
  };
  comfort: Array<{ k: string; n: string; d: string }>;
  classes: Record<string, string>;
  labels: {
    seats: string;
    bags: string;
    ac: string;
    licensed: string;
    traveller: string;
    travellers: string;
    privateDriver: string;
    fuelTollsAcIncluded: string;
    fixedPricePerVehicle: string;
    upToSeats: (max: number) => string;
    vehiclePrefix: string;
    fromPrice: (p: number) => string;
    min: string;
    hours: string;
  };
  when: string[];
  quote: {
    text: string;
    author: string;
  };
  steps: {
    s1: { title: string; subtitle: string };
    s2: {
      cityTitle: string;
      from: string;
      to: string;
      airportTitle: string;
      arrivalAirport: string;
      goingTo: string;
      hotelInCity: (city: string) => string;
      sameCityHotel: string;
      yourHotel: string;
      dayTitle: string;
      tourTitle: string;
      statRoute: string;
      statChoose: string;
      statLocalDesc: string;
      statPerVehicle: string;
    };
    s3: {
      title: string;
      subtitle: string;
      fewerPax: string;
      morePax: string;
      continueBtn: string;
    };
    s4: {
      title: string;
      subtitle: (pax: number, className: string) => string;
    };
    s5: {
      title: string;
      subtitle: string;
    };
  };
  loading: {
    matchingDriver: string;
    routeChecked: string;
    vehicleMatched: (car: string) => string;
    priceLocked: string;
    done: string;
    roadDesc: string;
    doorToDoorDesc: string;
  };
  result: {
    title: string;
    yourFixedPrice: string;
    madSub: (mad: string, comfort: string, cname: string, car: string) => string;
    trip: string;
    distance: string;
    travellers: string;
    when: string;
    badgeDeposit: string;
    badgeCancel: string;
    badgeIncluded: string;
    onlineStatus: string;
    msgAlreadyWritten: string;
    preferEmail: string;
    getQuoteInbox: string;
    yourName: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    consentText: string;
    emailBtn: string;
    emailSending: string;
    thanksMsg: (name: string, email: string) => string;
    consentConfirmed: string;
    emailErrorInvalid: string;
    emailErrorGeneric: string;
    or: string;
    waBtn: string;
    finePrint: string;
    startAgain: string;
  };
  waMsg: (p: { typeName: string; route: string; pax: number; comfort: string; car: string; when: string; price: number }) => string;
  back: string;
  edit: string;
  routeInfoTexts: {
    pickup: string;
    byPrivateCar: string;
    arrivalsToHotel: string;
    meetAndGreet: string;
    doorToDoor: string;
    pickupRiad: string;
    tourStarts: string;
    sameDriverThroughout: string;
  };
  projTexts: {
    subTrip: string;
    fromFixed: (price: number) => string;
  };
};

export const TRIP_FINDER_TRANSLATIONS: Record<LanguageCode, TripFinderI18n> = {
  en: {
    lang: "en",
    dir: "ltr",
    cities: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tangier",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tangier",
      RBA: "Rabat",
    },
    places: {
      LAA: "Laâyoune",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Spain",
      Portugal: "Portugal",
      Algeria: "Algeria",
      Mauritania: "Mauritania",
      "Canary Islands": "Canary Islands",
      "Atlantic Ocean": "Atlantic Ocean",
      Mediterranean: "Mediterranean",
    },
    map: {
      t1: "MOROCCO",
      t2: "150+ FIXED-PRICE ROUTES",
      t3: "From Tangier to Dakhla,<br>one driver, one price",
    },
    inset: {
      country: "Morocco",
      tagline: "One driver, one fixed price",
    },
    types: {
      airport: { n: "Airport transfer", d: "Meet & greet in arrivals", e: "From €30" },
      city: { n: "City to city", d: "Door to door, any route", e: "150+ routes" },
      day: { n: "Day trip", d: "Out by morning, back by evening", e: "From €60" },
      tour: { n: "Private tour", d: "3, 5 or 7 days, same driver", e: "Custom" },
    },
    day: {
      ourika: { n: "Ourika Valley" },
      atlas: { n: "Atlas Mountains & Imlil" },
      agafay: { n: "Agafay Desert" },
      benhaddou: { n: "Aït Benhaddou" },
      essaouira: { n: "Essaouira coast" },
    },
    eachWayBack: "km each way · back by evening",
    tours: {
      startCity: "Starting city",
      length: "Length",
      d3: "3 days · Sahara",
      d5: "5 days · Sahara + Fes",
      d7: "7 days · Grand loop",
      loop: (days) => `${days}-day loop`,
      sameDriver: (days) => `${days} days · same driver`,
    },
    comfort: [
      { k: "value", n: "Value", d: "Clean, reliable, air-conditioned" },
      { k: "comfort", n: "Comfort", d: "More room, smoother ride" },
      { k: "business", n: "Business", d: "Premium car, executive feel" },
    ],
    classes: {
      sedan: "Sedan",
      suv: "SUV",
      van: "Van",
      minibus: "Minibus",
    },
    labels: {
      seats: "seats",
      bags: "bags",
      ac: "A/C",
      licensed: "Licensed",
      traveller: "traveller",
      travellers: "travellers",
      privateDriver: "private driver",
      fuelTollsAcIncluded: "fuel, tolls & A/C included",
      fixedPricePerVehicle: "fixed price per vehicle",
      upToSeats: (max) => `Up to ${max} seats`,
      vehiclePrefix: "Vehicle",
      fromPrice: (p) => `From €${p}`,
      min: "min",
      hours: "h",
    },
    when: ["In the next 7 days", "This month", "In 1–3 months", "Still exploring"],
    quote: {
      text: "“My flight was two hours late and the driver waited without charging extra.”",
      author: "James O. · Casablanca airport",
    },
    steps: {
      s1: {
        title: "What kind of trip are you [planning?]",
        subtitle: "Five quick questions and we'll match your driver, vehicle and fixed price.",
      },
      s2: {
        cityTitle: "Where are we [driving?]",
        from: "From",
        to: "To",
        airportTitle: "Which airport are you [landing at?]",
        arrivalAirport: "Arrival airport",
        goingTo: "Going to",
        hotelInCity: (city) => `Hotel in ${city}`,
        sameCityHotel: "Hotel in the same city",
        yourHotel: "Your hotel",
        dayTitle: "Where should we take you [from Marrakech?]",
        tourTitle: "Plan your [private tour]",
        statRoute: "Your route",
        statChoose: "Choose both ends to see the distance",
        statLocalDesc: "Arrivals hall to your door",
        statPerVehicle: "fixed price per vehicle",
      },
      s3: {
        title: "How many [travellers?]",
        subtitle: "We'll match a vehicle where everyone and every bag fits.",
        fewerPax: "One fewer traveller",
        morePax: "One more traveller",
        continueBtn: "Continue",
      },
      s4: {
        title: "How would you like to [ride?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "travellers" : "traveller"} · ${className}. Fuel, tolls and A/C are always included.`,
      },
      s5: {
        title: "When are you [travelling?]",
        subtitle: "No payment, no commitment. It only helps your driver plan.",
      },
    },
    loading: {
      matchingDriver: "Matching your driver",
      routeChecked: "Route checked",
      vehicleMatched: (car) => `${car} matched`,
      priceLocked: "Fixed price locked",
      done: "Done",
      roadDesc: "of road with the same driver",
      doorToDoorDesc: "door to door, fixed price",
    },
    result: {
      title: "Your driver is [ready]",
      yourFixedPrice: "Your fixed price",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD per vehicle · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Trip",
      distance: "Distance",
      travellers: "Travellers",
      when: "When",
      badgeDeposit: "No deposit under €300",
      badgeCancel: "Free cancellation 48h",
      badgeIncluded: "Fuel & tolls included",
      onlineStatus: "Online · replies in minutes",
      msgAlreadyWritten: "Your message is already written",
      preferEmail: "Prefer email?",
      getQuoteInbox: "Get this quote in your inbox",
      yourName: "Your name",
      namePlaceholder: "e.g. Sarah Martin",
      email: "Email",
      emailPlaceholder: "you@example.com",
      consentText: "Yes, send me travel tips and special offers from Private Morocco Transfers. I can unsubscribe at any time.",
      emailBtn: "Email me this quote",
      emailSending: "Sending…",
      thanksMsg: (name, email) => `Thanks${name ? ", " + name : ""}! Your quote is on its way to ${email}.`,
      consentConfirmed: " You're also on our list for travel tips and offers.",
      emailErrorInvalid: "Enter a valid email address, like name@example.com.",
      emailErrorGeneric: "We couldn't save your request right now. Please try again, or send your trip on WhatsApp below.",
      or: "or",
      waBtn: "Send my trip on WhatsApp",
      finePrint: "Estimate from our published rates. Your driver confirms the exact fixed price on WhatsApp, usually within minutes.",
      startAgain: "Start again",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Hello Private Morocco Transfers! 👋\nI'd like a fixed price for:\n• ${typeName}: ${route}\n• Travellers: ${pax}\n• Vehicle: ${comfort} (${car})\n• When: ${when}\nTrip finder estimate: from €${price}\nIs a driver available?`,
    back: "← Back",
    edit: "← Edit",
    routeInfoTexts: {
      pickup: "Pick-up",
      byPrivateCar: "by private car",
      arrivalsToHotel: "Arrivals hall to your hotel",
      meetAndGreet: "Meet & greet",
      doorToDoor: "door to door",
      pickupRiad: "Pick-up at your riad",
      tourStarts: "Tour starts",
      sameDriverThroughout: "Same driver throughout",
    },
    projTexts: {
      subTrip: "Fixed price · same driver · fuel & tolls included",
      fromFixed: (price) => `From €${price} fixed`,
    },
  },

  fr: {
    lang: "fr",
    dir: "ltr",
    cities: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fès",
      TNG: "Tanger",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fès",
      TNG: "Tanger",
      RBA: "Rabat",
    },
    places: {
      LAA: "Laâyoune",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Espagne",
      Portugal: "Portugal",
      Algeria: "Algérie",
      Mauritania: "Mauritanie",
      "Canary Islands": "Îles Canaries",
      "Atlantic Ocean": "Océan Atlantique",
      Mediterranean: "Méditerranée",
    },
    map: {
      t1: "MAROC",
      t2: "+150 TRAJETS À PRIX FIXE",
      t3: "De Tanger à Dakhla,<br>un chauffeur, un prix fixe",
    },
    inset: {
      country: "Maroc",
      tagline: "Un chauffeur, un tarif fixe garanti",
    },
    types: {
      airport: { n: "Transfert aéroport", d: "Accueil personnalisé aux arrivées", e: "Dès 30 €" },
      city: { n: "Intervilles", d: "Porte-à-porte, tous trajets", e: "+150 trajets" },
      day: { n: "Excursion d'une journée", d: "Départ le matin, retour le soir", e: "Dès 60 €" },
      tour: { n: "Circuit privé", d: "3, 5 ou 7 jours, même chauffeur", e: "Sur mesure" },
    },
    day: {
      ourika: { n: "Vallée de l'Ourika" },
      atlas: { n: "Monts de l'Atlas & Imlil" },
      agafay: { n: "Désert d'Agafay" },
      benhaddou: { n: "Aït Ben Haddou" },
      essaouira: { n: "Côte d'Essaouira" },
    },
    eachWayBack: "km par trajet · retour en soirée",
    tours: {
      startCity: "Ville de départ",
      length: "Durée",
      d3: "3 jours · Sahara",
      d5: "5 jours · Sahara + Fès",
      d7: "7 jours · Grand circuit",
      loop: (days) => `Boucle de ${days} jours`,
      sameDriver: (days) => `${days} jours · même chauffeur`,
    },
    comfort: [
      { k: "value", n: "Standard", d: "Propre, climatisé et économique" },
      { k: "comfort", n: "Confort", d: "Plus d'espace, trajet tout en douceur" },
      { k: "business", n: "Business", d: "Véhicule haut de gamme, service VIP" },
    ],
    classes: {
      sedan: "Berline",
      suv: "SUV / 4x4",
      van: "Minivan",
      minibus: "Minibus",
    },
    labels: {
      seats: "places",
      bags: "bagages",
      ac: "Clim",
      licensed: "Agréé",
      traveller: "voyageur",
      travellers: "voyageurs",
      privateDriver: "chauffeur privé",
      fuelTollsAcIncluded: "carburant, péages & clim inclus",
      fixedPricePerVehicle: "tarif fixe par véhicule",
      upToSeats: (max) => `Jusqu'à ${max} places`,
      vehiclePrefix: "Véhicule",
      fromPrice: (p) => `Dès ${p} €`,
      min: "min",
      hours: "h",
    },
    when: ["Dans les 7 prochains jours", "Ce mois-ci", "Dans 1 à 3 mois", "En cours de réflexion"],
    quote: {
      text: "« Mon vol avait deux heures de retard et le chauffeur m'a attendu sans aucun supplément. »",
      author: "Julien M. · Aéroport de Casablanca",
    },
    steps: {
      s1: {
        title: "Quel type de trajet [prévoyez-vous ?]",
        subtitle: "Cinq questions rapides pour trouver votre chauffeur, votre véhicule et votre tarif fixe garanti.",
      },
      s2: {
        cityTitle: "Où souhaitez-vous [vous rendre ?]",
        from: "Départ",
        to: "Arrivée",
        airportTitle: "À quel aéroport [atterrissez-vous ?]",
        arrivalAirport: "Aéroport d'arrivée",
        goingTo: "Destination",
        hotelInCity: (city) => `Hôtel à ${city}`,
        sameCityHotel: "Hôtel dans la même ville",
        yourHotel: "Votre hôtel",
        dayTitle: "Où souhaitez-vous aller [depuis Marrakech ?]",
        tourTitle: "Planifiez votre [circuit privé]",
        statRoute: "Votre itinéraire",
        statChoose: "Sélectionnez vos deux points pour afficher la distance",
        statLocalDesc: "Du hall des arrivées jusqu'à votre hôtel",
        statPerVehicle: "tarif fixe par véhicule",
      },
      s3: {
        title: "Combien de [voyageurs ?]",
        subtitle: "Nous sélectionnons un véhicule adapté à vos passagers et à l'ensemble de vos bagages.",
        fewerPax: "Un voyageur de moins",
        morePax: "Un voyageur de plus",
        continueBtn: "Continuer",
      },
      s4: {
        title: "Quel niveau de confort [souhaitez-vous ?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "voyageurs" : "voyageur"} · ${className}. Carburant, péages et climatisation sont toujours inclus.`,
      },
      s5: {
        title: "Quand partez-vous en [voyage ?]",
        subtitle: "Sans paiement ni engagement. Cela permet simplement à votre chauffeur de s'organiser.",
      },
    },
    loading: {
      matchingDriver: "Attribution de votre chauffeur",
      routeChecked: "Itinéraire validé",
      vehicleMatched: (car) => `${car} assigné`,
      priceLocked: "Tarif ferme bloqué",
      done: "Terminé",
      roadDesc: "de route avec le même chauffeur",
      doorToDoorDesc: "porte-à-porte, prix ferme garanti",
    },
    result: {
      title: "Votre chauffeur est [prêt]",
      yourFixedPrice: "Votre tarif fixe garanti",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD par véhicule · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Trajet",
      distance: "Distance",
      travellers: "Voyageurs",
      when: "Date",
      badgeDeposit: "0% d'acompte < 300 €",
      badgeCancel: "Annulation gratuite 48h",
      badgeIncluded: "Carburant & péages inclus",
      onlineStatus: "En ligne · réponse en quelques minutes",
      msgAlreadyWritten: "Votre message WhatsApp est déjà rédigé",
      preferEmail: "Vous préférez un e-mail ?",
      getQuoteInbox: "Recevez ce devis dans votre boîte de réception",
      yourName: "Votre nom",
      namePlaceholder: "ex. Claire Martin",
      email: "Adresse e-mail",
      emailPlaceholder: "vous@exemple.com",
      consentText: "Oui, envoyez-moi des conseils de voyage et offres spéciales de Private Morocco Transfers. Désabonnement à tout moment.",
      emailBtn: "Recevoir mon devis par e-mail",
      emailSending: "Envoi en cours…",
      thanksMsg: (name, email) => `Merci${name ? ", " + name : ""} ! Votre devis est en route vers ${email}.`,
      consentConfirmed: " Vous êtes également inscrit à nos conseils de voyage.",
      emailErrorInvalid: "Veuillez saisir une adresse e-mail valide, ex. nom@domaine.com.",
      emailErrorGeneric: "Impossible d'enregistrer votre demande. Veuillez réessayer ou envoyer votre trajet sur WhatsApp ci-dessous.",
      or: "ou",
      waBtn: "Envoyer ma demande sur WhatsApp",
      finePrint: "Estimation calculée selon nos tarifs officiels. Votre chauffeur confirme le tarif exact et la disponibilité sur WhatsApp.",
      startAgain: "Recommencer",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Bonjour Private Morocco Transfers ! 👋\nJe souhaite réserver :\n• ${typeName} : ${route}\n• Voyageurs : ${pax}\n• Véhicule : ${comfort} (${car})\n• Date : ${when}\nEstimation Simulateur : dès ${price} €\nAvez-vous un chauffeur disponible ?`,
    back: "← Retour",
    edit: "← Modifier",
    routeInfoTexts: {
      pickup: "Prise en charge",
      byPrivateCar: "en voiture privée",
      arrivalsToHotel: "Du hall des arrivées à votre hôtel",
      meetAndGreet: "Accueil personnalisé",
      doorToDoor: "porte-à-porte",
      pickupRiad: "Prise en charge à votre riad",
      tourStarts: "Départ du circuit",
      sameDriverThroughout: "Même chauffeur tout au long du trajet",
    },
    projTexts: {
      subTrip: "Prix fixe · même chauffeur · carburant & péages inclus",
      fromFixed: (price) => `Dès ${price} € garanti`,
    },
  },

  es: {
    lang: "es",
    dir: "ltr",
    cities: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fez",
      TNG: "Tánger",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fez",
      TNG: "Tánger",
      RBA: "Rabat",
    },
    places: {
      LAA: "El Aaiún",
      VIL: "Dajla",
      SMA: "Esmara",
      OZZ: "Uarzazat",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "España",
      Portugal: "Portugal",
      Algeria: "Argelia",
      Mauritania: "Mauritania",
      "Canary Islands": "Islas Canarias",
      "Atlantic Ocean": "Océano Atlántico",
      Mediterranean: "Mediterráneo",
    },
    map: {
      t1: "MARRUECOS",
      t2: "+150 RUTAS A PRECIO FIJO",
      t3: "De Tánger a Dajla,<br>un chófer, un precio cerrado",
    },
    inset: {
      country: "Marruecos",
      tagline: "Un chófer privado, precio fijo garantizado",
    },
    types: {
      airport: { n: "Traslado aeropuerto", d: "Bienvenida con cartel en llegadas", e: "Desde 30 €" },
      city: { n: "Ciudad a ciudad", d: "Puerta a puerta, cualquier ruta", e: "+150 rutas" },
      day: { n: "Excursión de un día", d: "Salida por la mañana, regreso por la tarde", e: "Desde 60 €" },
      tour: { n: "Tour privado", d: "3, 5 o 7 días, mismo chófer", e: "A medida" },
    },
    day: {
      ourika: { n: "Valle de Ourika" },
      atlas: { n: "Montañas del Atlas e Imlil" },
      agafay: { n: "Desierto de Agafay" },
      benhaddou: { n: "Ait Ben Hadu" },
      essaouira: { n: "Costa de Essaouira" },
    },
    eachWayBack: "km por trayecto · regreso por la tarde",
    tours: {
      startCity: "Ciudad de salida",
      length: "Duración",
      d3: "3 días · Sáhara",
      d5: "5 días · Sáhara + Fez",
      d7: "7 días · Gran circuito",
      loop: (days) => `Circuito de ${days} días`,
      sameDriver: (days) => `${days} días · mismo chófer`,
    },
    comfort: [
      { k: "value", n: "Económico", d: "Limpio, con aire acondicionado y fiable" },
      { k: "comfort", n: "Confort", d: "Más espacio, viaje muy suave" },
      { k: "business", n: "Ejecutivo", d: "Vehículo prémium, atención VIP" },
    ],
    classes: {
      sedan: "Sedán",
      suv: "SUV / 4x4",
      van: "Miniván",
      minibus: "Minibús",
    },
    labels: {
      seats: "plazas",
      bags: "maletas",
      ac: "Clima",
      licensed: "Oficial",
      traveller: "pasajero",
      travellers: "pasajeros",
      privateDriver: "chófer privado",
      fuelTollsAcIncluded: "combustible, peajes y A/C incluidos",
      fixedPricePerVehicle: "precio fijo por vehículo",
      upToSeats: (max) => `Hasta ${max} plazas`,
      vehiclePrefix: "Vehículo",
      fromPrice: (p) => `Desde ${p} €`,
      min: "min",
      hours: "h",
    },
    when: ["En los próximos 7 días", "Este mes", "En 1 a 3 meses", "Aún organizando"],
    quote: {
      text: "«Mi vuelo se retrasó dos horas y el chófer me esperó pacientemente sin cobrar ningún extra.»",
      author: "Carlos R. · Aeropuerto de Casablanca",
    },
    steps: {
      s1: {
        title: "¿Qué tipo de viaje estás [planeando?]",
        subtitle: "Cinco preguntas rápidas y asignamos tu chófer, tu vehículo y tu precio fijo garantizado.",
      },
      s2: {
        cityTitle: "¿A dónde vamos a [viajar?]",
        from: "Origen",
        to: "Destino",
        airportTitle: "¿En qué aeropuerto [aterrizas?]",
        arrivalAirport: "Aeropuerto de llegada",
        goingTo: "Destino",
        hotelInCity: (city) => `Hotel en ${city}`,
        sameCityHotel: "Hotel en la misma ciudad",
        yourHotel: "Tu hotel",
        dayTitle: "¿Qué excursión prefieres [desde Marrakech?]",
        tourTitle: "Diseña tu [tour privado]",
        statRoute: "Tu itinerario",
        statChoose: "Selecciona origen y destino para ver la distancia",
        statLocalDesc: "De la sala de llegadas a la puerta de tu hotel",
        statPerVehicle: "precio fijo por vehículo",
      },
      s3: {
        title: "¿Cuántos [viajeros sois?]",
        subtitle: "Asignaremos un vehículo donde quepan cómodamente todos los pasajeros y el equipaje.",
        fewerPax: "Un viajero menos",
        morePax: "Un viajero más",
        continueBtn: "Continuar",
      },
      s4: {
        title: "¿Qué categoría de viaje [prefieres?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "pasajeros" : "pasajero"} · ${className}. Combustible, peajes y A/C siempre incluidos.`,
      },
      s5: {
        title: "¿Cuándo tenéis previsto [viajar?]",
        subtitle: "Sin pagos ni compromisos. Solo ayuda a tu conductor a reservar agenda.",
      },
    },
    loading: {
      matchingDriver: "Asignando tu chófer",
      routeChecked: "Ruta confirmada",
      vehicleMatched: (car) => `${car} asignado`,
      priceLocked: "Precio fijo garantizado",
      done: "Listo",
      roadDesc: "de ruta con el mismo chófer",
      doorToDoorDesc: "puerta a puerta, tarifa cerrada",
    },
    result: {
      title: "Tu chófer está [preparado]",
      yourFixedPrice: "Tu precio fijo garantizado",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD por vehículo · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Viaje",
      distance: "Distancia",
      travellers: "Pasajeros",
      when: "Fecha",
      badgeDeposit: "0% anticipo < 300 €",
      badgeCancel: "Cancelación gratis 48h",
      badgeIncluded: "Peajes y combustible incluidos",
      onlineStatus: "En línea · respuesta en minutos",
      msgAlreadyWritten: "Tu mensaje de WhatsApp ya está listo",
      preferEmail: "¿Prefieres recibirlo por email?",
      getQuoteInbox: "Recibe este presupuesto en tu correo",
      yourName: "Tu nombre",
      namePlaceholder: "ej. Laura Gómez",
      email: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      consentText: "Sí, enviadme consejos y promociones exclusivas de Private Morocco Transfers. Puedo cancelar en cualquier momento.",
      emailBtn: "Enviarme este presupuesto",
      emailSending: "Enviando…",
      thanksMsg: (name, email) => `¡Gracias${name ? ", " + name : ""}! Tu presupuesto ha sido enviado a ${email}.`,
      consentConfirmed: " Te hemos añadido a nuestra lista de consejos de viaje.",
      emailErrorInvalid: "Introduce un correo electrónico válido, ej. nombre@ejemplo.com.",
      emailErrorGeneric: "No hemos podido procesar tu solicitud. Por favor inténtalo de nuevo o contáctanos por WhatsApp.",
      or: "o",
      waBtn: "Enviar mi viaje por WhatsApp",
      finePrint: "Presupuesto calculado según nuestras tarifas oficiales. El chófer confirmará la disponibilidad exacta y el precio por WhatsApp.",
      startAgain: "Volver a empezar",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `¡Hola Private Morocco Transfers! 👋\nMe gustaría confirmar precio fijo para:\n• ${typeName}: ${route}\n• Pasajeros: ${pax}\n• Vehículo: ${comfort} (${car})\n• Fecha: ${when}\nEstimación del buscador: desde ${price} €\n¿Tienen un chófer disponible?`,
    back: "← Atrás",
    edit: "← Modificar",
    routeInfoTexts: {
      pickup: "Recogida",
      byPrivateCar: "en coche privado",
      arrivalsToHotel: "De llegadas a tu hotel",
      meetAndGreet: "Bienvenida personalizada",
      doorToDoor: "puerta a puerta",
      pickupRiad: "Recogida en tu riad",
      tourStarts: "Inicio del tour",
      sameDriverThroughout: "Mismo chófer todo el recorrido",
    },
    projTexts: {
      subTrip: "Precio fijo · mismo chófer · combustible y peajes incluidos",
      fromFixed: (price) => `Desde ${price} € cerrado`,
    },
  },

  it: {
    lang: "it",
    dir: "ltr",
    cities: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tangeri",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tangeri",
      RBA: "Rabat",
    },
    places: {
      LAA: "Laâyoune",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Spagna",
      Portugal: "Portogallo",
      Algeria: "Algeria",
      Mauritania: "Mauritania",
      "Canary Islands": "Isole Canarie",
      "Atlantic Ocean": "Oceano Atlantico",
      Mediterranean: "Mediterraneo",
    },
    map: {
      t1: "MAROCCO",
      t2: "+150 TRATTE A PREZZO FISSO",
      t3: "Da Tangeri a Dakhla,<br>un autista, un prezzo fisso",
    },
    inset: {
      country: "Marocco",
      tagline: "Un autista privato, tariffa fissa garantita",
    },
    types: {
      airport: { n: "Transfer aeroporto", d: "Accoglienza agli arrivi con cartello", e: "Da 30 €" },
      city: { n: "Città a città", d: "Porta a porta, qualsiasi itinerario", e: "+150 tratte" },
      day: { n: "Escursione in giornata", d: "Partenza al mattino, ritorno la sera", e: "Da 60 €" },
      tour: { n: "Tour privato", d: "3, 5 o 7 giorni, stesso autista", e: "Su misura" },
    },
    day: {
      ourika: { n: "Valle dell'Ourika" },
      atlas: { n: "Monti dell'Atlante e Imlil" },
      agafay: { n: "Deserto di Agafay" },
      benhaddou: { n: "Aït Ben Haddou" },
      essaouira: { n: "Costa di Essaouira" },
    },
    eachWayBack: "km a tratta · rientro in serata",
    tours: {
      startCity: "Città di partenza",
      length: "Durata",
      d3: "3 giorni · Sahara",
      d5: "5 giorni · Sahara + Fes",
      d7: "7 giorni · Gran Tour",
      loop: (days) => `Giro di ${days} giorni`,
      sameDriver: (days) => `${days} giorni · stesso autista`,
    },
    comfort: [
      { k: "value", n: "Standard", d: "Pulito, climatizzato e affidabile" },
      { k: "comfort", n: "Comfort", d: "Più spazio, viaggio rilassante" },
      { k: "business", n: "Business", d: "Veicolo premium, servizio VIP" },
    ],
    classes: {
      sedan: "Berlina",
      suv: "SUV / 4x4",
      van: "Van",
      minibus: "Minibus",
    },
    labels: {
      seats: "posti",
      bags: "bagagli",
      ac: "Clima",
      licensed: "Licenza",
      traveller: "passeggero",
      travellers: "passeggeri",
      privateDriver: "autista privato",
      fuelTollsAcIncluded: "carburante, pedaggi e A/C inclusi",
      fixedPricePerVehicle: "prezzo fisso per veicolo",
      upToSeats: (max) => `Fino a ${max} posti`,
      vehiclePrefix: "Veicolo",
      fromPrice: (p) => `Da ${p} €`,
      min: "min",
      hours: "h",
    },
    when: ["Nei prossimi 7 giorni", "Questo mese", "Tra 1 e 3 mesi", "Sto ancora valutando"],
    quote: {
      text: "«Il mio volo ha fatto due ore di ritardo e l'autista mi ha aspettato senza chiedere alcun extra.»",
      author: "Marco B. · Aeroporto di Casablanca",
    },
    steps: {
      s1: {
        title: "Che tipo di viaggio stai [organizzando?]",
        subtitle: "Cinque rapide domande per abbinare autista, veicolo ideale e tariffa fissa garantita.",
      },
      s2: {
        cityTitle: "Dove vuoi [andare?]",
        from: "Partenza",
        to: "Destinazione",
        airportTitle: "In quale aeroporto [atterri?]",
        arrivalAirport: "Aeroporto di arrivo",
        goingTo: "Destinazione",
        hotelInCity: (city) => `Hotel a ${city}`,
        sameCityHotel: "Hotel nella stessa città",
        yourHotel: "Il tuo hotel",
        dayTitle: "Che escursione preferisci [da Marrakech?]",
        tourTitle: "Pianifica il tuo [tour privato]",
        statRoute: "Il tuo itinerario",
        statChoose: "Scegli partenza e arrivo per visualizzare la distanza",
        statLocalDesc: "Dagli arrivi direttamente alla porta dell'hotel",
        statPerVehicle: "prezzo fisso a veicolo",
      },
      s3: {
        title: "Quanti [viaggiatori siete?]",
        subtitle: "Selezioneremo un mezzo capiente per far viaggiare comodi tutti i passeggeri e i bagagli.",
        fewerPax: "Un passeggero in meno",
        morePax: "Un passeggero in più",
        continueBtn: "Continua",
      },
      s4: {
        title: "Che livello di comfort [preferisci?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "passeggeri" : "passeggero"} · ${className}. Carburante, pedaggi e aria condizionata sempre inclusi.`,
      },
      s5: {
        title: "Quando avete intenzione di [partire?]",
        subtitle: "Nessun pagamento anticipato. Serve solo al tuo autista per organizzare il calendario.",
      },
    },
    loading: {
      matchingDriver: "Assegnazione autista in corso",
      routeChecked: "Percorso verificato",
      vehicleMatched: (car) => `${car} assegnato`,
      priceLocked: "Prezzo fisso bloccato",
      done: "Fatto",
      roadDesc: "di strada con lo stesso autista",
      doorToDoorDesc: "porta a porta, tariffa fissa",
    },
    result: {
      title: "Il tuo autista è [pronto]",
      yourFixedPrice: "La tua tariffa fissa garantita",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD per veicolo · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Viaggio",
      distance: "Distanza",
      travellers: "Passeggeri",
      when: "Quando",
      badgeDeposit: "Zero anticipo < 300 €",
      badgeCancel: "Cancellazione gratuita 48h",
      badgeIncluded: "Pedaggi e carburante inclusi",
      onlineStatus: "Online · risponde in pochi minuti",
      msgAlreadyWritten: "Il tuo messaggio WhatsApp è pronto",
      preferEmail: "Preferisci via email?",
      getQuoteInbox: "Ricevi questo preventivo nella tua casella di posta",
      yourName: "Il tuo nome",
      namePlaceholder: "es. Marco Rossi",
      email: "Indirizzo email",
      emailPlaceholder: "tuo@esempio.com",
      consentText: "Sì, inviatemi consigli di viaggio e offerte speciali da Private Morocco Transfers. Posso cancellarmi in ogni momento.",
      emailBtn: "Inviami questo preventivo",
      emailSending: "Invio in corso…",
      thanksMsg: (name, email) => `Grazie${name ? ", " + name : ""}! Il tuo preventivo è stato inviato a ${email}.`,
      consentConfirmed: " Ti abbiamo aggiunto alla nostra newsletter con consigli utili.",
      emailErrorInvalid: "Inserisci un indirizzo email valido, es. nome@esempio.com.",
      emailErrorGeneric: "Impossibile salvare la richiesta al momento. Riprova o scrivici direttamente su WhatsApp.",
      or: "oppure",
      waBtn: "Invia il mio viaggio su WhatsApp",
      finePrint: "Stima calcolata secondo i nostri prezzi ufficiali. L'autista confermerà la disponibilità e la tariffa esatta su WhatsApp in pochi minuti.",
      startAgain: "Ricomincia",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Buongiorno Private Morocco Transfers! 👋\nVorrei confermare la tariffa fissa per:\n• ${typeName}: ${route}\n• Passeggeri: ${pax}\n• Veicolo: ${comfort} (${car})\n• Periodo: ${when}\nStima preventivo: da ${price} €\nAvete un autista disponibile?`,
    back: "← Indietro",
    edit: "← Modifica",
    routeInfoTexts: {
      pickup: "Pick-up",
      byPrivateCar: "con auto privata",
      arrivalsToHotel: "Dagli arrivi al tuo hotel",
      meetAndGreet: "Accoglienza con cartello",
      doorToDoor: "porta a porta",
      pickupRiad: "Pick-up presso il tuo riad",
      tourStarts: "Inizio del tour",
      sameDriverThroughout: "Stesso autista per tutto il viaggio",
    },
    projTexts: {
      subTrip: "Prezzo fisso · stesso autista · carburante e pedaggi inclusi",
      fromFixed: (price) => `Da ${price} € garantito`,
    },
  },

  de: {
    lang: "de",
    dir: "ltr",
    cities: {
      RAK: "Marrakesch",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fès",
      TNG: "Tanger",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakesch",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fès",
      TNG: "Tanger",
      RBA: "Rabat",
    },
    places: {
      LAA: "Laâyoune",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Spanien",
      Portugal: "Portugal",
      Algeria: "Algerien",
      Mauritania: "Mauretanien",
      "Canary Islands": "Kanarische Inseln",
      "Atlantic Ocean": "Atlantischer Ozean",
      Mediterranean: "Mittelmeer",
    },
    map: {
      t1: "MAROKKO",
      t2: "150+ FESTPREIS-ROUTEN",
      t3: "Von Tanger bis Dakhla,<br>ein Fahrer, ein verbindlicher Preis",
    },
    inset: {
      country: "Marokko",
      tagline: "Ein Privatchauffeur, garantierter Festpreis",
    },
    types: {
      airport: { n: "Flughafentransfer", d: "Abholung mit Namensschild in der Ankunft", e: "Ab 30 €" },
      city: { n: "Stadt zu Stadt", d: "Tür-zu-Tür, jede gewünschte Route", e: "150+ Strecken" },
      day: { n: "Tagesausflug", d: "Morgens hin, abends zurück", e: "Ab 60 €" },
      tour: { n: "Private Rundreise", d: "3, 5 oder 7 Tage mit demselben Fahrer", e: "Individuell" },
    },
    day: {
      ourika: { n: "Ourika-Tal" },
      atlas: { n: "Atlasgebirge & Imlil" },
      agafay: { n: "Agafay-Wüste" },
      benhaddou: { n: "Aït Ben Haddou" },
      essaouira: { n: "Küste von Essaouira" },
    },
    eachWayBack: "km pro Strecke · abends zurück",
    tours: {
      startCity: "Startstadt",
      length: "Reisedauer",
      d3: "3 Tage · Sahara",
      d5: "5 Tage · Sahara + Fès",
      d7: "7 Tage · Große Schleife",
      loop: (days) => `${days}-Tage Rundfahrt`,
      sameDriver: (days) => `${days} Tage · derselbe Fahrer`,
    },
    comfort: [
      { k: "value", n: "Standard", d: "Sauber, zuverlässig, klimatisiert" },
      { k: "comfort", n: "Komfort", d: "Mehr Beinfreiheit, ruhige Fahrt" },
      { k: "business", n: "Business", d: "Premium-Fahrzeug, First-Class-Gefühl" },
    ],
    classes: {
      sedan: "Limousine",
      suv: "SUV / 4x4",
      van: "Großraum-Van",
      minibus: "Minibus",
    },
    labels: {
      seats: "Sitze",
      bags: "Koffer",
      ac: "Klima",
      licensed: "Lizenziert",
      traveller: "Reisender",
      travellers: "Reisende",
      privateDriver: "Privatchauffeur",
      fuelTollsAcIncluded: "Treibstoff, Maut & Klima inklusive",
      fixedPricePerVehicle: "Festpreis pro Fahrzeug",
      upToSeats: (max) => `Bis zu ${max} Sitze`,
      vehiclePrefix: "Fahrzeug",
      fromPrice: (p) => `Ab ${p} €`,
      min: "Min.",
      hours: "Std.",
    },
    when: ["In den nächsten 7 Tagen", "Diesen Monat", "In 1 bis 3 Monaten", "Noch in Planung"],
    quote: {
      text: "„Unser Flug hatte zwei Stunden Verspätung und der Fahrer hat geduldig ohne Aufpreis auf uns gewartet.“",
      author: "Michael K. · Flughafen Casablanca",
    },
    steps: {
      s1: {
        title: "Welche Reise [planen Sie?]",
        subtitle: "Fünf kurze Fragen und wir ermitteln Ihren Fahrer, das passende Fahrzeug und den Festpreis.",
      },
      s2: {
        cityTitle: "Wohin möchten Sie [fahren?]",
        from: "Abfahrt",
        to: "Zielort",
        airportTitle: "An welchem Flughafen [landen Sie?]",
        arrivalAirport: "Ankunftsflughafen",
        goingTo: "Ziel",
        hotelInCity: (city) => `Hotel in ${city}`,
        sameCityHotel: "Hotel in derselben Stadt",
        yourHotel: "Ihr Hotel",
        dayTitle: "Wohin darf der Ausflug [ab Marrakesch gehen?]",
        tourTitle: "Planen Sie Ihre [private Rundreise]",
        statRoute: "Ihre Route",
        statChoose: "Wählen Sie Start und Ziel für Distanz und Fahrzeit",
        statLocalDesc: "Von der Ankunftshalle bis zur Hoteltür",
        statPerVehicle: "verbindlicher Festpreis pro Fahrzeug",
      },
      s3: {
        title: "Wie viele [Reisende sind Sie?]",
        subtitle: "Wir wählen ein Fahrzeug aus, in dem alle Passagiere und Gepäckstücke bequem Platz finden.",
        fewerPax: "Ein Passagier weniger",
        morePax: "Ein Passagier mehr",
        continueBtn: "Weiter",
      },
      s4: {
        title: "Welchen Komfort [wünschen Sie?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "Reisende" : "Reisender"} · ${className}. Treibstoff, Autobahngebühren und Klimaanlage sind stets inklusive.`,
      },
      s5: {
        title: "Wann treten Sie die [Reise an?]",
        subtitle: "Keine Vorauszahlung, keine Verpflichtung. Dient lediglich der Fahrer-Planung.",
      },
    },
    loading: {
      matchingDriver: "Fahrer wird zugeteilt",
      routeChecked: "Route überprüft",
      vehicleMatched: (car) => `${car} zugewiesen`,
      priceLocked: "Festpreis fixiert",
      done: "Fertig",
      roadDesc: "Reisestrecke mit demselben Chauffeur",
      doorToDoorDesc: "Tür-zu-Tür zum garantierten Festpreis",
    },
    result: {
      title: "Ihr Fahrer steht [bereit]",
      yourFixedPrice: "Ihr garantierter Festpreis",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD pro Fahrzeug · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Fahrt",
      distance: "Distanz",
      travellers: "Reisende",
      when: "Reisezeit",
      badgeDeposit: "0% Anzahlung unter 300 €",
      badgeCancel: "Kostenlose Stornierung bis 48 Std.",
      badgeIncluded: "Maut & Treibstoff inklusive",
      onlineStatus: "Online · antwortet in wenigen Minuten",
      msgAlreadyWritten: "Ihre WhatsApp-Nachricht ist bereits vorformuliert",
      preferEmail: "Lieber per E-Mail?",
      getQuoteInbox: "Angebot bequem im Postfach erhalten",
      yourName: "Ihr Name",
      namePlaceholder: "z.B. Julia Weber",
      email: "E-Mail-Adresse",
      emailPlaceholder: "sie@beispiel.de",
      consentText: "Ja, senden Sie mir Reisetipps und exklusive Angebote von Private Morocco Transfers. Jederzeit abbestellbar.",
      emailBtn: "Angebot per E-Mail senden",
      emailSending: "Wird gesendet…",
      thanksMsg: (name, email) => `Vielen Dank${name ? ", " + name : ""}! Ihr Angebot wurde an ${email} gesendet.`,
      consentConfirmed: " Sie erhalten künftig auch unsere Marokko-Reisetipps.",
      emailErrorInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein, z.B. name@beispiel.de.",
      emailErrorGeneric: "Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie uns per WhatsApp.",
      or: "oder",
      waBtn: "Fahrt per WhatsApp anfragen",
      finePrint: "Schätzung basierend auf unseren regulären Tarifen. Ihr Fahrer bestätigt Festpreis und Verfügbarkeit direkt auf WhatsApp.",
      startAgain: "Neu starten",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Hallo Private Morocco Transfers! 👋\nIch hätte gerne ein Festpreis-Angebot für:\n• ${typeName}: ${route}\n• Reisende: ${pax}\n• Fahrzeug: ${comfort} (${car})\n• Reisezeitraum: ${when}\nReise-Finder Schätzung: ab ${price} €\nIst ein Fahrer verfügbar?`,
    back: "← Zurück",
    edit: "← Anpassen",
    routeInfoTexts: {
      pickup: "Abholung",
      byPrivateCar: "im privaten Fahrzeug",
      arrivalsToHotel: "Von der Ankunftshalle zum Hotel",
      meetAndGreet: "Meet & Greet mit Namensschild",
      doorToDoor: "Tür zu Tür",
      pickupRiad: "Abholung direkt am Riad",
      tourStarts: "Tourstart",
      sameDriverThroughout: "Derselbe Fahrer während der gesamten Reise",
    },
    projTexts: {
      subTrip: "Festpreis · derselbe Fahrer · Maut & Treibstoff inklusive",
      fromFixed: (price) => `Ab ${price} € garantiert`,
    },
  },

  ar: {
    lang: "ar",
    dir: "rtl",
    cities: {
      RAK: "مراكش",
      CMN: "الدار البيضاء",
      AGA: "أكادير",
      FES: "فاس",
      TNG: "طنجة",
      RBA: "الرباط",
      ESS: "الصويرة",
      MRZ: "مرزوكة",
    },
    airports: {
      RAK: "مراكش",
      CMN: "الدار البيضاء",
      AGA: "أكادير",
      FES: "فاس",
      TNG: "طنجة",
      RBA: "الرباط",
    },
    places: {
      LAA: "العيون",
      VIL: "الداخلة",
      SMA: "السمارة",
      OZZ: "ورزازات",
      CHF: "شفشاون",
      TIN: "تنغير",
    },
    countries: {
      Spain: "إسبانيا",
      Portugal: "البرتغال",
      Algeria: "الجزائر",
      Mauritania: "موريتانيا",
      "Canary Islands": "جزر الكناري",
      "Atlantic Ocean": "المحيط الأطلسي",
      Mediterranean: "البحر الأبيض المتوسط",
    },
    map: {
      t1: "المغرب",
      t2: "+150 مسار بسعر ثابت",
      t3: "من طنجة إلى الداخلة،<br>سائقك الخاص بسعر محدد ومضمون",
    },
    inset: {
      country: "المغرب",
      tagline: "سائق خاص بسعر ثابت ومضمون",
    },
    types: {
      airport: { n: "توصيل المطار", d: "استقبال بالاسم في صالة الوصول", e: "من 30 €" },
      city: { n: "بين المدن", d: "من الباب إلى الباب عبر كل المدن", e: "+150 مسار" },
      day: { n: "رحلة يومية", d: "انطلاق صباحاً وعودة مساءً", e: "من 60 €" },
      tour: { n: "جولة سياحية خاصة", d: "3، 5 أو 7 أيام مع نفس السائق", e: "مخصصة" },
    },
    day: {
      ourika: { n: "وادي أوريكا" },
      atlas: { n: "جبال الأطلس وإمليل" },
      agafay: { n: "صحراء أگافاي" },
      benhaddou: { n: "آيت بن حدو" },
      essaouira: { n: "ساحل الصويرة" },
    },
    eachWayBack: "كم ذهاباً وإياباً · عودة في المساء",
    tours: {
      startCity: "مدينة الانطلاق",
      length: "المدة",
      d3: "3 أيام · الصحراء",
      d5: "5 أيام · الصحراء + فاس",
      d7: "7 أيام · جولة المغرب الكبرى",
      loop: (days) => `جولة لمدة ${days} أيام`,
      sameDriver: (days) => `${days} أيام · نفس السائق`,
    },
    comfort: [
      { k: "value", n: "اقتصادي", d: "نظيف، مكيف، مريح وموثوق" },
      { k: "comfort", n: "مريح", d: "مساحة أكبر وسفر مريح للغاية" },
      { k: "business", n: "رجال الأعمال VIP", d: "سيارة فارهة بمستوى تنفيذي راقٍ" },
    ],
    classes: {
      sedan: "سيدان فخمة",
      suv: "دفع رباعي 4x4",
      van: "فان عائلي فاخر",
      minibus: "ميني باص سياحي",
    },
    labels: {
      seats: "مقاعد",
      bags: "حقائب",
      ac: "مكيف",
      licensed: "مرخص",
      traveller: "مسافر",
      travellers: "مسافرين",
      privateDriver: "سائق خاص",
      fuelTollsAcIncluded: "شامل الوقود والرسوم والتكييف",
      fixedPricePerVehicle: "سعر ثابت للسيارة بالكامل",
      upToSeats: (max) => `حتى ${max} مقاعد`,
      vehiclePrefix: "نوع السيارة",
      fromPrice: (p) => `ابتداءً من ${p} €`,
      min: "دقيقة",
      hours: "ساعة",
    },
    when: ["خلال الـ 7 أيام القادمة", "خلال هذا الشهر", "خلال شهر إلى 3 أشهر", "ما زلت أستكشف وأخطط"],
    quote: {
      text: "«تأخرت رحلتي الجوية ساعتين كاملتين، وانتظرني السائق بصبر بدون أي تكلفة إضافية.»",
      author: "أحمد س. · مطار الدار البيضاء",
    },
    steps: {
      s1: {
        title: "ما نوع الرحلة التي [تخطط لها؟]",
        subtitle: "خمسة أسئلة سريعة لنحدد لك السائق والسيارة والسعر الثابت المضمون.",
      },
      s2: {
        cityTitle: "إلى أين تريد [السفر؟]",
        from: "نقطة الانطلاق",
        to: "الوجهة",
        airportTitle: "في أي مطار [ستهبط طائرتك؟]",
        arrivalAirport: "مطار الوصول",
        goingTo: "الوجهة",
        hotelInCity: (city) => `فندق في ${city}`,
        sameCityHotel: "فندق في نفس المدينة",
        yourHotel: "مكان إقامتك",
        dayTitle: "إلى أين نأخذك [من مراكش؟]",
        tourTitle: "خطط [جولتك السياحية الخاصة]",
        statRoute: "مسار الرحلة",
        statChoose: "اختر نقطتي البداية والنهاية لمعرفة المسافة",
        statLocalDesc: "من صالة الوصول مباشرة إلى باب فندقك",
        statPerVehicle: "سعر ثابت وشامل للسيارة بالكامل",
      },
      s3: {
        title: "كم عدد [المسافرين؟]",
        subtitle: "سنخصص سيارة تتسع لجميع الركاب وحقائب السفر بأعلى درجات الراحة.",
        fewerPax: "مسافر أقل",
        morePax: "مسافر إضافي",
        continueBtn: "متابعة",
      },
      s4: {
        title: "ما هي فئة الراحة [التي تفضلها؟]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "مسافرين" : "مسافر"} · ${className}. الوقود ورسوم الطرق والتكييف مشمولة دائماً.`,
      },
      s5: {
        title: "متى موعد [رحلتك؟]",
        subtitle: "بدون أي دفع مسبق وبدون التزام. فقط لمساعدة سائقك في جدولة الموعد.",
      },
    },
    loading: {
      matchingDriver: "جارٍ تخصيص السائق",
      routeChecked: "تم التحقق من المسار",
      vehicleMatched: (car) => `تم تعيين ${car}`,
      priceLocked: "تم قفل السعر الثابت",
      done: "جاهز",
      roadDesc: "طريق مع نفس السائق",
      doorToDoorDesc: "من الباب إلى الباب بسعر ثابت",
    },
    result: {
      title: "سائقك في [انتظارك]",
      yourFixedPrice: "سعرك الثابت والمضمون",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} درهم مغربي للسيارة · ${comfort} ${cname}، ${car}`,
      trip: "الرحلة",
      distance: "المسافة",
      travellers: "المسافرون",
      when: "الموعد",
      badgeDeposit: "بدون عربون لأقل من 300 €",
      badgeCancel: "إلغاء مجاني قبل 48 ساعة",
      badgeIncluded: "الوقود ورسوم الطرق مشمولة",
      onlineStatus: "متصل الآن · الرد خلال دقائق",
      msgAlreadyWritten: "رسالتك في واتساب جاهزة للإرسال",
      preferEmail: "تفضل المراسلة بالبريد الإلكتروني؟",
      getQuoteInbox: "استلم هذا العرض في صندوق بريدك",
      yourName: "الاسم الكامل",
      namePlaceholder: "مثال: يوسف المنصوري",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      consentText: "نعم، أوافق على تلقي نصائح السفر والعروض الخاصة من Private Morocco Transfers. يمكنني إلغاء الاشتراك في أي وقت.",
      emailBtn: "أرسل العرض إلى بريدي الإلكتروني",
      emailSending: "جارٍ الإرسال…",
      thanksMsg: (name, email) => `شكراً لك${name ? " " + name : ""}! تم إرسال العرض إلى ${email}.`,
      consentConfirmed: " تم تسجيلك لتلقي نصائح وأخبار السفر في المغرب.",
      emailErrorInvalid: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      emailErrorGeneric: "تعذر حفظ طلبك حالياً. يرجى المحاولة لاحقاً أو مراسلتنا فوراً عبر واتساب.",
      or: "أو",
      waBtn: "إرسال طلبي عبر واتساب",
      finePrint: "تقدير دقيق بناءً على أسعارنا المعتمدة. سيؤكد لك السائق التفاصيل والسعر الثابت مباشرة عبر واتساب.",
      startAgain: "البدء من جديد",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `السلام عليكم Private Morocco Transfers! 👋\nأود الحصول على تأكيد السعر الثابت لخدمة:\n• ${typeName}: ${route}\n• عدد الركاب: ${pax}\n• السيارة: ${comfort} (${car})\n• الموعد: ${when}\nتقدير الحساب: ابتداءً من ${price}€\nهل يتوفر سائق لهذه الرحلة؟`,
    back: "رجوع ←",
    edit: "تعديل ←",
    routeInfoTexts: {
      pickup: "الانطلاق",
      byPrivateCar: "بسيارة خاصة",
      arrivalsToHotel: "من صالة الوصول إلى الفندق",
      meetAndGreet: "استقبال بالاسم والترحيب",
      doorToDoor: "من الباب إلى الباب",
      pickupRiad: "استقبال عند باب الرياض",
      tourStarts: "بداية الجولة",
      sameDriverThroughout: "نفس السائق طوال الجولة",
    },
    projTexts: {
      subTrip: "سعر ثابت · نفس السائق · الوقود ورسوم الطرق مشمولة",
      fromFixed: (price) => `ابتداءً من ${price} € ثابت`,
    },
  },

  pt: {
    lang: "pt",
    dir: "ltr",
    cities: {
      RAK: "Marraquexe",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fez",
      TNG: "Tânger",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marraquexe",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fez",
      TNG: "Tânger",
      RBA: "Rabat",
    },
    places: {
      LAA: "El Aaiún",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Espanha",
      Portugal: "Portugal",
      Algeria: "Argélia",
      Mauritania: "Mauritânia",
      "Canary Islands": "Ilhas Canárias",
      "Atlantic Ocean": "Oceano Atlântico",
      Mediterranean: "Mediterrâneo",
    },
    map: {
      t1: "MARROCOS",
      t2: "+150 ROTAS A PREÇO FIXO",
      t3: "De Tânger a Dakhla,<br>um motorista, um preço fixo garantido",
    },
    inset: {
      country: "Marrocos",
      tagline: "Um motorista particular, preço fixo garantido",
    },
    types: {
      airport: { n: "Transfer de aeroporto", d: "Recepção com placa nas chegadas", e: "Desde 30 €" },
      city: { n: "Cidade a cidade", d: "Porta a porta, qualquer percurso", e: "+150 rotas" },
      day: { n: "Passeio de um dia", d: "Partida de manhã, regresso à tarde", e: "Desde 60 €" },
      tour: { n: "Circuito privado", d: "3, 5 ou 7 dias com o mesmo motorista", e: "À medida" },
    },
    day: {
      ourika: { n: "Vale de Ourika" },
      atlas: { n: "Montanhas do Atlas e Imlil" },
      agafay: { n: "Deserto de Agafay" },
      benhaddou: { n: "Aït Ben Haddou" },
      essaouira: { n: "Costa de Essaouira" },
    },
    eachWayBack: "km por trajecto · regresso ao final da tarde",
    tours: {
      startCity: "Cidade de partida",
      length: "Duração",
      d3: "3 dias · Saara",
      d5: "5 dias · Saara + Fez",
      d7: "7 dias · Grande circuito",
      loop: (days) => `Circuito de ${days} dias`,
      sameDriver: (days) => `${days} dias · mesmo motorista`,
    },
    comfort: [
      { k: "value", n: "Económico", d: "Limpo, climatizado e fiável" },
      { k: "comfort", n: "Conforto", d: "Mais espaço, viagem muito suave" },
      { k: "business", n: "Executivo", d: "Veículo de luxo, serviço VIP" },
    ],
    classes: {
      sedan: "Sedan",
      suv: "SUV / 4x4",
      van: "Monovolume",
      minibus: "Miniautocarro",
    },
    labels: {
      seats: "lugares",
      bags: "malas",
      ac: "A/C",
      licensed: "Oficial",
      traveller: "passageiro",
      travellers: "passageiros",
      privateDriver: "motorista particular",
      fuelTollsAcIncluded: "combustível, portagens e A/C incluídos",
      fixedPricePerVehicle: "preço fixo por veículo",
      upToSeats: (max) => `Até ${max} lugares`,
      vehiclePrefix: "Veículo",
      fromPrice: (p) => `Desde ${p} €`,
      min: "min",
      hours: "h",
    },
    when: ["Nos próximos 7 dias", "Este mês", "Em 1 a 3 meses", "Ainda a planear"],
    quote: {
      text: "«O meu voo atrasou duas horas e o motorista esperou pacientemente sem cobrar nada a mais.»",
      author: "Pedro S. · Aeroporto de Casablanca",
    },
    steps: {
      s1: {
        title: "Que tipo de viagem está a [planear?]",
        subtitle: "Cinco perguntas rápidas e combinamos o motorista, o veículo ideal e o preço fixo garantido.",
      },
      s2: {
        cityTitle: "Para onde vamos [viajar?]",
        from: "Partida",
        to: "Destino",
        airportTitle: "Em qual aeroporto vai [aterrar?]",
        arrivalAirport: "Aeroporto de chegada",
        goingTo: "Destino",
        hotelInCity: (city) => `Hotel em ${city}`,
        sameCityHotel: "Hotel na mesma cidade",
        yourHotel: "O seu hotel",
        dayTitle: "Que passeio prefere [a partir de Marraquexe?]",
        tourTitle: "Planeie o seu [circuito privado]",
        statRoute: "O seu itinerário",
        statChoose: "Escolha partida e destino para ver a distância",
        statLocalDesc: "Da sala de chegadas à porta do seu hotel",
        statPerVehicle: "preço fixo por veículo",
      },
      s3: {
        title: "Quantos [viajantes são?]",
        subtitle: "Selecionamos um veículo onde todos os passageiros e bagagens viajem com total comodidade.",
        fewerPax: "Menos um passageiro",
        morePax: "Mais um passageiro",
        continueBtn: "Continuar",
      },
      s4: {
        title: "Que nível de conforto [prefere?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "passageiros" : "passageiro"} · ${className}. Combustível, portagens e A/C estão sempre incluídos.`,
      },
      s5: {
        title: "Quando tenciona [viajar?]",
        subtitle: "Sem pagamento prévio, sem compromisso. Serve apenas para reservar a agenda do motorista.",
      },
    },
    loading: {
      matchingDriver: "A atribuir o seu motorista",
      routeChecked: "Itinerário validado",
      vehicleMatched: (car) => `${car} atribuído`,
      priceLocked: "Preço fixo confirmado",
      done: "Concluído",
      roadDesc: "de estrada com o mesmo motorista",
      doorToDoorDesc: "porta a porta, preço fixo",
    },
    result: {
      title: "O seu motorista está [pronto]",
      yourFixedPrice: "O seu preço fixo garantido",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD por veículo · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Viagem",
      distance: "Distância",
      travellers: "Passageiros",
      when: "Data",
      badgeDeposit: "0% entrada para < 300 €",
      badgeCancel: "Cancelamento gratuito 48h",
      badgeIncluded: "Portagens e combustível incluídos",
      onlineStatus: "Online · responde em minutos",
      msgAlreadyWritten: "A sua mensagem de WhatsApp já está redigida",
      preferEmail: "Prefere por e-mail?",
      getQuoteInbox: "Receba este orçamento no seu e-mail",
      yourName: "O seu nome",
      namePlaceholder: "ex: Tiago Silva",
      email: "Endereço de e-mail",
      emailPlaceholder: "voce@exemplo.com",
      consentText: "Sim, enviem-me dicas de viagem e ofertas da Private Morocco Transfers. Posso cancelar a qualquer momento.",
      emailBtn: "Receber orçamento por e-mail",
      emailSending: "A enviar…",
      thanksMsg: (name, email) => `Obrigado${name ? ", " + name : ""}! O seu orçamento foi enviado para ${email}.`,
      consentConfirmed: " Foi também adicionado à nossa lista de dicas de viagem em Marrocos.",
      emailErrorInvalid: "Introduza um endereço de e-mail válido, ex: nome@exemplo.com.",
      emailErrorGeneric: "Não foi possível guardar o seu pedido agora. Tente de novo ou envie pelo WhatsApp abaixo.",
      or: "ou",
      waBtn: "Enviar viagem no WhatsApp",
      finePrint: "Estimativa calculada segundo os preços oficiais. O motorista confirma disponibilidade e preço fechado no WhatsApp.",
      startAgain: "Começar de novo",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Olá Private Morocco Transfers! 👋\nGostaria de confirmar o preço fixo para:\n• ${typeName}: ${route}\n• Passageiros: ${pax}\n• Veículo: ${comfort} (${car})\n• Data: ${when}\nEstimativa do simulador: desde ${price} €\nTêm um motorista disponível?`,
    back: "← Voltar",
    edit: "← Alterar",
    routeInfoTexts: {
      pickup: "Recolha",
      byPrivateCar: "em veículo particular",
      arrivalsToHotel: "Das chegadas ao seu hotel",
      meetAndGreet: "Recepção com placa",
      doorToDoor: "porta a porta",
      pickupRiad: "Recolha no seu riad",
      tourStarts: "Início do circuito",
      sameDriverThroughout: "Mesmo motorista durante todo o percurso",
    },
    projTexts: {
      subTrip: "Preço fixo · mesmo motorista · combustível e portagens incluídos",
      fromFixed: (price) => `Desde ${price} € garantido`,
    },
  },

  nl: {
    lang: "nl",
    dir: "ltr",
    cities: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tanger",
      RBA: "Rabat",
      ESS: "Essaouira",
      MRZ: "Merzouga",
    },
    airports: {
      RAK: "Marrakech",
      CMN: "Casablanca",
      AGA: "Agadir",
      FES: "Fes",
      TNG: "Tanger",
      RBA: "Rabat",
    },
    places: {
      LAA: "Laâyoune",
      VIL: "Dakhla",
      SMA: "Smara",
      OZZ: "Ouarzazate",
      CHF: "Chefchaouen",
      TIN: "Tinghir",
    },
    countries: {
      Spain: "Spanje",
      Portugal: "Portugal",
      Algeria: "Algerije",
      Mauritania: "Mauritanië",
      "Canary Islands": "Canarische Eilanden",
      "Atlantic Ocean": "Atlantische Oceaan",
      Mediterranean: "Middellandse Zee",
    },
    map: {
      t1: "MAROKKO",
      t2: "150+ VASTE PRIJS ROUTES",
      t3: "Van Tanger tot Dakhla,<br>één chauffeur, één gegarandeerde prijs",
    },
    inset: {
      country: "Marokko",
      tagline: "Eén privéchauffeur, vaste prijs gegarandeerd",
    },
    types: {
      airport: { n: "Luchthaventransfer", d: "Ontvangst met naambordje in de aankomsthal", e: "Vanaf €30" },
      city: { n: "Stad naar stad", d: "Deur-tot-deur, elke gewenste route", e: "150+ routes" },
      day: { n: "Dagtocht", d: "Ochtend vertrek, avond terug", e: "Vanaf €60" },
      tour: { n: "Privé rondreis", d: "3, 5 of 7 dagen, zelfde chauffeur", e: "Op maat" },
    },
    day: {
      ourika: { n: "Ourika-vallei" },
      atlas: { n: "Atlasgebergte & Imlil" },
      agafay: { n: "Agafay-woestijn" },
      benhaddou: { n: "Aït Ben Haddou" },
      essaouira: { n: "Kust van Essaouira" },
    },
    eachWayBack: "km per enkele reis · 's avonds terug",
    tours: {
      startCity: "Vertrekstad",
      length: "Duur",
      d3: "3 dagen · Sahara",
      d5: "5 dagen · Sahara + Fes",
      d7: "7 dagen · Grand Tour",
      loop: (days) => `${days}-daagse rondrit`,
      sameDriver: (days) => `${days} dagen · dezelfde chauffeur`,
    },
    comfort: [
      { k: "value", n: "Voordelig", d: "Schoon, betrouwbaar en voorzien van airco" },
      { k: "comfort", n: "Comfort", d: "Meer beenruimte, rustigere rit" },
      { k: "business", n: "Zakelijk", d: "Premium auto, exclusieve VIP-ervaring" },
    ],
    classes: {
      sedan: "Sedan",
      suv: "SUV / 4x4",
      van: "Minivan",
      minibus: "Minibus",
    },
    labels: {
      seats: "stoelen",
      bags: "koffers",
      ac: "Airco",
      licensed: "Gelicentieerd",
      traveller: "reiziger",
      travellers: "reizigers",
      privateDriver: "privéchauffeur",
      fuelTollsAcIncluded: "brandstof, tol & airco inbegrepen",
      fixedPricePerVehicle: "vaste prijs per voertuig",
      upToSeats: (max) => `Tot ${max} zitplaatsen`,
      vehiclePrefix: "Voertuig",
      fromPrice: (p) => `Vanaf €${p}`,
      min: "min",
      hours: "u",
    },
    when: ["In de komende 7 dagen", "Deze maand", "Binnen 1–3 maanden", "Nog aan het oriënteren"],
    quote: {
      text: "„Onze vlucht had twee uur vertraging en de chauffeur wachtte geduldig zonder extra kosten te rekenen.”",
      author: "Daan V. · Luchthaven Casablanca",
    },
    steps: {
      s1: {
        title: "Wat voor reis bent u van [plan?]",
        subtitle: "Vijf korte vragen en we koppelen de ideale chauffeur, auto en vaste prijs aan uw rit.",
      },
      s2: {
        cityTitle: "Waar rijden we [naartoe?]",
        from: "Van",
        to: "Naar",
        airportTitle: "Op welke luchthaven [landt u?]",
        arrivalAirport: "Aankomstluchthaven",
        goingTo: "Bestemming",
        hotelInCity: (city) => `Hotel in ${city}`,
        sameCityHotel: "Hotel in dezelfde stad",
        yourHotel: "Uw hotel",
        dayTitle: "Welke dagtocht kiest u [vanuit Marrakech?]",
        tourTitle: "Stel uw [privé rondreis samen]",
        statRoute: "Uw route",
        statChoose: "Kies vertrek en bestemming om de afstand te zien",
        statLocalDesc: "Van de aankomsthal tot aan uw hoteldeur",
        statPerVehicle: "vaste prijs per voertuig",
      },
      s3: {
        title: "Hoeveel [reizigers bent u?]",
        subtitle: "We selecteren een voertuig waarin alle passagiers en bagage ruim passen.",
        fewerPax: "Eén reiziger minder",
        morePax: "Eén reiziger meer",
        continueBtn: "Doorgaan",
      },
      s4: {
        title: "Welk comfortniveau [wenst u?]",
        subtitle: (pax, className) => `${pax} ${pax > 1 ? "reizigers" : "reiziger"} · ${className}. Brandstof, tol en airconditioning zijn altijd inbegrepen.`,
      },
      s5: {
        title: "Wanneer bent u van plan te [reizen?]",
        subtitle: "Geen betaling, geen verplichting. Dit helpt uw chauffeur enkel bij de planning.",
      },
    },
    loading: {
      matchingDriver: "Chauffeur wordt toegewezen",
      routeChecked: "Route gecontroleerd",
      vehicleMatched: (car) => `${car} geselecteerd`,
      priceLocked: "Vaste prijs vergrendeld",
      done: "Klaar",
      roadDesc: "reisafstand met dezelfde chauffeur",
      doorToDoorDesc: "deur-tot-deur tegen vaste prijs",
    },
    result: {
      title: "Uw chauffeur staat [klaar]",
      yourFixedPrice: "Uw gegarandeerde vaste prijs",
      madSub: (mad, comfort, cname, car) => `≈ ${mad} MAD per voertuig · ${comfort} ${cname.toLowerCase()}, ${car}`,
      trip: "Rit",
      distance: "Afstand",
      travellers: "Reizigers",
      when: "Wanneer",
      badgeDeposit: "0% aanbetaling onder €300",
      badgeCancel: "Gratis annuleren tot 48u",
      badgeIncluded: "Tol & brandstof inbegrepen",
      onlineStatus: "Online · reactie binnen enkele minuten",
      msgAlreadyWritten: "Uw WhatsApp-bericht staat al klaar",
      preferEmail: "Liever per e-mail?",
      getQuoteInbox: "Ontvang deze prijsopgave in uw inbox",
      yourName: "Uw naam",
      namePlaceholder: "bijv. Daan de Jong",
      email: "E-mailadres",
      emailPlaceholder: "u@voorbeeld.nl",
      consentText: "Ja, stuur mij reistips en aanbiedingen van Private Morocco Transfers. Uitschrijven kan op elk moment.",
      emailBtn: "Stuur mij deze prijsopgave",
      emailSending: "Verzenden…",
      thanksMsg: (name, email) => `Bedankt${name ? ", " + name : ""}! Uw offerte is onderweg naar ${email}.`,
      consentConfirmed: " U bent ook aangemeld voor onze reistips voor Marokko.",
      emailErrorInvalid: "Vul een geldig e-mailadres in, bijv. naam@voorbeeld.nl.",
      emailErrorGeneric: "Aanvraag kon niet worden opgeslagen. Probeer het opnieuw of stuur uw rit via WhatsApp.",
      or: "of",
      waBtn: "Verstuur mijn rit via WhatsApp",
      finePrint: "Schatting op basis van onze officiële tarieven. Uw chauffeur bevestigt de exacte vaste prijs op WhatsApp.",
      startAgain: "Opnieuw beginnen",
    },
    waMsg: ({ typeName, route, pax, comfort, car, when, price }) =>
      `Hallo Private Morocco Transfers! 👋\nIk wil graag een vaste prijs bevestigen voor:\n• ${typeName}: ${route}\n• Reizigers: ${pax}\n• Voertuig: ${comfort} (${car})\n• Wanneer: ${when}\nReisplanner schatting: vanaf €${price}\nIs er een chauffeur beschikbaar?`,
    back: "← Terug",
    edit: "← Wijzigen",
    routeInfoTexts: {
      pickup: "Ophaallocatie",
      byPrivateCar: "per privé auto",
      arrivalsToHotel: "Van de aankomsthal naar uw hotel",
      meetAndGreet: "Persoonlijke ontvangst",
      doorToDoor: "deur tot deur",
      pickupRiad: "Ophalen bij uw riad",
      tourStarts: "Start van de rondreis",
      sameDriverThroughout: "Dezelfde chauffeur tijdens de gehele reis",
    },
    projTexts: {
      subTrip: "Vaste prijs · dezelfde chauffeur · brandstof & tol inbegrepen",
      fromFixed: (price) => `Vanaf €${price} vast`,
    },
  },
};
