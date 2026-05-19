import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";

export interface ServicePageProps {
  title: string;
  h1: string;
  lede: string;
  heroImg: string;
  heroAlt: string;
  intro: string[];
  whatsIncluded: string[];
  whyMatters: { heading: string; body: string }[];
  cities: string[];
  faq?: { q: string; a: string }[];
  process?: { label: string; body: string }[];
}

const DEFAULT_PROCESS: { label: string; body: string }[] = [
  {
    label: "You call or send the form",
    body: "We answer live during the day and most evenings. Quotes back the same day, usually within two hours.",
  },
  {
    label: "Free on-site walk-through",
    body: "We come out, look at the actual work, and give you a fixed written quote — no surprise fees later.",
  },
  {
    label: "Scheduled within the week",
    body: "Most jobs are on the calendar within 3–7 days. Emergency work is usually same-day or next-day.",
  },
  {
    label: "Crew works, then cleans",
    body: "Our team handles the job and hauls every branch, chip, and bag. You come home to a finished yard.",
  },
];

export function ServiceTemplate(props: ServicePageProps) {
  const process = props.process ?? DEFAULT_PROCESS;
  const featured = props.whyMatters[0];
  const rest = props.whyMatters.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="service-hero service-hero-editorial">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Love Branch</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{props.title}</span>
          </nav>

          <div className="service-hero-grid">
            <div>
              <span className="eyebrow hero-eyebrow">
                <span className="dot"></span>
                Serving all of San Diego County
              </span>
              <h1 className="reveal">{props.h1}</h1>
              <p className="lede reveal delay-1">{props.lede}</p>
              <div className="hero-ctas reveal delay-2">
                <a href="tel:6193300801" className="btn btn-primary">
                  <span aria-hidden="true">📞</span>
                  Call (619) 330-0801
                </a>
                <Link href="/quote" className="btn btn-secondary">
                  Get free quote →
                </Link>
              </div>

              <ul className="service-hero-tags reveal delay-3">
                <li>Licensed CSLB&nbsp;#1146955</li>
                <li>Fully insured &amp; bonded</li>
                <li>★★★★★ 150+ reviews</li>
              </ul>
            </div>

            <div className="service-hero-photo reveal delay-1">
              <Image
                src={props.heroImg}
                alt={props.heroAlt}
                width={720}
                height={540}
                priority
                sizes="(max-width: 880px) 100vw, 540px"
              />
              <span className="service-hero-tape" aria-hidden="true">
                Field Service · San Diego County
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="service-stats">
        <div className="wrap">
          <dl className="service-stats-grid">
            <div className="service-stat reveal">
              <dt>~2 hrs</dt>
              <dd>Average quote turnaround</dd>
            </div>
            <div className="service-stat reveal delay-1">
              <dt>5.0 ★</dt>
              <dd>From 150+ Google reviews</dd>
            </div>
            <div className="service-stat reveal delay-2">
              <dt>2,000+</dt>
              <dd>San Diego jobs completed</dd>
            </div>
            <div className="service-stat reveal delay-3">
              <dt>$100 off</dt>
              <dd>First job over $500</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* INTRO + INCLUDED */}
      <section className="service-body-section">
        <div className="wrap">
          <div className="service-content">
            <span className="section-kicker reveal">The work</span>
            <h2 className="reveal service-section-h">
              What you get when you book&nbsp;<em>{props.title.toLowerCase()}</em>
            </h2>

            {props.intro.map((para, i) => (
              <p key={i} className="reveal service-lede-p">
                {para}
              </p>
            ))}

            <div className="service-included-grid">
              {props.whatsIncluded.map((item, i) => (
                <div key={i} className={`service-included reveal delay-${(i % 4) + 1}`}>
                  <span className="service-included-mark" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path d="M3 8l3.2 3L13 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="service-process">
        <div className="wrap">
          <div className="service-process-head">
            <span className="section-kicker reveal">How it works</span>
            <h2 className="reveal">
              From phone call to <em>finished yard</em>.
            </h2>
          </div>

          <ol className="service-process-steps">
            {process.map((step, i) => (
              <li key={i} className={`service-step reveal delay-${(i % 4) + 1}`}>
                <span className="service-step-num">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      {featured && (
        <section className="service-why">
          <div className="wrap">
            <div className="service-why-grid">
              <div className="service-why-pull">
                <span className="section-kicker on-dark reveal">Why it matters</span>
                <h2 className="reveal">
                  <em>{featured.heading}</em>
                </h2>
                <p className="reveal delay-1">{featured.body}</p>
              </div>

              {rest.length > 0 && (
                <div className="service-why-rest">
                  {rest.map((block, i) => (
                    <div key={i} className={`service-why-card reveal delay-${i + 1}`}>
                      <h3>{block.heading}</h3>
                      <p>{block.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CITIES */}
      <section className="service-cities">
        <div className="wrap">
          <div className="service-cities-head">
            <span className="section-kicker reveal">Where we work</span>
            <h2 className="reveal">
              Service areas across <em>San Diego County</em>.
            </h2>
            <p className="reveal delay-1">
              Same-day site visits for most of these cities. Anywhere in the county — give us a call.
            </p>
          </div>

          <ul className="city-chips">
            {props.cities.map((c, i) => (
              <li key={i} className={`city-chip reveal delay-${(i % 4) + 1}`}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      {props.faq && props.faq.length > 0 && (
        <section className="service-faq">
          <div className="wrap service-faq-wrap">
            <div className="service-faq-head">
              <span className="section-kicker reveal">FAQ</span>
              <h2 className="reveal">
                Common <em>questions</em>.
              </h2>
            </div>
            <div className="faq-list">
              {props.faq.map((f, i) => (
                <details key={i} className={`faq-item reveal delay-${(i % 4) + 1}`}>
                  <summary>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg viewBox="0 0 12 12" width="14" height="14">
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

export function buildServiceSchema(props: {
  name: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    url: `https://lovebranchsd.com/services/${props.slug}`,
    image: `https://lovebranchsd.com${props.image}`,
    provider: { "@id": "https://lovebranchsd.com/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "San Diego County, CA" },
    serviceType: props.name,
  };
}
