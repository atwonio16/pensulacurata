export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pensula Curată",
    "description": "Servicii profesionale de zugrăveli interioare în Târgoviște și județul Dâmbovița. Lucrăm curat, rapid și fără complicații.",
    "url": "https://pensulacurata.ro",
    "telephone": "+40774613207",
    "email": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Târgoviște",
      "addressRegion": "Dâmbovița",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.9287",
      "longitude": "25.4609"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Târgoviște"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Județul Dâmbovița"
      }
    ],
    "serviceType": [
      "Zugrăveli interioare",
      "Îndreptare pereți",
      "Reparații minore"
    ],
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40774613207",
      "contactType": "customer service",
      "availableLanguage": ["Romanian"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function PageSchemaMarkup({ title, description, url }: PageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Pensula Curată",
      "telephone": "+40774613207",
      "areaServed": {
        "@type": "City",
        "name": "Târgoviște"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchemaMarkup({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
