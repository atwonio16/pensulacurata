import { Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-brand">
      <div className="container-custom text-center">
        <h2 className="text-white mb-4 text-2xl md:text-3xl">
          Hai să discutăm
        </h2>
        <p className="text-white/90 mb-8 max-w-md mx-auto">
          Primești o evaluare gratuită în 24 de ore.
        </p>

        <a 
          href="tel:0774613207"
          className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-md hover:bg-grey-100 transition-colors text-lg"
        >
          <Phone className="w-5 h-5" />
          0774 613 207
        </a>

        <p className="mt-6 text-white/70 text-sm">
          Luni - Sâmbătă: 08:00 - 18:00
        </p>
      </div>
    </section>
  );
}
