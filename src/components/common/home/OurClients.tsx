'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import SectionHeading from '../SectionHeading';
import { clients } from '@/lib/data';

const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));

export default function OurClients() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Trusted Partners"
          title="Our Valuable Clients"
        />

        {/* First Row */}
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
            <SwiperSlide key={client.id}>
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="h-8" />

        {/* Second Row */}
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
            <SwiperSlide key={client.id}>
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
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
    <div className="group h-full py-2">
      <div className="flex h-48 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:bg-[#4FA73F]/5 hover:shadow-xl hover:ring-2 hover:ring-[#4FA73F]">
        <div className="flex flex-1 items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            width={110}
            height={110}
            className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 line-clamp-2 min-h-10 text-center text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-[#4FA73F]">
          {client.name}
        </h3>
      </div>
    </div>
  );
}