import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

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

const desktopFaqs = faqs.slice(0, 10);

function FAQRow({
  item,
  globalIndex,
  openIndex,
  setOpenIndex,
}: {
  item: FAQItem;
  globalIndex: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  const isOpen = openIndex === globalIndex;

  return (
    <article className="border-b border-[#e8e5e3]">
      <button
        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
        className="group flex w-full items-center justify-between gap-3 py-4 text-left md:py-4.5"
        aria-expanded={isOpen}
      >
        <span className="text-[14px] font-bold leading-[1.4] text-[#111] transition-colors group-hover:text-brand md:text-[18px] md:leading-[1.35]">
          {item.q}
        </span>
        <span
          className={`inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-[2.5px] md:h-7 md:w-7 ${
            isOpen ? "border-[#111] text-[#111]" : "border-brand text-brand"
          }`}
        >
          {isOpen ? <Minus className="h-[15px] w-[15px] stroke-[3]" /> : <Plus className="h-[15px] w-[15px] stroke-[3]" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 pr-10 text-[12px] leading-[1.55] text-[#3f3b39] md:pb-5 md:text-[14px] md:leading-[1.6]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const { leftColumn, rightColumn, schema } = useMemo(() => {
    const left = desktopFaqs.slice(0, 5).map((item, index) => ({ ...item, globalIndex: index }));
    const right = desktopFaqs.slice(5, 10).map((item, index) => ({ ...item, globalIndex: index + 5 }));

    return {
      leftColumn: left,
      rightColumn: right,
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

  const mobileFaqs = showAllMobile ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-white py-6 md:py-10 lg:py-11" id="intrebari-frecvente">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container-custom max-w-[1200px]">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-9">
          <h2 className="mb-2 text-[27px] leading-[1.15] md:mb-4 md:text-[clamp(1.9rem,3vw,2.45rem)]">Întrebări frecvente</h2>
          <p className="text-balance text-[13px] leading-[1.55] text-[#222] md:text-lg">
            Răspunsuri clare pentru cele mai căutate întrebări despre zugrăveli în Târgoviște și Dâmbovița.
          </p>
        </div>

        <div className="md:hidden">
          {mobileFaqs.map((item, index) => (
            <FAQRow key={index} item={item} globalIndex={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          ))}

          {!showAllMobile && (
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setShowAllMobile(true)}
                className="mx-auto block w-1/2 text-center text-[13px] font-semibold text-brand transition-colors hover:text-[#e86114]"
              >
                Vezi mai multe întrebări
              </button>
            </div>
          )}
        </div>

        <div className="hidden gap-x-16 md:grid md:grid-cols-2">
          <div>
            {leftColumn.map((item) => (
              <FAQRow
                key={item.globalIndex}
                item={item}
                globalIndex={item.globalIndex}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
          <div>
            {rightColumn.map((item) => (
              <FAQRow
                key={item.globalIndex}
                item={item}
                globalIndex={item.globalIndex}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
