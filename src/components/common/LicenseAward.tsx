"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const awards = [
  {
    id: 1,
    title: "ISO 14001:2015",
    logo: "/isocertified.png",
  },
  {
    id: 2,
    title: "Registered Joint Stock Companies (RJSC) of Bangladesh",
    logo: "/rjsc.png",
  },
  {
    id: 3,
    title: "Dhaka Chamber of Commerce & Industry (DCCI) Membership",
    logo: "/dcci.jpg",
  },
  {
    id: 4,
    title: "Govt Certified",
    logo: "/govt.importerexporter.png",
  },
  {
    id: 5,
    title: "Bangladesh Indenting Agent's Association (BIAA) Membership",
    logo: "/biaa2.jpg",
  },
  {
    id: 6,
    title: "Dhaka City Corporation License",
    logo: "/tradelicense.png",
  },
];

export default function LicenseAwardsSection() {
  return (
    <section
      id="awards-achievements"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Recognition
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Awards & Certifications
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            We are proud to be recognized by trusted organizations for
            maintaining the highest standards of quality, compliance,
            professionalism, and business excellence.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={24}
          speed={700}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
        >
          {awards.map((award) => (
            <SwiperSlide key={award.id}>
              <div className="group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)]">
                {/* Logo */}
                <div className="flex h-full items-center justify-center p-8">
                  <Image
                    src={award.logo}
                    alt={award.title}
                    width={150}
                    height={150}
                    className="max-h-28 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Shine Effect */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[150%]" />
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-white/20 bg-white/20 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <div className="mx-4 rounded-2xl border border-white/30 bg-white/25 px-5 py-4 backdrop-blur-lg">
                    <h3 className="text-center text-base font-semibold leading-relaxed text-slate-900">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}