"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/common/button";

export default function Price() {
  const navigate = useNavigate();

  return (
    <section
      id="pricing"
      className="pt-20 md:pt-24 pb-12 md:pb-16 px-2 sm:px-4 ">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-200 to-cyan-200 bg-clip-text text-transparent">
          A World-Class Tool, Priced for India
        </h2>
        <p className="mt-4 max-w-2xl text-black-200 mx-auto text-lg">
          We believe in empowering Indian innovation. Get access to a US-level
          product with a fair, transparent pricing model designed for the Indian
          ecosystem.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6 justify-items-center mx-auto">
        {/* Founder's Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-500/50 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-950 text-purple-400">
                🎯
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Founder's Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Starting From Only</p>
              <p className="text-3xl font-extrabold text-white">₹XXX</p>
              <p className="text-gray-300">/month</p>
              <p className="text-sm text-slate-100 mt-4">
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
          <Card className="relative bg-slate-500/50 border-2 border-slate-500 shadow-2xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <span className="absolute -top-3 right-4 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MOST POPULAR
            </span>
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-950 text-green-400">
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
              <p className="text-sm text-slate-100 mt-4">
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
          <Card className="bg-slate-500/50 border shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-950 text-cyan-400">
                📈
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Early Bird Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">
                Lock in the lowest possible price.
              </p>
              <p className="text-3xl font-extrabold text-white">₹???</p>
              <p className="text-gray-300">one-time</p>
              <p className="text-sm text-slate-100 mt-4">
                For first 25,000 waitlist members
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* ✅ Button placed outside the grid */}
      <div className="w-full flex justify-center items-center mt-12">
        <Button
          onClick={() => navigate("/PriceAgent")}
          className="bg-indigo-950 text-white rounded-lg hover:bg-indigo-900"
        >
          Click to open agents on a new page
        </Button>
      </div>
    </section>
  );
}
