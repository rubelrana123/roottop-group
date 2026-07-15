'use client';

import Image from 'next/image';
import { awards } from '@/lib/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';

export default function LicenseAwardsSection() {
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
        {/* Heading */}
           <SectionHeading badge="Recognition" title="Certification & Membership" description="            Trusted by Government and International Organizations for quality,
            compliance and professional excellence." />
{/* 
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Recognition
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Certification & Membership
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Trusted by Government and International Organizations for quality,
            compliance and professional excellence.
          </p>
        </div> */}

        {/* Slider */}

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          slidesPerView="auto"
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 220,
            modifier: 2,
            scale: 0.88,
            slideShadows: false,
          }}
          className="certificateSwiper !overflow-visible py-12"
        >
          {awards.map((item) => (
            <SwiperSlide key={item.id} className="!h-[500px] !w-[340px]">
              <div className="group relative h-full overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,.25)]">
                {/* Certificate */}

                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  className="object-contain bg-white p-5 transition duration-700 group-hover:scale-105"
                />

                {/* Blue Glass Gradient */}

                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/25 via-sky-400/15 to-transparent" />

                {/* Dark Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

                {/* Shine */}

                {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" /> */}

                {/* Category Badge */}

                <div className="absolute right-5 top-5">
                  <span className="rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Content */}

                <div className="absolute bottom-0 left-0 w-full p-7">
                  <h3 className="line-clamp-2 text-2xl font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-white/80">
                    RootTOP Group
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
