import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  height?: string;
}

// Server component: the entrance animation is pure CSS (tw-animate-css), so the
// heading is in the HTML and starts animating on first paint, without waiting
// for JavaScript to hydrate. That's better for LCP and for crawlers.
const enter =
  "animate-in fade-in slide-in-from-bottom-4 [animation-fill-mode:both] motion-reduce:animate-none";

export default function PageHero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  height = "h-[360px] md:h-[500px]",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className={`relative overflow-hidden ${height}`}
    >
      {/* Background Image (LCP element) */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        loading="eager"
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#173C5A]/90 via-[#173C5A]/75 to-[#173C5A]/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className={`${enter} inline-flex rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary duration-500 md:px-5 md:text-sm`}
          >
            {subtitle}
          </span>

          <h1
            id="page-hero-title"
            className={`${enter} mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white duration-600 [animation-delay:100ms] sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            {title}
          </h1>

          <p
            className={`${enter} mx-auto mt-5 line-clamp-4 max-w-3xl text-sm leading-7 text-slate-200 duration-700 [animation-delay:250ms] sm:text-base md:mt-6 md:text-lg md:leading-8`}
          >
            {description}
          </p>

          <div
            className="mx-auto mt-7 h-1 w-20 rounded-full bg-primary animate-in fade-in zoom-in-50 duration-600 [animation-delay:400ms] [animation-fill-mode:both] motion-reduce:animate-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
