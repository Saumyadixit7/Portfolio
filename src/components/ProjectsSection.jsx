import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectsSection({
  filteredProjects,
  projectFilter,
  setProjectFilter,
}) {

  // ✅ NEW STATE
  const [showAll, setShowAll] = useState(false)

  // ✅ SHOW ONLY 4 INITIALLY
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4)

  return (
    <section
      id="projects"
      className="scroll-snap-section space-y-6"
      data-aos="fade-up"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 ml-3">
        <div>
          <h2 className="!text-2xl font-semibold text-slate-50 sm:text-xl">
            Projects
          </h2>
          <p className="text-sm uppercase tracking-[0.10em] text-slate-400">
            {/* Selected work */}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 text-[16px] sm:text-md mr-4">
          {[
            { id: 'all', label: 'All' },
            { id: 'ecommerce', label: 'E-commerce' },
            { id: 'game', label: 'Game' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'others', label: 'Others' },
          ].map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                setProjectFilter(filter.id)
                setShowAll(false) // ✅ reset on filter change
              }}
              className={`rounded-full px-3 py-1 transition ${projectFilter === filter.id
                ? 'bg-[var(--color-accent)] text-slate-900 shadow-[0_0_18px_rgba(46,196,182,0.6)]'
                : 'bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group glass-card-soft soft-shadow overflow-hidden"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[0.7rem] text-slate-100">
                <span className="rounded-full bg-black/60 px-2 py-0.5">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
              <h3 className="text-sm font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300">{project.stack}</p>
              <div className="mt-1 flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => window.open(project.link, `_blank`)}
                  className="glass-card flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.75rem] text-slate-100 cursor-pointer"
                >
                  <FiGithub className="text-sm" />
                  GitHub
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ✅ SHOW MORE / LESS BUTTON */}
      {filteredProjects.length > 4 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-glow rounded-full px-5 py-2 text-sm font-semibold bg-[var(--color-accent)] text-slate-900 shadow-[0_10px_30px_rgba(46,196,182,0.5)]"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </section>
  )
}

export default ProjectsSection