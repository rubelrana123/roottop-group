'use client';

import { motion } from 'framer-motion';

import ContactSection from './ContactSection';
import OfficeLocation from './OfficeLocation';
import PageHero from '../PageHero';

export default function ContactPageContent() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-background"
    >
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Let's Connect"
        description="Whether you have a business inquiry, project opportunity, or partnership proposal, our team is ready to assist you with professional support."
        image="/contact.jpg"
        imageAlt="Contact RootTOP Group"
      />

      {/* Contact Form */}
      <ContactSection />

      {/* Office Location */}
      <OfficeLocation />
    </motion.main>
  );
}
