"use client"

import { Badge } from "../ui/badge"
import { SpotlightCard } from "../ui/spotlightcard"

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface ITestimonials {
  name: string;
  role: string;
  review: string;
  direction?: string;
  onClick?: () => void;
}

const Testimonials = ({ name, role, review, direction = 'left', onClick }: ITestimonials) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const animationDirection = direction == 'left' ? -40 : 40;

  return (
    <>
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/3"
      >
        <motion.div
          className={cn("text-center mb-4 sm:mb-4 lg:mb-6")}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: animationDirection }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SpotlightCard className="dark:bg-black h-full" spotlightColor="34, 150, 238">
            <div className="w-full h-full flex flex-col lg:items-start lg:justify-start justify-center items-center  gap-2">
              <h3 className="text-xl font-semibold mb-0">{name}</h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-l dark:from-blue-300 from-blue-700 to-blue-500 font-semibold">{role}</p>
              <p className="text-sm font-light text-muted-foreground lg:text-start mb-1">{review}</p>
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Testimonials;