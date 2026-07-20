import Image from "next/image";

export default function SisterConcernHero() {
  return (
    <section className="relative h-[300px] md:h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/construction.jpg" // Replace with your banner image
        alt="RootTOP Group sister concerns and business ecosystem"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/45"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtitle */}
          <span className="inline-block rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary md:text-sm">
            Our Ecosystem
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
            Our Sister Concerns
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-200 md:text-lg md:leading-8">
            Discover the companies that form the RootTOP Group ecosystem,
            delivering excellence across civil engineering, supply, information
            technology, consultancy, agriculture, fashion, export & import,
            investment, and real estate development.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}