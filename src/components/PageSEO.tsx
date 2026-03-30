import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { toAbsoluteUrl } from "@/lib/site";

interface PageSEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath?: string;
}

export function PageSEO({ title, description, keywords, canonicalPath }: PageSEOProps) {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const canonicalUrl = toAbsoluteUrl(path);
  const keywordsContent = keywords.join(", ");

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsContent} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Pensula Curata" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:site_name" content="Pensula Curata" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
