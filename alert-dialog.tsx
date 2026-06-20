import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Home from "./components/pages/Home";
import logoSrc from "@/imports/HA_Logo_With_Words__1_.jpg";
import howItWorksBg from "@/imports/ChatGPT_Image_Jun_19__2026__07_59_37_PM.png";
import dispatchCenterImg from "@/imports/ChatGPT_Image_Jun_19__2026__08_27_19_PM.png";
import aboutBg from "@/imports/ChatGPT_Image_Jun_19__2026__08_35_49_PM.png";

// ─────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Citizen Initiates Emergency",
    items: ["Live location", "Video stream", "Voice call", "Text message"],
    color: "#B30000",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#B30000" strokeWidth="2" />
        <path d="M20 10v10l6 6" stroke="#B30000" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Hero Alert AI Triages Event",
    items: ["Risk scoring", "Priority assignment", "Keyword detection", "Translation"],
    color: "#D4AF37",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 4L36 32H4L20 4Z" stroke="#D4AF37" strokeWidth="2" />
        <path d="M20 16v8M20 28v2" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Dispatch Center Receives Event",
    items: ["Real-time map", "Caller information", "Live video feed", "Emergency classification"],
    color: "#B30000",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="10" width="28" height="20" rx="2" stroke="#B30000" strokeWidth="2" />
        <path d="M13 22l4 4 10-10" stroke="#B30000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "First Responders Act",
    items: ["Improved awareness", "Faster response", "Better outcomes", "Full incident record"],
    color: "#D4AF37",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6l3.5 7 7.5 1-5.5 5.3 1.3 7.7L20 24l-6.8 3 1.3-7.7L9 14l7.5-1L20 6Z" stroke="#D4AF37" strokeWidth="2" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────
// PLATFORM FEATURES
// ─────────────────────────────────────────────
const PLATFORM_CARDS = [
  { label: "Citizen Mobile App", accent: "#B30000", desc: "One-touch SOS, live video, GPS sharing" },
  { label: "Dispatch Portal", accent: "#D4AF37", desc: "Real-time call queue, map view, AI assist" },
  { label: "AI Decision Engine", accent: "#B30000", desc: "Risk scoring, triage, speech-to-text" },
  { label: "Emergency Support Center", accent: "#D4AF37", desc: "Nationwide overflow capacity on demand" },
  { label: "Analytics Dashboard", accent: "#B30000", desc: "KPIs, response trends, community risk" },
];

const FEATURES = [
  { icon: "🎥", title: "Live Video", desc: "See emergencies in real-time" },
  { icon: "📍", title: "GPS Location", desc: "Precise caller location" },
  { icon: "🎤", title: "Voice + Text", desc: "Multiple communication methods" },
  { icon: "🤖", title: "AI Triage", desc: "Prioritize emergencies instantly" },
  { icon: "📞", title: "Call Overflow", desc: "Never miss critical calls" },
  { icon: "📊", title: "Analytics", desc: "Performance and KPI reporting" },
];

// ─────────────────────────────────────────────
// SOLUTIONS
// ─────────────────────────────────────────────
const SOLUTIONS = [
  {
    id: "dispatch",
    tag: "911 Dispatch Centers",
    headline: "Emergency Communications Reimagined",
    challenges: ["Long call intake times", "Caller confusion", "Location uncertainty", "Staffing shortages", "Call spikes", "Limited visibility"],
    solutions: ["Live video from caller", "AI-assisted triage", "GPS location", "Speech-to-text", "Call overflow support", "Real-time analytics"],
    metrics: [
      { value: "50%", label: "Faster Location Discovery" },
      { value: "40%", label: "Reduced Interview Time" },
      { value: "30%", label: "Improved Response Readiness" },
      { value: "100%", label: "Video Availability" },
    ],
    photo: "https://images.unsplash.com/photo-1764383381198-0fff09cb38b1?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "schools",
    tag: "Schools K-12",
    headline: "Protect Every Classroom",
    challenges: ["Active threats", "Medical emergencies", "Bullying incidents", "Student wellness", "Staff communication", "Parent notifications"],
    solutions: ["Panic button alerts", "Video reporting", "Room-level location", "Staff alerts", "Crisis communication", "Emergency coordination"],
    metrics: [
      { value: "< 30s", label: "Alert Response Time" },
      { value: "100%", label: "Campus Coverage" },
      { value: "3x", label: "Faster Lockdown" },
      { value: "24/7", label: "Monitoring" },
    ],
    photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "universities",
    tag: "Colleges & Universities",
    headline: "Campus Safety At Scale",
    challenges: ["Large open campuses", "Student safety at night", "Residence hall incidents", "Event security", "Mental health crises", "Missing students"],
    solutions: ["Campus police integration", "Student safety app", "Residence hall alerts", "Event management", "Mental health dispatch", "Missing person workflow"],
    metrics: [
      { value: "60%", label: "Faster Incident Response" },
      { value: "85%", label: "Student App Adoption" },
      { value: "40%", label: "Reduced False Alarms" },
      { value: "∞", label: "Campus Scale" },
    ],
    photo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "mental-health",
    tag: "Mental Crisis Facilities",
    headline: "Supporting 988 and Behavioral Health Teams",
    challenges: ["High call volumes", "Limited staffing", "Escalation risk", "Poor visibility", "Incomplete assessments", "Coordination gaps"],
    solutions: ["Live video assessment", "Voice communication", "Real-time location", "AI-assisted triage", "Escalation workflows", "Mobile crisis dispatch"],
    metrics: [
      { value: "45%", label: "Reduced Escalations" },
      { value: "3x", label: "More Cases Handled" },
      { value: "60%", label: "Faster Assessment" },
      { value: "98%", label: "Care Resolution" },
    ],
    photo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&auto=format",
  },
];

// ─────────────────────────────────────────────
// AI FEATURES
// ─────────────────────────────────────────────
const AI_FEATURES = [
  { title: "AI Triage Engine", desc: "Automatically scores and prioritizes incoming emergencies by severity, type, and location context." },
  { title: "Speech Analytics", desc: "Real-time transcription and analysis of caller speech to surface key facts instantly." },
  { title: "Translation", desc: "Live multilingual support so no caller is left behind due to language barriers." },
  { title: "Sentiment Analysis", desc: "Detects caller distress levels to flag high-risk situations before they escalate." },
  { title: "Keyword Detection", desc: "Listens for critical words and phrases to trigger automated workflows." },
  { title: "Call Summaries", desc: "Auto-generated incident reports at the end of every call, reducing dispatcher workload." },
  { title: "QA Automation", desc: "Continuous quality review of calls without manual listening hours." },
  { title: "Predictive Staffing", desc: "Forecasts call volume surges so centers can staff proactively." },
];

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
const MARKETS = ["911", "Schools", "Universities", "Mental Health", "Municipalities", "Healthcare", "Corporate Security"];

export default function App() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", org: "", email: "", message: "" });

  const sol = SOLUTIONS[activeSolution];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-background text-foreground">

      {/* ── HOME / HERO (existing component) ── */}
      <Home />

      {/* ── HOW IT WORKS ── */}
      <section id="platform" className="py-24 px-6 border-t border-border bg-card relative overflow-hidden">
        {/* Background underlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={howItWorksBg}
            alt="Emergency dispatcher and citizen connected through Hero Alert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.85) 50%, rgba(17,17,17,0.95) 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              From Emergency to Resolution<br />in Four Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px" style={{ background: "linear-gradient(90deg, #B30000, #D4AF37, #B30000)" }} />

            {STEPS.map((step, i) => (
              <div key={step.num} className={`relative flex flex-col items-center text-center px-6 py-8${step.num === "02" ? " hidden" : ""}`}>
                {/* Step dot */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: "#0a0a0a", border: `2px solid ${step.color}`, boxShadow: `0 0 20px ${step.color}40` }}>
                  {step.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "'Montserrat', sans-serif", color: step.color }}>
                  STEP {({"01":"01","03":"02","04":"03"} as Record<string,string>)[step.num] ?? step.num}
                </span>
                <h3 className="text-base font-black uppercase mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.title}
                </h3>
                <ul className="space-y-1.5">
                  {step.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                      <span style={{ color: step.color }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: dashboard mockup */}
            <div className="relative rounded-xl overflow-hidden border border-border" style={{ background: "#0a0a0a" }}>
              {/* Fake dashboard header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>Hero Alert Dispatch Portal</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              {/* Dashboard body */}
              <div className="p-4 grid grid-cols-3 gap-3">
                {/* Active calls panel */}
                <div className="col-span-1 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary" style={{ fontFamily: "'Montserrat', sans-serif" }}>Active Calls</p>
                  {["Priority 1 — Medical", "Priority 2 — Fire", "Priority 1 — Assault"].map((call, i) => (
                    <div key={call} className="p-2 rounded text-[9px]" style={{ background: i === 0 ? "rgba(179,0,0,0.2)" : "rgba(212,175,55,0.1)", border: `1px solid ${i === 0 ? "#B30000" : "#2B2B2B"}` }}>
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold text-white">{call}</span>
                      </div>
                      <span className="text-muted-foreground">Unit {3 + i} dispatched · {2 + i}m ago</span>
                    </div>
                  ))}
                </div>
                {/* Map panel */}
                <div className="col-span-2 rounded overflow-hidden relative" style={{ background: "#111", minHeight: "180px" }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764383381198-0fff09cb38b1?w=600&h=300&fit=crop&auto=format"
                    alt="Live dispatch map"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-84.4496%2C33.7490%2C-84.3496%2C33.8490&layer=mapnik"
                      className="w-full h-full"
                      style={{ border: "none", filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.6)" }}
                      title="Live Incident Map — Atlanta, GA"
                    />
                    {/* Incident ping overlays */}
                    {[{ x: "30%", y: "40%" }, { x: "55%", y: "60%" }, { x: "70%", y: "35%" }].map((pos, i) => (
                      <div key={i} className="absolute pointer-events-none" style={{ left: pos.x, top: pos.y }}>
                        <div className="w-4 h-4 rounded-full border-2 border-red-500 animate-ping" style={{ background: "rgba(179,0,0,0.5)", animationDelay: `${i * 0.4}s` }} />
                      </div>
                    ))}
                    {/* Map label badge */}
                    <div className="absolute top-2 left-2 px-2 py-1 text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ background: "rgba(5,5,5,0.85)", border: "1px solid #2B2B2B", fontFamily: "'Montserrat', sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
                      <span className="text-white">Live Incident Map</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    {[{ label: "12", color: "#B30000", sub: "Active" }, { label: "8", color: "#D4AF37", sub: "Pending" }, { label: "47", color: "#4CAF50", sub: "Resolved" }].map((stat) => (
                      <div key={stat.label} className="px-2 py-1 rounded text-center" style={{ background: "rgba(5,5,5,0.85)", border: "1px solid #2B2B2B" }}>
                        <p className="text-sm font-bold" style={{ color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}>{stat.label}</p>
                        <p className="text-[8px] text-muted-foreground">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* AI panel */}
                <div className="col-span-3 p-3 rounded" style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary" style={{ fontFamily: "'Montserrat', sans-serif" }}>AI Recommendation</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  </div>
                  <p className="text-[10px] text-muted-foreground">"High-risk medical event detected at 847 Peachtree St. Suggest deploying ALS Unit 4 and notifying Grady Memorial. Estimated ETA: 6 min."</p>
                </div>
              </div>
            </div>

            {/* Right: feature cards */}
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Unified Platform
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                One Platform.<br />Every Emergency.
              </h2>
              <div className="space-y-3 mb-10">
                {PLATFORM_CARDS.map((card) => (
                  <div key={card.label} className="flex items-start gap-4 p-4 border border-border hover:border-primary transition-colors" style={{ background: "#0a0a0a" }}>
                    <div className="w-1 self-stretch rounded" style={{ background: card.accent, flexShrink: 0 }} />
                    <div>
                      <p className="text-sm font-black uppercase mb-1" style={{ fontFamily: "'Montserrat', sans-serif", color: card.accent }}>{card.label}</p>
                      <p className="text-xs text-muted-foreground">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {FEATURES.map((f) => (
                  <div key={f.title} className="p-3 border border-border text-center hover:border-primary transition-colors" style={{ background: "#0a0a0a" }}>
                    <span className="text-2xl block mb-2">{f.icon}</span>
                    <p className="text-[10px] font-black uppercase mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{f.title}</p>
                    <p className="text-[9px] text-muted-foreground leading-tight">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="solutions" className="py-24 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Built For Every Emergency Environment</h2>
          </div>

          {/* Tab switcher */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveSolution(i)}
                className="px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: activeSolution === i ? "#B30000" : "transparent",
                  color: activeSolution === i ? "#fff" : "#B3B3B3",
                  border: `1px solid ${activeSolution === i ? "#B30000" : "#2B2B2B"}`,
                }}
              >
                {s.tag}
              </button>
            ))}
          </div>

          {/* Solution panel */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>{sol.tag}</span>
              <h3 className="text-3xl font-black uppercase mb-8 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>{sol.headline}</h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Current Challenges</p>
                  <ul className="space-y-2">
                    {sol.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-red-600 font-bold">✗</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hero Alert Solution</p>
                  <ul className="space-y-2">
                    {sol.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-white">
                        <span className="text-green-400 font-bold">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {sol.metrics.map((m) => (
                  <div key={m.label} className="text-center p-3 border border-border" style={{ background: "#0a0a0a" }}>
                    <p className="text-xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg,#B30000,#D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{m.value}</p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wide leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border">
              <ImageWithFallback
                src={sol.photo}
                alt={sol.headline}
                className="w-full h-72 object-cover"
              />
              <ImageWithFallback
                src={dispatchCenterImg}
                alt="911 Dispatch Center with Hero Alert platform"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{sol.tag}</p>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{sol.headline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI & ANALYTICS ── */}
      <section id="ai" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>AI & Analytics</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                AI Built For<br />Emergency Response
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Every feature in Hero Alert's AI engine was designed specifically for
                the high-stakes, high-speed environment of emergency communications —
                not adapted from a general-purpose tool.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {AI_FEATURES.map((f, i) => (
                  <div key={f.title} className="p-4 border border-border hover:border-primary transition-colors" style={{ background: "#0a0a0a" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: i % 2 === 0 ? "#B30000" : "#D4AF37" }} />
                      <p className="text-xs font-black uppercase" style={{ fontFamily: "'Montserrat', sans-serif", color: i % 2 === 0 ? "#B30000" : "#D4AF37" }}>{f.title}</p>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fake analytics panel */}
            <div className="border border-border rounded-xl overflow-hidden" style={{ background: "#0a0a0a" }}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Analytics Dashboard</span>
                <span className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" /> Live</span>
              </div>
              <div className="p-5 space-y-4">
                {/* Bar chart mock */}
                {[
                  { label: "Response Time", value: 78, color: "#B30000" },
                  { label: "Call Volume", value: 62, color: "#D4AF37" },
                  { label: "AI Accuracy", value: 95, color: "#B30000" },
                  { label: "Agent Performance", value: 84, color: "#D4AF37" },
                  { label: "Incident Resolution", value: 91, color: "#B30000" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] text-muted-foreground">{bar.label}</span>
                      <span className="text-[10px] font-bold" style={{ color: bar.color, fontFamily: "'Space Grotesk', sans-serif" }}>{bar.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "#1a1a1a" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${bar.value}%`, background: `linear-gradient(90deg, ${bar.color}, ${bar.color}99)` }} />
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {[
                    { label: "Calls Today", value: "1,284", color: "#B30000" },
                    { label: "Avg Handle", value: "3m 12s", color: "#D4AF37" },
                    { label: "AI Assists", value: "96%", color: "#B30000" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold" style={{ color: s.color, fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</p>
                      <p className="text-[9px] text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6 border-t border-border bg-card relative overflow-hidden">
        {/* Right-side image underlay */}
        <div className="absolute inset-y-0 right-0 w-1/2 z-0">
          <ImageWithFallback
            src={aboutBg}
            alt="First responder walking toward emergency scene"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #111111 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.2) 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>About Hero Alert</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Built By People<br />Who&apos;ve Lived the Problem
              </h2>
              <div className="space-y-6 mb-10">
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Mission</p>
                  <p className="text-muted-foreground leading-relaxed">To improve emergency outcomes by connecting people, technology, and first responders in real time.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Vision</p>
                  <p className="text-muted-foreground leading-relaxed">Become the operating system for emergency communications — the unified platform every agency, school, and facility relies on.</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Markets We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {MARKETS.map((m) => (
                    <span key={m} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide border border-border text-muted-foreground hover:border-primary hover:text-white transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Partner Agencies", color: "#B30000" },
                { value: "1M+", label: "Emergencies Processed", color: "#D4AF37" },
                { value: "40%", label: "Faster Response Times", color: "#B30000" },
                { value: "24/7", label: "National Coverage", color: "#D4AF37" },
                { value: "2020", label: "Founded in Atlanta, GA", color: "#B30000" },
                { value: "98%", label: "Customer Renewal Rate", color: "#D4AF37" },
              ].map((stat) => (
                <div key={stat.label} className="hidden">
                  <p className="text-3xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: "radial-gradient(ellipse at center, #B30000 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ready to Modernize<br />Emergency Response?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join agencies across the country using Hero Alert to save lives every day. Schedule a demo or request a pilot program.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* CTA buttons */}
            <div className="space-y-4">
              {[
                { label: "Schedule Demo", sub: "See the platform live in 30 minutes", style: { background: "linear-gradient(135deg,#B30000,#8B0000)", color: "#fff" } },
                { label: "Request Pilot Program", sub: "Deploy Hero Alert at your agency — risk free", style: { background: "transparent", color: "#D4AF37", border: "1px solid #D4AF37" } },
                { label: "Contact Sales", sub: "Talk to a Hero Alert solutions expert", style: { background: "transparent", color: "#B3B3B3", border: "1px solid #2B2B2B" } },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={({
                    "Schedule Demo": "mailto:sara.ellison@heroalert.com?subject=Demo Request — Hero Alert",
                    "Request Pilot Program": "mailto:sara.ellison@heroalert.com?subject=Pilot Program Request — Hero Alert",
                    "Contact Sales": "mailto:marcus.reed@heroalert.com?subject=Sales Inquiry — Hero Alert",
                  } as Record<string, string>)[btn.label] ?? "#contact"}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Montserrat', sans-serif", ...btn.style }}
                >
                  <div>
                    <p className="text-sm font-black uppercase tracking-wider">{btn.label}</p>
                    <p className="text-xs opacity-70 mt-0.5 font-normal normal-case" style={{ fontFamily: "'Inter', sans-serif" }}>{btn.sub}</p>
                  </div>
                  <span className="text-xl">→</span>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="border border-border p-8" style={{ background: "#0a0a0a" }}>
              <p className="text-sm font-black uppercase tracking-wider mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Send Us a Message</p>
              <div className="space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                  { key: "org", label: "Organization", type: "text", placeholder: "Atlanta Police Department" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "jane@agency.gov" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={contactForm[field.key as keyof typeof contactForm]}
                      onChange={(e) => setContactForm({ ...contactForm, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-white placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                      style={{ background: "#111", fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your agency and needs..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    style={{ background: "#111", fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button
                  className="w-full py-4 text-xs font-black uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#B30000,#8B0000)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <ImageWithFallback src={logoSrc} alt="Hero Alert" className="h-8 w-auto object-contain" />
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Hero Alert Inc. All rights reserved. Protecting communities nationwide.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
