import CTA from "@/components/pages/CTA";
import Features from "@/components/pages/Features";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/Hero";
import Navigation from "@/components/layout/Navigation";
import TeamSection from "@/components/pages/TeamSection";
import Testimonials from "@/components/pages/Testimonials";
import Price from "@/components/pages/pricing";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full">
        <Hero />
        <TeamSection />
        <Features />
        <Price />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
