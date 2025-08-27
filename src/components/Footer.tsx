"use client";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0.3]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col  py-20 bg-background"
    >
    <motion.footer 
      className="bg-primary text-primary-foreground py-16"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-display font-bold mb-4">
              Foundora
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Empowering creators and entrepreneurs to build, launch, and scale their ideas with cutting-edge tools and seamless workflows.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Documentation</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Foundora. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/70 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
    </section>
  );
};

export default Footer;
