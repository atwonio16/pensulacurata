import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ } from "./FAQ";
import { Logo } from "./Logo";
import { PageSEO } from "./PageSEO";
import { PageSchemaMarkup } from "./SchemaMarkup";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";

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

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-grey-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <Logo size="sm" />
            </Link>
            <a href="tel:0774613207" className="btn-primary text-sm px-4 py-2.5">
              Sună acum
            </a>
          </div>
        </div>
      </header>

      <section className="pt-28 md:pt-32 pb-14 bg-gradient-to-b from-grey-50 to-white border-b border-grey-100">
        <div className="container-custom max-w-3xl text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-grey-500 hover:text-brand text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>

          <p className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            {locationName}
          </p>

          <h1 className="mb-4 text-balance">{headline}</h1>
          <p className="text-grey-600 text-lg mb-6 text-balance">{description}</p>

          <a href="tel:0774613207" className="btn-primary px-6 py-3">
            <Phone className="w-4 h-4" />
            Sună: 0774 613 207
          </a>
        </div>
      </section>

      <section className="section-wrap bg-white">
        <div className="container-custom max-w-4xl">
          <div className="surface-card p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="mb-3">Servicii în {locationName}</h2>
              <p className="text-grey-600 text-lg">{locationDescription}</p>
            </div>

            <h3 className="text-black mb-3 text-center">Zone acoperite</h3>
            <div className="grid sm:grid-cols-2 gap-2 mb-8 max-w-2xl mx-auto">
              {areaServed.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-grey-700 justify-center sm:justify-start rounded-lg border border-grey-200 bg-grey-50 px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {area}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="mb-3">De ce să mă alegi</h3>
              <ul className="space-y-2 text-grey-600 max-w-lg mx-auto">
                <li className="flex items-start gap-2 justify-center">
                  <span className="text-brand">✓</span>
                  Evaluare gratuită în 24h
                </li>
                <li className="flex items-start gap-2 justify-center">
                  <span className="text-brand">✓</span>
                  Garanție 2 ani
                </li>
                <li className="flex items-start gap-2 justify-center">
                  <span className="text-brand">✓</span>
                  Disponibil și în weekend
                </li>
                <li className="flex items-start gap-2 justify-center">
                  <span className="text-brand">✓</span>
                  Avans în funcție de lucrare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
