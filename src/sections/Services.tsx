import { Paintbrush, Ruler, Wrench } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Zugrăveli",
    description: "Pereți și tavane zugrăvite cu finisaje mate sau lavabile.",
  },
  {
    icon: Ruler,
    title: "Gletuit",
    description: "Pregătire profesională a suprafețelor. Pereți drepți și netezi.",
  },
  {
    icon: Wrench,
    title: "Reparații",
    description: "Repar fisuri, găuri și deteriorări. Tencuieli și chituri.",
  },
];

export function Services() {
  return (
    <section id="servicii" className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Ce fac
          </h2>
          <p className="text-grey-600">
            Servicii complete de zugrăvit pentru locuințe și spații comerciale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
