import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Droplets, BookOpen, Heart, Book, Sparkles, Moon, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  prayerTypes,
  salahSteps,
  wuduSteps,
  commonDuas,
  commonSurahs,
  kalmas,
  specialPrayers,
} from '@/data/islamicGuideData';

type Tab = 'salah' | 'wudu' | 'duas' | 'surahs' | 'kalmas' | 'special';

const TABS = [
  { id: 'salah', label: 'Salah Steps', icon: BookOpen },
  { id: 'wudu', label: 'Wudu', icon: Droplets },
  { id: 'special', label: 'Special Prayers', icon: Moon },
  { id: 'duas', label: 'Namaz Duas', icon: Heart },
  { id: 'surahs', label: 'Short Surahs', icon: Book },
  { id: 'kalmas', label: '6 Kalmas', icon: Sparkles },
] as const;

export function SalahGuide() {
  const [activeTab, setActiveTab] = useState<Tab>('salah');
  const [selectedPrayer, setSelectedPrayer] = useState(prayerTypes[0]);
  const [completedSteps, setCompletedSteps] = useState<Set<number | string>>(new Set());
  const [expandedSpecial, setExpandedSpecial] = useState<string | null>(null);

  const getSteps = (): any[] => {
    switch (activeTab) {
      case 'salah': return salahSteps;
      case 'wudu': return wuduSteps;
      case 'duas': return commonDuas;
      case 'surahs': return commonSurahs;
      case 'kalmas': return kalmas;
      default: return [];
    }
  };

  const steps = getSteps();
  const toggleDone = (id: number | string) => {
    setCompletedSteps(prev => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };
  const progressPercent = steps.length > 0 ? (completedSteps.size / steps.length) * 100 : 0;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">Islamic Guide</h1>
        <p className="text-islamic-text-muted mt-1">Step-by-step worship guide — Sunni (Hanafi)</p>
      </div>

      {/* Tab Bar */}
      <div className="flex flex-wrap bg-islamic-bg-card border border-islamic-border rounded-xl p-1 gap-1">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id as Tab); setCompletedSteps(new Set()); }}
            className={cn(
              'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all',
              activeTab === tab.id
                ? 'bg-islamic-gold text-islamic-bg-primary shadow-sm'
                : 'text-islamic-text-muted hover:text-islamic-text-primary'
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Salah — Prayer type selector */}
      {activeTab === 'salah' && (
        <>
          <div className="flex flex-wrap gap-2">
            {prayerTypes.map(prayer => (
              <button
                key={prayer.id}
                onClick={() => setSelectedPrayer(prayer)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                  selectedPrayer.id === prayer.id
                    ? 'bg-islamic-gold text-islamic-bg-primary border-transparent'
                    : 'bg-islamic-bg-card border-islamic-border text-islamic-text-secondary hover:border-islamic-gold'
                )}
              >
                {prayer.name} · {prayer.total} Rak'at
              </button>
            ))}
          </div>

          {/* Prayer Rakaat Detail */}
          <div className="islamic-card p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-2xl font-arabic text-islamic-gold">{selectedPrayer.arabic}</p>
                <h2 className="text-xl font-heading font-bold text-islamic-text-primary">{selectedPrayer.name}</h2>
                <p className="text-sm text-islamic-text-muted">{selectedPrayer.time}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-islamic-text-muted">Total</p>
                <p className="text-3xl font-bold text-islamic-gold">{selectedPrayer.total}</p>
                <p className="text-xs text-islamic-text-muted">Rak'at</p>
              </div>
            </div>
            <div className="space-y-2">
              {selectedPrayer.rakaats.map((r: any, i: number) => (
                <div key={i} className={cn(
                  "flex items-center justify-between p-3 rounded-xl border",
                  r.type === 'Fard' && "bg-islamic-gold/5 border-islamic-gold/30",
                  r.type.startsWith('Sunnah Muakkadah') && "bg-islamic-emerald/5 border-islamic-emerald/20",
                  r.type.startsWith('Sunnah Ghair') && "bg-islamic-bg-secondary border-islamic-border",
                  r.type === 'Nafl' && "bg-islamic-bg-secondary border-islamic-border",
                  r.type === 'Witr' && "bg-blue-900/10 border-blue-500/20",
                )}>
                  <div>
                    <p className={cn("font-semibold text-sm",
                      r.type === 'Fard' ? "text-islamic-gold" :
                        r.type.startsWith('Sunnah Muakkadah') ? "text-islamic-emerald" : "text-islamic-text-secondary"
                    )}>{r.type}</p>
                    <p className="text-xs text-islamic-text-muted">{r.note}</p>
                  </div>
                  <span className={cn("text-2xl font-bold",
                    r.type === 'Fard' ? "text-islamic-gold" :
                      r.type.startsWith('Sunnah Muakkadah') ? "text-islamic-emerald" : "text-islamic-text-muted"
                  )}>{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── Special Prayers ── */}
      {activeTab === 'special' && (
        <div className="space-y-3">
          {specialPrayers.map(prayer => (
            <div key={prayer.id} className="islamic-card overflow-hidden">
              <button
                onClick={() => setExpandedSpecial(expandedSpecial === prayer.id ? null : prayer.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-islamic-bg-hover/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-islamic-gold/10 flex items-center justify-center flex-shrink-0">
                  <Moon className="w-6 h-6 text-islamic-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-islamic-text-primary">{prayer.name}</h3>
                  <p className="text-sm text-islamic-gold font-arabic">{prayer.arabic}</p>
                  <p className="text-xs text-islamic-text-muted">{prayer.occasion} · {prayer.type}</p>
                </div>
                <div className="text-right flex-shrink-0 mr-2">
                  <p className="text-xs text-islamic-text-muted">Rak'at</p>
                  <p className="text-xl font-bold text-islamic-gold">{prayer.rakaats}</p>
                </div>
                {expandedSpecial === prayer.id ? <ChevronUp className="w-5 h-5 text-islamic-text-muted" /> : <ChevronDown className="w-5 h-5 text-islamic-text-muted" />}
              </button>

              <AnimatePresence>
                {expandedSpecial === prayer.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-islamic-border p-5 space-y-4">
                      {/* Description */}
                      <p className="text-sm text-islamic-text-secondary leading-relaxed">{prayer.description}</p>

                      {/* Time Window */}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-islamic-text-muted">Time:</span>
                        <span className="text-islamic-text-primary">{prayer.timeWindow}</span>
                      </div>

                      {/* Method Steps */}
                      {(prayer as any).method && (
                        <div>
                          <p className="text-xs text-islamic-gold uppercase tracking-wider font-semibold mb-2">How to Pray</p>
                          <div className="space-y-2">
                            {(prayer as any).method.map((step: string, i: number) => (
                              <div key={i} className="flex gap-3 text-sm">
                                <span className="w-5 h-5 rounded-full bg-islamic-gold/20 text-islamic-gold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                <p className="text-islamic-text-primary">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Conditions */}
                      {(prayer as any).conditions && (
                        <div className="bg-islamic-bg-secondary rounded-xl p-3 border border-islamic-border">
                          <p className="text-xs text-islamic-gold font-semibold mb-1">Conditions</p>
                          <p className="text-sm text-islamic-text-primary">{(prayer as any).conditions}</p>
                        </div>
                      )}

                      {/* Sunnahs */}
                      {(prayer as any).sunnahs && (
                        <div className="bg-islamic-emerald/5 rounded-xl p-3 border border-islamic-emerald/20">
                          <p className="text-xs text-islamic-emerald font-semibold mb-1">Sunnahs of this Day</p>
                          <p className="text-sm text-islamic-text-primary">{(prayer as any).sunnahs}</p>
                        </div>
                      )}

                      {/* Takbeer */}
                      {(prayer as any).takbeer && (
                        <div>
                          <p className="text-xs text-islamic-gold uppercase tracking-wider font-semibold mb-2">Takbeer-e-Eid</p>
                          <p className="text-sm text-islamic-text-secondary italic">{(prayer as any).takbeer}</p>
                        </div>
                      )}

                      {/* Dua */}
                      {prayer.dua && (
                        <div className="bg-islamic-gold/5 rounded-xl p-4 border border-islamic-gold/20">
                          <p className="text-xs text-islamic-gold uppercase tracking-wider font-semibold mb-3">Du'a</p>
                          <p className="font-arabic text-2xl text-islamic-gold text-right leading-relaxed mb-2">{prayer.dua.arabic}</p>
                          <p className="text-sm text-islamic-text-secondary italic mb-1">{prayer.dua.transliteration}</p>
                          <p className="text-sm text-islamic-emerald">{prayer.dua.meaning}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      {/* ── Steps Progress (salah / wudu) ── */}
      {(activeTab === 'salah' || activeTab === 'wudu') && steps.length > 0 && (
        <div className="islamic-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-islamic-text-muted">Learning Progress</span>
            <span className="text-sm font-semibold text-islamic-gold">{Math.round(progressPercent)}%</span>
          </div>
          <div className="h-2 bg-islamic-border rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progressPercent}%`, background: 'linear-gradient(90deg, #C9A84C, #E8C97A)' }} />
          </div>
        </div>
      )}

      {/* ── Generic Step Cards ── */}
      {activeTab !== 'special' && (
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {steps.map((item: any, index: number) => {
              const stepId = item.step ?? item.id;
              const title = item.name ?? item.title;
              const done = completedSteps.has(stepId);

              return (
                <motion.div
                  key={`${activeTab}-${stepId}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.04 }}
                  className={cn('islamic-card p-5 cursor-pointer', done && 'border-islamic-emerald')}
                  onClick={() => toggleDone(stepId)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0',
                      done ? 'bg-islamic-emerald text-white' : 'bg-islamic-gold/20 text-islamic-gold'
                    )}>
                      {done ? <Check className="w-5 h-5" /> : stepId}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-islamic-text-primary mb-2">{title}</h3>

                      {item.arabic && (
                        <p className="font-arabic text-2xl text-islamic-gold text-right leading-relaxed mb-2">{item.arabic}</p>
                      )}
                      {item.transliteration && (
                        <p className="text-sm text-islamic-text-secondary italic mb-1">{item.transliteration}</p>
                      )}
                      {item.meaning && (
                        <p className="text-sm text-islamic-emerald font-medium mb-2">Meaning: {item.meaning}</p>
                      )}
                      {item.description && (
                        <p className="text-sm text-islamic-text-muted mb-2">{item.description}</p>
                      )}
                      {item.reason && (
                        <div className="text-xs text-islamic-text-primary bg-islamic-gold/5 p-3 rounded-lg border border-islamic-gold/20">
                          <strong className="text-islamic-gold">Wisdom: </strong>{item.reason}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
