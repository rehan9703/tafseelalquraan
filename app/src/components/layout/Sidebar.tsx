import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Home,
  Scroll,
  Users,
  Heart,
  Calendar,
  Compass,
  Calculator,
  Search,
  Bookmark,
  Settings,
  GraduationCap,
  History,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Sparkles,
  Menu,
  X,
  Moon,
  Download,
} from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
  category?: string;
}

const mainNavItems: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: Home },
  { path: '/quran', label: 'Quran Explorer', icon: BookOpen },
  { path: '/juz', label: 'Juz Dashboard', icon: Scroll },
  { path: '/tafseer', label: 'Surah Reader', icon: BookMarked },
];

const knowledgeNavItems: NavItem[] = [
  { path: '/prophets', label: 'Stories of Prophets', icon: Users },
  { path: '/hadith', label: 'Classical Hadith', icon: Scroll },
  { path: '/asmaul-husna', label: '99 Names of Allah', icon: Sparkles },
  { path: '/prophet-muhammad', label: 'Prophet Muhammad ﷺ', icon: Heart },
  { path: '/history', label: 'Islamic History', icon: History },
];

const toolsNavItems: NavItem[] = [
  { path: '/duas', label: 'Du\'as', icon: Heart },
  { path: '/salah', label: 'Salah Guide', icon: Moon },
  { path: '/calendar', label: 'Islamic Calendar', icon: Calendar },
  { path: '/qibla', label: 'Qibla Finder', icon: Compass },
  { path: '/zakat', label: 'Zakat Calculator', icon: Calculator },
  { path: '/research', label: 'Islamic Research', icon: Search },
  { path: '/quiz', label: 'Islamic Quiz', icon: GraduationCap },
];

const personalNavItems: NavItem[] = [
  { path: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const NavSection = ({
  title,
  items,
  collapsed
}: {
  title: string;
  items: NavItem[];
  collapsed: boolean;
}) => (
  <div className="mb-4">
    {!collapsed && (
      <h3 className="px-4 py-2 text-xs font-medium text-islamic-text-muted uppercase tracking-wider">
        {title}
      </h3>
    )}
    <nav className="space-y-1">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg mx-2',
              isActive
                ? 'bg-islamic-gold/10 text-islamic-gold border-l-2 border-islamic-gold'
                : 'text-islamic-text-secondary hover:text-islamic-text-primary hover:bg-islamic-bg-hover'
            )
          }
        >
          <item.icon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>{item.label}</span>}
        </NavLink>
      ))}
    </nav>
  </div>
);

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-islamic-bg-card border border-islamic-border text-islamic-text-primary"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: sidebarOpen ? 280 : 80,
          x: mobileOpen ? 0 : (window.innerWidth >= 1024 ? 0 : '-100%'),
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed left-0 top-0 h-full bg-islamic-bg-secondary border-r border-islamic-border z-40',
          'lg:translate-x-0',
          mobileOpen && 'translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-islamic-border">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-islamic-bg-tertiary border border-islamic-gold/30 shadow-[inset_0_0_10px_rgba(201,168,76,0.1)] flex items-center justify-center flex-shrink-0">
              <span className="bg-gradient-to-br from-[#FDE68A] via-[#C9A84C] to-[#927F38] bg-clip-text text-transparent font-serif font-extrabold text-xl italic tracking-wider">
                97
              </span>
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <h1 className="font-heading font-bold text-islamic-text-primary text-sm whitespace-nowrap">
                  Tafseel-al-Qur'an
                </h1>
                <p className="text-xs text-islamic-text-muted whitespace-nowrap">
                  Islamic Knowledge
                </p>
              </div>
            )}
          </NavLink>

          {/* Toggle Button (Desktop) */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-muted transition-colors"
          >
            {sidebarOpen ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 h-[calc(100%-4rem)] scrollbar-thin">
          <NavSection title="Main" items={mainNavItems} collapsed={!sidebarOpen} />
          <NavSection title="Knowledge" items={knowledgeNavItems} collapsed={!sidebarOpen} />
          <NavSection title="Tools" items={toolsNavItems} collapsed={!sidebarOpen} />
          <NavSection title="Personal" items={personalNavItems} collapsed={!sidebarOpen} />

          {/* Download App Button */}
          <div className="mt-auto px-4 pb-4">
            <AppInstallButton collapsed={!sidebarOpen} />
          </div>
        </div>
      </motion.aside>
    </>
  );
}

function AppInstallButton({ collapsed }: { collapsed: boolean }) {
  const { installPrompt, setInstallPrompt } = useUIStore();

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    setInstallPrompt(null);
  };

  if (!installPrompt) return null;

  return (
    <button
      onClick={handleInstallClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl",
        "bg-gradient-to-r from-islamic-gold to-variant-gold text-islamic-bg-primary shadow-lg shadow-islamic-gold/20",
        "hover:scale-[1.02] active:scale-[0.98]",
        collapsed && "justify-center px-0"
      )}
      title="Download Web App"
    >
      <Download className="w-5 h-5 flex-shrink-0" />
      {!collapsed && <span>Download App</span>}
    </button>
  );
}
