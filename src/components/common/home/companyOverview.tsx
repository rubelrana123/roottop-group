"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountNumber from "@/components/ui/countNumber";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary blur-[140px]"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-300 blur-[160px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ================= Left Side ================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative hidden md:block"
          >
            {/* Floating Experience Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 z-20 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-5 border-l-4 border-primary px-6 py-5 lg:px-7 lg:py-6">
                <CountNumber
                  end={10}
                  suffix="+"
                  duration={2}
                  className="text-4xl font-bold text-primary lg:text-5xl"
                />

                <div>
                  <p className="text-base font-semibold text-slate-900 lg:text-lg">
                    Years Experience
                  </p>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Just Achieved
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Logo */}
            <div className="flex justify-center pt-28 lg:pt-24">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -1,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Image
                  src="/rootopgrouptm.png"
                  alt="RootTOP Group Logo"
                  width={550}
                  height={420}
                  priority
                  className="h-auto w-full max-w-md object-contain transition-all duration-500 lg:max-w-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= Right Side ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
                About RootTOP Group
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            >
              Building Trust Across
              <br className="hidden md:block" />
              <span className="text-primary"> Multiple Industries</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-7 text-slate-600 md:mt-7 md:text-lg md:leading-8"
            >
              Since 2015,{" "}
              <span className="font-semibold text-slate-800">
                RootTOP Group
              </span>{" "}
              has been delivering trusted solutions across civil engineering,
              IT, consultancy, supply, trading, and other business sectors.
              Guided by quality, integrity, and innovation, we continue to
              create lasting value for our clients, partners, and communities.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-5 md:mt-10"
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl md:px-8 md:py-4"
              >
                <span>Know More</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}