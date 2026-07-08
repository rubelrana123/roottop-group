"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  ariaLabel?: string;
}

export default function PrimaryButton({
  href,
  children,
  className,
  showArrow = false,
  ariaLabel,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        `
        group
        inline-flex
        items-center
        gap-3

        rounded-lg

        bg-primary
        hover:bg-primary/90

        px-6
        py-3

        md:px-8
        md:py-4

        text-sm
        md:text-base

        font-bold
        uppercase
        tracking-[2px]

        text-white

        shadow-lg
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl
        `,
        className
      )}
    >
      <span>{children}</span>

      {showArrow && (
        <motion.span
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={18} />
        </motion.span>
      )}
    </Link>
  );
}