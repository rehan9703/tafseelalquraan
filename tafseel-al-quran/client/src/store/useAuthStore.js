import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,

            setAuth: (user, token, refreshToken) =>
                set({ user, token, refreshToken, isAuthenticated: !!user }),

            logout: () =>
                set({ user: null, token: null, refreshToken: null, isAuthenticated: false }),

            updateUser: (updates) =>
                set((state) => ({ user: state.user ? { ...state.user, ...updates } : null })),
        }),
        {
            name: 'tafseel-auth-storage',
        }
    )
)
