"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { Card, CardTitle } from "@/components/ui/card";
import { Code, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const aiTeam = [
  {
    role: "AI CEO",
    description: "Business Strategy",
    icon: TrendingUp,
    bgColor: "bg-gradient-to-br from-purple-400 to-blue-400",
  },
  {
    role: "AI CTO",
    description: "Technology & Development",
    icon: Code,
    bgColor: "bg-gradient-to-br from-blue-400 to-teal-400",
  },
  {
    role: "AI CMO",
    description: "Marketing & Growth",
    icon: Sparkles,
    bgColor: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    role: "AI CFO",
    description: "Finance & Operations",
    icon: DollarSign,
    bgColor: "bg-green-400",
  },
];

export default function TeamSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.section className="py-20 bg-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Meet Your </span>
            <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              AI Co-Founder Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Four specialized AI agents working together to turn your startup
            dreams into reality
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
          {aiTeam.map((member, index) => {
            const Icon = member.icon;

            const cardContent = (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="w-full h-[280px] sm:h-[300px] flex flex-col items-center p-6 bg-indigo-950 border border-indigo-900 rounded-2xl">
                  <div className="mb-4 mt-12">
                    <div
                      className={`flex items-center justify-center w-20 h-20 rounded-full ${member.bgColor} mx-auto shadow-lg`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center mb-2 text-white">
                    {member.role}
                  </CardTitle>
                  <p className="text-sm text-gray-300 text-center">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            );

            // ✅ Use PinContainer only on desktop
            return isDesktop ? (
              <PinContainer
                key={index}
                title={member.role}
                href="#"
                containerClassName="group w-full flex justify-center"
              >
                {cardContent}
              </PinContainer>
            ) : (
              <div key={index} className="w-full flex justify-center">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
