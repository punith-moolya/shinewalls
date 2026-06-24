export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shinewalls Paints Industries",
    "alternateName": "Shinewalls",
    "url": "https://www.shinewalls.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shinewalls.com/SW-Circle.png",
      "width": 512,
      "height": 512
    },
    "description": "Shinewalls Paints Industries is a leading manufacturer of premium paints, waterproofing solutions, wall putty, construction chemicals, tile adhesives, wood coatings, and industrial chemicals in India.",
    "foundingDate": "2020",
    "foundingLocation": "India",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your PIN",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8867238999",
      "contactType": "customer service",
      "email": "shinewallspaint@gmail.com",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/shinewalls",
      "https://www.instagram.com/shinewalls",
      "https://twitter.com/shinewalls"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Interior Paints",
          "description": "Premium interior emulsion paints with superior coverage and durability"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Exterior Paints",
          "description": "Weather-resistant exterior paints for long-lasting protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Waterproofing Solutions",
          "description": "Advanced waterproofing chemicals for roofs, walls, and basements"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}