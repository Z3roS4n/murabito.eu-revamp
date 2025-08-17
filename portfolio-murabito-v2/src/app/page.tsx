import ParticleBackground from "@/components/ui/ParticleBackground";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import SocialNetworks from "@/components/ui/SocialNetworks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full overflow-hidden">
          <ParticleBackground/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="m-4 text-white drop-shadow-lg heading-text-hero">
              <p>Websites that work.</p>
              <p>Designs that stand out.</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-end justify-center">
            <h1 className="font-bold text-white drop-shadow-lg">
              <ScrollDownButton targetId="#aboutme"/>
            </h1>
          </div>
        </div>

        <div className="h-200 flex flex-col mt-15 gap-20">
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

              <div className="flex flex-col gap-4">
                <h1 className="head-text">I’m Antonio Murabito — Web Developer & Graphic Designer.</h1>
                <p className="text-2xl">I thrive where code meets creativity, transforming ideas into visuals and interactive experiences that communicate more effectively than words alone. From sleek interfaces to bold branding, I make your digital presence memorable, meaningful, and unmistakably yours.</p>
              </div>
            </section>
            <section className="flex lg:flex-row flex-col lg:self-start items-center">
              <SocialNetworks/>
            </section>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center gap-7">
            <section id="aboutme" className="flex lg:flex-row flex-col lg:w-5/10 w-7/10 lg:gap-15 gap-7">

              <div className="flex flex-col gap-4">
                <h1 className="head-text-center">What I do</h1>
                <p className="text-2xl">I thrive where code meets creativity, transforming ideas into visuals and interactive experiences that communicate more effectively than words alone. From sleek interfaces to bold branding, I make your digital presence memorable, meaningful, and unmistakably yours.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
