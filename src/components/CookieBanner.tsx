import { useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "pensulacurata_cookie_consent_v1";
const CONSENT_VERSION = 1;

type CookieChoice = "all" | "essential";

interface CookieConsent {
  version: number;
  choice: CookieChoice;
  updatedAt: string;
}

function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue) as Partial<CookieConsent>;
    if (
      parsed.version !== CONSENT_VERSION ||
      (parsed.choice !== "all" && parsed.choice !== "essential") ||
      typeof parsed.updatedAt !== "string"
    ) {
      return null;
    }

    return parsed as CookieConsent;
  } catch {
    return null;
  }
}

function persistConsent(choice: CookieChoice) {
  if (typeof window === "undefined") return;

  const payload: CookieConsent = {
    version: CONSENT_VERSION,
    choice,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: payload }));
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => readConsent() === null);

  const handleConsent = (choice: CookieChoice) => {
    persistConsent(choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[#e7e5e4] bg-white/95 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="container-custom py-3 md:py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-5">
          <p className="text-[13px] leading-[1.5] text-[#222] md:max-w-[74ch] md:text-[14px]">
            Folosim cookie-uri esentiale pentru functionarea site-ului si, cu acordul tau, cookie-uri optionale pentru
            analiza. Vezi{" "}
            <Link to="/politica-cookies" className="font-semibold text-brand hover:underline">
              Politica cookies
            </Link>{" "}
            si{" "}
            <Link to="/politica-de-confidentialitate" className="font-semibold text-brand hover:underline">
              Politica de confidentialitate
            </Link>
            .
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => handleConsent("essential")}
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#d6d3d1] bg-white px-4 font-['Montserrat'] text-[12px] font-bold tracking-[0.03em] text-[#222] transition-colors hover:border-brand hover:text-brand md:h-[42px] md:text-[13px]"
            >
              Doar necesare
            </button>
            <button
              type="button"
              onClick={() => handleConsent("all")}
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-transparent bg-brand px-4 font-['Montserrat'] text-[12px] font-bold tracking-[0.03em] text-white transition-colors hover:bg-brand-dark md:h-[42px] md:text-[13px]"
            >
              Accept toate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
