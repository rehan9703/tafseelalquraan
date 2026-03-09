import { useState } from 'react';
import { motion } from 'framer-motion';
import { Type, Moon, Sun, User, Trash2, Info, Bookmark } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { useProgressStore } from '@/store/progressStore';
import { useBookmarkStore } from '@/store/bookmarkStore';
import { cn } from '@/lib/utils';

export function Settings() {
  const { fontSize, setFontSize, theme, setTheme } = useUIStore();
  const { surahProgress, quizResults } = useProgressStore();
  const { bookmarks, clearBookmarks } = useBookmarkStore();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleResetProgress = () => {
    localStorage.clear();
    window.location.reload();
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">Settings</h1>
        <p className="text-islamic-text-muted mt-1">Customize your experience</p>
      </div>

      {/* Profile Section */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-islamic-gold" />
          Profile
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-islamic-gold to-amber-700 flex items-center justify-center">
            <span className="text-2xl font-bold text-islamic-bg-primary">م</span>
          </div>
          <div>
            <p className="font-semibold text-islamic-text-primary">Muslim User</p>
            <p className="text-sm text-islamic-text-muted">Tafseel-al-Qur'an App</p>
          </div>
        </div>
      </div>


      {/* Font Size */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Type className="w-5 h-5 text-islamic-gold" />
          Font Size
        </h2>
        <div className="flex gap-2">
          {(['small', 'medium', 'large'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={cn(
                'flex-1 px-4 py-3 rounded-xl font-medium transition-all capitalize border',
                fontSize === size
                  ? 'bg-islamic-gold text-islamic-bg-primary border-transparent shadow-md'
                  : 'bg-islamic-bg-secondary text-islamic-text-secondary border-islamic-border hover:border-islamic-gold hover:text-islamic-text-primary'
              )}
              style={{ fontSize: size === 'small' ? '13px' : size === 'large' ? '17px' : '15px' }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Moon className="w-5 h-5 text-islamic-gold" />
          Theme
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setTheme('dark')}
            className={cn(
              'flex items-center gap-3 px-5 py-4 rounded-xl font-medium transition-all border',
              theme === 'dark'
                ? 'bg-islamic-gold text-islamic-bg-primary border-transparent shadow-md'
                : 'bg-islamic-bg-secondary text-islamic-text-secondary border-islamic-border hover:border-islamic-gold'
            )}
          >
            <Moon className="w-5 h-5" />
            <div className="text-left">
              <p className="font-semibold">Dark Mode</p>
              <p className={cn("text-xs", theme === 'dark' ? "text-islamic-bg-primary/70" : "text-islamic-text-muted")}>Deep navy & gold</p>
            </div>
          </button>
          <button
            onClick={() => setTheme('light')}
            className={cn(
              'flex items-center gap-3 px-5 py-4 rounded-xl font-medium transition-all border',
              theme === 'light'
                ? 'bg-islamic-gold text-islamic-bg-primary border-transparent shadow-md'
                : 'bg-islamic-bg-secondary text-islamic-text-secondary border-islamic-border hover:border-islamic-gold'
            )}
          >
            <Sun className="w-5 h-5" />
            <div className="text-left">
              <p className="font-semibold">Light Mode</p>
              <p className={cn("text-xs", theme === 'light' ? "text-islamic-bg-primary/70" : "text-islamic-text-muted")}>Warm parchment</p>
            </div>
          </button>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-islamic-gold" />
          Data & Privacy
        </h2>

        <div className="space-y-3">
          {/* Bookmarks */}
          <div className="flex items-center justify-between p-4 bg-islamic-bg-secondary rounded-xl border border-islamic-border">
            <div className="flex items-center gap-3">
              <Bookmark className="w-4 h-4 text-islamic-text-muted" />
              <div>
                <p className="text-islamic-text-primary font-medium">Bookmarks</p>
                <p className="text-sm text-islamic-text-muted">{bookmarks.length} saved items</p>
              </div>
            </div>
            <button
              onClick={() => { if (clearBookmarks) clearBookmarks(); else useBookmarkStore.setState({ bookmarks: [] }); }}
              className="px-4 py-2 rounded-lg bg-islamic-crimson/10 text-islamic-crimson hover:bg-islamic-crimson/20 transition-colors text-sm"
            >
              Clear
            </button>
          </div>

          {/* Progress Reset */}
          <div className="flex items-center justify-between p-4 bg-islamic-bg-secondary rounded-xl border border-islamic-border">
            <div>
              <p className="text-islamic-text-primary font-medium">Reset All Progress</p>
              <p className="text-sm text-islamic-text-muted">
                {surahProgress?.length || 0} surahs · {quizResults?.length || 0} quizzes
              </p>
            </div>
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 rounded-lg bg-islamic-crimson/10 text-islamic-crimson hover:bg-islamic-crimson/20 transition-colors text-sm"
              >
                Reset
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleResetProgress}
                  className="px-3 py-2 rounded-lg bg-islamic-crimson text-white text-sm hover:opacity-90"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3 py-2 rounded-lg bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="islamic-card p-6">
        <h2 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-islamic-gold" />
          About
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            ['App Name', "Tafseel-al-Qur'an"],
            ['Version', '1.0.0'],
            ['Built by', 'rehan97'],
            ['Description', 'Complete Digital Islamic Knowledge Dashboard'],
          ].map(([label, value]) => (
            <div key={label} className="p-3 bg-islamic-bg-secondary rounded-xl border border-islamic-border">
              <p className="text-xs text-islamic-text-muted mb-1">{label}</p>
              <p className="text-islamic-text-primary font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
