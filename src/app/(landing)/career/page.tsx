import CareerBenefits from "@/components/common/career/CareerBenifits";
import CareerOpening from "@/components/common/career/CareerOpening";
import PageHero from "@/components/common/PageHero";

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="Career"
        subtitle="Join Our Team"
        description="We're always looking for creative, talented self-starters to join the RootTOP Group family "
        image="/contact.jpg"
        imageAlt="RootTOP Group corporate team and business operations"
      />

      <CareerOpening />
      <CareerBenefits/>
    </>
  );
}