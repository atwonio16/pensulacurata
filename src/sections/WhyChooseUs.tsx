const benefits = [
  {
    title: "Lucrări curate",
    description: "Acopăr mobilierul, protejez pardoseala și las spațiul curat la final, fără surprize.",
    icon: "/images/icon-clean.png",
    alt: "Icon lucrări curate",
  },
  {
    title: "Respect termenul",
    description: "Stabilim de la început un calendar clar și îl respect pas cu pas, fără întârzieri.",
    icon: "/images/icon-time.png",
    alt: "Icon respectare termen",
  },
  {
    title: "Preț corect",
    description: "Primești ofertă transparentă, cu detalii pe lucrare, materiale și durată de execuție.",
    icon: "/images/icon-price.png",
    alt: "Icon preț corect",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-wrap border-t border-grey-100 bg-grey-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex rounded-full bg-white border border-grey-200 px-4 py-1.5 text-sm font-semibold text-grey-700 mb-4">De ce noi</p>
          <h2 className="mb-4 text-balance">De ce mă aleg clienții din Târgoviște</h2>
          <p className="text-grey-600 text-lg text-balance">Focus pe calitate, organizare și comunicare clară pe tot parcursul lucrării.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((item) => (
            <article key={item.title} className="surface-card p-7 text-center hover:shadow-medium transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/60 flex items-center justify-center">
                <img src={item.icon} alt={item.alt} className="w-12 h-12 object-contain" loading="lazy" />
              </div>
              <h3 className="text-black mb-3">{item.title}</h3>
              <p className="text-grey-600 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="tel:0774613207" className="btn-primary px-7 py-3.5 text-base">
            Sună pentru evaluare gratuită
          </a>
        </div>
      </div>
    </section>
  );
}
