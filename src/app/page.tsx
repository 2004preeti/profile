"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { SkillsDsa } from "@/components/SkillsDsa";
import { EducationCertifications } from "@/components/EducationCertifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main
      className={`min-h-screen relative selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-300 ${
        theme === "light"
          ? "light-theme bg-[#f8fafc] text-slate-900 selection:text-cyan-900"
          : "bg-[#050716] text-slate-100 selection:text-cyan-200"
      }`}
    >
      {/* Background Subtle Cyber Grid & Dot Matrix */}
      <div className="fixed inset-0 bg-cyber-pattern pointer-events-none opacity-40 z-0"></div>
      <div className="fixed inset-0 bg-dot-matrix pointer-events-none opacity-15 z-0"></div>

      {/* Floating Glowing Aurora Background Spots */}
      <div className="fixed -top-40 left-1/4 w-[750px] h-[750px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-indigo-600/20 blur-[170px] pointer-events-none rounded-full z-0 animate-pulse-glow"></div>
      <div className="fixed top-1/3 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-purple-600/20 via-fuchsia-600/15 to-indigo-600/15 blur-[180px] pointer-events-none rounded-full z-0 animate-aurora"></div>
      <div className="fixed top-2/3 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-teal-600/15 to-cyan-500/15 blur-[170px] pointer-events-none rounded-full z-0"></div>
      <div className="fixed bottom-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/15 via-blue-500/12 to-violet-600/15 blur-[160px] pointer-events-none rounded-full z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <div className="flex-1">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <Experience />
          <Projects />
          <SkillsDsa />
          <EducationCertifications />
          <Contact />
        </div>

        <Footer />

        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </main>
  );
}
