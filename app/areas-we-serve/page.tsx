import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../components/CTASection";

export const metadata: Metadata = {
  title: "Areas We Serve — San Diego County Tree & Yard Service",
  description:
    "Love Branch serves all of San Diego County: Chula Vista, Poway, El Cajon, La Mesa, Carlsbad, Escondido, Encinitas, Oceanside, and more. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/areas-we-serve" },
};

const areas = [
  { city: "San Diego", note: "Downtown, North Park, Pacific Beach, Mira Mesa" },
  { city: "Chula Vista", note: "Eastlake, Rancho del Rey, Bonita" },
  { city: "Poway", note: "Green Valley, Old Coach, Rancho Arbolitos" },
  { city: "El Cajon", note: "Fletcher Hills, Granite Hills, Bostonia" },
  { city: "La Mesa", note: "Mt. Helix, Fletcher Hills, La Mesa Village" },
  { city: "Carlsbad", note: "La Costa, Aviara, Olde Carlsbad" },
  { city: "Escondido", note: "Hidden Meadows, Rancho San Pasqual" },
  { city: "Encinitas", note: "Leucadia, Olivenhain, Cardiff" },
  { city: "Oceanside", note: "South O, Fire Mountain, Whelan Ranch" },
  { city: "Santee", note: "Lakeside-adjacent, Carlton Hills" },
  { city: "National City", note: "Eastside, Lincoln Acres" },
  { city: "Coronado", note: "Coronado Village, Coronado Cays" },
  { city: "Lakeside", note: "Eucalyptus Hills, Winter Gardens" },
  { city: "Spring Valley", note: "Casa de Oro, Rancho San Diego" },
  { city: "Rancho Bernardo", note: "Bernardo Heights, Westwood" },
  { city: "Alpine", note: "South Grade, Glen Lakes" },
  { city: "Jamul", note: "Jamul Highlands, Lawson Valley" },
  { city: "Bonita", note: "Sunnyside, Bonita Long Canyon" },
  { city: "Imperial Beach", note: "Seacoast, Palm Avenue" },
  { city: "Lemon Grove", note: "All neighborhoods" },
];

export default function Page() {
  return (
    <>
      <section className="service-hero">
        <div className="wrap">
          <div style={{ maxWidth: 760 }}>
            <span className="eyebrow hero-eyebrow">
              <span className="dot"></span>
              All San Diego County
            </span>
            <h1 className="reveal">Tree &amp; yard service across San Diego County</h1>
            <p className="lede reveal delay-1">
              We serve homeowners, HOAs, and property managers throughout the county — from coastal
              Carlsbad and Encinitas down to Chula Vista and Imperial Beach, and east to Alpine and
              Jamul. Same-day quotes in most of these ZIP codes.
            </p>
            <div className="hero-ctas reveal delay-2">
              <a href="tel:6193300801" className="btn btn-primary">
                📞 Call (619) 330-0801
              </a>
              <Link href="/#services" className="btn btn-secondary">
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-body-section">
        <div className="wrap">
          <div className="areas-grid">
            {areas.map((a, i) => (
              <div key={a.city} className={`area-card reveal delay-${(i % 4) + 1}`}>
                <strong>{a.city}</strong>
                <span>{a.note}</span>
              </div>
            ))}
          </div>

          <div className="service-content" style={{ marginTop: 64 }}>
            <h2 className="reveal">Don&apos;t see your city?</h2>
            <p className="reveal">
              We serve all of San Diego County, including unincorporated areas. If your address is
              within the county line, we&apos;ll come quote. Call <a href="tel:6193300801">(619) 330-0801</a>
              {" "}or use the quote form on the homepage.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
