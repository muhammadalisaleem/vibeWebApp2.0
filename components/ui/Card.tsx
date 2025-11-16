import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'highlight' | 'gradient';
}

export function Card({ children, className = '', onClick, variant = 'default' }: CardProps) {
  const baseClasses = 'rounded-xl p-5 border transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-[#0F0F0F] border-[#1F1F1F] hover:border-[#2A2A2A] hover:bg-[#1A1A1A]',
    highlight: 'bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] border-[#7C3AED]/30 hover:border-[#7C3AED]/50 hover:shadow-lg hover:shadow-[#7C3AED]/10',
    gradient: 'bg-gradient-to-br from-[#7C3AED]/10 via-[#0F0F0F] to-[#FF6B35]/10 border-[#2A2A2A] hover:border-[#3A3A3A]',
  };

  return (
    <motion.div
      whileHover={onClick ? { scale: 1.02, y: -2 } : { y: -2 }}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

