'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { awards } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function LicenseAwardsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="awards-achievements"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-100 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-300/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Recognition"
          title="Certification & Membership"
          description="Trusted by Government and International Organizations for quality, compliance and professional excellence."
        />

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides
          slideToClickedSlide
          loop
          grabCursor
          slidesPerView="auto"
          speed={700}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2,
            scale: 0.88,
            slideShadows: false,
          }}
          className="certificateSwiper !overflow-visible py-14"
        >
          {awards.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="!h-[520px] !w-[360px] cursor-pointer"
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]">

                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-sky-100/40 pointer-events-none z-10" />

                {/* Certificate */}
                <div className="relative h-full w-full bg-white p-8">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    className="object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Badge */}
                <div className="absolute right-5 top-5 z-20">
                  <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent p-7">
                  <h3 className="line-clamp-2 text-xl font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="text-sm text-slate-200">
                      RootTOP Group
                    </p>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-[28px] border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}