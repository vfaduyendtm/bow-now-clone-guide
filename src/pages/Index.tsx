import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DetailedIndustrySection from "@/components/DetailedIndustrySection";
import SuccessStorySection from "@/components/SuccessStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DetailedIndustrySection />
        <SuccessStorySection />
        <TestimonialsSection />
        <StatsSection />
        <PricingSection />
        <CTASection />
        <ContactFormSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
