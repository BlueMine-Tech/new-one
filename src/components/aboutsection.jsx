const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Custom Solutions",
    desc: "Every project is engineered from scratch to match your exact business logic and workflows.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Scalable Architecture",
    desc: "Systems built to grow with your business — from startup to enterprise without limits.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance ensuring your operations never face downtime.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Expert Team",
    desc: "Seasoned professionals with deep domain knowledge across software and digital marketing.",
  },
];

const expertise = [
  { label: "Core Banking Systems", pct: 95 },
  { label: "Enterprise ERP", pct: 90 },
  { label: "Digital Marketing", pct: 88 },
  { label: "Mobile Applications", pct: 85 },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#060b12] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#003388]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0044cc]/6 blur-[100px] pointer-events-none" />

      {/* Subtle horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0066ff]/25 bg-[#0066ff]/6 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff]" />
            <span
              className="text-xs text-[#5a8ab0] tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About 
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            A Decade of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088ff] to-[#00d4ff]">
              Digital Excellence
            </span>
          </h2>
          <p
            className="mt-4 text-[#5a8ab0] max-w-xl mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From Software to Sales — We Deliver Results
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

          {/* Left — Story */}
          <div>
            <div className="relative pl-5 border-l-2 border-gradient mb-8"
              style={{ borderImage: "linear-gradient(to bottom, #0066ff, #00c8ff) 1" }}
            >
              <p
                className="text-[#8ab4cf] text-base leading-loose mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="text-white font-semibold"> Tech Solutions</span> was
                founded with a singular mission: to bridge the gap between technology and business
                growth. Over the past{" "}
                <span className="text-[#00c8ff] font-medium">10+ years</span>, we have delivered
                transformative software and marketing solutions to businesses across India.
              </p>
              <p
                className="text-[#8ab4cf] text-base leading-loose"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our expertise spans Core Banking systems, enterprise-grade ERP platforms, and
                full-spectrum digital marketing — positioning us as a true{" "}
                <span className="text-white font-medium">Business Growth Partner</span>, not merely
                a service vendor.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  heading: "Our Vision",
                  text: "To be the most trusted technology partner for businesses across South India and beyond.",
                  icon: "🎯",
                },
                {
                  heading: "Our Mission",
                  text: "Delivering powerful, affordable, and scalable digital solutions that drive measurable growth.",
                  icon: "🚀",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="p-5 rounded-xl border border-[#1e3a5f]/50 bg-[#0a1628]/50 hover:border-[#0066ff]/40 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4
                    className="text-white font-bold text-sm mb-2"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    {item.heading}
                  </h4>
                  <p
                    className="text-[#5a8ab0] text-xs leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Expertise bars */}
            <div className="space-y-4">
              <p
                className="text-xs text-[#4a7fa5] tracking-widest uppercase mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Core Expertise
              </p>
              {expertise.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="text-xs text-[#7ab8e8]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs text-[#0088ff] font-semibold"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#0a1e35] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0052cc] to-[#00c8ff]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Leadership + Why Us */}
          <div className="space-y-6">

            {/* Leadership Card */}
            <div className="relative p-6 rounded-2xl border border-[#1e3a5f]/50 bg-gradient-to-br from-[#0a1628]/70 to-[#071020]/70 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#0066ff]/8 blur-3xl" />
              <div className="relative flex items-start gap-5">
                {/* Avatar */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0052cc] to-[#00aaff] flex items-center justify-center text-2xl font-black text-white shadow-[0_0_20px_rgba(0,100,255,0.3)]"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  BM
                </div>
                <div>
                  <div
                    className="text-xs text-[#4a7fa5] tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Founder & CEO
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-1"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                     Leadership
                  </h3>
                  <p
                    className="text-[#5a8ab0] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    With over 10+ years in Core Banking & Enterprise IT, our founder brings deep
                    technical expertise and a passion for building solutions that create lasting
                    business impact.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Core Banking Expert", "Enterprise IT", "Digital Strategy"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] text-[#0088ff] bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <p
                className="text-xs text-[#4a7fa5] tracking-widest uppercase mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Why Choose Us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="group p-4 rounded-xl border border-[#1e3a5f]/40 bg-[#0a1628]/40 hover:border-[#0066ff]/40 hover:bg-[#0a1628]/70 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0066ff]/15 border border-[#0066ff]/20 flex items-center justify-center text-[#00aaff] group-hover:bg-[#0066ff]/25 transition-colors">
                        {v.icon}
                      </div>
                      <h4
                        className="text-white text-sm font-semibold"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {v.title}
                      </h4>
                    </div>
                    <p
                      className="text-[#4a7fa5] text-xs leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="flex-1 text-center px-5 py-3 bg-gradient-to-r from-[#0047cc] to-[#0088ff] text-white text-sm font-semibold rounded-xl hover:from-[#0055ee] hover:to-[#00aaff] transition-all shadow-[0_0_20px_rgba(0,100,255,0.3)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="flex-1 text-center px-5 py-3 border border-[#1e4a7a] text-[#7ab8e8] text-sm font-semibold rounded-xl hover:border-[#0066ff]/60 hover:bg-[#0066ff]/8 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="relative p-6 rounded-2xl border border-[#1e3a5f]/40 bg-[#0a1628]/30">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066ff]/5 via-transparent to-[#00c8ff]/5 pointer-events-none" />
          <div className="relative flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[
              { num: "10+", text: "Years Experience" },
              { num: "100+", text: "Happy Clients" },
              { num: "50+", text: "Products Built" },
              { num: "8+", text: "Industries Served" },
              { num: "24/7", text: "Support Available" },
            ].map(({ num, text }) => (
              <div key={text} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#0088ff] to-[#00d4ff]"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {num}
                </span>
                <span
                  className="text-xs text-[#4a7fa5] text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent" />
    </section>
  );
}