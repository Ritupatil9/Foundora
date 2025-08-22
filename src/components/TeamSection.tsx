"use client";

import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PinContainer } from "@/components/ui/3d-pin";
import { useState } from "react";

import { TrendingUp, Code, Sparkles, DollarSign } from "lucide-react";

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
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleMouseLeave = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: false
    }));
  };

  return (
    <section className="py-20 bg-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Meet Your </span>
            <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              AI Co-Founder Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Four specialized AI agents working together to turn your startup dreams into reality
          </p>
        </div>

        {/* AI Co-Founder Cards - Improved Grid Layout */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center max-w-6xl mx-auto w-full">
            {aiTeam.map((member, index) => {
              const Icon = member.icon;
              const isFlipped = flippedCards[index];
              
              return (
                <div key={index} className="w-full flex justify-center">
                  <div 
                    className="relative w-full max-w-64 h-80 cursor-pointer perspective-1000"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                        isFlipped ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front of card */}
                      <div className="absolute w-full h-full backface-hidden">
                        <Card className="flex flex-col items-center p-6 bg-indigo-950 border border-indigo-900 rounded-2xl w-full h-full hover:bg-indigo-900 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                          {/* Icon Circle */}
                          <div className="mb-4">
                            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${member.bgColor} mx-auto shadow-lg`}>
                              <Icon className="h-10 w-10 text-white" />
                            </div>
                          </div>
                          
                          {/* Role Title */}
                          <CardTitle className="text-xl font-bold text-center mb-2 text-white">
                            {member.role}
                          </CardTitle>
                          
                          {/* Description */}
                          <CardDescription className="text-center text-gray-200 text-base">
                            {member.description}
                          </CardDescription>
                        </Card>
                      </div>

                      {/* Back of card */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180">
                        <Card className="flex flex-col items-center p-6 bg-indigo-900 border border-indigo-700 rounded-2xl w-full h-full hover:bg-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                          {/* Role Title */}
                          <CardTitle className="text-xl font-bold text-center mb-6 text-white">
                            {member.role}
                          </CardTitle>
                          
                          {/* Detailed Description */}
                          <CardDescription className="text-center text-gray-200 text-sm leading-relaxed px-2">
                            {member.detailedDescription}
                          </CardDescription>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}