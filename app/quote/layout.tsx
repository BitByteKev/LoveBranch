import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Tree & Yard Quote — Same-Day Response",
  description:
    "Request a free, no-pressure quote for tree removal, hillside fire clearing, hedge care, lawn care, fencing, hardscaping, or full yard work anywhere in San Diego County. Most quotes back within 2 hours.",
  alternates: { canonical: "https://lovebranchsd.com/quote" },
  openGraph: {
    title: "Get a Free Quote | Love Branch San Diego",
    description:
      "Tell us about the job — we'll quote it fast. Licensed CSLB #1146955, fully insured, 150+ five-star reviews.",
    url: "https://lovebranchsd.com/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
