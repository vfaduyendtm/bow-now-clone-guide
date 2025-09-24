import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustrySection from "@/components/IndustrySection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IndustrySection />
        <StatsSection />
        <CTASection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
