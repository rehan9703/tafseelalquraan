import React from 'react'
import { motion } from 'framer-motion'
import { Bookmark, Star, Trash2, ExternalLink } from 'lucide-react'
import { useBookmarkStore } from '../store/bookmarkStore'

const BookmarksPage = () => {
    const { bookmarks, removeBookmark } = useBookmarkStore()

    // For demonstration, let's categorize bookmarks if store had them. 
    // Assuming a generic structure for now.
    const categories = [
        { title: 'Qur\'an Verses', items: bookmarks?.filter(b => b.type === 'ayah') || [] },
        { title: 'Hadith', items: bookmarks?.filter(b => b.type === 'hadith') || [] },
        { title: 'Duas', items: bookmarks?.filter(b => b.type === 'dua') || [] },
    ]

    return (
        <div className="pb-12">
            <div className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">My <span className="gradient-text-gold">Bookmarks</span></h1>
                    <p className="mt-1 text-text-muted text-sm">Your personal vault of saved knowledge</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-gold-900/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shadow-gold-strong">
                    <Bookmark className="h-7 w-7 fill-current" />
                </div>
            </div>

            <div className="space-y-12">
                {categories.map((cat, idx) => (
                    (cat.items.length > 0 || idx === 0) && (
                        <section key={cat.title}>
                            <h3 className="text-[0.65rem] font-bold tracking-[0.3em] text-gold-500 uppercase mb-6 flex items-center gap-4">
                                {cat.title}
                                <div className="h-[1px] flex-1 bg-gold-500/10" />
                            </h3>

                            {cat.items.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cat.items.map((item, i) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="manuscript-card p-6 group"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="h-8 w-8 rounded-lg bg-gold-900/20 flex items-center justify-center text-gold-500">
                                                    <Star className="h-4 w-4 fill-current" />
                                                </div>
                                                <button
                                                    onClick={() => removeBookmark(item.id)}
                                                    className="p-2 rounded-lg hover:bg-crimson/10 text-text-muted hover:text-crimson transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <h4 className="font-bold text-text-primary mb-2 line-clamp-1">{item.title || 'Saved Content'}</h4>
                                            <p className="text-xs text-text-muted mb-6 leading-relaxed line-clamp-2">
                                                {item.text || 'Excellence in worship and knowledge.'}
                                            </p>
                                            <button className="w-full h-10 rounded-xl bg-navy-900 border border-border-subtle flex items-center justify-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-gold-500 hover:border-gold-500/30 transition-all">
                                                View Details <ExternalLink className="h-3 w-3" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="manuscript-card p-12 text-center opacity-30 border-dashed">
                                    <p className="italic text-sm">No bookmarks saved in this category yet.</p>
                                </div>
                            )}
                        </section>
                    )
                ))}
            </div>
        </div>
    )
}

export default BookmarksPage
