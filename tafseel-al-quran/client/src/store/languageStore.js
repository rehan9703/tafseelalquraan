import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useLanguageStore = create(
    persist(
        (set) => ({
            language: 'EN',
            setLanguage: (language) => set({ language }),
        }),
        {
            name: 'tafseel-language-store',
        }
    )
)
