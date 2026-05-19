import type { Metadata } from "next";
import "./globals.css";
import { TrustBar } from "./components/TrustBar";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FloatingCall } from "./components/FloatingCall";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { ScrollReveal } from "./components/ScrollReveal";

const SITE_URL = "https://lovebranchsd.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Love Branch — San Diego Tree & Yard Service | Trimming, Removal, Hillside Clearing",
    template: "%s | Love Branch San Diego",
  },
  description:
    "San Diego tree removal, trimming, weed abatement, fence install, and full yard care. Licensed CSLB #1146955, fully insured, Google Guaranteed. Free quotes. (619) 330-0801.",
  keywords: [
    "tree removal San Diego",
    "tree trimming San Diego",
    "hillside fire clearing San Diego",
    "weed abatement San Diego",
    "fence installation San Diego",
    "lawn care San Diego",
    "yard service San Diego",
    "Love Branch",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Love Branch",
    title: "Love Branch — San Diego Tree & Yard Service",
    description:
      "Tree removal, trimming, hillside clearing, weed abatement, fence install, and full yard care across San Diego County. Licensed, insured, Google Guaranteed.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Branch — San Diego Tree & Yard Service",
    description:
      "Fully insured tree and yard care across San Diego County. (619) 330-0801.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessSchema />
      </head>
      <body>
        <TrustBar />
        <Nav />
        {children}
        <Footer />
        <FloatingCall />
        <ScrollReveal />
      </body>
    </html>
  );
}
