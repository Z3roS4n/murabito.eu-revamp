"use client"

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CookieBanner from "@/components/layout/CookieBanner";
import { CookieProvider } from "@/context/CookieContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"]
})

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <QueryClientProvider client={queryClient}>
          <CookieProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="transition-all duration-100 min-h-screen bg-primary-foreground">
                <div className="w-full flex justify-center">
                  <Navbar />
                </div>
                {children}
                {/*<div>
                  <Footer/>
                </div>*/}
              </div>
            </ThemeProvider>
          </CookieProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
