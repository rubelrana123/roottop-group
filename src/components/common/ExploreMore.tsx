"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const exploreItems = [
  {
    title: "Explore Services",
    description:
      "Discover our comprehensive services across construction, consultancy, IT solutions, interior design, and agriculture.",
    href: "/services",
  },
  {
    title: "Explore Sister Concerns",
    description:
      "Explore our growing ecosystem of sister companies and strategic business ventures.",
    href: "/sister-concerns",
  },
  {
    title: "Explore Contact",
    description:
      "Connect with our team for partnerships, project discussions, or business inquiries.",
    href: "/contact",
  },
  {
    title: "Mission & Vision",
    description:
      "Learn about our mission, vision, and the values that drive our long-term growth and innovation.",
    href: "/mission-vision",
  },
];

export default function ExploreMore() {
  return (
    <section className="bg-[#f3f3f4] py-20">
      <div className="mx-auto px-6 lg:px-20">
 <h2 className="mb-10 text-3xl font-bold text-[#0B1E3C]"> Explore More </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exploreItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group h-full"
            >
              <Link href={item.href}>
                <div
                  className="
                  flex h-full flex-col justify-between
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  p-6
                  transition-all duration-300
                  hover:border-primary
                  hover:shadow-xl
                "
                >
                  <div>
                    <h3
                      className="
                      text-xl
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
                      mt-3
                      text-sm
                      leading-7
                      text-gray-600
                    "
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span
                      className="
                      inline-flex items-center gap-2
                      text-sm
                      font-semibold
                      text-primary
                      transition-all duration-300
                    "
                    >
                      Learn More

                      <ArrowRight
                        size={16}
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