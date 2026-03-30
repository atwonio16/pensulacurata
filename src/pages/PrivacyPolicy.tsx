import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { SiteFooter } from "@/sections/SiteFooter";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Politica de confidentialitate | Pensula Curata"
        description="Politica de confidentialitate pentru pensulacurata.ro: ce date prelucram, in ce scop si ce drepturi ai."
        canonicalPath="/politica-de-confidentialitate"
        keywords={["politica de confidentialitate", "gdpr", "date personale", "pensula curata"]}
      />
      <Navbar />

      <section className="bg-white pb-8 pt-[82px] md:pb-10 md:pt-[112px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Politica de confidentialitate
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 30 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Operatorul datelor</h2>
              <p className="mt-2">
                Website-ul pensulacurata.ro este un site de prezentare pentru servicii de zugraveli in Targoviste si
                judetul Dambovita. Pentru orice solicitare legata de date, ne poti contacta telefonic.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Ce date putem primi</h2>
              <p className="mt-2">
                Nu avem formular de contact pe site si nu cerem creare de cont. Date personale pot fi transmise doar de
                tine, prin apel telefonic sau prin WhatsApp (de exemplu nume, adresa lucrare, detalii pentru oferta).
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Scop si temei legal</h2>
              <p className="mt-2">
                Datele sunt folosite pentru comunicare, ofertare, programare si executarea lucrarilor solicitate.
                Prelucrarea se bazeaza pe interes legitim si, dupa caz, pe masuri precontractuale/contractuale.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Stocare si partajare</h2>
              <p className="mt-2">
                Pastram datele doar cat este necesar pentru relatia comerciala si obligatiile legale. Nu vindem datele
                tale. Linkurile externe (ex. WhatsApp) sunt guvernate de politicile proprii ale platformelor terte.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">5. Cookie-uri</h2>
              <p className="mt-2">
                Informatiile despre cookie-uri si optiunile de consimtamant sunt disponibile in{" "}
                <Link to="/politica-cookies" className="font-semibold text-brand hover:underline">
                  Politica cookies
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">6. Drepturile tale</h2>
              <p className="mt-2">
                Ai dreptul la acces, rectificare, stergere, restrictionare, opozitie si portabilitate, conform
                legislatiei aplicabile. Pentru exercitarea drepturilor, ne poti contacta la{" "}
                <a className="inline-flex items-center gap-1.5 font-semibold text-brand" href="tel:0774613207">
                  <PhoneSolidIcon />
                  Suna acum
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
