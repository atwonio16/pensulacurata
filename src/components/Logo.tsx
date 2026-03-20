import { motion } from 'framer-motion';
import { Paintbrush } from 'lucide-react';

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showIcon = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && (
        <motion.div
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          {/* Paintbrush icon with paint drip effect */}
          <div className="relative">
            <Paintbrush className={`${iconSizes[size]} text-[#5A7D6F]`} strokeWidth={2} />
            {/* Paint drip */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 8 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 bg-[#5A7D6F] rounded-full"
            />
          </div>
        </motion.div>
      )}
      <div className="relative">
        <span className={`font-heading ${sizeClasses[size]} font-semibold text-[#1A1A1A] tracking-tight`}>
          Pensula Curată
        </span>
        {/* Brush stroke underline */}
        <motion.svg
          className="absolute -bottom-1.5 left-0 w-full"
          height="6"
          viewBox="0 0 180 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.path
            d="M1 4C35 1 70 1 105 2C140 3 160 4 179 3"
            stroke="#5A7D6F"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          />
        </motion.svg>
      </div>
    </div>
  );
}
