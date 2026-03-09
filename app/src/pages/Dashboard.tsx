import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Heart,
  Scroll,
  Users,
  Calendar,
  GraduationCap,
  History,
  Sparkles,
  Bookmark,
  Flame,
  Trophy,
  Clock,
  Search,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useBookmarkStore } from '@/store/bookmarkStore';
import { quranService, type Surah } from '@/services/quranService';
import { hadithService } from '@/services/hadithService';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const quickAccessItems = [
  { path: '/quran', label: 'Quran', icon: BookOpen, color: 'from-emerald-500/20 to-emerald-600/10' },
  { path: '/juz', label: 'Juz', icon: Scroll, color: 'from-cyan-500/20 to-cyan-600/10' },
  { path: '/hadith', label: 'Hadith', icon: Scroll, color: 'from-amber-500/20 to-amber-600/10' },
  { path: '/duas', label: 'Du\'as', icon: Heart, color: 'from-rose-500/20 to-rose-600/10' },
  { path: '/prophet-muhammad', label: 'Prophet ﷺ', icon: Heart, color: 'from-red-500/20 to-red-600/10' },
  { path: '/asmaul-husna', label: '99 Names', icon: Sparkles, color: 'from-violet-500/20 to-violet-600/10' },
  { path: '/prophets', label: 'Prophets', icon: Users, color: 'from-blue-500/20 to-blue-600/10' },
  { path: '/history', label: 'History', icon: History, color: 'from-orange-500/20 to-orange-600/10' },
  { path: '/research', label: 'Research', icon: Search, color: 'from-teal-500/20 to-teal-600/10' },
  { path: '/quiz', label: 'Quiz', icon: GraduationCap, color: 'from-pink-500/20 to-pink-600/10' },
  { path: '/salah', label: 'Salah', icon: Clock, color: 'from-sky-500/20 to-sky-600/10' },
  { path: '/calendar', label: 'Calendar', icon: Calendar, color: 'from-indigo-500/20 to-indigo-600/10' },
];

const islamicQuotes = [
  {
    text: "Indeed, with hardship will be ease.",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    ref: "Surah Ash-Sharh 94:5",
  },
  {
    text: "And He found you lost and guided you.",
    arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
    ref: "Surah Ad-Duha 93:7",
  },
  {
    text: "So remember Me; I will remember you.",
    arabic: "فَٱذْكُرُونِىٓ أَذْكُرْكُمْ",
    ref: "Surah Al-Baqarah 2:152",
  },
  {
    text: "Indeed, Allah is with the patient.",
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    ref: "Surah Al-Baqarah 2:153",
  },
  {
    text: "Verily, Allah does not allow the reward of the righteous to be lost.",
    arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    ref: "Surah At-Tawbah 9:120",
  },
  {
    text: "Whoever relies upon Allah — He is sufficient for him.",
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    ref: "Surah At-Talaq 65:3",
  },
  {
    text: "So be patient. Indeed, the promise of Allah is truth.",
    arabic: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ",
    ref: "Surah Ghafir 40:77",
  },
  {
    text: "Do not lose hope, nor be sad. You will surely be victorious if you are true believers.",
    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ",
    ref: "Surah Aal-Imran 3:139",
  },
];

// Proper Hijri date calculation (same algorithm as IslamicCalendar page)
function getHijriDate(date: Date) {
  const m = date.getMonth() + 1, y = date.getFullYear(), d = date.getDate();
  let jd: number;
  if (y > 1582 || (y === 1582 && m > 10) || (y === 1582 && m === 10 && d > 14)) {
    jd = Math.floor((1461 * (y + 4800 + Math.floor((m - 14) / 12))) / 4) +
      Math.floor((367 * (m - 2 - 12 * Math.floor((m - 14) / 12))) / 12) -
      Math.floor((3 * Math.floor((y + 4900 + Math.floor((m - 14) / 12)) / 100)) / 4) + d - 32075;
  } else {
    jd = 367 * y - Math.floor((7 * (y + 5001 + Math.floor((m - 9) / 7))) / 4) +
      Math.floor((275 * m) / 9) + d + 1729777;
  }
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = (Math.floor((10985 - l2) / 5316)) * (Math.floor((50 * l2) / 17719)) +
    (Math.floor(l2 / 5670)) * (Math.floor((43 * l2) / 15238));
  const l3 = l2 - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) -
    (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
  return { hDay: l3 - Math.floor((709 * Math.floor((24 * l3) / 709)) / 24), hMonth: Math.floor((24 * l3) / 709), hYear: 30 * n + j - 30 };
}

const hijriMonthNames = ['Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Thani", 'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', "Dhu al-Qi'dah", 'Dhu al-Hijjah'];

export function Dashboard() {
  const { getCompletionPercentage, getStreakStatus, getBestQuizScore } = useProgressStore();
  const { bookmarks } = useBookmarkStore();
  const [dailyAyah, setDailyAyah] = useState<Surah | null>(null);
  const [dailyHadith, setDailyHadith] = useState<any | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [hijriDate, setHijriDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyData = async () => {
      setLoading(true);
      try {
        const [ayahRes, hadithRes] = await Promise.all([
          quranService.getDailyAyah(),
          hadithService.getDailyHadith()
        ]);

        if (ayahRes.success) setDailyAyah(ayahRes.data!);
        if (hadithRes.success) setDailyHadith(hadithRes.data!);
      } catch (error) {
        console.error("Failed to fetch dashboard daily data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyData();

    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    setQuoteIndex(dayOfYear % islamicQuotes.length);
    const h = getHijriDate(new Date());
    setHijriDate(`${h.hDay} ${hijriMonthNames[h.hMonth - 1] || 'Muharram'} ${h.hYear} AH`);
  }, []);

  // Auto-rotate quotes every 6 seconds
  useEffect(() => {
    const id = setInterval(() => setQuoteIndex(i => (i + 1) % islamicQuotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  const dailyQuote = islamicQuotes[quoteIndex];

  const completionPercentage = getCompletionPercentage();
  const streakStatus = getStreakStatus();
  const bestQuizScore = getBestQuizScore();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* ── Motivational Quranic Banner ── */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl border border-islamic-gold/30"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(30,45,77,0.7) 50%, rgba(10,17,40,0.9) 100%)' }}
      >
        {/* Decorative Arabic calligraphy background */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 opacity-[0.04] pointer-events-none select-none">
          <span className="text-[180px] font-arabic text-islamic-gold leading-none">{dailyQuote.arabic}</span>
        </div>

        <div className="relative px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Quote */}
          <div className="flex-1 min-w-0">
            {/* Arabic ayah */}
            <p className="font-arabic text-2xl md:text-3xl text-islamic-gold leading-relaxed text-right md:text-left mb-3 dir-rtl">
              {dailyQuote.arabic}
            </p>
            {/* Translation */}
            <p className="text-lg md:text-xl font-semibold text-islamic-text-primary leading-snug mb-1">
              &ldquo;{dailyQuote.text}&rdquo;
            </p>
            <p className="text-sm text-islamic-gold/80 font-medium">{dailyQuote.ref}</p>
          </div>

          {/* Right: Date + Streak */}
          <div className="flex flex-col items-end gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-xs text-islamic-text-muted">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm font-semibold text-islamic-gold">{hijriDate}</p>
            </div>
            {/* Streak badge */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/20 border border-orange-500/30">
              <Flame className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-xs text-islamic-text-muted leading-none">Daily Streak</p>
                <p className="text-lg font-bold text-white leading-tight">{streakStatus.current} days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-rotate dots */}
        <div className="flex justify-center gap-1.5 pb-4">
          {islamicQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setQuoteIndex(i)}
              className="rounded-full transition-all duration-500"
              style={{
                background: quoteIndex === i ? '#C9A84C' : 'rgba(201,168,76,0.3)',
                width: quoteIndex === i ? '20px' : '6px',
                height: '6px',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Daily Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Ayah */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="islamic-card p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading font-semibold text-islamic-text-primary flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-islamic-gold" />
                Daily Ayah
              </h2>
              {dailyAyah && (
                <Link to={`/quran/${dailyAyah.number}`} className="text-sm text-islamic-gold hover:underline">
                  Read More
                </Link>
              )}
            </div>
            {loading || !dailyAyah ? (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-black/20 rounded w-2/3"></div>
                <div className="h-4 bg-black/20 rounded w-full"></div>
                <div className="h-4 bg-black/20 rounded w-1/2"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="arabic-large text-islamic-gold">
                  Surah {dailyAyah.nameArabic} ({dailyAyah.nameEnglish})
                </p>
                <p className="text-islamic-text-secondary italic">
                  {dailyAyah.summary}
                </p>
                <div className="flex items-center gap-4 text-sm text-islamic-text-muted">
                  <span>{dailyAyah.revelationType === 'MAKKI' ? 'Makki' : 'Madani'}</span>
                  <span>•</span>
                  <span>{dailyAyah.ayahCount} verses</span>
                  <span>•</span>
                  <span>Juz {dailyAyah.juzStart}-{dailyAyah.juzEnd}</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Daily Hadith */}
        <motion.div variants={itemVariants}>
          <div className="islamic-card p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading font-semibold text-islamic-text-primary flex items-center gap-2">
                <Scroll className="w-5 h-5 text-islamic-gold" />
                Daily Hadith
              </h2>
              <Link to="/hadith" className="text-sm text-islamic-gold hover:underline">
                View All
              </Link>
            </div>
            {loading || !dailyHadith ? (
              <div className="animate-pulse space-y-4">
                <div className="h-20 bg-black/20 rounded w-full"></div>
                <div className="h-4 bg-black/20 rounded w-1/2"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-islamic-text-secondary line-clamp-4">
                  "{dailyHadith.translationEN}"
                </p>
                <div className="text-sm text-islamic-text-muted">
                  <p className="font-medium text-islamic-text-secondary">{dailyHadith.narrator}</p>
                  <p>{dailyHadith.source}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="islamic-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-islamic-text-primary">{completionPercentage}%</p>
            <p className="text-sm text-islamic-text-muted">Quran Completion</p>
          </div>
        </div>

        <div className="islamic-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-islamic-text-primary">{bestQuizScore.toFixed(0)}%</p>
            <p className="text-sm text-islamic-text-muted">Best Quiz Score</p>
          </div>
        </div>

        <div className="islamic-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Bookmark className="w-6 h-6 text-rose-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-islamic-text-primary">{bookmarks.length}</p>
            <p className="text-sm text-islamic-text-muted">Bookmarks</p>
          </div>
        </div>

        <div className="islamic-card p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <Flame className="w-6 h-6 text-violet-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-islamic-text-primary">{streakStatus.longest}</p>
            <p className="text-sm text-islamic-text-muted">Longest Streak</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Access Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-heading font-semibold text-islamic-text-primary mb-3">
          Quick Access
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {quickAccessItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group islamic-card p-3 flex flex-col items-center text-center gap-2 hover:-translate-y-1"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br",
                item.color
              )}>
                <item.icon className="w-7 h-7 text-islamic-text-primary" />
              </div>
              <span className="text-sm font-medium text-islamic-text-secondary group-hover:text-islamic-gold transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>


    </motion.div>
  );
}
