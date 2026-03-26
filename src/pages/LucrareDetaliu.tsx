import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageSEO } from "@/components/PageSEO";
import { SiteFooter } from "@/sections/SiteFooter";
import { portfolioItems } from "@/lib/portfolioItems";

export function LucrareDetaliu() {
  const { slug } = useParams();
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    return <Navigate to="/lucrari" replace />;
  }

  return (
    <main className="min-h-screen bg-white">
      <PageSEO
        title={`${item.title} | Lucrari Pensula Curata`}
        description={`Detalii despre lucrarea "${item.title}" realizata in ${item.area}.`}
        canonicalPath={`/lucrari/${item.slug}`}
        keywords={["lucrare zugraveli", item.area.toLowerCase(), item.serviceType.toLowerCase()]}
      />
      <Navbar />

      <section className="bg-white pb-10 pt-[86px] md:pb-14 md:pt-[124px] lg:pb-[76px]">
        <div className="container-custom">
          <Link
            to="/lucrari"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#555] transition-colors hover:text-brand md:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Inapoi la lucrari
          </Link>

          <div className="mt-4 grid gap-5 md:mt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-[#ece9e9] bg-white">
              <div className="aspect-[4/3] w-full">
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              </div>
            </div>

            <aside className="rounded-2xl border border-[#ece9e9] bg-white p-4 md:p-5 lg:p-6">
              <div className="inline-flex rounded-full border border-[#ebe8e6] bg-[#fdfdfc] px-2.5 py-1 text-[10px] font-semibold text-[#6b6764] md:text-[11px]">
                {item.area}
              </div>

              <h1 className="mt-2 text-[27px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#222] md:text-[35px]">
                {item.title}
              </h1>

              <div className="mt-4 space-y-2 text-[13px] leading-[1.6] text-[#333] md:text-[14px]">
                <p>
                  <span className="font-semibold text-[#111]">Tip lucrare:</span> {item.serviceType}
                </p>
                <p>
                  <span className="font-semibold text-[#111]">Durata estimata:</span> {item.duration}
                </p>
                <p>
                  <span className="font-semibold text-[#111]">Interventie:</span> {item.scope}
                </p>
              </div>

              <div className="mt-4 space-y-2.5 text-[13px] leading-[1.55] text-[#44403c] md:text-[14px]">
                {item.details.map((detail) => (
                  <p key={detail} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#22c55e]" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-[#ece9e9] bg-[#fbfbfa] p-3.5 md:p-4">
                <p className="text-[14px] font-semibold leading-[1.45] text-[#222] md:text-[15px]">
                  Vrei o programare pentru o estimare rapida?
                </p>
                <a
                  href="tel:0774613207"
                  className="cta-base cta-primary mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-brand px-4 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white md:h-[46px] md:text-[14px]"
                >
                  <Phone className="h-4 w-4" />
                  Suna acum pentru programare
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
