import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";
import JobDetails from "@/components/common/career/JobDetails";

import { careerData } from "@/lib/data";

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
    return {
      title: "Career Not Found",
      description: "The requested career opportunity could not be found.",
    };
  }

  return {
    title: `${job.title} | Career | RootTOP Group`,
    description: job.jobContext,
  };
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
        description={job.jobContext}
        image={job.image || "/career-banner.webp"}
        imageAlt={job.title}
      />

      <JobDetails job={job} />
    </>
  );
}
