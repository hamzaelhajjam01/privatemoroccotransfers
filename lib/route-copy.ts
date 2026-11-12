import type { LanguageCode } from "./i18n";

export type RouteDirection = "airport_arrival" | "airport_departure" | "port_transfer" | "intercity";

export type DirectionalCopy = {
  direction: RouteDirection;
  sectionLabel: string;
  heading: string;
  introParagraph: string;
  logisticsBullets: string[];
  faqs: Array<{ q: string; a: string }>;
};

export function detectRouteDirection(fromEn: string, toEn: string): RouteDirection {
  const f = fromEn.toLowerCase();
  const t = toEn.toLowerCase();
  if (f.includes("airport")) return "airport_arrival";
  if (t.includes("airport")) return "airport_departure";
  if (f.includes("port") || t.includes("port")) return "port_transfer";
  return "intercity";
}

type Params = {
  lang: LanguageCode;
  fromLocal: string;
  toLocal: string;
  fromEn: string;
  toEn: string;
  distance: string;
  duration: string;
  highway?: string;
  priceSedan: number;
};

/**
 * Generates direction-aware, localized logistics prose and FAQs so inbound airport pickups,
 * outbound airport drops, port transfers, and reverse intercity corridors stay unique and helpful.
 */
export function buildDirectionalRouteCopy(p: Params): DirectionalCopy {
  const dir = detectRouteDirection(p.fromEn, p.toEn);
  const road = p.highway || "Morocco National Expressway";

  if (p.lang === "fr") {
    if (dir === "airport_arrival") {
      return {
        direction: dir,
        sectionLabel: "Protocole Arrivée Aéroport",
        heading: `Votre prise en charge à ${p.fromLocal} vers ${p.toLocal}`,
        introParagraph: `À votre atterrissage à ${p.fromLocal}, notre équipe suit l'horaire réel de votre vol avant même votre sortie des contrôles douaniers. Votre chauffeur vous accueille personnellement dans le hall des arrivées avec une pancarte à votre nom, prend en charge vos bagages et vous conduit directement vers ${p.toLocal} via ${road} (${p.distance}, environ ${p.duration}).`,
        logisticsBullets: [
          `Suivi GPS des vols en direct à ${p.fromLocal} avec 45 min d'attente offerte après l'atterrissage.`,
          `Accueil nominatif dès la sortie bagages sans aucun supplément en cas de retard aérien.`,
          `Dépose devant votre hôtel, villa ou point d'accès riad le plus proche à ${p.toLocal} avec porteur au besoin.`,
          `Trajet direct de ${p.distance} en véhicule climatisé tout compris à €${p.priceSedan} par berline.`,
        ],
        faqs: [
          {
            q: `Où retrouver mon chauffeur à l'arrivée à ${p.fromLocal} ?`,
            a: `Après avoir récupéré vos valises et passé la douane à ${p.fromLocal}, vous retrouverez votre chauffeur directement dans le hall public des arrivées tenant une pancarte affichant votre nom complet.`,
          },
          {
            q: `Est-ce que vous attendez si mon vol vers ${p.fromLocal} a du retard ?`,
            a: `Oui. Vous nous transmettez votre numéro de vol lors de la confirmation WhatsApp : nous ajustons l'heure de prise en charge en temps réel avec 45 minutes gratuites après l'atterrissage effectif.`,
          },
        ],
      };
    }
    if (dir === "airport_departure") {
      return {
        direction: dir,
        sectionLabel: "Protocole Départ Vol",
        heading: `Départ de ${p.fromLocal} vers ${p.toLocal} à l'heure`,
        introParagraph: `Pour votre vol au départ de ${p.toLocal}, votre chauffeur privé se présente directement devant votre hôtel ou à la porte accessible de votre riad à ${p.fromLocal} 10 minutes avant l'horaire fixé. Nous recommandons un départ environ 3 heures avant le décollage (en ajoutant les ${p.duration} de route sur ${p.distance} via ${road}) pour enregistrer vos bagages sereinement au terminal.`,
        logisticsBullets: [
          `Prise en charge ponctuelle à votre hébergement ou porte de médina à ${p.fromLocal}.`,
          `Dépose directe devant les portes du hall Départs de ${p.toLocal} avec aide au déchargement.`,
          `Calcul de marge trafic intégré sur les ${p.distance} d'itinéraire pour garantir votre embarquement.`,
          `Tarif fixe ferme de €${p.priceSedan} par véhicule, payable en espèces au terminal d'arrivée.`,
        ],
        faqs: [
          {
            q: `À quelle heure partir de ${p.fromLocal} pour prendre mon vol à ${p.toLocal} ?`,
            a: `Pour un vol international depuis ${p.toLocal}, comptez environ ${p.duration} de trajet privé auxquels s'ajoutent 2h30 à 3h d'enregistrement et contrôles aéroportuaires.`,
          },
          {
            q: `Le chauffeur vient-il me chercher directement à mon riad à ${p.fromLocal} ?`,
            a: `Oui. Si votre riad se situe dans une ruelle piétonne de la médina, nous coordonnons la rencontre au point véhicule le plus proche avec assistance bagages.`,
          },
        ],
      };
    }
    if (dir === "port_transfer") {
      return {
        direction: dir,
        sectionLabel: "Correspondance Maritime",
        heading: `Liaison privée entre ${p.fromLocal} et ${p.toLocal}`,
        introParagraph: `Évitez l'attente des taxis au terminal ferry ou dans la ville : ce transfert direct relie ${p.fromLocal} à ${p.toLocal} sur ${p.distance} (${p.duration} environ) à tarif fixe contractuel, avec suivi des horaires de traversée maritime.`,
        logisticsBullets: [
          `Suivi des horaires d'arrivée ou d'embarquement ferry entre ${p.fromLocal} et ${p.toLocal}.`,
          `Véhicule spacieux adapté aux bagages volumineux, équipements et voyages en famille.`,
        ],
        faqs: [
          {
            q: `Comment se passe la prise en charge en cas de retard du ferry ?`,
            a: `Transmettez-nous le nom de votre compagnie maritime sur WhatsApp ; votre chauffeur adapte sa venue à l'accostage réel du navire.`,
          },
        ],
      };
    }
    return {
      direction: dir,
      sectionLabel: "Itinéraire Intervilles",
      heading: `Voyagez de ${p.fromLocal} jusqu'à ${p.toLocal} sans escale`,
      introParagraph: `Relier ${p.fromLocal} à ${p.toLocal} en chauffeur privé vous évite les correspondances ferroviaires, gares routières et changements de taxi. Parcours fluide de ${p.distance} en environ ${p.duration} via ${road}, ponctué d'arrêts libres pour photos ou pause déjeuner selon votre rythme.`,
      logisticsBullets: [
        `Départ flexible à l'heure exacte de votre choix depuis votre adresse à ${p.fromLocal}.`,
        `Conduite apaisée sur ${p.distance} via ${road} jusqu'à votre destination finale à ${p.toLocal}.`,
        `Arrêts panoramiques ou pause café inclus sans majoration de compteur.`,
        `Forfait unique par berline (€${p.priceSedan}) couvrant carburant, péages et climatisation.`,
      ],
      faqs: [
        {
          q: `Puis-je choisir l'heure de départ de ${p.fromLocal} vers ${p.toLocal} ?`,
          a: `Entièrement. Contrairement aux autocars CTM/Supratours à horaires imposés, vous partez à la minute souhaitée de ${p.fromLocal} et pouvez inclure des haltes sur la route vers ${p.toLocal}.`,
        },
        {
          q: `Les péages sur ${road} sont-ils déjà compris dans les €${p.priceSedan} ?`,
          a: `Oui, tous les péages autoroutiers, le carburant et le temps de conduite entre ${p.fromLocal} et ${p.toLocal} sont intégralement compris.`,
        },
      ],
    };
  }

  if (p.lang === "es" || p.lang === "it" || p.lang === "de" || p.lang === "ar" || p.lang === "pt" || p.lang === "nl") {
    const MAP: Record<string, { label: Record<RouteDirection, string>; heading: Record<RouteDirection, string>; body: Record<RouteDirection, string> }> = {
      es: {
        label: { airport_arrival: "Llegada al Aeropuerto", airport_departure: "Traslado al Aeropuerto", port_transfer: "Conexión Portuaria", intercity: "Ruta Privada Directa" },
        heading: {
          airport_arrival: `Recogida en ${p.fromLocal} hacia ${p.toLocal}`,
          airport_departure: `Salida puntual de ${p.fromLocal} a ${p.toLocal}`,
          port_transfer: `Conexión directa ${p.fromLocal} → ${p.toLocal}`,
          intercity: `Viaje privado de ${p.fromLocal} a ${p.toLocal}`,
        },
        body: {
          airport_arrival: `Al aterrizar en ${p.fromLocal}, monitorizamos su vuelo en tiempo real. Su chófer le espera en la sala de llegadas con un cartel a su nombre, ayuda con el equipaje y le lleva puerta a puerta hasta ${p.toLocal} (${p.distance}, ~${p.duration} por ${road}).`,
          airport_departure: `Para su vuelo en ${p.toLocal}, recogemos puntualmente en su hotel o riad en ${p.fromLocal} con margen suficiente para el check-in. Recorrido de ${p.distance} en ~${p.duration} con entrega directa frente a la terminal de salidas por €${p.priceSedan}.`,
          port_transfer: `Traslado coordinado con su horario de ferry entre ${p.fromLocal} y ${p.toLocal} (${p.distance}, ~${p.duration}). Precio cerrado por vehículo sin colas de taxi.`,
          intercity: `Conexión privada sin transbordos desde ${p.fromLocal} hasta ${p.toLocal} (${p.distance}, ~${p.duration}) por ${road}. Horario flexible con paradas panorámicas gratuitas.`,
        },
      },
      it: {
        label: { airport_arrival: "Arrivo in Aeroporto", airport_departure: "Partenza per l'Aeroporto", port_transfer: "Transfer Porto", intercity: "Tratta Diretta Interurbana" },
        heading: {
          airport_arrival: `Accoglienza a ${p.fromLocal} verso ${p.toLocal}`,
          airport_departure: `Partenza da ${p.fromLocal} per ${p.toLocal}`,
          port_transfer: `Collegamento ${p.fromLocal} → ${p.toLocal}`,
          intercity: `Viaggio privato da ${p.fromLocal} a ${p.toLocal}`,
        },
        body: {
          airport_arrival: `All'atterraggio a ${p.fromLocal}, monitoriamo il volo in tempo reale. L'autista vi accoglie con cartello agli arrivi e vi accompagna fino al vostro hotel o riad a ${p.toLocal} (${p.distance}, ~${p.duration} lungo ${road}).`,
          airport_departure: `Per il vostro volo da ${p.toLocal}, ritiro puntuale presso il vostro alloggio a ${p.fromLocal} e arrivo diretto davanti alle Partenze (${p.distance}, ~${p.duration}) alla tariffa fissa di €${p.priceSedan}.`,
          port_transfer: `Collegamento privato coordinato con gli orari dei traghetti tra ${p.fromLocal} e ${p.toLocal} (${p.distance}, ~${p.duration}).`,
          intercity: `Trasferimento porta a porta da ${p.fromLocal} a ${p.toLocal} su ${p.distance} (~${p.duration}) via ${road} con soste fotografiche libere.`,
        },
      },
      de: {
        label: { airport_arrival: "Flughafen-Ankunft", airport_departure: "Abflug-Transfer", port_transfer: "Fährhafen-Transfer", intercity: "Direkte Fernstrecke" },
        heading: {
          airport_arrival: `Abholung am ${p.fromLocal} nach ${p.toLocal}`,
          airport_departure: `Pünktliche Fahrt von ${p.fromLocal} zum ${p.toLocal}`,
          port_transfer: `Hafentransfer ${p.fromLocal} → ${p.toLocal}`,
          intercity: `Privatfahrt von ${p.fromLocal} nach ${p.toLocal}`,
        },
        body: {
          airport_arrival: `Bei Ihrer Landung am ${p.fromLocal} verfolgen wir Ihren Flug live. Ihr Chauffeur empfängt Sie mit Namensschild in der Ankunftshalle und bringt Sie direkt nach ${p.toLocal} (${p.distance}, ca. ${p.duration} über ${road}).`,
          airport_departure: `Für Ihren Rückflug ab ${p.toLocal} holt Sie Ihr Fahrer pünktlich am Riad oder Hotel in ${p.fromLocal} ab und setzt Sie nach ca. ${p.duration} (${p.distance}) direkt am Abflugterminal ab (€${p.priceSedan}).`,
          port_transfer: `Abgestimmt auf Ihre Fährankunft zwischen ${p.fromLocal} und ${p.toLocal} (${p.distance}, ca. ${p.duration}).`,
          intercity: `Entspannte Tür-zu-Tür Fahrt von ${p.fromLocal} nach ${p.toLocal} über ${p.distance} (ca. ${p.duration}, ${road}) mit freien Fotostopps.`,
        },
      },
      ar: {
        label: { airport_arrival: "بروتوكول استقبال المطار", airport_departure: "التوصيل إلى صالة المغادرة", port_transfer: "توصيل الميناء", intercity: "رحلة خاصة مباشرة بين المدن" },
        heading: {
          airport_arrival: `الاستقبال من ${p.fromLocal} والتوصيل إلى ${p.toLocal}`,
          airport_departure: `الانطلاق في الموعد من ${p.fromLocal} إلى ${p.toLocal}`,
          port_transfer: `توصيل مباشر من ${p.fromLocal} إلى ${p.toLocal}`,
          intercity: `تنقل خاص ومريح من ${p.fromLocal} إلى ${p.toLocal}`,
        },
        body: {
          airport_arrival: `عند وصول رحلتكم إلى ${p.fromLocal}، نتابع موعد الهبوط لحظة بلحظة. يستقبلكم السائق بلافتة تحمل اسمكم بصالة الوصول ويساعدكم في حمل الحقائب وصولاً إلى فندقكم أو رياضكم في ${p.toLocal} (${p.distance}، حوالي ${p.duration}).`,
          airport_departure: `لرحلة مغادرتكم من ${p.toLocal}، يلتقي بكم السائق أمام فندقكم في ${p.fromLocal} قبل موعد الرحلة بوقت كافٍ لتفادي أي تأخير (${p.distance}، قرابة ${p.duration}) بسعر ثابت €${p.priceSedan}.`,
          port_transfer: `خدمة تنقل دقيقة متزامنة مع مواعيد العبارات البحرية بين ${p.fromLocal} و${p.toLocal} لمسافة ${p.distance}.`,
          intercity: `سفر مباشر ومريح من الباب إلى الباب بين ${p.fromLocal} و${p.toLocal} (${p.distance}، قرابة ${p.duration}) مع مرونة تامة في وقت الانطلاق ووقفات الاستراحة.`,
        },
      },
      pt: {
        label: { airport_arrival: "Chegada ao Aeroporto", airport_departure: "Partida para o Aeroporto", port_transfer: "Transfer Porto", intercity: "Rota Direta Interurbana" },
        heading: {
          airport_arrival: `Recolha em ${p.fromLocal} até ${p.toLocal}`,
          airport_departure: `Partida pontual de ${p.fromLocal} para ${p.toLocal}`,
          port_transfer: `Ligação privada ${p.fromLocal} → ${p.toLocal}`,
          intercity: `Viagem privada de ${p.fromLocal} para ${p.toLocal}`,
        },
        body: {
          airport_arrival: `Ao aterrar em ${p.fromLocal}, acompanhamos o seu voo em tempo real. O motorista espera na zona de chegadas com placa nominativa e leva-o diretamente até ${p.toLocal} (${p.distance}, ~${p.duration} pela ${road}).`,
          airport_departure: `Para o seu voo a partir de ${p.toLocal}, recolhemos à hora marcada no seu alojamento em ${p.fromLocal} com chegada direta às Partidas (${p.distance}, ~${p.duration}) por €${p.priceSedan}.`,
          port_transfer: `Transfer coordenado com horários de ferry entre ${p.fromLocal} e ${p.toLocal} (${p.distance}, ~${p.duration}).`,
          intercity: `Ligação direta porta a porta de ${p.fromLocal} até ${p.toLocal} (${p.distance}, ~${p.duration}) com paragens panorâmicas gratuitas.`,
        },
      },
      nl: {
        label: { airport_arrival: "Aankomst Luchthaven", airport_departure: "Vertrek naar Luchthaven", port_transfer: "Haventransfer", intercity: "Rechtstreekse Route" },
        heading: {
          airport_arrival: `Ophalen bij ${p.fromLocal} naar ${p.toLocal}`,
          airport_departure: `Op tijd van ${p.fromLocal} naar ${p.toLocal}`,
          port_transfer: `Privétransfer ${p.fromLocal} → ${p.toLocal}`,
          intercity: `Rechtstreekse privérit ${p.fromLocal} naar ${p.toLocal}`,
        },
        body: {
          airport_arrival: `Na uw landing op ${p.fromLocal} volgen wij uw vlucht live. Uw chauffeur wacht u op in de aankomsthal met een naambordje en rijdt u rechtstreeks naar ${p.toLocal} (${p.distance}, ca. ${p.duration} via ${road}).`,
          airport_departure: `Voor uw vlucht vanaf ${p.toLocal} haalt uw chauffeur u stipt op bij uw accommodatie in ${p.fromLocal} en zet u direct af bij Vertrek (${p.distance}, ca. ${p.duration}) voor vast €${p.priceSedan}.`,
          port_transfer: `Gecoördineerd met uw veerboot aankomst of vertrek tussen ${p.fromLocal} en ${p.toLocal} (${p.distance}, ca. ${p.duration}).`,
          intercity: `Directe deur-tot-deur rit van ${p.fromLocal} naar ${p.toLocal} (${p.distance}, ca. ${p.duration} via ${road}) met vrije fotostops onderweg.`,
        },
      },
    };
    const m = MAP[p.lang];
    return {
      direction: dir,
      sectionLabel: m.label[dir],
      heading: m.heading[dir],
      introParagraph: m.body[dir],
      logisticsBullets: [],
      faqs: [],
    };
  }

  // English directional variants
  if (dir === "airport_arrival") {
    return {
      direction: dir,
      sectionLabel: "Airport Arrivals Protocol",
      heading: `Landing at ${p.fromLocal} → Direct Drop-Off in ${p.toLocal}`,
      introParagraph: `When touching down at ${p.fromLocal}, your chauffeur monitors your live flight status from touchdown through baggage claim. We greet you inside the Arrivals Hall with a printed nameboard, load your luggage, and drive ${p.distance} (~${p.duration}) via ${road} straight to your hotel, villa, or nearest accessible riad gate in ${p.toLocal}.`,
      logisticsBullets: [
        `Real-time flight tracking at ${p.fromLocal} plus 45 minutes complimentary terminal waiting after landing.`,
        `Named meet-and-greet inside arrivals — no extra surge fees if passport control or baggage takes longer.`,
        `Direct door-to-door drop-off in ${p.toLocal}, with riad porter coordination if staying inside pedestrian alleys.`,
        `Guaranteed fixed rate of €${p.priceSedan} per sedan covering highway tolls, fuel, and luggage assistance.`,
      ],
      faqs: [
        {
          q: `Where exactly do I meet my driver after landing at ${p.fromLocal}?`,
          a: `Once you exit customs with your bags at ${p.fromLocal}, your driver waits right inside the arrivals concourse holding a visible nameboard with your full name.`,
        },
        {
          q: `What if my inbound flight to ${p.fromLocal} is delayed?`,
          a: `Our dispatch monitors live flight telemetry using your flight number. Your pickup shifts automatically at zero extra cost, and 45 minutes of landing buffer wait time is always included.`,
        },
      ],
    };
  }

  if (dir === "airport_departure") {
    return {
      direction: dir,
      sectionLabel: "Departure Airport Protocol",
      heading: `On-Time Departure from ${p.fromLocal} to ${p.toLocal}`,
      introParagraph: `Flying out of ${p.toLocal}? Your chauffeur arrives at your accommodation or riad access gate in ${p.fromLocal} 10 minutes ahead of your requested departure. Allow roughly ${p.duration} for the ${p.distance} drive along ${road} plus international check-in buffer (~3 hours prior to takeoff) so you step onto the ${p.toLocal} departures curb relaxed and on time.`,
      logisticsBullets: [
        `Punctual doorstep pickup anywhere in ${p.fromLocal}, including coordinated Medina gate pickups.`,
        `Buffer timing planned across ${p.distance} (~${p.duration}) so you clear baggage drop and security calmly at ${p.toLocal}.`,
        `Direct curb drop-off right outside your airline's Departures entrance with full luggage unloading.`,
        `Flat €${p.priceSedan} per vehicle rate — pay cash in EUR or MAD on arrival at ${p.toLocal}.`,
      ],
      faqs: [
        {
          q: `What time should I leave ${p.fromLocal} for my flight at ${p.toLocal}?`,
          a: `We recommend scheduling your ${p.fromLocal} pickup around ${p.duration} drive time plus 2.5–3 hours before international departures at ${p.toLocal} (or 2 hours for domestic flights).`,
        },
        {
          q: `Can the driver collect me directly at my riad in ${p.fromLocal}?`,
          a: `Yes. If your riad sits inside a car-free Medina lane, our driver meets you at the nearest drivable gate and arranges luggage handoff so you don't carry bags far.`,
        },
      ],
    };
  }

  if (dir === "port_transfer") {
    return {
      direction: dir,
      sectionLabel: "Ferry & Port Connection",
      heading: `Seamless Port Transfer: ${p.fromLocal} to ${p.toLocal}`,
      introParagraph: `Skip disorganized port taxi queues between ${p.fromLocal} and ${p.toLocal}. Covering ${p.distance} in approximately ${p.duration} via ${road}, our private transfer tracks ferry docking times and carries all passenger luggage comfortably in an A/C sedan, van, or minibus.`,
      logisticsBullets: [
        `Coordinated pickup timing with Mediterranean ferry schedules between ${p.fromLocal} and ${p.toLocal}.`,
        `Fixed all-inclusive €${p.priceSedan} per car price — zero port surcharges or luggage fees.`,
      ],
      faqs: [
        {
          q: `Does the driver adjust if our ferry into ${p.fromLocal} arrives late?`,
          a: `Yes, share your ferry operator and sailing time via WhatsApp so our dispatcher aligns your pickup with actual vessel arrival.`,
        },
      ],
    };
  }

  return {
    direction: dir,
    sectionLabel: "Direct Intercity Corridor",
    heading: `Travel Door-to-Door from ${p.fromLocal} to ${p.toLocal}`,
    introParagraph: `Avoid station transfers and rigid bus timetables when travelling between ${p.fromLocal} and ${p.toLocal}. This private ${p.distance} (~${p.duration}) journey travels smoothly along ${road}, letting you choose your exact pickup hour from your hotel or riad in ${p.fromLocal} with optional coffee or viewpoint breaks en route to ${p.toLocal}.`,
    logisticsBullets: [
      `Depart at any time of day or night directly from your accommodation in ${p.fromLocal}.`,
      `Smooth ${p.distance} private drive along ${road} (~${p.duration}) straight to your drop-off in ${p.toLocal}.`,
      `Complimentary scenic viewpoints and clean motorway rest stops along the way.`,
      `Single guaranteed rate of €${p.priceSedan} per car covering fuel, highway tolls, and A/C vehicle.`,
    ],
    faqs: [
      {
        q: `Can we stop for lunch or photos between ${p.fromLocal} and ${p.toLocal}?`,
        a: `Yes! Unlike scheduled buses or shared taxis, you control the pace and can request quick photo stops or café breaks along ${road} at no extra charge.`,
      },
      {
        q: `Are highway tolls along ${road} included in €${p.priceSedan}?`,
        a: `Every highway toll ticket, fuel cost, and commercial passenger insurance between ${p.fromLocal} and ${p.toLocal} is included upfront.`,
      },
    ],
  };
}
