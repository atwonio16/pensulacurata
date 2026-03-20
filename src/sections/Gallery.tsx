import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: '/images/6.jpg',
    alt: 'Interior proaspăt zugrăvit cu grinzi din lemn',
  },
  {
    src: '/images/5.jpg',
    alt: 'Cameră în proces de zugrăvire',
  },
  {
    src: '/images/4.jpg',
    alt: 'Hol în renovare',
  },
  {
    src: '/images/2.jpg',
    alt: 'Scară protejată în timpul lucrărilor',
  },
  {
    src: '/images/eu.jpg',
    alt: 'Lucru în desfășurare',
  },
  {
    src: '/images/SnapInsta.to_454365623_3837212746507705_8045164492765312489_n.jpg',
    alt: 'Tavan în proces de finisare',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Lucrări recente
          </h2>
        </motion.div>

        {/* Symmetric Grid - 3 columns, all same size */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
            whileHover={{ scale: 1.1 }}
          >
            <X className="w-8 h-8" />
          </motion.button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
