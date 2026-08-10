'use client';

import dynamic from 'next/dynamic';

const OurClientsCarousel = dynamic(() => import('./OurClientsCarousel'));

export default function LazyOurClientsCarousel() {
  return <OurClientsCarousel />;
}
