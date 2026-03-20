import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Paintbrush, Ruler, Wrench } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Zugrăveli interioare',
    description: 'Pereți și tavane cu finisaje de calitate',
  },
  {
    icon: Ruler,
    title: 'Îndreptare pereți (glet)',
    description: 'Suprafețe perfect drepte și netede',
  },
  {
    icon: Wrench,
    title: 'Reparații minore',
    description: 'Lovituri, fisuri și imperfecțiuni',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Ce facem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="bg-white rounded-xl p-8 h-full border border-[#E5E5E5] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                whileHover={{
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8F0ED] flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-[#5A7D6F]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A1A1A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B]">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
