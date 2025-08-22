"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsCountProps {
  title?: string;
  className?: string;
}

const defaultTitle = "CREATE STUNNING INTERFACES WITH SCROLLX-UI COMPONENTS";

export default function AnimatedHeadline({
  title = defaultTitle,
  className = "",
}: StatsCountProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <motion.section
      ref={containerRef}
      className={cn(
        "px-2 sm:px-4 md:px-8 w-full overflow-hidden",
        className
      )}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={cn("text-center mb-8 sm:mb-12 lg:mb-16")}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          className={cn(
            "text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide px-4"
          )}
        >
          <span className="hidden sm:inline">
            {title.includes("WITH") ? (
              <h1 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                My journey as a Web Developer in the last 2 years.
              </h1>
            ) : (
              <span className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">{title}</span>
            )}
          </span>
          <div
            className={cn("flex flex-col items-center leading-tight sm:hidden")}
          >
            {title.includes("WITH") ? (
              <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                My journey as a Web Developer in the last 2 years.
              </h1>
            ) : (
              <span className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{title}</span>
            )}
          </div>
        </h2>
      </motion.div>
    </motion.section>
  );
}