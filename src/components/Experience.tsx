"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/15 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Experience
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Production software engineering across high-growth startups and live consumer applications.
          </p>
        </div>

        {/* Timeline List with Rich Glassmorphism */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/70 border ${
                  isFirst
                    ? "border-cyan-500/30 hover:border-cyan-400/60 shadow-cyan-950/30"
                    : "border-indigo-500/30 hover:border-indigo-400/60 shadow-indigo-950/30"
                } shadow-2xl backdrop-blur-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1`}
              >
                {/* Subtle ambient corner gradient inside card */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 ${
                    isFirst ? "bg-cyan-500/15" : "bg-indigo-500/15"
                  } rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {exp.projectHighlight}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 mt-0.5">
                      <Building className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col sm:items-end gap-1 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 font-semibold text-slate-200 backdrop-blur-md">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Glass Tech Stack Chips */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-950/70 text-slate-300 border border-white/10 backdrop-blur-md shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
