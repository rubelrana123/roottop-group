import Footer from "@/components/common/home/footer";
import Navbar from "@/components/common/home/navber";

 
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}