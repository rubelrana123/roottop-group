"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AchievementContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex h-full flex-col justify-center bg-secondary px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16"
    >
      {/* Section Title */}
      <span className="text-lg font-semibold uppercase tracking-wider text-primary sm:text-xl">
        Our Achievements
      </span>

      {/* Heading */}
      <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
        Numbers That <br className="hidden sm:block" />
        Tell Our Story
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8">
        Our success is reflected in the numbers. From completed
        projects to partnerships and financial milestones, our
        impact speaks for itself. These figures showcase our
        dedication to excellence, growth, and long-term success.
      </p>

      {/* Button */}
      <Link
        href="/about"
        className="mt-8 inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary/90 sm:mt-10 sm:px-8 sm:py-4"
      >
        Explore More
      </Link>
    </motion.div>
  );
}