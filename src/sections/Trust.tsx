import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const trustPoints = [
  {
    emoji: '🧹',
    title: 'Lucrăm curat',
    description: 'Protejăm totul și lăsăm spațiul impecabil',
  },
  {
    emoji: '⏱️',
    title: 'Respectăm termenele',
    description: 'Venim la timp și terminăm când am promis',
  },
  {
    emoji: '🤝',
    title: 'Fără complicații',
    description: 'Tu doar ne deschizi ușa, noi ne ocupăm de restul',
  },
];

export function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            De ce noi
          </h2>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 * index,
                ease: 'easeOut',
              }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + 0.15 * index,
                  ease: 'easeOut',
                }}
                className="text-5xl mb-4"
              >
                {point.emoji}
              </motion.div>
              <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-2">
                {point.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
