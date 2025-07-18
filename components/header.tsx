"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t("About") },
    { href: "#education", label: t("Education") },
    { href: "#experience", label: t("Experience") },
    { href: "#projects", label: t("Projects") },
    { href: "#skills", label: t("Skills") },
    { href: "#contact", label: t("Contact") },
  ];

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/docs/BuiAiDuc_CV.pdf";
      link.download = "BuiAiDuc_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert(t("Failed to download CV. Please try again later."));
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.1, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled
        ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-b border-white/20 dark:border-slate-700/30 shadow-2xl shadow-blue-500/10"
        : "bg-transparent"
        }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 group">
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <img src="https://byvn.net/XrTQ" alt="logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-500">
                buiaiduc
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="relative text-slate-700 dark:text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-500 text-sm font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              onClick={handleDownload}
              className="hidden md:flex bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 group text-sm sm:text-base px-3 sm:px-4"
            >
              <Download className="mr-1 sm:mr-2 h-4 w-4 group-hover:animate-bounce" />
              {t("Download CV")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4 pb-4 border-t border-white/10 dark:border-slate-700/30"
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col space-y-3 pt-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <Button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 group text-sm px-4"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              {t("Download CV")}
            </Button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}