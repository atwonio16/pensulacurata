import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:0774613207";
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#servicii", label: "Servicii" },
    { href: "#lucrari", label: "Lucrări" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b border-grey-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300",
          isScrolled ? "py-2 shadow-soft" : "py-3"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between gap-4">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo size="md" />
            </Link>

            <div className="hidden md:flex items-center gap-2 rounded-full border border-grey-200 bg-grey-50/70 px-2 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-grey-700 hover:text-black hover:bg-white px-4 py-2 rounded-full transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button onClick={handleCall} className="btn-primary text-sm px-5 py-2.5">
                Sună: 0774 613 207
              </button>
            </div>

            <button
              className="md:hidden h-10 w-10 rounded-lg border border-grey-200 bg-white flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Meniu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <button className="absolute inset-0 bg-black/45" onClick={() => setIsMobileMenuOpen(false)} aria-label="Închide meniul" />

        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white border-l border-grey-200 px-6 py-6 transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <Logo size="sm" />
            <button
              className="h-9 w-9 rounded-lg border border-grey-200 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Închide"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left text-lg font-semibold text-black px-3 py-3 rounded-xl hover:bg-grey-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 mt-8 border-t border-grey-200">
            <button onClick={handleCall} className="w-full btn-primary text-base py-3.5">
              Sună acum: 0774 613 207
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
