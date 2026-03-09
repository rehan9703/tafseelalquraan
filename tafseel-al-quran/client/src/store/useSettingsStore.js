import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSettingsStore = create(
    persist(
        (set) => ({
            theme: 'dark',
            language: 'EN',
            fontSize: 18,
            tafseerLang: 'EN',

            setTheme: (theme) => set({ theme }),
            setLanguage: (language) => set({ language }),
            setFontSize: (fontSize) => set({ fontSize }),
            setTafseerLang: (tafseerLang) => set({ tafseerLang }),
        }),
        {
            name: 'tafseel-settings-storage',
        }
    )
)
