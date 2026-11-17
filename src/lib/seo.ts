import type { Metadata } from 'next';
import { careerData, groupCompanies, services, type Career } from '@/lib/data';
import { siteConfig, socialLinks } from '@/lib/site';

export { siteConfig };

const defaultKeywords = [
  'RootTOP Group',
  'roottop group',
  'Roottop Group Bangladesh',
  'Root Top Group',
  'Bangladesh corporate group',
  'construction company Bangladesh',
  'engineering services Bangladesh',
  'IT solutions Bangladesh',
  'agriculture business Bangladesh',
  'import export Bangladesh',
  'logistics consultancy Bangladesh',
];

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

const DEFAULT_TITLE = 'RootTOP Group | Diversified Conglomerate in Bangladesh';

/**
 * Site-wide defaults, used by the root layout. Deliberately has NO canonical:
 * every page sets its own via `createMetadata`, so a page that forgets to
 * can never claim to be the homepage.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Corporate Business',
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: siteConfig.googleVerification,
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.defaultOgImage],
  },
};

type PageMetadataInput = {
  /** Page title without the brand; the root template appends " | RootTOP Group". */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** 1200x630 share image, ideally from /public/og. */
  image?: string;
  type?: 'website' | 'article';
  /** Use the title as-is, without the brand template (homepage). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.defaultOgImage,
  type = 'website',
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const pageMetadata = {
  home: createMetadata({
    title: DEFAULT_TITLE,
    absoluteTitle: true,
    description:
      'RootTOP Group delivers civil engineering, electrical & mechanical, IT, agriculture, consultancy, logistics, and import-export solutions for government, corporate, and private clients in Bangladesh.',
    path: '/',
    keywords: ['roottop group bangladesh', 'roottop group dhaka', 'diversified conglomerate', 'RootTOP Limited', 'business group Dhaka'],
  }),
  about: createMetadata({
    title: 'About Us – Corporate Profile & Values',
    description:
      'Learn about RootTOP Group, a Bangladesh-based corporate group established in 2015, focused on quality construction, engineering, IT, agriculture, consultancy, and international trade.',
    path: '/about-us',
    keywords: ['about RootTOP Group', 'corporate profile', 'mission vision values'],
    image: '/og/about.jpg',
  }),
  services: createMetadata({
    title: 'Business Areas: Engineering, IT & Trade',
    description:
      'Explore RootTOP Group business areas: civil engineering, electrical & mechanical engineering, interior design, IT, consultancy, agro, fashion, investment, and import-export.',
    path: '/services',
    keywords: ['business services Bangladesh', 'construction services', 'engineering services'],
    image: '/og/services.jpg',
  }),
  sisterConcerns: createMetadata({
    title: 'Sister Concerns & Group Companies',
    description:
      'Discover the sister concerns of RootTOP Group — RootTOP Limited, AR International, Orisyn, K3R Corporation, Khamarbari Corporation and more — serving construction, trade, technology, and agriculture.',
    path: '/sister-concerns',
    keywords: ['RootTOP sister concerns', 'group companies Bangladesh'],
    image: '/og/sister-concerns.jpg',
  }),
  contact: createMetadata({
    title: 'Contact Us – Dhaka Office, Phone & Email',
    description:
      'Contact RootTOP Group at Mohakhali DOHS, Dhaka for construction, engineering, IT, agriculture, consultancy, logistics, and import-export business inquiries.',
    path: '/contact',
    keywords: ['contact RootTOP Group', 'RootTOP Dhaka office', 'business inquiry Bangladesh'],
    image: '/og/contact.jpg',
  }),
  career: createMetadata({
    title: 'Careers – Job Openings in Bangladesh',
    description:
      'Join RootTOP Group. Explore current job openings in civil engineering, architecture, design, and more across Bangladesh, and apply online.',
    path: '/career',
    keywords: ['RootTOP Group jobs', 'engineering jobs Bangladesh', 'careers Dhaka'],
    image: '/og/career.jpg',
  }),
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getJobBySlug(slug: string) {
  return careerData.find((job) => job.slug === slug);
}

export function createServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title =
    service.title.length <= 22
      ? `${service.title} Services in Bangladesh`
      : `${service.title} Services`;

  return createMetadata({
    title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: `/og/service-${service.slug}.jpg`,
    keywords: [`${service.title} services Bangladesh`, ...service.items],
  });
}

export function createJobMetadata(slug: string): Metadata {
  const job = getJobBySlug(slug);
  if (!job) return {};

  return createMetadata({
    title: `${job.title} – Job Opening`,
    description: truncate(job.jobContext, 158),
    path: `/career/${job.slug}`,
    image: `/og/job-${job.slug}.jpg`,
    keywords: [`${job.title} job Bangladesh`, 'RootTOP Group career'],
  });
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max - 1))}…`;
}

/* -------------------------------------------------------------------------- */
/*                                  JSON-LD                                   */
/* -------------------------------------------------------------------------- */

const organizationId = `${siteConfig.url}/#organization`;
const postalAddress = { '@type': 'PostalAddress', ...siteConfig.address };

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig.logo),
    },
    image: absoluteUrl(siteConfig.defaultOgImage),
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress,
    ...(socialLinks.length > 0 && { sameAs: socialLinks.map(([, url]) => url) }),
    contactPoint: siteConfig.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone.tel,
      email: siteConfig.email,
      contactType: phone.label === 'Sales' ? 'sales' : 'customer support',
      areaServed: 'BD',
      availableLanguage: ['en', 'bn'],
    })),
    subOrganization: groupCompanies.map((company) => ({
      '@type': 'Organization',
      name: company.name,
      url: company.website,
      logo: absoluteUrl(company.logo),
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#local-business`,
    name: siteConfig.name,
    image: absoluteUrl(siteConfig.defaultOgImage),
    logo: absoluteUrl(siteConfig.logo),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapUrl,
    parentOrganization: { '@id': organizationId },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    publisher: { '@id': organizationId },
    inLanguage: 'en',
  };
}

export function webpageJsonLd({
  title,
  description,
  path,
  type = 'WebPage',
}: {
  title: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': organizationId },
    inLanguage: 'en',
  };
}

export function serviceJsonLd(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: `${service.title} Services`,
    description: service.description,
    serviceType: service.title,
    provider: { '@id': organizationId },
    areaServed: { '@type': 'Country', name: 'Bangladesh' },
    image: absoluteUrl(service.image),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Capabilities`,
      itemListElement: service.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item },
      })),
    },
  };
}

const EMPLOYMENT_TYPES: Array<[RegExp, string]> = [
  [/full[- ]?time/i, 'FULL_TIME'],
  [/part[- ]?time/i, 'PART_TIME'],
  [/freelance|project|contract/i, 'CONTRACTOR'],
  [/intern/i, 'INTERN'],
];

/** Parses deadlines like "August 28, 2026"; returns undefined for "ASAP" etc. */
function parseDeadline(deadline: string) {
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) return undefined;
  // Use the calendar date as written; toISOString() would shift it to UTC
  // and can land on the previous day.
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function jobDescriptionHtml(job: Career) {
  const list = (heading: string, items: string[]) =>
    items.length
      ? `<h3>${heading}</h3><ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
      : '';

  return [
    `<p>${escapeHtml(job.jobContext)}</p>`,
    list('Responsibilities', job.responsibilities),
    list('Educational Requirements', job.educationalRequirements),
    list('Experience Requirements', job.experienceRequirements),
    list('Additional Requirements', job.additionalRequirements),
    list('Compensation & Benefits', job.compensationBenefits),
  ].join('');
}

/** Google for Jobs structured data. */
export function jobPostingJsonLd(job: Career) {
  const employmentType =
    EMPLOYMENT_TYPES.filter(([re]) => re.test(job.summary.employmentStatus)).map(
      ([, type]) => type,
    );
  const isRemote = /remote/i.test(job.summary.workplace);
  const validThrough = parseDeadline(job.summary.deadline);

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: jobDescriptionHtml(job),
    datePosted: job.datePosted,
    ...(validThrough && { validThrough: `${validThrough}T23:59:59+06:00` }),
    ...(employmentType.length > 0 && { employmentType }),
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: absoluteUrl(siteConfig.logo),
    },
    jobLocation: {
      '@type': 'Place',
      address: postalAddress,
    },
    ...(isRemote && {
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: { '@type': 'Country', name: 'Bangladesh' },
    }),
    ...(typeof job.summary.vacancy === 'number' && {
      totalJobOpenings: job.summary.vacancy,
    }),
    directApply: false,
    url: absoluteUrl(`/career/${job.slug}`),
    image: absoluteUrl(`/og/job-${job.slug}.jpg`),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
