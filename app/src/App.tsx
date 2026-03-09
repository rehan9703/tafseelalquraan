import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';

import { MainLayout } from '@/components/layout/MainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { QuranExplorer } from '@/pages/QuranExplorer';
import { SurahDetail } from '@/pages/SurahDetail';
import { JuzDashboard } from '@/pages/JuzDashboard';
import { TafseerReader } from '@/pages/TafseerReader';
import { IslamicHistory } from '@/pages/IslamicHistory';
import { Prophets } from '@/pages/Prophets';
import { ProphetDetail } from '@/pages/ProphetDetail';
import { Hadith } from '@/pages/Hadith';
import { NamesOfAllah } from '@/pages/NamesOfAllah';
import { ProphetMuhammad } from '@/pages/ProphetMuhammad';
import { Duas } from '@/pages/Duas';
import { SalahGuide } from '@/pages/SalahGuide';
import { IslamicCalendar } from '@/pages/IslamicCalendar';
import { QiblaFinder } from '@/pages/QiblaFinder';
import { ZakatCalculator } from '@/pages/ZakatCalculator';
import { IslamicResearch } from '@/pages/IslamicResearch';
import { IslamicQuiz } from '@/pages/IslamicQuiz';
import { Bookmarks } from '@/pages/Bookmarks';
import { Search } from '@/pages/Search';
import { Settings } from '@/pages/Settings';

import { useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';
import { useProgressStore } from '@/store/progressStore';

function App() {
  const setInstallPrompt = useUIStore((state) => state.setInstallPrompt);
  const fontSize = useUIStore((state) => state.fontSize);
  const language = useUIStore((state) => state.language);
  const theme = useUIStore((state) => state.theme);
  const checkInStreak = useProgressStore((state) => state.checkInStreak);

  // Auto-track daily streak on every app open
  useEffect(() => {
    checkInStreak();
  }, []);

  // Apply Theme app-wide
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [theme]);

  // Apply Font Size app-wide
  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 'small') {
      root.style.fontSize = '14px';
    } else if (fontSize === 'large') {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }
  }, [fontSize]);

  // Apply language attribute for reference
  useEffect(() => {
    document.documentElement.setAttribute('data-language', language);
  }, [language]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, [setInstallPrompt]);

  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: theme === 'light' ? '#FBF7EF' : '#141C35',
            border: `1px solid ${theme === 'light' ? '#DDD0B0' : '#1E2D4D'}`,
            color: theme === 'light' ? '#2C1810' : '#F5F0E8',
          },
        }}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="quran" element={<QuranExplorer />} />
            <Route path="quran/:surahId" element={<SurahDetail />} />
            <Route path="juz" element={<JuzDashboard />} />
            <Route path="tafseer" element={<TafseerReader />} />
            <Route path="tafseer/:surahId" element={<TafseerReader />} />
            <Route path="history" element={<IslamicHistory />} />
            <Route path="prophets" element={<Prophets />} />
            <Route path="prophets/:id" element={<ProphetDetail />} />
            <Route path="hadith" element={<Hadith />} />
            <Route path="asmaul-husna" element={<NamesOfAllah />} />
            <Route path="prophet-muhammad" element={<ProphetMuhammad />} />
            <Route path="duas" element={<Duas />} />
            <Route path="salah" element={<SalahGuide />} />
            <Route path="calendar" element={<IslamicCalendar />} />
            <Route path="qibla" element={<QiblaFinder />} />
            <Route path="zakat" element={<ZakatCalculator />} />
            <Route path="research" element={<IslamicResearch />} />
            <Route path="quiz" element={<IslamicQuiz />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="search" element={<Search />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
