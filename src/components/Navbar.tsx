import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />
          
          {/* Phone */}
          <motion.a
            href="tel:0774613207"
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-[#5A7D6F] text-white hover:bg-[#4A6B5E]' 
                : 'bg-white/90 text-[#5A7D6F] hover:bg-white shadow-sm'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-sm">0774 613 207</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
