import { Brush, Home, PaintRoller, Wrench } from "lucide-react";

const services = [
  {
    title: "Zugrăveli interioare în Târgoviște",
    description: "Pereți și tavane cu finisaj uniform, protecție pentru mobilier și curățenie la final.",
    icon: Home,
  },
  {
    title: "Zugrăveli exterioare în Dâmbovița",
    description: "Vopsire fațade cu materiale rezistente, pregătire corectă a suprafeței și aplicare atentă.",
    icon: PaintRoller,
  },
  {
    title: "Glet și reparații pereți",
    description: "Corectez fisuri, găuri și denivelări înainte de vopsire pentru un rezultat profesionist.",
    icon: Wrench,
  },
  {
    title: "Aplicare lavabilă premium",
    description: "Straturi curate, fără urme, cu recomandări de materiale potrivite pentru fiecare spațiu.",
    icon: Brush,
  },
];

export function Services() {
  return (
    <section id="servicii" className="section-wrap border-t border-grey-100 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex items-center rounded-full bg-brand/10 text-brand-dark px-4 py-1.5 text-sm font-semibold mb-4">
            Servicii complete
          </p>
          <h2 className="mb-4 text-balance">Zugrăveli în Târgoviște cu standard profesional</h2>
          <p className="text-grey-600 text-lg text-balance">
            Fie că renovezi un apartament, o casă sau un spațiu comercial, primești o lucrare curată, bine organizată și
            livrată la termen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <article key={index} className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-black mb-2.5 leading-snug">{service.title}</h3>
              <p className="text-grey-600 text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="tel:0774613207" className="btn-primary px-7 py-3.5 text-base">
            Cere o evaluare gratuită
          </a>
        </div>
      </div>
    </section>
  );
}
