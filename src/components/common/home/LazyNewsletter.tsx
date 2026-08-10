'use client';

import dynamic from 'next/dynamic';

const Newsletter = dynamic(() => import('./newsletter'));

export default function LazyNewsletter() {
  return <Newsletter />;
}
