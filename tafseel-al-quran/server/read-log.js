import fs from 'fs';
const content = fs.readFileSync('out.log', 'utf8');
console.log(content);
