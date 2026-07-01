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

{/* Contact Section */}
 
  <div className="container mx-auto px-4">

    {/* ---------------- Mobile Layout ---------------- */}
    <div className="flex flex-col gap-6 md:hidden">

      {/* Contact Card */}
      <div className="bg-secondary p-8 text-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold leading-tight">
          RootTOP
          <br />
          Limited
        </h2>

        <div className="mt-6 space-y-5 text-sm leading-7">
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

          <div className="space-y-3">
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              <a
                href="tel:+8801746644478"
                className="hover:text-primary transition"
              >
                +88 01746-644478
              </a>
            </p>

            <div>
              <p className="font-semibold">Email:</p>

              <a
                href="mailto:roottoplimited@gmail.com"
                className="block hover:text-primary transition"
              >
                roottoplimited@gmail.com
              </a>

              <a
                href="mailto:info@roottopltd.com"
                className="block hover:text-primary transition"
              >
                info@roottopltd.com
              </a>
            </div>

            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://www.roottopltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                www.roottopltd.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-2xl shadow-lg h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d293.25362482263!2d90.3936811593706!3d23.784329668664885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzAzLjQiTiA5MMKwMjMnMzcuMyJF!5e1!3m2!1sen!2sbd!4v1782813664823!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* ---------------- Tablet Layout ---------------- */}
    <div className="hidden md:block lg:hidden">
      <div className="overflow-hidden rounded-2xl shadow-lg h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d293.25362482263!2d90.3936811593706!3d23.784329668664885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzAzLjQiTiA5MMKwMjMnMzcuMyJF!5e1!3m2!1sen!2sbd!4v1782813664823!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* ---------------- Desktop Layout ---------------- */}
    <div className="hidden lg:block">
      <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-lg">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d293.25362482263!2d90.3936811593706!3d23.784329668664885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzAzLjQiTiA5MMKwMjMnMzcuMyJF!5e1!3m2!1sen!2sbd!4v1782813664823!5m2!1sen!2sbd"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute left-8 top-8 z-20 w-[380px] bg-secondary/95 p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-bold leading-tight">
            RootTOP
            <br />
            Limited
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-7">
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

            <div className="space-y-3">
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                <a
                  href="tel:+8801746644478"
                  className="hover:text-primary transition"
                >
                  +88 01746-644478
                </a>
              </p>

              <div>
                <p className="font-semibold">Email:</p>

                <a
                  href="mailto:roottoplimited@gmail.com"
                  className="block hover:text-primary transition"
                >
                  roottoplimited@gmail.com
                </a>

                <a
                  href="mailto:info@roottopltd.com"
                  className="block hover:text-primary transition"
                >
                  info@roottopltd.com
                </a>
              </div>

              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.roottopltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  www.roottopltd.com
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
 
      </div>
    </section>
  );
}