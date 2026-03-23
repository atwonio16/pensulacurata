import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Gallery } from "@/sections/Gallery";
import { Testimonials } from "@/sections/Testimonials";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Check, Paintbrush, Home as HomeIcon, Ruler, Wrench } from "lucide-react";

const servicii = [
  { icon: Paintbrush, text: "Zugrăveli interioare în Târgoviște" },
  { icon: HomeIcon, text: "Zugrăveli exterioare în Dâmbovița" },
  { icon: Ruler, text: "Glet și finisaje pereți" },
  { icon: Wrench, text: "Reparații pereți și fisuri" },
];

const incredere = [
  "Lucrări curate (acoperim și lăsăm curat)",
  "Preț corect de la început",
  "Respectăm termenul stabilit",
];

export function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SchemaMarkup />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <WhyChooseUs />
      
      {/* SEO Section - Optimized for Google */}
      <section className="py-16 md:py-20 bg-white border-t border-grey-100">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-black text-2xl md:text-3xl mb-4">
              Zugrav Târgoviște – Servicii profesionale de zugrăveli în Dâmbovița
            </h2>
            <p className="text-grey-600 max-w-2xl mx-auto">
              Cauți un zugrav în Târgoviște pentru lucrări curate? Ofer servicii complete 
              de zugrăveli interioare și exterioare pentru apartamente și case în Târgoviște și zonă.
            </p>
          </div>

          {/* Intro Paragraph */}
          <p className="text-grey-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sunt zugrav în Târgoviște și lucrez atât zugrăveli interioare cât și exterioare, 
            pentru apartamente în bloc, case sau spații comerciale. Folosesc materiale de calitate 
            și las curat după fiecare lucrare. Indiferent că ai nevoie de o încăpere zugrăvită 
            sau de toată casa, pot să te ajut cu un rezultat profesional.
          </p>

          {/* 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Column 1 - Servicii */}
            <div>
              <h3 className="font-semibold text-black mb-4">Servicii oferite</h3>
              <div className="space-y-3">
                {servicii.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-grey-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Încredere */}
            <div>
              <h3 className="font-semibold text-black mb-4">De ce să mă alegi</h3>
              <div className="space-y-3">
                {incredere.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-grey-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Paragraph */}
          <p className="text-grey-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Lucrez în Târgoviște și în toată zona județului Dâmbovița, inclusiv în Moreni, 
            Pucioasa, Găești și Titu. Dacă cauți un zugrav serios în Târgoviște pentru renovare 
            sau finisaje, îmi poți cere o evaluare gratuită și îți spun clar cât costă și 
            când pot începe lucrarea.
          </p>

          {/* CTA */}
          <div className="text-center">
            <p className="text-grey-600 mb-4">
              Primești preț clar și termen exact de la început.
            </p>
            <a 
              href="tel:0774613207"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-brand/20"
            >
              Cere ofertă gratuită
            </a>
          </div>
        </div>
      </section>
      
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
