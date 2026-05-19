const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lovebranchsd.com/#business",
  name: "Love Branch Tree & Yard Service",
  image: "https://lovebranchsd.com/images/og.jpg",
  url: "https://lovebranchsd.com",
  telephone: "+1-619-330-0801",
  email: "info@lovebranchsd.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "770 1st Ave, Ste 250",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "San Diego" },
    { "@type": "City", name: "Chula Vista" },
    { "@type": "City", name: "Poway" },
    { "@type": "City", name: "El Cajon" },
    { "@type": "City", name: "La Mesa" },
    { "@type": "City", name: "Carlsbad" },
    { "@type": "City", name: "Escondido" },
    { "@type": "City", name: "Encinitas" },
    { "@type": "City", name: "Oceanside" },
    { "@type": "City", name: "Santee" },
    { "@type": "City", name: "National City" },
    { "@type": "City", name: "Coronado" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7157,
    longitude: -117.1611,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Maria L." },
      reviewBody:
        "Two huge eucalyptus trees gone in a single day. They cleaned up everything and the price came in under what three other companies quoted. Easy call.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "David R." },
      reviewBody:
        "Hillside got flagged by my insurance — Love Branch came out the next morning, cleared it, and gave me the documentation I needed. Saved my policy.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sarah K." },
      reviewBody:
        "Got a full turf install + new fence in one week. Crew was professional, on time every day, and the final result looks like a magazine yard. Hire them.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tree & Yard Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Removal & Trimming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hedge & Palm Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hillside Fire Clearing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weed Abatement & Spraying" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care & Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscaping & Ground Cover" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turf & Sod Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Junk Hauling & Debris" } },
    ],
  },
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
