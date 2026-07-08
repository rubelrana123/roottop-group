"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easeOut } from "framer-motion";

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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.15,
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5 py-16 lg:py-18">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
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
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= Left Side ================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Floating Card */}
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
              <div className="flex items-center gap-6 border-l-4 border-primary px-7 py-6">
                <h2 className="text-5xl font-extrabold text-primary">5+</h2>

                <div>
                  <p className="text-lg font-bold uppercase text-gray-900">
                    Years Experience
                  </p>

                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Just Achieved
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Logo */}
            <div className="flex justify-center pt-32 lg:pt-24">
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
          >
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl"
            >
              RootTOP Group
            </motion.h2>

            <motion.div variants={fadeUp} className="relative pl-8">
              <motion.span
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
                className="absolute left-0 top-0 w-1 rounded-full bg-primary"
              />

              <p className="text-lg leading-9 text-gray-600">
                Since 2021, RootTOP Group has been successfully contributing to
                various industries with dedication, integrity, and excellence.
                Through innovation, sustainable development, and customer-first
                values, we have built a reputation for delivering quality
                projects with precision, professionalism, and long-term trust.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 overflow-hidden bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[2px] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-2xl md:text-base"
              >
                <span>Know More</span>

                <motion.span
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}