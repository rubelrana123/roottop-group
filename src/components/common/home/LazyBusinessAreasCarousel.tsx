'use client';

import dynamic from 'next/dynamic';

const BusinessAreasCarousel = dynamic(() => import('./BusinessAreasCarousel'));

export default function LazyBusinessAreasCarousel() {
  return <BusinessAreasCarousel />;
}
