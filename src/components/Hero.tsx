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
  ShieldAlert,
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
  role: "Software Engineer",
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
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/20 blur-[150px] -z-10 rounded-full animate-aurora pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Core CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Availability Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-lg shadow-emerald-950/40 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Immediate Hire (0–15 Days)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 text-xs text-slate-300 backdrop-blur-xl">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Noida / NCR / Bangalore / Remote</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-cyan-400"></span>
                <span>Software Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-indigo-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">
                React Native & Full-Stack MERN Developer
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              1+ year of production experience engineering high-performance mobile and web apps with{" "}
              <strong className="text-cyan-300 font-semibold">React Native</strong>,{" "}
              <strong className="text-blue-300 font-semibold">Next.js</strong>, and{" "}
              <strong className="text-indigo-300 font-semibold">Node.js</strong>. Built live e-commerce apps serving 150+ listings, creator of ScamGuard AI security suite, and solved{" "}
              <strong className="text-emerald-300 font-semibold">150+ DSA problems</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <FileText className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>View & Print Resume</span>
              </button>

              <a
                href="#projects"
                className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/50 text-slate-200 hover:text-white font-bold text-sm shadow-lg backdrop-blur-xl transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/916395748319?text=Hi%20Preeti,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 hover:text-white font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/20 backdrop-blur-xl"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Fast Connect & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-blue-500/30 text-slate-200 hover:text-blue-400 transition-all shadow-sm backdrop-blur-xl"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-bold">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm backdrop-blur-xl"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-amber-500/30 text-slate-300 hover:text-amber-400 transition-all shadow-sm backdrop-blur-xl"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode (150+)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-emerald-400 transition-all shadow-sm backdrop-blur-xl"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? "Copied!" : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic Code Card */}
          <div className="lg:col-span-5 relative">
            {/* Floating 3D-Styled Glass Badges */}
            <div className="hidden sm:flex absolute -top-4 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold shadow-xl shadow-cyan-950/50 backdrop-blur-xl animate-float-slow">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>⚛️ React Native • MERN Stack</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -left-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 text-[11px] font-bold shadow-xl shadow-amber-950/50 backdrop-blur-xl animate-float-reverse">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>🛡️ ScamGuard AI • Live Project</span>
            </div>

            {/* Glowing Gradient Border Wrap */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition duration-700 -z-10 animate-pulse-glow"></div>

              <div className="hero-terminal rounded-3xl bg-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
                {/* Window Title Bar */}
                <div className="px-5 py-3.5 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
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
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-colors flex items-center gap-1 backdrop-blur-md"
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
                    <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
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
                <div className="px-5 py-3 bg-slate-900/70 border-t border-white/10 flex items-center justify-between text-[11px] backdrop-blur-md">
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
        </div>

        {/* 4 Rich Glassmorphic Stat Strips */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => {
            const themes = [
              { grad: "from-cyan-400 via-teal-300 to-blue-400", border: "border-cyan-500/30 hover:border-cyan-400/60", corner: "bg-cyan-500/10", shadow: "hover:shadow-cyan-500/20" },
              { grad: "from-emerald-400 via-teal-300 to-cyan-400", border: "border-emerald-500/30 hover:border-emerald-400/60", corner: "bg-emerald-500/10", shadow: "hover:shadow-emerald-500/20" },
              { grad: "from-amber-400 via-orange-400 to-rose-400", border: "border-amber-500/30 hover:border-amber-400/60", corner: "bg-amber-500/10", shadow: "hover:shadow-amber-500/20" },
              { grad: "from-purple-400 via-pink-400 to-indigo-400", border: "border-purple-500/30 hover:border-purple-400/60", corner: "bg-purple-500/10", shadow: "hover:shadow-purple-500/20" },
            ];
            const theme = themes[idx % themes.length];

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-slate-900/70 border ${theme.border} shadow-xl backdrop-blur-2xl transition-all duration-300 relative group overflow-hidden ${theme.shadow} hover:-translate-y-1`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${theme.corner} rounded-bl-full transition-transform group-hover:scale-125 pointer-events-none`}></div>
                <div className={`text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.grad}`}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
