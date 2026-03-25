import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

const trustPoints = [
  "Estimare clară, fără costuri ascunse",
  "Răspuns rapid în aceeași zi",
  "Program flexibil în Târgoviște și Dâmbovița",
];

export function FinalCTA() {
  return (
    <section id="contact" className="bg-white py-10 md:py-16 lg:py-[78px]">
      <div className="container-custom max-w-[1200px]">
        <div className="rounded-2xl border border-[#e7e5e4] bg-white p-4 md:p-8 lg:p-12">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_370px] lg:gap-10">
            <div>
              <h2 className="mb-2 text-balance text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">Vrei o ofertă corectă pentru lucrarea ta?</h2>
              <p className="mb-4 max-w-[672px] text-[13px] leading-[1.55] text-[#44403c] md:mb-6 md:text-lg md:leading-[29.25px]">
                Spune-mi ce suprafață ai, în ce zonă este lucrarea și ce finisaj îți dorești. Primești un plan clar: cost
                estimativ, durată și pași de execuție.
              </p>

              <ul className="space-y-2 pt-1 md:space-y-[10px] md:pt-2">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[12px] leading-[1.5] text-[#44403c] md:text-base md:leading-[26.4px]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#22c55e] md:mt-1 md:h-5 md:w-5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-black p-4 text-white md:p-6">
              <p className="text-[12px] text-white md:text-sm">Contact direct</p>
              <p className="mb-4 text-[22px] font-semibold leading-[1.15] text-white md:text-xl md:leading-7">Alege cum vrei să discutăm</p>

              <div className="space-y-3">
                <a
                  href="tel:0774613207"
                  className="cta-base cta-primary inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[43.4px] md:rounded-[13.6px] md:text-base"
                >
                  <Phone className="h-4 w-4" />
                  Sună: 0774 613 207
                </a>

                <a
                  href="https://wa.me/40774613207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-base cta-whatsapp inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-[#25D366] px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[43.4px] md:rounded-[13.6px] md:text-base"
                >
                  <MessageCircle className="h-4 w-4" />
                  Scrie pe WhatsApp
                </a>
              </div>

              <p className="mt-3 text-[11px] font-semibold text-white md:text-xs">Luni - Sâmbătă, 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
