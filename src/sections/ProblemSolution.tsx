import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
  'Pereți murdari?',
  'Lovituri sau crăpături?',
  'Aspect neîngrijit?',
];

export function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8">
              Te confrunți cu:
            </h2>
            <div className="space-y-5">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: 'easeOut',
                  }}
                  className="flex items-center gap-4"
                >
                  <XCircle className="w-6 h-6 text-[#6B6B6B] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-lg md:text-xl text-[#1A1A1A]">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider - visible only on desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-40 bg-[#E5E5E5]" />

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="md:text-right"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8">
              Soluția noastră:
            </h2>
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                className="flex items-center gap-4 md:flex-row-reverse"
              >
                <CheckCircle className="w-6 h-6 text-[#5A7D6F] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-lg md:text-xl text-[#1A1A1A]">
                  Îi aducem la starea perfectă.
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                className="flex items-center gap-4 md:flex-row-reverse"
              >
                <CheckCircle className="w-6 h-6 text-[#5A7D6F] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-lg md:text-xl text-[#5A7D6F] font-medium">
                  Curat. Drept. Proaspăt.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
