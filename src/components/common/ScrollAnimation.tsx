'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < window.innerHeight * 0.4);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => { 
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isTop ? (
<motion.button
  key="down"
  onClick={scrollDown}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  aria-label="Scroll down"
  className="fixed bottom-9 right-4 z-50 -translate-x-1/2 cursor-pointer"
>
  <div className="relative h-14 w-8">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute left-0 right-0 flex justify-center"
        animate={{
          y: [0, 16, 32],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          delay: i * 0.2,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown
          aria-hidden="true"
          size={28}
          className="lg:text-white text-primary/50"
          strokeWidth={2.5}
        />
      </motion.div>
    ))}
  </div>
</motion.button>
      ) : (
        <motion.button
          key="up"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-primary p-3 text-white shadow-xl transition hover:scale-110"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
