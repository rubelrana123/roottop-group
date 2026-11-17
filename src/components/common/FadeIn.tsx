'use client';

import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Tiny client island for scroll-reveal animations. Use it to wrap below-the-fold
 * content so the surrounding page can stay a server component.
 */
export default function FadeIn({ children, className, delay = 0, y = 25 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
