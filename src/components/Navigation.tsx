"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform values for scroll-based animations
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["blur(12px)", "blur(20px)"]
  );

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ 
        backgroundColor,
        backdropFilter: backdropBlur
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-2xl font-display font-bold text-gradient">
              Foundora
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center space-x-8">
              <motion.a 
                href="#features" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gradient-primary text-white font-medium" size="sm">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50">
              <motion.a 
                href="#features" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#about" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <div className="px-3 py-2 space-y-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="gradient-primary text-white w-full">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
