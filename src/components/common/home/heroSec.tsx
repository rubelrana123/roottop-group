'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: 'A DIVERSIFIED \n CONGLOMERATE',
    image: '/cargoship.avif',
    alt: 'Cargo logistics and international trade services by RootTOP Group',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 2,
    title: 'BUILDING THE FUTURE \n TOGETHER',
    image: '/buildconstruction.avif',
    alt: 'Construction project services by RootTOP Group',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 3,
    title: 'DELIVERING QUALITY \n & EXCELLENCE',
    image: '/roadconstruction.avif',
    alt: 'Road construction and infrastructure development by RootTOP Group',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 4,
    title: "QUALITY \n YOU'VE GOT IT",
    image: '/exportimport.avif',
    alt: 'Cross border trading and logistics by RootTOP Group',
    buttonText: 'SEE DETAILS',
  },
];

export default function HeroSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative w-full"
      aria-labelledby="home-hero-title"
    >
      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="heroSwiper relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[60vh] overflow-hidden md:h-[80vh] lg:h-[calc(100vh-5rem)]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                sizes="100vw"
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-black/35"
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Content */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="max-w-6xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeIndex].id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              {/* Hero Title */}
              <motion.h1
                id="home-hero-title"
                className="
                  mx-auto
                  max-w-5xl
                  text-3xl
                  font-extrabold
                  uppercase
                  leading-[1.1]
                  tracking-tight
                  text-white
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[90px]
                "
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {slides[activeIndex].title.split('\n').map((line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 80,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {line.trim()}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Button */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/services"
                  aria-label="Explore RootTOP Group services"
                  className="
                    pointer-events-auto
                    mt-6
                    inline-flex
                    cursor-pointer
                    bg-primary/80
                    px-6
                    py-3
                    text-sm
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-primary
                    md:mt-8
                    md:px-8
                    md:py-4
                    md:text-base
                    lg:px-10
                    lg:py-4
                  "
                >
                  {slides[activeIndex].buttonText}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}