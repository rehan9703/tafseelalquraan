import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Trophy, Clock, ArrowRight, RotateCcw, CheckCircle2, XCircle } from 'lucide-react'

const QUESTIONS = [
    {
        id: 1,
        question: "Which Surah is known as the 'Heart of the Qur'an'?",
        options: ["Surah Al-Fatihah", "Surah Ya-Sin", "Surah Al-Mulk", "Surah Ar-Rahman"],
        answer: 1,
        explanation: "Prophet Muhammad ﷺ said that Surah Ya-Sin is the heart of the Qur'an."
    },
    {
        id: 2,
        question: "How many months are sacred in the Islamic calendar?",
        options: ["2", "4", "3", "6"],
        answer: 1,
        explanation: "The four sacred months are Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab."
    },
    {
        id: 3,
        question: "Which Prophet is mentioned most in the Qur'an?",
        options: ["Prophet Muhammad ﷺ", "Prophet Ibrahim (AS)", "Prophet Musa (AS)", "Prophet Adam (AS)"],
        answer: 2,
        explanation: "Prophet Musa (AS) is mentioned 136 times in the Holy Qur'an."
    }
]

const QuizSystem = () => {
    const [gameState, setGameState] = useState('START') // START, PLAYING, RESULT
    const [currentIdx, setCurrentIdx] = useState(0)
    const [selected, setSelected] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [score, setScore] = useState(0)

    const handleStart = () => {
        setGameState('PLAYING')
        setCurrentIdx(0)
        setScore(0)
    }

    const handleSelect = (idx) => {
        if (selected !== null) return
        setSelected(idx)
        const correct = idx === QUESTIONS[currentIdx].answer
        setIsCorrect(correct)
        if (correct) setScore(s => s + 1)
    }

    const nextQuestion = () => {
        if (currentIdx === QUESTIONS.length - 1) {
            setGameState('RESULT')
        } else {
            setSelected(null)
            setIsCorrect(null)
            setCurrentIdx(currentIdx + 1)
        }
    }

    return (
        <div className="pb-12">
            <div className="mb-10 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Knowledge <span className="gradient-text-gold">Quiz</span>
                </h1>
                <p className="mt-2 text-text-muted text-sm">Test your understanding of the Deen</p>
            </div>

            <div className="max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    {gameState === 'START' && (
                        <motion.div key="start" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="manuscript-card p-12 text-center">
                            <div className="h-20 w-20 rounded-full bg-gold-900/20 flex items-center justify-center mx-auto mb-8 shadow-gold-strong">
                                <Target className="h-10 w-10 text-gold-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary mb-4 font-headings">Ready for a Challenge?</h2>
                            <p className="text-text-muted mb-10 max-w-md mx-auto">
                                Explore various topics including Quranic history, Prophets, and Fiqh in this interactive quiz system.
                            </p>
                            <button onClick={handleStart} className="btn-gold px-12 h-14 text-sm flex items-center justify-center gap-3 mx-auto">
                                Begin Challenge <ArrowRight className="h-5 w-5" />
                            </button>
                        </motion.div>
                    )}

                    {gameState === 'PLAYING' && (
                        <motion.div key="playing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="manuscript-card p-10">
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-[0.6rem] font-bold tracking-[0.3em] text-gold-500 uppercase">Question {currentIdx + 1} / {QUESTIONS.length}</span>
                                <div className="flex items-center gap-2 text-text-muted font-mono text-xs">
                                    <Clock className="h-3 w-3" /> 15s
                                </div>
                            </div>

                            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mb-10 leading-relaxed">
                                {QUESTIONS[currentIdx].question}
                            </h2>

                            <div className="space-y-4 mb-10">
                                {QUESTIONS[currentIdx].options.map((opt, i) => {
                                    let stateClasses = "bg-navy-900 border-border-subtle text-text-muted hover:border-gold-500/30"
                                    if (selected === i) {
                                        stateClasses = isCorrect ? "bg-emerald/20 border-emerald text-emerald shadow-[0_0_20px_rgba(16,185,129,0.2)]" : "bg-crimson/20 border-crimson text-crimson shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                                    } else if (selected !== null && i === QUESTIONS[currentIdx].answer) {
                                        stateClasses = "bg-emerald/20 border-emerald text-emerald"
                                    }

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect(i)}
                                            className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between font-medium ${stateClasses}`}
                                        >
                                            <span>{opt}</span>
                                            {selected === i && (isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />)}
                                        </button>
                                    )
                                })}
                            </div>

                            {selected !== null && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10 p-5 rounded-2xl bg-gold-900/10 border border-gold-500/20">
                                    <p className="text-xs text-gold-300 italic">
                                        <span className="font-bold uppercase tracking-widest mr-2">Did you know?</span>
                                        {QUESTIONS[currentIdx].explanation}
                                    </p>
                                </motion.div>
                            )}

                            <button
                                disabled={selected === null}
                                onClick={nextQuestion}
                                className="w-full btn-gold h-14 disabled:opacity-20 flex items-center justify-center gap-2"
                            >
                                {currentIdx === QUESTIONS.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        </motion.div>
                    )}

                    {gameState === 'RESULT' && (
                        <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="manuscript-card p-12 text-center">
                            <Trophy className="h-20 w-20 text-gold-500 mx-auto mb-8 drop-shadow-gold-strong" />
                            <h2 className="text-3xl font-bold font-headings text-gold-300 mb-2">Mabrouk!</h2>
                            <p className="text-text-muted mb-10 uppercase tracking-[0.2em] text-[0.7rem] font-bold">Challenge Completed</p>

                            <div className="max-w-xs mx-auto mb-12 py-8 rounded-3xl bg-navy-900 border border-border-subtle flex flex-col items-center">
                                <span className="text-[0.6rem] font-bold text-text-muted uppercase mb-2 tracking-widest">Knowledge Accuracy</span>
                                <span className="text-5xl font-mono font-bold text-gold-300">{Math.round((score / QUESTIONS.length) * 100)}%</span>
                                <span className="mt-4 text-xs font-bold text-text-secondary uppercase tracking-widest">{score} Correct Answers</span>
                            </div>

                            <div className="flex gap-4">
                                <button onClick={handleStart} className="flex-1 btn-gold flex items-center justify-center gap-2">
                                    <RotateCcw className="h-4 w-4" /> Try Again
                                </button>
                                <button className="flex-1 px-8 py-4 rounded-2xl border border-border-subtle text-text-primary font-bold hover:bg-navy-900 transition-colors">
                                    Share Score
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default QuizSystem
