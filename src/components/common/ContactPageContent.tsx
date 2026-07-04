"use client";

import ContactForm from "@/components/common/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d293.25362482263!2d90.3936811593706!3d23.784329668664885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzAzLjQiTiA5MMKwMjMnMzcuMyJF!5e1!3m2!1sen!2sbd!4v1782813664823!5m2!1sen!2sbd";

function ContactAddress({ heading = "RootTOP Group" }: { heading?: string }) {
  return (
    <address className="not-italic">
      <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
        {heading}
      </h2>

      <div className="mt-6 space-y-5 text-sm leading-7 lg:mt-8">
        <p>
          House #263 (2nd Floor)
          <br />
          Road #19
          <br />
          Mohakhali DOHS
          <br />
          Dhaka Cantonment
          <br />
          Dhaka 1206
          <br />
          Bangladesh
        </p>

        <p>
          <span className="font-semibold">Contact:</span>{" "}
          <a
            href="tel:+8801746644478"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            +88 01746-644478
          </a>
        </p>

        <div>
          <p className="font-semibold">Email:</p>
          <a
            href="mailto:roottoplimited@gmail.com"
            className="block transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            roottoplimited@gmail.com
          </a>
          <a
            href="mailto:info@roottopltd.com"
            className="block transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            info@roottopltd.com
          </a>
        </div>

        <p>
          <span className="font-semibold">Opening Hours:</span> Monday-Friday,
          9:00 AM-6:00 PM
        </p>

        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href="https://www.roottopltd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            www.roottopltd.com
          </a>
        </p>
      </div>
    </address>
  );
}

function MapFrame({ className }: { className: string }) {
  return (
    <iframe
      title="RootTOP Group office location in Mohakhali DOHS, Dhaka"
      src={mapSrc}
      className={className}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default function ContactPageContent() {
  return (
    <article className="bg-white">
      <section aria-labelledby="contact-page-title" className="relative h-105 overflow-hidden md:h-125">
        <Image
          src="/silderImage3.webp"
          alt="RootTOP Group contact and corporate office"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#173C5A]/55" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center text-white">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold uppercase tracking-[5px]"
            >
              Get In Touch
            </motion.span>

            <motion.h1
              id="contact-page-title"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-4 text-5xl font-extrabold uppercase tracking-wide md:text-7xl"
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-lg"
            >
              Whether you need quality materials, business support, or have
              questions about our services, our team is ready to assist you.
              Contact us today and let&apos;s build something great together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary mx-auto mt-8 h-1 w-24 rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-form-heading" className="mb-20">
        <h2 id="contact-form-heading" className="sr-only">
          Send RootTOP Group a Message
        </h2>
        <ContactForm />
      </section>

      <section aria-labelledby="office-location-heading" className="container mx-auto px-4">
        <h2 id="office-location-heading" className="sr-only">
          RootTOP Group Office Location
        </h2>

        <div className="flex flex-col gap-6 md:hidden">
          <div className="rounded-2xl bg-secondary p-8 text-white shadow-lg">
            <ContactAddress heading="RootTOP Limited" />
          </div>

          <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg">
            <MapFrame className="h-full w-full border-0" />
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="h-[500px] overflow-hidden rounded-2xl shadow-lg">
            <MapFrame className="h-full w-full border-0" />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-lg">
            <MapFrame className="absolute inset-0 h-full w-full border-0" />
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <div className="absolute left-8 top-8 z-20 w-[380px] bg-secondary/95 p-10 text-white shadow-2xl">
              <ContactAddress />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
