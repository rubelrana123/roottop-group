import AchievementSection from '@/components/common/home/achivement';
import GroupCompanies from '@/components/common/home/groupCompany';
import HeroSec from '@/components/common/home/heroSec';
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
            'Diversified business conglomerate in Bangladesh serving construction, engineering, IT, agriculture, consultancy, logistics, and trade.',
          path: '/',
        })}
      />
      <HeroSec />
      <ScrollIndicator />
      <GroupCompanies />
      <AchievementSection />
      <MissionVisionValues />
      <OurClients />
    </>
  );
}
