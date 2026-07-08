"use client";

import { motion } from "framer-motion";
import CountNumber from "../ui/countNumber";
 
interface Props {
  number: number;
  suffix?: string;
  title: string;
  subtitle: string;
}

export default function StatCard({
  number,
  suffix = "",
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center border border-gray-200 p-6 transition hover:bg-blue-50 sm:p-8 lg:p-10"
    >
      <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        <CountNumber
          end={number}
          suffix={suffix}
          duration={2}
          className="text-4xl font-bold text-gray-900 sm:text-5xl"
        />
      </h2>

      <p className="mt-4 text-base text-gray-700 sm:mt-5">
        {title}
      </p>

      <p className="text-sm text-gray-500 sm:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}