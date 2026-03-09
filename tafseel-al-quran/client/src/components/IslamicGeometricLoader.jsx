import React from 'react'
import { motion } from 'framer-motion'

const IslamicGeometricLoader = ({ size = 64, fullScreen = false }) => {
    const loader = (
        <div className="flex flex-col items-center justify-center gap-4">
            <motion.svg
                width={size}
                height={size}
                viewBox="0 0 80 80"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]"
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A84C" />
                        <stop offset="50%" stopColor="#E8C97A" />
                        <stop offset="100%" stopColor="#C9A84C" />
                    </linearGradient>
                </defs>
                <path
                    d="M40 0 L51.7 28.3 L80 40 L51.7 51.7 L40 80 L28.3 51.7 L0 40 L28.3 28.3 Z"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <path
                    d="M40 10 L48.8 31.2 L70 40 L48.8 48.8 L40 70 L31.2 48.8 L10 40 L31.2 31.2 Z"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    opacity="0.5"
                />
            </motion.svg>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-headings text-[0.7rem] tracking-[0.2em] text-gold-300 uppercase"
            >
                Loading Knowledge...
            </motion.p>
        </div>
    )

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-obsidian/90 backdrop-blur-md">
                {loader}
            </div>
        )
    }

    return loader
}

export default IslamicGeometricLoader
