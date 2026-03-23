import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const mainAreas = ["Târgoviște", "Moreni", "Pucioasa", "Găești", "Titu"];
const rightBenefits = ["Estimare gratuită în 24h", "Termen de execuție stabilit clar", "Protecție mobilier și curățenie la final"];

export function LocalSEOSection() {
  return (
    <section className="section-wrap border-t border-grey-100 bg-white" aria-labelledby="local-seo-title">
      <div className="container-custom max-w-6xl">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 lg:gap-8 items-start">
          <article className="surface-card p-6 md:p-8">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              Servicii locale în Târgoviște și Dâmbovița
            </p>

            <h2 id="local-seo-title" className="mb-4 text-balance">
              Zugrav Târgoviște – servicii profesionale de zugrăveli în Dâmbovița
            </h2>

            <p className="text-grey-700 leading-relaxed mb-4">
              Dacă ai nevoie de un <strong>zugrav în Târgoviște</strong> pentru apartament, casă sau spațiu comercial, îți ofer lucrări curate,
              organizate și executate la termen. Realizez <strong>zugrăveli în Târgoviște</strong>, aplicare de lavabilă, reparații pereți,
              glet și finisaje complete.
            </p>

            <p className="text-grey-700 leading-relaxed mb-6">
              Lucrez în tot județul, inclusiv pentru cereri de <strong>zugrav în Dâmbovița</strong> și <strong>zugrăveli în Dâmbovița</strong>.
              Îți spun din start costul, durata lucrării și materialele recomandate, astfel încât să ai un proces clar și predictibil.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-grey-200 bg-grey-50/60 p-4">
                <h3 className="font-semibold text-black mb-1">Zugrăveli interioare</h3>
                <p className="text-sm text-grey-600">Lavabilă, pregătire pereți, reparații și finisaj uniform.</p>
              </div>
              <div className="rounded-xl border border-grey-200 bg-grey-50/60 p-4">
                <h3 className="font-semibold text-black mb-1">Zugrăveli exterioare</h3>
                <p className="text-sm text-grey-600">Vopsire fațade și suprafețe expuse la intemperii.</p>
              </div>
              <div className="rounded-xl border border-grey-200 bg-grey-50/60 p-4 sm:col-span-2">
                <h3 className="font-semibold text-black mb-1">Glet, reparații și lavabilă</h3>
                <p className="text-sm text-grey-600">Corectez fisuri și imperfecțiuni înainte de vopsire pentru un rezultat profesionist.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/zugraveli-targoviste" className="btn-secondary text-sm px-4 py-2.5">
                Pagina „Zugrăveli Târgoviște”
              </Link>
              <Link to="/zugraveli-dambovita" className="btn-secondary text-sm px-4 py-2.5">
                Pagina „Zugrăveli Dâmbovița”
              </Link>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="surface-card p-6">
              <h3 className="text-black text-lg mb-3">Zone acoperite rapid</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {mainAreas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full text-sm bg-grey-100 text-grey-700 border border-grey-200">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-grey-600">Programări pentru Târgoviște și localitățile din Dâmbovița, în funcție de disponibilitate.</p>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-black text-lg mb-3">De ce lucrează clienții cu mine</h3>
              <ul className="space-y-2.5">
                {rightBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-grey-700">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/20 bg-black p-6 shadow-medium">
              <p className="text-white text-sm mb-2">Vrei o estimare rapidă?</p>
              <h3 className="text-xl text-white font-semibold mb-5">Spune ce ai de făcut și îți răspund clar.</h3>
              <a href="tel:0774613207" className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-lg transition-colors">
                <Phone className="w-4 h-4" />
                Sună: 0774 613 207
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
