import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { Footer } from "@/sections/Footer";

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Politica de confidentialitate | Pensula Curata"
        description="Politica de confidentialitate pentru website-ul pensulacurata.ro."
        canonicalPath="/politica-de-confidentialitate"
        keywords={["politica de confidentialitate", "gdpr", "pensula curata"]}
      />
      <Navbar />

      <section className="bg-white pb-10 pt-[86px] md:pb-14 md:pt-[124px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Politica de confidentialitate
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Date colectate</h2>
              <p className="mt-2">
                Acest site nu are formular de contact si nu solicita creare de cont. Date personale pot fi transmise doar
                direct prin telefon sau WhatsApp, la initiativa utilizatorului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Scopul prelucrarii</h2>
              <p className="mt-2">
                Datele primite prin telefon/WhatsApp sunt folosite exclusiv pentru comunicare, estimare de pret,
                programare si executarea lucrarilor solicitate.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Temei legal</h2>
              <p className="mt-2">
                Prelucrarea are loc in baza interesului legitim pentru comunicare comerciala si, dupa caz, pentru
                executarea unei relatii contractuale.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Drepturile tale</h2>
              <p className="mt-2">
                Ai dreptul de acces, rectificare, stergere, restrictionare si opozitie, conform legislatiei aplicabile.
                Pentru exercitarea drepturilor, ne poti contacta la <a className="font-semibold text-brand" href="tel:0774613207">0774 613 207</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">5. Parteneri terti</h2>
              <p className="mt-2">
                Linkurile catre WhatsApp sunt furnizate de Meta Platforms. Utilizarea acestor servicii este guvernata de
                politicile proprii ale furnizorului tert.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
