import ContactSection from './ContactSection';
import OfficeLocation from './OfficeLocation';
import PageHero from '../PageHero';

// Server component. The layout already renders <main>, so this is a plain div
// (a nested <main> is invalid), and it no longer starts at opacity 0.
export default function ContactPageContent() {
  return (
    <div className="bg-background">
      <PageHero
        title="Contact Us"
        subtitle="Let's Connect"
        description="Whether you have a business inquiry, project opportunity, or partnership proposal, our team is ready to assist you with professional support."
        image="/contact.jpg"
        imageAlt="Contact RootTOP Group"
      />

      <ContactSection />

      <OfficeLocation />
    </div>
  );
}
