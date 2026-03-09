import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Moon, Sun, Star, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const hijriMonths = [
  'Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Thani",
  'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', "Sha'ban",
  'Ramadan', 'Shawwal', "Dhu al-Qi'dah", 'Dhu al-Hijjah'
];
const hijriMonthsArabic = [
  'مُحَرَّم', 'صَفَر', 'رَبِيع الأَوَّل', 'رَبِيع الثَّانِي',
  'جُمَادَى الأُولَى', 'جُمَادَى الآخِرَة', 'رَجَب', 'شَعبَان',
  'رَمَضَان', 'شَوَّال', 'ذُو القَعدَة', 'ذُو الحِجَّة'
];
const gregorianMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Full comprehensive Islamic event data
const islamicEvents = [
  // Muharram (month 0)
  { day: 1, month: 0, name: 'Islamic New Year', arabicName: 'رَأس السَّنَة الهِجرِيَّة', type: 'holiday', desc: 'The beginning of the Hijri year, marking the migration (Hijra) of Prophet Muhammad ﷺ from Makkah to Madinah in 622 CE.', amal: 'Fast if possible. Reflect on Hijra. Make dua for a blessed year. Read Surah Al-Mulk.' },
  { day: 10, month: 0, name: 'Day of Ashura', arabicName: 'عَاشُورَاء', type: 'important', desc: "On this day Allah saved Prophet Musa (AS) and the Israelites from Pharaoh. Prophet Muhammad ﷺ fasted this day and recommended Muslims fast on it too.", amal: 'Fast the 9th and 10th (or 10th and 11th) of Muharram. Give charity. Recite Salawat abundantly.' },
  // Rabi' al-Awwal (month 2)
  { day: 12, month: 2, name: "Mawlid al-Nabi ﷺ", arabicName: 'مَولِد النَّبِي ﷺ', type: 'holiday', desc: "The birth of Prophet Muhammad ﷺ, the Seal of Prophets, born in Makkah in the Year of the Elephant (570 CE).", amal: 'Send abundant Durood on the Prophet ﷺ. Read his Seerah. Feed the poor. Gather for knowledge and remembrance.' },
  // Rajab (month 6)
  { day: 1, month: 6, name: 'First of Rajab', arabicName: 'أَوَّل رَجَب', type: 'important', desc: "One of the four sacred months. The Prophet ﷺ used to make this dua: 'O Allah bless us in Rajab and Sha'ban and let us reach Ramadan.'", amal: 'Begin preparation for Ramadan. Increase dhikr, Quran and nafl prayers.' },
  { day: 27, month: 6, name: "Isra wal Mi'raj", arabicName: 'الإسراء والمعراج', type: 'holiday', desc: "The Night Journey of Prophet Muhammad ﷺ from Masjid Al-Haram to Masjid Al-Aqsa, then ascending through the heavens where the 5 daily prayers were ordained.", amal: 'Pray Tahajjud. Recite Surah Al-Isra. Fill the night with Salawat and gratitude for Salah.' },
  // Sha'ban (month 7)
  { day: 15, month: 7, name: "Shab-e-Barat", arabicName: 'لَيلَة البَرَاءة', type: 'important', desc: "The middle night of Sha'ban. Narrations indicate Allah decrees matters of the coming year. Many scholars encourage worship this night.", amal: "Fast on 13th, 14th, 15th of Sha'ban. Pray Nafl at night. Seek forgiveness. Recite Ya-Sin." },
  // Ramadan (month 8)
  { day: 1, month: 8, name: 'First Day of Ramadan', arabicName: 'أَوَّل رَمَضَان', type: 'holiday', desc: "The blessed month of fasting, revealed as Fard in 2 AH. The Quran was first revealed in Ramadan. Shaytan is chained and the gates of Jannah open.", amal: 'Begin fasting. Increase Quran recitation, tarawih, charity and dhikr.' },
  { day: 21, month: 8, name: 'Begin Last 10 Nights', arabicName: 'العَشر الأَوَاخِر', type: 'important', desc: "The last ten nights of Ramadan are the most blessed. Laylat al-Qadr falls in one of the odd nights. The Prophet ﷺ would do I'tikaf in these nights.", amal: "I'tikaf. Pray throughout the night. Dua: 'Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni.'" },
  { day: 27, month: 8, name: 'Laylat al-Qadr', arabicName: 'لَيلَة القَدر', type: 'holiday', desc: "The Night of Power — better than a thousand months (83+ years of worship). The Quran was first revealed this night. Angels descend with peace until dawn.", amal: 'Pray all night. Multiply dua and Quran. Recite: Allahumma innaka afuwwun tuhibbul-afwa fa\'fu anni.' },
  // Shawwal (month 9)
  { day: 1, month: 9, name: 'Eid al-Fitr', arabicName: 'عِيد الفِطر', type: 'holiday', desc: "The festival of breaking the fast, celebrated on 1 Shawwal after completion of Ramadan. Zakat al-Fitr must be given before Eid prayer.", amal: "Ghusl, best clothes, Eid prayer (2 Rak'at with extra Takbeers), visit family, feast, give sadaqah, say Eid Mubarak." },
  { day: 2, month: 9, name: 'Start of Six Shawwal Fasts', arabicName: 'صِيَام سِتَّة مِن شَوَّال', type: 'important', desc: "The Prophet ﷺ said: 'Whoever fasts Ramadan then follows it with 6 days of Shawwal, it is as if he has fasted the entire year.'", amal: "Fast any 6 days in Shawwal (consecutively or otherwise)." },
  // Dhu al-Hijjah (month 11)
  { day: 1, month: 11, name: 'First Days of Dhu al-Hijjah', arabicName: 'أَوَّل ذِي الحِجَّة', type: 'important', desc: "The Prophet ﷺ said: 'There are no days in which righteous deeds are more beloved to Allah than these 10 days.'", amal: 'Increase worship, fasting, Quran, dhikr, charity. Do not cut nails/hair (for those doing Qurbani).' },
  { day: 8, month: 11, name: 'Yawm at-Tarwiyah', arabicName: 'يَوم التَّروِيَة', type: 'important', desc: "Pilgrims leave for Mina. Non-pilgrims are encouraged to fast.", amal: 'Fast (for non-pilgrims). Read about the rites of Hajj. Send Salawat on the Prophet ﷺ.' },
  { day: 9, month: 11, name: 'Day of Arafah', arabicName: 'يَوم عَرَفَة', type: 'holiday', desc: "The most important day of Hajj. Pilgrims stand at Arafah. Fasting expiation: 'I hope Allah will expiate for two years of sins' (the previous year and the coming year).", amal: "Fast (for non-pilgrims). Make abundant dua from Dhuhr to Maghrib. Recite: La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa ala kulli shay'in qadir (100x)." },
  { day: 10, month: 11, name: 'Eid al-Adha', arabicName: 'عِيد الأَضحَى', type: 'holiday', desc: "The Festival of Sacrifice, commemorating Prophet Ibrahim (AS)'s willingness to sacrifice his son Ismail (AS). The Qurbani rite is performed.", amal: "Ghusl, Eid prayer (2 Rak'at with extra Takbeers), Qurbani (slaughter), share meat with family, neighbours and poor. Don't fast on this day." },
  { day: 11, month: 11, name: 'Ayyam al-Tashreeq', arabicName: 'أَيَّام التَّشرِيق', type: 'important', desc: "11th, 12th and 13th Dhu al-Hijjah — Pilgrims continue rites. Fasting these days is forbidden. Repeat Takbeer-e-Tashreeq after every Fard prayer.", amal: "Recite Takbeer: 'Allahu Akbar, Allahu Akbar, la ilaha illallahu wallahu akbar, Allahu akbar wa lillahil-hamd' after every Fard prayer." },
];

// ─── Hijri conversion (Tabular Islamic Calendar) ──────────────────────────
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

type EventType = typeof islamicEvents[0];

export function IslamicCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [view, setView] = useState<'gregorian' | 'hijri'>('gregorian');
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [timeStr, setTimeStr] = useState('');

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const hijri = getHijriDate(currentDate);
  const hijriMonth = hijri.hMonth - 1;

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToday = () => { setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1)); setSelectedDay(today.getDate()); };

  // Get Hijri date for any Gregorian day
  const getHijriForDay = (day: number) => getHijriDate(new Date(year, month, day));

  const getEventsForHijriDay = (day: number) => {
    const h = getHijriForDay(day);
    return islamicEvents.filter(e => e.day === h.hDay && e.month === (h.hMonth - 1));
  };

  // Sort events by proximity to today
  const todayHijri = getHijriDate(today);
  const upcomingEvents = [...islamicEvents].sort((a, b) => {
    const aDiff = (a.month * 30 + a.day) - ((todayHijri.hMonth - 1) * 30 + todayHijri.hDay);
    const bDiff = (b.month * 30 + b.day) - ((todayHijri.hMonth - 1) * 30 + todayHijri.hDay);
    return (aDiff < 0 ? aDiff + 360 : aDiff) - (bDiff < 0 ? bDiff + 360 : bDiff);
  });

  const selectedDayEvents = selectedDay ? getEventsForHijriDay(selectedDay) : [];
  const todayHijriForSelected = selectedDay ? getHijriForDay(selectedDay) : null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      {/* Header with live clock */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">Islamic Calendar</h1>
          <p className="text-islamic-text-muted mt-1">Hijri · Gregorian · Islamic Events</p>
        </div>
        <div className="islamic-card px-5 py-3 text-right">
          <p className="text-2xl font-mono font-bold text-islamic-gold">{timeStr}</p>
          <p className="text-xs text-islamic-text-muted mt-0.5">{today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Today's Dual Date Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="islamic-card p-4 flex items-center gap-4 border-l-4 border-islamic-gold">
          <Sun className="w-8 h-8 text-islamic-gold flex-shrink-0" />
          <div>
            <p className="text-xs text-islamic-text-muted uppercase tracking-wider">Gregorian Today</p>
            <p className="font-semibold text-islamic-text-primary text-lg">
              {today.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="islamic-card p-4 flex items-center gap-4 border-l-4 border-islamic-gold">
          <Moon className="w-8 h-8 text-islamic-gold flex-shrink-0" />
          <div>
            <p className="text-xs text-islamic-text-muted uppercase tracking-wider">Hijri Today</p>
            <p className="font-semibold text-islamic-text-primary text-lg">
              {todayHijri.hDay} {hijriMonths[todayHijri.hMonth - 1]} {todayHijri.hYear} AH
            </p>
            <p className="text-xs text-islamic-gold font-arabic">{todayHijri.hDay} {hijriMonthsArabic[todayHijri.hMonth - 1]} {todayHijri.hYear}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-1 bg-islamic-bg-card border border-islamic-border p-1 rounded-xl">
          <button onClick={() => setView('gregorian')} className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5', view === 'gregorian' ? 'bg-islamic-gold text-islamic-bg-primary' : 'text-islamic-text-secondary hover:text-islamic-text-primary')}>
            <Sun className="w-3.5 h-3.5" /> Gregorian
          </button>
          <button onClick={() => setView('hijri')} className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5', view === 'hijri' ? 'bg-islamic-gold text-islamic-bg-primary' : 'text-islamic-text-secondary hover:text-islamic-text-primary')}>
            <Moon className="w-3.5 h-3.5" /> Hijri Labels
          </button>
        </div>
        <button onClick={goToday} className="px-4 py-2 rounded-xl bg-islamic-bg-card border border-islamic-gold/40 text-islamic-gold text-sm font-medium hover:bg-islamic-gold/10 transition-all">
          Jump to Today
        </button>
      </div>

      {/* Main Calendar Grid */}
      <div className="islamic-card p-4 md:p-6">
        {/* Month Nav */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-secondary hover:text-islamic-gold transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <div className="text-center">
            <h2 className="text-xl font-heading font-bold text-islamic-text-primary">{gregorianMonths[month]} {year}</h2>
            <p className="text-sm text-islamic-gold font-arabic">{hijriMonthsArabic[hijriMonth]} {hijri.hYear} هـ</p>
          </div>
          <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-secondary hover:text-islamic-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map(d => (
            <div key={d} className={cn("text-center text-xs font-medium py-2", d === 'Fri' ? 'text-islamic-gold' : 'text-islamic-text-muted')}>{d}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            const isSelected = day === selectedDay;
            const events = getEventsForHijriDay(day);
            const h = getHijriForDay(day);
            const isFriday = new Date(year, month, day).getDay() === 5;

            return (
              <button key={day} onClick={() => setSelectedDay(isSelected ? null : day)}
                className={cn(
                  "aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all text-sm p-1",
                  "hover:bg-islamic-bg-hover hover:scale-105",
                  isToday && !isSelected && "ring-2 ring-islamic-gold bg-islamic-gold/10",
                  isSelected && "bg-islamic-gold text-islamic-bg-primary shadow-lg shadow-islamic-gold/20",
                  !isToday && !isSelected && isFriday && "text-islamic-gold",
                  !isToday && !isSelected && !isFriday && "text-islamic-text-primary",
                )}>
                <span className="font-semibold leading-none">{day}</span>
                {view === 'hijri' && <span className={cn("text-[9px] leading-none mt-0.5", isSelected ? "text-islamic-bg-primary/70" : "text-islamic-text-muted")}>{h.hDay}</span>}
                {events.length > 0 && (
                  <div className="absolute bottom-1 flex gap-0.5">
                    {events.slice(0, 2).map((ev, i) => (
                      <div key={i} className={cn("w-1 h-1 rounded-full", ev.type === 'holiday' ? "bg-islamic-gold" : "bg-islamic-emerald")} />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-islamic-border text-xs text-islamic-text-muted">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-islamic-gold" /><span>Holiday / Eid</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-islamic-emerald" /><span>Important Day</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded ring-2 ring-islamic-gold" /><span>Today</span></div>
        </div>
      </div>

      {/* Selected Day Panel */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="islamic-card p-5 border-l-4 border-islamic-gold">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm text-islamic-text-muted">{gregorianMonths[month]} {selectedDay}, {year}</p>
                <p className="text-lg font-semibold text-islamic-gold">
                  {todayHijriForSelected?.hDay} {hijriMonths[(todayHijriForSelected?.hMonth || 1) - 1]} {todayHijriForSelected?.hYear} AH
                </p>
              </div>
              <button onClick={() => setSelectedDay(null)} className="p-1 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-muted"><X className="w-4 h-4" /></button>
            </div>
            {selectedDayEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedDayEvents.map((ev, i) => (
                  <button key={i} onClick={() => setSelectedEvent(ev)}
                    className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-islamic-bg-secondary hover:bg-islamic-bg-hover transition-colors border border-islamic-border hover:border-islamic-gold">
                    <Star className={cn("w-4 h-4 flex-shrink-0", ev.type === 'holiday' ? "text-islamic-gold" : "text-islamic-emerald")} />
                    <div className="flex-1">
                      <p className="font-medium text-islamic-text-primary">{ev.name}</p>
                      <p className="text-xs text-islamic-gold">{ev.arabicName}</p>
                    </div>
                    <Info className="w-4 h-4 text-islamic-text-muted" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-islamic-text-muted text-sm">No Islamic events on this day.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="islamic-card max-w-lg w-full p-6 relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-islamic-bg-hover text-islamic-text-muted"><X className="w-5 h-5" /></button>
              <div className="mb-4">
                <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", selectedEvent.type === 'holiday' ? "bg-islamic-gold/20 text-islamic-gold" : "bg-islamic-emerald/20 text-islamic-emerald")}>
                  {selectedEvent.type === 'holiday' ? 'Holiday' : 'Important Day'}
                </span>
                <h3 className="text-2xl font-heading font-bold text-islamic-text-primary mt-2">{selectedEvent.name}</h3>
                <p className="text-islamic-gold font-arabic text-xl mt-1">{selectedEvent.arabicName}</p>
                <p className="text-sm text-islamic-text-muted">{hijriMonths[selectedEvent.month]} {selectedEvent.day}</p>
              </div>
              <p className="text-islamic-text-secondary leading-relaxed mb-4">{selectedEvent.desc}</p>
              <div className="bg-islamic-bg-secondary rounded-xl p-4 border border-islamic-border">
                <p className="text-xs text-islamic-gold uppercase tracking-wider font-semibold mb-2">What to Do</p>
                <p className="text-sm text-islamic-text-primary leading-relaxed">{selectedEvent.amal}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upcoming Events */}
      <div className="islamic-card p-5">
        <h3 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-islamic-gold" /> Upcoming Islamic Events
        </h3>
        <div className="space-y-2">
          {upcomingEvents.map((event, i) => (
            <button key={i} onClick={() => setSelectedEvent(event)}
              className="w-full text-left flex items-center gap-4 p-3 bg-islamic-bg-secondary rounded-xl hover:bg-islamic-bg-hover transition-all border border-transparent hover:border-islamic-gold/30">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold", event.type === 'holiday' ? "bg-islamic-gold/20 text-islamic-gold" : "bg-islamic-emerald/20 text-islamic-emerald")}>
                {event.day}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-islamic-text-primary truncate">{event.name}</p>
                <p className="text-sm text-islamic-text-muted">{hijriMonths[event.month]} {event.day}</p>
              </div>
              <span className={cn("text-xs px-2 py-0.5 rounded-full flex-shrink-0", event.type === 'holiday' ? "bg-islamic-gold/10 text-islamic-gold" : "bg-islamic-emerald/10 text-islamic-emerald")}>
                {event.type === 'holiday' ? 'Holiday' : 'Important'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Date Converter */}
      <div className="islamic-card p-5">
        <h3 className="text-lg font-heading font-semibold text-islamic-text-primary mb-4">Date Converter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-islamic-bg-secondary rounded-xl border border-islamic-border">
            <div className="flex items-center gap-2 mb-2"><Sun className="w-4 h-4 text-islamic-gold" /><p className="text-sm text-islamic-text-muted">Gregorian</p></div>
            <p className="text-lg font-semibold text-islamic-text-primary">{today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="p-4 bg-islamic-bg-secondary rounded-xl border border-islamic-border">
            <div className="flex items-center gap-2 mb-2"><Moon className="w-4 h-4 text-islamic-gold" /><p className="text-sm text-islamic-text-muted">Hijri (Approximate)</p></div>
            <p className="text-lg font-semibold text-islamic-text-primary">{todayHijri.hDay} {hijriMonths[todayHijri.hMonth - 1]} {todayHijri.hYear} AH</p>
            <p className="text-sm text-islamic-gold font-arabic mt-1">{todayHijri.hDay} {hijriMonthsArabic[todayHijri.hMonth - 1]} {todayHijri.hYear} هـ</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
