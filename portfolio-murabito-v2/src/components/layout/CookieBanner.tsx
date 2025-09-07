"use client"
import { SpotlightCard } from "../ui/spotlightcard"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { setCookie, getCookie } from "@/lib/cookie";
import { Button } from "../ui/button";
import { useCookie } from "@/context/CookieContext";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const animationDirection = 40;

  const cookieConsent = useCookie();
  const [showBanner, setShowBanner] = useState<boolean>(cookieConsent.consent === undefined);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false
  });

  const acceptCookies = () => {
    setCookie("cookieConsent", "true", 365);
    setShowBanner(false);
  };

  const declineCookies = () => {
    setCookie("cookieConsent", "false", 365);
    setShowBanner(false);
  };

  const savePreferences = () => {
    setCookie("cookiePreferences", JSON.stringify(preferences), 365);
    setShowBanner(false);
    setShowPreferences(false);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed z-100 bottom-0 right-0 lg:w-1/4 w-full flex justify-end"
    >
      <motion.div
        className={cn("text-center m-4")}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: animationDirection }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {showBanner && !showPreferences ? (
          <SpotlightCard className="dark:bg-black h-full" spotlightColor="34, 150, 238">
            <div className="flex flex-col gap-3 p-4">
              <h3 className="text-lg font-semibold">Questo sito utilizza i cookie</h3>
              <p className="text-sm text-muted-foreground">
                Utilizziamo cookie propri e di terze parti per migliorare la tua esperienza, analizzare il traffico e personalizzare i contenuti pubblicitari.
                Puoi accettare tutti i cookie o gestire le tue preferenze.
              </p>
              <div className="flex w-full gap-2">
                <Button className="w-1/2" onClick={() => setShowPreferences(true)}>
                  Preferenze
                </Button>
                <Button className="w-1/2" onClick={acceptCookies}>
                  Accetto
                </Button>
              </div>
            </div>
          </SpotlightCard>
        ) : showBanner && showPreferences ? (
          <SpotlightCard className="dark:bg-black h-full w-full" spotlightColor="34, 150, 238">
            <div className="flex flex-col gap-3 p-4 relative">
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowPreferences(false)}
              >
                <X />
              </button>
              <h3 className="text-lg font-semibold">Preferenze dei cookie</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <label className="flex items-center justify-between">
                  Cookie Analitici
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  />
                </label>
                <label className="flex items-center justify-between">
                  Cookie di Marketing
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  />
                </label>
              </div>
              <div className="flex w-full gap-2 mt-2">
                <Button className="w-1/2" onClick={() => setShowPreferences(false)}>
                  Annulla
                </Button>
                <Button className="w-1/2" onClick={savePreferences}>
                  Salva preferenze
                </Button>
              </div>
            </div>
          </SpotlightCard>
        ) : (
          <SpotlightCard
            className="dark:bg-black h-full"
            spotlightColor="34, 150, 238"
            onClick={() => setShowBanner(true)}
          >
            <Cookie />
          </SpotlightCard>
        )}
      </motion.div>
    </motion.section>
  );
};

export default CookieBanner;
