"use client";

import Link from "next/link";

const footerData = [
  {
    title: "ABOUT",
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
        name: 'Awards & Achievements',
        href: '/about-us#awards-achievements',
      },
      {
        name: 'Our Clients',
        href: '/about-us#ourclients',
      }
    ],
  },
  {
    title: "BUSINESSES",
    links: [{ name: "Businesses", href: "/services" }],
  },
  {
    title: "SISTERS",
    links: [
      { name: "RootTOP Limited", href: "/" },
      { name: "AR International", href: "/" },
      {name : "Orisyn Limited" ,href:"/"},
      {
        name : "Khamarbari" , href : "/",

        
      },
      {
        name : "Cross Border Trading", href : "/"
      }
    ],
  },
  {
    title: "CAREER",
    links: [
      { name: "Career", href: "/" },
      { name: "FAQ", href: "/" },
    ],
  },
];

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

            <div className="space-y-5 text-base leading-8 text-gray-300">
              <p>
                House #263(1th Floor), Road #19,
                <br />
                Mohakhali DOHS,
                <br />
                Dhaka-1206, Bangladesh
              </p>

              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                +8801746-644475
              </p>

              {/* <p>
                <span className="font-semibold text-white">Fax:</span>{" "}
                +88-02-58817737
              </p> */}

              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                roottopltd@gmail.com
              </p>
            </div>
          </div>

          {/* Menu Columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:gap-12">
              {footerData.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-6 text-lg font-semibold uppercase tracking-wide text-white">
                    {section.title}
                  </h3>

                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[15px] text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-[#69BE28]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10 md:my-6" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>
            © 2026 All Rights Reserved by{" "}
            <span className="font-medium text-white">RootTOP Group</span>
          </p>

          <p>
            Crafted with{" "}
            <span className="mx-1 text-red-500">❤</span>
            by RootTOP Group
          </p>
        </div>
      </div>
    </footer>
  );
}