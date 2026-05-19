import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Hardscaping & Ground Cover in San Diego",
  description:
    "Pavers, mulch, decomposed granite, and rock installation across San Diego County. Built to last in coastal and inland soil. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/hardscaping" },
};

const schema = buildServiceSchema({
  name: "Hardscaping & Ground Cover",
  description: "Pavers, mulch, rock, and decomposed granite installation across San Diego County.",
  slug: "hardscaping",
  image: "/images/hardscaping.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Hardscaping"
        h1="Hardscaping & Ground Cover in San Diego"
        lede="Walkways, patios, mulch beds, and rock ground cover. We design with San Diego’s soil and slopes in mind, and we build so it’s still flat five years from now."
        heroImg="/images/hardscaping.jpg"
        heroAlt="Paver patio with decomposed granite and drought-tolerant plants in San Diego"
        intro={[
          "A walkway settled into ruts a year after install isn’t a hardscape — it’s a hazard. We prep base correctly (compacted Class II, proper depth, polymeric sand on pavers) so the surface stays where you want it.",
          "We work with pavers, flagstone, decomposed granite, bark mulch, lava rock, and decorative aggregate. Whether you’re replacing a thirsty lawn or rebuilding a patio, we’ll spec the right material for the spot.",
        ]}
        whatsIncluded={[
          "Paver and flagstone patios and walkways",
          "Decomposed granite paths and patios",
          "Mulch and bark installation with weed barrier",
          "Decorative rock and aggregate ground cover",
          "Edging — steel, plastic, and natural stone",
          "Drainage and grading included with every install",
        ]}
        whyMatters={[
          {
            heading: "Why ground cover beats lawn for many San Diego yards",
            body: "Water bills, drought restrictions, and maintenance time all push toward low-water ground cover. A mulched or rocked bed with the right plants can cut your water use 70%+ versus a lawn — and you don’t mow it.",
          },
          {
            heading: "Built-in drainage planning",
            body: "Heavy winter rains can wash out a hardscape that wasn’t graded right. Every install includes a drainage plan — proper pitch, French drains where needed, and curbing to keep water moving.",
          },
        ]}
        cities={[
          "Hardscaping Chula Vista",
          "Pavers Poway",
          "Ground cover El Cajon",
          "Hardscape La Mesa",
          "Pavers Carlsbad",
          "Decomposed granite Escondido",
          "Hardscaping Encinitas",
          "Mulch installation Oceanside",
          "Pavers Santee",
          "Ground cover National City",
          "Hardscape Coronado",
          "Pavers Rancho Bernardo",
        ]}
      />
    </>
  );
}
