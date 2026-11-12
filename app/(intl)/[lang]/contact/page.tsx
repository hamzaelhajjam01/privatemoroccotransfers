import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const CONTACT_CONTENT: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    breadcrumb: string;
    tag: string;
    h1: string;
    h1Sub: string;
    sub: string;
    formTitle: string;
    lblFullName: string;
    phFullName: string;
    lblContact: string;
    phContact: string;
    lblService: string;
    svcOptions: string[];
    lblRoute: string;
    phRoute: string;
    lblDate: string;
    lblNotes: string;
    phNotes: string;
    btnSubmit: string;
    cardWaTitle: string;
    cardWaDesc: string;
    btnWaDirect: string;
  }
> = {
  es: {
    title: `Contacto y Reservas — Chófer Privado en Marruecos`,
    desc: "Reserve su chófer privado en Marruecos. Envíenos su itinerario y fechas para recibir confirmación de precio fijo inmediato en WhatsApp.",
    home: "Inicio",
    breadcrumb: "Contacto y Reservas",
    tag: "Respuesta en Menos de 15 Minutos en WhatsApp",
    h1: "Reserve su",
    h1Sub: "Chófer Privado",
    sub: "Indíquenos los datos de su viaje para recibir una confirmación inmediata de tarifa fija. Sin pagos por adelantado para importes menores a 300 €.",
    formTitle: "Solicitud de Reserva Rápida",
    lblFullName: "Nombre completo",
    phFullName: "Ej. Carlos García",
    lblContact: "Email o teléfono WhatsApp",
    phContact: "Ej. +34 612 345 678",
    lblService: "Tipo de Servicio",
    svcOptions: [
      "Traslado de Aeropuerto",
      "Ruta Entre Ciudades",
      "Excursión de un Día",
      "Circuito Privado 3 a 7 Días",
    ],
    lblRoute: "Ruta deseada (Origen → Destino)",
    phRoute: "Ej. Aeropuerto de Marrakech → Riad Médina",
    lblDate: "Fecha y número de pasajeros",
    lblNotes: "Comentarios o peticiones (sillas de bebé, equipaje extra...)",
    phNotes: "Ej. Necesitamos 1 silla de bebé y llevamos 4 maletas grandes.",
    btnSubmit: "Enviar solicitud por WhatsApp",
    cardWaTitle: "Atención Inmediata por WhatsApp",
    cardWaDesc: "Nuestro equipo de coordinación de conductores está disponible todos los días para resolver dudas y confirmar reservas en minutos.",
    btnWaDirect: "Hablar directamente por WhatsApp",
  },
  it: {
    title: `Contatti e Prenotazioni — Autista Privato Marocco`,
    desc: "Prenotate il vostro autista privato in Marocco. Inviate i dettagli del viaggio per ricevere la conferma a tariffa fissa su WhatsApp in pochi minuti.",
    home: "Home",
    breadcrumb: "Contatti e Prenotazioni",
    tag: "Risposta in Meno di 15 Minuti su WhatsApp",
    h1: "Prenotate il Vostro",
    h1Sub: "Autista Privato",
    sub: "Compilate i dettagli del tragitto per ricevere la conferma immediata della tariffa fissa. Nessun anticipo richiesto sotto i 300 €.",
    formTitle: "Richiesta Rapida di Prenotazione",
    lblFullName: "Nome e Cognome",
    phFullName: "Es. Marco Rossi",
    lblContact: "Email o numero WhatsApp",
    phContact: "Es. +39 340 1234567",
    lblService: "Tipo di Servizio",
    svcOptions: [
      "Transfer Aeroporto",
      "Collegamento Tra Città",
      "Escursione Giornaliera",
      "Tour Privato 3–7 Giorni",
    ],
    lblRoute: "Tragitto desiderato (Partenza → Destinazione)",
    phRoute: "Es. Aeroporto di Marrakech → Riad Médina",
    lblDate: "Data e numero di passeggeri",
    lblNotes: "Note o richieste particolari (seggiolino, bagagli extra...)",
    phNotes: "Es. 1 seggiolino bimbo richiesto, 4 valigie grandi.",
    btnSubmit: "Invia richiesta su WhatsApp",
    cardWaTitle: "Assistenza Immediata su WhatsApp",
    cardWaDesc: "Il nostro coordinamento operativo è attivo tutti i giorni per assistervi e confermare i vostri transfer in pochi minuti.",
    btnWaDirect: "Parla con noi su WhatsApp",
  },
  de: {
    title: `Kontakt & Buchung — Privatchauffeur Marokko`,
    desc: "Buchen Sie Ihren privaten Chauffeur in Marokko. Senden Sie uns Ihre Reisedaten für ein verbindliches Festpreisangebot über WhatsApp.",
    home: "Startseite",
    breadcrumb: "Kontakt & Buchung",
    tag: "Antwort in unter 15 Minuten über WhatsApp",
    h1: "Buchen Sie Ihren",
    h1Sub: "Privaten Chauffeur",
    sub: "Teilen Sie uns Ihre Reisedaten mit, um umgehend ein garantiertes Festpreisangebot zu erhalten. Keine Vorauszahlung bei Buchungen unter 300 €.",
    formTitle: "Schnelle Buchungsanfrage",
    lblFullName: "Vollständiger Name",
    phFullName: "Z.B. Michael Schmidt",
    lblContact: "E-Mail oder WhatsApp-Nummer",
    phContact: "Z.B. +49 170 1234567",
    lblService: "Gewünschter Service",
    svcOptions: [
      "Flughafentransfer",
      "Fernstrecke / Stadt-zu-Stadt",
      "Tagesausflug",
      "Mehrtägige Rundreise (3–7 Tage)",
    ],
    lblRoute: "Gewünschte Strecke (Abfahrtsort → Zielort)",
    phRoute: "Z.B. Flughafen Marrakesch → Hotel Palmeraie",
    lblDate: "Datum und Anzahl der Passagiere",
    lblNotes: "Besondere Wünsche (Kindersitz, extra Gepäck...)",
    phNotes: "Z.B. Wir benötigen 1 Kindersitz und reisen mit 3 großen Koffern.",
    btnSubmit: "Anfrage über WhatsApp senden",
    cardWaTitle: "Direkter WhatsApp-Support",
    cardWaDesc: "Unser Serviceteam ist täglich erreichbar, um Fragen zu beantworten und Ihre Fahrt minutenschnell zu bestätigen.",
    btnWaDirect: "Direkt per WhatsApp anfragen",
  },
  ar: {
    title: `التواصل والحجز — سائق خاص في المغرب`,
    desc: "احجز خدمة سائق خاص في المغرب. أرسل خط سيرك وتواريخ رحلتك للحصول على تأكيد فوري وسعر ثابت عبر واتساب.",
    home: "الرئيسية",
    breadcrumb: "التواصل والحجز",
    tag: "رد فوري في أقل من 15 دقيقة عبر واتساب",
    h1: "احجز خدمة",
    h1Sub: "السائق الخاص الآن",
    sub: "أرسل لنا تفاصيل رحلتك لنؤكد لك السعر الثابت والتوافر فوراً. بدون أي عربون مسبق للرحلات دون 300 يورو.",
    formTitle: "طلب حجز فوري ومباشر",
    lblFullName: "الاسم الكامل",
    phFullName: "مثال: عبد الله الأحمد",
    lblContact: "البريد الإلكتروني أو رقم واتساب",
    phContact: "مثال: +966 50 123 4567",
    lblService: "نوع الخدمة المطلوبة",
    svcOptions: [
      "استقبال وتوصيل مطار",
      "تنقل خاص بين المدن",
      "رحلة وجولة يومية خاصة",
      "برنامج سياحي 3 إلى 7 أيام",
    ],
    lblRoute: "خط السير (نقطة الانطلاق ← الوجهة)",
    phRoute: "مثال: مطار مراكش المنارة ← الفندق بالمدينة القديمة",
    lblDate: "التاريخ وعدد الركاب",
    lblNotes: "ملاحظات أو طلبات خاصة (مقاعد أطفال، حقائب إضافية...)",
    phNotes: "مثال: نحتاج مقعد طفل، ولدينا 4 حقائب سفر كبيرة.",
    btnSubmit: "إرسال طلب الحجز عبر واتساب",
    cardWaTitle: "تواصل مباشر وفوري عبر واتساب",
    cardWaDesc: "فريق التنسيق لدينا متاح يومياً على مدار الساعة للإجابة على استفساراتكم وتأكيد حجوزاتكم في دقائق.",
    btnWaDirect: "محادثة فورية عبر واتساب",
  },
  pt: {
    title: `Contacto e Reservas — Motorista Privado em Marrocos`,
    desc: "Reserve o seu motorista privado em Marrocos. Envie o seu itinerário para receber confirmação imediata de preço fixo no WhatsApp.",
    home: "Início",
    breadcrumb: "Contacto e Reservas",
    tag: "Resposta em Menos de 15 Minutos no WhatsApp",
    h1: "Reserve o Seu",
    h1Sub: "Motorista Privado",
    sub: "Indique-nos os detalhes da sua viagem para receber cotação imediata com preço fixo. Sem entrada para viagens sob 300 €.",
    formTitle: "Pedido Rápido de Reserva",
    lblFullName: "Nome Completo",
    phFullName: "Ex: João Silva",
    lblContact: "Email ou telemóvel WhatsApp",
    phContact: "Ex: +351 912 345 678",
    lblService: "Tipo de Serviço",
    svcOptions: [
      "Transfer de Aeroporto",
      "Viagem Entre Cidades",
      "Passeio de um Dia",
      "Circuito Privado 3 a 7 Dias",
    ],
    lblRoute: "Percurso pretendido (Partida → Destino)",
    phRoute: "Ex: Aeroporto de Marraquexe → Riad Médina",
    lblDate: "Data e número de passageiros",
    lblNotes: "Notas ou pedidos especiais (cadeira de bebé, bagagem extra...)",
    phNotes: "Ex: Precisamos de cadeira de bebé e temos 4 malas grandes.",
    btnSubmit: "Enviar pedido pelo WhatsApp",
    cardWaTitle: "Atendimento Rápido no WhatsApp",
    cardWaDesc: "A nossa equipa de motoristas está disponível todos os dias para esclarecer dúvidas e confirmar a sua viagem.",
    btnWaDirect: "Falar direto no WhatsApp",
  },
  nl: {
    title: `Contact & Boeken — Privé Chauffeur Marokko`,
    desc: "Boek uw privéchauffeur in Marokko. Stuur uw reisdetails door en ontvang direct een vaste prijsbevestiging via WhatsApp.",
    home: "Home",
    breadcrumb: "Contact & Boeken",
    tag: "Reactie binnen 15 Minuten via WhatsApp",
    h1: "Boek Uw",
    h1Sub: "Privé Chauffeur",
    sub: "Geef uw reiswensen door voor een directe all-in vaste prijs. Geen aanbetaling nodig onder €300.",
    formTitle: "Snelle Reserveringsaanvraag",
    lblFullName: "Volledige Naam",
    phFullName: "Bijv. Jan de Vries",
    lblContact: "E-mail of WhatsApp-nummer",
    phContact: "Bijv. +31 6 12345678",
    lblService: "Gewenste Dienst",
    svcOptions: [
      "Luchthaventransfer",
      "Stad naar Stad rit",
      "Dagtocht / Excursie",
      "Meerdaagse Rondreis (3–7 dagen)",
    ],
    lblRoute: "Route (Vertrek → Bestemming)",
    phRoute: "Bijv. Luchthaven Marrakech → Riad Médina",
    lblDate: "Datum en aantal passagiers",
    lblNotes: "Opmerkingen of verzoeken (kinderzitje, extra bagage...)",
    phNotes: "Bijv. Graag 1 kinderzitje, we reizen met 4 grote koffers.",
    btnSubmit: "Aanvraag versturen via WhatsApp",
    cardWaTitle: "Direct Contact via WhatsApp",
    cardWaDesc: "Onze planning staat dagelijks voor u klaar om vragen te beantwoorden en uw boeking binnen enkele minuten vast te leggen.",
    btnWaDirect: "Direct chatten op WhatsApp",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = CONTACT_CONTENT[lang] || CONTACT_CONTENT.es;
  const canonicalUrl = `${SITE_URL}/${lang}/contact`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/contact`,
        fr: `${SITE_URL}/fr/contact`,
        es: `${SITE_URL}/es/contact`,
        it: `${SITE_URL}/it/contact`,
        de: `${SITE_URL}/de/contact`,
        ar: `${SITE_URL}/ar/contact`,
        pt: `${SITE_URL}/pt/contact`,
        nl: `${SITE_URL}/nl/contact`,
        "x-default": `${SITE_URL}/contact`,
      },
    },
    openGraph: {
      title: info.title,
      description: info.desc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export default async function LocalizedContactPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = CONTACT_CONTENT[lang] || CONTACT_CONTENT.es;
  const homeUrl = `/${lang}`;
  const isRtl = lang === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href={homeUrl}>{c.home}</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{c.breadcrumb}</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            {c.tag}
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            {c.h1}
            <br />
            {c.h1Sub}
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-card">
                <h2 className="heading-md" style={{ marginBottom: "24px" }}>
                  {c.formTitle}
                </h2>
                <form id="briefForm">
                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-name">
                        {c.lblFullName}
                      </label>
                      <input
                        id="bf-name"
                        name="name"
                        type="text"
                        required
                        placeholder={c.phFullName}
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="bf-email">
                        {c.lblContact}
                      </label>
                      <input
                        id="bf-email"
                        name="email"
                        type="text"
                        required
                        placeholder={c.phContact}
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-service">
                        {c.lblService}
                      </label>
                      <select
                        id="bf-service"
                        name="service"
                        defaultValue={c.svcOptions[0]}
                      >
                        {c.svcOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="field-label" htmlFor="bf-route">
                        {c.lblRoute}
                      </label>
                      <input
                        id="bf-route"
                        name="route"
                        type="text"
                        required
                        placeholder={c.phRoute}
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-date">
                        {c.lblDate}
                      </label>
                      <input
                        id="bf-date"
                        name="date"
                        type="text"
                        placeholder="Ej. 15 Oct, 2 pax"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="bf-notes">
                      {c.lblNotes}
                    </label>
                    <textarea
                      id="bf-notes"
                      name="notes"
                      rows={3}
                      placeholder={c.phNotes}
                      className="field-input"
                      style={{ height: "auto" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold btn-lg no-ring"
                    style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}
                  >
                    <Icon name="whatsapp" size={18} />
                    {c.btnSubmit}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="contact-card">
                <h3 className="heading-sm" style={{ marginBottom: "16px" }}>
                  {c.cardWaTitle}
                </h3>
                <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
                  {c.cardWaDesc}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-lg"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Icon name="whatsapp" size={18} />
                  {c.btnWaDirect}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
