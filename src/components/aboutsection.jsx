const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "🎯 Personal Attention for Every Student",
    desc: "We understand that every child learns differently. Our supportive guidance helps students grow with confidence and clarity.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "📘 Career & Competitive Exam Preparation",
    desc: "From digital skills to competitive coaching, we prepare students for academic success and future career opportunities.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "🛡️ Trusted & Student-Friendly Environment",
    desc: "Parents trust us for our disciplined atmosphere, caring mentorship, and commitment to every student's progress",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Modern Learning with Real-World Skills",
    desc: "We combine education, technology, and practical digital knowledge to help students succeed in today's world..",
  },
];

const growthMilestones = [
  { year: "2017", emoji: "🖨", label: "Started as a Xerox & Basic Service Center in Krishnapuram" },
  { year: "2018", emoji: "📄", label: "Expanded into CSC & e-Sevai Government Services" },
  { year: "2019", emoji: "💻", label: "Introduced Computer Education & Digital Training" },
  { year: "2021", emoji: "🧠", label: "Started Abacus & Skill Development Programs" },
  { year: "2023", emoji: "📘", label: "Expanded into Competitive Exam Coaching" },
  { year: "2024", emoji: "🌍", label: "Became a Trusted Digital & Educational Hub Serving Thousands" },
];

const achievements = [
  { year: "2023", title: "Tamilnadu Agri Camp" },
  { year: "2024", title: "CSC Olympiad Zonal Level 2nd Winner" },
  { year: "2026", title: "CSC Olympiad National Level 2nd Winner" },
];

const trustStats = [
  { num: "2017", text: "Est. Krishnapuram" },
  { num: "2019", text: "Expanded to Thuraiyur" },
  { num: "1000+", text: "Students Trained" },
  { num: "10+", text: "School Tie-ups" },
  { num: "3K+", text: "Free & Paid Courses" },
  { num: "Free", text: "Computer Training" },
  { num: "100%", text: "Placement Training" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0044aa]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#fffbf0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <span
              className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About Us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] leading-tight"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            From a Small Beginning,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0044aa] to-[#0077dd]">
              to a Trusted Institution
            </span>
          </h2>
          <p
            className="mt-4 text-[#4a6080] max-w-xl mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            For over 10 years, we have proudly guided students, families, and communities toward education, digital access, and brighter opportunities.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

          {/* Left — Growth Timeline + Achievements */}
          <div>

            {/* Growth Milestones replacing the paragraph */}
            <div className="relative mb-8" style={{ borderLeft: "3px solid #c9a84c" }}>
              <div className="space-y-0">
                {growthMilestones.map(({ year, emoji, label }, i) => (
                  <div
                    key={year}
                    className="relative pl-5 py-3 hover:bg-[#fffbf0] transition-colors rounded-r-xl group"
                    style={{
                      borderBottom: i < growthMilestones.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
                    }}
                  >
                    {/* Dot on the left border */}
                    <span
                      className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a84c] border-2 border-white"
                    />
                    <div className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 px-2 py-0.5 text-[10px] font-black text-white bg-[#0044aa] rounded-md"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {year}
                      </span>
                      <span className="text-sm">{emoji}</span>
                      <p
                        className="text-[#3a5070] text-xs leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <p
                className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                🏆 Our Achievements
              </p>
              <div className="space-y-3">
                {achievements.map(({ year, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 p-3 rounded-xl border border-[#e2d0a0] bg-[#fffbf0] hover:border-[#c9a84c]/60 hover:shadow-sm transition-all"
                  >
                    <span
                      className="flex-shrink-0 px-2.5 py-1 text-[10px] font-black text-white bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] rounded-md shadow-sm"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {year}
                    </span>
                    <p
                      className="text-[#4a6080] text-xs font-medium leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  heading: "Our Vision",
                  text: "To help every student learn with confidence, grow with skills, and succeed through quality education and trusted guidance.",
                  icon: "🎯",
                },
                {
                  heading: "Our Mission",
                  text: "Empowering students through education, skills, and digital innovation.",
                  icon: "🚀",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="p-5 rounded-xl border border-[#e2d0a0] bg-[#fffbf0] hover:border-[#c9a84c]/60 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4
                    className="text-[#0a1628] font-bold text-sm mb-2"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    {item.heading}
                  </h4>
                  <p
                    className="text-[#4a6080] text-xs leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Identity Card */}
            <div className="relative p-6 rounded-2xl border border-[#dde8f8] bg-[#f5f8ff] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0044aa] via-[#0077dd] to-[#0044aa]" />
              <div className="relative flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#f0d080] flex items-center justify-center text-xl font-black text-white shadow-[0_4px_16px_rgba(201,168,76,0.35)]"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  SM
                </div>
                <div>
                  <div
                    className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Established 2017
                  </div>
                  <h3
                    className="text-[#0a1628] font-bold text-lg mb-1"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Sagayamadha Tech Hub
                  </h3>
                  <p
                    className="text-[#4a6080] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    From a single Xerox center to a comprehensive digital and educational institution — a story of community service, steady growth, and unwavering commitment.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["CSC VLE", "e-Sevai Center", "HIBM Abacus Partner", "CSC Academy"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] text-[#0044aa] bg-white border border-[#0044aa]/20 rounded-full font-medium"
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
                className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Why Students & Parents Choose Us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="group p-4 rounded-xl border border-[#dde8f8] bg-white hover:border-[#c9a84c]/50 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: "rgba(0, 68, 170, 0.08)",
                          border: "1px solid rgba(0, 68, 170, 0.15)",
                          color: "#0044aa",
                        }}
                      >
                        {v.icon}
                      </div>
                      <h4
                        className="text-[#0a1628] text-sm font-semibold"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {v.title}
                      </h4>
                    </div>
                    <p
                      className="text-[#4a6080] text-xs leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="flex-1 text-center px-5 py-3 bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] text-white text-sm font-semibold rounded-xl hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)] transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Our Services
              </a>
              <a
                href="#services"
                className="flex-1 text-center px-5 py-3 border-2 border-[#0044aa]/25 text-[#0044aa] text-sm font-semibold rounded-xl hover:border-[#0044aa] hover:bg-[#0044aa]/5 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore Services
              </a>
            </div>

          </div>
        </div>

        {/* Trust Bar */}
        <div className="relative p-6 rounded-2xl border border-[#e2d0a0] bg-gradient-to-r from-[#fffbf0] via-white to-[#fffbf0] shadow-[0_4px_24px_rgba(201,168,76,0.08)]">
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
          <div className="relative flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustStats.map(({ num, text }) => (
              <div key={text} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl lg:text-3xl font-black text-[#0044aa]"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {num}
                </span>
                <span
                  className="text-xs text-[#4a6080] text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

    </section>
  );
}