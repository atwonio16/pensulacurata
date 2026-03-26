import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { SiteFooter } from "@/sections/SiteFooter";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";

export function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Termeni și condiții | Pensula Curată"
        description="Termeni și condiții pentru utilizarea site-ului pensulacurata.ro."
        canonicalPath="/termeni-si-conditii"
        keywords={["termeni și condiții", "pensula curată", "zugrăveli târgoviște"]}
      />
      <Navbar />

      <section className="bg-white pb-8 pt-[82px] md:pb-10 md:pt-[112px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Termeni și condiții
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Informații generale</h2>
              <p className="mt-2">
                Website-ul pensulacurata.ro este un site de prezentare pentru servicii de zugrăveli oferite în
                Târgoviște și în județul Dâmbovița.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Utilizarea site-ului</h2>
              <p className="mt-2">
                Prin utilizarea acestui site, confirmi că vei folosi informațiile în scop legal și că nu vei afecta
                funcționarea site-ului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Servicii și prețuri</h2>
              <p className="mt-2">
                Informațiile despre servicii și prețuri sunt orientative. Prețul final se stabilește după evaluarea
                lucrării, în funcție de suprafață, starea pereților și complexitate.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Limitarea răspunderii</h2>
              <p className="mt-2">
                Depunem eforturi pentru acuratețea informațiilor, dar nu garantăm lipsa erorilor. Site-ul poate fi
                actualizat în orice moment, fără notificare prealabilă.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">5. Contact</h2>
              <p className="mt-2">
                Pentru informații suplimentare:{" "}
                <a className="inline-flex items-center gap-1.5 font-semibold text-brand" href="tel:0774613207">
                  <PhoneSolidIcon />
                  Sună acum
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}






