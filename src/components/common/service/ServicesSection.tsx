import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl px-5 lg:px-8">

        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}

      </div>
    </section>
  );
}