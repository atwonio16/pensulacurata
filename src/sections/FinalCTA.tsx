import { CheckCircle2, Clock3, MessageCircle, Phone } from "lucide-react";

const trustPoints = ["Estimare clară, fără costuri ascunse", "Răspuns rapid în aceeași zi", "Program flexibil în Târgoviște și Dâmbovița"];

export function FinalCTA() {
  return (
    <section id="contact" className="section-wrap border-t border-grey-100 bg-white">
      <div className="container-custom max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-grey-200 bg-gradient-to-br from-white via-grey-50 to-white shadow-medium">
          <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-14 w-52 h-52 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative p-6 md:p-10 lg:p-12 grid lg:grid-cols-[1fr_370px] gap-8 lg:gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
                <Clock3 className="w-4 h-4" />
                Evaluare gratuită în 24h
              </p>

              <h2 className="mb-4 text-balance">Vrei o ofertă corectă pentru lucrarea ta?</h2>
              <p className="text-grey-700 max-w-2xl mb-6 leading-relaxed text-lg">
                Spune-mi ce suprafață ai, în ce zonă este lucrarea și ce finisaj îți dorești. Primești un plan clar:
                cost estimativ, durată și pași de execuție.
              </p>

              <ul className="space-y-2.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-grey-700">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black text-white rounded-2xl p-5 md:p-6 shadow-strong">
              <p className="text-white text-sm mb-1">Contact direct</p>
              <p className="text-xl font-semibold text-white mb-5">Alege cum vrei să discutăm</p>

              <div className="space-y-3">
                <a
                  href="tel:0774613207"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Sună acum
                </a>

                <a
                  href="https://wa.me/40774613207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb85c] text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Scrie pe WhatsApp
                </a>
              </div>

              <p className="text-white text-sm mt-4">
                Telefon: <a href="tel:0774613207" className="underline underline-offset-2">0774 613 207</a>
              </p>
              <p className="text-white text-xs mt-1">Luni - Sâmbătă, 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
