export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shinewalls Paints Industries",
    image: "https://www.shinewalls.com/SW-Circle.png",
    url: "https://www.shinewalls.com",
    telephone: "+918867238999",
    email: "shinewallspaint@gmail.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bamboo Bazar, Bunder",
      addressLocality: "Mangaluru",
      addressRegion: "Karnataka",
      postalCode: "575001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.861841",
      longitude: "74.833610",
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
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
    currenciesAccepted: "INR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}