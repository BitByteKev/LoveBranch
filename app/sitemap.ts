import type { MetadataRoute } from "next";

const SITE = "https://lovebranchsd.com";

const services = [
  "tree-removal",
  "hedge-palm-care",
  "hillside-fire-clearing",
  "weed-abatement",
  "lawn-care",
  "hardscaping",
  "turf-sod-installation",
  "fence-installation",
  "junk-hauling",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/areas-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((slug) => ({
      url: `${SITE}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
