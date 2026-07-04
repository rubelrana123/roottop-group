import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[300px] md:h-[420px] overflow-hidden">
      <Image
        src="/exportimport.jpg"
        alt="Services"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-4xl md:text-6xl font-bold uppercase text-white">
    Services
  </h1>

  <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 md:text-lg">
    Explore our comprehensive services, delivering quality, innovation, and
    sustainable solutions across multiple industries.
  </p>
</div>
    </section>
  );
}