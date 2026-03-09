import { quranService } from './src/services/quranService.js';

async function testQuranService() {
    console.log('=== Testing Quran Service ===');

    try {
        console.log('1. Testing getAllSurahs():');
        const surahsResponse = await quranService.getAllSurahs();
        console.log('   Success:', surahsResponse.success);
        if (surahsResponse.data) {
            console.log('   Surahs found:', surahsResponse.data.surahs.length);
            if (surahsResponse.data.surahs.length > 0) {
                console.log('   First 5 surahs:', surahsResponse.data.surahs.slice(0, 5).map(s => `${s.number}: ${s.nameEnglish}`));
            }
        } else {
            console.log('   Error:', surahsResponse.error);
        }

        console.log('\n2. Testing getSurah(1):');
        const surah1Response = await quranService.getSurah(1);
        console.log('   Success:', surah1Response.success);
        if (surah1Response.data) {
            console.log('   Surah 1:', surah1Response.data.nameEnglish);
            console.log('   Ayahs:', surah1Response.data.ayahCount);
        } else {
            console.log('   Error:', surah1Response.error);
        }

        console.log('\n3. Testing getAyahs(1):');
        const ayahsResponse = await quranService.getAyahs(1);
        console.log('   Success:', ayahsResponse.success);
        if (ayahsResponse.data) {
            console.log('   Ayahs found:', ayahsResponse.data.length);
            if (ayahsResponse.data.length > 0) {
                console.log('   First ayah:', ayahsResponse.data[0].arabicText);
            }
        } else {
            console.log('   Error:', ayahsResponse.error);
        }

    } catch (error) {
        console.error('\n=== ERROR ===');
        console.error(error);
    }
}

testQuranService();
