import CTA from "@/components/pages/CTA";
import Features from "@/components/pages/Features";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/Hero";
import Navigation from "@/components/layout/Navbar";
import TeamSection from "@/components/pages/TeamSection";
import Price from "@/components/pages/pricing";

function Index()  {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <Navigation />
    <main className="flex-grow">
        <section id="hero"><Hero /></section> 
        <section id="team"><TeamSection /></section>
        <section id="features"><Features /></section>
        <section id="pricing"><Price /></section>
        <section id="CTA"><CTA /></section>
        
      </main>
      <footer id="footer" className="mt-0">
        <Footer />
      </footer>
        </div>
  );
}

export default Index;
