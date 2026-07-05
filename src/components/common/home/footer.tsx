import Link from 'next/link';

const footerLinks = [
  {
    title: 'ABOUT',
    links: [
      {
        name: 'About Us',
        href: '/about-us',
      },
      {
        name: 'Mission, Vision & Values',
        href: '/about-us#mission-vision-values',
      },
      {
        name: 'Board of Directors',
        href: '/about-us',
      },
      {
        name: 'Awards & Achievements',
        href: '/about-us',
      },
    ],
  },
  {
    title: 'BUSINESSES',
    links: [
      {
        name: 'Sisters Concern',
        href: '/sister-concerns',
      },
    ],
  },
  {
    title: 'CAREER',
    links: [
      {
        name: 'Career',
        href: '/',
      },
      {
        name: 'Contact',
        href: '/',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2340] text-white">
      <div className="container mx-auto px-6 py-16 lg:px-8">

        {/* Top */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Contact Us
            </h3>

            <address className="mt-8 not-italic space-y-6 text-sm leading-7 text-gray-300">
              <p>
                House #263 (2nd Floor)
                <br />
                Road #19
                <br />
                Mohakhali DOHS
                <br />
                Dhaka Cantonment
                <br />
                Dhaka 1206
                <br />
                Bangladesh
              </p>

              <div className="space-y-3">
                <p>
                  <span className="font-semibold text-white">
                    Contact:
                  </span>{' '}
                  <a
                    href="tel:+8801746644478"
                    className="transition-colors duration-200 hover:text-green-400"
                  >
                    +88 01746-644478
                  </a>
                </p>

                <div>
                  <p className="font-semibold text-white">
                    Email:
                  </p>

                  <a
                    href="mailto:roottoplimited@gmail.com"
                    className="block transition-colors duration-200 hover:text-green-400"
                  >
                    roottoplimited@gmail.com
                  </a>

                  <a
                    href="mailto:info@roottopltd.com"
                    className="block transition-colors duration-200 hover:text-green-400"
                  >
                    info@roottopltd.com
                  </a>
                </div>

                <p>
                  <span className="font-semibold text-white">
                    Website:
                  </span>{' '}
                  <a
                    href="https://www.roottopltd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-green-400"
                  >
                    www.roottopltd.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold uppercase tracking-wide">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li
                    key={`${section.title}-${link.name}-${link.href}`}
                  >
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-gray-300 transition-colors duration-200 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rooftop Group. All Rights Reserved.
          </p>

          <p>Built by Rooftop Group</p>
        </div>
      </div>
    </footer>
  );
}