import { Check } from "lucide-react";

const points = [
  "Lucru curat și organizat",
  "Termen respectat",
  "Materiale de calitate",
  "Garanție 2 ani",
  "Disponibil și weekend",
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            De ce să mă alegi
          </h2>
          <p className="text-grey-600">
            Fiecare lucrare e făcută cu atenție și respect.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-grey-50 rounded-lg p-4">
                <Check className="w-5 h-5 text-brand flex-shrink-0" />
                <span className="text-grey-700 text-sm">{p}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="tel:0774613207"
              className="btn-primary"
            >
              Sună pentru ofertă
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
