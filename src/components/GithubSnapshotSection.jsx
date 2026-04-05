function GithubSnapshotSection() {
  return (
    <section className="scroll-snap-section space-y-6" data-aos="fade-up">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            GitHub Snapshot
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Code activity
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="glass-card-soft soft-shadow px-5 py-4">
          <p className="text-xs text-slate-400">Total Repositories</p>
          <p className="mt-1 text-2xl font-semibold text-slate-50">20+</p>
          <p className="mt-1 text-[0.7rem] text-slate-400">
            Personal, learning, and client work.
          </p>
        </div>
        <div className="glass-card-soft soft-shadow px-5 py-4">
          <p className="text-xs text-slate-400">Main Tech Stack</p>
          <p className="mt-1 text-sm font-semibold text-slate-50">
            React · TypeScript · Tailwind
          </p>
          <p className="mt-1 text-[0.7rem] text-slate-400">
            Most repos use this stack.
          </p>
        </div>
        <div className="glass-card-soft soft-shadow px-5 py-4">
          <p className="text-xs text-slate-400">Activity</p>
          <p className="mt-1 text-sm font-semibold text-slate-50">
            Consistent contributions
          </p>
          <p className="mt-1 text-[0.7rem] text-slate-400">
            Learning and shipping side projects regularly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GithubSnapshotSection

