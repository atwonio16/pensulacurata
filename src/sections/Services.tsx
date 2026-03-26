import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";

const services = [
  {
    title: "Zugr\u0103veli interioare",
    description: "Pere\u021bi \u0219i tavane cu finisaj uniform, aplicare lavabil\u0103 \u0219i protec\u021bie complet\u0103 pentru mobilier.",
    icon: "/images/icons/service-repair-new.png",
    alt: "Icon trafalet pentru zugr\u0103veli interioare",
  },
  {
    title: "Zugr\u0103veli exterioare",
    description: "Vopsire fa\u021bade cu materiale rezistente, preg\u0103tire corect\u0103 a suprafe\u021bei \u0219i aplicare atent\u0103.",
    icon: "/images/icons/service-exterior-house-new.png",
    alt: "Icon cas\u0103 pentru zugr\u0103veli exterioare",
  },
  {
    title: "Glet \u0219i repara\u021bii pere\u021bi",
    description: "Corectez fisuri, g\u0103uri \u0219i denivel\u0103ri \u00eenainte de vopsire pentru un rezultat profesionist.",
    icon: "/images/icons/service-exterior-new.png",
    alt: "Icon perete albastru pentru glet \u0219i repara\u021bii pere\u021bi",
  },
] as const;

export function Services() {
  return (
    <section id="servicii" className="bg-white py-6 md:py-9 lg:py-10">
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-9">
          <h2 className="mb-2 text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)] md:whitespace-nowrap">
            {"Serviciile noastre"}
          </h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            {"Fie c\u0103 renovezi un apartament, o cas\u0103 sau un spa\u021biu comercial, prime\u0219ti o lucrare curat\u0103, bine organizat\u0103 \u0219i livrat\u0103 la termen."}
          </p>
        </div>

        <div className="grid gap-2.5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative rounded-2xl border border-[#f2f2f2] bg-white p-3.5 md:p-5"
            >
              <div className="mb-2.5 flex h-8 w-8 items-center justify-center md:mb-3 md:h-14 md:w-14">
                <img src={service.icon} alt={service.alt} className="h-6 w-6 object-contain md:h-12 md:w-12" loading="lazy" />
              </div>

              <h3 className="mb-1 text-[18px] leading-[1.25] tracking-[-0.02em] text-[#222] md:mb-2.5 md:text-[21.6px] md:leading-[29.7px]">
                {service.title}
              </h3>
              <p className="text-[12px] leading-[1.45] text-[#222] md:text-sm md:leading-[22.75px]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-center md:mt-8">
          <a
            href="tel:0774613207"
            className="cta-base cta-primary inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[49.6px] md:rounded-[12.8px] md:px-[28.8px] md:text-base"
          >
            <PhoneSolidIcon />
            {"Cere ofert\u0103 rapid\u0103"}
          </a>
        </div>
      </div>
    </section>
  );
}
