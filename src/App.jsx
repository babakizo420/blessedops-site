import { useState, useEffect } from "react";

const themes = {
  dark: { bg: "#040404", card: "#0A0A0A", border: "#161616", gold: "#D4A843", goldLight: "#F0D78C", goldDim: "rgba(212,168,67,0.12)", text: "#F7F2E9", gray: "#7A756C", scripture: "#5E5949", navBg: "rgba(4,4,4,0.9)", grain: 0.02, glowBg: "rgba(212,168,67,0.04)" },
  light: { bg: "#FAF8F4", card: "#FFFFFF", border: "#E8E2D8", gold: "#B8922A", goldLight: "#8B6914", goldDim: "rgba(184,146,42,0.06)", text: "#1A1714", gray: "#5C574E", scripture: "#4A4438", navBg: "rgba(250,248,244,0.9)", grain: 0.01, glowBg: "rgba(184,146,42,0.04)" },
};

const divisions = [
  { name: "Pejji", desc: "Security-first web agency for Nigerian SMEs", icon: "🌍", accent: "#4ECDC4", url: "https://pejji.com" },
  { name: "Securva", desc: "Cybersecurity scanning & NDPA compliance SaaS", icon: "🛡️", accent: "#7B68EE", url: "https://securva.net" },
  { name: "Utility Vault", desc: "Templates, SOPs, and digital products", icon: "⚡", accent: "#FFB347", url: "https://utilityvault.gumroad.com" },
  { name: "CyberArmor", desc: "Web3 security research & smart contract auditing", icon: "🔐", accent: "#FF6B6B", url: "#" },
];

export default function BlessedOpsHub() {
  const [vis, setVis] = useState(false);
  const [dark, setDark] = useState(true);
  const T = dark ? themes.dark : themes.light;
  useEffect(() => { setTimeout(() => setVis(true), 300); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(212,168,67,0.3); }
        @keyframes breathe { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.3} 50%{transform:translate(-50%,-50%) scale(1.08);opacity:.5} }
        @keyframes grain { 0%,100%{transform:translate(0,0)} 50%{transform:translate(5%,3%)} }
      `}</style>

      {/* Theme toggle */}
      <button onClick={() => setDark(!dark)} style={{ position: "fixed", top: 20, right: 20, zIndex: 100, width: 42, height: 42, borderRadius: "50%", background: `${T.gold}12`, border: `1px solid ${T.gold}30`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
        {dark ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
      </button>

      <div style={{ backgroundColor: T.bg, minHeight: "100vh", color: T.text, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "60px 24px", transition: "background-color 0.4s, color 0.4s" }}>
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50, opacity: T.grain, background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, animation: "grain 5s steps(6) infinite" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${T.glowBg} 0%, transparent 60%)`, pointerEvents: "none", animation: "breathe 8s ease infinite" }} />

        <div style={{ maxWidth: 600, width: "100%", textAlign: "center", position: "relative", zIndex: 10 }}>
          <div style={{ opacity: vis ? 1 : 0, transition: "opacity 1s ease 0.2s", marginBottom: 28 }}>
            <svg width={32} height={40} viewBox="0 0 24 28" fill="none" stroke={T.gold} strokeWidth="1.5" style={{ display: "block", margin: "0 auto" }}><line x1="12" y1="1" x2="12" y2="27" /><line x1="4" y1="9" x2="20" y2="9" /></svg>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 7vw, 52px)", fontWeight: 700, color: T.text, letterSpacing: 3, lineHeight: 1, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s", marginBottom: 8 }}>BLESSEDOPS</h1>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: T.gold, letterSpacing: 6, textTransform: "uppercase", fontWeight: 700, opacity: vis ? 1 : 0, transition: "opacity 1s ease 0.6s", marginBottom: 36 }}>GROUP</p>

          <div style={{ width: vis ? 60 : 0, height: 2, background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`, margin: "0 auto 36px", transition: "width 1s ease 0.8s" }} />

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", color: T.gray, lineHeight: 1.8, maxWidth: 460, margin: "0 auto 48px", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(14px)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s" }}>
            A faith-driven holding company building across cybersecurity, web development, digital products, and Web3 security.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
            {divisions.map((d, i) => {
              const [h, setH] = useState(false);
              return (
                <a key={d.name} href={d.url} target={d.url !== "#" ? "_blank" : undefined} rel={d.url !== "#" ? "noopener noreferrer" : undefined} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
                  background: T.card, border: `1px solid ${h ? d.accent + "50" : T.border}`,
                  borderRadius: 14, padding: "24px 18px", cursor: d.url !== "#" ? "pointer" : "default",
                  opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.9 + i * 0.08}s`,
                  position: "relative", overflow: "hidden", textDecoration: "none", display: "block",
                }}>
                  <div style={{ position: "absolute", top: 0, left: "15%", width: h ? "70%" : "0%", height: 2, background: `linear-gradient(90deg, transparent, ${d.accent}, transparent)`, transition: "width 0.4s ease" }} />
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{d.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: T.text, margin: "0 0 4px" }}>{d.name}</h3>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: d.accent, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, margin: 0 }}>{d.desc}</p>
                  {d.url === "#" && <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: T.gray, letterSpacing: 1, marginTop: 8, display: "block" }}>COMING SOON</span>}
                </a>
              );
            })}
          </div>

          <div style={{ opacity: vis ? 1 : 0, transition: "opacity 0.8s ease 1.3s", marginBottom: 40 }}>
            <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${T.gold}50, transparent)`, margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: T.gray, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Founded by</p>
            <a href="https://babakizo.com" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700,
              color: T.text, textDecoration: "none", letterSpacing: 2,
              display: "inline-block", padding: "10px 28px",
              border: `1px solid ${T.gold}40`, borderRadius: 10, transition: "all 0.4s ease",
            }}
            onMouseEnter={e => { e.target.style.backgroundColor = T.gold; e.target.style.color = dark ? "#040404" : "#FFFFFF"; e.target.style.borderColor = T.gold; }}
            onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.color = T.text; e.target.style.borderColor = `${T.gold}40`; }}
            >BABAKIZO</a>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: T.gold, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600, marginTop: 10 }}>Operator · Builder · Believer</p>
          </div>

          <footer style={{ opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 1.5s", paddingTop: 32, borderTop: `1px solid ${T.border}` }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontStyle: "italic", color: T.scripture, marginBottom: 14 }}>Built by the Operator. Blessed by the process.</p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: T.gray, letterSpacing: 2 }}>© {new Date().getFullYear()} BLESSEDOPS GROUP</p>
            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 16 }}>
              <a href="#privacy" onClick={e => { e.preventDefault(); document.getElementById("privacy-section")?.scrollIntoView({ behavior: "smooth" }); }} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: T.gray, letterSpacing: 1, textDecoration: "none", opacity: 0.7, transition: "opacity 0.3s" }} onMouseEnter={e => e.target.style.opacity = "1"} onMouseLeave={e => e.target.style.opacity = "0.7"}>Privacy Policy</a>
              <span style={{ color: T.gray, opacity: 0.3, fontSize: 8 }}>|</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: T.gray, letterSpacing: 1, opacity: 0.7 }}>NDPA 2023 Compliant</span>
            </div>
          </footer>

          {/* Privacy Policy Section */}
          <section id="privacy-section" style={{ padding: "40px 24px 32px", borderTop: `1px solid ${T.border}`, marginTop: 24, textAlign: "left" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 14, textAlign: "center" }}>Privacy Policy</h3>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.gray, lineHeight: 1.85, maxWidth: 500, margin: "0 auto" }}>
              <p style={{ marginBottom: 10 }}>BlessedOps Group (blessedops.com) collects minimal data to improve your browsing experience. We use cookies for analytics and site functionality.</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: T.text }}>Data Collected:</strong> Basic analytics (page views, session duration). No personal information is sold or shared with third parties.</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: T.text }}>Your Rights (NDPA 2023):</strong> Under the Nigeria Data Protection Act 2023, you have the right to access, correct, or request deletion of your personal data. You may withdraw consent at any time by clearing your browser cookies.</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: T.text }}>Contact:</strong> For data-related inquiries, email hello@blessedops.com.</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: T.gold, letterSpacing: 2, marginTop: 16, textAlign: "center" }}>Last updated: {new Date().getFullYear()}</p>
            </div>
          </section>
        </div>
      </div>

      {/* NDPA Cookie Consent */}
      {!localStorage.getItem("cookie-consent") && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200, background: dark ? "rgba(4,4,4,0.97)" : "rgba(250,248,244,0.97)", borderTop: `1px solid ${T.border}`, padding: "16px 24px", backdropFilter: "blur(10px)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <p style={{ color: T.gray, fontSize: 13, margin: 0, flex: 1, minWidth: 200 }}>We use cookies to improve your experience. By continuing, you consent to our use of cookies in accordance with the Nigeria Data Protection Act (NDPA) 2023.</p>
            <button onClick={() => { localStorage.setItem("cookie-consent", "accepted"); window.location.reload(); }} style={{ background: T.gold, color: dark ? "#040404" : "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "8px 24px", borderRadius: 20, border: "none", cursor: "pointer" }}>Accept</button>
          </div>
        </div>
      )}
    </>
  );
}
