const images = [
  {
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Zugrav Târgoviște - Finisaj interior hol cu parchet",
    label: "Finisaj interior",
  },
  {
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Zugrăveli exterior Târgoviște - Casă albă finisaj premium",
    label: "Zugrăveli exterior",
  },
  {
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Zugrav Târgoviște - Detalii tavan cu grinzi finisate",
    label: "Detalii tavan",
  },
  {
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Zugrav exterior Târgoviște - Vopsire pereți în lucru",
    label: "În lucru",
  },
];

export function Gallery() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="lucrari" className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom max-w-4xl">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Lucrări recente în Târgoviște
          </h2>
          <p className="text-grey-600">
            Exemple reale de lucrări executate în Târgoviște și Dâmbovița.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center justify-center gap-2 text-brand font-medium hover:text-brand-dark transition-colors"
          >
            Vezi toate lucrările
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
