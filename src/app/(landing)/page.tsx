import BoardOfDirectors from '@/components/common/home/boardofMember';

import HeroSec from '@/components/common/home/heroSec';

import Navbar from '@/components/common/home/navber';
import OurClients from '@/components/common/home/OurClients';

export default function RootHome() {
  return (
    <>
    <Navbar/>
      <HeroSec />
      <OurClients />
      <BoardOfDirectors />
   
    </>
  );
}
