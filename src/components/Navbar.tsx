"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  theme = "light",
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills & DSA", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isLight
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
            : "bg-[#06091e]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity: Preeti Pal is ALWAYS explicitly visible */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
            <div
              className={`w-full h-full rounded-[9px] flex items-center justify-center font-extrabold text-sm ${
                isLight ? "bg-white text-slate-900" : "bg-[#080c24] text-cyan-300"
              }`}
            >
              PP
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-base sm:text-lg font-black tracking-tight"
              style={{ color: isLight ? "#0f172a" : "#ffffff" }}
            >
              {PERSONAL_INFO.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className={`desktop-nav items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-xl border shadow-sm ${
            isLight
              ? "bg-white/90 border-slate-200"
              : "bg-slate-900/90 border-slate-800"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-colors ${
                isLight
                  ? "text-slate-700 hover:text-cyan-700 hover:bg-slate-100"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="desktop-actions items-center gap-2">
          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border active:scale-95 shadow-sm ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800"
              }`}
              title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 shadow-sm ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700"
                : "bg-slate-900 border-slate-800 text-slate-200 hover:border-cyan-500/50"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle Icons (Shown ONLY on mobile screens) */}
        <div className="mobile-toggle items-center gap-2">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800"
                  : "bg-slate-900 border-slate-800 text-slate-200"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              isLight
                ? "bg-white border-slate-300 text-slate-800"
                : "bg-slate-900 border-slate-800 text-slate-200"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Only visible on small screens when open) */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-3 border-b shadow-xl ${
            isLight
              ? "bg-white/98 border-slate-200"
              : "bg-[#0a0d20]/98 border-slate-800"
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isLight
                    ? "text-slate-800 hover:bg-slate-100"
                    : "text-slate-200 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border ${
                isLight
                  ? "bg-slate-50 border-slate-200 text-slate-800"
                  : "bg-slate-800 border-slate-700 text-white"
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-600" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
            >
              <Mail className="w-4 h-4" />
              <span>Contact / Hire</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
