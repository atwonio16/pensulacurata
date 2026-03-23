import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white",
          isScrolled ? "shadow-sm py-2" : "py-3"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex flex-col">
              <Logo size="md" />
              <span className="text-xs text-grey-500 mt-0.5">Zugrav Târgoviște</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-grey-600 hover:text-black transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={handleCall}
                className="bg-brand hover:bg-brand-dark text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
              >
                Sună: 0774 613 207
              </button>
            </div>

            {/* Animated Hamburger Button */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Meniu"
            >
              <span 
                className={cn(
                  "w-6 h-0.5 bg-black transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span 
                className={cn(
                  "w-6 h-0.5 bg-black transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span 
                className={cn(
                  "w-6 h-0.5 bg-black transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={cn(
            "absolute top-0 right-0 w-full h-full bg-white transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-grey-100">
            <div className="flex flex-col">
              <Logo size="sm" />
              <span className="text-xs text-grey-500">Zugrav Târgoviște</span>
            </div>
            <button
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Închide"
            >
              <span className="w-6 h-0.5 bg-black rotate-45 translate-y-2" />
              <span className="w-6 h-0.5 bg-black opacity-0" />
              <span className="w-6 h-0.5 bg-black -rotate-45 -translate-y-2" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 pt-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-2xl font-medium text-black py-4 border-b border-grey-100 hover:text-brand transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call Button - Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <button
              onClick={handleCall}
              className="w-full bg-brand hover:bg-brand-dark text-white font-semibold text-lg py-4 rounded-xl transition-colors"
            >
              Sună: 0774 613 207
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
