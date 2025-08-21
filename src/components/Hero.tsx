"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";


const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#1C1B3E] to-[#141229]">
        {/* Background gradient elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-left animate-fade-in-up">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
              From <span className="text-blue-400">Dream</span> To{" "}
              <span className="text-purple-400">Launch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
              Stop struggling alone. Get expert guidance from AI advisors who
              understand your founder journey — from validating ideas to scaling
              your startup.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-4 text-lg shadow-large hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join WaitList <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="font-semibold px-8 py-4 text-lg hover:bg-muted/50 text-white"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
            <p className="text-base md:text-lg text-gray-400 mb-6">
              Join 10,000+ founders building smarter
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Free to get started</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Launch in minutes</span>
              </div>
            </div>
          </div>
          {/* Right side - Feature Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">
              AI CTO: Technology
            </h2>
            <p className="text-gray-300 mb-6">
              Designs scalable tech architecture, plans MVP development,
              optimizes performance, and prevents technical debt.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-lg text-white">✅ Tech Stack</div>
              <div className="p-4 bg-purple-500/10 rounded-lg text-white">📊 MVP Planning</div>
              <div className="p-4 bg-green-500/10 rounded-lg text-white">📱 Mobile First</div>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};

export default Hero;
