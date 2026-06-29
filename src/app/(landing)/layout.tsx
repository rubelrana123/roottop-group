import Footer from '@/components/common/home/footer';
import { childrenProps } from '@/types';

export default function LandingLayout({ children }: childrenProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
