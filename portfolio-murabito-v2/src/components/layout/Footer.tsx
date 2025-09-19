import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative overflow-hidden p-20">
        <div className="flex flex-col w-1/1 justify-center text-center">
            <p>P.IVA: 07344720821</p>
            <p className="flex flex-row gap-2">Built with <Heart/> by Antonio Murabito</p>
        </div>
    </div>
  );
}

export default Footer;