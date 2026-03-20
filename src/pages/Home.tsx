import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { ProblemSolution } from '../sections/ProblemSolution';
import { Services } from '../sections/Services';
import { Process } from '../sections/Process';
import { Gallery } from '../sections/Gallery';
import { Trust } from '../sections/Trust';
import { FinalCTA } from '../sections/FinalCTA';
import { Footer } from '../sections/Footer';
import { FAQ } from '../components/FAQ';
import { SchemaMarkup, FAQSchemaMarkup } from '../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const homeFaqs = [
  {
    question: "Cât costă zugrăvirea unui apartament?",
    answer: "Prețul depinde de suprafață și starea pereților. Pentru o estimare exactă, sună la 0774 613 207 și stabilim o vizionare gratuită."
  },
  {
    question: "Cât durează o zugrăveală?",
    answer: "Un apartament de 2 camere se zugrăvește în 2-3 zile lucrătoare. Dacă e nevoie de reparații suplimentare, poate dura 4-5 zile."
  },
  {
    question: "Lucrați și în weekend?",
    answer: "Da, putem lucra și în weekend dacă este necesar. Programul este flexibil și îl stabilim împreună."
  },
  {
    question: "Oferiți garanție?",
    answer: "Da, oferim garanție pentru lucrările efectuate. Dacă apar probleme, revenim și remediem."
  },
  {
    question: "Lucrați în tot județul Dâmbovița?",
    answer: "Da, acoperim Târgoviște și toate localitățile din județul Dâmbovița. Deplasarea este gratuită în oraș și împrejurimi."
  }
];

function SEOLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const links = [
    {
      to: '/zugraveli-targoviste',
      title: 'Zugrăveli Târgoviște',
      description: 'Servicii în Târgoviște'
    },
    {
      to: '/zugraveli-dambovita',
      title: 'Zugrăveli Dâmbovița',
      description: 'Tot județul'
    },
    {
      to: '/zugrav-interior-targoviste',
      title: 'Zugrav Interior',
      description: 'Specialiști'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#5A7D6F]" />
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
              Servicii în zona ta
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
              className="h-full"
            >
              <Link
                to={link.to}
                className="flex flex-col justify-between h-full p-6 bg-white rounded-xl border border-[#E5E5E5] hover:border-[#5A7D6F] hover:bg-[#E8F0ED] transition-all duration-300 group"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#5A7D6F] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]">{link.description}</p>
                </div>
                <div className="flex items-center gap-1 text-[#5A7D6F] text-sm font-medium mt-4">
                  <span>Vezi detalii</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SchemaMarkup />
      <FAQSchemaMarkup faqs={homeFaqs} />
      <Hero />
      <ProblemSolution />
      <Services />
      <Process />
      <Gallery />
      <Trust />
      <SEOLinks />
      <FAQ items={homeFaqs} />
      <FinalCTA />
      <Footer />
    </main>
  );
}
