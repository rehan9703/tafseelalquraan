import React from 'react'
import { motion } from 'framer-motion'

const ProgressRing = ({ percentage = 0, size = 120, strokeWidth = 8, label }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="h-full w-full rotate-[-90deg]">
                    {/* Background Ring */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        className="text-navy-700"
                    />
                    {/* Progress Ring */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="url(#goldGradientProgress)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="goldGradientProgress" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7A5C1E" />
                            <stop offset="50%" stopColor="#C9A84C" />
                            <stop offset="100%" stopColor="#E8C97A" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-mono text-xl font-bold text-gold-300">{Math.round(percentage)}%</span>
                </div>
            </div>
            {label && <span className="text-[0.6rem] font-semibold tracking-widest text-text-muted uppercase">{label}</span>}
        </div>
    )
}

export default ProgressRing
