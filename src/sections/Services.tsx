const services = [
  {
    title: "Zugrăveli interioare în Târgoviște",
    description: "Pereți și tavane cu finisaj uniform, aplicare lavabilă și protecție completă pentru mobilier.",
    icon: "/images/icons/service-interior-3d.png",
    alt: "Icon 3D pentru zugrăveli interioare",
  },
  {
    title: "Zugrăveli exterioare în Dâmbovița",
    description: "Vopsire fațade cu materiale rezistente, pregătire corectă a suprafeței și aplicare atentă.",
    icon: "/images/icons/service-exterior-3d.png",
    alt: "Icon 3D pentru zugrăveli exterioare",
  },
  {
    title: "Glet și reparații pereți",
    description: "Corectez fisuri, găuri și denivelări înainte de vopsire pentru un rezultat profesionist.",
    icon: "/images/icons/service-repair-3d.png",
    alt: "Icon 3D pentru glet și reparații pereți",
  },
];

export function Services() {
  return (
    <section id="servicii" className="bg-white py-14 md:py-16 lg:pb-[78px] lg:pt-[72px]">
      <div className="container-custom">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <h2 className="mb-4 text-balance">Zugrăveli în Târgoviște cu standard profesional</h2>
          <p className="text-balance text-lg text-[#222]">
            Fie că renovezi un apartament, o casă sau un spațiu comercial, primești o lucrare curată, bine organizată și
            livrată la termen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-[30px]">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative rounded-2xl border border-[#f2f2f2] bg-white p-[24.8px]"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f5f5f5] bg-white p-px">
                <img src={service.icon} alt={service.alt} className="h-10 w-10 object-contain" loading="lazy" />
              </div>

              <h3 className="mb-2.5 text-[21.6px] leading-[29.7px] tracking-[-0.02em] text-[#222]">{service.title}</h3>
              <p className="text-sm leading-[22.75px] text-[#222]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="tel:0774613207"
            className="cta-base cta-primary inline-flex h-[49.6px] items-center justify-center rounded-[12.8px] bg-brand px-[28.8px] font-['Montserrat'] font-bold tracking-[0.04em] text-white"
          >
            Cere o evaluare gratuită
          </a>
        </div>
      </div>
    </section>
  );
}
