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
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

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
              {children}
            </ThemeProvider>
          </CookieProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
