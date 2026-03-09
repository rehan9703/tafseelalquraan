import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SurahProgress {
  surahId: number;
  lastAyahRead: number;
  isCompleted: boolean;
  updatedAt: string;
}

interface QuizResult {
  id: string;
  category: string;
  difficulty: string;
  totalQuestions: number;
  correctAnswers: number;
  scorePercent: number;
  timeTakenSeconds: number;
  createdAt: string;
}

interface ProgressState {
  surahProgress: SurahProgress[];
  quizResults: QuizResult[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
  
  updateSurahProgress: (surahId: number, lastAyahRead: number, ayahCount: number) => void;
  getSurahProgress: (surahId: number) => SurahProgress | undefined;
  getCompletedSurahs: () => number[];
  getCompletionPercentage: () => number;
  
  addQuizResult: (result: Omit<QuizResult, 'id' | 'createdAt'>) => void;
  getQuizResults: () => QuizResult[];
  getBestQuizScore: () => number;
  
  checkInStreak: () => void;
  getStreakStatus: () => { current: number; longest: number; canCheckIn: boolean };
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      surahProgress: [],
      quizResults: [],
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      
      updateSurahProgress: (surahId, lastAyahRead, ayahCount) => {
        const isCompleted = lastAyahRead >= ayahCount;
        
        set((state) => {
          const existing = state.surahProgress.find(p => p.surahId === surahId);
          if (existing) {
            return {
              surahProgress: state.surahProgress.map(p =>
                p.surahId === surahId
                  ? { ...p, lastAyahRead, isCompleted, updatedAt: new Date().toISOString() }
                  : p
              ),
            };
          }
          return {
            surahProgress: [
              ...state.surahProgress,
              {
                surahId,
                lastAyahRead,
                isCompleted,
                updatedAt: new Date().toISOString(),
              },
            ],
          };
        });
      },
      
      getSurahProgress: (surahId) => {
        return get().surahProgress.find(p => p.surahId === surahId);
      },
      
      getCompletedSurahs: () => {
        return get().surahProgress.filter(p => p.isCompleted).map(p => p.surahId);
      },
      
      getCompletionPercentage: () => {
        const completed = get().surahProgress.filter(p => p.isCompleted).length;
        return Math.round((completed / 114) * 100);
      },
      
      addQuizResult: (result) => {
        set((state) => ({
          quizResults: [
            ...state.quizResults,
            {
              ...result,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        }));
      },
      
      getQuizResults: () => {
        return get().quizResults.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      },
      
      getBestQuizScore: () => {
        const results = get().quizResults;
        if (results.length === 0) return 0;
        return Math.max(...results.map(r => r.scorePercent));
      },
      
      checkInStreak: () => {
        const today = new Date().toDateString();
        const lastActive = get().lastActiveDate;
        
        if (lastActive === today) return;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        let newStreak = 1;
        if (lastActive === yesterday.toDateString()) {
          newStreak = get().currentStreak + 1;
        }
        
        set((state) => ({
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.longestStreak),
          lastActiveDate: today,
        }));
      },
      
      getStreakStatus: () => {
        const today = new Date().toDateString();
        const lastActive = get().lastActiveDate;
        
        return {
          current: get().currentStreak,
          longest: get().longestStreak,
          canCheckIn: lastActive !== today,
        };
      },
    }),
    {
      name: 'progress-storage',
    }
  )
);
