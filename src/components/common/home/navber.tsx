"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
        href: "/about-us#mission-vision-values",
      },
 
      {
        name: "Awards & Achievements",
        href: "/about-us",
      },
    ],
  },
  {
    name: "SISTERS CONCERN",
    href: "/sister-concerns",
  },
  {
  
    name: "SERVICES",
    href: "/services",
 
  },
 
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="w-full bg-[#f3f3f3] border-b">
        <div className="max-w-7xl mx-auto h-20  px-6 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            aria-label="RootTOP Group home"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src="/logo.png"
              alt="RootTOP Group"
              width={140}
              height={70}
              priority
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10 h-full" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div
                key={item?.name}
                className="relative h-full flex items-center"
                onMouseEnter={() =>
                  item?.dropdown && setActiveDropdown(item?.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
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
                    hover:text-primary
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-primary
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
                      bg-primary
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

                      <div className="h-[3px] bg-primary" />

                      {item.dropdown.map((subItem) => (
                        <Link
                      key={subItem.name}
                          href={subItem.href}
                          aria-current={isActive(subItem.href) ? "page" : undefined}
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
                            hover:text-primary
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-primary
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
              aria-label="RootTOP Group X profile placeholder"
              className="border p-2 rounded hover:bg-white transition"
            >
              <X size={18} aria-hidden="true" />
            </Link>

            <Link
              href="#"
              aria-label="RootTOP Group YouTube channel placeholder"
              className="border p-2 rounded hover:bg-white transition"
            >
              <CiYoutube size={18} aria-hidden="true" />
            </Link>

            <Link
              href="#"
              aria-label="RootTOP Group secondary X profile placeholder"
              className="border p-2 rounded hover:bg-white transition"
            >
              <X size={18} aria-hidden="true" />
            </Link>

            <Link
              href="#"
              aria-label="RootTOP Group secondary YouTube channel placeholder"
              className="border p-2 rounded hover:bg-white transition"
            >
              <CiYoutube size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu aria-hidden="true" />
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
              aria-hidden="true"
            />

            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed right-0 top-0 h-full w-[280px] bg-white z-50 p-6"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end mb-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close navigation menu"
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col gap-5" aria-label="Mobile primary navigation">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
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
                            aria-current={isActive(sub.href) ? "page" : undefined}
                            className="block text-sm text-gray-600 hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
