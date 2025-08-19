import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface ScrollDownButton {
  targetId: string;
}

const ScrollDownButton = ({ targetId }: ScrollDownButton) => {
  return (
    <Link className="block text-8xl scale-200 text-primary mb-10 shadow-primary hover:mb-7 hover-trans-long glass-noborder animate-wiggle" href={targetId}>
      <ChevronDown/>
    </Link>
  );
}

export default ScrollDownButton;