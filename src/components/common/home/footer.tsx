'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'ABOUT',
    links: [
      { name: 'About Us', href: '/about-us' },
      {
        name: 'Mission, Vision & Values',
        href: '/mission-vision-values',
      },
      {
        name: 'Board of Directors',
        href: '/board-of-directors',
      },
      {
        name: 'Awards & Achievements',
        href: '/awards-achievements',
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
    title: 'MEDIA',
    links: [
      {
        name: 'Newsroom',
        href: '/media/newsroom',
      },
      {
        name: 'Gallery',
        href: '/media/gallery',
      },
      {
        name: 'Media Stellar',
        href: '/media/media-stellar',
      },
    ],
  },
  {
    title: 'CAREER',
    links: [
      {
        name: 'Career',
        href: '/career',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2340] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Contact Us
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-gray-300">
              <p>
                South Avenue Tower
                <br />
                House # 50 (6th Floor)
                <br />
                Road # 03, Gulshan Avenue
                <br />
                Dhaka-1212, Bangladesh
              </p>

              <p>
                <span className="font-semibold text-white">Telephone:</span>
                <br />
                +88-02-58817735-6
              </p>

              <p>
                <span className="font-semibold text-white">Fax:</span>
                <br />
                +88-02-58817737
              </p>

              <p className="break-all">
                <span className="font-semibold text-white">Email:</span>
                <br />
                info@yourcompany.com
              </p>
            </div>
          </div>

          {/* Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold uppercase tracking-wide">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-gray-300 transition-colors duration-200 hover:text-green-400"
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

        {/* member ship logo Logos */}
        {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Image
            src="/logos/logo.png"
            alt="Company Logo"
            width={170}
            height={55}
            className="object-contain"
          />

          <Image
            src="/logos/sdg.png"
            alt="SDG"
            width={70}
            height={70}
            className="object-contain"
          />

          <Image
            src="/logos/certificate.png"
            alt="Certificate"
            width={65}
            height={65}
            className="object-contain"
          />
        </div> */}

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rooftop Group. All Rights Reserved.
          </p>

          <p>
            Made with <span className="text-red-500">❤</span> by Rooftop Group
          </p>
        </div>
      </div>
    </footer>
  );
}
