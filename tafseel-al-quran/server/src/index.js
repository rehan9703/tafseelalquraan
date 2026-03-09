import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';

import { errorHandler } from './middleware/errorHandler.js';
import quranRoutes from './routes/quran.routes.js';
import hadithRoutes from './routes/hadith.routes.js';
import prophetRoutes from './routes/prophet.routes.js';
import nameRoutes from './routes/name.routes.js';
import duaRoutes from './routes/dua.routes.js';
import historyRoutes from './routes/history.routes.js';
import quizRoutes from './routes/quiz.routes.js';
import issueRoutes from './routes/issue.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';

// ─── Rate Limiting ────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,          // 15 minutes
  max: isDev ? 2000 : 300,           // generous in dev, reasonable in prod
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, please try again later.' },
  skip: (req) => req.path === '/api/health', // never rate-limit health checks
});

// ─── Security & Parsing ───────────────────────────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));
app.use(limiter);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const allowed =
      (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) ||
      origin.endsWith('.vercel.app') ||
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:');

    if (allowed) return callback(null, true);
    callback(new Error(`CORS: origin not allowed — ${origin}`));
  },
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Concise request logging
app.use(morgan(isDev ? 'dev' : 'combined'));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/quran', quranRoutes);
app.use('/api/hadith', hadithRoutes);
app.use('/api/prophets', prophetRoutes);
app.use('/api/names', nameRoutes);
app.use('/api/duas', duaRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/issues', issueRoutes);

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: "Tafseel-al-Qur'an API is running",
    timestamp: new Date().toISOString(),
    env: isDev ? 'development' : 'production',
  });
});

// ─── Backend Home Page ────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tafseel-al-Qur'an API</title>
      <style>
        body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #0f172a; color: #f8fafc; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; }
        .container { max-width: 600px; padding: 2rem; background: #1e293b; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid #334155; }
        h1 { color: #38bdf8; margin-bottom: 0.5rem; font-size: 2.5rem; }
        p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
        .endpoint { background: #0f172a; padding: 1rem; border-radius: 0.5rem; text-align: left; font-family: monospace; color: #10b981; margin-bottom: 0.5rem; border: 1px solid #334155; }
        .btn { display: inline-block; padding: 0.75rem 1.5rem; background: #38bdf8; color: #0f172a; text-decoration: none; border-radius: 0.5rem; font-weight: bold; transition: all 0.2s; }
        .btn:hover { background: #7dd3fc; transform: translateY(-2px); }
        .status { display: inline-flex; align-items: center; gap: 0.5rem; color: #10b981; font-weight: 500; font-size: 0.9rem; margin-top: 2rem; }
        .status-dot { width: 10px; height: 10px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Tafseel-al-Qur'an</h1>
        <p>The backend API server is successfully running and accepting connections. All database systems are online.</p>
        
        <div class="endpoint">GET /api/health</div>
        <div class="endpoint">GET /api/quran/surahs</div>
        <div class="endpoint">GET /api/issues</div>
        
        <br>
        <a href="/api" class="btn">View Raw API Architecture</a>
        
        <div class="status">
          <div class="status-dot"></div> Systems Operational
        </div>
      </div>
    </body>
    </html>
  `);
});

// ─── API Info ────────────────────────────────────────────────────────────────
app.get('/api', (req, res) => {
  res.json({
    success: true,
    name: "Tafseel-al-Qur'an API",
    version: '1.0.0',
    author: 'rehan97',
    endpoints: {
      quran: '/api/quran/surahs — GET all surahs',
      surah: '/api/quran/surahs/:id — GET single surah',
      ayahs: '/api/quran/surahs/:id/ayahs — GET ayahs of a surah',
      juz: '/api/quran/juz — GET all 30 Juz',
      juzSurahs: '/api/quran/juz/:number/surahs — GET surahs in a Juz',
      search: '/api/quran/search?q=query — Search Quran text',
      hadith: '/api/hadith — GET hadiths',
      health: '/api/health — Server status',
    },
  });
});

// ─── 404 ─────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route not found: ${req.method} ${req.originalUrl}` });
});

// ─── Global Error Handler ───────────────────────────────────────────────────
app.use(errorHandler);

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════════════╗
  ║  Tafseel-al-Qur'an API Server                    ║
  ║  Author: rehan97                                 ║
  ║                                                  ║
  ║  ▶  http://localhost:${PORT}/api                   ║
  ║  ❤  http://localhost:${PORT}/api/health            ║
  ╚══════════════════════════════════════════════════╝
  `);
});

export default app;
