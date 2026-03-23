const benefits = [
  {
    title: "Lucrez curat",
    description: "Acopăr tot înainte de lucru și las curat după. Nu trebuie să faci curat după mine.",
    icon: "/images/icon-clean.png",
    alt: "Icon lucrări curate",
  },
  {
    title: "Respect termenul",
    description: "Stabilim un termen și îl respect. Fără întârzieri sau scuze.",
    icon: "/images/icon-time.png",
    alt: "Icon respect termen",
  },
  {
    title: "Preț corect de la început",
    description: "Spun prețul clar de la început. Fără costuri ascunse sau surprize.",
    icon: "/images/icon-price.png",
    alt: "Icon preț corect",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <h2 className="text-black text-2xl md:text-3xl mb-3">
            De ce mă aleg clienții din Târgoviște
          </h2>
          <p className="text-grey-600">
            Lucrez curat, respect termenul și spun lucrurilor pe nume.
          </p>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-sm border border-grey-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              {/* Icon Image */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center shadow-inner">
                <img 
                  src={item.icon} 
                  alt={item.alt}
                  className="w-12 h-12 object-contain drop-shadow-md"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-black text-xl mb-3">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-grey-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a 
            href="tel:0774613207"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-10 py-5 rounded-lg transition-colors text-lg shadow-lg shadow-brand/20"
          >
            Cere ofertă gratuită
          </a>
          <p className="text-grey-500 text-sm mt-4">
            Răspund în maxim 24h
          </p>
        </div>
      </div>
    </section>
  );
}
