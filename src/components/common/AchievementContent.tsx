'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AchievementContent() {
  return (
    <div className="flex h-full flex-col justify-center bg-secondary px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-16 xl:px-16">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-base font-semibold uppercase tracking-wider text-primary sm:text-lg"
      >
        Our Achievements
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
      >
        Numbers That
        <br className="hidden sm:block" />
        Tell Our Story
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base"
      >
        Our success is reflected in the numbers. From completed projects to
        partnerships and financial milestones, our impact speaks for itself.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <Link
          href="/about-us"
          className=" mt-6
                  md:mt-8

                  pointer-events-auto
                  cursor-pointer

                  bg-primary/80
                  hover:bg-primary

                  text-white
                  font-bold
                  uppercase
                  tracking-[2px]

                  px-6
                  py-3

                  md:px-8
                  md:py-4

                  lg:px-8
                  lg:py-3.5

                  text-sm
                  md:text-base

                  transition-colors
                  duration-300
                  inline-flex "
        >
          Explore More
        </Link>
      </motion.div>
    </div>
  );
}
