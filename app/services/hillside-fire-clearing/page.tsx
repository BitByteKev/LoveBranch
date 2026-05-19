import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Hillside Fire Clearing & Defensible Space in San Diego",
  description:
    "CAL FIRE-compliant defensible space clearing and brush abatement across San Diego County. We provide the documentation insurers and HOAs require. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/hillside-fire-clearing" },
};

const schema = buildServiceSchema({
  name: "Hillside Fire Clearing",
  description:
    "Defensible space and brush clearing for wildfire compliance across San Diego County.",
  slug: "hillside-fire-clearing",
  image: "/images/hillside-clearing.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Hillside Fire Clearing"
        h1="Hillside Fire Clearing & Defensible Space in San Diego"
        lede="If your insurance carrier, HOA, or the San Diego Fire Department has flagged your hillside, we’ll bring it into compliance — and give you the documentation to prove it."
        heroImg="/images/hillside-clearing.jpg"
        heroAlt="Cleared San Diego hillside meeting defensible space requirements"
        intro={[
          "Defensible space isn’t optional in San Diego County. Zone 1 (0–30 ft from any structure) and Zone 2 (30–100 ft) both have specific requirements for vegetation height, spacing, and species. Most insurance non-renewal notices we see are written against these standards.",
          "We clear hillsides to spec, leave erosion control intact where required, and send you photo documentation plus a signed compliance letter you can hand to your carrier, HOA, or inspector.",
        ]}
        whatsIncluded={[
          "Brush, weed, and ladder fuel removal to Zone 1 and Zone 2 standards",
          "Tree limb clearance from structures and other trees",
          "Removal of dead vegetation and debris within 100 ft of structures",
          "Photo before/after documentation",
          "Signed compliance letter for insurance, HOA, and fire department",
          "Erosion-conscious clearing (we don’t denude slopes that need cover)",
        ]}
        whyMatters={[
          {
            heading: "Why insurers are non-renewing San Diego policies",
            body: "Since the 2017 and 2020 fire seasons, carriers have been auditing properties in the wildland-urban interface. A hillside that looked fine three years ago may now flag your policy. Getting it compliant is usually the fastest way to keep your coverage.",
          },
          {
            heading: "Timing matters",
            body: "If you got a non-renewal notice, you typically have 60–90 days to remediate. We can usually get a hillside cleared and documented within 7–14 days of the free quote — including the paperwork your insurer needs.",
          },
        ]}
        cities={[
          "Hillside fire clearing El Cajon",
          "Defensible space Poway",
          "Brush clearing Chula Vista",
          "Fire clearance La Mesa",
          "Defensible space Escondido",
          "Brush abatement Encinitas",
          "Fire clearing Carlsbad",
          "Hillside service Lakeside",
          "Defensible space Santee",
          "Brush clearing Spring Valley",
          "Fire clearance Rancho Bernardo",
          "Hillside clearing Alpine",
        ]}
        faq={[
          {
            q: "Does my insurance company accept your documentation?",
            a: "Yes — our compliance letters meet the documentation standards of every major carrier writing California fire policies. If yours has a specific form, give it to us and we’ll fill it out.",
          },
          {
            q: "How much hillside do you usually clear?",
            a: "Most residential jobs are 5,000–30,000 sq ft. We’ve done multi-acre HOA common areas and small backyard slopes — both are routine for us.",
          },
        ]}
      />
    </>
  );
}
