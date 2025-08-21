import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Rocket, Code, BarChart3 } from "lucide-react";

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
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-display mb-4 text-gradient">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale your ideas faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 
                         border-border/50 hover:border-accent/50 animate-scale-in 
                         bg-muted/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
