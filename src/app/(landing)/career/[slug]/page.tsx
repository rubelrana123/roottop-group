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
  console.log("========== generateStaticParams ==========");

  const paths = careerData.map((job) => ({
    slug: job.slug,
  }));

  console.log(paths);

  return paths;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  console.log("========== generateMetadata ==========");
  console.log("Slug:", slug);

  const job = careerData.find((item) => item.slug === slug);

  console.log("Found Job:", job);

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

  console.log("========== CareerDetailsPage ==========");
  console.log("Requested Slug:", slug);

  console.log("Available Slugs:");
  console.table(
    careerData.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
    }))
  );

  const job = careerData.find((item) => item.slug === slug);

  console.log("Matched Job:", job);

  if (!job) {
    console.error(`❌ No job found for slug: ${slug}`);
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