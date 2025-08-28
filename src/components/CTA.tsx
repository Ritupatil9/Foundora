import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FounderCTA() {
  return (
    

    <motion.section
    id="cta"
      className=" from-[#1C1B3E] to-[#141229] text-black py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Unlock Your <span className="text-purple-400">Founder Potential</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-900 mb-6">
          Join 10,000+ founders for exclusive early access, special pricing, and the chance to build with your AI co-founder.
        </p>

        {/* Email Input + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4  border-black/20 p-4 rounded-lg bg-black/5">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-black/20"
          />
          <Button
            size="lg"
            className="gradient-primary text-white font-semibold px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>

        <p className="text-sm text-gray-900 mb-10">No spam, ever. We respect your inbox.</p>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left text-sm text-gray-900">
          <div className="bg-black/4 p-4 rounded-lg border border-black/10">
            <h3 className="font-semibold text-purple-400 mb-2">🇮🇳 Fair Indian Pricing</h3>
            <p>Global quality, priced for the local ecosystem.</p>
          </div>
          <div className="bg-black/4 p-4 rounded-lg border border-black/10">
            <h3 className="font-semibold text-cyan-400 mb-2">🎓 Student Discounts</h3>
            <p>Special offers for the next generation of builders.</p>
          </div>
          <div className="bg-black/4 p-4 rounded-lg border border-black/10">
            <h3 className="font-semibold text-pink-400 mb-2">🚀 Early Bird Perks</h3>
            <p>Lock in the best price and get priority access.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
