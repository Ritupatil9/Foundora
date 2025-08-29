"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/common/button";

export default function FounderCTA() {
  return (
    <motion.section
      id="cta"
      className="from-[#1C1B3E] to-[#141229] text-black py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Unlock Your <span className="text-purple-400">Founder Potential</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join 10,000+ founders for exclusive early access, special pricing, and the chance to build with your AI co-founder.
        </motion.p>

        {/* Email Input + CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 border-black/20 p-4 rounded-lg bg-black/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <p className="text-sm text-gray-900 mb-10">No spam, ever. We respect your inbox.</p>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left text-sm text-gray-900">
          {[
            {
              title: "🇮🇳 Fair Indian Pricing",
              desc: "Global quality, priced for the local ecosystem.",
              color: "text-purple-400",
            },
            {
              title: "🎓 Student Discounts",
              desc: "Special offers for the next generation of builders.",
              color: "text-cyan-400",
            },
            {
              title: "🚀 Early Bird Perks",
              desc: "Lock in the best price and get priority access.",
              color: "text-pink-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/4 p-4 rounded-lg border border-black/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 + 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`font-semibold mb-2 ${item.color}`}>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
