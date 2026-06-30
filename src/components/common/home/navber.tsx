"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CiYoutube } from "react-icons/ci";

const navItems = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT US",
    href: "/about-us",
    dropdown: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Mission, Vision & Values",
        href: "/mission-vision-values",
      },
      {
        name: "Board of Directors",
        href: "/board-of-directors",
      },
      {
        name: "Awards & Achievements",
        href: "/awards-achievements",
      },
    ],
  },
  {
    name: "SISTERS CONCERN",
    href: "/sister-concerns",
  },
  {
    name: "MEDIA",
    href: "/media",
    dropdown: [
      {
        name: "Newsroom",
        href: "/media/newsroom",
      },
      {
        name: "Gallery",
        href: "/media/gallery",
      },
      {
        name: "Media Stellar",
        href: "/media/media-stellar",
      },
    ],
  },
  {
    name: "CAREER",
    href: "/career",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <header className="w-full bg-[#f3f3f3] border-b">
        <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

          {/* Logo */}

          <Link href="/">
            <Image
              src="/logo.png"
              alt="RootTOP Group"
              width={140}
              height={70}
              priority
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="
                    relative
                    h-full
                    flex
                    items-center
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-wide
                    transition-colors
                    hover:text-[#4FA73F]
                    group
                  "
                >
                  {item.name}

                  {/* Animated Bottom Border */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#4FA73F]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>

                {/* Dropdown */}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        left-0
                        top-full
                        mt-[1px]
                        w-[320px]
                        bg-white
                        rounded-sm
                        shadow-2xl
                        overflow-hidden
                        z-50
                        border
                      "
                    >
                      {/* Top Green Line */}

                      <div className="h-[3px] bg-[#4FA73F]" />

                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="
                            flex
                            items-center
                            px-6
                            py-5
                            font-semibold
                            text-gray-800
                            border-b
                            last:border-b-0
                            hover:bg-gray-50
                            hover:text-[#4FA73F]
                            transition-all
                          "
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Social Icons */}

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className="border p-2 rounded hover:bg-white transition"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="border p-2 rounded hover:bg-white transition"
            >
              <CiYoutube size={18} />
            </Link>

            <Link
              href="#"
              className="border p-2 rounded hover:bg-white transition"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="border p-2 rounded hover:bg-white transition"
            >
              <CiYoutube size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-[280px] bg-white z-50 p-6"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-semibold block py-2"
                    >
                      {item.name}
                    </Link>

                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-gray-600 hover:text-[#4FA73F]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}