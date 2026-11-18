/**
 * Single source of truth for company identity (name, address, phone, email).
 * Search engines expect these "NAP" details to be identical everywhere, so the
 * footer, contact page, metadata and JSON-LD all read from here.
 */
export const siteConfig = {
  name: 'RootTOP Group',
  legalName: 'RootTOP Group',
  /**
   * Other ways people type the brand. Tells Google these all mean this company,
   * which helps stop it "correcting" roottop to rooftop.
   */
  alternateNames: ['Roottop Group', 'Root Top Group', 'RootTOP', 'RootTop Group Bangladesh'],
  url: 'https://www.roottopgroup.com',
  locale: 'en_US',
  description:
    'RootTOP Group is a diversified business conglomerate in Bangladesh delivering civil engineering, electrical & mechanical, IT, agriculture, consultancy, investment, and import-export solutions.',
  foundingDate: '2015',
  defaultOgImage: '/og/default.jpg',
  logo: '/logo.png',
  /** Google Analytics 4 measurement ID (G-XXXXXXX). Set in .env; GA is skipped when empty. */
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
  googleVerification: [
    'A7tRAt27KqSlVpZqVI2Fo1wi-NDQg_mPYZjF0ynLNMY',
    'jw-gQKycM6N8_P0OayaS1qCUHlUzvrvkXWFYwJFoPDk',
  ],

  phone: '+8801746644478',
  phones: [
    { label: 'Sales', display: '+88 01746-644478', tel: '+8801746644478' },
    { label: 'Support', display: '+88 01986-205401', tel: '+8801986205401' },
  ],
  email: 'roottoplimited@gmail.com',

  address: {
    streetAddress: 'House #263 (1st Floor), Road #19, Mohakhali DOHS',
    addressLocality: 'Dhaka Cantonment',
    addressRegion: 'Dhaka',
    postalCode: '1206',
    addressCountry: 'BD',
  },
  /** Human-readable address, used on the contact page and in the footer. */
  addressText:
    'House #263 (1st Floor), Road #19, Mohakhali DOHS, Dhaka Cantonment, Dhaka 1206, Bangladesh',
  geo: { latitude: 23.784329668664885, longitude: 90.3936811593706 },
  mapUrl: 'https://maps.google.com/?q=23.784329668664885,90.3936811593706',

  /**
   * Official social profiles. Leave a value empty to hide its icon and keep it
   * out of the Organization `sameAs` schema. Use full profile URLs, e.g.
   * https://www.facebook.com/roottopgroup — never the bare platform homepage.
   */
  socials: {
    facebook: '',
    linkedin: '',
    youtube: '',
    x: '',
  },
};

export type SocialNetwork = keyof typeof siteConfig.socials;

export const socialLinks = (
  Object.entries(siteConfig.socials) as [SocialNetwork, string][]
).filter(([, url]) => Boolean(url));
