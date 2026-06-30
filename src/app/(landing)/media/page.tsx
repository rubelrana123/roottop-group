"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {  Expand } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

const mediaItems = [
  {
    id: 1,
    title: "Dhaka University",
    image: "/gallary-view/gallary1.jpeg",
    height: "h-[240px]",
  },
  {
    id: 2,
    title: "Kumilla University",
    image: "/gallary-view/gallary2.jpeg",
    height: "h-[160px]",
  },
  {
    id: 3,
    title: "BUET",
    image: "/gallary-view/gallary3.jpeg",
    height: "h-[180px]",
  },
  {
    id: 4,
    title: "RUET",
    image: "/gallary-view/gallary4.jpeg",
    height: "h-[210px]",
  },
  {
    id: 5,
    title: "Bangladesh Army",
    image: "/gallary-view/gallary5.jpeg",
    height: "h-[300px]",
  },
  {
    id: 6,
    title: "Bangladesh Navy",
    image: "/gallary-view/gallary6.jpg",
    height: "h-[190px]",
  },
  {
    id: 7,
    title: "Pharmaceuticals",
    image: "/gallary-view/gallary1.jpeg",
    height: "h-[280px]",
  },
  {
    id: 8,
    title: "Garments Accessories",
    image: "/gallary-view/gallary2.jpeg",
    height: "h-[260px]",
  },
  {
    id: 9,
    title: "Spinning",
    image: "/gallary-view/gallary3.jpeg",
    height: "h-[220px]",
  },
  {
    id: 10,
    title: "Textile Testing",
    image: "/gallary-view/gallary4.jpeg",
    height: "h-[190px]",
  },
  {
    id: 11,
    title: "Knitting",
    image: "/gallary-view/gallary5.jpeg",
    height: "h-[180px]",
  },
  {
    id: 12,
    title: "Laboratory",
    image: "/gallary-view/gallary6.jpg",
    height: "h-[250px]",
  },
];

export default function MediaGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = mediaItems.map((item) => ({
    src: item.image,
  }));

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[4px]">
            Media Center
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            Our Journey in Pictures
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Explore our manufacturing excellence, corporate events,
            innovation, community initiatives and the diverse businesses
            that shape our group.
          </p>

          <div className="bg-primary mx-auto mt-6 h-1 w-24" />
        </div>

        {/* Gallery */}
        <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl hover:cursor-pointer"
            >
              <button
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
                className={`relative block w-full overflow-hidden ${item.height}`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Arrow */}
                <div className="absolute right-5 top-5 translate-x-4 -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="                      bg-green-600
                      hover:bg-green-700 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110">
                    <Expand size={22} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 w-full translate-y-6 px-6 pb-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-left text-xl font-semibold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={slides}
          plugins={[Zoom]}
        />
      </div>
    </section>
  );
}