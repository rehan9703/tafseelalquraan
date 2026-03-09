export interface IslamicEvent {
  id: string;
  title: string;
  year: string;
  era: string;
  description: string;
  keyFigures: string;
  significance: string;
  category: string;
  iconType: string;
}

export const islamicEvents: IslamicEvent[] = [
  // ─── PRE-ISLAMIC ERA ───────────────────────────────────────────────
  {
    id: "year-of-elephant",
    title: "Year of the Elephant (Amul Fil)",
    year: "570 CE",
    era: "Pre-Islamic",
    description: "Abraha, the Abyssinian viceroy of Yemen, marched on Makkah with a large army and elephants to destroy the Ka'bah. Allah sent birds (Ababil) carrying stones of baked clay, which destroyed the army miraculously. This event is mentioned in Surah Al-Fil (Chapter 105).",
    keyFigures: "Abraha al-Ashram, Abyssinian Army",
    significance: "Demonstrated divine protection of the Ka'bah; occurred the same year Prophet Muhammad ﷺ was born.",
    category: "Miracle",
    iconType: "star"
  },
  {
    id: "birth-prophet",
    title: "Birth of Prophet Muhammad ﷺ",
    year: "570 CE",
    era: "Pre-Islamic",
    description: "Prophet Muhammad ﷺ was born in Makkah to Abdullah ibn Abd al-Muttalib and Aminah bint Wahb. His father had passed away before his birth. He was nursed by Halimah al-Sa'diyyah. Supernatural signs accompanied his birth, including a light that illuminated distant castles.",
    keyFigures: "Abdullah (father), Aminah (mother), Halimah al-Sa'diyyah (wet-nurse)",
    significance: "Birth of the Seal of Prophets, the greatest human being to walk the earth.",
    category: "Prophetic Life",
    iconType: "moon"
  },
  {
    id: "prophet-orphaned",
    title: "Prophet Becomes an Orphan",
    year: "576 CE",
    era: "Pre-Islamic",
    description: "Prophet Muhammad ﷺ lost his mother Aminah at the age of 6 while returning from a visit to his father's grave in Madinah. He was later cared for by his grandfather Abdul Muttalib, who also passed away two years later, leaving the Prophet in the care of his uncle Abu Talib.",
    keyFigures: "Aminah bint Wahb, Abdul Muttalib, Abu Talib",
    significance: "Shaped the Prophet's profound empathy for orphans; Allah revealed care for orphans in the Quran as a result.",
    category: "Prophetic Life",
    iconType: "moon"
  },
  {
    id: "hilf-al-fudul",
    title: "Hilf al-Fudul (Alliance of Virtue)",
    year: "590 CE",
    era: "Pre-Islamic",
    description: "Before prophethood, the young Muhammad ﷺ participated in a pact among noble Quraysh clans to protect the oppressed and ensure justice in Makkah. He later stated he would honor such an alliance even in Islam.",
    keyFigures: "Muhammad ﷺ (before prophethood), Zubayr ibn Abd al-Muttalib, various Quraysh nobles",
    significance: "Demonstrated the Prophet's innate sense of justice and ethics even before revelation began.",
    category: "Social Justice",
    iconType: "shield"
  },
  {
    id: "marriage-khadijah",
    title: "Marriage to Khadijah (RA)",
    year: "595 CE",
    era: "Pre-Islamic",
    description: "At age 25, Muhammad ﷺ married the noble businesswoman Khadijah bint Khuwaylid (RA), who was 40 years old and had proposed marriage based on his trustworthy character. She became his greatest supporter, the first Muslim, and the mother of all his surviving children.",
    keyFigures: "Khadijah bint Khuwaylid (RA), Waraqah ibn Nawfal",
    significance: "The most beloved marriage of the Prophet; Khadijah was the pillar of support through the most difficult early years of Islam.",
    category: "Prophetic Life",
    iconType: "heart"
  },

  // ─── REVELATION & EARLY ISLAM ──────────────────────────────────────
  {
    id: "first-revelation",
    title: "First Revelation in Cave of Hira",
    year: "610 CE",
    era: "Early Islam",
    description: "While in seclusion in the Cave of Hira on Jabal al-Noor, Angel Jibreel (AS) appeared to Muhammad ﷺ and commanded him to 'Read!' (Iqra). The first five verses of Surah Al-Alaq were revealed, marking the beginning of prophethood. The Prophet returned home trembling and was consoled by Khadijah (RA).",
    keyFigures: "Prophet Muhammad ﷺ, Angel Jibreel (AS), Khadijah (RA), Waraqah ibn Nawfal",
    significance: "The beginning of divine revelation; one of the most transformative moments in human history.",
    category: "Revelation",
    iconType: "book"
  },
  {
    id: "secret-dawah",
    title: "Secret Preaching of Islam",
    year: "610-613 CE",
    era: "Early Islam",
    description: "For the first three years, the Prophet ﷺ preached Islam secretly to close family and friends. The first Muslims were Khadijah (RA), Ali ibn Abi Talib (RA), Abu Bakr al-Siddiq (RA), and Zayd ibn Harithah (RA). Abu Bakr's efforts brought several notable companions to Islam.",
    keyFigures: "Khadijah (RA), Ali (RA), Abu Bakr (RA), Uthman ibn Affan (RA), Abd al-Rahman ibn Awf (RA), Sa'd ibn Abi Waqqas (RA)",
    significance: "Established the first Muslim community (Sahaba) who became the foundation of Islam's transmission.",
    category: "Dawah",
    iconType: "star"
  },
  {
    id: "open-preaching",
    title: "Open Preaching of Islam",
    year: "613 CE",
    era: "Early Islam",
    description: "Allah commanded 'Fa-sda' bima tu'mar' (So proclaim what you are commanded). The Prophet ﷺ climbed Mount Safa and called all of Makkah to testify to Islam. The Quraysh intensified their persecution of early Muslims in response.",
    keyFigures: "Prophet Muhammad ﷺ, Abu Lahab (who rejected the call)",
    significance: "Marked the transition from private to public dawah; led to the first organized persecution of Muslims.",
    category: "Dawah",
    iconType: "star"
  },
  {
    id: "first-hijrah-abyssinia",
    title: "First Hijrah to Abyssinia",
    year: "615 CE",
    era: "Early Islam",
    description: "Due to severe persecution in Makkah, the Prophet ﷺ advised a group of Muslims to emigrate to Abyssinia (Ethiopia), ruled by the just Christian king Negus (Ashama ibn Abjar). About 15 Muslims made the first Hijrah, later joined by more. Negus granted them protection after hearing Surah Maryam recited.",
    keyFigures: "Negus (Ashama ibn Abjar), Ja'far ibn Abi Talib (RA), Ruqayyah bint Muhammad (RA)",
    significance: "First Islamic migration; demonstrated Islam's compatibility with just governance; established precedent of seeking refuge.",
    category: "Migration",
    iconType: "shield"
  },
  {
    id: "year-of-sorrow",
    title: "Year of Sorrow (Aam al-Huzn)",
    year: "619 CE",
    era: "Early Islam",
    description: "Within a span of three months, the Prophet ﷺ lost his beloved wife Khadijah (RA) and his protective uncle Abu Talib. These losses left him deeply grieved and politically vulnerable in Makkah. Islam's enemies intensified their attacks without Abu Talib's tribal protection.",
    keyFigures: "Khadijah bint Khuwaylid (RA), Abu Talib ibn Abd al-Muttalib",
    significance: "The Prophet's greatest personal grief; demonstrated his human vulnerability and the importance of support systems.",
    category: "Prophetic Life",
    iconType: "moon"
  },
  {
    id: "isra-miraj",
    title: "Isra and Mi'raj (Night Journey & Ascension)",
    year: "621 CE",
    era: "Early Islam",
    description: "Allah transported the Prophet ﷺ from Masjid al-Haram to Masjid al-Aqsa in Jerusalem (Isra), then ascended him through the seven heavens (Mi'raj). He met previous prophets, saw paradise and hell, and received the command of five daily prayers directly from Allah. Originally 50 prayers were commanded, reduced to 5 through the intercession of Prophet Musa (AS).",
    keyFigures: "Prophet Muhammad ﷺ, Angel Jibreel (AS), Prophet Musa (AS), all prophets met in Jerusalem",
    significance: "The greatest miracle of the Prophet; established the five daily prayers; demonstrated Islam's spiritual reality.",
    category: "Miracle",
    iconType: "moon"
  },
  {
    id: "pledges-aqabah",
    title: "Pledges of Aqabah",
    year: "621-622 CE",
    era: "Early Islam",
    description: "Groups of men from the Aws and Khazraj tribes of Yathrib (Madinah) met the Prophet ﷺ at Aqabah during the Hajj season. In the First Pledge (621), 12 men swore not to associate partners with Allah. In the Second Pledge (622), 73 men and 2 women pledged to protect the Prophet as their own families.",
    keyFigures: "Mus'ab ibn Umayr (RA), As'ad ibn Zurarah (RA), Abdullah ibn Rawahah (RA)",
    significance: "Laid the foundation for the Hijrah to Madinah; marked the turning point when Islam gained a political home.",
    category: "Political",
    iconType: "shield"
  },

  // ─── MADINAH PERIOD ────────────────────────────────────────────────
  {
    id: "hijrah-madinah",
    title: "Hijrah to Madinah",
    year: "622 CE",
    era: "Madinah Period",
    description: "The Prophet ﷺ and Abu Bakr (RA) emigrated from Makkah to Madinah, hiding in the Cave of Thawr for three days while enemies searched. The spider's web and dove's nest miraculously concealed them. They arrived in Quba (entering Madinah) on Rabi' al-Awwal 12. This marks the beginning of the Islamic Hijri calendar.",
    keyFigures: "Prophet Muhammad ﷺ, Abu Bakr al-Siddiq (RA), Ali ibn Abi Talib (RA), Abdullah ibn Urayqit (guide)",
    significance: "Most important event in Islamic history after revelation; marks Year 1 AH of the Islamic calendar.",
    category: "Migration",
    iconType: "moon"
  },
  {
    id: "constitution-madinah",
    title: "Constitution of Madinah",
    year: "622 CE",
    era: "Madinah Period",
    description: "The Prophet ﷺ established the first written constitution in history, creating a multi-religious state with Muslims, Jews, and polytheists. It guaranteed religious freedom, mutual defense, and civic responsibilities. This document established Madinah as the first Islamic state.",
    keyFigures: "Prophet Muhammad ﷺ as head of state, all Madinah tribes",
    significance: "World's first written constitutional document; a model for pluralistic governance based on Islamic principles.",
    category: "Political",
    iconType: "shield"
  },
  {
    id: "change-qiblah",
    title: "Change of Qiblah to Ka'bah",
    year: "624 CE",
    era: "Madinah Period",
    description: "After praying toward Jerusalem for 16 months in Madinah, Allah commanded the Muslims to face the Ka'bah in Makkah as their Qiblah. The revelation came during the Zuhr prayer at Masjid al-Qiblatain (Mosque of the Two Qiblahs), and the congregation physically turned around mid-prayer.",
    keyFigures: "Prophet Muhammad ﷺ, Muslim community of Madinah",
    significance: "Established the Ka'bah as the eternal Qiblah; completed the differentiation of Islam from previous religions.",
    category: "Revelation",
    iconType: "moon"
  },
  {
    id: "battle-badr",
    title: "Battle of Badr",
    year: "624 CE",
    era: "Madinah Period",
    description: "The first major battle between 313 poorly-armed Muslims and a Quraysh army of ~1,000. Despite the odds, the Muslims won decisively. Allah sent angels to assist the believers. 70 Quraysh leaders were killed and 70 captured. This battle is called 'Yawm al-Furqan' (Day of Distinction) in the Quran.",
    keyFigures: "Prophet Muhammad ﷺ, Abu Bakr (RA), Umar (RA), Ali (RA), Hamza (RA); Abu Jahl (killed)",
    significance: "First military victory of Islam; proved that divine support outweighs material strength; mentioned extensively in the Quran (Surah Al-Anfal).",
    category: "Battle",
    iconType: "shield"
  },
  {
    id: "battle-uhud",
    title: "Battle of Uhud",
    year: "625 CE",
    era: "Madinah Period",
    description: "A Quraysh army of 3,000 attacked Madinah. Muslim archers on Mount Uhud violated the Prophet's command by leaving posts to collect spoils, causing a reversal. 70 companions were martyred, including Hamza ibn Abd al-Muttalib (RA), the Lion of Allah. The Prophet ﷺ was briefly wounded.",
    keyFigures: "Hamza ibn Abd al-Muttalib (RA, martyred), Prophet Muhammad ﷺ (wounded), Abu Dujana (RA), Khalid ibn al-Walid (then enemy commander)",
    significance: "Tested Muslim obedience and discipline; revealed that disobedience to the Prophet leads to defeat; contained major lessons about Tawakkul.",
    category: "Battle",
    iconType: "shield"
  },
  {
    id: "battle-khandaq",
    title: "Battle of the Trench (Khandaq)",
    year: "627 CE",
    era: "Madinah Period",
    description: "10,000 enemy forces besieged Madinah. On the suggestion of Salman al-Farisi (RA), Muslims dug a trench around the unprotected side of Madinah. The siege lasted ~27 days but the confederate army eventually retreated due to internal divisions and a fierce storm sent by Allah.",
    keyFigures: "Salman al-Farisi (RA, suggested trench), Nuaym ibn Masud (RA, strategic deception), Abu Sufyan (enemy commander)",
    significance: "Proved that strategic innovation in warfare is part of Islam; strategic brilliance of the Prophet ﷺ; final major Quraysh offensive against Madinah.",
    category: "Battle",
    iconType: "shield"
  },
  {
    id: "treaty-hudaybiyyah",
    title: "Treaty of Hudaybiyyah",
    year: "628 CE",
    era: "Madinah Period",
    description: "The Prophet ﷺ and 1,400 companions set out for Umrah but were stopped at Hudaybiyyah. A 10-year peace treaty was signed with Quraysh. Though the terms seemed unfavorable to Muslims (no Umrah that year), Allah called it a 'manifest victory' in the Quran. It allowed Islam to spread peacefully.",
    keyFigures: "Prophet Muhammad ﷺ, Uthman ibn Affan (RA, negotiator), Suhayl ibn Amr (Quraysh representative)",
    significance: "The Quran declared it a clear victory (Surah Al-Fath); enabled widespread Islamization of Arabia in the following two years.",
    category: "Political",
    iconType: "star"
  },
  {
    id: "letters-to-kings",
    title: "Letters to World Leaders",
    year: "628 CE",
    era: "Madinah Period",
    description: "After Hudaybiyyah, the Prophet ﷺ sent letters to major world leaders inviting them to Islam: Emperor Heraclius of Byzantium, Khosrow II of Persia, Negus of Abyssinia, Muqawqis of Egypt, and others. Some responded respectfully, others rejected the call.",
    keyFigures: "Prophet Muhammad ﷺ, Dihyah al-Kalbi (RA, messenger to Heraclius), Heraclius (Byzantine Emperor), Khosrow II (Sasanian)",
    significance: "Demonstrated Islam's universal mission; Heraclius reportedly acknowledged the Prophet's truthfulness after interrogating Abu Sufyan.",
    category: "Dawah",
    iconType: "star"
  },
  {
    id: "conquest-makkah",
    title: "Conquest of Makkah (Fath Makkah)",
    year: "630 CE",
    era: "Madinah Period",
    description: "After Quraysh violated the Treaty of Hudaybiyyah, the Prophet ﷺ marched on Makkah with 10,000 companions. Makkah fell without significant fighting. The Prophet ﷺ entered the Ka'bah, destroyed 360 idols, and declared a general amnesty for his former persecutors, saying 'No blame on you today.'",
    keyFigures: "Prophet Muhammad ﷺ, Abu Sufyan (accepted Islam before conquest), Bilal ibn Rabah (RA, gave Adhan from Ka'bah), Khalid ibn al-Walid (RA)",
    significance: "Greatest victory in Islamic history; cleared the Ka'bah of idols; demonstrated the Prophet's unparalleled mercy toward his enemies.",
    category: "Conquest",
    iconType: "star"
  },
  {
    id: "farewell-pilgrimage",
    title: "Hajjat al-Wada (Farewell Pilgrimage)",
    year: "632 CE",
    era: "Madinah Period",
    description: "The Prophet ﷺ performed his only Hajj with over 100,000 companions. At the plain of Arafat, he delivered the Farewell Sermon (Khutbat al-Wada) — a charter of human rights declaring equality of all humans, rights of women, prohibition of usury, and the completion of religion. The verse 'Today I have perfected your religion' was revealed.",
    keyFigures: "Prophet Muhammad ﷺ, over 100,000 Sahaba",
    significance: "Completion of Islam as a religion (Surah Al-Ma'idah 5:3); the Prophet's final comprehensive teaching to humanity.",
    category: "Prophetic Life",
    iconType: "moon"
  },
  {
    id: "passing-prophet",
    title: "Return of Prophet Muhammad ﷺ to Allah",
    year: "632 CE",
    era: "Madinah Period",
    description: "On Rabi al-Awwal 12, 11 AH, Prophet Muhammad ﷺ passed away in Madinah at age 63, in the arms of his beloved wife Aisha (RA). When news spread, Umar (RA) initially refused to believe it. Abu Bakr (RA) calmed the community by reciting: 'Muhammad is but a messenger...' He was buried in the room of Aisha (RA).",
    keyFigures: "Prophet Muhammad ﷺ, Aisha (RA), Abu Bakr al-Siddiq (RA), Umar ibn al-Khattab (RA)",
    significance: "The most sorrowful event in Islamic history; marked the end of prophethood and the beginning of Caliphate leadership.",
    category: "Prophetic Life",
    iconType: "moon"
  },

  // ─── RIGHTLY-GUIDED CALIPHS (KHULAFA RASHIDUN) ────────────────────
  {
    id: "abu-bakr-caliphate",
    title: "Caliphate of Abu Bakr al-Siddiq (RA)",
    year: "632-634 CE",
    era: "Rashidun Caliphate",
    description: "Abu Bakr (RA) was elected the first Caliph. He suppressed the Ridda Wars (wars against apostasy and false prophets), completed the compilation of the Quran into a single manuscript (Mushaf), expanded Islam into Persia and Byzantine territories, and maintained the unity of the Muslim ummah after the Prophet's death.",
    keyFigures: "Abu Bakr al-Siddiq (RA), Khalid ibn al-Walid (RA), Zayd ibn Thabit (RA, compiled Quran), Musaylimah al-Kadhdhab (false prophet defeated)",
    significance: "Preserved the unity of Islam; initiated the Quran's compilation; set the gold standard for Islamic governance.",
    category: "Caliphate",
    iconType: "shield"
  },
  {
    id: "umar-caliphate",
    title: "Caliphate of Umar ibn al-Khattab (RA)",
    year: "634-644 CE",
    era: "Rashidun Caliphate",
    description: "Under Umar (RA), the Islamic Caliphate expanded dramatically — conquering Persia, the Levant, Egypt, and parts of North Africa. He established the Hijri calendar, created administrative divisions (wilayat), built a welfare state with the Bayt al-Mal treasury, and entered Jerusalem with humility, guaranteeing Christians' safety.",
    keyFigures: "Umar ibn al-Khattab (RA), Khalid ibn al-Walid (RA), Amr ibn al-As (RA, conquered Egypt), Sa'd ibn Abi Waqqas (RA, conquered Persia)",
    significance: "Greatest territorial expansion of the early Islamic state; established Islamic administrative systems still influential today.",
    category: "Caliphate",
    iconType: "shield"
  },
  {
    id: "conquest-jerusalem",
    title: "Conquest of Jerusalem (Al-Quds)",
    year: "638 CE",
    era: "Rashidun Caliphate",
    description: "Caliph Umar (RA) personally traveled to Jerusalem to receive the city's surrender from Patriarch Sophronius. The city surrendered peacefully. Umar (RA) famously refused to pray inside the Church of the Holy Sepulchre to ensure it would not become a mosque, ensuring Christian rights.",
    keyFigures: "Umar ibn al-Khattab (RA), Abu Ubayda ibn al-Jarrah (RA), Patriarch Sophronius",
    significance: "Established Islamic rule over the Holy City with exceptional tolerance; guaranteed protection of Christian and Jewish sites.",
    category: "Conquest",
    iconType: "shield"
  },
  {
    id: "uthman-caliphate",
    title: "Caliphate of Uthman ibn Affan (RA)",
    year: "644-656 CE",
    era: "Rashidun Caliphate",
    description: "Uthman (RA) standardized the Quran into one official written form (Mushaf Uthmani), distributed it to all Islamic territories, and destroyed variant manuscripts. This preserved the Quran's integrity for all time. His caliphate also saw the Islamic navy established and further expansion into Armenia and Cyprus.",
    keyFigures: "Uthman ibn Affan (RA), Zayd ibn Thabit (RA), Said ibn al-As (RA)",
    significance: "The standardization of the Quran's written form — the most important preservation event in Islamic history after its revelation.",
    category: "Caliphate",
    iconType: "book"
  },
  {
    id: "ali-caliphate",
    title: "Caliphate of Ali ibn Abi Talib (RA)",
    year: "656-661 CE",
    era: "Rashidun Caliphate",
    description: "Ali (RA) became the fourth Caliph amid internal political crisis following Uthman's (RA) assassination. He faced significant internal conflicts including the Battle of the Camel and Battle of Siffin. Despite political turmoil, he was known for his exceptional knowledge, piety, and justice.",
    keyFigures: "Ali ibn Abi Talib (RA), Mu'awiyah ibn Abi Sufyan, Aisha (RA), Talha and Zubayr (RA)",
    significance: "Represented the fourth pillar of the Rashidun caliphate; his martyrdom marked the end of the Golden Age of Rightly Guided Caliphs.",
    category: "Caliphate",
    iconType: "shield"
  },

  // ─── UMAYYAD DYNASTY ───────────────────────────────────────────────
  {
    id: "umayyad-caliphate-founded",
    title: "Founding of Umayyad Caliphate",
    year: "661 CE",
    era: "Umayyad Period",
    description: "After Ali (RA)'s martyrdom, Mu'awiyah ibn Abi Sufyan established the Umayyad dynasty, moving the capital from Madinah to Damascus. The Umayyad caliphate ruled for nearly 90 years, expanding Islam to Spain in the west and Central Asia in the east.",
    keyFigures: "Mu'awiyah ibn Abi Sufyan (first Umayyad Caliph), Hasan ibn Ali (RA, abdicated)",
    significance: "Transition from elected to dynastic rule; marked major change in Islamic governance; Islam expanded to its greatest territorial extent.",
    category: "Caliphate",
    iconType: "shield"
  },
  {
    id: "martyrdom-hussain-karbala",
    title: "Martyrdom of Husayn (RA) at Karbala",
    year: "680 CE",
    era: "Umayyad Period",
    description: "Husayn ibn Ali (RA), the beloved grandson of the Prophet ﷺ, refused to pledge allegiance to Yazid ibn Mu'awiyah whom he saw as unjust. On the 10th of Muharram (Ashura) at Karbala in Iraq, Husayn (RA) and 72 companions were martyred by the Umayyad army of thousands. His head was taken to Damascus.",
    keyFigures: "Husayn ibn Ali (RA), Zaynab bint Ali (RA, his sister), Yazid ibn Mu'awiyah, Ubaydullah ibn Ziyad",
    significance: "One of the most tragic events in Islamic history; established the principle that one must stand against injustice regardless of consequence; led to the Shia-Sunni split.",
    category: "Battle",
    iconType: "moon"
  },
  {
    id: "conquests-spain",
    title: "Muslim Conquest of Spain (Al-Andalus)",
    year: "711 CE",
    era: "Umayyad Period",
    description: "Under the command of Tariq ibn Ziyad, 7,000 Muslim troops crossed from North Africa into Spain (named Andalus by Muslims). They defeated the Visigoth king Roderic at the Battle of Guadalete. Gibraltar (Jabal Tariq — 'Mountain of Tariq') is named after the commander. Within 7 years, most of Spain was under Muslim rule.",
    keyFigures: "Tariq ibn Ziyad (commander), Musa ibn Nusayr (Umayyad governor of North Africa), King Roderic (defeated)",
    significance: "Established the most culturally advanced civilization in medieval Europe; Al-Andalus became a beacon of science, poetry, and interfaith tolerance for 8 centuries.",
    category: "Conquest",
    iconType: "shield"
  },
  {
    id: "umar-ii-caliphate",
    title: "Reign of Umar ibn Abd al-Aziz (Umar II)",
    year: "717-720 CE",
    era: "Umayyad Period",
    description: "Known as the fifth Rightly Guided Caliph, Umar II abolished unjust taxes, returned confiscated property, ended discrimination against non-Arab Muslims, and created such economic justice that his treasurer reported they could find no poor person eligible for Zakat — the first and only time in Islamic history.",
    keyFigures: "Umar ibn Abd al-Aziz (Caliph), Raja ibn Haywa",
    significance: "A model of just Islamic governance; under his 3-year rule, so much prosperity was created that there were reportedly no Zakat recipients.",
    category: "Caliphate",
    iconType: "star"
  },

  // ─── ABBASID GOLDEN AGE ────────────────────────────────────────────
  {
    id: "abbasid-revolution",
    title: "Abbasid Revolution & Golden Age Begins",
    year: "750 CE",
    era: "Abbasid Period",
    description: "The Abbasid dynasty overthrew the Umayyads and moved the capital to Baghdad (founded 762 CE). The Abbasid era (750-1258 CE) became the Islamic Golden Age — Baghdad became the world's largest city and center of global learning. The House of Wisdom (Bayt al-Hikmah) translated Greek, Persian and Indian knowledge into Arabic.",
    keyFigures: "Abu al-Abbas al-Saffah (first Abbasid Caliph), Harun al-Rashid, Al-Ma'mun",
    significance: "Islamic Golden Age; Islam became the world's leading civilization in science, medicine, philosophy, mathematics, and astronomy.",
    category: "Scholarship",
    iconType: "book"
  },
  {
    id: "house-of-wisdom",
    title: "Bayt al-Hikmah (House of Wisdom)",
    year: "830 CE",
    era: "Abbasid Period",
    description: "Caliph Al-Ma'mun formalized and expanded the Bayt al-Hikmah in Baghdad into the world's greatest library and intellectual center. Scholars from all faiths and backgrounds translated Greek, Persian, Indian and Syrian texts. It preserved and advanced knowledge in mathematics, astronomy, medicine, chemistry, and philosophy.",
    keyFigures: "Caliph Al-Ma'mun, Al-Khwarizmi (inventor of algebra), Al-Kindi, Hunayn ibn Ishaq (chief translator), Thabit ibn Qurra",
    significance: "The foundation of modern science and mathematics; algorithms and algebra were invented here; Islamic scholars transmitted knowledge that sparked the European Renaissance.",
    category: "Scholarship",
    iconType: "book"
  },
  {
    id: "imam-bukhari",
    title: "Compilation of Sahih al-Bukhari",
    year: "846 CE",
    era: "Abbasid Period",
    description: "Imam Muhammad al-Bukhari completed his monumental Sahih al-Bukhari — universally regarded as the most authentic book after the Quran. He spent 16 years collecting over 600,000 hadiths and selected only 7,275 (with repetitions), performing ghusl and two rak'ahs before recording each hadith.",
    keyFigures: "Imam Muhammad ibn Ismail al-Bukhari",
    significance: "The most rigorously authenticated collection of Prophetic traditions; became the primary source of Islamic law and practice after the Quran.",
    category: "Scholarship",
    iconType: "book"
  },
  {
    id: "fall-baghdad",
    title: "Fall of Baghdad to Mongols",
    year: "1258 CE",
    era: "Abbasid Period",
    description: "Hulagu Khan's Mongol forces sacked Baghdad, executing Caliph Al-Musta'sim and massacring hundreds of thousands of inhabitants. The Tigris River reportedly ran black with ink from the manuscripts thrown into it, then red with blood. The Bayt al-Hikmah was destroyed, ending the Abbasid Caliphate.",
    keyFigures: "Hulagu Khan (Mongol commander), Caliph Al-Musta'sim (last Abbasid Caliph), Ibn al-Alqami (treacherous minister)",
    significance: "End of the Islamic Golden Age; the greatest catastrophe to befall the Muslim world since the Mongol invasions; marked the transition from the classical Islamic world.",
    category: "Battle",
    iconType: "shield"
  },

  // ─── MEDIEVAL & OTTOMAN ERA ────────────────────────────────────────
  {
    id: "saladin-jerusalem",
    title: "Saladin Recaptures Jerusalem (Al-Quds)",
    year: "1187 CE",
    era: "Medieval Period",
    description: "Sultan Salah al-Din al-Ayyubi (Saladin) defeated the Crusader Kingdom at the Battle of Hattin, then peacefully recaptured Jerusalem after 88 years of Crusader rule. Unlike the brutal Crusader conquest of 1099, Saladin protected Christian and Jewish lives, visited the sick, and released many prisoners.",
    keyFigures: "Salah al-Din al-Ayyubi (Saladin), Balian of Ibelin (Crusader commander), Richard the Lionheart (in subsequent Third Crusade)",
    significance: "Demonstrated Islamic values of mercy and justice in conquest; reclaimed the third holiest city of Islam; remains a model of chivalry even in Western tradition.",
    category: "Conquest",
    iconType: "star"
  },
  {
    id: "ottoman-founded",
    title: "Founding of the Ottoman Caliphate",
    year: "1299 CE",
    era: "Ottoman Period",
    description: "Osman I founded the Ottoman sultanate in Anatolia. His descendants would expand to create one of history's largest empires, lasting over 600 years. The Ottomans served as the protectors of the holy cities of Makkah and Madinah, and later assumed the title of Caliph after conquering Egypt in 1517.",
    keyFigures: "Osman I (founder), Orhan I, Murad I",
    significance: "Established the longest-lasting Islamic empire; became the dominant political power of the Muslim world for 600 years.",
    category: "Political",
    iconType: "shield"
  },
  {
    id: "conquest-constantinople",
    title: "Conquest of Constantinople",
    year: "1453 CE",
    era: "Ottoman Period",
    description: "Sultan Mehmed II ('the Conqueror') fulfilled the 800-year-old prophecy of the Prophet ﷺ by conquering Constantinople (now Istanbul) at age 21. The Hagia Sophia was converted to a mosque. This ended the Byzantine Empire and established the Ottomans as the preeminent global power.",
    keyFigures: "Sultan Mehmed II (al-Fatih), Emperor Constantine XI (last Byzantine), Ulubatli Hasan (planted Ottoman flag)",
    significance: "Fulfilled the Prophetic hadith; ended the Byzantine Empire; opened Eastern Europe to Islam; marked transition to the modern era.",
    category: "Conquest",
    iconType: "star"
  },
  {
    id: "ottoman-golden-age",
    title: "Ottoman Golden Age Under Suleiman the Magnificent",
    year: "1520-1566 CE",
    era: "Ottoman Period",
    description: "Sultan Suleiman al-Qanuni (the Magnificent) brought the Ottoman Empire to its peak — spanning from Algeria to Iraq, Hungary to Yemen. He reformed Islamic law, built magnificent mosques (including Suleymaniye), promoted arts and architecture, and his navy dominated the Mediterranean.",
    keyFigures: "Suleiman I (al-Qanuni), Sinan (royal architect), Ibrahim Pasha (grand vizier)",
    significance: "The zenith of Ottoman power; Islamic art, architecture, law, and culture achieved their highest expression in this era.",
    category: "Scholarship",
    iconType: "star"
  },

  // ─── MODERN ERA ────────────────────────────────────────────────────
  {
    id: "fall-ottoman-caliphate",
    title: "Abolition of the Ottoman Caliphate",
    year: "1924 CE",
    era: "Modern Period",
    description: "Following World War I and the collapse of the Ottoman Empire, Mustafa Kemal Ataturk abolished the Ottoman Caliphate on March 3, 1924. This ended 1,300 years of continuous Islamic caliphate. The last Caliph, Abdulmecid II, was exiled to France. This event sent shockwaves through the Muslim world.",
    keyFigures: "Mustafa Kemal Ataturk, Caliph Abdulmecid II (last Caliph), Aga Khan (led delegation seeking preservation)",
    significance: "The end of the institution of the Caliphate; one of the most significant geo-political events in modern Islamic history.",
    category: "Political",
    iconType: "shield"
  },
  {
    id: "establishment-pakistan",
    title: "Establishment of Pakistan — First Islamic Republic",
    year: "1947 CE",
    era: "Modern Period",
    description: "Under the leadership of Muhammad Ali Jinnah (Quaid-e-Azam), a Muslim-majority state was carved from British India on August 14, 1947. Pakistan was established as a homeland for Muslims of the subcontinent. Despite Partition's immense human cost, it was a landmark in modern Islamic political thought.",
    keyFigures: "Muhammad Ali Jinnah (Quaid-e-Azam), Allama Iqbal (philosophical founder), Liaquat Ali Khan",
    significance: "The first nation created explicitly as a homeland for Muslims; demonstrated that modern Islamic states could be established through democratic means.",
    category: "Political",
    iconType: "star"
  },
  {
    id: "organization-islamic-cooperation",
    title: "Founding of OIC (Organisation of Islamic Cooperation)",
    year: "1969 CE",
    era: "Modern Period",
    description: "Following the arson attack on Al-Aqsa Mosque in Jerusalem, Muslim leaders from 25 nations gathered in Rabat, Morocco, to form the Organisation of Islamic Cooperation — the largest international organization after the United Nations, representing 57 Muslim-majority countries.",
    keyFigures: "King Faisal of Saudi Arabia, King Hassan II of Morocco, Tunku Abdul Rahman (first Secretary-General)",
    significance: "Created a formal political bloc for the Muslim world; provides a platform for Muslim-majority nations on global issues including Palestine.",
    category: "Political",
    iconType: "shield"
  },
  {
    id: "revival-islamic-scholarship",
    title: "Global Islamic Scholarship Revival",
    year: "1900s-Present",
    era: "Modern Period",
    description: "The 20th and 21st centuries saw a profound revival of Islamic scholarship through figures like Shaikh Ibn Baz, Shaikh Ibn Uthaymeen, Shaikh Al-Albani, Sayyid Qutb, Mawdudi, Hamza Yusuf, Tariq Ramadan, and others. Digital technology enabled unprecedented access to Islamic learning globally — Quran apps, online fatawa, and digital halaqa circles now serve billions.",
    keyFigures: "Shaikh Ibn Baz (RA), Shaikh Al-Albani (RA), Shaikh Ibn Uthaymeen (RA), Dr. Sakr Ahmad, Yusuf al-Qaradawi",
    significance: "Renaissance of Islamic knowledge in the digital age; Islam remains the world's fastest-growing religion with over 1.8 billion adherents.",
    category: "Scholarship",
    iconType: "book"
  },
  {
    id: "completion-quran-preservation",
    title: "Quran — Preserved Through 14 Centuries",
    year: "610 CE – Present",
    era: "All Eras",
    description: "Allah promised in the Quran: 'Indeed, it is We who sent down the Quran and indeed, We will be its guardian' (15:9). The Quran is the only religious scripture in history to be memorized in its entirety by millions of people (Huffaz) in every century. Over 10 million Huffaz preserve it alive today across every continent.",
    keyFigures: "Prophet Muhammad ﷺ, Sahaba Kursam (early memorizers), Abu Bakr & Uthman (compilers), Millions of Huffaz worldwide",
    significance: "The living miracle of Islamic civilization — the unchanged word of Allah, preserved perfectly for over 1,400 years.",
    category: "Miracle",
    iconType: "book"
  },
  {
    id: "world-fastest-growing-religion",
    title: "Islam — World's Fastest Growing Religion",
    year: "21st Century",
    era: "Modern Period",
    description: "According to the Pew Research Center, Islam is the world's fastest-growing religion. By 2050, Muslims are projected to nearly equal Christians in number (~2.76 billion). In Western countries, thousands are accepting Islam each year. The message of Tawhid (monotheism) continues to resonate across cultures and civilizations.",
    keyFigures: "1.8+ billion Muslims worldwide",
    significance: "Fulfillment of the Prophetic statement: 'This religion will reach everywhere the night and day reaches' — Islam continues to spread across every continent.",
    category: "Dawah",
    iconType: "star"
  }
];

export const getAllEras = (): string[] => {
  const eras = islamicEvents.map(e => e.era);
  return [...new Set(eras)];
};

export const getAllCategories = (): string[] => {
  const categories = islamicEvents.map(e => e.category);
  return [...new Set(categories)];
};

export default islamicEvents;
