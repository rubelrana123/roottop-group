"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/common/ContactForm";
import { MessageCircleMore } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-form-heading"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-primary">
        
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Contact Form
            </span>
          </div>

          <h2
            id="contact-form-heading"
            className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl"
          >
            Send Us a Message
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have a question, project inquiry, or partnership proposal?
            Complete the form below and our team will get back to you as
            soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border-none
             
               
          "
        >
  
          <div className="relative z-10 ">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}