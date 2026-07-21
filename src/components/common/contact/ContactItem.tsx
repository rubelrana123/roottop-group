"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  href?: string;
}

export default function ContactItem({
  icon: Icon,
  title,
  children,
  href,
}: ContactItemProps) {
  const content = (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/15"
    >
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110  not-[]:">
        <Icon
          size={22}
          className="text-white group-hover:text-secondary transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {title}
        </p>

        <div className="text-[15px] leading-7 text-white">{children}</div>
      </div>
    </motion.div>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </Link>
  );
}