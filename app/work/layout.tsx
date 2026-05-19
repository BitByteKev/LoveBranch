import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Work — Tree, Yard & Hardscape Projects",
  description:
    "A field-guide gallery of recent Love Branch projects across San Diego County — tree removals, hillside clearings, hedge work, turf installs, hardscape, and fence runs.",
  alternates: { canonical: "https://lovebranchsd.com/work" },
  openGraph: {
    title: "Recent Work | Love Branch San Diego",
    description:
      "Snapshots from yards and hillsides across San Diego County. The crew in these photos is the crew that shows up at your door.",
    url: "https://lovebranchsd.com/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
