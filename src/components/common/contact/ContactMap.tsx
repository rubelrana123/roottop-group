"use client";

import { contactInfo, mapSrc } from "@/lib/data";
import { motion } from "framer-motion";
import { MapPinned, ArrowUpRight } from "lucide-react";

interface ContactMapProps {
  height?: string;
}

export default function ContactMap({
  height = "h-[320px] sm:h-[420px] md:h-[500px] lg:h-full",
}: ContactMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative w-full overflow-hidden rounded-[22px] shadow-[0_30px_80px_rgba(0,0,0,.15)] sm:rounded-[32px] ${height}`}
    >
      {/* Google Map */}
      <iframe
        title="RootTOP Group Office Location"
        src={mapSrc}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-3 top-3 z-20 max-w-[75%] sm:left-6 sm:top-6 sm:max-w-none"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-11 sm:w-11">
            <MapPinned size={16} className="sm:hidden" />
            <MapPinned size={20} className="hidden sm:block" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] uppercase tracking-widest text-gray-500 sm:text-xs">
              Office Location
            </p>
            <h3 className="truncate text-xs font-semibold text-gray-900 sm:text-sm">
              Mohakhali DOHS, Dhaka
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.a
        href={contactInfo.direction}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="absolute bottom-3 right-3 z-20 sm:bottom-6 sm:right-6"
      >
        <div className="group flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-primary sm:gap-3 sm:px-6 sm:py-3 sm:text-sm">
          <span className="hidden sm:inline">Get Directions</span>
          <span className="sm:hidden">Directions</span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </motion.a>

      {/* Floating Decoration */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
    </motion.div>
  );
}