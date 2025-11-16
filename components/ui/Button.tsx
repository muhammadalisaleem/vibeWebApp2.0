import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'cta' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
  size = 'md',
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const baseClasses = `rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`;
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/40',
    cta: 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] hover:from-[#E55A2B] hover:to-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/25 hover:shadow-xl hover:shadow-[#FF6B35]/40',
    secondary: 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white border border-[#2A2A2A] hover:border-[#3A3A3A]',
    outline: 'bg-transparent border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 hover:border-[#8B5CF6]',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

