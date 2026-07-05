"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AchievementStats from "@/components/common/AchievementStats";
import MissionVisionValues from "@/components/common/MissionVisionValues";

export default function AboutUsContent() {
  return (
    <article className="w-full bg-white">
      <section aria-labelledby="about-page-title" className="relative h-105 overflow-hidden md:h-125">
        <Image
          src="/silderImage3.webp"
          alt="RootTOP Group corporate team and business operations"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#173C5A]/55" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            id="about-page-title"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold uppercase tracking-wide text-white md:text-7xl"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section aria-labelledby="corporate-profile-heading" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 id="corporate-profile-heading" className="sr-only">
            RootTOP Group Corporate Profile
          </h2>
          <p className="text-justify text-[16px] leading-8 text-gray-700">
            RootTOP Group is a diversified business conglomerate in Bangladesh,
            committed to delivering excellence across multiple industries. Since
            its establishment in 2021, the group has grown by providing
            innovative, reliable, and customer-focused solutions in
            construction, consultancy, electrical and mechanical engineering,
            information technology, agriculture, and international trade.
          </p>

          <p className="text-justify text-[16px] leading-8 text-gray-700">
            Guided by a vision of sustainable growth and operational
            excellence, RootTOP Group continuously invests in modern technology,
            professional expertise, and long-term partnerships. From
            infrastructure development and IT solutions to agricultural
            initiatives and global import-export services, the group is
            dedicated to creating value for customers and contributing to
            national development.
          </p>
        </motion.div>
      </section>

      <section aria-label="RootTOP Group achievements" className="container mx-auto">
        <AchievementStats   />
      </section>

      <MissionVisionValues />
    </article>
  );
}
