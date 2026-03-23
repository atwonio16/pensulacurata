import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: "#servicii", label: "Servicii" },
    { href: "#lucrari", label: "Lucrări" },
    { href: "#preturi", label: "Preturi" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
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
          <nav className="flex h-20 items-center justify-between gap-3">
            <Link to="/" className="flex shrink-0 items-center">
              <Logo size="md" />
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-0 py-2 text-[16px] font-bold leading-6 text-[#222] transition-colors hover:text-brand"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={handleCall}
                className="cta-base cta-primary inline-flex h-[42px] items-center justify-center rounded-[12.8px] bg-brand px-[31px] font-['Montserrat'] text-[16px] font-bold tracking-[0.04em] text-white"
              >
                Sună acum
              </button>
            </div>

            <a
              href="tel:0774613207"
              className="cta-base cta-primary hidden h-10 items-center justify-center rounded-xl bg-brand px-4 text-sm font-bold text-white sm:inline-flex lg:hidden"
            >
              Sună
            </a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-grey-200 bg-white lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Meniu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full rounded-xl px-3 py-3 text-left text-lg font-semibold text-black transition-colors hover:bg-grey-50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 space-y-3 border-t border-grey-200 pt-8">
            <a
              href="tel:0774613207"
              className="cta-base cta-primary inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3.5 text-base font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Sună: 0774 613 207
            </a>
            <a
              href="https://wa.me/40774613207"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-base cta-whatsapp inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-base font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
