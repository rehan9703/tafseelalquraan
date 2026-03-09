import { useAuthStore } from '../store/useAuthStore'
import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    withCredentials: true,
})

// Attach access token to every request
api.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// On 401 — try to refresh, then retry
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config
        if (error.response?.status === 401 && !original._retry) {
            original._retry = true
            const { refreshToken, setAuth, logout } = useAuthStore.getState()

            if (!refreshToken) {
                logout()
                return Promise.reject(error)
            }

            try {
                const { data } = await axios.post(`${api.defaults.baseURL}/auth/refresh`, { refreshToken }, { withCredentials: true })
                const { accessToken, newRefreshToken, user } = data.data

                setAuth(user, accessToken, newRefreshToken)
                original.headers.Authorization = `Bearer ${accessToken}`
                return api(original)
            } catch (err) {
                logout()
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)
    }
)

export default api

// ─── Auth ───────────────────────────────────────────────────────────────────
export const authApi = {
    register: (data) => api.post('/auth/register', data),
    login: (data) => api.post('/auth/login', data),
    logout: () => api.post('/auth/logout'),
    me: () => api.get('/auth/me'),
}

// ─── Quran ──────────────────────────────────────────────────────────────────
export const quranApi = {
    getSurahs: (params) => api.get('/quran/surahs', { params }),
    getSurah: (id, lang) => api.get(`/quran/surahs/${id}`, { params: { lang } }),
    getAyahs: (id, lang) => api.get(`/quran/surahs/${id}/ayahs`, { params: { lang } }),
    getAyah: (key) => api.get(`/quran/ayahs/${key}`),
    getJuz: () => api.get('/quran/juz'),
    getLanguages: () => api.get('/quran/languages'),
    search: (q, lang) => api.get('/quran/search', { params: { q, lang } }),
}

// ─── Hadith ─────────────────────────────────────────────────────────────────
export const hadithApi = {
    getAll: (params) => api.get('/hadith', { params }),
    getOne: (id) => api.get(`/hadith/${id}`),
}

// ─── Prophets ────────────────────────────────────────────────────────────────
export const prophetApi = {
    getAll: () => api.get('/prophets'),
    getOne: (id) => api.get(`/prophets/${id}`),
}

// ─── Names ──────────────────────────────────────────────────────────────────
export const namesApi = {
    getAll: (params) => api.get('/names', { params }),
    getOne: (id) => api.get(`/names/${id}`),
}

// ─── Duas ───────────────────────────────────────────────────────────────────
export const duaApi = {
    getAll: (params) => api.get('/duas', { params }),
    getOne: (id) => api.get(`/duas/${id}`),
}

// ─── History ─────────────────────────────────────────────────────────────────
export const historyApi = {
    getAll: (params) => api.get('/history', { params }),
    getOne: (id) => api.get(`/history/${id}`),
}

// ─── Quiz ────────────────────────────────────────────────────────────────────
export const quizApi = {
    getQuestions: (params) => api.get('/quiz/questions', { params }),
    submit: (data) => api.post('/quiz/submit', data),
    getResults: () => api.get('/quiz/results'),
    getLeaderboard: () => api.get('/quiz/leaderboard'),
}

// ─── User ────────────────────────────────────────────────────────────────────
export const userApi = {
    getBookmarks: () => api.get('/user/bookmarks'),
    addBookmark: (data) => api.post('/user/bookmarks', data),
    removeBookmark: (id) => api.delete(`/user/bookmarks/${id}`),
    getProgress: () => api.get('/user/progress'),
    updateProgress: (data) => api.post('/user/progress', data),
    getStreak: () => api.get('/user/streak'),
    checkIn: () => api.post('/user/streak/checkin'),
    updateSettings: (data) => api.put('/user/settings', data),
}
