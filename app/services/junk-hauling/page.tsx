import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Junk Hauling & Yard Debris Removal in San Diego",
  description:
    "Same-day yard debris and junk hauling across San Diego County. Green waste, old fences, dirt, mulch piles — gone today. (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/junk-hauling" },
};

const schema = buildServiceSchema({
  name: "Junk Hauling & Debris",
  description: "Yard debris and junk hauling across San Diego County.",
  slug: "junk-hauling",
  image: "/images/junk-hauling.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Junk Hauling"
        h1="Junk Hauling & Yard Debris Removal in San Diego"
        lede="Done with the yard? We’ll take the green waste, the old fence, the mattress in the garage — the whole load, gone the same day."
        heroImg="/images/junk-hauling.jpg"
        heroAlt="Truck loaded with green waste and debris ready for hauling away"
        intro={[
          "After a backyard cleanup, you usually end up with a pile that’s too big for the green bin and not worth renting a dumpster for. That’s our sweet spot. One call, one truck, gone.",
          "We haul yard debris, old fence and shed material, junk furniture, e-waste, and construction debris. Pricing is by truck volume — no surprise weight fees.",
        ]}
        whatsIncluded={[
          "Green waste, branches, leaves, dirt, and mulch",
          "Old fence panels, posts, and gates",
          "Demo debris from yard projects",
          "Furniture, mattresses, and e-waste",
          "Garage and shed cleanouts",
          "Sorted disposal — recycling, green waste, and landfill as appropriate",
        ]}
        whyMatters={[
          {
            heading: "Why this is cheaper than a dumpster",
            body: "A roll-off dumpster usually runs $400–$700 plus weight fees in San Diego. For a one-time cleanout, a truck load runs less and you don’t have a dumpster sitting on your driveway for a week.",
          },
          {
            heading: "Same-day in most ZIP codes",
            body: "We schedule junk hauling around our regular tree and yard jobs, which means we’re already nearby in most parts of the county. If you call before noon we can usually be out the same day.",
          },
        ]}
        cities={[
          "Junk hauling Chula Vista",
          "Debris removal Poway",
          "Junk removal El Cajon",
          "Yard debris La Mesa",
          "Junk hauling Carlsbad",
          "Debris removal Escondido",
          "Junk removal Encinitas",
          "Yard cleanup Oceanside",
          "Junk hauling Santee",
          "Debris removal National City",
          "Junk hauling Coronado",
          "Yard debris Spring Valley",
        ]}
      />
    </>
  );
}
