import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="">
          <Image className="h-200 object-cover" src={'/hero-section-img.jpg'} alt="Hero section image" width={2000} height={2000}></Image>
        </div>
      </main>
    </div>
  );
}
