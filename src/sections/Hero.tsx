import { CheckCircle2, Phone } from "lucide-react";

const benefits = ["Evaluare gratuita in 24h", "Garantie 2 ani", "Termen clar de executie"];

export function Hero() {
  const handleCall = () => {
    window.location.href = "tel:0774613207";
  };

  return (
    <section className="bg-white pb-12 pt-[110px] md:pt-[122px] lg:pb-[72px] lg:pt-[135px]">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-[665px_500px] lg:items-start lg:gap-[34px]">
          <div className="order-2 lg:order-1 lg:pt-[91px]">
            <h1 className="max-w-[665px] text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#222] sm:text-[2.45rem] md:text-[2.85rem] lg:text-[55.8px] lg:leading-[59.6px]">
              Zugraveli si finisaje de calitate in <span className="text-brand">Targoviste</span>
            </h1>

            <p className="mt-5 max-w-[665px] text-base font-medium leading-[1.6] text-[#222] sm:text-[17px] md:text-[18px] lg:text-[19.6px] lg:leading-[27.96px]">
              Zugrav in Targoviste. Lucrari curate, fara stres si fara intarzieri.
              <br className="hidden lg:block" />
              Ofer zugraveli interioare si exterioare in Targoviste si Dambovita.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[15px]">
              <button
                onClick={handleCall}
                className="cta-base cta-primary inline-flex h-[49.6px] items-center justify-center gap-2 rounded-[12.8px] bg-brand px-[28.8px] font-['Montserrat'] font-bold tracking-[0.04em] text-white"
              >
                <Phone className="h-5 w-5" />
                Suna pentru oferta
              </button>

              <a
                href="https://wa.me/40774613207"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-base cta-outline inline-flex h-[53.6px] items-center justify-center rounded-[12.8px] border border-[#e6e3e0] bg-white px-[28.8px] font-['Montserrat'] font-bold tracking-[0.04em] text-[#222]"
              >
                Scrie pe WhatsApp
              </a>
            </div>

            <div className="mt-[10px] flex flex-wrap items-center gap-x-6 gap-y-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2 text-[14.9px] font-medium leading-[24.55px] text-[#222]">
                  <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[500.2px] lg:order-2">
            <div className="overflow-hidden rounded-[24px] border border-[#e7e5e4] bg-white p-px">
              <div className="aspect-square w-full">
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
