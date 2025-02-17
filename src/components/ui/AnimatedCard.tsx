'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  hoverScale?: number;
  hoverRotate?: number;
  hoverLift?: number;
  hoverGlow?: boolean;
}

export default function AnimatedCard({
  children,
  className = '',
  onClick,
  href,
  hoverScale = 1.02,
  hoverRotate = 0,
  hoverLift = -4,
  hoverGlow = true,
}: AnimatedCardProps) {
  const cardContent = (
    <motion.div
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        y: hoverLift,
        boxShadow: hoverGlow
          ? '0 10px 30px -10px rgba(66, 153, 225, 0.3)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={`
        relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200
        transition-colors duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
} 