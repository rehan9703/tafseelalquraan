import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBookmarkStore = create(
    persist(
        (set, get) => ({
            bookmarks: [],

            setBookmarks: (bookmarks) => set({ bookmarks }),

            addBookmark: (bookmark) => set((state) => ({
                bookmarks: [...state.bookmarks, bookmark]
            })),

            removeBookmark: (id) => set((state) => ({
                bookmarks: state.bookmarks.filter(b => b.id !== id)
            })),

            isBookmarked: (contentType, contentId) => {
                return get().bookmarks.some(b => b.contentType === contentType && b.contentId === contentId)
            }
        }),
        {
            name: 'tafseel-bookmark-store',
        }
    )
)
