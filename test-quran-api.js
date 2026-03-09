const axios = require('axios');

const CLIENT_ID = 'acd683e8-d917-415c-b747-c6234380ce6c';
const CLIENT_SECRET = 'y8_dHVwM.cH0QQ.UF1-9qa-NG0';
const TOKEN_ENDPOINT = 'https://oauth2.quran.foundation/token';
const API_BASE = 'https://api.quran.com/api/v4';

async function testQuranAPI() {
    console.log('Testing Quran.com API integration...');

    try {
        // Step 1: Get access token
        console.log('1. Getting access token...');
        const tokenResponse = await axios.post(TOKEN_ENDPOINT, {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials'
        });

        const accessToken = tokenResponse.data.access_token;
        console.log('✅ Access token obtained');
        console.log('Token type:', tokenResponse.data.token_type);
        console.log('Expires in:', tokenResponse.data.expires_in, 'seconds');
        console.log('------------------------');

        // Step 2: Test API endpoints
        const headers = {
            'x-auth-token': accessToken,
            'x-client-id': CLIENT_ID,
            'Content-Type': 'application/json'
        };

        // Test 1: Get all chapters (surahs)
        console.log('2. Fetching all surahs...');
        const surahsResponse = await axios.get(`${API_BASE}/chapters`, {
            params: { language: 'en' },
            headers
        });

        console.log(`✅ Found ${surahsResponse.data.chapters.length} surahs`);
        console.log('First 5 surahs:');
        surahsResponse.data.chapters.slice(0, 5).forEach(surah => {
            console.log(`  - ${surah.id}: ${surah.name_simple} (${surah.name_arabic})`);
        });
        console.log('------------------------');

        // Test 2: Get a specific surah (Al-Fatiha)
        console.log('3. Fetching Surah Al-Fatiha (1)...');
        const surahResponse = await axios.get(`${API_BASE}/chapters/1`, {
            params: { language: 'en' },
            headers
        });

        console.log('✅ Surah retrieved');
        console.log('Name:', surahResponse.data.chapter.name_simple);
        console.log('Ayahs:', surahResponse.data.chapter.verses_count);
        console.log('Revelation place:', surahResponse.data.chapter.revelation_place);
        console.log('------------------------');

        // Test 3: Get ayahs from a surah
        console.log('4. Fetching ayahs from Surah Al-Fatiha (1)...');
        const ayahsResponse = await axios.get(`${API_BASE}/verses/by_chapter/1`, {
            params: { language: 'en', words: true },
            headers
        });

        console.log(`✅ Found ${ayahsResponse.data.verses.length} ayahs`);
        console.log('First ayah text:', ayahsResponse.data.verses[0].text_uthmani);
        console.log('------------------------');

        // Test 4: Search functionality
        console.log('5. Searching for "Allah" in Quran...');
        const searchResponse = await axios.get(`${API_BASE}/search`, {
            params: { q: 'Allah', language: 'en', size: 3 },
            headers
        });

        console.log(`✅ Found ${searchResponse.data.search.length} results`);
        searchResponse.data.search.slice(0, 3).forEach(result => {
            console.log(`  - ${result.verse_key}: ${result.text}`);
        });

        console.log('------------------------');
        console.log('✅ All API tests passed! The Quran.com API integration is working correctly.');

    } catch (error) {
        console.error('❌ API Error:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return false;
    }

    return true;
}

// Run the test
testQuranAPI().catch(console.error);
