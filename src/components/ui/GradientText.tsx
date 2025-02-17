'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GradientDirection = 'left-to-right' | 'top-to-bottom' | 'diagonal';
type GradientPreset = 'primary' | 'secondary' | 'accent' | 'rainbow';

interface GradientTextProps {
  children: ReactNode;
  preset?: GradientPreset;
  direction?: GradientDirection;
  className?: string;
  animate?: boolean;
}

const gradientPresets = {
  primary: 'from-primary via-primary-light to-primary-dark',
  secondary: 'from-secondary via-secondary-light to-secondary-dark',
  accent: 'from-accent-gold via-primary to-accent-green',
  rainbow: 'from-blue-600 via-purple-600 to-red-600',
};

const directionClasses = {
  'left-to-right': 'bg-gradient-to-r',
  'top-to-bottom': 'bg-gradient-to-b',
  'diagonal': 'bg-gradient-to-br',
};

export default function GradientText({
  children,
  preset = 'primary',
  direction = 'left-to-right',
  className = '',
  animate = true,
}: GradientTextProps) {
  const baseClasses = `
    inline-block text-transparent bg-clip-text
    ${directionClasses[direction]}
    ${gradientPresets[preset]}
    ${className}
  `;

  if (animate) {
    return (
      <motion.span
        className={baseClasses}
        animate={{
          backgroundPosition: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={baseClasses}>{children}</span>;
} 