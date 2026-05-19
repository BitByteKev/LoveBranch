import Link from "next/link";
import Image from "next/image";
import { CTASection } from "./components/CTASection";


const services = [
  {
    slug: "tree-removal",
    icon: "🌳",
    title: "Tree Removal & Trimming",
    blurb: "Safe removal, expert shaping, and full pruning. We haul every branch and leave the site spotless.",
    cta: "Get free assessment",
    img: "/images/tree-removal.jpg",
    alt: "Arborist removing a large tree branch in a San Diego yard",
  },
  {
    slug: "hedge-palm-care",
    icon: "🌿",
    title: "Hedge & Palm Care",
    blurb: "Sharp, defined hedges and clean, healthy palms. We shape them the way your property deserves.",
    cta: "Book service",
    img: "/images/hedge-palm.avif",
    alt: "Freshly trimmed palm trees and sculpted hedges in a Southern California yard",
  },
  {
    slug: "hillside-fire-clearing",
    icon: "🔥",
    title: "Hillside Fire Clearing",
    blurb: "HOA, insurance, and fire department compliance. We document everything so you're covered.",
    cta: "Ensure compliance",
    img: "/images/hillside-clearing.jpg",
    alt: "Cleared San Diego hillside reduced for wildfire defensible space compliance",
  },
  {
    slug: "weed-abatement",
    icon: "🌾",
    title: "Weed Abatement & Spraying",
    blurb: "Reclaim your yard from invasive weeds with full abatement and targeted treatment plans.",
    cta: "Schedule treatment",
    img: "/images/weed-abatement.avif",
    alt: "Crew clearing overgrown weeds from a San Diego property line",
  },
  {
    slug: "lawn-care",
    icon: "✂️",
    title: "Lawn Care & Maintenance",
    blurb: "Mowing, edging, fertilization, aeration. Weekly, bi-weekly, or one-time — your call.",
    cta: "Start service",
    img: "/images/lawn-care.jpg",
    alt: "Manicured green lawn with crisp edging in a San Diego front yard",
  },
  {
    slug: "hardscaping",
    icon: "🪨",
    title: "Hardscaping & Ground Cover",
    blurb: "Pavers, mulch, rock, decomposed granite. Designed and installed to last.",
    cta: "Design your yard",
    img: "/images/hardscaping.jpg",
    alt: "Paver walkway with decomposed granite and drought-tolerant ground cover",
  },
  {
    slug: "turf-sod-installation",
    icon: "🟢",
    title: "Turf & Sod Installation",
    blurb: "Premium artificial turf or fresh sod — green yard, no headaches, lasts for years.",
    cta: "Get install quote",
    img: "/images/turf-sod.jpg",
    alt: "Newly installed turf in a San Diego backyard",
  },
  {
    slug: "fence-installation",
    icon: "🪵",
    title: "Fence Installation",
    blurb: "Wood, vinyl, and chain-link. Built solid, finished clean, and we haul the old fence away.",
    cta: "Get fence estimate",
    img: "/images/fence.jpg",
    alt: "New wood privacy fence installed along a San Diego backyard",
  },
  {
    slug: "junk-hauling",
    icon: "🚛",
    title: "Junk Hauling & Debris",
    blurb: "Done with the yard? We'll take the green waste, the old fence, the whole load — gone same day.",
    cta: "Schedule pickup",
    img: "/images/junk-hauling.jpg",
    alt: "Loaded truck of green waste and yard debris ready for hauling",
  },
];

const testimonials = [
  {
    initial: "M",
    name: "Maria L.",
    city: "Chula Vista",
    text: "Two huge eucalyptus trees gone in a single day. They cleaned up everything and the price came in under what three other companies quoted. Easy call.",
  },
  {
    initial: "D",
    name: "David R.",
    city: "La Mesa",
    text: "Hillside got flagged by my insurance — Love Branch came out the next morning, cleared it, and gave me the documentation I needed. Saved my policy.",
  },
  {
    initial: "S",
    name: "Sarah K.",
    city: "North Park",
    text: "Got a full turf install + new fence in one week. Crew was professional, on time every day, and the final result looks like a magazine yard. Hire them.",
  },
];

export default function Home() {
  return (
    <>
      <header className="hero hero-editorial">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-leaf hero-leaf-1" />
          <span className="hero-leaf hero-leaf-2" />
          <span className="hero-leaf hero-leaf-3" />
          <span className="hero-grain" />
        </div>

        <div className="wrap">
          <div className="hero-grid hero-grid-split">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                <span className="dot"></span>
                Available this week · San Diego County
              </span>
              <h1 className="reveal">
                San Diego&apos;s most <em>trusted</em> tree &amp; yard team.
              </h1>
              <p className="lede reveal delay-1">
                Family-run since the &apos;90s. From routine trimming to full hillside fire clearing —
                we show up on time, work clean, and beat any written quote.
              </p>

              <ul className="hero-guarantees reveal delay-2">
                <li>
                  <span className="hero-check" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12">
                      <path d="M3 8l3.2 3L13 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Quote back within 2 hours
                </li>
                <li>
                  <span className="hero-check" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12">
                      <path d="M3 8l3.2 3L13 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  We beat any written price
                </li>
                <li>
                  <span className="hero-check" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12">
                      <path d="M3 8l3.2 3L13 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Yard left spotless, every job
                </li>
              </ul>

              <div className="hero-ctas reveal delay-3">
                <a href="tel:6193300801" className="btn btn-primary">
                  <span aria-hidden="true">📞</span>
                  Call (619) 330-0801
                </a>
                <Link href="/quote" className="btn btn-secondary">
                  Get free quote →
                </Link>
              </div>

              <div className="hero-proof reveal delay-4">
                <div className="hero-rating">
                  <div className="stars" aria-hidden="true">★★★★★</div>
                  <div className="proof-text">
                    <strong>5.0</strong> · 150+ Google reviews
                  </div>
                </div>
                <span className="hero-proof-rule" aria-hidden="true" />
                <div className="hero-license">
                  <span className="hero-license-label">California Contractor</span>
                  <span className="hero-license-num">CSLB&nbsp;#1146955</span>
                </div>
              </div>
            </div>

            <aside className="hero-visual hero-visual-card reveal delay-2" aria-hidden="true">
              <Image
                src="/images/before-after.avif"
                alt=""
                width={820}
                height={1025}
                priority
                sizes="(max-width: 880px) 100vw, 520px"
              />
              <div className="hero-photo-shade" />

              <div className="hero-stamp" role="img" aria-label="Licensed, insured, bonded — CSLB 1146955">
                <div className="hero-stamp-ring">
                  <span className="hero-stamp-mark">★</span>
                  <span className="hero-stamp-title">Licensed</span>
                  <span className="hero-stamp-title">Insured</span>
                  <span className="hero-stamp-title">Bonded</span>
                  <span className="hero-stamp-num">#1146955</span>
                </div>
              </div>

              <div className="hero-availability">
                <span className="dot" aria-hidden="true"></span>
                <div className="hero-availability-text">
                  <strong>Crew available this week</strong>
                  <small>Quotes back in ~2 hrs</small>
                </div>
              </div>

              <div className="hero-clients">
                <span className="hero-clients-label">Trusted by</span>
                <span className="hero-clients-list">
                  U.S. Naval Hospital · AT&amp;T · Wyndham Hotels
                </span>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <section className="creds">
        <div className="wrap">
          <div className="creds-grid">
            <div className="cred-item reveal">
              <div className="cred-icon">🏆</div>
              <strong>5.0 Rating</strong>
              <span>150+ Google reviews</span>
            </div>
            <div className="cred-item reveal delay-1">
              <div className="cred-icon">🛡️</div>
              <strong>Fully Insured</strong>
              <span>Bonded &amp; licensed</span>
            </div>
            <div className="cred-item reveal delay-2">
              <div className="cred-icon">👥</div>
              <strong>2,000+ Customers</strong>
              <span>Served countywide</span>
            </div>
            <div className="cred-item reveal delay-3">
              <div className="cred-icon">🕐</div>
              <strong>Open 24/7</strong>
              <span>Emergency response</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block services" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2 className="reveal">
              Complete <em>tree &amp; yard care</em> under one roof.
            </h2>
            <p className="reveal delay-1">
              One call handles it all — from a single overgrown palm to a full hillside fire clearance.
              No subcontractors, no surprises.
            </p>
          </div>

          <div className="service-grid">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className={`service reveal delay-${(i % 4) + 1}`}
              >
                <div className="service-photo">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    width={520}
                    height={325}
                    sizes="(max-width: 580px) 100vw, (max-width: 880px) 50vw, 33vw"
                  />
                </div>
                <div className="service-body">
                  <div className="service-icon" aria-hidden="true">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <Link href={`/services/${s.slug}`} className="service-link">
                    {s.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="wrap">
          <div className="offer-inner">
            <div className="reveal">
              <span className="offer-tag">First-Time Customer</span>
              <h2>
                <span className="amount">$100 OFF</span> your first service.
              </h2>
              <p>
                New San Diego customers get $100 off any job over $500. Just mention this offer when
                you call or fill out the form.
              </p>
            </div>
            <Link href="#contact" className="btn btn-primary reveal delay-1">
              Claim My Discount
            </Link>
          </div>
        </div>
      </section>

      <section className="block why" id="why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Love Branch</span>
            <h2 className="reveal">
              What you actually <em>get</em> when you hire us.
            </h2>
            <p className="reveal delay-1">
              Every San Diego company says they&apos;re the best. Here&apos;s how we prove it.
            </p>
          </div>

          <div className="why-grid">
            {[
              { n: 1, h: "Fast Quote", p: "Most quotes back within 2 hours. Same-day site visits available." },
              { n: 2, h: "Beat Any Price", p: "Show us a written quote — we'll beat it. No fine print." },
              { n: 3, h: "Clean Worksite", p: "We haul every branch, leaf, and chip. Your yard looks better than before." },
              { n: 4, h: "Fully Covered", p: "Licensed, bonded, insured. If anything goes wrong, you're protected." },
            ].map((item, i) => (
              <div key={item.n} className={`why-item reveal delay-${i + 1}`}>
                <div className="why-num">{item.n}</div>
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block testimonials" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">★★★★★ 150+ Reviews</span>
            <h2 className="reveal">
              What San Diego <em>says about us</em>.
            </h2>
          </div>

          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`test-card reveal delay-${i + 1}`}>
                <div className="test-quote" aria-hidden="true">&ldquo;</div>
                <div className="test-stars" aria-label="Five stars">★★★★★</div>
                <p className="test-text">{t.text}</p>
                <div className="test-person">
                  <div className="test-avatar" aria-hidden="true">{t.initial}</div>
                  <div className="test-info">
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
