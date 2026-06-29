'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

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
  { id: 14, logo: '/clients/client5.png', name: 'Client 14' },
  { id: 15, logo: '/clients/client6.png', name: 'Client 15' },
];

export default function OurClients() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-primary">
            Trusted Partners
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
            Our Valuable Clients
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full" />
        </div>

        {/* Slider */}
        <Marquee
          speed={35}
          pauseOnHover
          gradient
          gradientWidth={100}
        >
          {clients.map((client) => (
            <div key={client.id} className="mx-6">

              {/* Outer animated wrapper */}
              <div className="group relative w-[180px] h-[100px] rounded-xl p-[2px] overflow-hidden">

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl bg-[conic-gradient(#4FA73F,transparent,#4FA73F)] opacity-0 group-hover:opacity-100 animate-borderRotate transition-opacity duration-500" />

                {/* Actual card */}
                <div className="relative z-10 h-full w-full rounded-xl bg-white border border-gray-100 flex items-center justify-center p-5 shadow-sm transition-all duration-500 group-hover:shadow-lg">

                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={130}
                    height={80}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

              </div>

            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
}