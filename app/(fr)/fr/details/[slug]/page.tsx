import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LISTINGS, getListing, listingsInCity } from "@/lib/listings";
import { EUR_RATE } from "@/lib/pricing";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import Icon from "@/components/Icon";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getListing((await params).slug);
  if (!l) return {};
  const cleanTitle = l.title.replace(/\s*\|\s*Morocco Private Drivers?$/i, "").trim();
  const metaTitle = cleanTitle.length <= 45 ? `${cleanTitle} | Chauffeur Maroc` : cleanTitle;
  return {
    title: { absolute: metaTitle },
    description: l.description,
    alternates: { canonical: `${SITE_URL}/fr/details/${l.slug}` },
    openGraph: { title: metaTitle, description: l.description, locale: "fr_FR", images: [`/img/fleet-scenes/${l.modelKey}.jpg`] },
  };
}

const CAT_FR: Record<string, string> = { Sedan: "Berline", Business: "Berline premium", SUV: "SUV", Van: "Monospace", Minibus: "Minibus" };

export default async function ListingPage({ params }: Props) {
  const l = getListing((await params).slug);
  if (!l) notFound();
  const others = listingsInCity(l.city).filter((o) => o.slug !== l.slug);
  const scene = (key: string) => `/img/fleet-scenes/${key}.jpg`;
  const body = l.bodyHtml.replace(/<td>0<\/td>/g, "<td>—</td>");
  const waMsg = `Bonjour, je souhaite réserver un chauffeur privé avec un ${l.model} à ${l.cityFr}. Pouvez-vous m'envoyer un prix fixe ?`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${l.model} avec chauffeur à ${l.cityFr}`,
    serviceType: "Chauffeur privé / transfert aéroport",
    areaServed: l.cityFr,
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    image: l.images[0],
    offers: { "@type": "Offer", priceCurrency: "EUR", price: l.fromEur, availability: "https://schema.org/InStock" },
  };

  return (
    <div lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero listing-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link><span className="breadcrumb-sep">/</span>
            <Link href="/fleet">Flotte</Link><span className="breadcrumb-sep">/</span>
            <Link href={`/cities/${l.citySlug}`}>{l.cityFr}</Link><span className="breadcrumb-sep">/</span>
            <span>{l.model}</span>
          </div>
          <div className="listing-hero-grid">
            <div>
              <span className="section-label">Chauffeur privé · {l.cityFr}</span>
              <h1 className="heading-xl mt-16">{l.model}</h1>
              <p className="hero-sub">{l.passengers} passagers · {l.bags} bagages · {CAT_FR[l.category] ?? l.category}</p>
              <div className="listing-hero-price">
                <span>À partir de</span>
                <strong>€{l.fromEur}</strong>
                <span>/ trajet · ≈ {Math.round(l.fromEur * EUR_RATE)} MAD</span>
              </div>
              <button type="button" className="btn btn-gold btn-lg no-ring mt-24" data-wa={waMsg}><Icon name="whatsapp" size={18} />Réserver sur WhatsApp</button>
            </div>
            <div className="listing-photo scene" style={{ backgroundImage: `url(${scene(l.modelKey)})` }} role="img" aria-label={`${l.model} avec chauffeur à ${l.cityFr}`} />
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap detail-grid">
          <article className="post-body listing-body" dangerouslySetInnerHTML={{ __html: body }} />
          <aside className="detail-aside">
            <div className="detail-card">
              <div className="detail-studio" style={{ backgroundImage: `url(${l.images[0]})` }} role="img" aria-label={l.model} />
              <span className="section-label">Prix fixe</span>
              <p className="detail-price">€{l.fromEur} <small>/ trajet</small></p>
              <p className="muted small">Transfert aéroport à {l.cityFr}, par véhicule. ≈ {Math.round(l.fromEur * EUR_RATE)} MAD.</p>
              <ul className="detail-specs">
                <li><span><Icon name="users" size={16} />Passagers</span><span>{l.passengers}</span></li>
                <li><span><Icon name="luggage" size={16} />Bagages</span><span>{l.bags}</span></li>
                <li><span><Icon name="car" size={16} />Catégorie</span><span>{CAT_FR[l.category] ?? l.category}</span></li>
                <li><span><Icon name="globe" size={16} />Langues</span><span>{l.languages.join(", ")}</span></li>
                <li><span><Icon name="shield-check" size={16} />Annulation</span><span>Gratuite jusqu&apos;à 48 h</span></li>
              </ul>
              <button type="button" className="btn btn-gold no-ring" data-wa={waMsg}><Icon name="whatsapp" size={18} />Réserver sur WhatsApp</button>
              <Link href="/calculator" className="link-arrow mt-16">Calculer un autre trajet →</Link>
            </div>
          </aside>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section fleet-section">
          <div className="wrap">
            <div className="head">
              <h2 className="huge">Autres véhicules à {l.cityFr}</h2>
              <p className="statement">Même service, même prix fixe : choisissez la taille du véhicule selon votre groupe et vos bagages.</p>
            </div>
            <div className="vehicle-grid">
              {others.map((o) => (
                <article key={o.slug} className="vehicle-card">
                  <Link href={`/fr/details/${o.slug}`} className="vehicle-img scene" style={{ backgroundImage: `url(${scene(o.modelKey)})` }} aria-label={o.model}>
                    <span className="vehicle-cat">{CAT_FR[o.category] ?? o.category}</span>
                  </Link>
                  <div className="vehicle-body">
                    <p className="vehicle-kicker">Chauffeur privé · {o.cityFr}</p>
                    <h3 className="vehicle-model"><Link href={`/fr/details/${o.slug}`}>{o.model}</Link></h3>
                    <ul className="vehicle-specs"><li><Icon name="users" size={14} />{o.passengers} passagers</li><li><Icon name="luggage" size={14} />{o.bags} bagages</li></ul>
                    <div className="vehicle-foot">
                      <div><span className="vehicle-from">À partir de</span><span className="vehicle-price">€{o.fromEur}</span></div>
                      <Link href={`/fr/details/${o.slug}`} className="btn btn-black">Voir</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
