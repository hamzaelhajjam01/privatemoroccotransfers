import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import { SITE_NAME, SITE_URL, buildMultilingualAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Calculateur de Prix — Chauffeur Privé au Maroc" },
  description: "Calculez le tarif fixe exact de votre transfert privé au Maroc. Prix immédiat pour chaque trajet — Marrakech, Casablanca, Agadir, Fès, Essaouira et aéroports.",
  alternates: buildMultilingualAlternates("/calculator", "fr"),
  openGraph: {
    title: "Calculateur de Tarif Chauffeur Privé Maroc | Prix Fixes Immédiats",
    description: "Estimez votre tarif fixe garanti pour tout transfert aéroport, liaison interville ou circuit privé au Maroc.",
    url: `${SITE_URL}/fr/calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const calcJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculateur de Prix Chauffeur Privé Maroc",
  applicationCategory: "TravelApplication",
  operatingSystem: "All",
  url: `${SITE_URL}/fr/calculator`,
  description: "Outil de calcul de prix fixe immédiat pour les transferts privés et chauffeurs au Maroc.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function FrenchCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcJsonLd) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Calculateur de Prix</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            Devis Immédiat · Zéro Frais Caché
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            Calculateur de Tarif
            <br />
            Chauffeur Privé
          </h1>
          <p className="hero-sub">
            Sélectionnez vos villes de départ et d'arrivée ainsi que votre type de véhicule pour obtenir instantanément votre tarif forfaitaire garanti.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Calculator isFr={true} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">Votre trajet est spécifique ou complexe ?</h2>
          <p>
            Circuits multi-villes, mise à disposition à la journée ou séjours dans le désert : contactez-nous directement sur WhatsApp pour un devis sur mesure.
          </p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=Bonjour!%20Je%20souhaite%20un%20devis%20personnalis%C3%A9%20pour%20un%20chauffeur%20priv%C3%A9%20au%20Maroc."
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              Écrire sur WhatsApp
            </a>
            <Link href="/fr/transfers" className="btn btn-outline-white btn-lg">
              Catalogue de Toutes les Liaisons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
