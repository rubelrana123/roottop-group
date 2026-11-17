import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/common/JsonLd";
import PageHero from "@/components/common/PageHero";
import JobDetails from "@/components/common/career/JobDetails";

import { careerData } from "@/lib/data";
import {
  breadcrumbJsonLd,
  createJobMetadata,
  getJobBySlug,
  jobPostingJsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only the jobs in careerData exist; any other slug is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return careerData.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return createJobMetadata(slug);
}

export default async function CareerDetailsPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return (
    <>
      <JsonLd
        data={[
          jobPostingJsonLd(job),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Career", href: "/career" },
            { name: job.title, href: `/career/${job.slug}` },
          ]),
        ]}
      />

      <PageHero
        title={job.title}
        subtitle="Career Opportunity"
        description={job.jobContext}
        image={job.image}
        imageAlt={`${job.title} job opening at RootTOP Group`}
      />

      <JobDetails job={job} />
    </>
  );
}
