import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Cât costă să zugrăvesc un apartament?",
    a: "Prețul depinde de suprafață, de starea pereților și de finisajul dorit. Pentru un apartament cu 2 camere, costul pornește de obicei de la 2.500 lei. Îți ofer estimare exactă după evaluare.",
  },
  {
    q: "Cât durează o lucrare de zugrăveli?",
    a: "Pentru 2 camere, durata medie este 2-3 zile. Pentru case sau lucrări mai ample, termenul poate ajunge la 5-7 zile. Stabilim de la început un calendar clar.",
  },
  {
    q: "Lucrezi și în weekend?",
    a: "Da. Pot programa lucrări și sâmbăta sau duminica, în funcție de disponibilitate și urgența proiectului.",
  },
  {
    q: "Oferi garanție pentru lucrare?",
    a: "Da, ofer 2 ani garanție pentru lucrările executate corect tehnic. Dacă apare o problemă legată de execuție, intervin fără costuri suplimentare.",
  },
  {
    q: "În ce zone te deplasezi?",
    a: "Lucrez în Târgoviște și în localitățile din Dâmbovița: Moreni, Pucioasa, Găești, Titu și zonele apropiate.",
  },
  {
    q: "Trebuie să golesc apartamentul înainte?",
    a: "Nu complet. Protejez mobilierul cu folie și prelate, mut ce este necesar pe durata lucrării și las spațiul curat la final.",
  },
];

function FAQColumn({
  items,
  openIndex,
  setOpenIndex,
}: {
  items: Array<FAQItem & { globalIndex: number }>;
  openIndex: number;
  setOpenIndex: (index: number) => void;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIndex === item.globalIndex;

        return (
          <article key={item.globalIndex} className="surface-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(item.globalIndex)}
              className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-black text-sm md:text-[15px] leading-relaxed">{item.q}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-brand flex-shrink-0">
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-grey-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const { leftColumn, rightColumn, schema } = useMemo(() => {
    const midpoint = Math.ceil(faqs.length / 2);

    return {
      leftColumn: faqs.slice(0, midpoint).map((item, index) => ({ ...item, globalIndex: index })),
      rightColumn: faqs.slice(midpoint).map((item, index) => ({ ...item, globalIndex: midpoint + index })),
      schema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    };
  }, []);

  return (
    <section className="section-wrap border-t border-grey-100 bg-grey-50" id="intrebari-frecvente">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container-custom max-w-6xl">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <p className="inline-flex rounded-full bg-white border border-grey-200 px-4 py-1.5 text-sm font-semibold text-grey-700 mb-4">FAQ</p>
          <h2 className="mb-4">Întrebări frecvente</h2>
          <p className="text-grey-600 text-lg text-balance">
            Răspunsuri clare pentru cele mai căutate întrebări despre zugrăveli în Târgoviște și Dâmbovița.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <FAQColumn items={leftColumn} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <FAQColumn items={rightColumn} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
      </div>
    </section>
  );
}
