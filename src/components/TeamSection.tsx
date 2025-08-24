"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Code, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const aiTeam = [
  {
    role: "AI CEO",
    description: "Business Strategy",
    detailedDescription: "Validates business models, defines market positioning, creates growth roadmaps, and guides major strategic decisions.",
    icon: TrendingUp,
    bgColor: "bg-gradient-to-br from-purple-400 to-blue-400",
  },
  {
    role: "AI CTO",
    description: "Technology & Development",
    detailedDescription: "Designs scalable tech architecture, plans MVP development, optimizes performance, and prevents technical debt.",
    icon: Code,
    bgColor: "bg-gradient-to-br from-blue-400 to-teal-400",
  },
  {
    role: "AI CMO",
    description: "Marketing & Growth",
    detailedDescription: "Develops marketing strategies, identifies target audiences, creates growth campaigns, and optimizes conversion rates.",
    icon: Sparkles,
    bgColor: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    role: "AI CFO",
    description: "Finance & Operations",
    detailedDescription: "Manages financial planning, tracks key metrics, optimizes operations, and ensures sustainable growth.",
    icon: DollarSign,
    bgColor: "bg-green-400",
  },
];

export default function TeamSection() {
  return (
    <motion.section 
      className="py-20 bg-white min-h-screen flex flex-col justify-center"
    >
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
            Four specialized AI agents working together to turn your startup dreams into reality
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center max-w-6xl mx-auto w-full">
          {aiTeam.map((member, index) => (
            <PinContainer
              key={index}
              title={member.role}
              href="#"
              containerClassName="group w-full"
            >
              <FlipCard member={member} index={index} />
            </PinContainer>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FlipCard({ member, index }: { member: any; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = member.icon;

  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
    >
      <div
        className="relative w-full max-w-64 h-80 cursor-pointer [perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
      >
        {/* Inner container for flip effect */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front side */}
          <Card className="absolute inset-0 flex flex-col items-center p-6 bg-indigo-950 border border-indigo-900 rounded-2xl [backface-visibility:hidden]">
            <div className="mb-4">
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full ${member.bgColor} mx-auto shadow-lg`}
              >
                <Icon className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-xl font-bold text-center mb-2 text-white">
              {member.role}
            </CardTitle>
            <CardDescription className="text-center text-gray-200 text-base">
              {member.description}
            </CardDescription>
          </Card>

          {/* Back side */}
          <Card className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-indigo-900 border border-indigo-800 rounded-2xl text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <CardDescription className="text-center text-gray-200 text-sm leading-relaxed">
              {member.detailedDescription}
            </CardDescription>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
