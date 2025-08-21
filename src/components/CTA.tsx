
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-display mb-6">
          Ready to build something amazing?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of creators who are already building the future with Foundora. 
          Start your journey today and see what you can accomplish.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-primary text-white font-semibold px-8 py-4 text-lg shadow-large hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold px-8 py-4 text-lg hover:bg-muted/50"
          >
            Talk to Sales
          </Button>
        </div>
        
        
      </div>
    </section>
  );
};

export default CTA;
