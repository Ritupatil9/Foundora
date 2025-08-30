"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 0;
  });

  // Measure content and ensure the beam is at least viewport height
 useLayoutEffect(() => {
  const measureAndSetSvgHeight = () => {
    const fullPageHeight = document.documentElement.scrollHeight;
    setSvgHeight(fullPageHeight);
  };

  measureAndSetSvgHeight();

  window.addEventListener("resize", measureAndSetSvgHeight);
  window.addEventListener("load", measureAndSetSvgHeight);

  return () => {
    window.removeEventListener("resize", measureAndSetSvgHeight);
    window.removeEventListener("load", measureAndSetSvgHeight);
  };
}, []);


  useEffect(() => {
    const checkTablet = () => {
      // Widened the tablet breakpoint range slightly
      const isTabletSize = window.matchMedia(
        "(min-width: 640px) and (max-width: 1024px)"
      ).matches;
      setIsTablet(isTabletSize);
    };

    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  const springConfig = isTablet
    ? { stiffness: 300, damping: 70 } // Tablet settings (more controlled)
    : isMobile
    ? { stiffness: 200, damping: 30 } // Mobile settings
    : { stiffness: 500, damping: 50 }; // Desktop settings

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    springConfig
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 200, 50)]),
    springConfig
  );

  return (
    <div className="mx-auto max-w-8xl px-4 min-h-screen">
      <motion.div
        ref={ref}
        className={cn(
          "relative h-full w-full",
          "flex flex-row items-start gap-2 sm:gap-4",
          className
        )}
      >
        {/* Fixed width container for the beam */}
        <div className="w-[24px] min-w-[24px] sm:w-[40px] sm:min-w-[40px] md:w-[60px] md:min-w-[60px] lg:w-[80px] lg:min-w-[80px] shrink-0 relative">
          <div
            className={cn(
              "sticky top-3 flex items-center justify-center w-full",
              "transition-all duration-300"
            )}
          >
            {/* Beam line */}
            <svg
              viewBox={`0 0 20 ${svgHeight}`}
              width="20"
              height={svgHeight}
              className="block mx-auto"
              aria-hidden="true"
            >
              <motion.path
                d={`M 10 0 V ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeWidth={isMobile ? 1.5 : 1.25}  // thinner on mobile
                strokeOpacity="0.16"
                transition={{
                  duration: 10,
                }}
              />
              <motion.path
                d={`M 10 0 V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth={isMobile ? 1.5 : 1.25}  // thinner on mobile
                className="motion-reduce:hidden"
                transition={{
                  duration: 10,
                }}
              />
              <defs>
                <motion.linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={y1}
                  y2={y2}
                >
                  <stop stopColor="#18CCFC" stopOpacity="0" />
                  <stop stopColor="#18CCFC" />
                  <stop offset="0.325" stopColor="#6344F5" />
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main content area */}
        <div className="min-w-0 flex-1">
          <div ref={contentRef}>{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default TracingBeam;
