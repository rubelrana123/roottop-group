export type NavItem = {
  name: string;
  href: string;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
};

export const navItems: NavItem[] = [
  { name: 'HOME', href: '/' },
  {
    name: 'ABOUT US',
    href: '/about-us',
    dropdown: [
      { name: 'About Us', href: '/about-us' },
      {
        name: 'Mission, Vision & Values',
        href: '/about-us#mission-vision-values',
      },
      {
        name: 'Certification & Membership',
        href: '/about-us#awards-achievements',
      },
      { name: 'Our Clients', href: '/about-us#ourclients' },
    ],
  },
  { name: 'Business', href: '/business' },
  { name: 'SISTERS CONCERN', href: '/sister-concerns' },
  { name: 'Career', href: '/career' },
  { name: 'CONTACT', href: '/contact' },
];
