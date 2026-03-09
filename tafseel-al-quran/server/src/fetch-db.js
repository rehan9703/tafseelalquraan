import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_DIR = path.join(__dirname, 'database');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const downloadJSON = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Tafseel-al-Quran' } }, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed to download ${url} - Status: ${res.statusCode}`);
                res.resume();
                fs.unlink(dest, () => resolve());
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${path.basename(dest)}`);
                resolve();
            });
        }).on('error', err => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1';

async function importDatabase() {
    console.log("Starting Quran Database Import from GitHub...");
    await downloadJSON(`${BASE_URL}/info.json`, path.join(DB_DIR, 'info.json'));
    await downloadJSON(`${BASE_URL}/editions.json`, path.join(DB_DIR, 'editions.json'));

    // Core editions needed
    const editionsToDownload = ['eng-yusufaliorig', 'ara-quran-la', 'urd-muhammadjunagar'];

    for (const edition of editionsToDownload) {
        console.log(`Downloading ${edition} complete database...`);
        await downloadJSON(`${BASE_URL}/editions/${edition}.json`, path.join(DB_DIR, `${edition}.json`));
    }

    console.log('Database import completed successfully.');
}

importDatabase().catch(console.error);
