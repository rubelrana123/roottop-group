import { careerData, Career } from "@/lib/data";
import CareerCard from "./CareerCard";

export default function CareerOpening() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-primary font-semibold uppercase tracking-widest">
            Career Opportunities
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Career Openings
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            We&apos;re always looking for creative, talented self-starters to
            join the RootTOP Group family. Explore our current opportunities
            and become part of a team committed to innovation, excellence, and
            sustainable growth.
          </p>
        </div>

        <div className="space-y-8">
          {careerData.map((job: Career) => (
            <CareerCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  );
}