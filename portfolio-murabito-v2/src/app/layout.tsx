import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"]
})

export const metadata: Metadata = {
  title: "Antonio Murabito - Portfolio",
  description: "Second version of my personal portfolio, made in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased overflow-x-hidden`}>
        <div className="w-full flex justify-center"><Navbar/></div>
        
        {children}
      </body>
    </html>
  );
}
