import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import localSurahs from '@/data/quranComplete';
import {
  ChevronLeft,
  ChevronRight,
  Type,
  BookOpen,
  Maximize2,
  Minimize2,
  Loader2,
  Play,
  Pause,
} from 'lucide-react';
import { quranService, type Surah, type Ayah } from '@/services/quranService';
import { cn } from '@/lib/utils';

// ─── Audio Player Component ────────────────────────────────────────────────
interface AudioPlayerProps {
  surahNumber: number;
  surahName: string;
}

const RECITERS = [
  { id: '1', name: 'Mishary Alafasy', code: 'afs' },
  { id: '2', name: 'Abdul Rahman Al-Sudais', code: 'sds' },
  { id: '3', name: 'Saad Al-Ghamdi', code: 's_gmd' },
];

function AudioPlayer({ surahNumber, surahName }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectedReciter, setSelectedReciter] = useState(RECITERS[0]);
  const [hasError, setHasError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Use reliable mp3quran.net servers
  const sIdStr = String(surahNumber).padStart(3, '0');
  const serverNumber = selectedReciter.id === '1' ? '8' : selectedReciter.id === '2' ? '11' : '7';
  const audioUrl = `https://server${serverNumber}.mp3quran.net/${selectedReciter.code}/${sIdStr}.mp3`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useEffect(() => {
    // Reset error state when surah or reciter changes
    setHasError(false);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [surahNumber, selectedReciter]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Audio playback failed:", error);
            setHasError(true);
            setIsPlaying(false);
          });
        }
      }
      if (!hasError) {
        setIsPlaying(!isPlaying);
      }
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const onError = () => {
    console.error("Audio failed to load from:", audioUrl);
    setHasError(true);
    setIsPlaying(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || !isFinite(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const timeRemaining = Math.max(0, duration - currentTime);

  return (
    <div className="islamic-card p-4 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-colors",
            hasError ? "bg-red-500/10 text-red-500" : "bg-islamic-gold/10 text-islamic-gold")}>
            {isPlaying ? <Pause className="w-5 h-5 animate-pulse" /> : <Play className="w-5 h-5 ml-0.5" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-islamic-text-primary">Surah {surahName} Audio</p>
            {hasError ? (
              <p className="text-xs text-red-500">Audio unavailable for this reciter</p>
            ) : (
              <p className="text-xs text-islamic-text-muted">High Quality MP3</p>
            )}
          </div>
        </div>

        {/* Reciter Selection */}
        <select
          value={selectedReciter.id}
          onChange={(e) => {
            const reciter = RECITERS.find(r => r.id === e.target.value);
            if (reciter) setSelectedReciter(reciter);
          }}
          className="bg-islamic-bg-secondary border border-islamic-border rounded-lg px-3 py-1.5 text-xs md:text-sm text-islamic-text-primary focus:outline-none focus:border-islamic-gold min-w-[200px]"
        >
          {RECITERS.map(r => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>

        <div className="text-right">
          <p className="text-sm font-mono font-bold text-islamic-gold">
            -{formatTime(timeRemaining)}
          </p>
          <p className="text-[10px] text-islamic-text-muted uppercase tracking-wider">Remaining</p>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={onError}
      />

      {/* Progress Bar */}
      <div className="space-y-1">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          disabled={hasError}
          className="w-full h-1.5 bg-islamic-border rounded-lg appearance-none cursor-pointer accent-islamic-gold disabled:opacity-50"
        />
        <div className="flex justify-between text-[10px] text-islamic-text-muted font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Speed Control */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-islamic-text-muted uppercase font-bold hidden sm:inline">Speed</span>
          <select
            value={playbackSpeed}
            onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
            className="bg-islamic-bg-secondary border border-islamic-border rounded-md px-2 py-1 text-xs text-islamic-text-primary focus:outline-none focus:border-islamic-gold"
          >
            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
              <option key={s} value={s}>{s}x</option>
            ))}
          </select>
        </div>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          disabled={hasError}
          className={cn("flex-1 max-w-[160px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-lg",
            hasError
              ? "bg-islamic-bg-secondary text-islamic-text-muted cursor-not-allowed border border-islamic-border"
              : "bg-islamic-gold text-islamic-bg-primary hover:brightness-110 shadow-islamic-gold/20"
          )}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          {isPlaying ? 'Pause' : hasError ? 'Error' : 'Play'}
        </button>
      </div>
    </div>
  );
}

// ─── Main TafseerReader Component ───────────────────────────────────────────
export function TafseerReader() {
  const { surahId } = useParams<{ surahId: string }>();
  const navigate = useNavigate();

  const [currentSurah, setCurrentSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [tafseerLang, setTafseerLang] = useState<'EN' | 'UR' | 'AR'>('EN');
  const [fullscreen, setFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allSurahs, setAllSurahs] = useState<Surah[]>(localSurahs as unknown as Surah[]);

  useEffect(() => {
    quranService.getAllSurahs().then(res => {
      if (res.success && res.data && res.data.surahs.length > 0) {
        setAllSurahs(res.data.surahs);
      }
    }).catch(() => { /* keep local data */ });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const surahNum = surahId ? parseInt(surahId) : 1;

        let surah = allSurahs.find(s => s.number === surahNum);
        if (!surah) {
          const surahRes = await quranService.getSurah(surahNum);
          if (surahRes.success && surahRes.data) surah = surahRes.data as any;
        }

        if (surah) {
          setCurrentSurah(surah);
          const ayahsRes = await quranService.getAyahs(surah.number);
          if (ayahsRes.success && ayahsRes.data) {
            setAyahs(ayahsRes.data);
            setCurrentAyahIndex(0);
          }
        } else {
          setError('Surah not found');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [surahId, allSurahs]);

  const fontSizeClasses = { small: 'text-base', medium: 'text-lg', large: 'text-xl' };
  const arabicFontSizes = { small: 'text-2xl', medium: 'text-3xl', large: 'text-4xl' };

  const goToNextAyah = useCallback(() => {
    if (currentAyahIndex < ayahs.length - 1) {
      setCurrentAyahIndex(prev => prev + 1);
    } else if (currentSurah && currentSurah.number < 114) {
      navigate(`/tafseer/${currentSurah.number + 1}`);
    }
  }, [currentAyahIndex, ayahs.length, currentSurah, navigate]);

  const goToPrevAyah = useCallback(() => {
    if (currentAyahIndex > 0) {
      setCurrentAyahIndex(prev => prev - 1);
    } else if (currentSurah && currentSurah.number > 1) {
      navigate(`/tafseer/${currentSurah.number - 1}`);
    }
  }, [currentAyahIndex, currentSurah, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextAyah();
      if (e.key === 'ArrowLeft') goToPrevAyah();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextAyah, goToPrevAyah]);

  const handleSurahChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    navigate(`/tafseer/${num}`);
  };

  const currentAyah = ayahs[currentAyahIndex];
  const progressPercent = ayahs.length > 0 ? ((currentAyahIndex + 1) / ayahs.length) * 100 : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-islamic-gold" />
      </div>
    );
  }

  if (error || !currentSurah) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-red-500 mb-4">{error || 'Surah not found'}</p>
        <Link to="/quran" className="text-islamic-gold hover:underline">Back to Quran Explorer</Link>
      </div>
    );
  }

  const getTafseerContent = () => {
    if (!currentAyah) return '';
    switch (tafseerLang) {
      case 'UR': return currentAyah.tafseerUR || currentAyah.translationUR || 'Tafseer not available in Urdu';
      case 'AR': return currentAyah.tafseerAR || currentAyah.arabicText || 'Tafseer not available in Arabic';
      default: return currentAyah.tafseerEN || currentAyah.translationEN || 'Tafseer not available in English';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "space-y-4 pb-20",
        fullscreen && "fixed inset-0 z-50 bg-islamic-bg-primary p-4 md:p-8 overflow-auto"
      )}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            to={`/quran/${currentSurah.number}`}
            className="flex items-center gap-2 text-islamic-text-secondary hover:text-islamic-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Back</span>
          </Link>

          <select
            value={currentSurah.number}
            onChange={handleSurahChange}
            className="bg-islamic-bg-card border border-islamic-border rounded-lg px-3 py-2 text-islamic-text-primary focus:outline-none focus:border-islamic-gold text-sm cursor-pointer max-w-[220px]"
          >
            {allSurahs.map(s => (
              <option key={s.number} value={s.number}>
                {s.number}. {s.nameEnglish || s.nameTransliteration}
              </option>
            ))}
          </select>

          <div className="flex gap-1">
            <button
              onClick={() => currentSurah.number > 1 && navigate(`/tafseer/${currentSurah.number - 1}`)}
              disabled={currentSurah.number <= 1}
              className="p-1.5 rounded-lg bg-islamic-bg-card border border-islamic-border text-islamic-text-muted hover:text-islamic-gold hover:border-islamic-gold disabled:opacity-30 transition-colors"
              title="Previous Surah"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => currentSurah.number < 114 && navigate(`/tafseer/${currentSurah.number + 1}`)}
              disabled={currentSurah.number >= 114}
              className="p-1.5 rounded-lg bg-islamic-bg-card border border-islamic-border text-islamic-text-muted hover:text-islamic-gold hover:border-islamic-gold disabled:opacity-30 transition-colors"
              title="Next Surah"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-islamic-bg-card border border-islamic-border rounded-lg p-1">
            <button
              onClick={() => setFontSize('small')}
              className={cn("p-1.5 rounded transition-colors", fontSize === 'small' ? "bg-islamic-gold text-islamic-bg-primary" : "text-islamic-text-muted")}
            ><Type className="w-4 h-4" /></button>
            <button
              onClick={() => setFontSize('medium')}
              className={cn("p-1.5 rounded transition-colors", fontSize === 'medium' ? "bg-islamic-gold text-islamic-bg-primary" : "text-islamic-text-muted")}
            ><Type className="w-5 h-5" /></button>
            <button
              onClick={() => setFontSize('large')}
              className={cn("p-1.5 rounded transition-colors", fontSize === 'large' ? "bg-islamic-gold text-islamic-bg-primary" : "text-islamic-text-muted")}
            ><Type className="w-6 h-6" /></button>
          </div>

          <select
            value={tafseerLang}
            onChange={(e) => setTafseerLang(e.target.value as any)}
            className="bg-islamic-bg-card border border-islamic-border rounded-lg px-3 py-2 text-islamic-text-primary focus:outline-none focus:border-islamic-gold text-sm"
          >
            <option value="EN">English</option>
            <option value="UR">Urdu</option>
            <option value="AR">Arabic</option>
          </select>

          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="p-2 rounded-lg bg-islamic-bg-card border border-islamic-border text-islamic-text-muted hover:text-islamic-gold transition-colors"
          >
            {fullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="h-1 bg-islamic-border rounded-full overflow-hidden">
        <div className="h-full bg-islamic-gold rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
      </div>

      <AudioPlayer surahNumber={currentSurah.number} surahName={currentSurah.nameEnglish} />

      {currentAyah && (
        <div className="max-w-4xl mx-auto px-2">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-islamic-gold mb-2">
              {currentSurah.nameArabic}
            </h1>
            <p className="text-islamic-text-secondary text-sm md:text-base">
              {currentSurah.nameEnglish} • Verse {currentAyah.ayahNumber} of {currentSurah.ayahCount}
            </p>
          </div>

          {currentSurah.number !== 9 && currentAyahIndex === 0 && (
            <div className="text-center mb-6">
              <p className="arabic-large text-islamic-gold text-3xl md:text-5xl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            </div>
          )}

          <div className="islamic-card p-6 md:p-12 overflow-hidden">
            <div className="text-center mb-8">
              <p
                className={cn("arabic-large text-islamic-text-primary leading-loose break-words", arabicFontSizes[fontSize])}
                dir="rtl"
              >
                {currentAyah.arabicText}
                <span className="inline-block mr-4 text-islamic-gold font-amiri">
                  ﴿{currentAyah.ayahNumber}﴾
                </span>
              </p>
            </div>

            <div className="section-divider my-6 md:my-8">
              <BookOpen className="w-5 h-5 text-islamic-gold" />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-islamic-gold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {tafseerLang === 'AR' ? 'تفسير' : 'Tafseer'}
              </h3>
              <div
                className={cn(
                  "text-islamic-text-secondary leading-relaxed",
                  fontSizeClasses[fontSize],
                  tafseerLang === 'AR' || tafseerLang === 'UR' ? "text-right font-amiri text-2xl" : "text-left"
                )}
                dir={tafseerLang === 'AR' || tafseerLang === 'UR' ? 'rtl' : 'ltr'}
              >
                {getTafseerContent()}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 sticky bottom-4 bg-islamic-bg-primary/80 backdrop-blur-md p-4 rounded-2xl border border-islamic-border shadow-2xl">
            <button
              onClick={goToPrevAyah}
              disabled={currentSurah.number === 1 && currentAyahIndex === 0}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary hover:text-islamic-gold hover:border-islamic-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm md:text-base shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <span className="text-islamic-text-muted font-mono text-xs md:text-sm bg-islamic-bg-card px-3 py-1 rounded-full border border-islamic-border">
              {currentAyahIndex + 1} / {ayahs.length}
            </span>

            <button
              onClick={goToNextAyah}
              disabled={currentSurah.number === 114 && currentAyahIndex === ayahs.length - 1}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary hover:text-islamic-gold hover:border-islamic-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm md:text-base shadow-lg"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
