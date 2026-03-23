import { MessageCircle, Phone } from "lucide-react";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] bg-white/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href="tel:0774613207"
          className="cta-base cta-primary inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
          aria-label="Sună acum la 0774 613 207"
        >
          <Phone className="h-4 w-4" />
          Sună acum
        </a>
        <a
          href="https://wa.me/40774613207"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-base cta-whatsapp inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
          aria-label="Scrie pe WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
