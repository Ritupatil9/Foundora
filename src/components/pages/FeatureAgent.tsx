"use client";

import RotatingText from "../ui/RotatingText";    

export default function RotateDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <RotatingText
        texts={["React", "Bits", "Is", "Cool!"]}
        mainClassName="text-5xl sm:text-6xl px-32 sm:px-12 md:px-9 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
}
