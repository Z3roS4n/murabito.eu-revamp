"use client"

import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"]
})
import { Analytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/it') ? 'it' : 'en';

  return (
    <html lang={locale} suppressHydrationWarning className={`${montserrat.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://murabito.eu" />
        <meta name="geo.region" content="IT-PA" />
        <meta name="geo.placename" content="Palermo" />
        <meta name="geo.position" content="38.1157;13.3615" />
        <meta name="ICBM" content="38.1157, 13.3615" />
        <meta name="google-site-verification" content="jhF6j0WF4uRLmfMUlOg6u8bgx68LIU5PBHmGWmZRGTw" />
      </head>
      <body className="overflow-x-hidden">
        <Analytics/>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
