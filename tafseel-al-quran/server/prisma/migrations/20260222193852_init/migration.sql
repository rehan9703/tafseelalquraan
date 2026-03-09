-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "avatarUrl" TEXT,
    "language" TEXT NOT NULL DEFAULT 'EN',
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "surahs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "nameArabic" TEXT NOT NULL,
    "nameEnglish" TEXT NOT NULL,
    "nameTransliteration" TEXT NOT NULL,
    "revelationType" TEXT NOT NULL,
    "ayahCount" INTEGER NOT NULL,
    "juzStart" INTEGER NOT NULL,
    "juzEnd" INTEGER NOT NULL,
    "orderOfRevelation" INTEGER NOT NULL,
    "virtues" TEXT,
    "summary" TEXT
);

-- CreateTable
CREATE TABLE "ayahs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "surahId" INTEGER NOT NULL,
    "ayahNumber" INTEGER NOT NULL,
    "arabicText" TEXT NOT NULL,
    "translationEN" TEXT,
    "translationUR" TEXT,
    "translationAR" TEXT,
    "translationHinglish" TEXT,
    "tafseerEN" TEXT,
    "tafseerUR" TEXT,
    "tafseerAR" TEXT,
    "juzNumber" INTEGER NOT NULL,
    "hizbNumber" INTEGER NOT NULL,
    "audioUrl" TEXT,
    CONSTRAINT "ayahs_surahId_fkey" FOREIGN KEY ("surahId") REFERENCES "surahs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "surah_facts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "surahId" INTEGER NOT NULL,
    "fact" TEXT NOT NULL,
    CONSTRAINT "surah_facts_surahId_fkey" FOREIGN KEY ("surahId") REFERENCES "surahs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "prophets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameArabic" TEXT NOT NULL,
    "nameEnglish" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "nation" TEXT NOT NULL,
    "orderNumber" INTEGER NOT NULL,
    "story" TEXT NOT NULL,
    "lessonsLearned" TEXT NOT NULL,
    "keyMiracles" TEXT NOT NULL,
    "quranicReferences" TEXT NOT NULL,
    "periodEra" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "hadiths" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collection" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "arabicText" TEXT NOT NULL,
    "translationEN" TEXT NOT NULL,
    "narrator" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "benefits" TEXT,
    "explanation" TEXT
);

-- CreateTable
CREATE TABLE "names_of_allah" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "nameArabic" TEXT NOT NULL,
    "transliteration" TEXT NOT NULL,
    "meaningEN" TEXT NOT NULL,
    "meaningUR" TEXT,
    "virtues" TEXT,
    "quranicReference" TEXT,
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "duas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titleEN" TEXT NOT NULL,
    "arabicText" TEXT NOT NULL,
    "transliteration" TEXT NOT NULL,
    "translationEN" TEXT NOT NULL,
    "translationUR" TEXT,
    "situation" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "virtues" TEXT,
    "audioUrl" TEXT
);

-- CreateTable
CREATE TABLE "islamic_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "era" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyFigures" TEXT NOT NULL,
    "significance" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "iconType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "quiz_questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "optionA" TEXT NOT NULL,
    "optionB" TEXT NOT NULL,
    "optionC" TEXT NOT NULL,
    "optionD" TEXT NOT NULL,
    "correctOption" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "quiz_results" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "correctAnswers" INTEGER NOT NULL,
    "scorePercent" REAL NOT NULL,
    "timeTakenSeconds" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quiz_results_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bookmarks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "bookmarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reading_progress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "surahId" INTEGER NOT NULL,
    "lastAyahRead" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "reading_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "reading_progress_surahId_fkey" FOREIGN KEY ("surahId") REFERENCES "surahs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_streaks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastActiveDate" DATETIME,
    CONSTRAINT "user_streaks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "surahs_number_key" ON "surahs"("number");

-- CreateIndex
CREATE INDEX "surahs_number_idx" ON "surahs"("number");

-- CreateIndex
CREATE INDEX "surahs_revelationType_idx" ON "surahs"("revelationType");

-- CreateIndex
CREATE INDEX "ayahs_surahId_idx" ON "ayahs"("surahId");

-- CreateIndex
CREATE INDEX "ayahs_juzNumber_idx" ON "ayahs"("juzNumber");

-- CreateIndex
CREATE INDEX "surah_facts_surahId_idx" ON "surah_facts"("surahId");

-- CreateIndex
CREATE INDEX "prophets_orderNumber_idx" ON "prophets"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "prophets_orderNumber_key" ON "prophets"("orderNumber");

-- CreateIndex
CREATE INDEX "hadiths_collection_idx" ON "hadiths"("collection");

-- CreateIndex
CREATE INDEX "hadiths_topic_idx" ON "hadiths"("topic");

-- CreateIndex
CREATE UNIQUE INDEX "hadiths_collection_number_key" ON "hadiths"("collection", "number");

-- CreateIndex
CREATE INDEX "names_of_allah_number_idx" ON "names_of_allah"("number");

-- CreateIndex
CREATE INDEX "names_of_allah_category_idx" ON "names_of_allah"("category");

-- CreateIndex
CREATE UNIQUE INDEX "names_of_allah_number_key" ON "names_of_allah"("number");

-- CreateIndex
CREATE INDEX "duas_situation_idx" ON "duas"("situation");

-- CreateIndex
CREATE INDEX "islamic_events_era_idx" ON "islamic_events"("era");

-- CreateIndex
CREATE INDEX "islamic_events_category_idx" ON "islamic_events"("category");

-- CreateIndex
CREATE UNIQUE INDEX "islamic_events_title_key" ON "islamic_events"("title");

-- CreateIndex
CREATE INDEX "quiz_questions_category_idx" ON "quiz_questions"("category");

-- CreateIndex
CREATE INDEX "quiz_questions_difficulty_idx" ON "quiz_questions"("difficulty");

-- CreateIndex
CREATE INDEX "quiz_results_userId_idx" ON "quiz_results"("userId");

-- CreateIndex
CREATE INDEX "quiz_results_category_idx" ON "quiz_results"("category");

-- CreateIndex
CREATE INDEX "bookmarks_userId_idx" ON "bookmarks"("userId");

-- CreateIndex
CREATE INDEX "bookmarks_contentType_idx" ON "bookmarks"("contentType");

-- CreateIndex
CREATE INDEX "bookmarks_contentId_idx" ON "bookmarks"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_userId_contentType_contentId_key" ON "bookmarks"("userId", "contentType", "contentId");

-- CreateIndex
CREATE INDEX "reading_progress_userId_idx" ON "reading_progress"("userId");

-- CreateIndex
CREATE INDEX "reading_progress_surahId_idx" ON "reading_progress"("surahId");

-- CreateIndex
CREATE UNIQUE INDEX "reading_progress_userId_surahId_key" ON "reading_progress"("userId", "surahId");

-- CreateIndex
CREATE UNIQUE INDEX "user_streaks_userId_key" ON "user_streaks"("userId");

-- CreateIndex
CREATE INDEX "user_streaks_userId_idx" ON "user_streaks"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_key" ON "refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "refresh_tokens_token_idx" ON "refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");
