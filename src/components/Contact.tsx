"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Copy,
  Check,
  Linkedin,
  Github,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Opportunity for Preeti Pal from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Preeti,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/15 blur-[140px] -z-10 rounded-full"></div>
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-600/15 blur-[140px] -z-10 rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl">
            <Mail className="w-3.5 h-3.5" />
            <span>Fast Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Touch
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Actively interviewing for Software Engineer, React Native, and Full-Stack roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available to Join Immediately (0-15 Days)</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Preeti Pal</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Software Engineer
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-200 font-medium truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded text-slate-400 hover:text-white"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 text-slate-200 hover:border-cyan-500/40 transition-colors backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 text-slate-300 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Noida / NCR / Bangalore / Remote</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/916395748319"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 rounded-2xl bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md backdrop-blur-md"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-slate-300 hover:text-white transition-colors backdrop-blur-md"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean 3-Field Message Form */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-2xl">
            <h3 className="text-base font-bold text-white mb-4">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 backdrop-blur-md">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-300">
                  Opening Your Mail Client...
                </h4>
                <p className="text-xs text-slate-400">
                  Thank you! You can also email directly at {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / HR"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 backdrop-blur-md transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hr@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 backdrop-blur-md transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">
                    Message / Job Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="We'd like to invite you for an interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 backdrop-blur-md transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
