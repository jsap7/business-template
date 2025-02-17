'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
  pattern?: 'dots' | 'grid' | 'waves';
  color?: string;
  className?: string;
}

export default function AnimatedBackground({
  children,
  pattern = 'dots',
  color = 'currentColor',
  className = '',
}: AnimatedBackgroundProps) {
  const patterns = {
    dots: (
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />
      </motion.div>
    ),
    grid: (
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px),
                           linear-gradient(to right, ${color} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />
      </motion.div>
    ),
    waves: (
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ y: 0 }}
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" patternUnits="userSpaceOnUse" width="100" height="20" patternTransform="rotate(0)">
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                fill="none"
                stroke={color}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </motion.div>
    ),
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {patterns[pattern]}
      <div className="relative">{children}</div>
    </div>
  );
} 