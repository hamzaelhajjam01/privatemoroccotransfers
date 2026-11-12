import type { Metadata } from "next";
import Link from "next/link";
import routesData from "@/content/routes.json";
import {
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
  whatsappUrl,
  buildMultilingualAlternates,
} from "@/lib/site";
import TransferDirectory from "@/components/TransferDirectory";
import type { RouteItem } from "@/app/transfers/[slug]/page";
import Icon from "@/components/Icon";

const ALL_ROUTES = routesData as RouteItem[];

export const metadata: Metadata = {
  title: {
    absolute: `Catalogue Transferts Privés Maroc — 150+ Prix Fixes 2026`,
  },
  description:
    "Découvrez plus de 150 transferts privés à travers le Maroc. Prix fixes garantis par véhicule entre Marrakech, Casablanca, Tanger, Fès, Agadir, Chefchaouen et tous les aéroports. Réservation WhatsApp 24/7.",
  alternates: buildMultilingualAlternates("/transfers", "fr"),
  openGraph: {
    title: "Catalogue des Transferts Privés au Maroc — 150+ Liaisons & Prix Fixes",
    description:
      "Chauffeurs privés porte-à-porte dans tout le Maroc. Tarifs fixes par voiture, chauffeurs professionnels agréés, 0% d'acompte sous 300 €.",
    url: `${SITE_URL}/fr/transfers`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catalogue des Transferts Privés au Maroc",
      },
    ],
  },
};

const DIRECTORY_FAQS = [
  {
    q: "Comment fonctionne la réservation d'un transfert avec Private Morocco Transfers ?",
    a: "La réservation s'effectue directement et simplement via WhatsApp. Choisissez votre trajet ou indiquez-nous votre point de départ et votre destination. Nous vous confirmons votre chauffeur et votre tarif fixe immédiatement. Aucun formulaire complexe ni paiement préalable n'est requis pour les réservations de moins de 300 € (3 300 MAD).",
  },
  {
    q: "Le tarif est-il par personne ou par véhicule ?",
    a: "Tous nos tarifs sont des forfaits fermes par véhicule privé, et non par personne. Que vous voyagiez seul, en couple ou en famille dans la limite de capacité du véhicule, le tarif est rigoureusement identique.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le tarif du transfert ?",
    a: "Nos prix sont 100% tout compris : chauffeur privé attitré, véhicule récent et climatisé, tickets de péage autoroutier, carburant, assistance bagages et eau minérale offerte. Pour les arrivées à l'aéroport, le suivi de votre vol et 45 minutes d'attente offerte sont inclus.",
  },
  {
    q: "Comment s'effectue le règlement ?",
    a: "Vous réglez en espèces directement à votre chauffeur lors de votre arrivée à destination. Nous acceptons les Dirhams marocains (MAD) et les Euros (EUR). Pour les circuits excédant 300 €, un acompte de 30% est demandé pour bloquer le véhicule.",
  },
  {
    q: "Puis-je réserver un itinéraire personnalisé non listé dans l'annuaire ?",
    a: "Absolument ! Nous couvrons l'ensemble du territoire marocain. Pour un trajet sur mesure vers un village de montagne, un riad isolé ou un parcours de golf, contactez-nous sur WhatsApp pour un devis fixe immédiat.",
  },
];

export default function FrenchTransfersDirectoryPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Transferts",
        item: `${SITE_URL}/fr/transfers`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DIRECTORY_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div lang="fr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero Header */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Transferts Privés</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span
            className="section-label label-gold"
            style={{ marginBottom: "16px", display: "inline-block" }}
          >
            Catalogue Complet · 150+ Liaisons à Prix Fixe
          </span>
          <h1 className="heading-xl" style={{ color: "var(--white)", maxWidth: "980px" }}>
            Transferts Privés au Maroc
          </h1>
          <p className="hero-sub" style={{ maxWidth: "780px", marginTop: "18px" }}>
            Voyagez en toute sérénité entre toutes les villes, aéroports et sites remarquables du Maroc. Chauffeurs professionnels bilingues, berlines et monospaces haut de gamme, tarifs forfaitaires garantis.
          </p>

          {/* Quick Pillars */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px 36px",
              marginTop: "32px",
              padding: "18px 24px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--rule-dark)",
              maxWidth: "920px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="check" size={16} />
              <span style={{ fontSize: "14px", color: "var(--white)" }}>
                Prix ferme par véhicule (pas par personne)
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="shield-check" size={16} />
              <span style={{ fontSize: "14px", color: "var(--white)" }}>
                0% d'acompte &lt; 300 € · Règlement à l'arrivée
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="clock" size={16} />
              <span style={{ fontSize: "14px", color: "var(--white)" }}>
                Suivi gratuit des retards de vol (45 min offertes)
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon name="refresh" size={16} />
              <span style={{ fontSize: "14px", color: "var(--white)" }}>
                -10% de réduction sur votre trajet retour
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Directory Section */}
      <section className="section">
        <div className="container">
          <TransferDirectory routes={ALL_ROUTES} lang="fr" />
        </div>
      </section>

      {/* Section Circuits Privés & Désert */}
      <section className="section dark" style={{ borderTop: "1px solid var(--rule-dark)" }}>
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
            <span
              className="section-label"
              style={{ color: "var(--muted)", marginBottom: "16px", display: "inline-block" }}
            >
              Circuits Privés · Expéditions Désert
            </span>
            <h2 className="heading-lg" style={{ color: "var(--white)", marginBottom: "20px" }}>
              Vous rêvez des dunes dorées du Sahara ou d'un grand tour du Maroc ?
            </h2>
            <p
              className="statement muted"
              style={{ fontSize: "18px", lineHeight: 1.45, marginBottom: "28px" }}
            >
              Pour vos projets d'itinéraires complets de 3 à 10 jours avec bivouac de luxe dans le désert de Merzouga, notre équipe conçoit des circuits privés exclusifs avec chauffeurs-guides professionnels.
            </p>
            <div>
              <Link
                href="/multi-day-tours"
                className="btn btn-white"
                style={{ minWidth: "240px" }}
              >
                Découvrir Nos Circuits Privés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div
            className="section-header"
            style={{ display: "block", paddingBottom: "24px", marginBottom: "32px" }}
          >
            <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
              Questions Fréquentes
            </span>
            <h2 className="heading-lg">Tout ce qu'il faut savoir sur nos transferts</h2>
          </div>
          <div className="faq-list">
            {DIRECTORY_FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Call-to-Action Bar */}
      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Besoin d'un transfert sur mesure ?</h2>
          <p>
            Notre équipe vous répond sur WhatsApp en moins de 15 minutes avec un prix ferme et définitif.
          </p>
          <div className="cta-buttons">
            <a
              href={whatsappUrl(
                `Bonjour! Je souhaite obtenir un devis pour un transfert privé au Maroc.`
              )}
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              <Icon name="whatsapp" size={18} /> Discuter sur WhatsApp
            </a>
            <Link href="/contact" className="btn btn-outline-white btn-lg">
              Formulaire de Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
