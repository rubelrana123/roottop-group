"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
} from "lucide-react";

import ContactItem from "./ContactItem";
import { contactInfo } from "@/lib/data";

interface ContactInfoCardProps {
  heading?: string;
}

export default function ContactInfoCard({
  heading = contactInfo.company,
}: ContactInfoCardProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        relative
        w-full
        overflow-hidden
        rounded-[24px]
        bg-gradient-to-br
        from-secondary
        via-secondary
        to-primary
        p-5
        text-white
        shadow-[0_25px_60px_rgba(0,0,0,.18)]
        sm:p-6
        lg:p-7
      "
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
          RootTOP Group
        </span>

        <h2 className="mt-2 text-2xl font-bold leading-tight lg:text-3xl">
          {heading}
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/80">
          We&apos;d love to hear about your next project. Contact us through any of
          the channels below.
        </p>

        {/* Address */}
        <div className="mt-5">
          <ContactItem icon={MapPin} title="Office Address">
          {contactInfo?.address }
          </ContactItem>
        </div>

        {/* Information Grid */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <ContactItem icon={Phone} title="Call Us">
            <div className="space-y-1">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone.number}
                  href={phone.href}
                  className="block hover:text-white/80"
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </ContactItem>

          <ContactItem icon={Mail} title="Email">
            <div className="space-y-1">
              {contactInfo.emails.map((email) => (
                <a
                  key={email.address}
                  href={email.href}
                  className="block break-all hover:text-white/80"
                >
                  {email.address}
                </a>
              ))}
            </div>
          </ContactItem>

          <ContactItem icon={Clock} title="Working Hours">
            <>
              {contactInfo.workingHours.days}
              <br />
              {contactInfo.workingHours.time}
            </>
          </ContactItem>

          <ContactItem
            icon={Globe}
            title="Website"
            href={contactInfo.website.href}
          >
            {contactInfo.website.label}
          </ContactItem>
        </div>
      </div>
    </motion.aside>
  );
}