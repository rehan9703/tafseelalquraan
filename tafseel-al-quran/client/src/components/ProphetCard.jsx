import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProphetCard = ({ prophet }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group"
        >
            <Link to={`/prophets/${prophet.id}`} className="manuscript-card block p-8 relative h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-700 text-gold-300 font-mono text-xs font-bold border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                        {prophet.orderNumber}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="rounded-lg bg-gold-900/20 px-3 py-1 text-[0.6rem] font-bold text-gold-300 uppercase tracking-[0.1em]">
                            {prophet.title || 'Prophet'}
                        </span>
                    </div>
                </div>

                <div className="text-right mb-6">
                    <h3 className="font-arabic text-3xl gradient-text-gold">{prophet.nameArabic}</h3>
                </div>

                <h2 className="font-headings text-xl font-bold text-text-primary mb-1">{prophet.nameEnglish}</h2>
                <p className="text-xs text-text-muted mb-4 uppercase tracking-widest">{prophet.nation}</p>

                <div className="border-t border-border-subtle pt-4 mb-6">
                    <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed italic opacity-80">
                        "{prophet.story.substring(0, 80)}..."
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[0.65rem] font-bold text-gold-500/60 uppercase tracking-widest">
                        <Star className="h-3 w-3 fill-current" />
                        <span>View Story</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
            </Link>
        </motion.div>
    )
}

export default ProphetCard
