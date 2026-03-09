import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { surahs as localSurahsData } from '@/data/quranComplete';
import { useProgressStore } from '@/store/progressStore';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

// ─── Static Juz start/first-Surah info ───────────────────────────────────────
// Each entry: { juz, firstSurahNumber, firstAyahInJuz }
const JUZ_INFO: Record<number, { starts: string }> = {
  1: { starts: 'Al-Fatihah 1:1' },
  2: { starts: 'Al-Baqarah 2:142' },
  3: { starts: 'Al-Baqarah 2:253' },
  4: { starts: 'Aal-E-Imran 3:92' },
  5: { starts: 'An-Nisa 4:24' },
  6: { starts: 'An-Nisa 4:148' },
  7: { starts: 'Al-Ma\'idah 5:82' },
  8: { starts: 'Al-An\'am 6:111' },
  9: { starts: 'Al-A\'raf 7:88' },
  10: { starts: 'Al-Anfal 8:41' },
  11: { starts: 'At-Tawbah 9:93' },
  12: { starts: 'Hud 11:6' },
  13: { starts: 'Yusuf 12:53' },
  14: { starts: 'Al-Hijr 15:1' },
  15: { starts: 'Al-Isra 17:1' },
  16: { starts: 'Al-Kahf 18:75' },
  17: { starts: 'Al-Anbiya 21:1' },
  18: { starts: 'Al-Mu\'minun 23:1' },
  19: { starts: 'Al-Furqan 25:21' },
  20: { starts: 'An-Naml 27:56' },
  21: { starts: 'Al-Ankabut 29:46' },
  22: { starts: 'Al-Ahzab 33:31' },
  23: { starts: 'Ya-Sin 36:28' },
  24: { starts: 'Az-Zumar 39:32' },
  25: { starts: 'Fussilat 41:47' },
  26: { starts: 'Al-Ahqaf 46:1' },
  27: { starts: 'Adh-Dhariyat 51:31' },
  28: { starts: 'Al-Mujadila 58:1' },
  29: { starts: 'Al-Mulk 67:1' },
  30: { starts: 'An-Naba 78:1' },
};

export function JuzDashboard() {
  const { getCompletedSurahs } = useProgressStore();
  const completedSurahs = getCompletedSurahs();
  const [expandedJuz, setExpandedJuz] = useState<number | null>(null);
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      setLoading(true);
      const res = await quranService.getAllSurahs();
      if (res.success && res.data) {
        setSurahs(res.data.surahs);
      }
      setLoading(false);
    };
    fetchSurahs();
  }, []);

  // Build Juz → Surah mapping from fetched data
  const juzData = Array.from({ length: 30 }, (_, i) => {
    const juzNumber = i + 1;
    const juzSurahs = surahs.filter(
      s => s.juzStart <= juzNumber && s.juzEnd >= juzNumber
    );
    const completedCount = juzSurahs.filter(s => completedSurahs.includes(s.number)).length;
    const progressPercent = juzSurahs.length > 0
      ? Math.round((completedCount / juzSurahs.length) * 100)
      : 0;

    return { number: juzNumber, surahs: juzSurahs, completedCount, progressPercent };
  });

  const toggleJuz = (n: number) => setExpandedJuz(prev => prev === n ? null : n);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">Juz Dashboard</h1>
        <p className="text-islamic-text-muted mt-1">Click any Juz to see which Surahs it contains, then open any Surah</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Juz Completed', value: juzData.filter(j => j.progressPercent === 100).length },
          { label: 'Surahs Completed', value: completedSurahs.length },
          { label: 'Overall Progress', value: `${Math.round((completedSurahs.length / 114) * 100)}%` },
          { label: 'Surahs Remaining', value: 114 - completedSurahs.length },
        ].map(stat => (
          <div key={stat.label} className="islamic-card p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-islamic-gold">{stat.value}</p>
            <p className="text-xs text-islamic-text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Juz List */}
      <div className="space-y-2">
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-gold"></div>
          </div>
        )}
        {!loading && juzData.map(juz => (
          <motion.div
            key={juz.number}
            layout
            className="islamic-card overflow-hidden"
          >
            {/* Juz Header Row */}
            <button
              onClick={() => toggleJuz(juz.number)}
              className="w-full flex items-center gap-4 p-4 hover:bg-islamic-bg-hover/40 transition-colors text-left"
            >
              {/* Progress Circle */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-islamic-border" />
                  <circle
                    cx="24" cy="24" r="20" fill="none"
                    stroke={juz.progressPercent === 100 ? '#2ECC71' : '#C9A84C'}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${(juz.progressPercent / 100) * 125.7} 125.7`}
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-islamic-text-primary">{juz.number}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-islamic-text-primary">Juz {juz.number}</h3>
                  {juz.progressPercent === 100 && (
                    <CheckCircle2 className="w-4 h-4 text-islamic-emerald" />
                  )}
                  <span className="text-xs text-islamic-text-muted">
                    {juz.surahs.length} Surah{juz.surahs.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-xs text-islamic-text-muted">
                  Starts: {JUZ_INFO[juz.number]?.starts}
                </p>
                {/* Progress bar */}
                <div className="mt-1.5 h-1.5 bg-islamic-border rounded-full overflow-hidden max-w-[200px]">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${juz.progressPercent}%`,
                      background: juz.progressPercent === 100
                        ? '#2ECC71'
                        : 'linear-gradient(90deg, #C9A84C, #E8C97A)'
                    }}
                  />
                </div>
              </div>

              {/* Right: progress label + chevron */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-islamic-text-muted">Completed</p>
                  <p className="text-sm font-semibold text-islamic-gold">
                    {juz.completedCount}/{juz.surahs.length}
                  </p>
                </div>
                {expandedJuz === juz.number
                  ? <ChevronUp className="w-5 h-5 text-islamic-text-muted" />
                  : <ChevronDown className="w-5 h-5 text-islamic-text-muted" />
                }
              </div>
            </button>

            {/* Expanded Surah List */}
            <AnimatePresence>
              {expandedJuz === juz.number && (
                <motion.div
                  key={`juz-${juz.number}-surahs`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-islamic-border px-4 pb-4 pt-3">
                    <p className="text-xs text-islamic-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-islamic-gold" />
                      Surahs in Juz {juz.number}
                    </p>

                    {juz.surahs.length === 0 ? (
                      <p className="text-sm text-islamic-text-muted">No surahs found for this Juz.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {juz.surahs.map(surah => {
                          const done = completedSurahs.includes(surah.number);
                          return (
                            <Link
                              key={surah.number}
                              to={`/quran/${surah.number}`}
                              className={cn(
                                'group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200',
                                'hover:border-islamic-gold hover:bg-islamic-gold/5 hover:-translate-y-0.5 hover:shadow-md',
                                done
                                  ? 'border-islamic-emerald/40 bg-islamic-emerald/5'
                                  : 'border-islamic-border bg-islamic-bg-secondary'
                              )}
                            >
                              {/* Number Badge */}
                              <div className={cn(
                                'w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0',
                                done
                                  ? 'bg-islamic-emerald/20 text-islamic-emerald'
                                  : 'bg-islamic-gold/20 text-islamic-gold'
                              )}>
                                {surah.number}
                              </div>

                              {/* Name */}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-islamic-text-primary truncate">
                                  {surah.nameEnglish}
                                </p>
                                <p className="text-xs text-islamic-text-muted">
                                  {surah.ayahCount} verses · {surah.revelationType === 'MAKKI' ? 'Makki' : 'Madani'}
                                </p>
                              </div>

                              {/* Arabic + Open Icon */}
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-sm text-islamic-gold font-arabic hidden md:block">
                                  {surah.nameArabic}
                                </span>
                                <ExternalLink className={cn(
                                  'w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity',
                                  done ? 'text-islamic-emerald' : 'text-islamic-gold'
                                )} />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
