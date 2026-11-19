import Icon from "./Icon";
import { REVIEWS, type Review } from "@/content/reviews";

function Avatar({ r, size = 48 }: { r: Review; size?: number }) {
  if (r.photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="rev-avatar" src={r.photo} alt="" width={size} height={size} style={{ width: size, height: size }} loading="lazy" />;
  }
  return <span className="rev-avatar rev-initial" style={{ width: size, height: size }} aria-hidden="true">{r.name.charAt(0)}</span>;
}

function Stars({ n }: { n: number }) {
  return (
    <span className="rev-stars" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={15} className={i < n ? "on" : "off"} />)}
    </span>
  );
}

function Who({ r }: { r: Review }) {
  return (
    <div className="rev-who">
      <Avatar r={r} />
      <div>
        <strong>{r.name}</strong>
        {(r.country || r.route) && <span>{[r.country, r.route].filter(Boolean).join(" · ")}</span>}
      </div>
      {r.source === "Google" && (
        r.url
          ? <a href={r.url} target="_blank" rel="noopener" className="rev-source" aria-label="Read on Google"><Icon name="google" size={18} /></a>
          : <span className="rev-source"><Icon name="google" size={18} title="Google review" /></span>
      )}
    </div>
  );
}

export default function Reviews({ items = REVIEWS }: { items?: Review[] }) {
  const [main, ...rest] = items;
  return (
    <section className="section dark reviews">
      <div className="wrap">
        <div className="rev-feature">
          <div className="rev-feature-text">
            <Stars n={main.rating} />
            <p className={`quote-main mt-24${main.text.length > 160 ? " long" : ""}`}>“{main.text}”</p>
            {main.translatedFrom && <p className="rev-translated">{main.translatedFrom}</p>}
            <Who r={main} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rev-feature-img"
            src="/img/reviews-group-airport.webp"
            alt="A group of travelers with their PMT driver beside a black van at the airport"
            width={1400}
            height={1050}
            loading="lazy"
          />
        </div>
        <div className={`quote-grid n${rest.length}`}>
          {rest.map((r) => (
            <div key={r.name}>
              <Stars n={r.rating} />
              <p>“{r.text}”</p>
              {r.translatedFrom && <p className="rev-translated">{r.translatedFrom}</p>}
              <Who r={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
