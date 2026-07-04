'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
};

const companies: Company[] = [
  {
    id: 1,
    name: 'RootTOP Limited',
    logo: '/roottoplimited.png',
    description:
      'RootTOP Limited (RTL) is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.',
    website: '#',
  },
  {
    id: 2,
    name: 'AR International',
    logo: '/arinternational.png',
    description:
      'AR International is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.',
    website: '#',
  },
  {
    id: 3,
    name: 'Orisin Limited',
    logo: '/orisin.png',
    description:
      'Orisin Limited is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.',
    website: '#',
  },
 

  {
    id: 4,
    name: 'Satellite Enterprise',
    logo: '/satelite.png',
    description:
      'RootTOP Limited (RTL) is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.',
    website: '#',
  },
  {
    id: 5,
    name: 'Crossborder Trading',
    logo: '/crossborder.png',
    description:
      'Crossborder Trading facilitates international trade and commerce.',
    website: '#',
  }, 
    {
    id: 6,
    name: 'Khamar Bari',
    logo: '/khamarbari.png',
    description:
      'RootTOP Limited (RTL) is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.',
    website: '#',
  },
];


 


export default function GroupCompanies() {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
 
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[5px]">
            Our Ecosystem
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            Our Sisters Concern
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our diverse portfolio of sister companies
          </p>

          <div className="bg-primary mx-auto mt-6 h-1 w-24 rounded-full" />
        </div>

        {/* Grid */}
{/* Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)] lg:w-[calc(25%-1.5rem)]"
            onMouseEnter={() => setActiveCompany(company)}
            onMouseLeave={() => setActiveCompany(null)}
          >
            {/* Logo Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`group relative flex h-36 cursor-pointer touch-manipulation items-center justify-center overflow-hidden rounded-2xl border bg-white transition-all duration-300
              ${
                activeCompany?.id === company.id
                  ? "border-primary shadow-2xl"
                  : "border-gray-200 hover:border-primary/50 hover:shadow-xl"
              }`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={170}
                height={70}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Arrow */}
              <div
                className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 ${
                  activeCompany?.id === company.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <ArrowUpRight size={18} />
              </div>
            </motion.div>

            {/* Expand Card */}
            <AnimatePresence>
              {activeCompany?.id === company.id && (
                <motion.div
                  initial={{ opacity: 0, y: -15, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -15, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 right-0 top-full z-20 mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                >
                  {/* Triangle */}
                  <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

                  <div className="relative p-6">
                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {company.description}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={company.website}
                        className="block rounded-sm bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        Visit Website
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

