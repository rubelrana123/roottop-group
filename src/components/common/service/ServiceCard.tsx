"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  items: string[];
  whyChooseUs: string[];
}

interface Props {
  service: Service;
  reverse?: boolean;
}

export default function ServiceCard({
  service,
  reverse = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid items-center gap-6 border-b py-8 lg:grid-cols-2 lg:gap-14 lg:py-14"
    >
      {/* Image */}
      <div
        className={`overflow-hidden rounded-lg order-1 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={service.image}
          alt={`${service.title} services from RootTOP Group`}
          width={600}
          height={350}
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={85}
          className="w-full aspect-[16/9] object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Text */}
      <div
        className={`space-y-4 order-2 lg:space-y-6 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="h-1 w-12 lg:w-16 bg-lime-500" />

        <h2 className="text-2xl font-bold uppercase lg:text-4xl">
          {service.title} Services
        </h2>

        <p className="text-sm leading-6 text-gray-600 lg:text-lg lg:leading-9 line-clamp-4">
          {service.shortDescription}
        </p>

        <Link
          href={`/services/${service.slug}`}
          aria-label={`View details about RootTOP Group ${service.title} services`}
          className="inline-flex items-center gap-2 border px-4 py-2 text-xs font-semibold uppercase transition hover:border-lime-500 hover:bg-lime-500 hover:text-white lg:px-6 lg:py-3 lg:text-sm"
        >
          See Details
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
