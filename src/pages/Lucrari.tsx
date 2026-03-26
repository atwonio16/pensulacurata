import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { FinalCTA } from "@/sections/FinalCTA";
import { SiteFooter } from "@/sections/SiteFooter";

interface WorkProject {
  id: string;
  title: string;
  cover: string;
  alt: string;
}

const projects: WorkProject[] = [
  {
    id: "apartament-modern-targoviste",
    title: "Apartament modern",
    cover: "/images/zugraveli-interioare-targoviste-camera-alba.jpg",
    alt: "Camer\u0103 renovat\u0103 \u00een T\u00e2rgovi\u0219te",
  },
  {
    id: "casa-exterior-dambovita",
    title: "Fa\u021bad\u0103 cas\u0103",
    cover: "/images/zugrav-exterior-casa-alba-finisaj-premium.jpg",
    alt: "Cas\u0103 cu finisaj exterior alb \u00een D\u00e2mbovi\u021ba",
  },
  {
    id: "hol-si-tavan",
    title: "Hol \u0219i tavan",
    cover: "/images/zugrav-targoviste-tavan-grinzi-finisaj.jpg",
    alt: "Hol \u0219i tavan cu grinzi din lemn",
  },
  {
    id: "renovare-interior",
    title: "Renovare interior",
    cover: "/images/zugraveli-interior-hol-parchet-finist.jpg",
    alt: "Hol renovat cu protec\u021bie pe pardoseal\u0103",
  },
  {
    id: "zugraveli-exterioare",
    title: "Zugr\u0103veli exterioare",
    cover: "/images/zugrav-exterior-targoviste-vopsire-pereti.jpg",
    alt: "Aplicare vopsea pe exterior",
  },
  {
    id: "finisaje-camera",
    title: "Finisaje camer\u0103",
    cover: "/images/zugraveli-interioare-targoviste-camera-alba.jpg",
    alt: "Camer\u0103 de locuit finisat\u0103 curat",
  },
];

export function Lucrari() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Lucr\u0103ri zugr\u0103veli T\u00e2rgovi\u0219te \u0219i D\u00e2mbovi\u021ba | Pensula Curat\u0103"
        description="Lucr\u0103ri reale de zugr\u0103veli interioare \u0219i exterioare \u00een T\u00e2rgovi\u0219te \u0219i D\u00e2mbovi\u021ba."
        canonicalPath="/lucrari"
        keywords={["lucr\u0103ri zugr\u0103veli t\u00e2rgovi\u0219te", "zugr\u0103veli d\u00e2mbovi\u021ba poze", "portofoliu zugrav"]}
      />

      <Navbar />

      <section className="bg-white pb-10 pt-[82px] md:pt-[112px]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-2 text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#222] md:text-[46px] lg:whitespace-nowrap">
              {"Aici po\u021bi vedea mai multe lucr\u0103ri."}
            </h1>
            <p className="text-[14px] text-[#333] md:text-[16px]">
              {"Galerie real\u0103 din proiecte finalizate, ca s\u0103 vezi clar stilul de execu\u021bie."}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl border border-[#ece9e9] bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <img src={project.cover} alt={project.alt} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-2 left-2 translate-x-[-22px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-bold text-[#111] shadow-sm">{project.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

