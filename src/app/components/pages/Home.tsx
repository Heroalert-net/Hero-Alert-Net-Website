import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/HA_Logo_With_Words__1_.jpg";
import phoneMockupSrc from "@/imports/ChatGPT Image Jun 19, 2026, 07_34_33 PM.png";

const NAV_LINKS = [
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "PRODUCT", href: "#platform" },
  { label: "COMPANY", href: "#about" },
  { label: "RESOURCES", href: "#ai" },
  { label: "CONTACT", href: "#contact" },
];

const TRUST_ITEMS = [
  { icon: "📡", label: "911 DISPATCH\nCENTERS" },
  { icon: "🏛️", label: "MUNICIPALITIES" },
  { icon: "🏫", label: "PUBLIC\nSCHOOLS" },
  { icon: "🎓", label: "UNIVERSITIES" },
  { icon: "🧠", label: "MENTAL HEALTH\nFACILITIES" },
  { icon: "☎️", label: "EMERGENCY\nCALL CENTERS" },
];

// Simulated phone UI for the mobile mockup
function PhoneMockup() {
  return (
    <div
      className="relative w-[220px] md:w-[260px] rounded-3xl overflow-hidden border-4 shadow-2xl flex-shrink-0"
      style={{ borderColor: "#2B2B2B", background: "#0a0a0a", boxShadow: "0 0 60px rgba(179,0,0,0.3), 0 30px 80px rgba(0,0,0,0.8)" }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-white/60">
        <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>9:41</span>
        <div className="flex gap-1 items-center">
          <span>●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between px-4 pb-3 pt-1">
        <div className="flex items-center gap-2">
          <ImageWithFallback src={logoSrc} alt="Hero Alert" className="h-5 w-auto object-contain" />
        </div>
        <div
          className="text-[10px] font-bold px-2 py-0.5"
          style={{ background: "#B30000", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}
        >
          LIVE
        </div>
      </div>

      {/* Live video feed area */}
      <div className="mx-3 rounded-xl overflow-hidden relative" style={{ background: "#111" }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1634468413956-831adf9d5a06?w=400&h=280&fit=crop&auto=format"
          alt="Live emergency video feed"
          className="w-full h-36 object-cover opacity-80"
        />
        {/* Overlay: live badge + recording dot */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] font-bold text-white tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>LIVE VIDEO</span>
        </div>
        {/* Location overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[9px] text-white/80"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
        >
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Atlanta, GA 30303</span>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="px-3 pt-3 space-y-2">
        <div className="rounded-lg p-2.5" style={{ background: "#111111", border: "1px solid #2B2B2B" }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-red-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Active Incident
            </span>
            <span className="text-[9px] text-white/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2m ago</span>
          </div>
          <p className="text-[10px] text-white/80">Medical Emergency — Priority 1</p>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: "#111111", border: "1px solid #2B2B2B" }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "#D4AF37", fontFamily: "'Montserrat', sans-serif" }}>
              AI Triage
            </span>
            <span className="text-[9px] text-white/40">Risk: HIGH</span>
          </div>
          <p className="text-[10px] text-white/80">Dispatching Unit 7 · ETA 4 min</p>
        </div>
      </div>

      {/* SOS button */}
      <div className="px-3 pt-3 pb-4">
        <button
          className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest text-white"
          style={{
            background: "linear-gradient(135deg, #B30000, #8B0000)",
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: "0 0 20px rgba(179,0,0,0.5)",
          }}
        >
          SEND ALERT
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <ImageWithFallback
            src={logoSrc}
            alt="Hero Alert"
            className="h-10 w-auto object-contain"
          />

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 flex items-center gap-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
                {(link.label === "SOLUTIONS" || link.label === "PRODUCT") && (
                  <span className="text-[10px] opacity-60">▼</span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block px-5 py-2.5 text-xs font-black tracking-widest uppercase text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #B30000, #8B0000)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              BOOK DEMO
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold tracking-wider text-muted-foreground hover:text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="mt-2 px-5 py-3 text-xs font-black tracking-widest uppercase text-white"
              style={{ background: "#B30000", fontFamily: "'Montserrat', sans-serif" }}
            >
              BOOK DEMO
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614338577197-5812cb856df7?w=1800&h=1000&fit=crop&auto=format"
            alt="Emergency first responders at night"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer dark overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.80) 50%, rgba(5,5,5,0.40) 100%)" }} />
          {/* Red atmospheric glow bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-30 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #B30000 0%, transparent 70%)" }}
          />
          {/* Gold glow right */}
          <div
            className="absolute top-1/3 right-0 w-[400px] h-[400px] opacity-15 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)" }}
          />
        </div>

        {/* Map pin dots — decorative */}
        {[
          { top: "58%", left: "28%", delay: "0s" },
          { top: "65%", left: "35%", delay: "0.4s" },
          { top: "52%", left: "22%", delay: "0.8s" },
          { top: "70%", left: "30%", delay: "1.2s" },
        ].map((pin, i) => (
          <div
            key={i}
            className="absolute z-10 pointer-events-none"
            style={{ top: pin.top, left: pin.left }}
          >
            <div
              className="w-3 h-3 rounded-full border-2 border-red-500 animate-ping"
              style={{ animationDelay: pin.delay, animationDuration: "2s", background: "rgba(179,0,0,0.4)" }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase text-secondary mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Real-Time Emergency Intelligence
            </p>

            <h1
              className="font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              <span className="block text-white">REAL-TIME</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #B30000, #cc0000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                EMERGENCY
              </span>
              <span className="block text-white">INTELLIGENCE</span>
            </h1>

            <p className="text-base text-white/70 max-w-lg leading-relaxed mb-3">
              Connect citizens, dispatchers, schools, and crisis centers through
              video, voice, location, and AI-powered emergency response.
            </p>
            <p className="text-sm text-white/50 max-w-lg leading-relaxed mb-10">
              Hero Alert enables faster decisions, improved situational awareness,
              and scalable emergency communications through a unified emergency
              response platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <button
                className="flex items-center gap-3 px-7 py-4 text-xs font-black tracking-widest uppercase text-white hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #B30000, #8B0000)",
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: "0 4px 30px rgba(179,0,0,0.4)",
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 2v4M16 2v4M3 10h18" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
                SCHEDULE DEMO
              </button>
              <button
                className="flex items-center gap-3 px-7 py-4 text-xs font-black tracking-widest uppercase text-white border hover:bg-white/10 transition-colors"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                WATCH OVERVIEW
              </button>
            </div>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 border border-white/20 hover:border-white/50 transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                <svg className="w-6 h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-[9px] text-white/50 uppercase tracking-wider leading-none mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Download on the</p>
                  <p className="text-sm font-bold text-white leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 border border-white/20 hover:border-white/50 transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.97-2.55-2.55-10.56 9.38z" fill="#EA4335"/>
                  <path d="M22.35 10.56c-.45-.52-1.1-.88-1.97-.88H3.62L13.74 19.8l8.61-9.24z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.88.41 2.67.73 2.67 1.16v21.68c0 .43.21.75.51.92L13.74 12 3.18.24z" fill="#4285F4"/>
                  <path d="M13.74 12l2.55-2.55L4.17.1C3.82.01 3.48.07 3.18.24L13.74 12z" fill="#34A853"/>
                </svg>
                <div>
                  <p className="text-[9px] text-white/50 uppercase tracking-wider leading-none mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Get it on</p>
                  <p className="text-sm font-bold text-white leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              style={{
                width: "260px",
                height: "530px",
                borderRadius: "44px",
                background: "linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 100%)",
                border: "2px solid #2B2B2B",
                boxShadow: "0 0 0 1px #111, 0 0 60px rgba(179,0,0,0.4), 0 40px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Side buttons */}
              <div style={{ position: "absolute", left: "-3px", top: "100px", width: "3px", height: "32px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
              <div style={{ position: "absolute", left: "-3px", top: "144px", width: "3px", height: "56px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
              <div style={{ position: "absolute", left: "-3px", top: "210px", width: "3px", height: "56px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
              <div style={{ position: "absolute", right: "-3px", top: "160px", width: "3px", height: "72px", background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />

              {/* Dynamic island */}
              <div style={{ display: "flex", justifyContent: "center", paddingTop: "14px", paddingBottom: "6px", zIndex: 10, position: "relative" }}>
                <div style={{ width: "110px", height: "30px", borderRadius: "20px", background: "#000", border: "1px solid #222" }} />
              </div>

              {/* Status bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 24px 6px", zIndex: 10, position: "relative" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>9:41</span>
                <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="3" width="3" height="7" rx="0.5" fill="white" opacity="0.4"/><rect x="4" y="2" width="3" height="8" rx="0.5" fill="white" opacity="0.6"/><rect x="8" y="0" width="3" height="10" rx="0.5" fill="white" opacity="0.8"/><rect x="12" y="0" width="2" height="10" rx="0.5" fill="white"/></svg>
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="white" opacity="0.9"><path d="M7.5 2C9.8 2 11.9 3 13.3 4.6L14.5 3.3C12.8 1.3 10.3 0 7.5 0S2.2 1.3 0.5 3.3L1.7 4.6C3.1 3 5.2 2 7.5 2Z"/><path d="M7.5 5C9 5 10.4 5.6 11.4 6.7L12.6 5.4C11.3 4 9.5 3 7.5 3S3.7 4 2.4 5.4L3.6 6.7C4.6 5.6 6 5 7.5 5Z"/><circle cx="7.5" cy="9" r="2"/></svg>
                  <div style={{ display: "flex", gap: "1px", alignItems: "center" }}>
                    <div style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.5)", padding: "1.5px", display: "flex", alignItems: "center" }}>
                      <div style={{ width: "70%", height: "100%", borderRadius: "1.5px", background: "#4CD964" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen content — the uploaded image fills remaining space */}
              <div style={{ flex: 1, position: "relative", overflow: "hidden", margin: "0 2px" }}>
                <img
                  src={phoneMockupSrc}
                  alt="Hero Alert mobile app — live video call connected to 911 dispatcher"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Home indicator */}
              <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 14px", background: "#0a0a0a" }}>
                <div style={{ width: "120px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.25)" }} />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
