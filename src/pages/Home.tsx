import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { PageSEO } from "@/components/PageSEO";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Footer } from "@/sections/Footer";
import { FinalCTA } from "@/sections/FinalCTA";
import { Gallery } from "@/sections/Gallery";
import { Hero } from "@/sections/Hero";
import { LocalSEOSection } from "@/sections/LocalSEOSection";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { MobileContactBar } from "@/components/MobileContactBar";

export function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <PageSEO
        title="Zugrav Târgoviște | Zugrăveli Târgoviște și Dâmbovița | Pensula Curată"
        description="Zugrav în Târgoviște și Dâmbovița. Zugrăveli interioare, lavabilă, glet și reparații pereți pentru apartamente și case. Sună acum: 0774 613 207."
        canonicalPath="/"
        keywords={[
          "zugrav târgoviște",
          "zugrăveli târgoviște",
          "zugrav dâmbovița",
          "zugrăveli dâmbovița",
          "lavabilă târgoviște",
          "lavabilă dâmbovița",
          "zugrav interior târgoviște",
          "glet târgoviște",
          "reparații pereți târgoviște",
          "zugrav apartament târgoviște",
        ]}
      />
      <SchemaMarkup />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <LocalSEOSection />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileContactBar />
    </main>
  );
}
