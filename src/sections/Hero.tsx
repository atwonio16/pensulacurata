import { CheckCircle2 } from "lucide-react";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const mobileBenefits = ["Evaluare gratuită în 24h", "Termen clar de execuție"];
const desktopBenefits = ["Evaluare gratuită în 24h", "Termen clar de execuție", "Garanție 2 ani"];

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  return (
    <section className="bg-white pb-6 pt-24 md:pb-8 md:pt-28 lg:pb-10 lg:pt-32">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-1">
            <h1 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#222] sm:text-[2.7rem] md:text-[3rem] lg:text-[3.4rem]">
              <span className="block lg:whitespace-nowrap">Zugrăveli și finisaje de</span>
              <span className="block">
                <span className="lg:whitespace-nowrap">
                  calitate în <span className="text-brand">Târgoviște</span>
                </span>
              </span>
            </h1>

            <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-[1.55] text-[#222] sm:text-[1.05rem] md:text-[1.12rem]">
              Zugrav în Târgoviște. Lucrări curate, fără stres și fără întârzieri.
              <span className="hidden lg:inline"> </span>
              Ofer zugrăveli interioare și exterioare în Târgoviște și Dâmbovița.
            </p>

            <div className="flex flex-col">
              <div className="mt-4 flex items-center gap-x-5 lg:hidden">
                {mobileBenefits.map((benefit) => (
                  <div key={benefit} className="inline-flex items-center gap-2 text-xs font-medium leading-[1.45] text-[#222] sm:text-[0.95rem]">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
                <button
                  onClick={handleCall}
                  className="cta-base cta-primary inline-flex h-11 items-center justify-center gap-2 rounded-[11px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white sm:h-[49px] sm:px-7 sm:text-base sm:rounded-[12px]"
                >
                  <PhoneSolidIcon />
                  Sună acum
                </button>

                <a
                  href="https://wa.me/40774613207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-base inline-flex h-11 items-center justify-center gap-2 rounded-[11px] border border-transparent bg-[#25D366] px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white sm:h-[49px] sm:rounded-[12px] sm:border-[#e6e3e0] sm:bg-white sm:px-7 sm:text-base sm:text-[#222]"
                >
                  <WhatsAppIcon className="text-white sm:text-[#25D366]" />
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">Scrie pe WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 hidden items-center gap-x-5 gap-y-2 lg:flex">
                {desktopBenefits.map((benefit) => (
                  <div key={benefit} className="inline-flex items-center gap-2 text-xs font-medium leading-[1.45] text-[#222] sm:text-[0.95rem]">
                    <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[540px]">
            <div className="overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-px sm:rounded-[24px]">
              <div className="aspect-[4/3] w-full lg:aspect-[5/4]">
                <img
                  src="/images/zugraveli-interioare-targoviste-camera-alba.jpg"
                  alt="Zugrav profesionist în Târgoviște la final de lucrare interioară"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
