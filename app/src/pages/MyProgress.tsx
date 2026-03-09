import { motion } from 'framer-motion';
import { BookOpen, Trophy, Flame, Target, TrendingUp, Calendar } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { surahs } from '@/data/quran';
import { cn } from '@/lib/utils';

export function MyProgress() {
  const { 
    getCompletionPercentage, 
    getCompletedSurahs, 
    getQuizResults, 
    getBestQuizScore,
    getStreakStatus 
  } = useProgressStore();

  const completionPercentage = getCompletionPercentage();
  const completedSurahs = getCompletedSurahs();
  const quizResults = getQuizResults();
  const bestQuizScore = getBestQuizScore();
  const streakStatus = getStreakStatus();

  // Generate last 30 days for streak calendar
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toDateString();
  }).reverse();

  const handleCheckIn = () => {
    const { checkInStreak } = useProgressStore.getState();
    checkInStreak();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          My Progress
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Track your Islamic learning journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="islamic-card p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-islamic-gold/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-islamic-gold" />
            </div>
            <div>
              <p className="text-2xl font-bold text-islamic-text-primary">{completionPercentage}%</p>
              <p className="text-sm text-islamic-text-muted">Quran Completed</p>
            </div>
          </div>
        </div>

        <div className="islamic-card p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-islamic-emerald/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-islamic-emerald" />
            </div>
            <div>
              <p className="text-2xl font-bold text-islamic-text-primary">{completedSurahs.length}</p>
              <p className="text-sm text-islamic-text-muted">Surahs Completed</p>
            </div>
          </div>
        </div>

        <div className="islamic-card p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-islamic-amber/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-islamic-amber" />
            </div>
            <div>
              <p className="text-2xl font-bold text-islamic-text-primary">{bestQuizScore.toFixed(0)}%</p>
              <p className="text-sm text-islamic-text-muted">Best Quiz Score</p>
            </div>
          </div>
        </div>

        <div className="islamic-card p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-islamic-text-primary">{streakStatus.current}</p>
              <p className="text-sm text-islamic-text-muted">Day Streak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="islamic-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-semibold text-islamic-text-primary flex items-center gap-2">
            <Calendar className="w-5 h-5 text-islamic-gold" />
            Activity Calendar
          </h2>
          {streakStatus.canCheckIn && (
            <button
              onClick={handleCheckIn}
              className="px-4 py-2 rounded-lg bg-islamic-gold text-islamic-bg-primary text-sm font-medium hover:bg-islamic-gold-light transition-colors"
            >
              Check In Today
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-10 gap-2">
          {last30Days.map((date, index) => {
            const isActive = Math.random() > 0.5; // Simulated activity
            return (
              <div
                key={index}
                className={cn(
                  "aspect-square rounded-md transition-colors",
                  isActive 
                    ? "bg-islamic-gold" 
                    : "bg-islamic-bg-secondary"
                )}
                title={date}
              />
            );
          })}
        </div>
        
        <div className="flex items-center justify-between mt-4 text-sm text-islamic-text-muted">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-sm bg-islamic-bg-secondary" />
            <div className="w-3 h-3 rounded-sm bg-islamic-gold/30" />
            <div className="w-3 h-3 rounded-sm bg-islamic-gold/60" />
            <div className="w-3 h-3 rounded-sm bg-islamic-gold" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Quran Completion Map */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-islamic-gold" />
          Quran Completion Map
        </h2>
        
        <div className="grid grid-cols-19 gap-1">
          {surahs.map((surah) => {
            const isCompleted = completedSurahs.includes(surah.number);
            return (
              <div
                key={surah.number}
                className={cn(
                  "aspect-square rounded-sm flex items-center justify-center text-xs cursor-pointer transition-all hover:scale-110",
                  isCompleted 
                    ? "bg-islamic-emerald text-white" 
                    : "bg-islamic-bg-secondary text-islamic-text-muted"
                )}
                title={`${surah.number}. ${surah.nameEnglish}`}
              >
                {surah.number}
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-islamic-emerald" />
            <span className="text-islamic-text-muted">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-islamic-bg-secondary" />
            <span className="text-islamic-text-muted">Not Started</span>
          </div>
        </div>
      </div>

      {/* Quiz History */}
      {quizResults.length > 0 && (
        <div className="islamic-card p-6">
          <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-islamic-gold" />
            Recent Quiz Results
          </h2>
          
          <div className="space-y-3">
            {quizResults.slice(0, 5).map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-islamic-bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-islamic-text-primary">{result.category}</p>
                  <p className="text-sm text-islamic-text-muted">
                    {new Date(result.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "font-bold",
                    result.scorePercent >= 70 ? "text-islamic-emerald" : 
                    result.scorePercent >= 50 ? "text-islamic-gold" : "text-islamic-crimson"
                  )}>
                    {result.scorePercent.toFixed(0)}%
                  </p>
                  <p className="text-sm text-islamic-text-muted">
                    {result.correctAnswers}/{result.totalQuestions} correct
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
