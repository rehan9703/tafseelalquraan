import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ContentType = 'AYAH' | 'HADITH' | 'DUA' | 'ARTICLE';

interface Bookmark {
  id: string;
  contentType: ContentType;
  contentId: string;
  note?: string;
  createdAt: string;
  title?: string;
}

interface BookmarkState {
  bookmarks: Bookmark[];

  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  removeBookmarkByContent: (contentType: ContentType, contentId: string) => void;
  isBookmarked: (contentType: ContentType, contentId: string) => boolean;
  getBookmarksByType: (contentType: ContentType) => Bookmark[];
  updateBookmarkNote: (id: string, note: string) => void;
  clearBookmarks: () => void;
}


export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      addBookmark: (bookmark) => {
        const exists = get().bookmarks.find(
          b => b.contentType === bookmark.contentType && b.contentId === bookmark.contentId
        );
        if (!exists) {
          set((state) => ({
            bookmarks: [
              ...state.bookmarks,
              {
                ...bookmark,
                id: crypto.randomUUID(),
                createdAt: new Date().toISOString(),
              },
            ],
          }));
        }
      },

      removeBookmark: (id) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== id),
        }));
      },

      removeBookmarkByContent: (contentType, contentId) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter(
            (b) => !(b.contentType === contentType && b.contentId === contentId)
          ),
        }));
      },

      isBookmarked: (contentType, contentId) => {
        return get().bookmarks.some(
          (b) => b.contentType === contentType && b.contentId === contentId
        );
      },

      getBookmarksByType: (contentType) => {
        return get().bookmarks.filter((b) => b.contentType === contentType);
      },

      updateBookmarkNote: (id, note) => {
        set((state) => ({
          bookmarks: state.bookmarks.map((b) =>
            b.id === id ? { ...b, note } : b
          ),
        }));
      },

      clearBookmarks: () => {
        set({ bookmarks: [] });
      },
    }),
    {
      name: 'bookmark-storage',
    }
  )
);
