const images = [
  {
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Finisaj interior hol în Târgoviște",
    style: "plain",
  },
  {
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Zugrăveli exterior casă în Dâmbovița",
    style: "card",
  },
  {
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Detaliu tavan finisat profesional",
    style: "plain",
  },
  {
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Vopsire pereți exterior în lucru",
    style: "card",
  },
] as const;

export function Gallery() {
  return (
    <section id="lucrari" className="bg-white py-14 md:py-16 lg:py-[78px]">
      <div className="container-custom">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="mb-4 text-balance">Lucrări în Târgoviște și Dâmbovița</h2>
          <p className="text-balance text-lg text-[#222]">
            Imagini reale din proiecte finalizate. Fără randări, fără poze de stock, doar lucrări executate de mine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-[30px]">
          {images.map((img, i) => (
            <figure
              key={img.alt}
              className={
                img.style === "card"
                  ? "relative overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-px"
                  : "relative overflow-hidden rounded-2xl"
              }
            >
              <div className="aspect-[583/416] w-full">
                <img src={img.src} alt={img.alt} loading={i > 1 ? "lazy" : "eager"} className="h-full w-full object-cover" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
