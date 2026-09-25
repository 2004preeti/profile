"use client";

import React, { useState } from "react";
import {
  X,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  FileText,
  Sparkles,
  Download,
} from "lucide-react";
import {
  PERSONAL_INFO,
} from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<"ats" | "cyber">("ats");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumePlainText = `PREETI PAL
Ayodhya, Uttar Pradesh, India | Mobile: (+91) 6395748319
Email: preeti2072004@gmail.com
LinkedIn: https://www.linkedin.com/in/preeti-pal-bb262825b/
GitHub: https://github.com/preetipal2004
Coding Ninjas: https://www.naukri.com/code360/profile/preetipal

SUMMARY
React Native and MERN stack developer with experience building mobile apps for live products, including a multi-vendor e-commerce app and a cross-platform cybersecurity platform. Strong foundation in data structures and algorithms with 150+ problems solved.

EDUCATION
• ABES Engineering College Ghaziabad (Nov 2021 - 2025)
  Bachelor of Technology - Information Technology | Ghaziabad, India

EXPERIENCE
• Kushmanda Cosmetics Pvt Ltd (February 2026 - Present)
  Multi-Vendor E-commerce App Website (React Native + Next.js) (Goldgini) | Mohali, India
  - Built a shopping app with product list, details, variants, cart, wishlist, and reviews.
  - Connected app with backend APIs using Axios and used React Query to load data faster.
  - Made product variant feature with image slider and price change option.
  - Technology Used: React Native | Nest.js | Node.js | MySQL | Next.js

• Samra Infotech Pvt Ltd (June 2025 - January 2026)
  App Developer | Noida, India
  - Working on a live service-based mobile app for booking car services like AC repair, towing, and engine maintenance..
  - Handling the frontend development using React Native to build responsive and user-friendly mobile interfaces.
  - Collaborating with the backend team to integrate APIs built with Node.js and Express.js, ensuring smooth data flow and synchronization.
  - Technology Used: React Native | Express.js | Node.js | MongoDB

PROJECTS
• ScamGuard
  - Implemented 11 real-time fraud scanners for spam calls, KYC/SMS scams, phishing URLs, and WhatsApp scams.
  - Built a cybersecurity platform for Web and Mobile.
  - Added emergency tools including 1930 helpline dialing, incident playbooks, and crowd-sourced scam reporting.
  - Technology Used: Next.js | Node.js | React Native | React.js

• MotionPark
  - Final Year Project focused on developing a dual-function system integrating gesture-based slide control and automated car parking using computer vision.
  - Used Canny Edge Detection for parking slot detection from live video.
  - Simulated in smart parking and touchless interaction systems, emphasizing accuracy and user experience.
  - Technology Used: Python | OpenCV | MediaPipe | Computer Vision

TECHNICAL SKILLS
  - Languages: C++, JavaScript, Java, Python.
  - Frontend: React.js, React Native, Redux, Next.js, DOM Manipulation.
  - Backend: Node.js, Express.js
  - Database: MySQL, MongoDB (Basic).
  - Tools: GitHub, Postman, VS Code, npm.
  - Concepts: Data Structures & Algorithms, Object-Oriented Design, Complexity Analysis.

CERTIFICATIONS & ACHIEVEMENTS
  - Certified MERN Stack by Udemy.
  - Certified React.js by Infosys Springboard.
  - Certified for presenting the MotionPark project at a technical conference.
  - Certified Front End Development by IBM SkillsBuild.
  - Solved 150+ DSA Problems across platforms like Coding Ninjas, CodeChef.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0 no-print">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-cyan-400" />
              Preeti Pal — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-800/90 rounded-xl p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode("ats")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === "ats"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ATS Paper View
              </button>
              <button
                onClick={() => setViewMode("cyber")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === "cyber"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Cyber Dark
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-sm active:scale-95"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Copy Plaintext Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
              title="Copy Resume Plain Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with Printable Resume */}
        <div className="overflow-y-auto p-3 sm:p-6 md:p-8 bg-slate-900/60 flex justify-center">
          <div
            id="printable-resume"
            className={`w-full max-w-[820px] transition-all rounded-2xl shadow-xl ${
              viewMode === "ats"
                ? "bg-white text-slate-900 p-6 sm:p-10 font-sans leading-relaxed border border-slate-200"
                : "bg-slate-950 text-slate-200 p-6 sm:p-10 font-sans leading-relaxed border border-slate-800"
            }`}
          >
            {/* Header: Name, Contact & Links */}
            <div
              className={`pb-4 mb-4 border-b ${
                viewMode === "ats" ? "border-slate-800" : "border-slate-800"
              }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight uppercase ${
                  viewMode === "ats" ? "text-black" : "text-white"
                }`}
              >
                PREETI PAL
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 mt-2 text-xs">
                {/* Left Column: Location & Links */}
                <div>
                  <p className={viewMode === "ats" ? "text-slate-700" : "text-slate-400"}>
                    Ayodhya, Uttar Pradesh, India
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1 font-medium">
                    <a
                      href="https://www.linkedin.com/in/preeti-pal-bb262825b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
                    >
                      LinkedIn
                    </a>
                    <span className={viewMode === "ats" ? "text-slate-400" : "text-slate-600"}>|</span>
                    <a
                      href="https://github.com/preetipal2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
                    >
                      GitHub
                    </a>
                    <span className={viewMode === "ats" ? "text-slate-400" : "text-slate-600"}>|</span>
                    <a
                      href="https://www.naukri.com/code360/profile/preetipal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
                    >
                      Coding Ninjas
                    </a>
                  </div>
                </div>

                {/* Right Column: Phone & Email */}
                <div className="sm:text-right mt-1 sm:mt-0">
                  <p className={viewMode === "ats" ? "text-slate-700" : "text-slate-400"}>
                    Mobile:{" "}
                    <a
                      href="tel:+916395748319"
                      className="font-semibold hover:underline text-slate-800 dark:text-slate-200"
                    >
                      (+91) 6395748319
                    </a>
                  </p>
                  <p className={viewMode === "ats" ? "text-slate-700" : "text-slate-400"}>
                    Email:{" "}
                    <a
                      href="mailto:preeti2072004@gmail.com"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      preeti2072004@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mb-4">
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-1.5 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                SUMMARY
              </h2>
              <p
                className={`text-xs sm:text-[13px] leading-relaxed ${
                  viewMode === "ats" ? "text-slate-800" : "text-slate-300"
                }`}
              >
                React Native and MERN stack developer with experience building mobile apps for live
                products, including a multi-vendor e-commerce app and a cross-platform cybersecurity
                platform. Strong foundation in data structures and algorithms with 150+ problems
                solved.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="mb-4">
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-2 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                EDUCATION
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                <div className="font-bold">
                  • ABES Engineering College Ghaziabad
                </div>
                <div className="text-slate-500 font-medium text-xs">
                  Nov 2021 - 2025
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[12px] pl-3 text-slate-600 dark:text-slate-400 mt-0.5">
                <div>Bachelor of Technology - Information Technology</div>
                <div className="text-slate-500">Ghaziabad, India</div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-4">
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-2.5 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                EXPERIENCE
              </h2>

              {/* Kushmanda */}
              <div className="mb-3.5 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <div className="font-bold">
                    • Kushmanda Cosmetics Pvt Ltd
                  </div>
                  <div className="text-slate-500 font-medium text-xs">
                    February 2026 - Present
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[12px] pl-3 font-medium text-slate-700 dark:text-slate-300">
                  <div className="italic">
                    Multi-Vendor E-commerce App Website (React Native + Next.js) (Goldgini)
                  </div>
                  <div className="text-slate-500 not-italic">Mohali, India</div>
                </div>

                <ul
                  className={`list-disc list-outside pl-7 space-y-1 text-xs sm:text-[12px] leading-relaxed ${
                    viewMode === "ats" ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  <li>
                    Built a shopping app with product list, details, variants, cart, wishlist, and
                    reviews.
                  </li>
                  <li>
                    Connected app with backend APIs using Axios and used React Query to load data
                    faster.
                  </li>
                  <li>
                    Made product variant feature with image slider and price change option.
                  </li>
                  <li className="list-none -ml-4 font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
                    ◦ Technology Used:{" "}
                    <span className="font-normal text-slate-600 dark:text-slate-400">
                      React Native | Nest.js | Node.js | MySQL | Next.js
                    </span>
                  </li>
                </ul>
              </div>

              {/* Samra Infotech */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <div className="font-bold">
                    • Samra Infotech Pvt Ltd
                  </div>
                  <div className="text-slate-500 font-medium text-xs">
                    June 2025 - January 2026
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[12px] pl-3 font-medium text-slate-700 dark:text-slate-300">
                  <div className="italic">App Developer</div>
                  <div className="text-slate-500 not-italic">Noida, India</div>
                </div>

                <ul
                  className={`list-disc list-outside pl-7 space-y-1 text-xs sm:text-[12px] leading-relaxed ${
                    viewMode === "ats" ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  <li>
                    Working on a live service-based mobile app for booking car services like AC
                    repair, towing, and engine maintenance..
                  </li>
                  <li>
                    Handling the frontend development using React Native to build responsive and
                    user-friendly mobile interfaces.
                  </li>
                  <li>
                    Collaborating with the backend team to integrate APIs built with Node.js and
                    Express.js, ensuring smooth data flow and synchronization.
                  </li>
                  <li className="list-none -ml-4 font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
                    ◦ Technology Used:{" "}
                    <span className="font-normal text-slate-600 dark:text-slate-400">
                      React Native | Express.js | Node.js | MongoDB
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-4">
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-2.5 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                PROJECTS
              </h2>

              {/* ScamGuard */}
              <div className="mb-3 space-y-1">
                <div className="text-xs sm:text-[13px] font-bold flex items-center justify-between">
                  <span>• ScamGuard</span>
                  <a
                    href="https://scamguard-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs font-normal hover:underline inline-flex items-center gap-0.5"
                  >
                    scamguard-website.vercel.app <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <ul
                  className={`list-disc list-outside pl-7 space-y-1 text-xs sm:text-[12px] leading-relaxed ${
                    viewMode === "ats" ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  <li>
                    Implemented 11 real-time fraud scanners for spam calls, KYC/SMS scams, phishing
                    URLs, and WhatsApp scams.
                  </li>
                  <li>Built a cybersecurity platform for Web and Mobile.</li>
                  <li>
                    Added emergency tools including 1930 helpline dialing, incident playbooks, and
                    crowd-sourced scam reporting.
                  </li>
                  <li className="list-none -ml-4 font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
                    ◦ Technology Used:{" "}
                    <span className="font-normal text-slate-600 dark:text-slate-400">
                      Next.js | Node.js | React Native | React.js
                    </span>
                  </li>
                </ul>
              </div>

              {/* MotionPark */}
              <div className="space-y-1">
                <div className="text-xs sm:text-[13px] font-bold">
                  • MotionPark
                </div>

                <ul
                  className={`list-disc list-outside pl-7 space-y-1 text-xs sm:text-[12px] leading-relaxed ${
                    viewMode === "ats" ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  <li>
                    Final Year Project focused on developing a dual-function system integrating
                    gesture-based slide control and automated car parking using computer vision.
                  </li>
                  <li>
                    Used Canny Edge Detection for parking slot detection from live video.
                  </li>
                  <li>
                    Simulated in smart parking and touchless interaction systems, emphasizing
                    accuracy and user experience.
                  </li>
                  <li className="list-none -ml-4 font-semibold text-slate-800 dark:text-slate-200 pt-0.5">
                    ◦ Technology Used:{" "}
                    <span className="font-normal text-slate-600 dark:text-slate-400">
                      Python | OpenCV | MediaPipe | Computer Vision
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mb-4">
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-2 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                TECHNICAL SKILLS
              </h2>

              <ul
                className={`space-y-1 text-xs sm:text-[12px] ${
                  viewMode === "ats" ? "text-slate-800" : "text-slate-300"
                }`}
              >
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Languages:</span>{" "}
                  C++, JavaScript, Java, Python.
                </li>
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Frontend:</span>{" "}
                  React.js, React Native, Redux, Next.js, DOM Manipulation.
                </li>
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Backend:</span>{" "}
                  Node.js, Express.js
                </li>
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Database:</span>{" "}
                  MySQL, MongoDB (Basic).
                </li>
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Tools:</span>{" "}
                  GitHub, Postman, VS Code, npm.
                </li>
                <li>
                  <span className="font-bold text-slate-900 dark:text-white">◦ Concepts:</span>{" "}
                  Data Structures & Algorithms, Object-Oriented Design, Complexity Analysis.
                </li>
              </ul>
            </div>

            {/* CERTIFICATIONS & ACHIEVEMENTS */}
            <div>
              <h2
                className={`text-xs font-black uppercase tracking-wider pb-1 mb-2 border-b ${
                  viewMode === "ats"
                    ? "text-black border-slate-900"
                    : "text-cyan-400 border-slate-800"
                }`}
              >
                CERTIFICATIONS & ACHIEVEMENTS
              </h2>

              <ul
                className={`space-y-1 text-xs sm:text-[12px] ${
                  viewMode === "ats" ? "text-slate-800" : "text-slate-300"
                }`}
              >
                <li>◦ Certified MERN Stack by Udemy.</li>
                <li>◦ Certified React.js by Infosys Springboard.</li>
                <li>◦ Certified for presenting the MotionPark project at a technical conference.</li>
                <li>◦ Certified Front End Development by IBM SkillsBuild.</li>
                <li>
                  ◦ Solved 150+ DSA Problems across platforms like{" "}
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Coding Ninjas, CodeChef
                  </strong>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar (Hidden when printing) */}
        <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0 no-print">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Exact ATS single-page format — ready for recruiters and interviews.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:preeti2072004@gmail.com?subject=Interview Invitation for SDE-1 Role&body=Hi Preeti,%0D%0AWe reviewed your portfolio and resume and would love to schedule a technical discussion."
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md hover:opacity-95 transition-all"
            >
              Email Preeti
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
