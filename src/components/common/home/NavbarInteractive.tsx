'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { navItems } from './navbar-data';

export default function NavbarInteractive({
  logo,
  socialLinks,
}: {
  logo: ReactNode;
  socialLinks: ReactNode;
}) {
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
      <header className="relative z-50">
        <div className="container mx-auto flex h-20 items-center justify-between px-5 sm:px-6 lg:h-24 lg:px-8">
          {logo}

          <nav
            className="hidden h-full items-center gap-7 lg:flex xl:gap-10"
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
                  className="group relative flex h-full items-center whitespace-nowrap text-sm font-medium uppercase tracking-[0.08em] text-slate-800 transition-colors hover:text-primary md:text-[15px]"
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.75 bg-primary transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-full z-50 mt-[1px] w-[320px] overflow-hidden rounded-sm border border-gray-100 bg-white shadow-2xl"
                    >
                      <div className="h-[3px] bg-primary" />
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={`${item.name}-${subItem.name}`}
                          href={subItem.href}
                          className="flex items-center border-b border-gray-100 px-6 py-4 text-sm font-medium text-slate-700 transition-all hover:bg-gray-50 hover:text-primary last:border-b-0 md:py-5 md:text-base"
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

          {socialLinks}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md p-2 text-slate-800 transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[280px] max-w-[85vw] overflow-y-auto bg-white p-6 shadow-2xl sm:w-[320px]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 text-slate-700 transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav
                className="flex flex-col gap-5"
                aria-label="Mobile primary navigation"
              >
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={`block py-2 text-base font-semibold tracking-tight transition-colors ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-slate-800 hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>

                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={`${item.name}-${sub.name}`}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm font-medium leading-6 text-slate-600 transition-colors hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
