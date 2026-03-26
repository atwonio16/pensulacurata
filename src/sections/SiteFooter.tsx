import { Link } from "react-router-dom";
import { PhoneSolidIcon } from "@/components/icons/PhoneSolidIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0d10] text-white" style={{ backgroundColor: "#0b0d10" }}>
      <div className="container-custom max-w-[1120px] py-14 md:py-16">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[430px_220px_220px] md:justify-between md:gap-x-10">
          <div>
            <div className="text-[62px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
              Pensulacurata<span className="text-brand">.</span>
            </div>

            <div className="mt-5 text-[17px] leading-[1.58] text-white/90">
              <span className="block">{"Zugrav T\u00e2rgovi\u0219te \u00b7 Zugr\u0103veli \u00een D\u00e2mbovi\u021ba. Lucr\u0103ri"}</span>
              <span className="block">{"curate, executate organizat, cu aten\u021bie la detalii."}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:0774613207"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:border-white"
              >
                <PhoneSolidIcon />
                {"Sun\u0103 acum"}
              </a>

              <a
                href="https://wa.me/40774613207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:border-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:justify-self-center">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/80">{"Naviga\u021bie"}</div>
            <div className="mt-5 flex flex-col gap-3 text-[15px] leading-[1.45]">
              <Link to="/zugraveli-targoviste" className="text-white/95 transition-colors hover:text-white">
                {"Zugr\u0103veli T\u00e2rgovi\u0219te"}
              </Link>
              <Link to="/zugraveli-dambovita" className="text-white/95 transition-colors hover:text-white">
                {"Zugr\u0103veli"}
                <br />
                {"D\u00e2mbovi\u021ba"}
              </Link>
              <Link to="/zugrav-interior-targoviste" className="text-white/95 transition-colors hover:text-white">
                Zugrav interior
              </Link>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/80">Legal</div>
            <div className="mt-5 flex flex-col gap-3 text-[15px] leading-[1.45]">
              <Link to="/termeni-si-conditii" className="text-white/95 transition-colors hover:text-white">
                {"Termeni \u0219i condi\u021bii"}
              </Link>
              <Link to="/politica-de-confidentialitate" className="text-white/95 transition-colors hover:text-white">
                {"Politic\u0103 de confiden\u021bialitate"}
              </Link>
              <Link to="/politica-cookies" className="text-white/95 transition-colors hover:text-white">
                {"Politic\u0103 cookies"}
              </Link>
              <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-white/95 transition-colors hover:text-white">
                ANPC
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/35 pt-6">
          <div className="flex flex-col gap-2 text-[13px] text-white/95 md:flex-row md:items-center md:justify-between">
            <div className="text-white/95">Design realizat de Antonio Daniel</div>
            <div className="text-white/95">{"Toate drepturile rezervate \u00a9 PensulaCurat\u0103 2026"}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
