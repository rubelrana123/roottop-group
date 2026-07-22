'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import SectionHeading from './SectionHeading';

const values = [
  'Integrity: We uphold the highest ethical standards in all our dealings.',
  'Excellence: We aim for the highest quality in everything we do.',
  'Innovation: We embrace new technologies and smarter construction methods.',
  'Sustainability: We focus on environmentally responsible building practices.',
  'Safety: Keeping our employees, clients, and communities safe is our top priority.',
  'Collaboration: We work closely with clients and partners to achieve the best results.',
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MissionVisionValues() {
  const images = [
    {
      src: '/mission/future-visions-business-technology-concept.avif',
      alt: 'Mission',
      offset: false,
    },
    {
      src: '/mission/technological-futuristic-holograms-logistics-means-transport.avif',
      alt: 'Vision',
      offset: true,
    },
    {
      src: '/developer.jpg',
      alt: 'Innovation',
      offset: false,
    },
    {
      src: '/mission/businessman-big-office.avif',
      alt: 'Sustainability',
      offset: true,
    },
  ];

  return (
    <section
      id="mission-vision-values"
      className="overflow-hidden bg-white py-16 sm:py-18 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeading
          // subtitle="Who We Are"
          badge="Our Purpose"
          title="Mission, Vision & Values"
          description="Guided by a clear mission, driven by a strong vision, and built on strong values that shape every decision and action we take."
        />

        {/* Main Content */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={sectionVariants} className="min-w-0">
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="border-b border-gray-200 pb-8 sm:pb-10"
            >
              <h3 className="mb-3 text-2xl font-bold leading-tight text-secondary sm:mb-4 sm:text-3xl">
                Mission
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Our mission is to build strong and lasting structures that
                improve people&apos;s lives. We focus on delivering projects on
                time, within budget, and with the highest standards of quality,
                safety, and environmental responsibility.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="border-b border-gray-200 py-8 sm:py-10"
            >
              <h3 className="mb-3 text-2xl font-bold leading-tight text-secondary sm:mb-4 sm:text-3xl">
                Vision
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Our vision is to become a trusted leader in multiple industries by
                creating smart, sustainable, and innovative infrastructure that
                contributes to stronger communities and a better future.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={fadeUp} className="pt-8 sm:pt-10">
              <h3 className="mb-5 text-2xl font-bold leading-tight text-secondary sm:mb-6 sm:text-3xl">
                Core Values
              </h3>

              <motion.ul
                variants={sectionVariants}
                className="space-y-3 sm:space-y-4"
              >
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex min-w-0 items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />

                    <p className="min-w-0 break-words text-sm leading-7 text-gray-600 sm:text-base">
                      {value}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                custom={index}
                variants={imageVariants}
                className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shadow-sm ${
                  image.offset ? 'mt-6 sm:mt-8' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
