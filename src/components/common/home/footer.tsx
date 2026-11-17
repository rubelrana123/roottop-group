import Link from 'next/link';
import { groupCompanies, services } from '@/lib/data';
import { siteConfig } from '@/lib/site';

// Server component: no interactivity, so no client JavaScript is shipped.
// Contact details come from siteConfig so they match the schema and contact page.

type FooterLink = { name: string; href: string; external?: boolean };

const footerData: { title: string; links: FooterLink[] }[] = [
  {
    title: 'About',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Mission, Vision & Values', href: '/about-us#mission-vision-values' },
      { name: 'Certification & Membership', href: '/about-us#awards-achievements' },
      { name: 'Our Clients', href: '/about-us#ourclients' },
    ],
  },
  {
    title: 'Businesses',
    links: [
      { name: 'All Business Areas', href: '/services' },
      ...services.slice(0, 5).map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      })),
    ],
  },
  {
    title: 'Sister Concerns',
    links: groupCompanies.map((company) => ({
      name: company.name,
      href: company.website,
      external: true,
    })),
  },
  {
    title: 'Company',
    links: [
      { name: 'Career', href: '/career' },
      { name: 'Sister Concerns', href: '/sister-concerns' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

const linkClass =
  'text-[15px] text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-[#69BE28]';

export default function Footer() {
  return (
    <footer className="bg-[#1E2340] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-0">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          {/* Contact */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide md:text-3xl">
              Contact Us
            </h2>

            <address className="space-y-5 text-base not-italic leading-8 text-gray-300">
              <p>
                {siteConfig.address.streetAddress},
                <br />
                {siteConfig.address.addressLocality}, Dhaka-{siteConfig.address.postalCode},
                <br />
                Bangladesh
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-primary">
                  {siteConfig.email}
                </a>
              </p>

              <p className="flex items-start gap-2">
                <span className="shrink-0 font-semibold text-white">Phone:</span>

                <span className="flex flex-col">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="transition hover:text-primary"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
              </p>
            </address>
          </div>

          {/* Menu Columns */}
          <nav className="col-span-12 lg:col-span-8" aria-label="Footer navigation">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:gap-12">
              {footerData.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-6 text-lg font-semibold uppercase tracking-wide text-white">
                    {section.title}
                  </h3>

                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link href={link.href} className={linkClass}>
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10 md:my-6" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} All Rights Reserved by{' '}
            <span className="font-medium text-white">{siteConfig.name}</span>
          </p>

          <p>
            Crafted with <span className="mx-1 text-red-500">❤</span>
            by {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
