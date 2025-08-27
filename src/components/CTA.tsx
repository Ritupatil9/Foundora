"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const CTA = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.3]);

  return (
    <motion.section 
      className="py-24 relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0 gradient-primary opacity-5"
        style={{ y }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-display font-bold text-display mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to build something amazing?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of creators who are already building the future with Foundora. 
          Start your journey today and see what you can accomplish.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold px-8 py-4 text-lg shadow-large hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 py-4 text-lg hover:bg-muted/50"
            >
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
        
        
      </div>
    </motion.section>
  );
};

export default CTA;
