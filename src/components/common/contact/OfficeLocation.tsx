"use client";

import { motion } from "framer-motion";

import ContactMap from "./ContactMap";
import ContactInfoCard from "./ContactInfoCard";

export default function OfficeLocation() {
  return (
    <section
      aria-labelledby="office-location-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
            Visit Our Office
          </span>

          <h2
            id="office-location-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Let&apos;s Meet in Person
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Whether you&apos;re planning a new project, seeking professional
            consultation, or exploring partnership opportunities, our team is
            always ready to welcome you at our office.
          </p>
        </motion.div>

 
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="w-full">
    <ContactInfoCard />
  </div>

  <div className="w-full">
    <ContactMap />
  </div>
</div>
      </div>
    </section>
  );
}