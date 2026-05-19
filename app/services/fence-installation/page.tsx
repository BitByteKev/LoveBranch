import type { Metadata } from "next";
import { ServiceTemplate, buildServiceSchema } from "../ServiceTemplate";

export const metadata: Metadata = {
  title: "Fence Installation in San Diego — Wood, Vinyl, Chain-Link",
  description:
    "Wood, vinyl, and chain-link fence installation across San Diego County. Old fence haul-off included. Free estimates: (619) 330-0801.",
  alternates: { canonical: "https://lovebranchsd.com/services/fence-installation" },
};

const schema = buildServiceSchema({
  name: "Fence Installation",
  description: "Residential fence installation and replacement across San Diego County.",
  slug: "fence-installation",
  image: "/images/fence.jpg",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceTemplate
        title="Fence Installation"
        h1="Fence Installation in San Diego"
        lede="Wood, vinyl, and chain-link fencing — built solid, finished clean, and we haul the old fence away. Includes proper post-setting depth for San Diego soils."
        heroImg="/images/fence.jpg"
        heroAlt="New wood privacy fence installed along a San Diego property line"
        intro={[
          "A fence that leans, sags, or gates that drag in two years isn’t a bargain — it’s a rebuild waiting to happen. We set posts in concrete to the correct depth for the wind exposure and soil conditions of your specific neighborhood.",
          "We install pressure-treated wood, redwood, cedar, vinyl, and chain-link. Property line surveys, HOA approval support, and old-fence haul-off are all part of the job.",
        ]}
        whatsIncluded={[
          "Free in-person estimate and material selection",
          "Removal and haul-off of existing fence",
          "Post setting in concrete (2–3 ft depth typical)",
          "Pickets, panels, or chain-link installation",
          "Gates with proper hardware and sag bracing",
          "Stain or sealant on request (separate quote)",
        ]}
        whyMatters={[
          {
            heading: "Why posts are everything",
            body: "85% of fence failures we see are post failures — set too shallow, set without concrete, or set in dry soil that pulls away from the post. We set our posts the way they should be set, not the fast way.",
          },
          {
            heading: "HOA and property line considerations",
            body: "San Diego HOAs have strict rules on fence height, material, and color. We can submit drawings to your HOA on your behalf and source compliant materials. We also recommend a property survey for boundary fences if there’s any doubt.",
          },
        ]}
        cities={[
          "Fence installation Chula Vista",
          "Fence install Poway",
          "Wood fence El Cajon",
          "Vinyl fence La Mesa",
          "Fence installation Carlsbad",
          "Fence install Escondido",
          "Chain-link fence Encinitas",
          "Fence install Oceanside",
          "Fence installation Santee",
          "Wood fence National City",
          "Fence install Coronado",
          "Vinyl fence Rancho Bernardo",
        ]}
      />
    </>
  );
}
