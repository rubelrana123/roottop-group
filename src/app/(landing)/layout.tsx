import Footer from "@/components/common/home/footer";
import Navbar from "@/components/common/home/navber";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

 
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
             <FloatingWhatsApp
          phone="8801712345678"
          message="Assalamu Alaikum, I want to know more about Roottop Group"
        />
      <Footer />
    </>
  );
}