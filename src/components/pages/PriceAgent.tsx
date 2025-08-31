"use client";

import CountUp from "./CountUp";

export default function CountUpDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="text-5xl font-bold text-white count-up-text"
      />

    </div>
  );
}
