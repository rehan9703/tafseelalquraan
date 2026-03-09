import axios from 'axios';

const CLIENT_ID = 'acd683e8-d917-415c-b747-c6234380ce6c';
const CLIENT_SECRET = 'y8_dHVwM.cH0QQ.UF1-9qa-NG0';
const TOKEN_ENDPOINT = 'https://oauth2.quran.foundation/token';
const API_BASE = 'https://api.quran.com/api/v4';

async function testSimpleAPI() {
    console.log('Testing Quran.com API simple endpoints...');

    try {
        console.log('1. Testing authentication endpoint:', TOKEN_ENDPOINT);
        try {
            const tokenResponse = await axios.post(TOKEN_ENDPOINT, {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'client_credentials'
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            console.log('✅ Authentication successful');
            console.log('Token type:', tokenResponse.data.token_type);
            console.log('Expires in:', tokenResponse.data.expires_in, 'seconds');
            console.log('------------------------');
        } catch (tokenError) {
            console.error('❌ Authentication failed');
            console.error('Status:', tokenError.response?.status);
            console.error('Data:', tokenError.response?.data);
            console.error('Headers:', tokenError.response?.headers);
            console.log('------------------------');
        }

        console.log('2. Testing public chapters endpoint:', `${API_BASE}/chapters`);
        try {
            const chaptersResponse = await axios.get(`${API_BASE}/chapters`, {
                params: { language: 'en' }
            });

            console.log('✅ Chapters endpoint successful');
            console.log('Number of chapters:', chaptersResponse.data.chapters?.length || 0);
            console.log('First chapter:', chaptersResponse.data.chapters?.[0]);
            console.log('------------------------');
        } catch (chaptersError) {
            console.error('❌ Chapters endpoint failed');
            console.error('Status:', chaptersError.response?.status);
            console.error('Data:', chaptersError.response?.data);
            console.log('------------------------');
        }

        console.log('3. Testing public verses endpoint:', `${API_BASE}/verses/by_chapter/1`);
        try {
            const versesResponse = await axios.get(`${API_BASE}/verses/by_chapter/1`, {
                params: {
                    language: 'en',
                    translations: 131,
                    translation_fields: 'text',
                    per_page: 300
                }
            });

            console.log('✅ Verses endpoint successful');
            console.log('Number of verses:', versesResponse.data.verses?.length || 0);
            console.log('First verse:', versesResponse.data.verses?.[0]);
            console.log('------------------------');
        } catch (versesError) {
            console.error('❌ Verses endpoint failed');
            console.error('Status:', versesError.response?.status);
            console.error('Data:', versesError.response?.data);
            console.log('------------------------');
        }

    } catch (error) {
        console.error('❌ General error:', error);
    }
}

testSimpleAPI().catch(console.error);
