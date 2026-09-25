"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Trophy,
  ExternalLink,
  Layers,
  Database,
  Wrench,
} from "lucide-react";
import { SKILL_CATEGORIES, DSA_TOPICS, PERSONAL_INFO } from "@/data/portfolioData";

export const SkillsDsa: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              DSA Mastery
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Proven foundation in frontend & mobile architecture paired with 150+ algorithmic problem solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categorized Technical Skills */}
          <div className="lg:col-span-7 space-y-4">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const icons = [
                <Code2 key="0" className="w-4 h-4 text-cyan-400" />,
                <Layers key="1" className="w-4 h-4 text-blue-400" />,
                <Database key="2" className="w-4 h-4 text-emerald-400" />,
                <Wrench key="3" className="w-4 h-4 text-purple-400" />,
              ];

              return (
                <div
                  key={cat.title}
                  className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-2xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-white/10">
                    {icons[idx % icons.length]}
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/70 text-slate-200 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all backdrop-blur-md shadow-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: DSA & Problem Solving Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-amber-500/30 shadow-2xl backdrop-blur-2xl space-y-5 relative overflow-hidden group hover:border-amber-400/60 transition-all duration-300">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform"></div>

              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-950/30 backdrop-blur-md">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      150+ DSA Solved
                    </h3>
                    <p className="text-xs text-slate-400">
                      LeetCode, Coding Ninjas & CodeChef
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Topics Solved
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  {DSA_TOPICS.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="font-semibold text-slate-200 truncate">
                        {topic.name.split(",")[0]}
                      </div>
                      <div className="text-[11px] text-cyan-400 font-bold mt-0.5">
                        {topic.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coding Profile Links */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 text-amber-300 hover:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md backdrop-blur-md"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.links.codeninja}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-orange-950/40 hover:bg-orange-900/50 border border-orange-500/40 text-orange-300 hover:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md backdrop-blur-md"
                >
                  <span>Coding Ninjas</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
