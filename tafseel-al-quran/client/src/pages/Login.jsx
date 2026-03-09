import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, LogIn, ArrowRight, Star } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import toast from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { login } = useAuthStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            // Mock Login for demonstration
            setTimeout(() => {
                login({ id: 1, name: 'Tabish Khan', email: email }, 'mock_token', 'mock_refresh')
                toast.success('Assalamu Alaikum, welcome back!')
                navigate('/dashboard')
                setLoading(false)
            }, 1500)
        } catch (err) {
            toast.error('Invalid credentials. Please try again.')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-obsidian relative overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="manuscript-card p-10 md:p-12 shadow-[var(--glow-gold-strong)]">
                    <div className="text-center mb-10">
                        <div className="h-16 w-16 rounded-full bg-gold-900/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-6 shadow-gold-strong">
                            <Star className="h-8 w-8 text-gold-500 fill-current" />
                        </div>
                        <h1 className="font-headings text-3xl font-bold text-gold-300">Welcome Back</h1>
                        <p className="text-text-muted mt-2 text-sm">Please enter your details to login</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-2xl bg-navy-900 border border-border-subtle p-4 pl-12 text-text-primary outline-none focus:border-gold-500/50 transition-all font-medium"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest">Password</label>
                                <Link to="/forgot-password" size="sm" className="text-[0.65rem] font-bold text-gold-500 hover:text-gold-300">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    <LogIn className="h-5 w-5" />
                                    <span>Login to Dashboard</span>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-text-muted">
                        Don't have an account? {' '}
                        <Link to="/register" className="font-bold text-gold-500 hover:text-gold-300 transition-colors">
                            Create an account
                        </Link>
                    </p>
                </div>

                <p className="mt-8 text-center text-[0.65rem] text-text-muted italic opacity-60">
                    Sadaqah-e-Jariyah Project by Tabish Khan
                </p>
            </motion.div>
        </div>
    )
}

export default Login
