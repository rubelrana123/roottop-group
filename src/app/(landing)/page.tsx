import BoardOfDirectors from '@/components/common/home/boardofMember';
import GroupCompanies from '@/components/common/home/groupCompany';

import HeroSec from '@/components/common/home/heroSec';

import Navbar from '@/components/common/home/navber';
import OurClients from '@/components/common/home/OurClients';

export default function RootHome() {
  return (
    <>
    <Navbar/>
      <HeroSec />
      <GroupCompanies />
      <OurClients />
      <BoardOfDirectors />
   
    </>
  );
}
