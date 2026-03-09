// Diagnostic: try to import the server and capture any startup errors
import('./src/index.js').catch(err => {
    console.error('=== STARTUP ERROR ===');
    console.error(err.message);
    console.error('--- STACK ---');
    console.error(err.stack);
    process.exit(1);
});
