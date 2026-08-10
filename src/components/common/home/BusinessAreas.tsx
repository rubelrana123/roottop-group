import SectionHeading from '../SectionHeading';
import LazyBusinessAreasCarousel from './LazyBusinessAreasCarousel';

export default function BusinessAreas() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Our Business Areas"
          title="Businesses We Operate"
          description="We operate across multiple industries with excellence, innovation and sustainable growth."
        />

        <LazyBusinessAreasCarousel />
      </div>
    </section>
  );
}
