"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "A DIVERSIFIED \n CONGLOMERATE",
    image:
      "/sliderImage2.webp",
    buttonText: "SEE DETAILS",
  },
  {
    id: 2,
    title: "BUILDING THE FUTURE \n TOGETHER",
image:
      "/sliderImage5.webp",
    buttonText: "SEE DETAILS",
  },
  {
    id: 3,
    title: "DELIVERING QUALITY \n & EXCELLENCE",
    image:
      "/sliderImage2.webp",
    buttonText: "SEE DETAILS",
  },
];

export default function HeroSec() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[80vh] min-h-150 w-full overflow-hidden">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">

                <div className="max-w-6xl px-5 text-center">

          <h1
            className="
              mx-auto
              max-w-5xl
              text-white
              font-extrabold
              uppercase
              tracking-tight
              leading-[0.9]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[90px]
            "
          >
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
                  <button
                    className="
                    mt-8
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    font-bold
                    uppercase
                    tracking-[2px]
                    px-10
                    py-4
                    transition-all
                    duration-300
                  "
                  >
                    {slide.buttonText}
                  </button>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}