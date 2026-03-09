import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuthStore } from '../store/authStore'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Request Interceptor: Attach Bearer Token
api.interceptors.request.use((config) => {
    const { accessToken } = useAuthStore.getState()
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
}, (error) => Promise.reject(error))

// Response Interceptor: Handle Refresh & Toasts
api.interceptors.response.use(
    (response) => {
        // Optional: Show success toasts for mutations if needed
        // if (['post', 'patch', 'put', 'delete'].includes(response.config.method)) {
        //   toast.success(response.data.message || 'Operation successful')
        // }
        return response
    },
    async (error) => {
        const originalRequest = error.config

        // Auto-Refresh on 401
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const { refreshToken, logout, login } = useAuthStore.getState()

            if (refreshToken) {
                try {
                    const res = await axios.post(`${api.defaults.baseURL}/auth/refresh`, { refreshToken })
                    const { accessToken: newAccessToken, refreshToken: newRefreshToken, user } = res.data.data
                    login(user, newAccessToken, newRefreshToken)
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                    return api(originalRequest)
                } catch (refreshError) {
                    logout()
                    toast.error('Session expired. Please login again.')
                    window.location.href = '/login'
                }
            } else {
                logout()
                window.location.href = '/login'
            }
        }

        // Global Error Toasts
        const message = error.response?.data?.error || error.message || 'An unexpected error occurred'
        toast.error(message, {
            id: 'global-api-error', // Prevent duplicate toasts
            style: {
                background: '#141C35',
                color: '#F5F0E8',
                border: '1px solid rgba(201,168,76,0.3)'
            },
            iconTheme: {
                primary: '#EF4444',
                secondary: '#F5F0E8',
            },
        })

        return Promise.reject(error)
    }
)

export default api
