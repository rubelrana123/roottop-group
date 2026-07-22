import GroupCompanyCard from "../GroupCompanyCard";
 
import SectionHeading from "../SectionHeading";

export default function GroupCompanies() {
  return (
    <section className="relative z-30 overflow-visible bg-[#f7f7f7] py-18 md:py-20 lg:py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          badge="Our Ecosystem"
          title="Our Sister Concerns"
          description="Explore our diverse portfolio of sister companies."
        />

        <div className="mt-14 lg:mt-16">
          <GroupCompanyCard />
        </div>
      </div>
    </section>
  );
}
