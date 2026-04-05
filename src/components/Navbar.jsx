import { FiMoon, FiSun } from 'react-icons/fi'

function Navbar({ sections, scrollToSection, theme, toggleTheme }) {
  return (
    <header className="!sticky top-3 z-40 mb-4">
      <div className="glass-card-soft soft-shadow flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-black/10 px-3 py-1 text-xs font-medium tracking-wider text-slate-200 backdrop-blur-sm sm:text-sm"
          onClick={() => scrollToSection('home')}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="font-bold">Saumya Dixit</span>
          {/* <span className="hidden text-[0.65rem] text-slate-400 sm:inline">
            Frontend Developer
          </span> */}
        </button>

        <nav className="hidden items-center gap-2 text-xs font-medium text-slate-200 sm:flex sm:text-[0.78rem]">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="rounded-full px-3 py-1 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-glow glass-card flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-slate-100"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/40">
              {theme === 'dark' ? (
                <FiMoon className="text-[0.75rem] text-[#2EC4B6]" />
              ) : (
                <FiSun className="text-[0.75rem] text-amber-500" />
              )}
            </span>
            <span className="hidden sm:inline">
              {theme === 'dark' ? 'Dark' : 'Light'} mode
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

