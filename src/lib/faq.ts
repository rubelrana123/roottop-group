import { awards, clients, groupCompanies, services } from '@/lib/data';
import { siteConfig } from '@/lib/site';

export type Faq = { question: string; answer: string };

const list = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items.at(-1)}` : items.join('');

const clientNames = [...new Set(clients.map((client) => client.name))];

/** Pick the named items that exist in the data, in this order. */
const pick = (names: string[], keywords: string[]) =>
  keywords.flatMap((keyword) => names.find((name) => name.includes(keyword)) ?? []);

const featuredClients = pick(clientNames, [
  'Bangladesh Army',
  'Bangladesh Navy',
  'Bangladesh Air Force',
  'Border Guard Bangladesh',
  'Bangladesh University of Engineering',
  'University of Dhaka',
  'Civil Aviation Authority',
  'RFL Group',
  'Uttara Bank',
]);

const featuredRegistrations = pick(
  awards.map((award) => award.title),
  ['(DGDP)', '(BAF)', '(BGB)', '(NDC)', '(CAAB)', 'Electrical Contractor', '(DCCI)', '(BIAA)'],
);

/**
 * Homepage FAQ. Every answer is built from the site's own data, so it stays in
 * sync with the services, sister concerns and contact details shown elsewhere.
 * Shown on the page AND emitted as FAQPage JSON-LD (the two must match).
 */
export const homeFaqs: Faq[] = [
  {
    question: 'What is RootTOP Group?',
    answer: `${siteConfig.name} is a diversified business conglomerate headquartered in Dhaka, Bangladesh. Through ${groupCompanies.length} sister concerns it works in civil engineering, electrical and mechanical engineering, information technology, import and export, agriculture, consultancy, fashion and investment.`,
  },
  {
    question: 'What services does RootTOP Group provide?',
    answer: `${siteConfig.name} provides ${list(services.map((service) => service.title))} services for government, defence and private-sector clients across Bangladesh.`,
  },
  {
    question: 'What are the sister concerns of RootTOP Group?',
    answer: `The ${siteConfig.name} family includes ${list(groupCompanies.map((company) => company.name))}.`,
  },
  {
    question: 'Is RootTOP Group a registered government and defence supplier?',
    answer: `Yes. ${siteConfig.name} holds ${awards.length} registrations, licences and memberships, including ${list(featuredRegistrations)}.`,
  },
  {
    question: 'Who are RootTOP Group’s clients?',
    answer: `Clients include ${list(featuredClients)}, along with ${Math.max(
      clientNames.length - featuredClients.length,
      0,
    )} other government bodies, universities and companies.`,
  },
  {
    question: 'Where is RootTOP Group located?',
    answer: `${siteConfig.name}’s head office is at ${siteConfig.addressText}.`,
  },
  {
    question: 'How can I contact RootTOP Group?',
    answer: `Call ${siteConfig.phones.map((phone) => `${phone.display} (${phone.label})`).join(' or ')}, email ${siteConfig.email}, or use the contact form at ${siteConfig.url}/contact.`,
  },
];
