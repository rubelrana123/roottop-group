'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
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
    logo: '/roottop.png',
    description:
      'RootTOP Limited provides engineering, construction, IT, consultancy, interior design, and agricultural solutions with a focus on quality and innovation.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 2,
    name: 'AR International',
    logo: '/arinternational2.png',
    description:
      'AR International offers global sourcing, import-export, supply chain, and trading solutions connecting businesses worldwide.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 3,
    name: 'Orisyn Limited',
    logo: '/orisyn.png',
    description:
      'Orisyn Limited delivers technology, engineering, consultancy, and digital solutions for business growth and efficiency.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 4,
    name: 'Satellite Enterprise',
    logo: '/satelite.png',
    description:
      'Satellite Enterprise supplies construction materials, industrial products, engineering support, and procurement services.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 5,
    name: 'Cross Border Trading',
    logo: '/crossborder.png',
    description:
      'Cross Border Trading provides import-export, sourcing, and logistics solutions for global business expansion.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 69,
    name: 'Alter Tech',
    logo: '/altertech.jpeg',
    description:
      'Alter Tech specializes in system development and seamless technology integration. Powered by future-focused, frontier innovations, they tackle critical business challenges and deliver high-impact solutions engineered for tomorrow.',
    website: 'alterteq.com',
  },
  {
    id: 55,
    name: 'K3R Corporation',
    logo: '/k3rf.png',
    description:
      'K3R Corporation specializes in import-export, sourcing, and logistics services with reliable global trade solutions.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 6,
    name: 'Khamarbari Corporation',
    logo: '/khamarbari.png',
    description:
      'Khamarbari Corporation focuses on agriculture, livestock, fisheries, and sustainable food production solutions.',
    website: 'https://roottopltd.com/',
  },
];

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const getExternalHref = (website: string) =>
  /^https?:\/\//i.test(website) ? website : `https://${website}`;

export default function GroupCompanyCard() {
  const [activeCompany, setActiveCompany] = useState<number | null>(null);

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      className="relative z-40 isolate grid grid-cols-1 items-start gap-5 overflow-visible sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
    >
      {companies.map((company) => {
        const websiteHref = getExternalHref(company.website);
        const isActive = activeCompany === company.id;

        return (
          <motion.article
            key={company.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseEnter={() => setActiveCompany(company.id)}
            onMouseLeave={() => setActiveCompany(null)}
            onFocus={() => setActiveCompany(company.id)}
            onBlur={() => setActiveCompany(null)}
            className={`relative h-full min-w-0 ${
              isActive ? 'z-[80]' : 'z-0'
            }`}
          >
            <Link
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company.name} website`}
              aria-describedby={
                isActive ? `company-tooltip-${company.id}` : undefined
              }
              className="group block min-w-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div
                className={`relative aspect-[1.84/1] min-h-32 overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 sm:min-h-36 lg:min-h-40 ${
                  isActive
                    ? 'border-orange-300 shadow-[0_18px_45px_rgba(15,23,42,0.10)]'
                    : 'border-slate-200 hover:border-orange-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]'
                }`}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-md bg-orange-400 text-white opacity-0 shadow-lg transition-all duration-300 ${
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : 'group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'
                  }`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </div>
              </div>
            </Link>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  id={`company-tooltip-${company.id}`}
                  role="tooltip"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="pointer-events-none absolute left-0 right-0 top-full z-[100] mt-5 overflow-visible rounded-lg bg-white shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
                >
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />

                  <div className="relative rounded-lg border border-slate-100 bg-white p-5 md:p-6">
                    <p className="line-clamp-5 min-w-0 overflow-hidden break-words text-center text-xs font-semibold leading-6 text-slate-700 [hyphens:auto] sm:text-sm sm:leading-7">
                      {company.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
