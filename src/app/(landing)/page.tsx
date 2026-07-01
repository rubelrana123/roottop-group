import AchievementSection from '@/components/common/home/achivement';
import BoardOfDirectors from '@/components/common/home/boardofMember';
import GroupCompanies from '@/components/common/home/groupCompany';

import HeroSec from '@/components/common/home/heroSec';
 
import OurClients from '@/components/common/home/OurClients';
import ScrollIndicator from '@/components/common/ScrollAnimation';

export default function RootHome() {
  return (
    <>
    
      <HeroSec />
      <ScrollIndicator/>
      <GroupCompanies />

      <AchievementSection />
      <OurClients />
      <BoardOfDirectors />
   
    </>
  );
}
