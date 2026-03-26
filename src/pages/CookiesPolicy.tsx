import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { SiteFooter } from "@/sections/SiteFooter";

export function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title="Politică cookies | Pensula Curată"
        description="Informații despre cookie-urile utilizate pe pensulacurata.ro."
        canonicalPath="/politica-cookies"
        keywords={["politică cookies", "cookie-uri", "pensula curată"]}
      />
      <Navbar />

      <section className="bg-white pb-8 pt-[82px] md:pb-10 md:pt-[112px]">
        <div className="container-custom max-w-3xl">
          <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[44px]">
            Politică cookies
          </h1>
          <p className="mt-3 text-[13px] text-[#555] md:text-sm">Ultima actualizare: 25 martie 2026</p>

          <div className="mt-7 space-y-6 text-[14px] leading-[1.7] text-[#222] md:text-[15px]">
            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">1. Ce sunt cookie-urile</h2>
              <p className="mt-2">
                Cookie-urile sunt fișiere mici stocate în browser, folosite pentru funcționarea corectă a unui site și
                pentru îmbunătățirea experienței utilizatorului.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">2. Cookie-uri folosite pe acest site</h2>
              <p className="mt-2">
                Site-ul folosește în principal cookie-uri tehnice necesare funcționării. În prezent, nu sunt instalate
                cookie-uri de profilare prin formulare proprii.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">3. Servicii terțe</h2>
              <p className="mt-2">
                Accesarea linkurilor externe (de exemplu WhatsApp) poate duce la aplicarea politicilor de cookie ale
                platformelor terțe.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-[#111] md:text-[24px]">4. Controlul cookie-urilor</h2>
              <p className="mt-2">
                Poți bloca sau șterge cookie-urile din setările browserului. Restricționarea cookie-urilor tehnice poate
                afecta funcționarea anumitor părți ale site-ului.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


