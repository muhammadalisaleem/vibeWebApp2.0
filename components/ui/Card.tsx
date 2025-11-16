import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: onClick ? 1.02 : 1 }}
      whileTap={{ scale: onClick ? 0.98 : 1 }}
      className={`bg-[#111111] rounded-lg p-4 border border-[#1F1F1F] ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

