import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AlbumsSection from "@/components/AlbumsSection";
import DirectiveSection from "@/components/DirectiveSection";
import ClientForm from "@/components/ClientForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <AlbumsSection />
      <DirectiveSection />
      <ClientForm />
      <Footer />
    </div>
  );
};

export default Index;
