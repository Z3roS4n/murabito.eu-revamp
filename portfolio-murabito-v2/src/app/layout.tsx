import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} antialiased`}>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="transition-all duration-100 min-h-screen bg-primary-foreground">
            <div className="w-full flex justify-center">
              <Navbar />
            </div>
            {children}
            <div>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
