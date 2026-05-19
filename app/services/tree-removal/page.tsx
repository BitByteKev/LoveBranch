import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Tree Removal & Trimming in San Diego — Licensed Arborists",
  description:
    "Same-week tree removal and trimming across San Diego County. Licensed CSLB #1146955, fully insured, full debris haul-off. Free quote: (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/tree-removal" },
};

const schema = buildServiceSchema({
  name: "Tree Removal & Trimming",
  description:
    "Professional tree removal, trimming, and pruning across San Diego County. Licensed, insured, and fully cleaned up.",
  slug: "tree-removal",
  image: "/images/tree-removal.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Tree Removal"
        h1="Tree Removal & Trimming in San Diego"
        lede="Dangerous removals, routine trimming, stump grinding, and full debris haul-off. Licensed CSLB #1146955, fully insured, and known for leaving the worksite cleaner than we found it."
        heroImg="/images/tree-removal.jpg"
        heroAlt="Love Branch arborist removing a large eucalyptus tree in a San Diego backyard"
        intro={[
          "Whether it’s a single overgrown palm leaning over your roofline or a row of mature eucalyptus that needs to come down, our crew has the gear, the certifications, and the insurance to take it on safely.",
          "We climb, rig, and section trees in tight spots where a crane truck can’t reach. We also handle straight-up removals with bucket trucks for larger jobs. Either way, the chips, branches, and stumps leave with us.",
        ]}
        whatsIncluded={[
          "Full removal with stump grinding (optional)",
          "Crown thinning, raising, and clearance pruning",
          "Dead-wooding and storm damage cleanup",
          "Hazard tree assessment and risk reduction",
          "Chipping and full debris haul-off — yard left spotless",
          "Permit guidance for protected trees and HOA requirements",
        ]}
        whyMatters={[
          {
            heading: "Why use a licensed tree service in San Diego",
            body: "Tree work is one of the most dangerous trades in the country. Hiring an unlicensed or uninsured crew puts you on the hook if something falls the wrong way. We carry full general liability and workers’ comp — you won’t see that paperwork on a Craigslist quote.",
          },
          {
            heading: "When tree removal is the right call",
            body: "Lean angle past 15°, root rot, large dead limbs over structures, and species like blue gum eucalyptus near homes are common reasons to remove rather than trim. We give you an honest assessment — if a tree can be saved with proper pruning, we’ll say so.",
          },
        ]}
        cities={[
          "Tree removal Chula Vista",
          "Tree trimming Poway",
          "Tree service El Cajon",
          "Tree removal La Mesa",
          "Tree trimming Carlsbad",
          "Tree service Escondido",
          "Tree removal Encinitas",
          "Tree service Oceanside",
          "Tree removal Santee",
          "Tree service National City",
          "Tree removal Coronado",
          "Tree service Lakeside",
        ]}
        faq={[
          {
            q: "How fast can you remove a tree?",
            a: "Most non-emergency removals are scheduled within 5–7 days of the free quote. Emergency storm-damage and hazard work is usually same-day or next-day.",
          },
          {
            q: "Do I need a permit to remove a tree in San Diego?",
            a: "Most private-property removals don’t require a permit, but heritage trees, HOA-protected species, and street trees do. We handle the paperwork and guide you through it.",
          },
          {
            q: "Will you haul away the wood?",
            a: "Yes — full debris haul-off is included in every quote unless you want the wood for firewood, mulch, or milling. Tell us in advance and we’ll stack it instead.",
          },
        ]}
      />
    </>
  );
}
