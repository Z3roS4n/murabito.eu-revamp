"use client"

import Image from "next/image";
import { HandMetal, Boxes, Home, Phone, Laptop, Moon, Sun } from 'lucide-react';
import NavbarFlow from "../ui/navbar-flow";
import { ThemeSwitch } from "../ui/theme-switch";

const Navbar = () => {

  const navLinks = [
    { text: "Home", icon: <Home />, url: '#home', submenu: false, submenus: {} },
    { text: "About", icon: <HandMetal />, url: '#aboutme', submenu: false, submenus: {} },
    { text: "Experiences", icon: <Boxes />, url: '#experiences', submenu: false, submenus: {} },
    { text: "Contact", icon: <Phone />, url: '#home', submenu: false, submenus: {} },
  ]

  return (
    <div className="flex flex-col w-full fixed z-100">
      <NavbarFlow
        emblem={<div>ANTONIO</div>}
        links={navLinks}
        rightComponent={
          <ThemeSwitch
            modes={["light", "dark"]}
            icons={[
              <Sun key="sun-icon" size={16} />,
              <Moon key="moon-icon" size={16} />,
            ]}
            showInactiveIcons="all"
          />
        }
      />

    </div>

  )
 
  /*return (
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
  );*/
}

export default Navbar;