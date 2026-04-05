function ExperienceSection({ experience }) {
  return (
    <section
      id="experience"
      className="scroll-snap-section space-y-6"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between gap-4 ml-3">
        <div>
          <h2 className="!text-2xl font-semibold text-slate-50 sm:text-xl">
            Experience
          </h2>
          <p className="text-sm uppercase tracking-[0.10em] text-slate-400">
            {/* Journey so far */}
          </p>
        </div>
      </div>

      <div className="relative grid gap-6 md:grid-cols-[0.6fr,1.4fr]">
        <div className="glass-card px-5 py-4 text-sm text-slate-200">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Snapshot
          </p>
          <p>
            Crafting reliable and well-structured digital solutions with an emphasis on clarity, performance, and execution.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 via-slate-700 to-transparent" />
          <div className="space-y-5">
            {experience.map((item, index) => (
              <div key={item.year} className="relative pl-10">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_rgba(46,196,182,0.9)]" />
                <div className="glass-card-soft px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[0.7rem]">
                      {item.year}
                    </span>
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                      {index === 0 ? 'Latest' : 'Previous'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-50">
                    {item.role}
                  </p>
                  <p className="text-xs text-slate-300">{item.company}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

