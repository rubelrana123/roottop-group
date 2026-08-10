'use client';

import dynamic from 'next/dynamic';

const LicenseAwardsSection = dynamic(() => import('./LicenseAward'));

export default function LazyLicenseAwards() {
  return <LicenseAwardsSection />;
}
