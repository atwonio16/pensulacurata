import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { SiteFooter } from "@/sections/SiteFooter";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Politică de confidențialitate | Pensula Curată"
        description="Politica de confidențialitate pentru website-ul pensulacurata.ro."
        canonicalPath="/politica-de-confidentialitate"
        keywords={["politica de confidențialitate", "gdpr", "pensula curată"]}
      />
      <Navbar />

      <section className="bg-white pb-8 pt-[82px] md:pb-10 md:pt-[112px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Politică de confidențialitate
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Date colectate</h2>
              <p className="mt-2">
                Acest site nu are formular de contact și nu solicită creare de cont. Date personale pot fi transmise doar
                direct prin telefon sau WhatsApp, la inițiativa utilizatorului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Scopul prelucrării</h2>
              <p className="mt-2">
                Datele primite prin telefon/WhatsApp sunt folosite exclusiv pentru comunicare, estimare de preț,
                programare și executarea lucrărilor solicitate.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Temei legal</h2>
              <p className="mt-2">
                Prelucrarea are loc în baza interesului legitim pentru comunicare comercială și, după caz, pentru
                executarea unei relații contractuale.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Drepturile tale</h2>
              <p className="mt-2">
                Ai dreptul de acces, rectificare, ștergere, restricționare și opoziție, conform legislației aplicabile.
                Pentru exercitarea drepturilor, ne poți contacta la{" "}
                <a className="inline-flex items-center gap-1.5 font-semibold text-brand" href="tel:0774613207">
                  <PhoneSolidIcon />
                  Sună acum
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">5. Parteneri terți</h2>
              <p className="mt-2">
                Linkurile către WhatsApp sunt furnizate de Meta Platforms. Utilizarea acestor servicii este guvernată de
                politicile proprii ale furnizorului terț.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}






