"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Flame,
  Zap,
  PhoneCall,
  Smartphone,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  RefreshCw,
  Search,
  Lock,
  Layers,
  HelpCircle,
  Award,
  Radio,
  Share2,
} from "lucide-react";
import { SCAMGUARD_FEATURED } from "@/data/portfolioData";

export const ScamGuardSpotlight: React.FC = () => {
  // Main feature tab state
  const [activeTab, setActiveTab] = useState<"simulator" | "quiz" | "defense">("simulator");

  // Threat Simulator presets
  const samplePrompts = [
    {
      title: "Digital Arrest Scam (Fake Police / WhatsApp)",
      input:
        "POLICE NOTICE: Illegal parcel seized under your Aadhaar. Digital arrest warrant issued. Join WhatsApp Video Call immediately to avoid home raid.",
      risk: "CRITICAL THREAT",
      score: 98,
      category: "Impersonation / Digital Arrest Extortion",
      advice:
        "There is NO legal concept called 'Digital Arrest'. Police never conduct trials or ask for money via video calls. Hang up and dial 1930.",
      badges: ["High Urgency Coercion", "Fake Police Impersonation", "Aadhaar Extortion Vector"],
    },
    {
      title: "Electricity Power-Cut APK Phishing",
      input:
        "Electricity Department: Your power will be cut tonight at 9:30 PM due to unpaid bill. Install AnyDesk / QuickSupport APK to update meter: http://bit.ly/bijli-pay",
      risk: "CRITICAL THREAT",
      score: 96,
      category: "Remote Access Trojan (RAT) / Banking Theft",
      advice:
        "Installing remote desktop apps (AnyDesk, TeamViewer, RustDesk) allows attackers complete screen control and bank OTP theft.",
      badges: ["Remote Control Lure", "Fake Utility Disconnection", "Malicious Short URL"],
    },
    {
      title: "AI Voice Cloning / Hospital Emergency",
      input:
        "Voice clone: 'Mom, I had a severe accident and admitted to emergency clinic. Please send Rs 45,000 to this doctor UPI immediately.'",
      risk: "HIGH THREAT",
      score: 93,
      category: "AI Deepfake Voice Cloning & Emotional Manipulation",
      advice:
        "Scammers clone voices from 5-second video clips. Hang up and call your family member on their known primary number or ask a family safe word.",
      badges: ["Voice Synthesis Pattern", "Panic Prompt", "Unregistered UPI Target"],
    },
    {
      title: "Verified Tech Interview Invitation",
      input:
        "Hi Preeti, great reviewing your portfolio for the Software Engineer role. Here is the Google Meet link for our technical round tomorrow at 3 PM.",
      risk: "CLEAN / SAFE",
      score: 2,
      category: "Verified Corporate Communication",
      advice:
        "Standard interview scheduling parameters with trusted domain and no credential demands.",
      badges: ["Trusted Domain", "Zero Financial Coercion", "Clean Metadata"],
    },
  ];

  const [selectedScenario, setSelectedScenario] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [customInput, setCustomInput] = useState(samplePrompts[0].input);
  const [activeAnalysis, setActiveAnalysis] = useState(samplePrompts[0]);

  // Mini Quiz Interactive State
  const quizQuestions = [
    {
      question: "You get a video call from a man in police uniform claiming drugs were seized in your name and demanding a 'Digital Arrest' settlement. What should you do?",
      options: [
        { text: "Transfer the penalty money to avoid police raiding my home.", isCorrect: false },
        { text: "Hang up immediately and dial 1930. Police never conduct video call trials or ask for money.", isCorrect: true },
        { text: "Stay on the call and show all my bank passbooks.", isCorrect: false },
      ],
      explanation: "There is no legal concept called 'Digital Arrest' in Indian law. Never transfer money over video calls.",
    },
    {
      question: "An electricity official calls: 'Your power cuts tonight at 9:30 PM. Download AnyDesk APK to update meter.' Should you install it?",
      options: [
        { text: "Yes, otherwise my house electricity will be cut.", isCorrect: false },
        { text: "No! Remote desktop apps give scammers complete control of your phone and bank OTPs.", isCorrect: true },
        { text: "Yes, but uninstall it after 2 minutes.", isCorrect: false },
      ],
      explanation: "Utility companies never require remote desktop apps. This is a classic APK Trojan lure.",
    },
    {
      question: "A crying caller sounding exactly like your daughter begs for emergency money. What is your immediate reaction?",
      options: [
        { text: "Immediately send Rs 50,000 to the unknown Google Pay number.", isCorrect: false },
        { text: "Hang up and immediately call her on her known primary number / ask family safe word.", isCorrect: true },
        { text: "Share your Debit Card OTP with the caller.", isCorrect: false },
      ],
      explanation: "AI voice cloning clones voices from short social media audio. Always verify on a known number.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (quizQuestions[currentQuestion].options[index].isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleSelectScenario = (index: number) => {
    setSelectedScenario(index);
    setCustomInput(samplePrompts[index].input);
    setAnalyzing(true);
    setTimeout(() => {
      setActiveAnalysis(samplePrompts[index]);
      setAnalyzing(false);
    }, 350);
  };

  const handleAnalyzeCustom = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const lower = customInput.toLowerCase();
      if (
        lower.includes("arrest") ||
        lower.includes("police") ||
        lower.includes("narcotics") ||
        lower.includes("anydesk") ||
        lower.includes("otp") ||
        lower.includes("urgent") ||
        lower.includes("lottery") ||
        lower.includes("http")
      ) {
        setActiveAnalysis({
          title: "Custom Heuristic Scan",
          input: customInput,
          risk: "HIGH THREAT DETECTED",
          score: 92,
          category: "Social Engineering / Financial Phishing Heuristic",
          advice:
            "ScamGuard heuristic parser identified coercive urgency markers and suspicious payload requests. Never share OTPs or download external APKs.",
          badges: ["Urgency Marker", "Suspicious Keyword Flag", "Potential Fraud Vector"],
        });
      } else {
        setActiveAnalysis({
          title: "Custom Clean Scan",
          input: customInput,
          risk: "LOW RISK / LIKELY SAFE",
          score: 7,
          category: "General Benign Communication",
          advice: "No obvious phishing keywords or credential theft patterns identified.",
          badges: ["Clean Content", "No Forced Urgency", "Safe Parameters"],
        });
      }
      setAnalyzing(false);
    }, 400);
  };

  return (
    <section id="scamguard" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-red-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 shadow-xl shadow-amber-500/10">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Preeti&apos;s #1 Flagship Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            ScamGuard —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
              AI Threat & Fraud Detection
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            A full-scale cyber defense platform engineered to protect millions from Digital Arrest
            scams, AnyDesk RAT takeovers, and AI deepfake extortion in real-time.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://scamguard-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition-transform flex items-center gap-2"
            >
              <span>🚀 Open Live Platform (Vercel)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>scamguard-website.vercel.app</span>
            </div>
          </div>
        </div>

        {/* Live Telemetry Bar */}
        <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-xl font-black text-amber-400 font-mono">99.8%</div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
              Heuristic Precision
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-xl font-black text-cyan-400 font-mono">&lt; 140ms</div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
              Inference Latency
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-xl font-black text-emerald-400 font-mono">1930 Hotline</div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
              Govt Cybercrime Sync
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-xl font-black text-purple-400 font-mono">React 19 + Next</div>
            <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
              High-Perf Ecosystem
            </div>
          </div>
        </div>

        {/* Main Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Architecture & Key Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-white shadow-xl shadow-amber-500/25">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Full-Stack Cyber Suite</h3>
                  <p className="text-xs text-slate-400">Architecture & Defense Strategy</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                ScamGuard stops financial cyber-extortion at the pre-transaction stage. It evaluates
                coercive social engineering triggers, flags unauthorized remote screen access (RATs),
                and gives victims a rapid golden-hour recovery pathway.
              </p>

              {/* Core Feature List */}
              <div className="space-y-3 mb-6">
                {SCAMGUARD_FEATURED.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {SCAMGUARD_FEATURED.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-950 text-amber-200/90 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Emergency 1930 & Golden Hour Notice */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950/30 to-slate-900/90 border border-red-500/30 shadow-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">1930 Cyber Fraud Integration</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Direct workflow designed to guide victims to freeze defrauded bank accounts within
                  the critical 2-hour golden period via India&apos;s National Cyber Crime Reporting Portal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Console (Threat Scanner + Immunity Quiz) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-2xl overflow-hidden">
              {/* Console Tab Selector */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-300 ml-1 font-bold">
                    ScamGuard_Security_Hub.tsx
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab("simulator")}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "simulator"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Threat Scanner
                  </button>
                  <button
                    onClick={() => setActiveTab("quiz")}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "quiz"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Immunity Quiz
                  </button>
                </div>
              </div>

              {/* Tab 1: Interactive Threat Scanner */}
              {activeTab === "simulator" && (
                <div className="p-6 space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                        Select a Live Attack Vector or Test Custom Text
                      </span>
                      <span className="text-[10px] text-amber-400 font-mono">Real-time Heuristics</span>
                    </div>

                    {/* Presets Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {samplePrompts.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectScenario(idx)}
                          className={`p-2.5 rounded-xl text-left text-[11px] font-semibold transition-all border ${
                            selectedScenario === idx
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-200 shadow-md"
                              : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                          }`}
                        >
                          <span className="block truncate">{s.title}</span>
                        </button>
                      ))}
                    </div>

                    {/* Input Area */}
                    <div className="relative">
                      <textarea
                        rows={3}
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="Paste suspicious SMS, WhatsApp message, or URL..."
                        className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50 resize-none font-mono"
                      />
                      <button
                        onClick={handleAnalyzeCustom}
                        disabled={analyzing}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[11px] flex items-center gap-1.5 shadow-md hover:opacity-95 disabled:opacity-50"
                      >
                        {analyzing ? (
                          <>
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            <span>Inspecting Vectors...</span>
                          </>
                        ) : (
                          <>
                            <Search className="w-3 h-3" />
                            <span>Scan Content</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Threat Analysis Output Card */}
                  <div
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      activeAnalysis.score > 70
                        ? "bg-red-950/30 border-red-500/40 shadow-xl shadow-red-950/20"
                        : "bg-emerald-950/30 border-emerald-500/40 shadow-xl shadow-emerald-950/20"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                      <div className="flex items-center gap-2.5">
                        {activeAnalysis.score > 70 ? (
                          <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        )}
                        <div>
                          <span
                            className={`text-xs font-black uppercase tracking-wider ${
                              activeAnalysis.score > 70 ? "text-red-400" : "text-emerald-400"
                            }`}
                          >
                            {activeAnalysis.risk}
                          </span>
                          <p className="text-[11px] text-slate-300 font-mono">
                            Category: {activeAnalysis.category}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-black font-mono text-white">
                          {activeAnalysis.score}%
                        </div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                          Risk Score
                        </span>
                      </div>
                    </div>

                    {/* Vector Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {activeAnalysis.badges.map((b, i) => (
                        <span
                          key={i}
                          className={`text-[10px] px-2 py-0.5 rounded-md font-mono font-medium ${
                            activeAnalysis.score > 70
                              ? "bg-red-500/10 text-red-300 border border-red-500/20"
                              : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          }`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Advice Notice */}
                    <p className="text-xs text-slate-200 leading-relaxed">
                      <strong className="text-white font-bold">Standard Protocol: </strong>
                      {activeAnalysis.advice}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive Scam Immunity Quiz */}
              {activeTab === "quiz" && (
                <div className="p-6 space-y-4">
                  {quizFinished ? (
                    <div className="py-6 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-xl">
                        <Award className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white">
                          Your Scam Immunity Score: {Math.round((quizScore / quizQuestions.length) * 100)}%
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          You correctly identified {quizScore} out of {quizQuestions.length} critical cyber fraud traps!
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 max-w-md mx-auto">
                        🛡️ Great awareness against social engineering traps! ScamGuard uses these same heuristics to protect users automatically.
                      </div>

                      <button
                        onClick={resetQuiz}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                        <span className="text-xs font-bold text-amber-400">
                          Question {currentQuestion + 1} of {quizQuestions.length}
                        </span>
                        <span className="text-xs text-slate-400">Immunity Score: {quizScore}</span>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-4 text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                        {quizQuestions[currentQuestion].question}
                      </div>

                      <div className="space-y-2 mb-4">
                        {quizQuestions[currentQuestion].options.map((opt, oIdx) => {
                          let btnClass = "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800";
                          if (showExplanation) {
                            if (opt.isCorrect) {
                              btnClass = "bg-emerald-950/60 border-emerald-500 text-emerald-300";
                            } else if (selectedAnswer === oIdx) {
                              btnClass = "bg-red-950/60 border-red-500 text-red-300";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswerClick(oIdx)}
                              disabled={showExplanation}
                              className={`w-full p-3 text-left rounded-xl border text-xs font-semibold transition-all ${btnClass}`}
                            >
                              {opt.text}
                            </button>
                          );
                        })}
                      </div>

                      {showExplanation && (
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-4 text-xs">
                          <strong className="text-amber-400">Why? </strong>
                          <span className="text-slate-300">{quizQuestions[currentQuestion].explanation}</span>
                        </div>
                      )}

                      {showExplanation && (
                        <button
                          onClick={handleNextQuestion}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs"
                        >
                          {currentQuestion + 1 === quizQuestions.length ? "Finish Quiz & View Score" : "Next Scenario →"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Console Footer */}
              <div className="px-6 py-3.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Designed and implemented by Preeti Pal</span>
                <a
                  href="https://scamguard-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-extrabold flex items-center gap-1 group"
                >
                  <span>Explore Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
