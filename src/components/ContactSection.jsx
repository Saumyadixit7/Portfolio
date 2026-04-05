import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function ContactSection() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // 👉 basic validation (important)
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill all fields ⚠️")
            return
        }

        setLoading(true)

        try {
            const response = await emailjs.send(
                "service_fslfagb",
                "template_2gjmiyh",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                "lnhRDb6lKXQpoqIj6"
            )

            console.log("SUCCESS:", response)

            alert("Message sent successfully ✅")

            setFormData({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {
            console.log("ERROR FULL:", error)
            alert("Failed ❌ - Check console")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            id="contact"
            className="scroll-snap-section space-y-6 mb-12"
            data-aos="fade-up"
        >
            <div className="flex flex-wrap items-center justify-between gap-4 ml-3">
                <div>
                    <h2 className="!text-2xl font-semibold text-slate-50 sm:text-xl">
                        Contact
                    </h2>
                    <p className="text-sm uppercase tracking-[0.10em] text-slate-400">
                        {/* Let&apos;s build something */}
                    </p>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">

                <form onSubmit={handleSubmit} className="glass-card-soft soft-shadow space-y-4 px-6 py-5">

                    <div className="grid gap-4 sm:grid-cols-2">

                        <div className="space-y-1.5 text-sm">
                            <label className="text-xs text-slate-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full rounded-xl border border-white/5 bg-black/30 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-[var(--color-accent)] focus:bg-black/40"
                            />
                        </div>

                        <div className="space-y-1.5 text-sm">
                            <label className="text-xs text-slate-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/5 bg-black/30 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-[var(--color-accent)] focus:bg-black/40"
                            />
                        </div>

                    </div>

                    <div className="space-y-1.5 text-sm">
                        <label className="text-xs text-slate-300">Message</label>
                        <textarea
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Send me a message..."
                            className="w-full resize-none rounded-xl border border-white/5 bg-black/30 px-3 py-2 text-xs text-slate-100 outline-none transition focus:border-[var(--color-accent)] focus:bg-black/40"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_20px_40px_rgba(46,196,182,0.55)]"
                    >
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                        <FiArrowUpRight className="text-base" />
                    </button>

                </form>

                {/* RIGHT SIDE SAME */}
                <div className="space-y-4">
                    <div className="glass-card px-5 py-4 text-sm text-slate-200">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                            Connect
                        </p>
                        <p className="text-sm text-slate-200">
                            Prefer email or DMs? Reach out on any of these platforms.
                        </p>
                    </div>

                    <div className="space-y-3 text-sm">

                        <a href="https://github.com/Saumyadixit7" target="_blank" rel="noreferrer"
                            className="glass-card flex items-center justify-between rounded-2xl px-4 py-3 text-slate-100 transition hover:bg-white/10">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60">
                                    <FiGithub size={20} />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold">GitHub</p>
                                    <p className="text-[0.7rem] text-slate-400">
                                        github.com/Saumyadixit7
                                    </p>
                                </div>
                            </div>
                            <FiArrowUpRight className="text-sm text-slate-400" />
                        </a>

                        <a href="https://www.linkedin.com/in/saumya-dixit-5bb3a3260/" target="_blank" rel="noreferrer"
                            className="glass-card flex items-center justify-between rounded-2xl px-4 py-3 text-slate-100 transition hover:bg-white/10">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
                                    <FiLinkedin size={20} />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold">LinkedIn</p>
                                    <p className="text-[0.7rem] text-slate-400">
                                        linkedin.com/in/saumya-dixit-5bb3a3260/
                                    </p>
                                </div>
                            </div>
                            <FiArrowUpRight className="text-sm text-slate-400" />
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saumya25d01@gmail.com"
                            target="_blank"
                            className="glass-card flex items-center justify-between rounded-2xl px-4 py-3 text-slate-100 transition hover:bg-white/10">
                            <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                                    <FiMail size={20} />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold">Email</p>
                                    <p className="text-[0.7rem] text-slate-400">
                                        saumya25d01@gmail.com
                                    </p>
                                </div>
                            </div>
                            <FiArrowUpRight className="text-sm text-slate-400" />
                        </a>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactSection