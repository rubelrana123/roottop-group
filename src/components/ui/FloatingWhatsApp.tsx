"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircleMore, X } from "lucide-react";

interface FloatingWhatsAppProps {
  phone?: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phone = "8801712345678",
  message = "Hello! I would like to know more about your services.",
}: FloatingWhatsAppProps) {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem("whatsapp-help-hidden");

    if (!hidden) {
      const timer = setTimeout(() => {
        setShowHelp(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeHelp = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    localStorage.setItem("whatsapp-help-hidden", "true");
    setShowHelp(false);
  };

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
        className="pointer-events-auto group flex items-center gap-3"
      >
        {/* Help Bubble */}
{showHelp && (
  <div className="relative hidden sm:block">
    {/* Close Button */}
    <button
      type="button"
      onClick={closeHelp}
      aria-label="Close help message"
      className="
        absolute
        -right-2
        -top-2
        z-10
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-white
        text-zinc-600
        shadow-lg
        transition-all
        duration-200
        hover:scale-110
        hover:bg-red-500
        hover:text-white
        dark:border-zinc-700
        dark:bg-zinc-900
        dark:text-zinc-300
        dark:hover:bg-red-500
      "
    >
      <X size={14} />
    </button>

    {/* Bubble */}
    <div
      className="
        flex
        items-center
        rounded-full
        border
        border-white/30
        bg-white/80
        dark:bg-zinc-900/80
        backdrop-blur-xl
        px-5
        py-2.5
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
  </div>
)}
        {/* WhatsApp Button */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-2xl" />

          {/* Pulse */}
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