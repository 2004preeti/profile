"use client";

import React from "react";
import {
  Layers,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 blur-[150px] -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-600/15 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            High-impact production applications across Mobile, Web, and AI.
          </p>
        </div>

        {/* Projects Grid: 2x2 Clean Glassmorphic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-2xl bg-slate-900/70 backdrop-blur-2xl ${
                project.id === "scamguard"
                  ? "border border-amber-500/40 hover:border-amber-400/80 hover:shadow-amber-500/20"
                  : project.id === "goldgini"
                  ? "border border-cyan-500/40 hover:border-cyan-400/80 hover:shadow-cyan-500/20"
                  : "border border-white/10 hover:border-cyan-500/50 hover:shadow-cyan-500/10"
              } hover:-translate-y-1`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-0 right-0 z-20">
                  <div
                    className={`text-white text-[10px] font-black px-3.5 py-1 rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1 ${
                      project.id === "scamguard"
                        ? "bg-gradient-to-l from-amber-500 to-red-500"
                        : "bg-gradient-to-l from-cyan-500 to-blue-600"
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{project.id === "scamguard" ? "Featured #1" : "Production Live"}</span>
                  </div>
                </div>
              )}

              <div>
                {/* Thumbnail Image with Glass Overlay */}
                {project.image && (
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-slate-950 group-hover:border-cyan-500/40 transition-colors shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-transparent to-transparent opacity-60 pointer-events-none"></div>

                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-950/85 text-cyan-300 border border-white/15 backdrop-blur-md shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-blue-300 font-semibold mb-2">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Glass Tech Tags & Links */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-slate-950/80 text-slate-300 border border-white/10 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-2xl bg-gradient-to-r from-cyan-500/25 to-blue-500/25 hover:from-cyan-500/35 hover:to-blue-500/35 border border-cyan-500/50 text-cyan-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md group-hover:border-cyan-400 backdrop-blur-md"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
