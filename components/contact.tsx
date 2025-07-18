"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("mgvzvnwr");

  // Function to handle card click
  const handleCardClick = (href: string) => {
    if (href !== "#") {
      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        window.location.href = href;
      } else {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("Email"),
      value: "aiduc0602@gmail.com",
      href: "mailto:aiduc0602@gmail.com",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: t("Phone"),
      value: "(+84) 943-312-704",
      href: "tel:+84943312704",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/duck624",
      href: "https://github.com/duck624",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/duck",
      href: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-b%C3%B9i-157741198/",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      label: t("Location"),
      value: t("Ho Chi Minh City, Vietnam"),
      href: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6"
          variants={headerVariants}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 text-sm sm:text-base font-medium">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("Get In Touch")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t(
              "Discuss opportunities and collaborate on exciting projects"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t("Contact Information")}
            </h3>

            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              {contactInfo.map(
                ({ icon: Icon, label, value, href, gradient }, index) => (
                  <motion.div
                    key={label}
                    className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 ${href !== "#" ? "cursor-pointer" : ""
                      }`}
                    variants={itemVariants}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    onClick={() => handleCardClick(href)}
                  >
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 6,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                        {label}
                      </h4>
                      <span className="text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base break-all">
                        {value}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Social Media */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
                {t("Follow Me")}
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    href: "https://github.com/duck624",
                    icon: Github,
                    gradient: "from-gray-700 to-gray-900",
                  },
                  {
                    href: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-b%C3%B9i-157741198/",
                    icon: Linkedin,
                    gradient: "from-blue-600 to-blue-800",
                  },
                ].map(({ href, icon: Icon, gradient }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={formVariants}>
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-800 dark:to-slate-900/50 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-slate-800/50 dark:to-transparent"></div>
              <CardContent className="relative p-6 sm:p-8 h-full">
                {state.succeeded ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full text-center space-y-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("Message Sent!")}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {t("Thank you for your message. I'll get back to you soon!")}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                      {t("Send Message")}
                    </h3>

                    <motion.form
                      className="space-y-4 sm:space-y-6"
                      onSubmit={handleSubmit}
                      variants={containerVariants}
                    >
                      <motion.div
                        className="grid sm:grid-cols-2 gap-4"
                        variants={itemVariants}
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {t("First Name")}
                          </label>
                          <Input
                            name="firstName"
                            placeholder="Your first name"
                            className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 h-10 sm:h-11"
                            required
                          />
                          <ValidationError
                            prefix="First Name"
                            field="firstName"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {t("Last Name")}
                          </label>
                          <Input
                            name="lastName"
                            placeholder="Your last name"
                            className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 h-10 sm:h-11"
                            required
                          />
                          <ValidationError
                            prefix="Last Name"
                            field="lastName"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {t("Email")}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 h-10 sm:h-11"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {t("Subject")}
                        </label>
                        <Input
                          name="subject"
                          placeholder="What is this about?"
                          className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 h-10 sm:h-11"
                          required
                        />
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" variants={itemVariants}>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {t("Message")}
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell me about your project or opportunity..."
                          rows={4}
                          className="border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                          required
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                          type="submit"
                          disabled={state.submitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 h-11 sm:h-12 text-sm sm:text-base font-medium"
                        >
                          {state.submitting ? (
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          ) : (
                            <Send className="h-4 w-4 mr-2" />
                          )}
                          {state.submitting ? t("Sending...") : t("Send Message")}
                        </Button>
                      </motion.div>
                    </motion.form>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}