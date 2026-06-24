export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shinewalls Paints Industries",
    alternateName: "Shinewalls",
    url: "https://www.shinewalls.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.shinewalls.com/SW-Circle.png",
      width: 512,
      height: 512,
    },
    description:
      "Shinewalls Paints Industries is a leading manufacturer of premium paints, waterproofing solutions, wall putty, construction chemicals, tile adhesives, wood coatings, and industrial chemicals in India.",
    foundingDate: "2020",
    foundingLocation: "India",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bamboo Bazar, Bunder",
      addressLocality: "Mangaluru",
      addressRegion: "Karnataka",
      postalCode: "575001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8867238999",
      contactType: "customer service",
      email: "shinewallspaint@gmail.com",
      availableLanguage: ["English", "Hindi", "Kannada"],
      areaServed: "IN",
    },
    sameAs: [
      "https://www.facebook.com/share/p/1GzU7XdYch/",
      "https://www.instagram.com/p/DYY3Ziyxksz/?igsh=MTZienFwcmxvNXptdQ==",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}