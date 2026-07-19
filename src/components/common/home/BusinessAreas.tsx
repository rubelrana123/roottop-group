'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import { businessAreas } from '@/lib/data';



export default function BusinessAreas() {
  const cardVariants = {
    initial: {},
    hover: {},
  };

  const exploreMoreVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Our Business Areas"
          title="Businesses We Operate"
          description="We operate across multiple industries with excellence, innovation and sustainable growth."
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          speed={1000}
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={28}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {businessAreas.map((item, i) => {
            const Icon = item.icon;
            return (
              <SwiperSlide key={i}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{
                    duration: 0.35,
                  }}
                  className="group relative h-[430px] overflow-hidden rounded-3xl shadow-lg"
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
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[130%]" />

                  {/* Bottom Content */}
                  {/* <div className="absolute bottom-0 left-0 w-full p-7">
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                  <Link href={item.href}>
                    <motion.div
                      variants={exploreMoreVariants}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/30
                        bg-white/10
                        px-6
                        py-3
                        font-semibold
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-primary
                      "
                    >
                      <span>Explore More</span>

                      <ArrowRight
                        className="
                          h-5
                          w-5
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </motion.div>
                  </Link>
                  </div> */}
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <motion.div
                      variants={{
                        initial: {
                          y: 35,
                        },
                        hover: {
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: 'easeOut',
                          },
                        },
                      }}
                    >
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <motion.div
                        variants={{
                          initial: {
                            opacity: 0,
                            y: 20,
                          },
                          hover: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: 0.15,
                              duration: 0.35,
                            },
                          },
                        }}
                        className="mt-6"
                      >
                        <Link
                          href={item.href}
                          className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-sm
                    border
                    border-white/30
                    bg-white/10
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                   
                    "
                        >
                          <span>Explore More</span>

                          <ArrowRight className="h-5 w-5" />
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
    </section>
  );
}
