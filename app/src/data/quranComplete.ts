export interface Surah {
  id: number;
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameTransliteration: string;
  revelationType: 'MAKKI' | 'MADANI';
  ayahCount: number;
  juzStart: number;
  juzEnd: number;
  orderOfRevelation: number;
  virtues?: string;
  summary?: string;
  summaryHinglish?: string;
}

export interface Ayah {
  id: string;
  surahId: number;
  ayahNumber: number;
  arabicText: string;
  translationEN?: string;
  translationUR?: string;
  translationHinglish?: string;
  tafseerEN?: string;
  tafseerUR?: string;
  tafseerHinglish?: string;
  juzNumber: number;
  hizbNumber: number;
  audioUrl?: string;
}

// Complete 114 Surahs with all details
export const surahs: Surah[] = [
  { id: 1, number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah", nameTransliteration: "The Opening", revelationType: "MAKKI", ayahCount: 7, juzStart: 1, juzEnd: 1, orderOfRevelation: 5, summary: "The opening chapter of the Quran, consisting of seven verses. It is a prayer for guidance and the most recited surah in Islamic worship.", summaryHinglish: "Quran ki pehli Surah, 7 ayaton par mushtamil. Hidayat ki dua hai aur namaz mein sabse zyada padhi jaati hai.", virtues: "Known as Umm Al-Kitab (Mother of the Book). Recited in every unit of prayer. Equivalent to two-thirds of the Quran in reward." },
  { id: 2, number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah", nameTransliteration: "The Cow", revelationType: "MADANI", ayahCount: 286, juzStart: 1, juzEnd: 3, orderOfRevelation: 87, summary: "The longest chapter of the Quran, covering various aspects of Islamic law, faith, and guidance for the Muslim community.", summaryHinglish: "Quran ki sabse badi Surah, 286 ayaten. Islami qanoon, imaan aur Muslim community ki hidayat par mukammal tafseel.", virtues: "Contains Ayat Al-Kursi, the greatest verse in the Quran. Shaytan flees from a home where it is recited for three days." },
  { id: 3, number: 3, nameArabic: "آل عمران", nameEnglish: "Aal-E-Imran", nameTransliteration: "The Family of Imran", revelationType: "MADANI", ayahCount: 200, juzStart: 3, juzEnd: 4, orderOfRevelation: 89, summary: "Focuses on the unity of God, the importance of faith, and stories of previous prophets including the family of Imran.", summaryHinglish: "Allah ki wahdaniyat, imaan ki ahmiyat aur Imran ke khandan ki kahani par focus karta hai.", virtues: "Contains the verse of the Throne. Recited for protection and blessings." },
  { id: 4, number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa", nameTransliteration: "The Women", revelationType: "MADANI", ayahCount: 176, juzStart: 4, juzEnd: 6, orderOfRevelation: 92, summary: "Addresses social issues, family law, women's rights, and inheritance laws in Islam.", summaryHinglish: "Islam mein social masail, family law, aurton ke huqooq aur virasat ke qanoon par mukammal hidayat.", virtues: "Comprehensive guidance on family matters and social justice." },
  { id: 5, number: 5, nameArabic: "المائدة", nameEnglish: "Al-Ma'idah", nameTransliteration: "The Table Spread", revelationType: "MADANI", ayahCount: 120, juzStart: 6, juzEnd: 7, orderOfRevelation: 112, summary: "Covers dietary laws, legal punishments, and the story of the disciples requesting a table spread from heaven.", summaryHinglish: "Khane peene ke qanoon, sazaain, aur Hawariyon ki kahani jinhon ne aasman se khana manga tha.", virtues: "Contains the verse: 'Today I have perfected for you your religion.'" },
  { id: 6, number: 6, nameArabic: "الأنعام", nameEnglish: "Al-An'am", nameTransliteration: "The Cattle", revelationType: "MAKKI", ayahCount: 165, juzStart: 7, juzEnd: 8, orderOfRevelation: 55, summary: "Emphasizes the oneness of Allah and refutes polytheism, discussing various aspects of God's creation.", summaryHinglish: "Allah ki wahdaniyat par zor deti hai aur shirk ki refutation karti hai. Allah ki creation ke nishanaat.", virtues: "Comprehensive arguments for Tawhid (Oneness of Allah)." },
  { id: 7, number: 7, nameArabic: "الأعراف", nameEnglish: "Al-A'raf", nameTransliteration: "The Heights", revelationType: "MAKKI", ayahCount: 206, juzStart: 8, juzEnd: 9, orderOfRevelation: 39, summary: "Narrates stories of previous prophets and the Day of Judgment, describing the people of the Heights.", summaryHinglish: "Pehle anbiya ki kahaniyan aur Qayamat ka din. A'raf par khade logon ka zikr.", virtues: "Contains the story of Adam and the beginning of humanity." },
  { id: 8, number: 8, nameArabic: "الأنفال", nameEnglish: "Al-Anfal", nameTransliteration: "The Spoils of War", revelationType: "MADANI", ayahCount: 75, juzStart: 9, juzEnd: 10, orderOfRevelation: 88, summary: "Discusses the Battle of Badr and rules regarding war booty and military conduct.", summaryHinglish: "Jang-e-Badr aur ghaneematon ke taqseem ke qanoon. Jung ki ethics par hidayat.", virtues: "Guidance on Islamic warfare ethics and conduct." },
  { id: 9, number: 9, nameArabic: "التوبة", nameEnglish: "At-Tawbah", nameTransliteration: "The Repentance", revelationType: "MADANI", ayahCount: 129, juzStart: 10, juzEnd: 11, orderOfRevelation: 113, summary: "The only surah without Bismillah, dealing with treaties with pagans and the expedition to Tabuk.", summaryHinglish: "Wahid Surah jisme Bismillah nahi hai. Mushrikeen se muahide aur Tabuk ki jang ka zikr.", virtues: "Contains the declaration of disassociation from the polytheists." },
  { id: 10, number: 10, nameArabic: "يونس", nameEnglish: "Yunus", nameTransliteration: "Jonah", revelationType: "MAKKI", ayahCount: 109, juzStart: 11, juzEnd: 11, orderOfRevelation: 51, summary: "Named after Prophet Jonah, it discusses God's signs and the consequences of rejecting prophets.", summaryHinglish: "Hazrat Yunus (AS) ke naam par. Allah ki nishaniyon aur anbiya ko thukrane ke natayij.", virtues: "Comfort for the Prophet Muhammad ﷺ in times of difficulty." },
  { id: 11, number: 11, nameArabic: "هود", nameEnglish: "Hud", nameTransliteration: "Hud", revelationType: "MAKKI", ayahCount: 123, juzStart: 11, juzEnd: 12, orderOfRevelation: 52, summary: "Stories of various prophets including Hud, Salih, Ibrahim, Lut, Shu'aib, and Musa.", summaryHinglish: "Hazrat Hud, Salih, Ibrahim, Lut, Shu'aib aur Musa (AS) ki kahaniyan.", virtues: "Emphasis on patience and steadfastness." },
  { id: 12, number: 12, nameArabic: "يوسف", nameEnglish: "Yusuf", nameTransliteration: "Joseph", revelationType: "MAKKI", ayahCount: 111, juzStart: 12, juzEnd: 13, orderOfRevelation: 53, summary: "The complete story of Prophet Joseph, from his childhood dreams to becoming a minister in Egypt.", summaryHinglish: "Hazrat Yusuf (AS) ki mukammal kahani - bachpan ke khwabon se lekar Misr ke wazir tak.", virtues: "The most beautiful story in the Quran. Teaches patience, forgiveness, and trust in Allah." },
  { id: 13, number: 13, nameArabic: "الرعد", nameEnglish: "Ar-Ra'd", nameTransliteration: "The Thunder", revelationType: "MADANI", ayahCount: 43, juzStart: 13, juzEnd: 13, orderOfRevelation: 96, summary: "Discusses the signs of Allah in nature and the Quran's miraculous nature.", summaryHinglish: "Fitrat mein Allah ki nishaniyan aur Quran ki mu'jizati haqeeqat.", virtues: "Affirmation that Allah guides whom He wills to the straight path." },
  { id: 14, number: 14, nameArabic: "إبراهيم", nameEnglish: "Ibrahim", nameTransliteration: "Abraham", revelationType: "MAKKI", ayahCount: 52, juzStart: 13, juzEnd: 13, orderOfRevelation: 72, summary: "Focuses on Prophet Ibrahim's mission and his prayer for his descendants.", summaryHinglish: "Hazrat Ibrahim (AS) ke mission aur unki aulad ke liye ki gayi dua par focus.", virtues: "Contains the beautiful dua of Prophet Ibrahim for Makkah and its people." },
  { id: 15, number: 15, nameArabic: "الحجر", nameEnglish: "Al-Hijr", nameTransliteration: "The Rocky Tract", revelationType: "MAKKI", ayahCount: 99, juzStart: 14, juzEnd: 14, orderOfRevelation: 54, summary: "Stories of previous nations who rejected their prophets and the protection of the Quran.", summaryHinglish: "Pehle qaumon ki kahaniyan jinhon ne anbiya ko thukraya aur Quran ki hifazat ka waada.", virtues: "Allah's promise to preserve the Quran." },
  { id: 16, number: 16, nameArabic: "النحل", nameEnglish: "An-Nahl", nameTransliteration: "The Bee", revelationType: "MAKKI", ayahCount: 128, juzStart: 14, juzEnd: 15, orderOfRevelation: 70, summary: "Highlights Allah's blessings and the natural world as signs of His existence.", summaryHinglish: "Allah ki nematon aur fitrat ko uski maujoodgi ki nishani ke taur par dikhati hai.", virtues: "Comprehensive description of Allah's blessings upon humanity." },
  { id: 17, number: 17, nameArabic: "الإسراء", nameEnglish: "Al-Isra", nameTransliteration: "The Night Journey", revelationType: "MAKKI", ayahCount: 111, juzStart: 15, juzEnd: 15, orderOfRevelation: 50, summary: "Covers the miraculous night journey of Prophet Muhammad ﷺ and moral teachings.", summaryHinglish: "Huzoor ﷺ ka maujizati Shab-e-Me'raj aur ikhlaqi ta'aleemat.", virtues: "Contains the beautiful moral teachings: 'And do not walk upon the earth exultantly.'" },
  { id: 18, number: 18, nameArabic: "الكهف", nameEnglish: "Al-Kahf", nameTransliteration: "The Cave", revelationType: "MAKKI", ayahCount: 110, juzStart: 15, juzEnd: 16, orderOfRevelation: 69, summary: "Contains four stories: the People of the Cave, the owner of two gardens, Musa and Khidr, and Dhul-Qarnayn.", summaryHinglish: "Chaar kahaniyan: Ashab-e-Kahf, do baghon ka maalik, Musa aur Khidr, aur Zulqarnain.", virtues: "Protection from the Dajjal. Recommended to recite every Friday." },
  { id: 19, number: 19, nameArabic: "مريم", nameEnglish: "Maryam", nameTransliteration: "Mary", revelationType: "MAKKI", ayahCount: 98, juzStart: 16, juzEnd: 16, orderOfRevelation: 44, summary: "Focuses on the story of Maryam (Mary) and the birth of Prophet Isa (Jesus).", summaryHinglish: "Hazrat Maryam (AS) ki kahani aur Hazrat Isa (AS) ki paidaish par focus.", virtues: "Highlights the honor of Maryam and the miraculous birth of Isa (AS)." },
  { id: 20, number: 20, nameArabic: "طه", nameEnglish: "Ta-Ha", nameTransliteration: "Ta-Ha", revelationType: "MAKKI", ayahCount: 135, juzStart: 16, juzEnd: 17, orderOfRevelation: 45, summary: "The story of Prophet Musa (Moses) in detail, from his birth to the Exodus.", summaryHinglish: "Hazrat Musa (AS) ki mukammal kahani - paidaish se lekar Banu Israel ki nikal tak.", virtues: "The surah that caused Umar ibn Al-Khattab to accept Islam." },
  { id: 21, number: 21, nameArabic: "الأنبياء", nameEnglish: "Al-Anbiya", nameTransliteration: "The Prophets", revelationType: "MAKKI", ayahCount: 112, juzStart: 17, juzEnd: 17, orderOfRevelation: 73, summary: "Stories of various prophets and the unity of their message.", summaryHinglish: "Mukhtalif anbiya ki kahaniyan aur unke paigham ki wahdat.", virtues: "Emphasizes that all prophets brought the same message of Tawhid." },
  { id: 22, number: 22, nameArabic: "الحج", nameEnglish: "Al-Hajj", nameTransliteration: "The Pilgrimage", revelationType: "MADANI", ayahCount: 78, juzStart: 17, juzEnd: 18, orderOfRevelation: 103, summary: "Covers the rituals of Hajj and the unity of Muslims in worship.", summaryHinglish: "Hajj ke manasik aur Muslim ummah ki ibadat mein wahdat.", virtues: "Comprehensive guidance on the pilgrimage to Makkah." },
  { id: 23, number: 23, nameArabic: "المؤمنون", nameEnglish: "Al-Mu'minun", nameTransliteration: "The Believers", revelationType: "MAKKI", ayahCount: 118, juzStart: 18, juzEnd: 18, orderOfRevelation: 74, summary: "Describes the qualities of successful believers and the stages of human creation.", summaryHinglish: "Kamyab momineen ki sifaat aur insaan ki takhleeq ke marahil.", virtues: "Beautiful description of the characteristics of true believers." },
  { id: 24, number: 24, nameArabic: "النور", nameEnglish: "An-Nur", nameTransliteration: "The Light", revelationType: "MADANI", ayahCount: 64, juzStart: 18, juzEnd: 18, orderOfRevelation: 102, summary: "Contains laws of modesty, the verse of Light, and social conduct guidelines.", summaryHinglish: "Haya ke qanoon, Ayat-un-Noor, aur social conduct ki hidayat.", virtues: "Contains the famous Ayat an-Nur describing Allah's light." },
  { id: 25, number: 25, nameArabic: "الفرقان", nameEnglish: "Al-Furqan", nameTransliteration: "The Criterion", revelationType: "MAKKI", ayahCount: 77, juzStart: 18, juzEnd: 19, orderOfRevelation: 42, summary: "Differentiates between truth and falsehood, describing the qualities of true servants.", summaryHinglish: "Haqq aur batil mein farq, sachche bandon ki sifaat ka bayan.", virtues: "Describes the beautiful qualities of the true servants of Allah." },
  { id: 26, number: 26, nameArabic: "الشعراء", nameEnglish: "Ash-Shu'ara", nameTransliteration: "The Poets", revelationType: "MAKKI", ayahCount: 227, juzStart: 19, juzEnd: 19, orderOfRevelation: 47, summary: "Stories of prophets including Musa, Ibrahim, Nuh, Hud, Salih, and Lut.", summaryHinglish: "Musa, Ibrahim, Nuh, Hud, Salih aur Lut (AS) ki kahaniyan.", virtues: "Emphasizes that the Quran is not poetry but divine revelation." },
  { id: 27, number: 27, nameArabic: "النمل", nameEnglish: "An-Naml", nameTransliteration: "The Ant", revelationType: "MAKKI", ayahCount: 93, juzStart: 19, juzEnd: 20, orderOfRevelation: 48, summary: "Stories of Prophet Sulaiman and the Queen of Sheba, and the conversation of the ant.", summaryHinglish: "Hazrat Sulaiman (AS) aur Saba ki malika ki kahani, chinti ki guftagu.", virtues: "Contains the letter of Prophet Sulaiman to the Queen of Sheba." },
  { id: 28, number: 28, nameArabic: "القصص", nameEnglish: "Al-Qasas", nameTransliteration: "The Stories", revelationType: "MAKKI", ayahCount: 88, juzStart: 20, juzEnd: 20, orderOfRevelation: 49, summary: "Detailed story of Prophet Musa, his upbringing in Pharaoh's palace, and his mission.", summaryHinglish: "Hazrat Musa (AS) ki tafseeli kahani - Firon ke mahal mein parwarish se lekar unke mission tak.", virtues: "Comprehensive narrative of the life of Prophet Musa." },
  { id: 29, number: 29, nameArabic: "العنكبوت", nameEnglish: "Al-Ankabut", nameTransliteration: "The Spider", revelationType: "MAKKI", ayahCount: 69, juzStart: 20, juzEnd: 21, orderOfRevelation: 85, summary: "Tests of faith and the parable of the spider's house.", summaryHinglish: "Imaan ki aazmaishen aur makdi ke ghar ki misaal.", virtues: "Encourages patience and steadfastness in the face of trials." },
  { id: 30, number: 30, nameArabic: "الروم", nameEnglish: "Ar-Rum", nameTransliteration: "The Romans", revelationType: "MAKKI", ayahCount: 60, juzStart: 21, juzEnd: 21, orderOfRevelation: 84, summary: "Discusses the defeat and future victory of the Romans, and signs of Allah's power.", summaryHinglish: "Rumiyon ki shikast aur mustaqbil ki fatah, Allah ki qudrat ki nishaniyan.", virtues: "Prophecy of the Roman victory against Persia." },
  { id: 31, number: 31, nameArabic: "لقمان", nameEnglish: "Luqman", nameTransliteration: "Luqman", revelationType: "MAKKI", ayahCount: 34, juzStart: 21, juzEnd: 21, orderOfRevelation: 57, summary: "Wisdom of Luqman and his advice to his son.", summaryHinglish: "Hazrat Luqman ki hikmat aur apne bete ko di gayi nasihat.", virtues: "Beautiful advice from Luqman to his son about faith and morality." },
  { id: 32, number: 32, nameArabic: "السجدة", nameEnglish: "As-Sajda", nameTransliteration: "The Prostration", revelationType: "MAKKI", ayahCount: 30, juzStart: 21, juzEnd: 21, orderOfRevelation: 75, summary: "The glory of Allah and the prostration of all creation before Him.", summaryHinglish: "Allah ki azmat aur tamam khalq ka uske saamne sajda.", virtues: "Encourages prostration and recognition of Allah's greatness." },
  { id: 33, number: 33, nameArabic: "الأحزاب", nameEnglish: "Al-Ahzab", nameTransliteration: "The Combined Forces", revelationType: "MADANI", ayahCount: 73, juzStart: 21, juzEnd: 22, orderOfRevelation: 90, summary: "The Battle of the Trench and rules regarding the Prophet's household.", summaryHinglish: "Jang-e-Khandaq aur Huzoor ﷺ ke gharane ke qanoon.", virtues: "Contains the verse of hijab and rules for the Prophet's wives." },
  { id: 34, number: 34, nameArabic: "سبأ", nameEnglish: "Saba", nameTransliteration: "Sheba", revelationType: "MAKKI", ayahCount: 54, juzStart: 22, juzEnd: 22, orderOfRevelation: 58, summary: "The people of Sheba and the consequences of rejecting Allah's blessings.", summaryHinglish: "Saba ki qaum aur Allah ki nematon ko thukrane ke natayij.", virtues: "Lesson on gratitude and the consequences of disbelief." },
  { id: 35, number: 35, nameArabic: "فاطر", nameEnglish: "Fatir", nameTransliteration: "The Originator", revelationType: "MAKKI", ayahCount: 45, juzStart: 22, juzEnd: 22, orderOfRevelation: 43, summary: "Allah as the Creator and Sustainer of all things.", summaryHinglish: "Allah ko tamam cheezon ka Khaliq aur Parwarish karne wala batati hai.", virtues: "Emphasizes Allah's creative power and sustenance." },
  { id: 36, number: 36, nameArabic: "يس", nameEnglish: "Ya-Sin", nameTransliteration: "Ya Sin", revelationType: "MAKKI", ayahCount: 83, juzStart: 22, juzEnd: 23, orderOfRevelation: 41, summary: "Known as the heart of the Quran, it emphasizes resurrection, God's power, and the truth of revelation.", summaryHinglish: "Quran ka dil kehlati hai. Qayamat, Allah ki qudrat aur wahi ki haqeeqat par zor.", virtues: "Known as the heart of the Quran. Recited for the deceased and for blessings." },
  { id: 37, number: 37, nameArabic: "الصافات", nameEnglish: "As-Saffat", nameTransliteration: "Those Who Set The Ranks", revelationType: "MAKKI", ayahCount: 182, juzStart: 23, juzEnd: 23, orderOfRevelation: 56, summary: "The angels in rows and stories of various prophets.", summaryHinglish: "Safon mein khade farishte aur mukhtalif anbiya ki kahaniyan.", virtues: "Contains the story of Ibrahim and his willingness to sacrifice his son." },
  { id: 38, number: 38, nameArabic: "ص", nameEnglish: "Sad", nameTransliteration: "Sad", revelationType: "MAKKI", ayahCount: 88, juzStart: 23, juzEnd: 23, orderOfRevelation: 38, summary: "The story of Prophet Dawud and Sulaiman, and the test of patience.", summaryHinglish: "Hazrat Dawud aur Sulaiman (AS) ki kahani, sabr ki aazmaish.", virtues: "Lessons on patience and repentance from the stories of Dawud and Sulaiman." },
  { id: 39, number: 39, nameArabic: "الزمر", nameEnglish: "Az-Zumar", nameTransliteration: "The Troops", revelationType: "MAKKI", ayahCount: 75, juzStart: 23, juzEnd: 24, orderOfRevelation: 59, summary: "The groups of believers and disbelievers on the Day of Judgment.", summaryHinglish: "Qayamat ke din momineen aur kafiron ke jhund.", virtues: "Encourages turning to Allah in repentance." },
  { id: 40, number: 40, nameArabic: "غافر", nameEnglish: "Ghafir", nameTransliteration: "The Forgiver", revelationType: "MAKKI", ayahCount: 85, juzStart: 24, juzEnd: 24, orderOfRevelation: 60, summary: "The story of Musa and Pharaoh, and Allah's forgiveness.", summaryHinglish: "Musa aur Firon ki kahani, Allah ki maghfirat.", virtues: "Emphasizes Allah's forgiveness and mercy." },
  { id: 41, number: 41, nameArabic: "فصلت", nameEnglish: "Fussilat", nameTransliteration: "Explained in Detail", revelationType: "MAKKI", ayahCount: 54, juzStart: 24, juzEnd: 25, orderOfRevelation: 61, summary: "The detailed explanation of the Quran and the consequences of rejection.", summaryHinglish: "Quran ki tafseeli wazahat aur inkar ke natayij.", virtues: "Emphasizes the clarity and detailed nature of the Quran." },
  { id: 42, number: 42, nameArabic: "الشورى", nameEnglish: "Ash-Shura", nameTransliteration: "The Consultation", revelationType: "MAKKI", ayahCount: 53, juzStart: 25, juzEnd: 25, orderOfRevelation: 62, summary: "The importance of consultation and the unity of the message of all prophets.", summaryHinglish: "Mashwara ki ahmiyat aur tamam anbiya ke paigham ki wahdat.", virtues: "Emphasizes the importance of consultation in decision-making." },
  { id: 43, number: 43, nameArabic: "الزخرف", nameEnglish: "Az-Zukhruf", nameTransliteration: "The Ornaments of Gold", revelationType: "MAKKI", ayahCount: 89, juzStart: 25, juzEnd: 25, orderOfRevelation: 63, summary: "The love of worldly ornaments and the true value of the Quran.", summaryHinglish: "Duniyawi zevarat ki mohabbat aur Quran ki asli qadar.", virtues: "Warns against attachment to worldly luxuries." },
  { id: 44, number: 44, nameArabic: "الدخان", nameEnglish: "Ad-Dukhan", nameTransliteration: "The Smoke", revelationType: "MAKKI", ayahCount: 59, juzStart: 25, juzEnd: 25, orderOfRevelation: 64, summary: "The smoke that will appear before the Day of Judgment.", summaryHinglish: "Qayamat se pehle zahir hone wala dhuwan.", virtues: "Warning about the coming Day of Judgment." },
  { id: 45, number: 45, nameArabic: "الجاثية", nameEnglish: "Al-Jathiya", nameTransliteration: "The Crouching", revelationType: "MAKKI", ayahCount: 37, juzStart: 25, juzEnd: 25, orderOfRevelation: 65, summary: "The nations kneeling on the Day of Judgment.", summaryHinglish: "Qayamat ke din ghutnon ke bal baithi hui qaumain.", virtues: "Emphasizes accountability on the Day of Judgment." },
  { id: 46, number: 46, nameArabic: "الأحقاف", nameEnglish: "Al-Ahqaf", nameTransliteration: "The Wind-Curved Sandhills", revelationType: "MAKKI", ayahCount: 35, juzStart: 26, juzEnd: 26, orderOfRevelation: 66, summary: "The story of Prophet Hud and the people of Ad.", summaryHinglish: "Hazrat Hud (AS) aur Aad ki qaum ki kahani.", virtues: "Emphasizes the importance of following the prophets." },
  { id: 47, number: 47, nameArabic: "محمد", nameEnglish: "Muhammad", nameTransliteration: "Muhammad", revelationType: "MADANI", ayahCount: 38, juzStart: 26, juzEnd: 26, orderOfRevelation: 95, summary: "The role of Prophet Muhammad ﷺ and the rewards for believers.", summaryHinglish: "Huzoor ﷺ ka kirdar aur momineen ke liye ajar.", virtues: "Describes the blessings of following the Prophet Muhammad ﷺ." },
  { id: 48, number: 48, nameArabic: "الفتح", nameEnglish: "Al-Fath", nameTransliteration: "The Victory", revelationType: "MADANI", ayahCount: 29, juzStart: 26, juzEnd: 26, orderOfRevelation: 111, summary: "The victory of the Treaty of Hudaybiyyah and future conquests.", summaryHinglish: "Sulah Hudaibiya ki fatah aur mustaqbil ki fatahin.", virtues: "Promise of victory and the opening of Makkah." },
  { id: 49, number: 49, nameArabic: "الحجرات", nameEnglish: "Al-Hujurat", nameTransliteration: "The Rooms", revelationType: "MADANI", ayahCount: 18, juzStart: 26, juzEnd: 26, orderOfRevelation: 106, summary: "Etiquette of interaction with the Prophet and among Muslims.", summaryHinglish: "Huzoor ﷺ aur Muslimon ke darmiyan muamlaat ki adab.", virtues: "Comprehensive guidance on social etiquette in Islam." },
  { id: 50, number: 50, nameArabic: "ق", nameEnglish: "Qaf", nameTransliteration: "Qaf", revelationType: "MAKKI", ayahCount: 45, juzStart: 26, juzEnd: 26, orderOfRevelation: 34, summary: "The resurrection and the reality of the Hereafter.", summaryHinglish: "Qayamat aur aakhirat ki haqeeqat.", virtues: "Emphasizes the certainty of resurrection." },
  { id: 51, number: 51, nameArabic: "الذاريات", nameEnglish: "Adh-Dhariyat", nameTransliteration: "The Winnowing Winds", revelationType: "MAKKI", ayahCount: 60, juzStart: 26, juzEnd: 27, orderOfRevelation: 67, summary: "The scattering winds and the promise of the Hereafter.", summaryHinglish: "Bikherne wali hawaain aur aakhirat ka waada.", virtues: "Emphasizes the power of Allah in nature." },
  { id: 52, number: 52, nameArabic: "الطور", nameEnglish: "At-Tur", nameTransliteration: "The Mount", revelationType: "MAKKI", ayahCount: 49, juzStart: 27, juzEnd: 27, orderOfRevelation: 76, summary: "The Mount Sinai and the truth of the Quran.", summaryHinglish: "Koh-e-Toor aur Quran ki haqeeqat.", virtues: "Emphasizes the divine origin of the Quran." },
  { id: 53, number: 53, nameArabic: "النجم", nameEnglish: "An-Najm", nameTransliteration: "The Star", revelationType: "MAKKI", ayahCount: 62, juzStart: 27, juzEnd: 27, orderOfRevelation: 23, summary: "The star and the Prophet's journey during the Mi'raj.", summaryHinglish: "Sitara aur Huzoor ﷺ ka Me'raj ka safar.", virtues: "Contains the famous sajda of the Prophet during recitation." },
  { id: 54, number: 54, nameArabic: "القمر", nameEnglish: "Al-Qamar", nameTransliteration: "The Moon", revelationType: "MAKKI", ayahCount: 55, juzStart: 27, juzEnd: 27, orderOfRevelation: 37, summary: "The splitting of the moon and stories of previous nations.", summaryHinglish: "Chand ka shaqq hona aur pehli qaumon ki kahaniyan.", virtues: "Mentions the miracle of the splitting of the moon." },
  { id: 55, number: 55, nameArabic: "الرحمن", nameEnglish: "Ar-Rahman", nameTransliteration: "The Beneficent", revelationType: "MADANI", ayahCount: 78, juzStart: 27, juzEnd: 27, orderOfRevelation: 97, summary: "Highlights God's blessings and repeatedly asks 'Which of the favors of your Lord will you deny?'", summaryHinglish: "Allah ki nematon ko zahir karti hai aur bar bar poochti hai 'Tum apne Rab ki kaun si nemat ko jhuthlaoge?'", virtues: "The surah of divine blessings. Teaches gratitude and recognition of Allah's favors." },
  { id: 56, number: 56, nameArabic: "الواقعة", nameEnglish: "Al-Waqi'a", nameTransliteration: "The Inevitable", revelationType: "MAKKI", ayahCount: 96, juzStart: 27, juzEnd: 27, orderOfRevelation: 46, summary: "The Day of Resurrection and the three groups of people.", summaryHinglish: "Qayamat ka din aur teen qism ke log - saabiqoon, ashaab al-yameen, aur ashaab al-shimal.", virtues: "Detailed description of Paradise and Hell." },
  { id: 57, number: 57, nameArabic: "الحديد", nameEnglish: "Al-Hadid", nameTransliteration: "The Iron", revelationType: "MADANI", ayahCount: 29, juzStart: 27, juzEnd: 27, orderOfRevelation: 94, summary: "The glory of Allah and the importance of charity and spending in His cause.", summaryHinglish: "Allah ki azmat aur uski raah mein kharch karne ki ahmiyat.", virtues: "Encourages spending in the way of Allah." },
  { id: 58, number: 58, nameArabic: "المجادلة", nameEnglish: "Al-Mujadila", nameTransliteration: "The Pleading Woman", revelationType: "MADANI", ayahCount: 22, juzStart: 28, juzEnd: 28, orderOfRevelation: 105, summary: "The story of the woman who pleaded with the Prophet about her husband.", summaryHinglish: "Woh aurat jo apne shohar ke baare mein Huzoor ﷺ se guzarish ki thi.", virtues: "Contains the ruling on zihar and private conversations." },
  { id: 59, number: 59, nameArabic: "الحشر", nameEnglish: "Al-Hashr", nameTransliteration: "The Exile", revelationType: "MADANI", ayahCount: 24, juzStart: 28, juzEnd: 28, orderOfRevelation: 101, summary: "The exile of the Jewish tribe of Banu Nadir and the attributes of Allah.", summaryHinglish: "Banu Nadir ki jila-watani aur Allah ki sifaat.", virtues: "Contains the beautiful names of Allah." },
  { id: 60, number: 60, nameArabic: "الممتحنة", nameEnglish: "Al-Mumtahanah", nameTransliteration: "She That Is To Be Examined", revelationType: "MADANI", ayahCount: 13, juzStart: 28, juzEnd: 28, orderOfRevelation: 91, summary: "Rules regarding believing women who migrate and relations with non-believers.", summaryHinglish: "Hijrat karne wali momina aurton ke qanoon aur kafiron se ta'alluqat.", virtues: "Guidance on maintaining relations with non-Muslims." },
  { id: 61, number: 61, nameArabic: "الصف", nameEnglish: "As-Saff", nameTransliteration: "The Ranks", revelationType: "MADANI", ayahCount: 14, juzStart: 28, juzEnd: 28, orderOfRevelation: 109, summary: "The importance of unity among Muslims and the mission of Prophet Isa.", summaryHinglish: "Muslim ummah mein ittehad ki ahmiyat aur Hazrat Isa (AS) ka mission.", virtues: "Encourages unity and steadfastness in the cause of Allah." },
  { id: 62, number: 62, nameArabic: "الجمعة", nameEnglish: "Al-Jumu'ah", nameTransliteration: "The Congregation", revelationType: "MADANI", ayahCount: 11, juzStart: 28, juzEnd: 28, orderOfRevelation: 110, summary: "The importance of Friday prayer and the teachings of the Quran.", summaryHinglish: "Jumu'ah ki namaz ki ahmiyat aur Quran ki ta'aleemat.", virtues: "Emphasizes the importance of Friday congregational prayer." },
  { id: 63, number: 63, nameArabic: "المنافقون", nameEnglish: "Al-Munafiqun", nameTransliteration: "The Hypocrites", revelationType: "MADANI", ayahCount: 11, juzStart: 28, juzEnd: 28, orderOfRevelation: 104, summary: "The characteristics of hypocrites and their deception.", summaryHinglish: "Munafiqon ki sifaat aur unka dhoka.", virtues: "Warning against hypocrisy and dishonesty." },
  { id: 64, number: 64, nameArabic: "التغابن", nameEnglish: "At-Taghabun", nameTransliteration: "The Mutual Loss", revelationType: "MADANI", ayahCount: 18, juzStart: 28, juzEnd: 28, orderOfRevelation: 108, summary: "The Day of Judgment when people will realize their losses.", summaryHinglish: "Qayamat ka din jab log apne nuqsan ka ehsaas karenge.", virtues: "Encourages faith and good deeds to avoid loss on the Day of Judgment." },
  { id: 65, number: 65, nameArabic: "الطلاق", nameEnglish: "At-Talaq", nameTransliteration: "The Divorce", revelationType: "MADANI", ayahCount: 12, juzStart: 28, juzEnd: 28, orderOfRevelation: 99, summary: "Rules regarding divorce and its procedures.", summaryHinglish: "Talaq ke qanoon aur uske tareeqe.", virtues: "Comprehensive guidance on Islamic divorce procedures." },
  { id: 66, number: 66, nameArabic: "التحريم", nameEnglish: "At-Tahrim", nameTransliteration: "The Prohibition", revelationType: "MADANI", ayahCount: 12, juzStart: 28, juzEnd: 28, orderOfRevelation: 107, summary: "Rules regarding prohibitions and the wives of the Prophet.", summaryHinglish: "Mamnu'at ke qanoon aur Huzoor ﷺ ki azwaj.", virtues: "Guidance on maintaining proper conduct." },
  { id: 67, number: 67, nameArabic: "الملك", nameEnglish: "Al-Mulk", nameTransliteration: "The Sovereignty", revelationType: "MAKKI", ayahCount: 30, juzStart: 29, juzEnd: 29, orderOfRevelation: 77, summary: "Emphasizes God's sovereignty over all things and serves as protection from the punishment of the grave.", summaryHinglish: "Allah ki har cheez par badshahat aur qabar ke azaab se bachao.", virtues: "Protection from the punishment of the grave. Intercedes for the one who recites it." },
  { id: 68, number: 68, nameArabic: "القلم", nameEnglish: "Al-Qalam", nameTransliteration: "The Pen", revelationType: "MAKKI", ayahCount: 52, juzStart: 29, juzEnd: 29, orderOfRevelation: 2, summary: "The oath by the pen and the character of the Prophet Muhammad ﷺ.", summaryHinglish: "Qalam ki qasam aur Huzoor ﷺ ka akhlaq.", virtues: "Defends the noble character of the Prophet Muhammad ﷺ." },
  { id: 69, number: 69, nameArabic: "الحاقة", nameEnglish: "Al-Haqqah", nameTransliteration: "The Reality", revelationType: "MAKKI", ayahCount: 52, juzStart: 29, juzEnd: 29, orderOfRevelation: 78, summary: "The inevitable reality of the Day of Judgment.", summaryHinglish: "Qayamat ki na-guzeer haqeeqat.", virtues: "Vivid description of the Day of Resurrection." },
  { id: 70, number: 70, nameArabic: "المعارج", nameEnglish: "Al-Ma'arij", nameTransliteration: "The Ascending Stairways", revelationType: "MAKKI", ayahCount: 44, juzStart: 29, juzEnd: 29, orderOfRevelation: 79, summary: "The angels ascending to Allah and the characteristics of the believers.", summaryHinglish: "Farishton ka Allah ki taraf chadna aur momineen ki sifaat.", virtues: "Describes the patience and prayerfulness of believers." },
  { id: 71, number: 71, nameArabic: "نوح", nameEnglish: "Nuh", nameTransliteration: "Noah", revelationType: "MAKKI", ayahCount: 28, juzStart: 29, juzEnd: 29, orderOfRevelation: 71, summary: "The story of Prophet Nuh and his call to his people for 950 years.", summaryHinglish: "Hazrat Nuh (AS) ki kahani aur 950 saal tak apni qaum ko dawat dena.", virtues: "The dua of Nuh for his son and its response from Allah." },
  { id: 72, number: 72, nameArabic: "الجن", nameEnglish: "Al-Jinn", nameTransliteration: "The Jinn", revelationType: "MAKKI", ayahCount: 28, juzStart: 29, juzEnd: 29, orderOfRevelation: 40, summary: "The jinn listening to the Quran and their acceptance of Islam.", summaryHinglish: "Jinnaat ka Quran sunna aur Islam qubool karna.", virtues: "Shows that the message of Islam is for both humans and jinn." },
  { id: 73, number: 73, nameArabic: "المزمل", nameEnglish: "Al-Muzzammil", nameTransliteration: "The Enshrouded One", revelationType: "MAKKI", ayahCount: 20, juzStart: 29, juzEnd: 29, orderOfRevelation: 3, summary: "The command to the Prophet to stand in prayer at night.", summaryHinglish: "Huzoor ﷺ ko raat ko qiyam karne ka hukm.", virtues: "Encourages night prayer and recitation of the Quran." },
  { id: 74, number: 74, nameArabic: "المدثر", nameEnglish: "Al-Muddathir", nameTransliteration: "The Cloaked One", revelationType: "MAKKI", ayahCount: 56, juzStart: 29, juzEnd: 29, orderOfRevelation: 4, summary: "The command to the Prophet to arise and warn the people.", summaryHinglish: "Huzoor ﷺ ko uthne aur logon ko darane ka hukm.", virtues: "The beginning of the Prophet's public mission." },
  { id: 75, number: 75, nameArabic: "القيامة", nameEnglish: "Al-Qiyamah", nameTransliteration: "The Resurrection", revelationType: "MAKKI", ayahCount: 40, juzStart: 29, juzEnd: 29, orderOfRevelation: 31, summary: "The certainty of resurrection and the questioning of the dead.", summaryHinglish: "Qayamat ki yaqeeniyat aur murdon se sawal jawab.", virtues: "Emphasizes the reality of the Hereafter." },
  { id: 76, number: 76, nameArabic: "الإنسان", nameEnglish: "Al-Insan", nameTransliteration: "The Human", revelationType: "MADANI", ayahCount: 31, juzStart: 29, juzEnd: 29, orderOfRevelation: 98, summary: "The creation of humans and the rewards for the righteous.", summaryHinglish: "Insaan ki takhleeq aur neik bandon ke ajar.", virtues: "Describes the beautiful rewards in Paradise for the righteous." },
  { id: 77, number: 77, nameArabic: "المرسلات", nameEnglish: "Al-Mursalat", nameTransliteration: "Those Sent Forth", revelationType: "MAKKI", ayahCount: 50, juzStart: 29, juzEnd: 29, orderOfRevelation: 33, summary: "The angels sent forth with Allah's commands and the Day of Judgment.", summaryHinglish: "Allah ke hukm se rawana hone wale farishte aur Qayamat.", virtues: "Warning about the consequences of rejecting the message." },
  { id: 78, number: 78, nameArabic: "النبأ", nameEnglish: "An-Naba", nameTransliteration: "The Tidings", revelationType: "MAKKI", ayahCount: 40, juzStart: 30, juzEnd: 30, orderOfRevelation: 80, summary: "The great news of the Day of Resurrection.", summaryHinglish: "Qayamat ki bari khabar.", virtues: "Detailed description of the Day of Judgment and Paradise." },
  { id: 79, number: 79, nameArabic: "النازعات", nameEnglish: "An-Nazi'at", nameTransliteration: "Those Who Drag Forth", revelationType: "MAKKI", ayahCount: 46, juzStart: 30, juzEnd: 30, orderOfRevelation: 81, summary: "The angels who drag forth the souls at death.", summaryHinglish: "Maut ke waqt roohon ko khenchne wale farishte.", virtues: "Vivid description of the events at death and resurrection." },
  { id: 80, number: 80, nameArabic: "عبس", nameEnglish: "Abasa", nameTransliteration: "He Frowned", revelationType: "MAKKI", ayahCount: 42, juzStart: 30, juzEnd: 30, orderOfRevelation: 24, summary: "The incident of the Prophet frowning at the blind man.", summaryHinglish: "Huzoor ﷺ ke andhe aadmi se mu nak churane ka waqia.", virtues: "Lesson on treating all people with respect regardless of status." },
  { id: 81, number: 81, nameArabic: "التكوير", nameEnglish: "At-Takwir", nameTransliteration: "The Overthrowing", revelationType: "MAKKI", ayahCount: 29, juzStart: 30, juzEnd: 30, orderOfRevelation: 7, summary: "The events of the Day of Judgment when the sun is wrapped up.", summaryHinglish: "Qayamat ke din ke waqiat jab sooraj lapet diya jayega.", virtues: "Vivid imagery of the end times." },
  { id: 82, number: 82, nameArabic: "الإنفطار", nameEnglish: "Al-Infitar", nameTransliteration: "The Cleaving", revelationType: "MAKKI", ayahCount: 19, juzStart: 30, juzEnd: 30, orderOfRevelation: 82, summary: "The splitting of the sky and the events of the Day of Judgment.", summaryHinglish: "Aasman ka phatna aur Qayamat ke din ke waqiat.", virtues: "Warning about the accountability on the Day of Judgment." },
  { id: 83, number: 83, nameArabic: "المطففين", nameEnglish: "Al-Mutaffifin", nameTransliteration: "The Defrauders", revelationType: "MAKKI", ayahCount: 36, juzStart: 30, juzEnd: 30, orderOfRevelation: 86, summary: "The punishment for those who cheat in measurements.", summaryHinglish: "Taul mein kameeni karne walon ki saza.", virtues: "Warning against dishonest business practices." },
  { id: 84, number: 84, nameArabic: "الإنشقاق", nameEnglish: "Al-Inshiqaq", nameTransliteration: "The Splitting Open", revelationType: "MAKKI", ayahCount: 25, juzStart: 30, juzEnd: 30, orderOfRevelation: 83, summary: "The splitting of the sky and the resurrection of people.", summaryHinglish: "Aasman ka phatna aur logon ka dobara zinda hona.", virtues: "Description of the varying states of people on the Day of Judgment." },
  { id: 85, number: 85, nameArabic: "البروج", nameEnglish: "Al-Buruj", nameTransliteration: "The Mansions of the Stars", revelationType: "MAKKI", ayahCount: 22, juzStart: 30, juzEnd: 30, orderOfRevelation: 27, summary: "The story of the People of the Ditch who were burned for their faith.", summaryHinglish: "Ghaaron waali qaum ki kahani jinko apne imaan par jalaya gaya.", virtues: "Comfort for those persecuted for their faith." },
  { id: 86, number: 86, nameArabic: "الطارق", nameEnglish: "At-Tariq", nameTransliteration: "The Nightcomer", revelationType: "MAKKI", ayahCount: 17, juzStart: 30, juzEnd: 30, orderOfRevelation: 36, summary: "The oath by the nightcomer and the creation of humans.", summaryHinglish: "Raat ko aane wale ki qasam aur insaan ki takhleeq.", virtues: "Emphasizes the power of Allah in creation." },
  { id: 87, number: 87, nameArabic: "الأعلى", nameEnglish: "Al-A'la", nameTransliteration: "The Most High", revelationType: "MAKKI", ayahCount: 19, juzStart: 30, juzEnd: 30, orderOfRevelation: 8, summary: "The glorification of Allah the Most High.", summaryHinglish: "Allah ki jo sab se buland hai uski tasbeeh.", virtues: "The Prophet's favorite surah for Jumu'ah prayer." },
  { id: 88, number: 88, nameArabic: "الغاشية", nameEnglish: "Al-Ghashiyah", nameTransliteration: "The Overwhelming", revelationType: "MAKKI", ayahCount: 26, juzStart: 30, juzEnd: 30, orderOfRevelation: 68, summary: "The overwhelming event of the Day of Judgment.", summaryHinglish: "Qayamat ka chha jane wala waqia.", virtues: "Description of the faces of the believers and disbelievers on that Day." },
  { id: 89, number: 89, nameArabic: "الفجر", nameEnglish: "Al-Fajr", nameTransliteration: "The Dawn", revelationType: "MAKKI", ayahCount: 30, juzStart: 30, juzEnd: 30, orderOfRevelation: 10, summary: "The oath by the dawn and the stories of destroyed nations.", summaryHinglish: "Fajr ki qasam aur tabah hui qaumon ki kahaniyan.", virtues: "Warning to those who oppress the weak." },
  { id: 90, number: 90, nameArabic: "البلد", nameEnglish: "Al-Balad", nameTransliteration: "The City", revelationType: "MAKKI", ayahCount: 20, juzStart: 30, juzEnd: 30, orderOfRevelation: 35, summary: "The oath by Makkah and the path of righteousness.", summaryHinglish: "Makkah ki qasam aur neki ka rasta.", virtues: "Defines the path of righteousness and the steep path." },
  { id: 91, number: 91, nameArabic: "الشمس", nameEnglish: "Ash-Shams", nameTransliteration: "The Sun", revelationType: "MAKKI", ayahCount: 15, juzStart: 30, juzEnd: 30, orderOfRevelation: 26, summary: "The oath by the sun and the story of the people of Thamud.", summaryHinglish: "Sooraj ki qasam aur Samood ki qaum ki kahani.", virtues: "Lesson on purifying the soul." },
  { id: 92, number: 92, nameArabic: "الليل", nameEnglish: "Al-Layl", nameTransliteration: "The Night", revelationType: "MAKKI", ayahCount: 21, juzStart: 30, juzEnd: 30, orderOfRevelation: 9, summary: "The oath by the night and the contrast between the generous and the miserly.", summaryHinglish: "Raat ki qasam aur sakhi aur kanjoos mein farq.", virtues: "Encourages spending in the way of Allah." },
  { id: 93, number: 93, nameArabic: "الضحى", nameEnglish: "Ad-Duha", nameTransliteration: "The Morning Hours", revelationType: "MAKKI", ayahCount: 11, juzStart: 30, juzEnd: 30, orderOfRevelation: 11, summary: "The oath by the morning hours and Allah's blessings upon the Prophet.", summaryHinglish: "Dopahar ki qasam aur Allah ki Huzoor ﷺ par nematen.", virtues: "Comfort for the Prophet and assurance of Allah's favor." },
  { id: 94, number: 94, nameArabic: "الشرح", nameEnglish: "Ash-Sharh", nameTransliteration: "The Relief", revelationType: "MAKKI", ayahCount: 8, juzStart: 30, juzEnd: 30, orderOfRevelation: 12, summary: "Allah's relief and opening after hardship.", summaryHinglish: "Mushkil ke baad Allah ki asaani aur khulna.", virtues: "Promise of ease after difficulty." },
  { id: 95, number: 95, nameArabic: "التين", nameEnglish: "At-Tin", nameTransliteration: "The Fig", revelationType: "MAKKI", ayahCount: 8, juzStart: 30, juzEnd: 30, orderOfRevelation: 28, summary: "The oath by the fig and olive and the creation of humans in the best form.", summaryHinglish: "Anjeer aur zaitoon ki qasam aur insaan ko behtareen surat mein paida karna.", virtues: "Emphasizes the honor of human creation." },
  { id: 96, number: 96, nameArabic: "العلق", nameEnglish: "Al-Alaq", nameTransliteration: "The Clot", revelationType: "MAKKI", ayahCount: 19, juzStart: 30, juzEnd: 30, orderOfRevelation: 1, summary: "The first revelation - 'Read in the name of your Lord who created.'", summaryHinglish: "Pehli wahi - 'Parh apne Rab ke naam se jisne paida kiya.'", virtues: "The first five verses revealed to the Prophet Muhammad ﷺ." },
  { id: 97, number: 97, nameArabic: "القدر", nameEnglish: "Al-Qadr", nameTransliteration: "The Power", revelationType: "MAKKI", ayahCount: 5, juzStart: 30, juzEnd: 30, orderOfRevelation: 25, summary: "The Night of Decree is better than a thousand months.", summaryHinglish: "Shab-e-Qadr hazaar mahine se behtar hai.", virtues: "The greatness of Laylatul Qadr and its blessings." },
  { id: 98, number: 98, nameArabic: "البينة", nameEnglish: "Al-Bayyinah", nameTransliteration: "The Clear Proof", revelationType: "MADANI", ayahCount: 8, juzStart: 30, juzEnd: 30, orderOfRevelation: 100, summary: "The clear proof that came with the Prophet Muhammad ﷺ.", summaryHinglish: "Huzoor ﷺ ke saath aaya hua wazeh saboot.", virtues: "Description of the true religion brought by the Prophet." },
  { id: 99, number: 99, nameArabic: "الزلزلة", nameEnglish: "Az-Zalzalah", nameTransliteration: "The Earthquake", revelationType: "MADANI", ayahCount: 8, juzStart: 30, juzEnd: 30, orderOfRevelation: 93, summary: "The earthquake of the Day of Judgment and the presentation of deeds.", summaryHinglish: "Qayamat ke din ka zalzala aur aamaal ka paish karna.", virtues: "Emphasizes that every deed, no matter how small, will be accounted for." },
  { id: 100, number: 100, nameArabic: "العاديات", nameEnglish: "Al-Adiyat", nameTransliteration: "The Courser", revelationType: "MAKKI", ayahCount: 11, juzStart: 30, juzEnd: 30, orderOfRevelation: 14, summary: "The oath by the charging horses and the ingratitude of humans.", summaryHinglish: "Daudne walon ki qasam aur insaan ki nashukri.", virtues: "Warning against love of wealth and ingratitude." },
  { id: 101, number: 101, nameArabic: "القارعة", nameEnglish: "Al-Qari'ah", nameTransliteration: "The Calamity", revelationType: "MAKKI", ayahCount: 11, juzStart: 30, juzEnd: 30, orderOfRevelation: 30, summary: "The striking calamity of the Day of Judgment.", summaryHinglish: "Qayamat ki chot dene wali museebat.", virtues: "Description of the weighing of deeds on that Day." },
  { id: 102, number: 102, nameArabic: "التكاثر", nameEnglish: "At-Takathur", nameTransliteration: "The Rivalry in World Increase", revelationType: "MAKKI", ayahCount: 8, juzStart: 30, juzEnd: 30, orderOfRevelation: 16, summary: "The competition in worldly increase distracts from the Hereafter.", summaryHinglish: "Duniya mein izafah ki daud aakhirat se ghafil kar deti hai.", virtues: "Warning against materialism and competition for worldly gains." },
  { id: 103, number: 103, nameArabic: "العصر", nameEnglish: "Al-Asr", nameTransliteration: "The Declining Day", revelationType: "MAKKI", ayahCount: 3, juzStart: 30, juzEnd: 30, orderOfRevelation: 13, summary: "By time, indeed mankind is in loss except those who believe and do good.", summaryHinglish: "Waqt ki qasam, beshak insaan nuqsan mein hai siwaey unke jo imaan laye aur neik amal kiye.", virtues: "A comprehensive formula for success in life." },
  { id: 104, number: 104, nameArabic: "الهمزة", nameEnglish: "Al-Humazah", nameTransliteration: "The Traducer", revelationType: "MAKKI", ayahCount: 9, juzStart: 30, juzEnd: 30, orderOfRevelation: 32, summary: "The punishment for those who slander and backbite.", summaryHinglish: "Chugli karne aur keech uchhal karne walon ki saza.", virtues: "Warning against the sins of the tongue." },
  { id: 105, number: 105, nameArabic: "الفيل", nameEnglish: "Al-Fil", nameTransliteration: "The Elephant", revelationType: "MAKKI", ayahCount: 5, juzStart: 30, juzEnd: 30, orderOfRevelation: 19, summary: "The story of the People of the Elephant who tried to destroy the Ka'bah.", summaryHinglish: "Hathi walon ki kahani jinhon ne Ka'bah tabah karne ki koshish ki.", virtues: "Allah's protection of the Ka'bah." },
  { id: 106, number: 106, nameArabic: "قريش", nameEnglish: "Quraysh", nameTransliteration: "Quraysh", revelationType: "MAKKI", ayahCount: 4, juzStart: 30, juzEnd: 30, orderOfRevelation: 29, summary: "The favors of Allah upon the Quraysh in their journeys.", summaryHinglish: "Quraysh par Allah ki nematen unke safaron mein.", virtues: "Encourages gratitude for Allah's protection and provision." },
  { id: 107, number: 107, nameArabic: "الماعون", nameEnglish: "Al-Ma'un", nameTransliteration: "The Small Kindnesses", revelationType: "MAKKI", ayahCount: 7, juzStart: 30, juzEnd: 30, orderOfRevelation: 17, summary: "The denial of small kindnesses and the hypocrisy in prayer.", summaryHinglish: "Chhoti chhoti nematon ko thukrana aur namaz mein riya.", virtues: "Warning against neglecting small acts of kindness." },
  { id: 108, number: 108, nameArabic: "الكوثر", nameEnglish: "Al-Kawthar", nameTransliteration: "The Abundance", revelationType: "MAKKI", ayahCount: 3, juzStart: 30, juzEnd: 30, orderOfRevelation: 15, summary: "Allah has granted the Prophet abundance and commanded prayer and sacrifice.", summaryHinglish: "Allah ne Huzoor ﷺ ko kasrat ata ki aur namaz aur qurbani ka hukm diya.", virtues: "The shortest surah with profound meaning." },
  { id: 109, number: 109, nameArabic: "الكافرون", nameEnglish: "Al-Kafirun", nameTransliteration: "The Disbelievers", revelationType: "MAKKI", ayahCount: 6, juzStart: 30, juzEnd: 30, orderOfRevelation: 18, summary: "The declaration of complete separation from the religion of the disbelievers.", summaryHinglish: "Kafiron ke deen se mukammal alag honay ka elaan.", virtues: "A clear declaration of religious independence." },
  { id: 110, number: 110, nameArabic: "النصر", nameEnglish: "An-Nasr", nameTransliteration: "The Divine Support", revelationType: "MADANI", ayahCount: 3, juzStart: 30, juzEnd: 30, orderOfRevelation: 114, summary: "The help of Allah and the conquest, and the command to seek forgiveness.", summaryHinglish: "Allah ki madad aur fatah, aur maghfirat talab karne ka hukm.", virtues: "The last complete surah revealed to the Prophet." },
  { id: 111, number: 111, nameArabic: "المسد", nameEnglish: "Al-Masad", nameTransliteration: "The Palm Fiber", revelationType: "MAKKI", ayahCount: 5, juzStart: 30, juzEnd: 30, orderOfRevelation: 6, summary: "The destruction of Abu Lahab and his wife for their opposition to Islam.", summaryHinglish: "Abu Lahab aur uski biwi ko Islam ki mukhalifat par tabahi.", virtues: "A prophecy that came true about the enemies of Islam." },
  { id: 112, number: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas", nameTransliteration: "The Sincerity", revelationType: "MAKKI", ayahCount: 4, juzStart: 30, juzEnd: 30, orderOfRevelation: 22, summary: "A profound declaration of God's oneness, equivalent to one-third of the Quran in reward.", summaryHinglish: "Allah ki wahdaniyat ka gehra elaan, Quran ke ek-tehayi ke barabar sawaab.", virtues: "Equivalent to one-third of the Quran. Purifies the heart from shirk." },
  { id: 113, number: 113, nameArabic: "الفلق", nameEnglish: "Al-Falaq", nameTransliteration: "The Daybreak", revelationType: "MAKKI", ayahCount: 5, juzStart: 30, juzEnd: 30, orderOfRevelation: 20, summary: "A prayer for protection from evil and harm, recited for seeking refuge in God.", summaryHinglish: "Buraai aur nuqsan se bachao ki dua, Allah ki panah maangne ke liye.", virtues: "Protection from evil eye, magic, and envy. One of the two surahs of seeking refuge." },
  { id: 114, number: 114, nameArabic: "الناس", nameEnglish: "An-Nas", nameTransliteration: "Mankind", revelationType: "MAKKI", ayahCount: 6, juzStart: 30, juzEnd: 30, orderOfRevelation: 21, summary: "A prayer for protection from the whispers of Satan and evil, seeking refuge in the Lord of mankind.", summaryHinglish: "Shaitan ke waswason aur buraai se bachao ki dua, insanon ke Rab ki panah maangna.", virtues: "Protection from the whispers of Shaytan and evil thoughts. Completes the Quran beautifully." }
];

// Complete Ayahs for Surah Al-Fatiha (All 7 Ayahs)
export const surah1Ayahs: Ayah[] = [
  { 
    id: "1:1", 
    surahId: 1, 
    ayahNumber: 1, 
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", 
    translationEN: "In the name of Allah, the Most Gracious, the Most Merciful.", 
    translationUR: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔", 
    translationHinglish: "Allah ke naam se jo bada meherbaan aur bahut rahem waala hai.",
    tafseerEN: "Every surah in the Quran begins with Bismillah except Surah At-Tawbah. This phrase is recited before beginning any action to seek Allah's blessings. It establishes that all actions should be done for Allah's sake.", 
    tafseerUR: "قرآن کی ہر سورت بسم اللہ سے شروع ہوتی ہے سوائے سورۃ التوبہ کے۔ یہ جملہ ہر کام شروع کرنے سے پہلے پڑھا جاتا ہے۔",
    tafseerHinglish: "Quran ki har Surah Bismillah se shuru hoti hai siwaey Surah At-Tawbah ke. Ye jumla har kaam shuru karne se pehle padha jaata hai taake Allah ki barkat haasil ho sake.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:2", 
    surahId: 1, 
    ayahNumber: 2, 
    arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", 
    translationEN: "All praise is due to Allah, Lord of all worlds.", 
    translationUR: "تمام تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔", 
    translationHinglish: "Tamam tareefain Allah hi ke liye hain jo tamam jahanon ka parwardigar hai.",
    tafseerEN: "Alhamdulillah encompasses all types of praise for Allah, who is the Sustainer and Provider of everything in existence - the seen and unseen worlds, humans, jinn, angels, and all creation.", 
    tafseerUR: "الحمدللہ اللہ کی ہر قسم کی تعریف کو شامل ہے جو تمام مخلوقات کا پروردگار ہے۔",
    tafseerHinglish: "Alhamdulillah Allah ki har qism ki tareef ko shaamil hai - wo jo tamam makhluqat ka parwardigar hai, dikhne waali aur na dikhne waali duniya, insaan, jinn, farishte, aur sab kuch.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:3", 
    surahId: 1, 
    ayahNumber: 3, 
    arabicText: "الرَّحْمَٰنِ الرَّحِيمِ", 
    translationEN: "The Most Gracious, the Most Merciful.", 
    translationUR: "بڑا مہربان نہایت رحم والا۔", 
    translationHinglish: "Bada meherbaan, bahut rahem waala.",
    tafseerEN: "Ar-Rahman signifies Allah's mercy that encompasses all creation in this world, while Ar-Raheem signifies His special mercy reserved for believers in the Hereafter. These names emphasize Allah's infinite mercy.", 
    tafseerUR: "الرحمٰن اللہ کی رحمت کو ظاہر کرتا ہے جو اس دنیا میں تمام مخلوقات پر ہے، جبکہ الرحیم آخرت میں مومنین کے لیے خاص رحمت ہے۔",
    tafseerHinglish: "Ar-Rahman Allah ki rehmat ko zaahir karta hai jo is duniya mein tamam makhluqat par hai, jabki Ar-Raheem aakhirat mein momino ke liye khaas rehmat hai. Ye naam Allah ki be-inteha rehmat ko dikhate hain.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:4", 
    surahId: 1, 
    ayahNumber: 4, 
    arabicText: "مَالِكِ يَوْمِ الدِّينِ", 
    translationEN: "Master of the Day of Judgment.", 
    translationUR: "بدلے کے دن کا مالک۔", 
    translationHinglish: "Badle ke din ka maalik.",
    tafseerEN: "Allah alone has sovereignty over the Day of Reckoning when all will be judged for their deeds. 'Malik' means the Owner and Sovereign who has complete authority.", 
    tafseerUR: "اللہ ہی کا بدلے کے دن پر مکمل اختیار ہے جب سب کا حساب کتاب ہوگا۔",
    tafseerHinglish: "Allah hi ka badle ke din par mukammal ikhtiyaar hai jab sab ka hisaab kitaab hoga. 'Maalik' ka matlab hai wo maalik jo mukammal ikhtiyaar rakhta hai.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:5", 
    surahId: 1, 
    ayahNumber: 5, 
    arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", 
    translationEN: "You alone we worship, and You alone we ask for help.", 
    translationUR: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔", 
    translationHinglish: "Hum teri hi ibadat karte hain aur tujh hi se madad maangte hain.",
    tafseerEN: "This verse declares pure monotheism (Tawhid) - worship is only for Allah, and help is sought only from Him. This is the essence of Islamic faith.", 
    tafseerUR: "یہ آیت خالص توحید کا اعلان کرتی ہے - عبادت صرف اللہ کی ہے اور مدد صرف اسی سے مانگی جاتی ہے۔",
    tafseerHinglish: "Ye ayat khalis tauheed (Tawhid) ka elaan karti hai - ibadat sirf Allah ki hai aur madad sirf usi se maangi jaati hai. Ye Islami aqeede ka khulasa hai.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:6", 
    surahId: 1, 
    ayahNumber: 6, 
    arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", 
    translationEN: "Guide us to the straight path.", 
    translationUR: "ہمیں سیدھے راستے کی ہدایت دے۔", 
    translationHinglish: "Hamein seedhe raaste ki hidayat de.",
    tafseerEN: "The straight path (Sirat al-Mustaqeem) is Islam - the path of those who have earned Allah's favor. This is a prayer for guidance that every Muslim makes at least 17 times a day in their prayers.", 
    tafseerUR: "سیدھا راستہ اسلام ہے - ان لوگوں کا راستہ جنہوں نے اللہ کی رضا حاصل کی۔",
    tafseerHinglish: "Seedha raasta (Sirat al-Mustaqeem) Islam hai - un logon ka raasta jinhon ne Allah ki raza haasil ki. Ye hidayat ki dua hai jo har Muslim kam az kam rozana 17 baar apni namazon mein karta hai.",
    juzNumber: 1, 
    hizbNumber: 1 
  },
  { 
    id: "1:7", 
    surahId: 1, 
    ayahNumber: 7, 
    arabicText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", 
    translationEN: "The path of those who have received Your grace; not the path of those who have brought down wrath upon themselves, nor of those who have gone astray.", 
    translationUR: "ان لوگوں کے راستے جن پر تو نے انعام کیا، نہ ان کے جو تیرے غضب کا نشانہ بنے اور نہ گمراہوں کے۔", 
    translationHinglish: "Un logon ke raaste jin par tune inaam kiya, na unke jo tere ghazab ka nishana bane aur na gumrahon ke.",
    tafseerEN: "The straight path is that of the prophets, the truthful, the martyrs, and the righteous - not of the Jews who knew the truth but rejected it (Maghdub), nor of the Christians who were ignorant but claimed knowledge (Dhallin).", 
    tafseerUR: "سیدھا راستہ انبیاء، صدیقین، شہداء اور صالحین کا ہے - نہ ان لوگوں کا جو حق جان کر ٹھکرایا اور نہ ان کا جو جہالت میں تھے۔",
    tafseerHinglish: "Seedha raasta anbiya, siddiqeen, shuhada aur saleheen ka hai - na un logon ka jo haq jaan kar thukraya (Maghdub), aur na unka jo jahalat mein the (Dhallin).",
    juzNumber: 1, 
    hizbNumber: 1 
  }
];

// Complete Ayahs for Surah Al-Ikhlas (All 4 Ayahs)
export const surah112Ayahs: Ayah[] = [
  { 
    id: "112:1", 
    surahId: 112, 
    ayahNumber: 1, 
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ", 
    translationEN: "Say, 'He is Allah, the One.'", 
    translationUR: "کہو کہ اللہ ایک ہے۔", 
    translationHinglish: "Kaho ke Allah ek hai.",
    tafseerEN: "Allah is unique in His essence, attributes, and actions. There is none like Him. This surah is equivalent to one-third of the Quran in reward because it establishes pure monotheism.", 
    tafseerUR: "اللہ اپنی ذات، صفات اور افعال میں منفرد ہے۔ اس کا کوئی شریک نہیں۔",
    tafseerHinglish: "Allah apni zaat, sifaat aur af'aal mein munfarid hai. Iska koi shareek nahi. Ye Surah Quran ke ek-tehayi ke barabar sawaab hai kyunke ye khalis tauheed ko qaim karti hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "112:2", 
    surahId: 112, 
    ayahNumber: 2, 
    arabicText: "اللَّهُ الصَّمَدُ", 
    translationEN: "Allah, the Eternal Refuge.", 
    translationUR: "اللہ بے نیاز ہے۔", 
    translationHinglish: "Allah be-niyaaz hai.",
    tafseerEN: "As-Samad means the One who is self-sufficient, whom all creation depends upon, and who does not depend on anyone. He is the ultimate source of all needs.", 
    tafseerUR: "الصمد کا مطلب ہے وہ جو بے نیاز ہے، جس پر تمام مخلوقات منحصر ہے۔",
    tafseerHinglish: "As-Samad ka matlab hai wo jo be-niyaaz hai, jis par tamam makhluqat munhasir hain, aur jo kisi par munhasir nahi. Wo tamam zarooraton ka akhri zariya hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "112:3", 
    surahId: 112, 
    ayahNumber: 3, 
    arabicText: "لَمْ يَلِدْ وَلَمْ يُولَدْ", 
    translationEN: "He neither begets nor is born.", 
    translationUR: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔", 
    translationHinglish: "Na iski koi aulaad hai aur na wo kisi ki aulaad hai.",
    tafseerEN: "Allah has no children, parents, or partners. He is eternal and uncreated. This refutes the Christian belief in Jesus as son of God and the pagan belief in daughters of Allah.", 
    tafseerUR: "اللہ کی کوئی اولاد، والدین یا شریک نہیں۔ وہ ازلی اور ابدی ہے۔",
    tafseerHinglish: "Allah ki koi aulaad, waalidain ya shareek nahi. Wo azali aur abdi hai, na paida hua na kisi ne usko paida kiya. Ye Isa (AS) ko Allah ka beta maanne wali Christian belief aur Allah ki betiyan maanne wali mushrikana belief ko rad karti hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "112:4", 
    surahId: 112, 
    ayahNumber: 4, 
    arabicText: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", 
    translationEN: "Nor is there to Him any equivalent.", 
    translationUR: "اور نہ اس کا کوئی ہمسر ہے۔", 
    translationHinglish: "Aur na iska koi humsar hai.",
    tafseerEN: "There is absolutely nothing comparable to Allah in any way. He is unique in every aspect - in His essence, attributes, names, and actions.", 
    tafseerUR: "اللہ کا کوئی ہمسر نہیں۔ وہ ہر لحاظ سے منفرد ہے۔",
    tafseerHinglish: "Allah ka bilkul koi humsar nahi hai kisi bhi tareeqe se. Wo har pehlu mein munfarid hai - apni zaat, sifaat, naam aur af'aal mein.",
    juzNumber: 30, 
    hizbNumber: 60 
  }
];

// Complete Ayahs for Surah Al-Falaq (All 5 Ayahs)
export const surah113Ayahs: Ayah[] = [
  { 
    id: "113:1", 
    surahId: 113, 
    ayahNumber: 1, 
    arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", 
    translationEN: "Say, 'I seek refuge in the Lord of daybreak.'", 
    translationUR: "کہو کہ میں پناہ مانگتا ہوں صبح کے رب کی۔", 
    translationHinglish: "Kaho ke main panah maangta hoon subah ke Rab ki.",
    tafseerEN: "This is one of the two surahs of seeking refuge (Mu'awwidhatain). We seek protection in Allah who created the dawn and brings light after darkness.", 
    tafseerUR: "یہ پناہ طلب کرنے والی دو سورتوں میں سے ایک ہے۔",
    tafseerHinglish: "Ye panah talab karne wali do Surahon (Mu'awwidhatain) mein se ek hai. Hum Allah ki panah maangte hain jisne fajr paida ki aur andheray ke baad roshni laayi.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "113:2", 
    surahId: 113, 
    ayahNumber: 2, 
    arabicText: "مِنْ شَرِّ مَا خَلَقَ", 
    translationEN: "From the evil of that which He created.", 
    translationUR: "اس کی مخلوق کی برائی سے۔", 
    translationHinglish: "Uski makhluq ki buraai se.",
    tafseerEN: "We seek refuge from the evil that exists in Allah's creation - harmful creatures, diseases, accidents, and all forms of harm.", 
    tafseerUR: "ہم اللہ کی مخلوق میں موجود شر سے پناہ مانگتے ہیں۔",
    tafseerHinglish: "Hum Allah ki makhluq mein maujood shar se panah maangte hain - nuqsaan deh jaanwar, bimaariyan, haadsaat, aur har qism ke nuqsaan se.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "113:3", 
    surahId: 113, 
    ayahNumber: 3, 
    arabicText: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", 
    translationEN: "And from the evil of darkness when it settles.", 
    translationUR: "اور اندھیرے کی برائی سے جب وہ چھا جائے۔", 
    translationHinglish: "Aur andheray ki buraai se jab wo chha jaaye.",
    tafseerEN: "Seeking protection from the dangers of the night - thieves, wild animals, evil spirits, and all harms that come with darkness.", 
    tafseerUR: "رات کے خطرات سے پناہ - چور، جنگلی جانور، شیاطین۔",
    tafseerHinglish: "Raat ke khatraat se panah - chor, jungli jaanwar, buri roohein, aur wo tamam nuqsaan jo andheray ke saath aate hain.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "113:4", 
    surahId: 113, 
    ayahNumber: 4, 
    arabicText: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", 
    translationEN: "And from the evil of the blowers in knots.", 
    translationUR: "اور گانٹھوں میں پھونک مارنے والیوں کی برائی سے۔", 
    translationHinglish: "Aur gaanthon mein phoonk maarnay walion ki buraai se.",
    tafseerEN: "Protection from those who practice magic and witchcraft - those who blow on knots as part of their magical rituals.", 
    tafseerUR: "جادو اور سحر کرنے والوں سے پناہ۔",
    tafseerHinglish: "Jadu aur sehar karne walon se panah - jo apne jadui amaal ke hisse ke taur par gaanthon mein phoonk maarte hain.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "113:5", 
    surahId: 113, 
    ayahNumber: 5, 
    arabicText: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", 
    translationEN: "And from the evil of an envier when he envies.", 
    translationUR: "اور حسد کرنے والے کی برائی سے جب وہ حسد کرے۔", 
    translationHinglish: "Aur hasad karne waale ki buraai se jab wo hasad kare.",
    tafseerEN: "Protection from the evil eye and jealousy of others. Envy is a destructive quality that harms both the one who envies and the one who is envied.", 
    tafseerUR: "نظر بد اور دوسروں کی حسد سے پناہ۔",
    tafseerHinglish: "Nazar bad aur dusron ke hasad se panah. Hasad ek tabaah kun khoobi hai jo hasad karne waale ko bhi nuqsaan pohanchati hai aur jis par hasad kiya jaata hai usko bhi.",
    juzNumber: 30, 
    hizbNumber: 60 
  }
];

// Complete Ayahs for Surah An-Nas (All 6 Ayahs)
export const surah114Ayahs: Ayah[] = [
  { 
    id: "114:1", 
    surahId: 114, 
    ayahNumber: 1, 
    arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", 
    translationEN: "Say, 'I seek refuge in the Lord of mankind.'", 
    translationUR: "کہو کہ میں پناہ مانگتا ہوں انسانوں کے رب کی۔", 
    translationHinglish: "Kaho ke main panah maangta hoon insanon ke Rab ki.",
    tafseerEN: "The final surah of the Quran teaches us to seek refuge in Allah, the Lord, King, and God of all mankind.", 
    tafseerUR: "قرآن کی آخری سورت ہمیں سکھاتی ہے کہ اللہ کی پناہ مانگیں۔",
    tafseerHinglish: "Quran ki aakhri Surah hamein sikhati hai ke Allah ki panah maangein - jo tamam insanon ka Rab, Maalik aur Khuda hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "114:2", 
    surahId: 114, 
    ayahNumber: 2, 
    arabicText: "مَلِكِ النَّاسِ", 
    translationEN: "The Sovereign of mankind.", 
    translationUR: "انسانوں کا بادشاہ۔", 
    translationHinglish: "Insanon ka badshah.",
    tafseerEN: "Allah is the King and Sovereign who has complete authority over all humans. No one has any real power except what Allah grants.", 
    tafseerUR: "اللہ بادشاہ ہے جس کا انسانوں پر مکمل اختیار ہے۔",
    tafseerHinglish: "Allah badshah aur maalik hai jiska insanon par mukammal ikhtiyaar hai. Kisi ke paas koi asli taqat nahi siwaey uske jo Allah deta hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "114:3", 
    surahId: 114, 
    ayahNumber: 3, 
    arabicText: "إِلَٰهِ النَّاسِ", 
    translationEN: "The God of mankind.", 
    translationUR: "انسانوں کا معبود۔", 
    translationHinglish: "Insanon ka ma'bood.",
    tafseerEN: "Allah alone deserves worship from all mankind. He is the only true God worthy of devotion and submission.", 
    tafseerUR: "اللہ ہی تمام انسانوں کی عبادت کا مستحق ہے۔",
    tafseerHinglish: "Allah hi tamam insanon ki ibadat ka mustahiq hai. Wo hi ek sacha Khuda hai jo ibadat aur farmabardari ka mustahiq hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "114:4", 
    surahId: 114, 
    ayahNumber: 4, 
    arabicText: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", 
    translationEN: "From the evil of the retreating whisperer.", 
    translationUR: "پھرنے والے وسوسہ انداز کی برائی سے۔", 
    translationHinglish: "Phirne wale waswasa andaaz ki buraai se.",
    tafseerEN: "The whisperer (Shaytan) who retreats when Allah is remembered. He whispers evil thoughts into the hearts of humans.", 
    tafseerUR: "وسوسہ انداز (شیطان) جو اللہ کے ذکر سے پیچھے ہٹ جاتا ہے۔",
    tafseerHinglish: "Waswasa andaaz (Shaitan) jo Allah ke zikr se peeche hat jaata hai. Wo insanon ke dilon mein buri khayaalat daalta hai.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "114:5", 
    surahId: 114, 
    ayahNumber: 5, 
    arabicText: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", 
    translationEN: "Who whispers in the breasts of mankind.", 
    translationUR: "جو انسانوں کے سینوں میں وسوسہ ڈالتا ہے۔", 
    translationHinglish: "Jo insanon ke seenon mein waswasa daalta hai.",
    tafseerEN: "Shaytan whispers doubts, evil suggestions, and sinful thoughts into the hearts of people. We seek Allah's protection from these whispers.", 
    tafseerUR: "شیطان انسانوں کے دلوں میں شک، برے خیالات اور گناہ کی ترغیب دیتا ہے۔",
    tafseerHinglish: "Shaitan logon ke dilon mein shak, bure khayaalat aur gunaah ki targheeb deta hai. Hum in waswason se Allah ki panah maangte hain.",
    juzNumber: 30, 
    hizbNumber: 60 
  },
  { 
    id: "114:6", 
    surahId: 114, 
    ayahNumber: 6, 
    arabicText: "مِنَ الْجِنَّةِ وَالنَّاسِ", 
    translationEN: "Among the jinn and mankind.", 
    translationUR: "جنوں اور انسانوں میں سے۔", 
    translationHinglish: "Jinno aur insanon mein se.",
    tafseerEN: "The source of evil whispers can be from both jinn and humans. We seek Allah's protection from both sources of harm.", 
    tafseerUR: "برے وسوسوں کا ذریعہ جن اور انسان دونوں ہو سکتے ہیں۔",
    tafseerHinglish: "Bure waswason ka zariya jinn aur insaan dono ho sakte hain. Hum dono zariyon se nuqsaan se Allah ki panah maangte hain.",
    juzNumber: 30, 
    hizbNumber: 60 
  }
];

// Combine all ayahs
export const allAyahs: Record<number, Ayah[]> = {
  1: surah1Ayahs,
  112: surah112Ayahs,
  113: surah113Ayahs,
  114: surah114Ayahs,
};

export const getSurahById = (id: number): Surah | undefined => {
  return surahs.find(s => s.number === id);
};

export const getSurahByNumber = (number: number): Surah | undefined => {
  return surahs.find(s => s.number === number);
};

export const getAyahsBySurah = (surahId: number): Ayah[] => {
  return allAyahs[surahId] || [];
};

export const getJuzInfo = (juzNumber: number) => {
  const juzSurahs = surahs.filter(s => 
    (s.juzStart <= juzNumber && s.juzEnd >= juzNumber)
  );
  return {
    number: juzNumber,
    name: `Juz ${juzNumber}`,
    surahs: juzSurahs,
  };
};

export default surahs;
