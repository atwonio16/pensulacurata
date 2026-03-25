import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { Footer } from "@/sections/Footer";

export function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Politica cookies | Pensula Curata"
        description="Informatii despre cookie-urile utilizate pe pensulacurata.ro."
        canonicalPath="/politica-cookies"
        keywords={["politica cookies", "cookie-uri", "pensula curata"]}
      />
      <Navbar />

      <section className="bg-white pb-10 pt-[86px] md:pb-14 md:pt-[124px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Politica cookies
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Ce sunt cookie-urile</h2>
              <p className="mt-2">
                Cookie-urile sunt fisiere mici stocate in browser, folosite pentru functionarea corecta a unui site si
                pentru imbunatatirea experientei utilizatorului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Cookie-uri folosite pe acest site</h2>
              <p className="mt-2">
                Site-ul foloseste in principal cookie-uri tehnice necesare functionarii. In prezent, nu sunt instalate
                cookie-uri de profilare prin formulare proprii.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Servicii terte</h2>
              <p className="mt-2">
                Accesarea linkurilor externe (de exemplu WhatsApp) poate duce la aplicarea politicilor de cookie ale
                platformelor terte.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Controlul cookie-urilor</h2>
              <p className="mt-2">
                Poti bloca sau sterge cookie-urile din setarile browserului. Restrictionarea cookie-urilor tehnice poate
                afecta functionarea anumitor parti ale site-ului.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
