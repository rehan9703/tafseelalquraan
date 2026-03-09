import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const NAV_ITEMS = [
    { path: '/', label: 'Home', icon: '🕌' },
    { path: '/quran', label: 'Quran', icon: '📖' },
    { path: '/hadith', label: 'Hadith', icon: '📜' },
    { path: '/prophets', label: 'Prophets', icon: '⭐' },
    { path: '/names', label: '99 Names', icon: '✨' },
    { path: '/duas', label: 'Duas', icon: '🤲' },
    { path: '/history', label: 'History', icon: '🏛️' },
    { path: '/quiz', label: 'Quiz', icon: '🧠' },
]

export default function Navbar() {
    const { user, logout } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = async () => {
        await logout()
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="nav-inner container">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">☽</span>
                    <div>
                        <div className="logo-title">Tafseel-al-Qur'an</div>
                        <div className="logo-sub">Islamic Knowledge Dashboard</div>
                    </div>
                </Link>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {NAV_ITEMS.map(({ path, label, icon }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="nav-icon">{icon}</span>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    {user ? (
                        <div className="user-menu">
                            <Link to="/dashboard" className="btn btn-ghost" style={{ gap: '0.4rem' }}>
                                👤 {user.name.split(' ')[0]}
                            </Link>
                            <button onClick={handleLogout} className="btn btn-outline" style={{ fontSize: '0.8rem' }}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', gap: '0.6rem' }}>
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/register" className="btn btn-gold">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
