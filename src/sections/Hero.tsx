import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  showImage?: boolean;
}

export function Hero({ 
  title = "Zugrăveli curate, fără stres, în Târgoviște",
  subtitle = "Refacem pereții tăi rapid și fără bătăi de cap",
  showImage = true 
}: HeroProps) {
  const handleCall = () => {
    window.location.href = 'tel:0774613207';
  };

  return (
    <section className="min-h-screen bg-[#FAFAFA] flex flex-col pt-24">
      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className={`grid ${showImage ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-16 items-center`}>
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={showImage ? 'order-2 lg:order-1' : 'text-center max-w-2xl mx-auto'}
            >
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#1A1A1A] leading-tight mb-6"
              >
                {title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-lg md:text-xl text-[#6B6B6B] mb-10 ${showImage ? 'max-w-lg' : ''}`}
              >
                {subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className={`flex ${showImage ? 'items-start' : 'justify-center'}`}>
                <motion.button
                  onClick={handleCall}
                  className="inline-flex items-center gap-3 bg-[#5A7D6F] text-white px-10 py-5 rounded-lg font-medium text-lg shadow-[0_4px_12px_rgba(90,125,111,0.25)] hover:bg-[#4A6B5E] transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5" />
                  Sună acum
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Image - Only show on homepage */}
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <img
                      src="/images/eu.jpg"
                      alt="Zugrav profesionist la lucru în Târgoviște"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#5A7D6F]/10 rounded-full -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#5A7D6F]/10 rounded-full -z-10" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
