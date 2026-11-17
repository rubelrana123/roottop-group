import AchievementStats from "@/components/common/AchievementStats";
import FadeIn from "@/components/common/FadeIn";
import PageHero from "../PageHero";

export default function AboutUsContent() {
  return (
    <article className="bg-white">
      <PageHero
  title="About Us"
  subtitle="Who We Are"
  description="RootTOP Group is a diversified business conglomerate delivering innovative solutions across construction, engineering, information technology, agriculture, international trade, and consultancy."
  image="/silderImage3.webp"
  imageAlt="RootTOP Group corporate team and business operations"
/>

      <section
        aria-labelledby="corporate-profile-heading"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-20"
      >
        <FadeIn className="space-y-7 md:space-y-8">
          <h2
            id="corporate-profile-heading"
            className="sr-only"
          >
            RootTOP Group Corporate Profile
          </h2>

          <p className="text-justify text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            RootTOP Group is a diversified business conglomerate in
            Bangladesh, committed to delivering excellence across multiple
            industries. Since its establishment in 2015, the group has grown
            by providing innovative, reliable, and customer-focused solutions
            in civil engineering, consultancy, electrical and mechanical
            engineering, information technology, agriculture, and
            international trade.
          </p>

          <p className="text-justify text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Guided by a vision of sustainable growth and operational
            excellence, RootTOP Group continuously invests in modern
            technology, professional expertise, and long-term partnerships.
            From infrastructure development and IT solutions to agricultural
            initiatives and global import-export services, the group is
            dedicated to creating value for customers and contributing to
            national development.
          </p>
        </FadeIn>
      </section>

      <section
        aria-label="RootTOP Group achievements"
        className="container mx-auto"
      >
        <AchievementStats className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6 md:gap-6 md:p-8 lg:grid-cols-4" />
      </section>

    </article>
  );
}

