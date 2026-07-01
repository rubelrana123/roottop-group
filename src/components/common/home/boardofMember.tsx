'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Variants } from 'framer-motion';
const directors = [
  {
    id: 1,
    name: 'ABDUL WAHED',
    role: 'Chairman',
    image: '/demoboardofDirector.jpg',
  },
  {
    id: 2,
    name: 'Mehedi Hasan',
    role: 'Managing Director',
    image: '/md.jpg',
  },
  {
    id: 3,
    name: 'M. A. RAHIM',
    role: 'Vice Chairman',
    image: '/demoboardofDirector.jpg',
  },
  {
    id: 4,
    name: 'M. A. QUADER',
    role: 'Deputy Managing Director & Group CEO',
    image: '/demoboardofDirector.jpg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function BoardOfDirectors() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">
 
        {/* Heading */}
        <div className="relative z-10 mb-16 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[4px]">
            Our Honorable
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            Board of Directors
          </h2>

          <div className="bg-primary mx-auto mt-6 h-1 w-24 rounded-full" />
        </div>
        {/* Director Cards */}
   <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.15,
  }}
  className="relative z-10 grid   gap-6 sm:grid-cols-2 lg:grid-cols-4"
>
  {directors.map((director) => (
    <motion.div
      key={director.id}
      variants={cardVariants}
      className="w-full cursor-pointer"
    >
      {/* Image */}
      <div className="group relative overflow-hidden bg-gray-200">
        <Image
          src={director.image}
          alt={director.name}
          width={500}
          height={650}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="pt-4">
        <h3 className="text-xl font-bold uppercase text-slate-900 md:text-2xl">
          {director.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600 md:text-base">
          {director.role}
        </p>

        <button className="mt-4 flex items-center gap-1 text-sm font-semibold uppercase text-lime-600 transition-all duration-300 hover:gap-2">
          Read Bio
          <ChevronDown size={16} />
        </button>
      </div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}