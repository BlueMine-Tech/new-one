const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Trusted Quality",
    desc: "Every service is delivered with integrity, accuracy, and a commitment to excellence.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Focus",
    desc: "Rooted in Thuraiyur, we serve and uplift our local community through accessible services.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Education First",
    desc: "Nurturing young minds through Abacus training, Olympiads, and free computer programs.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "One-Stop Access",
    desc: "Government services, digital training, and documentation — all under a single roof.",
  },
];

const milestones = [
  { year: "2017", event: "Founded as Sakaya Matha Xerox Center, Krishnapuram" },
  { year: "2017", event: "Expanded into CSC & e-Sevai digital services" },
  { year: "2019", event: "Launched A to Z Service & Consultancy in Thuraiyur" },
  { year: "2019+", event: "Partnered with HIBM Abacus & CSC Olympiad programs" },
  { year: "Today", event: "Operating as Sakaya Matha Digital Hub & Academy" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Background tints */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0044aa]/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a84c]/5 blur-[100px] pointer-events-none" />

      {/* Top separator */}
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
            A Humble Beginning,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0044aa] to-[#0077dd]">
              A Lasting Impact
            </span>
          </h2>
          <p
            className="mt-4 text-[#4a6080] max-w-xl mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Quality · Trust · Community — since 2017
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

          {/* Left — Story */}
          <div>
            {/* Story block */}
            <div
              className="relative pl-5 mb-8"
              style={{ borderLeft: "3px solid #c9a84c" }}
            >
              <p
                className="text-[#3a5070] text-base leading-loose mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="text-[#0a1628] font-semibold">Sakaya Matha</span> began in 2017 as a modest Xerox center in Krishnapuram, built on a foundation of dependability and community trust. Over time, we evolved into a full-spectrum digital and educational hub — driven by innovation and genuine care for the people we serve.
              </p>
              <p
                className="text-[#3a5070] text-base leading-loose"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                From CSC and e-Sevai services to Panchayat approvals, medical assistance, Abacus training, and free computer literacy programs — we bring essential services and opportunities to every doorstep in Thuraiyur and Musiri.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  heading: "Our Vision",
                  text: "To be the most trusted digital and educational hub for every citizen in our community.",
                  icon: "🎯",
                },
                {
                  heading: "Our Mission",
                  text: "Bridging the gap between people and essential services through accessibility, integrity, and education.",
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

            {/* Timeline */}
            <div>
              <p
                className="text-xs text-[#9a7020] tracking-widest uppercase font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Journey
              </p>
              <div className="space-y-3">
                {milestones.map(({ year, event }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 px-2.5 py-1 text-[10px] font-bold text-white bg-[#0044aa] rounded-md"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {year}
                    </span>
                    <p
                      className="text-[#4a6080] text-xs leading-relaxed pt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {event}
                    </p>
                  </div>
                ))}
              </div>
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
                    Sakaya Matha Digital Hub & Academy
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
                Why Choose Us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="group p-4 rounded-xl border border-[#dde8f8] bg-white hover:border-[#c9a84c]/50 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0044aa]/8 border border-[#0044aa]/15 flex items-center justify-center text-[#0044aa] group-hover:bg-[#c9a84c]/12 group-hover:border-[#c9a84c]/30 group-hover:text-[#9a7020] transition-colors">
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

            {/* CTA Row */}
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
          <div className="relative flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[
              { num: "2017", text: "Est. Krishnapuram" },
              { num: "2019", text: "Expanded to Thuraiyur" },
              { num: "500+", text: "Citizens Served" },
              { num: "5+", text: "School Tie-ups" },
              { num: "Free", text: "Computer Training" },
            ].map(({ num, text }) => (
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

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </section>
  );
}