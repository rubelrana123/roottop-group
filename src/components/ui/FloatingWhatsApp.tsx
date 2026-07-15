"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

interface FloatingWhatsAppProps {
  phone?: string;
  message?: string;
}

export default function FloatingWhatsApp({
  
  phone = "8801712345678", // Replace with your WhatsApp number
  message = "Hello! I would like to know more about your services.",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-3"
      >
        {/* Need Help Bubble */}
        <div
          className="
            hidden sm:flex
            items-center
            rounded-full
            border
            border-white/30
            bg-white/70
            dark:bg-zinc-900/70
            backdrop-blur-xl
            px-4
            py-2
            text-sm
            font-medium
            text-zinc-700
            dark:text-zinc-100
            shadow-lg
            transition-all
            duration-300
            group-hover:-translate-x-1
            group-hover:shadow-xl
          "
        >
          Need Help?
        </div>

        {/* Button */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-2xl" />

          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/40 animate-whatsapp-pulse" />

          {/* Main Button */}
          <div
            className="
              relative
              flex
              h-16
              w-16
              animate-floating
              items-center
              justify-center
              rounded-full
              bg-[#25D366]
              text-white
              shadow-2xl
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:scale-110
              group-hover:rotate-6
              active:scale-95
            "
          >
            <MessageCircleMore
              size={30}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}