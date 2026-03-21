import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
  url?: string;
}

export function LocalBusinessSchema({ url = 'https://pensulacurata.ro' }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pensula Curată',
    description: 'Zugrăveli interioare profesionale în Târgoviște și județul Dâmbovița. Servicii de zugrăveli, glet, finisaje și renovări apartamente.',
    url: url,
    telephone: '+40774613207',
    email: 'contact@pensulacurata.ro',
    image: `${url}/images/logo.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Târgoviște',
      addressLocality: 'Târgoviște',
      addressRegion: 'Dâmbovița',
      postalCode: '130001',
      addressCountry: 'RO'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.9287',
      longitude: '25.4609'
    },
    areaServed: [
      { '@type': 'City', name: 'Târgoviște' },
      { '@type': 'City', name: 'Moreni' },
      { '@type': 'City', name: 'Găești' },
      { '@type': 'City', name: 'Pucioasa' },
      { '@type': 'City', name: 'Titu' },
      { '@type': 'City', name: 'Fieni' }
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00'
      }
    ],
    serviceType: [
      'Zugrăveli interioare',
      'Glet și finisaje',
      'Renovări apartamente',
      'Vopsitorie lavabilă'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function WebPageSchema({ title, description, url, image }: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: image,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pensula Curată',
      telephone: '+40774613207'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
