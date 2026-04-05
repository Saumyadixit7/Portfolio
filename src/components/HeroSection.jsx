import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import resume from "../assets/resume/SAUMYA-Resume.pdf"
import profileImg from "../assets/img/saumya.jpeg"

function HeroSection({ scrollToSection }) {
  return (
    <section
      id="home"
      className="scroll-snap-section mt-4 grid items-center gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-3 rounded-full bg-black/30 px-2.5 py-1 text-xs text-slate-300 backdrop-blur">
          <span className="relative h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-80" />
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 blur-sm" />
          </span>
          <span>Available</span>
        </div>

        <div className="space-y-3">
          <p className="lg:!text-xl text-slate-300 sm:text-base">
            Hi, I&apos;m{' '}
            <span className="font-semibold text-slate-300">Saumya Dixit</span> 👋
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
            A Passionate Developer{' '}
            <span className="text-gradient-primary">
              focused on turning creative ideas into impactful and user-centric
            </span>{' '}
            digital experiences.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
            Dedicated to improving performance, usability, and design, while continuously exploring new tools and technologies to stay ahead. Committed to learning, growing, and building impactful digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="btn-glow flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(46,196,182,0.45)] transition hover:brightness-110 hover:cursor-pointer"
          >
            <span>View Projects</span>
            <FiArrowUpRight className="text-base" />
          </button>
          <a
            href={resume}
            target='blank'
            type="button"
            className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-100"
          >
            <FiDownload className="text-base text-sky-300" />
            <span>Download Resume</span>
          </a>
        </div>


      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <div className="glass-card-soft soft-shadow relative mx-auto flex max-w-md flex-col items-center gap-4 overflow-hidden px-6 py-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#2EC4B6_0,transparent_55%)] opacity-50" />

          <div className="relative flex flex-col items-center gap-3">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative h-56 w-56 rounded-3xl bg-[radial-gradient(circle_at_top,#2EC4B6,#13466E)] shadow-[0_22px_45px_rgba(15,23,42,0.9)]"
            >
              <div className="absolute inset-2 rounded-2xl bg-[radial-gradient(circle_at_top,#0b1120,#020617)]" />
              <div className="absolute inset-[14px] rounded-2xl bg-[radial-gradient(circle_at_top,#1e293b,#0b1120)]" />
              <div className="hero-badge-text absolute inset-[18px] flex items-center justify-center rounded-2xl text-center text-xs font-medium text-white">
                {/* <span className="leading-snug">
                  Web
                  <br />
                  Developer
                </span> */}
                <img src={profileImg} alt="Saumya Dixit" className="h-full w-full rounded-2xl object-cover" />
              </div>
            </motion.div>

            {/* <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Saumya
              </p>
              <p className="text-[0.8rem] text-slate-300">
                React · Tailwind · Motion
              </p>
            </div> */}
          </div>

          <div className="relative mt-2 grid w-full grid-cols-2 gap-2 text-[0.7rem] text-slate-200">
            <div className="glass-card flex flex-col items-start gap-1 rounded-2xl px-3 py-2">
              <span className="text-[0.65rem] text-slate-400">Focus</span>
              <span>Web Development</span>
            </div>
            <div className="glass-card flex flex-col items-start gap-1 rounded-2xl px-3 py-2">
              <span className="text-[0.65rem] text-slate-400">Strength</span>
              <span>Quality Focus</span>
            </div>
            {/* <div className="glass-card flex flex-col items-start gap-1 rounded-2xl px-3 py-2">
              <span className="text-[0.65rem] text-slate-400">Location</span>
              <span>Remote</span>
            </div> */}
          </div>

          <div className="relative mt-2 flex w-full items-center justify-between gap-3 text-md text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
              <span>Open to work</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Saumyadixit7"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black/50 p-1.5 text-slate-100 transition hover:bg-black/70 !text-xl"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saumya-dixit-5bb3a3260/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black/50 p-1.5 text-slate-100 transition hover:bg-black/70 !text-xl"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saumya25d01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black/50 p-1.5 text-slate-100 transition hover:bg-black/70 !text-xl"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

