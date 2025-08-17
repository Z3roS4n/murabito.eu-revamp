"use client"

import Link from "next/link";
import { HandMetal, Boxes, Home, DiamondPlus, DiamondMinus, Phone } from 'lucide-react';
import { ReactNode, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  
  const navLinks: Record<string, ReactNode> = {
    'home': <><Home/>HOME</>,
    'aboutme': <><HandMetal/>ABOUT ME</>,
    'projects': <><Boxes/>PROJECTS</>,
    'contact': <><Phone/>CONTACTS</>
  }
 
  return (
    <div className="flex flex-col w-full fixed z-10">
      <div className="flex flex-row justify-center">
        <div className={`flex flex-row justify-between m-6 p-3 pl-6 pr-6 rounded-2xl glass not-lg:justify-end not-sm:hidden`}>
          <div className="flex flex-row justify-center gap-6 w-full">
            {Object.entries(navLinks).map(([key, value]) => (
              <Link className='link-primary text-sm' href={`#${key}`} key={key}>{value}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`flex flex-row p-3 rounded-2xl self-start m-4 glass sm:hidden`}>
        <div className="flex flex-col items-start self-end w-full">
          <button className='link-primary' onClick={() => setToggle(!toggle)}>{toggle ? <DiamondMinus/> : <DiamondPlus/>} DISCOVER</button>
          <div className={`flex flex-col items-start hover-trans-long ${!toggle ? 'opacity-0 pointer-events-none max-h-0' : 'opacity-100 max-h-96'}`}>
            { 
              <>
                {Object.entries(navLinks).map(([key, value]) => (
                  <Link className='link-primary mt-5 text-sm' href={`#${key}`} key={key}>{value}</Link>
                ))}
              </> 
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;