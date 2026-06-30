'use client';

import Link from 'next/link';
import { Menu, X} from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
 
import { CiYoutube } from "react-icons/ci";
import Image from 'next/image';
 
const navItems = [
  { name: 'ABOUT', href: '/about' },
  { name: 'BUSINESSES', href: '/businesses' },
  { name: 'SUSTAINABILITY', href: '/sustainability' },
  { name: 'LEED', href: '/leed' },
  { name: 'MEDIA', href: '/media' },
  { name: 'CAREER', href: '/career' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#f3f3f3] border-b">
        <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

<Link href="/">
  <Image
    src="/logo.png"
    alt="RootTOP Group"
    width={140}
    height={64}
    className="object-contain"
    priority
  />
</Link>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  font-semibold
                  tracking-wide
                  text-black
                  hover:text-primary
                  transition
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-5">
                        <Link
              href="#"
              className="border p-2 rounded-sm hover:bg-white"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="border p-2 rounded-sm hover:bg-white"
            >
              <CiYoutube size={18} />
            </Link>
                        <Link
              href="#"
              className="border p-2 rounded-sm hover:bg-white"
            >
              <X size={18} />
            </Link>

            <Link
              href="#"
              className="border p-2 rounded-sm hover:bg-white"
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
              className="
                fixed
                right-0
                top-0
                h-full
                w-[280px]
                bg-white
                z-50
                p-6
              "
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}