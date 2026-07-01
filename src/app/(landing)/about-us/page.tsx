"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AchievementStats from "@/components/common/AchievementStats";
import MissionVisionValues from "@/components/common/MissionVisionValues";
import BoardOfDirectors from "@/components/common/home/boardofMember";

export default function AboutUs() {
  return (
    <section className="w-full bg-white">
      {/* Hero Banner */}
      <div className="relative h-105 md:h-125 overflow-hidden">
        <Image
          src="/silderImage3.webp" // Replace with your image
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#173C5A]/55" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide"
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-[16px] leading-8 text-gray-700 text-justify">
            Roottop Group is a family-owned business which started in 1991.
            The first company was named Dual Brothers Limited. Over the
            years, the organization evolved into a diversified conglomerate
            in Bangladesh. The businesses include Apparel, Textiles,
            Textile Printing, Washing, Garments Accessories, Packaging,
            Ceramic Tiles, Pharmaceuticals, Dredging, Retail, and Digital
            Transformation Services.
          </p>

          <p className="text-[16px] leading-8 text-gray-700 text-justify">
            UN Development Programme Business Call to Action has recognized
            our activities to be aligned with the UN Sustainable Development
            Goals. In addition to working with international development
            organizations such as CARE, DEG, IFC, GIZ, ILO, and UNICEF,
            Roottop Group has a diverse set of sustainability programs.
          </p>
        </motion.div>
      </div>
    
    <div className="container">
        <AchievementStats className="grid grid-cols-4"/>
    </div>
    <div>
      <MissionVisionValues />
    </div>
    <BoardOfDirectors/>
   
    </section>
  );
}