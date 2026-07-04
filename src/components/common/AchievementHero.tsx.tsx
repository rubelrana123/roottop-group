"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementHero() {
  return (
    <section
      className="relative h-80 sm:h-100 md:h-112.5 lg:h-125 bg-cover bg-center bg-scroll lg:bg-fixed"
      style={{
        backgroundImage: "url('/acheivementhero.avif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4  text-center">
        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20"
        >
          <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
        </motion.button>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:mt-8 lg:text-6xl"
        >
          Watch How We Work
        </motion.h2>
      </div>
    </section>
  );
}