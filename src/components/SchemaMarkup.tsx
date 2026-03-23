import { useLocation } from "react-router-dom";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Pensula Curată",
    description: "Servicii de zugrăvit în Târgoviște și județul Dâmbovița.",
    url: "https://pensulacurata.ro",
    telephone: "+40774613207",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Târgoviște",
      addressRegion: "Dâmbovița",
      addressCountry: "RO",
    },
    areaServed: [
      { "@type": "City", name: "Târgoviște" },
      { "@type": "City", name: "Moreni" },
      { "@type": "City", name: "Pucioasa" },
      { "@type": "City", name: "Găești" },
      { "@type": "City", name: "Titu" },
      { "@type": "AdministrativeArea", name: "Județul Dâmbovița" },
    ],
    serviceType: ["Zugrăveli interioare", "Zugrăveli exterioare", "Lavabilă", "Glet", "Reparații pereți"],
    openingHours: "Mo-Sa 08:00-20:00",
    priceRange: "RON",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function PageSchemaMarkup({ title, description }: { title: string; description: string }) {
  const location = useLocation();
  const url = `https://pensulacurata.ro${location.pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "ro-RO",
    about: {
      "@type": "HomeAndConstructionBusiness",
      name: "Pensula Curată",
      telephone: "+40774613207",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
