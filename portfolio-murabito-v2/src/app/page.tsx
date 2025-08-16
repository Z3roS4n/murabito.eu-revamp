import ScrollDownButton from "@/components/ui/ScrollDownButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className=" relative w-full overflow-hidden">
          <Image
            className="w-full h-200 lg:min-h-screen object-cover transform transition-transform duration-500 
               sm:scale-100 scale-125"
            src="/dark-bg.jpg"
            alt="Hero section image"
            width={2000}
            height={2000}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" text-white drop-shadow-lg heading-text-hero">
              Websites that work. <br /> Design that stands out.
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
