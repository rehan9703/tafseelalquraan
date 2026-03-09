import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Bookmark,
  BookOpen,
  Info,
  Loader2,
  Volume2,
} from 'lucide-react';
import { quranService, type Surah, type Ayah } from '@/services/quranService';
import { useBookmarkStore } from '@/store/bookmarkStore';
import { useProgressStore } from '@/store/progressStore';
import { cn } from '@/lib/utils';

export function SurahDetail() {
  const { surahId } = useParams<{ surahId: string }>();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [playingAyah, setPlayingAyah] = useState<string | null>(null);
  const [ayahAudioElement, setAyahAudioElement] = useState<HTMLAudioElement | null>(null);
  const [showTafseer, setShowTafseer] = useState<Record<string, boolean>>({});
  const [translationLang, setTranslationLang] = useState<'en' | 'ur'>('en');

  // Audio Player State for complete surah
  const [selectedReciter, setSelectedReciter] = useState<string>('1');
  const [isPlayingSurah, setIsPlayingSurah] = useState(false);
  const [surahAudioElement, setSurahAudioElement] = useState<HTMLAudioElement | null>(null);

  const { addBookmark, removeBookmarkByContent, isBookmarked } = useBookmarkStore();
  const { updateSurahProgress, getSurahProgress } = useProgressStore();

  useEffect(() => {
    const fetchData = async () => {
      if (!surahId) return;

      try {
        setLoading(true);
        const surahNum = parseInt(surahId);

        // Fetch surah info
        const surahResponse = await quranService.getSurah(surahNum);
        if (surahResponse.success && surahResponse.data) {
          setSurah(surahResponse.data as any);
        }

        // Fetch ayahs
        const ayahsResponse = await quranService.getAyahs(surahNum, translationLang);
        if (ayahsResponse.success && ayahsResponse.data) {
          setAyahs(ayahsResponse.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load Surah');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup audio on unmount
    return () => {
      if (surahAudioElement) {
        surahAudioElement.pause();
        surahAudioElement.src = '';
      }
      if (ayahAudioElement) {
        ayahAudioElement.pause();
        ayahAudioElement.src = '';
      }
    };
  }, [surahId, translationLang]);

  const handleBookmark = (ayah: Ayah) => {
    if (isBookmarked('AYAH', ayah.id)) {
      removeBookmarkByContent('AYAH', ayah.id);
    } else {
      addBookmark({
        contentType: 'AYAH',
        contentId: ayah.id,
        title: `${surah?.nameEnglish} - Verse ${ayah.ayahNumber}`,
      });
    }
  };

  const toggleTafseer = (ayahId: string) => {
    setShowTafseer(prev => ({ ...prev, [ayahId]: !prev[ayahId] }));
  };

  const handleAudioPlay = (ayahId: string, audioUrl: string | undefined) => {
    if (!audioUrl) return;

    if (playingAyah === ayahId) {
      if (ayahAudioElement) {
        ayahAudioElement.pause();
      }
      setPlayingAyah(null);
    } else {
      if (ayahAudioElement) {
        ayahAudioElement.pause();
      }
      if (surahAudioElement && isPlayingSurah) {
        surahAudioElement.pause();
        setIsPlayingSurah(false);
      }

      const newAudio = new Audio(audioUrl);
      newAudio.onended = () => {
        setPlayingAyah(null);
        setAyahAudioElement(null);
      };

      newAudio.play().catch(e => console.error("Audio playback failed", e));
      setAyahAudioElement(newAudio);
      setPlayingAyah(ayahId);
    }
  };

  const handleSurahAudioPlay = () => {
    if (!surah?.audio || !surah.audio[selectedReciter]) return;

    if (isPlayingSurah && surahAudioElement) {
      surahAudioElement.pause();
      setIsPlayingSurah(false);
    } else {
      let audioControl = surahAudioElement;
      if (!audioControl) {
        audioControl = new Audio(surah.audio[selectedReciter].url);
        audioControl.onended = () => setIsPlayingSurah(false);
        setSurahAudioElement(audioControl);
      } else if (audioControl.src !== surah.audio[selectedReciter].url) {
        audioControl.src = surah.audio[selectedReciter].url;
      }

      if (ayahAudioElement && playingAyah) {
        ayahAudioElement.pause();
        setPlayingAyah(null);
      }

      audioControl.play().catch(e => console.error("Audio playback failed", e));
      setIsPlayingSurah(true);
    }
  };

  const handleReciterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newReciter = e.target.value;
    setSelectedReciter(newReciter);

    if (isPlayingSurah && surahAudioElement) {
      surahAudioElement.pause();
      surahAudioElement.src = surah?.audio?.[newReciter]?.url || '';
      surahAudioElement.play().catch(e => console.error("Audio playback failed", e));
    }
  };

  const markAsRead = (ayahNumber: number) => {
    if (surah) {
      updateSurahProgress(surah.number, ayahNumber, surah.ayahCount);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-islamic-gold" />
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error || 'Surah not found'}</p>
        <Link to="/quran" className="text-islamic-gold hover:underline">
          Back to Quran Explorer
        </Link>
      </div>
    );
  }

  const prevSurah = surah.number > 1 ? surah.number - 1 : null;
  const nextSurah = surah.number < 114 ? surah.number + 1 : null;
  const progressData = getSurahProgress(surah.number);
  const progress = progressData ? (progressData.lastAyahRead || 0) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/quran"
          className="flex items-center gap-2 text-islamic-text-muted hover:text-islamic-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Surahs
        </Link>

        <div className="flex items-center gap-4">
          <select
            value={translationLang}
            onChange={(e) => setTranslationLang(e.target.value as 'en' | 'ur')}
            className="bg-islamic-bg-card border border-islamic-border rounded-lg py-2 px-3 text-islamic-text-primary"
          >
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
        </div>
      </div>

      {/* Surah Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-islamic-bg-card rounded-2xl p-6 border border-islamic-border"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-islamic-gold/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-islamic-gold">{surah.number}</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-islamic-text-primary">
                {surah.nameEnglish}
              </h1>
              <p className="text-islamic-text-muted">
                {surah.nameTransliteration} • {surah.revelationType}
              </p>
              <p className="text-xl font-amiri text-islamic-gold mt-1" dir="rtl">
                {surah.nameArabic}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-islamic-text-muted">{surah.ayahCount} verses</p>
            <p className="text-islamic-text-muted">Juz {surah.juzStart}{surah.juzEnd !== surah.juzStart ? `-${surah.juzEnd}` : ''}</p>
            <div className="mt-2">
              <div className="w-32 h-2 bg-islamic-bg-primary rounded-full overflow-hidden">
                <div
                  className="h-full bg-islamic-gold"
                  style={{ width: `${(progress / surah.ayahCount) * 100}%` }}
                />
              </div>
              <p className="text-xs text-islamic-text-muted mt-1">
                {progress}/{surah.ayahCount} verses read
              </p>
            </div>
            {/* Surah Audio Player */}
            {surah.audio && Object.keys(surah.audio).length > 0 && (
              <div className="mt-4 flex items-center gap-2 justify-end">
                <select
                  value={selectedReciter}
                  onChange={handleReciterChange}
                  className="bg-islamic-bg-primary border border-islamic-border text-sm rounded-lg py-1 px-2 text-islamic-text-primary max-w-[150px] truncate"
                >
                  {Object.keys(surah.audio).map(key => (
                    <option key={key} value={key}>{surah.audio[key].reciter}</option>
                  ))}
                </select>
                <button
                  onClick={handleSurahAudioPlay}
                  className="p-2 bg-islamic-gold text-white rounded-full hover:bg-islamic-gold/80 transition-colors"
                  title="Play Complete Surah"
                >
                  {isPlayingSurah ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {prevSurah ? (
          <Link
            to={`/quran/${prevSurah}`}
            className="flex items-center gap-2 px-4 py-2 bg-islamic-bg-card rounded-xl border border-islamic-border hover:border-islamic-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </Link>
        ) : (
          <div />
        )}

        {nextSurah ? (
          <Link
            to={`/quran/${nextSurah}`}
            className="flex items-center gap-2 px-4 py-2 bg-islamic-bg-card rounded-xl border border-islamic-border hover:border-islamic-gold transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Ayahs */}
      <div className="space-y-4">
        {ayahs.map((ayah, index) => (
          <motion.div
            key={ayah.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className={cn(
              "bg-islamic-bg-card rounded-2xl p-6 border border-islamic-border",
              "hover:border-islamic-gold/50 transition-colors"
            )}
            onMouseEnter={() => markAsRead(ayah.ayahNumber)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-islamic-gold/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-islamic-gold">{ayah.ayahNumber}</span>
                </div>
                <button
                  onClick={() => handleBookmark(ayah)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isBookmarked('AYAH', ayah.id)
                      ? "text-islamic-gold bg-islamic-gold/10"
                      : "text-islamic-text-muted hover:text-islamic-gold"
                  )}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>

              {ayah.audioUrl && (
                <button
                  onClick={() => handleAudioPlay(ayah.id, ayah.audioUrl)}
                  className="p-2 rounded-lg text-islamic-text-muted hover:text-islamic-gold transition-colors"
                >
                  {playingAyah === ayah.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>

            {/* Arabic Text */}
            <div className="mt-4">
              <p className="text-2xl font-amiri text-islamic-text-primary leading-loose" dir="rtl">
                {ayah.arabicText}
              </p>
            </div>

            {/* Translation */}
            {(translationLang === 'en' ? ayah.translationEN : ayah.translationUR) && (
              <div className="mt-4 pt-4 border-t border-islamic-border">
                <p className="text-islamic-text-secondary leading-relaxed">
                  {translationLang === 'en' ? ayah.translationEN : ayah.translationUR}
                </p>
              </div>
            )}

            {/* Audio Player (if playing) */}
            {playingAyah === ayah.id && ayah.audioUrl && (
              <div className="mt-4 p-4 bg-islamic-bg-primary rounded-xl">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-islamic-gold" />
                  <div className="flex-1">
                    <p className="text-sm text-islamic-text-muted">Playing audio...</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-islamic-border">
        {prevSurah ? (
          <Link
            to={`/quran/${prevSurah}`}
            className="flex items-center gap-2 px-4 py-2 bg-islamic-bg-card rounded-xl border border-islamic-border hover:border-islamic-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Surah</span>
          </Link>
        ) : (
          <div />
        )}

        {nextSurah ? (
          <Link
            to={`/quran/${nextSurah}`}
            className="flex items-center gap-2 px-4 py-2 bg-islamic-bg-card rounded-xl border border-islamic-border hover:border-islamic-gold transition-colors"
          >
            <span>Next Surah</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
