"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Career } from "@/lib/data";

type CareerCardProps = {
  job: Career;
};

export default function CareerCard({
  job,
}: CareerCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {job.featured && (
        <div className="absolute right-0 top-0">
          <div className="relative">
            <div className="h-20 w-20 translate-x-10 -translate-y-10 rotate-45 bg-red-600" />

            <span className="absolute right-1 top-4 rotate-45 text-[10px] font-semibold uppercase tracking-wide text-white">
              Featured
            </span>
          </div>
        </div>
      )}

      <div className="grid gap-8 p-8 lg:grid-cols-[2fr_1fr]">

        <div>

          <h3 className="mb-8 text-3xl font-bold text-slate-800">
            {job.title}
          </h3>

          <div className="grid gap-x-14 gap-y-5 sm:grid-cols-2">

            <Item
              label="Vacancy"
              value={job.summary.vacancy}
            />

            <Item
              label="Salary"
              value={job.summary.salary}
            />

            <Item
              label="Experience"
              value={job.summary.experience}
            />

            <Item
              label="Deadline"
              value={job.summary.deadline}
            />

          </div>

        </div>

        <div className="flex items-center justify-center lg:justify-end disabled">

          <Link
            // href={`/career/${job.slug}`}
            href = "/career"
            className="group inline-flex w-full items-center justify-center rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:w-56"
          >
            Details 

            <ArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={18}
            />
          </Link>

        </div>

      </div>

    </div>
  );
}

type ItemProps = {
  label: string;
  value: string | number;
};

function Item({
  label,
  value,
}: ItemProps) {
  return (
    <div className="flex gap-5">
      <span className="min-w-[95px] font-bold text-slate-700">
        {label}
      </span>

      <span className="text-slate-600">
        {value}
      </span>
    </div>
  );
}