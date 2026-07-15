import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import { services } from "@/lib/data";
import {
  createServiceMetadata,
  getServiceBySlug,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return createServiceMetadata(slug);
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <article>
      <JsonLd
        data={[
          webpageJsonLd({
            title: `${service.title} Services`,
            description: service.shortDescription,
            path: `/services/${service.slug}`,
          }),
          serviceJsonLd(service.slug)!,
        ]}
      />

      <section className="relative h-[300px] overflow-hidden md:h-[450px]" aria-labelledby="service-title">
        <Image
          src={service.image}
          alt={`${service.title} service by RootTOP Group`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-5 text-center text-white">
            <h1 id="service-title" className="text-4xl font-bold uppercase md:text-6xl">
              {service.title}
            </h1>

            <p className="mx-auto mt-5 text-sm leading-7 text-gray-200 md:text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Business Areas", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <section className="py-20" aria-labelledby="service-overview-heading">
        <div className="container mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl">
            <Image
              src={service.image}
              alt={`${service.title} project capability overview`}
              width={700}
              height={500}
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={75}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="sr-only">
              RootTOP Group {service.title} service capability
            </figcaption>
          </figure>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              Our Service
            </span>

            <h2 id="service-overview-heading" className="mt-3 text-3xl font-bold md:text-5xl">
              {service.title} Solutions
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20" aria-labelledby="service-offer-heading">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              Our Expertise
            </span>

            <h2 id="service-offer-heading" className="mt-3 text-3xl font-bold md:text-5xl">
              What We Offer
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-lime-600" aria-hidden="true" />

                <span className="font-medium text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" aria-labelledby="service-strength-heading">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-600">
              Our Strength
            </span>

            <h2 id="service-strength-heading" className="mt-3 text-3xl font-bold md:text-5xl">
              Why Choose RootTOP Group
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.whyChooseUs.map((item) => (
              <li
                key={item}
                className="rounded-xl border bg-white p-8 text-center transition hover:border-lime-500 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime-100">
                  <CheckCircle2 className="h-7 w-7 text-lime-600" aria-hidden="true" />
                </div>

                <h3 className="font-semibold text-slate-900">{item}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 py-20" aria-labelledby="service-contact-heading">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-lime-500">
            Get In Touch
          </span>

          <h2 id="service-contact-heading" className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Looking for {service.title} Services?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
            We are committed to delivering reliable, innovative, and
            cost-effective solutions tailored to your business needs. Contact us
            today to discuss your project.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-lime-600 px-8 py-4 font-semibold text-white transition hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
            aria-label={`Contact RootTOP Group about ${service.title} services`}
          >
            Contact Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}
