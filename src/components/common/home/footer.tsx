'use client';
 
import { motion } from 'framer-motion';
import FavIcon from '@/icon/favIcon';
 
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Contact */}
        <div className="space-y-8">
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
          <ul className="*:text-fig-gray space-y-3">
            <li className="flex space-x-2 items-center">
              <span>
                <FavIcon name="email" />
              </span>
              <span>malike25@gmail.com</span>
            </li>
            <li className="flex space-x-2 items-center">
              <span>
                <FavIcon name="phone2" />
              </span>
              <span>+880 1548 658987</span>
            </li>
            <li className="flex space-x-2 items-center">
              <span>
                <FavIcon name="location2" />
              </span>
              <span>Gulshan, Dhaka 1212, BD</span>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold tracking-tight">Programs</h3>
          <ul className="space-y-3 *:text-fig-gray">
            <li>Home</li>
            <li>Services</li>
            <li>How it works</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold tracking-tight">Help & Support</h3>
          <ul className="space-y-3 *:text-fig-gray">
            <li>Contact us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold tracking-tight">Social Media</h3>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <FavIcon className="size-8" name="facebook" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <FavIcon className="size-8" name="google" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
