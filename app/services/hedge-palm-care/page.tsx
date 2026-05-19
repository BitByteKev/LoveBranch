import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Hedge Trimming & Palm Care in San Diego",
  description:
    "Sharp, defined hedges and healthy palm trees across San Diego County. Skinning, frond removal, and shaping by a licensed, insured crew. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/hedge-palm-care" },
};

const schema = buildServiceSchema({
  name: "Hedge & Palm Care",
  description:
    "Hedge trimming, palm skinning, frond removal, and shaping services across San Diego County.",
  slug: "hedge-palm-care",
  image: "/images/hedge-palm.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Hedge & Palm Care"
        h1="Hedge Trimming & Palm Care in San Diego"
        lede="Crisp hedge lines, properly skinned palms, and clean frond removal. We use sharp tools, the right ladders, and we sweep the driveway when we’re done."
        heroImg="/images/hedge-palm.jpg"
        heroAlt="Crisply trimmed hedges and skinned palm trees outside a San Diego home"
        intro={[
          "Hedges and palms set the tone for a property. When they’re overgrown, they make the whole yard look neglected; when they’re shaped right, the rest of the landscape falls into place.",
          "We work on everything from Ficus and bougainvillea hedges to Mexican fan palms, queen palms, and Canary Island date palms. Heights up to 60+ feet — we have the lifts, climbers, and certifications.",
        ]}
        whatsIncluded={[
          "Hedge shaping with crisp, level top and sides",
          "Palm skinning (removing dead frond bases for a clean trunk)",
          "Dead frond and seed pod removal",
          "Height reduction and clearance pruning",
          "Disease and pest assessment (palm weevil, fusarium wilt)",
          "Full cleanup — every clipping bagged and hauled",
        ]}
        whyMatters={[
          {
            heading: "Palm trimming is more technical than it looks",
            body: "Over-trimming a palm (the “hurricane cut”) weakens it and invites disease. There’s a right way and a wrong way, and the wrong way shortens the tree’s life by years. Our crew is trained to cut only what should come off.",
          },
          {
            heading: "Hedge frequency",
            body: "Most San Diego hedges look their best with two trims a year — once in spring after the growth flush and once in early fall. We can set you up on a recurring schedule so you never have to think about it.",
          },
        ]}
        cities={[
          "Hedge trimming Chula Vista",
          "Palm tree service Poway",
          "Hedge care El Cajon",
          "Palm skinning La Mesa",
          "Hedge trimming Carlsbad",
          "Palm tree service Escondido",
          "Hedge care Encinitas",
          "Palm trimming Oceanside",
          "Hedge service Santee",
          "Palm care National City",
          "Hedge trimming Coronado",
          "Palm service Spring Valley",
        ]}
      />
    </>
  );
}
