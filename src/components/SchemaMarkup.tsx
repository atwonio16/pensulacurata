import { useLocation } from "react-router-dom";
import { SITE_URL, toAbsoluteUrl } from "@/lib/site";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Pensula Curata",
    description: "Servicii de zugravit in Targoviste si judetul Dambovita.",
    url: SITE_URL,
    telephone: "+40774613207",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Targoviste",
      addressRegion: "Dambovita",
      addressCountry: "RO",
    },
    areaServed: [
      { "@type": "City", name: "Targoviste" },
      { "@type": "City", name: "Moreni" },
      { "@type": "City", name: "Pucioasa" },
      { "@type": "City", name: "Gaesti" },
      { "@type": "City", name: "Titu" },
      { "@type": "AdministrativeArea", name: "Judetul Dambovita" },
    ],
    serviceType: ["Zugraveli interioare", "Zugraveli exterioare", "Lavabila", "Glet", "Reparatii pereti"],
    openingHours: "Mo-Sa 08:00-20:00",
    priceRange: "RON",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function PageSchemaMarkup({ title, description }: { title: string; description: string }) {
  const location = useLocation();
  const url = toAbsoluteUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "ro-RO",
    about: {
      "@type": "HomeAndConstructionBusiness",
      name: "Pensula Curata",
      telephone: "+40774613207",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
