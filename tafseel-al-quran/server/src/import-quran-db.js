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
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed to download ${url} - Status: ${res.statusCode}`);
                res.resume();
                return resolve();
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                fs.writeFileSync(dest, data);
                console.log(`Downloaded ${path.basename(dest)}`);
                resolve();
            });
        }).on('error', err => reject(err));
    });
};

const BASE_URL = 'https://raw.githubusercontent.com/fawazahmed0/quran-api/1';

async function importDatabase() {
    console.log("Starting Quran Database Import from fawazahmed0/quran-api...");

    // Download basic info
    await downloadJSON(`${BASE_URL}/info.json`, path.join(DB_DIR, 'info.json'));

    // Download editions list
    await downloadJSON(`${BASE_URL}/editions.json`, path.join(DB_DIR, 'editions.json'));

    // Download English and Arabic core databases
    const editionsToDownload = ['eng-yusufaliorig', 'ara-quran-la', 'urd-muhammadjunagar'];

    for (const edition of editionsToDownload) {
        console.log(`Downloading ${edition} complete database...`);
        await downloadJSON(`${BASE_URL}/editions/${edition}.json`, path.join(DB_DIR, `${edition}.json`));
    }

    console.log('Database import completed successfully.');
}

importDatabase().catch(console.error);
