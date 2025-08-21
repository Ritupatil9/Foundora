"use client";

import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PinContainer } from "@/components/ui/3d-pin";

import { User, Code, Megaphone, DollarSign } from "lucide-react";

const aiTeam = [
  {
    role: "CEO AI",
    description: "Helps with vision, leadership, fundraising.",
    icon: User,
    bgColor: "bg-indigo-950", // Change this for different backgrounds
  },
  {
    role: "CTO AI",
    description: "Guides technical architecture & development.",
    icon: Code,
    bgColor: "bg-indigo-950",
  },
  {
    role: "CMO AI",
    description: "Marketing, brand positioning, user growth.",
    icon: Megaphone,
    bgColor: "bg-indigo-950",
  },
  {
    role: "CFO AI",
    description: "Finance, pricing strategy, business modeling.",
    icon: DollarSign,
    bgColor: "bg-indigo-950",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Meet Your AI Co-Founder Team
      </h2>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {aiTeam.map((member, index) => {
          const Icon = member.icon;
          return (
            <PinContainer
              key={index}
              title={member.role}
              href="#"
              disableEffects
              frameless
              className="w-full h-full"
              containerClassName="block h-96 w-full"
            >
              <Card
                className={`flex flex-col items-center p-10 ${member.bgColor} rounded-xl border w-full h-full`}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-500 mx-auto">
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-center mb-2 text-white">
                  {member.role}
                </CardTitle>
                <CardDescription className="text-center text-white">
                  {member.description}
                </CardDescription>
              </Card>
            </PinContainer>
          );
        })}
      </div>
    </section>
  );
}