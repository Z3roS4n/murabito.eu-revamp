"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getCookie, setCookie } from "@/lib/cookie";
import CookieBanner from "@/components/layout/CookieBanner";

export type CookieContextType = {
  consent: "true" | "false" | null;
  preferences: ICookiePreferences;
  acceptCookies: () => void;
  rejectCookies: () => void;
  setCookiePreferences: (newPreferences: ICookiePreferences) => void;
};

export interface ICookiePreferences {
  essentials: boolean;
  analytics: boolean;
  marketing: boolean;
  tracking: boolean;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<"true" | "false" | null>(null);
  const [preferences, setPreferences] = useState<ICookiePreferences>({
    essentials: true,
    analytics: false,
    marketing: false,
    tracking: false
  });

  useEffect(() => {
    const cookie = getCookie("cookieConsent") as "true" | "false" | null;
    if (cookie) {
      setConsent(cookie);
    }
    const cookiePref = getCookie("cookiePreferences") as string | null;
    if(cookiePref)
    {
      setPreferences(JSON.parse(cookiePref))
      console.log(cookiePref)
    }
      
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "true", 365);
    setConsent("true");
  };

  const rejectCookies = () => {
    setCookie("cookieConsent", "false", 365);
    setConsent("false");
  };

  const setCookiePreferences = (newPreferences: ICookiePreferences) => {
    setPreferences(newPreferences)
    setCookie("cookiePreferences", JSON.stringify(newPreferences), 365)
  }

  return (
    <CookieContext.Provider value={{ consent, preferences, acceptCookies, rejectCookies, setCookiePreferences }}>
      <CookieBanner></CookieBanner>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookie must be used within a CookieProvider");
  }
  return context;
};
