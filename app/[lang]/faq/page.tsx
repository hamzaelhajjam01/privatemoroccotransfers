import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LanguageCode } from "@/lib/i18n";

const SUPPORTED_LANGS: LanguageCode[] = ["fr", "es", "it", "de", "ar", "pt", "nl"];

type Props = {
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const FAQ_ITEMS: Record<
  string,
  {
    title: string;
    desc: string;
    home: string;
    breadcrumb: string;
    tag: string;
    h1: string;
    sub: string;
    questions: Array<{ q: string; a: string }>;
  }
> = {
  fr: {
    title: `FAQ — Questions Fréquentes sur les Chauffeurs au Maroc`,
    desc: "Réponses à vos questions : tarifs fixes, acompte, annulation gratuite, transferts aéroport et véhicules avec chauffeur au Maroc.",
    home: "Accueil",
    breadcrumb: "FAQ",
    tag: "Aide & Questions Fréquentes",
    h1: "Foire Aux Questions",
    sub: "Tout ce que vous devez savoir pour organiser sereinement vos trajets et transferts privés au Maroc.",
    questions: [
      {
        q: "Comment obtenir un tarif pour mon trajet ?",
        a: "Remplissez le formulaire de réservation sur la page d'accueil ou envoyez-nous un message sur WhatsApp avec vos dates, villes et nombre de passagers. Nous vous confirmons un tarif fixe immédiat.",
      },
      {
        q: "Dois-je verser un acompte à la réservation ?",
        a: "Non, pour tous les transferts et excursions de moins de 300 €, aucun acompte n'est requis. Vous réglez directement le chauffeur à votre arrivée (en EUR ou MAD).",
      },
      {
        q: "Quelle est votre politique d'annulation ?",
        a: "L'annulation est 100% gratuite jusqu'à 48 heures avant l'heure de prise en charge prévue.",
      },
      {
        q: "Que se passe-t-il si mon vol a du retard ?",
        a: "Nous suivons votre vol en temps réel à l'aide de votre numéro de vol. Votre chauffeur adapte son heure d'arrivée et vous attend dans le hall des arrivées avec un panneau à votre nom, sans aucun supplément.",
      },
      {
        q: "Les prix sont-ils par personne ou par véhicule ?",
        a: "Tous nos tarifs sont fermes et par véhicule, et non par passager. Le carburant, les péages et la climatisation sont entièrement inclus.",
      },
    ],
  },
  es: {
    title: `Preguntas Frecuentes — Chófer Privado en Marruecos`,
    desc: "Todo lo que necesita saber sobre precios fijos, cancelaciones, conductores, sillas infantiles y recogida en aeropuertos de Marruecos.",
    home: "Inicio",
    breadcrumb: "Preguntas Frecuentes",
    tag: "Centro de Ayuda y Preguntas Frecuentes",
    h1: "Preguntas Frecuentes",
    sub: "Información clara y transparente para planificar su transporte y excursiones privadas en Marruecos.",
    questions: [
      {
        q: "¿Cómo recibo el precio exacto de mi traslado?",
        a: "Envíenos un mensaje por WhatsApp con su origen, destino, fecha y número de pasajeros. Le responderemos en minutos con un precio cerrado todo incluido.",
      },
      {
        q: "¿Es necesario pagar un anticipo para reservar?",
        a: "Para la gran mayoría de rutas y excursiones de menos de 300 €, no requerimos anticipo ni tarjeta bancaria. Se abona en efectivo (EUR o MAD) al conductor.",
      },
      {
        q: "¿Puedo cancelar mi reserva de forma gratuita?",
        a: "Sí, puede cancelar sin ningún coste hasta 48 horas antes de la hora prevista de recogida.",
      },
      {
        q: "¿Qué ocurre si mi vuelo llega con retraso?",
        a: "Monitorizamos su vuelo en tiempo real. Su chófer esperará en la terminal de llegadas con un cartel con su nombre sin ningún suplemento por retrasos.",
      },
      {
        q: "¿Los precios son por persona o por vehículo?",
        a: "Todos nuestros precios son fijos por vehículo completo, e incluyen gasolina, peajes de autopista y aire acondicionado.",
      },
    ],
  },
  it: {
    title: `Domande Frequenti — Transfer Privati in Marocco`,
    desc: "Risposte a tutte le domande: tariffe fisse, pagamenti, cancellazione gratuita, ritardi aerei e veicoli con autista in Marocco.",
    home: "Home",
    breadcrumb: "FAQ",
    tag: "Domande Frequenti & Assistenza",
    h1: "Domande Frequenti",
    sub: "Tutte le risposte per organizzare al meglio i vostri spostamenti e transfer con autista in Marocco.",
    questions: [
      {
        q: "Come ricevo il preventivo per la mia tratta?",
        a: "Inviateci un messaggio su WhatsApp con partenza, destinazione, data e numero di passeggeri. Vi confermeremo subito una tariffa fissa garantita.",
      },
      {
        q: "Serve un anticipo con carta di credito?",
        a: "Per tutti i transfer sotto i 300 € non è richiesto alcun anticipo né carta di credito. Pagate direttamente all'autista all'arrivo in contanti (EUR o MAD).",
      },
      {
        q: "Qual è la politica di cancellazione?",
        a: "La cancellazione è completamente gratuita fino a 48 ore prima della corsa programmata.",
      },
      {
        q: "Cosa succede se il volo è in ritardo?",
        a: "Monitoriamo l'orario effettivo del volo. Il vostro autista vi aspetterà nella sala arrivi con un cartello con il vostro nome senza costi aggiuntivi.",
      },
      {
        q: "I prezzi sono per persona o per auto?",
        a: "Tutte le tariffe sono fisse per l'intero veicolo, non a persona. Carburante, pedaggi e aria condizionata sono sempre inclusi.",
      },
    ],
  },
  de: {
    title: `FAQ — Häufige Fragen zu Privatchauffeur Marokko`,
    desc: "Antworten zu Festpreisen, Anzahlung, Stornierung, Flugverfolgung und Fahrzeugen mit privatem Fahrer in Marokko.",
    home: "Startseite",
    breadcrumb: "FAQ",
    tag: "Hilfe & Häufig Gestellte Fragen",
    h1: "Häufig Gestellte Fragen",
    sub: "Wichtige Informationen zur Buchung und Durchführung Ihrer privaten Transfers in Marokko.",
    questions: [
      {
        q: "Wie erhalte ich ein Angebot für meine Strecke?",
        a: "Senden Sie uns einfach eine kurze WhatsApp-Nachricht mit Startort, Zielort, Datum und Personenanzahl. Sie erhalten innerhalb von Minuten einen garantierten Festpreis.",
      },
      {
        q: "Muss ich bei der Buchung eine Anzahlung leisten?",
        a: "Nein, für Transfers und Tagesausflüge unter 300 € ist keine Vorauszahlung nötig. Sie bezahlen bequem vor Ort in bar (EUR oder MAD) direkt beim Fahrer.",
      },
      {
        q: "Kann ich kostenlos stornieren?",
        a: "Ja, bis zu 48 Stunden vor der vereinbarten Abholzeit ist die Stornierung zu 100 % kostenfrei.",
      },
      {
        q: "Was passiert bei Flugverspätungen?",
        a: "Wir verfolgen Ihren Flug live anhand der Flugnummer. Ihr Fahrer passt die Ankunftszeit automatisch an und wartet ohne Aufpreis mit einem Namensschild auf Sie.",
      },
      {
        q: "Gelten die Preise pro Person oder pro Fahrzeug?",
        a: "Alle Preise sind Pauschalpreise pro Fahrzeug, nicht pro Person. Treibstoff, Autobahngebühren und Klimaanlage sind vollständig enthalten.",
      },
    ],
  },
  ar: {
    title: `الأسئلة الشائعة — خدمات السائق الخاص بالمغرب`,
    desc: "إجابات وافية حول الأسعار الثابتة، الدفع، الإلغاء المجاني، استقبال المطارات ومواصفات السيارات مع سائق خاص بالمغرب.",
    home: "الرئيسية",
    breadcrumb: "الأسئلة الشائعة",
    tag: "مركز المساعدة والأسئلة المتكررة",
    h1: "الأسئلة الشائعة",
    sub: "كل ما تود معرفته لتنظيم رحلاتك وتوصيلك الخاص في المغرب بكل راحة واطمئنان.",
    questions: [
      {
        q: "كيف يمكنني معرفة السعر الثابت لرحلتي؟",
        a: "أرسل لنا رسالة واتساب بنقطة الانطلاق والوجهة والتاريخ وعدد الركاب. سنوافيك بالسعر الثابت الصافي في بضع دقائق.",
      },
      {
        q: "هل يتطلب الحجز دفع أي عربون مسبق؟",
        a: "لا، جميع التنقلات والرحلات اليومية الأقل من 300 يورو لا تتطلب أي عربون مسبق. الدفع نقداً عند الوصول (باليورو أو الدرهم المغربي).",
      },
      {
        q: "ما هي سياسة إلغاء الحجز؟",
        a: "الإلغاء مجاني بالكامل وبدون أي غرامات حتى 48 ساعة قبل موعد الانطلاق.",
      },
      {
        q: "ماذا لو تأخرت طائرتي عن موعدها؟",
        a: "نتابع مواعيد الرحلات بدقة في الوقت الحقيقي. سائقك سينتظرك في صالة الوصول بلافتة تحمل اسمك دون أي تكلفة إضافية.",
      },
      {
        q: "هل السعر للشخص الواحد أم للسيارة بالكامل؟",
        a: "السعر ثابت ومحدد للسيارة بالكامل وليس للشخص. يشمل السائق، الوقود، رسوم الطرق السريعة والتكييف.",
      },
    ],
  },
  pt: {
    title: `Perguntas Frequentes — Motorista Privado em Marrocos`,
    desc: "Tudo o que precisa de saber sobre preços fixos, cancelamentos, voos atrasados e transporte particular em Marrocos.",
    home: "Início",
    breadcrumb: "FAQ",
    tag: "Dúvidas Frequentes",
    h1: "Perguntas Frequentes",
    sub: "Respostas claras e diretas para organizar as suas viagens e passeios particulares em Marrocos.",
    questions: [
      {
        q: "Como posso obter uma cotação para o meu percurso?",
        a: "Envie-nos uma mensagem no WhatsApp com o local de partida, destino, data e passageiros. Confirmaremos de imediato o preço fixo com tudo incluído.",
      },
      {
        q: "É necessário adiantar algum valor para reservar?",
        a: "Para a grande maioria dos transfers sob 300 €, não cobramos sinal nem pedimos cartão. O pagamento é feito em dinheiro diretamente ao condutor no dia.",
      },
      {
        q: "Como funciona o cancelamento gratuito?",
        a: "Pode cancelar a sua reserva sem qualquer custo até 48 horas antes da hora marcada para a partida.",
      },
      {
        q: "O que acontece se o meu voo atrasar?",
        a: "Acompanhamos o status do seu voo em tempo real. O motorista esperará por si no desembarque com uma placa com o seu nome, sem taxas adicionais.",
      },
      {
        q: "Os preços são por pessoa ou por veículo?",
        a: "Todos os preços apresentados são por viatura completa, não por pessoa. O combustível, as portagens e o ar condicionado estão totalmente incluídos.",
      },
    ],
  },
  nl: {
    title: `Veelgestelde Vragen — Privé Chauffeur Marokko`,
    desc: "Antwoorden over all-in vaste prijzen, aanbetalingen, gratis annuleren, vliegveld pick-up en auto's met chauffeur in Marokko.",
    home: "Home",
    breadcrumb: "Veelgestelde Vragen",
    tag: "Hulp & Veelgestelde Vragen",
    h1: "Veelgestelde Vragen",
    sub: "Duidelijke informatie voor een zorgeloze voorbereiding van uw privéritten in Marokko.",
    questions: [
      {
        q: "Hoe vraag ik een vaste prijs voor mijn rit aan?",
        a: "Stuur ons eenvoudig een WhatsApp bericht met vertreklocatie, bestemming, datum en aantal passagiers. Wij reageren direct met een gegarandeerde all-in prijs.",
      },
      {
        q: "Moet ik een aanbetaling doen bij boeking?",
        a: "Nee, voor ritten en dagtochten onder €300 vragen wij geen aanbetaling. U rekent eenvoudig contant af bij aankomst (in EUR of MAD) bij uw chauffeur.",
      },
      {
        q: "Kan ik gratis annuleren?",
        a: "Ja, tot 48 uur voor de geplande ophaaltijd kunt u volledig gratis annuleren.",
      },
      {
        q: "Wat gebeurt er als mijn vlucht vertraagd is?",
        a: "Wij volgen uw vlucht live via het vluchtnummer. Uw chauffeur staat op u te wachten in de aankomsthal met een naambordje, zonder extra wachttijdkosten.",
      },
      {
        q: "Geldt de prijs per persoon of per auto?",
        a: "Al onze tarieven zijn vaste all-in prijzen per auto, dus niet per persoon. Brandstof, tolwegen en airco zijn standaard inbegrepen.",
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) return {};

  const info = FAQ_ITEMS[lang] || FAQ_ITEMS.es;
  const canonicalUrl = `${SITE_URL}/${lang}/faq`;

  return {
    title: { absolute: info.title },
    description: info.desc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/faq`,
        fr: `${SITE_URL}/fr/faq`,
        es: `${SITE_URL}/es/faq`,
        it: `${SITE_URL}/it/faq`,
        de: `${SITE_URL}/de/faq`,
        ar: `${SITE_URL}/ar/faq`,
        pt: `${SITE_URL}/pt/faq`,
        nl: `${SITE_URL}/nl/faq`,
        "x-default": `${SITE_URL}/faq`,
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

export default async function LocalizedFaqPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as LanguageCode)) notFound();

  const c = FAQ_ITEMS[lang] || FAQ_ITEMS.es;
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
          </h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {c.questions.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface)",
                  padding: "24px 28px",
                  borderRadius: "8px",
                  border: "1px solid var(--rule)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "var(--gold)",
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
