"use client";
import { Card, CardContent } from "@/components/common/card";
import { Zap, Shield, Users, Rocket, Code, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy your ideas in seconds with our optimized infrastructure and blazing-fast performance.",
    bg: "bg-yellow-100"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
    bg: "bg-blue-100"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly work with your team using real-time collaboration tools and project management features.",
    bg: "bg-green-100"
  },
  {
    icon: Rocket,
    title: "Scale Effortlessly",
    description: "From prototype to millions of users, our platform scales automatically with your growth.",
    bg: "bg-purple-100"
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Powerful APIs, extensive documentation, and flexible integrations for developers of all levels.",
    bg: "bg-pink-100"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep analytics and actionable insights to help you make data-driven decisions for your business.",
    bg: "bg-orange-100"
  }
];

const Features = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.section 
      id="features" 
      className="py-24 bg-gradient-to-b from-background to-muted/30"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-display mb-4 ">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale your ideas faster than ever before.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card 
                className="group hover:shadow-medium transition-all duration-300 
                           border-border/50 hover:border-accent/50 
                           bg-muted/50"
              >
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
