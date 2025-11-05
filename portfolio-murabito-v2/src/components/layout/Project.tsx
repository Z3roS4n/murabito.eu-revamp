"use client"

import { Badge } from "../ui/badge"
import { SpotlightCard } from "../ui/spotlightcard"

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface IProject {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  skills: Array<string>;
  link: string;
  direction?: string;
  viewOn?: string;
  onClick?: () => void;
}

const Project = ({ image, title, subtitle, description, skills, direction = 'left', link, viewOn = 'View on GitHub' }: IProject) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const [toggleLink, setToggleLink] = useState<boolean>(true); 
  const animationDirection = direction == 'left' ? -40 : 40;

  const setVisible = () => setToggleLink(true);
  const setInvisible = () => setToggleLink(false);
  
  return (
    <>
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/3"
      >
        <motion.div
          className={cn("text-center mb-4 sm:mb-4 lg:mb-6")}
          initial={{ opacity: 0, x: animationDirection }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: animationDirection }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SpotlightCard className="dark:bg-black w-full h-100" spotlightColor="34, 150, 238">
            <div className="w-full h-full flex flex-col items-center gap-2">
              <Image src={`/projects/${image}`} height={300} width={300} className="w-full h-35 rounded-md" alt="project"></Image>
              <h3 className="text-xl font-semibold mb-0 self-center">{title}</h3>
              <p className="font-light" >{subtitle}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center">
              <div>
                <Link href={link} className="bg-clip-text text-transparent bg-gradient-to-l dark:from-blue-300 from-blue-700 to-blue-500 font-semibold">{viewOn}</Link>
              </div>
              <div className="flex flex-row justify-center flex-wrap self-end gap-2">
                {skills.map((skill, index) => <Badge variant="default" key={index} shiny={true}>{skill}</Badge>)}
              </div>
            </motion.div>
          </SpotlightCard>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Project;