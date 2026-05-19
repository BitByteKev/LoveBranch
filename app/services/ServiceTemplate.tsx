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
}

export function ServiceTemplate(props: ServicePageProps) {
  return (
    <>
      <section className="service-hero">
        <div className="wrap">
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
                  📞 Call (619) 330-0801
                </a>
                <Link href="#contact" className="btn btn-secondary">
                  Get Free Quote
                </Link>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      <section className="service-body-section">
        <div className="wrap">
          <div className="service-content">
            {props.intro.map((para, i) => (
              <p key={i} className="reveal">
                {para}
              </p>
            ))}

            <h2 className="reveal">What&apos;s included</h2>
            <ul>
              {props.whatsIncluded.map((item, i) => (
                <li key={i} className="reveal">
                  {item}
                </li>
              ))}
            </ul>

            {props.whyMatters.map((block, i) => (
              <div key={i}>
                <h2 className="reveal">{block.heading}</h2>
                <p className="reveal">{block.body}</p>
              </div>
            ))}

            <h2 className="reveal">Service areas across San Diego County</h2>
            <p className="reveal">
              We serve homeowners and property managers throughout the region. Same-day site visits
              for most of these cities:
            </p>
            <ul>
              {props.cities.map((c, i) => (
                <li key={i} className="reveal">
                  {c}
                </li>
              ))}
            </ul>

            {props.faq && props.faq.length > 0 && (
              <>
                <h2 className="reveal">Frequently asked questions</h2>
                {props.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="reveal" style={{ fontSize: "20px", marginTop: 24 }}>
                      {f.q}
                    </h3>
                    <p className="reveal">{f.a}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

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
