import AchievementSection from '@/components/common/home/achivement';
import GroupCompanies from '@/components/common/home/groupCompany';
import HeroSec from '@/components/common/home/heroSec';
import Newsletter from '@/components/common/home/newsletter';
import OurClients from '@/components/common/home/OurClients';
import JsonLd from '@/components/common/JsonLd';
import MissionVisionValues from '@/components/common/MissionVisionValues';
import ScrollIndicator from '@/components/common/ScrollAnimation';
import { pageMetadata, webpageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata.home;

export default function RootHome() {
  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: 'RootTOP Group',
          description:
             "RootTOP Group is a leading Bangladesh-based business conglomerate providing construction, engineering, IT solutions, agriculture, consultancy, logistics, and global trade services.",
          path: '/',
        })}
      />
      <HeroSec />
      <ScrollIndicator />
      <GroupCompanies />
      <AchievementSection />
      <MissionVisionValues />
      <OurClients />
      <Newsletter/>
    </>
  );
}
