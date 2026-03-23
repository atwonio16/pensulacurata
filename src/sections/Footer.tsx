import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black py-10 md:py-[40.8px]">
      <div className="container-custom max-w-[1200px]">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-2xl font-extrabold tracking-[-0.03em] text-white md:text-[32px]">
              Pensulacurata<span className="text-brand">.</span>
            </p>
            <p className="mt-2 text-white/80">Zugrav Târgoviște · Zugrăveli în Dâmbovița</p>
            <p className="mt-1 text-sm text-white/70">Telefon: 0774 613 207</p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <Link to="/zugraveli-targoviste" className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:text-white">
              Zugrăveli Târgoviște
            </Link>
            <Link to="/zugraveli-dambovita" className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:text-white">
              Zugrăveli Dâmbovița
            </Link>
            <Link to="/zugrav-interior-targoviste" className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:text-white">
              Zugrav interior
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Pensula Curată. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
