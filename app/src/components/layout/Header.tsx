import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bookmark, Settings, Flame } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

export function Header() {
  const { sidebarOpen } = useUIStore();
  const { getStreakStatus } = useProgressStore();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const streakStatus = getStreakStatus();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 right-0 h-16 bg-islamic-bg-secondary/80 backdrop-blur-lg border-b border-islamic-border z-30',
        'transition-all duration-300',
        sidebarOpen ? 'left-[280px]' : 'left-[80px]'
      )}
    >
      <div className="h-full flex items-center justify-between px-6">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-islamic-text-muted" />
            <input
              type="text"
              placeholder="Search Quran, Hadith, Du'as..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 focus:ring-1 focus:ring-islamic-gold/50 transition-all"
            />
          </div>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-6">
          {/* Daily Streak */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-islamic-bg-card border border-islamic-border">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-islamic-text-primary">{streakStatus.current}</span>
            <span className="text-xs text-islamic-text-muted">day{streakStatus.current !== 1 ? 's' : ''}</span>
          </div>

          {/* Bookmarks */}
          <Link
            to="/bookmarks"
            className="p-2 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-secondary transition-colors"
            title="Bookmarks"
          >
            <Bookmark className="w-5 h-5" />
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className="p-2 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-secondary transition-colors"
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
