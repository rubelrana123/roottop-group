"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { awards } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function LicenseAwardsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="awards-achievements"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-100 py-16 sm:py-20 lg:py-24"
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

        {/* IMPORTANT */}
        <div className="mx-auto max-w-[1300px] overflow-visible">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            centeredSlides
            slideToClickedSlide
            loop
            loopAdditionalSlides={0}
            watchSlidesProgress
            grabCursor
            speed={700}
            slidesPerView="auto"
            spaceBetween={14}
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
              depth: 130,
              modifier: 1.25,
              scale: 0.92,
              slideShadows: false,
            }}
            className="certificateSwiper !overflow-visible py-10 sm:py-12 lg:py-14"
          >
            {awards.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className="!h-[400px] !w-[min(82vw,300px)] sm:!h-[450px] sm:!w-[320px] lg:!h-[500px] lg:!w-[360px]"
                onClick={() => swiperRef.current?.slideToLoop(index)}
              >
                <div
                  className="group relative h-full select-none overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)] sm:rounded-[24px]"
                  onContextMenu={(event) => event.preventDefault()}
                >
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/70 via-white/10 to-primary/5" />

                  <div className="relative h-full w-full overflow-hidden bg-white p-6 outline-none sm:p-7 lg:p-8">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      fill
                      draggable={false}
                      onContextMenu={(event) => event.preventDefault()}
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 82vw"
                      className="pointer-events-none select-none object-contain transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute right-4 top-4 z-20 sm:right-5 sm:top-5">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm sm:px-4 sm:py-2 sm:text-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 z-20 w-full border-t border-white/80 bg-white/95 p-5 shadow-[0_-14px_34px_rgba(255,255,255,0.92),0_16px_32px_rgba(15,23,42,0.12)] backdrop-blur sm:p-6 lg:p-7">
                    <h3 className="line-clamp-2 text-base font-bold uppercase leading-snug tracking-wide text-slate-900 sm:text-lg lg:text-xl">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <p className="text-xs font-medium text-slate-500 sm:text-sm">
                        RootTOP Group
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/40 sm:rounded-[24px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
