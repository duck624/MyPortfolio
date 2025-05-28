"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-provider";
import { Briefcase, Building2 } from "lucide-react";

interface Company {
  id: string;
  name: string;
  logo: string;
  link: string;
  description: string;
}

const companies: Company[] = [
  {
    id: "1",
    name: "Grant Thornton",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Grant_Thornton_logo.png",
    link: "https://www.grantthornton.com.vn/",
    description: "",
  },
];

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần mô tả */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 transition-colors duration-500"
          >
            <div className="text-center mb-20 space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm shadow-lg">
                <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-blue-700 dark:text-blue-300 font-semibold">
                  Professional Journey
                </span>
                <Briefcase className="h-4 w-4 text-purple-600 dark:text-purple-400 ml-3 animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                {t("Work Experience")}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {t("Professional experience and contributions")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid logo */}
        <div className="relative">
          {/* Gradient overlays */}
          
          {/* Logo grid */}
          <div /* className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center overflow-hidden" */
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
          >
            {companies.map((company, index) => (
              <motion.a
                key={company.id}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "flex items-center justify-center group",
                  index % 3 === 0 ? "col-span-2" : "col-span-1"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full h-12 md:h-16"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition duration-300"
                  />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
