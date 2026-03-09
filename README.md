<div align="center">
  <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/mosque.svg" width="100" alt="Logo"/>
  <br/>
  
  # 🕋 Tafseel-al-Qur'an & Classical Hadith Dashboard
  *A premium, high-performance Islamic Knowledge Dashboard built with React, Vite, and Node.js. Designed to effortlessly serve and search through massive offline Classical Hadith collections and full-length Interactive Quran Recitations.*

  <br/>

  [![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge&logo=check)]()
  [![Frontend](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-blue?style=for-the-badge&logo=react)]()
  [![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-green?style=for-the-badge&logo=nodedotjs)]()
  [![Database](https://img.shields.io/badge/Database-PostgreSQL%20%2B%20Prisma-blueviolet?style=for-the-badge&logo=postgresql)]()
  [![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)]()

  <br/>
  
  <img src="frontend-screenshot.png" width="800" alt="Dashboard Preview"/>
  <p style="font-style: italic; color: #666;">Dashboard home page with daily ayah and hadith widgets</p>
</div>

---

## 📋 Table of Contents

1. [✨ Core Features](#-core-features)
   - [📖 The Classical Hadith Engine](#-the-classical-hadith-engine)
   - [🎧 Interactive Quran Recitation](#-interactive-quran-recitation)
   - [🎨 Breathtaking UI/UX Aesthetics](#-breathtaking-uiux-aesthetics)
   - [🧠 Advanced Learning Features](#-advanced-learning-features)
2. [🏗️ System Architecture](#-system-architecture)
   - [Component Flowchart](#component-flowchart)
   - [Data Flow Diagram](#data-flow-diagram)
3. [🚀 Quick Start](#-quick-start)
4. [🔧 Local Development](#-local-development)
5. [📊 Database Schema](#-database-schema)
6. [🔌 API Documentation](#-api-documentation)
7. [🎯 Production Deployment](#-production-deployment)
8. [🛠️ Tech Stack](#-tech-stack)
9. [📝 Project Structure](#-project-structure)
10. [🎨 UI Components Gallery](#-ui-components-gallery)
11. [💡 Key Concepts](#-key-concepts)
12. [🔍 Search Functionality](#-search-functionality)
13. [🎵 Audio System](#-audio-system)
14. [📱 Responsive Design](#-responsive-design)
15. [🔒 Security Measures](#-security-measures)
16. [⚡ Performance Optimization](#-performance-optimization)
17. [🔧 Configuration](#-configuration)
18. [📦 Docker Deployment](#-docker-deployment)
19. [📚 Resources](#-resources)
20. [🤝 Contributing](#-contributing)
21. [📄 License](#-license)

---

## ✨ Core Features

### 📖 The Classical Hadith Engine
- **Massive Offline Access**: Instantly load and search through hundreds of megabytes of highly compressed, statically hosted JSON data.
- **Major Collections**: Full integration of Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan an-Nasai, and Sunan Ibn Majah.
- **Native Tri-lingual Display**: All Hadiths are dynamically cross-referenced on the backend to elegantly display merged English, Arabic, and Urdu datasets simultaneously even when source arrays are missing localized translations.
- **Advanced Search**: Full-text search across all collections with filters for collection type, language, and keywords.

### 🎧 Interactive Quran Recitation
- **Ayah-by-Ayah Streaming**: Native `HTMLAudioElement` integration allows for flawless, sync-free streaming of individual verses via robust CDN routing.
- **Full Surah Playback**: Seamlessly listen to uninterrupted, full-length surahs with beautiful active-listening UI states.
- **Multiple Reciters**: Support for popular reciters including Mishary Alafasy, Abdul Rahman Al-Sudais, and Saad Al-Ghamdi.
- **Audio Controls**: Play, pause, seek, and volume control with visual feedback.

### 🎨 Breathtaking UI/UX Aesthetics
- **Ultra-Premium "Glassmorphism"**: A stunning dark-mode interface powered by Tailwind CSS.
- **Fluid Micro-Animations**: Orchestrated component rendering utilizing Framer Motion for buttery-smooth dropdowns, pagination states, and network loading transitions.
- **Arabic Typography**: Culturally accurate and elegant serif font stacks optimized specifically for rendering correct Quranic script and Urdu Nastaliq.
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices.

### 🧠 Advanced Learning Features
- **Islamic Quiz**: Interactive quizzes to test knowledge of Quran, Hadith, and Islamic history.
- **Progress Tracking**: Monitor reading progress with visual indicators and statistics.
- **Bookmarks & Notes**: Save favorite verses, hadiths, and add personal notes.
- **Daily Content**: Personalized daily ayah and hadith recommendations.

---

## 🏗️ System Architecture

### Component Flowchart

The project utilizes a decoupled client/server architecture to optimize for edge-network CDN caching (frontend) while preserving processing capacity for parsing monolithic JSON database files (backend).

```mermaid
graph TD
    %% Node Styling
    classDef frontend fill:#1e293b,stroke:#eab308,stroke-width:2px,color:white;
    classDef backend fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:white;
    classDef edge fill:#10b981,stroke:#047857,stroke-width:2px,color:white;
    classDef database fill:#475569,stroke:#94a3b8,stroke-width:2px,color:white;
    classDef user fill:#6366f1,stroke:#4338ca,stroke-width:2px,color:white;
    classDef external fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:white;

    %% Elements
    User[📱 End User Browser]:::user
    
    subgraph "Frontend Layer (Vercel Edge CDN)"
        UI[⚛️ React / Vite App <br> TypeScript + TailwindCSS]:::frontend
        AudioPlayer[🎵 Native Audio Engine]:::frontend
        SearchEngine[🔍 Full-Text Search]:::frontend
        Storage[💾 Local Storage]:::frontend
    end
    
    subgraph "Backend Layer (Railway Dedicated Container)"
        API[⚙️ Node.js Express Server <br> REST API]:::backend
        DB[(📚 PostgreSQL Database <br> Prisma ORM)]:::database
        Redis[⚡ Redis Cache]:::backend
        FileStorage[💾 Static File Storage]:::backend
    end
    
    ExternalCDN[🌍 EveryAyah MP3 CDN <br> Quran Audio Streaming]:::external

    %% Flow Definitions
    User -- "1. HTTP GET / View Dashboard" --> UI
    UI -- "2. API Requests /api/*" --> API
    API -- "3. Database Queries" --> DB
    DB -. "4. Returns JSON Data" .-> API
    API -- "5. Caches Responses" --> Redis
    API -- "6. Serves Static Files" --> FileStorage
    API -. "7. Serves Paginated Data" .-> UI
    AudioPlayer -- "8. Streams Audio Blocks" --> ExternalCDN
    UI -- "9. Stores User Data" --> Storage
    UI -- "10. Full-Text Search" --> SearchEngine
```

### Data Flow Diagram

```mermaid
sequenceDiagram
    participant User as User Browser
    participant Frontend as React Frontend
    participant Backend as Node.js API
    participant DB as PostgreSQL
    participant Cache as Redis
    participant CDN as Audio CDN
    
    User->>Frontend: Opens Dashboard
    Frontend->>Backend: GET /api/health (health check)
    Backend->>Frontend: 200 OK
    
    Frontend->>Backend: GET /api/quran/daily (daily ayah)
    Backend->>Cache: Check cache
    alt Cache miss
        Backend->>DB: Query daily ayah
        DB-->>Backend: Return ayah data
        Backend->>Cache: Store in cache (TTL 24h)
    else Cache hit
        Cache-->>Backend: Return cached ayah
    end
    Backend-->>Frontend: Return ayah data
    Frontend->>User: Display daily ayah
    
    User->>Frontend: Clicks "Play Audio"
    Frontend->>CDN: GET /audio/1:1.mp3
    CDN-->>Frontend: Returns audio file
    Frontend->>User: Plays audio
    
    User->>Frontend: Searches for "Allah"
    Frontend->>Backend: GET /api/search?q=Allah
    Backend->>DB: Full-text search
    DB-->>Backend: Returns results
    Backend-->>Frontend: Return paginated results
    Frontend->>User: Displays search results
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- PostgreSQL database
- Redis server
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tafseel-al-quran.git
cd tafseel-al-quran

# Install dependencies for both frontend and backend
cd app && npm install && cd ..
cd tafseel-al-quran/server && npm install && cd ../..

# Set up environment variables
cp app/.env.example app/.env
cp tafseel-al-quran/server/.env.example tafseel-al-quran/server/.env

# Configure your database connection in both .env files

# Run database migrations (backend)
cd tafseel-al-quran/server
npx prisma migrate dev
cd ../..

# Seed the database with initial data (optional)
cd tafseel-al-quran/server
npm run seed
cd ../..

# Start the development servers
# Terminal 1 - Backend
cd tafseel-al-quran/server
npm run dev

# Terminal 2 - Frontend
cd app
npm run dev

# Open your browser to http://localhost:5173
```

---

## 🔧 Local Development

### 1. Booting the Backend Server

```bash
cd tafseel-al-quran/server

# Install all Node modules
npm install

# Start the development server (Defaults to Port 5000)
npm run dev
```

### 2. Booting the Frontend Client

```bash
cd app

# Install all React dependencies
npm install

# Start the Vite development server (Defaults to Port 5173)
npm run dev
```

Open your browser to `http://localhost:5173` to interact with the dashboard!

---

## 📊 Database Schema

### Main Tables

```mermaid
erDiagram
    SURAH ||--|{ AYAH : "contains"
    SURAH {
        int number PK
        string nameEnglish
        string nameArabic
        string nameUrdu
        int totalAyahs
        string revelationType
        int juzStart
        int juzEnd
        string descriptionEN
        string descriptionUR
    }
    
    AYAH {
        int id PK
        int surahId FK
        int ayahNumber
        string arabicText
        string translationEN
        string translationUR
        int juzNumber
        string audioUrl
        string footnote
    }
    
    HADITH_COLLECTION ||--|{ HADITH : "contains"
    HADITH_COLLECTION {
        string name PK
        string displayName
        string description
        int totalHadiths
    }
    
    HADITH {
        int id PK
        string collection FK
        int number
        string arabicText
        string englishText
        string urduText
        string narrator
        string reference
    }
    
    PROPHET {
        int id PK
        string nameEnglish
        string nameArabic
        string nameUrdu
        string birthPlace
        string deathPlace
        string period
        string description
        string story
        int orderOfRevelation
    }
    
    NAME_OF_ALLAH {
        int id PK
        string arabicName
        string englishName
        string urduName
        string meaning
        string description
        string attributes
    }
    
    DUA {
        int id PK
        string titleEN
        string titleUR
        string arabicText
        string translationEN
        string translationUR
        string category
        string reference
        string benefits
    }
    
    QUIZ_QUESTION {
        int id PK
        int categoryId FK
        string questionEN
        string questionUR
        string answerA
        string answerB
        string answerC
        string answerD
        string correctAnswer
        int difficultyLevel
        string explanation
    }
    
    QUIZ_CATEGORY {
        int id PK
        string nameEN
        string nameUR
        string description
        int totalQuestions
    }
```

---

## 🔌 API Documentation

### Base URL

- Development: `http://localhost:5000/api`
- Production: `https://your-api-domain.com/api`

### API Endpoints

#### Quran API

```javascript
// Get all surahs
GET /api/quran/surahs

// Get a specific surah
GET /api/quran/surahs/:id

// Get all ayahs from a surah
GET /api/quran/surahs/:id/ayahs

// Get a specific ayah
GET /api/quran/ayahs/:id

// Get daily ayah
GET /api/quran/daily

// Search ayahs
GET /api/quran/search?q=query

// Get juz list
GET /api/quran/juz

// Get surahs in a specific juz
GET /api/quran/juz/:number/surahs
```

#### Hadith API

```javascript
// Get all hadith collections
GET /api/hadith/collections

// Get hadiths from a specific collection
GET /api/hadith?collection=bukhari&page=1&limit=30

// Get daily hadith
GET /api/hadith/daily

// Search hadiths
GET /api/hadith/search?q=query

// Get hadith by ID
GET /api/hadith/:collection/:id
```

#### Other APIs

```javascript
// Get all prophets
GET /api/prophets

// Get a specific prophet
GET /api/prophets/:id

// Get all names of Allah
GET /api/names

// Get a specific name of Allah
GET /api/names/:id

// Get all duas
GET /api/duas

// Get duas by category
GET /api/duas/category/:category

// Get quiz questions
GET /api/quiz/questions?category=quran&difficulty=easy

// Get quiz categories
GET /api/quiz/categories

// Health check
GET /api/health
```

---

## 🎯 Production Deployment

### Step 1: Deploy the Node.js Backend (Railway / Render)

1. Push this repository to GitHub.
2. Create a new service in **[Railway](https://railway.app/)** or **[Render](https://render.com/)**.
3. Set your **Root Directory** to `tafseel-al-quran/server`.
4. The deployment engine will automatically detect `package.json` and execute `npm install` and `npm start`.
5. Configure your environment variables:
   - `DATABASE_URL`: PostgreSQL connection string
   - `REDIS_URL`: Redis connection string
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
6. *Wait for compilation.* Once successful, copy the live production URL generated (e.g., `https://tafseel-api.up.railway.app`).

### Step 2: Deploy the React Frontend (Vercel)

Vercel handles the React code perfectly, compiling it to ultra-fast static HTML/JS assets.

1. Create a new project in **[Vercel](https://vercel.com/)** connected to your GitHub repo.
2. Set the **Root Directory** configuration to the `app` folder.
3. Before finalizing the build, go to the **Environment Variables** panel in Vercel:
   - `VITE_API_BASE_URL`: Your Railway API URL from Step 1 (e.g., `https://tafseel-api.up.railway.app/api`)
   - `VITE_APP_NAME`: `Tafseel-al-Qur'an`
4. **Deploy**. The frontend will automatically route its requests to your live Railway backend.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first CSS framework |
| Framer Motion | Animation library |
| Lucide React | Icon library |
| Zustand | State management |
| Axios | HTTP client |
| React Router | Client-side routing |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| PostgreSQL | Relational database |
| Prisma | ORM |
| Redis | Caching |
| CORS | Cross-origin resource sharing |
| Helmet | Security headers |
| Morgan | HTTP logging |

### DevOps & Tools

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Railway | Backend deployment |
| Vercel | Frontend deployment |
| GitHub Actions | CI/CD |

---

## 📝 Project Structure

```
tafseel-al-quran/
├── app/                           # React frontend
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── layout/          # Layout components
│   │   │   └── ui/              # Shadcn UI components
│   │   ├── data/                # Static data files
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utility functions
│   │   ├── pages/               # Page components
│   │   ├── services/            # API services
│   │   ├── store/               # Zustand store
│   │   ├── App.tsx              # Root component
│   │   └── main.tsx             # Entry point
│   ├── public/                  # Static assets
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript config
│   └── vite.config.ts          # Vite config
├── tafseel-al-quran/server/     # Node.js backend
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   ├── controllers/        # API controllers
│   │   ├── middleware/         # Express middleware
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── utils/              # Utility functions
│   │   └── index.js            # Server entry point
│   ├── prisma/                 # Prisma schema and migrations
│   ├── package.json            # Dependencies
│   └── .env.example            # Environment variables example
├── docker-compose.yml          # Docker configuration
└── README.md                   # Project documentation
```

---

## 🎨 UI Components Gallery

### 1. Dashboard Overview

<img src="quran-explorer.png" width="800" alt="Quran Explorer"/>
<p style="font-style: italic; color: #666;">Quran explorer with audio playback and multi-language support</p>

### 2. Hadith Collection

<img src="frontend-screenshot.png" width="800" alt="Hadith Collection"/>
<p style="font-style: italic; color: #666;">Hadith collection with search and filtering capabilities</p>

### 3. Quiz Interface

<img src="updated-frontend-screenshot.png" width="800" alt="Quiz Interface"/>
<p style="font-style: italic; color: #666;">Interactive quiz interface with multiple difficulty levels</p>

### 4. Responsive Design

<img src="screenshot.png" width="800" alt="Responsive Design"/>
<p style="font-style: italic; color: #666;">Dashboard preview showing responsive design across devices</p>

---

## 💡 Key Concepts

### 1. State Management with Zustand

The application uses Zustand for lightweight, fast state management:

```typescript
// src/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
```

### 2. API Service Architecture

API services are organized by domain with a shared base client:

```typescript
// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// src/services/quranService.ts
export const quranService = {
  getSurahs: () => apiClient.get('/quran/surahs'),
  getSurah: (id: number) => apiClient.get(`/quran/surahs/${id}`),
  getAyahs: (surahId: number) => apiClient.get(`/quran/surahs/${surahId}/ayahs`),
  getDailyAyah: () => apiClient.get('/quran/daily'),
  searchAyahs: (query: string) => apiClient.get(`/quran/search?q=${query}`),
};
```

### 3. Data Fetching with React Query

React Query is used for efficient data fetching and caching:

```typescript
// src/hooks/useQuran.ts
import { useQuery } from '@tanstack/react-query';
import { quranService } from '../services';

export const useDailyAyah = () => {
  return useQuery({
    queryKey: ['daily-ayah'],
    queryFn: quranService.getDailyAyah,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
```

---

## 🔍 Search Functionality

### Full-Text Search Implementation

The search system supports both basic keyword search and advanced filtering:

```javascript
// tafseel-al-quran/server/src/controllers/search.controller.js
export const searchAyahs = async (req, res, next) => {
  try {
    const { q, language = 'en' } = req.query;
    if (!q || q.length < 2) {
      return errorResponse(res, 'Search query too short', 400);
    }

    const ayahs = await prisma.ayah.findMany({
      where: {
        OR: [
          { arabicText: { contains: q, mode: 'insensitive' } },
          { translationEN: { contains: q, mode: 'insensitive' } },
          { translationUR: { contains: q, mode: 'insensitive' } },
        ],
      },
      take: 50,
      include: { surah: true },
    });

    const results = ayahs.map((a) => ({
      id: `${a.surahId}:${a.ayahNumber}`,
      surahId: a.surahId,
      surahName: a.surah.nameEnglish,
      ayahNumber: a.ayahNumber,
      arabicText: a.arabicText,
      translationEN: a.translationEN,
      translationUR: a.translationUR,
      juzNumber: a.juzNumber,
    }));

    successResponse(res, {
      results,
      total: results.length,
      query: q,
    });
  } catch (error) {
    next(error);
  }
};
```

---

## 🎵 Audio System

### Audio Player Architecture

The audio system supports both ayah-by-ayah and full surah playback:

```typescript
// src/components/AudioPlayer.tsx
import React, { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
  surahId: number;
  ayahNumber: number;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ surahId, ayahNumber }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const getAudioUrl = (surahId: number, ayahNumber: number) => {
    const surahStr = String(surahId).padStart(3, '0');
    const ayahStr = String(ayahNumber).padStart(3, '0');
    return `https://everyayah.com/data/Alafasy_128kbps/${surahStr}${ayahStr}.mp3`;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getAudioUrl(surahId, ayahNumber);
    }
  }, [surahId, ayahNumber]);

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
      />
      <button onClick={togglePlay}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <div className="progress-bar">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = parseFloat(e.target.value);
            }
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};
```

---

## 📱 Responsive Design

### Grid System and Breakpoints

The application uses Tailwind CSS breakpoints for responsive design:

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom breakpoints for better mobile experience */
@layer utilities {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .grid-custom {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
  }
  
  .text-custom {
    @apply text-sm sm:text-base md:text-lg lg:text-xl;
  }
}

/* Hide scrollbar for cleaner UI */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

## 🔒 Security Measures

### Backend Security

```javascript
// tafseel-al-quran/server/src/middleware/security.js
import helmet from 'helmet';
import cors from 'cors';

export const securityMiddleware = (app) => {
  // Helmet for security headers
  app.use(helmet());

  // CORS configuration
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? /\.vercel\.app$|^https?:\/\/(www\.)?yourdomain\.com$/
      : 'http://localhost:5173',
    credentials: true,
  }));

  // Content Security Policy
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:"],
      connectSrc: ["'self'", process.env.API_BASE_URL],
    },
  }));

  // XSS protection
  app.use(helmet.xssFilter());
  app.use(helmet.frameguard({ action: 'deny' }));
};
```

### Frontend Security

```typescript
// src/utils/security.ts
export const sanitizeInput = (input: string): string => {
  const tempDiv = document.createElement('div');
  tempDiv.textContent = input;
  return tempDiv.innerHTML;
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
};
```

---

## ⚡ Performance Optimization

### Code Splitting & Lazy Loading

```typescript
// src/pages/QuranExplorer.tsx
import React, { Suspense, lazy } from 'react';

const AudioPlayer = lazy(() => import('../components/AudioPlayer'));
const AyahCard = lazy(() => import('../components/AyahCard'));

export const QuranExplorer: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="quran-explorer">
        <AudioPlayer />
        <AyahCard />
      </div>
    </Suspense>
  );
};
```

### Image Optimization

```typescript
// src/components/Image.tsx
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy' 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover transition-opacity duration-300 ${className}`}
      loading={loading}
      onError={(e) => {
        e.currentTarget.src = '/fallback-image.png';
      }}
    />
  );
};
```

---

## 🔧 Configuration

### Environment Variables

```env
# Frontend (.env)
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Tafseel-al-Qur'an
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X

# Backend (.env)
DATABASE_URL=postgresql://username:password@localhost:5432/tafseel
REDIS_URL=redis://localhost:6379
NODE_ENV=development
PORT=5000
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=http://localhost:5173
```

---

## 📦 Docker Deployment

### Docker Compose

```yaml
version: '3.8'
services:
  db:
    image: postgres:14
    container_name: tafseel-db
    environment:
      POSTGRES_USER: tafseel
      POSTGRES_PASSWORD: password
      POSTGRES_DB: tafseel
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U tafseel"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: tafseel-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  server:
    build: ./tafseel-al-quran/server
    container_name: tafseel-server
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgresql://tafseel:password@db:5432/tafseel
      REDIS_URL: redis://redis:6379
      NODE_ENV: production
      PORT: 5000
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./tafseel-al-quran/server:/app
      - /app/node_modules

  app:
    build: ./app
    container_name: tafseel-app
    ports:
      - "5173:5173"
    environment:
      VITE_API_BASE_URL: http://localhost:5000/api
    depends_on:
      - server

volumes:
  postgres_data:
  redis_data:
```

---

## 📚 Resources

### Data Sources

- **Quran Text**: Holy Quran in Arabic, English, and Urdu translations
- **Hadith Collections**: Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan an-Nasai, and Sunan Ibn Majah
- **Prophets Stories**: Comprehensive collection of stories of all prophets
- **Names of Allah**: 99 names of Allah with meanings and explanations
- **Duas Collection**: Common Islamic supplications in multiple languages
- **Audio Recitations**: Mishary Alafasy, Abdul Rahman Al-Sudais, Saad Al-Ghamdi

### References

- [Quran.com](https://quran.com/) - Quran text and translations
- [Sunnah.com](https://sunnah.com/) - Hadith collections
- [IslamQA](https://islamqa.info/) - Islamic questions and answers
- [EveryAyah](https://everyayah.com/) - Quran audio recitations

---

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Install dependencies
4. Make your changes
5. Add tests for your changes (if applicable)
6. Run the tests to ensure they pass
7. Commit your changes with a meaningful commit message
8. Push your branch to your forked repository
9. Create a pull request

### Development Guidelines

- Follow the existing code style and architecture
- Write clear, concise code with comments if necessary
- Add tests for new features
- Ensure all existing tests pass
- Update the documentation if you make changes to the API or features

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) for details on our code of conduct.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ and dedication for the Ummah.</p>
  <p>May Allah accept our efforts and grant us the highest ranks in Jannah.</p>
</div>
