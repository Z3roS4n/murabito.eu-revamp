import ParticleBackground from "@/components/ui/ParticleBackground";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className=" relative w-full overflow-hidden">

          <ParticleBackground/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="m-4 text-white drop-shadow-lg heading-text-hero">
              Design your future!
            </h1>
          </div>
          <div className="absolute inset-0 flex items-end justify-center">
            <h1 className="font-bold text-white drop-shadow-lg">
              <ScrollDownButton targetId="#emptyshit"/>
            </h1>
          </div>
        </div>

        <div className="h-200 flex flex-col items-center justify-center">
          <p id="emptyshit">empty shit</p>
        </div>
      </main>
    </div>
  );
}
