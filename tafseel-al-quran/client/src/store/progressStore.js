import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useProgressStore = create(
    persist(
        (set, get) => ({
            readSurahs: {}, // { surahId: lastAyahRead }

            updateProgress: (surahId, ayahNumber) => set((state) => ({
                readSurahs: { ...state.readSurahs, [surahId]: ayahNumber }
            })),

            getSurahProgress: (surahId) => {
                return get().readSurahs[surahId] || 0
            }
        }),
        {
            name: 'tafseel-progress-store',
        }
    )
)
