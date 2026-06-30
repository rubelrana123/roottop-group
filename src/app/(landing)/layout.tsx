import Footer from '@/components/common/home/footer';
import Navbar from '@/components/common/home/navber';
import { childrenProps } from '@/types';

export default function LandingLayout({ children }: childrenProps) {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
