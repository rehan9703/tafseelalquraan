import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, BookOpen, Scroll, Heart, FileText, Trash2, ExternalLink } from 'lucide-react';
import { useBookmarkStore, type ContentType } from '@/store/bookmarkStore';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const contentTypeConfig: Record<ContentType, { label: string; icon: React.ElementType; color: string }> = {
  AYAH: { label: 'Ayahs', icon: BookOpen, color: 'text-islamic-emerald' },
  HADITH: { label: 'Hadith', icon: Scroll, color: 'text-islamic-amber' },
  DUA: { label: 'Du\'as', icon: Heart, color: 'text-islamic-rose' },
  ARTICLE: { label: 'Articles', icon: FileText, color: 'text-islamic-blue' },
};

export function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarkStore();
  const [activeTab, setActiveTab] = useState<ContentType | 'ALL'>('ALL');

  const filteredBookmarks = activeTab === 'ALL' 
    ? bookmarks 
    : bookmarks.filter(b => b.contentType === activeTab);

  const tabs: (ContentType | 'ALL')[] = ['ALL', 'AYAH', 'HADITH', 'DUA', 'ARTICLE'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          My Bookmarks
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Your saved content for quick access
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all',
              activeTab === tab
                ? 'bg-islamic-gold text-islamic-bg-primary'
                : 'bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary hover:text-islamic-text-primary'
            )}
          >
            {tab === 'ALL' ? 'All' : contentTypeConfig[tab].label}
            {tab !== 'ALL' && (
              <span className="ml-2 text-xs opacity-70">
                ({bookmarks.filter(b => b.contentType === tab).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Bookmarks List */}
      {filteredBookmarks.length > 0 ? (
        <div className="space-y-3">
          {filteredBookmarks.map((bookmark) => {
            const config = contentTypeConfig[bookmark.contentType];
            const Icon = config.icon;
            
            return (
              <motion.div
                key={bookmark.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="islamic-card p-4 flex items-center gap-4"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-islamic-bg-secondary", config.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-islamic-text-primary truncate">
                    {bookmark.title || `${bookmark.contentType} - ${bookmark.contentId}`}
                  </p>
                  <p className="text-sm text-islamic-text-muted">
                    {config.label} • {new Date(bookmark.createdAt).toLocaleDateString()}
                  </p>
                  {bookmark.note && (
                    <p className="text-sm text-islamic-text-secondary mt-1">
                      Note: {bookmark.note}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Link
                    to={`/${bookmark.contentType.toLowerCase() === 'ayah' ? 'quran' : bookmark.contentType.toLowerCase()}`}
                    className="p-2 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-muted hover:text-islamic-gold transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => removeBookmark(bookmark.id)}
                    className="p-2 rounded-lg hover:bg-islamic-crimson/10 text-islamic-text-muted hover:text-islamic-crimson transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="islamic-card p-12 text-center">
          <Bookmark className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Bookmarks Yet
          </h3>
          <p className="text-islamic-text-muted">
            Start bookmarking content to see it here
          </p>
        </div>
      )}
    </motion.div>
  );
}
