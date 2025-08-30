import CTA from "@/components/pages/CTA";
import Features from "@/components/pages/Features";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/Hero";
import Navigation from "@/components/layout/Navigation";
import TeamSection from "@/components/pages/TeamSection";
import Testimonials from "@/components/pages/Testimonials";
import Price from "@/components/pages/pricing";
import TracingBeam from "@/components/ui/tracing-beam";

function Index()  {
  return (
     <div className="w-full">
        <Navigation />

        <section id="hero"><Hero /></section> 
        <section id="team"><TeamSection /></section>
        
        <section id="features"><Features /></section>
        <section id="pricing"><Price /></section>
        <section id="CTA"><CTA /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="footer" className="scroll-mt-16"><Footer /></section>
      </div>
    
  );
};

export default Index;
