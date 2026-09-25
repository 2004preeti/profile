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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
              DSA Mastery
            </span>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
            Proven foundation in frontend & mobile architecture paired with 150+ algorithmic problem solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categorized Technical Skills */}
          <div className="lg:col-span-7 space-y-4">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const icons = [
                <Code2 key="0" className="w-4 h-4 text-cyan-500" />,
                <Layers key="1" className="w-4 h-4 text-blue-500" />,
                <Database key="2" className="w-4 h-4 text-emerald-500" />,
                <Wrench key="3" className="w-4 h-4 text-purple-500" />,
              ];

              return (
                <div
                  key={cat.title}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {icons[idx % icons.length]}
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
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
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white">
                      150+ DSA Solved
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      LeetCode, Coding Ninjas & CodeChef
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Topics Solved
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {DSA_TOPICS.map((topic, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {topic.name.split(",")[0]}
                      </div>
                      <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
                        {topic.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coding Profile Links */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs">
                <a
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.links.codeninja}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 hover:bg-orange-100 dark:hover:bg-orange-900/40 border border-orange-300 dark:border-orange-500/30 text-orange-800 dark:text-orange-300 font-bold flex items-center justify-center gap-1.5 transition-colors"
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
