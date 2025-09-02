"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/common/button";
import { ButtonClasses, HeadingClasses, SectionContainerDefaults } from "@/lib/ui-classes";

type HeroSectionProps = {
  containerMaxWidthClasses?: string;
};

export default function HeroSection({
  containerMaxWidthClasses = SectionContainerDefaults.standard,
}: HeroSectionProps) {
  const scrollToWaitlist = () => {
    const ctaSection = document.querySelector('section:has(input[placeholder="Enter your email"])');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      className="pt-20 md:pt-24 pb-12 md:pb-16 px-2 sm:px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Content Container */}
      <div className={`relative z-10 mx-auto w-full ${containerMaxWidthClasses}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-3 md:space-y-4">
              <h1 className={`${HeadingClasses.h1Hero} leading-tight`}>
                <span className="gradient-text bg-gradient-to-r from-slate-200 to-cyan-200 bg-clip-text text-transparent ">
                  From Dream to Launch Guided by Your AI Co-Founders
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Stop scrolling alone. Get expert guidance across all startup stages with dedicated AI Foundora co-founders working 24/7 to help you win.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
              <Button
                variant="gradient"
                size="lg"
                className={`font-semibold ${ButtonClasses.flexGrow} ${ButtonClasses.responsiveText}`}
                onClick={scrollToWaitlist}
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`${ButtonClasses.flexGrow} ${ButtonClasses.responsiveText} border border-white/20`}
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between sm:justify-start gap-6 sm:gap-8 pt-6 md:pt-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">1000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Founders building in India</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            className="bg-[#424a70] backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">
              AI CTO: Technology
            </h2>
            <p className="text-gray-300 mb-6">
              Designs scalable tech architecture, plans MVP development,
              optimizes performance, and prevents technical debt.
            </p>
            <div className="space-y-4">
              <motion.div
                className="p-4 bg-blue-100/10 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                ✅ Tech Stack
              </motion.div>
              <motion.div
                className="p-4 bg-purple-100/10 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                📊 MVP Planning
              </motion.div>
              <motion.div
                className="p-4 bg-green-100/10 rounded-lg text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                📱 Mobile First
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
