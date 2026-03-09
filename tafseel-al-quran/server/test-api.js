// Quick test of Quran.Foundation OAuth2 API
// Usage: node test-api.js

import axios from 'axios';

const CLIENT_ID = 'acd683e8-d917-415c-b747-c6234380ce6c';
const CLIENT_SECRET = 'y8_dHVwM.cH0QQ.UF1-9qa-NG0';
const TOKEN_URL = 'https://oauth2.quran.foundation/token';
const API_BASE = 'https://api.quran.com/api/v4';

async function main() {
    console.log('\n═══════════════════════════════════════════');
    console.log('  Tafseel-al-Qur\'an — API Verification Test');
    console.log('═══════════════════════════════════════════\n');

    // ── Test 1: Public API (no auth) ───────────────────────────────────────────
    console.log('Test 1: Public API /chapters (no auth)...');
    try {
        const r = await axios.get(`${API_BASE}/chapters`, {
            params: { language: 'en' },
            headers: { Accept: 'application/json' },
            timeout: 10000,
        });
        const ch = r.data.chapters?.[0];
        console.log(`  ✅ SUCCESS — ${r.data.chapters?.length} chapters returned`);
        console.log(`  First surah: ${ch?.name_simple} (${ch?.name_arabic})\n`);
    } catch (e) {
        console.log(`  ❌ FAILED — ${e.response?.status} ${e.message}\n`);
    }

    // ── Test 2: OAuth2 Token (production credentials) ─────────────────────────
    console.log('Test 2: OAuth2 token — Production credentials...');
    let token = null;
    try {
        const params = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        });

        const r = await axios.post(TOKEN_URL, params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            timeout: 8000,
        });

        token = r.data.access_token;
        const preview = token ? token.substring(0, 30) + '...' : 'null';
        console.log(`  ✅ SUCCESS — Token: ${preview}`);
        console.log(`  Expires in: ${r.data.expires_in}s\n`);
    } catch (e) {
        const status = e.response?.status;
        const body = JSON.stringify(e.response?.data);
        console.log(`  ⚠️  FAILED (${status}) — ${body || e.message}`);
        console.log('  → Will fall back to public API (still works!)\n');
    }

    // ── Test 3: Verses with auth (if token was obtained) ──────────────────────
    if (token) {
        console.log('Test 3: Verses for Al-Fatiha (surah 1) with Bearer token...');
        try {
            const r = await axios.get(`${API_BASE}/verses/by_chapter/1`, {
                params: { language: 'en', translations: 131, per_page: 10 },
                headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
                timeout: 10000,
            });
            console.log(`  ✅ SUCCESS — ${r.data.verses?.length} verses returned`);
            const v0 = r.data.verses?.[0];
            if (v0) console.log(`  Verse 1:1 Arabic: ${v0.text_uthmani?.substring(0, 40)}...\n`);
        } catch (e) {
            console.log(`  ❌ FAILED — ${e.response?.status} ${e.message}\n`);
        }
    }

    // ── Test 4: Pre-production OAuth2 ─────────────────────────────────────────
    console.log('Test 4: OAuth2 token — Pre-production credentials...');
    try {
        const params = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '8abdecbf-e0b7-49e2-92a4-ff6abccbb583',
            client_secret: 'lVm1mD7DG520uXuhvAYpgtrUdc',
        });
        const r = await axios.post('https://prelive-oauth2.quran.foundation/token', params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            timeout: 8000,
        });
        const t = r.data.access_token;
        console.log(`  ✅ SUCCESS — Token: ${t?.substring(0, 30)}...`);
    } catch (e) {
        const status = e.response?.status;
        const body = JSON.stringify(e.response?.data);
        console.log(`  ⚠️  FAILED (${status}) — ${body || e.message}`);
    }

    console.log('\n═══════════════════════════════════════════');
    console.log('  Test complete');
    console.log('═══════════════════════════════════════════\n');
}

main();
