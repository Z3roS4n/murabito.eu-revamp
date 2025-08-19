import ScrollDownButton from "@/components/ui/ScrollDownButton";
import SocialNetworks from "@/components/ui/SocialNetworks";
import VenomBeam from "@/components/ui/venom-beam";
import Image from "next/image";
import TypeWriter from '@/components/layout/typewriter';
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full overflow-hidden">
          <VenomBeam className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl lg:text-7xl font-sans pb-1 md:pb-2 pt-2 md:pt-4 relative z-20 font-bold tracking-tight leading-tight">
              Code that <TypeWriter words={[' works fast,', ' you can rely on,', ' explains himself,']}/>
              <br />
              Design that speaks.
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-1">
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

        <div id="aboutme" className="relative lg:h-200 h-400">
          <BackgroundMeteors>      
            <div className="flex flex-col gap-20">
              <div className="flex lg:flex-row flex-col justify-center items-center gap-7">
                <section id="aboutme" className="flex lg:flex-row flex-col lg:w-5/10 w-7/10 lg:gap-15 gap-7">
                  <div className="w-full lg:w-1/4 flex-shrink-0">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <Image
                        className="object-top object-cover w-full h-full rounded-xl"
                        src="/Antonio_PostIG_SQUARE.jpg"
                        alt="profile-picture"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h1 className="head-text">
                      I’m Antonio Murabito
                      <br />
                      your <TypeWriter className="font-bold" color="text-primary" words={['Full Web Developer', 'Graphic Designer']}/>
                    </h1>

                    <AnimatedTextGenerate
                      className="text-center"
                      textClassName="font-normal text-center"
                      text={"I thrive where code meets creativity, transforming ideas into visuals and interactive experiences that communicate more effectively than words alone. From sleek interfaces to bold branding, I make your digital presence memorable, meaningful, and unmistakably yours."}
                      blurEffect
                      speed={0.3}
                      highlightWords={["creativity", "experiences", "memorable"]}
                      highlightClassName="text-red-500 dark:text-red-400 font-bold"
                      linkWords={["pressure", "night", "talent"]}
                      linkHrefs={["/", "/", "/"]}
                      linkClassNames={[
                        "underline decoration-pink-500 dark:decoration-pink-400 hover:decoration-pink-400 dark:hover:decoration-pink-300 transition",
                        "underline decoration-sky-500 dark:decoration-sky-400 hover:decoration-sky-400 dark:hover:decoration-sky-300 transition",
                        "underline decoration-blue-500 dark:decoration-blue-400 hover:decoration-blue-400 dark:hover:decoration-blue-300 transition",
                      ]}
                    />
                  </div>
                </section>
                <section className="flex lg:flex-row flex-col lg:self-start items-center">
                  <SocialNetworks/>
                </section>
              </div>
            </div>
          </BackgroundMeteors>  
        </div>


        <div className=" flex flex-col mt-15 gap-20">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-7">
            <section id="aboutme" className="flex lg:flex-row flex-col lg:w-5/10 w-7/10 lg:gap-15 gap-7">
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}
