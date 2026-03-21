import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Cât costă să zugrăvesc un apartament?",
    a: "Depinde de suprafață și starea pereților. Pentru un apartament cu 2 camere (50-60mp), prețul pornește de la 2.500 lei. Mă suni pentru o evaluare exactă.",
  },
  {
    q: "Cât durează o zugrăveală?",
    a: "Un apartament cu 2 camere durează 2-3 zile. O casă mai mare poate dura 5-7 zile. Îți spun termenul exact înainte să încep.",
  },
  {
    q: "Lucrezi și în weekend?",
    a: "Da, lucrez și sâmbăta și duminica pentru cei care nu pot fi acasă în timpul săptămânii.",
  },
  {
    q: "Oferi garanție?",
    a: "Da, ofer 2 ani garanție pentru orice lucrare. Dacă apar probleme, rezolv fără costuri.",
  },
  {
    q: "Lucrezi în tot județul?",
    a: "Acopăr Târgoviște și localitățile din jur: Moreni, Pucioasa, Găești, Titu. Transport gratuit în raza de 30km.",
  },
  {
    q: "Trebuie să golesc apartamentul?",
    a: "Nu. Protejez mobilierul cu folii și prelate. Mut ce e nevoie și aduc totul la loc la final.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-grey-100">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-black mb-3 text-2xl md:text-3xl">
            Întrebări frecvente
          </h2>
          <p className="text-grey-600">
            Ai o întrebare? Sună-mă la 0774 613 207.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-grey-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-black pr-4 text-sm">{f.q}</span>
                <span className="text-brand text-xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-grey-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
