"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Certifications
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Education Card */}
          <div className="md:col-span-6 p-7 rounded-3xl bg-slate-900/70 border border-purple-500/30 shadow-2xl backdrop-blur-2xl space-y-4 relative overflow-hidden group hover:border-purple-400/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-bl-full blur-xl pointer-events-none group-hover:scale-125 transition-transform"></div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 backdrop-blur-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-xs font-semibold text-purple-300">
                  {EDUCATION.field}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-200">
                {EDUCATION.institution}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {EDUCATION.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {EDUCATION.location}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <p>• Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP</p>
              <p>• Active participant in technical competitions and algorithmic problem-solving</p>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-2xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      {cert.issuer}
                    </span>
                    <Award className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
