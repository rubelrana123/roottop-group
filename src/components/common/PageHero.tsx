"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  height?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  height = "h-[360px] md:h-[500px]",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className={`relative overflow-hidden ${height}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#173C5A]/90 via-[#173C5A]/75 to-[#173C5A]/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:px-5 md:text-sm"
          >
            {subtitle}
          </motion.span>

          {/* Title */}
          <motion.h1
            id="page-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base md:mt-6 md:text-lg md:leading-8"
          >
            {description}
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-7 h-1 w-20 rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  );
}