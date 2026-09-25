"use client";

import React, { useState } from "react";
import {
  FileText,
  Github,
  Linkedin,
  Code2,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  Copy,
  Check,
  Terminal,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyConfig = () => {
    const configStr = `export const developer = {
  name: "Preeti Pal",
  role: "Software Engineer (SDE-1)",
  coreStack: ["React Native", "Next.js", "Node.js", "MongoDB"],
  flagship: "ScamGuard AI & Goldgini",
  dsaSolved: "150+ Problems",
  availability: "Immediate (0-15 Days)",
};`;
    navigator.clipboard.writeText(configStr);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Aurora Ambient Background Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/15 blur-[140px] -z-10 rounded-full animate-aurora pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Core CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Availability Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Immediate Hire (0–15 Days)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>Noida / NCR / Bangalore / Remote</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-[2px] bg-cyan-500"></span>
                <span>Software Engineer (SDE-1)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-300 dark:via-teal-200 dark:to-indigo-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                React Native & Full-Stack MERN Developer
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-medium">
              1+ year of production experience engineering high-performance mobile and web apps with{" "}
              <strong className="text-slate-950 dark:text-white font-extrabold">React Native</strong>,{" "}
              <strong className="text-slate-950 dark:text-white font-extrabold">Next.js</strong>, and{" "}
              <strong className="text-slate-950 dark:text-white font-extrabold">Node.js</strong>. Built live e-commerce apps serving 150+ listings, creator of ScamGuard AI security suite, and solved{" "}
              <strong className="text-cyan-700 dark:text-cyan-400 font-extrabold">150+ DSA problems</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>

              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-500" />
              </a>

              <a
                href="https://wa.me/916395748319?text=Hi%20Preeti,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20SDE%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Fast Connect & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-bold">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-amber-600 transition-colors shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode (150+)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? "Copied!" : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Code Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono text-slate-300 font-bold ml-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    developer.config.ts
                  </span>
                </div>

                <button
                  onClick={handleCopyConfig}
                  className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                  {codeCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{codeCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-1.5 select-text overflow-x-auto">
                <p className="text-slate-500">// Candidate Snapshot</p>
                <p>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-yellow-300">softwareEngineer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">name</span>:{" "}
                  <span className="text-emerald-300">&quot;Preeti Pal&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-emerald-300">&quot;Software Engineer (SDE-1)&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">experience</span>:{" "}
                  <span className="text-emerald-300">&quot;1+ Year Production&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">coreStack</span>: [
                  <span className="text-cyan-300">&quot;React Native&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;MongoDB&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">flagshipProducts</span>: [
                  <span className="text-amber-300">&quot;ScamGuard AI&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Goldgini&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">dsaSolved</span>:{" "}
                  <span className="text-orange-400">150</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">availability</span>:{" "}
                  <span className="text-emerald-400">&quot;Immediate (0-15 Days)&quot;</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready for Technical Interviews
                </span>
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Contact Preeti</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Stat Strips */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
