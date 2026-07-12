'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import SectionHeading from '../SectionHeading';

export const clients = [
  {
    id: 1,
    logo: '/clients/24engineerconstructionbrigade.png',
    name: '24 Engineer Construction Brigade',
  },
  {
    id: 2,
    logo: '/clients/armymedicalcore.webp',
    name: 'Army Medical Corps',
  },
  {
    id: 3,
    logo: '/clients/armywalfaretrust.png',
    name: 'Army Welfare Trust',
  },
  {
    id: 4,
    logo: '/clients/banbatunmiss.png',
    name: 'Bangladesh Battalion UN Mission',
  },
  {
    id: 5,
    logo: '/clients/bangladeshnavy.png',
    name: 'Bangladesh Navy',
  },
  {
    id: 6,
    logo: '/clients/bau.png',
    name: 'Bangladesh Agricultural University',
  },
  {
    id: 7,
    logo: '/clients/bcc.png',
    name: 'Bangladesh Computer Council',
  },
  {
    id: 8,
    logo: '/clients/bdairforce.png',
    name: 'Bangladesh Air Force',
  },
  {
    id: 9,
    logo: '/clients/bdarmy.png',
    name: 'Bangladesh Army',
  },
  {
    id: 10,
    logo: '/clients/bdbattalion.png',
    name: 'Bangladesh Ansar Battalion',
  },
  {
    id: 11,
    logo: '/clients/bddscasc.png',
    name: 'Defence Services Command and Staff College',
  },
  {
    id: 12,
    logo: '/clients/bdmtfl.png',
    name: 'Bangladesh Machine Tools Factory Limited',
  },
  {
    id: 13,
    logo: '/clients/bdnavy.png',
    name: 'Bangladesh Navy',
  },
  {
    id: 14,
    logo: '/clients/bdof.png',
    name: 'Bangladesh Ordnance Factory',
  },
  {
    id: 15,
    logo: '/clients/biaa.png',
    name: 'Bangladesh Institute of Administration and Management',
  },
  {
    id: 16,
    logo: '/clients/biam.png',
    name: 'Bangladesh Institute of Administration and Management (BIAM)',
  },
  {
    id: 17,
    logo: '/clients/bncc.png',
    name: 'Bangladesh National Cadet Corps',
  },
  {
    id: 18,
    logo: '/clients/borderguard.png',
    name: 'Border Guard Bangladesh',
  },
  {
    id: 19,
    logo: '/clients/BUET.png',
    name: 'Bangladesh University of Engineering and Technology',
  },
  {
    id: 20,
    logo: '/clients/BUP.png',
    name: 'Bangladesh University of Professionals',
  },
  {
    id: 21,
    logo: '/clients/civilaviaton.png',
    name: 'Civil Aviation Authority of Bangladesh',
  },
  {
    id: 22,
    logo: '/clients/ovijatrik-17.png',
    name: 'Ovijatrik-17',
  },
 
  {
    id: 23,
    logo: '/clients/baf.png',
    name: 'Bangladesh Air Force',
  },
  {
    id: 24,
    logo: '/clients/ru.png',
    name: 'University of Rajshahi',
  },
  {
    id: 25,
    logo: '/clients/cmhdhaka.png',
    name: 'Combined Military Hospital Dhaka',
  },
  {
    id: 26,
    logo: '/clients/cu.png',
    name: 'Cumilla University',
  },
  {
    id: 27,
    logo: '/clients/daraz.png',
    name: 'Daraz Bangladesh',
  },
  {
    id: 28,
    logo: '/clients/departmentofimmigrationandpassports.jpg',
    name: 'Department of Immigration and Passports',
  },
  {
    id: 29,
    logo: '/clients/dgdp.png',
    name: 'Directorate General of Defence Purchase',
  },
  {
    id: 30,
    logo: '/clients/du.png',
    name: 'University of Dhaka',
  },
  {
    id: 31,
    logo: '/clients/ictdivision.png',
    name: 'ICT Division',
  },
  {
    id: 32,
    logo: '/clients/independentinfrantrybrigades.png',
    name: 'Independent Infantry Brigades',
  },
  {
    id: 33,
    logo: '/clients/jolshiri.png',
    name: 'Jolshiri Abashon',
  },
  {
    id: 34,
    logo: '/clients/ju.png',
    name: 'Jahangirnagar University',
  },
  {
    id: 35,
    logo: '/clients/metro.svg',
    name: 'Dhaka Mass Transit Company Limited',
  },
  {
    id: 36,
    logo: '/clients/mist.png',
    name: 'Military Institute of Science and Technology',
  },
  {
    id: 37,
    logo: '/clients/nationaldefencecollage.png',
    name: 'National Defence College',
  },
  {
    id: 38,
    logo: '/clients/pgr.png',
    name: 'President Guard Regiment',
  },
  {
    id: 39,
    logo: '/clients/pstu.png',
    name: 'Patuakhali Science and Technology University',
  },
  {
    id: 40,
    logo: '/clients/pwd.png',
    name: 'Public Works Department',
  },
  {
    id: 41,
    logo: '/clients/rfl.png',
    name: 'RFL Group',
  },
  {
    id: 42,
    logo: '/clients/RIC.png',
    name: 'Research and Innovation Centre',
  },
  {
    id: 43,
    logo: '/clients/ruet.png',
    name: 'Rajshahi University of Engineering and Technology',
  },
  {
    id: 44,
    logo: '/clients/staoffrsmesssylhetcantoment.png',
    name: "Staff Officers' Mess, Sylhet Cantonment",
  },
  {
    id: 45,
    logo: '/clients/theeastbengalregiment.png',
    name: 'The East Bengal Regiment',
  },
  {
    id: 46,
    logo: '/clients/uttrabank.png',
    name: 'Uttara Bank PLC',
  },
];
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
        <Marquee speed={70} pauseOnHover gradient gradientWidth={80}>
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
    <div className="group mx-5">
      <div className="flex h-48 w-48 flex-col rounded-2xl border border-slate-200 
      bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:ring-2 hover:ring-[#4FA73F] hover:bg-[#4FA73F]/5 hover:shadow-xl">
        
        <div className="flex h-24 items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            width={90}
            height={90}
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