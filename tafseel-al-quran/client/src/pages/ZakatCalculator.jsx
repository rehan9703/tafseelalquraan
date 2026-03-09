import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, Coins, TrendingUp, Info, ArrowRight, RotateCcw } from 'lucide-react'

const NISAB_GOLD = 87.48 // grams
const NISAB_SILVER = 612.36 // grams
const GOLD_PRICE = 65 // mock USD per gram
const SILVER_PRICE = 0.8 // mock USD per gram

const ZakatCalculator = () => {
    const [step, setStep] = useState(1)
    const [values, setValues] = useState({
        gold: '',
        silver: '',
        cash: '',
        investment: '',
        business: '',
        debts: ''
    })
    const [result, setResult] = useState(null)

    const handleCalculate = () => {
        const goldValue = parseFloat(values.gold || 0) * GOLD_PRICE
        const silverValue = parseFloat(values.silver || 0) * SILVER_PRICE
        const totalAssets = goldValue + silverValue + parseFloat(values.cash || 0) +
            parseFloat(values.investment || 0) + parseFloat(values.business || 0)
        const netAssets = totalAssets - parseFloat(values.debts || 0)

        const nisabValue = NISAB_GOLD * GOLD_PRICE
        const isEligible = netAssets >= nisabValue
        const zakatAmount = isEligible ? netAssets * 0.025 : 0

        setResult({
            netAssets,
            nisabValue,
            isEligible,
            zakatAmount
        })
        setStep(3)
    }

    const reset = () => {
        setValues({ gold: '', silver: '', cash: '', investment: '', business: '', debts: '' })
        setResult(null)
        setStep(1)
    }

    return (
        <div className="pb-12">
            <div className="mb-10 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Zakat <span className="gradient-text-gold">Calculator</span>
                </h1>
                <p className="mt-2 text-text-muted text-sm">Calculate your obligatory charity based on Shariah guidelines</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="manuscript-card p-10">
                        <h3 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-8">Asset Evaluation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Gold (in Grams)</label>
                                <input
                                    type="number"
                                    value={values.gold}
                                    onChange={(e) => setValues({ ...values, gold: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Silver (in Grams)</label>
                                <input
                                    type="number"
                                    value={values.silver}
                                    onChange={(e) => setValues({ ...values, silver: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Cash / Savings (USD)</label>
                                <input
                                    type="number"
                                    value={values.cash}
                                    onChange={(e) => setValues({ ...values, cash: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Investments (Stocks, Real Estate)</label>
                                <input
                                    type="number"
                                    value={values.investment}
                                    onChange={(e) => setValues({ ...values, investment: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => setStep(2)}
                            className="w-full btn-gold flex items-center justify-center gap-2"
                        >
                            Next Step <ArrowRight className="h-4 w-4" />
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="manuscript-card p-10">
                        <h3 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-8">Liabilities & Debts</h3>
                        <div className="space-y-6 mb-10">
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Business Goods / Inventory</label>
                                <input
                                    type="number"
                                    value={values.business}
                                    onChange={(e) => setValues({ ...values, business: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.65rem] font-bold text-text-muted uppercase">Immediate Debts / Expenses</label>
                                <input
                                    type="number"
                                    value={values.debts}
                                    onChange={(e) => setValues({ ...values, debts: e.target.value })}
                                    className="w-full rounded-xl bg-navy-900 border border-border-subtle p-3 text-text-primary outline-none focus:border-gold-500/50"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setStep(1)} className="flex-1 px-6 py-2.5 rounded-xl border border-border-subtle text-text-muted text-xs font-bold hover:text-gold-300">Back</button>
                            <button onClick={handleCalculate} className="flex-[2] btn-gold">Calculate Zakat</button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && result && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="manuscript-card p-10 text-center">
                        <Coins className="h-16 w-16 text-gold-500 mx-auto mb-6 drop-shadow-gold-strong" />
                        <h3 className="text-[0.65rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-2">Zakat Summary</h3>

                        <div className="my-8 space-y-4">
                            <div className="flex justify-between border-b border-border-subtle pb-4">
                                <span className="text-text-muted text-sm">Net Assets</span>
                                <span className="text-text-primary font-bold font-mono">${result.netAssets.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-b border-border-subtle pb-4">
                                <span className="text-text-muted text-sm">Current Nisab (Gold)</span>
                                <span className="text-text-primary font-bold font-mono">${result.nisabValue.toFixed(2)}</span>
                            </div>
                            <div className="py-6 rounded-2xl bg-navy-900 flex flex-col items-center">
                                <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-500 uppercase mb-2">Obligatory Zakat (2.5%)</span>
                                <span className={`text-4xl font-bold font-headings ${result.isEligible ? 'text-gold-300' : 'text-crimson'}`}>
                                    ${result.zakatAmount.toFixed(2)}
                                </span>
                                {!result.isEligible && (
                                    <p className="mt-2 text-[0.65rem] text-crimson italic">Net assets below Nisab limit.</p>
                                )}
                            </div>
                        </div>

                        <p className="text-xs text-text-muted leading-relaxed italic mb-10 px-6">
                            "Establish prayer and give zakat, and whatever good you put forward for yourselves - you will find it with Allah." (2:110)
                        </p>

                        <button onClick={reset} className="flex items-center justify-center gap-2 mx-auto text-gold-500 hover:text-gold-300 text-xs font-bold uppercase tracking-widest">
                            <RotateCcw className="h-4 w-4" /> Recalculate
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default ZakatCalculator
