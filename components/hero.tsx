"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, ArrowRight, Code } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Hero() {
  const { t } = useLanguage();

  const texts = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const textToType = texts[currentTextIndex];
    let charIndex = isTyping ? 0 : textToType.length;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= textToType.length) {
          setTypedText(textToType.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1500);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      const deletingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setTypedText(textToType.substring(0, charIndex));
          charIndex--;
        } else {
          clearInterval(deletingInterval);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setIsTyping(true);
        }
      }, 50);
      return () => clearInterval(deletingInterval);
    }
  }, [currentTextIndex, isTyping]);

  return (
    <section
      id="home"
      className="relative pt-16 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background Blur Bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gray-200/80 dark:bg-gray-800/80 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Code className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-700 dark:text-blue-300 font-medium text-sm sm:text-base">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Duong Lam</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Gia Kiet
                </motion.span>
              </h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t(
                  "Software engineering student with a background in web development, looking for an opportunity to contribute to real-world projects and grow as a developer."
                )}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/50 text-white transition-all duration-300 text-base sm:text-lg px-6 py-3 rounded-lg flex items-center group"
              >
                {t("Get In Touch")}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  href: "#contact",
                  icon: Mail,
                  color:
                    "bg-gray-200 dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-900",
                },
                {
                  href: "#contact",
                  icon: Phone,
                  color:
                    "bg-gray-200 dark:bg-gray-800 hover:bg-green-300 dark:hover:bg-green-900",
                },
                {
                  href: "https://github.com/dlgkiet",
                  icon: Github,
                  color:
                    "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700",
                },
                {
                  href: "https://www.linkedin.com/in/ki%E1%BB%87t-d%C6%B0%C6%A1ng-l%C3%A2m-gia-b05a0625b/",
                  icon: Linkedin,
                  color:
                    "bg-gray-200 dark:bg-gray-800 hover:bg-blue-300 dark:hover:bg-blue-900",
                },
              ].map(({ href, icon: Icon, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-lg ${color} text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-blue-200/50 dark:bg-blue-800/50 shadow-md"></div>
              <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="K"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
