import axios from 'axios';

const QURAN_API_BASE = 'https://api.quran.com/api/v4';

async function testApi() {
    console.log('Testing connectivity to Quran.com API...');
    try {
        const response = await axios.get(`${QURAN_API_BASE}/chapters`, {
            params: { language: 'en' },
            timeout: 5000,
        });
        console.log('✅ Connected! Chapters found:', response.data.chapters.length);
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
    }
}

testApi();
