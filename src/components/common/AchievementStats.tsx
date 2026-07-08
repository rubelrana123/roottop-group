"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";

export const stats = [
  {
    id: 1,
    number: 150,
    suffix: "+",
    title: "Major Infrastructure",
    subtitle: "Projects Completed",
  },
  {
    id: 2,
    number: 5,
    suffix: "+",
    title: "Years of Experience",
    subtitle: "With Pride",
  },
  {
    id: 3,
    number: 6,
    suffix: "+",
    title: "Sister Concerns",
    subtitle: "Group Companies",
  },
  {
    id: 4,
    number: 500,
    suffix: "+",
    title: "Skilled Professionals",
    subtitle: "Employed",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface AchievementStatsProps {
  className?: string;
}

export default function AchievementStats({
  className,
}: AchievementStatsProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={
        className ??
        "grid grid-cols-2 p-8 gap-2"
      }
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item}
          transition={{ duration: 0.5 }}
        >
      <StatCard
        number={stat.number}
        suffix={stat.suffix}
        title={stat.title}
        subtitle={stat.subtitle}
      />
        </motion.div>
      ))}
    </motion.div>
  );
}