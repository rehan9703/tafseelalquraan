import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  sidebarOpen: boolean;
  theme: 'dark' | 'light';
  fontSize: 'small' | 'medium' | 'large';
  tafseerLanguage: 'EN' | 'UR' | 'AR';
  installPrompt: any; // BeforeInstallPromptEvent

  toggleSidebar: () => void;
  setSidebarOpen: (value: boolean) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  setTafseerLanguage: (lang: 'EN' | 'UR' | 'AR') => void;
  setInstallPrompt: (prompt: any) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      theme: 'dark',
      fontSize: 'medium',
      tafseerLanguage: 'EN',
      installPrompt: null,

      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (value) => set({ sidebarOpen: value }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setTafseerLanguage: (tafseerLanguage) => set({ tafseerLanguage }),
      setInstallPrompt: (installPrompt) => set({ installPrompt }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => {
        const { installPrompt, ...rest } = state;
        return rest;
      },
    }
  )
);
