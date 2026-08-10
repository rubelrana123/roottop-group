export type Company = {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
};

export const companies: Company[] = [
  {
    id: 1,
    name: 'RootTOP Limited',
    logo: '/roottoplimited.png',
    description:
      'RootTOP Limited provides engineering, construction, IT, consultancy, interior design, and agricultural solutions with a focus on quality and innovation.',
    website: 'https://roottopltd.com/',
  },
  {
    id: 2,
    name: 'Orisyn Limited',
    logo: '/orisyn.png',
    description:
      'Orisyn Limited delivers technology, engineering, consultancy, and digital solutions for business growth and efficiency.',
    website: 'https://orisynltd.com/',
  },
  {
    id: 3,
    name: 'Cross Border Trading',
    logo: '/crossborder.png',
    description:
      'Cross Border Trading provides import-export, sourcing, and logistics solutions for global business expansion.',
    website: 'https://crossbordertrading.com.bd/',
  },
  {
    id: 4,
    name: 'Satellite Enterprise',
    logo: '/satelite.png',
    description:
      'Satellite Enterprise supplies construction materials, industrial products, engineering support, and procurement services.',
    website: 'https://satelliteenterprise.com/',
  },
  {
    id: 5,
    name: 'AR International',
    logo: '/arinternational2.png',
    description:
      'AR International offers global sourcing, import-export, supply chain, and trading solutions connecting businesses worldwide.',
    website: 'https://arintbd.com/',
  },
  {
    id: 6,
    name: 'K3R Corporation',
    logo: '/k3r.webp',
    description:
      'K3R Corporation specializes in import-export, sourcing, and logistics services with reliable global trade solutions.',
    website: 'https://k3rcorporation.com/',
  },
  {
    id: 7,
    name: 'Alter Tech',
    logo: '/altertech.jpeg',
    description:
      'Alter Tech specializes in system development and seamless technology integration. Powered by future-focused, frontier innovations, they tackle critical business challenges and deliver high-impact solutions engineered for tomorrow.',
    website: 'alterteq.com',
  },
  {
    id: 6,
    name: 'Khamarbari Corporation',
    logo: '/khamarbari.png',
    description:
      'Khamarbari Corporation focuses on agriculture, livestock, fisheries, and sustainable food production solutions.',
    website: 'https://www.khamarbaricorp.com/',
  },
];
