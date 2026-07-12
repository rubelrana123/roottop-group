"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    name: "RootTOP Limited",
    logo: "/roottop.png",
    description:
      "RootTOP Limited (RTL) is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.",
    website: "https://roottopltd.com/",
  },
  {
    id: 2,
    name: "AR International",
    logo: "/arinternational.png",
    description:
      "AR International is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.",
    website: "https://roottopltd.com/",
  },
  {
    id: 3,
    name: "Orisyn Limited",
    logo: "/orisyn.png",
    description:
      "Orisyn Limited is a premier contractor specializing in construction, consultancy, interior design, IT solutions, and agriculture.",
    website: "https://roottopltd.com/",
  },
  {
    id: 4,
    name: "Satellite Enterprise",
    logo: "/satelite.png",
    description:
      "Satellite Enterprise specializes in construction, consultancy, interior design, IT solutions, and agriculture.",
    website: "https://roottopltd.com/",
  },
  {
    id: 5,
    name: "Crossborder Trading",
    logo: "/crossborder.png",
    description:
      "Crossborder Trading facilitates international trade and commerce.",
    website: "https://roottopltd.com/",
  },
  {
    id: 6,
    name: "Khamar Bari",
    logo: "/khamarbari.png",
    description:
      "Khamar Bari focuses on agricultural solutions and sustainable farming initiatives.",
    website: "https://roottopltd.com/",
  },
];

export default function GroupCompanyCard() {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);

  return (
    <div >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative"
            onMouseEnter={() => setActiveCompany(company.id)}
            onMouseLeave={() => setActiveCompany(null)}
          >
            {/* Logo Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`group relative flex h-40 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 ${
                activeCompany === company.id
                  ? "border-primary shadow-2xl"
                  : "border-gray-200 hover:border-primary/40 hover:shadow-xl"
              }`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={180}
                height={80}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 ${
                  activeCompany === company.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <ArrowUpRight size={18} />
              </div>
            </motion.div>

            {/* Hover Content */}
            <AnimatePresence>
              {activeCompany === company.id && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 right-0 top-full z-30 mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                >
                  <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {company.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {company.description}
                    </p>

                    <Link
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                    >
                      Visit Website
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}