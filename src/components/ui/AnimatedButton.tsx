'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type HoverEffect = 'lift' | 'bounce' | 'glow' | 'scale' | 'shake' | 'wiggle';

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: ButtonVariant;
  hoverEffect?: HoverEffect;
  className?: string;
}

const baseStyles = {
  primary: 'bg-primary text-white shadow-sm hover:bg-primary-light',
  secondary: 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
  outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary/5',
};

const hoverAnimations = {
  lift: 'hover:animate-hover-lift',
  bounce: 'hover:animate-hover-bounce',
  glow: 'hover:animate-hover-glow',
  scale: 'hover:animate-hover-scale',
  shake: 'hover:animate-hover-shake',
  wiggle: 'hover:animate-hover-wiggle',
};

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  hoverEffect = 'lift',
  className = '',
}: AnimatedButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold
    transition-all duration-200
    ${baseStyles[variant]}
    ${hoverAnimations[hoverEffect]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
} 