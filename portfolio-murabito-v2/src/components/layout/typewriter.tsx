"use client"

import Typeanimation from "../ui/typeanimation";

interface TypeWriter {
  words: Array<string>;
  className?: string;
  color?: string;
}

const TypeWriter = ({words, className, color}: TypeWriter) => {
  const typeColor: string = color ? color : ''; 
  const customClass: string = className ? className + " " + color : `text-4xl md:text-5xl lg:text-7xl font-extrabold ${typeColor}`;
  return (
    <Typeanimation
      words={words}
      typingSpeed="slow"
      deletingSpeed="slow"
      gradientFrom="red-500"
      gradientTo="yellow-500"
      pauseDuration={2000}
      className={customClass}
    />
  )
}

export default TypeWriter;