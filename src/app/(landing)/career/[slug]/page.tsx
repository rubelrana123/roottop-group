import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";
import JobDetails from "@/components/common/career/JobDetails";

import { careerData } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return careerData.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = careerData.find((item) => item.slug === slug);

  if (!job) {
    return createMetadata({
      title: "Career Not Found",
      description: "The requested career opportunity could not be found.",
      path: `/career/${slug}`,
    });
  }

  return createMetadata({
    title: `${job.title} | Career at RootTOP Group`,
    description: job.jobContext,
    path: `/career/${job.slug}`,
    category: "Career",
    keywords: [job.title, "RootTOP Group careers", "jobs in Bangladesh"],
  });
}

export default async function CareerDetailsPage({
  params,
}: Props) {
  const { slug } = await params;
  const job = careerData.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={job.title}
        subtitle="Career Opportunity"
        description={`${job.company || "RootTOP Group"} · ${job.summary.location} · Apply by ${job.summary.deadline}`}
        image={job.image || "/career-banner.webp"}
        imageAlt={job.title}
        height="h-[320px] sm:h-[380px] lg:h-[440px]"
      />

      <JobDetails job={job} />
    </>
  );
}
