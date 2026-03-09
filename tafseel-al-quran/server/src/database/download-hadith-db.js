import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HADITH_DB_DIR = path.join(__dirname, 'hadiths');
if (!fs.existsSync(HADITH_DB_DIR)) fs.mkdirSync(HADITH_DB_DIR, { recursive: true });

const COLLECTIONS = [
    'bukhari',
    'muslim',
    'abudawud',
    'tirmidhi',
    'nasai',
    'ibnmajah'
];

const LANGUAGES = ['ara-', 'eng-', 'urd-'];
const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/';

const downloadFile = (filename) => {
    return new Promise((resolve, reject) => {
        const destPath = path.join(HADITH_DB_DIR, filename);

        // Skip if already exists
        if (fs.existsSync(destPath)) {
            console.log(`Skipping ${filename}, already exists.`);
            return resolve();
        }

        const url = `${BASE_URL}${filename}`;
        console.log(`Downloading ${filename}...`);

        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                console.log(`❌ Failed: HTTP ${res.statusCode} for ${filename}`);
                res.resume();
                return resolve(); // Skip failing ones
            }

            const fileStream = fs.createWriteStream(destPath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✅ Saved ${filename}`);
                resolve();
            });
            fileStream.on('error', (err) => {
                fs.unlink(destPath, () => reject(err));
            });
        }).on('error', (err) => {
            console.log(`❌ Network Error: ${err.message}`);
            resolve();
        });
    });
};

const run = async () => {
    console.log(`Starting Hadith database download to ${HADITH_DB_DIR}`);

    for (const collection of COLLECTIONS) {
        for (const langPrefix of LANGUAGES) {
            const filename = `${langPrefix}${collection}.min.json`;
            await downloadFile(filename);

            // Also download metadata endpoints if needed
        }
    }

    console.log("Hadith database downloads complete!");
};

run().catch(console.error);
