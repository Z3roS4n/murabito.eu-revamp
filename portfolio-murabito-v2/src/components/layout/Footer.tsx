import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden p-20">
        <div className="flex flex-col w-1/1 justify-center text-center">
            <p>P.IVA/VAT: 07344720821</p>
            <p className="flex flex-row gap-2 self-center text-center">Built with <Heart/> by Antonio Murabito</p>
            <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
    </div>
  );
}

export default Footer;