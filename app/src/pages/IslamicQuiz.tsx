import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Check, X, Clock, Trophy, RotateCcw, ChevronRight, Filter } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { cn } from '@/lib/utils';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  // ── QURAN ────────────────────────────────────────────
  { id: 'q1', question: 'How many Surahs are in the Quran?', options: ['110', '112', '114', '116'], correctAnswer: 2, explanation: 'The Quran has 114 Surahs (chapters).', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q2', question: 'Which Surah is known as the Heart of the Quran?', options: ['Al-Fatiha', 'Ya-Sin', 'Ar-Rahman', 'Al-Ikhlas'], correctAnswer: 1, explanation: 'Surah Ya-Sin (36) is called the Heart of the Quran by Prophet Muhammad ﷺ.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q3', question: 'How many Ayahs (verses) are in the Quran?', options: ['6236', '6666', '7000', '5000'], correctAnswer: 0, explanation: 'The Quran has 6,236 ayahs.', category: 'Quran', difficulty: 'INTERMEDIATE' },
  { id: 'q4', question: 'In which month was the Quran first revealed?', options: ['Muharram', 'Shawwal', 'Ramadan', 'Dhul-Hijjah'], correctAnswer: 2, explanation: 'The Quran was first revealed in Ramadan on Laylat al-Qadr.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q5', question: 'Which Surah begins without Bismillah?', options: ['Al-Anfal', 'At-Tawbah', 'Al-Baqarah', 'Al-Kahf'], correctAnswer: 1, explanation: "Surah At-Tawbah (9) is the only surah that does not begin with Bismillah.", category: 'Quran', difficulty: 'INTERMEDIATE' },
  { id: 'q6', question: 'How many Juz (parts) is the Quran divided into?', options: ['20', '25', '30', '114'], correctAnswer: 2, explanation: 'The Quran is divided into 30 Juz.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q7', question: 'Which is the longest Surah in the Quran?', options: ['Al-Imran', 'An-Nisa', 'Al-Baqarah', 'Al-Araf'], correctAnswer: 2, explanation: 'Al-Baqarah is the longest Surah with 286 verses.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q8', question: 'Which is the shortest Surah in the Quran?', options: ['Al-Ikhlas', 'Al-Kawthar', 'Al-Falaq', 'An-Nas'], correctAnswer: 1, explanation: 'Al-Kawthar (Surah 108) has only 3 verses, making it the shortest.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q9', question: 'What does "Tafseer" mean?', options: ['Memorization', 'Recitation', 'Explanation/Interpretation', 'Translation'], correctAnswer: 2, explanation: 'Tafseer is the detailed explanation and interpretation of the Quran.', category: 'Quran', difficulty: 'BEGINNER' },
  { id: 'q10', question: 'The Quran was compiled into a single book during which Caliph\'s time?', options: ['Abu Bakr RA', 'Umar RA', 'Uthman RA', 'Ali RA'], correctAnswer: 0, explanation: "Abu Bakr RA initiated the compilation of the Quran after the Battle of Yamama. Uthman RA later standardized copies.", category: 'Quran', difficulty: 'INTERMEDIATE' },

  // ── PROPHETS ──────────────────────────────────────────
  { id: 'p1', question: 'How many Prophets are mentioned by name in the Quran?', options: ['20', '25', '30', '40'], correctAnswer: 1, explanation: '25 Prophets are mentioned by name in the Quran.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p2', question: 'Who was the first Prophet?', options: ['Ibrahim AS', 'Nuh AS', 'Adam AS', 'Idris AS'], correctAnswer: 2, explanation: 'Prophet Adam AS was the first human and the first Prophet.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p3', question: 'Who is known as "Khalilullah" (Friend of Allah)?', options: ['Musa AS', 'Isa AS', 'Ibrahim AS', 'Muhammad ﷺ'], correctAnswer: 2, explanation: 'Prophet Ibrahim AS is called Khalilullah — the intimate Friend of Allah.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p4', question: 'Which Prophet was swallowed by a whale?', options: ['Hud AS', 'Salih AS', 'Yunus AS', 'Ilyas AS'], correctAnswer: 2, explanation: 'Prophet Yunus (Jonah) AS was swallowed by a large whale and remained in its belly for a period.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p5', question: 'Which Prophet built the Ark?', options: ['Dawud AS', 'Nuh AS', 'Sulayman AS', 'Ibrahim AS'], correctAnswer: 1, explanation: 'Prophet Nuh (Noah) AS built the great Ark by Allah\'s command to survive the flood.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p6', question: 'Which Prophet is known as "Kalimullah" (One who spoke to Allah directly)?', options: ['Isa AS', 'Ibrahim AS', 'Musa AS', 'Muhammad ﷺ'], correctAnswer: 2, explanation: 'Prophet Musa (Moses) AS spoke directly to Allah on Mount Sinai, earning the title Kalimullah.', category: 'Prophets', difficulty: 'INTERMEDIATE' },
  { id: 'p7', question: 'Prophet Yusuf (Joseph) AS had how many brothers?', options: ['8', '10', '11', '12'], correctAnswer: 2, explanation: 'Yusuf AS had 11 brothers (12 sons of Yaqub total, including Yusuf himself).', category: 'Prophets', difficulty: 'INTERMEDIATE' },
  { id: 'p8', question: 'Which Prophet was given the miracle of speaking to ants and birds?', options: ['Dawud AS', 'Sulayman AS', 'Idris AS', 'Ilyas AS'], correctAnswer: 1, explanation: 'Prophet Sulayman (Solomon) AS was given the ability to understand and communicate with ants and birds.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p9', question: 'Prophet Isa (Jesus) AS was born to which mother?', options: ['Asiyah', 'Maryam (Mary)', 'Khadijah', 'Fatima'], correctAnswer: 1, explanation: 'Prophet Isa AS was born miraculously to Maryam (Mary) without a father, by Allah\'s command.', category: 'Prophets', difficulty: 'BEGINNER' },
  { id: 'p10', question: 'Which title is given to Prophet Muhammad ﷺ meaning "Seal of Prophets"?', options: ['Khalilullah', 'Habibullah', 'Khatam al-Nabiyyin', 'Rahmatan lil-Alamin'], correctAnswer: 2, explanation: 'Khatam al-Nabiyyin (Seal of the Prophets) — Prophet Muhammad ﷺ is the last and final prophet.', category: 'Prophets', difficulty: 'BEGINNER' },

  // ── PROPHET MUHAMMAD ﷺ ───────────────────────────────
  { id: 'm1', question: 'In which city was Prophet Muhammad ﷺ born?', options: ['Madinah', 'Ta\'if', 'Makkah', 'Jerusalem'], correctAnswer: 2, explanation: 'Prophet Muhammad ﷺ was born in Makkah around 570 CE, in the Year of the Elephant.', category: 'Prophet Muhammad', difficulty: 'BEGINNER' },
  { id: 'm2', question: 'Who was the first wife of Prophet Muhammad ﷺ?', options: ['Aisha RA', 'Hafsa RA', 'Khadijah RA', 'Zainab RA'], correctAnswer: 2, explanation: 'Khadijah bint Khuwaylid RA was the first wife and the first Muslim.', category: 'Prophet Muhammad', difficulty: 'BEGINNER' },
  { id: 'm3', question: 'At what age did Prophet Muhammad ﷺ receive the first revelation?', options: ['35', '40', '45', '50'], correctAnswer: 1, explanation: 'The Prophet ﷺ received the first revelation at age 40 in the Cave of Hira.', category: 'Prophet Muhammad', difficulty: 'BEGINNER' },
  { id: 'm4', question: 'The Hijrah refers to the migration from Makkah to which city?', options: ['Ta\'if', 'Jerusalem', 'Madinah', 'Aqabah'], correctAnswer: 2, explanation: 'The Hijrah in 622 CE was the migration from Makkah to Madinah — it marks the start of the Islamic calendar.', category: 'Prophet Muhammad', difficulty: 'BEGINNER' },
  { id: 'm5', question: 'The "Year of the Elephant" refers to the year?', options: ['570 CE', '610 CE', '622 CE', '632 CE'], correctAnswer: 0, explanation: '570 CE is the Year of the Elephant and the year of the Prophet\'s ﷺ birth, when Abraha attacked Makkah.', category: 'Prophet Muhammad', difficulty: 'INTERMEDIATE' },

  // ── PILLARS OF ISLAM ─────────────────────────────────
  { id: 'i1', question: 'How many pillars does Islam have?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: 'Islam has 5 pillars: Shahada, Salah, Zakat, Sawm, and Hajj.', category: 'Pillars of Islam', difficulty: 'BEGINNER' },
  { id: 'i2', question: 'How many times per day does a Muslim pray?', options: ['3', '4', '5', '7'], correctAnswer: 2, explanation: 'Muslims pray 5 times a day: Fajr, Dhuhr, Asr, Maghrib, and Isha.', category: 'Pillars of Islam', difficulty: 'BEGINNER' },
  { id: 'i3', question: 'Zakat is given on savings held for how long?', options: ['6 months', '9 months', '1 year (Nisab period)', '2 years'], correctAnswer: 2, explanation: 'Zakat is due once a year on savings above the Nisab threshold held for a full lunar year.', category: 'Pillars of Islam', difficulty: 'INTERMEDIATE' },
  { id: 'i4', question: 'What is the minimum amount of Zakat on wealth (percentage)?', options: ['1%', '2.5%', '5%', '10%'], correctAnswer: 1, explanation: 'Zakat on gold, silver, and cash is 2.5% of the total wealth above Nisab.', category: 'Pillars of Islam', difficulty: 'BEGINNER' },
  { id: 'i5', question: 'Fasting in Ramadan is called?', options: ['Hajj', 'Zakat', 'Sawm', 'Salah'], correctAnswer: 2, explanation: 'Sawm refers to fasting — abstaining from food, drink, and other things from dawn to sunset in Ramadan.', category: 'Pillars of Islam', difficulty: 'BEGINNER' },

  // ── ISLAMIC HISTORY ──────────────────────────────────
  { id: 'h1', question: 'The Battle of Badr took place in which year of Hijri?', options: ['1 AH', '2 AH', '3 AH', '5 AH'], correctAnswer: 1, explanation: 'The Battle of Badr took place in 2 AH (624 CE). Muslims were outnumbered 3:1 but won with divine help.', category: 'Islamic History', difficulty: 'INTERMEDIATE' },
  { id: 'h2', question: 'Who was the first Caliph after Prophet Muhammad ﷺ?', options: ['Umar RA', 'Uthman RA', 'Abu Bakr RA', 'Ali RA'], correctAnswer: 2, explanation: 'Abu Bakr as-Siddiq RA was elected as the first Caliph immediately after the Prophet\'s ﷺ passing.', category: 'Islamic History', difficulty: 'BEGINNER' },
  { id: 'h3', question: 'The Islamic calendar starts from which event?', options: ['Prophet\'s birth', 'First revelation', 'Hijrah to Madinah', 'Conquest of Makkah'], correctAnswer: 2, explanation: 'The Islamic Hijri calendar begins from the migration (Hijrah) of the Prophet ﷺ to Madinah in 622 CE.', category: 'Islamic History', difficulty: 'BEGINNER' },
  { id: 'h4', question: 'Conquest of Makkah occurred in which year?', options: ['6 AH', '8 AH', '10 AH', '12 AH'], correctAnswer: 1, explanation: 'The Conquest of Makkah happened in 8 AH (630 CE), when the Prophet ﷺ entered Makkah peacefully with 10,000 companions.', category: 'Islamic History', difficulty: 'INTERMEDIATE' },
  { id: 'h5', question: 'Saladin (Salah ad-Din) recaptured Jerusalem in which year?', options: ['1099', '1187', '1250', '1453'], correctAnswer: 1, explanation: 'Saladin recaptured Jerusalem from the Crusaders in 1187 CE after 88 years of Crusader rule.', category: 'Islamic History', difficulty: 'INTERMEDIATE' },

  // ── AQEEDAH (BELIEFS) ────────────────────────────────
  { id: 'a1', question: 'How many pillars of Iman (faith) are there?', options: ['5', '6', '7', '8'], correctAnswer: 1, explanation: 'There are 6 pillars of Iman: Allah, Angels, Books, Prophets, Day of Judgment, and Qadar (Divine Decree).', category: 'Aqeedah', difficulty: 'BEGINNER' },
  { id: 'a2', question: 'How many angels are known by name in Islam?', options: ['2', '4', '6', '8'], correctAnswer: 1, explanation: 'Four angels are known by name: Jibreel, Mikail, Israfil, and Azrael (Malak al-Mawt).', category: 'Aqeedah', difficulty: 'INTERMEDIATE' },
  { id: 'a3', question: 'Which angel is responsible for blowing the Trumpet on Judgment Day?', options: ['Jibreel', 'Mikail', 'Israfil', 'Azrael'], correctAnswer: 2, explanation: 'Angel Israfil will blow the Trumpet (Sur) to signal the Day of Judgment.', category: 'Aqeedah', difficulty: 'BEGINNER' },
  { id: 'a4', question: 'How many divine books are mentioned in the Quran?', options: ['3', '4', '5', '6'], correctAnswer: 1, explanation: 'Four major divine books: Tawrat (Torah to Musa), Zabur (Psalms to Dawud), Injeel (Gospel to Isa), Quran (to Muhammad ﷺ).', category: 'Aqeedah', difficulty: 'INTERMEDIATE' },
  { id: 'a5', question: 'What is "Tawhid"?', options: ['Prayer', 'Fasting', 'Oneness of Allah', 'Pilgrimage'], correctAnswer: 2, explanation: 'Tawhid is the fundamental Islamic concept of the absolute Oneness and uniqueness of Allah.', category: 'Aqeedah', difficulty: 'BEGINNER' },

  // ── 99 NAMES / ASMAUL HUSNA ──────────────────────────
  { id: 'n1', question: 'How many Names of Allah (Asmaul Husna) are there?', options: ['33', '66', '99', '100'], correctAnswer: 2, explanation: 'Allah has 99 Names. The Prophet ﷺ said whoever memorizes them all will enter Paradise.', category: '99 Names', difficulty: 'BEGINNER' },
  { id: 'n2', question: 'What does "Ar-Rahman" mean?', options: ['The Most Merciful', 'The Most Gracious', 'The Creator', 'The Provider'], correctAnswer: 1, explanation: 'Ar-Rahman means The Most Gracious — His general mercy covers all of creation without distinction.', category: '99 Names', difficulty: 'BEGINNER' },
  { id: 'n3', question: 'What does "Al-Quddus" mean?', options: ['The All-Knowing', 'The Holy and Pure', 'The Provider', 'The Strong'], correctAnswer: 1, explanation: 'Al-Quddus means The Holy and Pure — Allah is free from all defects and imperfections.', category: '99 Names', difficulty: 'INTERMEDIATE' },

  // ── HADITH ────────────────────────────────────────────
  { id: 'hd1', question: '"Actions are judged by intentions" is which Hadith number in Nawawi\'s collection?', options: ['Hadith #1', 'Hadith #5', 'Hadith #10', 'Hadith #40'], correctAnswer: 0, explanation: 'This foundational hadith is Hadith #1 in Imam Nawawi\'s collection, narrated by Umar ibn al-Khattab RA.', category: 'Hadith', difficulty: 'INTERMEDIATE' },
  { id: 'hd2', question: 'Who compiled the most authentic collection of hadith known as Sahih Bukhari?', options: ['Imam Muslim', 'Imam Nawawi', 'Imam Bukhari', 'Imam Tirmidhi'], correctAnswer: 2, explanation: 'Imam Muhammad al-Bukhari compiled Sahih Bukhari containing ~7,275 hadiths (2,602 unique).', category: 'Hadith', difficulty: 'BEGINNER' },
  { id: 'hd3', question: 'The "Six Authentic Books" of Hadith are called?', options: ['Al-Muwatta', 'Kutub al-Sitta', 'Musnad Ahmad', 'Sunan al-Bayhaqi'], correctAnswer: 1, explanation: 'Kutub al-Sitta (The Six Books): Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan an-Nasa\'i, Sunan Ibn Majah.', category: 'Hadith', difficulty: 'ADVANCED' },

  // ── FIQH (JURISPRUDENCE) ─────────────────────────────
  { id: 'f1', question: 'How many Rak\'ahs are in Fajr prayer?', options: ['2', '3', '4', '5'], correctAnswer: 0, explanation: 'Fajr (dawn) prayer has 2 obligatory Rak\'ahs + 2 Sunnah rak\'ahs before it.', category: 'Prayer', difficulty: 'BEGINNER' },
  { id: 'f2', question: 'Which prayer has 3 Rak\'ahs?', options: ['Fajr', 'Dhuhr', 'Maghrib', 'Isha'], correctAnswer: 2, explanation: 'Maghrib (sunset) prayer has 3 Fard Rak\'ahs — the only odd-numbered obligatory prayer.', category: 'Prayer', difficulty: 'BEGINNER' },
  { id: 'f3', question: 'How many Rak\'ahs are in the five daily prayers combined?', options: ['15', '17', '19', '21'], correctAnswer: 1, explanation: 'Fajr(2)+Dhuhr(4)+Asr(4)+Maghrib(3)+Isha(4) = 17 Fard Rak\'ahs.', category: 'Prayer', difficulty: 'BEGINNER' },
];

const CATEGORIES = ['All', ...new Set(ALL_QUIZ_QUESTIONS.map(q => q.category))];
const DIFFICULTIES = ['All', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

export function IslamicQuiz() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const { addQuizResult } = useProgressStore();

  const currentQ = quizQuestions[currentQuestion];

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0 && !showExplanation) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showExplanation && gameState === 'playing') {
      handleAnswer(-1);
    }
  }, [timeLeft, gameState, showExplanation]);

  const startQuiz = () => {
    let filtered = ALL_QUIZ_QUESTIONS;
    if (category !== 'All') filtered = filtered.filter(q => q.category === category);
    if (difficulty !== 'All') filtered = filtered.filter(q => q.difficulty === difficulty);
    // Shuffle and take up to 15 questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 15);
    setQuizQuestions(shuffled);
    setGameState('playing');
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    const correct = answerIndex === currentQ.correctAnswer;
    setAnswers(prev => [...prev, { questionId: currentQ.id, correct }]);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const correctAnswers = answers.filter(a => a.correct).length;
    const scorePercent = (correctAnswers / quizQuestions.length) * 100;
    addQuizResult({
      category: category === 'All' ? 'General' : category,
      difficulty: difficulty === 'All' ? 'BEGINNER' : difficulty as any,
      totalQuestions: quizQuestions.length,
      correctAnswers,
      scorePercent,
      timeTakenSeconds: 0,
    });
    setGameState('finished');
  };

  const getGrade = (percent: number) => {
    if (percent >= 90) return { grade: 'A+', color: 'text-islamic-emerald' };
    if (percent >= 80) return { grade: 'A', color: 'text-islamic-emerald' };
    if (percent >= 70) return { grade: 'B', color: 'text-islamic-gold' };
    if (percent >= 60) return { grade: 'C', color: 'text-islamic-gold' };
    return { grade: 'D', color: 'text-red-500' };
  };

  if (gameState === 'menu') {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">Islamic Quiz</h1>
          <p className="text-islamic-text-muted mt-1">Test your knowledge — {ALL_QUIZ_QUESTIONS.length} questions across {CATEGORIES.length - 1} topics</p>
        </div>

        <div className="islamic-card p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-5 h-5 text-islamic-gold" />
            <h3 className="font-semibold text-islamic-text-primary">Filter Questions</h3>
          </div>

          <div>
            <p className="text-sm text-islamic-text-muted mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                    category === cat ? 'bg-islamic-gold text-islamic-bg-primary' : 'bg-islamic-bg-secondary text-islamic-text-secondary hover:text-islamic-gold')}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-islamic-text-muted mb-2">Difficulty</p>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map(d => (
                <button key={d} onClick={() => setDifficulty(d)}
                  className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                    difficulty === d ? 'bg-islamic-gold text-islamic-bg-primary' : 'bg-islamic-bg-secondary text-islamic-text-secondary hover:text-islamic-gold')}>
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="islamic-card p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-islamic-gold/10 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-islamic-gold" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-islamic-text-primary mb-2">Ready to Test Your Knowledge?</h2>
          <p className="text-islamic-text-secondary mb-6">Up to 15 questions • 30 seconds each • Instant explanations</p>
          <button onClick={startQuiz} className="btn-gold flex items-center gap-2 mx-auto">
            <Play className="w-5 h-5" />
            Start Quiz
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ label: 'Total Questions', value: ALL_QUIZ_QUESTIONS.length }, { label: 'Topics', value: CATEGORIES.length - 1 }, { label: 'Seconds Each', value: 30 }, { label: 'Points Each', value: '+10' }].map(stat => (
            <div key={stat.label} className="islamic-card p-4 text-center">
              <p className="text-3xl font-bold text-islamic-gold">{stat.value}</p>
              <p className="text-sm text-islamic-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (gameState === 'finished') {
    const correctAnswers = answers.filter(a => a.correct).length;
    const scorePercent = quizQuestions.length > 0 ? (correctAnswers / quizQuestions.length) * 100 : 0;
    const { grade, color } = getGrade(scorePercent);

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <div className="islamic-card p-8 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-islamic-gold/10 flex items-center justify-center">
            <Trophy className="w-12 h-12 text-islamic-gold" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-islamic-text-primary mb-2">Quiz Complete!</h2>
          <div className={cn('text-6xl font-bold mb-4', color)}>{grade}</div>
          <p className="text-2xl text-islamic-text-primary mb-2">{correctAnswers} / {quizQuestions.length} Correct</p>
          <p className="text-islamic-text-muted">{scorePercent.toFixed(0)}% Accuracy</p>
          <div className="flex gap-4 justify-center mt-6">
            <button onClick={startQuiz} className="btn-gold flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />Try Again
            </button>
            <button onClick={() => setGameState('menu')} className="px-4 py-2 rounded-lg bg-islamic-bg-secondary text-islamic-text-secondary hover:text-islamic-gold transition-colors">
              Change Topic
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-heading font-semibold text-islamic-text-primary">Review Answers</h3>
          {quizQuestions.map((q, i) => {
            const answer = answers.find(a => a.questionId === q.id);
            return (
              <div key={q.id} className="islamic-card p-4">
                <div className="flex items-start gap-3">
                  <div className={cn('w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5', answer?.correct ? 'bg-islamic-emerald' : 'bg-red-500')}>
                    {answer?.correct ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <p className="text-islamic-text-primary font-medium">{i + 1}. {q.question}</p>
                    <p className="text-sm text-islamic-gold mt-1">✓ {q.options[q.correctAnswer]}</p>
                    <p className="text-xs text-islamic-text-muted mt-1">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  if (!currentQ) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-islamic-text-muted">Question {currentQuestion + 1} of {quizQuestions.length}</span>
        <div className={cn('flex items-center gap-2', timeLeft <= 10 ? 'text-red-500' : 'text-islamic-gold')}>
          <Clock className="w-4 h-4" />
          <span className="font-mono font-bold">{timeLeft}s</span>
        </div>
      </div>

      <div className="h-2 bg-islamic-border rounded-full overflow-hidden">
        <div className="h-full bg-islamic-gold rounded-full transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
      </div>

      <div className="islamic-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 rounded bg-islamic-bg-secondary text-xs text-islamic-text-muted">{currentQ.category}</span>
          <span className="px-2 py-1 rounded bg-islamic-bg-secondary text-xs text-islamic-text-muted">{currentQ.difficulty}</span>
        </div>
        <h2 className="text-xl font-semibold text-islamic-text-primary mb-6">{currentQ.question}</h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button key={index} onClick={() => !showExplanation && handleAnswer(index)} disabled={showExplanation}
              className={cn('w-full p-4 rounded-xl text-left transition-all',
                showExplanation
                  ? index === currentQ.correctAnswer
                    ? 'bg-islamic-emerald/20 border-2 border-islamic-emerald'
                    : selectedAnswer === index
                      ? 'bg-red-500/20 border-2 border-red-500'
                      : 'bg-islamic-bg-secondary opacity-50'
                  : 'bg-islamic-bg-secondary hover:bg-islamic-bg-hover border-2 border-transparent hover:border-islamic-gold/50')}>
              <div className="flex items-center gap-3">
                <span className={cn('w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm',
                  showExplanation
                    ? index === currentQ.correctAnswer ? 'bg-islamic-emerald text-white'
                      : selectedAnswer === index ? 'bg-red-500 text-white' : 'bg-islamic-border text-islamic-text-muted'
                    : 'bg-islamic-border text-islamic-text-primary')}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-islamic-text-primary">{option}</span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 bg-islamic-gold/5 rounded-xl border border-islamic-gold/20">
              <p className="text-sm text-islamic-gold font-medium mb-1">Explanation</p>
              <p className="text-islamic-text-secondary">{currentQ.explanation}</p>
              <button onClick={nextQuestion} className="btn-gold flex items-center gap-2 mt-4">
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
