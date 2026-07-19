import CareerBenefits from "@/components/common/career/CareerBenifits";
import CareerOpening from "@/components/common/career/CareerOpening";
import PageHero from "@/components/common/PageHero";

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="Career"
        subtitle="Join Our Team"
        description="JOIN THE RootTOP  BIGGEST FAMILY"
        image="/silderImage3.webp"
        imageAlt="RootTOP Group corporate team and business operations"
      />

      <CareerOpening />
      <CareerBenefits/>
    </>
  );
}