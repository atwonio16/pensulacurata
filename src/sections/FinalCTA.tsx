import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleCall = () => {
    window.location.href = 'tel:0774613207';
  };

  return (
    <section className="py-20 md:py-32 bg-[#5A7D6F]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Vrei pereți ca noi?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/80 mb-10"
        >
          Sună acum și stabilim detaliile
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.button
            onClick={handleCall}
            className="inline-flex items-center gap-3 bg-white text-[#5A7D6F] px-12 py-6 rounded-xl font-semibold text-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-[#FAFAFA] transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-6 h-6" />
            0774 613 207
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center gap-2 text-white/70"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Disponibil în Târgoviște și județul Dâmbovița</span>
        </motion.div>
      </div>
    </section>
  );
}
