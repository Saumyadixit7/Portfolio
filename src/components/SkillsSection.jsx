import { motion } from 'framer-motion'

function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="scroll-snap-section space-y-6"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between gap-4 ml-3">
        <div>
          <h2 className="!text-2xl font-bold text-slate-50 sm:text-xl">
            Skills
          </h2>
          <p className="text-sm uppercase tracking-[0.10em] text-slate-400">
            {/* My toolbox */}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            className="glass-card-soft soft-shadow px-6 py-5"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <p className="mb-3 text-sm font-semibold text-slate-100">
              {group.category}
            </p>
            <div className="space-y-3">
              {group.items.map((skillItem) => (
                <div key={skillItem.name}>
                  <div className="mb-1 flex items-center justify-between text-xs text-slate-200">
                    <span>{skillItem.name}</span>
                    {/* <span>{skillItem.level}%</span> */}
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillItem.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#2EC4B6] via-sky-400 to-indigo-400 shadow-[0_0_16px_rgba(56,189,248,0.7)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

