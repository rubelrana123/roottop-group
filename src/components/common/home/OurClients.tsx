'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import SectionHeading from '../SectionHeading';
import { clients } from '@/lib/data';

// Split into two rows
const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));
export default function OurClients() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <SectionHeading badge="Trusted Partners" title="Our Valuable Clients" />

        {/* First Row */}
        <Marquee speed={100} pauseOnHover gradient gradientWidth={80}>
          {firstRow.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </Marquee>

        {/* Gap */}
        <div className="h-8" />

        {/* Second Row */}
        <Marquee
          direction="right"
          speed={100}
          pauseOnHover
          gradient
          gradientWidth={80}
        >
          {secondRow.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function ClientCard({
  client,
}: {
  client: {
    id: number;
    logo: string;
    name: string;
  };
}) {
  return (
    <div className="group mx-5">
      <div className="flex h-48 w-48 flex-col rounded-2xl border border-slate-200 
      bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:ring-2 hover:ring-[#4FA73F] hover:bg-[#4FA73F]/5 hover:shadow-xl">
        
        <div className="flex h-24 items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            width={100}
            height={100}
            className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

<h3 className="mt-4 line-clamp-2 min-h-10 px-2 text-center text-[14px] font-semibold leading-5 text-slate-700 transition-colors duration-300 group-hover:text-[#4FA73F]">
  {client.name}
</h3>

      </div>
    </div>
  );
}