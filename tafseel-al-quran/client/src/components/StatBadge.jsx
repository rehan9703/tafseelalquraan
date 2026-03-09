import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatBadge = ({ icon: Icon, value, label, delay = 0 }) => {
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) {
            const duration = 1500
            const steps = 60
            const stepValue = value / steps
            let current = 0
            const timer = setInterval(() => {
                current += stepValue
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(timer)
        }
    }, [inView, value])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="manuscript-card group flex flex-col items-center justify-center p-6 text-center"
        >
            <div className="mb-3 rounded-full bg-gold-900/20 p-3 text-gold-500 transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-mono text-3xl font-bold text-gold-300">
                {count}
            </h3>
            <p className="mt-1 text-[0.65rem] font-semibold tracking-widest text-text-muted uppercase">
                {label}
            </p>
        </motion.div>
    )
}

export default StatBadge
