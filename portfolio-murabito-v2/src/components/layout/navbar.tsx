"use client"

import Image from "next/image";
import { HandMetal, Boxes, Home, Phone, Laptop, Moon, Sun } from 'lucide-react';
import NavbarFlow from "../ui/navbar-flow";
import { ThemeSwitch } from "../ui/theme-switch";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar")
  const navLinks = [
    { text: t("home"), icon: <Home />, url: '/', submenu: false, submenus: {} },
    { text: t("about"), icon: <HandMetal />, url: '#aboutme', submenu: false, submenus: {} },
    { text: t("experiences"), icon: <Boxes />, url: '#experiences', submenu: false, submenus: {} },
    { text: t("projects"), icon: <Phone />, url: '#projects', submenu: false, submenus: {} },
  ]

  const theme = useTheme();

  return (
    <div className="flex flex-col w-full fixed z-100">
      <NavbarFlow
        emblem={<Image src={theme.theme == "dark" ? "/logo_White.svg" : "/logo_dark.svg"} width={35} height={30} alt="logo"></Image>}
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
}

export default Navbar;