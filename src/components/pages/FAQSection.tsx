import { Button } from "@/components/common/button";
import { HeadingClasses, SectionContainerDefaults } from "@/lib/ui-classes";
import { Link } from "react-router-dom";
import { useScrollContext } from "@/contexts/ScrollContext";

const faqData = [
  {
    question: "What is Foundora?",
    answer:
      "Foundora is an AI-powered platform that provides dedicated AI co-founders to guide you through every stage of your startup journey. From ideation to scaling, our AI team offers 24/7 expert guidance tailored specifically for Indian founders.",
  },
  {
    question: "How does the AI team work?",
    answer:
      "Our AI team consists of specialized co-founders - CEO AI for vision and leadership, CTO AI for technical guidance, CMO AI for marketing strategy, and CFO AI for financial planning. Each AI is trained on thousands of successful startup cases and provides personalized advice based on your specific needs and industry.",
  },
  {
    question: "Is this built for first-time founders?",
    answer:
      "Absolutely! Foundora is specifically designed for first-time founders who need comprehensive guidance. Our AI co-founders break down complex startup processes into simple, actionable steps and provide continuous support throughout your journey.",
  },
  {
    question: "What makes Foundora unique vs generic AI tools?",
    answer:
      "Unlike generic AI tools, Foundora provides specialized, role-based AI co-founders with deep startup expertise. We focus specifically on the Indian startup ecosystem, understand local market dynamics, and provide culturally relevant advice for building successful businesses in India.",
  },
  {
    question: "When will I get access to beta?",
    answer:
      "Beta access is rolling out in phases. When you join our waitlist, you'll receive access within 2-4 weeks based on your profile and startup stage. Student founders and early-stage entrepreneurs get priority access to ensure we can provide the best support during your critical growth phase.",
  },
];

type FAQSectionProps = {
  containerMaxWidthClasses?: string;
};

export default function FAQSection({
  containerMaxWidthClasses = SectionContainerDefaults.with6xl,
}: FAQSectionProps) {
  const { saveScrollPosition } = useScrollContext();

  const handleButtonClick = () => {
    saveScrollPosition(window.scrollY);
  };

  return (
    <section id="FAQSection" 
    className="py-12 md:py-16 px-3 sm:px-4">
      <div className={`mx-auto w-full ${containerMaxWidthClasses}`}>
        <div className="text-center mb-10 md:mb-12">
          <h2 className={`${HeadingClasses.h2Section} mb-3 md:mb-4`}>
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg px-4 sm:px-6 py-5 sm:py-7 shadow-card border-0"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
