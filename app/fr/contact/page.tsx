import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_NUMBER, buildMultilingualAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact & Réservation — Chauffeur Privé Maroc" },
  description: "Réservez votre chauffeur privé au Maroc. Envoyez votre itinéraire et vos dates pour obtenir un tarif fixe immédiat sur WhatsApp. Aucun paiement requis à la réservation sous 300 €.",
  alternates: buildMultilingualAlternates("/contact", "fr"),
};

export default function FrenchContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact &amp; Réservation</span>
          </div>
          <div className="hero-rule" style={{ marginBottom: "24px" }}></div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            Réponse en Moins de 15 Minutes sur WhatsApp
          </span>
          <h1 className="heading-xl mt-16" style={{ color: "var(--white)" }}>
            Réservez Votre
            <br />
            Chauffeur Privé
          </h1>
          <p className="hero-sub">
            Indiquez-nous vos détails de voyage ci-dessous pour recevoir une confirmation immédiate de votre tarif fixe. Aucun paiement d'avance requis sous 300 €.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-card">
                <h2 className="heading-md" style={{ marginBottom: "24px" }}>
                  Demande de Réservation Rapide
                </h2>
                <form id="briefForm">
                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-name">Votre Nom complet</label>
                      <input id="bf-name" name="name" type="text" required placeholder="Ex. Jean Dupont" />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="bf-email">Email ou Numéro WhatsApp</label>
                      <input id="bf-email" name="email" type="text" required placeholder="Ex. +33 6 12 34 56 78" />
                    </div>
                  </div>

                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-service">Type de Service</label>
                      <select id="bf-service" name="service" defaultValue="Transfert Interville">
                        <option value="Transfert Aéroport">Transfert Aéroport</option>
                        <option value="Transfert Interville">Transfert Interville</option>
                        <option value="Excursion d'une journée">Excursion d'une Journée</option>
                        <option value="Circuit Plusieurs Jours">Circuit Privé 3 à 7 Jours</option>
                      </select>
                    </div>
                    <div>
                      <label className="field-label" htmlFor="bf-route">Itinéraire / Villes</label>
                      <input id="bf-route" name="route" type="text" required placeholder="Ex. Aéroport Marrakech → Essaouira" />
                    </div>
                  </div>

                  <div className="field-row">
                    <div>
                      <label className="field-label" htmlFor="bf-date">Date &amp; Heure de prise en charge</label>
                      <input id="bf-date" name="date" type="text" placeholder="Ex. 15 Mars à 14h30" />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="bf-notes">Nombre de passagers &amp; Bagages</label>
                      <input id="bf-notes" name="notes" type="text" placeholder="Ex. 2 adultes, 2 valises" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold btn-lg no-ring"
                    style={{ width: "100%", justifyContent: "center", marginTop: "16px" }}
                  >
                    Envoyer ma demande sur WhatsApp
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div style={{ padding: "32px", background: "var(--sand)", border: "1px solid var(--rule)", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h3 style={{ fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                    Réservation Directe WhatsApp
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                    Le moyen le plus rapide d'obtenir une réponse immédiate. Notre équipe de dispatching est disponible 7j/7.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour!%20Je%20souhaite%20r%C3%A9server%20un%20transfert%20priv%C3%A9%20au%20Maroc.`}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-whatsapp"
                    style={{ marginTop: "16px", display: "inline-flex" }}
                  >
                    Ouvrir WhatsApp (+{WHATSAPP_NUMBER})
                  </a>
                </div>

                <hr style={{ border: 0, borderTop: "1px solid var(--rule)" }} />

                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
                    Nos Engagements &amp; Garanties
                  </h4>
                  <ul style={{ fontSize: "14px", color: "var(--muted)", paddingLeft: "18px", margin: 0, lineHeight: 1.8 }}>
                    <li>0% d'acompte requis pour les réservations &lt; 300 €</li>
                    <li>Règlement en espèces à votre chauffeur à l'arrivée (EUR ou MAD)</li>
                    <li>Suivi de vol en direct &amp; 45 min d'attente offerte à l'aéroport</li>
                    <li>Annulation sans frais jusqu'à 48 heures avant le départ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
