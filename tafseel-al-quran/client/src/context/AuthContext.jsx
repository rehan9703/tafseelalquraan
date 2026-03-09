import { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            authApi.me()
                .then(({ data }) => setUser(data.data))
                .catch(() => localStorage.removeItem('accessToken'))
                .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [])

    const login = async (credentials) => {
        const { data } = await authApi.login(credentials)
        localStorage.setItem('accessToken', data.data.accessToken)
        setUser(data.data.user)
        return data.data.user
    }

    const register = async (details) => {
        const { data } = await authApi.register(details)
        localStorage.setItem('accessToken', data.data.accessToken)
        setUser(data.data.user)
        return data.data.user
    }

    const logout = async () => {
        try { await authApi.logout() } catch { }
        localStorage.removeItem('accessToken')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
