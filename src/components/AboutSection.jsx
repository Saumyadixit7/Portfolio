function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-snap-section space-y-6"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between gap-4 ml-3">
        <div>
          <h2 className="!text-2xl font-bold text-slate-50 sm:text-xl">
            About Me
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.10em] text-slate-400">
            {/* Who I am */}
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="glass-card-soft soft-shadow space-y-4 px-6 py-5">
          <p className="text-sm leading-relaxed text-slate-200">
            I&apos;m Saumya, a Developer who enjoys building meaningful and intuitive digital solutions. I have a keen interest in creating experiences that are simple, effective, and easy to interact with.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            I’ve worked on various projects where I focused on structuring ideas into practical applications, ensuring both clarity and functionality in everything I build.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            I believe in growing through consistency and curiosity, and I’m always looking for opportunities to challenge myself and refine my skills.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Through my work, I aim to keep things simple, structured, and effective while continuously learning and improving along the way.
          </p>
        </div>

        <div className="space-y-3">
          <div className="glass-card px-5 py-4">
            <p className="mb-4 text-sm flex items-center justify-center font-bold uppercase tracking-[0.25em] text-slate-400">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'HTML',
                'CSS',
                'Bootstrap',
                'Tailwind',
                'JavaScript',
                'React JS',
                'Next JS',
                'PHP',
                'SQL',
                'Chakra UI',
                'Shadcn',
                'Framer Motion',
                'Git',
                'Github',
                'Canva',
                'CorelDraw',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/5 px-3 py-1 text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card px-5 py-4">
            <p className="mb-2 text-sm flex items-center justify-center font-bold uppercase tracking-[0.20em] text-slate-400">
              HOW I WORK
            </p>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>⚡ Breaking complex ideas into simple solutions</li>
              <li>🎯 Writing code that is structured and maintainable</li>
              <li>✨ Paying attention to small details that improve overall experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

