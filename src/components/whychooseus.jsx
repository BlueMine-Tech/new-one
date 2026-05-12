const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trusted Since 2017",
    desc: "Over 6 years of reliable service to the Thuraiyur and Musiri community — built on integrity and consistency.",
    accent: "#0088ff",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "One-Stop Hub",
    desc: "Government services, digital training, education, documentation — everything you need, all under one roof.",
    accent: "#c9a84c",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Rooted",
    desc: "We are not just a business — we are your neighbors. Deeply invested in the well-being of every family we serve.",
    accent: "#00c8ff",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Education Focused",
    desc: "From Abacus to CSC Olympiad and free computer training — we invest in shaping the next generation.",
    accent: "#c9a84c",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Government Authorised",
    desc: "Authorised CSC & e-Sevai center — officially empowered to deliver authentic government services to citizens.",
    accent: "#0088ff",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Personalised Service",
    desc: "Every client is treated with care and patience. We guide you through every step — no jargon, no confusion.",
    accent: "#00c8ff",
  },
];

const highlights = [
  { num: "500+", label: "Citizens Served" },
  { num: "10+", label: "Services Offered" },
  { num: "5+", label: "School Tie-ups" },
  { num: "Free", label: "Computer Training" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#060b12] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0044cc]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#003388]/6 blur-[100px] pointer-events-none" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,136,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,136,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/6 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0d080]" />
            <span
              className="text-xs text-[#c9a84c]/80 tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Why Choose Us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            The Sakaya Matha{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088ff] to-[#00d4ff]">
              Difference
            </span>
          </h2>
          <p
            className="mt-4 text-[#5a8ab0] max-w-lg mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We combine government-authorised services, education, and community care — so you never have to look elsewhere.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-6 rounded-2xl border border-[#1e3a5f]/50 bg-[#0a1628]/40 hover:border-[#c9a84c]/30 hover:bg-[#0a1628]/70 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${r.accent}08 0%, transparent 70%)`,
                }}
              />

              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-6xl font-black opacity-[0.04] select-none"
                style={{ fontFamily: "'Exo 2', sans-serif", color: r.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-300"
                  style={{
                    background: `${r.accent}12`,
                    borderColor: `${r.accent}25`,
                    color: r.accent,
                  }}
                >
                  {r.icon}
                </div>

                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-[#4a7fa5] text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div className="relative rounded-2xl border border-[#c9a84c]/20 bg-gradient-to-r from-[#0a1628]/60 via-[#0d1e38]/60 to-[#0a1628]/60 overflow-hidden">
          {/* Gold shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

          <div className="relative px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left text */}
            <div className="text-center sm:text-left">
              <p
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                Ready to experience the difference?
              </p>
              <p
                className="text-[#5a8ab0] text-sm mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Visit us in Thuraiyur or reach out — we're always here to help.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 sm:gap-8">
              {highlights.map(({ num, label }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#f0d080] to-[#c9a84c]"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-[10px] text-[#4a7fa5] text-center whitespace-nowrap"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#b8922a] to-[#f0d080] text-[#090d14] font-semibold rounded-xl text-sm shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_35px_rgba(201,168,76,0.45)] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/25 to-transparent" />
    </section>
  );
}