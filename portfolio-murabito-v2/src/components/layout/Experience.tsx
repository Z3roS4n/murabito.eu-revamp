"use client"

import { Badge } from "../ui/badge"
import { SpotlightCard } from "../ui/spotlightcard"

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface Experience {
  title: string;
  subtitle: string;
  description: string;
  skills: Array<string>;
}

const Experience = ({ title, subtitle, description, skills }: Experience) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <>
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={cn("text-center mb-4 sm:mb-4 lg:mb-6")}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SpotlightCard className="dark:bg-black h-full" spotlightColor="34, 150, 238">
            <div className="w-full h-full flex flex-col lg:items-start lg:justify-start justify-center items-center  gap-2">
              <h3 className="text-xl font-semibold mb-0">{title}</h3>
              <p className="bg-clip-text text-transparent bg-gradient-to-l dark:from-blue-300 from-blue-700 to-blue-500 font-semibold">{subtitle}</p>
              <p className="text-sm text-muted-foreground lg:text-start mb-1">{description}</p>
              <div className="flex flex-row not-lg:justify-center flex-wrap gap-2">
                {skills.map((skill, index) => <Badge variant="default" key={index} shiny={true}>{skill}</Badge>)}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Experience