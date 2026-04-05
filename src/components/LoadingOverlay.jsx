import { motion } from 'framer-motion'

function LoadingOverlay({ isLoading }) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card-soft flex flex-col items-center gap-4 px-10 py-8 text-center"
      >
        <motion.div
          className="relative h-12 w-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(148,163,184,0.6)]" />
          <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_top,#2EC4B6,#13466E)]" />
        </motion.div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          Saumya · Portfolio
        </p>
        <p className="text-xs text-slate-400">Where Ideas Take Shape...</p>
      </motion.div>
    </div>
  )
}

export default LoadingOverlay

