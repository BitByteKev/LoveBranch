import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Lawn Care & Maintenance in San Diego",
  description:
    "Weekly and bi-weekly lawn care across San Diego — mowing, edging, fertilization, aeration. Reliable crews, no auto-renew lock-ins. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/lawn-care" },
};

const schema = buildServiceSchema({
  name: "Lawn Care & Maintenance",
  description: "Recurring lawn maintenance across San Diego County.",
  slug: "lawn-care",
  image: "/images/lawn-care.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Lawn Care"
        h1="Lawn Care & Maintenance in San Diego"
        lede="Same crew every visit, on a schedule that works. Mowing, edging, blowing, fertilization, and aeration — done right, hauled clean."
        heroImg="/images/lawn-care.jpg"
        heroAlt="Manicured green lawn with crisp edges in front of a San Diego home"
        intro={[
          "Most lawn services in San Diego look the same on paper. The difference is whether the same crew shows up every week, whether they actually edge the lines or just trim near them, and whether they leave with a clean blower or leave clippings on your driveway.",
          "We schedule by crew, not by route — so the same people learn your yard and what it needs.",
        ]}
        whatsIncluded={[
          "Mowing at the correct height for your turf type",
          "Edging along walkways, driveways, and bed lines",
          "Trimming around obstacles, fences, and bed edges",
          "Blow-down of all hard surfaces",
          "Seasonal fertilization (4 visits/year)",
          "Aeration (spring or fall)",
          "Optional: weed-and-feed and pest treatments",
        ]}
        whyMatters={[
          {
            heading: "Why bi-weekly often beats weekly in San Diego",
            body: "Coastal lawns with cool-season grasses (tall fescue, ryegrass) often only need mowing every 10–14 days, especially in winter. We’ll quote you both schedules and recommend the one that actually fits your yard.",
          },
          {
            heading: "No long-term contracts",
            body: "We don’t lock you into a 12-month auto-renewal. You can pause, cancel, or change schedules anytime. We earn the next visit each week.",
          },
        ]}
        cities={[
          "Lawn care Chula Vista",
          "Lawn maintenance Poway",
          "Yard service El Cajon",
          "Lawn care La Mesa",
          "Lawn service Carlsbad",
          "Yard maintenance Escondido",
          "Lawn care Encinitas",
          "Lawn service Oceanside",
          "Yard service Santee",
          "Lawn care National City",
          "Lawn maintenance Coronado",
          "Lawn service Rancho Bernardo",
        ]}
      />
    </>
  );
}
