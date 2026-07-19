import { 
  Building2,
  Package,
  Laptop,
  Briefcase,
  Globe,
  Sprout,
  Shirt,
  LineChart,
  Building,
} from 'lucide-react';
export const businessAreas = [
  {
    title: 'Civil Engineering',
    description:
      'Delivering world-class construction and infrastructure solutions.',
    icon: Building2,
    image: '/contractor.png',
    href: '/services/civil-engineering',
  },
  {
    title: 'Supply',
    description: 'Reliable sourcing and distribution for diverse industries.',
    icon: Package,
    image: '/exportimport.avif',
    href: '/services/import-export',
  },
  {
    title: 'Information and Technology',
    description:
      'Innovative digital products and enterprise technology solutions.',
    icon: Laptop,
    image: '/it.jpeg',
    href: '/services/information-technology',
  },
  {
    title: 'Consultancy',
    description: 'Strategic advisory services for sustainable business growth.',
    icon: Briefcase,
    image: '/consultancy.jpg',
    href: '/services/consultancy',
  },
  {
    title: 'Agro',
    description: 'Modern agricultural initiatives focused on sustainability.',
    icon: Sprout,
    image: '/agriculture.avif',
    href: '/services/agro',
  },
  {
    title: 'Fashion',
    description: 'Premium fashion and lifestyle solutions.',
    icon: Shirt,
    image: '/fashion.jpg',
    href: '/services/fashion',
  },
  {
    title: 'Investment',
    description: 'Driving financial growth through diversified opportunities.',
    icon: LineChart,
    image: '/investment.jpg',
    href: '/services/investment', 
  },
  {
    title: 'Developer',
    description: 'Creating modern real estate developments.',
    icon: Building,
    image: '/developer.jpg',
    href: '/services/civil-engineering',
  },
  {
    title: 'Export & Import',
    description: 'Global trade and logistics solutions.',
    icon: Globe,
    image: '/exportimport.avif',
    href: '/services/import-export',
  },
  {
    title: 'Electrical & Mechanical',
    description: 'Comprehensive engineering solutions for industrial projects.',
    icon: Building2,
    image: '/eeeandme.avif',
    href: '/services/electrical-mechanical',
  },
];

export const services = [
  {
    id: 1,
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortDescription:
      "Delivering comprehensive civil Engineering solutions with quality, safety, and innovation.",

    description:
      "As a trusted first-class civil engineering firm in Bangladesh, we provide complete construction services for government, commercial, and private sectors. Our expertise spans building construction, infrastructure development, steel fabrication, and material supply, ensuring every project is delivered with excellence, safety, and reliability.",

    image: "/buildconstruction.avif",

    items: [
      "Building Construction",
      "Road & Barrier",
      "Bridge Construction",
      "Stone Supply",
      "Sand Filling",
      "Steel Structure",
    ],

    whyChooseUs: [
      "First-Class Contractor",
      "Experienced Engineering Team",
      "Modern Equipment & Technology",
      "On-Time Project Delivery",
      "Commitment to Safety & Quality",
    ],
  },
 {
    id: 2,
    slug: "electrical-mechanical",
    title: "Electrical & Mechanical Engineering",
    shortDescription:
      "Reliable electrical and mechanical engineering solutions for industrial and commercial projects.",

    description:
      "Our Electrical & Mechanical division delivers complete power and engineering solutions, from equipment supply and installation to maintenance, overhauling, and system optimization. We ensure safe, efficient, and uninterrupted operations for every client.",

    image: "/eeeandme.avif",

    items: [
      "Generator, ATS & Canopy",
      "Panel Installation",
      "Servicing & Maintenance",
      "Top & Major Overhauling",
      "Substation & Transformer",
      "PFI, MCB & VCB Solutions",
    ],

    whyChooseUs: [
      "Certified Technical Team",
      "24/7 Maintenance Support",
      "High-Quality Equipment",
      "Reliable Power Solutions",
    ],
  },
    {
  id: 3,
  slug: "interior-exterior-design",
  title: "Interior & Exterior Design",
  shortDescription:
    "Creating modern, functional, and visually stunning interior and exterior spaces.",

  description:
    "Our Interior & Exterior Design division delivers creative, practical, and high-quality design solutions for residential, commercial, and corporate projects. From concept development and space planning to landscape and façade design, we transform ideas into elegant, functional environments that reflect our clients' vision and lifestyle.",

  image: "/interiornadexterior.jpg",

  items: [
    "Interior Design",
    "Exterior Design",
    "Space Planning",
    "3D Design & Visualization",
    "Landscape Design",
    "Furniture & Decoration",
    "Renovation & Remodeling",
    "Turnkey Interior Solutions",
  ],

  whyChooseUs: [
    "Creative & Experienced Designers",
    "Customized Design Solutions",
    "Premium Quality Materials",
    "Modern & Sustainable Designs",
    "End-to-End Project Management",
    "On-Time Project Delivery",
  ],
},
  {
    id: 4,
    slug: "information-technology",
    title: "Information Technology",
    shortDescription:
      "Supplying modern IT products and digital technology solutions.",

    description:
      "We offer a wide range of information technology products and services for businesses, institutions, and government organizations. From desktops and laptops to networking infrastructure and IT hardware, we deliver dependable technology solutions tailored to your needs.",

    image: "/it.jpeg",

    items: [
      "Desktop Computers",
      "Laptops",
      "IT Hardware",
      "Networking Equipment",
      "IT Infrastructure",
    ],

    whyChooseUs: [
      "Latest Technology Products",
      "Trusted IT Brands",
      "Professional Technical Support",
      "Business-Focused Solutions",
    ],
  },

  {
    id: 5,
    slug: "import-export",
    title: "Import & Export",
    shortDescription:
      "Providing reliable global sourcing and international trade solutions.",

    description:
      "We facilitate efficient import and export operations by sourcing high-quality products from permitted international markets. Our team ensures regulatory compliance, timely delivery, and seamless logistics for every transaction.",

    image: "/exportimport.avif",

    items: [
      "Global Product Sourcing",
      "International Procurement",
      "Import Services",
      "Export Services",
    ],

    whyChooseUs: [
      "Worldwide Supplier Network",
      "Efficient Logistics",
      "Regulatory Compliance",
      "Reliable Delivery",
    ],
  },

  {
    id: 6,
    slug: "consultancy",
    title: "Consultancy",
    shortDescription:
      "Professional consultancy services for construction, IT, interior, and international trade.",

    description:
      "We provide expert consultancy services designed to help organizations achieve operational excellence and sustainable growth. Our specialists offer strategic guidance in construction, information technology, interior planning, and import-export management.",

    image: "/consultancy.jpg",

    items: [
      "IT Consultancy",
      "Construction Consultancy",
      "Interior Design & Planning",
      "Import & Export Consultancy",
    ],

    whyChooseUs: [
      "Industry Experts",
      "Strategic Business Solutions",
      "Tailored Consultancy",
      "Reliable Project Support",
    ],
  },
  {
  id: 8,
  slug: "fashion",
  title: "Fashion",
  shortDescription:
    "Stylish, high-quality fashion products for men, women, and corporate clients.",

  description:
    "Our Fashion division offers a diverse range of premium apparel and fashion products designed for quality, comfort, and style. We provide ready-made garments, corporate uniforms, promotional apparel, and customized clothing solutions while maintaining high standards of craftsmanship and customer satisfaction.",

  image: "/fashion.jpg",

  items: [
    "Men's Fashion",
    "Women's Fashion",
    "Corporate Uniforms",
    "Custom Apparel",
    "Ready-Made Garments",
    "Fashion Accessories",
  ],

  whyChooseUs: [
    "Premium Quality Fabrics",
    "Modern & Trendy Designs",
    "Customization Available",
    "Competitive Pricing",
    "Reliable Supply & Delivery",
    "Customer-Centric Service",
  ],
},

 

  {
    id: 7,
    slug: "agro",
    title: "Agro",
    shortDescription:
      "Sustainable agro solutions supporting livestock, fisheries, and crop development.",

    description:
      "Our agro division is committed to sustainable farming and food production through livestock farming, quality seed supply, and aquaculture. We promote innovative agricultural practices that enhance productivity and long-term growth.",

    image: "/agriculture.avif",

    items: [
      "Cattle Farm",
      "Seed Supply",
      "Fish Farming",
    ],

    whyChooseUs: [
      "Sustainable Farming Practices",
      "Quality Agricultural Products",
      "Experienced Farm Management",
      "Modern Production Methods",
    ],
  },

  {
  id: 7,
  slug: "investment",
  title: "Investment",
  shortDescription:
    "Strategic investment solutions that drive business growth and long-term value creation.",

  description:
    "Our Investment division focuses on identifying, developing, and managing profitable investment opportunities across multiple industries. We support business expansion, infrastructure development, real estate, technology, agriculture, and strategic partnerships while ensuring sustainable growth, transparency, and long-term returns.",

  image: "/investment.jpg",

  items: [
    "Business Investment",
    "Project Financing",
    "Strategic Partnerships",
    "Infrastructure Investment",
    "Real Estate Investment",
    "Agricultural Investment",
    "Technology Investment",
    "Joint Venture Opportunities",
  ],

  whyChooseUs: [
    "Experienced Investment Team",
    "Sustainable Growth Strategy",
    "Transparent Business Practices",
    "Diversified Investment Portfolio",
    "Long-Term Value Creation",
    "Strong Risk Management",
  ],
},


];

export const awards = [
  {
    id: 1,
    category: 'Membership',
    title: 'Dhaka Chamber of Commerce & Industry (DCCI) Membership',
    logo: '/documents/DCCI_membership.jpg',
  },
    {
    id: 12,
    category: 'Registration',
    title: 'Certificate of Incorporation',
    logo: '/documents/certificate_of_incorporation.jpg',
  },
    {
    id: 7,
    category: 'Registration',
    title: 'Export Registration Certificate (ERC)',
    logo: '/documents/export_certificate.jpg',
  },
    {
    id: 10,
    category: 'License',
    title: 'Civil Aviation Authority of Bangladesh (CAAB) License',
    logo: '/documents/CAAB.jpg',
  },
    { 

    id: 9,
    category: 'Registration',
    title: 'Import Registration Certificate (IRC)',
    logo: '/documents/import_certicate.jpg',
  },
  {
    id: 2,
    category: 'Certification',
    title: 'Directorate General Defence Purchase (DGDP) Certificate',
    logo: '/documents/DGDP.jpg',
  },
    {
    id: 8,
    category: 'Membership',
    title: "Bangladesh Indenting Agents' Association (BIAA) Membership",
    logo: '/documents/BIAA_membership.jpg',
  },
  {
    id: 3,
    category: 'License',
    title: 'Dhaka South City Corporation Trade License',
    logo: '/documents/DSCC_trade.jpg',
  },
  {
    id: 4,
    category: 'Supplier Registration',
    title: 'Bangladesh Air Force (BAF) Supplier Registration',
    logo: '/documents/BAF_supplier.jpg',
  },
  {
    id: 5,
    category: 'Certification',
    title: 'Electrical Contractor Certificate',
    logo: '/documents/electrical_contactor_certificate.jpg',
  },
  {
    id: 6,
    category: 'Supplier Registration',
    title: 'Border Guard Bangladesh (BGB) Contractor Registration',
    logo: '/documents/BGB_conductor.jpg',
  },



 
  {
    id: 11,
    category: 'Supplier Registration',
    title: 'National Defence College (NDC) Supplier Registration',
    logo: '/documents/NDC_supplier.jpg',
  },

  {
    id: 13,
    category: 'Registration',
    title: 'Tax Registration Certificate',
    logo: '/documents/tax_registration_certificate.jpg',
  },
  {
    id: 14,
    category: 'Supplier Registration',
    title: 'CMTD Dhaka Cantonment Supplier Registration',
    logo: '/documents/CMTD Dhaka Cantonment.jpg',
  },
  {
    id: 15,
    category: 'Registration',
    title: 'Tax Identification Number (TIN) Certificate',
    logo: '/documents/TIN_Certificate.jpg',
  },
  {
    id: 16,
    category: 'Supplier Registration',
    title: 'Central Ordnance Depot (COD) Supplier Registration',
    logo: '/documents/COD_Supplier.jpg',
  },
];


export const clients = [
  // ============================
  // Military & Defense
  // ============================
  {
    id : 99, 
    logo : "/clients/ordance2.png",
    name : "Central Mechanical Transport Depot (CMTD)"
  },
  {
    id: 1,
    logo: "/clients/24engineerconstructionbrigade.png",
    name: "24 Engineer Construction Brigade",
  },
  {
    id: 2,
    logo: "/clients/bdarmy.png",
    name: "Bangladesh Army",
  },
  {
    id: 3,
    logo: "/clients/armymedicalcore.webp",
    name: "Army Medical Corps",
  },
  {
    id: 4,
    logo: "/clients/armywalfaretrust.png",
    name: "Army Welfare Trust",
  },
  {
    id: 5,
    logo: "/clients/bangladeshnavy.png",
    name: "Bangladesh Navy",
  },
  {
    id: 6,
    logo: "/clients/bdnavy.png",
    name: "Bangladesh Navy",
  },
  {
    id: 7,
    logo: "/clients/bdairforce.png",
    name: "Bangladesh Air Force",
  },
  {
    id: 8,
    logo: "/clients/baf.png",
    name: "43 SHORED- Bangladesh Air Force",
  },
  {
    id: 9,
    logo: "/clients/borderguard.png",
    name: "Border Guard Bangladesh",
  },
  {
    id: 10,
    logo: "/clients/bdbattalion.png",
    name: "Bangladesh Ansar Battalion",
  },
  {
    id: 11,
    logo: "/clients/bddscasc.png",
    name: "Defence Services Command and Staff College",
  },
  {
    id: 12,
    logo: "/clients/bdmtfl.png",
    name: "Bangladesh Machine Tools Factory Limited",
  },
  {
    id: 13,
    logo: "/clients/bdof.png",
    name: "Bangladesh Ordnance Factory",
  },
  {
    id: 14,
    logo: "/clients/banbatunmiss.png",
    name: "BAN BAT 10",
  },
  {
    id: 15,
    logo: "/clients/bncc.png",
    name: "Bangladesh National Cadet Corps",
  },
  {
    id: 16,
    logo: "/clients/cmhdhaka.png",
    name: "Combined Military Hospital Dhaka",
  },
  {
    id: 17,
    logo: "/clients/dgdp.png",
    name: "Directorate General of Defence Purchase",
  },
  {
    id: 18,
    logo: "/clients/independentinfrantrybrigades.png",
    name: "Independent Infantry Brigades",
  },
  {
    id: 19,
    logo: "/clients/mist.png",
    name: "Military Institute of Science and Technology",
  },
  {
    id: 20,
    logo: "/clients/nationaldefencecollage.png",
    name: "National Defence College",
  },
  {
    id: 21,
    logo: "/clients/pgr.png",
    name: "President Guard Regiment",
  },
  {
    id: 22,
    logo: "/clients/staoffrsmesssylhetcantoment.png",
    name: "Staff Officers' Mess, Sylhet Cantonment",
  },
  {
    id: 23,
    logo: "/clients/theeastbengalregiment.png",
    name: "The East Bengal Regiment",
  },

  // ============================
  // Universities & Educational Institutions
  // ============================
  {
    id: 24,
    logo: "/clients/BUET.png",
    name: "Bangladesh University of Engineering and Technology",
  },
  {
    id: 25,
    logo: "/clients/BUP.png",
    name: "Bangladesh University of Professionals",
  },
  {
    id: 26,
    logo: "/clients/bau2.png",
    name: "Bangladesh Agricultural University",
  },
  {
    id: 27,
    logo: "/clients/biaa.png",
    name: "Bangladesh Institute of Administration and Management",
  },
  {
    id: 28,
    logo: "/clients/biam.png",
    name: "Bangladesh Institute of Administration and Management (BIAM)",
  },
  {
    id: 29,
    logo: "/clients/cu.png",
    name: "Cumilla University",
  },
    {
    id : 99, 
    logo : "/clients/ordance2.png",
    name : "Central Ordnance Depot (COD)."
  },
  {
    id: 30,

    logo: "/clients/du.png",
    name: "University of Dhaka",
  },
  {
    id: 31,
    logo: "/clients/ju.png",
    name: "Jahangirnagar University",
  },
  {
    id: 32,
    logo: "/clients/pstu.png",
    name: "Patuakhali Science and Technology University",
  },
  {
    id: 33,
    logo: "/clients/ru.png",
    name: "University of Rajshahi",
  },
  {
    id: 34,
    logo: "/clients/ruet.png",
    name: "Rajshahi University of Engineering and Technology",
  },
    {
    id: 42,
    logo: "/clients/jolshiri.png",
    name: "Jolshiri Abashon-Bangladesh Army",
  },
  {
    id: 43,
    logo: "/clients/ovijatrik-17.png",
    name: "17 ECB Bangladesh Army",
  },
  // ============================
  // Government Organizations
  // ============================
  {
    id: 35,
    logo: "/clients/bcc.png",
    name: "Bangladesh Computer Council",
  },
  {
    id: 36,
    logo: "/clients/civilaviaton.png",
    name: "Civil Aviation Authority of Bangladesh",
  },
  {
    id: 37,
    logo: "/clients/departmentofimmigrationandpassports.jpg",
    name: "Department of Immigration and Passports",
  },
  {
    id: 38,
    logo: "/clients/ictdivision.png",
    name: "ICT Division",
  },
  {
    id: 39,
    logo: "/clients/metro.svg",
    name: "Dhaka Mass Transit Company Limited",
  },
  {
    id: 40,
    logo: "/clients/pwd.png",
    name: "Public Works Department",
  },

  // ============================
  // Private & Corporate Clients
  // ============================
  {
    id: 41,
    logo: "/clients/daraz.png",
    name: "Daraz Bangladesh",
  },


  {
    id: 44,
    logo: "/clients/RIC.png",
    name: "Research and Innovation Centre",
  },
  {
    id: 45,
    logo: "/clients/rfl.png",
    name: "RFL Group",
  },
  {
    id: 46,
    logo: "/clients/uttrabank.png",
    name: "Uttara Bank PLC",
  },
];
export interface Career {
  // Basic Information
  id: number;
  slug: string;
  title: string;
  featured: boolean;

  // Hero Image
  image: string;

  // Job Summary
  summary: {
    vacancy: number;
    salary: string;
    experience: string;
    employmentStatus: string;
    jobLevel: string;
    workplace: string;
    location: string;
    age: string;
    deadline: string;
  };

  // Application
  application: {
    applyLink: string;
    contactEmail?: string;
  };

  // Details
  jobContext: string;

  responsibilities: string[];

  educationalRequirements: string[];

  experienceRequirements: string[];

  additionalRequirements: string[];

  compensationBenefits: string[];
  officeAddress?: {
    company: string;
    address: string;
    email: string;
    phone: string;
    website: string;
  };
}
export const careerData: Career[] = [
  {
    id: 3,
    slug: "3d-architectural-visualizer",
    title: "3D Architectural Visualizer",
    featured: true,
    image: "/interiornadexterior.jpg",

    summary: {
      vacancy: 1,
      salary: "Negotiable",
      experience: "Preferred (Based on Skills)",
      employmentStatus: "Full-Time",
      jobLevel: "Mid Level",
      workplace: "Work at Office",
      location: "Mohakhali DOHS, Dhaka",
      age: "Not Specified",
      deadline: "July 25, 2026",
    },

    application: {
      applyLink: "https://forms.gle/GroZ6GZtaDqFYMxx5",
      contactEmail: "roottopltd@gmail.com",
    },

    jobContext:
      "RootTOP Ltd. is looking for a creative and detail-oriented 3D Architectural Visualizer to join our growing team. The ideal candidate will be responsible for creating high-quality 3D architectural models, photorealistic renderings, walkthrough animations, and assisting with architectural drafting and BOQ preparation. The candidate should possess a strong understanding of architectural drawings, construction materials, and visualization workflows while delivering projects with precision and within deadlines.",

    responsibilities: [
      "Create high-quality 3D architectural models and photorealistic renderings.",
      "Produce architectural walkthrough animations for residential and commercial projects.",
      "Prepare 2D architectural drawings including floor plans, elevations, sections, and detailed working drawings.",
      "Interpret architectural drawings and convert them into accurate 3D visualizations.",
      "Prepare Bill of Quantities (BOQ) and quantity estimations.",
      "Collaborate with architects, designers, and project teams to ensure project requirements are met.",
      "Revise designs and visualizations based on client feedback and project updates.",
      "Ensure timely delivery while maintaining high standards of quality and accuracy.",
      "Maintain organized project files and documentation throughout the project lifecycle.",
    ],

    educationalRequirements: [
      "Diploma or Bachelor's degree in Architecture, Civil Engineering, Interior Design, or a related field.",
      "Relevant certifications in 3D visualization software will be considered an advantage.",
    ],

    experienceRequirements: [
      "Previous experience in 3D architectural visualization is preferred.",
      "Fresh candidates with an outstanding portfolio and strong visualization skills are encouraged to apply.",
    ],

    additionalRequirements: [
      "Strong proficiency in SketchUp, Lumion, 3ds Max, V-Ray, or similar visualization software.",
      "Excellent knowledge of AutoCAD for architectural drafting.",
      "Understanding of architectural drawings, construction methods, and materials.",
      "Ability to prepare BOQ and quantity estimations.",
      "Creative mindset with strong attention to detail.",
      "Good communication and teamwork skills.",
      "Ability to manage multiple projects and meet deadlines.",
      "Self-motivated, responsible, and eager to learn new technologies.",
    ],

    compensationBenefits: [
      "Salary: Negotiable based on experience and skills.",
      "Performance-based salary review.",
      "Career growth and professional development opportunities.",
      "Paid leave and public holidays as per company policy.",
      "Professional, collaborative, and growth-oriented working environment.",
    ],

    officeAddress: {
      company: "RootTOP Ltd.",
      address:
        "House #263 (1st Floor), Road #19, Mohakhali DOHS, Dhaka Cantonment, Dhaka-1206",
      email: "roottopltd@gmail.com",
      phone: "+8801746644478",
      website: "https://www.roottopltd.com",
    },
  },
];

export const stats = [
  {
    id: 1,
    number: 150,
    suffix: "+",
    title: "Major Infrastructure",
    subtitle: "Projects Completed",
  },
  {
    id: 2,
    number: 10,
    suffix: "+",
    title: "Years of Experience",
    subtitle: "With Pride",
  },
  {
    id: 3,
    number: 7,
    suffix: "+",
    title: "Sister Concerns",
    subtitle: "Group Companies",
  },
  {
    id: 4,
    number: 150,
    suffix: "+",
    title: "Skilled Professionals",
    subtitle: "Employed",
  },
];
