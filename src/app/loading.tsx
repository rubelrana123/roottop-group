"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const dots = [
  "#39FF14", // green
  "#FF7A00", // orange
  "#39FF14",
  "#FF7A00",
];

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative"
        >
          <Image
            src="/logo.png"
            alt="RootTOP Group"
            width={240}
            height={100}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Animated Dots */}
        <div className="mt-6 flex items-center gap-2">
          {dots.map((color, index) => (
            <motion.div
              key={index}
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor: color,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-4 text-sm font-medium tracking-[5px] text-gray-300"
        >
          LOADING
        </motion.p>
      </div>
    </div>
  );
}