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
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Interior & Exterior Paints",
          description:
            "Premium emulsion paints with superior coverage and durability",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Waterproofing Solutions",
          description:
            "Advanced waterproofing chemicals for roofs, walls, and basements",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Construction Chemicals",
          description:
            "Industrial-grade chemicals for construction and manufacturing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Wall Putty & Primers",
          description:
            "High-quality wall putty and primers for perfect surface preparation",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}