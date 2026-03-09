import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layouts
import RootLayout from './components/RootLayout'

// Pages
import Dashboard from './pages/Dashboard'
import QuranExplorer from './pages/QuranExplorer'
import SurahDetail from './pages/SurahDetail'
import JuzDashboard from './pages/JuzDashboard'
import QuranReader from './pages/QuranReader'
import Prophets from './pages/Prophets'
import Hadith from './pages/Hadith'
import AsmaulHusna from './pages/AsmaulHusna'
import Duas from './pages/Duas'
import SalahGuide from './pages/SalahGuide'
import Calendar from './pages/Calendar'
import ZakatCalculator from './pages/ZakatCalculator'
import Qibla from './pages/Qibla'
import Quiz from './pages/Quiz'
import Research from './pages/Research'
import History from './pages/History'
import ProphetMuhammad from './pages/ProphetMuhammad'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Bookmarks from './pages/Bookmarks'
import Progress from './pages/Progress'
import Login from './pages/Login'
import Register from './pages/Register'

// Auth Guard (Simplified for Demo)
const ProtectedRoute = ({ children }) => {
    const isAuth = true // In real app: useAuthStore.getState().isAuthenticated
    return isAuth ? children : <Navigate to="/login" />
}

const App = () => {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Main Application Routes */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <RootLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="quran" element={<QuranExplorer />} />
                    <Route path="quran/:surahId" element={<SurahDetail />} />
                    <Route path="juz" element={<JuzDashboard />} />
                    <Route path="tafseer" element={<QuranReader />} />
                    <Route path="tafseer/:surahId" element={<QuranReader />} />
                    <Route path="prophets" element={<Prophets />} />
                    <Route path="hadith" element={<Hadith />} />
                    <Route path="asmaul-husna" element={<AsmaulHusna />} />
                    <Route path="duas" element={<Duas />} />
                    <Route path="salah" element={<SalahGuide />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="zakat" element={<ZakatCalculator />} />
                    <Route path="qibla" element={<Qibla />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="research" element={<Research />} />
                    <Route path="history" element={<History />} />
                    <Route path="prophet-muhammad" element={<ProphetMuhammad />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Profile />} />
                    <Route path="bookmarks" element={<Bookmarks />} />
                    <Route path="progress" element={<Progress />} />
                    <Route path="search" element={<Search />} />
                </Route>

                {/* 404 Redirect */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </AnimatePresence>
    )
}

export default App
