"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const exploreItems = [
  {
    title: "Our Leadership Team",
    description:
      "Meet the visionaries shaping the digital future — CEO Muhammad Monir Hossain",
    href: "/leadership",
  },
  {
    title: "Our Ventures & SBUs",
    description:
      "22+ strategic business units spanning flagship tech, industrial, and emerging concerns.",
    href: "/ventures",
  },
  {
    title: "Vision 2030 & Tech City",
    description:
      "Bangladesh's first fully integrated AI-powered smart Tech City — the next horizon.",
    href: "/vision-2030",
  },
  {
    title: "Services & Industries",
    description:
      "AI solutions for Aviation and more.",
    href: "/services",
  },
];

export default function ExploreMore() {
  return (
    <section className="bg-[#f3f3f4] py-20">
      <div className="mx-auto  px-6 lg:px-20">
        {/* Heading */}
        <h2 className="mb-10 text-3xl font-bold text-[#0B1E3C]">
          Explore More
        </h2>

        {/* Cards */}
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {exploreItems.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group h-full"
    >
      <Link href={item.href}>
        <div
          className="
            flex h-full flex-col justify-between
            rounded-xl
            border border-[#E8EDF4]
            bg-white
            p-5
            transition-all duration-300
            hover:border-primary
            hover:shadow-lg
          "
        >
          <div>
            <h3
              className="
                text-[20px]
                font-semibold
                leading-[1.3]
                text-[#0B1E3C]
                transition-colors duration-300
                group-hover:text-primary
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                text-[14px]
                leading-6
                text-[#667085]
              "
            >
              {item.description}
            </p>
          </div>

          <div className="mt-5">
            <span
              className="
                inline-flex items-center gap-2
                text-xs
                font-bold
                uppercase
                tracking-[1.2px]
                text-primary
                transition-all duration-300
                group-hover:text-primary/60
              "
            >
              Learn More
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}