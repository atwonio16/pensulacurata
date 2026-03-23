import { Paintbrush, Home, Wrench, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Zugrăveli interioare Târgoviște",
    description: "Zugrăvesc pereți și tavane în apartamente și case, cu protecție completă a mobilierului și finisaje curate.",
  },
  {
    icon: Paintbrush,
    title: "Zugrăveli exterioare Târgoviște",
    description: "Vopsesc fațade și suprafețe exterioare cu materiale rezistente la intemperii.",
  },
  {
    icon: Wrench,
    title: "Reparații pereți și fisuri",
    description: "Repar crăpături, găuri și denivelări înainte de zugrăveală pentru un rezultat perfect.",
  },
  {
    icon: Droplets,
    title: "Vopsire cu lavabilă",
    description: "Aplic lavabilă uniform, fără urme, pentru un aspect curat și durabil.",
  },
];

export function Services() {
  return (
    <section id="servicii" className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Servicii de zugrăveli în Târgoviște
          </h2>
          <p className="text-grey-600">
            Zugrăveli interioare și exterioare în Târgoviște și Dâmbovița, realizate curat și fără întârzieri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-grey-200 rounded-lg p-6 hover:border-brand transition-colors"
            >
              <service.icon className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-black text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-grey-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-grey-600 text-sm mt-10">
          Folosesc protecție completă pentru mobilier și las curat după fiecare lucrare.
        </p>
      </div>
    </section>
  );
}
