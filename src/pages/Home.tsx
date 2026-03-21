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
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
