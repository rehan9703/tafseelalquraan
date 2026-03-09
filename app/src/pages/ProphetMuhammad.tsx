import { motion } from 'framer-motion';
import { Heart, Star, BookOpen, Moon, Users, Zap, Award } from 'lucide-react';
import { prophetNames } from '@/data/prophetNames';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lifeEvents = [
  { year: '570 CE', event: 'Birth in Makkah', description: 'Born to Abdullah and Aminah in the Year of the Elephant (Amul Fil). Nursed by Halimah al-Sa\'diyyah in the desert.' },
  { year: '575 CE', event: 'Mother Passes Away', description: 'Mother Aminah passes away in Abwa while returning from visiting the Prophet\'s father\'s grave in Madinah.' },
  { year: '578 CE', event: 'Under Abu Talib', description: 'Grandfather Abdul Muttalib passes away. Raised by uncle Abu Talib with great love and care.' },
  { year: '582 CE', event: 'Meets Bahira the Monk', description: 'While on a trade journey to Syria, the Christian monk Bahira recognized signs of prophethood and advised Abu Talib to protect him.' },
  { year: '590 CE', event: 'Hilf al-Fudul', description: 'Participated in the chivalric Pact of the Virtuous — an agreement to protect the oppressed. He later praised this pact even in Islam.' },
  { year: '595 CE', event: 'Marriage to Khadijah (RA)', description: 'Married the noble businesswoman Khadijah bint Khuwaylid (RA). She proposed after witnessing his exceptional character. He was 25; she was 40.' },
  { year: '610 CE', event: 'First Revelation', description: 'Angel Jibreel appeared in Cave Hira: "Iqra!" (Read!). The first 5 verses of Surah Al-Alaq were revealed. Khadijah (RA) wrapped him in a cloak and consoled him.' },
  { year: '613 CE', event: 'Open Preaching', description: 'Commanded by Allah to preach publicly. Climbed Mount Safa and called all Makkah to Islam. Persecution began intensifying.' },
  { year: '615 CE', event: 'First Hijrah to Abyssinia', description: 'Weak Muslims migrated to Abyssinia under just King Negus, who heard Surah Maryam and wept, granting them protection.' },
  { year: '619 CE', event: 'Year of Sorrow (Aam al-Huzn)', description: 'Beloved wife Khadijah (RA) and protecting uncle Abu Talib passed away within 3 months — the most grief-stricken period of his life.' },
  { year: '620 CE', event: 'Visit to Ta\'if', description: 'Traveled to Ta\'if seeking support. Tribe leaders rejected him brutally and children threw stones at him until his sandals filled with blood. He made du\'a for them.' },
  { year: '621 CE', event: 'Isra and Mi\'raj', description: 'The miraculous night journey from Masjid al-Haram to Masjid al-Aqsa, then ascension through 7 heavens. Five daily prayers were ordained directly.' },
  { year: '622 CE', event: 'Hijrah to Madinah', description: 'Emigrated with Abu Bakr (RA), hiding in Cave of Thawr. Arrived in Madinah on Rabi al-Awwal 12 — marking Year 1 of the Islamic calendar.' },
  { year: '622 CE', event: 'Constitution of Madinah', description: 'Established the world\'s first written constitution, creating a pluralistic state with rights for all communities.' },
  { year: '624 CE', event: 'Battle of Badr', description: '313 Muslims defeated 1,000 Quraysh warriors. Allah sent angels to assist. Called Yawm al-Furqan (Day of Distinction) in the Quran.' },
  { year: '625 CE', event: 'Battle of Uhud', description: 'Muslim archers violated orders for spoils; 70 companions were martyred including Hamza (RA). The Prophet ﷺ was wounded but continued inspiring his companions.' },
  { year: '627 CE', event: 'Battle of Khandaq (Trench)', description: 'On Salman al-Farisi\'s suggestion, a trench protected Madinah from 10,000 enemies. The siege failed after divine intervention aided Muslim defense.' },
  { year: '628 CE', event: 'Treaty of Hudaybiyyah', description: 'A peace treaty the Quran called "a clear victory." Enabled peaceful spread of Islam across Arabia over the next two years.' },
  { year: '628 CE', event: 'Letters to World Leaders', description: 'Sent letters to Emperor Heraclius, Khosrow II of Persia, and Negus of Abyssinia inviting them to Islam — fulfilling the universal mission.' },
  { year: '629 CE', event: 'Battle of Mu\'tah', description: 'First military engagement with the Byzantine Empire. Three commanders fell as martyrs — Zayd, Ja\'far, Ibn Rawahah (RA) — before Khalid ibn al-Walid led a strategic withdrawal.' },
  { year: '630 CE', event: 'Conquest of Makkah (Fath Makkah)', description: '10,000 companions marched. Makkah surrendered without significant fighting. Bilal (RA) gave Adhan from the Ka\'bah. The Prophet declared general amnesty: "No blame on you today."' },
  { year: '630 CE', event: 'Battle of Hunayn & Ta\'if', description: 'Victory over Hawazin tribe after initial Muslim disorder, followed by failed siege of Ta\'if. Demonstrated that numbers alone do not guarantee victory.' },
  { year: '631 CE', event: 'Year of Delegations (Aam al-Wufud)', description: 'Delegations from all over Arabia came to Madinah accepting Islam en masse. Arabia was effectively united under Islamic rule.' },
  { year: '632 CE', event: 'Farewell Pilgrimage (Hajjat al-Wada)', description: 'Over 100,000 pilgrims. Delivered the Farewell Sermon at Arafat. The verse "Today I have perfected your religion" (5:3) was revealed. He asked: "Have I conveyed the message?" All said: "Yes!"' },
  { year: '632 CE', event: 'Return to Allah', description: 'Passed away on Rabi al-Awwal 12, 11 AH, at age 63, in Madinah, in the arms of Aisha (RA). Buried in her room — now part of the Prophet\'s Mosque.' },
];

const sifaat = [
  { title: 'Siddiq (The Truthful)', description: 'Never told a lie in his entire life, even before prophethood. Enemies who hated Islam acknowledged his absolute truthfulness.', arabic: 'الصِّدِّيق' },
  { title: 'Amin (The Trustworthy)', description: 'The Quraysh called him "Al-Amin" — the Trustworthy — even when they were his enemies. He kept Quraysh valuables in trust before Hijrah.', arabic: 'الأَمِين' },
  { title: 'Rauf (Kind)', description: 'Mentioned in the Quran: "Certainly a Messenger has come to you from among yourselves... for the believers he is compassionate (rauf), merciful (rahim)" (9:128).', arabic: 'رَؤُوف' },
  { title: 'Rahim (Merciful)', description: 'Full of mercy for all creation — humans, animals, and even his enemies. He forbade the burning of ants\' nests and cruelty to animals.', arabic: 'رَحِيم' },
  { title: 'Shafi\' (Intercessor)', description: 'He will be granted the "Maqam Mahmud" — the praised station — on Judgment Day, to intercede for the entire Ummah.', arabic: 'شَافِع' },
  { title: 'Bashir (Glad Tidings)', description: 'Brought good news of Allah\'s mercy, paradise, and forgiveness to humanity — filling hearts with hope.', arabic: 'بَشِير' },
  { title: 'Nadhir (Warner)', description: 'Warned with great love against disbelief and sin — as a concerned physician warns of disease, not as a harsh judge.', arabic: 'نَذِير' },
  { title: 'Siraj Munir (Lamp of Light)', description: '"O Prophet, indeed We have sent you as a witness and a bringer of good tidings and a warner. And one who invites to Allah... and an illuminating lamp." (33:45-46)', arabic: 'سِرَاجٌ مُنِير' },
];

const akhlaq = [
  'Never spoke ill of anyone behind their back',
  'Never took revenge for personal offenses',
  'Was the most generous person who ever lived',
  'Was the bravest in the face of mortal danger',
  'Was the most modest despite his greatness',
  'Smiled and laughed often, making companions at ease',
  'Sat on the ground and ate with servants and the poor',
  'Treated children with immense tenderness and affection',
  'Rose to honor elders and the weak',
  'Helped with household chores — mended his own sandals',
  'Was patient in utter adversity without complaint',
  'Forgave enemies who had persecuted him terribly',
  'Was simple in lifestyle; owned almost nothing at death',
  'Cared deeply for orphans, the poor, and the vulnerable',
  'Gave away everything and went to bed hungry often',
  'Never cursed a specific person even when permitted to',
  'Visited the sick regardless of religion or status',
  'Stood when biers passed — honoring even non-believers',
  'Memorized the names of thousands of companions',
  'Never interrupted someone speaking to him',
];

const wives = [
  { name: 'Khadijah bint Khuwaylid (RA)', period: '595-619 CE', description: 'The first wife and first Muslim. A noble businesswoman who supported the Prophet through the most difficult years of early Islam. Mother of all surviving children. He never truly moved past her love.' },
  { name: 'Sawdah bint Zam\'ah (RA)', period: '619 CE', description: 'An early Muslim widow who emigrated to Abyssinia. Married to give her protection after her husband died. A cheerful, generous companion known for making the Prophet ﷺ laugh.' },
  { name: 'Aisha bint Abi Bakr (RA)', period: '622 CE', description: 'The most beloved wife after Khadijah (RA). The greatest female scholar of Islam — more hadiths are narrated through her than any other person. Called "Mother of Islamic knowledge."' },
  { name: 'Hafsah bint Umar (RA)', period: '624 CE', description: 'Daughter of Umar ibn al-Khattab (RA). Known for her worship, fasting, and strong personality. The original manuscript of the Quran was entrusted to her for safekeeping.' },
  { name: 'Zaynab bint Khuzaymah (RA)', period: '625 CE', description: 'Known as "Umm al-Masakin" (Mother of the Poor) for her extreme generosity to the needy. Passed away just months after her marriage.' },
  { name: 'Umm Salamah (RA)', period: '626 CE', description: 'A deeply wise and intelligent companion. One of the most prominent female advisors — her counsel at Hudaybiyyah was pivotal. Known for her strength in trials.' },
  { name: 'Zaynab bint Jahsh (RA)', period: '627 CE', description: 'Her marriage was divinely commanded (Quran 33:37) to abolish the practice of adopted sons\' wives being treated like biological sons\' wives. Known for her generosity.' },
  { name: 'Juwayriyyah bint al-Harith (RA)', period: '628 CE', description: 'Her marriage led to the release of 100 captive families from her tribe — demonstrating the political and humanitarian wisdom of the Prophet\'s marriages.' },
  { name: 'Umm Habibah bint Abi Sufyan (RA)', period: '628 CE', description: 'Daughter of Abu Sufyan, who was then Islam\'s greatest enemy. Her marriage was arranged by Negus of Abyssinia and created political alliances that later aided the Conquest of Makkah.' },
  { name: 'Safiyyah bint Huyayy (RA)', period: '629 CE', description: 'From a noble Jewish family, she embraced Islam wholeheartedly. The Prophet honored her lineage as a descendant of Prophet Harun (AS) and treated her with great dignity.' },
  { name: 'Maymunah bint al-Harith (RA)', period: '629 CE', description: 'The last wife. Her marriage completed alliances with major Arab tribes. Ibn Abbas (RA) — the greatest tafseer scholar — was her nephew, and she played a role in his Islamic education.' },
];

const miracles = [
  { title: 'The Quran — Living Miracle', description: 'The Quran remains the Prophet\'s greatest and eternal miracle — linguistically inimitable, preserved perfectly for 1,400+ years, memorized by millions in every generation.' },
  { title: 'Splitting of the Moon', description: 'When challenged by the Quraysh, the Prophet ﷺ pointed at the moon and it split into two halves, visible to all present. Mentioned in Surah Al-Qamar (54:1).' },
  { title: 'Isra and Mi\'raj', description: 'The miraculous night journey from Makkah to Jerusalem and ascension through the seven heavens — an event impossible for any human without divine transport.' },
  { title: 'Water from His Fingers', description: 'On multiple occasions when water was scarce, water flowed abundantly from between his blessed fingers until thousands drank and performed wudu.' },
  { title: 'Food Multiplied', description: 'At the wedding feast of Abu Talha (RA), he blessed a small amount of food that fed over 80 companions. At the Battle of Khandaq, he blessed a small amount that fed the entire army.' },
  { title: 'Tree Testimony', description: 'A tree uprooted itself and moved to him when he called it as witness during a conversation. It and its roots approached and stood before him, then returned on his command.' },
  { title: 'Weeping Pillar', description: 'When a pulpit was constructed so he could speak to larger crowds, the palm trunk he had been using wept audibly — heard by all present — because he no longer leaned on it.' },
  { title: 'Animal Communications', description: 'A camel complained to him about its abusive owner; a wolf spoke to a shepherd proclaiming his prophethood; a gazelle witnessed for him — animals recognized his prophethood.' },
  { title: 'Healing the Sick', description: 'He spat on the eye of Ali (RA) when he was nearly blind from illness before Khaybar — it was cured immediately. He healed numerous companions with du\'a and touch.' },
  { title: 'The Cave of Thawr', description: 'When enemies searched for him during Hijrah, a spider web formed over the cave entrance and a dove nested at its mouth — causing enemies to overlook the cave entirely.' },
];

const darood = [
  { name: 'Salat Ibrahimiyyah (Darood Ibrahim)', arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ', translation: 'O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.' },
  { name: 'Salat al-Fatih', arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ وَالنَّاصِرِ الْحَقَّ بِالْحَقِّ وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ', translation: 'O Allah, pray upon our Master Muhammad, the opener of what was closed, the seal of what preceded, the supporter of truth through truth, and the guide to Your straight path.' },
  { name: 'Salat Nariyyah', arabic: 'اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ', translation: 'O Allah, send a complete prayer and a perfect peace upon our Master Muhammad, through whom knots are untied and difficulties are relieved.' },
  { name: 'Simple Daily Darood', arabic: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', translation: 'O Allah, send prayers and peace upon our Prophet Muhammad.' },
];

const quranicVerses = [
  { arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ', translation: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.', reference: 'Surah Al-Anbiya 21:107' },
  { arabic: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ', translation: 'There has certainly been for you in the Messenger of Allah an excellent example for whoever hopes in Allah and the Last Day.', reference: 'Surah Al-Ahzab 33:21' },
  { arabic: 'مُّحَمَّدٌ رَّسُولُ اللَّهِ ۚ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ', translation: 'Muhammad is the Messenger of Allah; and those with him are forceful against the disbelievers, merciful among themselves.', reference: 'Surah Al-Fath 48:29' },
  { arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا', translation: 'Indeed, Allah and His angels send blessings upon the Prophet. O you who believe! Send blessings upon him and salute him with worthy salutation.', reference: 'Surah Al-Ahzab 33:56' },
  { arabic: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ', translation: 'And indeed, you are of a great moral character.', reference: 'Surah Al-Qalam 68:4' },
  { arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ', translation: 'And We raised high for you your repute / mention.', reference: 'Surah Al-Inshirah 94:4' },
];

export function ProphetMuhammad() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="islamic-card p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-islamic-gold to-transparent" />

        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-islamic-gold to-islamic-gold-dark flex items-center justify-center">
          <span className="text-4xl font-arabic text-islamic-bg-primary">ﷺ</span>
        </div>

        <h1 className="text-4xl font-heading font-bold text-islamic-text-primary mb-2">
          Prophet Muhammad ﷺ
        </h1>
        <p className="text-3xl font-arabic text-islamic-gold mb-4">
          مُحَمَّد ﷺ — خَاتَمُ النَّبِيِّين
        </p>
        <p className="text-lg text-islamic-text-secondary max-w-2xl mx-auto mb-4">
          "And We have not sent you, [O Muhammad], except as a mercy to the worlds."
          <span className="block text-islamic-gold mt-2">— Surah Al-Anbiya 21:107</span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Born', value: '570 CE, Makkah' },
            { label: 'Prophethood', value: '610 CE, Age 40' },
            { label: 'Passed Away', value: '632 CE, Madinah' },
            { label: 'Followers', value: '1.8 Billion+' },
          ].map((item, i) => (
            <div key={i} className="bg-islamic-bg-secondary rounded-xl p-3">
              <div className="text-islamic-gold text-xs font-medium">{item.label}</div>
              <div className="text-islamic-text-primary text-sm font-semibold mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Life Timeline */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-islamic-gold" />
          Life Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-islamic-border md:-translate-x-1/2" />
          <div className="space-y-6">
            {lifeEvents.map((event, index) => (
              <div key={index} className="relative flex items-start gap-6 md:grid md:grid-cols-2">
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-islamic-gold border-2 border-islamic-bg-primary md:-translate-x-1/2 z-10" />
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}`}>
                  <div className="islamic-card p-4">
                    <span className="text-sm text-islamic-gold font-medium">{event.year}</span>
                    <h3 className="font-semibold text-islamic-text-primary mt-1">{event.event}</h3>
                    <p className="text-sm text-islamic-text-secondary mt-1">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sifaat (Attributes) */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-islamic-gold" />
          Sifaat — Attributes of the Prophet ﷺ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sifaat.map((sifah, index) => (
            <div key={index} className="islamic-card p-4">
              <p className="font-arabic text-2xl text-islamic-gold mb-2 text-center">{sifah.arabic}</p>
              <h3 className="font-semibold text-islamic-text-primary mb-2 text-center">{sifah.title}</h3>
              <p className="text-sm text-islamic-text-secondary">{sifah.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Names of the Prophet */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-islamic-gold" />
          Asma-e-Nabi ﷺ — Names of the Prophet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {prophetNames.map((name, index) => (
            <div key={index} className="islamic-card p-4 relative group hover:border-islamic-gold/50 transition-colors">
              <div className="text-center mt-2">
                <p className="font-arabic text-3xl text-islamic-gold mb-2">{name.arabic}</p>
                <p className="font-semibold text-islamic-text-primary mb-1">{name.transliteration}</p>
                <p className="text-sm text-islamic-text-secondary">{name.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Akhlaq (Character) */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-islamic-gold" />
          Akhlaq — Character of the Best of Mankind
        </h2>
        <div className="islamic-card p-6">
          <p className="text-islamic-text-secondary mb-4 italic">"Aisha (RA) was asked about his character. She said: 'His character was the Quran.'" — Sahih Muslim</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {akhlaq.map((trait, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-islamic-gold flex-shrink-0" />
                <span className="text-islamic-text-secondary text-sm">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Miracles */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-islamic-gold" />
          Mu'jizaat — Miracles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {miracles.map((miracle, index) => (
            <div key={index} className="islamic-card p-4">
              <h3 className="font-semibold text-islamic-gold mb-2">{miracle.title}</h3>
              <p className="text-sm text-islamic-text-secondary">{miracle.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Wives (Mothers of Believers) */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-islamic-gold" />
          Ummahāt al-Mu'minīn — Mothers of the Believers
        </h2>
        <div className="space-y-4">
          {wives.map((wife, index) => (
            <div key={index} className="islamic-card p-4 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-islamic-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="text-islamic-gold text-sm font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-islamic-text-primary">{wife.name}</h3>
                <span className="text-xs text-islamic-gold">{wife.period}</span>
                <p className="text-sm text-islamic-text-secondary mt-1">{wife.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Darood Shareef */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Moon className="w-6 h-6 text-islamic-gold" />
          Darood Shareef — Salawat upon the Prophet ﷺ
        </h2>
        <p className="text-islamic-text-secondary mb-4 italic">"Allah and His angels send blessings upon the Prophet. O believers! Invoke blessings upon him, and salute him with worthy greetings of peace." — Surah Al-Ahzab 33:56</p>
        <div className="space-y-4">
          {darood.map((salat, index) => (
            <div key={index} className="islamic-card p-6">
              <h3 className="font-semibold text-islamic-gold mb-3">{salat.name}</h3>
              <p className="arabic-text text-lg text-islamic-text-primary mb-3 leading-loose">{salat.arabic}</p>
              <p className="text-sm text-islamic-text-secondary italic">{salat.translation}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quranic References */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-islamic-gold" />
          Quran on the Prophet ﷺ
        </h2>
        <div className="space-y-4">
          {quranicVerses.map((verse, index) => (
            <div key={index} className="islamic-card p-4 bg-islamic-bg-secondary rounded-xl">
              <p className="arabic-text text-xl text-islamic-gold mb-3 text-right leading-loose">{verse.arabic}</p>
              <p className="text-islamic-text-secondary">{verse.translation}</p>
              <p className="text-sm text-islamic-text-muted mt-2 font-medium">— {verse.reference}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Legacy */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-heading font-semibold text-islamic-text-primary mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-islamic-gold" />
          His Eternal Legacy
        </h2>
        <div className="islamic-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-islamic-bg-secondary rounded-xl">
              <div className="text-3xl font-bold text-islamic-gold mb-2">1.8B+</div>
              <div className="text-islamic-text-secondary text-sm">Muslims follow his Sunnah today</div>
            </div>
            <div className="text-center p-4 bg-islamic-bg-secondary rounded-xl">
              <div className="text-3xl font-bold text-islamic-gold mb-2">10M+</div>
              <div className="text-islamic-text-secondary text-sm">Huffaz preserve his Quran by heart</div>
            </div>
            <div className="text-center p-4 bg-islamic-bg-secondary rounded-xl">
              <div className="text-3xl font-bold text-islamic-gold mb-2">1,400+</div>
              <div className="text-islamic-text-secondary text-sm">Years his message has guided humanity</div>
            </div>
          </div>
          <p className="text-islamic-text-secondary mt-6 text-center leading-relaxed">
            "The Prophet ﷺ transformed a people who buried their daughters alive into a civilization that gave women rights centuries before the West. He united warring tribes into one Ummah. He gave the world the Quran — unchanged and unchallenged for 1,400 years. His Sunnah covers every aspect of human life. No human being has had a greater impact on humanity."
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
