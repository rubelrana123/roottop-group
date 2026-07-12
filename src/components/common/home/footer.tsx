"use client";

import Image from "next/image";
import Link from "next/link";

const footerData = [
  {
    title: "EXPLORE",
    links: [
      { name: "About Us", href: "/" },
      { name: "Services", href: "/" },
      { name: "Contact Us", href: "/contact" },
      { name: "Our Clients", href: "/" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { name: "RootTOP Limited", href: "/" },
      { name: "Satelite Enterprises", href: "/" },
      { name: "Orisin Limited", href: "/" },
      { name: "AR International", href: "/" },
      { name: "Khamarbari Corporation", href: "/" },
      
      { name: "Crossborder Trading", href: "/" },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { name: "LinkedIn", href: "/" },
      { name: "Instagram", href: "/" },
      { name: "TikTok", href: "/" },
      { name: "Youtube", href: "/" },
    ],
  },
];

export default function ModernFooter() {
  return (
    <footer className="bg-[#1E2340] text-white">
      <div className="    ">

        <div className="rounded-3xl bg-[#1E2340] p-8 md:p-10">
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Left Side */}
            <div className="lg:col-span-1">

              {/* Logo */}
              <div className="inline-block  px-4 py-2 text-lg font-bold tracking-wide">
                
                <Image
                  src="/logo.png"
                  alt="RootTOP Group Logo"
                  width={100}
                  height={50}
                />
              </div>

              {/* Description */}
              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-300">
                RootTOP Group helps businesses build modern
                solutions and innovative digital experiences
                with quality, reliability, and growth.
              </p>

              {/* Copyright */}
              <p className="mt-8 text-sm text-gray-400">
                © {new Date().getFullYear()} All Rights Reserved
                to RootTOP Group.
              </p>

              {/* Credit */}
              <div className="mt-5 inline-flex rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-400">
                Website crafted with ❤ by RootTOP Group
              </div>
            </div>

            {/* Navigation */}
            {footerData.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-sm font-bold tracking-widest text-gray-400">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-green-400"
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
    </footer>
  );
}