"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";


export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  disableEffects,
  frameless,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  disableEffects?: boolean;
  frameless?: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onMouseEnter = () => {
    setIsFlipped(true);
  };
  const onMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <a
      className={cn(
        "relative group/pin z-10  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
                      <div
          style={{
            perspective: "1000px",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        >
          <div
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            className={cn(
              "absolute left-0 top-0 flex justify-start items-start rounded-2xl transition-all duration-700 ease-in-out w-full h-full",
              frameless
                ? ""
                : "shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] overflow-hidden"
            )}
          >
            <div className={cn("relative z-10 w-full h-full", className)}>{children}</div>
          </div>
        </div>
      {!disableEffects && <PinPerspective title={title} href={href} />}
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[20] transition-all duration-700 ease-out">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1, 0.8],
                z: 0,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-gradient-to-r from-sky-500/[0.15] to-cyan-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1, 0.8],
                z: 0,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-gradient-to-r from-cyan-500/[0.15] to-blue-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1, 0.8],
                z: 0,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 3,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-gradient-to-r from-blue-500/[0.15] to-purple-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div 
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px] transition-all duration-700 ease-out" 
          />
          <motion.div 
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 transition-all duration-700 ease-out" 
          />
          <motion.div 
            className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px] transition-all duration-700 ease-out" 
          />
          <motion.div 
            className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 transition-all duration-700 ease-out" 
          />
        </>
      </div>
    </motion.div>
  );
};
