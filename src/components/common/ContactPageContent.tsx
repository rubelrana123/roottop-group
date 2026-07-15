"use client";

import ContactForm from "@/components/common/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "./PageHero";

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
          House #263 (2nd Floor),
          Road #19, 
          <br/>
          Mohakhali DOHS, 
        
          Dhaka Cantonment
          <br />
          Dhaka 1206,
          Bangladesh
        </p>

        <p>
          <span className="font-semibold">Contact:</span>{" "}
          <a
            href="tel:+8801746644478"
            className="transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            +88 01746-644478
          </a>
        </p>

        <div>
          <p className="font-semibold">Email:</p>
          <a
            href="mailto:roottoplimited@gmail.com"
            className="block transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            roottoplimited@gmail.com
          </a>
          <a
            href="mailto:info@roottopltd.com"
            className="block transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            className="transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
    <PageHero
      title="Contact Us"
      subtitle="Let's Connect"
      description="Whether you have a business inquiry, project opportunity, or partnership proposal, our team is ready to assist you with professional support."
      image="/contact.jpg"
      imageAlt="Contact RootTOP Group"
    />
      <section aria-labelledby="contact-form-heading" className="mb-20">
        <h2 id="contact-form-heading" className="sr-only">
          Send RootTOP Group a Message
        </h2>
        <ContactForm />
      </section>

      <section aria-labelledby="office-location-heading" className="container mx-auto px-4 mb-20">
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
            <div className="absolute left-8 top-8 z-20 w-[380px] bg-primary  p-10 text-white shadow-2xl rounded-2xl py-2 my-3">
              <ContactAddress />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
