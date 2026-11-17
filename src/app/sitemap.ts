import type { MetadataRoute } from 'next';
import { careerData, services } from '@/lib/data';
import { absoluteUrl } from '@/lib/seo';

/**
 * Date the site content last meaningfully changed. Bump this when you edit page
 * content; a `new Date()` here would tell Google every page changes on every
 * deploy, and Google then ignores lastmod entirely.
 */
const CONTENT_UPDATED = new Date('2026-11-17');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '/', priority: 1, changeFrequency: 'weekly', image: '/og/default.jpg' },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly', image: '/og/about.jpg' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly', image: '/og/services.jpg' },
    { path: '/sister-concerns', priority: 0.7, changeFrequency: 'monthly', image: '/og/sister-concerns.jpg' },
    { path: '/career', priority: 0.7, changeFrequency: 'weekly', image: '/og/career.jpg' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly', image: '/og/contact.jpg' },
  ].map(({ path, priority, changeFrequency, image }) => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority,
    images: [absoluteUrl(image)],
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.75,
    images: [absoluteUrl(service.image)],
  }));

  const jobRoutes: MetadataRoute.Sitemap = careerData.map((job) => ({
    url: absoluteUrl(`/career/${job.slug}`),
    lastModified: new Date(job.datePosted),
    changeFrequency: 'weekly',
    priority: 0.6,
    images: [absoluteUrl(`/og/job-${job.slug}.jpg`)],
  }));

  return [...staticRoutes, ...serviceRoutes, ...jobRoutes];
}
