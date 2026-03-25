import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container-custom max-w-[1200px]">
        <div className="grid gap-7 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <p className="text-[20px] font-extrabold tracking-[-0.03em] text-white md:text-[32px]">
              Pensulacurata<span className="text-brand">.</span>
            </p>
            <p className="mt-2 text-[12px] text-white/80 md:text-base">Zugrav Targoviste · Zugraveli in Dambovita</p>
            <p className="mt-1 text-[12px] text-white/70 md:text-sm">
              Telefon:{" "}
              <a href="tel:0774613207" className="hover:text-white">
                0774 613 207
              </a>
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/60 md:text-xs">
              Site de prezentare pentru servicii de zugraveli. Pretul final se stabileste dupa evaluare.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/55">Servicii</p>
            <div className="mt-3 flex flex-wrap gap-2 md:max-w-[320px]">
              <Link to="/zugraveli-targoviste" className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/80 hover:text-white md:px-3 md:py-1.5 md:text-sm">
                Zugraveli Targoviste
              </Link>
              <Link to="/zugraveli-dambovita" className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/80 hover:text-white md:px-3 md:py-1.5 md:text-sm">
                Zugraveli Dambovita
              </Link>
              <Link to="/zugrav-interior-targoviste" className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/80 hover:text-white md:px-3 md:py-1.5 md:text-sm">
                Zugrav interior
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/55">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-[12px] text-white/75 md:text-sm">
              <Link to="/termeni-si-conditii" className="hover:text-white">
                Termeni si conditii
              </Link>
              <Link to="/politica-de-confidentialitate" className="hover:text-white">
                Politica de confidentialitate
              </Link>
              <Link to="/politica-cookies" className="hover:text-white">
                Politica cookies
              </Link>
              <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                ANPC
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-4 text-[10px] text-white/50 md:mt-9 md:pt-6 md:text-xs">
          © {new Date().getFullYear()} Pensula Curata. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
