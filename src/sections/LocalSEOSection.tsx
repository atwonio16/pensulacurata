import { CheckCircle2, Phone } from "lucide-react";

const mainAreas = ["Târgoviște", "Moreni", "Pucioasa", "Găești", "Titu"];
const bottomBenefits = [
  "Estimare gratuită în 24h",
  "Termen de execuție stabilit clar",
  "Protecție mobilier și curățenie la final",
];

export function LocalSEOSection() {
  return (
    <section id="preturi" className="bg-white py-14 md:py-16 lg:py-[78px]" aria-labelledby="local-seo-title">
      <div className="container-custom max-w-[1200px]">
        <div className="grid items-start gap-6 lg:grid-cols-[596px_508px] lg:gap-8">
          <article className="rounded-2xl border border-[#f2f2f2] bg-white p-6 md:p-[32.8px]">
            <h2 id="local-seo-title" className="mb-4 text-balance">
              Zugrav Târgoviște - servicii profesionale de zugrăveli în Dâmbovița
            </h2>

            <p className="mb-4 leading-relaxed text-[#44403c]">
              Dacă ai nevoie de un <strong>zugrav în Târgoviște</strong> pentru apartament, casă sau spațiu comercial, îți ofer
              lucrări curate, organizate și executate la termen. Realizez <strong>zugrăveli în Târgoviște</strong>, aplicare de
              lavabilă, reparații pereți, glet și finisaje complete.
            </p>

            <p className="leading-relaxed text-[#44403c]">
              Lucrez în tot județul, inclusiv pentru cereri de <strong>zugrav în Dâmbovița</strong> și <strong>zugrăveli în Dâmbovița</strong>.
              Îți spun din start costul, durata lucrării și materialele recomandate, astfel încât să ai un proces clar și
              predictibil.
            </p>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#f2f2f2] bg-white p-[24.8px]">
              <h3 className="mb-3 text-lg text-black">Zone acoperite rapid</h3>

              <div className="mb-4 flex flex-wrap gap-2">
                {mainAreas.map((area) => (
                  <span key={area} className="rounded-full border border-grey-200 bg-[#fdfdfc] px-3 py-1 text-sm text-grey-700">
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-6 text-[#57534e]">
                Programări pentru Târgoviște și localitățile din Dâmbovița, în funcție de disponibilitate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-[24.8px]">
              <p className="mb-2 text-sm text-white">Vrei o estimare rapidă?</p>
              <h3 className="mb-5 text-xl font-semibold text-white">Spune ce ai de făcut și îți răspund clar.</h3>

              <a
                href="tel:0774613207"
                className="cta-base cta-primary inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[13.6px] bg-brand px-5 font-['Montserrat'] font-bold tracking-[0.04em] text-white"
              >
                <Phone className="h-[18px] w-[18px]" />
                Sună: 0774 613 207
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {bottomBenefits.map((item) => (
            <div key={item} className="inline-flex items-center gap-2 text-sm text-grey-700">
              <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
