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
    a: "Prețul pentru zugrăvit un apartament depinde de suprafață, starea pereților și dacă sunt necesare reparații sau glet. Pentru zugrăveli în Târgoviște, prețul manoperei pornește în general de la 15 lei/mp și poate ajunge la 25 lei/mp, în funcție de complexitatea lucrării. O estimare exactă se face după ce văd spațiul sau pe baza pozelor.",
  },
  {
    q: "Cât costă zugrăvitul pe metru pătrat?",
    a: "Prețul pentru zugrăvit pe metru pătrat, doar manoperă, este de obicei între 15 și 25 lei/mp pentru zugrăveli lavabilă. Prețul poate varia în funcție de starea pereților, dacă este nevoie de glet, șlefuire, amorsă sau reparații înainte de vopsire.",
  },
  {
    q: "Cât durează o lucrare de zugrăveli?",
    a: "Durata unei lucrări de zugrăveli depinde de suprafață și de starea pereților. În general, un apartament de 2 camere se poate termina în 2-3 zile, iar unul de 3 camere în 3-5 zile. Dacă sunt necesare reparații, glet sau uscare între straturi, lucrarea poate dura puțin mai mult.",
  },
  {
    q: "Trebuie să golesc apartamentul înainte?",
    a: "Nu este obligatoriu să goliți complet apartamentul. Mobila se mută în mijlocul camerei și se acoperă cu folie de protecție. Eu protejez podeaua, mobila și ușile, astfel încât la final să rămână curat.",
  },
  {
    q: "Oferi garanție pentru lucrare?",
    a: "Da, ofer garanție pentru lucrările de zugrăveli, cu condiția ca pereții să nu aibă infiltrații sau probleme de structură. Lucrez cu materiale recomandate și respect pașii corecți pentru ca lucrarea să reziste în timp.",
  },
  {
    q: "În ce zone te deplasezi?",
    a: "Lucrez în Târgoviște și în localitățile din județul Dâmbovița, precum Aninoasa, Răzvad, Ulmi, Moreni, Pucioasa, Găești și zonele apropiate. Pentru alte localități, putem discuta în funcție de lucrare.",
  },
  {
    q: "Lucrezi și în weekend?",
    a: "În general lucrez în timpul săptămânii, dar în anumite situații pot lucra și în weekend, mai ales pentru lucrări urgente sau apartamente care trebuie terminate rapid.",
  },
  {
    q: "Includeți materialele în preț?",
    a: "De obicei, prețul afișat este pentru manoperă. Materialele pot fi cumpărate de client sau le pot aduce eu, în funcție de preferințe. Vă pot recomanda lavabilă, amorsă și glet potrivite pentru fiecare lucrare.",
  },
  {
    q: "Faceți și reparații pereți și glet?",
    a: "Da, înainte de zugrăveală pot face reparații pereți, glet, șlefuire, amorsă și pregătirea completă a suprafețelor. Este important ca pereții să fie drepți și curați pentru ca lavabila să arate bine.",
  },
  {
    q: "Câte straturi de lavabilă aplicați?",
    a: "De obicei aplic 2 straturi de lavabilă, după amorsarea pereților. Dacă este nevoie de acoperire mai bună sau schimbare de culoare, se poate aplica și al treilea strat.",
  },
  {
    q: "În cât timp puteți începe lucrarea?",
    a: "De obicei pot începe o lucrare în câteva zile, în funcție de program și de dimensiunea lucrării. Pentru programare, cel mai bine este să mă contactați telefonic sau pe WhatsApp.",
  },
  {
    q: "Zugrăviți și case, nu doar apartamente?",
    a: "Da, execut zugrăveli atât pentru apartamente, cât și pentru case, garsoniere, birouri sau spații comerciale în Târgoviște și Dâmbovița.",
  },
  {
    q: "Curățați după terminarea lucrării?",
    a: "Da, la finalul lucrării adun folia de protecție, curăț mizeria rezultată și las spațiul curat, gata de folosit.",
  },
  {
    q: "Pot primi o estimare de preț la telefon sau WhatsApp?",
    a: "Da, îmi puteți trimite poze și detalii pe WhatsApp și vă pot face o estimare de preț orientativă. Prețul final se stabilește după ce văd lucrarea sau pe baza suprafeței exacte.",
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
          <article key={item.globalIndex} className="overflow-hidden rounded-2xl border border-[#f2f2f2] bg-white">
            <button
              onClick={() => setOpenIndex(item.globalIndex)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left md:p-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold leading-relaxed text-black md:text-[15px]">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.22 }}
                className="flex-shrink-0 text-brand"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-sm leading-relaxed text-[#222]">{item.a}</p>
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
  const [visibleMobileCount, setVisibleMobileCount] = useState(5);

  const { leftColumn, rightColumn, mobileItems, schema } = useMemo(() => {
    const midpoint = Math.ceil(faqs.length / 2);
    const allItems = faqs.map((item, index) => ({ ...item, globalIndex: index }));

    return {
      leftColumn: allItems.slice(0, midpoint),
      rightColumn: allItems.slice(midpoint),
      mobileItems: allItems,
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
    <section className="bg-white py-14 md:py-16 lg:py-[78px]" id="intrebari-frecvente">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container-custom max-w-[1200px]">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2 className="mb-4">Întrebări frecvente</h2>
          <p className="text-balance text-lg text-[#222]">
            Răspunsuri clare pentru cele mai căutate întrebări despre zugrăveli în Târgoviște și Dâmbovița.
          </p>
        </div>

        <div className="space-y-3 md:hidden">
          <FAQColumn
            items={mobileItems.slice(0, visibleMobileCount)}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />

          {visibleMobileCount < mobileItems.length && (
            <div className="pt-2 text-center">
              <button
                onClick={() =>
                  setVisibleMobileCount((prev) => Math.min(prev + 3, mobileItems.length))
                }
                className="text-sm font-semibold text-brand"
              >
                Vezi mai multe întrebări
              </button>
            </div>
          )}
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-2 md:gap-5">
          <FAQColumn items={leftColumn} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <FAQColumn items={rightColumn} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
      </div>
    </section>
  );
}
