import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { FAQ } from "./FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { PageSchemaMarkup } from "./SchemaMarkup";

interface SEOPageTemplateProps {
  title: string;
  headline: string;
  description: string;
  locationName: string;
  locationDescription: string;
  areaServed: string[];
}

export function SEOPageTemplate({
  title,
  headline,
  description,
  locationName,
  locationDescription,
  areaServed,
}: SEOPageTemplateProps) {
  return (
    <main className="min-h-screen">
      <PageSchemaMarkup title={title} description={description} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-grey-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-14">
            <a href="/">
              <Logo size="sm" />
            </a>
            <a 
              href="tel:0774613207"
              className="bg-brand hover:bg-brand-dark text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Sună acum
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-12 bg-grey-100">
        <div className="container-custom max-w-2xl text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-grey-500 hover:text-brand text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi
          </a>

          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            {locationName}
          </div>

          <h1 className="text-black mb-4 text-2xl md:text-3xl lg:text-4xl">
            {headline}
          </h1>
          <p className="text-grey-600 text-lg mb-6">
            {description}
          </p>

          <a 
            href="tel:0774613207"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            Sună: 0774 613 207
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-black mb-3 text-xl md:text-2xl">
              Servicii în {locationName}
            </h2>
            <p className="text-grey-600">
              {locationDescription}
            </p>
          </div>

          <h3 className="text-black mb-3 text-lg text-center">Zone acoperite</h3>
          <div className="grid sm:grid-cols-2 gap-2 mb-8 max-w-lg mx-auto">
            {areaServed.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-grey-700 justify-center sm:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                {area}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-black mb-3 text-lg">De ce să mă alegi</h3>
            <ul className="space-y-2 text-grey-600 max-w-md mx-auto">
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
      </section>

      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
