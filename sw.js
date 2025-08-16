self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activate');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => {
    return new Response('オフラインです', { status: 503, statusText: 'Service Unavailable' });
  }));
});
