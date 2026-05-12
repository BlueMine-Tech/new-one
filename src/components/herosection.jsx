
import { useEffect, useRef } from "react";
 
// ─── HERO ───────────────────────────────────────────────────────────────────
 
const stats = [
  { value: "2017", label: "Founded" },
  { value: "6+", label: "Years of Service" },
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Services Offered" },
];
 
const services = [
  "CSC Services",
  "e-Sevai",
  "Document Printing",
  "Abacus Training",
  "CSC Olympiad",
  "Computer Education",
];
 
export  default function Hero() {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
 
    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));
 
    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 136, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 180, 255, 0.5)";
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
 
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#060b12] flex flex-col justify-center overflow-hidden"
    >
      {/* Canvas network background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
 
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#0044cc]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#0088ff]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#c9a84c]/5 blur-[100px] pointer-events-none" />
 
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,136,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,136,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
 
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
 
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/8 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#f0d080] animate-pulse" />
              <span className="text-xs text-[#d4b860] tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Digital Hub & Academy
              </span>
            </div>
 
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Your Trusted{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0088ff] to-[#00d4ff]">
                  Digital
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a84c] to-[#f0d080] rounded-full" />
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] to-[#0066ff]">
                Education
              </span>
              <br />
              <span className="text-[#c8dff0]">Partner in</span>{" "}
              <span className="text-white">Thuraiyur</span>
            </h1>
 
            {/* Subheading */}
            <p className="text-base lg:text-lg text-[#6a9bbf] leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              From CSC & e-Sevai services to Abacus training and Computer Education — one roof, one trusted name. Serving Thuraiyur and Musiri since 2017.
            </p>
 
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#b8922a] to-[#f0d080] text-[#090d14] font-semibold rounded-xl text-sm shadow-[0_0_30px_rgba(201,168,76,0.35)] hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>Get Our Services</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1e4a7a] text-[#7ab8e8] font-semibold rounded-xl text-sm hover:border-[#0066ff] hover:text-white hover:bg-[#0066ff]/10 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
 
            {/* Service Tags */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs text-[#5a8ab0] border border-[#1a3a5c]/60 rounded-full bg-[#0a1628]/60 hover:border-[#c9a84c]/40 hover:text-[#d4b860] transition-colors cursor-default"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
 
          {/* Right Column — Stats + Visual */}
          <div className="flex-shrink-0 w-full lg:w-[360px]">
            {/* Floating Card */}
            <div className="relative p-6 rounded-2xl border border-[#c9a84c]/20 bg-gradient-to-br from-[#0a1628]/80 to-[#071020]/80 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#c9a84c]/12 to-transparent pointer-events-none" />
              <div className="relative">
                <p className="text-xs text-[#c9a84c]/70 tracking-widest uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Our Journey
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl bg-[#0a1e35]/60 border border-[#1e3a5f]/40 hover:border-[#c9a84c]/30 transition-colors"
                    >
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#f0d080] to-[#c9a84c] mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {s.value}
                      </div>
                      <div className="text-xs text-[#5a8ab0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
 
                {/* Service categories */}
                <div className="space-y-2">
                  <p className="text-xs text-[#c9a84c]/70 tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    What We Do
                  </p>
                  {[
                    ["Government Services", "Education"],
                    ["Digital Training", "Documentation"],
                    ["Consultancy", "Community"],
                  ].map((row, i) => (
                    <div key={i} className="flex gap-2">
                      {row.map((item) => (
                        <span
                          key={item}
                          className="flex-1 text-center py-2 text-xs font-medium text-[#5a8ab0] bg-[#0a1e35]/80 border border-[#1e3a5f]/40 rounded-lg hover:border-[#c9a84c]/30 hover:text-[#d4b860] transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Location badge */}
            <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl border border-[#c9a84c]/20 bg-[#0a1628]/60">
              <svg className="w-4 h-4 text-[#f0d080] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-xs text-[#5a8ab0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Headquartered in <span className="text-[#d4b860] font-medium">Thuraiyur, Tamil Nadu</span>
              </span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060b12] to-transparent pointer-events-none" />
 
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-[#c9a84c]/50 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Scroll
        </span>
        <svg className="w-4 h-4 text-[#c9a84c]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}