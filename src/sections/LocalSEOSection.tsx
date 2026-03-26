import { CheckCircle2 } from "lucide-react";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";

const mainAreas = ["Târgoviște", "Moreni", "Pucioasa", "Găești", "Titu"];
const bottomBenefits = [
  "Estimare gratuită în 24h",
  "Termen de execuție stabilit clar",
  "Protecție mobilier și curățenie la final",
];

export function LocalSEOSection() {
  return (
    <section id="zone-acoperite" className="bg-white py-6 md:py-10 lg:py-11" aria-labelledby="local-seo-title">
      <div className="container-custom max-w-[1200px]">
        <div className="grid items-start gap-6 lg:grid-cols-[596px_508px] lg:gap-8">
          <article className="rounded-2xl border border-[#f2f2f2] bg-white p-4 md:p-[32.8px]">
            <h2 id="local-seo-title" className="mb-3 text-balance text-[24px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">
              Zugrav Târgoviște - servicii profesionale de zugrăveli în Dâmbovița
            </h2>

            <p className="mb-3 text-[13px] leading-[1.55] text-[#44403c] md:mb-4 md:text-base md:leading-relaxed">
              Dacă ai nevoie de un <strong>zugrav în Târgoviște</strong> pentru apartament, casă sau spațiu comercial, îți ofer
              lucrări curate, organizate și executate la termen. Realizez <strong>zugrăveli în Târgoviște</strong>, aplicare de
              lavabilă, reparații pereți, glet și finisaje complete.
            </p>

            <p className="text-[13px] leading-[1.55] text-[#44403c] md:text-base md:leading-relaxed">
              Lucrez în tot județul, inclusiv pentru cereri de <strong>zugrav în Dâmbovița</strong> și <strong>zugrăveli în Dâmbovița</strong>.
              Îți spun din start costul, durata lucrării și materialele recomandate, astfel încât să ai un proces clar și
              predictibil.
            </p>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#f2f2f2] bg-white p-4 md:p-[24.8px]">
              <h3 className="mb-3 text-[18px] text-black md:text-lg">Zone acoperite rapid</h3>

              <div className="mb-4 flex flex-wrap gap-2">
                {mainAreas.map((area) => (
                  <span key={area} className="rounded-full border border-grey-200 bg-[#fdfdfc] px-3 py-1 text-[12px] text-grey-700 md:text-sm">
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-[12px] leading-[1.5] text-[#57534e] md:text-sm md:leading-6">
                Programări pentru Târgoviște și localitățile din Dâmbovița, în funcție de disponibilitate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-4 md:p-[24.8px]">
              <p className="mb-2 text-[12px] text-white md:text-sm">Vrei o estimare rapidă?</p>
              <h3 className="mb-4 text-[20px] font-semibold leading-[1.2] text-white md:mb-5 md:text-xl">Spune ce ai de făcut și îți răspund clar.</h3>

              <a
                href="tel:0774613207"
                className="cta-base cta-primary inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[52px] md:rounded-[13.6px] md:text-base"
              >
                <PhoneSolidIcon />
                Sună pentru estimare
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 md:mt-7 md:gap-x-7 md:gap-y-2">
          {bottomBenefits.map((item) => (
            <div key={item} className="inline-flex items-center gap-1.5 text-[10.5px] text-grey-700 md:gap-2 md:text-sm">
              <CheckCircle2 className="h-[12px] w-[12px] text-[#22c55e] md:h-4 md:w-4" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



