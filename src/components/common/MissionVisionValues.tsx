"use client";

import Image from "next/image";

const values = [
  "Integrity: We uphold the highest ethical standards in all our dealings.",
  "Excellence: We aim for the highest quality in everything we do.",
  "Innovation: We embrace new technologies and smarter construction methods.",
  "Sustainability: We focus on environmentally responsible building practices.",
  "Safety: Keeping our employees, clients, and communities safe is our top priority.",
  "Collaboration: We work closely with clients and partners to achieve the best results.",
];

export default function MissionVisionValues() {
  return (
    <section id="mission-vision-values" className="bg-white py-20">
      <div className="container mx-auto px-4">

        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            {/* Mission */}
            <div className="border-b border-gray-200 pb-10">
              <h2 className="mb-4 text-4xl font-bold text-secondary">
                Mission
              </h2>

              <p className="leading-8 text-gray-600">
                Our mission is to build strong and lasting structures that
                improve people&apos;s lives. We focus on delivering projects on
                time, within budget, and with the highest standards of
                quality, safety, and environmental responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="border-b border-gray-200 py-10">
              <h2 className="mb-4 text-4xl font-bold text-secondary">
                Vision
              </h2>

              <p className="leading-8 text-gray-600">
                Our vision is to become a trusted leader in construction by
                creating smart, sustainable, and innovative infrastructure
                that contributes to stronger communities and a better future.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-10">
              <h2 className="mb-6 text-4xl font-bold text-secondary">
                Core Values
              </h2>

              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>

                    <p className="leading-7">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6">

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/mission/future-visions-business-technology-concept.avif"
                alt="Mission"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative mt-8 aspect-[4/5] overflow-hidden">
              <Image
                src="/mission/technological-futuristic-holograms-logistics-means-transport.avif"
                alt="Vision"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
               src="/mission/technological-futuristic-holograms-logistics-means-transport.avif"

                alt="Building"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative mt-8 aspect-[4/5] overflow-hidden">
              <Image
                src="/mission/businessman-big-office.avif"
                alt="Sustainability"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}