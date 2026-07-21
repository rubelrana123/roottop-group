"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        w-full
        rounded-xl
        bg-[#17301F]
        p-5
        text-white
        sm:p-6
        lg:p-7
      "
    >
      {/* Header */}
      <div>
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-primary">
          RootTOP Group
        </span>

        <h2 className="mt-2 text-xl font-semibold lg:text-2xl">
          {heading}
        </h2>

        <p className="mt-2 text-xs leading-5 text-white/60">
          We&apos;d love to hear about your next project. Contact us through
          any of the channels below.
        </p>
      </div>

      {/* Address */}
      <div className="mt-5">
        <ContactItem icon={MapPin} title="Office Address">
          {contactInfo.address}
        </ContactItem>
      </div>

      {/* Contact Information */}
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {/* Phone */}
        <ContactItem icon={Phone} title="Call Us">
          <div className="space-y-1">
            {contactInfo.phones.map((phone) => (
              <a
                key={phone.number}
                href={phone.href}
                className="block transition-colors hover:text-primary"
              >
                {phone.number}
              </a>
            ))}
          </div>
        </ContactItem>

        {/* Email */}
        <ContactItem icon={Mail} title="Email">
          <div className="space-y-1">
            {contactInfo.emails.map((email) => (
              <a
                key={email.address}
                href={email.href}
                className="block break-all transition-colors hover:text-primary"
              >
                {email.address}
              </a>
            ))}
          </div>
        </ContactItem>

        {/* Working Hours */}
        <ContactItem icon={Clock} title="Working Hours">
          <>
            {contactInfo.workingHours.days}
            <br />
            {contactInfo.workingHours.time}
          </>
        </ContactItem>

        {/* Website */}
        <ContactItem
          icon={Globe}
          title="Website"
          href={contactInfo.website.href}
        >
          {contactInfo.website.label}
        </ContactItem>
      </div>
    </motion.aside>
  );
}