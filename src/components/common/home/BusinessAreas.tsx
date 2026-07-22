'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionHeading from '../SectionHeading';
import { businessAreas } from '@/lib/data';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
  },
};

const contentVariants: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const buttonWrapVariants: Variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  hover: {
    opacity: 1,
    y: -2,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

export default function BusinessAreas() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Our Business Areas"
          title="Businesses We Operate"
          description="We operate across multiple industries with excellence, innovation and sustainable growth."
        />

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{
            clickable: true,
          }}
          loop
          speed={500}
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={28}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {businessAreas.map((item, i) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={i}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: (i % 4) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative h-[430px] overflow-hidden rounded-3xl border border-white/10 shadow-lg transition-colors duration-300 hover:border-primary/70 focus-within:border-primary/70"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent transition-all duration-500 group-hover:from-primary/80" />

                  {/* Icon */}
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Shine */}
                  <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[130%]" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <motion.div variants={contentVariants} initial="initial">
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <motion.div
                        variants={buttonWrapVariants}
                        initial="initial"
                        className="mt-6"
                      >
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-3 rounded-sm border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-950 focus-visible:border-white focus-visible:bg-white focus-visible:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          <span>Explore More</span>
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Swiper Responsive Styles */}
      <style jsx global>{`
        /* Mobile */
        @media (max-width: 767px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }

          .swiper-pagination {
            display: block;
            position: relative;
            margin-top: 24px;
          }
        }

        /* Desktop */
        @media (min-width: 768px) {
          .swiper-pagination {
            display: none !important;
          }
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 26px;
          border-radius: 9999px;
          background: #4fa73f;
        }
      `}</style>
    </section>
  );
}
