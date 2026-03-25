import { CheckCircle2, Phone } from "lucide-react";

const benefits = ["Evaluare gratuita in 24h", "Termen clar de executie"];

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  return (
    <section className="bg-white pb-9 pt-[74px] md:pt-[122px] lg:pb-[72px] lg:pt-[135px]">
      <div className="container-custom">
        <div className="grid items-center gap-5 lg:grid-cols-[665px_500px] lg:items-start lg:gap-[34px]">
          <div className="order-1 lg:order-1 lg:pt-[91px]">
            <h1 className="max-w-[665px] text-[31px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#222] sm:text-[2.45rem] md:text-[2.85rem] lg:text-[55.8px] lg:leading-[59.6px]">
              Zugraveli si finisaje de calitate in <span className="text-brand">Targoviste</span>
            </h1>

            <p className="mt-4 max-w-[665px] text-[13px] leading-[1.5] text-[#222] sm:text-[17px] md:text-[18px] lg:text-[19.6px] lg:leading-[27.96px]">
              Zugrav in Targoviste. Lucrari curate, fara stres si fara intarzieri.
              <br className="hidden lg:block" />
              Ofer zugraveli interioare si exterioare in Targoviste si Dambovita.
            </p>

            <div className="flex flex-col">
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 sm:order-2 sm:mt-[10px] sm:justify-start sm:gap-x-6 sm:gap-y-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="inline-flex items-center gap-1.5 text-[10.5px] leading-[1.45] text-[#222] sm:gap-2 sm:text-[14.9px] sm:font-medium sm:leading-[24.55px]">
                    <CheckCircle2 className="h-[12px] w-[12px] text-[#22c55e] sm:h-4 sm:w-4" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-3.5 flex flex-col gap-2.5 sm:order-1 sm:mt-7 sm:flex-row sm:items-center sm:gap-[15px]">
                <button
                  onClick={handleCall}
                  className="cta-base cta-primary inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-brand px-4 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white sm:h-[49.6px] sm:px-[28.8px] sm:text-base sm:rounded-[12.8px]"
                >
                  <Phone className="h-5 w-5" />
                  Suna pentru oferta
                </button>

                <a
                  href="https://wa.me/40774613207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-base cta-outline inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e6e3e0] bg-white px-4 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-[#222] sm:h-[53.6px] sm:px-[28.8px] sm:text-base sm:rounded-[12.8px]"
                >
                  Scrie pe WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[500.2px] lg:order-2">
            <div className="overflow-hidden rounded-[16px] border border-[#e7e5e4] bg-white p-px sm:rounded-[24px]">
              <div className="aspect-[16/10] w-full sm:aspect-square">
                <img
                  src="/images/zugraveli-interioare-targoviste-camera-alba.jpg"
                  alt="Zugrav profesionist in Targoviste la final de lucrare interioara"
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
