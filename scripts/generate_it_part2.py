# -*- coding: utf-8 -*-
import json
import os

routes_part2 = {
  "fes-to-marrakech": {
    "h1": "Transfer Privato da Fès a Marrakech con Autista Dedicato",
    "heroSub": "Viaggio di rientro diretto o circuito panoramico da Fès a Marrakech (530 km, 6h30). Attraversate il Medio Atlante, la foresta di Azrou e i frutteti di Béni Mellal a bordo di un veicolo privato climatizzato e confortevole.",
    "routeOverviewTitle": "Il Vostro Viaggio Panoramico da Fès a Marrakech in Veicolo Privato",
    "routeOverview": [
      "Effettuare il viaggio da Fès a Marrakech con un autista privato professionista vi permette di collegare la capitale spirituale del Regno alla città ocra nelle migliori condizioni di sicurezza, tranquillità e comfort. Lungo questo itinerario di circa 530 chilometri, vi lascerete alle spalle le dolci colline di uliveti del Saïss per risalire verso gli altipiani boscosi del Medio Atlante prima di ridiscendere verso le ampie pianure assolate dell'Haouz.",
      "La partenza avviene direttamente presso la vostra struttura a Fès. Se soggiornate nel cuore della medina pedonale di Fès el-Bali o di Fès el-Jdid, il vostro autista vi attenderà puntuale al punto carrabile concordato (Piazza Boujloud, Bab Ziat, Bab Rcif o presso la reception del vostro hotel nella Ville Nouvelle). Vi assisterà con cura nel carico dei bagagli e si assicurerà che vi sentiate perfettamente a vostro agio prima di immettersi sulla strada principale.",
      "Chilometro dopo chilometro, il paesaggio rivela una varietà morfologica straordinaria. Attraverserete la graziosa stazione climatica montana di Ifrane, scoprirete i maestosi cedri secolari del Parco Nazionale dove vivono in libertà i macachi berberi (scimmie bertucce), per poi scendere verso Khénifra e la fertile pianura agricola del Tadla. Il vostro autista privato, profondo conoscitore delle strade del Marocco, guiderà con andatura fluida e rilassata per assicurarvi una traversata piacevole.",
      "Questo servizio su misura al 100% trasforma un lungo trasferimento stradale in un'autentica giornata di scoperta turistica. Sarete voi a scegliere quando effettuare soste fotografiche, concedervi una pausa caffè o fermarvi per un pranzo tipico a base di specialità locali. Al vostro arrivo a Marrakech nel tardo pomeriggio, verrete accompagnati direttamente all'ingresso del vostro hotel o al varco più prossimo al vostro riad, senza lo stress di dover cercare un taxi locale.",
      "Ogni passeggero beneficia di ampio spazio per le gambe, bottiglie d'acqua minerale fresca sempre a disposizione a bordo e aria condizionata regolabile, per un viaggio riposante, elegante e sereno dal primo all'ultimo chilometro."
    ],
    "highlightsTitle": "Punti di Forza del Viaggio Fès - Marrakech",
    "highlights": [
      "Prelievo direttamente al vostro riad a Fès con coordinamento bagagli alle porte monumentali della medina.",
      "Attraversamento panoramico della grandiosa foresta di cedri di Azrou con le scimmie bertucce dell'Atlante.",
      "Sosta consigliata nella cittadina montana di Ifrane e ammirazione della sua architettura alpina.",
      "Veicoli recenti e di livello superiore dotati di potente climatizzazione e bagagliai molto capienti.",
      "Orari di partenza su misura e libertà assoluta per pause ristoro, spuntini e scatti fotografici.",
      "Tariffa forfettaria chiara e trasparente per veicolo, con carburante, pedaggi e autista compresi."
    ],
    "whatToSeeTitle": "Le Tappe Imperdibili da Fès a Marrakech",
    "whatToSeeIntro": "L'itinerario da Fès a Marrakech offre una preziosa collezione di soste scenografiche nel cuore del patrimonio naturale e rurale marocchino.",
    "whatToSeeItems": [
      {
        "title": "Ifrane e le Foreste del Medio Atlante",
        "description": "Poco dopo aver lasciato Fès, la strada sale verso questa città d'alta quota celebre per il suo impianto urbanistico curato, i parchi fioriti e i tetti a spiovente in tegole rosse che ricordano i villaggi delle Alpi."
      },
      {
        "title": "La Riserva dei Macachi d'Azrou",
        "description": "Tra i cedri maestosi del parco montano, una sosta permette di osservare da vicino le scimmie bertucce selvatiche che popolano in branchi questo habitat naturale protetto."
      },
      {
        "title": "I Terrazzamenti Agricoli di Khénifra e Zaouiat Cheikh",
        "description": "Costeggiando i contrafforti montuosi dell'Atlante, la carreggiata domina valli irrigue lussureggianti dove prosperano alberi di melograno, aranceti profumati e uliveti secolari."
      },
      {
        "title": "La Piana dell'Haouz e l'Avvicinamento a Marrakech",
        "description": "L'orizzonte si apre sulle distese di terra ocra e sulle prime palme da dattero dell'oasi di Marrakech, con la spettacolare corona delle vette dell'Alto Atlante sullo sfondo."
      }
    ],
    "faqsTitle": "Domande Frequenti sul Viaggio Fès - Marrakech",
    "faqs": [
      {
        "q": "Quanto costa il transfer privato da Fès a Marrakech?",
        "a": "La tariffa forfettaria è di {price_sedan} ({price_sedan_mad}) per una berlina comfort da 1 a 4 passeggeri, di {price_van} ({price_van_mad}) per un grande van Mercedes-Benz Vito da 5 a 7 passeggeri e di {price_minibus} ({price_minibus_mad}) per un minibus privato da 8 a 14 posti. Il prezzo è fisso per veicolo e include autista, carburante, pedaggi e tutte le soste concordate."
      },
      {
        "q": "Quanto tempo occorre per completare il viaggio?",
        "a": "Il tempo di guida effettivo è di circa 6 ore e mezza. Considerando una piacevole sosta per il pranzo a metà strada e un paio di pause per un caffè e per scattare fotografie, la durata totale del viaggio si attesta solitamente tra le 7 ore e mezza e le 8 ore."
      },
      {
        "q": "A che ora è preferibile partire da Fès?",
        "a": "Suggeriamo di pianificare la partenza tra le 07:30 e le 08:30 del mattino. Questo vi permetterà di viaggiare con la migliore illuminazione naturale, godervi la sosta tra i cedri di Azrou e raggiungere Marrakech comodamente prima di cena."
      },
      {
        "q": "Dove ci fermeremo per la pausa pranzo?",
        "a": "Il vostro autista potrà consigliarvi ristoranti tradizionali selezionati, puliti e accoglienti a Béni Mellal o Khénifra, dove potrete gustare ottimi piatti tipici della cucina berbera in un contesto rilassante."
      },
      {
        "q": "L'autista può venire a prenderci direttamente all'interno della medina?",
        "a": "Poiché le stradine storiche della medina di Fès sono precluse al traffico veicolare, l'autista vi darà appuntamento al varco o al piazzale carrabile più vicino (Bab Bou Jeloud, Bab Rcif, Bab Ziat) e coordinerà con il vostro alloggio l'intervento di un facchino per il trasporto dei bagagli."
      },
      {
        "q": "I veicoli sono dotati di aria condizionata adeguata per le giornate calde?",
        "a": "Certamente. Tutti i nostri mezzi sono moderni, sottoposti a rigidi controlli e dispongono di impianti di climatizzazione potenti e indipendenti per garantire un clima perfetto sia d'estate che d'inverno."
      },
      {
        "q": "Come viene gestito il pagamento di questo transfer?",
        "a": "Per importi inferiori a 300 € (3.300 MAD), la prenotazione è immediata senza alcun anticipo o carta di credito: salderete l'importo concordato direttamente con l'autista all'arrivo a Marrakech in contanti, in Euro o Dirham marocchini."
      },
      {
        "q": "È possibile richiedere seggiolini di sicurezza per bambini piccoli?",
        "a": "Sì, forniamo gratuitamente seggiolini auto e rialzi conformi alle normative europee. È sufficiente specificare l'età dei bambini al momento della prenotazione su WhatsApp per trovare tutto pronto a bordo."
      }
    ]
  },

  "marrakech-to-agadir": {
    "h1": "Transfer Privato da Marrakech ad Agadir e Taghazout Bay",
    "heroSub": "Viaggiate comodamente da Marrakech ad Agadir (240 km, 3h). Collegamento 100% su autostrada A7 attraverso l'Alto Atlante occidentale e il tunnel Zaouiat, con arrivo diretto al vostro hotel o resort costiero.",
    "routeOverviewTitle": "Il Vostro Collegamento Diretto Marrakech - Agadir sull'Autostrada A7",
    "routeOverview": [
      "Il tragitto che collega la città imperiale di Marrakech alle spiagge dorate di Agadir e alla celebre baia surfistica di Taghazout rappresenta una delle tratte turistiche più comode e veloci del Marocco. Coprendo circa 240 chilometri in appena 3 ore di viaggio, questa moderna direttrice a pedaggio consente di passare in un batter d'occhio dal calore dell'entroterra alle rinfrescanti brezze marine della costa atlantica meridionale.",
      "L'intero percorso si sviluppa lungo l'autostrada A7, un capolavoro di ingegneria civile inaugurato per scavalcare in totale sicurezza i massicci montuosi dell'Alto Atlante occidentale. A differenza della vecchia e tortuosa statale di montagna ricca di tornanti impegnativi e rallentamenti, l'autostrada offre carreggiate a doppia corsia per senso di marcia, viadotti panoramici e l'avveniristico tunnel di Zaouiat Ait Mellal, garantendo un'esperienza di guida fluida, riposante e sicura.",
      "Scegliere un transfer privato con autista dedicato significa evitare i sovraffollati autobus di linea o le estenuanti code alla stazione dei grand taxi di Marrakech. Il vostro autista privato vi preleva con la massima puntualità davanti alla porta del vostro hotel o riad a Marrakech all'orario esatto da voi stabilito, caricando con cura i vostri bagagli e facendovi accomodare a bordo di un veicolo recente, pulito e dotato di aria condizionata efficiente.",
      "Durante il viaggio lungo la A7 potrete concordare una breve sosta rilassante presso le grandi aree di servizio autostradali (provviste di bar, ristoranti e servizi igienici moderni) oppure ammirare dai finestrini la repentina transizione orografica, che dalle pianure dell'Haouz si inerpica tra rilievi rocciosi prima di digradare verso la fertile valle del Souss, patria degli arganieri.",
      "All'arrivo nella conurbazione di Agadir, il vostro autista vi accompagnerà con precisione alla vostra destinazione finale: che si tratti di un grande resort sul lungomare di Agadir, di un residence privato nella Marina o di un surf camp e hotel di charme a Taghazout Bay, riceverete un'assistenza completa per le valigie e le attrezzature sportive."
    ],
    "highlightsTitle": "Vantaggi del Nostro Transfer Diretto Marrakech - Agadir",
    "highlights": [
      "Collegamento rapido e diretto di 3 ore interamente su comoda autostrada a pedaggio A7.",
      "Prelievo porta a porta dal vostro alloggio a Marrakech con arrivo al vostro hotel ad Agadir o Taghazout.",
      "Superamento agevole e confortevole dell'Alto Atlante attraverso il moderno tunnel di Zaouiat.",
      "Trasporto gratuito di tavole da surf, bodyboard, sacche da golf e bagagli voluminosi nei nostri van.",
      "Veicoli moderni ed eleganti provvisti di potente climatizzazione e bottiglie d'acqua fresca incluse.",
      "Tariffa forfettaria bloccata per veicolo senza sorprese, con pedaggi e carburante interamente compresi."
    ],
    "whatToSeeTitle": "Cosa Vedere Lungo l'Autostrada dell'Alto Atlante verso la Costa",
    "whatToSeeIntro": "Il viaggio tra Marrakech e la costa del Souss regala vedute mozzafiato su un territorio montano e costiero di rara bellezza geologica.",
    "whatToSeeItems": [
      {
        "title": "La Traversata dell'Alto Atlante Occidentale",
        "description": "L'autostrada risale con pendenze dolci e ampie curve i rilievi dell'Atlante, offrendo prospettive spettacolari su gole rocciose rosse, villaggi d'argilla e valli solitarie."
      },
      {
        "title": "Il Tunnel di Zaouiat Ait Mellal",
        "description": "Con i suoi 560 metri di lunghezza, questo moderno tunnel autostradale attraversa la cresta spartiacque della montagna, segnando il passaggio climatico verso il versante oceanico."
      },
      {
        "title": "La Valle di Argana e la Piana del Souss",
        "description": "Scendendo verso sud, la vegetazione cambia accogliendo vaste foreste di piante di argan selvatiche e rigogliose piantagioni di agrumi e ortaggi che caratterizzano la piana del Souss."
      },
      {
        "title": "La Baia di Agadir e la Collina di Agadir Oufella",
        "description": "All'avvicinamento al litorale, si scorge l'imponente collina storica sormontata dall'antica Kasbah di Agadir Oufella, che domina l'azzurro intenso dell'oceano e l'arco della baia."
      }
    ],
    "faqsTitle": "Domande Frequenti sul Viaggio Marrakech - Agadir",
    "faqs": [
      {
        "q": "Quanto costa un transfer privato da Marrakech ad Agadir?",
        "a": "Il prezzo fisso per l'intero veicolo è di {price_sedan} ({price_sedan_mad}) per una berlina comfort (fino a 4 passeggeri), di {price_van} ({price_van_mad}) per un comodo van da 5 a 7 passeggeri e di {price_minibus} ({price_minibus_mad}) per un minibus privato da 8 a 14 posti. Tutti i pedaggi dell'autostrada A7 e il carburante sono inclusi al 100%."
      },
      {
        "q": "Quanto dura il tragitto in auto privata tra Marrakech e Agadir?",
        "a": "Il tempo medio di percorrenza è di circa 3 ore per una distanza di 240 chilometri. Se la vostra destinazione finale è Taghazout Bay, situata circa 20 km a nord di Agadir, il tempo complessivo di viaggio è di circa 3 ore e 20 minuti."
      },
      {
        "q": "Possiamo richiedere il transfer direttamente verso Taghazout o Tamraght?",
        "a": "Assolutamente sì. Effettuiamo trasferimenti diretti verso qualsiasi villaggio costiero, hotel, surf camp o residence di Taghazout, Taghazout Bay, Tamraght o Imsouane con un piccolo e chiaro adeguamento chilometrico."
      },
      {
        "q": "È possibile trasportare tavole da surf e bagagli ingombranti?",
        "a": "Sì, i nostri monovolume Mercedes Vito e i nostri minibus dispongono di un volume di carico eccellente per accogliere comodamente sacche da surf, custodie rigide per sacche da golf e valigie grandi senza alcun sovrapprezzo."
      },
      {
        "q": "L'autostrada tra Marrakech e Agadir è soggetta a curve strette o mal d'auto?",
        "a": "No, l'autostrada A7 è una via di scorrimento veloce moderna a due corsie per senso di marcia, con pendenze regolari e curve ampie. È infinitamente più scorrevole e confortevole rispetto alle vecchie strade statali e previene il mal d'auto."
      },
      {
        "q": "Possiamo fare una sosta caffè lungo il percorso?",
        "a": "Certamente. L'autostrada dispone di ottime stazioni di servizio moderne (come Afriquia o Total) dove potrete consumare una bevanda calda, uno snack fresco o usufruire dei servizi igienici in totale comodità."
      },
      {
        "q": "Come si prenota il viaggio e quando si effettua il pagamento?",
        "a": "La prenotazione si conferma in pochi secondi tramite WhatsApp indicando orario e luogo di partenza. Per importi sotto i 300 € non serve alcun anticipo: pagherete l'autista in contanti al vostro arrivo ad Agadir, in Euro o Dirham."
      },
      {
        "q": "Il servizio è disponibile anche per viaggi notturni o transfer all'alba?",
        "a": "Sì, i nostri autisti sono operativi 24 ore su 24, 7 giorni su 7. Potete scegliere l'orario di partenza che più si addice ai vostri programmi senza alcun aumento tariffario per orari notturni."
      }
    ]
  },

  "marrakech-to-merzouga": {
    "h1": "Transfer Privato da Marrakech a Merzouga e Dune dell'Erg Chebbi",
    "heroSub": "Spedizione privata d'eccezione da Marrakech alle grandi dune del Sahara a Merzouga (560 km, 8h30). Valico del Passo Tizi n'Tichka (2.260 m), Valle del Dadès, Gole del Todra e arrivo nei campi tendati di lusso.",
    "routeOverviewTitle": "La Grande Traversata Sahariana: Da Marrakech alle Dune di Merzouga",
    "routeOverview": [
      "Il tragitto che unisce Marrakech a Merzouga rappresenta la rotta sahariana più leggendaria ed evocativa del Marocco, coprendo circa 560 chilometri attraverso le maestose creste dell'Alto Atlante, la celebre 'Strada delle Mille Kasbah' e le sconfinate oasi presahariane. È il viaggio indimenticabile di una vita, capace di condurvi dalle atmosfere vivaci della città ocra fino al silenzio mistico delle grandiose dune dorate dell'Erg Chebbi, che si innalzano per oltre 150 metri alle porte del grande Sahara.",
      "Questa straordinaria spedizione può essere compiuta in un'unica giornata di viaggio (circa 8 ore e mezza - 9 ore di guida a bordo di un mezzo privato affidabile) oppure suddivisa in un circuito personalizzato di 2 o 3 giorni con pernottamenti intermedi nella Valle del Dadès, nelle imponenti Gole del Todra o nell'oasi millenaria di Skoura. A bordo di un veicolo spazioso, rialzato e perfettamente climatizzato, godrete di una marcia fluida e sicura lungo le curve panoramiche del Passo Tizi n'Tichka (a 2.260 metri di altitudine) e sui lunghi rettilinei del deserto roccioso.",
      "Nel corso del tragitto scoprirete l'incomparabile varietà paesaggistica del Sud marocchino: i ripidi versanti montani punteggiati da autentici villaggi berberi in pietra, i maestosi castelli fortificati in argilla cruda (ksour), i giardini fioriti della Valle delle Rose a Kelaat M'Gouna, le vertiginose pareti calcaree di Tinghir e le distese di acacie selvatiche che precedono i centri di Erfoud e Rissani, culla ancestrale della dinastia alawide.",
      "Il vostro autista privato si occuperà di condurvi con precisione fino al punto esatto di incontro con il vostro bivacco sahariano ai piedi delle dune: qui i vostri dromedari o una navetta 4x4 dedicata saranno pronti ad accogliervi per accompagnarvi alla vostra tenda berbera di lusso prima del tramonto sotto una volta celeste trapuntata di stelle.",
      "Affidandovi a un autista professionista esperto del Sud marocchino, beneficerete di una sicurezza impeccabile sulle strade di montagna, di preziosi consigli culturali sulle tradizioni berbere e della massima flessibilità per scattare fotografie uniche nei punti più spettacolari del tragitto."
    ],
    "highlightsTitle": "Punti di Forza della Vostra Spedizione Privata verso il Sahara",
    "highlights": [
      "Superamento panoramico del celebre Passo Tizi n'Tichka a 2.260 m di quota con soste fotografiche dedicate.",
      "Traversata della leggendaria Strada delle Mille Kasbah passando per Ouarzazate e la Valle delle Rose.",
      "Possibilità di sosta nelle maestose Gole del Todra con le loro vertiginose pareti rocciose di 300 metri.",
      "Veicolo privato spazioso, rialzato e climatizzato ideale per le lunghe distanze presahariane.",
      "Autista esperto e bilingue con profonda conoscenza dei costumi e delle rotte del grande Sud marocchino.",
      "Arrivo sincronizzato direttamente con il vostro campo tendato di lusso o auberge ai piedi delle dune."
    ],
    "whatToSeeTitle": "I Tesori del Sud Marocchino Lungo la Strada delle Mille Kasbah",
    "whatToSeeIntro": "Dalle vette dell'Atlante alle sabbie dorate, ogni sosta di questo itinerario rivela scenari geologici e capolavori architettonici di inestimabile valore.",
    "whatToSeeItems": [
      {
        "title": "Il Passo Tizi n'Tichka (2.260 metri di quota)",
        "description": "Il valico stradale più alto e spettacolare del Marocco, con tornanti mozzafiato e scorci vertiginosi sui remoti villaggi berberi abbarbicati ai fianchi della montagna."
      },
      {
        "title": "Ouarzazate e l'Oasi di Palme di Skoura",
        "description": "Rinomata capitale del cinema internazionale soprannominata la 'Porta del Deserto', Ouarzazate apre l'accesso alla lussureggiante oasi di Skoura e alle sue kasbah storiche in adobe come Amridil."
      },
      {
        "title": "La Valle delle Rose e le Gole del Todra",
        "description": "A Kelaat M'Gouna le coltivazioni di rosa damascena inebriano l'aria in primavera, prima che le impressionanti pareti verticali in calcare rosso delle Gole del Todra si ergono sopra il fiume."
      },
      {
        "title": "Erfoud, Rissani e le Grandi Dune dell'Erg Chebbi",
        "description": "Celebre per i laboratori di fossili marini e per i datteri pregiati Mejhool, la regione di Erfoud conduce all'Erg Chebbi, dove le dune maestose si accendono d'oro e porpora al calar del sole."
      }
    ],
    "faqsTitle": "Domande Frequenti sul Viaggio Marrakech - Merzouga",
    "faqs": [
      {
        "q": "Qual è il costo di un transfer privato da Marrakech a Merzouga?",
        "a": "La tariffa forfettaria diretta è di {price_sedan} ({price_sedan_mad}) per una berlina confortevole da 1 a 4 passeggeri, di {price_van} ({price_van_mad}) per un capiente van da 5 a 7 passeggeri e di {price_minibus} ({price_minibus_mad}) per un minibus privato da 8 a 14 posti. Tutti i costi di carburante, pedaggi e compenso dell'autista sono compresi."
      },
      {
        "q": "È consigliabile compiere il viaggio in una sola giornata o in più tappe?",
        "a": "Sebbene il tragitto diretto sia fattibile in circa 8 ore e mezza - 9 ore di guida effettiva, consigliamo caldamente di suddividerlo in un tour di 2 o 3 giorni con pernottamento a Skoura, nella Valle del Dadès o a Tinghir, per ammirare con calma le kasbah e i canyon senza affaticarsi."
      },
      {
        "q": "Come avviene l'incontro con il nostro campo tendato nel deserto?",
        "a": "Il vostro autista contatta direttamente i responsabili del vostro bivacco prima dell'arrivo. Vi accompagnerà fino all'auberge d'appoggio ai margini delle dune, dove troverete la carovana di dromedari o la navetta fuoristrada 4x4 pronta a trasportarvi alla vostra tenda."
      },
      {
        "q": "I veicoli utilizzati sono idonei per le lunghe distanze del deserto?",
        "a": "Assolutamente sì. Utilizziamo veicoli recenti, moderni, perfettamente revisionati e dotati di climatizzazione ad alta efficienza e sospensioni confortevoli, ideali per garantire una marcia comoda anche sulle lunghe tratte del Sud."
      },
      {
        "q": "Quali sono le modalità di prenotazione e caparra per questo lungo viaggio?",
        "a": "Poiché l'importo della tratta supera la soglia di 300 €, per confermare la prenotazione su WhatsApp è previsto un acconto di garanzia del 30%, mentre il saldo rimanente verrà versato comodamente in contanti all'autista durante il viaggio."
      },
      {
        "q": "Cosa dobbiamo mettere nel bagaglio a mano per la notte nel deserto?",
        "a": "Consigliamo di preparare un piccolo zaino con il necessario per la notte (occhiali da sole, una sciarpa per la sabbia, un maglione caldo per l'escursione termica notturna e un caricabatterie), lasciando le valigie pesanti custodite al sicuro nel bagagliaio del veicolo."
      },
      {
        "q": "È possibile concordare soste per il pranzo e visite lungo la strada?",
        "a": "Certamente. Il tour privato vi assicura la totale libertà di fermarvi dove desiderate: per fotografare il Passo del Tichka, visitare la Kasbah di Taourirt a Ouarzazate o pranzare in una caratteristica terrazza panoramica lungo le gole."
      }
    ]
  },

  "fes-to-merzouga": {
    "h1": "Transfer Privato da Fès a Merzouga (Deserto del Sahara)",
    "heroSub": "La porta d'accesso più diretta al Sahara marocchino: 460 km in 7 ore da Fès all'Erg Chebbi via Ifrane, i macachi della foresta di Azrou, il valico del Zad, Midelt e le impressionanti Gole dello Ziz.",
    "routeOverviewTitle": "Da Fès alle Sabbie del Sahara: La Traversata della Valle dello Ziz",
    "routeOverview": [
      "Il collegamento tra la capitale spirituale di Fès e le imponenti dune di Merzouga costituisce la rotta più rapida e diretta per raggiungere il grande deserto del Sahara in Marocco. Coprendo circa 460 chilometri lungo la statale N13 in circa 7 ore di guida effettiva, questo itinerario eccezionale attraversa perpendicolarmente la spina dorsale del Medio e dell'Alto Atlante orientale, offrendo uno dei viaggi naturalistici più scenografici dell'intero continente africano.",
      "Partendo al mattino presto dal vostro alloggio a Fès, vedrete mutare la natura a ogni ora di marcia. Dalle fertili valli del nord risalirete verso i boschi di conifere di Ifrane, per poi attraversare la maestosa foresta di cedri millenari di Azrou, dove risiedono i simpatici macachi berberi. Salendo oltre i 2.100 metri del Col du Zad, il paesaggio montano assume toni quasi lunari e selvaggi prima di scendere nella verde conca di Midelt, rinomata per i suoi frutteti di mele.",
      "Dopo Midelt, la strada supera i rilievi dell'Alto Atlante attraverso le spettacolari Gole dello Ziz scavate dall'omonimo fiume nella roccia calcarea ocra, oltrepassando il famoso Tunnel del Legionario. Da qui si apre alla vista il miraggio smeraldo del palmeto dello Ziz, un nastro lussureggiante di centinaia di migliaia di palme da dattero che si snoda per decine di chilometri incastonato tra gole scoscese.",
      "Nel tardo pomeriggio, superati i centri sahariani di Errachidia ed Erfoud, l'orizzonte piatto cede il passo alle altissime creste sabbiose color albicocca dell'Erg Chebbi. Il vostro autista privato vi accompagnerà con la massima cura fino al punto esatto concordato con il vostro bivacco nomade, consentendovi di salire in groppa ai dromedari proprio mentre il sole inizia a tingere il deserto di sfumature infuocate.",
      "Il comfort di bordo è impeccabile per l'intera durata della giornata: pause ristoratrici calibrate sulle vostre esigenze, climatizzazione personalizzata, bottigliette d'acqua minerale fresca sempre presenti e la sicurezza di un autista esperto e affidabile."
    ],
    "highlightsTitle": "Punti di Forza del Vostro Transfer Fès - Merzouga",
    "highlights": [
      "La rotta più fluida e diretta verso il grande deserto dell'Erg Chebbi in appena 7 ore di guida.",
      "Sosta simpatica nella foresta di cedri di Azrou per osservare da vicino i macachi dell'Atlante.",
      "Pausa pranzo rilassante a Midelt, considerata la capitale delle mele e dell'artigianato berbero.",
      "Sosta fotografica spettacolare al celebre belvedere panoramico sulla sconfinata Valle dello Ziz.",
      "Veicoli moderni climatizzati e manutenuti meticolosamente per i lunghi tragitti del Sud.",
      "Arrivo perfettamente sincronizzato con il vostro hotel o campo tendato di lusso a Merzouga."
    ],
    "whatToSeeTitle": "I Panorami Più Belli della Statale N13 verso il Deserto",
    "whatToSeeIntro": "La statale N13 unisce il nord imperiale al profondo sud sahariano attraverso una straordinaria varietà geologica unica in Nord Africa.",
    "whatToSeeItems": [
      {
        "title": "Il Parco Nazionale di Ifrane e la Foresta di Azrou",
        "description": "Un polmone verde d'alta montagna dove i cedri colossali ospitano le scimmie bertucce, creando un sorprendente e rinfrescante contrasto con le atmosfere desertiche."
      },
      {
        "title": "Il Passo del Zad e l'Alta Valle della Moulouya",
        "description": "A 2.178 metri di altitudine, questo valico montano regala panorami di steppa d'alta quota e pianori rocciosi dominati dalle vette dell'Alto Atlante orientale."
      },
      {
        "title": "Le Gole dello Ziz e il Tunnel del Legionario",
        "description": "Scavate dalle acque dell'Oued Ziz, queste gole profonde intagliate nel calcare rosso rappresentano uno dei grandi capolavori geologici prima dell'oasi di Errachidia."
      },
      {
        "title": "Il Belvedere Panoramico sull'Oasi dello Ziz",
        "description": "Una spettacolare terrazza naturale affacciata su un mare verde di centinaia di migliaia di palme da dattero strette nella gola, in netto contrasto con le pareti aride del canyon."
      }
    ],
    "faqsTitle": "Domande Frequenti sul Viaggio Fès - Merzouga",
    "faqs": [
      {
        "q": "Quanto costa un transfer privato da Fès a Merzouga?",
        "a": "La tariffa forfettaria per l'intera tratta è di {price_sedan} ({price_sedan_mad}) per una berlina comfort da 1 a 4 passeggeri, di {price_van} ({price_van_mad}) per un comodo van da 5 a 7 passeggeri e di {price_minibus} ({price_minibus_mad}) per un minibus privato da 8 a 14 posti. Tutti i costi di carburante e autista sono inclusi."
      },
      {
        "q": "Quanto dura complessivamente la giornata di viaggio?",
        "a": "Il percorso di 460 chilometri richiede circa 7 ore di guida pura. Mettendo in conto le soste fotografiche con le scimmie ad Azrou, il pranzo a Midelt e la sosta panoramica alle Gole dello Ziz, prevedete una giornata complessiva di circa 8 ore e mezza."
      },
      {
        "q": "L'autista può lasciarci esattamente dove partono i dromedari per il campo?",
        "a": "Sì, siamo in costante contatto telefonico con il vostro bivacco o hotel a Merzouga per sincronizzare con assoluta precisione il vostro arrivo al punto di partenza della carovana a dorso di dromedario o del transfer in 4x4."
      },
      {
        "q": "Ci sono rischi di chiusura della strada per neve durante l'inverno?",
        "a": "Nei mesi invernali (tra dicembre e febbraio) possono verificarsi nevicate passeggere sul Col du Zad. I nostri autisti professionisti verificano quotidianamente i bollettini viabilità per garantire un transito in totale sicurezza."
      },
      {
        "q": "Quali sono le modalità di prenotazione e caparra per questo transfer?",
        "a": "La prenotazione si effettua comodamente via WhatsApp. Trattandosi di un tragitto a lungo raggio superiore a 300 €, è richiesto un acconto di conferma del 30%, mentre la quota restante viene saldata in loco all'autista."
      },
      {
        "q": "Possiamo acquistare datteri e manufatti fossili a Erfoud?",
        "a": "Certamente. Erfoud è celebre a livello internazionale per i laboratori di estrazione e lucidatura di fossili marini preistorici e per i pregiati datteri Majhoul. L'autista potrà consigliarvi le botteghe più affidabili ed eque."
      },
      {
        "q": "C'è copertura telefonica e connessione internet durante il viaggio?",
        "a": "La rete mobile 4G copre quasi interamente la statale N13 e l'area di Merzouga. Si possono registrare solo brevi cali di segnale temporanei nei tratti più profondi delle gole rocciose."
      }
    ]
  },

  "marrakech-to-chefchaouen": {
    "h1": "Transfer Privato da Marrakech a Chefchaouen (La Città Blu)",
    "heroSub": "Viaggiate in totale serenità dalla città ocra alla suggestiva perla blu del Rif (580 km, 6h30). Collegamento diretto senza scali via autostrada e strade panoramiche del nord, con arrivo alle porte della medina.",
    "routeOverviewTitle": "Da Marrakech a Chefchaouen: La Vostra Traversata Diretta verso la Città Blu",
    "routeOverview": [
      "Il collegamento diretto tra Marrakech e Chefchaouen unisce due delle destinazioni più iconiche e fotografate del Regno, attraversando il Marocco da sud a nord per circa 580 chilometri. Dalle tonalità calde e terrose della città ocra e delle vette dell'Atlante, il tragitto vi condurrà nel cuore verdeggiante delle montagne del Rif, dove sorge la magica cittadina dalle facciate interamente tinteggiate di blu cobalto, azzurro cielo e indaco.",
      "Compiere questo viaggio con i mezzi di trasporto pubblici ordinari richiede un'odissea di oltre 10 o 12 ore, costringendo i viaggiatori a cambiare treni o pullman a Casablanca, Rabat o Tangeri, con pesanti bagagli al seguito e lunghe attese snervanti nelle stazioni. Con il nostro servizio di transfer privato con autista dedicato, l'intero tragitto si compie in sole 6 ore e mezza - 7 ore di comoda guida a bordo di un veicolo esclusivo, spazioso e climatizzato.",
      "La prima parte del percorso sfrutta la moderna rete autostradale nazionale che congiunge rapidamente Marrakech a Casablanca e Rabat, garantendo una marcia scorrevole e sicura. Dopo aver superato la pianura alluvionale del Gharb e le floride campagne di Kenitra, l'itinerario imbocca la strada interna verso Ouezzane, storica città santa adagiata tra morbide colline di uliveti che segna l'ingresso ufficiale nel massiccio montuoso del Rif.",
      "Durante il viaggio godrete della piena libertà di gestire il vostro tempo: il vostro autista sarà a completa disposizione per effettuare rilassanti soste caffè presso le aree di servizio autostradali, sostare per il pranzo in un ristorante tipico a Souk El Arbaa o a Ouezzane, oppure fermarsi in punti panoramici per immortalare le colline verdeggianti del nord.",
      "All'arrivo a Chefchaouen nel tardo pomeriggio, vi troverete al cospetto dello straordinario anfiteatro roccioso del monte Tisouka. Il vostro autista vi accompagnerà fino alla porta pedonale più comoda per accedere al vostro alloggio (Bab el Ain o Piazza Mohammed V), prestando completa assistenza per lo scarico dei bagagli e agevolando l'incontro con il personale del vostro riad."
    ],
    "highlightsTitle": "Vantaggi del Nostro Transfer Diretto Marrakech - Chefchaouen",
    "highlights": [
      "Collegamento diretto porta a porta senza alcun cambio di mezzo, scalo o coincidenza ferroviaria.",
      "Notevole risparmio di tempo: circa 6h30 di viaggio confortevole contro le oltre 11h dei bus ordinari.",
      "Veicoli recenti e spaziosi con impianto di climatizzazione integrale e grande capacità di carico bagagli.",
      "Soste pranzo e pause distensive concordate in totale libertà secondo le vostre preferenze.",
      "Autista professionista esperto sia sulle autostrade veloci che sulle strade montane del Rif.",
      "Arrivo confortevole alle porte storiche pedonali di Chefchaouen con assistenza per le valigie."
    ],
    "whatToSeeTitle": "Cosa Attraverserete dal Sud al Nord del Marocco",
    "whatToSeeIntro": "Questo straordinario itinerario nord-sud vi permette di attraversare quattro distinte regioni geografiche e culturali del Marocco.",
    "whatToSeeItems": [
      {
        "title": "La Piana dell'Haouz e le Autostrade Costiere",
        "description": "La parte iniziale sfrutta il rapido corridoio autostradale che congiunge Marrakech alla capitale Rabat, offrendo una marcia scorrevole, veloce e perfettamente sicura."
      },
      {
        "title": "Il Bacino Agricolo del Gharb",
        "description": "A nord di Kenitra, la rotta attraversa la fertile piana alluvionale del Gharb, punteggiata da estesi campi coltivati, agrumeti profumati e risaie verdeggianti."
      },
      {
        "title": "La Città Santa di Ouezzane",
        "description": "Costruita sui declivi del monte Bouhellal, questa storica cittadina spirituale celebre per le confraternite sufi e i suoi uliveti millenari segna l'ingresso nel massiccio del Rif."
      },
      {
        "title": "La Vista Spettacolare sulla Conca di Chefchaouen",
        "description": "Superate le ultime curve montane, le case dipinte in mille sfumature di blu acceso appaiono improvvisamente incastonate tra le due cime rocciose del monte Ech-Chaoua."
      }
    ],
    "faqsTitle": "Domande Frequenti sul Viaggio Marrakech - Chefchaouen",
    "faqs": [
      {
        "q": "Quanto costa il transfer privato diretto da Marrakech a Chefchaouen?",
        "a": "La tariffa forfettaria è di {price_sedan} ({price_sedan_mad}) per una berlina comfort da 1 a 4 passeggeri, di {price_van} ({price_van_mad}) per un capiente van Mercedes Vito da 5 a 7 passeggeri e di {price_minibus} ({price_minibus_mad}) per un minibus privato da 8 a 14 posti. I pedaggi autostradali e il carburante sono inclusi al 100%."
      },
      {
        "q": "Quanto tempo richiede il viaggio da Marrakech a Chefchaouen?",
        "a": "La distanza di circa 580 chilometri richiede all'incirca 6 ore e mezza - 7 ore di guida effettiva. Consigliamo di programmare la partenza intorno alle 07:30 del mattino per raggiungere la città blu nel primo pomeriggio e godersi la luce del tramonto sui vicoli azzurri."
      },
      {
        "q": "Possiamo fermarci per il pranzo in una cittadina lungo il tragitto?",
        "a": "Assolutamente sì. Il vostro autista potrà consigliarvi ottimi ristoranti a Souk El Arbaa o Ouezzane, oppure una sosta gastronomica di livello presso un'area di servizio autostradale prima di imboccare le strade del Rif."
      },
      {
        "q": "Dove ci lascerà l'autista all'arrivo a Chefchaouen?",
        "a": "Dato che l'intera medina di Chefchaouen è pedonale e ricca di scale in pietra, il vostro autista vi accompagnerà fino a Bab el Ain o in Piazza Mohammed V e contatterà il vostro alloggio affinché un portatore vi aiuti con i bagagli."
      },
      {
        "q": "Quali sono le condizioni di prenotazione e caparra?",
        "a": "Per questo tragitto a lungo raggio superiore a 300 €, per confermare il servizio via WhatsApp è richiesto un anticipo del 30%, mentre il saldo viene corrisposto direttamente all'autista all'arrivo a Chefchaouen."
      },
      {
        "q": "Sono disponibili seggiolini auto omologati per bambini piccoli?",
        "a": "Sì, installiamo a bordo senza alcun costo aggiuntivo seggiolini per bambini e rialzi certificati, garantendo la massima sicurezza per i più piccoli durante tutto il viaggio."
      },
      {
        "q": "Qual è il periodo migliore dell'anno per fare questo viaggio?",
        "a": "La primavera (da marzo a maggio) e l'autunno (da settembre a novembre) sono le stagioni perfette: i rilievi del Rif sono rigogliosi e il clima temperato rende particolarmente piacevole la visita della medina azzurra."
      }
    ]
  }
}

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "data")
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "it-part2.mjs")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("export const itRoutesPart2 = ")
        f.write(json.dumps(routes_part2, ensure_ascii=False, indent=2))
        f.write(";\n")
    print(f"Wrote {out_file} with {len(routes_part2)} routes.")
