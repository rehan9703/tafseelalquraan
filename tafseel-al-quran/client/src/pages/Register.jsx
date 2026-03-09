import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, UserPlus, Star } from 'lucide-react'
import toast from 'react-hot-toast'

const Register = () => {
    const [values, setValues] = useState({ name: '', email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            setTimeout(() => {
                toast.success('Registration successful! Welcome to the Ummah.')
                navigate('/login')
                setLoading(false)
            }, 1500)
        } catch (err) {
            toast.error('Registration failed. Please try again.')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-obsidian relative overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="manuscript-card p-10 md:p-12 shadow-[var(--glow-gold-strong)]">
                    <div className="text-center mb-10">
                        <div className="h-16 w-16 rounded-full bg-gold-900/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-6 shadow-gold-strong">
                            <Star className="h-8 w-8 text-gold-500 fill-current" />
                        </div>
                        <h1 className="font-headings text-3xl font-bold text-gold-300">Join the Journey</h1>
                        <p className="text-text-muted mt-2 text-sm">Create your personal Islamic knowledge vault</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                                <input
                                    type="text"
                                    required
                                    value={values.name}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                                    className="w-full rounded-2xl bg-navy-900 border border-border-subtle p-4 pl-12 text-text-primary outline-none focus:border-gold-500/50 transition-all font-medium"
                                    placeholder="Full Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                                <input
                                    type="email"
                                    required
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    className="w-full rounded-2xl bg-navy-900 border border-border-subtle p-4 pl-12 text-text-primary outline-none focus:border-gold-500/50 transition-all font-medium"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                                <input
                                    type="password"
                                    required
                                    value={values.password}
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    className="w-full rounded-2xl bg-navy-900 border border-border-subtle p-4 pl-12 text-text-primary outline-none focus:border-gold-500/50 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-gold h-14 flex items-center justify-center gap-3 text-sm font-bold mt-4"
                        >
                            {loading ? (
                                <div className="h-6 w-6 border-3 border-navy-900 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <UserPlus className="h-5 w-5" />
                                    <span>Create Account</span>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-text-muted">
                        Already have an account? {' '}
                        <Link to="/login" className="font-bold text-gold-500 hover:text-gold-300 transition-colors">
                            Login here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Register
