"use client";

import ContactForm from "@/components/common/ContactForm";

export default function ContactMap() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-[5px]">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            We’re Ready to Support Your Next Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Whether you need quality materials, business support, or have
            any questions about our services, reach out to us and our team
            will respond promptly.
          </p>

          <div className="bg-primary mx-auto mt-6 h-1 w-24 rounded-full" />
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-lg">

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d293.25362482263!2d90.3936811593706!3d23.784329668664885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzAzLjQiTiA5MMKwMjMnMzcuMyJF!5e1!3m2!1sen!2sbd!4v1782813664823!5m2!1sen!2sbd"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Dark Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/30" />

          {/* Contact Card */}
          <div className="absolute left-8 top-8 z-20 w-[380px] bg-[#191B38] p-10 text-white shadow-2xl max-md:left-4 max-md:top-4 max-md:w-[90%]">

            <h2 className="text-4xl font-bold leading-tight">
              RootTOP
              <br />
              Limited
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 md:text-base">

              {/* Address */}
              <div>
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
              </div>

              {/* Contact Information */}
              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Contact:
                  </span>{" "}
                  <a
                    href="tel:+8801746644478"
                    className="transition hover:text-[#4FA73F]"
                  >
                    +88 01746-644478
                  </a>
                </p>

                <div>
                  <p className="font-semibold">
                    Email:
                  </p>

                  <a
                    href="mailto:roottoplimited@gmail.com"
                    className="block transition hover:text-[#4FA73F]"
                  >
                    roottoplimited@gmail.com
                  </a>

                  <a
                    href="mailto:info@roottopltd.com"
                    className="block transition hover:text-[#4FA73F]"
                  >
                    info@roottopltd.com
                  </a>
                </div>

                <p>
                  <span className="font-semibold">
                    Website:
                  </span>{" "}
                  <a
                    href="https://www.roottopltd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#4FA73F]"
                  >
                    www.roottopltd.com
                  </a>
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}