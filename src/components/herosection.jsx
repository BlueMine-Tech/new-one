import { useEffect, useRef } from "react";

const stats = [
  { value: "2017", label: "Founded" },
  { value: "6+", label: "Years of Service" },
  { value: "10000+", label: "Students Trained" },
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

export default function HeroSection() {
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
            ctx.strokeStyle = `rgba(0, 68, 170, ${0.07 * (1 - dist / 140)})`;
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
        ctx.fillStyle = "rgba(0, 68, 170, 0.18)";
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
      className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a84c] via-[#0044aa] to-[#c9a84c]" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Background tints */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#0044aa]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/6 blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,68,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,68,170,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">

          {/* Left Column */}
          <div className="flex-1 max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/50 bg-[#fffbf0] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span
                className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Digital Hub & Academy
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-[#0a1628] mb-6"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Your Trusted{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0044aa] to-[#0077dd]">
                  Education
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a84c] to-[#f0d080] rounded-full" />
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0044aa] to-[#0066cc]">
                 Digital
              </span>
              <br />
              <span className="text-[#334466]">Service Partner</span>{" "}
             
            </h1>

            {/* Subheading */}
            <p
              className="text-base lg:text-lg text-[#4a6080] leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              From CSC & e-Sevai services to Abacus training and Computer Education — one roof, one trusted name. Serving Thuraiyur and Musiri since 2017.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] text-white font-semibold rounded-xl text-sm shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.5)] transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span>Get Our Services</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0044aa]/25 text-[#0044aa] font-semibold rounded-xl text-sm hover:border-[#0044aa] hover:bg-[#0044aa]/5 transition-all duration-300"
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
                  className="px-3 py-1.5 text-xs text-[#0044aa] border border-[#0044aa]/18 rounded-full bg-[#f0f5ff] hover:border-[#c9a84c]/60 hover:text-[#9a7020] hover:bg-[#fffbf0] transition-colors cursor-default font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-shrink-0 w-full lg:w-[360px]">

            {/* Card */}
            <div className="relative p-6 rounded-2xl border border-[#e2d0a0] bg-white shadow-[0_20px_60px_rgba(0,68,170,0.08),0_4px_16px_rgba(201,168,76,0.1)]">
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c]" />

              <div className="relative pt-2">
                <p
                  className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Our Journey
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl bg-[#f5f8ff] border border-[#dde8f8] hover:border-[#c9a84c]/40 hover:bg-[#fffcf0] transition-colors group"
                    >
                      <div
                        className="text-2xl font-black text-[#0044aa] mb-1 group-hover:text-[#c9a84c] transition-colors"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs text-[#5570a0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p
                    className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
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
                          className="flex-1 text-center py-2 text-xs font-medium text-[#0044aa] bg-[#f0f5ff] border border-[#dde8f8] rounded-lg hover:border-[#c9a84c]/50 hover:text-[#9a7020] hover:bg-[#fffbf0] transition-colors"
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
            <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl border border-[#e2d0a0] bg-[#fffbf0]">
              <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-xs text-[#5570a0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Headquartered in <span className="text-[#9a7020] font-semibold">Thuraiyur, Tamil Nadu</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-[#9a7020]/50 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Scroll
        </span>
        <svg className="w-4 h-4 text-[#c9a84c]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}