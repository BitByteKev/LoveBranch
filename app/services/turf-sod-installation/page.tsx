import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Artificial Turf & Sod Installation in San Diego",
  description:
    "Premium artificial turf and fresh sod installation across San Diego County. Proper base prep, real warranties. Free quote: (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/turf-sod-installation" },
};

const schema = buildServiceSchema({
  name: "Turf & Sod Installation",
  description: "Artificial turf and sod installation across San Diego County.",
  slug: "turf-sod-installation",
  image: "/images/turf-sod.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Turf & Sod"
        h1="Turf & Sod Installation in San Diego"
        lede="Premium artificial turf or fresh sod, installed on a properly compacted base with the right drainage. Green yard year-round."
        heroImg="/images/turf-sod.jpg"
        heroAlt="Newly installed artificial turf lawn in a San Diego backyard"
        intro={[
          "Turf and sod installs fail or thrive based on what’s under them. We spend more time on base prep than on the green layer — Class II base, compaction to 95%, weed barrier, proper drainage. That’s why ours lasts.",
          "We install both real sod (tall fescue, bermuda, St. Augustine, marathon) and premium artificial turf with realistic pile heights and shade variation. Pet-friendly options available.",
        ]}
        whatsIncluded={[
          "Removal and haul-off of existing lawn or surface",
          "Grading, base prep, and compaction",
          "Weed barrier and edging",
          "Sod or turf installation with seam work",
          "Infill for artificial turf (silica or anti-bacterial)",
          "Manufacturer warranty registration on synthetic products",
        ]}
        whyMatters={[
          {
            heading: "Real sod vs. artificial turf in San Diego",
            body: "Real sod is cheaper to install but uses water and needs ongoing care. Artificial turf is more expensive upfront but pays back in 4–6 years on water and maintenance savings — and looks the same in August as it does in March.",
          },
          {
            heading: "Why cheap turf jobs fail",
            body: "If a contractor skips base prep, your turf will ripple within 12 months, drain wrong after the first rain, and look patchy. We don’t compete on those quotes — we compete on the jobs that are still flat five years later.",
          },
        ]}
        cities={[
          "Turf installation Chula Vista",
          "Sod installation Poway",
          "Artificial turf El Cajon",
          "Sod La Mesa",
          "Turf Carlsbad",
          "Sod installation Escondido",
          "Artificial turf Encinitas",
          "Sod Oceanside",
          "Turf installation Santee",
          "Sod National City",
          "Artificial turf Coronado",
          "Turf Rancho Bernardo",
        ]}
      />
    </>
  );
}
