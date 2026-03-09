import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import Header from './Header'
import { Toaster } from 'react-hot-toast'

const RootLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const location = useLocation()

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setIsSidebarOpen(false)
    }, [location])

    // Get dynamic title based on path
    const getPageTitle = (path) => {
        const segments = path.split('/').filter(Boolean)
        if (segments.length === 0) return 'Dashboard'
        const last = segments[segments.length - 1]
        return last.charAt(0).toUpperCase() + last.slice(1).replace(/-/g, ' ')
    }

    return (
        <div className="relative flex min-h-screen bg-obsidian text-text-primary">
            {/* Background Pattern (Handled by index.css body::before) */}

            {/* Sidebar - Desktop */}
            <Sidebar />

            {/* Sidebar - Mobile Drawer */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 z-[60] bg-obsidian/80 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-[70] w-[280px] lg:hidden"
                        >
                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col lg:pl-[280px]">
                <Header
                    title={getPageTitle(location.pathname)}
                    onMenuClick={() => setIsSidebarOpen(true)}
                />

                <main className="flex-1 overflow-x-hidden p-6 lg:p-10 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="mx-auto max-w-7xl"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            <Toaster position="top-right" />
        </div>
    )
}

export default RootLayout
