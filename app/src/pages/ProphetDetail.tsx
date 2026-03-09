import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Star,
  BookOpen,
  Sparkles,
  Clock,
  Users,
  Quote,
} from 'lucide-react';
import { getProphetById, type Prophet } from '@/data';
// @ts-ignore

export function ProphetDetail() {
  const { id } = useParams<{ id: string }>();
  const [prophet, setProphet] = useState<Prophet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = getProphetById(parseInt(id));
      setProphet(found || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="spinner-islamic" />
      </div>
    );
  }

  if (!prophet) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-islamic-text-primary">Prophet Not Found</h2>
        <Link to="/prophets" className="text-islamic-gold hover:underline mt-4 inline-block">
          Back to Prophets
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/prophets"
          className="flex items-center gap-2 text-islamic-text-secondary hover:text-islamic-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Prophets
        </Link>
      </div>

      {/* Hero Section */}
      <div className="islamic-card p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-islamic-gold to-transparent" />

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-islamic-gold to-islamic-gold-dark flex items-center justify-center flex-shrink-0">
            <span className="text-5xl font-arabic text-islamic-bg-primary">
              {prophet.nameArabic}
            </span>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-heading font-bold text-islamic-text-primary mb-2">
              Prophet {prophet.nameEnglish}
            </h1>
            <p className="text-3xl font-arabic text-islamic-gold mb-4">
              {prophet.nameArabic}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-islamic-text-secondary">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-islamic-gold" />
                <span>{prophet.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-islamic-gold" />
                <span>{prophet.nation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-islamic-gold" />
                <span>{prophet.timePeriod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Story */}
        <div className="lg:col-span-2 space-y-6">
          <div className="islamic-card p-6">
            <h2 className="text-xl font-heading font-semibold text-islamic-text-primary flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-islamic-gold" />
              Story
            </h2>
            <div className="prose prose-invert max-w-none">
              {prophet.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-islamic-text-secondary leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="islamic-card p-6">
            <h2 className="text-xl font-heading font-semibold text-islamic-text-primary flex items-center gap-2 mb-4">
              <Quote className="w-5 h-5 text-islamic-gold" />
              Lessons Learned
            </h2>
            <ul className="space-y-3">
              {prophet.lessons.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-islamic-gold/20 text-islamic-gold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-islamic-text-secondary">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Miracles */}
          <div className="islamic-card p-6">
            <h2 className="text-lg font-heading font-semibold text-islamic-text-primary flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-islamic-gold" />
              Key Miracles
            </h2>
            <ul className="space-y-3">
              {prophet.miracles.map((miracle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-islamic-gold mt-2 flex-shrink-0" />
                  <span className="text-islamic-text-secondary text-sm">{miracle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quranic References */}
          <div className="islamic-card p-6">
            <h2 className="text-lg font-heading font-semibold text-islamic-text-primary flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-islamic-gold" />
              Quranic References
            </h2>
            <div className="text-islamic-text-secondary text-sm space-y-1">
              {prophet.quranicRefs.map((ref, index) => (
                <p key={index}>{ref}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
