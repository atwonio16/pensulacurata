import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { Footer } from "@/sections/Footer";
import { FinalCTA } from "@/sections/FinalCTA";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    src: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Zugrăveli interioare în hol de apartament din Târgoviște",
    title: "Zugrăveli interioare apartament",
    area: "Târgoviște",
  },
  {
    src: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Casă cu finisaj exterior alb realizat în Dâmbovița",
    title: "Fațadă casă - finisaj premium",
    area: "Dâmbovița",
  },
  {
    src: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Tavan cu grinzi și pereți finisați curat în Târgoviște",
    title: "Finisaje interioare cu detalii",
    area: "Târgoviște",
  },
  {
    src: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Aplicare vopsea exterior pe pereți în județul Dâmbovița",
    title: "Zugrăveli exterioare în execuție",
    area: "Dâmbovița",
  },
];

export function Lucrari() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Lucrări Zugrăveli Târgoviște și Dâmbovița | Portofoliu Pensula Curată"
        description="Portofoliu real cu lucrări de zugrăveli interioare și exterioare în Târgoviște și Dâmbovița. Vezi finisaje, detalii și cere o ofertă rapidă."
        canonicalPath="/lucrari"
        keywords={[
          "lucrări zugrăveli Târgoviște",
          "portofoliu zugrav Târgoviște",
          "zugrăveli Dâmbovița poze",
          "zugrav interior Târgoviște lucrări",
          "zugrăveli exterioare Dâmbovița",
        ]}
      />

      <Navbar />
      <section className="bg-white pb-10 pt-[86px] md:pb-14 md:pt-[124px] lg:pb-[70px]">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand md:text-[13px]">
              Portofoliu Pensula Curată
            </p>
            <h1 className="mb-3 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#222] md:mb-5 md:text-[52px]">
              Lucrări Reale de Zugrăveli în Târgoviște și Dâmbovița
            </h1>
            <p className="mx-auto max-w-3xl text-[14px] leading-[1.6] text-[#333] md:text-[19px] md:leading-[1.65]">
              Materialele bune și execuția atentă se văd în rezultat. Mai jos găsești proiecte reale finalizate de mine:
              zugrăveli interioare, zugrăveli exterioare, glet și reparații pereți pentru apartamente și case.
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row md:mt-7">
              <a
                href="tel:0774613207"
                className="cta-base cta-primary inline-flex h-10 items-center justify-center rounded-[10px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[49px] md:rounded-[12px] md:px-8 md:text-[15px]"
              >
                Sună pentru ofertă
              </a>
              <Link
                to="/#contact"
                className="cta-base cta-outline inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e5e4e2] bg-white px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-[#222] md:h-[49px] md:rounded-[12px] md:px-8 md:text-[15px]"
              >
                Cere estimare rapidă
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-5 lg:gap-6">
            {portfolioItems.map((item) => (
              <article
                key={item.alt}
                className="overflow-hidden rounded-2xl border border-[#ece9e9] bg-white"
              >
                <div className="aspect-[16/11] w-full">
                  <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="px-3.5 pb-3.5 pt-3 md:px-5 md:pb-5 md:pt-4">
                  <div className="mb-1.5 inline-flex rounded-full border border-[#ebe8e6] bg-[#fdfdfc] px-2.5 py-1 text-[10px] font-semibold text-[#6b6764] md:text-[11px]">
                    {item.area}
                  </div>
                  <h2 className="text-[17px] leading-[1.3] tracking-[-0.02em] text-[#222] md:text-[22px]">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
