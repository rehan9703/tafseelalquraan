export interface Hadith {
  id: string;
  collection: string;
  number: number;
  arabicText: string;
  translationEN: string;
  narrator: string;
  source: string;
  topic: string;
  benefits?: string;
  explanation?: string;
}

export const nawawiHadiths: Hadith[] = [
  {
    id: "nawawi-1",
    collection: "Nawawi 42",
    number: 1,
    arabicText: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَتَزَوَّجُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    translationEN: "Actions are judged by intentions, so each man will have what he intended. Thus, he whose migration was to Allah and His Messenger, his migration is to Allah and His Messenger; but he whose migration was for some worldly thing he might gain, or for a wife he might marry, his migration is to that for which he migrated.",
    narrator: "Umar ibn Al-Khattab",
    source: "Bukhari & Muslim",
    topic: "Intention",
    benefits: "This hadith establishes that the acceptance and reward of any action depend solely on the sincerity of intention behind it. It teaches us to constantly purify our intentions and make them sincerely for Allah's sake.",
    explanation: "This is considered the foundation of Islamic jurisprudence. Every action, whether religious or worldly, is judged by the intention behind it. A deed without proper intention has no reward in the Hereafter. This hadith also teaches us that people may perform the same outward action but receive different rewards based on their intentions."
  },
  {
    id: "nawawi-2",
    collection: "Nawawi 42",
    number: 2,
    arabicText: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ",
    translationEN: "Islam is built upon five: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving zakah, fasting Ramadan, and performing Hajj if one is able.",
    narrator: "Ibn Umar",
    source: "Bukhari & Muslim",
    topic: "Pillars of Islam",
    benefits: "These five pillars form the foundation of a Muslim's faith and practice. They are the minimum requirements for being a practicing Muslim.",
    explanation: "These five pillars are: 1) Shahada - Declaration of faith, 2) Salah - Five daily prayers, 3) Zakat - Obligatory charity, 4) Sawm - Fasting in Ramadan, 5) Hajj - Pilgrimage to Makkah. These form the framework of Islamic practice."
  },
  {
    id: "nawawi-13",
    collection: "Nawawi 42",
    number: 13,
    arabicText: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translationEN: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik",
    source: "Bukhari & Muslim",
    topic: "Brotherhood",
    benefits: "True faith requires selflessness and genuine care for others' welfare. It establishes the foundation of Islamic brotherhood and community.",
    explanation: "This hadith teaches that complete faith includes loving good for others as we love it for ourselves. This applies to all aspects of life - material, spiritual, and emotional. It encourages Muslims to be selfless and caring."
  },
  {
    id: "nawawi-16",
    collection: "Nawawi 42",
    number: 16,
    arabicText: "لاَ يَحِلُّ لامْرِئٍ أَنْ يَبِيعَ بَيْعَيْنِ فِي صَفْقَةٍ وَاحِدَةٍ، وَلاَ يَحِلُّ لَهُ أَنْ يَلِيَ عَلَى بَيْعِ صَاحِبِهِ حَتَّى يَأْذَنَ لَهُ",
    translationEN: "It is not lawful for a person to make two transactions in one bargain, nor is it lawful for him to make a proposal of marriage upon the proposal of his brother until he permits.",
    narrator: "Abu Hurairah",
    source: "Muslim",
    topic: "Business Ethics",
    benefits: "This hadith establishes ethical guidelines for business transactions and social interactions, emphasizing fairness and respect for others' rights.",
    explanation: "This hadith prohibits interfering in others' business deals or marriage proposals. It teaches respect for others' negotiations and maintains fairness in society."
  },
  {
    id: "nawawi-19",
    collection: "Nawawi 42",
    number: 19,
    arabicText: "الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ",
    translationEN: "Religion is sincerity. We said: To whom? He said: To Allah, His Book, His Messenger, the leaders of the Muslims, and their common people.",
    narrator: "Tamim al-Dari",
    source: "Muslim",
    topic: "Sincerity",
    benefits: "Sincerity is the essence of religion, extending to Allah, His messenger, leaders, and all Muslims. It encompasses honesty, loyalty, and well-wishing.",
    explanation: "This comprehensive hadith defines the scope of sincerity in Islam. It means being sincere in worship to Allah, following the Quran, obeying the Prophet, respecting Muslim leaders, and caring for all Muslims."
  },
  {
    id: "nawawi-24",
    collection: "Nawawi 42",
    number: 24,
    arabicText: "إِنَّمَا مَثَلِي وَمَثَلُ الأَنْبِيَاءِ مِنْ قَبْلِي كَمَثَلِ رَجُلٍ بَنَى بَيْتًا فَأَحْسَنَهُ وَأَجْمَلَهُ، إِلاَّ مَوْضِعَ لَبِنَةٍ مِنْ زَاوِيَةٍ، فَجَعَلَ النَّاسُ يَطُوفُونَ بِهِ وَيَعْجَبُونَ لَهُ، وَيَقُولُونَ: هَلَّا وُضِعَتْ هَذِهِ اللَّبِنَةُ؟ قَالَ: فَأَنَا اللَّبِنَةُ، وَأَنَا خَاتَمُ النَّبِيِّينَ",
    translationEN: "My example and the example of the prophets before me is like a man who built a house, perfected it, and beautified it, except for the place of one brick in a corner. The people began to go around it and wonder at it, saying: 'Why isn't this brick placed?' He said: 'I am that brick, and I am the seal of the prophets.'",
    narrator: "Abu Hurairah",
    source: "Bukhari & Muslim",
    topic: "Prophethood",
    benefits: "This hadith illustrates how Prophet Muhammad ﷺ completed the beautiful structure of prophethood. He is the final prophet who completed the message.",
    explanation: "The house represents the structure of prophethood built by all previous prophets. Prophet Muhammad ﷺ is the final brick that completes this beautiful structure, and he is the last and final prophet."
  },
  {
    id: "nawawi-33",
    collection: "Nawawi 42",
    number: 33,
    arabicText: "مَنْ أَحْيَا سُنَّتِي فَقَدْ أَحَبَّنِي، وَمَنْ أَحَبَّنِي كَانَ مَعِي فِي الْجَنَّةِ",
    translationEN: "Whoever revives my Sunnah has loved me, and whoever loves me will be with me in Paradise.",
    narrator: "Anas ibn Malik",
    source: "At-Tirmidhi",
    topic: "Sunnah",
    benefits: "This hadith encourages Muslims to follow the Prophet's Sunnah and promises great reward for those who do so.",
    explanation: "Reviving the Sunnah means practicing it, teaching it to others, and defending it. The love of the Prophet ﷺ is a prerequisite for being with him in Paradise."
  },
  {
    id: "nawawi-42",
    collection: "Nawawi 42",
    number: 42,
    arabicText: "لاَ يَرْكَبُ الْبَحْرَ إِلاَّ حَاجٌّ أَوْ مُعْتَمِرٌ أَوْ غَازٍ فِي سَبِيلِ اللَّهِ، فَإِنَّهُ تَحْتَ الْبَحْرِ نَارٌ، وَتَحْتَ النَّارِ بَحْرٌ",
    translationEN: "No one should sail the sea except a pilgrim or one performing Umrah, or one fighting in the path of Allah. For under the sea is a fire, and under the fire is a sea.",
    narrator: "Abu Hurairah",
    source: "Abu Dawud",
    topic: "Travel",
    benefits: "This hadith discourages unnecessary sea travel due to its dangers, while permitting it for religious or noble purposes.",
    explanation: "This hadith reflects the dangers of sea travel in ancient times. It encourages Muslims to avoid unnecessary risks while permitting travel for Hajj, Umrah, or Jihad."
  },
];

export const getHadithById = (id: string): Hadith | undefined => {
  return nawawiHadiths.find(h => h.id === id);
};

export const getHadithsByTopic = (topic: string): Hadith[] => {
  return nawawiHadiths.filter(h => h.topic.toLowerCase().includes(topic.toLowerCase()));
};
