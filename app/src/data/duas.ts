export interface Dua {
  id: string;
  titleEN: string;
  arabicText: string;
  transliteration: string;
  translationEN: string;
  translationUR?: string;
  situation: string;
  source: string;
  virtues?: string;
  audioUrl?: string;
}

export const duas: Dua[] = [
  {
    id: "morning-1",
    titleEN: "Morning Remembrance",
    arabicText: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Asbahna wa asbahal mulku lillah, walhamdu lillah, la ilaha illallah wahdahu la sharika lah, lahul mulku wa lahul hamdu, wa huwa ala kulli shayin qadeer. Rabbi as'aluka khayra ma fi hadhal yawmi wa khayra ma ba'dahu, wa a'oodhu bika min sharri ma fi hadhal yawmi wa sharri ma ba'dahu. Rabbi a'oodhu bika minal kasali wa soo'il kibar. Rabbi a'oodhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    translationEN: "We have reached the morning and the kingdom belongs to Allah. All praise is due to Allah. There is no god but Allah, alone without partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things competent. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
    translationUR: "ہم نے صبح کی اور بادشاہی اللہ کی ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، بادشاہی اسی کی ہے اور تعریف اسی کے لیے ہے، اور وہ ہر چیز پر قادر ہے۔ اے میرے رب! میں تجھ سے اس دن کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں، اور میں اس دن کے شر اور اس کے بعد کے شر سے تیری پناہ مانگتا ہوں۔ اے میرے رب! میں سستی اور بڑھاپے کی برائی سے تیری پناہ مانگتا ہوں۔ اے میرے رب! میں آگ کے عذاب اور قبر کے عذاب سے تیری پناہ مانگتا ہوں۔",
    situation: "Morning",
    source: "Muslim",
    virtues: "Protection and gratitude for reaching a new day."
  },
  {
    id: "evening-1",
    titleEN: "Evening Remembrance",
    arabicText: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Amsayna wa amsal mulku lillah, walhamdu lillah, la ilaha illallah wahdahu la sharika lah, lahul mulku wa lahul hamdu, wa huwa ala kulli shayin qadeer. Rabbi as'aluka khayra ma fi hadhihil laylati wa khayra ma ba'daha, wa a'oodhu bika min sharri ma fi hadhihil laylati wa sharri ma ba'daha. Rabbi a'oodhu bika minal kasali wa soo'il kibar. Rabbi a'oodhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
    translationEN: "We have reached the evening and the kingdom belongs to Allah. All praise is due to Allah. There is no god but Allah, alone without partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things competent. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
    translationUR: "ہم نے شام کی اور بادشاہی اللہ کی ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، بادشاہی اسی کی ہے اور تعریف اسی کے لیے ہے، اور وہ ہر چیز پر قادر ہے۔ اے میرے رب! میں تجھ سے اس رات کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں، اور میں اس رات کے شر اور اس کے بعد کے شر سے تیری پناہ مانگتا ہوں۔ اے میرے رب! میں سستی اور بڑھاپے کی برائی سے تیری پناہ مانگتا ہوں۔ اے میرے رب! میں آگ کے عذاب اور قبر کے عذاب سے تیری پناہ مانگتا ہوں۔",
    situation: "Evening",
    source: "Muslim",
    virtues: "Protection and gratitude for safe passage through the day."
  },
  {
    id: "sleep-1",
    titleEN: "Before Sleeping",
    arabicText: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translationEN: "In Your name, O Allah, I die and I live.",
    translationUR: "تیرے نام سے اے اللہ میں مرتا اور جیتا ہوں۔",
    situation: "Sleep",
    source: "Bukhari",
    virtues: "Sunnah remembrance before sleep."
  },
  {
    id: "wake-1",
    titleEN: "Upon Waking Up",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahiyana ba'da ma amatana wa ilayhin-nushoor",
    translationEN: "All praise is to Allah who gave us life after He had caused us to die and to Him is the resurrection.",
    translationUR: "تمام تعریفیں اس اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔",
    situation: "Waking Up",
    source: "Bukhari",
    virtues: "Gratitude for being granted another day of life."
  },
  {
    id: "home-1",
    titleEN: "Entering Home",
    arabicText: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa alallahi rabbina tawakkalna",
    translationEN: "In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we rely.",
    translationUR: "اللہ کے نام سے ہم داخل ہوئے، اور اللہ کے نام سے ہم نکلے، اور اپنے رب اللہ پر ہم نے بھروسہ کیا۔",
    situation: "Entering Home",
    source: "Abu Dawud",
    virtues: "Protection for the house and family."
  },
  {
    id: "home-2",
    titleEN: "Leaving Home",
    arabicText: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
    transliteration: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah",
    translationEN: "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.",
    translationUR: "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور گناہوں سے بچنے کی ہمت اور نیکی کرنے کی طاقت صرف اللہ کی طرف سے ہے۔",
    situation: "Leaving Home",
    source: "Abu Dawud",
    virtues: "Allah's guidance and protection while outside."
  },
  {
    id: "eating-1",
    titleEN: "Before Eating",
    arabicText: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translationEN: "In the name of Allah.",
    translationUR: "اللہ کے نام سے۔",
    situation: "Eating",
    source: "Bukhari",
    virtues: "Blessings in sustenance."
  },
  {
    id: "eating-2",
    titleEN: "After Eating",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ",
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha, wa razaqanihi min ghayri hawlin minni wa la quwwah",
    translationEN: "Praise is to Allah who has fed me this and provided it for me without any might or power from myself.",
    translationUR: "تمام تعریفیں اس اللہ کے لیے ہیں جس نے مجھے یہ کھلایا اور میرے لیے اس کا رزق مہیا کیا بغیر میری کسی طاقت اور قوت کے۔",
    situation: "Eating",
    source: "Tirmidhi",
    virtues: "Forgiveness of past sins."
  },
  {
    id: "travel-1",
    titleEN: "For Traveling",
    arabicText: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    transliteration: "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun",
    translationEN: "Glory to Him who has subjected this to us, and we could not have done it. Indeed, to our Lord we will return.",
    translationUR: "پاک ہے وہ ذات جس نے اس (سواری) کو ہمارے بس میں کر دیا حالانکہ ہم اسے بس میں کرنے والے نہ تھے، اور بے شک ہم اپنے رب ہی کی طرف لوٹنے والے ہیں۔",
    situation: "Travel",
    source: "Quran 43:13-14",
    virtues: "Safety and protection during travel."
  },
  {
    id: "knowledge-1",
    titleEN: "Seeking Knowledge",
    arabicText: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilman",
    translationEN: "My Lord, increase me in knowledge.",
    translationUR: "اے میرے رب، میرے علم میں اضافہ فرما۔",
    situation: "Study",
    source: "Quran 20:114",
    virtues: "Divine help in learning and memory."
  },
  {
    id: "distress-1",
    titleEN: "In Times of Distress",
    arabicText: "لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translationEN: "There is no god but You, glory to You. Indeed, I have been of the wrongdoers.",
    translationUR: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی ظالموں میں سے تھا۔",
    situation: "Distress",
    source: "Quran 21:87",
    virtues: "Relief from anxiety and sorrow (Dua of Prophet Yunus AS)."
  },
  {
    id: "distress-2",
    titleEN: "Relief from Heartbreak/Stress",
    arabicText: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    transliteration: "Allahumma inni a'oodhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal",
    translationEN: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.",
    translationUR: "اے اللہ! میں فکر اور غم، عاجزی اور سستی، بخل اور بزدلی، قرض کے بوجھ اور لوگوں کے غلبے سے تیری پناہ مانگتا ہوں۔",
    situation: "Distress",
    source: "Bukhari",
    virtues: "Comprehensive protection from mental and social burdens."
  },
  {
    id: "parents-1",
    titleEN: "Dua for Parents",
    arabicText: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir-hamhuma kama rabbayani sagheera",
    translationEN: "My Lord, have mercy upon them as they brought me up when I was small.",
    translationUR: "اے میرے رب! ان دونوں پر رحم فرما جیسا کہ انہوں نے بچپن میں میری پرورش کی۔",
    situation: "Family",
    source: "Quran 17:24",
    virtues: "Fulfilling parents' rights and seeking mercy for them."
  },
  {
    id: "patience-1",
    titleEN: "For Patience and Firmness",
    arabicText: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
    transliteration: "Rabbana afrigh 'alayna sabran wa tawaffana muslimeen",
    translationEN: "Our Lord, pour upon us patience and let us die as Muslims.",
    translationUR: "اے ہمارے رب! ہم پر صبر انڈیل دے اور ہمیں مسلمان ہونے کی حالت میں موت دے۔",
    situation: "Hardship",
    source: "Quran 7:126",
    virtues: "Seeking steadfastness during trials."
  },
  {
    id: "forgiveness-1",
    titleEN: "The Master of Forgiveness (Sayyidul Istighfar)",
    arabicText: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allahumma anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'oodhu bika min sharri ma sana'tu, aboo'u laka bini'matika 'alayya, wa aboo'u laka bidhanbi faghfir li, fa'innahu la yaghfirudh-dhunooba illa Anta",
    translationEN: "O Allah, You are my Lord, none has the right to be worshiped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil which I have committed. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.",
    translationUR: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے ہی مجھے پیدا کیا اور میں تیرا بندہ ہوں اور میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے ہوئے کاموں کے شر سے تیری پناہ مانگتا ہوں۔ میں تیرے سامنے تیری ان نعمتوں کا اعتراف کرتا ہوں جو مجھ پر ہیں اور میں اپنے گناہوں کا اعتراف کرتا ہوں، پس مجھے بخش دے، کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخش سکتا۔",
    situation: "Repentance",
    source: "Bukhari",
    virtues: "If recited in the day/night with conviction and one dies, they enter Paradise."
  },
  {
    id: "success-1",
    titleEN: "Dua for Success in Both Worlds",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar",
    translationEN: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    translationUR: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا لے۔",
    situation: "General",
    source: "Quran 2:201",
    virtues: "The most frequent dua of the Prophet Muhammad ﷺ."
  },
  {
    id: "protection-1",
    titleEN: "Protection from All Harm",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim",
    translationEN: "In the name of Allah, with whose name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.",
    translationUR: "اللہ کے نام سے، جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی، اور وہی سب کچھ سننے والا، سب کچھ جاننے والا ہے۔",
    situation: "Morning/Evening",
    source: "Abu Dawud & Tirmidhi",
    virtues: "Recite 3 times for complete protection from sudden calamities."
  },
  {
    id: "sick-1",
    titleEN: "Dua for Visiting the Sick",
    arabicText: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    transliteration: "La ba'sa tahoorun in sha Allah",
    translationEN: "No need to worry, it is a purification, if Allah wills.",
    translationUR: "کوئی حرج نہیں، یہ گناہوں سے پاک کرنے والی بیماری ہے، اگر اللہ نے چاہا۔",
    situation: "Sick",
    source: "Bukhari",
    virtues: "Comforting the patient and seeking divine healing."
  },
  {
    id: "guidance-1",
    titleEN: "Dua for Firmness in Faith",
    arabicText: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Ya Muqallibal-qulubi thabbit qalbi 'ala deenik",
    translationEN: "O Turner of the hearts, keep my heart firm upon Your religion.",
    translationUR: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت قدم رکھ۔",
    situation: "Faith",
    source: "Tirmidhi",
    virtues: "Protection against deviation from the straight path."
  },
  {
    id: "decision-1",
    titleEN: "Dua for Making a Decision (Istikhara)",
    arabicText: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ...",
    transliteration: "Allahumma inni astakheeruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min fadlikal-'azeem...",
    translationEN: "O Allah, I consult You through Your knowledge and I seek strength through Your power, and I ask of Your great bounty...",
    translationUR: "اے اللہ! میں تیرے علم کی مدد سے خیر طلب کرتا ہوں اور تیری قدرت کی مدد سے طاقت مانگتا ہوں اور میں تیرے فضلِ عظیم کا سوال کرتا ہوں...",
    situation: "Decision",
    source: "Bukhari",
    virtues: "Divine guidance in matters of choice."
  },
  {
    id: "difficulty-1",
    titleEN: "Dua for Difficulty",
    arabicText: "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً",
    transliteration: "Allahumma la sahla illa ma ja'altahu sahlan, wa anta taj'alul-hazna idha shi'ta sahlan",
    translationEN: "O Allah, there is no ease except in that which You have made easy, and You make the difficulty, if You wish, easy.",
    translationUR: "اے اللہ! کوئی کام آسان نہیں مگر وہی جسے تو آسان کر دے، اور تو جب چاہتا ہے مشکل کو آسان کر دیتا ہے۔",
    situation: "Hardship",
    source: "Ibn Hibban",
    virtues: "Seeking ease in challenging tasks."
  },
  {
    id: "entering-masjid-1",
    titleEN: "Entering the Mosque",
    arabicText: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahummaf-tah lee abwaba rahmatik",
    translationEN: "O Allah, open the doors of Your mercy for me.",
    translationUR: "اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔",
    situation: "Mosque",
    source: "Muslim",
    virtues: "Seeking divine mercy upon entering the house of Allah."
  },
  {
    id: "leaving-masjid-1",
    titleEN: "Leaving the Mosque",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahum-ma in-ni as'aluka min fadlik",
    translationEN: "O Allah, I ask You from Your bounty.",
    translationUR: "اے اللہ! میں تجھ سے تیرے فضل کا سوال کرتا ہوں۔",
    situation: "Mosque",
    source: "Muslim",
    virtues: "Seeking provisions and success after worship."
  },
  {
    id: "after-salah-1",
    titleEN: "Remembrance After Prayer",
    arabicText: "أَسْتَغْفِرُ اللَّهَ (ثَلاثاً) اللَّهُمَّ أَنْتَ السَّلامُ، وَمِنْكَ السَّلامُ، تَبَارَكْتَ يَا ذَا الْجَلالِ وَالإِكْرَامِ",
    transliteration: "Astaghfirullah (3x). Allahumma Antas-Salamu wa minkas-salamu, tabarakta ya Dhal-Jalali wal-Ikram",
    translationEN: "I ask Allah for forgiveness (3x). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
    translationUR: "میں اللہ سے بخشش مانگتا ہوں۔ اے اللہ! تو سلامتی والا ہے اور تیری ہی طرف سے سلامتی ہے، تو بڑی برکت والا ہے، اے بزرگی اور عزت والے۔",
    situation: "Prayer",
    source: "Muslim",
    virtues: "Standard sunnah dhikr immediately after fard prayers."
  },
  {
    id: "clothes-1",
    titleEN: "Upon Dressing",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration: "Alhamdu lillahil-ladhi kasani hadha (ath-thawba) wa razaqanihi min ghayri hawlin minni wa la quwwah",
    translationEN: "Praise be to Allah who has clothed me with this garment and provided it for me with no power or might from myself.",
    translationUR: "تمام تعریفیں اللہ کے لیے ہیں جس نے مجھے یہ لباس پہنایا اور یہ مجھے میری کسی طاقت اور قوت کے بغیر عطا فرمایا۔",
    situation: "Dressing",
    source: "Abu Dawud",
    virtues: "Forgiveness for previous sins."
  },
  {
    id: "toilet-1",
    titleEN: "Entering the Toilet",
    arabicText: "بِسْمِ اللَّهِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Bismillah. Allahumma inni a'oodhu bika minal-khubuthi wal-khaba'ith",
    translationEN: "In the name of Allah. O Allah, I seek refuge in You from the male and female devils.",
    translationUR: "اللہ کے نام سے۔ اے اللہ! میں خبیث جنوں اور جنیوں سے تیری پناہ مانگتا ہوں۔",
    situation: "Toilet",
    source: "Bukhari",
    virtues: "Protection from harm and impurity."
  },
  {
    id: "toilet-2",
    titleEN: "Leaving the Toilet",
    arabicText: "غُفْرَانَكَ",
    transliteration: "Ghufranak",
    translationEN: "I seek Your forgiveness.",
    translationUR: "میں تجھ سے بخشش مانگتا ہوں۔",
    situation: "Toilet",
    source: "Abu Dawud",
    virtues: "Gratefulness for relief and forgiveness for moments without dhikr."
  },
  {
    id: "protection-2",
    titleEN: "Protection for Children",
    arabicText: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    transliteration: "U'eedhukuma bikalimatil-lahit-tammah, min kulli shaytanin wa hammah, wa min kulli 'aynin lammah",
    translationEN: "I seek refuge for you in the perfect words of Allah from every devil and every poisonous creature and from every evil eye.",
    translationUR: "میں تم دونوں کو اللہ کے کامل کلمات کی پناہ میں دیتا ہوں، ہر شیطان اور زہریلے جانور سے اور ہر نقصان پہنچانے والی آنکھ سے۔",
    situation: "Children",
    source: "Bukhari",
    virtues: "Dua of Prophet Muhammad ﷺ for Hasan and Husayn RA."
  },
  {
    id: "anger-1",
    titleEN: "Upon Feeling Angry",
    arabicText: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'oodhu billahi minash-shaytanir-rajeem",
    translationEN: "I seek refuge in Allah from Satan the outcast.",
    translationUR: "میں شیطان مردود سے اللہ کی پناہ مانگتا ہوں۔",
    situation: "Anger",
    source: "Bukhari",
    virtues: "Snuffing out anger by seeking divine protection."
  },
  {
    id: "gathering-1",
    titleEN: "Expiation of a Gathering",
    arabicText: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    transliteration: "Subhanaka Allahumma wa bihamdika, ash-hadu an la ilaha illa Anta, astaghfiruka wa atoobu ilayk",
    translationEN: "Glory is to You, O Allah, and praise. I bear witness that there is no god but You. I seek Your forgiveness and repent to You.",
    translationUR: "اے اللہ! تو پاک ہے اپنی تعریف کے ساتھ، میں گواہی دیتا ہوں کہ تیرے سوا کوئی معبود نہیں، میں تجھ سے بخشش مانگتا ہوں اور تیری طرف توبہ کرتا ہوں۔",
    situation: "Gathering",
    source: "Abu Dawud",
    virtues: "Forgiveness for any idle talk or sins committed during the meeting."
  },
  {
    id: "sorrow-1",
    titleEN: "Dua for Grief and Sadness",
    arabicText: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شأْنِي كُلَّهُ، لا إِلَهَ إِلا أَنْتَ",
    transliteration: "Allahumma rahmataka arju fala takilni ila nafsi tarfata 'aynin, wa aslih li sha'ni kullahu, la ilaha illa Anta",
    translationEN: "O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye, and rectify for me all of my affairs. None has the right to be worshiped except You.",
    translationUR: "اے اللہ! میں تیری ہی رحمت کا امیدوار ہوں، پس مجھے ایک لمحے کے لیے بھی میرے نفس کے حوالے نہ کر، اور میرے تمام معاملات سنوار دے، تیرے سوا کوئی معبود نہیں۔",
    situation: "Sorrow",
    source: "Abu Dawud",
    virtues: "Relief from overwhelming burdens."
  },
  {
    id: "debt-1",
    titleEN: "Dua for Paying Off Debt",
    arabicText: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    transliteration: "Allahum-mak-finee bihalalika 'an haramika, wa agninee bifadlika 'amman siwaka",
    translationEN: "O Allah, suffice me with what You have allowed instead of what You have forbidden, and make me independent of all others besides You.",
    translationUR: "اے اللہ! مجھے اپنے حلال کے ساتھ اپنے حرام سے کافی کر دے، اور مجھے اپنے فضل سے اپنے سوا دوسروں سے بے نیاز کر دے۔",
    situation: "Debt",
    source: "Tirmidhi",
    virtues: "Assistance in clearing financial obligations."
  },
  {
    id: "rain-1",
    titleEN: "When it Rains",
    arabicText: "اللَّهُمَّ صَيِّباً نَافِعاً",
    transliteration: "Allahumma sayyiban nafi'an",
    translationEN: "O Allah, (bring) beneficial rain.",
    translationUR: "اے اللہ! (اسے) نفع بخش بارش بنا۔",
    situation: "Nature",
    source: "Bukhari",
    virtues: "Seeking blessings in natural phenomena."
  },
  {
    id: "thunder-1",
    titleEN: "Upon Hearing Thunder",
    arabicText: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلائِكَةُ مِنْ خِيفَتِهِ",
    transliteration: "Subhanalladhi yusabbihur-ra'du bihamdihi wal-mala'ikatu min kheefatihi",
    translationEN: "Glory is to Him whom the thunder glorifies with His praise and the angels from fear of Him.",
    translationUR: "پاک ہے وہ ذات جس کی تسبیح کڑک اس کی تعریف کے ساتھ اور فرشتے اس کے خوف سے کرتے ہیں۔",
    situation: "Nature",
    source: "Muwatta Malik",
    virtues: "Acknowledging Allah's majesty in power."
  },
  {
    id: "fasting-1",
    titleEN: "Upon Breaking Fast (Iftar)",
    arabicText: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration: "Dhahabadh-dhama'u wabtallatil-'urooqu wa thabatal-ajru in sha Allah",
    translationEN: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    translationUR: "پیاس چلی گئی، رگیں تر ہو گئیں اور اجر ثابت ہو گیا اگر اللہ نے چاہا۔",
    situation: "Fasting",
    source: "Abu Dawud",
    virtues: "Sunnah dua at the moment of breaking fast."
  },
  {
    id: "fasting-2",
    titleEN: "Dua for Suhoor (Pre-dawn meal)",
    arabicText: "بِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    transliteration: "Bi sawmi ghadin nawaytu min shahri ramadan",
    translationEN: "I intend to fast tomorrow for the month of Ramadan.",
    translationUR: "میں نے کل کے رمضان کے روزے کی نیت کی۔",
    situation: "Fasting",
    source: "Traditional",
    virtues: "Verbalizing intention (optional but common)."
  },
  {
    id: "jinn-1",
    titleEN: "Protection from Jinn (at Night)",
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oodhu bikalimatil-lahit-tammati min sharri ma khalaq",
    translationEN: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    translationUR: "میں اللہ کے کامل کلمات کی پناہ مانگتا ہوں اس چیز کے شر سے جو اس نے پیدا کی۔",
    situation: "Nature",
    source: "Muslim",
    virtues: "Protection while staying in a new place or at night."
  },
  {
    id: "marriage-1",
    titleEN: "Congratulating Newlyweds",
    arabicText: "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration: "Barakallahu laka, wa baraka 'alayka, wa jama'a baynakuma fee khayr",
    translationEN: "May Allah bless you, and shower His blessings upon you, and join you both in goodness.",
    translationUR: "اللہ تمہیں برکت دے، اور تم پر برکت نازل فرمائے، اور تم دونوں کو خیر پر جمع کرے۔",
    situation: "Marriage",
    source: "Abu Dawud",
    virtues: "Sunnah blessing for a new marriage."
  },
  {
    id: "prophet-1",
    titleEN: "Salutation upon the Prophet (Durood)",
    arabicText: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka Hamidun Majid",
    translationEN: "O Allah, send prayers upon Muhammad and upon the family of Muhammad as You sent prayers upon Ibrahim and upon the family of Ibrahim; indeed, You are Praiseworthy and Glorious.",
    translationUR: "اے اللہ! محمد ﷺ اور محمد ﷺ کی آل پر رحمت نازل فرما جس طرح تو نے ابراہیم علیہ السلام اور ابراہیم علیہ السلام کی آل پر رحمت نازل فرمائی، یقیناً تو تعریف کے لائق اور بڑی شان والا ہے۔",
    situation: "General",
    source: "Bukhari",
    virtues: "Immense reward and closeness to the Prophet ﷺ."
  },
  {
    id: "travel-2",
    titleEN: "Returning from Travel",
    arabicText: "آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ",
    transliteration: "Ayiboona, ta'iboona, 'abidoona, li-Rabbina hamidoon",
    translationEN: "We return, we repent, we worship, and we praise our Lord.",
    translationUR: "ہم پلٹنے والے ہیں، توبہ کرنے والے ہیں، عبادت کرنے والے ہیں اور اپنے رب کی تعریف کرنے والے ہیں۔",
    situation: "Travel",
    source: "Muslim",
    virtues: "Seeking safe return and spiritual renewal."
  },
  {
    id: "fear-1",
    titleEN: "Dua When Fearing a People",
    arabicText: "اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ",
    transliteration: "Allahum-mak-fineehim bima shi't",
    translationEN: "O Allah, suffice me against them however You wish.",
    translationUR: "اے اللہ! ان کے مقابلے میں تو مجھے کافی ہو جا جس طرح تو چاہے؟",
    situation: "Fear",
    source: "Muslim",
    virtues: "Seeking divine protection from enemies."
  },
  {
    id: "wudhu-1",
    titleEN: "After Completing Wudhu",
    arabicText: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lahu wa ash-hadu anna Muhammadan 'abduhu wa Rasuluh",
    translationEN: "I bear witness that there is no god but Allah alone without partner, and I bear witness that Muhammad is His servant and Messenger.",
    translationUR: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے، اس کا کوئی شریک نہیں اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔",
    situation: "Wudhu",
    source: "Muslim",
    virtues: "All eight gates of Paradise are opened for the reciter."
  },
  {
    id: "azan-1",
    titleEN: "Dua After Azan (Call to Prayer)",
    arabicText: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ",
    transliteration: "Allahumma Rabba hadhihid-da'watit-tammah, was-salatil-qa'imah, ati Muhammadan al-Waseelata wal-fadeelah, wab'athhu maqaman mahmoodan-illadhi wa'adtah",
    translationEN: "O Allah, Lord of this perfect call and the established prayer, grant Muhammad the Intercession and favor, and raise him to the honored station You have promised him.",
    translationUR: "اے اللہ! اس کامل پکار اور کھڑی ہونے والی نماز کے رب! محمد ﷺ کو وسیلہ اور فضیلت عطا فرما اور انہیں اس مقامِ محمود پر پہنچا دے جس کا تو نے ان سے وعدہ کیا ہے۔",
    situation: "Prayer",
    source: "Bukhari",
    virtues: "Ensures the intercession (Shifa'at) of the Prophet ﷺ on Judgment Day."
  },
  {
    id: "worry-1",
    titleEN: "Dua for Grief and Worry",
    arabicText: "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Hasbiyallahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem",
    translationEN: "Allah is sufficient for me. There is no god but Him. I have placed my trust in Him, He is the Lord of the Majestic Throne.",
    translationUR: "مجھے اللہ کافی ہے، اس کے سوا کوئی معبود نہیں، میں نے اسی پر بھروسہ کیا اور وہی عرشِ عظیم کا رب ہے۔",
    situation: "Distress",
    source: "Abu Dawud",
    virtues: "Recite 7 times morning/evening; Allah will suffice the reciter in whatever worries them."
  },
  {
    id: "sleep-2",
    titleEN: "Dua for Sleeping Troubles/Terror",
    arabicText: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ",
    transliteration: "A'oodhu bi-kalimatil-lahit-tammati min ghadabihi wa 'iqabihi, wa sharri 'ibadihi, wa min hamazatish-shayateeni wa an yahduroon",
    translationEN: "I seek refuge in the perfect words of Allah from His anger and punishment, from the evil of His slaves, and from the whispers of devils and lest they should come near me.",
    translationUR: "میں اللہ کے کامل کلمات کی پناہ مانگتا ہوں اس کے غصے اور عذاب سے، اس کے بندوں کے شر سے، اور شیطانوں کے وسوسوں سے اور ان کے میرے پاس آنے سے۔",
    situation: "Sleep",
    source: "Abu Dawud & Tirmidhi",
    virtues: "Protection from nightmares and disturbances during sleep."
  },
  {
    id: "evil-eye-1",
    titleEN: "Dua for Protection from Evil Eye",
    arabicText: "مَا شَاءَ اللَّهُ لاَ قُوَّةَ إِلاَّ بِاللَّهِ",
    transliteration: "Ma sha' Allah, la quwwata illa billah",
    translationEN: "What Allah wills (has happened); there is no power except with Allah.",
    translationUR: "جو اللہ نے چاہا (وہی ہوا)، اللہ کے سوا کوئی طاقت نہیں۔",
    situation: "Protection",
    source: "Quran 18:39",
    virtues: "Recite when seeing something pleasing to prevent envying or causing evil eye."
  },
  {
    id: "victory-1",
    titleEN: "Dua for Victory and Support",
    arabicText: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration: "Rabbana-ghfir lana dhunoobana wa israfana fee amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafireen",
    translationEN: "Our Lord, forgive us our sins and the excess [committed] in our affairs and plant firmly our feet and give us victory over the disbelieving people.",
    translationUR: "اے ہمارے رب! ہمارے گناہوں کو بخش دے اور ہمارے معاملات میں ہماری زیادتیوں کو معاف فرما، ہمارے قدموں کو ثابت رکھ اور ہمیں کافروں کے مقابلے میں فتح عطا فرما۔",
    situation: "General",
    source: "Quran 3:147",
    virtues: "Seeking divine help and steadfastness."
  },
  {
    id: "wealth-1",
    titleEN: "Dua for Barakah in Wealth",
    arabicText: "اللَّهُمَّ أَكْثِرْ مَالِي وَوَلَدِي، وَبَارِكْ لِي فِيمَا أَعْطَيْتَنِي",
    transliteration: "Allahumma akthir malee wa waladee, wa barik lee feema a'taytanee",
    translationEN: "O Allah, increase my wealth and offspring, and bless me in what You have given me.",
    translationUR: "اے اللہ! میرے مال اور اولاد میں اضافہ فرما، اور جو کچھ تو نے مجھے عطا کیا اس میں میرے لیے برکت عطا فرما۔",
    situation: "General",
    source: "Bukhari",
    virtues: "Dua of the Prophet ﷺ for Anas ibn Malik RA."
  },
  {
    id: "thanks-1",
    titleEN: "Dua for Expressing Thanks",
    arabicText: "جَزَاكَ اللَّهُ خَيْراً",
    transliteration: "Jazakallahu khayran",
    translationEN: "May Allah reward you with goodness.",
    translationUR: "اللہ آپ کو بہتر بدلہ دے۔",
    situation: "Interpersonal",
    source: "Tirmidhi",
    virtues: "The best way to thank someone for a favor."
  }
];

export const getDuasBySituation = (situation: string): Dua[] => {
  return duas.filter(d => d.situation.toLowerCase() === situation.toLowerCase());
};

export const getDuaById = (id: string): Dua | undefined => {
  return duas.find(d => d.id === id);
};

export const getAllSituations = (): string[] => {
  return [...new Set(duas.map(d => d.situation))];
};
