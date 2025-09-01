"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { TracingBeamDefaults } from "@/lib/ui-classes";
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
  beamColumnWidthClasses = TracingBeamDefaults.beamColumnWidthClasses,
}: {
  children: React.ReactNode;
  className?: string;
  beamColumnWidthClasses?: string;
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

  // Responsive scrollEnd for useTransform
  const [scrollEnd, setScrollEnd] = useState(0.85); // fallback default
  
  // Measure content and ensure the beam is at least viewport height
  useLayoutEffect(() => {
    const measureAndSetSvgHeight = () => {
      if (!contentRef.current) return;
      const contentHeight = contentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight || 0;
      setSvgHeight(Math.max(contentHeight, viewportHeight));
      // Calculate scrollEnd: the scroll progress at which the bottom of the viewport reaches the bottom of the content
      if (contentHeight > viewportHeight) {
        setScrollEnd((contentHeight - viewportHeight) / contentHeight);
      } else {
        setScrollEnd(1); // If content fits in viewport, scrollEnd is 1
      }
    };

    measureAndSetSvgHeight();

    const handleResize = () => measureAndSetSvgHeight();
    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window && contentRef.current) {
      resizeObserver = new ResizeObserver(() => measureAndSetSvgHeight());
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const checkTablet = () => {
      // Widened the tablet breakpoint range slightly
      const isTabletSize = window.matchMedia('(min-width: 640px) and (max-width: 1024px)').matches;
      setIsTablet(isTabletSize);
    };
    
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  

  const springConfig = isTablet 
    ? { stiffness: 500, damping: 70 } // Tablet settings (more controlled)
    : isMobile 
      ? { stiffness: 500, damping: 50 } // Mobile settings
      : { stiffness: 500, damping: 50 }; // Desktop settings
 
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, scrollEnd], [50, svgHeight]),
    springConfig
  );
  const y2 = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [50, Math.max(svgHeight - 200, 50)]
    ),
    springConfig
  );
 
  const beamX = isMobile ? 75 : 50;
 
  return (
    <div className="mx-auto max-w-8xl pr-3 pl-1 sm:px-4 min-h-screen">
      <motion.div
        ref={ref}
        className={cn(
          "relative h-full w-full",
          "flex flex-row items-start gap-2 sm:gap-4",
          className
        )}
      >
        {/* Fixed width container for the beam */}
        <div className={`${beamColumnWidthClasses} shrink-0 relative -ml-2 sm:ml-0`}>
          <div className={cn(
            "sticky top-3 flex items-center justify-center w-full",
            "transition-all duration-300"
          )}>
        {/* Dot removed as requested */}
        <svg
          viewBox={`0 0 100 ${svgHeight}`}
          width="100%"
          height={svgHeight}
          preserveAspectRatio="none"
          className="block mx-auto"
          aria-hidden="true"
        >
          <motion.path
            d={`M ${beamX} 0 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeWidth={isMobile ? 2 : 1.25}
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M ${beamX} 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={isMobile ? 2 : 1.25}
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
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
