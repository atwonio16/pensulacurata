const images = [
  {
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Finisaj interior hol în Târgoviște",
    label: "Finisaj interior",
  },
  {
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Zugrăveli exterior casă în Dâmbovița",
    label: "Fațadă exterior",
  },
  {
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Detaliu tavan finisat profesional",
    label: "Detalii tavan",
  },
  {
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Vopsire pereți exterior în lucru",
    label: "Execuție în lucru",
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
    <section id="lucrari" className="section-wrap border-t border-grey-100 bg-grey-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex rounded-full bg-white border border-grey-200 px-4 py-1.5 text-sm font-semibold text-grey-700 mb-4">Portofoliu</p>
          <h2 className="mb-4 text-balance">Lucrări recente în Târgoviște și Dâmbovița</h2>
          <p className="text-grey-600 text-lg text-balance">
            Imagini reale din proiecte finalizate. Fără randări, fără poze de stock, doar lucrări executate de mine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {images.map((img, i) => (
            <figure key={i} className="relative overflow-hidden rounded-2xl border border-grey-200 bg-white shadow-soft group">
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <span className="text-white text-sm md:text-base font-semibold">{img.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => scrollToSection("#contact")} className="btn-secondary px-7 py-3.5 text-base">
            Vreau ofertă pentru lucrarea mea
          </button>
        </div>
      </div>
    </section>
  );
}
