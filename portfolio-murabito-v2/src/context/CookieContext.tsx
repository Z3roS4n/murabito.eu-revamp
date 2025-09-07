"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getCookie, setCookie } from "@/lib/cookie";
import CookieBanner from "@/components/layout/CookieBanner";

export type CookieContextType = {
  consent: "true" | "false" | null;
  acceptCookies: () => void;
  rejectCookies: () => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<"true" | "false" | null>(null);

  useEffect(() => {
    const cookie = getCookie("cookieConsent") as "true" | "false" | null;
    if (cookie) {
      setConsent(cookie);
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

  return (
    <CookieContext.Provider value={{ consent, acceptCookies, rejectCookies }}>
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
