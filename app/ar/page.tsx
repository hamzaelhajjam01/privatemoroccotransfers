import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";
import HeroCarousel, { HeroLines } from "@/components/HeroCarousel";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Review } from "@/content/reviews";

export const metadata: Metadata = {
  title: { absolute: "سائق خاص وتوصيل VIP في المغرب — أسعار ثابتة ومضمونة | Private Morocco Transfers" },
  description: "خدمة سائق خاص وتوصيل فندقي ومطارات في المغرب بأسعار ثابتة ومؤكدة. استقبال بالمطارات، جولات سياحية بين المدن ورحلات صحراوية بسيارات فخمة وسائقين مرخصين. حجز فوري عبر واتساب.",
  alternates: {
    canonical: `${SITE_URL}/ar`,
    languages: {
      "ar": `${SITE_URL}/ar`,
      "en": `${SITE_URL}/`,
      "fr": `${SITE_URL}/fr`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "سائق خاص وتوصيل VIP في المغرب — أسعار ثابتة شاملة",
    description: "خدمات التوصيل الخاص الفاخر وسيارات مرسيدس بسائق خاص في المغرب من المطار إلى الصحراء.",
    url: `${SITE_URL}/ar`,
    siteName: SITE_NAME,
    locale: "ar_MA",
    type: "website",
  },
};

const ARABIC_SERVICES = [
  {
    title: "استقبال وتوصيل المطارات",
    text: "استقبال شخصي مع لوحة باسمكم في صالة الوصول بجميع مطارات المغرب (مراكش، كازابلانكا، طنجة، أكادير، فاس). متابعة مباشرة للرحلات و45 دقيقة انتظار مجاني.",
    meta: ["ابتداءً من 30€", "مراكش · كازا · طنجة · أكادير"],
    image: "/img/blog/airport-transfer.jpg",
    href: "/airport-transfers",
    cta: "تفاصيل توصيل المطارات",
  },
  {
    title: "تنقلات خاصة بين المدن",
    text: "من مراكش إلى الصويرة، من الدار البيضاء إلى فاس، من طنجة إلى شفشاون. سيارات حديثة ومريحة من الباب إلى الباب مع وقفات استراحة وتصوير حسب رغبتكم.",
    meta: ["سعر ثابت للسيارة بالكامل", "جميع مدن المغرب"],
    image: "/img/routes/marrakech-merzouga.jpg",
    href: "/city-to-city",
    cta: "عرض خطوط السير",
  },
  {
    title: "رحلات يومية خاصة",
    text: "وادي أوريكا، شلالات أوزود، صحراء أكافاي، أو جبال الأطلس الكبير: يوم كامل مع سائقكم الخاص المخصص لكم ولعائلتكم مع العودة للفندق مساءً.",
    meta: ["من مراكش، فاس، أكادير", "يوم كامل خاص"],
    image: "/img/blog/day-trips.jpg",
    href: "/day-trips",
    cta: "استكشف الرحلات اليومية",
  },
  {
    title: "جولات وسياحة صحراوية VIP",
    text: "برامج 3 أو 5 أو 7 أيام مع نفس السائق والمركبة الفاخرة: كثبان مرزوكة، القرى التاريخية وقصور الأطلس.",
    meta: ["3 · 5 · 7 أيام", "برامج مخصصة بالكامل"],
    image: "/img/fleet-scenes/toyota-prado.jpg",
    href: "/transfers",
    cta: "عرض البرامج الخاصة",
  },
];

const ARABIC_REVIEWS: Review[] = [
  {
    name: "عبد العزيز آل سعود",
    country: "المملكة العربية السعودية",
    rating: 5,
    route: "مطار كازا → مراكش (فان مرسيدس)",
    text: "خدمة راقية جداً والتزام تام بالمواعيد. السائق كان في انتظارنا بالمطار بسيارة مرسيدس فيتو مريحة ونظيفة، وتعامل بأعلى درجات الأدب والاحترافية.",
  },
  {
    name: "خالد المنصوري",
    country: "الإمارات العربية المتحدة",
    rating: 5,
    route: "جولة عائلية 5 أيام (مراكش - الصحراء)",
    text: "تجربة ممتازة للعائلة. السيارة مكيفة ومريحة والسائق ذو خبرة ممتازة بطرق الأطلس. السعر كان ثابتاً تماماً كما تم الاتفاق عليه عبر الواتساب بدون أي زيادات.",
  },
];

export default function ArabicHomePage() {
  return (
    <div dir="rtl" style={{ fontFamily: "inherit" }}>
      <HeroCarousel>
        <div className="wrap hero-wrap">
          <div className="hero-head">
            <HeroLines />
            <p className="hero-sub">
              {"خدمة سائق خاص وتوصيل فاخر في المغرب. أسعار ثابتة ومضمونة، سائقون محترفون ومرخصون، وبدون أي عربون مسبق للرحلات الأقل من 300 يورو."}
            </p>
          </div>
          <div className="hero-booking">
            <form id="heroBookingForm" className="booking-card">
              <div className="booking-fields">
                <div className="booking-field">
                  <label htmlFor="bk-from">{"نقطة الانطلاق"}</label>
                  <input
                    id="bk-from"
                    name="from"
                    type="text"
                    required
                    placeholder="مثال: مطار مراكش، الفندق..."
                    autoComplete="off"
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-to">{"الوجهة"}</label>
                  <input
                    id="bk-to"
                    name="to"
                    type="text"
                    required
                    placeholder="مثال: الصويرة، كازابلانكا، أكادير..."
                    autoComplete="off"
                  />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-date">{"التاريخ"}</label>
                  <input id="bk-date" name="date" type="date" />
                </div>
                <div className="booking-field">
                  <label htmlFor="bk-passengers">{"عدد الركاب"}</label>
                  <select id="bk-passengers" name="passengers" defaultValue="2">
                    <option value="1">{"راكب واحد"}</option>
                    <option value="2">{"راكبان"}</option>
                    <option value="3">{"3 ركاب"}</option>
                    <option value="4">{"4 ركاب"}</option>
                    <option value="5-7">{"5 إلى 7 ركاب (فان عائلي)"}</option>
                    <option value="8+">{"8 ركاب فأكثر (ميني باص)"}</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-gold btn-lg no-ring"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {"الحصول على سعر ثابت فوري"}
              </button>
            </form>
          </div>
          <div className="hero-stats">
            <div>
              <b>{"150+"}</b>
              <span>{"خط سير ومدينة بالمغرب"}</span>
            </div>
            <div>
              <b>{"100%"}</b>
              <span>{"أسعار ثابتة شاملة بالكامل"}</span>
            </div>
            <div>
              <b>{"0%"}</b>
              <span>{"عربون مسبق تحت 300€"}</span>
            </div>
          </div>
        </div>
      </HeroCarousel>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>مراكش<i>—</i></span><span>الصويرة<i>—</i></span><span>أكادير<i>—</i></span><span>الدار البيضاء<i>—</i></span><span>الرباط<i>—</i></span><span>فاس<i>—</i></span><span>طنجة<i>—</i></span><span>مرزوكة<i>—</i></span><span>مراكش<i>—</i></span><span>الصويرة<i>—</i></span><span>أكادير<i>—</i></span><span>الدار البيضاء<i>—</i></span><span>الرباط<i>—</i></span><span>فاس<i>—</i></span><span>طنجة<i>—</i></span><span>مرزوكة<i>—</i></span>
        </div>
      </section>

      <section className="section dark purpose">
        <div className="wrap">
          <div className="purpose-top">
            <div className="purpose-title">
              <h2 className="huge">{"نسافر بكم في أرجاء المغرب بأعلى معايير الراحة والأمان"}</h2>
              <Link href="/transfers" className="btn btn-white">
                {"دليل الأسعار والمسارات"}
              </Link>
            </div>
            <div
              className="ph purpose-photo"
              role="img"
              aria-label="سيارة توصيل فاخرة في المغرب"
              style={{ backgroundImage: "url(/img/routes/marrakech-agadir.jpg)" }}
            ></div>
          </div>
          <div className="split">
            <p className="statement">
              {"الرحلة المميزة هي التي تسير بكل هدوء واطمئنان: السائق بانتظاركم في الموعد تماماً، والسيارة باردة ونظيفة، والسعر المتفق عليه هو ذاته دون أي زيادة."}
            </p>
            <p className="statement muted">
              {"جميع سائقينا مرخصون ومؤمنون رسمياً لدى وزارة النقل السياحي، ويتحدثون العربية والفرنسية والإنجليزية بطلاقة."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"أشهر المسارات والتنقلات"}</h2>
            <p className="statement">
              {"أسعار ثابتة للمركبة بالكامل (صالون مريح لغاية 3 أشخاص). تتوفر سيارات فان وميني باص للمجموعات والعائلات."}
            </p>
          </div>
          <div className="route-table">
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"مطار مراكش المنارة ← الفندق / المدينة"}
                </Link>
              </span>
              <span className="muted">{"6 كم"}</span>
              <span className="muted">{"15 دقيقة"}</span>
              <span>{"€30 (330 درهم)"}</span>
              <Link href="/transfers/marrakech-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"التفاصيل"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/marrakech-to-essaouira" style={{ color: "inherit", textDecoration: "none" }}>
                  {"مراكش ← الصويرة"}
                </Link>
              </span>
              <span className="muted">{"180 كم"}</span>
              <span className="muted">{"2.5 ساعة"}</span>
              <span>{"€90 (980 درهم)"}</span>
              <Link href="/transfers/marrakech-to-essaouira" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"التفاصيل"}
              </Link>
            </div>
            <div className="route-tr">
              <span>
                <Link href="/transfers/casablanca-airport-to-marrakech" style={{ color: "inherit", textDecoration: "none" }}>
                  {"مطار كازابلانكا (محمد الخامس) ← مراكش"}
                </Link>
              </span>
              <span className="muted">{"220 كم"}</span>
              <span className="muted">{"2.5 ساعة"}</span>
              <span>{"€150 (1,650 درهم)"}</span>
              <Link href="/transfers/casablanca-airport-to-marrakech" className="btn btn-black" style={{ minWidth: "0", padding: "8px 16px", fontSize: "14px" }}>
                {"التفاصيل"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="head">
            <h2 className="huge">{"خدماتنا في المغرب"}</h2>
            <p className="statement">{"حلول نقل وتوصيل راقية تناسب كافة متطلباتكم."}</p>
          </div>
          <ServicesCarousel items={ARABIC_SERVICES} />
        </div>
      </section>

      <Fleet />

      <Reviews items={ARABIC_REVIEWS} />

      <section className="cta-band">
        <div className="container">
          <h2 className="heading-xl">{"احجز سائقك الخاص الآن في المغرب"}</h2>
          <p>{"تأكيد فوري عبر واتساب. الدفع نقداً عند الوصول وبدون أي عربون للرحلات تحت 300 يورو."}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/212760426269?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85!%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%AE%D8%A7%D8%B5%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8.%20%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%83%D9%85%20%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D9%81%D8%B1%D8%9F"
              target="_blank"
              rel="noopener"
              className="btn btn-gold btn-lg no-ring"
            >
              {"احجز عبر واتساب"}
            </a>
            <Link href="/transfers" className="btn btn-outline-white btn-lg">
              {"عرض جميع المسارات"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
