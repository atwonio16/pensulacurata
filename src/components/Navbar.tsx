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

  const handleWhatsApp = () => {
    window.open("https://wa.me/40774613207", "_blank");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "#servicii", label: "Servicii" },
    { href: "#lucrari", label: "Lucrări" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.location.href = "/";
      return;
    }
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
            <a href="/" className="flex-shrink-0">
              <Logo size="md" />
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

            {/* Desktop CTA - Sună acum */}
            <div className="hidden md:block">
              <button
                onClick={handleCall}
                className="bg-brand hover:bg-brand-dark text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
              >
                Sună acum
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
            <Logo size="sm" />
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

          {/* WhatsApp Button - Only on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactează-ne pe WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
