import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Weed Abatement & Spraying in San Diego",
  description:
    "Full weed abatement, brush clearing, and targeted spray treatments across San Diego County. Same-week service, licensed and insured. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/weed-abatement" },
};

const schema = buildServiceSchema({
  name: "Weed Abatement & Spraying",
  description: "Weed abatement, brush clearing, and weed control spraying across San Diego County.",
  slug: "weed-abatement",
  image: "/images/weed-abatement.avif",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Weed Abatement"
        h1="Weed Abatement & Spraying in San Diego"
        lede="Invasive weeds, dry grass, and overgrown lots — cleared down to bare dirt or kept on a recurring spray schedule. Code-compliance ready."
        heroImg="/images/weed-abatement.avif"
        heroAlt="Cleared and sprayed lot after weed abatement service in San Diego"
        intro={[
          "Weeds are more than an eyesore. In San Diego’s dry months they’re fuel; year-round they choke out the plants you actually want. We handle both ends: aggressive abatement and ongoing spray maintenance.",
          "If you’ve received a code-enforcement notice or a fire marshal letter, we can get the property compliant and document it the same week.",
        ]}
        whatsIncluded={[
          "Full mechanical clearing — weeds, brush, and dry grass",
          "Targeted herbicide application (pre- and post-emergent)",
          "Code-compliance abatement for vacant lots",
          "Driveway, fence line, and walkway edge spraying",
          "Stump and stubborn root removal",
          "Recurring monthly or quarterly maintenance plans",
        ]}
        whyMatters={[
          {
            heading: "Why timing matters in San Diego",
            body: "Weed abatement is most effective right after the winter rains and before the first heat wave. Hit them at that window and you reclaim months of work; miss it and they go to seed and you’re fighting the same battle next year.",
          },
          {
            heading: "Spray plans vs. one-time clearing",
            body: "For most properties, a one-time clearing plus a quarterly spray schedule costs less in 12 months than two emergency clearings. We’ll quote both options and let you pick.",
          },
        ]}
        cities={[
          "Weed abatement Poway",
          "Weed control Chula Vista",
          "Brush clearing El Cajon",
          "Weed spraying La Mesa",
          "Weed abatement Carlsbad",
          "Weed control Escondido",
          "Lot clearing Encinitas",
          "Weed abatement Oceanside",
          "Brush clearing Santee",
          "Weed control National City",
          "Weed abatement Lakeside",
          "Weed spraying Spring Valley",
        ]}
      />
    </>
  );
}
