import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type NavLink =
  | { type: "section"; href: string; label: string }
  | { type: "route"; to: string; label: string };

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleCall = () => {
    window.location.href = "tel:0774613207";
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { type: "section", href: "#servicii", label: "Servicii" },
    { type: "route", to: "/lucrari", label: "Lucrări" },
    { type: "section", href: "#preturi", label: "Prețuri" },
    { type: "section", href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 84;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ece9e9] bg-white transition-all duration-200">
        <div className="container-custom">
          <nav className="flex h-14 items-center justify-between gap-3 lg:h-20">
            <Link to="/" className="flex shrink-0 items-center">
              <Logo size="sm" className="lg:hidden" />
              <Logo size="md" className="hidden lg:flex" />
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-0 py-1.5 font-['Sora'] text-[12px] font-extrabold uppercase leading-6 tracking-[0.08em] text-[#222] transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-0 py-1.5 font-['Sora'] text-[12px] font-extrabold uppercase leading-6 tracking-[0.08em] text-[#222] transition-colors hover:text-brand"
                  >
                    {link.label}
                  </button>
                )
              )}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={handleCall}
                className="cta-base cta-primary inline-flex h-11 items-center justify-center rounded-[11px] bg-brand px-5 font-['Montserrat'] text-[13px] font-bold tracking-[0.04em] text-white sm:h-[49px] sm:px-7 sm:text-base sm:rounded-[12px]"
              >
                0774 613 207
              </button>
            </div>

            <button
              className="relative flex h-10 w-10 items-center justify-center text-[#111] lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Meniu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={cn(
                  "absolute block h-[2.6px] w-6 rounded-full bg-current transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px] rotate-0"
                )}
              />
              <span
                className={cn(
                  "absolute block h-[2.6px] w-6 rounded-full bg-current transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute block h-[2.6px] w-6 rounded-full bg-current transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px] rotate-0"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 lg:hidden",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <button
          className="absolute inset-0 bg-black/45"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Închide meniul"
        />

        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-[360px] border-l border-grey-200 bg-white px-6 py-6 transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo size="sm" />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-grey-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Închide"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block w-full rounded-xl px-3 py-3 text-left text-lg font-semibold text-black transition-colors hover:bg-grey-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full rounded-xl px-3 py-3 text-left text-lg font-semibold text-black transition-colors hover:bg-grey-50"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <div className="mt-8 space-y-3 border-t border-grey-200 pt-8">
            <a
              href="tel:0774613207"
              className="cta-base cta-primary inline-flex w-full items-center justify-center rounded-xl bg-brand px-4 py-3.5 text-base font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              0774 613 207
            </a>
            <a
              href="https://wa.me/40774613207"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-base cta-whatsapp inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-base font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <WhatsAppIcon />
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
