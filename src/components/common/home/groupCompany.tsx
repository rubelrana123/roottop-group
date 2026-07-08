import GroupCompanyCard from "../GroupCompanyCard";
 
import SectionHeading from "../SectionHeading";


export default function GroupCompanies() {
 
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-20 lg:py-24 mt-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
      <SectionHeading
        subtitle="Our Ecosystem "
        title="Our Sister Concerns"
        description="Explore our diverse portfolio of sister companies."
      />
        {/* Grid */}
        <div>
          <GroupCompanyCard />

        </div>

      </div>
    </section>
  );
}



