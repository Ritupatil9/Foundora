
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    content: "Foundora transformed how we build and deploy our applications. What used to take weeks now takes hours. The platform is incredibly intuitive and powerful.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, InnovateX",
    content: "The developer experience is phenomenal. The APIs are well-documented, the tools are robust, and the support team is exceptional. Highly recommended!",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Product Manager, StartupCo",
    content: "We've been using Foundora for 6 months and our productivity has increased by 300%. It's become an essential part of our tech stack.",
    rating: 5,
    avatar: "EJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-display mb-4">
            Loved by thousands of creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community of successful entrepreneurs and developers who trust Foundora with their most important projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
