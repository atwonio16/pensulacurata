import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { Footer } from "@/sections/Footer";

export function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Termeni si conditii | Pensula Curata"
        description="Termeni si conditii pentru utilizarea site-ului pensulacurata.ro."
        canonicalPath="/termeni-si-conditii"
        keywords={["termeni si conditii", "pensula curata", "zugraveli targoviste"]}
      />
      <Navbar />

      <section className="bg-white pb-10 pt-[86px] md:pb-14 md:pt-[124px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Termeni si conditii
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Informatii generale</h2>
              <p className="mt-2">
                Website-ul pensulacurata.ro este un site de prezentare pentru servicii de zugraveli oferite in
                Targoviste si in judetul Dambovita.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Utilizarea site-ului</h2>
              <p className="mt-2">
                Prin utilizarea acestui site, confirmi ca vei folosi informatiile in scop legal si ca nu vei afecta
                functionarea site-ului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Servicii si preturi</h2>
              <p className="mt-2">
                Informatiile despre servicii si preturi sunt orientative. Pretul final se stabileste dupa evaluarea
                lucrarii, in functie de suprafata, starea peretilor si complexitate.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Limitarea raspunderii</h2>
              <p className="mt-2">
                Depunem eforturi pentru acuratetea informatiilor, dar nu garantam lipsa erorilor. Site-ul poate fi
                actualizat in orice moment, fara notificare prealabila.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">5. Contact</h2>
              <p className="mt-2">
                Pentru informatii suplimentare: <a className="font-semibold text-brand" href="tel:0774613207">0774 613 207</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
