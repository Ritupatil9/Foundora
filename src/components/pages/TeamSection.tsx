"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { Card, CardTitle } from "@/components/common/card";
import { Code, DollarSign, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/common/button";

const aiTeam = [
  {
    role: "CEO AI",
    description: "Helps with vision, leadership, fundraising.",
    icon: TrendingUp,
        color: "text-blue-400"
  },
  {
    role: "CTO AI",
    description: "Guides technical architecture & development.",
    icon: Code,
        color: "text-green-400"

  },
  {
    role: "CMO AI",
    description: "Marketing, brand positioning, user growth.",
    icon: Sparkles,
        color: "text-purple-400"

  },
  {
    role: "CFO AI",
    description: "Finance, pricing strategy, business modeling.",
    icon: DollarSign,
        color: "text-orange-400"

  },
];

export default function TeamSection() {
  const navigate = useNavigate();

  return (
    <motion.section
      id="team"
      className="pt-20 md:pt-24 pb-12 md:pb-16 px-2 sm:px-4 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
            <span className="block sm:inline text-slate-100">Meet Your </span>
            <span className="bg-gradient-to-r from-slate-200 to-cyan-200 bg-clip-text text-transparent block sm:inline">
              AI Co-Founder Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 text-center">
            Four specialized AI agents working together to turn your startup
            dreams into reality
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full relative z-10">
          {aiTeam.map((member, index) => {
            const Icon = member.icon;
            return (
              <PinContainer
                key={index}
                title={member.role}
                href="#"
                className=""
                containerClassName="group w-full flex justify-center"
              >
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
                  <Card className="w-64 h-80 flex bg-[#424a70] flex-col items-center p-6 rounded-3xl shadow-lg">
                    <div className="flex flex-col items-center mb-4 mt-12">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-400 mx-auto shadow-lg">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-center mt-6 text-white">
                      {member.role}
                    </CardTitle>
                    <p className="text-sm text-gray-300 text-center mt-4">
                      {member.description}
                    </p>
                  </Card>
                </motion.div>
              </PinContainer>
            );
          })}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => navigate("/AgentsPage")}
            className="bg-indigo-900 text-white"
          >
            Click to open agents on a new page
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
