'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import SectionHeading from '../SectionHeading';
import { clients } from '@/lib/data';

const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OurClients() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Trusted Partners" title="Our Valuable Clients" />

        {/* First Row */}
        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-visible"
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            watchSlidesProgress
            grabCursor
            allowTouchMove
            speed={8000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            className="!overflow-visible py-3"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {firstRow.map((client) => (
              <SwiperSlide key={client.id} className="py-2">
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="h-4 sm:h-6" />

        {/* Second Row */}
        <motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.12 }}
          className="overflow-visible"
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            watchSlidesProgress
            grabCursor
            allowTouchMove
            speed={8000}
            autoplay={{
              delay: 1,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            className="!overflow-visible py-3"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {secondRow.map((client) => (
              <SwiperSlide key={client.id} className="py-2">
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

function ClientCard({
  client,
}: {
  client: {
    id: number;
    logo: string;
    name: string;
  };
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      className="group h-full py-2"
    >
      <div className="relative flex h-40 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#4FA73F]/5 hover:shadow-xl sm:h-44 sm:p-5 lg:h-48">
        <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#4FA73F]" />

        <div className="flex flex-1 items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            width={200}
            height={200}
            sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110 sm:max-h-20"
          />
        </div>

        <h3 className="mt-4 line-clamp-2 min-h-10 text-center text-xs font-semibold leading-5 text-slate-700 transition-colors duration-300 group-hover:text-[#4FA73F] sm:text-sm">
          {client.name}
        </h3>
      </div>
    </motion.article>
  );
}
