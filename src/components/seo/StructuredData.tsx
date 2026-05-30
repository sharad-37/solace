import Script from "next/script";

export function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solace",
    operatingSystem: "iOS, Android, Web",
    applicationCategory: "HealthApplication",
    description:
      "Solace helps you reflect, track your emotions, and build healthier habits with Aura — your AI wellness companion.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2400",
    },
    creator: {
      "@type": "Organization",
      name: "Solace Wellness, Inc.",
    },
  };

  return (
    <Script
      id="solace-structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
