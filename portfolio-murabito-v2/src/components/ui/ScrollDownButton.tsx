import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface ScrollDownButton {
  targetId: string;
}

const ScrollDownButton = ({ targetId }: ScrollDownButton) => {
  return (
<Link
  href={targetId}
  className="relative block text-8xl mb-10 animate-wiggle scale-200 hover:mb-7 transition-all duration-300"
>
  {/* Ombra blu sfumata */}
  <span className="absolute inset-0 -z-10 rounded-full"></span>
  <ChevronDown className="text-primary" />
</Link>

  );
}

export default ScrollDownButton;