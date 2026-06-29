'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const directors = [
  {
    id: 1,
    name: 'ABDUL WAHED',
    role: 'Chairman',
    image: '/md.jpg',
  },
  {
    id: 2,
    name: 'M. A. JABBAR',
    role: 'Managing Director',
       image: '/md.jpg',
    },
  {
    id: 3,
    name: 'M. A. RAHIM',
    role: 'Vice Chairman',
       image: '/md.jpg',
  },
  {
    id: 4,
    name: 'M. A. QUADER',
    role: 'Deputy Managing Director & Group CEO',
    image: '/md.jpg',
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function BoardOfDirectors() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Background title */}
        <h2 className="absolute left-0 top-0 text-[60px] md:text-[100px] lg:text-[130px] font-bold text-gray-200/80 select-none pointer-events-none">
          BOARD OF DIRECTORS
        </h2>

        {/* Small heading */}
        <div className="relative z-10 mb-16">
          <div className="inline-flex items-center gap-2">
            <div className="h-[3px] w-7 bg-blue-900" />
            <span className="font-semibold uppercase text-sm tracking-wide text-slate-900">
              Board Of Directors
            </span>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {directors.map((director) => (
            <motion.div
              key={director.id}
              // variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group cursor-pointer"
            >
              {/* image */}
              <div className="relative overflow-hidden bg-gray-200">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={500}
                  height={650}
                  className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              {/* content */}
              <div className="pt-5">
                <h3 className="text-[24px] font-bold uppercase text-slate-900">
                  {director.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  {director.role}
                </p>

                <button className="mt-4 flex items-center gap-1 text-sm font-semibold uppercase text-lime-600 transition hover:gap-2">
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