'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type IconEffect = 'pulse' | 'spin' | 'morph' | 'bounce' | 'shake';

interface AnimatedIconProps {
  children: ReactNode;
  effect?: IconEffect;
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const effectVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  spin: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  },
  morph: {
    scale: [1, 1.1, 0.9, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  bounce: {
    y: [0, -8, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  shake: {
    x: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2
    }
  }
};

export default function AnimatedIcon({
  children,
  effect = 'pulse',
  color = 'currentColor',
  size = 24,
  className = '',
  onClick
}: AnimatedIconProps) {
  return (
    <motion.div
      animate={effectVariants[effect]}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ color, width: size, height: size }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
} 