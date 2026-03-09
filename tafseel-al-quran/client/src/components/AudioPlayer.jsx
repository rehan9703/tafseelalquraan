import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Volume2, X } from 'lucide-react'
import { Howl } from 'howler'

const AudioPlayer = ({ src, title, artist, onClose }) => {
    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const soundRef = useRef(null)

    useEffect(() => {
        if (src) {
            soundRef.current = new Howl({
                src: [src],
                html5: true,
                onload: () => setDuration(soundRef.current.duration()),
                onplay: () => setPlaying(true),
                onpause: () => setPlaying(false),
                onend: () => setPlaying(false),
                onstop: () => setPlaying(false),
            })
            soundRef.current.play()
        }

        return () => {
            if (soundRef.current) {
                soundRef.current.unload()
            }
        }
    }, [src])

    useEffect(() => {
        let interval
        if (playing) {
            interval = setInterval(() => {
                setProgress(soundRef.current.seek() || 0)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [playing])

    const togglePlay = () => {
        if (playing) soundRef.current.pause()
        else soundRef.current.play()
    }

    const handleSeek = (e) => {
        const val = parseFloat(e.target.value)
        soundRef.current.seek(val)
        setProgress(val)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 w-80 manuscript-card p-6 shadow-gold-strong border-gold-500/30"
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="overflow-hidden">
                    <h4 className="truncate text-sm font-bold text-gold-300 tracking-wide uppercase">{title}</h4>
                    <p className="truncate text-[0.6rem] text-text-muted italic">{artist}</p>
                </div>
                <button onClick={onClose} className="text-text-muted hover:text-crimson">
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Waveform Animation Placeholder (using CSS) */}
            <div className="flex items-center justify-center gap-1 h-8 mb-6">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            height: playing ? [8, 24, 8, 16, 8] : 8,
                            opacity: playing ? 1 : 0.4
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                        className="w-1 bg-gold-500 rounded-full"
                    />
                ))}
            </div>

            <div className="mb-4">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={progress}
                    onChange={handleSeek}
                    className="w-full accent-gold-500 bg-navy-900 h-1 rounded-full cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-[0.6rem] font-mono text-text-muted">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-6">
                <button className="text-text-muted hover:text-gold-300"><SkipBack className="h-5 w-5" /></button>
                <button
                    onClick={togglePlay}
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-gold-strong hover:scale-105 active:scale-95 transition-all"
                >
                    {playing ? <Pause className="h-6 w-6 fill-current" /> : <Play className="h-6 w-6 fill-current ml-1" />}
                </button>
                <button className="text-text-muted hover:text-gold-300"><SkipForward className="h-5 w-5" /></button>
            </div>
        </motion.div>
    )
}

export default AudioPlayer
