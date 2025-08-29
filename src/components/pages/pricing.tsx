"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Price() {
  return (
    <section
      id="pricing"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-background"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          A World-Class Tool, Priced for India
        </h2>
        <p className="mt-4 max-w-2xl text-black-200 mx-auto text-lg">
          We believe in empowering Indian innovation. Get access to a US-level
          product with a fair, transparent pricing model designed for the Indian
          ecosystem.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {/* Founder's Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#19123b] border border-purple-600 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-purple-600/30 text-purple-400">
                🎯
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Founder's Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Starting From</p>
              <p className="text-3xl font-extrabold text-white">₹XXX</p>
              <p className="text-gray-300">/month</p>
              <p className="text-sm text-purple-400 mt-4">
                Final pricing revealed to waitlist
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Student Founder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative bg-[#19123b] border-2 border-purple-500 shadow-2xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <span className="absolute -top-3 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MOST POPULAR
            </span>
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-green-600/30 text-green-400">
                🎓
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Student Founder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">
                All features, plus an exclusive student discount.
              </p>
              <p className="text-3xl font-extrabold text-white">₹XXX</p>
              <p className="text-gray-300">/month</p>
              <p className="text-sm text-green-400 mt-4">
                Verification will be required
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Early Bird Offer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#19123b] border border-cyan-600 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-cyan-600/30 text-cyan-400">
                📈
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Early Bird Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">
                Lock in the lowest possible price, forever.
              </p>
              <p className="text-3xl font-extrabold text-white">₹???</p>
              <p className="text-gray-300">one-time</p>
              <p className="text-sm text-cyan-400 mt-4">
                For first 25,000 waitlist members
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
