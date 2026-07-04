'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: 'A DIVERSIFIED \n CONGLOMERATE',
    image: '/cargoship.jpg',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 2,
    title: 'BUILDING THE FUTURE \n TOGETHER',
    image: '/buildconstruction.jpg',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 3,
    title: 'DELIVERING QUALITY \n & EXCELLENCE',
    image: '/roadconstruction.jpg',
    buttonText: 'SEE DETAILS',
  },
  {
    id: 4,
    title: "QUALITY \n YOU'VE GOT IT",
    image: '/cargoship.jpg',
    buttonText: 'SEE DETAILS',
  },
];

export default function HeroSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="
      relative
      w-full
      overflow-hidden
      h-[60vh]
      md:h-[80vh]
      lg:h-[calc(100vh-5rem)]
    "
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <div className="max-w-6xl text-center">
                  {/* Animated Title */}
                  <motion.h1
                    key={`title-${activeIndex}`}
                    className="   mx-auto   max-w-5xl   text-white   font-extrabold uppercase  tracking-tight leading-[0.95]

            text-3xl
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
                    {slide.title.split('\n').map((line, i) => (
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
                              ease: [0.22, 1, 0.36, 1] as const,
                            },
                          },
                        }}
                      >
                        {line}
                      </motion.span>
                    ))}
                  </motion.h1>

                  {/* Animated Button */}
                  <motion.button
                    key={`button-${activeIndex}`}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="
            mt-6
            md:mt-8

            cursor-pointer
            bg-primary/80
            hover:bg-primary

            text-white
            font-bold
            uppercase
            tracking-[2px]

            px-6
            py-3

            md:px-8
            md:py-4

            lg:px-10
            lg:py-4

            text-sm
            md:text-base

            transition-all
            duration-300
          "
                  >
                    {slide.buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
