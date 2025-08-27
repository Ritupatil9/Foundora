import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import Price from "@/components/pricing";
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
