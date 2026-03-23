import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

const trustPoints = [
  "Estimare clară, fără costuri ascunse",
  "Răspuns rapid în aceeași zi",
  "Program flexibil în Târgoviște și Dâmbovița",
];

export function FinalCTA() {
  return (
    <section id="contact" className="bg-white py-14 md:py-16 lg:py-[78px]">
      <div className="container-custom max-w-[1200px]">
        <div className="rounded-2xl border border-[#e7e5e4] bg-white p-6 md:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_370px] lg:gap-10">
            <div>
              <h2 className="mb-4 text-balance">Vrei o ofertă corectă pentru lucrarea ta?</h2>
              <p className="mb-6 max-w-[672px] text-lg leading-[29.25px] text-[#44403c]">
                Spune-mi ce suprafață ai, în ce zonă este lucrarea și ce finisaj îți dorești. Primești un plan clar: cost
                estimativ, durată și pași de execuție.
              </p>

              <ul className="space-y-[10px] pt-2">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-base leading-[26.4px] text-[#44403c]">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#22c55e]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-black p-6 text-white">
              <p className="text-sm text-white">Contact direct</p>
              <p className="mb-4 text-xl font-semibold leading-7 text-white">Alege cum vrei să discutăm</p>

              <div className="space-y-3">
                <a
                  href="tel:0774613207"
                  className="cta-base cta-primary inline-flex h-[43.4px] w-full items-center justify-center gap-2 rounded-[13.6px] bg-brand px-5 font-['Montserrat'] font-bold tracking-[0.04em] text-white"
                >
                  <Phone className="h-4 w-4" />
                  Sună: 0774 613 207
                </a>

                <a
                  href="https://wa.me/40774613207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-base cta-whatsapp inline-flex h-[43.4px] w-full items-center justify-center gap-2 rounded-[13.6px] bg-[#25D366] px-5 font-['Montserrat'] font-bold tracking-[0.04em] text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Scrie pe WhatsApp
                </a>
              </div>

              <p className="mt-3 text-xs font-semibold text-white">Luni - Sâmbătă, 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
