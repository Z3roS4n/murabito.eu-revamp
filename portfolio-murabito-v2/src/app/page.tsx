import ScrollDownButton from "@/components/ui/ScrollDownButton";
import VenomBeam from "@/components/ui/venom-beam";
import TypeWriter from '@/components/layout/TypeWriter';
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";
import CenteredImageCard from "@/components/ui/profilecard";
import PortfolioDevStats from "@/components/layout/PortfolioDevStats";
import AnimatedHeadline from "@/components/ui/animated-headline";
import Experience from "@/components/layout/Experience";
import Project from "@/components/layout/Project";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative overflow-hidden min-h-screen">
          <VenomBeam className="flex items-center justify-center flex-col px-4 w-full min-h-screen">
            <h2 className="bg-clip-text items-center text-transparent text-center bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-500 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans pb-1 md:pb-2 pt-2 md:pt-4 relative z-20 font-bold tracking-tight leading-tight">
              I turn ideas into
              <br/>
              <TypeWriter color="bg-gradient-to-l dark:from-blue-300 from-blue-700 to-blue-500" words={['websites', 'real products', 'experiences', 'digital solutions', 'useful tools', 'awesome designs']}/>
            </h2>
            <p className="max-w-xl mx-auto text-base lg:text-xl md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-1">
              I build modern, performant web applications where clean code meets thoughtful design.  
              From frontend to backend, I turn ideas into engaging digital experiences.
            </p>
          </VenomBeam>
          <div className="absolute inset-0 flex items-end justify-center">
            <h1 className="font-bold text-white drop-shadow-lg">
              <ScrollDownButton targetId="#aboutme"/>
            </h1>
          </div>
        </div>

        <div id="aboutme" className="relative lg:h-600 h-1200">
          <BackgroundMeteors>      
            <div className="flex flex-col justify-center items-center gap-20 mt-20">
              <div className="flex flex-col self-center items-center gap-7">
                <section className="flex lg:flex-row flex-col-reverse self-center-safe lg:w-5/10 w-7/10 lg:gap-15 gap-7">
                  <div className="self-start">
                    <CenteredImageCard
                      img="/Antonio_PostIG_SQUARE.jpg"
                      name="Antonio Murabito"
                      bio="Web developer & graphic designer. I blend code and creativity to craft engaging digital experiences and impactful visuals."
                      skills={[
                        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                        { name: "TailwindCSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },                        
                        { name: "Photoshop", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
                        { name: "Illustrator", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" },
                        { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
                      ]}
                      githubUrl="https://github.com/z3ros4n"
                      instagramUrl="https://instagram.com/_antonio.jar"
                      position="Full Stack Web Developer"
                    />
                  </div>

                  <div className="flex flex-col self-start">
                    <h1 className="head-text">
                      I’m Antonio Murabito
                      <br />
                      your <TypeWriter className="font-bold" color="text-blue-500" words={['Web Developer', 'Graphic Designer']}/>
                    </h1>

                    <AnimatedTextGenerate
                      className="text-center self-start"
                      textClassName="font-normal text-center"
                      text={"I thrive where code meets creativity, transforming ideas into visuals and interactive experiences that communicate more effectively than words alone. From sleek interfaces to bold branding, I make your digital presence memorable, meaningful, and unmistakably yours."}
                      blurEffect
                      speed={0.00001}
                      highlightWords={["creativity", "experiences", "memorable"]}
                      highlightClassName="text-blue-500 dark:text-blue-500 font-bold"
                    />
                  </div>
                </section>
                <section>
                  <PortfolioDevStats/>
                </section>
                <section id="experiences" className="flex flex-col self-center-safe lg:w-5/10 w-7/10">
                  <AnimatedHeadline
                    title="Personal and work experiences"
                    className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0"
                  />
                  <div className="flex flex-col gap-2">
                    <Experience 
                      title="Full-Stack Developer"
                      subtitle="Freelancer at BDGROUPSRL 2025 - CURRENT"
                      description="Currently working as a freelance Web Developer for BDGROUPSRL, focusing on API server optimization and authentication system development. My role involves improving server performance, implementing secure authentication protocols, and optimizing database queries to enhance overall system efficiency. I work with modern technologies to ensure scalable and secure web solutions for enterprise-level applications."
                      skills={['Next.js', 'ExpressJS', 'TypeScript', 'MySQL', 'JWT', 'TailwindCSS', 'Python']}
                      direction="left"
                    />
                    <Experience 
                      title="Graphic Designer & SMM"
                      subtitle="Self-Employed at Socialnet 2025 - CURRENT"
                      description="In 2025, I co-founded Socialnet, a Social Media Management & Marketing agency. We offer social media management services, creation of engaging visual content, and development of communication strategies for businesses and professionals. Our goal is to improve our clients' digital image, increasing their visibility and online engagement."
                      skills={['Photoshop', 'Illustrator', 'Figma', 'Copywriting', 'Planning']}
                      direction="right"

                    />                  
                    <Experience 
                      title="Web Developer"
                      subtitle="Freelancer at BDGROUPSRL 2025 - CURRENT"
                      description="Since 2021, I've been working as a freelance Web Developer, specializing in the design and development of modern, dynamic, and customized websites for businesses and individuals. My goal is to provide functional, user-friendly, and SEO-optimized solutions to ensure maximum online visibility for my clients. I use modern technologies to create functional, responsive, and user experience-optimized platforms, including full-stack development, database optimization, and performance tuning. I also collaborate with companies like Senes Cooperativa Sociale!"
                      skills={['Fastify', 'Supabase', 'PrismaORM', 'BetterAuth', 'Next.js', 'TailwindCSS', 'React']}
                      direction="left"

                    />
                  </div>

                </section>
                <section id="projects" className="flex flex-col self-center-safe lg:w-5/10 w-7/10">
                  <AnimatedHeadline
                    title="Some of my coding projects"
                    className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0"
                  />
                  <div className="flex lg:flex-row flex-col gap-2">
                    <Project 
                      image="msforum.png"
                      title="MSForum"
                      subtitle="Fully functional forum made with Next.js, Tailwind, PrismaORM & Clerk."
                      skills={['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'Clerk', 'PrismaORM']}
                      link="https://github.com/Z3roS4n/NextJS-Forum-Website"
                      direction="left"
                      
                    />
                    <Project 
                      image="converzia.png"
                      title="ConverzIA"
                      subtitle="Vanilla HTML/CSS/JS which interfaces with a TS Back-End Fastify server and OpenAI APIs."
                      skills={['HTML/CSS', 'TypeScript', 'Fastify', 'OpenAI', 'REST']}
                      link="https://github.com/Z3roS4n/ConverzIA.net"
                      direction="right"

                    />
                    <Project 
                      image="webapis.png"
                      title="Web Utilities"
                      subtitle="Multi-service API architecture designed to provide various utilities for developers. Still ongoing..."
                      skills={['Fastify', 'TypeScript', 'Supabase', 'REST', 'PrismaORM']}
                      link="https://github.com/Z3roS4n/Development-Web-APIs"
                      direction="left"

                    />
                  </div>

                </section>
              </div>
            </div>
          </BackgroundMeteors>  
        </div>
      </main>
    </div>
  );
}
