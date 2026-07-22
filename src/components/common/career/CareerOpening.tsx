import { careerData, Career } from "@/lib/data";
import CareerCard from "./CareerCard";

import SectionHeading from "../SectionHeading";

export default function CareerOpening() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="Career Opportunities"
          title="Career Openings"
          description="We're always looking for creative, talented self-starters to
            join the RootTOP Group family. Explore our current opportunities
            and become part of a team committed to innovation, excellence, and
            sustainable growth"
        />
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