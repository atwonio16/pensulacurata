import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Paintbrush, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Phone,
    title: 'Ne suni',
    description: 'Un apel și stabilim totul',
  },
  {
    number: '2',
    icon: MapPin,
    title: 'Stabilim rapid detaliile',
    description: 'Vedem locația, discutăm',
  },
  {
    number: '3',
    icon: Paintbrush,
    title: 'Ne apucăm de treabă',
    description: 'Lucrăm curat și rapid',
  },
  {
    number: '4',
    icon: Sparkles,
    title: 'La final: curat și gata',
    description: 'Pereți ca noi',
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Cum funcționează
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 * index,
                ease: 'easeOut',
              }}
              className="relative"
            >
              {/* Connector line - hidden on mobile and last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-[#E5E5E5]" />
              )}

              <div className="text-center">
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + 0.15 * index,
                    ease: 'easeOut',
                  }}
                  className="w-16 h-16 rounded-full bg-[#5A7D6F] flex items-center justify-center mx-auto mb-5"
                >
                  <span className="text-white font-semibold text-xl">{step.number}</span>
                </motion.div>

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <step.icon className="w-6 h-6 text-[#6B6B6B]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
