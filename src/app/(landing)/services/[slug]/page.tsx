"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { services } from "@/lib/data";

export default function ServiceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative h-[300px] overflow-hidden md:h-[450px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-5 text-center text-white">
            <h1 className="text-4xl font-bold uppercase md:text-6xl">
              {service.title}
            </h1>

            <p className="mx-auto mt-5 text-sm leading-7 text-gray-200 md:text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="py-20">
        <div className="container mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          {/* Image */}

          <div className="overflow-hidden rounded-xl">
            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={500}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          {/* Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              OUR SERVICE
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {service.title}
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              OUR EXPERTISE
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              What We Offer
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-lime-600" />

                <p className="font-medium text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              OUR STRENGTH
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-8 text-center transition hover:border-lime-500 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime-100">
                  <CheckCircle2 className="h-7 w-7 text-lime-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-500">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Looking for {service.title} Services?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
            We are committed to delivering reliable, innovative, and
            cost-effective solutions tailored to your business needs.
            Contact us today to discuss your project.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-lime-600 px-8 py-4 font-semibold text-white transition hover:bg-lime-700"
          >
            Contact Us

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}