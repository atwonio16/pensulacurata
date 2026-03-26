import { ArrowLeft } from "lucide-react";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";
import { Link } from "react-router-dom";
import { FAQ } from "./FAQ";
import { Logo } from "./Logo";
import { PageSEO } from "./PageSEO";
import { PageSchemaMarkup } from "./SchemaMarkup";
import { FinalCTA } from "@/sections/FinalCTA";
import { SiteFooter } from "@/sections/SiteFooter";

interface SEOPageTemplateProps {
  title: string;
  headline: string;
  description: string;
  locationName: string;
  locationDescription: string;
  areaServed: string[];
  canonicalPath: string;
  keywords: string[];
}

export function SEOPageTemplate({
  title,
  headline,
  description,
  locationName,
  locationDescription,
  areaServed,
  canonicalPath,
  keywords,
}: SEOPageTemplateProps) {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO title={title} description={description} canonicalPath={canonicalPath} keywords={keywords} />
      <PageSchemaMarkup title={title} description={description} />

      <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            <Link to="/">
              <Logo size="sm" />
            </Link>
            <a href="tel:0774613207" className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm">
              <PhoneSolidIcon />
              Sună acum
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white pb-10 pt-24 md:pt-28">
        <div className="container-custom max-w-3xl text-center">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-grey-500 hover:text-brand">
            <ArrowLeft className="h-4 w-4" />
            Înapoi la pagina principală
          </Link>

          <h1 className="mb-4 text-balance">{headline}</h1>
          <p className="mb-6 text-balance text-lg text-grey-600">{description}</p>

          <a href="tel:0774613207" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
            <PhoneSolidIcon />
            Discută lucrarea ta
          </a>
        </div>
      </section>

      <section className="section-wrap bg-white">
        <div className="container-custom max-w-4xl">
          <div className="surface-card p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-3">Servicii în {locationName}</h2>
              <p className="text-lg text-grey-600">{locationDescription}</p>
            </div>

            <h3 className="mb-3 text-center text-black">Zone acoperite</h3>
            <div className="mx-auto mb-8 grid max-w-2xl gap-2 sm:grid-cols-2">
              {areaServed.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-lg border border-grey-200 bg-grey-50 px-3 py-2 text-grey-700 sm:justify-start"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {area}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="mb-3">De ce să mă alegi</h3>
              <ul className="mx-auto max-w-lg space-y-2 text-grey-600">
                <li className="flex items-start justify-center gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  Evaluare gratuită în 24h
                </li>
                <li className="flex items-start justify-center gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  Garanție 2 ani
                </li>
                <li className="flex items-start justify-center gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  Disponibil și în weekend
                </li>
                <li className="flex items-start justify-center gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  Avans în funcție de lucrare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}




