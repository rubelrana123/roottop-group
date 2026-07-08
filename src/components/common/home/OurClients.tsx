 
'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import SectionHeading from '../SectionHeading';

const clients = [
  { id: 1, logo: '/clients/client1.png', name: 'Client 1' },
  { id: 2, logo: '/clients/client2.png', name: 'Client 2' },
  { id: 3, logo: '/clients/client3.png', name: 'Client 3' },
  { id: 4, logo: '/clients/client4.png', name: 'Client 4' },
  { id: 5, logo: '/clients/client5.png', name: 'Client 5' },
  { id: 6, logo: '/clients/client6.png', name: 'Client 6' },
  { id: 7, logo: '/clients/client7.png', name: 'Client 7' },
  { id: 8, logo: '/clients/client8.png', name: 'Client 8' },
  { id: 9, logo: '/clients/client9.png', name: 'Client 9' },
  { id: 10, logo: '/clients/client10.png', name: 'Client 10' },
  { id: 11, logo: '/clients/client11.png', name: 'Client 11' },
  { id: 12, logo: '/clients/client12.png', name: 'Client 12' },
  { id: 13, logo: '/clients/client13.png', name: 'Client 13' },
  { id: 14, logo: '/clients/client14.webp', name: 'Client 14' },
  { id: 15, logo: '/clients/client15.jpg', name: 'Client 15' },
  { id: 16, logo: '/clients/client16.png', name: 'Client 16' },
  { id: 17, logo: '/clients/client17.png', name: 'Client 17' },
  { id: 18, logo: '/clients/client18.png', name: 'Client 18' },
  { id: 19, logo: '/clients/client19.png', name: 'Client 19' },
  { id: 20, logo: '/clients/client20.png', name: 'Client 20' },
  { id: 21, logo: '/clients/client21.png', name: 'Client 21' },
  { id: 22, logo: '/clients/client22.png', name: 'Client 22' },
  { id: 23, logo: '/clients/client23.png', name: 'Client 23' },
  { id: 24, logo: '/clients/client24.png', name: 'Client 24' },
  { id: 25, logo: '/clients/client25.png', name: 'Client 25' },
  { id: 26, logo: '/clients/client26.png', name: 'Client 26' },
  { id: 27, logo: '/clients/client27.png', name: 'Client 27' },
  { id: 28, logo: '/clients/client28.png', name: 'Client 28' },
  { id: 29, logo: '/clients/client29.png', name: 'Client 29' },
  { id: 30, logo: '/clients/client30.png', name: 'Client 30' },
  { id: 31, logo: '/clients/client31.png', name: 'Client 31' },
  { id: 32, logo: '/clients/client32.png', name: 'Client 32' },
  { id: 33, logo: '/clients/client33.png', name: 'Client 33' },
  { id: 34, logo: '/clients/client34.png', name: 'Client 34' },
  { id: 35, logo: '/clients/client35.png', name: 'Client 35' },
  { id: 36, logo: '/clients/client36.png', name: 'Client 36' },
  { id: 37, logo: '/clients/client37.png', name: 'Client 37' },
  { id: 38, logo: '/clients/client38.png', name: 'Client 38' },
  { id: 39, logo: '/clients/client39.png', name: 'Client 39' },
  { id: 40, logo: '/clients/client40.png', name: 'Client 40' },
  { id: 41, logo: '/clients/client41.png', name: 'Client 41' },
  { id: 42, logo: '/clients/client42.png', name: 'Client 42' },
  { id: 43, logo: '/clients/client43.png', name: 'Client 43' },
  { id: 44, logo: '/clients/client44.svg', name: 'Client 44' },
  { id: 45, logo: '/clients/client45.png', name: 'Client 45' },
];
// Split into two rows
const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondRow = clients.slice(Math.ceil(clients.length / 2));
export default function OurClients() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
<SectionHeading
  badge="Trusted Partners"
  title="Our Valuable Clients"
/>

        {/* First Row */}
        <Marquee
          speed={70}
          pauseOnHover
          gradient
          gradientWidth={80}
        >
          {firstRow.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </Marquee>

        {/* Gap */}
        <div className="h-8" />

        {/* Second Row */}
        <Marquee
          direction="right"
          speed={70}
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
    <div className="mx-5">
      <div className="group relative h-24 w-44 overflow-hidden rounded-xl p-[1px]">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg,#4FA73F,transparent,#4FA73F)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-spin" />

        {/* Card */}
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 group-hover:shadow-xl">
          <Image
            src={client.logo}
            alt={client.name}
            width={130}
            height={80}
            className="max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}