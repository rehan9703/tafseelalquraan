import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout() {
    return (
        <div className="flex min-h-screen bg-primary text-text-primary">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Sticky Header */}
                <Header />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 custom-scrollbar geometric-bg">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={window.location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>

                    <footer className="mt-20 py-8 border-t border-border flex flex-col items-center gap-4">
                        <div className="flex items-center gap-6 text-text-muted text-xs font-bold uppercase tracking-widest">
                            <a href="#" className="hover:text-gold transition-colors">About</a>
                            <a href="#" className="hover:text-gold transition-colors">API Docs</a>
                            <a href="#" className="hover:text-gold transition-colors">Contact</a>
                            <a href="#" className="hover:text-gold transition-colors">Donate</a>
                        </div>
                        <p className="text-text-muted text-[10px] text-center max-w-lg">
                            Built as <span className="text-gold">Sadaqah-e-Jariyah</span> for the global Muslim Ummah by <span className="text-gold font-bold">Tabish Khan</span>.
                            May Allah accept this effort and make it a source of guidance. Ameen.
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    )
}
