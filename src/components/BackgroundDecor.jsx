import { motion } from 'framer-motion'

function BackgroundDecor({ cursorPos }) {
  return (
    <>
      {/* Background Particles */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,#2EC4B6,transparent_60%)] opacity-60 blur-3xl"
          animate={{ y: [0, 16, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,#38bdf8,transparent_60%)] opacity-50 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Cursor Glow */}
      <div className="cursor-glow">
        <div
          className="cursor-glow-orb"
          style={{
            left: cursorPos.x || 0,
            top: cursorPos.y || 0,
          }}
        />
      </div>

      <div className="noise-overlay" />
    </>
  )
}

export default BackgroundDecor

