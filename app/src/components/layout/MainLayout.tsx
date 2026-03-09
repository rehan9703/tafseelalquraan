import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useUIStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

export function MainLayout() {
  const { sidebarOpen } = useUIStore();

  return (
    <div className="min-h-screen bg-islamic-bg-primary pattern-bg">
      <Sidebar />
      <Header />

      <main
        className={cn(
          'pt-16 min-h-screen transition-all duration-300',
          sidebarOpen ? 'lg:ml-[280px]' : 'lg:ml-[80px]'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="p-4"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        className={cn(
          'py-6 px-6 border-t border-islamic-border transition-all duration-300',
          sidebarOpen ? 'lg:ml-[280px]' : 'lg:ml-[80px]'
        )}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-islamic-bg-tertiary border border-islamic-gold/30 shadow-[inset_0_0_8px_rgba(201,168,76,0.1)] flex items-center justify-center flex-shrink-0">
              <span className="bg-gradient-to-br from-[#FDE68A] via-[#C9A84C] to-[#927F38] bg-clip-text text-transparent font-serif font-extrabold text-base italic tracking-wider">
                97
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-islamic-text-primary">
                Tafseel-al-Qur'an
              </p>
              <p className="text-xs text-islamic-text-muted">
                A Complete Digital Islamic Knowledge Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-islamic-text-muted">
            <span>Created by <span className="text-islamic-gold">Rehan97</span></span>
            <span className="hidden md:inline">|</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-islamic-text-muted hover:text-islamic-gold transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-islamic-text-muted hover:text-islamic-gold transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:rehan515ahmad@gmail.com"
              className="text-islamic-text-muted hover:text-islamic-gold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
