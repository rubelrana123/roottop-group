import SectionHeading from '../SectionHeading';
import LazyOurClientsCarousel from './LazyOurClientsCarousel';

export default function OurClients() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Trusted Partners" title="Our Valuable Clients" />

        <LazyOurClientsCarousel />
      </div>
    </section>
  );
}
