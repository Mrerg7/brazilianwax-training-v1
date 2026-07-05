export const SITE = {
  name: 'brazilianwax.training',
  title: 'brazilianwax.training • Premium Domain | Brazilian Wax Training & Certification',
  description:
    'Own brazilianwax.training — the authoritative .training domain for professional Brazilian wax education, certification programs, and esthetician academies. Exact-match keywords with built-in credibility.',
  url: 'https://brazilianwax.training',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  publishedDate: '2026-07-05',
  googleSiteVerification: 'i_4N5YJ3HGUnLUNxd5p54jT1FPZxA8xSxD2xO54vb1I',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '27f9da83-538f-4582-0f49-7912d7811500',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

/** Canonical homepage URL — always apex, HTTPS, trailing slash. */
export const CANONICAL_HOME = `${SITE.url}/`;

export function canonicalUrl(pathname: string): string {
  if (pathname === '/' || pathname === '') {
    return CANONICAL_HOME;
  }
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return new URL(normalizedPath, CANONICAL_HOME).href;
}

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry — brazilianwax.training')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring brazilianwax.training. Please provide details and next steps.\n\nIntended use:\nBudget range:\n\nBest regards,')}`;
