import quranApi from './src/config/quranApi.js';

async function testQuranAPI() {
    console.log('Testing Quran.com API integration...');

    try {
        // Step 1: Test getting all surahs
        console.log('1. Fetching all surahs...');
        const surahs = await quranApi.getAllSurahs();
        console.log(`✅ Found ${surahs.length} surahs`);
        console.log('First 5 surahs:');
        surahs.slice(0, 5).forEach(surah => {
            console.log(`  - ${surah.id}: ${surah.nameEnglish} (${surah.nameArabic})`);
        });
        console.log('------------------------');

        // Step 2: Test getting a specific surah
        console.log('2. Fetching Surah Al-Fatiha (1)...');
        const surah = await quranApi.getSurahById(1);
        console.log('✅ Surah retrieved');
        console.log('Name:', surah.nameEnglish);
        console.log('Ayahs:', surah.ayahCount);
        console.log('Revelation place:', surah.revelationType);
        console.log('------------------------');

        // Step 3: Test getting ayahs from a surah
        console.log('3. Fetching ayahs from Surah Al-Fatiha (1)...');
        const ayahs = await quranApi.getSurahAyahs(1);
        console.log(`✅ Found ${ayahs.length} ayahs`);
        console.log('First ayah text:', ayahs[0].arabicText);
        console.log('Translation:', ayahs[0].translationEN);
        console.log('------------------------');

        // Step 4: Test search functionality
        console.log('4. Searching for "Allah" in Quran...');
        const results = await quranApi.searchQuran('Allah');
        console.log(`✅ Found ${results.length} results`);
        results.slice(0, 3).forEach(result => {
            console.log(`  - ${result.surahId}:${result.ayahNumber}: ${result.translationEN}`);
        });

        console.log('------------------------');
        console.log('✅ All Quran API tests passed!');

    } catch (error) {
        console.error('❌ Quran API Error:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        } else if (error.request) {
            console.error('No response received');
        } else {
            console.error('Error:', error.message);
        }
        console.error('Stack:', error.stack);
        return false;
    }

    return true;
}

// Run the test
testQuranAPI().catch(console.error);
