"use client"

import { IPostBody } from "@/app/api/contact/route";
import { useMutation, useQuery } from "@tanstack/react-query";
import { use, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { AnimatedButton } from "../ui/animated-button";
import { Input } from "../ui/input";
import { motion, useInView } from "framer-motion";
import { SpotlightCard } from "../ui/spotlightcard";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface IContact {
  direction: string;
}

const Contact = ({ direction }: IContact) => {  
  const t = useTranslations("homepage.contact");

  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const resetForm = () => {
    setEmail("");
    setSubject("");
    setDescription("");
  }

  const verifyForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !!(emailRegex.test(email) && subject.length >= 15 && description.length >= 150);
  }

  const sendMessage = useMutation({
    mutationFn: async ({ email, subject, description }: IPostBody) => {
      const body: IPostBody = {
        email,
        subject,
        description,
      };

      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Errore nell'invio del messaggio");
      }

      return res.json(); // torna il JSON dal tuo NextResponse
    },
    onSuccess: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });

  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  const [toggle, setToggle] = useState<boolean>(false);

  const animationDirection = direction == 'left' ? -40 : 40;

  return (
    <>
      <motion.section
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={cn("text-center mb-4 sm:mb-4 lg:mb-6")}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: animationDirection }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex lg:flex-row flex-col gap-3 w-full">
            <SpotlightCard className="dark:bg-black h-full lg:w-6/7" spotlightColor="34, 150, 238">
              <div className="w-full h-full flex flex-col justify-center items-center  gap-2">
                <h3 className="text-xl font-semibold mb-0">{t("form.title")}</h3>
                <p className="bg-clip-text text-transparent bg-gradient-to-l dark:from-blue-300 from-blue-700 to-blue-500 font-semibold">I will contact you back as soon as possible</p>
                <form className="lg:w-4/5">
                  <div className="flex flex-col space-y-4 w-1/1">
                    <div className="flex flex-col space-y-1.5 w-1/1">
                      <label htmlFor="subject" className="text-sm font-light opacity-80">{t("form.subject")}</label>
                      <Input onChange={(e) => setSubject(e.target.value)}/>
                      <label htmlFor="email" className="text-sm font-light opacity-80">{t("form.email")}</label>
                      <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
                      <label htmlFor="email" className="text-sm font-light opacity-80">{t("form.description")}</label>
                      <Textarea className="max-h-30 break-all" minLength={150} maxLength={1000} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Button
                        disabled={!verifyForm()}
                        onClick={() => sendMessage.mutate({ email: email ?? "", subject: subject ?? "", description: description ?? "" })}>{t("form.send")}</Button>
                    </div>
                  </div>
                </form>
              </div>
            </SpotlightCard>
            <div className="flex lg:flex-col flex-row lg:w-1/7 w-full gap-3">
              <SpotlightCard className="dark:bg-black h-full not-lg:w-1/3" spotlightColor="34, 150, 238">
                <Link href={"https://instagram.com/_antonio.jar"} className="w-full h-full flex flex-col justify-center items-center gap-2">
                  <Instagram/>
                </Link>
              </SpotlightCard>
              <SpotlightCard className="dark:bg-black h-full not-lg:w-1/3" spotlightColor="34, 150, 238">
                <Link href={"https://github.com/Z3roS4n"} className="w-full h-full flex flex-col justify-center items-center  gap-2">
                  <Github/>
                </Link>
              </SpotlightCard>
              <SpotlightCard className="dark:bg-black h-full not-lg:w-1/3" spotlightColor="34, 150, 238">
                <Link href={"https://www.linkedin.com/in/z3ros4n/"} className="w-full h-full flex flex-col justify-center items-center gap-2">
                  <Linkedin/>
                </Link>
              </SpotlightCard>
            </div>

          </div>

        </motion.div>
      </motion.section>
    </>
  )
}

export default Contact;