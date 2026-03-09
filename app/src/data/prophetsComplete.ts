export interface Prophet {
  id: number;
  nameArabic: string;
  nameEnglish: string;
  nameTransliteration: string;
  title: string;
  titleHinglish: string;
  nation: string;
  nationHinglish: string;
  timePeriod: string;
  timePeriodHinglish: string;
  story: string;
  storyHinglish: string;
  lessons: string[];
  lessonsHinglish: string[];
  miracles: string[];
  miraclesHinglish: string[];
  quranicRefs: string[];
  characterTraits: string[];
  characterTraitsHinglish: string[];
  imageUrl?: string;
  // New expanded fields
  earlyLife?: string;
  earlyLifeHinglish?: string;
  family?: string;
  familyHinglish?: string;
  prophecyTimeline?: string;
  prophecyTimelineHinglish?: string;
  revelations?: string[];
  revelationsHinglish?: string[];
  conflicts?: string[];
  conflictsHinglish?: string[];
  companions?: string[];
  companionsHinglish?: string[];
  enemies?: string[];
  enemiesHinglish?: string[];
  deathLegacy?: string;
  deathLegacyHinglish?: string;
  tafseerInsights?: string[];
  tafseerInsightsHinglish?: string[];
  psychologicalAspects?: string;
  psychologicalAspectsHinglish?: string;
  practicalApplications?: string[];
  practicalApplicationsHinglish?: string[];
  comparativeAnalysis?: string;
  comparativeAnalysisHinglish?: string;
}

export const prophets: Prophet[] = [
  {
    id: 1,
    nameArabic: "آدم",
    nameEnglish: "Adam",
    nameTransliteration: "Adam (AS)",
    title: "The First Prophet and Father of Humanity",
    titleHinglish: "Pehle Nabi aur Insaaniyat ke Waalid",
    nation: "None - First Human",
    nationHinglish: "Koi nahi - Pehla Insaan",
    timePeriod: "Creation of Earth",
    timePeriodHinglish: "Zameen ki takhleeq ke waqt",
    story: `Adam (AS) was the first human being created by Allah. Allah fashioned him with His own hands from clay and breathed His spirit into him. When Allah commanded the angels to prostrate before Adam, all obeyed except Iblis (Satan), who refused out of arrogance.

Allah placed Adam and his wife Hawwa (Eve) in the beautiful Garden of Jannah (Paradise), where they could enjoy everything except one forbidden tree. However, Satan whispered to them and deceived them into eating from that tree. As a result, they were sent down to Earth as a test for humanity.

On Earth, Adam (AS) learned to work, cultivate the land, and worship Allah. He was taught words of repentance by Allah, which became the first prayer of humanity. Adam (AS) lived for about 960 years and had many children. He is considered the father of all humanity, and all prophets descended from him.`,
    storyHinglish: `Hazrat Adam (AS) Allah ke banaye hue pehle insaan the. Allah ne unhein apne haathon se mitti se banaya aur apni rooh unmein phoonki. Jab Allah ne farishton ko hukm diya ke Adam (AS) ko sajda karein, to sab ne farmabardari ki siwaey Iblis (Shaitan) ke, jisne takabbur ki wajah se inkar kar diya.

Allah ne Adam (AS) aur unki biwi Hawwa (Hawwa) ko Jannat ke haseen bagh mein rakha, jahan wo har cheez ka faida utha sakte the siwaey ek mamnu' darakht ke. Lekin Shaitan ne unhein waswasa diya aur dhoka dekar us darakht se khane par majboor kiya. Is natije mein, unhein Zameen par insaaniyat ki aazmaish ke taur par bheja gaya.

Zameen par, Adam (AS) ne kaam karna, zameen ki kheti karna aur Allah ki ibadat karna seekha. Allah ne unhein tauba ke alfaz sikhaye, jo insaaniyat ki pehli dua bani. Adam (AS) taqreeban 960 saal zinda rahe aur unke bohat se bache hue. Unhein tamam insaaniyat ka waalid maana jaata hai, aur tamam anbiya unhi ki nasal se hain.`,
    lessons: [
      "Repentance is always accepted by Allah",
      "Satan is the enemy of humanity",
      "This world is a place of test",
      "Allah forgives those who sincerely repent"
    ],
    lessonsHinglish: [
      "Allah hamesha tauba qubool karta hai",
      "Shaitan insaaniyat ka dushman hai",
      "Ye duniya aazmaish ki jagah hai",
      "Allah unki tauba qubool karta hai jo dil se tauba karte hain"
    ],
    miracles: [
      "Created directly by Allah without parents",
      "Given knowledge of all things' names",
      "Lived in Paradise before coming to Earth"
    ],
    miraclesHinglish: [
      "Allah ke sidhe haathon se bina walidain ke paida kiye gaye",
      "Tamam cheezon ke naam ka ilm ata kiya gaya",
      "Zameen par aane se pehle Jannat mein rehte the"
    ],
    quranicRefs: ["Surah Al-Baqarah 2:30-39", "Surah Al-A'raf 7:11-25", "Surah Al-Hijr 15:26-44"],
    characterTraits: ["Obedient", "Repentant", "First Prophet"],
    characterTraitsHinglish: ["Farmabardar", "Tauba karne wale", "Pehle Nabi"],
    earlyLife: "Allah created Adam (AS) from clay - a mixture of different colored earth. He was fashioned with divine skill and given life through Allah's command. The process of his creation is described in the Quran as Allah saying 'Be' and it was. Adam was given the ability to distinguish between good and evil, and was taught the names of all things - a knowledge that even the angels did not possess. This made the angels realize the superiority of humans and submit to Allah's will.",
    earlyLifeHinglish: "Allah ne Hazrat Adam (AS) ko mitti se banaya - alag alag rang ki mitti ka mixture. Unhein ilahi hunarmandi ke saath banaya gaya aur Allah ke hukm se zindagi di gayi. Unki takhleeq ka process Quran mein is tarah describe kiya gaya hai ke Allah ne 'Ho' kaha aur ho gaya. Adam ko bure aur achhe mein farq karne ki taqat di gayi thi, aur unhein tamam cheezon ke naam sikhaye gaye - ye ilm even farishton ke paas nahi tha. Is ne farishton ko insaan ki superior realise karaya aur Allah ki marzi ko tasleem karna.",
    family: "Adam (AS) was married to Hawwa (Eve), who was created from Adam's rib. Together they had many children - the Quran mentions they had sons and daughters. Their children married each other, and from them the entire human population descended. Key descendants include Seth (Sheth), who succeeded Adam as a prophet, and later generations leading to Noah and Abraham.",
    familyHinglish: "Hazrat Adam (AS) ki shadi Hawwa (Eve) se hui, jo Adam ki tar se banayi gayi thi. Unke bohat se bache hue - Quran mein mention hai ke unke bete aur beti the. Unke bacheyon ne aapas mein shadi ki, aur un se poora insaani population paida hui. Important aulad mein Sheth shamil hain, jo Adam ke baad Nabi bane, aur baad ki generation Nuh aur Ibrahim tak jati hain.",
    prophecyTimeline: "Adam (AS) was the first prophet, receiving his prophethood immediately after being created and placed in Paradise. He lived approximately 960 years, serving as a prophet for most of this period. His mission was to establish worship of Allah alone and to pass on divine knowledge to future generations.",
    prophecyTimelineHinglish: "Adam (AS) pehle Nabi the, jinhone apni nabuvat Jannat mein rakhe jane aur banaye jane ke turant baad haasil ki. Unhone taqreeban 960 saal jeeke, is period mein zyada tar nabuvat ki. Unka mission sirf Allah ki ibadat establish karna aur aane wali generation ko ilahi gyaan dena tha.",
    revelations: ["The names of all things (Asma ul-Husna)", "Words of repentance (kalimat al-taubah)", "Guidelines for living in this world"],
    revelationsHinglish: ["Tamam cheezon ke naam (Asma ul-Husna)", "Tauba ke alfaz (kalimat al-taubah)", "Is duniya mein jeene ke guidelines"],
    conflicts: ["Satan's refusal to prostrate to Adam", "Seduction by Satan in Paradise", "The sin of eating from the forbidden tree", "Initial grief after being sent to Earth"],
    conflictsHinglish: ["Shaitan ka Adam ko sajda karne se inkar", "Jannat mein Shaitan ka dhoka", "Mamnu' darakht se khane ka gunah", "Zameen par bheje jane ke baad pehla dukh"],
    companions: ["Hawwa (Eve) - his wife and companion", "Angels who were sent to assist him", "His obedient children who followed the straight path"],
    companionsHinglish: ["Hawwa (Eve) - unki biwi aur sathini", "Farishte jo unki madad ke liye bheje gaye", "Unke gehre bache jo sidq raah par chalte the"],
    enemies: ["Iblis (Satan) - his primary adversary", "Satan's offspring and whisperers", "Those who follow Satan's ways"],
    enemiesHinglish: ["Iblis (Shaitan) - unka pehla dushman", "Shaitan ki aulad aur waswason wale", "Jo log Shaitan ke raah par chalte hain"],
    deathLegacy: "Adam (AS) lived for about 960 years and passed away on Earth. He was buried near the location of the Dome of the Rock in Jerusalem, according to some traditions. His legacy is that of the father of humanity and the first prophet who established the fundamental principles of tawhid (oneness of Allah). All prophets descended from him, making him the root of prophetic lineage.",
    deathLegacyHinglish: "Adam (AS) taqreeban 960 saal jeeke aur Zameen par inteqal kar gaye. Kuch riwayaton ke mutabiq unhein Jerusalem mein Dome of the Rock ke paas dafn kiya gaya. Unki virasat insaaniyat ke baap aur pehle Nabi ki hai jinhone tawhid (Allah ki yakjeebi) ke buniyadi principles establish kiye. Tamam Nabi unki nasal se hue, jo unhe prophetic lineage ki root banata hai.",
    tafseerInsights: ["Classical scholars note that Adam's creation from clay signifies human connection to earth and humility", "The story of Adam teaches that humans were created for worship, not for worldly pursuits alone", "Ibn Kathir emphasizes that Adam's mistake was minor compared to his status as a prophet", "Al-Qurtubi notes that the 'words' Adam learned were actually names of Allah's attributes"],
    tafseerInsightsHinglish: ["Classical scholars note ke Adam ki mitti se takhleeq insaan ka zameen se rishta aur aajizi dikhati hai", "Adam ki kahani ye sikhati hai ke insaan sirf dunyavi maqsado ke liye nahi balki ibadat ke liye banaye gaye", "Ibn Kathir kehte hain ke Adam ki galti unke Nabi hone ke comparison mein minor thi", "Al-Qurtubi note karte hain ke 'alfaz' jo Adam ne sikhaye wo actually Allah ke sifaat ke naam the"],
    psychologicalAspects: "Adam experienced the full range of human emotions - joy in Paradise, temptation through Satan's whispers, the pain of sin and expulsion, the grief of separation from the Garden, and ultimately the hope of repentance and forgiveness. His experience shows that even prophets face trials and that sincere repentance can restore one's position with Allah. His story provides comfort to those who have made mistakes, showing that Allah's mercy is greater than any sin.",
    psychologicalAspectsHinglish: "Adam ne poore insani emotions experience kiye - Jannat mein khushi, Shaitan ke waswase se khed, gunah aur kharij kiye jane ka dard, Baghat se alag hone ka gham, aur akhir mein tauba aur maghfirat ki umeed. Unka experience dikhata hai ke even Nabi bhi aazmaish ka saamna karte hain aur sidq tauba apni position Allah ke saath restore kar sakti hai. Unki kahani un logon ko taqat deti hain jinhone galtiyan ki hain, ye dikhata hai ke Allah ki rehmat kisi bhi gunah se bara hai.",
    practicalApplications: ["Never despair of Allah's mercy - He forgave Adam and can forgive anyone", "Satan is a real enemy - we must be vigilant against his whispers", "This world is a test, not our final destination", "Repentance should be immediate and sincere when we make mistakes", "Knowledge is a gift from Allah - we should seek beneficial knowledge"],
    practicalApplicationsHinglish: ["Allah ki rehmat se kabhi naumaid hona - Us ne Adam ko maaf kiya aur kisi ko bhi maaf kar sakta hai", "Shaitan ek asl dushman hai - humein uske waswase se hoshiyar rehna chahiye", "Ye duniya aazmaish hai, humara aakhri manzil nahi", "Tauba turant aur sidq se karni chahiye jab hum galtiyan karte hain", "Ilm Allah ka tohfa hai - humein faayda mand ilm talab karna chahiye"],
    comparativeAnalysis: "Unlike later prophets who were sent to specific peoples, Adam was sent to all of humanity as the first human and prophet. His story forms the foundation for understanding human nature - that we are created from earth, have a covenant with Allah, and are prone to both obedience and sin. Unlike Ibrahim's test of sacrifice or Musa\\'s confrontation with Pharaoh, Adam's primary test was resisting personal temptation, showing different forms of trials for different prophets."
  },
  {
    id: 2,
    nameArabic: "إدريس",
    nameEnglish: "Idris",
    nameTransliteration: "Idris (AS)",
    title: "The Prophet of Wisdom and Knowledge",
    titleHinglish: "Hikmat aur Ilm ke Nabi",
    nation: "People of the region",
    nationHinglish: "Ilaqe ke log",
    timePeriod: "After Adam, before Noah",
    timePeriodHinglish: "Adam ke baad, Nuh se pehle",
    story: `Idris (AS) was the third prophet after Adam and his son Sheth. He was known for his great wisdom, knowledge, and righteousness. Allah raised him to a high status and he is mentioned in the Quran as being "raised to a high station."

Idris (AS) was the first to write with a pen and taught people astronomy, mathematics, and sewing. He was a patient and dedicated prophet who called people to worship Allah alone. His people listened to him and followed his guidance.

According to Islamic tradition, Allah raised Idris (AS) to the heavens without experiencing death. He is considered one of the ancestors of Prophet Muhammad ﷺ through his lineage connecting to Noah and Abraham.`,
    storyHinglish: `Hazrat Idris (AS) Adam (AS) aur unke bete Sheth ke teesre Nabi the. Unhein unki badi hikmat, ilm aur neki ke liye jaana jaata tha. Allah ne unhein buland maqam par pahunchaya aur Quran mein unka zikr "buland maqam par uthaye gaye" ke taur par hai.

Idris (AS) pehle shakhs the jinhon ne qalam se likhna shuru kiya aur logon ko falakiyat, hisaab aur silaai sikhayi. Wo sabr aur mukhlis Nabi the jinhon ne logon ko sirf Allah ki ibadat ki dawat di. Unki qaum ne unki baat maani aur unki hidayat par amal kiya.

Islami riwayat ke mutabiq, Allah ne Idris (AS) ko maut ki tasteer ke baghair aasmanon par utha liya. Unhein Huzoor ﷺ ke ajdaad mein se ek maana jaata hai jin ki nasl Nuh aur Ibrahim se jaa milti hai.`,
    lessons: [
      "Knowledge and wisdom are gifts from Allah",
      "Patience in calling people to truth",
      "Allah honors His righteous servants"
    ],
    lessonsHinglish: [
      "Ilm aur hikmat Allah ki tohfey hain",
      "Haqq ki dawat mein sabr karna",
      "Allah apne neik bandon ko izzat deta hai"
    ],
    miracles: [
      "Raised to heaven without death",
      "First to write with a pen",
      "Taught various sciences to people"
    ],
    miraclesHinglish: [
      "Maut ke baghair aasman par uthaye gaye",
      "Pehle shakhs jinhon ne qalam se likha",
      "Logon ko mukhtalif uloom sikhaye"
    ],
    quranicRefs: ["Surah Maryam 19:56-57", "Surah Al-Anbiya 21:85"],
    characterTraits: ["Wise", "Knowledgeable", "Patient"],
    characterTraitsHinglish: ["Hakeem", "Alim", "Sabr karne wale"],
    earlyLife: "Idris (AS) was born after Adam and Sheth, during the early generations of humanity. He was known from childhood for his exceptional intelligence and keen interest in seeking knowledge. Unlike many of his contemporaries who fell into idol worship, Idris remained committed to worshipping Allah alone from a young age. He was among those who preserved the pure monotheistic faith of Adam and passed it on to future generations.",
    earlyLifeHinglish: "Idris (AS) Adam aur Sheth ke baad paida hue, insaaniyat ki early generations ke dauran. Wo childhood se hi apni exceptional intelligence aur seeking knowledge ki keen interest ke liye jaane jaate the. Apni many contemporaries ke jaise jo buton ki ibadat mein gira, Idris ne chhoti umar se hi sirf Allah ki ibadat mein committed rehna. Wo un logon mein se the jinhone Adam ki pure monotheistic faith preserve ki aur aane wali generations ko passed ki.",
    family: "Idris (AS) is mentioned in Islamic tradition as being from the lineage of Prophet Adam. He is considered one of the ancestors of Prophet Muhammad (S) through his lineage connecting to Noah and Abraham. His descendants include many prophets and righteous people who continued the tradition of monotheism.",
    familyHinglish: "Idris (AS) Islamic tradition mein Nabi Adam ki lineage se mention kiye gaye hain. Wo Huzoor Muhammad (S) ke ancestors mein se ek maane jaate hain jin ki lineage Nuh aur Ibrahim se milti hai. Unke descendants mein bohat se Nabi aur neek log shamil hain jinhone monotheism ki tradition continue ki.",
    prophecyTimeline: "Idris (AS) received prophethood after the time of Adam and before Noah. He lived during an era when idol worship was beginning to spread among humanity. His mission was to call people back to the worship of the One True God and to preserve the knowledge and wisdom that Adam had taught. Traditional accounts suggest he lived for approximately 300 years.",
    prophecyTimelineHinglish: "Idris (AS) ko Adam ke baad aur Nuh se pehle nabuvat mili. Wo is era ke dauran jeete the jab buton ki ibadat insaaniyat mein shuru ho rahi thi. Unka mission logon ko Ek Sachay Khuda ki ibadat mein wapis lane aur Adam ne jo gyaan aur hikmat sikhaya tha usay preserve karne ka tha. Traditional accounts suggest karte hain ke wo taqreeban 300 saal jeete the.",
    revelations: ["Knowledge of writing and sciences", "Preservation of Adam's teachings", "Guidelines for righteous living"],
    revelationsHinglish: ["Likhnay aur uloom ka gyaan", "Adam ki teachings ki preservation", "Neki se jeene ke guidelines"],
    conflicts: ["Opposition from those who worshipped idols", "Challenges in preserving the true faith", "Societal pressure to conform to polytheism"],
    conflictsHinglish: ["Jin logon ne buton ki ibadat ki unka opposition", "True faith preserve karne ki challenges", "Polytheism conform hone ke liye samajhi pressure"],
    companions: ["Those who believed and followed his teachings", "Students who learned from him", "Righteous people who preserved his knowledge"],
    companionsHinglish: ["Jin logon ne imaan laaya aur unki teachings follow ki", "Jinhon ne unse seekha", "Neeche logon ne unka gyaan preserve kiya"],
    enemies: ["Those who rejected monotheism", "Idol worshippers who opposed him", "People who spread falsehood"],
    enemiesHinglish: ["Jin logon ne monotheism reject kiya", "Buton ki ibadat karne wale jo uske khilaaf the", "Logon ne jhoot phailaaya"],
    deathLegacy: "According to Islamic tradition, Idris (AS) was taken up to the heavens by Allah without experiencing death, similar to the story of Prophet Isa (Jesus). He is remembered as one of the earliest prophets who preserved and transmitted knowledge from Adam to later generations. His emphasis on learning and writing made him a pioneer in the development of human civilization. He is mentioned in the Quran as being 'raised to a high station' (Al-Ma'arij 19:56-57).",
    deathLegacyHinglish: "Islamic tradition ke according, Idris (AS) ko Allah ne maut ka tasteer kiye bina aasmanon par utha liya, Nabi Isa (Jesus) ki kahani ke similar. Wo un pehli anbiya mein se yaad kiya jinhone Adam se gyaan preserve kiya aur aane wali generations ko transmit kiya. Learning aur writing par unki emphasis ne unhe human civilization ke development mein pioneer banaya. Quran mein unka zikr 'buland maqam par uthaye gaye' (Al-Ma'arij 19:56-57) ke taur par kiya gaya hai.",
    tafseerInsights: ["Classical scholars note that Idris was the first to use a pen for writing", "His being raised to heaven signifies his high status among prophets", "He represents the importance of preserving and transmitting knowledge", "Islamic tradition links him to the development of early sciences"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain ke Idris pen se likhne wale pehli shakhs the", "Aasmanon par uthaye jana unki anbiya mein unki buland status ko signify karta hai", "Wo gyaan preserve karne aur transmit karne ki importance ko represent karta hai", "Islamic tradition unhe early sciences ke development se link karta hai"],
    psychologicalAspects: "Idris (AS) represents the psychological trait of intellectual curiosity and the drive to seek knowledge. His commitment to monotheism in a time when polytheism was spreading shows firm conviction. Being a pioneer in knowledge transmission required patience and dedication to teaching others.",
    psychologicalAspectsHinglish: "Idris (AS) intellectual curiosity aur knowledge seek karne ki drive ko represent karta hai. Polytheism phail rahi thi us waqt monotheism ke liye unki commitment firm conviction dikhati hai. Knowledge transmission mein pioneer hona teaching others ke liye patience aur dedication chahiye.",
    practicalApplications: ["Seeking knowledge is a religious obligation in Islam", "Knowledge should be preserved and transmitted to future generations", "Intellectual pursuits are valued in Islamic tradition", "Staying firm in faith requires patience and perseverance"],
    practicalApplicationsHinglish: ["Ilm talab karna Islam mein religious obligation hai", "Gyaan preserve hona aur aane wali generations ko transmit karna chahiye", "Intellectual pursuits Islamic tradition mein value kiye jaate hain", "Imaan mein firm rehne ke liye patience aur perseverance chahiye"],
    comparativeAnalysis: "Unlike prophets who faced major political opposition, Idris represents the intellectual approach to dawah. His legacy through knowledge and wisdom rather than political struggle distinguishes him from prophets like Musa or Muhammad who established states."
  },
  {
    id: 3,
    nameArabic: "نوح",
    nameEnglish: "Noah",
    nameTransliteration: "Nuh (AS)",
    title: "The Prophet of the Great Flood",
    titleHinglish: "Toofan-e-Nooh ke Nabi",
    nation: "His people who worshipped idols",
    nationHinglish: "Unki qaum jo buton ki ibadat karti thi",
    timePeriod: "Approximately 950 years of prophethood",
    timePeriodHinglish: "Taqreeban 950 saal ki nabuwwat",
    story: `Noah (AS) was sent to his people who had fallen into idol worship. He called them to worship Allah alone for 950 years, but only a few believed in him. His people mocked him, called him crazy, and refused to leave their false gods.

Allah commanded Noah to build a massive ark (ship) in preparation for a great flood. People laughed at him for building a ship far from the sea. Noah gathered pairs of every animal and boarded the ark with the believers.

When the flood came, it destroyed all the disbelievers. The ark floated on the waters for months until it came to rest on Mount Judi. Noah and the believers were saved, and humanity began anew from his three sons: Shem, Ham, and Japheth. Allah made a covenant with Noah that He would never destroy humanity with a flood again.`,
    storyHinglish: `Hazrat Nuh (AS) apni qaum ki taraf bheje gaye jo buton ki ibadat mein mubtala ho gayi thi. Unhon ne 950 saal tak apni qaum ko sirf Allah ki ibadat ki dawat di, lekin sirf kuch hi logon ne un par imaan laya. Unki qaum ne unhein mazaq banaya, pagal kaha aur apne jhute khudaon ko chhorne se inkar kar diya.

Allah ne Nuh (AS) ko hukm diya ke wo ek bara toofan ki tayyari mein ek badi kashti banayein. Logon ne unhein samandar se door kashti banane par hansaa. Nuh (AS) ne har jaanwar ke jore ikatthe kiye aur momino ke saath kashti mein sawaar hue.

Jab toofan aaya, to sab kafiron ko tabah kar diya. Kashti mahinon tak pani par tairti rahi jab tak ke Koh-e-Judi par ja ruki. Nuh (AS) aur momino ko bachaya gaya, aur insaaniyat unke teen beton: Shem, Ham aur Japheth se dobara shuru hui. Allah ne Nuh (AS) se ahad liya ke wo kabhi insaaniyat ko toofan se tabah nahi karega.`,
    lessons: [
      "Patience in the face of rejection",
      "Obedience to Allah's commands even when they seem difficult",
      "Allah saves His believers",
      "Never give up in calling to the truth"
    ],
    lessonsHinglish: [
      "Inkar ke saamne sabr karna",
      "Allah ke hukm ki farmabardari chahe wo mushkil lagein",
      "Allah apne momino ko bachata hai",
      "Haqq ki dawat dene mein kabhi haarna nahi"
    ],
    miracles: [
      "Built the massive Ark by divine command",
      "Saved humanity and animals from the flood",
      "Lived for 950 years"
    ],
    miraclesHinglish: [
      "Ilahi hukm par badi kashti banayi",
      "Insaaniyat aur jaanwaron ko toofan se bachaya",
      "950 saal zinda rahe"
    ],
    quranicRefs: ["Surah Nuh 71:1-28", "Surah Hud 11:25-49", "Surah Al-Mu'minun 23:23-30"],
    characterTraits: ["Patient", "Determined", "Obedient"],
    characterTraitsHinglish: ["Sabr karne wale", "Mustaqil mizaj", "Farmabardar"],
    earlyLife: "Noah (AS) was born into a family line of righteous people descending from Adam. He was known among his people for his exceptional piety and moral character even before receiving prophethood. His people regarded him as trustworthy and upright. He lived during a time when idol worship had spread widely among humanity, and his mission was to call people back to the worship of the One True God.",
    earlyLifeHinglish: "Nuh (AS) aise family mein paida hue jo Adam se utre hue neek log the. Unhein apni qaum mein anokhi taqwa aur akhlaqi character ke liye jaana jaata tha, even nabuvat se pehle. Unki qaum ne unhein trustworthy aur sidq maana. Wo is waqt jeete the jab buddhpratha insaaniyat mein phail gayi thi, aur unka mission logon ko Ek Sachay Khuda ki ibadat mein wapis lane ka tha.",
    family: "Noah (AS) was married and had children. His wife's name is mentioned in Islamic tradition as unnamed, and she was not a believer. He had a son named Canaan (Kan'an) who was among those who did not believe and drowned in the flood, and other sons and daughters who were believers and saved. Among his descendants were later prophets including Abraham.",
    familyHinglish: "Nuh (AS) ki shadi hui thi aur unke bache hue. Unki biwi ka naam Islamic tradition mein unnamed mention hai, aur wo mu'min na thi. Unka ek beta Kan'an tha jo unmein se na tha jo imaan rakhta tha aur toofan mein doob gaya, aur dosre bete aur betiyan the jo mu'min the aur bache gaye. Unki aulad mein baad ke Nabi shamil the jismein Ibrahim bhi shamil the.",
    prophecyTimeline: "Noah (AS) was sent to his people for approximately 950 years - one of the longest prophetic missions in history. He called them to Allah day and night, in secret and in public, but they persistently rejected him. The Quran describes this as 950 years of continuous dawah, making it one of the most extended prophetic missions recorded.",
    prophecyTimelineHinglish: "Nuh (AS) ko apni qaum ke liye taqreeban 950 saal ke liye bheja gaya - tariq mein se sabse lamba prophetic missions. Unhone unhein 24 ghante, din aur raat, posheeda aur zahir donon mein Allah ki dawat di, lekin wo consistently reject karte rahe. Quran isko 950 saal ki continuous dawah ke taur par describe karta hai, jo sabse extended prophetic missions mein se ek hai.",
    revelations: ["The call to monotheism (Tawhid)", "Warning of divine punishment for disbelief", "Instructions for building the Ark", "The flood as a test and punishment"],
    revelationsHinglish: ["Monotheism (Tawhid) ki dawat", "Kufr ke liye ilahi saza ki darejna", "Kishti banana ke instructions", "Toofan ek test aur saza ke taur par"],
    conflicts: ["Persistent rejection by his people for 950 years", "Mockery and persecution of believers", "The people's refusal to believe despite clear signs", "Family conflict - his wife and son did not believe"],
    conflictsHinglish: ["Apni qaum se 950 saal tak persistent rejection", "Mu'minon ka mockery aur persecution", "Logon ki clear signs ke bawajood believe karne se refuse", "Family conflict - unki biwi aur beta imaan na laya"],
    companions: ["A group of believers who supported him", "Those who helped build the Ark", "His believing sons and daughters", "Traditional accounts mention 80 believers"],
    companionsHinglish: ["Ek group jo unka support karta tha", "Jo logon ne kishti banane mein madad ki", "Unke mu'min bete aur betiyan", "Traditional accounts 80 mu'min mention karte hain"],
    enemies: ["The disbelieving majority of his people", "His wife who was a disbeliever", "His son Canaan who refused to board the Ark", "The leaders who mocked him"],
    enemiesHinglish: ["Apni qaum ka disbelieving majority", "Unki biwi jo disbeliever thi", "Unka beta Kan'an jisne kishti mein chadne se refuse kiya", "Jo log unhe mockery karte the"],
    deathLegacy: "Noah (AS) died after the flood waters receded. He is buried in various places according to different traditions. His legacy is monumental - he is considered one of the greatest prophets, and his story serves as a warning against disbelief and arrogance. He is mentioned in the Quran as an example of patience and persistence in dawah. The Quran also mentions that when he called upon Allah during the flood, his prayer was answered, showing the power of sincere supplication.",
    deathLegacyHinglish: "Nuh (AS) toofan ke pani ke jane ke baad inteqal kar gaye. Unhein alag alag jagahon mein dafn kiya gaya hai different traditions ke according. Unki virasat monument hai - unhein sabse great Nabi mein se ek maana jaata hai, aur unki kahani disbelief aur takabbur ke darejne ke liye example ke taur par kaam karti hai. Quran mein unhen sabr aur dawah mein persistence ki example ke taur par mention kiya gaya hai. Quran ye bhi mention karta hai ke jab unhone toofan ke dauran Allah se dua ki, to unki dua qubool hui, jo sidq dua ki taqat dikhati hai.",
    tafseerInsights: ["Ibn Kathir notes that Noah's 950-year mission shows the importance of patience in dawah", "Al-Qurtubi emphasizes that the Ark's construction was both literal and spiritual - saving from sins", "Classical scholars use Noah's story to illustrate that warning must be accompanied by wisdom", "The story demonstrates that even family members may not believe - showing the test extends to all relationships"],
    tafseerInsightsHinglish: ["Ibn Kathir note karte hain ke Nuh ka 950 saal ka mission dawah mein sabr ki importance dikhata hai", "Al-Qurtubi emphasize karte hain ke kishti ka construction literal aur spiritual dono tha - gunahon se bachana", "Classical scholars Nuh ki kahani ka istemal karte hain ye illustrate karne ke liye ke warning wisdom ke saath honi chahiye", "Kahani ye demonstrate karta hai ke even family members believe na kar sakte hain - test sab relationships mein extend hota hai"],
    psychologicalAspects: "Noah (AS) experienced profound loneliness and frustration during his mission. For nearly a century, he called people who not only rejected him but also harmed the believers. Despite this, he never gave up hope and continued his mission with patience. His story shows the emotional toll of dawah and the importance of perseverance. Even when his own wife and son rejected the message, he maintained his trust in Allah and continued calling people to the right path.",
    psychologicalAspectsHinglish: "Nuh (AS) apni mission ke dauran wardrobe loneliness aur frustration experience kiye. Taqreeban ek century tak, unhone logon ko pukarea jo sirf unhe reject na karte the balki mu'minon ko nuqsaan bhi pahunchate the. Iske bawajood, unhone kabhi hope na chhoda aur sabr ke saath apni mission jari rakhi. Unki kahani dawah ke emotional toll aur perseverance ki importance dikhati hai. Jab unki biwi aur beta ne message reject kiya, to unhone apne trust Allah mein rakha aur logon ko sidq raah par bulana jari rakha.",
    practicalApplications: ["Never give up on calling people to truth, even if response is negative", "Patience is essential in dawah work", "Family members not believing is a test from Allah", "Consistency in worship and call is more effective than sporadic efforts", "Sincere du'a can change divine decree"],
    practicalApplicationsHinglish: ["Haqq ki dawat dene mein kabhi haarna nahi, chahe response negative ho", "Dawah mein sabr essential hai", "Family members ka believe na karna Allah se test hai", "Consistency worship aur call mein zyada effective hai sporadic efforts se", "Sidq dua ilahi decree badal sakti hai"],
    comparativeAnalysis: "Unlike Adam's test of personal temptation, Noah faced the test of social rejection and persecution. Unlike Ibrahim's test of sacrifice, Noah's test was of patience over an extended period. His mission was unique in that he was the first prophet to have such a prolonged public ministry and to face systematic rejection from an entire society."
  },
  {
    id: 4,
    nameArabic: "هود",
    nameEnglish: "Hud",
    nameTransliteration: "Hud (AS)",
    title: "The Prophet to the People of Ad",
    titleHinglish: "Qaum-e-Aad ke Nabi",
    nation: "The People of Ad (powerful ancient Arabs)",
    nationHinglish: "Qaum-e-Aad (taqatwar qadeem Arab)",
    timePeriod: "After Noah",
    timePeriodHinglish: "Nuh ke baad",
    story: `Hud (AS) was sent to the people of Ad, a powerful and wealthy nation known for their tall stature and magnificent buildings. They had forgotten Allah and worshipped idols they had created.

Hud (AS) called them to worship Allah alone and warned them of punishment if they continued in their disbelief. They arrogantly rejected him, saying they were more powerful than anyone and that no punishment could touch them.

Allah sent a devastating windstorm that destroyed the people of Ad. For seven nights and eight days, a violent wind tore everything apart. Only Hud (AS) and those who believed with him were saved. Their magnificent buildings became ruins that served as a warning to future generations.`,
    storyHinglish: `Hazrat Hud (AS) Qaum-e-Aad ki taraf bheje gaye, jo taqatwar aur daulat mand qaum thi jo apne lambe qad aur shandaar imarton ke liye mashhoor thi. Unhon ne Allah ko bhula diya tha aur un buton ki ibadat karti thi jinhein unhon ne khud banaya tha.

Hud (AS) ne unhein sirf Allah ki ibadat ki dawat di aur unhein saza ki dhamki di agar wo apne kufr par rahe to. Unhon ne takabbur se unhein thukraya, kehne lage ke wo kisi se zyada taqatwar hain aur koi saza unhein chhoo bhi nahi sakti.

Allah ne un par tabaah kun toofan bheja jo Qaum-e-Aad ko tabah kar gaya. Saat raaton aur aath dinon tak ek zalzala toofan ne sab kuch tabah kar diya. Sirf Hud (AS) aur jo unke saath imaan laye wo bach gaye. Unki shandaar imaren khandaron mein tabdeel ho gayein jo aane wali naslon ke liye aik naseehat ban gayein.`,
    lessons: [
      "Pride and arrogance lead to destruction",
      "Material wealth does not protect from Allah's punishment",
      "Allah's signs are everywhere for those who reflect"
    ],
    lessonsHinglish: [
      "Takabbur aur ghuroor tabahi ki taraf le jaata hai",
      "Maadi dolat Allah ki saza se nahi bachati",
      "Allah ki nishaniyan har jagah hain sochne walon ke liye"
    ],
    miracles: [
      "Survived the devastating windstorm",
      "His people were giants with great strength"
    ],
    miraclesHinglish: [
      "Tabaah kun toofan se bach nikle",
      "Unki qaum deewaron jaise taqatwar insanon ki thi"
    ],
    quranicRefs: ["Surah Hud 11:50-60", "Surah Al-Ahqaf 46:21-26", "Surah Ash-Shu'ara 26:123-140"],
    characterTraits: ["Brave", "Persistent", "Trustworthy"],
    characterTraitsHinglish: ["Bahadur", "Mustaqil", "Ameen"],
    earlyLife: "Prophet Hud (AS) was sent to the People of Ad, one of the ancient Arab tribes known for their immense strength, towering height, and magnificent architecture. He was from among his people and understood their culture and society. From a young age, he was known for his piety and wisdom, which gained him respect among his people even before he was sent as a prophet.",
    earlyLifeHinglish: "Nabi Hud (AS) Qaum-e-Ad ki taraf bheje gaye, jo ancient Arab tribes mein se ek thi jo apni behisab taqat, lambi qad aur shandaar architecture ke liye mashhoor the. Wo apni qaum se the aur unki culture aur society samajhte the. Chhoti umar se hi, wo apni taqwa aur hikmat ke liye mashhoor the, jisne unhe apni qaum mein respect dilwaya, even unhone nabuvat se pehle.",
    family: "Prophet Hud (AS) was from the People of Ad, a tribe known for their lineage and heritage. He was sent as a prophet to his own people, which made his mission particularly challenging as he called his relatives and tribesmen to the path of Allah. His descendants continued among the Arab tribes after the destruction of Ad.",
    familyHinglish: "Nabi Hud (AS) Qaum-e-Ad se the, ek tribe jo apni lineage aur heritage ke liye mashhoor thi. Wo apni qaum ki taraf Nabi bheje gaye, jisne unki mission ko particularly challenging banaya kyunke unhone apne relatives aur tribesmen ko Allah ki raah bulaya. Unke descendants Ad ke destruction ke baad Arab tribes mein continue hue.",
    prophecyTimeline: "Prophet Hud (AS) was sent to the People of Ad after the time of Noah and before the time of Salih. His mission lasted for a significant period during which he called his people to worship Allah alone. Despite his persistent efforts, the majority of his people rejected his message. The destruction of his people serves as one of the major divine punishments recorded in the Quran.",
    prophecyTimelineHinglish: "Nabi Hud (AS) Qaum-e-Ad ki taraf Nuh ke baad aur Salih se pehle bheje gaye. Unki mission ek significant period ke liye rahi jismein unhone apni qaum ko sirf Allah ki ibadat ki dawat di. Unki persistent efforts ke bawajood, unki qaum ke majority ne unki message reject ki. Unki qaum ka destruction Quran mein recorded major divine punishments mein se ek hai.",
    revelations: ["Warning of punishment for disbelief", "Call to monotheism", "The story of previous nations as lessons"],
    revelationsHinglish: ["Kufr ke liye saza ki darejna", "Monotheism ki dawat", "Previous nations ki kahaniyan lessons ke taur par"],
    conflicts: ["Rejection by his people", "Their claim of invincibility due to physical strength", "Mockery of his warnings", "Persistence in disbelief despite clear signs"],
    conflictsHinglish: ["Apni qaum se reject", "Apni physical strength ki wajah se unki unsubstantiated claim", "Unki warnings ki mazaq", "Clear signs ke bawajood disbelief mein persistence"],
    companions: ["Those who believed with him", "A small group of believers who followed his message"],
    companionsHinglish: ["Jinhon ke saath imaan laaya", "Small group of believers jo unki message follow ki"],
    enemies: ["The disbelieving majority of the People of Ad", "Their arrogant leaders who claimed invincibility", "Those who mocked the prophet"],
    enemiesHinglish: ["Qaum-e-Ad ke disbelieving majority", "Unke arrogant leaders jo invincibility claim karte the", "Jo logon ne prophet ki mazaq ki"],
    deathLegacy: "Prophet Hud (AS) and his believers were saved from the devastating windstorm that destroyed his people. The People of Ad lived in the region of Yemen and southern Arabia. Their ruins, including the famous structures of Marib, serve as a warning to this day. Hud (AS) is remembered as a prophet who called his people with wisdom and patience, even to those who persecuted him.",
    deathLegacyHinglish: "Nabi Hud (AS) aur unke believers unke logon ko tabah karne wale devastating windstorm se bachaye gaye. Qaum-e-Ad Yemen aur southern Arabia region mein rehte the. Unke ruins, including Marib ke famous structures, aaj tak warning ke taur par kaam karte hain. Hud (AS) ek aise Nabi ke taur par yaad kiye jaate hain jinhone hikmat aur sabr ke saath apni qaum ko bulaya, even un logon ke liye jinhone unhe torture kiya.",
    tafseerInsights: ["The wind that destroyed Ad is described as a severe punishment lasting 7 nights and 8 days", "Classical scholars note that Ad was known for their advanced civilization and architecture", "The story emphasizes that material strength does not protect from Allah's punishment", "Hud's patient calling to his people despite persecution is an example for dawah workers"],
    tafseerInsightsHinglish: ["Woh toofan jo Ad ko tabah kiya gaya usse 7 raat aur 8 din rahi severe punishment ke taur par describe kiya gaya", "Classical scholars note karte hain ke Ad apni advanced civilization aur architecture ke liye mashhoor the", "Kahani ye emphasize karti hai ke material strength Allah ki saza se nahi bachati", "Hud ka apni qaum ko persecution ke bawajood patient calling se dawah workers ke liye example hai"],
    psychologicalAspects: "Prophet Hud (AS) showed remarkable patience in calling his people to truth despite their rejection and mockery. His psychological strength lay in maintaining his message's clarity while showing compassion to those who followed him. He faced the painful reality of seeing his entire nation destroyed while being saved with his believers.",
    psychologicalAspectsHinglish: "Nabi Hud (AS) ne apni qaum ko truth bulane mein remarkable sabr dikha, unke rejection aur mockery ke bawajood. Unki psychological strength unki message ki clarity maintain karne mein thi jab unhe apne followers ke liye compassion dikhate the. Unhone painful reality dekhi apni poori nation tabah hoti hue jab unhe unke believers ke saath bachaya gaya.",
    practicalApplications: ["Material wealth and strength do not protect from Allah's punishment", "Even family members may reject the truth - we must remain patient", "Warning others about punishment is part of Islamic responsibility", "Signs of destruction in history serve as lessons for future generations"],
    practicalApplicationsHinglish: ["Maadi dolat aur taqat Allah ki saza se nahi Bachati", "Even family members truth reject kar sakte hain - humein sabr karna chahiye", "Dusron ko saza ke baare mein warn karna Islamic responsibility ka hissa hai", "Tareekh mein destruction ke signs aane wali generations ke liye lessons ke taur par kaam karte hain"],
    comparativeAnalysis: "Unlike Noah who faced rejection from his people for 950 years, Hud's mission was shorter but faced similar denial. Both prophets demonstrate that the response of people does not change the truth - those who reject will face consequences regardless of their strength or civilization."
  },
  {
    id: 5,
    nameArabic: "صالح",
    nameEnglish: "Salih",
    nameTransliteration: "Salih (AS)",
    title: "The Prophet to the People of Thamud",
    titleHinglish: "Qaum-e-Samood ke Nabi",
    nation: "The People of Thamud (ancient Arabs)",
    nationHinglish: "Qaum-e-Samood (qadeem Arab)",
    timePeriod: "After Hud",
    timePeriodHinglish: "Hud ke baad",
    story: `Salih (AS) was sent to the people of Thamud, a nation known for their skill in carving homes out of mountains. They were wealthy and powerful but had turned to idol worship.

As a sign of his prophethood, Allah caused a miraculous she-camel to emerge from a rock. Salih (AS) told his people that the camel was a sign from Allah and should be allowed to drink from their wells on alternate days. However, the people became annoyed and killed the camel.

When they killed the camel, Salih (AS) warned them that punishment would come in three days. They challenged him to bring it, but after three days, a terrible earthquake struck them, and they were found dead in their homes. Only Salih (AS) and the believers were saved.`,
    storyHinglish: `Hazrat Salih (AS) Qaum-e-Samood ki taraf bheje gaye, jo paharon mein ghar banane mein mahir qaum thi. Wo daulat mand aur taqatwar the lekin buton ki ibadat ki taraf mael ho gaye the.

Apni nabuwwat ki nishani ke taur par, Allah ne ek pathar se ek mo'jizati ontni nikali. Salih (AS) ne apni qaum se kaha ke ye ontni Allah ki taraf se ek nishani hai aur isko un ke kuon se baray din pani peene dena chahiye. Lekin log tang aa gaye aur ontni ko maar daala.

Jab unhon ne ontni ko maara, Salih (AS) ne unhein chetawani di ke teen din mein saza aaegi. Unhon ne unhein lalkara ke lao, lekin teen din baad un par zalzala aaya aur wo apne gharon mein murda paaye gaye. Sirf Salih (AS) aur momino ko bachaya gaya.`,
    lessons: [
      "Do not harm Allah's signs and miracles",
      "Oppression of the weak brings punishment",
      "Challenging Allah's prophets leads to destruction"
    ],
    lessonsHinglish: [
      "Allah ki nishaniyon aur mo'jizon ko nuqsaan mat pahunchao",
      "Kamzor par zulm saza lata hai",
      "Allah ke anbiya ko lalkarna tabahi ki taraf le jaata hai"
    ],
    miracles: [
      "The miraculous she-camel emerging from a rock",
      "Survived the earthquake that destroyed his people"
    ],
    miraclesHinglish: [
      "Pathar se mo'jizati ontni ka nikalna",
      "Zalzala se bachna jo unki qaum ko tabah kar gaya"
    ],
    quranicRefs: ["Surah Al-A'raf 7:73-79", "Surah Hud 11:61-68", "Surah Ash-Shu'ara 26:141-159"],
    characterTraits: ["Honest", "Merciful", "Patient"],
    characterTraitsHinglish: ["Sacha", "Reham dil", "Sabr karne wale"]
  },
  {
    id: 6,
    nameArabic: "إبراهيم",
    nameEnglish: "Ibrahim",
    nameTransliteration: "Ibrahim (AS)",
    title: "The Father of Prophets and Friend of Allah (Khalilullah)",
    titleHinglish: "Anbiya ke Waalid aur Allah ke Dost (Khalilullah)",
    nation: "His people and the Babylonian Empire",
    nationHinglish: "Unki qaum aur Babul ki saltanat",
    timePeriod: "Approximately 2000 BCE",
    timePeriodHinglish: "Taqreeban 2000 qabl e maseeh",
    story: `Ibrahim (AS) is one of the greatest prophets in Islam, known as Khalilullah (Friend of Allah). He was born in a family of idol makers but rejected idol worship from a young age. He questioned his people's worship of statues that could not hear, see, or benefit them.

In a famous incident, Ibrahim (AS) destroyed all the idols in the temple except the largest one, leaving an axe in its hand. When the people returned, they demanded to know who did it. Ibrahim (AS) said to ask the largest idol. They replied that idols cannot speak, to which Ibrahim (AS) asked why they worship things that cannot help them.

For this, he was thrown into a massive fire, but Allah commanded the fire to be cool and safe for him. Ibrahim (AS) miraculously walked out unharmed. He later left his homeland with his wife Sarah and nephew Lut, traveling to various lands calling people to monotheism.

Allah tested Ibrahim (AS) by commanding him to sacrifice his son Ismail. Both father and son submitted to Allah's command, but at the moment of sacrifice, Allah replaced Ismail with a ram. This act of complete submission made Ibrahim (AS) the leader of all future prophets, and Muslims commemorate this sacrifice every year during Eid al-Adha.

Ibrahim (AS) built the Ka'bah in Makkah with his son Ismail and prayed for Allah to send a prophet from his descendants - a prayer answered with the coming of Muhammad ﷺ.`,
    storyHinglish: `Hazrat Ibrahim (AS) Islam ke sab se bare anbiya mein se hain, jo Khalilullah (Allah ke Dost) ke naam se mashhoor hain. Wo buton ke banane walon ke gharane mein paida hue lekin chhoti umar se hi buton ki ibadat ko thukra diya. Unhon ne apni qaum ki un buton ki ibadat par sawal uthaye jo kuch nahi sun sakte, dekh sakte ya unka faida kar sakte the.

Ek mashhoor waqay mein, Ibrahim (AS) ne mandir mein sab se bare but ko chhor kar sab buton ko tabah kar diya, uske haath mein kulhadi rakh di. Jab log laute, to unhon ne poocha ke kis ne ye kiya. Ibrahim (AS) ne kaha ke sab se bare but se poochtein hain. Unhon ne jawab diya ke but bol nahi sakte, jis par Ibrahim (AS) ne poocha ke phir wo kyun unki ibadat karte hain jo unki madad nahi kar sakte.

Is ke liye, unhein ek baray aag mein phenk diya gaya, lekin Allah ne aag ko thanda aur salamat karne ka hukm diya. Ibrahim (AS) mo'jizati taur par be-zarar baahar nikle. Baad mein unhon ne apni biwi Sarah aur bhanje Lut ke saath apne watan ko chhor diya, mukhtalif ilaqon mein safar karke logon ko tauheed ki dawat di.

Allah ne Ibrahim (AS) ki aazmaish li ke unhein apne bete Ismail ki qurbani ka hukm diya. Baap aur bete donon ne Allah ke hukm ko tasleem kiya, lekin qurbani ke waqt Allah ne Ismail ki jagah ek dumba rakh diya. Is mukammal tasleem ke kaam ne Ibrahim (AS) ko tamam anbiya ka sardar bana diya, aur Muslim har saal Eid ul-Azha par is qurbani ko yaad karte hain.

Ibrahim (AS) ne apne bete Ismail ke saath Makkah mein Ka'bah banaya aur Allah se dua ki ke unki aulad mein se ek Nabi bheje - ye dua Huzoor ﷺ ke zariye qubool hui.`,
    lessons: [
      "Question false beliefs with wisdom",
      "Complete trust in Allah brings miraculous protection",
      "Be willing to sacrifice what you love most for Allah",
      "Make dua for future generations"
    ],
    lessonsHinglish: [
      "Jhute aqeedon par hikmat se sawal uthao",
      "Allah par mukammal bharosa mo'jizati hifazat lata hai",
      "Allah ke liye apni sab se pyari cheez qurban karne ko taiyaar raho",
      "Aane wali naslon ke liye dua karo"
    ],
    miracles: [
      "Walked through fire unharmed",
      "The ram that replaced his son for sacrifice",
      "Built the Ka'bah with his son Ismail"
    ],
    miraclesHinglish: [
      "Aag se be-zarar guzar gaye",
      "Bete ki jagah qurban hone wala dumba",
      "Bete Ismail ke saath Ka'bah ki tameer"
    ],
    quranicRefs: ["Surah Al-Baqarah 2:124-141", "Surah Ibrahim 14:35-41", "Surah As-Saffat 37:83-113"],
    characterTraits: ["Wise", "Courageous", "Submissive to Allah"],
    characterTraitsHinglish: ["Hakeem", "Bahadur", "Allah ke saamne jhukne wale"],
    earlyLife: "Ibrahim (AS) was born in the city of Ur in Mesopotamia (modern-day Iraq) into a family of idol makers. His father Azar was known for making and selling idols. From a young age, Ibrahim (AS) showed exceptional wisdom and rejected the idol worship of his people. He would look at the stars, moon, and sun and realize that these celestial bodies were created by the One True God, not worthy of worship themselves. His early rejection of shirk (polytheism) and his logical arguments against idol worship marked him as special from childhood.",
    earlyLifeHinglish: "Ibrahim (AS) Mesopotamia (aj ke Iraq) ke Ur shahr mein buton ke banane walon ke gharane mein paida hue. Unke baad Azar but banane aur bechne ke liye mashhoor the. Chhoti umar se hi, Ibrahim (AS) ne anokhi hikmat dikhai aur apni qaum ki buton ki ibadat ko thukra diya. Wo taaron, chand aur suraj ko dekhte aur realize karte the ke in ajnas ke jismon ko Ek Sachay Khuda ne banaya hai, ibadat ke laiq nahi. Unki shirk (shirk) ki early rejection aur buton ki ibadat ke khilaaf unke logical arguments ne unhe childhood se hi khaas banaya.",
    family: "Ibrahim (AS) had two major wives: Sarah (who was first barren but later gave birth to Isaac) and Hagar (who gave birth to Ismail, the ancestor of the Arab nations through Muhammad ﷺ). He also had children from Keturah after Sarah's death. His family was foundational to both the Jewish and Islamic prophetic traditions. His nephew Lut (Lot) was also a prophet sent to the people of Sodom.",
    familyHinglish: "Ibrahim (AS) ke do biwiyan thi: Sarah (jo pehle barren thi lekin baad mein Isaac ko janam di) aur Hagar (jisne Ismail ko janam di, jo Arab qaum ke ancestors hain Huzoor ﷺ ke zariye). Unke Sarah ke baad Keturah se bhi bache hue. Unka family Jewish aur Islamic prophetic traditions dono ke liye foundational thi. Unka bhanja Lut (Lot) bhi ek Nabi tha jo Sodom ke logon ki taraf bheja gaya tha.",
    prophecyTimeline: "Ibrahim (AS) received prophethood around the age of 40, according to traditional accounts. His mission spanned many years, and he traveled extensively from Mesopotamia to Egypt, from there to Palestine, and finally to Makkah where he built the Ka'bah with his son Ismail. He received multiple revelations and tests throughout his life, making his prophetic mission one of the most extensive in Islamic tradition.",
    prophecyTimelineHinglish: "Ibrahim (AS) ko traditional accounts ke according 40 saal ki umar ke aas paas nabuvat mili. Unki mission bohat saaloun tak jari rahi, aur unhone Mesopotamia se Egypt, wahan se Palestine, aur akhir mein Makkah tak safar kiya jahan unhone apne bete Ismail ke saath Ka'bah banaya. Unhone apni zindagi mein multiple revelations aur tests receive kiye, jo unki prophetic mission ko Islamic tradition mein sabse extensive bana diya.",
    revelations: ["The command to leave his homeland (Hijrah)", "The test of sacrificing his son", "The revelation of building the Ka'bah", "The covenant of prophethood", "The prayer for a messenger from his descendants"],
    revelationsHinglish: ["Apna watan chhorne ka hukm (Hijrah)", "Apne bete ki qurbani ka test", "Ka'bah banane ka revelation", "Nabuwwat ka ahad", "Apni aulad se ek rasool ki dua"],
    conflicts: ["Confrontation with his father Azar about idol worship", "Destruction of idols in the temple", "Being thrown into the fire by Nimrod", "Argument with the king of Egypt about his wife Sarah", "The test of Hagar and Ismail in the desert"],
    conflictsHinglish: ["Apne baad Azar se buton ki ibadat ke baare mein muqabla", "Mandir mein buton ka destruction", "Nimrod ke taraf se aag mein phenkna", "Egypt ke baadshah se apni biwi Sarah ke baare mein argument", "Jungle mein Hagar aur Ismail ka test"],
    companions: ["His wife Sarah who supported his mission", "His son Ismail who helped build the Ka'bah", "His other son Isaac and grandchildren", "The angels who visited him with news of Isaac's birth", "His servant and chief disciple"],
    companionsHinglish: ["Biwi Sarah jo unki mission ki support karti thi", "Beti Ismail jo Ka'bah banane mein madad ki", "Dosra beta Isaac aur grandchildren", "Farishte jo Isaac ke janam ki khabar ke saath aaye", "Unke servant aur chief disciple"],
    enemies: ["Nimrod (the king who threw him into fire)", "His father Azar who was an idol maker", "The people of Ur who rejected him", "The Egyptian king who tried to take Sarah", "Those who persecuted prophets after him"],
    enemiesHinglish: ["Nimrod (wo baadshah jisne unhe aag mein phenka)", "Baad Azar jo but maker tha", "Ur ke logon ne unhe reject kiya", "Egyptian baadshah jisne Sarah lene ki koshish ki", "Jo logon ne unhe baad ke prophets ko torture kiya"],
    deathLegacy: "Ibrahim (AS) passed away at the age of 175, according to traditional accounts. He was buried in Hebron (Al-Khalil) near the Cave of Machpelah where Sarah was buried. His legacy is immense - he is called the Father of Prophets (Sayyid al-Anbiya), and both Jews, Christians, and Muslims trace their religious heritage to him. The Quran states that Ibrahim was neither Jewish nor Christian but was a Muslim (Hanif), submitting exclusively to Allah. His Hajj and Umrah rituals are still performed at the Ka'bah he built.",
    deathLegacyHinglish: "Ibrahim (AS) traditional accounts ke according 175 saal ki umar mein inteqal kar gaye. Unhein Hebron (Al-Khalil) mein dafn kiya gaya jahan Cave of Machpelah mein Sarah dafn thi. Unki virasat bahut badi hai - Unhein Anbiya ke Baap (Sayyid al-Anbiya) kaha jaata hai, aur Jews, Christians, aur Muslims donon apni religious heritage unhe trace karte hain. Quran kehta hai ke Ibrahim na to Jewish tha na Christian balki ek Muslim (Hanif) tha, jo exclusively Allah ko tasleem karta tha. Unki Hajj aur Umrah rituals abhi bhi Ka'bah mein perform ki jati hain jo unhone banaya tha.",
    tafseerInsights: ["Ibn Kathir emphasizes that Ibrahim's breaking of idols was not an act of violence but a demonstration of the falseness of shirk", "Classical scholars note that the 'fire' became 'garden' (Jannah) for Ibrahim - showing how trials become blessings for the righteous", "The test of sacrificing Ismail is seen as the ultimate test of submission - showing that even the most beloved things should be sacrificed for Allah", "Ibrahim's prayer for a messenger from his descendants was answered 2500 years later with Prophet Muhammad ﷺ"],
    tafseerInsightsHinglish: ["Ibn Kathir emphasize karte hain ke Ibrahim ka buton todna violence ka act nahi balki shirk ki falseness demonstration tha", "Classical scholars note karte hain ke 'aag' Ibrahim ke liye 'garden' (Jannah) ban gayi - ye dikhata hai ke tests neek logon ke liye blessings ban jate hain", "Ismail ki qurbani ka test submission ka ultimate test maana jaata hai - ye dikhata hai ke even sabse pyari cheezen bhi Allah ke liye qurbani jani chahiyein", "Ibrahim ki apni aulad se ek rasool ki dua 2500 saal baad Huzoor ﷺ ke saath qubool hui"],
    psychologicalAspects: "Ibrahim's journey shows profound psychological growth - from a young questioner to a mature prophet who trusts Allah completely. His emotional struggle when commanded to sacrifice his son shows the depth of fatherly love, yet his submission to Allah shows how faith can transform even the most difficult emotions into acts of worship. His loneliness as a monotheist in a polytheistic society demonstrates the psychological burden of being different, yet he maintained his faith with patience.",
    psychologicalAspectsHinglish: "Ibrahim ka journey profound psychological growth dikhata hai - ek young questioner se lekar ek mature prophet jo Allah par bilkul trust karta hai. Jab unhe apne bete ki qurbani ka hukm diya gaya to unki emotional struggle bete ke pyaar ki gehrai dikhata hai, lekin Allah ke samne unki submission ye dikhata hai ke imaan kaise even sabse difficult emotions ko ibadat mein badal sakti hai. Monotheist ke roop mein polytheistic society mein unki loneliness psychological burden dikhata hai alag hone ki, lekin unhone apni imaan sabr ke saath maintain ki.",
    practicalApplications: ["Questioning false beliefs is part of seeking truth", "True faith shows itself in times of trial", "Sacrifice for Allah's sake - even when difficult", "Making dua for future generations brings great rewards", "Building relationships with family on the foundation of faith"],
    practicalApplicationsHinglish: ["Jhute aqeedon par sawal utahna haqq talab ka hissa hai", "True imaan trial ke waqt khud ko dikhata hai", "Allah ke liye qurbani - even jab difficult ho", "Aane wali naslon ke liye dua great rewards laati hai", "Family ke saath relationships imaan ki foundation par build karna"],
    comparativeAnalysis: "Unlike Noah who faced rejection over 950 years, Ibrahim's mission involved physical journey and establishing new communities. Unlike Musa who confronted kings publicly, Ibrahim used wisdom and gentle persuasion. His test of sacrifice was unique among prophets, demonstrating that the ultimate test may involve our deepest attachments. He represents the 'middle way' between confrontation and patience, using both wisdom and action."
  },
  {
    id: 7,
    nameArabic: "لوط",
    nameEnglish: "Lut",
    nameTransliteration: "Lut (AS)",
    title: "The Prophet to the People of Sodom",
    titleHinglish: "Qaum-e-Sadum ke Nabi",
    nation: "The People of Sodom (near the Dead Sea)",
    nationHinglish: "Qaum-e-Sadum (Murdar Darya ke qareeb)",
    timePeriod: "During Ibrahim's time",
    timePeriodHinglish: "Ibrahim ke zamane mein",
    story: `Lut (AS) was the nephew of Ibrahim (AS) and was sent as a prophet to the people of Sodom. These people had fallen into the worst of sins, including homosexuality and highway robbery. They were the first people to practice this abomination.

Lut (AS) called them to righteousness and warned them against their evil practices, but they rejected him and even threatened to drive him out of their city. They demanded that Lut (AS) bring Allah's punishment if he was truthful.

Allah sent angels in the form of handsome young men to test the people. The people tried to attack these guests, showing their complete moral corruption. The angels then informed Lut (AS) that punishment was coming and commanded him to leave with his family at night, warning them not to look back.

Allah turned the city upside down and rained stones of baked clay upon them. The entire city was destroyed, and the area became the Dead Sea (Bahr Lut). Lut's wife looked back and was destroyed with the disbelievers. Lut (AS) and his daughters were saved.`,
    storyHinglish: `Hazrat Lut (AS) Hazrat Ibrahim (AS) ke bhanje the aur Qaum-e-Sadum ki taraf Nabi bheje gaye. Ye log sab se bure gunahon mein mubtala ho gaye the, jin mein homosexuality aur rahzan shamil thi. Ye pehle log the jinhon ne ye karahiyat shuru ki.

Lut (AS) ne unhein neki ki taraf bulaya aur unhein unki buri harkaton se chetawani di, lekin unhon ne unhein thukra diya aur unhein shehar se nikaalne ki dhamki bhi di. Unhon ne Lut (AS) se mutaaliba kiya ke agar wo sachche hain to Allah ki saza laayein.

Allah ne farishton ko haseen naujawanon ki surat mein bheja taake qaum ki aazmaish le. Logon ne in mehmanon par hamla karne ki koshish ki, jo unki mukammal ikhlaaki kharabi ko dikhata hai. Farishton ne phir Lut (AS) ko khabar di ke saza aa rahi hai aur unhein hukm diya ke raat ko apne ghar walon ke saath nikal jaayein, unhein peeche dekhne se mana kiya.

Allah ne shehar ko ulat diya aur un par pakki mitti ke pathra barasaye. Pura shehar tabah ho gaya, aur ye ilaqa Murdar Darya (Bahr Lut) ban gaya. Lut (AS) ki biwi ne peeche dekha aur kafiron ke saath tabah ho gayi. Lut (AS) aur unki betiyan bach gayein.`,
    lessons: [
      "Allah destroys nations that practice major sins openly",
      "Obey Allah's commands completely, even in difficult times",
      "Do not look back at sinful ways after leaving them"
    ],
    lessonsHinglish: [
      "Allah un qaumon ko tabah kar deta hai jo bare gunahon ko khullam khulla karte hain",
      "Allah ke hukm ki mukammal taabedaari karo, chahe mushkil waqt ho",
      "Gunahon ke raaste ko chhorne ke baad peeche mat dekho"
    ],
    miracles: [
      "Angels came to his home in human form",
      "The city was turned upside down",
      "Rain of stones destroyed the sinners"
    ],
    miraclesHinglish: [
      "Farishte insani surat mein unke ghar aaye",
      "Shehar ko ulat diya gaya",
      "Pathron ki baarish ne gunahgaron ko tabah kiya"
    ],
    quranicRefs: ["Surah Hud 11:69-83", "Surah Al-A'raf 7:80-84", "Surah Ash-Shu'ara 26:160-175"],
    characterTraits: ["Righteous", "Patient", "Merciful"],
    characterTraitsHinglish: ["Neik", "Sabr karne wale", "Reham dil"]
  },
  {
    id: 8,
    nameArabic: "إسماعيل",
    nameEnglish: "Ismail",
    nameTransliteration: "Ismail (AS)",
    title: "The Sacrificed Son and Father of the Arabs",
    titleHinglish: "Qurban hone wale Bete aur Arabon ke Waalid",
    nation: "The Arabs of Hijaz",
    nationHinglish: "Hijaz ke Arab",
    timePeriod: "Son of Ibrahim, around 2000 BCE",
    timePeriodHinglish: "Ibrahim ke bete, taqreeban 2000 qabl e maseeh",
    story: `Ismail (AS) was the elder son of Ibrahim (AS), born to Hajar (Hagar). When he was still an infant, Allah commanded Ibrahim (AS) to leave him and his mother in the barren valley of Makkah. In this desolate place, the well of Zamzam miraculously sprang forth when baby Ismail's feet touched the ground.

Ismail (AS) grew up in Makkah and later helped his father build the Ka'bah. He was tested along with his father when Ibrahim (AS) was commanded to sacrifice him. Both father and son submitted to Allah's will, demonstrating perfect faith and obedience. At the moment of sacrifice, Allah replaced Ismail with a ram.

Ismail (AS) became a prophet and the ancestor of the Northern Arabs. He married and had twelve sons who became the leaders of Arab tribes. He is buried near the Ka'bah in the Hijr Ismail area. Muslims honor his sacrifice every year during Eid al-Adha.`,
    storyHinglish: `Hazrat Ismail (AS) Hazrat Ibrahim (AS) ke bare bete the, Hajar (Hajar) ke pet se. Jab wo abhi chhote bache the, Allah ne Ibrahim (AS) ko hukm diya ke unhein aur unki maa ko Makkah ki banjar waadi mein chhor dein. Is viran jagah par, jab chhote Ismail ke paon zameen ko chhue to Zamzam ka chashma mo'jizati taur par phoot para.

Ismail (AS) Makkah mein baray hue aur baad mein apne baap ki madad se Ka'bah ki tameer ki. Unki aur unke baap ki aazmaish li gayi jab Ibrahim (AS) ko unki qurbani ka hukm diya gaya. Baap aur bete donon ne Allah ki marzi ko tasleem kiya, mukammal imaan aur farmabardari ka muzahira kiya. Qurbani ke waqt, Allah ne Ismail ki jagah ek dumba rakh diya.

Ismail (AS) Nabi bane aur Shumali Arab ke jadd banay. Unhon ne shaadi ki aur unke barah bete hue jo Arab qabeilon ke sardar bane. Unhein Ka'bah ke qareeb Hijr Ismail ke ilaqe mein dafan kiya gaya hai. Muslim har saal Eid ul-Azha par unki qurbani ko izzat dete hain.`,
    lessons: [
      "Complete submission to Allah's will",
      "Patience in difficult circumstances",
      "Trust in Allah's plan"
    ],
    lessonsHinglish: [
      "Allah ki marzi ko mukammal tasleem karna",
      "Mushkil haalaat mein sabr karna",
      "Allah ke plan par bharosa karna"
    ],
    miracles: [
      "The well of Zamzam sprang from under his feet",
      "Replaced by a ram at the moment of sacrifice",
      "Helped build the Ka'bah"
    ],
    miraclesHinglish: [
      "Zamzam ka chashma unke paon ke neeche se nikla",
      "Qurbani ke waqt dumbe se badal diye gaye",
      "Ka'bah ki tameer mein madad ki"
    ],
    quranicRefs: ["Surah Maryam 19:54-55", "Surah As-Saffat 37:99-113"],
    characterTraits: ["Obedient", "Patient", "Trusting"],
    characterTraitsHinglish: ["Farmabardar", "Sabr karne wale", "Bharosa karne wale"],
    earlyLife: "Prophet Ismail (AS) was born to Hajar (Hagar), the wife of Ibrahim (AS), in the land of Canaan. When he was still a suckling infant, Allah commanded Ibrahim to take Hajar and Ismail to the barren valley of Makkah and leave them there. This was a test of faith for Ibrahim. In this desolate valley, the baby Ismail cried and kicked, causing the well of Zamzam to miraculously appear.",
    earlyLifeHinglish: "Nabi Ismail (AS) Hajar (Hagar), Ibrahim (AS) ki biwi, se Canaan land mein paida hue. Jab wo abhi chhota bacha tha, Allah ne Ibrahim ko hukm diya ke Hajar aur Ismail ko Makkah ki banjar waadi mein le jaayein aur wahan chhor dein. Yeh Ibrahim ke liye imaan ki aazmaish thi. Is viran waadi mein, bacha Ismail ro raha tha aur kick kar raha tha, jisse Zamzam ka chashma mo'jizati taur par appear hua.",
    family: "Prophet Ismail (AS) married a woman from the Jurhum tribe in Makkah. They had twelve sons who became the heads of twelve tribes, known as the Ishmaelites or Northern Arabs. His descendants include many famous Arab tribes including the Qays, Banu Bakr, and others.",
    familyHinglish: "Nabi Ismail (AS) ne Makkah mein Jurhum qabeel ki ek aurat se shaadi ki. Unke barah bete hue jo twelve qabeilon ke head bane, Ishmaelites ya Shumali Arab ke naam se mashhoor. Unke aulad mein bohat saari mashhoor Arab qabeileain shamil hain jisme Qays, Banu Bakr aur dusri shamil hain.",
    prophecyTimeline: "Prophet Ismail (AS) was born around 2000 BCE and lived in Makkah. He was appointed as a prophet after the incident of the sacrifice. He was the ancestor of the Arab nations and his descendants include the Prophet Muhammad (SAW).",
    prophecyTimelineHinglish: "Nabi Ismail (AS) taqreeban 2000 Qabl E Maseeh paida hue aur Makkah mein rahe. Wo qurbani ke baad Nabi appoint kiye gaye. Wo Arab qaumon ke jadd the aur unke aulad mein Nabi Muhammad (SAW) shamil hain.",
    revelations: ["Monotheism (Tawhid)", "Submission to Allah's will", "The importance of sacrifice", "The sacredness of Makkah"],
    revelationsHinglish: ["Tawhid (Ektaahidi)", "Allah ki marzi mein tasleem", "Qurbani ki ahmiyat", "Makkah ki pakdagi"],
    conflicts: ["The test of sacrifice with his father", "Living in a barren land", "Establishing identity among the Jurhum tribe"],
    conflictsHinglish: ["Apne baap ke saath qurbani ki aazmaish", "Banjar land mein rehna", "Jurhum qabeil mein identity establish karna"],
    companions: ["His mother Hajar", "His father Ibrahim", "His wife from Jurhum tribe", "His twelve sons"],
    companionsHinglish: ["Unni maa Hajar", "Unke baap Ibrahim", "Jurhum qabeil ki unki biwi", "Unke barah bete"],
    enemies: ["Those who threatened or harmed him in Makkah"],
    enemiesHinglish: ["Jinhon ne Makkah mein unhe threaten kiya ya nuqaan pahunchaya"],
    deathLegacy: "Prophet Ismail (AS) passed away and was buried near the Ka'bah in the Hijr Ismail area. His legacy is immense - he is the ancestor of the Arab nations, and through his lineage came the Prophet Muhammad (SAW). Every year, Muslims commemorate his willingness to be sacrificed during Eid al-Adha.",
    deathLegacyHinglish: "Nabi Ismail (AS) inteqaal kar gaye aur unhein Ka'bah ke qareeb Hijr Ismail area mein dafan kiya gaya. Unka legacy bohat bda hai - wo Arab qaumon ke jadd hain, aur unki lineage se Nabi Muhammad (SAW) aaye. Har saal, Muslim Eid al-Adha par unki qurbani ke liye tayyar hone ko yaad karte hain.",
    tafseerInsights: ["Ismail's story emphasizes the concept of sacrifice in Islam", "The Zamzam well is a miracle that continues to provide water today", "His acceptance of being sacrificed shows perfect submission to Allah", "He is the ancestor of the final prophet Muhammad (SAW)", "Classical scholars note his role as the progenitor of the Arab nations"],
    tafseerInsightsHinglish: ["Ismail ki kahani Islam mein qurbani ke concept par zor deti hai", "Zamzam ka chashma ek aisa miracle hai jo aaj bhi pani deta hai", "Qurbani ke liye tayyar hona Allah ke samne mukammal tasleem dikhata hai", "Wo aakhri Nabi Muhammad (SAW) ke jadd hain", "Classical scholars note karte hain unki Arab qaumon ke jadd ke roop mein"],
    psychologicalAspects: "Ismail demonstrated extraordinary patience and trust in Allah from childhood. Being left in a barren valley could have caused psychological trauma, but his faith remained strong. His willingness to be sacrificed shows deep spiritual submission beyond normal human emotions.",
    psychologicalAspectsHinglish: "Ismail ne childhood se hi extraordinary sabr aur Allah par bharosa dikhaya. Bandar waadi mein chhodna psychological trauma cause kar sakta tha, lekin unka imaan strong raha. Qurbani ke liye tayyar hona normal human emotions se aage spiritual submission dikhata hai.",
    practicalApplications: ["Complete obedience to Allah's commands", "Trust in Allah during difficult times", "The virtue of sacrifice in Islam", "Makkah's sacred status in Islam"],
    practicalApplicationsHinglish: ["Allah ke hukmon ki mukammal farmabardari", "Mushkil waqt mein Allah par bharosa", "Islam mein qurbani ki fazilat", "Islam mein Makkah ki pak status"],
    comparativeAnalysis: "Like his father Ibrahim, Ismail demonstrated complete submission to Allah. Both father and son were tested with sacrifice, showing the importance of this virtue in the lineage of prophets."
  },
  {
    id: 9,
    nameArabic: "إسحاق",
    nameEnglish: "Ishaq",
    nameTransliteration: "Ishaq (AS)",
    title: "The Prophet and Father of the Israelites",
    titleHinglish: "Nabi aur Bani Israel ke Waalid",
    nation: "The Israelites",
    nationHinglish: "Bani Israel",
    timePeriod: "Son of Ibrahim, around 2000 BCE",
    timePeriodHinglish: "Ibrahim ke bete, taqreeban 2000 qabl e maseeh",
    story: `Ishaq (AS) was the younger son of Ibrahim (AS), born to Sarah in their old age as a miracle from Allah. When angels visited Ibrahim (AS) and gave him the good news of a son, Sarah laughed in surprise because both were very old. The angels told them that Allah can do all things.

Ishaq (AS) grew up to be a prophet and had two sons: Esau (A'is) and Jacob (Yaqub). He continued his father's mission of calling people to monotheism. Allah blessed him with prophethood and wisdom.

Ishaq (AS) is the ancestor of the Israelites (Bani Israel) through his son Yaqub. All the prophets of the Children of Israel descended from him, including Musa (Moses), Dawud (David), Sulaiman (Solomon), and Isa (Jesus). He is buried in the Cave of Machpelah in Hebron, alongside his father Ibrahim and wife Rebecca.`,
    storyHinglish: `Hazrat Ishaq (AS) Hazrat Ibrahim (AS) ke chhote bete the, Sarah ke pet se unki budhapi mein Allah ke mo'jize ke taur par paida hue. Jab farishte Ibrahim (AS) se mile aur unhein bete ki khushkhabri di, to Sarah hairat mein hans padi kyunke donon buhat booray thay. Farishton ne unhein bataya ke Allah har cheez kar sakta hai.

Ishaq (AS) baray hokar Nabi bane aur unke do bete hue: A'is (Esau) aur Yaqub (Jacob). Unhon ne apne baap ke mission ko jari rakha aur logon ko tauheed ki dawat di. Allah ne unhein nabuwwat aur hikmat se nawaza.

Ishaq (AS) apne bete Yaqub ke zariye Bani Israel ke jadd banay. Bani Israel ke tamam anbiya unhi ki nasal se hain, jin mein Musa, Dawud, Sulaiman aur Isa (AS) shaamil hain. Unhein Hebron mein Kahf-e-Makfila mein unke baap Ibrahim aur biwi Rebecca ke paas dafan kiya gaya hai.`,
    lessons: [
      "Allah can do all things, even the impossible",
      "Continue the mission of righteousness",
      "Blessings continue through generations"
    ],
    lessonsHinglish: [
      "Allah har cheez kar sakta hai, chahe namumkin ho",
      "Neeki ke mission ko jari rakho",
      "Barkaten naslon tak jaari rehti hain"
    ],
    miracles: [
      "Born to elderly parents as a miracle",
      "Given prophethood and wisdom"
    ],
    miraclesHinglish: [
      "Booray waalidain ko mo'jize ke taur par paida hue",
      "Unhein nabuwwat aur hikmat ata ki gayi"
    ],
    quranicRefs: ["Surah Maryam 19:49-50", "Surah Al-Anbiya 21:72-73"],
    characterTraits: ["Righteous", "Prophet", "Blessed"],
    characterTraitsHinglish: ["Neik", "Nabi", "Mubarik"],
    earlyLife: "Prophet Ishaq (AS) was born to Sarah, the wife of Ibrahim (AS), when both were very old - a miracle from Allah. His birth was announced by angels who visited Ibrahim. Sarah laughed in amazement when she heard the news. Ishaq grew up in the household of Ibrahim and was blessed with prophecy.",
    earlyLifeHinglish: "Nabi Ishaq (AS) Sarah, Ibrahim (AS) ki biwi, se paide hue jab ke dono bohat budh the - Allah se mo'jiza. Unki paidaish ki khabar farishton ne di jinhon Ibrahim ke paas aaye. Sarah ne sunke hasi li. Ishaq Ibrahim ke ghar mein bada hua aur prophecy se bereed hua.",
    family: "Prophet Ishaq (AS) married Rebecca (Rizqah) and they had twin sons: Esau (Esa) and Jacob (Ya'qub). Jacob became a prophet as well. Ishaq's family continued the lineage of Ibrahim.",
    familyHinglish: "Nabi Ishaq (AS) ne Rebecca (Rizqah) se shaadi ki aur unke jemein twins bete hue: Esau (Esa) aur Jacob (Ya'qub). Jacob bhi Nabi bane. Ishaq ki family Ibrahim ki lineage continue ki.",
    prophecyTimeline: "Prophet Ishaq (AS) was born around 2000 BCE and was blessed with prophecy. He inherited the covenant from his father Ibrahim and passed it to his son Jacob.",
    prophecyTimelineHinglish: "Nabi Ishaq (AS) taqreeban 2000 Qabl E Maseeh paida hue aur prophecy se bereed hua. Usne apne baap Ibrahim se meesaq waris kiya aur apne bete Jacob ko diya.",
    revelations: ["Monotheism", "Inheritance of the covenant", "Blessings for the righteous"],
    revelationsHinglish: ["Tawhid", "Meesaq ki waris", "Neek logon ke liye barkatein"],
    conflicts: ["His brother Ismael's status", "Preparing for his own test of faith"],
    conflictsHinglish: ["Apne bhai Ismail ki status", "Apni imaan ki aazmaish ke liye tayyari"],
    companions: ["His father Ibrahim", "His mother Sarah", "His wife Rebecca", "His sons Esau and Jacob"],
    companionsHinglish: ["Unke baap Ibrahim", "Unni maa Sarah", "Unki biwi Rebecca", "Unke bete Esau aur Jacob"],
    enemies: ["Those who opposed his prophetic mission"],
    enemiesHinglish: ["Jinhon ne unki prophetic mission ka khilaaf kiya"],
    deathLegacy: "Prophet Ishaq (AS) passed away after a long and blessed life. He is buried in Hebron near the Cave of the Patriarchs. His lineage continues through Jacob, from whom the Bani Israel descended.",
    deathLegacyHinglish: "Nabi Ishaq (AS) ek lambi aur barkatwala zindagi ke baad inteqaal kar gaye. Woh Hebron mein Maqbara-e-Maqdis ke qareeb dafan hain. Unki lineage Jacob ke zariye continue hui, jisse Bani Israel paida hui.",
    tafseerInsights: ["Ishaq's birth was a miracle showing Allah's power", "He inherited the covenant from Ibrahim along with Ismail", "Classical scholars note his role in the lineage leading to the Israelites", "His patience and gratitude are exemplary"],
    tafseerInsightsHinglish: ["Ishaq ki paidaish mo'jiza tha jo Allah ki taqat dikhata hai", "Usne Ismail ke saath Ibrahim se meesaq waris kiya", "Classical scholars note karte hain unki Bani Israel led karne wali lineage mein role ke liye", "Unka sabr aur shukraexample hai"],
    psychologicalAspects: "Ishaq grew up knowing he was a miracle child. He likely grappled with the expectations placed upon him as the son of the great Ibrahim and as a prophet.",
    psychologicalAspectsHinglish: "Ishaq bada hua ye jaankar ke wo mo'jiza ka bachcha hai. Usko shayad apne upar expections ka saamna karna pada jab ke wo bade Ibrahim ke bete aur ek Nabi the.",
    practicalApplications: ["Trust in Allah's timing for blessings", "Gratitude for Allah's favors", "Maintaining the covenant of monotheism"],
    practicalApplicationsHinglish: ["Barkaton ke liye Allah ke timing par bharosa", "Allah ke fazlat ke liye shukr", "Tawhid ka meesaq maintain karna"],
    comparativeAnalysis: "Ishaq and Ismail both inherited the covenant from Ibrahim. While Ismail became the ancestor of the Arabs, Ishaq became the ancestor of the Israelites."
  },
  {
    id: 10,
    nameArabic: "يعقوب",
    nameEnglish: "Yaqub",
    nameTransliteration: "Yaqub (AS)",
    title: "Israel (The Prophet who wrestled with Allah's Angel)",
    titleHinglish: "Israel (Jis ne Allah ke Farishte se kushti ladi)",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Son of Ishaq, around 1900 BCE",
    timePeriodHinglish: "Ishaq ke bete, taqreeban 1900 qabl e maseeh",
    story: `Yaqub (AS), also known as Israel, was the son of Ishaq (AS) and the grandson of Ibrahim (AS). He was a prophet who had twelve sons who became the ancestors of the Twelve Tribes of Israel. His most beloved son was Yusuf (Joseph).

Yaqub (AS) faced many trials in his life. His brothers threw Yusuf into a well out of jealousy, and Yaqub (AS) wept so much for his lost son that he became blind. He never gave up hope and continued to trust in Allah, saying "I only complain of my suffering to Allah."

After many years, Allah reunited Yaqub (AS) with his son Yusuf in Egypt. When Yaqub (AS) and his family moved to Egypt to be with Yusuf, he advised his children to worship Allah alone and not to die except as Muslims. He is buried in the Cave of Machpelah in Hebron.`,
    storyHinglish: `Hazrat Yaqub (AS), jinhein Israel bhi kehte hain, Hazrat Ishaq (AS) ke bete aur Hazrat Ibrahim (AS) ke potay thay. Wo Nabi the jinke barah bete hue jo Bani Israel ke barah qabeelon ke jadd banay. Unke sab se pyare bete Yusuf (Joseph) thay.

Yaqub (AS) ne apni zindagi mein bohat si aazmaishen jheli. Unke bhaiyon ne hasad ki wajah se Yusuf ko kuen mein phenk diya, aur Yaqub (AS) apne gayab bete ke liye itna roye ke unki aankhein kharab ho gayein. Unhon ne kabhi umeed nahi chhori aur Allah par bharosa jari rakha, kehne lage "Main apni takleef ki shikayat sirf Allah se karta hoon."

Kai saal baad, Allah ne Yaqub (AS) ko unke bete Yusuf se Misr mein milaya. Jab Yaqub (AS) aur unka khandana Yusuf ke saath rehne Misr chala gaya, to unhon ne apne bachon ko nasihat ki ke sirf Allah ki ibadat karein aur Musalmanon ki haalat mein marein. Unhein Hebron mein Kahf-e-Makfila mein dafan kiya gaya hai.`,
    lessons: [
      "Never lose hope in Allah's mercy",
      "Patience through trials brings reward",
      "Trust in Allah even in the darkest times"
    ],
    lessonsHinglish: [
      "Allah ki rehmat ki umeed kabhi mat chhoro",
      "Aazmaishon mein sabr ajar lata hai",
      "Andheri ghadiyon mein bhi Allah par bharosa rakho"
    ],
    miracles: [
      "Reunited with Yusuf after many years",
      "His shirt restored his eyesight"
    ],
    miraclesHinglish: [
      "Kai saal baad Yusuf se milaap",
      "Unki qameez ne unki aankhon ki roshni wapas ki"
    ],
    quranicRefs: ["Surah Yusuf 12:38-101", "Surah Maryam 19:49-58"],
    characterTraits: ["Patient", "Trusting", "Loving Father"],
    characterTraitsHinglish: ["Sabr karne wale", "Bharosa karne wale", "Pyare Baap"],
    earlyLife: "Prophet Yaqub (AS) was the son of Ishaq (AS) and the grandson of Ibrahim (AS). He grew up in the household of his righteous parents and grandparents, learning the principles of monotheism and righteousness from a young age.",
    earlyLifeHinglish: "Nabi Yaqub (AS) Ishaq (AS) ke bete aur Ibrahim (AS) ke potay thay. Woh apne neek waalid aur dadi ke ghar mein bade, chhoti umr se tauheed aur neeki ke principles seekhe.",
    family: "Prophet Yaqub (AS) had twelve sons who became the ancestors of the Twelve Tribes of Israel. His most beloved son was Yusuf (Joseph). His sons included Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Benjamin, and Joseph.",
    familyHinglish: "Nabi Yaqub (AS) ke barah bete hue jo Bani Israel ke barah qabeelon ke jadd banay. Unke sab se pyare bete Yusuf (Joseph) thay. Unke beton mein Reuben, Simeon, Levi, Judah, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Benjamin, aur Joseph shamil the.",
    prophecyTimeline: "Prophet Yaqub (AS) was born around 1900 BCE and inherited prophethood from his father Ishaq. He passed the prophetic lineage to his son Yusuf and grandsons.",
    prophecyTimelineHinglish: "Nabi Yaqub (AS) taqreeban 1900 Qabl E Maseeh paida hue aur apne baap Ishaq se nabuwwat waris ki. Usne prophetic lineage apne bete Yusuf aur potay ko di.",
    revelations: ["Monotheism", "Patience during trials", "The importance of family bonds", "Divine destiny and wisdom"],
    revelationsHinglish: ["Tawhid", "Aazmaishon mein sabr", "Family bonds ki ahmiyat", "Ilahi qadar aur hikmat"],
    conflicts: ["Losing his beloved son Yusuf", "His sons' jealousy and betrayal", "Years of grief and blindness", "Family crisis"],
    conflictsHinglish: ["Apne pyare bete Yusuf ka khone", "Unke beton ki hasad aur betrayal", "Saalon tak gam aur andhera", "Family crisis"],
    companions: ["His father Ishaq", "His wife(s)", "His twelve sons especially Yusuf and Benjamin", "His daughters"],
    companionsHinglish: ["Unke baap Ishaq", "Unki biwiyan", "Unke barah bete khussoan Yusuf aur Benjamin", "Unki betiyan"],
    enemies: ["His sons who plotted against Yusuf", "Those who caused his suffering"],
    enemiesHinglish: ["Jinhon ne Yusuf ke khilaaf saazish ki", "Jinhon ne unki takleef cause ki"],
    deathLegacy: "Prophet Yaqub (AS) passed away in Egypt after being reunited with Yusuf. He was buried in the Cave of Machpelah in Hebron alongside his father Ishaq, grandfather Ibrahim, and other patriarchs. His descendants became the Twelve Tribes of Israel.",
    deathLegacyHinglish: "Nabi Yaqub (AS) Misr mein Yusuf se milne ke baad inteqaal kar gaye. Woh Hebron mein Cave of Machpelah mein apne baap Ishaq, dada Ibrahim aur doosre patriarchs ke saath dafan hain. Unke aulad Bani Israel ke barah qabeel bane.",
    tafseerInsights: ["Yaqub's patience during his trials is legendary in Islamic tradition", "His statement 'I only complain to Allah' shows perfect submission", "The reunion with Yusuf demonstrates Allah's plan always comes true", "Classical scholars view him as a model of patience and trust in Allah"],
    tafseerInsightsHinglish: ["Yaqub ki aazmaishon mein sabr Islamic tradition mein legendary hai", "Unki statement 'Main sirf Allah se shikayat karta hoon' perfect submission dikhata hai", "Yusuf se milna dikhata hai Allah ka plan hamesha sach hota hai", "Classical scholars unhe sabr aur Allah par bharosa ke model ke taur par dekhte hain"],
    psychologicalAspects: "Yaqub's grief over losing Yusuf was so profound that he became blind. This shows the depth of a parent's love. His patience through years of not knowing his son's fate demonstrates extraordinary emotional strength and faith.",
    psychologicalAspectsHinglish: "Yusuf ke khone par Yaqub ka gam itna gehra tha ke unki aankhein kharab ho gayin. Ye baap ke pyaar ki gehrai dikhata hai. Saalon tak apke bete ki fate na jaankar unki sabr extraordinary emotional strength aur imaan dikhata hai.",
    practicalApplications: ["Never lose hope in Allah's mercy", "Patience through trials is rewarded", "Parental love is profound and sacred", "Trust in Allah's plan even when it seems impossible"],
    practicalApplicationsHinglish: ["Allah ki rehmat ki umeed kabhi mat chhoro", "Aazmaishon mein sabr ka ajar milta hai", "Baap ka pyaar gehra aur pakista hai", "Allah ke plan par bharosa rakho jab ye namumkin lage"],
    comparativeAnalysis: "Like his father Ishaq and grandfather Ibrahim, Yaqub demonstrated patience through severe trials. His story parallels Ibrahim's test with sacrifice, but Yaqub's test was loss of a loved one over many years."
  },
  {
    id: 11,
    nameArabic: "يوسف",
    nameEnglish: "Yusuf",
    nameTransliteration: "Yusuf (AS)",
    title: "The Prophet of Beauty and Patience",
    titleHinglish: "Husn aur Sabr ke Nabi",
    nation: "Egypt and the Children of Israel",
    nationHinglish: "Misr aur Bani Israel",
    timePeriod: "Son of Yaqub, around 1800 BCE",
    timePeriodHinglish: "Yaqub ke bete, taqreeban 1800 qabl e maseeh",
    story: `Yusuf (AS) was the most beloved son of Yaqub (AS), known for his extraordinary beauty and righteousness. He saw a dream where eleven stars, the sun, and the moon prostrated to him. When he told his father about the dream, Yaqub (AS) advised him not to tell his brothers, who were already jealous of him.

Out of jealousy, his brothers threw him into a well and told their father that a wolf had eaten him. Some travelers found Yusuf (AS) and sold him as a slave in Egypt to a high-ranking official named Aziz. Aziz's wife, Zulaikha, tried to seduce Yusuf (AS) because of his beauty, but he refused. When she falsely accused him, he was imprisoned.

In prison, Yusuf (AS) interpreted the dreams of two fellow prisoners. When the king had a troubling dream that no one could interpret, the former prisoner who had been released remembered Yusuf (AS). Yusuf (AS) interpreted the dream, predicting seven years of plenty followed by seven years of famine. The king was so impressed that he appointed Yusuf (AS) as the treasurer of Egypt.

During the famine, Yusuf (AS)'s brothers came to Egypt seeking food. Yusuf (AS) recognized them but they did not recognize him. After testing them, he revealed his identity and forgave them. He sent for his father and the whole family moved to Egypt. The Quran says this is "the most beautiful of stories."`,
    storyHinglish: `Hazrat Yusuf (AS) Hazrat Yaqub (AS) ke sab se pyare bete the, jo apne be-misaal husn aur neki ke liye mashhoor thay. Unhon ne ek khwab dekha jis mein gayarah sitare, sooraj aur chand unhein sajda kar rahe thay. Jab unhon ne apne baap ko khwab bataya, to Yaqub (AS) ne unhein nasihat ki ke apne bhaiyon ko na batayein, jo pehle se hi unse hasad karte thay.

Hasad ki wajah se, unke bhaiyon ne unhein kuen mein phenk diya aur apne baap ko bataya ke ek bheriye ne unhein kha liya hai. Kuch musafiron ne Yusuf (AS) ko paaya aur unhein Misr mein ek aala darje ke afsar Aziz ko ghulam ke taur par bech diya. Aziz ki biwi Zulaikha ne Yusuf (AS) ke husn ki wajah se unhein fasane ki koshish ki, lekin unhon ne inkar kar diya. Jab unhon ne jhootha ilzaam lagaya, to unhein jail mein daal diya gaya.

Jail mein, Yusuf (AS) ne do saathi qaidiyon ke khwabon ki tabeer ki. Jab badshah ko ek pareshan kun khwab aaya jiska koi matlab nahi nikaal sakta tha, to wo qaidi jo riha ho gaya tha usse Yusuf (AS) ki yaad aayi. Yusuf (AS) ne khwab ki tabeer ki, saat saal ki kasrat ke baad saat saal ki qahat ki peshgoi ki. Badshah itna mutaasir hua ke usne Yusuf (AS) ko Misr ka khazanchi bana diya.

Qahat ke dauran, Yusuf (AS) ke bhai Misr mein khana talash karne aaye. Yusuf (AS) ne unhein pehchaan liya lekin unhon ne unhein nahi pehchaana. Unki aazmaish lene ke baad, unhon ne apni shanakhat zahir ki aur unhein maaf kar diya. Unhon ne apne baap ko bulaya aur poora khandana Misr chala gaya. Quran kehta hai ke ye "sab se haseen kahani" hai.`,
    lessons: [
      "Patience and righteousness are rewarded",
      "Forgiveness is better than revenge",
      "Trust in Allah through all circumstances",
      "Beauty is a test from Allah"
    ],
    lessonsHinglish: [
      "Sabr aur neki ka ajar milta hai",
      "Maafi badla lene se behtar hai",
      "Tamam haalaat mein Allah par bharosa rakho",
      "Husn Allah ki aazmaish hai"
    ],
    miracles: [
      "His beauty was legendary",
      "Interpreted dreams accurately",
      "Rose from slave to minister"
    ],
    miraclesHinglish: [
      "Unka husn qissagoin tha",
      "Khwabon ki durust tabeer ki",
      "Ghulam se wazir tak ka safar"
    ],
    quranicRefs: ["Surah Yusuf 12:1-111"],
    characterTraits: ["Beautiful", "Patient", "Forgiving", "Wise"],
    characterTraitsHinglish: ["Haseen", "Sabr karne wale", "Maaf karne wale", "Hakeem"],
    earlyLife: "Prophet Yusuf (AS) was born to Yaqub (AS) and was known from childhood for his exceptional beauty and righteousness. He grew up in a blessed household as the most beloved son of his father. His early years were marked by divine dreams that indicated his future greatness.",
    earlyLifeHinglish: "Nabi Yusuf (AS) Yaqub (AS) ke paida hue aur childhood se hi apne exceptional husn aur neki ke liye mashhoor thay. Woh apne baap ke sab se pyare bete ke taur par ek barkatwala ghar mein bade. Unki chhoti umr ishaari khwabon se marked thi jo unke mustaqbil ki greatness indicate karte thay.",
    family: "Prophet Yusuf (AS) had eleven brothers who were jealous of him. He also had a younger full brother, Benjamin, from the same mother. He married in Egypt and had two sons: Ephraim and Manasseh, who continued his lineage.",
    familyHinglish: "Nabi Yusuf (AS) ke gayarah bhai the jo unse hasad karte the. Unka ek chhota bhaai bhi tha, Benjamin, same maa se. Usne Misr mein shaadi ki aur do bete hue: Ephraim aur Manasseh, jo unki lineage continue ki.",
    prophecyTimeline: "Prophet Yusuf (AS) was born around 1800 BCE. He was betrayed by his brothers, sold into slavery, faced false accusations and imprisonment, but eventually rose to become the treasurer of Egypt.",
    prophecyTimelineHinglish: "Nabi Yusuf (AS) taqreeban 1800 Qabl E Maseeh paida hue. Uske bhaiyon ne usse betray kiya, ghulam ke taur par bech diya, jhoothe ilzaam lagaye aur jail mein daala, lekin akhir mein Misr ka khazanchi bana.",
    revelations: ["Monotheism", "Divine destiny and wisdom", "True leadership qualities", "Interpretation of dreams"],
    revelationsHinglish: ["Tawhid", "Ilahi qadar aur hikmat", "True leadership qualities", "Khwabon ki tabeer"],
    conflicts: ["Jealous brothers who betrayed him", "False accusations by Zulaikha", "Imprisonment", "Years away from family"],
    conflictsHinglish: ["Jinhon ne usse betray kiya", "Zulaikha ke jhoothe ilzaam", "Jail", "Ghar se saal door rehna"],
    companions: ["His father Yaqub", "His brother Benjamin", "Aziz of Egypt (his master)", "The prisoners in jail", "The king of Egypt"],
    companionsHinglish: ["Unke baap Yaqub", "Unka bhaai Benjamin", "Misr ka Aziz (uska maalik)", "Jail ke qaidi", "Misr ka badshah"],
    enemies: ["His jealous brothers", "Zulaikha who falsely accused him", "Those who conspired against him"],
    enemiesHinglish: ["Unke hasi bhai", "Zulaikha jisne jhootha ilzaam lagaya", "Jinhon ne uske khilaaf saazish ki"],
    deathLegacy: "Prophet Yusuf (AS) passed away in Egypt after a life of great achievement. He was buried in Egypt but his legacy lives on through his descendants and his story in the Quran, which is considered the most beautiful narrative.",
    deathLegacyHinglish: "Nabi Yusuf (AS) Misr mein bohat bara life achieve karne ke baad inteqaal kar gaye. Woh Misr mein dafan huye lekin unki legacy unke aulad aur Quran mein unki kahani se zinda hai, jo sab se haseen kahani consider ki jati hai.",
    tafseerInsights: ["The story of Yusuf is the longest narrative in the Quran", "Classical scholars note its literary beauty and psychological depth", "His journey from pit to palace shows Allah's divine plan", "His forgiveness of brothers demonstrates ultimate mercy"],
    tafseerInsightsHinglish: ["Yusuf ki kahani Quran mein sabse lambi narrative hai", "Classical scholars uski literary beauty aur psychological depth note karte hain", "Kuen se mahal tak ka safar Allah ke ilahi plan ko dikhata hai", "Bhaiyon ko maaf karna ultimate mercy dikhata hai"],
    psychologicalAspects: "Yusuf's journey tested every aspect of human psychology - from childhood jealousy to adult temptation, from imprisonment to power. His ability to maintain his righteousness through all these tests shows extraordinary psychological strength.",
    psychologicalAspectsHinglish: "Yusuf ka safar ne har aspect of human psychology test kiya - childhood se lekar adult temptation tak, jail se lekar power tak. Har test se neeki maintain karne ki unki ability extraordinary psychological strength dikhata hai.",
    practicalApplications: ["Patience through trials leads to success", "Forgiveness brings peace and honor", "Maintain righteousness in all circumstances", "True leadership requires wisdom and fairness"],
    practicalApplicationsHinglish: ["Aazmaishon mein safar successful tak le jata hai", "Maafi shanti aur izzat deta hai", "Har haalaat mein neeki maintain karo", "True leadership ke liye hikmat aur insaf chahiye"],
    comparativeAnalysis: "Yusuf's story is unique among prophets for its detailed narrative of human emotions, family dynamics, and political acumen. It serves as a complete model for dealing with adversity and success."
  },
  {
    id: 12,
    nameArabic: "أيوب",
    nameEnglish: "Ayyub",
    nameTransliteration: "Ayyub (AS)",
    title: "The Prophet of Patience (Sabr)",
    titleHinglish: "Sabr ke Nabi",
    nation: "The people of the region (possibly Edom)",
    nationHinglish: "Ilaqe ke log (mumkinah tor par Edom)",
    timePeriod: "After Yusuf, before Musa",
    timePeriodHinglish: "Yusuf ke baad, Musa se pehle",
    story: `Ayyub (AS) was a wealthy and righteous prophet who had many children, vast lands, and abundant livestock. He was known for his patience and gratitude to Allah. Satan challenged that Ayyub (AS) was only faithful because of his blessings, so Allah allowed him to be tested.

Ayyub (AS) lost all his wealth, his children died, and he was afflicted with a terrible skin disease that covered his entire body. His wife remained faithful to him, but others shunned him. Despite his suffering, Ayyub (AS) never complained or lost faith in Allah.

After years of patience, Ayyub (AS) made a humble dua to Allah, asking for relief from his suffering. Allah accepted his dua and restored everything to him - even more than what he had before. He was given new children and his health was restored. Ayyub (AS) became the symbol of patience in Islam.`,
    storyHinglish: `Hazrat Ayyub (AS) daulat mand aur neik Nabi the jinke bohat se bache, wasee zameen aur bohat se maweshi thay. Wo apne sabr aur Allah ka shukriya ada karne ke liye mashhoor thay. Shaitan ne challenge kiya ke Ayyub (AS) sirf apni nematon ki wajah se faithful hain, is liye Allah ne unki aazmaish ki ijazat di.

Ayyub (AS) ne apni sari dolat gawa di, unke bachon ki maut ho gayi, aur unhein ek buri jildi bimari ka shikaar kiya gaya jo unke pooray jism ko gher liya. Unki biwi unke saath wafadar rahi, lekin doosron ne unhein chhor diya. Apni takleef ke bawajood, Ayyub (AS) ne kabhi shikayat nahi ki aur na Allah par se imaan khoya.

Saalon ke sabr ke baad, Ayyub (AS) ne Allah se apni takleef se nijaat ki ek faqeerana dua ki. Allah ne unki dua qubool ki aur unhein sab kuch wapas kar diya - pehle se bhi zyada. Unhein naye bache diye gaye aur unki sehat wapas ki gayi. Ayyub (AS) Islam mein sabr ki alamat ban gaye.`,
    lessons: [
      "Patience in adversity is greatly rewarded",
      "Never lose faith in Allah's mercy",
      "Trials are temporary and relief comes",
      "Gratitude in good times and patience in bad times"
    ],
    lessonsHinglish: [
      "Museebat mein sabr ka bada ajar hai",
      "Allah ki rehmat ki umeed kabhi mat chhoro",
      "Aazmaishen mauqufi hain aur asaani aati hai",
      "Achay waqt mein shukr aur bure waqt mein sabr"
    ],
    miracles: [
      "All his wealth and children were restored",
      "His health was completely restored",
      "Became a symbol of patience for all humanity"
    ],
    miraclesHinglish: [
      "Unki sari dolat aur bache wapas kar diye gaye",
      "Unki sehat mukammal taur par wapas ki gayi",
      "Tamam insaaniyat ke liye sabr ki alamat bane"
    ],
    quranicRefs: ["Surah Sad 38:41-44", "Surah Al-Anbiya 21:83-84"],
    characterTraits: ["Patient", "Grateful", "Trusting"],
    characterTraitsHinglish: ["Sabr karne wale", "Shukar guzar", "Bharosa karne wale"],
    earlyLife: "Prophet Ayyub (AS) was known for his immense wealth and piety. He was a righteous man who possessed extensive lands, flocks, and a large family. He was a monotheist who worshipped Allah alone.",
    earlyLifeHinglish: "Nabi Ayyub (AS) apni bohat dolat aur taqwa ke liye mashhoor thay. Wo ek neek insaan tha jiske paas bohat jagla, bhansa aur bada khandana tha. Wo ek monotheist tha jo sirf Allah ki ibadat karta tha.",
    family: "Prophet Ayyub (AS) was married and had many children. His family was also tested along with him during his trials.",
    familyHinglish: "Nabi Ayyub (AS) ki shadi hui thi aur unke bohat se bache the. Unka khandana bhi unki aazmaishon ke dauran unke saath test hua.",
    prophecyTimeline: "Prophet Ayyub (AS) lived in the land of Uz (possibly in Arabia or Jordan). He was tested with severe losses - his wealth, children, and health were all taken from him.",
    prophecyTimelineHinglish: "Nabi Ayyub (AS) Uz (shayad Arabia ya Jordan) mein rahe. Unhe severe losses ke saath test kiya gaya - unki dolat, bache aur sehat sab chheen li gayi.",
    revelations: ["Patience during trials", "Gratitude in prosperity and adversity", "Total trust in Allah"],
    revelationsHinglish: ["Aazmaishon mein sabr", "Mushkil aur barkat mein shukr", "Allah par mukammal bharosa"],
    conflicts: ["Loss of all wealth", "Death of all children", "Severe illness and pain", "Pressure from wife to curse Allah"],
    conflictsHinglish: ["Sari dolat ka khone", "Tamam bacho ki maut", "Bimari aur dard", "Biwi ka pressure Allah ki badnaam karna"],
    companions: ["His wife who remained patient", "His friends who came to comfort him"],
    companionsHinglish: ["Unki biwi jo sabr karti rahi", "Dost jo unhein tang karne aaye"],
    enemies: ["Satan who tested him", "Those who doubted his faith"],
    enemiesHinglish: ["Shaitaan jisne unhe test kiya", "Jinhon ne unke imaan par shaq kiya"],
    deathLegacy: "Prophet Ayyub (AS) was restored to health and given double his previous wealth. He lived for many more years and became a symbol of patience for all of humanity. He is remembered as the epitome of perseverance in Islamic tradition.",
    deathLegacyHinglish: "Nabi Ayyub (AS) ki sehat wapas ki gayi aur unhe pehle se double dolat mili. Wo bohat saaloun tak jeeya aur tamam insaaniyat ke liye sabr ki alamat ban gaye. Wo Islamic tradition mein perseverance ke epitome ke taur par yaad kiya jata hai.",
    tafseerInsights: ["Ayyub's story shows that trials can be tests from Allah, not punishments", "His patience is a model for all believers", "Classical scholars note his wife's loyalty and his gratitude even after restoration"],
    tafseerInsightsHinglish: ["Ayyub ki kahani dikhata hai ke aazmaish Allah ki taraf se test ho sakti hain, saza nahi", "Unka sabr sabhi mominon ke liye model hai", "Classical scholars note karte hain unki biwi ki loyalty aur unka shukr even restoration ke baad bhi"],
    psychologicalAspects: "Ayyub faced extreme suffering - loss of family, wealth, and health - yet maintained his faith. His famous statement of patience demonstrates extraordinary psychological resilience.",
    psychologicalAspectsHinglish: "Ayyub ne extreme suffering ka saamna kiya - khandana, dolat aur health ka khone - phir bhi imaan rakh. Unki famous sabr ki statement extraordinary psychological resilience dikhata hai.",
    practicalApplications: ["Patience during difficulties is rewarded by Allah", "Loss of wealth or health is not a sign of Allah's displeasure", "Maintaining faith through suffering brings great reward", "Gratitude should be maintained in both prosperity and adversity"],
    practicalApplicationsHinglish: ["Mushkil mein sabr ka ajar Allah deta hai", "Dolat ya health khona Allah ki naaraazi ki nishani nahi", "Suffering ke dauran imaan rakhne se bohat bara ajar milta hai", "Shukr barkat aur mushkil dono mein maintain karna chahiye"],
    comparativeAnalysis: "Unlike many prophets who faced external opposition, Ayyub's test was primarily internal - dealing with personal suffering while maintaining faith."
  },
  {
    id: 13,
    nameArabic: "شعيب",
    nameEnglish: "Shu'aib",
    nameTransliteration: "Shu'aib (AS)",
    title: "The Prophet to the People of Madyan",
    titleHinglish: "Qaum-e-Madyan ke Nabi",
    nation: "The People of Madyan (Midian)",
    nationHinglish: "Qaum-e-Madyan (Midian)",
    timePeriod: "Around the time of Musa",
    timePeriodHinglish: "Taqreeban Musa ke zamane mein",
    story: `Shu'aib (AS) was sent to the people of Madyan, who were known for their dishonest business practices, especially cheating in measurements and weights. They were also worshipping false gods.

Shu'aib (AS) called them to worship Allah alone and to be honest in their business dealings. He told them not to cheat people and to give full measure and weight. He said, "I only desire reform to the best of my ability."

The people rejected him and threatened to drive him out if he didn't stop preaching. They said they would stone him and his followers. When they persisted in their evil ways, Allah sent a terrible earthquake that destroyed them. Shu'aib (AS) and the believers were saved.`,
    storyHinglish: `Hazrat Shu'aib (AS) Qaum-e-Madyan ki taraf bheje gaye, jo apne be-imani karobar ke tareeqon ke liye mashhoor thi, khaaskar tola mein kameeni karne mein. Ye log jhute khudaon ki bhi ibadat karte thay.

Shu'aib (AS) ne unhein sirf Allah ki ibadat ki dawat di aur unke karobar mein imandari se kaam lene ki nasihat ki. Unhon ne unhein kaha ke logon ko dhoka na dein aur poora tola aur wazan dein. Unhon ne kaha, "Main sirf apni poori salahiyat se islaah chahta hoon."

Logon ne unhein thukra diya aur dhamki di ke agar unhon ne tabligh na chhori to unhein nikaal denge. Unhon ne kaha ke wo unhein aur unke pairokaron ko pathron se maarenge. Jab wo apni buri harkaton par rahe, to Allah ne un par zalzala bheja jo unhein tabah kar gaya. Shu'aib (AS) aur momino ko bachaya gaya.`,
    lessons: [
      "Honesty in business is part of faith",
      "Cheating in trade brings destruction",
      "Stand for justice even against your own people"
    ],
    lessonsHinglish: [
      "Karobar mein imandari imaan ka hissa hai",
      "Karobar mein dhoka tabahi lata hai",
      "Insaaf ke liye khade raho chahe apni qaum ke khilaf ho"
    ],
    miracles: [
      "Survived the earthquake",
      "His people were destroyed for their dishonesty"
    ],
    miraclesHinglish: [
      "Zalzala se bach nikle",
      "Unki qaum unki be-imani ki wajah se tabah ho gayi"
    ],
    quranicRefs: ["Surah Hud 11:84-95", "Surah Al-A'raf 7:85-93"],
    characterTraits: ["Honest", "Just", "Patient"],
    characterTraitsHinglish: ["Imandar", "Insaaf pasand", "Sabr karne wale"],
    earlyLife: "Prophet Shu'aib (AS) was from Midian and is described in the Quran as a prophet with sound judgment and wisdom. He was known for his honest and just character even before receiving prophethood.",
    earlyLifeHinglish: "Nabi Shu'aib (AS) Midian se the aur Quran mein ek hakeem aur sidq wale Nabi ke taur par describe kiye gaye hain. Wo nabuwwat se pehle se hi apne imandar aur insaaf pasand character ke liye mashhoor the.",
    family: "Prophet Shu'aib (AS) had family members who were also tested along with him. Some of his people believed in him while others rejected.",
    familyHinglish: "Nabi Shu'aib (AS) ke family members bhi unke saath test huye. Unke kuch logon ne unpar imaan laaya aur doosre ne reject kiya.",
    prophecyTimeline: "Prophet Shu'aib (AS) was sent to the people of Midian around the time of Musa (Moses). His mission was to call them to monotheism and reform their dishonest business practices.",
    prophecyTimelineHinglish: "Nabi Shu'aib (AS) Midyan ke logon ki taraf Musa ke zamane ke around bheje gaye. Unka mission unhe tauheed ki dawat dena aur unki be-imani karobar practices sudharna tha.",
    revelations: ["Monotheism", "Honesty in business", "Justice in dealing with others", "Warning against cheating"],
    revelationsHinglish: ["Tawhid", "Karobar mein imandari", "Dusron ke saath insaaf", "Dhoke ke khilaaf warning"],
    conflicts: ["Rejection by his people", "Threats of expulsion and stoning", "Economic opposition from merchants", "Stubborn disbelief"],
    conflictsHinglish: ["Apni qaum se reject", "Nikaalne aur pathron se maarne ki dhamki", "Tajiron se opposition", "Mushkil disbelief"],
    companions: ["Those who believed with him", "The righteous among his people"],
    companionsHinglish: ["Jinhon par imaan laaya", "Unki qaum ke neek log"],
    enemies: ["The disbelievers of Midian", "The dishonest merchants", "Those who threatened him"],
    enemiesHinglish: ["Midian ke kafir", "Be-imani tajir", "Jinhon ne unhe threaten kiya"],
    deathLegacy: "Prophet Shu'aib (AS) was saved from the destruction that befell his people. He is remembered as a reformer who called for honest business practices and monotheism. His story serves as a warning against commercial dishonesty.",
    deathLegacyHinglish: "Nabi Shu'aib (AS) un logon ke tabah hone se bach gaye jo unpar aaya. Wo ek islah karne wale ke taur par yaad kiya jata hai jinhon ne imandar karobar practices aur tauheed ki dawat di. Unki kahani commercial dishonesty ke khilaaf warning ke taur par kaam karti hai.",
    tafseerInsights: ["Shu'aib is the only prophet sent to a community besides his own", "His emphasis on honest business is unique among prophets", "Classical scholars note his patient approach to dawah"],
    tafseerInsightsHinglish: ["Shu'aib ek aise qaum ki taraf bheje gaye Nabi hain jo apni qaum ke siwa hain", "Unka karobar mein imandari par zor unique hai Nabioun mein", "Classical scholars note karte hain unki dawah ke liye patient approach"],
    psychologicalAspects: "Shu'aib faced a stubborn people who were deeply entrenched in their dishonest ways. His patient and persistent approach shows psychological strength in dealing with resistant audiences.",
    psychologicalAspectsHinglish: "Shu'aib ne ek stubborn qaum ka saamna kiya jo apni be-imani mein deeply entrenched thi. Unki patient aur persistent approach resistant audiences ke saath deal karne mein psychological strength dikhata hai.",
    practicalApplications: ["Honesty in business is part of Islamic ethics", "Justice should be maintained even in commercial dealings", "Patient dawah is more effective than confrontation", "Economic reform is part of prophetic mission"],
    practicalApplicationsHinglish: ["Karobar mein imandari Islamic ethics ka hissa hai", "Insaf commercial dealings mein bhi maintain karna chahiye", "Patient dawah confrontation se zyada effective hai", "Economic reform prophetic mission ka hissa hai"],
    comparativeAnalysis: "Shu'aib's mission focused on economic ethics more than other prophets, making him unique in addressing commercial morality as a central part of his message."
  },
  {
    id: 14,
    nameArabic: "موسى",
    nameEnglish: "Musa",
    nameTransliteration: "Musa (AS)",
    title: "The Prophet who Spoke Directly to Allah (Kaleemullah)",
    titleHinglish: "Jis ne Allah se Sidhi Guftagu ki (Kaleemullah)",
    nation: "The Children of Israel (Bani Israel)",
    nationHinglish: "Bani Israel",
    timePeriod: "Around 1300 BCE",
    timePeriodHinglish: "Taqreeban 1300 qabl e maseeh",
    story: `Musa (AS) is one of the greatest prophets in Islam, known as Kaleemullah (The one who spoke to Allah). He was born during a time when Pharaoh was killing all Israelite baby boys. His mother placed him in a basket in the Nile River, and he was found and raised by Pharaoh's wife, Asiya.

Musa (AS) grew up in Pharaoh's palace but never forgot his people. One day, he accidentally killed an Egyptian who was attacking an Israelite and had to flee to Madyan. There, he married and worked as a shepherd for ten years.

Allah spoke to Musa (AS) from a burning bush and commanded him to return to Egypt and free the Children of Israel from slavery. Musa (AS) and his brother Harun went to Pharaoh and demanded that he let the Israelites go. Pharaoh refused and challenged Musa (AS) to show his miracles.

Allah gave Musa (AS) many miracles: his staff turned into a serpent, his hand became white with light, and he brought plagues upon Egypt. When Pharaoh still refused, Allah commanded the Israelites to leave Egypt. Pharaoh pursued them with his army, but Allah split the sea for the Israelites and drowned Pharaoh and his army.

Musa (AS) received the Torah (Tawrat) on Mount Sinai and led the Children of Israel for forty years. He is mentioned more times in the Quran than any other prophet.`,
    storyHinglish: `Hazrat Musa (AS) Islam ke sab se bare anbiya mein se hain, jo Kaleemullah (Jis ne Allah se baat ki) ke naam se mashhoor hain. Wo us waqt paida hue jab Firon Bani Israel ke tamam nannhe larkon ko qatl kar raha tha. Unki maa ne unhein Nehar-e-Neel mein ek tokri mein rakha, aur unhein Firon ki biwi Asiya ne paaya aur parwarish ki.

Musa (AS) Firon ke mahal mein baray hue lekin apni qaum ko kabhi nahi bhoole. Ek din, unhon ne galti se ek Misri ko qatl kar diya jo ek Israelite par hamla kar raha tha aur unhein Madyan bhaagna pada. Wahan, unhon ne shaadi ki aur das saal gaayein charaain.

Allah ne Musa (AS) se jalte hue jhaar se baat ki aur unhein hukm diya ke wo Misr wapas jaayein aur Bani Israel ko ghulaami se azaad karayein. Musa (AS) aur unke bhai Harun Firon ke paas gaye aur mutaaliba kiya ke wo Israeliyon ko jaane de. Firon ne inkar kar diya aur Musa (AS) ko mo'jize dikhane ka lalkara.

Allah ne Musa (AS) ko bohat se mo'jize diye: unki asa saanp ban gayi, unka haath roshni se safed ho gaya, aur unhon ne Misr par aafaten bhejin. Jab Firon phir bhi na maana, to Allah ne Israeliyon ko Misr se nikalne ka hukm diya. Firon apni fauj ke saath unka peecha kiya, lekin Allah ne Israeliyon ke liye samandar paar kiya aur Firon aur uski fauj ko duba diya.

Musa (AS) ne Koh-e-Sina par Taurat (Torah) haasil ki aur chalees saal tak Bani Israel ki qiyadat ki. Unka Quran mein kisi bhi aur Nabi se zyada zikr hai.`,
    lessons: [
      "Allah helps the oppressed",
      "Never fear the tyrants when calling to truth",
      "Allah's promises always come true",
      "Be patient with your people even when they disobey"
    ],
    lessonsHinglish: [
      "Allah mazloomon ki madad karta hai",
      "Haqq ki dawat dene mein zalimon se mat daro",
      "Allah ke waade hamesha pooray hote hain",
      "Apni qaum ke saath sabr karo chahe wo na farmani karein"
    ],
    miracles: [
      "Staff turned into a serpent",
      "Hand became white with light",
      "Split the sea for the Israelites",
      "Received the Torah directly from Allah",
      "Water gushed from a rock"
    ],
    miraclesHinglish: [
      "Asa saanp ban gaya",
      "Haath roshni se safed ho gaya",
      "Israeliyon ke liye samandar paar kiya",
      "Allah se sidhi Taurat haasil ki",
      "Pathar se paani phoot para"
    ],
    quranicRefs: ["Surah Ta-Ha 20:9-98", "Surah Al-Qasas 28:1-50", "Surah Al-A'raf 7:103-171"],
    characterTraits: ["Brave", "Patient", "Trusting", "Leader"],
    characterTraitsHinglish: ["Bahadur", "Sabr karne wale", "Bharosa karne wale", "Sardar"],
    earlyLife: "Musa (AS) was born in Egypt during the reign of Pharaoh, when the Egyptian king had ordered the killing of all newborn Israelite boys. His mother, placed him in a basket and set him adrift on the Nile River, trusting in Allah's plan. He was discovered by Pharaoh's wife, Asiya, who raised him in the royal palace. Despite growing up in luxury, Musa (AS) never forgot his true identity as an Israelite and felt deep compassion for his people suffering under Egyptian oppression. His early life in the palace gave him education and status, which he later used to confront Pharaoh.",
    earlyLifeHinglish: "Musa (AS) Egypt mein Firon ke reign ke dauran paida hue, jab Egyptian king ne sab newborn Israelite larkon ko qatl karne ka hukm diya tha. Unki maa ne unhein ek basket mein rakha aur Nehar-e-Neel par chhod diya, Allah ke plan par bharosa karke. Firon ki biwi Asiya ne unhein paaya aur royal palace mein parwarish ki. Roshni mein baray hote hue bhi, Musa (AS) kabhi apni asli identity bhoola nahi aur apni qaum ke liye jo Egyptian oppression mein suffering thi uspar deep compassion mehsoos kiya. Palace ki unki early life ne unhe education aur status di, jis ka use unhone baad mein Firon se muqable ke liye kiya.",
    family: "Musa (AS) had two wives: one from the people of Madyan (Zipporah, the daughter of Prophet Shuaib) whom he married while working as a shepherd, and another wife mentioned in the Quran. He had children from his marriages. His brother Harun (Aaron) was also a prophet and his chief assistant in his mission to Pharaoh. His mother was a key figure in his survival, and his sister followed the family closely.",
    familyHinglish: "Musa (AS) ke do biwiyan thi: ek Madyan logon se (Zipporah, Nabi Shuaib ki beti) jis se unhone gaayein charaate waqt shadi ki, aur ek aur biwi Quran mein mention hai. Unke shadiyon se bache hue. Unka bhai Harun (Aaron) bhi ek Nabi tha aur Firon ke mission mein unka chief assistant. Unki maa unki survival mein key figure thi, aur unki behen family ke saath closely follow karti thi.",
    prophecyTimeline: "Musa (AS) received his prophethood at the age of 40 when Allah spoke to him from the burning bush. He then returned to Egypt at age 80 to confront Pharaoh, leading to the Exodus. After receiving the Torah at Mount Sinai, he led the Israelites for 40 years until his death. His mission included confronting Pharaoh, leading the Exodus, receiving divine scriptures, and guiding his people through the wilderness.",
    prophecyTimelineHinglish: "Musa (AS) ko 40 saal ki umar mein nabuvat mili jab Allah ne jalte hue jhaar se unse baat ki. Phir unhone 80 saal ki umar mein Egypt wapis jaane ke liye Firon se muqab kiya, jo Exodus mein lead kiya. Koh-e-Sina par Taurat haasil karne ke baad, unhone 40 saal tak Bani Israel ki qiyadat ki jab tak ke unki death nahi hui. Unki mission mein Firon se muqab, Exodus lead karna, divine scripts haasil karna, aur apni qaum ko wilderness ke zariye guidance karna shamil tha.",
    revelations: ["The revelation of the Torah (Tawrat)", "The staff that turned into a serpent", "The illuminated hand", "The splitting of the sea", "The revelation of the Sabbath laws", "The revelation of the Ten Commandments"],
    revelationsHinglish: ["Taurat (Tawrat) ka revelation", "Jo asa saanp ban gayi", "Rooshni wala haath", "Samandar ka paar hona", "Shabbat laws ka revelation", "Das command ka revelation"],
    conflicts: ["Confrontation with Pharaoh and his magicians", "The magicians' challenge and their conversion", "The series of plagues sent upon Egypt", "The Israelites' complaints and disbelief", "The incident of the Golden Calf", "Conflict with his brother Harun at one point"],
    conflictsHinglish: ["Firon aur uske jadoegaron se muqabla", "Jadoegaron ka challenge aur unka conversion", "Egypt par bheje gaye aafaton ka series", "Israeliyon ki shikayat aur kufr", "Sunehri bhed ka waqay", "Ek point par apne bhai Harun se khichav"],
    companions: ["His brother Harun (Aaron) - prophet and assistant", "His sister who watched over him", "The believing magicians who became followers", "The seventy elders selected for Sinai", "The Israelites who believed and followed him"],
    companionsHinglish: ["Bhai Harun (Aaron) - Nabi aur assistant", "Behen jo unpar nazar rakhti thi", "Mumin jadoegar jo follower bane", "Sinai ke liye choose kiye gaye 70 elders", "Jo Israeliyon iman le aur unhe follow kiya"],
    enemies: ["Pharaoh (the primary antagonist)", "Pharaoh's sorcerers and magicians (initially)", "The Canaanite leaders who opposed him", "Some of the Israelites who caused corruption", "The people who worshipped the Golden Calf"],
    enemiesHinglish: ["Firon (primary antagonist)", "Firon ke jadoegar aur magicians (initially)", "Canaanite leaders jo unke khilaaf the", "Kuch Israeliyon jo corruption karte the", "Logon ne jo Sunehri bhed ki ibadat ki"],
    deathLegacy: "Musa (AS) died at the age of 120, just before entering the Promised Land of Canaan. According to Islamic tradition, he was buried in an unknown location, possibly in the Jordan Valley. His legacy is enormous - he is mentioned more than any other prophet in the Quran (136 times). The Torah he received became a foundational text for Jews, Christians, and Muslims. His confrontation with Pharaoh is a model for standing up to tyranny, and his leadership during the Exodus is studied as one of history's greatest migrations. He is also considered a forerunner of Prophet Muhammad.",
    deathLegacyHinglish: "Musa (AS) 120 saal ki umar mein inteqal kar gaye, Canaan ke Promised Land mein jaane se pehle. Islamic tradition ke according, unhein unknown location mein dafn kiya gaya, possibly Jordan Valley mein. Unki virasat bahut badi hai - Quran mein unka zikr kisi bhi aur Nabi se zyada hua hai (136 baar). Taurat jo unhone haasil kiya wo Jews, Christians, aur Muslims ke liye foundational text bana. Firon se unka muqablla tyranny ke khilaaf khade hone ka model hai, aur Exodus ke dauran unki leadership history ki greatest migrations mein se ek ke taur par study ki jati hai. Unhe Huzoor ka forerunner bhi maana jaata hai.",
    tafseerInsights: ["Ibn Kathir notes that Musa's confrontation with Pharaoh is the paradigm of patient persistence in dawah against oppression", "Classical scholars see the splitting of the sea as a literal event with deep spiritual symbolism - the separation of truth from falsehood", "The Golden Calf incident is seen as a warning about the dangers of shirk even among believers", "Musa's request to see Allah (and being granted only a glimpse) shows the limits of human perception of the Divine", "His 40 years of leading the Israelites represents the time needed for true transformation"],
    tafseerInsightsHinglish: ["Ibn Kathir note karte hain ke Firon se Musa's muqablla oppression ke khilaaf dawah mein persistent patience ka paradigm hai", "Classical scholars samandar ka paar hona ek literal event deep spiritual symbolism ke saath dekhte hain - haq aur baatil ka alag hona", "Sunehri bhed ka waqay shirk ke dangers ka warning dekha jaata hai even believers mein", "Allah ko dekhne ki Musa's request (aur sirf ek glimpse dene mein) Divine ke human perception ki limits dikhata hai", "Bani Israel ki 40 saal leading true transformation ke liye needed time represent karta hai"],
    psychologicalAspects: "Musa (AS) showed remarkable psychological strength throughout his mission. Despite his initial fear and sense of inadequacy when called to prophethood, he grew into a confident leader. He experienced frustration with his people's repeated disobedience, especially during the Golden Calf incident, yet maintained his patience. His relationship with his brother Harun showed the importance of support systems in leadership. His final moments, dying just before entering the Promised Land, show the psychological struggle of a leader who did not see the fruits of his labor.",
    psychologicalAspectsHinglish: "Musa (AS) ne apni mission throughout remarkable psychological strength dikhai. Initial fear aur sense of inadequacy ke bawajood jab nabuvat ke liye bulaaya gaya, wo confident leader mein badle. Unhone apni qaum ki repeated disobedience se frustration mehsoos ki, especially Sunehri bhed waqay ke dauran, lekin apna sabr maintain kiya. Unka bhai Harun ke saath relationship leadership mein support systems ki importance dikhata hai. Unke final moments, Promised Land mein jaane se pehle marne se pehle, ek leader ki psychological struggle dikhate hain jisne apni labor ke fruits nahi dekhe.",
    practicalApplications: ["Standing up to tyranny and oppression is a religious obligation", "Even prophets faced fear and inadequacy - but overcame them", "Patience with difficult people is essential in leadership", "The power of sincere prayer - Allah spoke directly to Musa", "Divine revelation comes with tests and trials"],
    practicalApplicationsHinglish: ["Tyranny aur oppression ke khilaaf khada hona religious obligation hai", "Even prophets ne fear aur inadequacy face kiya - lekin unhe overcome kiya", "Difficult logon ke saath sabr leadership mein essential hai", "Sidq dua ki taqat - Allah ne sidhi baat ki Musa se", "Divine revelation tests aur trials ke saath aata hai"],
    comparativeAnalysis: "Unlike Ibrahim's test of sacrifice which was personal, Musa's test was of leadership against a powerful empire. Unlike previous prophets who warned their peoples privately, Musa publicly confronted the most powerful ruler of his time. His mission combined both direct confrontation and patient guidance, showing different aspects of prophetic methodology. He represents the archetype of the liberator-prophet who frees people from oppression."
  },
  {
    id: 15,
    nameArabic: "هارون",
    nameEnglish: "Harun",
    nameTransliteration: "Harun (AS)",
    title: "The Helper Prophet and Brother of Musa",
    titleHinglish: "Madadgar Nabi aur Musa ke Bhai",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Brother of Musa, around 1300 BCE",
    timePeriodHinglish: "Musa ke bhai, taqreeban 1300 qabl e maseeh",
    story: `Harun (AS) was the elder brother of Musa (AS) and was appointed as a prophet to assist him. When Allah commanded Musa (AS) to go to Pharaoh, Musa (AS) asked Allah to send Harun with him because Harun was more eloquent in speech.

Harun (AS) stood by his brother's side throughout their mission to free the Children of Israel. He helped Musa (AS) convey Allah's message to Pharaoh and the Israelites. When Musa (AS) went to Mount Sinai to receive the Torah, he left Harun (AS) in charge of the people.

During Musa (AS)'s absence, the Israelites made a golden calf to worship. Harun (AS) tried to stop them but was overpowered. When Musa (AS) returned and was angry, Harun (AS) explained that he feared causing division among the people. Musa (AS) accepted his explanation and prayed for forgiveness for both of them.

Harun (AS) was a prophet who supported his brother and helped guide the Children of Israel. He died before Musa (AS) and was buried on a mountain.`,
    storyHinglish: `Hazrat Harun (AS) Hazrat Musa (AS) ke bare bhai the aur unki madad ke liye Nabi banaaye gaye. Jab Allah ne Musa (AS) ko Firon ke paas jaane ka hukm diya, to Musa (AS) ne Allah se guzarish ki ke Harun (AS) ko unke saath bheje kyunke Harun (AS) zubaan mein zyada fasih thay.

Harun (AS) ne apne bhai ke saath Bani Israel ko azaad karne ke mission mein har waqt sath diya. Unhon ne Musa (AS) ki madad ki Allah ka paigham Firon aur Israeliyon tak pahunchane mein. Jab Musa (AS) Taurat haasil karne ke liye Koh-e-Sina par gaye, to unhon ne Harun (AS) ko qaum ki qiyadat ki zimmedari di.

Musa (AS) ki ghair-hazri mein, Israeliyon ne pooja ke liye ek sone ki gaye bana li. Harun (AS) ne unhein rokne ki koshish ki lekin unpar zor na chal saka. Jab Musa (AS) wapas aaye aur ghusse mein thay, to Harun (AS) ne wazahat ki ke unhein qaum mein taqseem ka dar tha. Musa (AS) ne unki wazahat qubool ki aur donon ke liye maghfirat ki dua ki.

Harun (AS) ek Nabi thay jinhon ne apne bhai ki madad ki aur Bani Israel ki hidayat ki. Wo Musa (AS) se pehle inteqaal kar gaye aur unhein ek pahari par dafan kiya gaya.`,
    lessons: [
      "Support your family in doing good",
      "Eloquence is a gift from Allah",
      "Leaders need trustworthy assistants"
    ],
    lessonsHinglish: [
      "Apne ghar walon ki neki mein madad karo",
      "Fasahat Allah ki tohfa hai",
      "Sardaron ko qabil-e-bharosa madadgaron ki zaroorat hoti hai"
    ],
    miracles: [
      "Supported Musa in all his miracles",
      "Given prophethood to assist his brother"
    ],
    miraclesHinglish: [
      "Musa ki tamam mo'jizon mein unka saath diya",
      "Apne bhai ki madad ke liye nabuwwat ata ki gayi"
    ],
    quranicRefs: ["Surah Ta-Ha 20:25-36", "Surah Al-A'raf 7:142-156"],
    characterTraits: ["Supportive", "Eloquent", "Trustworthy"],
    characterTraitsHinglish: ["Madadgar", "Fasih", "Qabil-e-bharosa"],
    earlyLife: "Prophet Harun (AS) was born to Amram and Jochebed in Egypt, making him the brother of Musa (AS) and Miriam. He grew up in the Israelite community during the time of Pharaoh's oppression.",
    earlyLifeHinglish: "Nabi Harun (AS) Amram aur Jochebed ke Egypt mein paida hue, jo unhe Musa (AS) aur Miriam ka bhai bana ta. Woh Pharaoh ke oppression ke time Israelite community mein bada hua.",
    family: "Prophet Harun (AS) was the elder brother of Musa (AS) and had a sister named Miriam. He was married and had children. His son, Eleazar, later served as a priest.",
    familyHinglish: "Nabi Harun (AS) Musa (AS) ke bare bhai the aur unki behen Miriam thi. Unki shadi hui thi aur bache the. Unka beta Eleazar baad mein priest ke taur par serve kiya.",
    prophecyTimeline: "Prophet Harun (AS) was appointed as a prophet to assist his brother Musa. He was given the role of supporting Musa's mission to Pharaoh and the Israelites.",
    prophecyTimelineHinglish: "Nabi Harun (AS) apne bhai Musa ki madad ke liye Nabi banaaye gaye. Unhe Firon aur Israeliyon ke mission Musa ki support karne ka role diya gaya.",
    revelations: ["Assisting in the revelation to Musa", "Prophethood as a supporter"],
    revelationsHinglish: ["Musa ke revelation mein assistance", "Supporter ke taur par nabuwwat"],
    conflicts: ["The incident of the Golden Calf", "Managing the Israelites during Musa's absence"],
    conflictsHinglish: ["Sunehri bhed ka waqay", "Musa ki ghair-hazri mein Israeliyon ki management"],
    companions: ["His brother Musa", "His sister Miriam", "The Israelites"],
    companionsHinglish: ["Bhai Musa", "Behen Miriam", "Israeliyon"],
    enemies: ["Pharaoh and his followers", "Those who worshipped the Golden Calf"],
    enemiesHinglish: ["Firon aur uske followers", "Jinhon ne Sunehri bhed ki ibadat ki"],
    deathLegacy: "Prophet Harun (AS) died before Musa (AS) and was buried on a mountain. He is remembered as a supportive prophet who helped his brother in his mission. His role as a supporter shows the importance of teamwork in prophethood.",
    deathLegacyHinglish: "Nabi Harun (AS) Musa (AS) se pehle inteqaal kar gaye aur ek pahari par dafan kiye gaye. Wo ek supportive Nabi ke taur par yaad kiya jata hai jisne apne bhai ki mission mein madad ki. Supporter ke taur par unki role prophethood mein teamwork ki importance dikhata hai.",
    tafseerInsights: ["Classical scholars note Harun's patience during the Golden Calf incident", "His eloquence was a gift that complemented Musa's leadership", "He represents the archetype of the supportive colleague in prophetic work"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Harun ki sabr Sunehri bhed waqay ke dauran", "Unki fasahat ek tohfa thi jo Musa ki leadership complement karta tha", "Wo prophetic work mein supportive colleague ke archetype ko represent karta hai"],
    psychologicalAspects: "Harun showed remarkable restraint during the Golden Calf incident. Rather than fight the people, he tried to reason with them and trusted that Musa would return to handle the situation.",
    psychologicalAspectsHinglish: "Harun ne Sunehri bhed waqay ke dauran remarkable restraint dikhai. Logon se ladair, unhonne unhe samjane ki koshish ki aur bharosa kiya ke Musa waapis aayega situation handle karne ke liye.",
    practicalApplications: ["Supporting others in religious work is a virtuous act", "Different people have different gifts that complement each other", "Patience and wisdom are needed in leadership roles"],
    practicalApplicationsHinglish: ["Religious work mein others ki support karna ek virtuous act hai", "Different logon ke different gifts hote hain jo ek doosre ko complement karte hain", "Leadership roles mein sabr aur hikmat chahiye"],
    comparativeAnalysis: "Unlike other prophets who led independently, Harun's role was specifically as a supporter, showing that not all prophetic roles are the same."
  },
  {
    id: 16,
    nameArabic: "ذو الكفل",
    nameEnglish: "Dhul-Kifl",
    nameTransliteration: "Dhul-Kifl (AS)",
    title: "The Prophet of Responsibility",
    titleHinglish: "Zimmedari ke Nabi",
    nation: "The people of the region",
    nationHinglish: "Ilaqe ke log",
    timePeriod: "Around the time of other Israelite prophets",
    timePeriodHinglish: "Taqreeban doosre Israelite anbiya ke zamane mein",
    story: `Dhul-Kifl (AS) is mentioned in the Quran as one of the prophets who was patient and righteous. His name means "The one with a responsibility" or "The one who took responsibility." Some scholars identify him with various biblical prophets, possibly Ezekiel.

Dhul-Kifl (AS) was known for his patience and keeping his promises. He was appointed as a judge over his people and was known for his fairness and justice. He called his people to worship Allah alone and to be righteous.

Not much detail is known about his story, but he is mentioned alongside other great prophets like Ishmael, Elisha, and Jonah, indicating his high status. He serves as an example of patience and responsibility.`,
    storyHinglish: `Hazrat Dhul-Kifl (AS) ka Quran mein zikr hai ek un Nabi mein se jinhon ne sabr aur neki ki. Unka naam ka matlab hai "Zimmedari lene wala" ya "Jis ne zimmedari li." Kuch ulama unhein mukhtalif Bible ke anbiya se zahir karte hain, mumkinah tor par Ezekiel.

Dhul-Kifl (AS) apne sabr aur apne waade pooray karne ke liye mashhoor thay. Unhein apni qaum par jaj ke taur par muqarrar kiya gaya tha aur wo apni insaaf pasandi aur adalat ke liye mashhoor thay. Unhon ne apni qaum ko sirf Allah ki ibadat aur neki ki dawat di.

Unki kahani ke baare mein zyada tafseelat nahi maloom, lekin unka Ismail, Elisha aur Yunus jaise bare anbiya ke saath zikr hai, jo unke buland maqam ki taraf ishara karta hai. Wo sabr aur zimmedari ki ek misaal hain.`,
    lessons: [
      "Keep your promises and responsibilities",
      "Patience is a virtue of prophets",
      "Justice and fairness are essential qualities"
    ],
    lessonsHinglish: [
      "Apne waade aur zimmedariyon ko poora karo",
      "Sabr anbiya ki khoobi hai",
      "Insaaf aur adalat zaroori sifaat hain"
    ],
    miracles: ["Known for his patience and fulfilling responsibilities"],
    miraclesHinglish: ["Apne sabr aur zimmedariyon ko poora karne ke liye mashhoor"],
    quranicRefs: ["Surah Al-Anbiya 21:85-86"],
    characterTraits: ["Patient", "Responsible", "Just"],
    characterTraitsHinglish: ["Sabr karne wale", "Zimmedar", "Insaaf pasand"],
    earlyLife: "Prophet Dhul-Kifl (AS) is known by his title meaning 'The one with responsibility.' His early life details are not extensively recorded in Islamic sources, but he was known for his righteousness from an early age.",
    earlyLifeHinglish: "Nabi Dhul-Kifl (AS) apne title se mashhoor hain jiska matlab hai 'Zimmedari wala.' Unki early life ki details Islamic sources mein extensively recorded nahi hain, lekin wo chhoti umr se hi neke ke liye mashhoor the.",
    family: "Details about Dhul-Kifl's family are limited in Islamic sources. Some scholars identify him with Ezekiel from the Bible, who was a priest and prophet with a family.",
    familyHinglish: "Dhul-Kifl ki family ke details Islamic sources mein limited hain. Kuch scholars unhe Bible se Ezekiel ke taur par identify karte hain, jo ek priest aur Nabi tha family ke saath.",
    prophecyTimeline: "Prophet Dhul-Kifl (AS) is believed to have lived during the time of the Israelite prophets, possibly after the Babylonian exile. He was appointed as a judge and leader among his people.",
    prophecyTimelineHinglish: "Nabi Dhul-Kifl (AS) Israelite anbiya ke zamane mein rahe hain, shayad Babylonian exile ke baad. Unhe judge aur leader banaaya gaya apni qaum mein.",
    revelations: ["Patience and perseverance", "Fulfilling responsibilities", "Justice in leadership"],
    revelationsHinglish: ["Sabr aur ishq", "Zimmedariyon ko poora karna", "Leadership mein insaaf"],
    conflicts: ["Leading people to righteousness against opposition"],
    conflictsHinglish: ["Logon ko opposition ke khilaaf neeki ki taraf le jana"],
    companions: ["The righteous among his people"],
    companionsHinglish: ["Unki qaum ke neek log"],
    enemies: ["Those who rejected his message"],
    enemiesHinglish: ["Jinhon ne unka message reject kiya"],
    deathLegacy: "Prophet Dhul-Kifl (AS) passed away after fulfilling his responsibilities. He is remembered as an example of patience, responsibility, and justice. The Quran mentions him alongside other great prophets, indicating his high status.",
    deathLegacyHinglish: "Nabi Dhul-Kifl (AS) apni zimmedariyon ko poora karne ke baad inteqaal kar gaye. Wo sabr, zimmedari aur insaaf ki example ke taur par yaad kiya jata hai. Quran unhe doosre bare anbiya ke saath mention karta hai, jo unke buland maqam ki taraf ishara karta hai.",
    tafseerInsights: ["Classical scholars have various opinions about Dhul-Kifl's identity", "His emphasis on responsibility makes him unique among prophets", "He represents the importance of accountability in leadership"],
    tafseerInsightsHinglish: ["Classical scholars ke Dhul-Kifl ki identity ke baare mein various opinions hain", "Zimmedari par unka zor unhe anbiya mein unique banata hai", "Wo leadership mein accountability ki importance represent karta hai"],
    psychologicalAspects: "Dhul-Kifl showed the quality of taking responsibility seriously, which requires psychological maturity and commitment.",
    psychologicalAspectsHinglish: "Dhul-Kifl ne zimmedari lene ki quality seriously dikhai, jisme psychological maturity aur commitment chahiye.",
    practicalApplications: ["Fulfilling responsibilities is a sign of true faith", "Leadership requires accountability", "Patience in fulfilling duties is rewarded by Allah"],
    practicalApplicationsHinglish: ["Zimmedariyon ko poora karna true imaan ki nishani hai", "Leadership mein accountability chahiye", "Duties poore karne mein sabr ka ajar Allah deta hai"],
    comparativeAnalysis: "Dhul-Kifl is unique among prophets for his emphasis on responsibility and accountability, making him a model for leaders in any community."
  },
  {
    id: 17,
    nameArabic: "داود",
    nameEnglish: "Dawud",
    nameTransliteration: "Dawud (AS)",
    title: "The Prophet-King who received the Zabur",
    titleHinglish: "Nabi-Badshah jinhein Zabur ata ki gayi",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Around 1000 BCE",
    timePeriodHinglish: "Taqreeban 1000 qabl e maseeh",
    story: `Dawud (AS) was a prophet and king of the Children of Israel. He started as a shepherd boy and was chosen by Allah to be a king after proving his courage against the giant Goliath (Jalut). With a simple sling, Dawud (AS) defeated the mighty warrior who had terrified the Israelite army.

Allah gave Dawud (AS) many gifts: he could understand the language of birds, iron was made soft for him, and he received the Zabur (Psalms), a book of divine songs and wisdom. He was known for his beautiful voice when reciting the praises of Allah.

Dawud (AS) ruled with justice and established a strong kingdom. He built a strong army and expanded the territory of Israel. Allah made both the mountains and the birds glorify Allah along with him. He is an ancestor of Prophet Isa (Jesus) and Prophet Muhammad ﷺ.`,
    storyHinglish: `Hazrat Dawud (AS) Bani Israel ke Nabi aur badshah thay. Unhon ne ek gaayein charane wale larke ke taur par shuruwat ki aur Allah ke hukm se badshah bane jab unhon ne deewana Jalut ke khilaf apni bahaduri sabit ki. Ek sada sa golon se, Dawud (AS) ne us taqatwar jangju ko shikast di jo Israelite fauj ko dara raha tha.

Allah ne Dawud (AS) ko bohat se tohfey diye: wo parindon ki zubaan samajh sakte thay, loha unke liye naram kar diya gaya, aur unhein Zabur (Psalms) mili, ilahi geeton aur hikmat ki kitaab. Wo Allah ki hamd parhne mein apni haseen aawaaz ke liye mashhoor thay.

Dawud (AS) ne insaaf se hukumat ki aur ek mazboot saltanat qaim ki. Unhon ne mazboot fauj banayi aur Israel ki sarhadon ko wasee kiya. Allah ne pahadon aur parindon ko unke saath Allah ki tasbeeh karne ka hukm diya. Wo Hazrat Isa (AS) aur Huzoor ﷺ ke jadd hain.`,
    lessons: [
      "Courage can defeat seemingly impossible odds",
      "Allah can give unique gifts to His servants",
      "Rule with justice and fairness"
    ],
    lessonsHinglish: [
      "Bahaduri namumkin ko mumkin bana sakti hai",
      "Allah apne bandon ko anokhe tohfey de sakta hai",
      "Insaaf aur adalat se hukumat karo"
    ],
    miracles: [
      "Defeated Goliath with a sling",
      "Understood the language of birds",
      "Iron was made soft for him",
      "Received the Zabur (Psalms)"
    ],
    miraclesHinglish: [
      "Goliyath ko golon se shikast di",
      "Parindon ki zubaan samajhte thay",
      "Loha unke liye naram kar diya gaya",
      "Zabur (Psalms) haasil ki"
    ],
    quranicRefs: ["Surah Sad 38:17-30", "Surah Al-Baqarah 2:249-251"],
    characterTraits: ["Brave", "Just", "Gifted"],
    characterTraitsHinglish: ["Bahadur", "Insaaf pasand", "Hunarmand"],
    earlyLife: "Prophet Dawud (AS) started as a shepherd boy who used to bring food to the Israelite soldiers fighting Goliath. He was young but had deep faith in Allah. When the giant Goliath challenged the Israelite army, Dawud volunteered to fight him with just his sling and stones.",
    earlyLifeHinglish: "Nabi Dawud (AS) ek gaayein charane wale larke ke taur par shuru hue jo Israelite soldiers ko Goliath se larte hue khaana dene jaate the. Wo chhote the lekin Allah mein gehra imaan tha. Jab giant Goliath ne Israelite army ko challenge kiya, Dawud ne sirf apne golon aur pattharon se ladne ki koshish ki.",
    family: "Prophet Dawud (AS) had multiple wives and many children. His son Sulaiman (Solomon) inherited both his kingdom and prophethood. He is also an ancestor of Prophet Isa (Jesus) and Prophet Muhammad (SAW).",
    familyHinglish: "Nabi Dawud (AS) ki kai biwiyan thi aur bohat se bache. Unka beta Sulaiman (Solomon) ne unki saltanat aur nabuwwat virasat mein li. Wo Hazrat Isa (Jesus) aur Huzoor (SAW) ke bhi jadd hain.",
    prophecyTimeline: "Prophet Dawud (AS) was born around 1000 BCE and became king after defeating Goliath. He received the Zabur (Psalms) as divine revelation and ruled Israel with justice.",
    prophecyTimelineHinglish: "Nabi Dawud (AS) taqreeban 1000 Qabl E Maseeh paida hue aur Goliath ko shikast dene ke baad badshah bane. Unhein Zabur (Psalms) ilahi revelation ke taur par mili aur unhone Israel ko insaaf se ruled kiya.",
    revelations: ["The Zabur (Psalms)", "Understanding of bird language", "Ability to soften iron", "Kingship and prophethood"],
    revelationsHinglish: ["Zabur (Psalms)", "Parindon ki zubaan samajh", "Loha naram karne ki ability", "Saltanat aur nabuwwat"],
    conflicts: ["Battle with Goliath", "Leading the kingdom as both king and prophet", "Facing internal challenges"],
    conflictsHinglish: ["Goliath se ladaai", "King aur prophet dono ke taur par kingdom lead karna", "Internal challenges ka saamna karna"],
    companions: ["His son Sulaiman", "His soldiers and supporters", "The prophets and righteous people of Israel"],
    companionsHinglish: ["Beta Sulaiman", "Unke soldiers aur supporters", "Israel ke anbiya aur neek log"],
    enemies: ["Goliath and the Philistines", "Those who opposed his rule"],
    enemiesHinglish: ["Goliath aur Philistines", "Jinhon ne unke rule ka khilaaf kiya"],
    deathLegacy: "Prophet Dawud (AS) passed away after a reign of about 40 years. He is remembered as both a prophet and king who established justice. The Zabur he received is one of the heavenly books mentioned in Islam.",
    deathLegacyHinglish: "Nabi Dawud (AS) taqreeban 40 saal ke reign ke baad inteqaal kar gaye. Wo ek Nabi aur badshah ke taur par yaad kiya jata hai jisne insaaf qaim kiya. Unhein jo Zabur mili wo Islam mein mention ki gayi heavenly books mein se ek hai.",
    tafseerInsights: ["Classical scholars note Dawud's unique combination of prophethood and kingship", "His defeat of Goliath shows faith can overcome seemingly impossible odds", "The Zabur emphasizes praise and gratitude to Allah"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Dawud ki nabuwwat aur saltanat ka unique combination", "Goliath ko shikast dene se dikhata hai ke imaan namumkin ko overcome kar sakta hai", "Zabhid Allah ki taqdeer ka shukr aur hamd emphasize karta hai"],
    psychologicalAspects: "Dawud showed remarkable courage as a young shepherd facing a giant warrior. His transition from shepherd to king required psychological adaptation to new responsibilities.",
    psychologicalAspectsHinglish: "Dawud ne ek chhote gaayein charane wale ki taur par ek bade warrior ka saamna karte hue remarkable courage dikhai. Shepherd se badshah tak unki transition ne naye responsibilities ke liye psychological adaptation required kiya.",
    practicalApplications: ["True courage comes from faith in Allah, not from physical strength", "Combining worldly leadership with spiritual guidance is challenging but possible", "Justice in leadership is essential for success"],
    practicalApplicationsHinglish: ["True courage Allah par imaan se aati hai, physical strength se nahi", "Duniya ki leadership ko spiritual guidance ke saath combine karna challenging hai possible", "Leadership mein insaaf success ke liye essential hai"],
    comparativeAnalysis: "Dawud was unique in being both a prophet and a king - a combination that required balancing spiritual and temporal responsibilities."
  },
  {
    id: 18,
    nameArabic: "سليمان",
    nameEnglish: "Sulaiman",
    nameTransliteration: "Sulaiman (AS)",
    title: "The Prophet-King who ruled over Jinn, Birds, and Wind",
    titleHinglish: "Nabi-Badshah jis par jinn, parinde aur hawa ka ikhtiyaar tha",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Son of Dawud, around 950 BCE",
    timePeriodHinglish: "Dawud ke bete, taqreeban 950 qabl e maseeh",
    story: `Sulaiman (AS) was the son of Dawud (AS) and inherited his father's kingdom and prophethood. Allah gave him unique powers: he could understand the language of birds and animals, control the wind to travel quickly, and command the jinn who built magnificent structures for him.

Sulaiman (AS) was known for his wisdom and justice. The famous story of two women claiming the same baby demonstrates his insight - he suggested cutting the baby in half, and the true mother immediately gave up her claim to save the child.

Sulaiman (AS) built the magnificent Temple in Jerusalem (Baitul Maqdis). He ruled over a vast kingdom that included jinn, humans, and birds. Even the ants and the hoopoe bird were under his command. He is mentioned in the Quran as a great prophet who thanked Allah for His blessings.`,
    storyHinglish: `Hazrat Sulaiman (AS) Hazrat Dawud (AS) ke bete thay aur unhon ne apne baap ki saltanat aur nabuwwat virasat mein li. Allah ne unhein anokhi taqaten di: wo parindon aur jaanwaron ki zubaan samajh sakte thay, tezi se safar karne ke liye hawa par qabu rakhte thay, aur jinno ko hukm dete thay jo unke liye shandaar imaratain banate thay.

Sulaiman (AS) apni hikmat aur insaaf ke liye mashhoor thay. Do aurton ki mashhoor kahani jo ek bache ka dawa karti thi unki baseerat ko dikhati hai - unhon ne bache ko aadha karne ki tajweez ki, aur asli maa ne bache ko bachane ke liye foran apna dawa chhor diya.

Sulaiman (AS) ne Quds (Baitul Maqdis) mein shandaar Temple banaya. Unhon ne ek wasee saltanat par hukumat ki jis mein jinn, insaan aur parinde shaamil thay. Daikhin chinti aur hudhud parinda bhi unke hukm mein thay. Quran mein unhein ek bare Nabi ke taur par zikr kiya gaya hai jo Allah ki nematon ka shukriya ada karte thay.`,
    lessons: [
      "Wisdom is better than wealth and power",
      "Use Allah's gifts for good purposes",
      "Thank Allah for His blessings"
    ],
    lessonsHinglish: [
      "Hikmat dolat aur taqat se behtar hai",
      "Allah ki ata ki hui cheezon ko achay maqsad ke liye istemal karo",
      "Allah ki nematon ka shukriya ada karo"
    ],
    miracles: [
      "Controlled the wind for travel",
      "Understood the language of birds and animals",
      "Commanded the jinn",
      "Built the Temple in Jerusalem"
    ],
    miraclesHinglish: [
      "Safar ke liye hawa par qabu rakha",
      "Parindon aur jaanwaron ki zubaan samajhte thay",
      "Jinno ko hukm dete thay",
      "Quds mein Temple banaya"
    ],
    quranicRefs: ["Surah An-Naml 27:15-44", "Surah Sad 38:30-40"],
    characterTraits: ["Wise", "Powerful", "Grateful"],
    characterTraitsHinglish: ["Hakeem", "Taqatwar", "Shukar guzar"],
    earlyLife: "Prophet Sulaiman (AS) was born to Dawud (AS) and inherited both his father's wisdom and kingdom from a young age. He was blessed with extraordinary knowledge and understanding beyond his years.",
    earlyLifeHinglish: "Nabi Sulaiman (AS) Dawud (AS) ke paida hue aur chhoti umr se hi apne baap ki hikmat aur saltanat virasat mein li. Unhe extraordinary knowledge aur understanding se nawaza gaya umr se aage.",
    family: "Prophet Sulaiman (AS) had many wives and children. He inherited the throne from his father Dawud and continued the royal lineage of Israel.",
    familyHinglish: "Nabi Sulaiman (AS) ki kai biwiyan aur bache the. Unhone apne baap Dawud se gaddi virasat ki aur Israel ki royal lineage continue ki.",
    prophecyTimeline: "Prophet Sulaiman (AS) was born around 950 BCE and became king after his father Dawud. He was given unique powers including control over jinn, wind, and animals.",
    prophecyTimelineHinglish: "Nabi Sulaiman (AS) taqreeban 950 Qabl E Maseeh paida hue aur apne baap Dawud ke baad badshah bane. Unhe unique powers diye gaye jisme jinn, hawa aur jaanwaron par control shamil tha.",
    revelations: ["Wisdom and knowledge", "Control over jinn, wind, and animals", "Understanding of nature", "The ability to judge wisely"],
    revelationsHinglish: ["Hikmat aur ilm", "Jinn, hawa aur jaanwaron par control", "Nature ki samajh", "Hikmat se judge karne ki ability"],
    conflicts: ["Managing a vast kingdom", "Dealing with the Queen of Sheba", "Testing his wisdom with various challenges"],
    conflictsHinglish: ["Wasi kingdom manage karna", "Sheba ki Queen se deal karna", "Various challenges se apni hikmat test karna"],
    companions: ["His father Dawud", "The jinn who built for him", "Birds and animals under his command", "His wise counselors"],
    companionsHinglish: ["Baap Dawud", "Jinno ne unke liye banaya", "Unde his command birds aur animals", "Unke hakeem counselors"],
    enemies: ["Those who challenged his kingdom", "The demons who tried to deceive him"],
    enemiesHinglish: ["Jinhon ne unki kingdom challenge kiya", "Jinno ne unhe dhokha dene ki koshish ki"],
    deathLegacy: "Prophet Sulaiman (AS) passed away after a reign of great prosperity. He is remembered for his wisdom, his magnificent kingdom, and his building of the Temple in Jerusalem. He is a key figure in all Abrahamic religions.",
    deathLegacyHinglish: "Nabi Sulaiman (AS) bohat taghazzu ke baad inteqaal kar gaye. Unhe unki hikmat, unki shandaar saltanat aur Quds mein Temple banane ke liye yaad kiya jata hai. Wo tamam Abrahamic religions mein key figure hain.",
    tafseerInsights: ["Classical scholars note Sulaiman's unique ability to control jinn and nature", "His wisdom in judging the case of the two women is legendary", "He represents the ideal combination of worldly power and prophetic wisdom"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Sulaiman ki jinn aur nature par control ki unique ability", "Do aurton ke case mein unki hikmat legendary hai", "Wo duniya ki power aur prophetic wisdom ke ideal combination ko represent karta hai"],
    psychologicalAspects: "Sulaiman had to manage psychological challenges of ruling a vast kingdom with various beings under his command. His wisdom showed deep understanding of human nature.",
    psychologicalAspectsHinglish: "Sulaiman ko vast kingdom manage karne ki psychological challenges ka saamna karna pada jisme various beings unke command mein the. Unki hikmat ne human nature ki gehri samajh dikhayi.",
    practicalApplications: ["True wisdom is a greater gift than worldly power", "Using Allah's gifts for beneficial purposes brings success", "Gratitude for blessings is essential in faith"],
    practicalApplicationsHinglish: ["True hikmat duniya ki power se bari tohfa hai", "Allah ki gifts beneficial purposes ke liye use karna success lata hai", "Barkaton ke liye shukr imaan mein essential hai"],
    comparativeAnalysis: "Sulaiman combined prophetic wisdom with royal power in a unique way, making him one of the most powerful figures in prophetic history."
  },
  {
    id: 19,
    nameArabic: "إلياس",
    nameEnglish: "Ilyas",
    nameTransliteration: "Ilyas (AS)",
    title: "The Prophet who confronted Baal worshippers",
    titleHinglish: "Baal ke pujariyon ka saamna karne wale Nabi",
    nation: "The people of Baalbek (Lebanon/Syria region)",
    nationHinglish: "Baalbek (Lebanon/Syria ilaqa) ke log",
    timePeriod: "After Sulaiman, around 900 BCE",
    timePeriodHinglish: "Sulaiman ke baad, taqreeban 900 qabl e maseeh",
    story: `Ilyas (AS) was sent to the people who had started worshipping Baal, a false god. He called them back to the worship of Allah alone and warned them of punishment if they continued their idol worship. The people rejected him and continued their evil practices.

Ilyas (AS) challenged the priests of Baal to a contest on Mount Carmel. Both sides would prepare a sacrifice and call upon their god. The god who answered with fire would be the true God. The priests of Baal called upon their god all day with no response. Then Ilyas (AS) called upon Allah, and fire came down from heaven consuming his sacrifice.

Despite this clear miracle, the people continued in their disbelief. Ilyas (AS) was then taken up to heaven in a whirlwind by Allah. His companion Ilyasa (Elisha) continued his mission after him.`,
    storyHinglish: `Hazrat Ilyas (AS) un logon ki taraf bheje gaye jo Baal ki ibadat shuru kar chuke thay, jo ek jhuta khuda tha. Unhon ne unhein sirf Allah ki ibadat ki taraf wapas bulaya aur unhein saza ki chetawani di agar wo apni buton ki ibadat jari rakhein to. Logon ne unhein thukra diya aur apni buri harkaten jari rakheen.

Ilyas (AS) ne Baal ke pujaron ko Koh-e-Carmel par ek muqablay ki dawat di. Dono taraf qurbani tayyar kareinge aur apne khuda ko pukareinge. Wo khuda jo aag se jawab dega wo sacha Khuda hoga. Baal ke pujaron ne apne khuda ko poora din pukara lekin koi jawab nahi aaya. Phir Ilyas (AS) ne Allah ko pukara, aur aasman se aag utri aur unki qurbani ko kha gayi.

Is wazeh mo'jize ke bawajood, log apne kufr par rahe. Ilyas (AS) ko phir Allah ne ek girdaab ke zariye aasman par utha liya. Unke saathi Ilyasa (Elisha) ne unke baad unka mission jari rakha.`,
    lessons: [
      "Stand firm against false worship",
      "Allah's miracles are clear for those who reflect",
      "Some people reject truth even when it is obvious"
    ],
    lessonsHinglish: [
      "Jhuti ibadat ke khilaf mustaqil raho",
      "Allah ke mo'jize sochne walon ke liye wazeh hain",
      "Kuch log haq ko thukrate hain chahe wo zahir ho"
    ],
    miracles: [
      "Fire came down from heaven on his sacrifice",
      "Taken up to heaven in a whirlwind"
    ],
    miraclesHinglish: [
      "Unki qurbani par aasman se aag utri",
      "Girdaab ke zariye aasman par uthaye gaye"
    ],
    quranicRefs: ["Surah As-Saffat 37:123-132", "Surah Al-An'am 6:85"],
    characterTraits: ["Brave", "Determined", "Righteous"],
    characterTraitsHinglish: ["Bahadur", "Mustaqil", "Neik"],
    earlyLife: "Prophet Ilyas (AS) was sent to the people of Baalbek in ancient Lebanon/Syria. He was a zealous prophet who called people to worship Allah alone and abandon the worship of Baal, a false deity.",
    earlyLifeHinglish: "Nabi Ilyas (AS) Baalbek ke logon ki taraf ancient Lebanon/Syria mein bheje gaye. Wo ek zealous Nabi the jo logon ko sirf Allah ki ibadat ki taraf bulate the aur Baal, ek false deity, ki ibadat chhodne ke liye kehte the.",
    family: "Details about Ilyas's family are limited in Islamic sources. Some traditions mention he had a wife and children, but specifics are not widely recorded.",
    familyHinglish: "Ilyas ki family ke details Islamic sources mein limited hain. Kuch traditions mention karte hain ke unki wife aur bache the, lekin specifics widely recorded nahi hain.",
    prophecyTimeline: "Prophet Ilyas (AS) lived around 900 BCE and was sent to a people who had abandoned monotheism for idol worship. He confronted the worshippers of Baal.",
    prophecyTimelineHinglish: "Nabi Ilyas (AS) taqreeban 900 Qabl E Maseeh jeeya aur unhe ek aisi qaum ki taraf bheja gaya tha jinhone tauheed chhod kar buton ki ibadat shuru kar di thi. Unhone Baal ke pujaron ka saamna kiya.",
    revelations: ["Monotheism", "The power of prayer", "The truth of prophecy"],
    revelationsHinglish: ["Tawhid", "Dua ki taqat", "Nabuwwat ki sachai"],
    conflicts: ["Confronting Baal worshippers", "The test on Mount Carmel", "Rejection by his people", "Being taken up to heaven"],
    conflictsHinglish: ["Baal ke pujaron ka saamna", "Koh-e-Carmel par test", "Apni qaum se reject", "Aasman par utha liya jana"],
    companions: ["His follower Elisha (Ilyasa)", "Those who believed with him"],
    companionsHinglish: ["Unka follower Elisha (Ilyasa)", "Jinhon par imaan laaya"],
    enemies: ["The priests of Baal", "The disbelievers among his people"],
    enemiesHinglish: ["Baal ke pujari", "Apni qaum ke disbelievers"],
    deathLegacy: "Prophet Ilyas (AS) was taken up to heaven in a whirlwind without dying, similar to the Prophet's nighttime journey. He is honored in Islam, Christianity, and Judaism as a great prophet who stood for truth.",
    deathLegacyHinglish: "Nabi Ilyas (AS) ek girdaab ke zariye bina marne ke aasman par utha liya gaya, Huzoor ki raat ki journey ke similar. Wo Islam, Christianity aur Judaism mein ek bare Nabi ke taur par izzat di jaata hai jo haqq ke liye khada tha.",
    tafseerInsights: ["Classical scholars note Ilyas's courage in confronting organized false worship", "His taken up to heaven shows Allah's protection of His prophets", "He represents unwavering commitment to monotheism"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Ilyas ki organized false worship ke khilaf courage", "Aasman par utha liya jana Allah ke apne anbiya ki protection dikhata hai", "Wo tauheed ke liye unwavering commitment represent karta hai"],
    psychologicalAspects: "Ilyas showed extreme courage in confronting a powerful false religious establishment. His faith never wavered despite facing intense opposition.",
    psychologicalAspectsHinglish: "Ilyas ne ek powerful false religious establishment ka saamna karte hue extreme courage dikhai. Unka imaan intense opposition ke bawajood kabhi nahi kamza tha.",
    practicalApplications: ["Standing for truth against popular falsehood requires courage", "Even clear miracles don't convince some people", "Continuing the mission of previous prophets is important"],
    practicalApplicationsHinglish: ["Popular falsehood ke khilaf haq ke liye khada hona courage maangta hai", "Even clear miracles kuch logon ko convince nahi karte", "Previous anbiya ka mission continue karna important hai"],
    comparativeAnalysis: "Ilyas represents the prophetic archetype of confronting false religious systems - a pattern seen in many prophets who faced organized idol worship."
  },
  {
    id: 20,
    nameArabic: "اليسع",
    nameEnglish: "Ilyasa",
    nameTransliteration: "Ilyasa (AS)",
    title: "The Successor of Ilyas",
    titleHinglish: "Ilyas ke Janasheen",
    nation: "The same people as Ilyas",
    nationHinglish: "Ilyas ki hi qaum",
    timePeriod: "Successor of Ilyas, around 900 BCE",
    timePeriodHinglish: "Ilyas ke janasheen, taqreeban 900 qabl e maseeh",
    story: `Ilyasa (AS) was the successor of Prophet Ilyas (Elijah). He continued the mission of calling people to worship Allah alone after Ilyas (AS) was taken up to heaven. He was given prophethood and performed miracles among his people.

Ilyasa (AS) is mentioned in the Quran alongside other prophets, indicating his high status. He continued to warn his people against idol worship and called them to righteousness. He was known for his dedication to Allah's cause and his patience.

Not many details are known about his specific miracles or stories, but he is honored as a prophet who continued the work of his predecessor and maintained the message of monotheism.`,
    storyHinglish: `Hazrat Ilyasa (AS) Hazrat Ilyas (Elijah) ke janasheen the. Unhon ne Ilyas (AS) ke aasman par uthaye jane ke baad logon ko sirf Allah ki ibadat ki dawat dene ka mission jari rakha. Unhein nabuwwat ata ki gayi aur unhon ne apni qaum mein mo'jize dikhaaye.

Ilyasa (AS) ka Quran mein doosre anbiya ke saath zikr hai, jo unke buland maqam ki taraf ishara karta hai. Unhon ne apni qaum ko buton ki ibadat se rokna jari rakha aur unhein neki ki taraf bulaya. Wo Allah ke kaam ke liye unki mukhlisi aur sabr ke liye mashhoor thay.

Unke khaas mo'jizon ya kahaniyon ke baare mein zyada tafseelat nahi maloom, lekin unhein ek Nabi ke taur par izzat di jaati hai jinhon ne apne peshraw ka kaam jari rakha aur tauheed ka paigham barqaraar rakha.`,
    lessons: [
      "Continue the work of righteous predecessors",
      "Maintain the message of truth",
      "Dedication to Allah's cause brings reward"
    ],
    lessonsHinglish: [
      "Neik peshrawon ka kaam jari rakho",
      "Haqq ka paigham barqaraar rakho",
      "Allah ke kaam mein mukhlisi ajar lati hai"
    ],
    miracles: ["Given prophethood and performed miracles"],
    miraclesHinglish: ["Unhein nabuwwat mili aur unhon ne mo'jize dikhaaye"],
    quranicRefs: ["Surah Al-An'am 6:86", "Surah Sad 38:48"],
    characterTraits: ["Dedicated", "Patient", "Righteous"],
    characterTraitsHinglish: ["Mukhlis", "Sabr karne wale", "Neik"],
    earlyLife: "Prophet Ilyasa (AS) was a devoted follower of Prophet Ilyas (Elijah). He learned from Ilyas and was chosen to continue his mission after Ilyas was taken up to heaven.",
    earlyLifeHinglish: "Nabi Ilyasa (AS) Nabi Ilyas (Elijah) ke devoted follower the. Unhone Ilyas se seekha aur Ilyas ke aasman par utha liye jane ke baad unka mission continue karne ke liye choose kiye gaye.",
    family: "Details about Ilyasa's family are limited in Islamic sources. He was known primarily for his prophetic mission rather than family details.",
    familyHinglish: "Ilyasa ki family ke details Islamic sources mein limited hain. Wo primarily apni prophetic mission ke liye mashhoor the, family details ke bajaye.",
    prophecyTimeline: "Prophet Ilyasa (AS) was the successor to Ilyas around 900 BCE. He continued the mission of calling people to monotheism.",
    prophecyTimelineHinglish: "Nabi Ilyasa (AS) Ilyas ke successor the taqreeban 900 Qabl E Maseeh. Unhone logon ko tauheed ki taraf bulane ka mission continue kiya.",
    revelations: ["Continuing the message of Ilyas", "Prophethood and its responsibilities"],
    revelationsHinglish: ["Ilyas ka message continue karna", "Nabuwwat aur uski responsibilities"],
    conflicts: ["Continuing the mission despite rejection", "Facing those who opposed monotheism"],
    conflictsHinglish: ["Reject ke bawajood mission continue karna", "Jo tauheed ke khilaaf the unka saamna karna"],
    companions: ["His predecessor Ilyas", "Those who believed with him"],
    companionsHinglish: ["Unke peshraw Ilyas", "Jinhon par imaan laaya"],
    enemies: ["Those who rejected his message", "False worshippers"],
    enemiesHinglish: ["Jinhon ne unka message reject kiya", "False pujari"],
    deathLegacy: "Prophet Ilyasa (AS) passed away after completing his prophetic mission. He is remembered as a faithful successor who continued the work of his predecessor and maintained the message of monotheism.",
    deathLegacyHinglish: "Nabi Ilyasa (AS) apni prophetic mission complete karne ke baad inteqaal kar gaye. Wo ek faithful successor ke taur par yaad kiya jata hai jisne apne peshraw ka kaam continue kiya aur tauheed ka paigham barqaraar rakha.",
    tafseerInsights: ["Classical scholars see Ilyasa as a model for continuing prophetic work", "His dedication shows the importance of mentorship in prophethood"],
    tafseerInsightsHinglish: ["Classical scholars Ilyasa ko prophetic work continue karne ke model ke taur par dekhte hain", "Unki dedication mentorship ki importance dikhata hai nabuwwat mein"],
    psychologicalAspects: "Ilyasa had to deal with the psychological challenge of continuing a mission after his predecessor was taken away, requiring resilience and faith.",
    psychologicalAspectsHinglish: "Ilyasa ko psychological challenge ka saamna karna pada apne peshraw ke jaane ke baad mission continue karne ke liye, resilience aur imaan chahiye tha.",
    practicalApplications: ["Continuing the good work of predecessors is important", "Mentorship is valuable in religious work", "Dedication to truth brings rewards"],
    practicalApplicationsHinglish: ["Peshraron ka accha kaam continue karna important hai", "Religious work mein mentorship valuable hai", "Haq ki dedication ajar leti hai"],
    comparativeAnalysis: "Ilyasa represents the importance of succession in prophetic work - not all prophets start new movements, some continue the work of their predecessors."
  },
  {
    id: 21,
    nameArabic: "يونس",
    nameEnglish: "Yunus",
    nameTransliteration: "Yunus (AS)",
    title: "The Prophet of the Whale (Dhul-Nun)",
    titleHinglish: "Machli ke Nabi (Dhul-Nun)",
    nation: "The people of Nineveh (Iraq)",
    nationHinglish: "Nineveh (Iraq) ke log",
    timePeriod: "Around 800 BCE",
    timePeriodHinglish: "Taqreeban 800 qabl e maseeh",
    story: `Yunus (AS) was sent to the people of Nineveh to call them to worship Allah. When they rejected him, he became angry and left them without Allah's permission, thinking that punishment would surely come upon them. He boarded a ship to leave.

When the ship was caught in a storm, the passengers drew lots to see who should be thrown overboard to lighten the ship. Yunus (AS) lost the draw three times. He voluntarily jumped into the sea, and a giant whale swallowed him.

Inside the whale's belly, in the darkness of the sea, Yunus (AS) repented and called upon Allah with the famous words: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." Allah accepted his repentance and commanded the whale to release him onto the shore.

When Yunus (AS) returned to his people, he found that they had believed in Allah after seeing signs of punishment. They were forgiven and blessed. Yunus (AS) became a symbol of repentance and Allah's mercy.`,
    storyHinglish: `Hazrat Yunus (AS) Nineveh ke logon ko Allah ki ibadat ki dawat dene ke liye bheje gaye. Jab unhon ne unhein thukra diya, to wo ghusse mein aa gaye aur Allah ki ijazat ke baghair unhein chhor diya, sochte hue ke saza zaroor aaegi. Unhon ne jahaz par safar kiya.

Jab jahaz toofan mein phans gaya, to musafiron ne quraa andaazi ki ke kisko pheinkna chahiye jahaz halka karne ke liye. Yunus (AS) teen baar quraa andaazi haare. Unhon ne khud samandar mein chhalang laga di, aur ek barri machli ne unhein nigal liya.

Machli ke pet mein, samandar ke andheron mein, Yunus (AS) ne tauba ki aur Allah ko mashhoor alfaaz mein pukara: "Tere siwa koi ma'bood nahi; Tu paak hai. Beshak main zalimon mein se raha." Allah ne unki tauba qubool ki aur machli ko hukm diya ke unhein kinare par chhor de.

Jab Yunus (AS) apni qaum ke paas laute, to unhon ne paaya ke unki qaum ne saza ki nishaniyon ko dekhne ke baad Allah par imaan laya tha. Unhein maaf kar diya gaya aur barkat di gayi. Yunus (AS) tauba aur Allah ki rehmat ki alamat ban gaye.`,
    lessons: [
      "Never give up on calling people to Allah",
      "Repentance is always accepted by Allah",
      "Allah's mercy encompasses all things",
      "Patience is essential for prophets"
    ],
    lessonsHinglish: [
      "Logon ko Allah ki taraf bulane mein kabhi haarna nahi",
      "Tauba hamesha Allah qubool karta hai",
      "Allah ki rehmat har cheez ko ghere hue hai",
      "Sabr anbiya ke liye zaroori hai"
    ],
    miracles: [
      "Survived three days in the belly of a whale",
      "His repentance was accepted immediately",
      "His people believed after seeing signs"
    ],
    miraclesHinglish: [
      "Machli ke pet mein teen din zinda rahe",
      "Unki tauba foran qubool ki gayi",
      "Unki qaum ne nishaniyon ko dekhne ke baad imaan laya"
    ],
    quranicRefs: ["Surah Yunus 10:98", "Surah As-Saffat 37:139-148", "Surah Al-Anbiya 21:87-88"],
    characterTraits: ["Repentant", "Patient", "Merciful"],
    characterTraitsHinglish: ["Tauba karne wale", "Sabr karne wale", "Reham dil"],
    earlyLife: "Prophet Yunus (AS) was sent to the people of Nineveh in ancient Iraq. He was a zealous prophet who called people to worship Allah alone and warn them of punishment for their sins.",
    earlyLifeHinglish: "Nabi Yunus (AS) Nineveh ke logon ki taraf ancient Iraq mein bheje gaye. Wo ek zealous Nabi the jo logon ko sirf Allah ki ibadat ki taraf bulane aur unhein gunahon ke liye saza ki chetawani dene wale the.",
    family: "Details about Yunus's family are limited. He was known primarily for his prophetic mission and his unique experience in the whale.",
    familyHinglish: "Yunus ki family ke details limited hain. Wo primarily apni prophetic mission aur machli ke andar unke unique experience ke liye mashhoor tha.",
    prophecyTimeline: "Prophet Yunus (AS) was sent to Nineveh around 800 BCE. His mission involved warning the people and his famous experience in the whale.",
    prophecyTimelineHinglish: "Nabi Yunus (AS) Nineveh ki taraf taqreeban 800 Qabl E Maseeh bheje gaye. Unka mission logon ko warning dena aur unka machli mein famous experience shamil tha.",
    revelations: ["Warning against sin", "The power of repentance", "Allah's mercy", "Patience in adversity"],
    revelationsHinglish: ["Gunah ke khilaaf warning", "Tauba ki taqat", "Allah ki rehmat", "Mushkil mein sabr"],
    conflicts: ["Rejection by his people", "Leaving without permission", "The storm and the whale"],
    conflictsHinglish: ["Apni qaum se reject", "Ijazat ke baghair jana", "Toofan aur machli"],
    companions: ["The people of Nineveh who eventually believed"],
    companionsHinglish: ["Nineveh ke log jo eventually believe kar gaye"],
    enemies: ["Those who rejected his message initially"],
    enemiesHinglish: ["Jinhon ne initially unka message reject kiya"],
    deathLegacy: "Prophet Yunus (AS) passed away after completing his mission. He is remembered as the prophet of the whale (Dhul-Nun) and his story is a powerful reminder of Allah's mercy and the importance of repentance.",
    deathLegacyHinglish: "Nabi Yunus (AS) apni mission complete karne ke baad inteqaal kar gaye. Wo machli ke Nabi (Dhul-Nun) ke taur par yaad kiya jata hai aur unki kahani Allah ki rehmat aur tauba ki importance ka powerful reminder hai.",
    tafseerInsights: ["Classical scholars note Yunus's story as a powerful example of repentance", "His experience in the whale is unique among all prophets", "The Quran emphasizes his dua in the whale's belly"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Yunus ki kahani tauba ka powerful example hai", "Machli mein unka experience tamam anbiya mein unique hai", "Quran machli ke pet mein unki dua par zor deta hai"],
    psychologicalAspects: "Yunus's experience in the whale represents a spiritual journey - being swallowed by darkness and then emerging into light shows the psychological journey of repentance and renewal.",
    psychologicalAspectsHinglish: "Machli mein Yunus ka experience spiritual journey ko represent karta hai - andhera nigal kar phir roshni mein aana tauba aur renewal ki psychological journey dikhata hai.",
    practicalApplications: ["Repentance can come at any moment, even in the darkest situations", "Never lose hope in Allah's mercy", "Even prophets make mistakes but turn back to Allah"],
    practicalApplicationsHinglish: ["Tauba kisi bhi moment aa sakti hai, even darkest situations mein bhi", "Allah ki rehmat mein kabhi maat chhoro", "Even prophets galtian karte hain lekin Allah ki taraf wapis aate hain"],
    comparativeAnalysis: "Yunus is unique among prophets for his personal experience in the whale - a symbol of being lost and then found again through Allah's mercy."
  },
  {
    id: 22,
    nameArabic: "زكريا",
    nameEnglish: "Zakariya",
    nameTransliteration: "Zakariya (AS)",
    title: "The Prophet who was blessed with Yahya in old age",
    titleHinglish: "Nabi jinhein budhapi mein Yahya ki barkat mili",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Before Isa, around 100 BCE",
    timePeriodHinglish: "Isa se pehle, taqreeban 100 qabl e maseeh",
    story: `Zakariya (AS) was a prophet and a priest in the Temple in Jerusalem. He was very old and his wife was barren, but they remained righteous and devoted to Allah. Zakariya (AS) prayed to Allah for a child who would continue his work.

While praying in the sanctuary, Allah sent angels to give him the good news that he would have a son named Yahya (John), who would be a prophet and confirm the word of Allah. Zakariya (AS) asked for a sign, and Allah made him unable to speak for three days as a sign.

Yahya (AS) was born, and Zakariya (AS)'s speech was restored. Yahya (AS) grew up to be a righteous prophet who called people to repentance and prepared the way for Isa (Jesus). Zakariya (AS) is honored as a prophet who was blessed with a child in old age through Allah's power.`,
    storyHinglish: `Hazrat Zakariya (AS) ek Nabi aur Quds ke Temple mein pujari thay. Wo bohat booray thay aur unki biwi banjh thi, lekin wo neik aur Allah ke liye mukhlis thay. Zakariya (AS) ne Allah se ek bache ki dua ki jo unka kaam jari rakhe.

Haram mein namaz parhte hue, Allah ne farishton ko unhein khushkhabri dene ke liye bheja ke unhein Yahya (John) naam ka beta hoga, jo Nabi hoga aur Allah ke kalam ki tasdeeq karega. Zakariya (AS) ne ek nishani maangi, aur Allah ne unhein teen din tak bolne se qaasir kar diya ek nishani ke taur par.

Yahya (AS) paida hue, aur Zakariya (AS) ki zubaan wapas aa gayi. Yahya (AS) baray hokar ek neik Nabi bane jinhon ne logon ko tauba ki dawat di aur Isa (AS) ke liye rasta tayyar kiya. Zakariya (AS) ko ek Nabi ke taur par izzat di jaati hai jinhein Allah ki qudrat se budhapi mein bacha mila.`,
    lessons: [
      "Never lose hope in Allah's mercy",
      "Allah can grant what seems impossible",
      "Children can be a blessing for continuing righteous work"
    ],
    lessonsHinglish: [
      "Allah ki rehmat ki umeed kabhi mat chhoro",
      "Allah wo ata kar sakta hai jo namumkin lagta hai",
      "Bache neik kaam ko jari rakhne ki barkat ho sakte hain"
    ],
    miracles: [
      "Given a child in old age",
      "Made temporarily mute as a sign",
      "His son became a prophet"
    ],
    miraclesHinglish: [
      "Budhapi mein bacha diya gaya",
      "Nishani ke taur par mauqati tor par goonga bana diya gaya",
      "Unka beta Nabi bana"
    ],
    quranicRefs: ["Surah Maryam 19:1-15", "Surah Al-Anbiya 21:89-90"],
    characterTraits: ["Devoted", "Patient", "Hopeful"],
    characterTraitsHinglish: ["Mukhlis", "Sabr karne wale", "Umeed rakhte hue"],
    earlyLife: "Prophet Zakariya (AS) was a prophet and priest in the Temple of Jerusalem. He was deeply devoted to Allah and served in the sanctuary. He was very old and his wife was barren, but they remained righteous.",
    earlyLifeHinglish: "Nabi Zakariya (AS) Quds ke Temple mein Nabi aur pujari the. Wo Allah ke liye deeply devoted tha aur sanctuary mein serve karta tha. Wo bohat booray tha aur unki biwi banjh thi, lekin wo neik rahe.",
    family: "Prophet Zakariya (AS) was married to Elizabeth (Isha's), who was also a relative of Maryam (Mary). They were blessed with a son, Yahya (John the Baptist), in their old age.",
    familyHinglish: "Nabi Zakariya (AS) ki shadi Elizabeth (Isha's) se hui thi, jo Maryam (Mary) ki bhi relative thi. Unhe unki budhapi mein ek beta, Yahya (John the Baptist), ki barkat mili.",
    prophecyTimeline: "Prophet Zakariya (AS) was active around 100 BCE in Jerusalem. He received the good news of a son through divine intervention and was given a sign of temporary muteness.",
    prophecyTimelineHinglish: "Nabi Zakariya (AS) taqreeban 100 Qabl E Maseeh Quds mein active tha. Unhe ilahi intervention se beti ki khushkhabri mili aur unhe mauqati goongapan ki nishani di gayi.",
    revelations: ["The promise of a child in old age", "Divine signs and wisdom", "The continuation of prophetic lineage"],
    revelationsHinglish: ["Budhapi mein bache ka waada", "Ilaahi nishani aur hikmat", "Prophetic lineage ki continuity"],
    conflicts: ["Being old and having a barren wife", "Facing doubts about Allah's promise", "Being made temporarily mute as a sign"],
    conflictsHinglish: ["Booray hona aur biwi ka banjh hona", "Allah ke waade par shaq karna", "Nishani ke taur par mauqati tor par goonga hona"],
    companions: ["His wife Elizabeth", "His son Yahya (John)", "The righteous people of Israel"],
    companionsHinglish: ["Biwi Elizabeth", "Beta Yahya (John)", "Israel ke neek log"],
    enemies: ["Those who rejected his message"],
    enemiesHinglish: ["Jinhon ne unka message reject kiya"],
    deathLegacy: "Prophet Zakariya (AS) is remembered as a righteous prophet who was blessed with a child in old age. His son Yahya continued his prophetic mission. He is mentioned in the Quran as an example of Allah's power to grant children to those who are hopeless.",
    deathLegacyHinglish: "Nabi Zakariya (AS) ek neek Nabi ke taur par yaad kiya jata hai jise budhapi mein bache ki barkat mili. Unka beta Yahya unki prophetic mission continue kiya. Quran mein unhe example ke taur par mention kiya gaya hai Allah ki unhe jo hopeless hain unhe bache dene ki taqat ka.",
    tafseerInsights: ["Classical scholars note Zakariya's story as an example of heartfelt dua", "His temporary muteness was a sign and a test of faith", "He represents the importance of continuing the prophetic message"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Zakariya ki kahani heartfelt dua ka example hai", "Unka mauqati goongapan nishani aur imaan ki test tha", "Wo prophetic message continue karne ki importance represent karta hai"],
    psychologicalAspects: "Zakariya showed faith despite his old age and wife's barrenness. His prayer shows the psychological struggle of wanting a child to continue one's work.",
    psychologicalAspectsHinglish: "Zakariya ne apni boorapi aur biwi ki banjhpan ke bawajood imaan dikhaya. Unki dua psychological struggle dikhata hai ek aise bacche ki chah jo apna kaam continue kare.",
    practicalApplications: ["Never lose hope in Allah's mercy", "Prayer can change circumstances", "Children can be a continuation of one's legacy"],
    practicalApplicationsHinglish: ["Allah ki rehmat mein kabhi maat chhoro", "Dua haalaat badal sakti hai", "Bache ek ki legacy continuation ho sakte hain"],
    comparativeAnalysis: "Zakariya represents the archetype of the elderly prophet receiving divine good news - similar to Ibrahim and Zakariya in receiving children in old age."
  },
  {
    id: 23,
    nameArabic: "يحيى",
    nameEnglish: "Yahya",
    nameTransliteration: "Yahya (AS)",
    title: "The Prophet who confirmed Isa",
    titleHinglish: "Nabi jinhon ne Isa ki tasdeeq ki",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Son of Zakariya, around 100 BCE",
    timePeriodHinglish: "Zakariya ke bete, taqreeban 100 qabl e maseeh",
    story: `Yahya (AS) was the son of Zakariya (AS), born miraculously to elderly parents. Allah made him a prophet while he was still young. He was given wisdom and knowledge and was known for his piety and asceticism.

Yahya (AS) called the Children of Israel to repentance and prepared them for the coming of Isa (Jesus). He confirmed that Isa (AS) was the Messiah and a word from Allah. He was known for his gentle nature and his dedication to Allah's worship.

According to historical accounts, Yahya (AS) was martyred when he criticized the unlawful marriage of a ruler. He is honored in Islam as a prophet who was pure and righteous from his youth and who prepared the way for Isa (AS).`,
    storyHinglish: `Hazrat Yahya (AS) Hazrat Zakariya (AS) ke bete thay, booray waalidain ko mo'jize ke taur par paida hue. Allah ne unhein abhi chhote hi Nabi bana diya. Unhein hikmat aur ilm ata kiya gaya aur wo apni taqwa aur zohd ke liye mashhoor thay.

Yahya (AS) ne Bani Israel ko tauba ki dawat di aur unhein Isa (AS) ke aane ke liye tayyar kiya. Unhon ne tasdeeq ki ke Isa (AS) Maseeh hain aur Allah ka kalam hain. Wo apne narm mizaj aur Allah ki ibadat mein mukhlisi ke liye mashhoor thay.

Tareekhi riwayat ke mutabiq, Yahya (AS) ko shaheed kar diya gaya jab unhon ne ek hukmaran ke na-jaaiz nikah ki tanqeed ki. Unhein Islam mein ek Nabi ke taur par izzat di jaati hai jo apni jawani se hi paak aur neik thay aur jinhon ne Isa (AS) ke liye rasta tayyar kiya.`,
    lessons: [
      "Piety can be achieved at any age",
      "Prepare people for the message of truth",
      "Stand against injustice even if it costs your life"
    ],
    lessonsHinglish: [
      "Taqwa kisi bhi umar mein hasil kiya ja sakta hai",
      "Logon ko haqq ke paigham ke liye tayyar karo",
      "Na-insaafi ke khilaf khade raho chahe iski qeemat jaan hi kyun na ho"
    ],
    miracles: [
      "Given prophethood as a child",
      "Given wisdom and knowledge",
      "Confirmed the coming of Isa"
    ],
    miraclesHinglish: [
      "Bachpan mein hi nabuwwat ata ki gayi",
      "Hikmat aur ilm ata kiya gaya",
      "Isa ke aane ki tasdeeq ki"
    ],
    quranicRefs: ["Surah Maryam 19:12-15", "Surah Al-Anbiya 21:90"],
    characterTraits: ["Pious", "Wise", "Brave"],
    characterTraitsHinglish: ["Taqatwar", "Hakeem", "Bahadur"],
    earlyLife: "Prophet Yahya (AS) was born to Zakariya (AS) and Elizabeth as a miracle - born to elderly parents. From childhood, he was given wisdom and was known for his piety and devotion to Allah.",
    earlyLifeHinglish: "Nabi Yahya (AS) Zakariya (AS) aur Elizabeth ke paida hue ek mo'jiza ke taur par - booray waalidain ke paida hue. Childhood se hi, unhein hikmat di gayi aur wo apni taqwa aur Allah ki devotion ke liye mashhoor the.",
    family: "Prophet Yahya (AS) was the son of Zakariya (AS). He was a cousin of Prophet Isa (Jesus) through his mother Elizabeth, who was a relative of Maryam.",
    familyHinglish: "Nabi Yahya (AS) Zakariya (AS) ke bete the. Wo apni maa Elizabeth ke zariye Nabi Isa (Jesus) ke cousin the, jo Maryam ki relative thi.",
    prophecyTimeline: "Prophet Yahya (AS) was born around 100 BCE and was given prophethood while still young. He prepared the way for Prophet Isa (Jesus).",
    prophecyTimelineHinglish: "Nabi Yahya (AS) taqreeban 100 Qabl E Maseeh paida hue aur abhi chhote hi nabuwwat di gayi. Unhone Nabi Isa (Jesus) ke liye raasta tayyar kiya.",
    revelations: ["Calling to repentance", "Preparing the way for Isa", "Confirmation of previous scriptures"],
    revelationsHinglish: ["Tauba ki dawat", "Isa ke liye rasta tayyar karna", "Previous scriptures ki tasdeeq"],
    conflicts: ["Confronting unrighteous rulers", "Criticizing unlawful marriages", "Martyrdom for speaking truth"],
    conflictsHinglish: ["Na-neek hukmaron ka saamna", "Na-jaaiz nikah ki tanqeed", "Haqq bolne ke liye shaheed hon"],
    companions: ["His father Zakariya", "His mother Elizabeth", "His relative Maryam and baby Isa"],
    companionsHinglish: ["Baap Zakariya", "Maa Elizabeth", "Relative Maryam aur baby Isa"],
    enemies: ["Unrighteous rulers who opposed him", "Those who rejected his message"],
    enemiesHinglish: ["Jinhon ne unka khilaaf kiya na-neek hukmaron", "Jinhon ne unka message reject kiya"],
    deathLegacy: "Prophet Yahya (AS) was martyred for his beliefs. He is honored in Islam, Christianity, and Judaism as a prophet who was pure from birth and who prepared the way for Isa (Jesus). His courage in speaking truth against injustice is remembered.",
    deathLegacyHinglish: "Nabi Yahya (AS) apne imanon ke liye shaheed huye. Wo Islam, Christianity aur Judaism mein ek Nabi ke taur par izzat di jaata hai jo paidaish se hi paak tha aur jisne Isa (Jesus) ke liye rasta tayyar kiya. Unki haqq ki baat bolne ki courage yaad ki jaati hai.",
    tafseerInsights: ["Classical scholars note Yahya's purity from birth as unique among prophets", "He is mentioned alongside Isa in the Quran as a prophet who prepared the way", "His martyrdom shows the price of speaking truth"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Yahya ki paidaish se hi purity unique hai anbiya mein", "Wo Quran mein Isa ke saath mention huye ek aise Nabi ke taur par jisne rasta tayyar kiya", "Unki shaheedgi haqq bolne ki keemat dikhata hai"],
    psychologicalAspects: "Yahya showed remarkable courage in confronting powerful rulers about their immoral behavior, even knowing it could cost him his life.",
    psychologicalAspectsHinglish: "Yahya ne powerful rulers ke saamna unke immoral behavior ke baare mein remarkable courage dikhai, ye jaankar ke iski keemat unki jaan ho sakti thi.",
    practicalApplications: ["Speaking truth against injustice is essential regardless of consequences", "Piety can be developed from a young age", "Preparing others for truth is a noble act"],
    practicalApplicationsHinglish: ["Na-insaafi ke khilaf haqq bolna essential hai consequences ke bawajood", "Taqwa chhoti umr se develop kiya ja sakta hai", "Dusron ko haqq ke liye tayyar karna noble act hai"],
    comparativeAnalysis: "Yahya is unique as the prophet who prepared the way for another prophet - a forerunner in the prophetic tradition."
  },
  {
    id: 24,
    nameArabic: "عيسى",
    nameEnglish: "Isa",
    nameTransliteration: "Isa (AS)",
    title: "The Messiah and Word of Allah (Kalimatullah)",
    titleHinglish: "Maseeh aur Allah ka Kalam (Kalimatullah)",
    nation: "The Children of Israel",
    nationHinglish: "Bani Israel",
    timePeriod: "Around 4 BCE - 30 CE",
    timePeriodHinglish: "Taqreeban 4 qabl e maseeh - 30 maseeh",
    story: `Isa (AS), known as Jesus in Christianity, is one of the greatest prophets in Islam. He was born miraculously to Maryam (Mary) without a father - Allah said "Be" and he was. This miracle demonstrates Allah's power to create as He wills.

Isa (AS) was given many miracles: he spoke as a baby in the cradle, healed the blind and lepers, raised the dead by Allah's permission, and knew what people had eaten and stored in their homes. He was supported by the Holy Spirit (Jibril).

Allah revealed the Gospel (Injeel) to Isa (AS). He called the Children of Israel back to the true teachings of the Torah and confirmed the Torah that came before him. He taught love, mercy, and compassion.

The Quran clearly states that Isa (AS) was not crucified. Instead, Allah raised him to heaven, and someone else was made to resemble him. Isa (AS) will return before the Day of Judgment to establish justice and defeat the Dajjal (Antichrist).`,
    storyHinglish: `Hazrat Isa (AS), jo Christianity mein Jesus ke naam se jaane jaate hain, Islam ke sab se bare anbiya mein se hain. Wo Maryam (Mary) ko mo'jizati taur par bina baap ke paida hue - Allah ne kaha "Kun" (Hoja) aur wo ho gaya. Ye mo'jiza Allah ki qudrat ko dikhata hai ke wo jaisa chaahe paida kar sakta hai.

Isa (AS) ko bohat se mo'jize diye gaye: unhon ne jhoole mein bachay ki haalat mein baat ki, andhon aur korhon ko shifa di, Allah ke hukm se murdon ko zinda kiya, aur jaante thay ke logon ne kya khaya aur unke gharon mein kya rakha hai. Unhein Rooh-ul-Quds (Jibril) ne madad ki.

Allah ne Isa (AS) par Injeel (Gospel) nazil ki. Unhon ne Bani Israel ko Taurat ki sachi ta'aleemat ki taraf wapas bulaya aur unki tasdeeq ki jo unse pehle aayi thi. Unhon ne mohabbat, rehmat aur hamdardi sikhayi.

Quran saaf saaf kehta hai ke Isa (AS) ko saleeb par nahi chadaya gaya. Balkay, Allah ne unhein aasman par utha liya, aur kisi aur ko unki shakal mein bana diya gaya. Isa (AS) Qayamat se pehle wapas aayenge taake insaaf qaim kar sakein aur Dajjal ko shikast de sakein.`,
    lessons: [
      "Allah's power is unlimited",
      "Show mercy and compassion to all",
      "Follow the true teachings of previous prophets",
      "Never claim divinity - Allah is One"
    ],
    lessonsHinglish: [
      "Allah ki qudrat be-had hai",
      "Sab par rehmat aur hamdardi dikhao",
      "Pehle anbiya ki sachi ta'aleemat par amal karo",
      "Kabhi khudai ka dawa mat karo - Allah ek hai"
    ],
    miracles: [
      "Born without a father",
      "Spoke as a baby in the cradle",
      "Healed the blind and lepers",
      "Raised the dead by Allah's permission",
      "Raised to heaven by Allah"
    ],
    miraclesHinglish: [
      "Bina baap ke paida hue",
      "Jhoole mein bachay ki haalat mein baat ki",
      "Andhon aur korhon ko shifa di",
      "Allah ke hukm se murdon ko zinda kiya",
      "Allah ke hukm se aasman par uthaye gaye"
    ],
    quranicRefs: ["Surah Maryam 19:16-36", "Surah Aal-E-Imran 3:45-59", "Surah An-Nisa 4:157-158"],
    characterTraits: ["Merciful", "Miraculous", "Humble"],
    characterTraitsHinglish: ["Reham dil", "Mo'jizati", "Aajiz"],
    earlyLife: "Prophet Isa (AS) was born to Maryam (Mary) in Bethlehem. His birth was miraculous - created from the word 'Kun' (Be) without a father. He was raised by Maryam and lived in Nazareth. From an early age, he was given wisdom and performed miracles.",
    earlyLifeHinglish: "Nabi Isa (AS) Maryam (Mary) ke Bethlehem mein paida hue. Unki paidaish mo'jizati thi - 'Kun' (Hoja) word se bina baap ke paida hue. Unhe Maryam ne paal aur Nazareth mein rahe. Chhoti umr se hi, unhein hikmat di gayi aur unhon ne mo'jize kiye.",
    family: "Prophet Isa (AS) was born to Maryam (Mary) without a father - a unique miracle. He had cousins and relatives through Maryam's family. He had disciples who followed his teachings.",
    familyHinglish: "Nabi Isa (AS) Maryam (Mary) se bina baap paida hue - ek unique mo'jiza. Unke cousins aur relatives Maryam ki family ke zariye the. Unhe disciples the jo unki teachings follow karte the.",
    prophecyTimeline: "Prophet Isa (AS) was born around 4 BCE and lived until around 30 CE. He was sent to the Children of Israel with the Gospel (Injeel). He called them back to monotheism and prepared them for the final prophet.",
    prophecyTimelineHinglish: "Nabi Isa (AS) taqreeban 4 Qabl E Maseeh paida hue aur taqreeban 30 Maseeh tak jeeya. Unhe Bani Israel ki taraf Injeel (Gospel) ke saath bheja gaya. Unhone unhe tauheed ki taraf bulaya aur aakhri Nabi ke liye tayyar kiya.",
    revelations: ["The Gospel (Injeel)", "Miraculous abilities from birth", "Knowledge given by Allah", "The truth about previous scriptures"],
    revelationsHinglish: ["Injeel (Gospel)", "Paidaish se mo'jizati abilities", "Allah ki taraf se diya gaya gyaan", "Previous scriptures ki sachai"],
    conflicts: ["Rejection by many Jews", "Being accused of blasphemy", "The threat of crucifixion", "Opposition from religious leaders"],
    conflictsHinglish: ["Kai Yahudiyon se reject", "Blasphemy ka ilzaam", "Saleeb ki dhamki", "Religious leaders se opposition"],
    companions: ["His mother Maryam", "His disciples/apostles", "Those who believed in his message"],
    companionsHinglish: ["Ma Maryam", "Unke disciples/apostles", "Jinhon par unka message imaan laaya"],
    enemies: ["The Jewish religious leaders", "Those who tried to crucify him", "Those who rejected his message"],
    enemiesHinglish: ["Jewish religious leaders", "Jinhon ne usse crucify karne ki koshish ki", "Jinhon ne unka message reject kiya"],
    deathLegacy: "Prophet Isa (AS) was raised to heaven by Allah and did not die on the cross. He will return before the Day of Judgment to defeat the Dajjal (Antichrist) and establish justice. He is a revered prophet in Islam, Christianity, and Judaism.",
    deathLegacyHinglish: "Nabi Isa (AS) ko Allah ne aasman par utha liya aur wo saleeb par nahi mare. Wo Qayamat se pehle wapas aayenge Dajjal (Antichrist) ko shikast dene aur insaaf qaim karne ke liye. Wo Islam, Christianity aur Judaism mein ek muhteram Nabi hain.",
    tafseerInsights: ["Classical scholars note Isa's unique birth without a father as evidence of Allah's power", "The Quran explicitly denies his crucifixion - a unique event in prophetic history", "His return is a major eschatological belief in Islam", "He represents the ideal of mercy and compassion in prophetic tradition"],
    tafseerInsightsHinglish: ["Classical scholars note karte hain Isa ki bina baap paidaish Allah ki taqat ki daleel hai", "Quran explicitly uski crucifixion deny karta hai - prophetic history mein unique event", "Unki return major eschatological belief hai Islam mein", "Wo prophetic tradition mein mercy aur compassion ki ideal represent karta hai"],
    psychologicalAspects: "Isa had to deal with rejection from his own people at a young age while being given immense responsibility. His message of love and mercy required psychological strength to spread against opposition.",
    psychologicalAspectsHinglish: "Isa ko apni hi qaum se chhoti umr mein reject ka saamna karna pada jab ke unhe immense responsibility di gayi thi. Mohabbat aur rehmat ka message spread karne ke liye opposition ke khilaaf psychological strength chahiye tha.",
    practicalApplications: ["Mercy and compassion are central Islamic values", "Miracles are from Allah, not from the prophet himself", "Following the truth even when rejected is essential", "The eventual triumph of truth over falsehood"],
    practicalApplicationsHinglish: ["Rehmat aur compassion central Islamic values hain", "Mo'jize Allah ki taraf se hain, Nabi apne aap se nahi", "Reject hone ke bawajood haqq par chalna essential hai", "Eventually haqq ki baatil par jeet"],
    comparativeAnalysis: "Isa represents a unique case among prophets - born without a father, given unique miracles, and will return before the Day of Judgment. He bridges the Abrahamic faiths."
  },
  {
    id: 25,
    nameArabic: "محمد",
    nameEnglish: "Muhammad",
    nameTransliteration: "Muhammad ﷺ",
    title: "The Final Prophet and Messenger of Allah (Khatamun-Nabiyyin)",
    titleHinglish: "Aakhri Nabi aur Allah ke Rasool (Khatamun-Nabiyyin)",
    nation: "All of Humanity",
    nationHinglish: "Tamam Insaaniyat",
    timePeriod: "570 CE - 632 CE (63 years)",
    timePeriodHinglish: "570 maseeh - 632 maseeh (63 saal)",
    story: `Muhammad ﷺ is the final prophet and messenger of Allah, sent as a mercy to all of humanity. He was born in Makkah in the Year of the Elephant to the noble Quraysh tribe. His father Abdullah died before his birth, and his mother Amina died when he was six years old. He was raised by his grandfather Abdul Muttalib and then his uncle Abu Talib.

Muhammad ﷺ was known for his honesty and trustworthiness even before prophethood, earning the titles "Al-Amin" (The Trustworthy) and "As-Sadiq" (The Truthful). At age 40, while meditating in the Cave of Hira, Angel Jibril appeared to him with the first revelation: "Read in the name of your Lord who created."

For 13 years in Makkah, he called people to worship Allah alone, facing persecution and hardship. In 622 CE, he migrated to Madinah where he established the first Islamic state. He fought defensive battles, made treaties, and continued to spread the message of Islam.

In 630 CE, he peacefully conquered Makkah and forgave his enemies. He performed the Farewell Pilgrimage in 632 CE, delivering his famous sermon on equality and human rights. He passed away in Madinah at age 63, leaving behind the Quran and his Sunnah as guidance for all humanity until the Day of Judgment.

Muhammad ﷺ is the most influential person in history. His life example (Sunnah) covers every aspect of life - worship, family, business, politics, and personal conduct. He is mentioned by name in the Quran and is praised as the "Mercy to the Worlds."`,
    storyHinglish: `Huzoor Muhammad ﷺ Allah ke aakhri Nabi aur Rasool hain, jo tamam insaaniyat ke liye rehmat ke taur par bheje gaye. Unka paidaish Makkah mein Saal-e-Fil mein sharif Quraysh qabeela mein hui. Unke waalid Abdullah unki paidaish se pehle inteqaal kar gaye, aur unki waalida Amina unke chhay saal ki umar mein inteqaal kar gayein. Unki parwarish unke dada Abdul Muttalib aur phir unke chacha Abu Talib ne ki.

Huzoor ﷺ nabuwwat se pehle bhi apni imaandari aur amaanatdaari ke liye mashhoor thay, jinhein "Al-Amin" (Amanatdaar) aur "As-Sadiq" (Sacha) ke laqab mile. 40 saal ki umar mein, Ghaar-e-Hira mein muraaqaba karte hue, Farishta Jibril unke paas aaye pehli wahi ke saath: "Parh apne Rab ke naam se jisne paida kiya."

Makkah mein 13 saal, unhon ne logon ko sirf Allah ki ibadat ki dawat di, zulm aur mushkilaat ka saamna kiya. 622 mein, unhon ne Madinah ki taraf hijrat ki jahan unhon ne pehli Islami riyasat qaim ki. Unhon ne defensi jangain ladein, muahiday kiye, aur Islam ka paigham phelana jari rakha.

630 mein, unhon ne Makkah par aman se fatah hasil ki aur apne dushmanon ko maaf kar diya. Unhon ne 632 mein Hajjatul Wada ki aur apne mashhoor khutbay mein masawaat aur insani huqooq par taqreer ki. Unka inteqaal 63 saal ki umar mein Madinah mein hua, Quran aur unki Sunnah ko tamam insaaniyat ke liye Qayamat tak hidayat ke taur par chhor kar.

Huzoor ﷺ tareekh mein sab se zyada asar rakhnay wale shakhs hain. Unki zindagi ki misaal (Sunnah) zindagi ke har pehlu ko cover karti hai - ibadat, khandan, karobar, siyasat, aur shakhsi raftaar. Unka Quran mein naam lekar zikr kiya gaya hai aur unhein "Rehmatul Lil Aalameen" ke taur par saraha gaya hai.`,
    lessons: [
      "Patience through hardship brings victory",
      "Forgiveness is more powerful than revenge",
      "Lead by example in all aspects of life",
      "Treat all people with justice and compassion",
      "The message of Islam is for all humanity"
    ],
    lessonsHinglish: [
      "Mushkilaat mein sabr fatah lata hai",
      "Maafi badle se zyada taqatwar hai",
      "Zindagi ke har pehlu mein misaal qaim karo",
      "Tamam logon ke saath insaaf aur hamdardi se pesh aao",
      "Islam ka paigham tamam insaaniyat ke liye hai"
    ],
    miracles: [
      "The Quran - the eternal miracle",
      "The Night Journey (Isra) and Ascension (Mi'raj)",
      "Splitting of the moon",
      "Water flowing from his fingers",
      "Multiplication of food",
      "Speaking to animals and objects"
    ],
    miraclesHinglish: [
      "Quran - abdi mo'jiza",
      "Shab-e-Me'raj (Isra aur Mi'raj)",
      "Chand ka shaqq hona",
      "Ungliyon se paani ka bahna",
      "Khane ki kasrat",
      "Jaanoar aur cheezon se baat karna"
    ],
    quranicRefs: ["Surah Al-Ahzab 33:40", "Surah Al-Fath 48:29", "Surah Al-Baqarah 2:151-152"],
    characterTraits: ["Merciful", "Just", "Patient", "Brave", "Wise"],
    characterTraitsHinglish: ["Reham dil", "Insaaf pasand", "Sabr karne wale", "Bahadur", "Hakeem"],
    earlyLife: "Prophet Muhammad ﷺ was born in Makkah on August 20, 570 CE (Rabi' al-Awwal 12, 53 AH) in the Year of the Elephant, coinciding with the attack on the Ka'bah by Abraha's army. He belonged to the noble Quraysh tribe, from the lineage of Prophet Ibrahim (AS) through his son Isma'il. His father Abdullah died before his birth, and his mother Amina passed away when he was only six years old. He was first raised by his grandfather Abdul Muttalib, and after his grandfather's death, by his uncle Abu Talib. From an early age, he was known for his exceptional honesty and integrity, earning the titles 'Al-Amin' (The Trustworthy) and 'As-Sadiq' (The Truthful). Even before prophethood, he was known for his noble character and was called upon to arbitrate disputes.",
    earlyLifeHinglish: "Nabi Muhammad ﷺ 20 August, 570 CE (Rabi' al-Awwal 12, 53 AH) ko Saal-e-Fil mein Makkah mein paida hue, jo Ka'bah par Abraha ki Fauj ke hamle ke saath coincide karta tha. Wo Quraysh ki sharif tribe se the, Nabi Ibrahim (AS) ki lineage se unke bete Isma'il ke zariye. Unke waalid Abdullah unki paidaish se pehle inteqal kar gaye, aur unki waalida Amina sirf chhay saal ki umar mein inteqal kar gayein. Unhein pehle unke dada Abdul Muttalib ne parwarish ki, aur baad mein unke chacha Abu Talib ne. Chhoti umar se hi, wo apni exceptional imaandari aur integrity ke liye mashhoor the, jinhein 'Al-Amin' (Amanatdaar) aur 'As-Sadiq' (Sacha) ke laqab mile. Nabuwwat se pehle bhi, wo apni noble character ke liye mashhoor the aur disputes ke liye bulaya jaata tha.",
    family: "Prophet Muhammad ﷺ had multiple wives, with Khadijah (RA) being his first and most beloved wife for 25 years until her death. He also married Aisha (RA), Hafsa (RA), and others later. He had children: Qasim (who died young), Fatima (the most beloved daughter), Ruqayyah, Umm Kulthum, and Ibrahim. His family relationships demonstrate both warmth and proper boundaries. His cousin Ali (RA) married his daughter Fatima, and his uncle Hamza was a close companion. His household included many sahabah (companions) who learned from his example daily.",
    familyHinglish: "Nabi Muhammad ﷺ ke bohat se biwiyan thi, Khadijah (RA) unki pehli aur 25 saal tak sab se pyari biwi thi jab tak wo nahi gayi. Unhon ne baad mein Aisha (RA), Hafsa (RA), aur doosriyan bhi ki. Unke bache hue: Qasim (jo chhoti umar mein mara gaya), Fatima (sab se pyari beti), Ruqayyah, Umm Kulthum, aur Ibrahim. Unke family relationships warmth aur proper boundaries dono demonstrate karte hain. Unke cousin Ali (RA) ne unki beti Fatima se shadi ki, aur unke chacha Hamza ek close companion the. Unke ghar mein bohat se sahabah (sahabi) the jo unki misal se rozana seekhte the.",
    prophecyTimeline: "Prophet Muhammad ﷺ received his first revelation at age 40 in 610 CE while meditating in the Cave of Hira. The prophethood lasted 23 years: 13 years in Makkah (610-622 CE) and 10 years in Madinah (622-632 CE). During Makkan period, he called his close family then the public to Islam, facing increasing persecution. The Hijrah (migration) to Madinah in 622 CE marked a turning point. In Madinah, he established the first Islamic state, formed alliances, engaged in battles, and received revelations covering all aspects of life. The Farewell Pilgrimage in 632 CE was his final Hajj. He passed away on June 8, 632 CE, at age 63.",
    prophecyTimelineHinglish: "Nabi Muhammad ﷺ ko 40 saal ki umar mein 610 CE mein Ghaar-e-Hira mein muraaqaba karte hue pehli wahi mili. Nabuwwat 23 saal rahi: 13 saal Makkah mein (610-622 CE) aur 10 saal Madinah mein (622-632 CE). Makkan period ke dauran, unhone apne close family ko phir public ko Islam ki dawat di, zulm ka saamna kiya. 622 CE mein Hijrah (migration) Madinah ki taraf turn point mark ki. Madinah mein, unhone pehli Islami riyasat qaim ki, alliances banayi, jangain mein hissa liya, aur zindagi ke har pehlu ko cover karne wali wahi receive ki. 632 CE mein Hajjatul Wada unki final Hajj thi. Unka inteqaal 8 June, 632 CE ko 63 saal ki umar mein hua.",
    revelations: ["The Quran - the complete divine scripture", "Various verses addressing specific situations and challenges", "Laws regarding worship, family, business, and governance", "Guidelines for social conduct and moral behavior", "Revelations about previous nations and their lessons", "The detailed aspects of Shariah law"],
    revelationsHinglish: ["Quran - poora ilahi scripture", "Mukhtalif verses jo specific situations aur challenges ko address karti hain", "Worship, family, business, aur governance ke laws", "Social conduct aur moral behavior ke guidelines", "Previous nations aur unke lessons ke baare mein revelations", "Shariah law ke detailed aspects"],
    conflicts: ["Early opposition from Quraysh leaders", "The boycott of early Muslims in Makkah", "Hostility from Jewish tribes in Madinah", "Battles against persecution (Uhud, Hunayn, etc.)", "Hypocrisy among some companions", "The opposition of Abu Lahab and other polytheists"],
    conflictsHinglish: ["Quraysh leaders se early opposition", "Makkah mein early Muslims par boycott", "Madinah mein Jewish tribes se hostility", "Persecution ke khilaaf jangain (Uhud, Hunayn, etc.)", "Kuch sahabah mein hypocrisy", "Abu Lahab aur doosri mushrikin ka opposition"],
    companions: ["Abu Bakr (RA) - closest friend and first caliph", "Umar (RA) - second caliph known for justice", "Uthman (RA) - third caliph who compiled the Quran", "Ali (RA) - cousin and fourth caliph", "Khadijah (RA) - first wife and supporter", "Bilal (RA) - first muezzin", "Abu Ubayda and other Ansar and Muhajirun"],
    companionsHinglish: ["Abu Bakr (RA) - close friend aur pehli caliph", "Umar (RA) - dosri caliph jo insaf ke liye mashhoor thi", "Uthman (RA) - teesri caliph jis ne Quran compile kiya", "Ali (RA) - cousin aur fourth caliph", "Khadijah (RA) - pehli biwi aur supporter", "Bilal (RA) - pehla muezzin", "Abu Ubayda aur doosre Ansar aur Muhajirun"],
    enemies: ["Abu Lahab - persistent enemy of the Prophet", "Abu Sufyan - leader of Quraysh opposition", "Jewish tribes (Banu Qaynuqa, Banu Nadir, Banu Qurayza)", "Hypocrites in Madinah led by Abdullah ibn Ubayy", "Polytheists of Makkah who persecuted early Muslims", "Heraclius (Byzantine Emperor) who acknowledged his prophecy"],
    enemiesHinglish: ["Abu Lahab - Nabi ke persistent dushman", "Abu Sufyan - Quraysh opposition ke leader", "Jewish tribes (Banu Qaynuqa, Banu Nadir, Banu Qurayza)", "Madinah mein hypocrites jis ki leadership Abdullah ibn Ubayy ne ki", "Makkah ke mushrikin jo early Muslims ko torture karte the", "Heraclius (Byzantine Emperor) jis ne unki nabuvat maani"],
    deathLegacy: "Prophet Muhammad ﷺ passed away on June 8, 632 CE (Rabi' al-Awwal 12, 11 AH) in Madinah, at age 63. He was buried in the room of Aisha (RA), where his tomb now stands as part of the Prophet's Mosque in Madinah. His legacy is unprecedented in human history - he transformed Arabia from a land of idol worship to the center of Islamic civilization. Over 1.8 billion Muslims worldwide follow his example. His Sunnah covers every aspect of life, and his hadith literature provides detailed guidance. The Quran was preserved under his guidance, and he established the foundations of the Islamic civilization that would spread across three continents.",
    deathLegacyHinglish: "Nabi Muhammad ﷺ 8 June, 632 CE (Rabi' al-Awwal 12, 11 AH) ko Madinah mein, 63 saal ki umar mein inteqal kar gaye. Unhein Aisha (RA) ke kamre mein dafn kiya gaya, jahan unka maqbara abhi Nabi ki Masjid Mein Madinah ka hissa hai. Unki virasat insani tareekh mein unprecedented hai - unhone Arab ko buton ki ibadat se Islami civilization ke center mein badal diya. Duniya bhar mein 1.8 billion Muslims unki misal follow karte hain. Unki Sunnah zindagi ke har pehlu ko cover karti hai, aur unki hadith literature detailed guidance provide karti hai. Quran unki guidance ke under preserve hua, aur unhone Islamic civilization ki foundations establish ki jo teen continents mein phaila.",
    tafseerInsights: ["Ibn Kathir emphasizes that the Prophet's mission was universal - for all of humanity, not just Arabs", "Classical scholars note that his forgiving nature was his greatest miracle after the Quran", "The Mi'raj (Ascension) is seen as the spiritual peak of his prophethood, establishing the five daily prayers", "His treatment of enemies shows that justice and mercy can coexist in Islamic governance", "The hadith 'Knowledge is the lost property of the believer' emphasizes the importance of seeking knowledge"],
    tafseerInsightsHinglish: ["Ibn Kathir emphasize karte hain ke Nabi ki mission universal thi - tamam insaaniyat ke liye, sirf Arab logon ke liye nahi", "Classical scholars note karte hain ke unka forgiving nature Quran ke baad un sabse bada mo'jiza tha", "Mi'raj (Ascension) unki nabuwwat ki spiritual peak ke taur par dekha jaata hai, jo five daily prayers establish karta hai", "Dushmanon ke saath unka treatment ye dikhata hai ke justice aur mercy Islami governance mein coexist kar sakte hain", "Hadith 'Ilm momin ka khoya hua mal hai' seeking knowledge ki importance emphasize karta hai"],
    psychologicalAspects: "The Prophet Muhammad ﷺ showed remarkable psychological depth throughout his mission. He experienced the full range of human emotions - joy with his family and companions, grief at the deaths of his beloved wife Khadijah and uncle Abu Talib, anger at injustice, and deep compassion for the suffering. His mental fortitude during the difficulties in Makkah, including the boycott and persecution, showed extraordinary patience. His emotional intelligence in dealing with different personalities - from enemies to companions to children - demonstrates his exceptional character. His vulnerability in prayer, often prostrating until dawn, showed his intimate relationship with Allah.",
    psychologicalAspectsHinglish: "Nabi Muhammad ﷺ ne apni mission throughout remarkable psychological depth dikhai. Unhone insani emotions ki poori range experience ki - family aur companions ke saath khushi, piyari biwi Khadijah aur chacha Abu Talib ki death par gham, zulm par gussa, aur suffering par deep compassion. Makkah ke mushkilaat ke dauran unki mental fortitude, boycott aur persecution sahit, ne extraordinary sabr dikha. Different personalities ke saath unki emotional intelligence - dushmanon se lekar companions aur bachon tak - unki exceptional character demonstrate karti hai. Unki prayer mein vulnerability, aksar subah tak sajde mein rehna, unka Allah ke saath intimate relationship dikhata hai.",
    practicalApplications: ["Following the Sunnah in daily life brings closer to Allah", "The Prophet's example shows how to balance mercy and justice", "Patience during difficulties leads to success", "Family relationships should be based on love and respect", "Education and seeking knowledge is mandatory for every Muslim", "The best community is one that follows the Prophet's way"],
    practicalApplicationsHinglish: ["Rozana ki zindagi mein Sunnah follow karna Allah ke qareeb lata hai", "Nabi ki misal ye dikhata hai ke mercy aur justice kaise balance karna hai", "Mushkilaat ke dauran sabr success ki taraf le jaata hai", "Family relationships pyaar aur respect par based honi chahiye", "Taaleem aur ilm talab karna har Muslim ke liye mandatory hai", "Sabse behtareen community wo hai jo Nabi ki raah follow karti hai"],
    comparativeAnalysis: "Unlike previous prophets who were sent to specific peoples, Muhammad ﷺ was sent as a universal messenger to all of humanity. Unlike earlier prophets whose missions ended with their deaths, his message continues to transform lives 1400 years later. His combination of political leadership, spiritual guidance, and military leadership was unique. He established both the religious and practical foundations for a complete way of life. His success in Madinah shows how Islamic principles can be implemented in society, creating a model for all future Islamic governments. He represents the perfect balance between mercy and justice, strength and compassion, law and love."
  }
];

export const getProphetById = (id: number): Prophet | undefined => {
  return prophets.find(p => p.id === id);
};

export default prophets;
