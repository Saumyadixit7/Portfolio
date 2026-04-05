import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import LoadingOverlay from './components/LoadingOverlay'
import BackgroundDecor from './components/BackgroundDecor'

import Pglife from "./assets/projects/PGLife.png"
import Portfolio from "./assets/projects/Portfolio.png"
import Twill from "./assets/projects/Twill.png"
import Tazza from "./assets/projects/Tazza.png"
import TicTacToe from "./assets/projects/Tic-Tac-Toe.png"
import RockPaperScissors from "./assets/projects/Rock-Paper-Scissors.png"
import ImageGallery from "./assets/projects/Image-Gallery.png"

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'Portfolio',
    stack: 'HTML · CSS · Tailwind · React · Framer Motion',
    category: 'portfolio',
    image: Portfolio,
  },
  {
    title: 'PG LIFE',
    stack: 'HTML · CSS · Javascript · Bootstrap · PHP · React · SQL',
    category: 'ecommerce',
    image: Pglife,
    link: `https://github.com/Saumyadixit7/PG-Life`,
  },
  {
    title: 'Twill Fashion E-commerce',
    stack: 'HTML · CSS · Tailwind · Javascript · React · Vite',
    category: 'ecommerce',
    image: Twill,
    link: `https://github.com/Saumyadixit7/Twill`,
  },
  {
    title: 'Rock Paper Scissors Game',
    stack: 'HTML · CSS · Javascript',
    category: 'game',
    image: RockPaperScissors,
    link: `https://github.com/Saumyadixit7/Rock-Paper-Scissors-Game`,
  },
  {
    title: 'Tic Tac Toe Game',
    stack: 'HTML · CSS · Javascript',
    category: 'game',
    image: TicTacToe,
    link: `https://github.com/Saumyadixit7/Tic-Tac-Toe-Game`,
  },
  {
    title: 'Tazza',
    stack: 'HTML · CSS · Javascript',
    category: 'ecommerce',
    image: Tazza,
    link: `https://github.com/Saumyadixit7/Tazza`,
  },
  {
    title: 'Image Gallery',
    stack: 'HTML · CSS · PHP',
    category: 'others',
    image: ImageGallery,
    link: `https://github.com/Saumyadixit7/Image-gallery`,
  },
]

const experience = [
  {
    year: 'From 2025',
    role: 'Developer',
    company: 'Trigya Innovations | Present',
    description: `Working on developing responsive and visually consistent web interfaces using modern development practices.
Contributing to reusable components, resolving UI issues, and improving overall application performance through collaboration with the team.`,
  },
  {
    year: '2024',
    role: 'Web Development Training',
    company: 'Internshala',
    description:
      'Successfully completed an intensive 8-week program focused on developing strong fundamentals and applying them through real-world projects and hands-on practice.',
  },
]

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML', level: 98 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    category: 'UI & Styling',
    items: [
      { name: 'CSS', level: 98 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Chakra UI', level: 85 },
      { name: 'ShadCN UI', level: 80 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', level: 70 },
      { name: 'GitHub', level: 75 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL', level: 80 },
      { name: 'PhpMyAdmin', level: 85 }
    ],
  },
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [projectFilter, setProjectFilter] = useState('all')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    }
    setTimeout(() => setIsLoading(false), 1200)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light')
    document.documentElement.classList.add(
      theme === 'dark' ? 'theme-dark' : 'theme-light',
    )
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  useEffect(() => {
    const handler = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('pointermove', handler)
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return projects
    return projects.filter((p) => p.category === projectFilter)
  }, [projectFilter])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen bg-transparent text-[var(--color-text)]">
      <BackgroundDecor cursorPos={cursorPos} />
      <LoadingOverlay isLoading={isLoading} />

      {/* IMPORTANT: removed overflow-hidden */}
      <div className="relative mx-auto flex min-h-screen max-w-full flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">

        <Navbar
          sections={sections}
          scrollToSection={scrollToSection}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="flex flex-1 flex-col gap-20 sm:gap-24">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection skills={skills} />
          <ProjectsSection
            filteredProjects={filteredProjects}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
          />
          <ExperienceSection experience={experience} />
          <ContactSection />
        </main>

        {/* <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-10 border-t border-white/5 pt-5"> <p>This Website Made Using :</p> <div className="flex items-center gap-2"> <span className="h-7 w-7 rounded-full bg-[#0b3557] shadow-lg shadow-cyan-500/30" /> <span>React</span> </div> <div className="flex items-center gap-2"> <span className="h-7 w-7 rounded-full bg-sky-500 shadow-lg shadow-sky-400/30" /> <span>Tailwind</span> </div> <div className="flex items-center gap-2"> <span className="h-7 w-7 rounded-full bg-[#0f172a] shadow-lg shadow-emerald-400/30" /> <span>Framer Motion</span> </div> </div> */}

        {/* <footer className="mt-10 border-t border-white/5 pt-5 text-center text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} Saumya · Developer
          </div>
        </footer> */}

        <footer className="mt-2 border-t flex flex-col items-center justify-between gap-3 pt-4 text-[1rem] text-slate-400 sm:flex-row"> <p>© {new Date().getFullYear()} Saumya · Web Developer</p> <div className="flex items-center gap-3"> <button type="button" onClick={() => scrollToSection('home')} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10" > Back to top </button> </div> </footer>

      </div>
    </div>
  )
}

export default App