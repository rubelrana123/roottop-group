"use client";

import { motion } from "framer-motion";
 
import AchievementStats from "@/components/common/AchievementStats";
import MissionVisionValues from "@/components/common/MissionVisionValues";
 
import PageHero from "../PageHero";

export default function AboutUsContent() {
  return (
    <article className="bg-white">
      <PageHero
  title="About Us"
  subtitle="Who We Are"
  description="RootTOP Group is a diversified business conglomerate delivering innovative solutions across civil engineering, information technology, agriculture, international trade, and consultancy."
  image="/silderImage3.webp"
  imageAlt="RootTOP Group corporate team and business operations"
/>

      <section
        aria-labelledby="corporate-profile-heading"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2
            id="corporate-profile-heading"
            className="sr-only"
          >
            RootTOP Group Corporate Profile
          </h2>

          <p className="text-justify text-base leading-8 text-gray-700">
            RootTOP Group is a diversified business conglomerate in Bangladesh,
            committed to delivering excellence across multiple industries. Since
            its establishment in 2015, the group has grown by providing
            innovative, reliable, and customer-focused solutions in
            civil engineering, consultancy, electrical and mechanical engineering,
            information technology, agriculture, and international trade.
          </p>

          <p className="text-justify text-base leading-8 text-gray-700">
            Guided by a vision of sustainable growth and operational excellence,
            RootTOP Group continuously invests in modern technology,
            professional expertise, and long-term partnerships. From
            infrastructure development and IT solutions to agricultural
            initiatives and global import-export services, the group is
            dedicated to creating value for customers and contributing to
            national development.
          </p>
        </motion.div>
      </section>

      <section
        aria-label="RootTOP Group achievements"
        className="container mx-auto"
      >
        <AchievementStats className="grid grid-cols-2 gap-2 p-8 lg:grid-cols-4" />
      </section>

      <MissionVisionValues />
    </article>
  );
}