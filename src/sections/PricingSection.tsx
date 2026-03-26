import { CheckCircle2 } from "lucide-react";

const includes = [
  "Protecție suprafețe și mascări",
  "Amorsă unde este necesar",
  "2 straturi de vopsea lavabilă",
  "Finisaj curat, atent la detalii",
];

export function PricingSection() {
  return (
    <section id="preturi" className="bg-white py-6 md:py-10 lg:py-11">
      <div className="container-custom">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <h2 className="mb-2 text-balance text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">
            Prețuri Zugrăveli
          </h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            Pentru majoritatea lucrărilor, manopera este între <strong>15 și 25 lei/m²</strong>, în funcție de
            complexitate și pregătirea pereților.
          </p>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <article className="self-start rounded-2xl border border-[#ece9e9] bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.03)] md:p-6">
            <h3 className="text-[17px] font-extrabold leading-[1.18] tracking-[-0.015em] text-[#111] md:whitespace-nowrap md:text-[22px]">
              Preț corect pentru o lucrare bine făcută:
            </h3>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#78716c]">
              Estimare transparentă
            </p>
            <p className="mt-3 text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#111] md:text-[46px]">
              <span className="text-[#f97316]">15 - 25</span>{" "}
              <span className="text-[0.52em] align-[0.16em] font-bold tracking-[-0.015em] text-[#111]">lei/m²</span>
            </p>

            <div className="mt-5 space-y-4 text-[12px] leading-[1.62] text-[#44403c] md:text-[14px]">
              <p>
                Intervalul 15-25 lei/m² acoperă manopera pentru zugrăveli realizate curat, cu atenție la detalii și fără
                compromis la calitate.
              </p>
              <p>
                Costul final se stabilește după evaluare, în funcție de starea pereților și pregătirea necesară. Primești preț
                clar din start și standard de lucru cu 2 straturi de lavabilă.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-[12px] leading-[1.42] text-[#222] md:text-[14px]">
                  <CheckCircle2 className="mt-[1px] h-4 w-4 flex-shrink-0 text-[#22c55e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="self-start">
            <div className="overflow-hidden rounded-xl border border-[#ece9e9] bg-white md:max-w-[540px]">
              <div className="aspect-[16/9] w-full">
                <img
                  src="/images/zugraveli-interior-hol-parchet-finist.jpg"
                  alt="Lucrare de zugrăveli interioare finalizată în Târgoviște"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="mt-3 text-center text-[14px] font-extrabold leading-[1.16] tracking-[-0.02em] whitespace-nowrap text-[#111] md:text-left md:text-[22px] lg:text-[24px]">
              Uite ce lucrare am finalizat pentru doar <span className="text-[#f97316]">500 lei</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

