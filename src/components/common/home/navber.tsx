'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CiYoutube } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

const navItems = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'ABOUT US',
    href: '/about-us',
    dropdown: [
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
        href: '/about-us',
      },
    ],
  },
  {
    name: 'SISTERS CONCERN',
    href: '/sister-concerns',
  },
  {
    name: 'SERVICES',
    href: '/services',
  },
  {
    name: 'CONTACT',
    href: '/contact',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    const cleanHref = href.split('#')[0];

    return cleanHref === '/'
      ? pathname === '/'
      : pathname.startsWith(cleanHref);
  };

  return (
    <>
      <header className="w-full border-b bg-[#f3f3f3]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

          <nav
            className="hidden h-full items-center gap-10 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex h-full items-center"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="
                  group
                  relative
                  flex
                  h-full
                  items-center
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-wide
                  transition-colors
                  hover:text-primary
                "
                >
                  {item.name}

                  <span
                    className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    bg-primary
                    transition-all
                    duration-300
                    ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
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
                        z-50
                        mt-[1px]
                        w-[320px]
                        overflow-hidden
                        rounded-sm
                        border
                        bg-white
                        shadow-2xl
                      "
                    >
                      <div className="h-[3px] bg-primary" />

                      {item.dropdown.map((subItem) => (
                        <Link
                          key={`${item.name}-${subItem.name}`}
                          href={subItem.href}
                          className="
                              flex
                              items-center
                              border-b
                              px-6
                              py-5
                              font-semibold
                              text-gray-800
                              transition-all
                              hover:bg-gray-50
                              hover:text-primary
                              last:border-b-0
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

          {/* Social */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our X (Twitter) page"
              title="X (Twitter)"
              className="rounded border p-2 transition hover:bg-white"
            >
              <FaXTwitter size={18} aria-hidden="true" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              title="YouTube"
              className="rounded border p-2 transition hover:bg-white"
            >
              <CiYoutube size={18} aria-hidden="true" />
            </a>
                        <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our X (Twitter) page"
              title="X (Twitter)"
              className="rounded border p-2 transition hover:bg-white"
            >
              <FaXTwitter size={18} aria-hidden="true" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              title="YouTube"
              className="rounded border p-2 transition hover:bg-white"
            >
              <CiYoutube size={18} aria-hidden="true" />
            </a>
          </div>
          {/* Mobile Button */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
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
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="
              fixed
              right-0
              top-0
              z-50
              h-full
              w-[280px]
              bg-white
              p-6
            "
              initial={{
                x: 300,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: 300,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="mb-8 flex justify-end">
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-semibold"
                    >
                      {item.name}
                    </Link>

                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={`${item.name}-${sub.name}`}
                            href={sub.href}
                            onClick={() => setOpen(false)}
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
