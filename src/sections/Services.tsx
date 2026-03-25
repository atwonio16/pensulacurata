const services = [
  {
    title: "Zugrăveli interioare în Târgoviște",
    description: "Pereți și tavane cu finisaj uniform, aplicare lavabilă și protecție completă pentru mobilier.",
    icon: "/images/icons/service-repair-new.png",
    alt: "Icon trafalet pentru zugrăveli interioare",
  },
  {
    title: "Zugrăveli exterioare în Dâmbovița",
    description: "Vopsire fațade cu materiale rezistente, pregătire corectă a suprafeței și aplicare atentă.",
    icon: "/images/icons/service-exterior-house-new.png",
    alt: "Icon casă pentru zugrăveli exterioare",
  },
  {
    title: "Glet și reparații pereți",
    description: "Corectez fisuri, găuri și denivelări înainte de vopsire pentru un rezultat profesionist.",
    icon: "/images/icons/service-exterior-new.png",
    alt: "Icon perete albastru pentru glet și reparații pereți",
  },
];

export function Services() {
  return (
    <section id="servicii" className="bg-white py-10 md:py-16 lg:pb-[78px] lg:pt-[72px]">
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-11">
          <h2 className="mb-2 text-balance text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">
            Zugrăveli în Târgoviște cu standard profesional
          </h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            Fie că renovezi un apartament, o casă sau un spațiu comercial, primești o lucrare curată, bine organizată și
            livrată la termen.
          </p>
        </div>

        <div className="grid gap-2.5 md:grid-cols-3 md:gap-6 lg:gap-[30px]">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative rounded-2xl border border-[#f2f2f2] bg-white p-3.5 md:p-[24.8px]"
            >
              <div className="mb-2.5 flex h-8 w-8 items-center justify-center md:mb-4 md:h-16 md:w-16">
                <img src={service.icon} alt={service.alt} className="h-6 w-6 object-contain md:h-12 md:w-12" loading="lazy" />
              </div>

              <h3 className="mb-1 text-[18px] leading-[1.25] tracking-[-0.02em] text-[#222] md:mb-2.5 md:text-[21.6px] md:leading-[29.7px]">
                {service.title}
              </h3>
              <p className="text-[12px] leading-[1.45] text-[#222] md:text-sm md:leading-[22.75px]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:mt-10">
          <a
            href="tel:0774613207"
            className="cta-base cta-primary inline-flex h-10 items-center justify-center rounded-[10px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[49.6px] md:rounded-[12.8px] md:px-[28.8px] md:text-base"
          >
            Cere o evaluare gratuită
          </a>
        </div>
      </div>
    </section>
  );
}
