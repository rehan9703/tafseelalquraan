// Minimal service worker for PWA installability
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple fetch handler to satisfy Chrome's PWA requirements
    event.respondWith(fetch(event.request));
});
