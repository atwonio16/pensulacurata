import { CheckCircle2 } from "lucide-react";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const mobileBenefits = ["Evaluare gratuit\u0103 \u00een 24h", "Termen clar de execu\u021bie"];
const desktopBenefits = ["Evaluare gratuit\u0103 \u00een 24h", "Termen clar de execu\u021bie", "Garan\u021bie 2 ani"];

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  return (
    <section className="bg-white pb-6 pt-24 md:pb-8 md:pt-28 lg:pb-10 lg:pt-32">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="order-1 min-w-0 text-center md:text-left">
            <h1 className="text-[clamp(1.7rem,7.4vw,2rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#222] sm:text-[1.75rem] md:text-[2.1rem] lg:text-[2.3rem] xl:text-[2.5rem]">
              <span className="block" style={{ whiteSpace: "nowrap" }}>
                {"Zugr\u0103veli \u0219i finisaje de"}
              </span>
              <span className="block" style={{ whiteSpace: "nowrap" }}>
                {"calitate \u00een "}
                <span className="text-brand">{"T\u00e2rgovi\u0219te"}</span>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-full text-[0.95rem] leading-[1.55] text-[#222] sm:text-[1.05rem] md:mx-0 md:text-[1.12rem] lg:max-w-[62ch]">
              {
                "Zugrav \u00een T\u00e2rgovi\u0219te. Lucr\u0103ri curate, f\u0103r\u0103 stres \u0219i f\u0103r\u0103 \u00eent\u00e2rzieri. Ofer zugr\u0103veli interioare \u0219i exterioare \u00een T\u00e2rgovi\u0219te \u0219i D\u00e2mbovi\u021ba."
              }
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start lg:hidden">
              {mobileBenefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2 text-xs font-medium leading-[1.45] text-[#222] sm:text-[0.95rem]">
                  <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:justify-start">
              <button
                onClick={handleCall}
                className="cta-base cta-primary inline-flex h-11 items-center justify-center gap-2 rounded-[11px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white sm:h-[49px] sm:px-7 sm:text-base sm:rounded-[12px]"
              >
                <PhoneSolidIcon />
                {"Sun\u0103 acum"}
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

            <div className="mt-4 hidden flex-wrap items-center gap-x-5 gap-y-2 lg:flex">
              {desktopBenefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2 text-xs font-medium leading-[1.45] text-[#222] sm:text-[0.95rem]">
                  <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[540px]">
            <div className="overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-px sm:rounded-[24px]">
              <div className="aspect-[4/3] w-full lg:aspect-[5/4]">
                <img
                  src="/images/zugraveli-interioare-targoviste-camera-alba.jpg"
                  alt={"Zugrav profesionist \u00een T\u00e2rgovi\u0219te la final de lucrare interioar\u0103"}
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
