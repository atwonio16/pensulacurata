import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-black py-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <p className="text-white font-display font-bold text-2xl tracking-tight">Pensulacurata<span className="text-brand">.</span></p>
            <p className="text-white/80 mt-2">Zugrav Târgoviște · Zugrăveli în Dâmbovița</p>
            <p className="text-white/70 text-sm mt-1">Telefon: 0774 613 207</p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <Link to="/zugraveli-targoviste" className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded-full border border-white/15">
              Zugrăveli Târgoviște
            </Link>
            <Link to="/zugraveli-dambovita" className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded-full border border-white/15">
              Zugrăveli Dâmbovița
            </Link>
            <Link to="/zugrav-interior-targoviste" className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded-full border border-white/15">
              Zugrav interior
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-white/50 text-xs">© {new Date().getFullYear()} Pensula Curată. Toate drepturile rezervate.</div>
      </div>
    </footer>
  );
}
